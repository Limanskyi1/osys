document.addEventListener("DOMContentLoaded", function () {

    function updateURL(param) {
        if (history.pushState) {
            let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            let newUrl = baseUrl + `?doc=${param}`;
            history.pushState(null, null, newUrl);

        } else {
            console.warn('History API не поддерживается');
        }
    }


    let tabNav = Array.from(document.querySelectorAll('.tabs-nav__item')),
        tabContent = Array.from(document.querySelectorAll('.tab')),
        tabName,
        screenWidth = document.documentElement.clientWidth;


    let paramURL = window.location.search;

    if (paramURL) {
        let activeEl = paramURL.replace('?doc=', '');

        tabNav.forEach(item => {
            item.classList.remove('is-active');
            
            if(item.getAttribute('data-tab-name') == activeEl) {
                item.classList.add('is-active');
            }
        });

        tabContent.forEach(item => {
            item.classList.remove('is-active');

            if (item.classList.contains(activeEl)) {
                item.classList.add('is-active');
            }
        });
    }


    tabNav.forEach(item => {

        item.addEventListener('click', function () {

            tabNav.forEach(item => {
                item.classList.remove('is-active');
            });

            this.classList.add('is-active');

            tabName = this.getAttribute('data-tab-name');

            tabContent.forEach(item => {
                if (item.classList.contains(tabName)) {
                    item.classList.add('is-active');
                    updateURL(tabName);
                    if (screenWidth < 992) {
                        item.scrollIntoView({
                            block: "start",
                            inline: "nearest",
                            behavior: "smooth",
                        });
                    }

                } else item.classList.remove('is-active');
            });

        });
    });
});

document.addEventListener("DOMContentLoaded", function () {});