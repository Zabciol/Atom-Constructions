document.addEventListener('DOMContentLoaded', function(){
const nav = document.querySelector('.navbar');
const button = document.querySelector('.fa-bars');
const showNav = document.querySelector('.navbar-collapse');
const allNavItems = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.navbar-brand')

function addShadow() {

 
        if (window.scrollY >= 300)
        {
            nav.classList.add('shadow-bg')
        }else
        {
            nav.classList.remove('shadow-bg')
        }

}

function navButton() {
    if(window.screen.availHeight<750 || window.scrollY >= 100 )
    {
        nav.classList.add('shadow-bg')
    }
}

function closeNav(){
    showNav.classList.remove('show')
}

allNavItems.forEach(item => item.addEventListener('click', closeNav))
window.addEventListener('scroll',addShadow)
button.addEventListener('click',navButton)
logo.addEventListener('click',closeNav)
})