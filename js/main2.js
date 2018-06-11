
var root = 'http://tolson.tgb.ninja:3000/#';
var useHash = true; 
var hash = '#'; 
var router = new Navigo(root, useHash, hash);
var HomePage = require('./web-pages/home-page.js')
var AvengersPage = require('./web-pages/avengers-page.js')
var captPage = require('./web-pages/captpage')
var hulkPage = require('./web-pages/hulkpage.js')
var spiderPage = require('./web-pages/spiderpage.js')
var visionPage = require('./web-pages/visionpage.js')
var IronmanPage = require('./web-pages/ironpage.js')

router
  .on(function () {
    document.getElementById('content').innerHTML = ''
    HomePage()  
  })
  
    .on({
      'iron-man' : function () {
      document.getElementById('content').innerHTML = ''
        AvengersPage()  
        IronmanPage()
      },
      
        'spider-man' : function () {
      document.getElementById('content').innerHTML = ''
        AvengersPage() 
        spiderPage()  
      },
        'vision' : function () {
      document.getElementById('content').innerHTML = ''
        AvengersPage()
        visionPage()

      },
        'hulk' : function () {
      document.getElementById('content').innerHTML = ''
        AvengersPage()
          hulkPage()
      },
        'captain-america' : function () {
      document.getElementById('content').innerHTML = ''
        AvengersPage()
        captPage()
      }
      
    })
    .resolve();
      

