import home from './home.js';

const pageLoad = function() {
    //page
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const main = document.createElement('main');
    main.setAttribute('id', 'main')
    
    //header
    const h1 = document.createElement('h1');
    h1.innerHTML = "The Veggie Restaurant"
    header.append(h1);

    //nav
    const ul = document.createElement('ul');
    const navList = ['HOME', 'MENU', 'CONTACT'];
    nav.appendChild(ul);
    navList.forEach(renderNavList);
    function renderNavList(element) {
        const li = document.createElement('li');
        li.setAttribute('id', element.toLowerCase());
        ul.appendChild(li);
        li.innerHTML = li.innerHTML + element;
    }

    //append all elements
    content.append(header, nav, main);

    //append home
    const section = document.createElement('section');
    section.setAttribute('id', 'section')
    main.append(section);
    home();
    console.log("i am working again!");
    return main, section;
    
}


export default pageLoad;
//export default main;