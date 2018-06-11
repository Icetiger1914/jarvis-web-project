
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

