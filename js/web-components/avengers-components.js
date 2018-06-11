var mkCB = require('./homeCards.js')
var createCard = require('./card-components')
var getHero = require('./get-hero')
var getAvengers = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4) {
      mkCB()
      // createCard(JSON.parse(this.responseText)) 
        }
    
  
  }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}

module.exports = getAvengers
