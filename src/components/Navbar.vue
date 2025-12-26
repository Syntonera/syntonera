<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOnDark = ref(false)

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
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(checkDarkSection, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'on-dark': isOnDark }">
    <div class="navbar-container">
      <a href="/" class="navbar-logo" @click="goHome($event)">
        <img src="/logo.webp" alt="Syntonera" class="logo-img" />
      </a>

      <a href="mailto:contact@syntonera.fr" class="navbar-link">Contact</a>
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
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  padding: 1rem 0;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* Dark mode styles */
.navbar.on-dark .logo-img {
  filter: brightness(0) invert(1) opacity(0.9);
}

.navbar.on-dark .navbar-link {
  color: rgba(255, 255, 255, 0.85);
}

.navbar.on-dark .navbar-link:hover {
  color: #ffffff;
}

.navbar.on-dark .navbar-link::after {
  background: #ffffff;
}

.navbar.on-dark.scrolled {
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
  filter: brightness(0) opacity(0.8);
  transition: filter 0.6s ease-out;
}

@media (max-width: 768px) {
  .logo-img {
    height: 36px;
  }
}

.navbar-link {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
  position: relative;
  transition: color 0.6s ease-out;
}

.navbar-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-secondary);
  transition: width var(--transition-base), background 0.6s ease-out;
}

.navbar-link:hover {
  color: var(--color-secondary);
}

.navbar-link:hover::after {
  width: 100%;
}
</style>
