import { createScrollAnimationFrom } from "./utils";



document.addEventListener('DOMContentLoaded', () => {
  const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');
  const startAnimHome = '-100 center';
  if (laptopScreenMediaQuery.matches) {
      createScrollAnimationFrom('.toolkit__tablet > *', '.toolkit', startAnimHome, '+=40%', 1, {
          y: 150,
          scale: 0.8,
          stagger:0.25,
          opacity: 0,
      });
  }
});


