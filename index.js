const body = document.querySelector('.expandcard');
const projects = document.getElementById('projects');
const popUp = document.createElement('section');
const showButton = document.getElementsByClassName('popBtn');

const projectInfo = [
  {
    id: 0,
    header: 'To Do List',
    canopy: 'ToDo',
    backend: 'Front End Dev',
    year: '2023',
    popupPhoto: 'media/ToDo.png',
    content: 'The To-Do List application is a powerful tool designed to help you stay organized and manage your tasks effectively. With its robust features, this application simplifies the process of creating, organizing, and tracking your daily tasks and goals.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://rbd3.github.io/To-Do-Deploy/',
    source: 'https://github.com/rbd3/ToDo-List-Narson',
  },

  {
    id: 1,
    header: 'RBD High School',
    canopy: 'SCHOOL',
    backend: 'Full Stack Dev',
    year: '2015',
    popupPhoto: 'media/RBD-school-header.png',
    content: 'RBD-School is a high school for Technology in Madagascar. This website is to inform and interact with people about the school.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://rbd3.github.io/rbd3.github.io-RBD-School/',
    source: 'https://github.com/rbd3/RBD-High-School',
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

for (let i = 0; i < projectInfo.length; i += 1) {
  const card = document.createElement('div'); // to generate a new card for each project
  card.classList.add('card-body');
  let toolsHtml = '';
  for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
    toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
  }

  card.innerHTML = `
    <div class="card-img">
      <img src="${projectInfo[i].popupPhoto}" width="100%" />
    </div>
    <div>
      <h2 class="card-header">${projectInfo[i].header}</h2>
      <ul class="card-sub">
        <li class="remove">${projectInfo[i].canopy}</li>
        <li>${projectInfo[i].backend}</li>
      
        <li>${projectInfo[i].year}</li>
      </ul>
      <div class="card-content">
        <p>${projectInfo[i].content}</p>
        <ul class="tools">
          ${toolsHtml}
        </ul>
        <button class="popBtn show">See project</button>
      </div>
    </div>
  `;

  projects.appendChild(card);
}

for (let i = 0; i < showButton.length; i += 1) {
  showButton[i].addEventListener('click', () => {
    body.style.display = 'block';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    let toolsHtml = '';
    for (let j = 0; j < projectInfo[i].tools.length; j += 1) {
      toolsHtml += `<li>${projectInfo[i].tools[j]}</li>`;
    }

    popUp.innerHTML = `
        <section id="modal-section">
        <div class="modal-body">
          <div class="modal-title">
            <h2 class="card-header">${projectInfo[i].header}</h2>
            <i id="modal-close" class="uil uil-multiply"><img src="media/cross.png"></i>
            <ul class="card-sub">
              <li class="remove">${projectInfo[i].canopy}</li>
              <li>${projectInfo[i].backend}</li>
              <li>${projectInfo[i].year}</li>
            </ul>
          </div>
          <img class="image-img" src="${projectInfo[i].popupPhoto}" />       
          <div>
            <div class="modal-content">
              <p>${projectInfo[i].content}</p>
              <div class="modal-links-content">
                <ul class="tools mobile-category">
                  ${toolsHtml}
                </ul>
                <div>
                  <hr class="line-break" />
                  <div class="modal-combine">
                    <button class="modal-button live">
                      <a href=${projectInfo[i].live}>See live</a>
                      <img class="svg" src="media/Live-Icon.svg" alt="Live Icon" />
                    </button>
                    <button class="modal-button source">
                    <a href=${projectInfo[i].source}>See source</a>
                      <span>
                      <img class="svg" src="media/group.svg" alt="Github Icon" />
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