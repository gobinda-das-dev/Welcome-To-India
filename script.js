gsap.from('.img2', 1.2, {opacity:0, y:-150, delay: 0.4});
gsap.from('.img3', 1.2, {opacity:0, y:150, delay: 1.8});
gsap.from('.img4', 1.2, {opacity:0, y:350, delay: 3.05});
gsap.from('.img5', 1.2, {opacity:0, y:200, delay: 2.5});
gsap.from('.img6', 1.2, {opacity:0, y:150, delay: 1.1});
gsap.from('.img7', 1.2, {opacity:0, y:-80, delay: 4});
gsap.from('.img8', 1.2, {opacity:0, delay: 3.5});
gsap.from('.img9', 1.2, {opacity:0, y:-150, delay: 4});
gsap.from('h1', 1.2, {opacity:0, y:-150, delay: 4.7});
gsap.from('h2', 1.2, {opacity:0, y:-150, delay: 5});

const menu = document.querySelector('.menu');
const toggle = document.querySelector('#toggle');

toggle.onclick = function(){
    menu.classList.toggle('active');
}

