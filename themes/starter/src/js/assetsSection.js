import { createScrollAnimationFrom } from "./utils";

document.addEventListener('DOMContentLoaded',() => {
  const moveElementOnPath = (
    pathSelector,
    elementSelector,
    direction = "start",
    startPercent = 0,
    endPercent = 100,
    sensitivity = 2
  ) => {
    const path = document.querySelector(pathSelector);
    const element = document.querySelector(elementSelector);

    if (!path || !element) {
      console.error("SVG path or element not found!");
      return;
    }

    if (
      startPercent < 0 ||
      startPercent > 100 ||
      endPercent < 0 ||
      endPercent > 100 ||
      startPercent >= endPercent
    ) {
      console.error("Invalid start or end percent values.");
      return;
    }

    const updateElementPosition = () => {
      const scrollY = window.scrollY * sensitivity;
      const pathLength = path.getTotalLength();
      let startPosition, endPosition;

      if (direction === "start") {
        startPosition = pathLength * (startPercent / 100);
        endPosition = pathLength * (endPercent / 100);
      } else if (direction === "end") {
        startPosition = pathLength * (endPercent / 100);
        endPosition = pathLength * (startPercent / 100);
      } else {
        console.error("Invalid direction parameter.");
        return;
      }

      const newPosition =
        startPosition +
        (scrollY / (document.body.scrollHeight - window.innerHeight)) *
          (endPosition - startPosition);
      const point = path.getPointAtLength(newPosition);
      element.setAttribute("x", point.x - 20);
      element.setAttribute("y", point.y - 20);
    };

    window.addEventListener("load", updateElementPosition);
    window.addEventListener("scroll", updateElementPosition);
  };
  moveElementOnPath("#motionPath", "#movingElem", "start", 90, 100);
  moveElementOnPath("#motionPath2", "#movingElem2", "start", 15, 20);
  moveElementOnPath("#motionPath2", "#movingElem3", "end", 5, 15);
  moveElementOnPath("#motionPath3", "#movingElem4", "start", 95, 100);
  moveElementOnPath("#motionPath3", "#movingElem5", "end", 10, 20);
})







document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const laptopScreenMediaQuery = window.matchMedia('(min-width: 992px)');

    const startAnimHome = '-100 center';

    if (laptopScreenMediaQuery.matches) {
        createScrollAnimationFrom('.assets__mockup-cards img', '.assets', startAnimHome, '+=40%', 1, {
            opacity: 0,
            scale:0,
            stagger: 0.25,
        });
        createScrollAnimationFrom('.assets__mockup > img', '.assets', startAnimHome, '+=40%', 1, {
            opacity: 0,
        });
        createScrollAnimationFrom('.assets__mockup-elem', '.assets', startAnimHome, '+=40%', 1, {
          opacity: 0,
          x: 100,
      }); 
    }
});