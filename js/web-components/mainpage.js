var mkCB = require('./homeCards.js')
var captainCard = require('./HCcapt.js')
var hulkCard = require('./HChulk.js')
var spiderCard = require('./HCspider.js')
var visionCard = require('./HCvision.js')


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
