/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal ({
    origin: 'top',
    distance: '50px',
    duration: 2500,
    delay: 300,
    reset: true
});

console.log(sr.origin);

sr.reveal('.carousel_img, .footer_container');
sr.reveal('.about_info, .founder_img', {origin: 'left'});
sr.reveal('.about_img', {origin: 'right'});