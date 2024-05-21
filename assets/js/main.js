/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '50px',
    duration: 2500,
    delay: 300,
    reset: true
});

console.log(sr.origin);

sr.reveal('.carousel_img');
sr.reveal('.about_info', {origin: 'left'});
sr.reveal('.about_img', {origin: 'right'});