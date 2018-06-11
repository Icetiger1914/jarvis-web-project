var mainPage = require('../web-components/mainpage.js')
var Menu = require('../web-components/menu-components')
var HomePage = function() {
  Menu()
  mainPage()
}

module.exports = HomePage
