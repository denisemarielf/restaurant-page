const contact = function() {
    const section = document.getElementById('section');
    const containerDivContact = document.createElement('div');
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.setAttribute('id', 'contact-info');
    const openingTimesDiv = document.createElement('div');
    openingTimesDiv.setAttribute('id', 'opening-times');
    const map = new Image();
    map.src = "images/map.png";
    const h1 = document.createElement('h1');
    h1.innerHTML = "CONTACT US"
    const p1 = document.createElement('p');
    p1.innerText = "193 Great Portland St. \n London \n 📞+44 7911 185634 \n 📩 veggieresto@gmail.com"
    contactInfoDiv.append(h1, p1)
    const p2 = document.createElement('p');
    p2.innerText = "Monday to Friday: 9am - 11pm / Saturday: 9am - 11pm / Sunday: 9am - 10pm"
    containerDivContact.setAttribute('class', 'contact-container');
    
    containerDivContact.append(contactInfoDiv, map, openingTimesDiv)
    const title = document.createElement('h1');
    title.innerText = "OPENING TIMES";
    openingTimesDiv.append(title, p2)


    section.append(containerDivContact);
}

export default contact;