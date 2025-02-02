export function renderContent() {
  const container = document.getElementById('app')

  container.innerHTML = `
  <main class="main">
      <section class="column column--left">
          <article class="card card--profile">
              <div class="card__image-container">
                  <img src="./src/assets/imagenes.jgp/perfil.jpg" alt="perfil" />
              </div>
              <div class="card__header">
                  <h2 class="card__title no-margin">FranciscoDesings</h2>
                  <p class="card__subtitle">Estudiante THEPOWER</p>
              </div>
              <div class="car__body">
                  <div class="card__link">
                      <i class="fas fa-envelope icon"></i>
                      <a href="jesusgonzalezvergara@hotmail.com">francisco@hotmail.com</a>
                  </div>
                  <div class="card__link">
                      <i class="fas fa-phone-alt icon"></i>
                      <a href="tel:12345678">+34-12345678</a>
                  </div>
                  <p class="card__text">
                      Mas de 25 años como empresario en el sector del mobiliario y decoracion, pero desde hace 4 meses estoy estudiando un Master en programacion en la empresa THE POWER, siempre he destacado por mi constancia y cumplir mis objetivos, ahora me he marcado este y espero estar a la altura de lo que se me pide
                  </p>
              </div>
          </article>
          <article class="card card--experience">
              <h2 class="card__title">Experiencies</h2>
              <div class="experience">
                  <img src="./src/assets/imagenes.jgp/logo tienda.jpg" alt="logo" class="experience__image">
                  <div class="experience__info">
                      <p class="experience__time">Enero 2000- Current</p>
                      <h3 class="experience__job">Gerente Mobiliario</h3>
                      <p class="experience__description">Tengo varias tiendas de muebles y electrodomesticos desde el año 2000 a la actualidad y basicamente vendemos de todo para el hogar</p>
                  </div>
              </div>
              <div class="experience">
                  <img src="./src/assets/imagenes.jgp/logopower.jpg" alt="logo" class="experience__image">
                  <div class="experience__info">
                      <p class="experience__time">Marzo 2024 - actualidad</p>
                      <h3 class="experience__job">Estudiante ThePower</h3>
                      <p class="experience__description">Desde el 27 de Marzo de 2024 estoy asistiendo a clases de programacion en un master online en una de las mejores empresas del mundo, donde te proporcionan unas herramientas y conocimientos para estar muy por encima de la media en este sector</p>
                  </div>
              </div>
          </article>
          <article class="card">
              <h2 class="card__title">Hobbies</h2>
              <div class="card--hobbies">
                  <div class="card__image-container">
                      <img src="./src/assets/imagenes.jgp/volar.jpg" alt="Avioneta">
                  </div>
                  <h3 class="hobbie__title">Volar en Avioneta</h3>
                  <p class="card__text">Me encanta volar en avioneta es una sensacion unica de libertad y dejarte llevar por el viento como si fueses un pajaro, da ganas de quedarse alli arriba para siempre</p>
              </div>
              <div class="card--hobbies">
                  <div class="card__image-container">
                      <img src="./src/assets/imagenes.jgp/tiro.jpg" alt="tiro olimpico">
                  </div>
                  <h3 class="hobbie__title">Tiro Olimpico</h3>
                  <p class="card__text">Desde hace unos 10 años pertenezco al club sevilla de Tiro Olimpico con pistola de 9 mm en la modalidad de precision y rapidez. Mi modalidad se basa en disparar a una mano desde 25 metros a una diana</p>
              </div>
              <div class="card--hobbies">
                  <div class="card__image-container">
                      <img src="./src/assets/imagenes.jgp/fortnite.jpg" alt="Fortnite">
                  </div>
                  <h3 class="hobbie__title">Gamer</h3>
                  <p class="card__text">Tengo un grupo de amigos con los que quedamos practicamente todos los dias para echar unas partidas a un juego que se llama Fornite, consiste en caer en una isla he ir matando a todos los enemigos he intentar que solo quedes tu para ganar</p>
              </div>
              <div class="card--hobbies">
                  <div class="card__image-container">
                      <img src="./src/assets/imagenes.jgp/crosfit.JPG" alt="crosfit">
                  </div>
                  <h3 class="hobbie__title">crosfit</h3>
                  <p class="card__text">Al trabajar de cargador de pequeño me destroze la espalda y gracias al crosfit el cual conoci en 2012, me cambio la vida, pase de estar siempre dolorido a estar mas en forma que nunca, es un deporte que le recomiendo a todo el mundo</p>
              </div>
          </article>
      </section>
      </main>
  `
}
renderContent()
