const Menutoggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('nav ul');


Menutoggle.addEventListener('click',function(){
 nav.classList.toggle('slide');
});