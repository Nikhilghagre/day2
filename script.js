var t1 = gsap.timeline();

t1.from('.img-sub-conatiner2 img',{
    x:70,
   duration:1,
   ease:Expo,
})

t1.from('.text-container',{
    y:50,
    opacity:0,
   duration:1,
   ease:Expo,
})

t1.to('.text-container',{
    y:0,
    opacity:1,
   duration:1,
   
})

t1.from('.row1 img ,.row2 img,.row3 img',{
    opacity:0, 
})
t1.to('.row1 img ,.row2 img,.row3 img',{
    opacity:1, 
    ease:Expo
})



    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 2,
      cssMode: true,
      freeMode: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        720: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1200: {
          slidesPerView:4,
          spaceBetween: 40
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  