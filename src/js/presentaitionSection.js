import { createScrollAnimationFrom } from "./utils";

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".presentaition .wrap");
  const item = document.querySelector(".presentaition__item");

  wrap.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const rotateY = (xPercent - 0.5) * 20;
    const rotateX = (0.5 - yPercent) * 20;
    wrap.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    item.style.top = `${parseInt(item.style.top) + 2 }%`
  });

  wrap.addEventListener("mouseleave", function () {
    wrap.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const startAnimHome = '-100 center';
  createScrollAnimationFrom('.presentaition .wrap', '.presentaition', startAnimHome, '+=40%', 1, {
      y: 150,
      scale: 0.8,
  });
  createScrollAnimationFrom('.presentaition__gsap-anim', '.presentaition', '-50 center', '+=40%', 1, {
    scale: 0.1,
    opacity: 0,
    stagger: 0.25,
  });
});




