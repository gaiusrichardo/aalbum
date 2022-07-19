const contentContainer = document.querySelector('main')
const hamburgerMenu = document.querySelector('.menu')
const sideNav = document.querySelector('.side__navigation__container')

hamburgerMenu.addEventListener('click', () => {
    sideNav.classList.remove('display__hide')
})

contentContainer.addEventListener('click', () => {
    sideNav.classList.add('display__hide')
})