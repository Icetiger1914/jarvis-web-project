


var createContainer = require('./testContainer.js')

var getIron = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4 && req.status == 200)  { 

     createContainer(JSON.parse(this.responseText)) 
        }
    
  
  }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}

module.exports = getIron

