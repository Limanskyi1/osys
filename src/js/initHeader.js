document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      window.pageYOffset >= 100
        ? header.classList.add('active')
        : header.classList.remove('active');
    });
  }
});
