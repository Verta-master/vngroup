//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

if (window.innerWidth < 1022) {
  $('.nav__link').click(function(e) {
    e.preventDefault();
    $(this).next().slideToggle();
  });
  $('.footer__block--menu .footer__title').click(function() {
    $('.footer__menu').slideToggle();
  });
  $('.footer__block--address .footer__title').click(function() {
    $('address').slideToggle();
  });
}
