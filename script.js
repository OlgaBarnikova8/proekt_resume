/*let menu = document.querySelector('icon-menu');
let span = document.querySelector('span');
let links = document.querySelectorAll('.menu__link');
//let overlay = document.querySelector('.burger-menu__overlay')

span.addEventListener('click', func1);
//overlay.addEventListener('click', func1);
for (let link of links) {
    link.addEventListener('click', func1);
}

function func1() {
    menu.classList.toggle('icon-menu:active');

    if (menu.classList.contains('icon-menu_active')) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "visible";
    }
*/


let line = document.querySelector('.icon-menu');
let links = document.querySelectorAll('.menu__link');
let menu = document.querySelector('.menu__body');

line.addEventListener('click', function(event) {
  line.classList.toggle('active');  
  menu.classList.toggle('active');
  document.body.classList.toggle('lock');
});


  


