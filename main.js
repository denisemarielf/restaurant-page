(()=>{"use strict";const e=function(){const e=document.getElementById("section"),n=document.createElement("h1"),t=new Image,o=document.createElement("p");t.src="images/our-philosophy.jpg",n.innerHTML="Our Philosophy",o.innerHTML="We are an organic, vegetarian and sustainable restaurant. Our menu combines a variety of gourmet vegetarian culinary delights with a focus on local, seasonal ingredients.",e.append(n,t,o)};function n(){const e=document.getElementById("section");for(;e.firstChild;)e.removeChild(e.firstChild);console.log("removi :)")}window.onload=function(){const n=document.getElementById("content"),t=document.createElement("header"),o=document.createElement("nav"),c=document.createElement("main");c.setAttribute("id","main");const i=document.createElement("h1");i.innerHTML="The Veggie Restaurant",t.append(i);const a=document.createElement("ul");o.appendChild(a),["HOME","MENU","CONTACT"].forEach((function(e){const n=document.createElement("li");n.setAttribute("id",e.toLowerCase()),a.appendChild(n),n.innerHTML=n.innerHTML+e})),n.append(t,o,c);const d=document.createElement("section");return d.setAttribute("id","section"),c.append(d),e(),console.log("i am working again!"),d}(),document.getElementById("home").addEventListener("click",(function(){console.log("home"),n(),e()})),document.getElementById("menu").addEventListener("click",(function(){console.log("menu"),n(),function(){const e=document.getElementById("section"),n=document.createElement("div");e.append(n)}()})),document.getElementById("contact").addEventListener("click",(function(){console.log("contact"),n(),function(){const e=document.getElementById("section"),n=document.createElement("form");e.append(n)}()}))})();