let projects = [
    {
        name: 'Mask man',
        img: 'src/Maskman.png',
        desc: '<b>Mask man</b> is 2d endless running game and it\'s made with c# and unity.',
        link: 'https://github.com/Ezhilarasan-developer/Mask-Man-Running'
    },

    {
        name: 'Ninja croaky',
        img: 'src/Ninjacroaky.png',
        desc: '<b>Ninja croaky</b> is a puzzle platformer game and it\'s made with python, pygame.',
        link: 'https://github.com/ezhildev/Ninja-croaky'
    },

    {
        name: 'Limp',
        img: 'src/Limp.png',
        desc: '<b>Limp</b> is a puzzle platformer game and it\'s made with python, pygame.',
        link: 'https://github.com/ezhildev/limp'
    }
];

let projectsContainer = document.getElementById('projects');

projects.forEach(
    function (project) {
        let element = `
    <div class="project container">
        <img src=${project.img} alt="Maskman">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <a href="${project.link}" class="btn">SOURCE CODE</a>
    </div>
        `;
        projectsContainer.innerHTML += element;
    }
);

let progLangs = [
    'java',
    'python',
    'javascript',
    'html',
    'css',
];

let technologies = [
    'git',
    'github',
    'linux'
]

let progLangContainer = document.getElementById('prog');
let technologiesContainer = document.getElementById('techs');
let contactContainer = document.getElementById('contact-links');

function loadIcon(info, element) {
    let content = `
    <div class="item">
      <img src="src/${info}.svg" alt="${info}">
    </div>`;
    element.innerHTML += content;
}

progLangs.forEach(
    function(progLang) {
        loadIcon(progLang, progLangContainer)
    }
);

technologies.forEach (
    function(technology) {
        loadIcon(technology, technologiesContainer);
    }
);

let menu = document.getElementById('menu');
let menuList = document.getElementById('menu-list');
let isMenuOpen = false;

menu.addEventListener('click', 
    function() {
        if (menu.style.display === 'none') return;
        if(menuList.style.display !== 'none') {
            menuList.style.display = 'none';
        } else {
            menuList.style.display = 'inline-flex';
            isMenuOpen = true;
        }
    }
);

menuList.addEventListener('click',
    function() {
        if(isMenuOpen) menuList.style.display = 'none';
    }
);