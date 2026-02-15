<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer fp-section fp-section--footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="/" class="footer-logo">
            <img src="/logo.png" alt="Syntonera" class="footer-logo-img" />
          </a>
          <p class="footer-tagline">Respirez. Ralentissez. Reconnectez-vous.</p>
        </div>

        <nav class="footer-nav">
          <a href="https://www.syntonera.fr/off-era">Soirée OFF <em>era</em></a>
          <a href="https://www.syntonera.fr/on-era">Séminaire ON <em>era</em></a>
          <a href="mailto:contact@syntonera.fr">Contact</a>
        </nav>

        <div class="footer-social">
          <a href="mailto:contact@syntonera.fr" aria-label="Email" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/syntonera?igsh=MWZpMWc5OWM5NXZqbw%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/syntonera" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Syntonera. Tous droits réservés.</p>
        <nav class="footer-legal">
          <a href="https://www.syntonera.fr/mentions-legales">Mentions légales</a>
          <a href="https://www.syntonera.fr/politique-de-confidentialite">Confidentialité</a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  z-index: 1;
  background: var(--color-primary);
  color: rgba(255, 255, 255, 0.8);
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
}

.footer-logo {
  display: inline-block;
  margin-bottom: 0.75rem;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.9;
}

.footer-tagline {
  font-style: italic;
  opacity: 0.7;
  font-size: 0.95rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .footer-nav {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
}

.footer-nav a {
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  opacity: 0.8;
  transition: opacity var(--transition-base);
}

.footer-nav a em {
  font-style: italic;
}

.footer-nav a:hover {
  opacity: 1;
  color: var(--color-accent);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .footer-social {
    justify-content: center;
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all var(--transition-gentle);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
  }
}

.footer-bottom p {
  font-size: 0.85rem;
  opacity: 0.5;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  font-size: 0.8rem;
  opacity: 0.5;
  transition: opacity var(--transition-base);
}

.footer-legal a:hover {
  opacity: 0.8;
}
</style>
