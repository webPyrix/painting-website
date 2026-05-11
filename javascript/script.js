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



  const toggle    = document.getElementById('menuToggle');
  const overlay   = document.getElementById('offcanvasOverlay');
  const offcanvas = document.getElementById('offcanvas');


  function openMenu() {
    offcanvas.classList.add('is-open');
    overlay.classList.add('is-open');
    toggle.classList.add('is-open');
    offcanvas.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    offcanvas.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.classList.remove('is-open');
    offcanvas.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    offcanvas.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.classList.contains('is-open')) closeMenu();
  });

  // Nav links — close on click (for SPA-style)
  offcanvas.querySelectorAll('.offcanvas-nav a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });












