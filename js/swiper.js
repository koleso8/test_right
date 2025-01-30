const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: { delay: 6000 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
