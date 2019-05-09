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

  // Validacion de Campos
  // var field_nombre = $(".input-nombre").val();
  // var field_correo = $(".input-correo").val();
  // var field_asunto = $(".input-tema").val();
  // var field_mensaje = $(".text-mensaje").val();

  // $('.validar-nombre').toggleClass('d-none');
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var correo = $(".input-correo").val();

  $('.input-nombre').focusout(function(){
    if($('.input-nombre').val() == "") {
      $('.validar-nombre').removeClass('d-none');
    } else if ($('.input-nombre').val() != "") {
      $('.validar-nombre').addClass('d-none');
    }
  });
  $('.input-correo').focusout(function(){
    if($('.input-correo').val() == "" || !testEmail.test($('.input-correo').val())) {
      $('.validar-correo').removeClass('d-none');
    } else if ($('.input-correo').val() != "") {
      $('.validar-correo').addClass('d-none');
    }
  });
  $('.input-tema').focusout(function(){
    if($('.input-tema').val() == "") {
      $('.validar-asunto').removeClass('d-none');
    } else if ($('.input-tema').val() != "") {
      $('.validar-asunto').addClass('d-none');
    }
  });
  $('.text-mensaje').focusout(function(){
    if($('.text-mensaje').val() == "") {
      $('.validar-mensaje').removeClass('d-none');
    } else if ($('.text-mensaje').val() != "") {
      $('.validar-mensaje').addClass('d-none');
    }
  });


  // Validacion de Envio
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });

  $("#enviarContacto").click(function(e) {
      var form_action = $('#formulario').attr('action');
      var nombre = $(".input-nombre").val();
      var correo = $(".input-correo").val();
      var asunto = $(".input-tema").val();
      var mensaje = $(".text-mensaje").val();
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

      if (nombre.length > 0 && correo.length > 0 && testEmail.test(correo) && asunto.length > 0 && mensaje.length > 0){

        $('.mensaje-formulario .mensaje-cargando').toggleClass('d-none');

        $.post( form_action, { name: nombre, email: correo, subject: asunto, message: mensaje } )
          .done(function(data) {

            if (data['errors']) {

              $.each(data['errors'], function( index, value ){});

            } else {

              console.log("Se envió!");
              $('.mensaje-formulario .mensaje-cargando').toggleClass('d-none');
              $('.mensaje-formulario .mensaje-enviado').toggleClass('d-none')
              .delay(4000).queue(function(){
                $('.mensaje-formulario .mensaje-enviado').toggleClass('d-none').dequeue();
              });


            }
          }
        ).fail(function(data){

            console.log(data);
            $('.mensaje-formulario .mensaje-cargando').toggleClass('d-none');
            $('.mensaje-formulario .mensaje-error').toggleClass('d-none');

        });

      } else {

        // $('.validar-nombre').toggleClass('d-none');

      }

  });

});
