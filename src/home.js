const home = function() {
    const section = document.getElementById('section');
    const h1 = document.createElement('h1');
    const img = new Image();
    const p = document.createElement('p');
    img.src = "images/our-philosophy.jpg";
    h1.innerHTML = "WELCOME";
    p.innerHTML = "We are an organic, vegetarian and sustainable restaurant. Our menu combines a variety of gourmet vegetarian culinary delights with a focus on local, seasonal ingredients."
    section.append(h1, p);
}

export default home;