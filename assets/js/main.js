document.addEventListener('DOMContentLoaded', function() {

// Инициализируем карусель----------------------------------
const showSlider = new Swiper('.showcase-carousel', {
      loop: true,
      slidesPerView: 3,
      speed: 1000,
      // allowTouchMove: true,
      // freeMode: true,
      centeredSlides: true,

      breakpoints: {
            // mobile + tablet - 320-990
            320: {
              slidesPerView: 1,
              allowTouchMove: true
            },
            // desktop >= 991
            767: {
              slidesPerView: 3
            }
          },

      navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
      }
})
showSlider();

// ----------------------------------------------------------

// замеддляем видеофон
document.querySelector('video').playbackRate = 2


})