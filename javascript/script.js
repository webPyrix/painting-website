// owl carousol 

// var owl = $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:25,
//     nav: false,
//     dots: false,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:2,
//             nav:false
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:3,
//             nav:false,
//             loop:false
//         }
//     }
// });

// $('.custom-next').click(function() {
//     owl.trigger('next.owl.carousel');
// });

// $('.custom-prev').click(function() {
//     owl.trigger('prev.owl.carousel');
// });



// projects section



$(document).ready(function () {

  const $owl = $('#pc-owl');

  /* INIT - SIMPLE */
  $owl.owlCarousel({
    items: 4,
    margin: 20,
    loop: false,      
    // center: true, 
    nav: false,
    dots: false,
    smartSpeed: 500,
    items:2,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });

  /* NEXT / PREV */
  $('#pc-next').on('click', function () {
    $owl.trigger('next.owl.carousel');
  });

  $('#pc-prev').on('click', function () {
    $owl.trigger('prev.owl.carousel');
  });




});










// manu 










