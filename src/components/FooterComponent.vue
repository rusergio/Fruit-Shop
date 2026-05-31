<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="brand-icon">
          <i class="fi fi-rr-apple-whole"></i>
        </div>
        <div>
          <span class="brand-name">Fruit Shop</span>
          <p class="brand-desc">Las mejores frutas frescas, seleccionadas con cuidado para ti.</p>
        </div>
      </div>
      <div class="footer-links">
        <h4>Contacto</h4>
        <p><i class="fi fi-rr-phone-call"></i> 555-1234</p>
        <p><i class="fi fi-rr-envelope"></i> info@tiendadefrutas.com</p>
        <p><i class="fi fi-rr-marker"></i> Calle 123, Ciudad, País</p>
      </div>
      <div class="footer-links">
        <h4>Horario</h4>
        <p>Lun – Vie: 8:00 – 20:00</p>
        <p>Sáb – Dom: 9:00 – 18:00</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Fruit Shop. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background: var(--color-text);
  color: rgba(255, 255, 255, 0.85);
  margin-top: auto;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 24px 32px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
}

.footer-brand {
  display: flex;
  gap: 16px;
}

.brand-icon {
  width: 48px;
  height: 48px;
  background: var(--color-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.brand-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  display: block;
  margin-bottom: 8px;
}

.brand-desc {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  max-width: 280px;
}

.footer-links h4 {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 16px;
}

.footer-links p {
  font-size: 0.875rem;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.75);
}

.footer-links i {
  font-size: 0.875rem;
  opacity: 0.6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 24px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 16px 24px;
  }
}
</style>
