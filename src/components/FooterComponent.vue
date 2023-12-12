<template>
    <footer class="footer">
      <div class="container">
        <h3>Comunique con nosotros</h3>
        <div class="footer__contact">
          <p>Contacto: <a href="/contacto">Haz clic aquí para contactarnos</a></p>
          <p>Teléfono: 555-1234</p>
          <p>Correo electrónico: info@tiendadefrutas.com</p>
          <p>Dirección: Calle 123, Ciudad, País</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style>
  .footer {
    background-color: #f7f7f7;
    padding: 20px 0;
    text-align: center;
    color: #333;
    font-size: 18px;
  }
  
  .footer__contact {
    margin-top: 20px;
    font-size: 16px;
    
  }
  </style>