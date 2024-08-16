document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('#progressCircle');

    scroller.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener('scroll', function() {
        const textElement = document.querySelector('#progressCircle text');
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / documentHeight) * 100;
        const circle = document.getElementById('innerCircle');
        const circumference = parseFloat(circle.getAttribute('r')) * 2 * Math.PI;
        const dashOffset = circumference * (1 - scrollPercentage / 100);
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = dashOffset;
        scrollPercentage > 99.9 ? scroller.classList.add('done') : scroller.classList.remove('done');
        textElement.textContent = `${Math.round(scrollPercentage)}%`;
    });
});
