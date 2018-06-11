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
