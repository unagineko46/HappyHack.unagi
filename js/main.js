$(function($){

  $('.firstview').bgSwitcher({
    images:['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg',],
    interval: 5000,
    loop: true
  });


  $(window).scroll(function(){
    var targetElement = $('.fadein-1').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein-1').css('opacity','1');
        $('.fadein-1').css('transform','translateY(0)');
    }
  });

  $(window).scroll(function(){
    var targetElement = $('.fadein-2').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein-2').css('opacity','1');
        $('.fadein-2').css('transform','translateY(0)');
    }
  });

  $(window).scroll(function(){
    var targetElement = $('.fadein-3').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein-3').css('opacity','1');
        $('.fadein-3').css('transform','translateY(0)');
    }
  });

  $(window).scroll(function(){
    var targetElement = $('.fadein-4').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200){
        $('.fadein-4').css('opacity','1');
        $('.fadein-4').css('transform','translateY(0)');
    }
  });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    pauseOnhover: true,
    dots: true,
    centerMode: true,
    centerPadding: '20%',
  });

$('.more-button').on('click',function() {
  if ($('.open-box').is(':hidden')){
    $('.open-box').slideDown(),
    $(this).text('close');
    $(this).css('background-color','#808080');
    $(this).css('color', '#0035ff80');
  } else {
    $('.open-box').slideUp();
    $(this).text('more');
    $(this).css('background-color','#fabb51');
  }
  });

  $(".modal-button").modaal();

  $('nav a[href^="#"]').click(function(){
    var adjust =0;
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == ""? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
  });
});


