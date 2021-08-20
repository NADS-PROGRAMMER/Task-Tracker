"use strict"

let tl = gsap.timeline({repeat: -1, yoyo: true});
tl.from('.main-animation', {color: "#5cb85c", transform: "scaleX(1.1)", duration: 2, ease: "elastic", stagger: 0.2});
tl.from('.sub-animation', {opacity: 0, x: "100%", duration: 2, ease: "elastic", stagger: 0.2}, "-=2");
