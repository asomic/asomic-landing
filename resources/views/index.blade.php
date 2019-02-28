<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>asomic - Agencia Digital</title>
    <link href="https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Condensed:400,600,700,800" rel="stylesheet">
    <link href="{{ asset('/css/hamburgers.css') }}" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('/css/app.min.css') }}">
  </head>
  <body>
    <!-- Cabecera & presentacion -->
    <section class="presentacion">
      <header class="main-header fadeIn delay-10 slow">

        <!-- Logo -->
        <div class="branding">
          <a href="/">
            <img src="img/logo.png" alt="asomic">
          </a>
        </div>

        <!-- Menu Principal -->
        <div class="menu">
          <div class="the-menu" id="main-menu">
            <a href="#" >inicio</a>
            <a href="#" id="goToProyectos">proyectos</a>
            <a href="#" id="goToServicios">servicios</a>
            <a href="#" id="goToFilosofia">filosofía</a>
            <a href="#" id="goToContacto">contacto</a>
          </div>
          <button class="hamburger hamburger--squeeze" type="button" id="button-menu-open">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <!-- Redes Sociales -->
        <div class="rrss">
          <a href="#"><img src="{{ asset('/ico/ico-facebook.svg') }}" alt="Facebook"></a>
          <a href="#"><img src="{{ asset('/ico/ico-instagram.svg') }}" alt="Instagram"></a>
          <a href="#"><img src="{{ asset('/ico/ico-linkedin.svg') }}" alt="LinkedIn"></a>
          <a href="#"><img src="{{ asset('/ico/ico-whatsapp.svg') }}" alt="WhatsApp"></a>
        </div>

      </header>

      <div class="intro-message fadeIn delay-20 slow">
        <h1><span class="color-green">Productos digitales</span><br>para llevar tu negocio<br> a otras fronteras.</h1>
      </div>

      <div class="godown updown delay-20 middle-slow">
        <img src="{{ asset('/ico/go-down.png')}}" alt="" id="goToDown">
      </div>

    </section>

    <!-- Contenido -->
    <main>

      <div class="quienes-somos-wrapper fadeIn delay-20 middle-slow" id="quienes-somos">
        <div class="quienes-somos">
          <div class="texto">
            <h6>Quienes Somos</h6>
            <h3>
              Somos una agencia digital,
              creamos <span class="color-green selected-s s-1">marcas</span>,
              <span class="color-green selected-s s-2">aplicaciones</span>,
              implementamos <span class="color-green selected-s s-3">iOT</span>,
              desarrollamos <span class="color-green selected-s s-4">negocios</span>
              y <span class="color-green selected-s s-5">hacemos crecer a las empresas</span>
              pensando en el futuro.
            </h3>
          </div>
          <div class="img"></div>
        </div>
      </div>

      <section class="servicios fadeIn delay-20 middle-slow" id="servicios">
        <h6 class="light-title">Servicios</h6>
        <div class="contenido">
          <h2 data-aos="fade-left" data-aos-duration="1000">Productos que ayudan a entender la realidad inmediata de tu negocio.</h2>
          <div class="items-servicios">
            <div class="item" data-aos="fade-left" data-aos-duration="1100">
              <img src="ico/ico-identidad.svg" alt="Identidad de Marca">
              <h4>Identidad <br>de Marca</h4>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1200">
              <img src="ico/ico-iot.svg" alt="iOT">
              <h4>iOT</h4>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1300">
              <img src="ico/ico-desarrollo.svg" alt="Desarrollo Digital">
              <h4>Desarrollo <br>Digital</h4>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1400">
              <img src="ico/ico-data.svg" alt="Data Analytics">
              <h4>Data <br>Analytics</h4>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1500">
              <img src="ico/ico-marketing.svg" alt="Marketing Digital">
              <h4>Marketing <br>Digital</h4>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1600">
              <img src="ico/ico-ti.svg" alt="Servicios TI">
              <h4>Servicios <br>TI</h4>
            </div>
          </div>
        </div>
      </section>

      <section class="filosofia" id="filosofia">
        <div class="data" data-aos="fade-left" data-aos-duration="1000">
          <h6>Nuestra Filosofía</h6>
          <h3><span class="color-green">Calidad antes que cantidad</span>.<br> Servicio personalizados para cada necesidad.</h3>
        </div>
        <div class="img" data-aos="fade-right" data-aos-duration="1000"></div>
      </section>

      <section class="productos" id="proyectos">
        <h6 class="light-title">Proyectos Destacados</h6>
        <div class="contenido">
          <h2 data-aos="fade-left" data-aos-duration="1000">No es un trabajo cuando sientes pasión por lo que haces.</h2>
          <div class="items-productos">
            <div class="item" data-aos="fade-left" data-aos-duration="1000">
              <div class="img" style="background-image: url('../img/prod-ps.jpg')"></div>
              <div class="data">
                <h6>App Android/iOS</h6>
                <h4>Pura Sangre CrossFit</h4>
                <p>
                  Con la app de Pura Sangre CrossFit puedes reservar horas en su box, confirmar asistencia, ver el workout de las clases, tus compañeros asistentes y también revisar tus pagos.
                  La app está diseñada y desarrollada para android e iOS.
                </p>
              </div>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1000">
              <div class="img" style="background-image: url('../img/prod-audito.jpg')"></div>
              <div class="data">
                <h6>App Corporativa</h6>
                <h4>Audito</h4>
                <p>
                  Con la WebApp Audito, se puede gestionar clientes y servicios de una empresa contable, además se obtiene información automatizada desde el SII, optimizando los tiempos y pudiendo acceder a ella desde cualquier dispositivo con internet.
                </p>
              </div>
            </div>
            <div class="item" data-aos="fade-left" data-aos-duration="1000">
              <div class="img" style="background-image: url('../img/prod-saga.jpg')"></div>
              <div class="data">
                <h6>Branding - Web</h6>
                <h4>SAGA Service</h4>
                <p>
                  Renovación de marca para SAGA Service, incluyó auditoria TI, de marca, rebranding y web corporativa adaptable a cualquier dispositivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <!-- Pie de página -->
    <footer class="site-footer-wrapper" id="contacto">
      <div class="site-footer">

        <!-- Seccion de Contacto -->
        <section class="contacto">
          <div class="texto" data-aos="fade-left" data-aos-duration="1000">
            <h6>Contacto</h6>
            <h3>
              Súbete a la nave, tenemos el equipamiento necesario para sacarle provecho al futuro.<br><br>
              <a href="mailto:contacto@asomic.com">contacto@asomic.com</a>
            </h3>
          </div>
          <div class="formulario">
            <form action="{{ url('/enviado') }}" method="POST">
              @csrf
              <input type="text" placeholder="Tu Nombre" name="name">
              <input type="text" placeholder="Tu Correo" name="email">
              <input type="text" placeholder="¿En qué te podemos ayudar?" name="theme">
              <textarea name="message" rows="8" cols="80" placeholder="Cuéntanos sobre tu proyecto" name="message"></textarea>
              <button id="enviarContacto" onClick="this.form.submit(); this.disabled=true; this.value='Enviando…'; ">Enviar</button>
            </form>
          </div>
        </section>

        <!-- Disclaimer -->
        <section class="disclaimer">
          <div class="brand">
            <img src="{{ asset('/img/logo.png') }}" alt="asomic">
          </div>
          <div class="copy">
            <p>asomic 2019. Todos los derechos reservados</p>
          </div>
          <div class="rrss">
            <a href="#"><img src="{{ asset('/ico/ico-facebook.svg') }}" alt="Facebook"></a>
            <a href="#"><img src="{{ asset('/ico/ico-instagram.svg') }}" alt="Instagram"></a>
            <a href="#"><img src="{{ asset('/ico/ico-linkedin.svg') }}" alt="LinkedIn"></a>
            <a href="#"><img src="{{ asset('/ico/ico-whatsapp.svg') }}" alt="WhatsApp"></a>
          </div>
        </section>

      </div>
    </footer>

    <!-- Scripts -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="{{ asset('/js/app.min.js') }}"></script>
  </body>
</html>
