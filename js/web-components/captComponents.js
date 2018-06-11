var captContainer = require('./captContainer.js')

var getCapt = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4 && req.status == 200)  { 

     captContainer(JSON.parse(this.responseText)) 
        }
    
  
  }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}

module.exports = getCapt
