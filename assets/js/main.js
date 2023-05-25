const navmenu = document.getElementById('nav-menu'),
      navtoggle = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close')


if(navtoggle){
    navtoggle.addEventListener('click', () =>{
        navmenu.classList.add('show-menu')
    })
}

if(navclose){
    navclose.addEventListener('click', () =>{
        navmenu.classList.remove('show-menu')
    })
}

const navlink = document.querySelectorAll('.nav-link')

function linkaction(){
    const navmenu = document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkaction))


const skillscontent = document.getElementsByClassName('skills-content'),
    skillsheader = document.querySelectorAll('.skills-header')


function toggleskills() {
    let itemclass = this.parentNode.className

    for (let i = 0; i < skillscontent.length; i++) {
         skillscontent[i].className = 'skills-content skills-close'
    }
    if(itemclass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsheader.forEach((el) =>{
    el.addEventListener('click', toggleskills)
})

const tabs = document.querySelectorAll('[data-target]'),
      tabcontents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabcontents.forEach(tabcontent =>{
            tabcontent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})


const modalviews = document.querySelectorAll('.services-modal'),
      modalbtns = document.querySelectorAll('.services-button'),
      modalcloses = document.querySelectorAll('.services-modal-close')

let modal = function(modalclick) {
    modalviews[modalclick].classList.add('active-modal')
}

modalbtns.forEach((modalbtn, i) => {
    modalbtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalcloses.forEach((modalclose) => {
    modalclose.addEventListener('click', () =>{
        modalviews.forEach((modalview) =>{
            modalview.classList.remove('active-modal')
        })
    })
})


let swiperport = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

let swipertest = new Swiper(".testimonial-container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader() {
    const nav = document.getElementById('header')
    if(this.scrollY >= 90) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Dark theme
const themebutton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'uil-sun'

// prev selected topic (if user selected)
const selectedtheme = localStorage.getItem('selected-theme')
const selectedicon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themebutton.classList.contains(icontheme) ? 'uil-moon' : 'uil-sun'

// we validate if user prev chose a topic
if(selectedtheme) {
    // if validation is fullfilled, we ask that the issue was to know if we activited or deactivated the dark
    document.body.classList[selectedtheme === 'dark' ? 'add' : 'remove'](darktheme)
    themebutton.classList[selectedicon === 'uil-moon' ? 'add' : 'remove'](icontheme)   
}

// activate / deactivate the theme manually with the button
themebutton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darktheme)
    themebutton.classList.toggle(icontheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})