import pageLoad from './page-load.js';
import home from './home.js';
import menu from './menu';
import contact from './contact';


window.onload = pageLoad();

function removeChildren() {
    const section = document.getElementById('section');
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log("removi :)")
};

document.getElementById("home").addEventListener('click', function(){
    console.log("home")
    removeChildren();
    home();
})

document.getElementById("menu").addEventListener('click', function(){
    console.log("menu")
    removeChildren();
    menu();
})

document.getElementById("contact").addEventListener('click', function(){
    console.log("contact")
    removeChildren();
    contact();
})