import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useFullpageScroll() {
  const currentSection = ref(0)
  const sections = ref([])
  const isDesktop = ref(true)

  const initParallax = () => {
    // Only enable parallax on desktop
    if (window.innerWidth < 768) {
      isDesktop.value = false
      return
    }

    isDesktop.value = true

    // Slow parallax for background elements (orbs, gradients)
    gsap.utils.toArray('.parallax-slow').forEach((el) => {
      gsap.to(el, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('.fp-section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })
    })

    // Fast parallax for content elements
    gsap.utils.toArray('.parallax-fast').forEach((el) => {
      gsap.to(el, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('.fp-section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8
        }
      })
    })

    // Medium parallax
    gsap.utils.toArray('.parallax-medium').forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('.fp-section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    })
  }

  const initSectionTracking = () => {
    sections.value = gsap.utils.toArray('.fp-section')

    sections.value.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          currentSection.value = index
        },
        onEnterBack: () => {
          currentSection.value = index
        }
      })
    })
  }

  const scrollToSection = (index) => {
    if (sections.value[index]) {
      sections.value[index].scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResize = () => {
    const wasDesktop = isDesktop.value
    isDesktop.value = window.innerWidth >= 768

    // Reinitialize if switching between mobile/desktop
    if (wasDesktop !== isDesktop.value) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      if (isDesktop.value) {
        initParallax()
        initSectionTracking()
      }
    }

    ScrollTrigger.refresh()
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initParallax()
      initSectionTracking()
    }, 150)

    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    window.removeEventListener('resize', handleResize)
  })

  return {
    currentSection,
    sections,
    isDesktop,
    scrollToSection
  }
}
