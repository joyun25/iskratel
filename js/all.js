// Selectors
const menuItemPc = document.querySelectorAll('.header_menu-pc a');
const submenuPc = document.querySelector('.header_submenu-pc');
const data = [
    ["item", "item", "item", "item", "item", "item"],
    ["item", "item", "item", "item", "item"],
    ["item", "item", "item", "item", "item", "item"],
    ["item", "item"],
    ["item", "item", "item", "item", "item", "item", "item"]
];
let str;


// menu mobile
$.when( $.ready ).then(function() {
    $('.header_menu-mb a').click(function (e)
    {
        e.preventDefault();
        $('.header_menu-mb ul').slideToggle(500);
    });
});

// menu pc
menuItemPc.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        data[index].forEach(item => {
            str += `<li><a href="#">${item}</a></li>`;
        })
        submenuPc.innerHTML = str;
        str = '';
    });
    element.addEventListener('mouseover', () => {
        submenuPc.innerHTML = '';
    });
});

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // autoplay
    autoplay: {
        delay: 3000,
    },
});