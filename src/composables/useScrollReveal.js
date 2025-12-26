import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal() {
  const initScrollReveal = () => {
    // Reveal elements on scroll
    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Staggered grid items
    gsap.utils.toArray('.stagger-grid').forEach((grid) => {
      const items = grid.querySelectorAll('.stagger-item')
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Scale reveal
    gsap.utils.toArray('.reveal-scale').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  }

  const refreshScrollTrigger = () => {
    ScrollTrigger.refresh()
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollReveal, 100)
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  })

  return {
    refreshScrollTrigger
  }
}
