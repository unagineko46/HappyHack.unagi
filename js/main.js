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
    autoplay: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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

  window.addEventListener('load', function(){
    particlesJS('particles-js',{
      "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,//密度を変更する
            "value_area": 1000//密集度
          }
        },
        //色
        "color": {
          "value": ["26B7BC","008FB3","FAF44B","5B98D2","4DE2D6"]
        },
        //シェイプの形状
        "shape": {
          "type": "polygon",//シェイプの形(円)
          //※typeがpolygon(多角形)の場合
          "polygon": {
            "nb_sides": 5//角の数
            },
        },
        //シェイプの透明度
        "opacity": {
          "value": 1,//透明度(1で不透明)
          "random": false,//透明度をランダムにしない
        },
        //シェイプの大きさ
        "size": {
          "value": 80,//大きさ
          "random": true,//大きさをランダムにする falseで均一
          "anim": {
            "enable": false,//シェイプの大きさをアニメーションしない
            "speed": 10,//アニメーションのスピード
            "size_min": 0.1,//サイズの最小値
            "sync": false//各シェイプを同時に動かさない
          }
        },
        //シェイプ間を結ぶ線
        "line_linked": {
          "enable_auto": false,//線をつけない
          "distance": 0,//繋がりの数
          "color": "#000",//線の色
          "opacity": 1,//透明度　1で不透明
          "width": 1//線の太さ
        },
        //シェイプの動き
        "move": {
          "enable": true,//動きを付ける
          "speed": 2,//シェイプが動くスピード数値が大きいと早い
          "direction": "none",//動きの方向(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-left)
          "straight": false,//動きを動きを止めるか否か
          "out_mode": "bounce",//外枠に達した際のシェイプの動き　bounce→跳ね返る　out→フレームアウト
          /*シェイプを引き寄せる*/
          "attract": {
            "enable": false,//引き寄せない
            "rotateX": 600,//横軸の指定
            "rotateY": 1200//横軸の指定
          }
        }
      },
        "retina_detect": true,//Retina Display(*高画素密度のディスプレイ)を対応する
      }
    );
  });


});


