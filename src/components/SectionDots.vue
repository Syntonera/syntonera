<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  sectionCount: {
    type: Number,
    default: 5
  }
})

const currentSection = ref(0)
const isVisible = ref(true)

const scrollToSection = (index) => {
  const sections = document.querySelectorAll('.fp-section')
  if (sections[index]) {
    sections[index].scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  const sections = document.querySelectorAll('.fp-section')
  const scrollPosition = window.scrollY + window.innerHeight / 2

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection.value = index
    }
  })
}

const checkVisibility = () => {
  isVisible.value = window.innerWidth >= 768
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkVisibility)
  checkVisibility()
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkVisibility)
})
</script>

<template>
  <nav v-show="isVisible" class="section-dots" aria-label="Section navigation">
    <button
      v-for="i in sectionCount"
      :key="i"
      :class="['dot', { active: currentSection === i - 1 }]"
      :aria-label="`Go to section ${i}`"
      :aria-current="currentSection === i - 1 ? 'true' : undefined"
      @click="scrollToSection(i - 1)"
    >
      <span></span>
    </button>
  </nav>
</template>

<style scoped>
.section-dots {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .section-dots {
    display: none;
  }
}

.dot {
  width: 12px;
  height: 12px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(168, 146, 125, 0.3);
  transition: all var(--transition-gentle);
}

.dot:hover span {
  background: rgba(168, 146, 125, 0.5);
  transform: scale(1.2);
}

.dot.active span {
  background: var(--color-secondary);
  transform: scale(1.3);
}
</style>
