/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var Menu = function() {

var content = document.getElementById('content')

  let nav = document.createElement('div')
  nav.className = 'w3-bar w3-red'

  let home = document.createElement('a')
  home.className = 'w3-bar-item w3-button'
  home.href = '#'
  home.innerHTML = 'Home'
  nav.append(home)

  let iron_nav = document.createElement('a')
  iron_nav.className = 'w3-bar-item w3-button'
  iron_nav.href = '#/iron-man'
  iron_nav.innerHTML = 'Iron Man'
  nav.append(iron_nav)
  content.append(nav)
  
  
  let spider_nav = document.createElement('a')
  spider_nav.className = 'w3-bar-item w3-button'
  spider_nav.href = '#/spider-man'
  spider_nav.innerHTML = 'Spider-man'
  nav.append(spider_nav)
  content.append(nav)
 
  let vision_nav = document.createElement('a')
  vision_nav.className = 'w3-bar-item w3-button'
  vision_nav.href = '#/vision'
  vision_nav.innerHTML = 'Vision'
  nav.append(vision_nav)
  content.append(nav)
  
  let hulk_nav = document.createElement('a')
  hulk_nav.className = 'w3-bar-item w3-button'
  hulk_nav.href = '#/hulk'
  hulk_nav.innerHTML = 'Hulk'
  nav.append(hulk_nav)
  content.append(nav)
  
  let capt_nav = document.createElement('a')
  capt_nav.className = 'w3-bar-item w3-button'
  capt_nav.href = '#/captian-america'
  capt_nav.innerHTML = 'Captian America'
  nav.append(capt_nav)
  content.append(nav)



}

module.exports = Menu


/***/ },
/* 1 */
/***/ function(module, exports) {


var mkCB = function() {
  var content = document.getElementById('content')
  var img = document.createElement('img')
  var cardButton = document.createElement('a')
  cardButton.className = 'w3-btn w3-white w3-ripple'
  cardButton.href = '#/iron-man'
  cardButton.style.width = '50%'
  img.src = '/assets/ironman.jpg'
  img.style.width = '100%'
  cardButton.append(img)
  content.append(cardButton)

}

module.exports = mkCB


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(0)
var getAvengers = __webpack_require__(13)
var mkCB = __webpack_require__(1)

var AvengersPage = function() {  
  Menu()
  

 // getAvengers({all:true})
}

module.exports = AvengersPage


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(0)
var getCapt = __webpack_require__(14)
var captPage = function() {
  getCapt()
}

module.exports = captPage


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var mainPage = __webpack_require__(20)
var Menu = __webpack_require__(0)
var HomePage = function() {
  Menu()
  mainPage()
}

module.exports = HomePage


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(0)
var getHulk = __webpack_require__(18)
var hulkPage = function() {
  getHulk()
}

module.exports = hulkPage


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(0)
var getIron = __webpack_require__(24)
var IronmanPage = function() {
  getIron()
}

module.exports = IronmanPage


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(0)
var getSpider = __webpack_require__(21)
var spiderPage = function() {
  getSpider()
}

module.exports = spiderPage


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var Menu = __webpack_require__(0)
var getVision = __webpack_require__(25)
var visionPage = function() {
  getVision()
}

module.exports = visionPage


/***/ },
/* 9 */
/***/ function(module, exports) {

var captainCard = function() {
  var content = document.getElementById('content')
  var img = document.createElement('img')
  var cardButton = document.createElement('a')
  cardButton.className = 'w3-btn w3-white w3-ripple'
  cardButton.href = '#/captain-america'
  cardButton.style.width = '50%'
  img.src = '/assets/captianA.jpg'
  img.style.width = ''

  cardButton.append(img)

  content.append(cardButton)

}

module.exports = captainCard


/***/ },
/* 10 */
/***/ function(module, exports) {

var hulkCard = function() {
  var content = document.getElementById('content')
  var img = document.createElement('img')
  var cardButton = document.createElement('a')
  cardButton.className = 'w3-btn w3-white w3-ripple'
  cardButton.href = '#/hulk'
  cardButton.style.width = '50%'
  img.src = '/assets/hulk.jpg'
  img.style.width = '100%'

  cardButton.append(img)

  content.append(cardButton)

}

module.exports = hulkCard


/***/ },
/* 11 */
/***/ function(module, exports) {

var spiderCard = function() {
var content = document.getElementById('content')
var img = document.createElement('img')
var cardButton = document.createElement('a')
cardButton.className = 'w3-btn w3-white w3-ripple'
cardButton.href = '#/spider-man'
cardButton.style.width = '50%'
img.src = '/assets/spiderman.jpg'
img.style.width = '100%'

cardButton.append(img)

content.append(cardButton)

}

module.exports = spiderCard


/***/ },
/* 12 */
/***/ function(module, exports) {

var visionCard = function() {
var content = document.getElementById('content')
var img = document.createElement('img')
var cardButton = document.createElement('a')
cardButton.className = 'w3-btn w3-white w3-ripple'
cardButton.href = '#/vision'
cardButton.style.width = '50%'
img.src = '/assets/Vision.jpg'
img.style.width = '100%'

cardButton.append(img)

content.append(cardButton)

}

module.exports = visionCard


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var mkCB = __webpack_require__(1)
var createCard = __webpack_require__(16)
var getHero = __webpack_require__(17)
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


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var captContainer = __webpack_require__(15)

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


/***/ },
/* 15 */
/***/ function(module, exports) {

var content = document.getElementById('content')

var captContainer = function(arr) {
  for (var x=0; x<arr.length; x++) {


  var container = document.createElement('div')
  container.className = 'w3-container w3-black'
  container.style.width = '100%'
  
  if(arr[x].name == 'Captain America') {


    var containerName = document.createElement('h1')
    var containerDes = document.createElement('h2')
    var containerComics = document.createElement('h5')
    var containerEvents = document.createElement('h6')
    
    containerName.innerHTML = arr[x].name
    containerDes.innerHTML = arr[x].description
    containerComics.innerHTML = arr[x].id
    containerEvents.innerHTML = arr[x].modified


    container.append(containerName)
    container.append(containerDes)
    container.append(containerComics)
    container.append(containerEvents)
    content.append(container)
  }
  }

}

module.exports = captContainer


/***/ },
/* 16 */
/***/ function(module, exports) {


var createCard = function(arr) {
  for (var x=0; x<arr.length; x++) {
           var card = document.createElement('div')
           card.style.width = '20%'
           card.className = 'w3-card-4'

           var img = document.createElement('img')
           if(arr[x].name == 'Vision') {
             img.src = '/assets/Vision.jpg'
           }
           else if(arr[x].name == 'Spider-Man') {
             img.src = '/assets/spiderman.jpg'
           }
           else if(arr[x].name == 'Hulk') {
             img.src = '/assets/hulk.jpg'
           } 
           else if(arr[x].name == 'Captain America') {
             img.src = '/assets/captianA.jpg'
           } 
           else if(arr[x].name == 'Iron Man') {
             img.src = '/assets/ironman.jpg'
           }
           img.style.width = '100%'
                     card.append(img)

           var cardContainer = document.createElement('div')
           cardContainer.className = 'w3-container w3-center'
           card.append(cardContainer)

           var note = document.createElement('p')
           note.innerHTML = arr[x].description
           cardContainer.append(note)

           

           content.append(card)


  }
}

module.exports = createCard



/***/ },
/* 17 */
/***/ function(module, exports) {

var getHero = function() {
   for (var x=0; x<arr.length; x++) {
           var content = document.getElementById('content')
           var card = document.createElement('div')
           card.style.width = '20%'
           card.className = 'w3-card-4'

           var img = document.createElement('img')
           var cbutton = document.createElement('button')
           cbutton.innerHTML = 'Get Details'
           cbutton.className = 'w3-button w3-black'
           if(arr[x].name == option.name) {
             img.src = '/assets/ironman.jpg'
           }
           img.style.width = '100%'
           card.append(img)

           var cardContainer = document.createElement('div')
           cardContainer.className = 'w3-container w3-center'
           card.append(cardContainer)

           var note = document.createElement('p')
           note.innerHTML = arr[x].description
           cardContainer.append(note)

           
           content.append(card)

   }
}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var hulkContainer = __webpack_require__(19)

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


/***/ },
/* 19 */
/***/ function(module, exports) {

var content = document.getElementById('content')

var hulkContainer = function(arr) {
  for (var x=0; x<arr.length; x++) {


  var container = document.createElement('div')
  container.className = 'w3-container w3-black'
  container.style.width = '100%'
  
  if(arr[x].name == 'Hulk') {


    var containerName = document.createElement('h1')
    var containerDes = document.createElement('h2')
    var containerComics = document.createElement('h5')
    var containerEvents = document.createElement('h6')
    
    containerName.innerHTML = arr[x].name
    containerDes.innerHTML = arr[x].description
    containerComics.innerHTML = arr[x].id
    containerEvents.innerHTML = arr[x].modified


    container.append(containerName)
    container.append(containerDes)
    container.append(containerComics)
    container.append(containerEvents)
    content.append(container)
  }
  }

}

module.exports = hulkContainer


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var mkCB = __webpack_require__(1)
var captainCard = __webpack_require__(9)
var hulkCard = __webpack_require__(10)
var spiderCard = __webpack_require__(11)
var visionCard = __webpack_require__(12)


var mainPage = function(){

var content = document.getElementById('content')
var homePageA = document.createElement('div')
var homePageB = document.createElement('div')

homePageB.className = 'w3-row-padding w3-margin-top'
homePageA.className = 'w3-row-padding w3-margin-top'

var thirdA = document.createElement('div')
thirdA.className = 'w3-third'
var cardIron = document.createElement('div')
cardIron.className = mkCB()
thirdA.append(cardIron)
homePageA.append(thirdA)
content.append(homePageA)



var thirdB = document.createElement('div')
thirdB.className = 'w3-third'
var cardCapt = document.createElement('div')
cardCapt.className = captainCard()
thirdB.append(cardCapt)
homePageA.append(thirdB)
content.append(homePageA)




var thirdC = document.createElement('div')
thirdC.className = 'w3-third'
var cardHulk = document.createElement('div')
cardHulk.className = hulkCard()
thirdC.append(cardHulk)
homePageA.append(thirdC)
content.append(homePageA)



var halfA = document.createElement('div')
halfA.className = 'w3-half'
var cardSpider = document.createElement('div')
cardSpider.className = spiderCard()
halfA.append(cardSpider)
homePageB.append(halfA)
content.append(homePageB)



var halfB = document.createElement('div')
halfB.className = 'w3-half'
var cardVision = document.createElement('div')
cardVision.className = visionCard()
halfB.append(cardVision)
homePageB.append(halfB)
content.append(homePageB)
}

module.exports = mainPage


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {


var spiderContainer = __webpack_require__(22)

var getSpider = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4 && req.status == 200)  { 

     spiderContainer(JSON.parse(this.responseText)) 
        }
    
  
  }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}

module.exports = getSpider


/***/ },
/* 22 */
/***/ function(module, exports) {

var content = document.getElementById('content')

var spiderContainer = function(arr) {
  for (var x=0; x<arr.length; x++) {


  var container = document.createElement('div')
  container.className = 'w3-container w3-black'
  container.style.width = '100%'
  
  if(arr[x].name == 'Spider-Man') {


    var containerName = document.createElement('h1')
    var containerDes = document.createElement('h2')
    var containerComics = document.createElement('h5')
    var containerEvents = document.createElement('h6')
    
    containerName.innerHTML = arr[x].name
    containerDes.innerHTML = arr[x].description
    containerComics.innerHTML = arr[x].id
    containerEvents.innerHTML = arr[x].modified


    container.append(containerName)
    container.append(containerDes)
    container.append(containerComics)
    container.append(containerEvents)
    content.append(container)
  }
  }

}

module.exports = spiderContainer


/***/ },
/* 23 */
/***/ function(module, exports) {


var content = document.getElementById('content')

var createContainer = function(arr) {
  for (var x=0; x<arr.length; x++) {


  var container = document.createElement('div')
  container.className = 'w3-container w3-black'
  container.style.width = '100%'
  
  if(arr[x].name == 'Iron Man') {


    var containerName = document.createElement('h1')
    var containerDes = document.createElement('h2')
    var containerComics = document.createElement('h5')
    var containerEvents = document.createElement('h6')
    
    containerName.innerHTML = arr[x].name
    containerDes.innerHTML = arr[x].description
    containerComics.innerHTML = arr[x].id
    containerEvents.innerHTML = arr[x].modified


    container.append(containerName)
    container.append(containerDes)
    container.append(containerComics)
    container.append(containerEvents)
    content.append(container)
  }
  }

}

module.exports = createContainer


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {




var createContainer = __webpack_require__(23)

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



/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var visionContainer = __webpack_require__(26)

var getVision = function(options) {
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4 && req.status == 200)  { 

     visionContainer(JSON.parse(this.responseText)) 
        }
    
  
  }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}

module.exports = getVision


/***/ },
/* 26 */
/***/ function(module, exports) {

var content = document.getElementById('content')

var visionContainer = function(arr) {
  for (var x=0; x<arr.length; x++) {


  var container = document.createElement('div')
  container.className = 'w3-container w3-black'
  container.style.width = '100%'
  
  if(arr[x].name == 'Vision') {


    var containerName = document.createElement('h1')
    var containerDes = document.createElement('h2')
    var containerComics = document.createElement('h5')
    var containerEvents = document.createElement('h6')
    
    containerName.innerHTML = arr[x].name
    containerDes.innerHTML = arr[x].description
    containerComics.innerHTML = arr[x].id
    containerEvents.innerHTML = arr[x].modified


    container.append(containerName)
    container.append(containerDes)
    container.append(containerComics)
    container.append(containerEvents)
    content.append(container)
  }
  }

}

module.exports = visionContainer


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {


var root = 'http://tolson.tgb.ninja:3000/#';
var useHash = true; 
var hash = '#'; 
var router = new Navigo(root, useHash, hash);
var HomePage = __webpack_require__(4)
var AvengersPage = __webpack_require__(2)
var captPage = __webpack_require__(3)
var hulkPage = __webpack_require__(5)
var spiderPage = __webpack_require__(7)
var visionPage = __webpack_require__(8)
var IronmanPage = __webpack_require__(6)

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
      



/***/ }
/******/ ]);