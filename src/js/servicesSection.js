import { createScrollAnimationFrom } from "./utils";

document.addEventListener('DOMContentLoaded', () => {
    const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');
    const startAnimHome = '-100 center';
    if (laptopScreenMediaQuery.matches) {
        createScrollAnimationFrom('.services .wrap', '.services', startAnimHome, '+=40%', 1, {
            opacity:0,
            x:100,
        });
    }
});
  