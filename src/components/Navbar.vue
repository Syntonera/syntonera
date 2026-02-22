<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOnDark = ref(false)
const menuOpen = ref(false)

let rafId = null

const checkDarkSection = () => {
  const darkLayer = document.querySelector('.bg-layer--dark')
  isOnDark.value = darkLayer?.classList.contains('active') || false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(checkDarkSection)
}

const goHome = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(checkDarkSection, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (rafId) cancelAnimationFrame(rafId)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'on-dark': isOnDark, 'menu-open': menuOpen }">
    <div class="navbar-container">
      <a href="/" class="navbar-logo" @click="goHome($event)">
        <img src="/logo.png" alt="Syntonera" class="logo-img" />
      </a>

      <div class="navbar-right">
        <a href="mailto:contact@syntonera.fr" class="navbar-contact">Contact</a>
        <button class="burger" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="Menu">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </div>
    </div>

    <!-- Menu overlay -->
    <div class="menu-overlay" :class="{ open: menuOpen }" @click.self="closeMenu">
      <div class="menu-panel">
        <nav class="menu-nav">
          <div class="menu-group">
            <span class="menu-label">Séminaires</span>
            <div class="menu-links">
              <a href="/experience-on-era" @click="closeMenu">Découvrir</a>
              <a href="/on-era/le-lieu" @click="closeMenu">Le lieu</a>
              <a href="/on-era/a-propos" @click="closeMenu">À propos</a>
              <a href="/experience-on-era-contact" @click="closeMenu">Contact</a>
            </div>
          </div>
          <div class="menu-group">
            <span class="menu-label">Soirées</span>
            <div class="menu-links">
              <a href="/off-era" @click="closeMenu">Découvrir</a>
              <a href="/off-era/le-concept" @click="closeMenu">Le concept</a>
              <a href="/nos-intervenants" @click="closeMenu">Nos intervenants</a>
              <a href="/nos-engagements-" @click="closeMenu">Nos engagements</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: padding var(--transition-base), background 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  padding: 1rem 0;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
}

.navbar.menu-open {
  background: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: none;
}

/* Dark mode styles */
.navbar.on-dark:not(.menu-open) .logo-img {
  filter: brightness(0) invert(1) opacity(0.9);
}

.navbar.on-dark:not(.menu-open) .navbar-contact {
  color: rgba(255, 255, 255, 0.85);
  border-color: rgba(255, 255, 255, 0.4);
}

.navbar.on-dark:not(.menu-open) .navbar-contact:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.7);
}

.navbar.on-dark:not(.menu-open) .burger-line {
  background: rgba(255, 255, 255, 0.85);
}

.navbar.on-dark.scrolled:not(.menu-open) {
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.navbar-logo {
  z-index: 1001;
  display: flex;
  align-items: center;
}

.logo-img {
  height: 44px;
  width: auto;
  transition: filter 0.6s ease-out;
}

@media (max-width: 768px) {
  .logo-img {
    height: 36px;
  }
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  z-index: 1001;
}

/* Encircled contact button */
.navbar-contact {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);
  border: 1.5px solid var(--color-text);
  border-radius: var(--radius-full);
  padding: 0.45rem 1.25rem;
  transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}

.navbar-contact:hover {
  background: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.navbar.menu-open .navbar-contact {
  opacity: 0;
  pointer-events: none;
}

/* Burger button */
.burger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.burger-line {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--color-text);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease, background 0.3s ease;
  transform-origin: center;
}

.burger.active .burger-line:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
  background: rgba(255, 255, 255, 0.9);
}

.burger.active .burger-line:nth-child(2) {
  opacity: 0;
}

.burger.active .burger-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
  background: rgba(255, 255, 255, 0.9);
}

.navbar.menu-open .logo-img {
  filter: brightness(0) invert(1) opacity(0.9);
}

/* Menu overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(171, 153, 140, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s ease, visibility 0.35s ease;
  z-index: 999;
}

.menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

.menu-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.menu-group {
  text-align: center;
}

.menu-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
}

.menu-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem 1.5rem;
}

.menu-links a {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.menu-links a:hover {
  color: #ffffff;
}
</style>
