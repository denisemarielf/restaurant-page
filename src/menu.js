const menu = function() {
    const section = document.getElementById('section');
    const containerDivMenu = document.createElement('div');
    containerDivMenu.setAttribute('class', 'menu-container');
    section.append(containerDivMenu);

    const typeOfPlates = ['STARTER', 'MAIN', 'DESSERT'];
    
    typeOfPlates.forEach(renderPlates);

    function renderPlates(element) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        h1.innerHTML = element;
        div.setAttribute('id', 'div-'+element.toLowerCase());
        div.appendChild(h1);
        containerDivMenu.appendChild(div);
    }

    const starter = document.getElementById('div-starter');
    const starterList = ['FURIKAKE EDAMAME $4.5', 'HUMMUS & AMBA $6', 'AUBERGINE TIGANITIES $6' , 'SPINACH GYOZA $7', 'ROMAN ARTICHOKES $7', 'CHARRED HISPI $7'];
    const starterUl = document.createElement('ul');
    starterUl.setAttribute('id', 'starter-ul')
    starter.appendChild(starterUl);
    
    starterList.forEach(renderStarterList);
    function renderStarterList(element) {
        const hr = document.createElement('hr');
        const li = document.createElement('li');
        li.setAttribute('class', 'menu-item');
        starterUl.append(li, hr);
        li.innerHTML = li.innerHTML + element;
    }

    const mainCourse = document.getElementById('div-main');
    const mainList = ['RANCH BBQ VEGAN BURGER $13.5', 'SOUL QUINOA BOWL $13', 'FALAFEL $12', 'TOFU SALAD $13.5', 'PESTO PASTA $16', 'BLACK BEAN CHILLI $14'];
    const mainUl = document.createElement('ul');
    mainUl.setAttribute('id', 'main-ul')
    mainCourse.appendChild(mainUl);
    
    mainList.forEach(renderMainList);
    function renderMainList(element) {
        const hr = document.createElement('hr');
        const li = document.createElement('li');
        li.setAttribute('class', 'menu-item');
        mainUl.append(li, hr);
        li.innerHTML = li.innerHTML + element;
    }
    
   
    
    const dessert = document.getElementById('div-dessert');
    const dessertList = ['CARROT CAKE $7', 'CRÈME BRÛLÉE $7', 'WHITE CHOCOLATE TIRAMISU $7', 'CARAMEL CHEESECAKE $7', 'CHERRY & ALMOND BROWNIES $6', 'LEMON CAKE $6' ];
    const dessertUl = document.createElement('ul');
    dessertUl.setAttribute('id', 'dessert-ul')
    dessert.appendChild(dessertUl);
    
    dessertList.forEach(renderDessertList);
    function renderDessertList(element) {
        const li = document.createElement('li');
        const hr = document.createElement('hr');
        li.setAttribute('class', 'menu-item');
        dessertUl.append(li, hr);
        li.innerHTML = li.innerHTML + element;
    }
    
}

export default menu;