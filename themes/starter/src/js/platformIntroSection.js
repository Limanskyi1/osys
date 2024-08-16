import { createScrollAnimationFrom } from "./utils";

document.addEventListener('DOMContentLoaded', () => {
    const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');
    if (laptopScreenMediaQuery.matches) {
        createScrollAnimationFrom('.platform-intro-gsap', '.platform-intro', '-100 center', '+=40%', 1, {
            y: 150,
            opacity:0,
            stagger: 0.25,
        });
    }
  });