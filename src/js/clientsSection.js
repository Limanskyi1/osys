import { createScrollAnimationFrom } from "./utils";

document.addEventListener("DOMContentLoaded",() => {
    const chatButton = document.querySelector('.clients__chat-btn');
    const chatImg = document.querySelector('.clients__chat');
    chatButton.addEventListener('mouseover',() => {
        chatImg.classList.add('active');
    })
    chatButton.addEventListener('mouseout',() => {
        chatImg.classList.remove('active');
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');
  
    const startAnimHome = '-100 center';
  
    if (laptopScreenMediaQuery.matches) {
        createScrollAnimationFrom('.clients__tablet', '.clients', startAnimHome, '+=40%', 1, {
            x: 250,
            opacity:0,
        });
        createScrollAnimationFrom('.clients__chat', '.clients', startAnimHome, '+=40%', 1, {
            y: 250,
        });        
    }
  });
  