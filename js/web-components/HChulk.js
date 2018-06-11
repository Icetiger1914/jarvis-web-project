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
