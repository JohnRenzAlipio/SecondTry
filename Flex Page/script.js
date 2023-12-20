let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

   
    if (value <= window.innerWidth) {
        dubaiText.style.left = value * -2 + 'px';
    }

    if (value <= window.innerHeight) {
        burjkhalifa.style.top = value * 1 + 'px';
    }

    if (value <= window.innerHeight) {
        stars.style.top = value * 1 + 'px';
    }
});
