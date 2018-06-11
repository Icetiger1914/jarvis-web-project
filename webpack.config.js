var path = require('path')

var APP_DIRECTORY = path.join(__dirname, 'app')
var JS_DIRECTORY = path.join(__dirname, 'js')

module.exports = {
  context:  JS_DIRECTORY,
  entry: './main2',

  output: {
      path: APP_DIRECTORY,
      filename: 'bundle.js'
  },
  
  resovle: {
    extensions: ['.js','.cs']
  }
  
}
