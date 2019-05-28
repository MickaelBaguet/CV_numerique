$(function(){
  AOS.init({
    easing: 'ease-in-out-sine',
    duration: 500,
    once: true,
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 80) {
      $('nav').removeClass('solid-nav');
      $('a').removeClass('changeColor');
    } else {
      $('nav').addClass('solid-nav');
      $('a').addClass('changeColor');
    }
  });
  // Haut de page smooth
  $('#accueil').on('click', function(){
    $("html, body").animate({scrollTop : 0}, 1000);
  });
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
  });
  var test = true;
  $('.circles').offset();
  $(window).scroll(function () {
    // if ( ($('#slide2').is(':in-viewport')) && (test == true) ) {
    if ($(window).scrollTop() >= 300) {
      test = false;
      // Cercle html5
      $('#html').circleProgress({value: 0.9, fill: {gradient: ["#e65100", "#ff6d00"]}})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
      });
      // Cercle css
      $('#css').circleProgress({value: 0.80, fill: {gradient: ["#0277bd", "#039be5"]}})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
      });
      // Cercle bootstrap
      $('#bootstrap').circleProgress({value: 0.80, fill: {gradient: ["#5f36aa", "#763ae8"]}})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
      });
      // Cercle javascript
      $('#javascript').circleProgress({value: 0.7, fill: {gradient: ["#ffd400", "#ffe45e"]}})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
      });
      // Cercle jquery
      $('#jquery').circleProgress({value: 0.70, fill: {gradient: ["#172c45", "#193556"]}})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
      });
      // Cercle angularjs
      $('#angularjs').circleProgress({value: 0.6, fill: {gradient: ["#b71c1c", "#dd2c00"]}})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
      });
      // Cercle php
      $('#php').circleProgress({value: 0.1, fill: { color: '#00bcd4' }})
      .on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(10 * progress) + '<i>%</i>');
      });
    }
  });

});
