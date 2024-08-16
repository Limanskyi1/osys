document.addEventListener("DOMContentLoaded", () => {
  const animationOptions = [
    { selector: "#selector1", duration: 2500 },
    { selector: "#selector2", duration: 4500 },
    { selector: "#cta-svg-left-path", duration: 3500 },
    { selector: "#cta-svg-right-path", duration: 4500 },
    { selector: "#modal__svg-left-path", duration: 3500 },
    { selector: "#modal__svg-right-path", duration: 4500 },
  ];

  const createAnimations = () => {
    return animationOptions.map((option) =>
      KUTE.fromTo(
        option.selector,
        { draw: "-40% 0%", opacity: 1 },
        { draw: "100% 140%", opacity: 0 },
        { duration: option.duration }
      )
    );
  };

  const animations = createAnimations();

  const startAnimation = () => {
    animations.forEach((animation) => animation.start());
  };

  startAnimation();

  setInterval(() => {
    startAnimation();
  }, 6000);
});
