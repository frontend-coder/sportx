$(document).ready(() => {
  $('#clients_slider').slick({
    dots: true,
    arrows: false,
    //   autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll:2,

  });
    $(".top_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top,
         heightMenu = $('.top_line').height();
        $('body,html').animate({scrollTop: (top - heightMenu)}, 2000);
    });






//   $(function() {
//     $('.top_menu ul li a').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });

// });


﻿jQuery(function($) {
           $(window).scroll(function(){
               if($(this).scrollTop()>300){
      $('.top_line').addClass('fixed').fadeIn(1000);
    } else if ($(this).scrollTop()<300){
             $('.top_line').removeClass('fixed').fadeIn(1000);
           }
         })
      });

//     $(window).scroll(function(){
//       if ($(this).scrollTop() > 100) {
//           $('.top_line').addClass('fixed');
//       } else {
//           $('.top_line').removeClass('fixed');
//       }
// });


  // $(window).scroll(() => {
  //   const sc = $(window).scrollTop();
  //   if (sc > 500) {
  //     $('.top_line').addClass('fixed');
  //   } else {
  //     $('.top_line').removeClass('fixed');
  //   }
  // });




});
