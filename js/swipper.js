// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    daynamicBullests: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// Products Swipper

var ss = new Swiper(".swep_one", {
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1250: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

var rr = new Swiper(".myProduct", {
  slidesPerView: 4,
  spaceBetween: 10,

  autoplay: {
    delay: 2000,
    // spaceBetween: 30,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1250: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

var pp = new Swiper(".myCategories", {
  slidesPerView: 4,
  spaceBetween: 10,

  autoplay: {
    delay: 2000,
    spaceBetween: 10,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    1250: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
