import './main.scss'
import { renderContent } from './src/componentes/main/mainleft'
import { createHeader } from './src/componentes/header/header'
import { renderContentright } from './src/componentes/main/mainright'
const colorsDiv = document.createElement('div')
colorsDiv.id = 'toggle-colors'
colorsDiv.className = 'colors'
colorsDiv.addEventListener('click', (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color)
})

createHeader()
/*
document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.querySelector('.app')

  contenidoHTML = [(renderContent(), renderContentright())]
  appDiv.innerHTML = contenidoHTML
  const toggleTheme = document.getElementById('toggle-theme')
  const toggleIcon = document.getElementById('toggle-icon')
  const toggleText = document.getElementById('toggle-text')

  const toggleColors = document.getElementById('toggle-colors')
  const rootStyles = document.documentElement.style
  document.body.classList.add('dark')
  toggleIcon.src = './assets/icons.svg/soleado.png'
  toggleText.textContent = 'Light Mode'

  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
      toggleIcon.src = './assets/icons.svg/soleado.png'
      toggleText.textContent = 'Light Mode'
    } else {
      toggleIcon.src = './assets/icons.svg/moon.svg'
      toggleText.textContent = 'Dark Mode'
    }
  })

  toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
  })
})*/
