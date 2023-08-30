
window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    const body = document.querySelector('body');

    // Меню
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuButton = document.querySelector('.btn-close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    menuButton.addEventListener('click', e => {
        menuButton.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
        body.classList.toggle('lock');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            menuButton.classList.remove('active');
            mobileMenu.classList.remove('is-active');
            body.classList.remove('lock');
        });
    });

    //слайдер "Наши преподаватели"
    const teachers = document.querySelector('.teachers');
    if (teachers) {
        const swiper = new Swiper('.teachers', {
            // Optional parameters
            loop: true,
            spaceBetween: 20,
            breakpoints: {
                374: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                580: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1023: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    // DOMContentLoaded
});


