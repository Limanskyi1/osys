document.addEventListener("DOMContentLoaded", function () {
    const animItems = document.querySelectorAll('._anim-items');

    if (animItems) {
        window.addEventListener('scroll', animOnScroll);
    
        function animOnScroll() {
            animItems.forEach((item) => {
                const animItemHeight = item.offsetHeight;
                const animItemOffset = offset(item).top;
                const animStart = 4;
    
                let animItemPoint = window.innerHeight - animItemHeight / animStart;
    
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
    
                if (
                    pageYOffset > animItemOffset - animItemPoint + 100 &&
                    pageXOffset < animItemOffset + animItemHeight
                ) {
                    item.classList.add('_active');
                }
                else {
                    item.classList.remove('_active');
                }
            });
        }
    
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollTop = window.pageYOffset || document.documentElement.scrollTop,
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
    
        animOnScroll();
    }

});
