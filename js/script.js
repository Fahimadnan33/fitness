// swi 
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
  freeMode: true,
  watchSlidesProgress: true,

  
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  
  thumbs: {
    swiper: swiper,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },


});
// loder 
$(document).ready(function() {
  setTimeout(function() {
    $('#container').addClass('loaded');
    // Once the container has finished, the scroll appears
    if ($('#container').hasClass('loaded')) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });}
  }, 3000);});


// form
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
 //aos//
 AOS.init({
  offset: 90, 
  delay: 50,
  duration: 1000,
  easing: 'ease'
});







$('.demo').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '40px',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        autoplay: true,
       autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 2000,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  

});

// $('.slider-for').slick({
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   focusOnSelect: true
// });

// $('a[data-slide]').click(function(e) {
//   e.preventDefault();
//   var slideno = $(this).data('slide');
//   $('.slider-nav').slick('slickGoTo', slideno - 1);
// });




$(document).ready(function() {
  $('.content').counterUp({
      delay: 10,
      time: 1000
    });



   


});

