import { createScrollAnimationFrom } from "./utils";

document.addEventListener("DOMContentLoaded",() => {
    const switcherTheme = document.querySelector('.switcher');
    const mobileSection = document.querySelector('.mobile');
    const images = document.querySelectorAll('.mobile__tablet img');
    switcherTheme.addEventListener('click' , () => {
        if(switcherTheme.classList.contains("light")){
            switcherTheme.classList.remove("light");
            mobileSection.classList.remove("light");
        } else {
            switcherTheme.classList.add("light");
            mobileSection.classList.add("light");
        }
    })
    const changeImage = () => {
        images.forEach((img) => {
            const src = img.src;
            if (window.innerWidth <= 992) {
                if(img.src.includes('mobile-tablet-mob')) return;
                img.src = src.replace(/mobile-tablet/, 'mobile-tablet-mob');
            } else {
                img.src = src.replace(/mobile-tablet-mob/, 'mobile-tablet');
            }
        });
    }
    changeImage();
    window.addEventListener('resize', changeImage);
})




document.addEventListener('DOMContentLoaded', () => {
    const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');
    const startAnimHome = '-100 center';
    if (laptopScreenMediaQuery.matches) {
        createScrollAnimationFrom('.mobile__tablet', '.mobile', startAnimHome, '+=40%', 1, {
            x: 150,
            opacity: 0,
        });
        createScrollAnimationFrom('.mobile__phone', '.mobile', startAnimHome, '+=40%', 1, {
            y: 150,
            opacity: 0,
        });
    }
  });
  
  