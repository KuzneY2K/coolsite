const menubutton = document.getElementsByClassName('menubutton')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]


menubutton.addEventListener('click', function () {
    console.log('menu button clicked')
    navlinks.classList.toggle('active')
    menubutton.classList.toggle('active')
})
