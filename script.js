const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Setas de navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsividade dos sliders
  breakpoints:{
    0:{
        slidesPerView: 1
    },
    620:{
        slidesPerView: 2
    },
    1024:{
        slidesPerView:4
    }
  }
});