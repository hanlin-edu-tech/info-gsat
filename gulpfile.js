const gulp = require('gulp')
const { Storage } = require('@google-cloud/storage')
const cache = require('gulp-cache')
const imageMin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const fs = require('fs').promises
const path = require('path')
const gcPub = require("gulp-gcloud-publish");

const bucketNameForTest = "tutor-test-info";
const bucketNameForProd = "tutor-infos";
const projectId = "tutor-204108";
const projectIdTest = "tutor-test-238709";
const keyFileName = "tutor.json";
const keyFileNameTest = "tutor-test.json";
const projectName = "infos/gsat/";

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

let uploadGCSProd = bucketName => {
  return gulp
    .src(["dist/**/*"], {
      base: `${__dirname}/dist/`
    })
    .pipe(
      gcPub({
        bucket: bucketName,
        keyFilename: keyFileName,
        base: projectName,
        projectId: projectId,
        public: true,
        metadata: {
          cacheControl: "no-store, no-transform"
        }
      })
    );
};

let uploadGCSTest = bucketName => {
  return gulp
    .src(["dist/**/*"], {
      base: `${__dirname}/dist/`
    })
    .pipe(
      gcPub({
        bucket: bucketName,
        keyFilename: keyFileNameTest,
        base: projectName,
        projectId: projectIdTest,
        public: true,
        metadata: {
          cacheControl: "no-store, no-transform"
        }
      })
    );
};

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
gulp.task("uploadGcsTest", uploadGCSTest.bind(uploadGCSTest, bucketNameForTest));
gulp.task("uploadGcsProd", uploadGCSProd.bind(uploadGCSProd, bucketNameForProd));

/* 部署 */
// gulp.task('deployToTest',
//   gulp.series('minifyImage', 'uploadToGcsTest')
// )

// gulp.task('deployToProduction',
//   gulp.series('minifyImage', 'uploadToGcsProduction')
// )
