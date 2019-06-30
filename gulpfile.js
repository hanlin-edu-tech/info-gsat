const gulp = require('gulp')
const { Storage } = require('@google-cloud/storage')
const cache = require('gulp-cache')
const imageMin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const fs = require('fs').promises
const path = require('path')

const distDir = path.join(__dirname, 'dist/')
const findAllUploadFilesPath = async (dir, multiDistEntireFilePath = []) => {
  const files = await fs.readdir(dir)

  for (let file of files) {
    const entireFilepath = path.join(dir, file)
    const fileStatus = await fs.stat(entireFilepath)

    if (fileStatus.isDirectory()) {
      multiDistEntireFilePath = await findAllUploadFilesPath(entireFilepath, multiDistEntireFilePath)
    } else {
      multiDistEntireFilePath.push(entireFilepath)
    }
  }

  return multiDistEntireFilePath
}

const uploadToGCS = async bucketName => {
  const storage = new Storage({
    projectId: 'tutor-204108',
    keyFilename: './tutor.json'
  })

  const multiDistEntireFilePath = await findAllUploadFilesPath(distDir)
  multiDistEntireFilePath.forEach(distEntireFilePath => {
    storage.bucket(bucketName).upload(distEntireFilePath,
      {
        destination: `/infos/gsat/${distEntireFilePath.replace(distDir, '')}`,
        metadata: {
          cacheControl: 'no-cache',
        },
        public: true
      },
      (err, file) => {
        console.log(`Upload ${file.name} successfully`)
      }
    )
  })
}

const minifyImage = sourceImage => {
  return gulp
    .src(sourceImage, { base: './src' })
    .pipe(cache(imageMin({
      use: [pngquant({
        speed: 7
      })]
    })))
    .pipe(gulp.dest('./dist'))
}

gulp.task('minifyImage', minifyImage.bind(minifyImage, './src/static/img/**/*.@(jpg|png)'))

/* 上傳 GCS */
gulp.task('uploadToGcsTest', uploadToGCS.bind(uploadToGCS, 'tutor-infos-test/'))
gulp.task('uploadToGcsProduction', uploadToGCS.bind(uploadToGCS, 'tutor-infos/'))

/* 部署 */
gulp.task('deployToTest',
  gulp.series('minifyImage', 'uploadToGcsTest')
)

gulp.task('deployToProduction',
  gulp.series('minifyImage', 'uploadToGcsProduction')
)
