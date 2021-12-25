(function ($) {
  "user strict";

// let logo = assets/images/logo.png;

// if(localStorage.getItem('logo')){
//   $('.logo').addClass('change');
//   logo = assets/images/logo2.png;
// }else{
//   $('.logo').removeClass('change');
//   logo = assets/images/logo1.png;
// }

// $('.change-combo').on('click', function () {
//   $('.logo').addClass('change');
//   localStorage.setItem('logo', true);
//   logo = assets/images/logo2.png;
//   setLogo();
// });

// $('.change-combo').on('click', function () {
//   $('.logo').removeClass('change');
//   localStorage.removeItem('logo');
//   logo = assets/images/logo.png;
//   setLogo();
// })

// function setLogo(){
//     $('logo').attr('src', logo);
//   }
 


  var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        autoplay: false,
        grabCursor: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
          },
          autoplay: {
            speed: 500,
            delay: 2000,
          },
          speed: 500,

      });
})(jQuery);
