import { isSectionInView } from "./utils";
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".crm__tab");
  const tabsContentItems = document.querySelectorAll(".crm__content > div");
  const slideDuration = 10000;

  let currentIndex = 0;
  let slideInterval;
  let isSlideShowRunning = false;

  const changeSlide = (index) => {
    tabs.forEach((item) => item.classList.remove("active"));
    tabsContentItems.forEach((item) => item.classList.remove("active"));

    tabs[index].classList.add("active");
    tabsContentItems[index].classList.add("active");
  };

  const startSlideShow = () => {
    if (!isSlideShowRunning) {
      slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabs.length;
        changeSlide(currentIndex);
      }, slideDuration);
      isSlideShowRunning = true;
    }
  };

  const stopSlideShow = () => {
    if (isSlideShowRunning) {
      clearInterval(slideInterval);
      isSlideShowRunning = false;
    }
  };

  const init = () => {
    changeSlide(currentIndex);
    startSlideShow();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      stopSlideShow();
      currentIndex = index;
      changeSlide(index);
      startSlideShow();
    });
  });

  function handleScroll() {
    const section = document.querySelector(".crm");
    if (isSectionInView(section)) {
      if (window.innerWidth >= 992) {
        init();
      }
      window.removeEventListener("scroll", handleScroll);
    }
  }

  function handleResize() {
    if (window.innerWidth >= 992) {
      if (!isSlideShowRunning) {
        startSlideShow();
      }
    } else {
      stopSlideShow();
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
  handleResize();
});

document.addEventListener("DOMContentLoaded", () => {
  const rearrangeForMobile = () => {
    const isMobile = window.innerWidth <= 992;
    const tabsContainer = document.querySelector(".crm__tabs");
    const contentContainer = document.querySelector(".crm__content");
    const container = document.querySelector(".crm .container");

    let mobileContainer = document.querySelector(".crm__content-mob");

    if (!mobileContainer) {
      mobileContainer = document.createElement("div");
      mobileContainer.classList.add("crm__content-mob");

      const tabs = Array.from(tabsContainer.children);
      const contents = Array.from(contentContainer.children);

      tabs.forEach((tab, index) => {
        const tabClone = tab.cloneNode(true);
        const contentClone = contents[index].cloneNode(true);
        tabClone.classList.add("active");
        contentClone.classList.add("active");
        mobileContainer.appendChild(contentClone);
        mobileContainer.appendChild(tabClone);
      });
      container.appendChild(mobileContainer);
    }

    if (isMobile) {
      tabsContainer.style.display = "none";
      contentContainer.style.display = "none";
      mobileContainer.style.display = "flex";
    } else {
      tabsContainer.style.display = "block";
      contentContainer.style.display = "block";
      mobileContainer.style.display = "none";
    }
  };

  window.addEventListener("load", rearrangeForMobile);
  window.addEventListener("resize", rearrangeForMobile);
});
