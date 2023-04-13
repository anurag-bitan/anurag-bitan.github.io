// Get all elements with the 'obj' class
const elements = document.querySelectorAll('.planet');

// Loop through each element and randomly update its top and left properties
var randompl =()=>{
elements.forEach(function (element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    element.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
});}
setInterval(randompl,3000);





function shakePlanets() {
    const planets = document.querySelectorAll('.planet');

    window.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        planets.forEach((planet) => {
            const planetX = planet.offsetLeft + planet.clientWidth / 2;
            const planetY = planet.offsetTop + planet.clientHeight / 2;

            const diffX = mouseX - planetX;
            const diffY = mouseY - planetY;

            const distance = Math.sqrt(diffX * diffX + diffY * diffY);
            const maxDistance = 200;

            if (distance < maxDistance) {
                const offsetX = ((maxDistance - distance) / maxDistance) * diffX * 0.2;
                const offsetY = ((maxDistance - distance) / maxDistance) * diffY * 0.2;

                planet.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(10deg)`;
            } else {
                planet.style.transform = 'none';
            }
        });
    });
}

shakePlanets();





const sun = document.getElementById('sun');
const galaxy = document.getElementById('galexy');
const btn = document.getElementById('btn');
const stars = document.getElementById('stars');
// const minh = document.getElementById('btn').style.top;
window.addEventListener('scroll', () => {
    var value = window.scrollY;
    btn.style.opacity=1-(value*0.25);
    stars.style.left = value / 4 + 'px';
    sun.style.top = (value * 0.4) + 'px';
    galaxy.style.right = (value * 0.25 )+ 'px';
    btn.style.top =  (value*0.25)+'px';
})




const fire = new Audio("source/fire.mp3")
btn.addEventListener('click',()=>{
    fire.play();
    // fire.volume = 0.5;
    var sec = document.querySelector(".sec");
    sec.scrollIntoView({ behavior: 'smooth', block: 'start'});
})

// window.addEventListener('scroll', function() {
// 	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	let image = document.querySelector('#dp img');
// 	let imagePos = image.getBoundingClientRect().top;
// 	if (imagePos < window.innerHeight / 2) {
// 		let speed = 0.6; // adjust the speed of the animation
// 		image.style.transform = 'translateX(' + (scrollTop - imagePos) * speed + 'px)';
// 	}
// });

window.addEventListener('scroll', function() {
    var image = document.querySelector('#dp img');
    var imagePosition = image.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (imagePosition < screenPosition) {
        image.style.opacity = '1';
    } else {
        image.style.opacity = '0';
    }
});

