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
