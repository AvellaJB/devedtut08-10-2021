let tlslidingtext= gsap.timeline({
    scrollTrigger: {
        trigger: ".home", //What element triggers the animation (in the case home, so instant trigger)
        start: "0%", //50% would start the animation once we've scrolled 50 of the page
        end : "100%", //We want the animation to end once we've reached the end to the page
        scrub: 1, //Takes 1 second to catch up to the scroll bar.
    },
});

let tl2= gsap.timeline({
    scrollTrigger: {
        trigger: ".home", //What element triggers the animation (in the case home, so instant trigger)
        start: "0%", //50% would start the animation once we've scrolled 50 of the page
        end : "100%", //We want the animation to end once we've reached the end to the page
        scrub: 1, //Takes 1 second to catch up to the scroll bar.
    },
});

let tlpinpage= gsap.timeline({
    scrollTrigger: {
        trigger: ".home", //What element triggers the animation (in the case home, so instant trigger)
        start: "0%", //50% would start the animation once we've scrolled 50 of the page
        end : "200%", //We want the animation to end once we've reached the end to the page. We put 200% so the nav bar stays on top once we've reached 100%
        scrub: 1, //Takes 1 second to catch up to the scroll bar.
        pin: true,
        pinSpacing: false, //permet de ne pas pin les éléments qui sont en dessous.
    },
});

tlslidingtext.fromTo(".sliding-text", {y: 0}, {y: -400})
tl2.fromTo(".logo", {scale: 6}, {scale: 1, top : "2rem", left: "3rem", x:"50%", y:"50%"})

//tl.to(".logo", {opacity:0}); //D'abord animation sliding text, puis disparition onestep design.

//Timeline advantage is that you can sync animations to the same timeline, here we could just
//add more tl.to ou tl.fromTo and add other animation on the same timeline.