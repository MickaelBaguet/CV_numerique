$(function(){
  AOS.init({
    easing: 'ease-in-out-sine',
    duration: 500,
    once: true,
  });
  // On applique le changement pour éviter une nav barre vide en milieu de page
  // en cas de refresh
  if ($(window).scrollTop() >= 80) {
    $('nav').addClass('solid-nav');
    $('nav a').addClass('changeColor');
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() <= 100) {
      $('nav').removeClass('solid-nav');
      $('nav a').removeClass('changeColor');
    } else {
      $('nav').addClass('solid-nav');
      $('nav a').addClass('changeColor');
    }
  });
  // Haut de page smooth
  $('#accueil').on('click', function(){
    $("html, body").animate({scrollTop : 0}, 1000);
  });
  // Ancre smooth
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
  });
  // Animation des progress bar (ne se fait qu'une seule fois)
  var test = true;
  $(window).scroll(function () {
    // Si l'id est dans la vue
    if ( ($('#html').is(':in-viewport')) && (test == true) ) {
      animateCircle();
    }
  });
  function animateCircle(){
    test = false;
    // Cercle html5
    $('#html').circleProgress({value: 0.9,animation: {duration: 2500}, fill: {gradient: ["#e65100", "#ff6d00"]}})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });
    // Cercle css
    $('#css').circleProgress({value: 0.80,animation: {duration: 2500}, fill: {gradient: ["#0277bd", "#039be5"]}})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });
    // Cercle bootstrap
    $('#bootstrap').circleProgress({value: 0.80,animation: {duration: 2500}, fill: {gradient: ["#5f36aa", "#763ae8"]}})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });
    // Cercle javascript
    $('#javascript').circleProgress({value: 0.7,animation: {duration: 2500}, fill: {gradient: ["#ffd400", "#ffe45e"]}})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    });
    // Cercle jquery
    $('#jquery').circleProgress({value: 0.70,animation: {duration: 2500}, fill: {gradient: ["#172c45", "#193556"]}})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    });
    // Cercle angularjs
    $('#angularjs').circleProgress({value: 0.6,animation: {duration: 2500}, fill: {gradient: ["#b71c1c", "#dd2c00"]}})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
    });
    // Cercle php
    $('#php').circleProgress({value: 0.1,animation: {duration: 2500}, fill: { color: '#00bcd4' }})
    .on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(10 * progress) + '<i>%</i>');
    });
  }
  // Animation des cards
  $('.hiddenTxt').css({visibility: "hidden"});
  $('.card').on('mouseenter',function(){
    $(this).animate({height: "320px"},500);
    $(this).find('.hiddenTxt').animate({opacity: 1}, 500).css({visibility: "visible"});
  });
  $('.card').on('mouseleave',function(){
    $(this).animate({height: "240px"},500);
    $(this).find('.hiddenTxt').animate({opacity: 0}, 500);
  });

});
