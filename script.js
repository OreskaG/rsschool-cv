const iconMenu = document.querySelector('.burger')
const Menu = document.querySelector('.menu')
iconMenu.addEventListener("click", function(e){
    Menu.classList.toggle('on');
    iconMenu.classList.toggle('on');
})
const links = document.querySelectorAll('a')
links.forEach(function(link){
    link.addEventListener("click", function(e) {
        Menu.classList.remove('on');
        iconMenu.classList.remove('on');
    })
})