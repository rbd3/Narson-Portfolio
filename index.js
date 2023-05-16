const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const projectInfo = [
  {
    id: 0,
    header: 'Tonic',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'media/Snapshoo-desktop.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 1,
    header: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'media/Snapshoot Portfolio.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },

  {
    id: 2,
    header: 'Facebook 360',
    canopy: 'FACEBOOK',
    backend: 'Full Stack Dev',
    year: '2015',
    popupPhoto: 'media/Snapshoot Portfolio2.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
  },

  {
    id: 3,
    header: 'Multi-Post Stories',
    canopy: 'CANOPY',
    backend: 'Back End Dev',
    year: '2015',
    popupPhoto: 'media/Snapshoot Portfolio3.svg',
    content: 'Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
];

projects.innerHTML = `
<div class="card-body">
    <div class="card-img">
        <img src="${projectInfo[0].popupPhoto}" width="100%" />
    </div>
    <div>
        <h2 class="card-header">${projectInfo[0].header}</h2>
        <ul class="card-sub">
      <li class="remove">${projectInfo[0].canopy}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[0].backend}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>      
      <li>${projectInfo[0].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[0].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[0].tools[0]}</li>
        <li>${projectInfo[0].tools[1]}</li>
        <li>${projectInfo[0].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>

  <div class="card-body">
  <div class="card-img swap">
  <img src="${projectInfo[1].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[1].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[1].canopy}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[1].backend}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[1].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[1].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[1].tools[0]}</li>
        <li>${projectInfo[1].tools[1]}</li>
        <li>${projectInfo[1].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>

  <div class="card-body">
  <div class="card-img">
  <img src="${projectInfo[2].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[2].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[2].canopy}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[2].backend}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[2].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[1].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[2].tools[0]}</li>
        <li>${projectInfo[2].tools[1]}</li>
        <li>${projectInfo[2].tools[2]}</li>
        <li>${projectInfo[2].tools[3]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>

  <div class="card-body">
  <div class="card-img swap">
  <img src="${projectInfo[3].popupPhoto}" width="100%"/>       
  </div>
  <div>
    <h2 class="card-header">${projectInfo[3].header}</h2>
    <ul class="card-sub">
      <li class="remove">${projectInfo[1].canopy}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[3].backend}</li>
      <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>
      <li>${projectInfo[3].year}</li>
    </ul>
    <div class="card-content">
      <p>
      ${projectInfo[3].content}
      </p>
      <ul class="tools">
        <li>${projectInfo[3].tools[0]}</li>
        <li>${projectInfo[3].tools[1]}</li>
        <li>${projectInfo[3].tools[2]}</li>
      </ul>
      <button class="popBtn show">See project</button>
    </div>
  </div>
  </div>
`;

for (let i = 0; i < showButton.length; i += 1) {
  showButton[i].addEventListener('click', () => {
    body.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    popUp.innerHTML = `
        <section id="modal-section">
        <div class="modal-body">
          <div class="modal-title">
            <h2 class="card-header">${projectInfo[i].header}</h2>
            <i id="modal-close" class="uil uil-multiply"><img src="media/cross.png"></i>
            <ul class="card-sub">
              <li class="remove">${projectInfo[i].canopy}</li>
              <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>

              <li>${projectInfo[i].backend}</li>
              <div class="bullet-point"><img src="media/Counter.svg" alt="Bullet Point"></div>

              <li>${projectInfo[i].year}</li>
            </ul>
          </div>
          <img class="image-img" src="${projectInfo[i].popupPhoto}" width="100%"/>       
          <div>
            <div class="modal-content">
              <p>${projectInfo[i].content}</p>
              <div class="modal-links-content">
                <ul class="tools mobile-category">
                  <li>${projectInfo[i].tools[0]}</li>
                  <li>${projectInfo[i].tools[1]}</li>
                  <li>${projectInfo[i].tools[2]}</li>
                </ul>
                <div>
                  <hr class="line-break" />
                  <div class="modal-combine">
                    <button class="modal-button live">
                      See live
                      <img class="svg" src="media/Live-Icon.svg" alt="Live Icon" />
                    </button>
                    <button class="modal-button source">
                      See source
                      <span>
                      <img class="svg" src="media/github.svg" alt="Github Icon" />
                      </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
        `;
    body.appendChild(popUp);
  });
}

body.addEventListener('click', () => {
  body.style.display = 'none';
  popUp.remove();
});