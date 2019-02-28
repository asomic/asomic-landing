$(document).ready(function(){

  $('#button-menu-open').click(function(){
    $('html, body').toggleClass('lock-scroll');

    $('#main-menu').addClass('fadeIn header-slow');
    $('#button-menu-open').toggleClass('is-active');

    $('.rrss').toggleClass('active-rrss');
    $('#main-menu').toggleClass('active-menu');
    $('header.main-header').toggleClass('lock-header');
  });

  if ($(document).width() >= 1200) {

    // Scroll To
      $("#goToProyectos").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#proyectos").offset().top
        }, 2000);
        return false;
      });
      $("#goToServicios").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#servicios").offset().top-20
        }, 2000);
        return false;
      });
      $("#goToFilosofia").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#filosofia").offset().top-60
        }, 2000);
        return false;
      });
      $("#goToContacto").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contacto").offset().top
        }, 2000);
        return false;
      });

  } else {

    $("#goToProyectos").click(function() {
      $('html, body').toggleClass('lock-scroll');

      $('#main-menu').addClass('fadeIn header-slow');
      $('#button-menu-open').toggleClass('is-active');

      $('.rrss').toggleClass('active-rrss');
      $('#main-menu').toggleClass('active-menu');
      $('header.main-header').toggleClass('lock-header');

      $([document.documentElement, document.body]).animate({
          scrollTop: $("#proyectos").offset().top
      }, 1500);

      return false;
    });

    $("#goToServicios").click(function() {
      $('html, body').toggleClass('lock-scroll');

      $('#main-menu').addClass('fadeIn header-slow');
      $('#button-menu-open').toggleClass('is-active');

      $('.rrss').toggleClass('active-rrss');
      $('#main-menu').toggleClass('active-menu');
      $('header.main-header').toggleClass('lock-header');

      $([document.documentElement, document.body]).animate({
          scrollTop: $("#servicios").offset().top-20
      }, 1300);

      return false;
    });

    $("#goToFilosofia").click(function() {
      $('html, body').toggleClass('lock-scroll');

      $('#main-menu').addClass('fadeIn header-slow');
      $('#button-menu-open').toggleClass('is-active');

      $('.rrss').toggleClass('active-rrss');
      $('#main-menu').toggleClass('active-menu');
      $('header.main-header').toggleClass('lock-header');

      $([document.documentElement, document.body]).animate({
          scrollTop: $("#filosofia").offset().top-60
      }, 1700);

      return false;
    });

    $("#goToContacto").click(function() {
      $('html, body').toggleClass('lock-scroll');

      $('#main-menu').addClass('fadeIn header-slow');
      $('#button-menu-open').toggleClass('is-active');

      $('.rrss').toggleClass('active-rrss');
      $('#main-menu').toggleClass('active-menu');
      $('header.main-header').toggleClass('lock-header');

      $([document.documentElement, document.body]).animate({
          scrollTop: $("#contacto").offset().top
      }, 2000);

      return false;
    });

  }

// Back icon
  $('#goToDown').click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#quienes-somos").offset().top-40
    }, 1000);
    return false;
  });

// On hover
  $('.quienes-somos .s-1').mouseover(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/img-marcas.jpg)');
  }).mouseout(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/quienes-somos.jpg)');
  });
  $('.quienes-somos .s-2').mouseover(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/img-app.jpg)');
  }).mouseout(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/quienes-somos.jpg)');
  });
  $('.quienes-somos .s-3').mouseover(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/img-iot.jpg)');
  }).mouseout(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/quienes-somos.jpg)');
  });
  $('.quienes-somos .s-4').mouseover(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/img-negocios.jpg)');
  }).mouseout(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/quienes-somos.jpg)');
  });
  $('.quienes-somos .s-5').mouseover(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/img-empresas.jpg)');
  }).mouseout(function() {
      $('.quienes-somos .img').css('background-image', 'url(../img/quienes-somos.jpg)');
  });

  AOS.init({
    once: true
  });



});
