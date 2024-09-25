import { isSectionInView, createScrollAnimationFrom } from "./utils";

const colorsForElem = [
  "linear-gradient(180deg, #e94530 0%, #efb806 100%)",
  "linear-gradient(145deg, #cb85fb 0%, #eb71aa 100%)",
  "linear-gradient(140deg, #9a4ee4 0%, #4055dd 100%)",
  "linear-gradient(144deg, #3891d6 0%, #04d2e3 100%)",
  "linear-gradient(140deg, #54b9d3 0%, #49de99 100%)",
];

const bgForIcons = [
  "linear-gradient(303deg, #ff9400 0%, #ffbb21 100%)",
  "linear-gradient(145deg, #cb85fb 0%, #eb71aa 100%)",
  "linear-gradient(140deg, #9a4ee4 0%, #4055dd 100%)",
  "linear-gradient(144deg, #3891d6 0%, #04d2e3 100%)",
];

document.addEventListener("DOMContentLoaded", () => {
  const paths = document.querySelectorAll(".startup__roadmap .line > path");
  const items = document.querySelectorAll(".startup__item");
  const elem = document.querySelector("#movingElement");
  const icons = document.querySelectorAll(".startup__roadmap-icon");
  let currentPathIndex = 0;
  const containerDiv = document.querySelector(".startup__roadmap");
  const minWidth = 1024;

  const startAnimation = () => {
    const firstPath = paths[currentPathIndex];
    const pathLength = firstPath.getTotalLength();
    const animationDuration = 3000;
    let startTime = null;
    let direction = "end";
    const updateElementPosition = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      let progress = elapsed / animationDuration;

      if (direction === "end") {
        progress = 1 - progress;
      }

      const pointAlongPath = firstPath.getPointAtLength(progress * pathLength);
      elem.setAttribute("x", pointAlongPath.x - 10);
      elem.setAttribute("y", pointAlongPath.y - 10);

      items[currentPathIndex].classList.add("active");

      elem.style.background = colorsForElem[currentPathIndex];
      elem.style.opacity = 1;
      icons[currentPathIndex].classList.add("active");
      icons[currentPathIndex].querySelector("div").style.background =
        bgForIcons[currentPathIndex];
      icons[
        currentPathIndex
      ].style.border = `1px solid ${icons[currentPathIndex].dataset.border}`;

      if (
        (direction === "start" && progress <= 1) ||
        (direction === "end" && progress >= 0)
      ) {
        requestAnimationFrame(updateElementPosition);
      } else {
        currentPathIndex++;
        if (currentPathIndex < paths.length) {
          startAnimation();
        } else {
          const lastItemIndex = items.length - 1;
          const lastColorIndex = colorsForElem.length - 1;
          if (items[lastItemIndex]) {
            items[lastItemIndex].classList.add("active");
            elem.style.background = colorsForElem[lastColorIndex];
            elem.style.opacity = 0;
          }
        }
        if (currentPathIndex < items.length) {
          setTimeout(() => {
            const itemToScrollTo = items[currentPathIndex];
            containerDiv.scrollTop = itemToScrollTo.offsetTop - 30;
          }, 500);
        }
      }
    };
    requestAnimationFrame(updateElementPosition);
  };

  const handleScroll = () => {
    if (window.innerWidth <= minWidth) {
      return;
    } else {
      const section = document.querySelector(".startup");
      if (isSectionInView(section)) {
        startAnimation();
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const startupItems = document.querySelector(".startup__items");
  const svg = document.querySelector(".startup__roadmap .line");
  let fora = 50;
  const getHeight = () => {
    const height = Math.round(startupItems.scrollHeight);
    svg.style.height = height - fora + "px";
  };

  getHeight();

  window.addEventListener("resize", getHeight);
});

document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector(".line");
  const paths = svg.querySelectorAll(".path");
  const icons = document.querySelectorAll(".startup__roadmap-icon");
  const items = document.querySelectorAll('.startup__item');

  paths.forEach((path, index) => {
    const length = path.getTotalLength();
    const halfLength = length / 2;
    const point = path.getPointAtLength(halfLength);

    const icon = icons[index];
    icon.setAttribute("x", point.x - 30);
    icon.setAttribute("y", point.y - 30);
  });

  const updateIconsForSmallScreen = () => {
    const newTag = 'div'; 
  
    if (window.innerWidth < 700) {
      icons.forEach((icon, index) => {
        if (index < items.length - 1) {
          const item = items[index];
          if (!item.querySelector(`${newTag}.startup__roadmap-icon`)) { 

            const clonedIcon = document.createElement(newTag);
            clonedIcon.classList = icon.classList.value;
            clonedIcon.innerHTML = icon.innerHTML;
            clonedIcon.classList.add('active');
            clonedIcon.querySelector("div").style.background = bgForIcons[index];
            item.insertBefore(clonedIcon, item.firstChild);
          }
        }
      });
      items.forEach(item => item.classList.add('active'));
    } else {
      items.forEach(item => {
        const clonedIcons = item.querySelectorAll(`${newTag}.startup__roadmap-icon`);
        if(clonedIcons)  clonedIcons.forEach(clonedIcon => clonedIcon.remove());
      });
    }
  };
  
  updateIconsForSmallScreen();
  window.addEventListener('resize', updateIconsForSmallScreen);
});

document.addEventListener("DOMContentLoaded", () => {
  const laptopScreenMediaQuery = window.matchMedia("(min-width: 992px)");
  const startAnimHome = "-100 center";
  if (laptopScreenMediaQuery.matches) {
    createScrollAnimationFrom(
      ".startup__info",
      ".startup",
      startAnimHome,
      "+=40%",
      1,
      {
        opacity: 0,
        y: 100,
        scale: 0.7,
      }
    );
  }
});
