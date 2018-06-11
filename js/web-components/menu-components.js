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
