

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



var getAvengers = function() { 
  var req = new XMLHttpRequest()
  req.onreadystatechange = function() {
    if(this.readyState == 4) {
       createCard(JSON.parse(this.responseText)) 
        }
    }
  req.open('Get', 'http://tolson.tgb.ninja:4000/')
  req.send()
}


var content = document.getElementById('content')
var button = document.createElement('button')
button.onclick = getAvengers
button.innerHTML = 'Get Avengers'


var h1 = document.createElement('h1')
h1.innerHTML = 'Avengers Assemble!'

content.append(h1)
content.append(button)
