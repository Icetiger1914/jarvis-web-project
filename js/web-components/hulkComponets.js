var hulkContainer = require('./hulkContainer.js')

var getHulk = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4 && req.status == 200)  { 

     hulkContainer(JSON.parse(this.responseText)) 
        }
    
  
  }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}

module.exports = getHulk
