const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "index.scss";',
        includePaths: [path.resolve(__dirname, './src/assets/styles/')]
      }
    }
  }
}
