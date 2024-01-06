let nav = document.querySelector('nav');
let tog = document.querySelector('.tog');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let color = document.querySelectorAll('.color');

// WoW JS
new WOW().init();

// Popover
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Navbar & Colors
tog.addEventListener('click', function (e) {
    // 0
    moon.classList.toggle('trans1')
    sun.classList.toggle('trans2')
    // 1
    nav.classList.toggle('box')
    // 2
    color.forEach((ele) => {
        ele.classList.toggle('bg-main-moon1');
        ele.classList.toggle('text-main-moon1');
    })
    // 3
    document.querySelector('.cv').classList.toggle('bg-main-moon2')
    document.querySelector('.cv a').classList.toggle('text-main-moon2')
    // 4
    document.querySelectorAll('.background').forEach((sec) => {
        sec.classList.toggle('bg-main-moon1')
    })
})
// Navbar Scroll
window.onscroll = function () {
    if (window.scrollY > 0) {
        nav.classList.remove('position-relative');
        nav.classList.add('fixed-top');
    }
    else {
        nav.classList.add('position-relative');
        nav.classList.remove('fixed-top');
    }
}

// Skills
let skills = [
    { icon: '<i class="fa-brands fa-html5 fa-2x ms-2 me-3"></i>', name: 'HTML' },
    { icon: '<i class="fa-brands fa-css3-alt fa-2x ms-2 me-3"></i>', name: 'CSS' },
    { icon: '<i class="fa-brands fa-js fa-2x ms-2 me-3"></i>', name: 'JAVASCRIPT' },
    { icon: '<i class="fa-brands fa-bootstrap fa-2x ms-2 me-3"></i>', name: 'BOOTSTRAP' },
    { icon: '<i class="bx bxl-jquery fa-2x ms-2 me-3"></i>', name: 'JQUERY' },
    { icon: '<i class="fa-brands fa-sass fa-2x ms-2 me-3"></i>', name: 'SASS' },
    { icon: '<i class="bx bxs-file-json fa-2x ms-2 me-3" ></i>', name: 'JSON & AJAX & AXIOS' },
    { icon: '<i class="fa-brands fa-github fa-2x ms-2 me-3"></i>', name: 'GIT & GITHUB' },
    { icon: '<i class="fa-brands fa-react fa-2x ms-2 me-3"></i>', name: 'REACT JS' },
    { icon: '<i class="fa-brands fa-neos fa-2x ms-2 me-3"></i>', name: 'Next Js' },
]
let cartoona = '';
for (let i = 0; i < skills.length; i++) {
    cartoona += `
    <div class="col-lg-4 col-sm-6">
    <div class="item position-relative overflow-hidden">
        ${skills[i].icon}
        <span>${skills[i].name}</span>
    </div>
    </div>
`
}
document.querySelector('.skill').innerHTML = cartoona;

// Projects
let projects = [
    {
        name: 'Weather Status',
        image: 'imgs/weather.jpg    ',
        githPage: 'https://e-hosny.github.io/Weather-Status/',
        code: 'https://github.com/E-Hosny/Weather-Status',
        skills: ['Fontawesome', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
        name: 'Bookmark',
        image: 'imgs/book.jpg',
        githPage: 'https://e-hosny.github.io/Bookmark/',
        code: 'https://github.com/E-Hosny/Bookmark',
        skills: ['HTML', 'SASS', 'JavaScript', 'Bootstrap', 'Fontawesome']
    },
    
];
let myProjects = '';
for (let i = 0; i < projects.length; i++) {
    myProjects += `
    <div class="col-lg-6">
    <div class="item">
        <div class="inner-box">
            <img src="${projects[i].image}" class="w-100" alt="Fokir">
            <div class="layer">
                <div class="w-75">
                    <ul class="list-unstyled d-flex justify-content-center mb-1">
                        <li><a href="${projects[i].githPage}" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="${projects[i].code}" target="_blank"><i class="fa-solid fa-code"></i></a></li>
                    </ul>
                    <h5 class="fw-bold text-nowrap">${projects[i].name}</h5>
                    <ul class="list-unstyled d-flex flex-wrap skills justify-content-center">
                    ${projects[i].skills.map((skill) => { return `<li>${skill}</li>` })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}
let project = document.getElementById('project').innerHTML = myProjects;

