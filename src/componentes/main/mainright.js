export function renderContentright() {
  const container = document.getElementById('appderecha')

  container.innerHTML = `

   <main class="column column--right">
    <article class="card">
      <h2 class="card__title">FRONT END</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">HTML</p>
          <div class="skills__bar skills__bar--90"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">CSS</p>
          <div class="skills__bar skills__bar--90"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">JAVASCRIPT</p>
          <div class="skills__bar skills__bar--60"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">PHP</p>
          <div class="skills__bar skills__bar--10"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">REACT</p>
          <div class="skills__bar skills__bar--10"></div>
        </div>
      </div>
    </article>
    <article class="card">
      <h2 class="card__title">DESIGN</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">Photshop</p>
          <div class="skills__bar skills__bar--20"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Ilustrador</p>
          <div class="skills__bar skills__bar--70"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Figma</p>
          <div class="skills__bar skills__bar--50"></div>
        </div>
     </article>
    <article class="card">
      <h2 class="card__title">MULTIMEDIA</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">After Effects</p>
          <div class="skills__bar skills__bar--70"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Premiere</p>
          <div class="skills__bar skills__bar--60"></div>
        </div>
    </article>
    <article class="card card--project">
      <div class="card__image-container">
        <img src="./src/assets/imagenes.jgp/proyecto1.jpeg" alt="landing page" class="card__image">
      </div>
      <div class="project">
        <div class="project__tags">
          <span class="project__tag">#HTML</span>
          <span class="project__tag">#CSS</span>
          <span class="project__tag">#Responsive</span>
        </div>
        <h2 class="card__title">Proyecto 1</h2>
        <p class="card__text">Teniamos que hacer una landing page con HTML Y CSS en la que todo estuviese responsive y con buenas practicas</p>
        <p class="card__text">Este al ser mi primer proyecto y acababa de empezar fue el que mas me costo y mas trabajo me dio, por lo tanto es al que mas cariño le tengo</p>
      <div class="buttons">
        <a href="https://tubular-lolly-c6809e.netlify.app/" class="button button--primary">Demo</a>
        <a href="https://github.com/FRANCISCOJESUS1980/PROYECTO-1" class="button button--ghost">Code</a>
      </div>
    </article>
    <article class="card card--project">
      <div class="card__image-container">
        <img src="./src/assets/imagenes.jgp/proyecto2.jpeg" alt="landing page" class="card__image">
      </div>
      <div class="project">
        <div class="project__tags">
          <span class="project__tag">#HTML</span>
          <span class="project__tag">#CSS</span>
          <span class="project__tag">#JavaScript</span>
          <span class="project__tag">#Responsive</span>
        </div>
        <h2 class="card__title">Proyecto 2</h2>
        <p class="card__text">En este proyecto nos pedian hacer una pagina, donde un usuario tenia unos productos para elegir, ademas debia tener un modal con un buscador</p>
        <p class="card__text">Este fue el segundo proyecto y el tema css y html se me dio muy rapido y bien, con el javascript ya tuve mas problemas, tambien le guardo un cariño especial porque fue le primero con javascript</p>
      <div class="buttons">
        <a href="https://beamish-pothos-bcd5df.netlify.app" class="button button--primary">Demo</a>
        <a href="https://github.com/FRANCISCOJESUS1980/proyecto2.5.git" class="button button--ghost">Code</a>
      </div>
    </article>
    <article class="card card--project">
      <div class="card__image-container">
        <img src="./src/assets/imagenes.jgp/proyecto3.jpeg" alt="landing page" class="card__image">
      </div>
      <div class="project">
        <div class="project__tags">
          <span class="project__tag">#HTML</span>
          <span class="project__tag">#CSS</span>
          <span class="project__tag">#JavaScript</span>
          <span class="project__tag">#Responsive</span>
        </div>
        <h2 class="card__title">Proyecto 3</h2>
        <p class="card__text">Este proyecto consistia en saber utilizar las Apis y hacerle peticiones segun el criterio del usuario</p>
        <p class="card__text">El tercer proyecto, excepto la parte de las Api que era la primera vez que la hacia el resto fue bastante bien y rapido, por ahora creo mi mejor proyecto tanto en maquetacion como en funcionalidad y estructuracion</p>
      <div class="buttons">
        <a href="https://heartfelt-twilight-cc89a6.netlify.app" class="button button--primary">Demo</a>
        <a href="https://github.com/FRANCISCOJESUS1980/proyecto-3" class="button button--ghost">Code</a>
      </div>
    </article>
  </main>
 
  `
}
renderContentright()
