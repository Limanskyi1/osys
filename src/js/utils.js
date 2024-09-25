export function isSectionInView(section, offset = 400) {
  const rect = section.getBoundingClientRect();
  const topBoundary = window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= topBoundary - offset && rect.bottom >= 0;
}
export const createScrollAnimationFrom = (selector, trigger, start, end, scrub, animationProps) => {
  gsap.from(selector, {
      scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
      },
      ...animationProps,
  });
}

