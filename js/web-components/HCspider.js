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
