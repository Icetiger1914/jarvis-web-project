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
