document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 40,
    navigation: {
      nextEl: ".integrations-button-next",
      prevEl: ".integrations-button-prev",
    },
    breakpoints: {
      1100: {
        slidesPerView: 3,
      },
      720: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".integrations",
        start: "-100 center",
        end: "+=60%",
        scrub: true,
      },
    })
    .from(".integrations h2", { x: -50, opacity: 0 })
    .from(".integrations .swiper", { opacity: 0,transform: "matrix(0.8, 0, 0, 0.8, 0, 0)"});
});
