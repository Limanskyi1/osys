import { createScrollAnimationFrom } from "./utils";

document.addEventListener('DOMContentLoaded', () => {
    const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');
    const startAnimHome = '-100 center';
    if (laptopScreenMediaQuery.matches) {
        createScrollAnimationFrom('.services__intro .wrap > *', '.services__intro', startAnimHome, '+=40%', 1, {
            y: 150,
            opacity:0,
            stagger: 0.25,
        });
    }
  
});
  