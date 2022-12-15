var swiper = new Swiper(".slide-character", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true,
    breakpoints:{
      320:{
        slidesPerView: 1.2,
      },
      560:{
        slidesPerView: 2.1,
      },
      991:{
        slidesPerView: 2.8,
      },
      1200:{
        slidesPerView: 3.5,
      },
    }
  });