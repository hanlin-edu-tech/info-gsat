module.exports = {
  publicPath: (process.env.NODE_ENV === 'production') || (process.env.NODE_ENV === 'test') ? './' : '/',
  assetsDir: 'static',
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  },
  pages: {
    download: {
      entry: './src/pages/download/main.js',
      filename: 'download.html',
      title: 'GSAT-Download'
    },

    intro: {
      entry: './src/pages/intro/main.js',
      filename: 'intro.html',
      title: 'GSAT-Intro'
    },

    timeline: {
      entry: './src/pages/timeline/main.js',
      filename: 'timeline.html',
      title: 'GSAT-Timeline'
    },
  }
}
