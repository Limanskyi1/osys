document.addEventListener('DOMContentLoaded',() => {
  const scrollerIntroAnim = (delay) => {
    const letters = document.querySelectorAll(".intro__scroller .circle path");
    let index = 0;
  
    if (letters.length > 0) {
      console.log(letters);
      setInterval(() => {
        letters.forEach((item) => (item.style.fill = "white"));
        letters[index].style.fill = "#4f89ff";
        index++;
        if (index >= letters.length) {
          index = 0;
        }
      }, delay);
    }
  };
  
  scrollerIntroAnim(500);
  
})

