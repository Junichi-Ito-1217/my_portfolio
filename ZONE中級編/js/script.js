
$(function () {
$('#rec-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidersToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    centerPadding: '100px',
    centerMode: true,

    });

});



$(function (){
$('#nav-btn').on('click', function () {
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
   });
});


$(function (){
$('.js-accordion').on('click', function () {
    // $(this).toggleClass('-active');
    $(this).next().slideToggle();
   })
});


$(function (){
new WOW().init();

});
