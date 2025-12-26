import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useBackgroundTransition() {
  let triggers = []
  let currentLayer = null

  const activateLayer = (layerName) => {
    if (currentLayer === layerName) return

    // Deactivate all layers
    const layers = document.querySelectorAll('.bg-layer')
    layers.forEach(layer => layer.classList.remove('active'))

    // Activate the target layer
    const targetLayer = document.querySelector(`[data-layer="${layerName}"]`)
    if (targetLayer) {
      targetLayer.classList.add('active')
      currentLayer = layerName
    }
  }

  const initBackgroundTransition = () => {
    const sections = document.querySelectorAll('[data-bg-layer]')
    const sectionsArray = Array.from(sections)

    sections.forEach((section, index) => {
      const layerName = section.dataset.bgLayer

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => activateLayer(layerName),
        onEnterBack: () => activateLayer(layerName),
        onLeave: () => {
          // Activate next section's layer when leaving downward
          const nextSection = sectionsArray[index + 1]
          if (nextSection) {
            activateLayer(nextSection.dataset.bgLayer)
          }
        },
        onLeaveBack: () => {
          // Activate previous section's layer when leaving upward
          const prevSection = sectionsArray[index - 1]
          if (prevSection) {
            activateLayer(prevSection.dataset.bgLayer)
          }
        }
      })

      triggers.push(trigger)
    })

    // Set initial layer
    const firstSection = sections[0]
    if (firstSection) {
      activateLayer(firstSection.dataset.bgLayer)
    }
  }

  const cleanup = () => {
    triggers.forEach(trigger => trigger.kill())
    triggers = []
    currentLayer = null
  }

  onMounted(() => {
    setTimeout(() => {
      initBackgroundTransition()
    }, 200)
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    initBackgroundTransition,
    cleanup
  }
}
