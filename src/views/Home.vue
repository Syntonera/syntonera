<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@composables/useScrollReveal'
import { useFullpageScroll } from '@composables/useFullpageScroll'
import { useBackgroundTransition } from '@composables/useBackgroundTransition'
import SectionDots from '@components/SectionDots.vue'
import BackgroundLayers from '@components/BackgroundLayers.vue'

useScrollReveal()
useBackgroundTransition()
const { currentSection, scrollToSection } = useFullpageScroll()

const faqs = [
  {
    question: 'Qu\'est-ce que Syntonera ?',
    answer: 'Syntonera crée des expériences immersives de bien-être en Provence. Que ce soit pour une soirée entre amis ou un séminaire d\'équipe, nous imaginons des moments sur mesure qui invitent à ralentir, se reconnecter et repartir plus léger.'
  },
  {
    question: 'Quelles expériences proposez-vous ?',
    answer: 'Nous proposons deux formats :<br><strong>OFF era</strong> : des soirées bien-être en petit groupe, pensées pour les particuliers qui souhaitent s\'offrir une parenthèse.<br><strong>ON era</strong> : des séminaires immersifs pour les équipes, conçus pour fédérer et inspirer autrement.'
  },
  {
    question: 'À qui s\'adressent vos expériences ?',
    answer: 'À toute personne en quête d\'un moment de pause. Les soirées OFF era accueillent les particuliers, seuls ou entre proches. Les séminaires ON era s\'adressent aux petites équipes et entreprises à taille humaine.'
  },
  {
    question: 'Où se déroulent les expériences ?',
    answer: 'En Provence, dans des lieux soigneusement choisis pour leur authenticité et leur sérénité. Chaque cadre est sélectionné pour sublimer l\'expérience et inviter au lâcher-prise.'
  },
  {
    question: 'Les expériences sont-elles personnalisables ?',
    answer: 'Oui, chaque expérience est pensée sur mesure. Vous choisissez le format — demi-journée, journée, soirée — les activités parmi nos univers thématiques, et nous adaptons la restauration avec des partenaires locaux.'
  },
  {
    question: 'Comment réserver ou nous contacter ?',
    answer: 'Écrivez-nous à contact@syntonera.fr ou utilisez le formulaire sur notre page de contact. Nous échangerons ensemble pour imaginer l\'expérience qui vous ressemble.'
  }
]

const openFaq = ref(null)
const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const pillars = [
  { id: 'cadres', title: 'Cadres inspirants', desc: 'Sublimer chaque expérience par la magie des espaces choisis.', icon: '/pillars/cadres.png' },
  { id: 'corps', title: 'Corps & esprit alignés', desc: 'Cultiver l\'harmonie profonde entre corps et esprit.', icon: '/pillars/corps.png' },
  { id: 'sens', title: 'Sens éveillés', desc: 'Éveiller les sens pour nourrir la présence et la joie.', icon: '/pillars/sens.png' },
  { id: 'instants', title: 'Instants lumineux', desc: 'Inspirer par la passion, le partage et la bienveillance.', icon: '/pillars/instants.png' },
  { id: 'harmonie', title: 'Harmonie avec la nature', desc: 'Respecter la Terre par des gestes durables et conscients.', icon: '/pillars/harmonie.png' }
]
</script>

<template>
  <div class="home">
    <SectionDots :section-count="6" />
    <BackgroundLayers />

    <!-- Hero -->
    <section class="hero-section fp-section" data-bg-layer="light">
      <div class="container">
        <div class="hero-content parallax-fast">
          <h1 class="hero-title">Là où <em>l'harmonie</em> se vit</h1>
          <p class="hero-subtitle">
            Entrez dans une expérience <em>immersive</em> dédiée à votre <em>bien-être</em>.
            Explorez nos univers et nourrissez votre épanouissement <em>personnel</em> comme <em>professionnel</em>,
            avec une approche <em>holistique</em>.
          </p>
          <div class="hero-actions">
            <a href="/off-era" class="btn btn-outline-blue">
              Découvrir nos soirées
            </a>
            <a href="/on-era" class="btn btn-brown">
              Planifier un séminaire
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pillars -->
    <section class="section pillars fp-section" data-bg-layer="light">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">Les piliers de nos expériences bien-être</h2>
          <p class="section-subtitle">
            Chaque édition est unique, l'essentiel demeure.
          </p>
        </div>

        <div class="pillars-grid stagger-grid">
          <div
            v-for="pillar in pillars"
            :key="pillar.id"
            class="pillar-card stagger-item"
          >
            <div class="pillar-visual">
              <img :src="pillar.icon" :alt="pillar.title" class="pillar-icon" />
            </div>
            <h3 class="pillar-title">{{ pillar.title }}</h3>
            <p class="pillar-desc">{{ pillar.desc }}</p>
          </div>
        </div>

        <div class="pillars-cta">
          <a href="/nos-engagements-" class="btn btn-secondary">
            Découvrir nos engagements
          </a>
        </div>
      </div>
    </section>

    <!-- Syntonera Definition -->
    <section class="section definition fp-section" data-bg-layer="dark">
      <div class="container">
        <div class="definition-content reveal">
          <span class="definition-label">nom</span>
          <h2 class="definition-word">Syntonera</h2>
          <span class="definition-phonetic">[ sɛ̃.tɔ.ne.ʁa ]</span>
          <p class="definition-text">
            L'expérience de l'harmonie en soi, avec les autres et ce qui nous entoure,
            en résonance dans le temps.
          </p>
          <div class="definition-origin">
            <div class="origin-item">
              <span class="origin-word">Syntonie</span>
              <span class="origin-meaning">Harmonie avec son environnement et ses émotions</span>
            </div>
            <div class="origin-separator">+</div>
            <div class="origin-item">
              <span class="origin-word">Era</span>
              <span class="origin-meaning">Un moment, une période qui marque un nouveau départ</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Paths -->
    <section id="paths" class="section paths fp-section" data-bg-layer="light">
      <div class="container">
        <div class="paths-header reveal">
          <h2 class="paths-title">Deux chemins, <em>une intention</em></h2>
          <p class="paths-subtitle">
            Que vous cherchiez un moment pour vous ou une expérience collective,
            chaque chemin mène vers la même destination : l'harmonie.
          </p>
        </div>

        <div class="paths-grid stagger-grid">

          <a href="/experience-on-era" class="path-card path-card--on stagger-item">
            <div class="path-visual">
              <img src="/gradient-on.jpg" alt="" class="path-bg" />
              <div class="path-shapes path-shapes--on">
                <svg class="shape shape-center" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#7a9576"/></svg>
                <svg class="shape shape-orbit shape-orbit-1" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="none" stroke="rgba(138, 159, 134, 0.4)" stroke-width="2" stroke-dasharray="6,6"/></svg>
                <svg class="shape shape-dot shape-dot-1" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(181, 196, 177, 0.9)"/></svg>
                <svg class="shape shape-dot shape-dot-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(138, 159, 134, 0.8)"/></svg>
                <svg class="shape shape-dot shape-dot-3" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(165, 183, 161, 0.75)"/></svg>
              </div>
            </div>
            <div class="path-content">
              <span class="path-label">Pour l'équipe</span>
              <h3 class="path-name">ON <em>era</em></h3>
              <p class="path-essence">
                Fédérer, inspirer, transformer.
                Des séminaires sur-mesure qui réinventent
                la cohésion en entreprise.
              </p>
              <span class="path-cta">Imaginer votre événement</span>
            </div>
          </a>

          <a href="/off-era" class="path-card path-card--off stagger-item">
            <div class="path-visual">
              <img src="/gradient-off.jpg" alt="" class="path-bg" />
              <div class="path-shapes path-shapes--off">
                <svg class="shape shape-1" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(232, 212, 196, 0.5)"/></svg>
                <svg class="shape shape-2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(212, 184, 150, 0.45)"/></svg>
                <svg class="shape shape-3" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(168, 146, 125, 0.35)"/></svg>
                <svg class="shape shape-4" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="rgba(212, 184, 150, 0.3)"/></svg>
              </div>
            </div>
            <div class="path-content">
              <span class="path-label">Pour soi</span>
              <h3 class="path-name">OFF <em>era</em></h3>
              <p class="path-essence">
                Lâcher prise, respirer, se reconnecter.
                Des soirées immersives en petit groupe,
                au cœur de la Provence.
              </p>
              <span class="path-cta">Découvrir l'expérience</span>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- Closing Section -->
    <section class="section closing fp-section" data-bg-layer="warm">
      <div class="container">
        <div class="closing-content reveal">
          <div class="closing-invitation">
            <h2 class="closing-title">
              Et si c'était <em>le moment</em> ?
            </h2>
            <p class="closing-text">
              Un pas vers soi. Une pause dans le rythme.
              L'occasion de respirer autrement.
            </p>
            <a href="#paths" class="btn btn-secondary btn-lg">
              Commencer le voyage
            </a>
          </div>

          <div class="closing-signature">
            <p>À bientôt, en Provence.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq fp-section" data-bg-layer="light">
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">Questions fréquentes</h2>
          <p class="section-subtitle">
            Tout ce qu'il faut savoir avant de se lancer.
          </p>
        </div>

        <div class="faq-list reveal">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="faq-item"
            :class="{ open: openFaq === index }"
          >
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div class="faq-answer">
              <p v-html="faq.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Home wrapper - ensure content is above fixed backgrounds */
.home {
  position: relative;
  z-index: 1;
}

/* ========================================
   HERO SECTION
   ======================================== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 400;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.hero-title em {
  font-style: italic;
  color: var(--color-secondary);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.hero-subtitle em {
  font-style: normal;
  font-weight: 500;
  color: var(--color-secondary);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ========================================
   PILLARS SECTION
   ======================================== */
.pillars {
  background: transparent;
}

.pillars .section-subtitle {
  max-width: 600px;
  margin: 1rem auto 0;
  color: var(--color-text-light);
  line-height: 1.7;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
}

@media (max-width: 1024px) {
  .pillars-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Center the last 2 items */
  .pillars-grid .pillar-card:nth-child(4) {
    grid-column: 1 / 2;
    justify-self: end;
    width: calc(100% - 0.75rem);
  }

  .pillars-grid .pillar-card:nth-child(5) {
    grid-column: 2 / 4;
    justify-self: start;
    width: calc(50% - 0.375rem);
  }
}

@media (max-width: 768px) {
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pillars-grid .pillar-card:nth-child(4),
  .pillars-grid .pillar-card:nth-child(5) {
    grid-column: auto;
    justify-self: stretch;
    width: 100%;
  }

  /* Center the last item */
  .pillars-grid .pillar-card:nth-child(5) {
    grid-column: 1 / -1;
    max-width: 50%;
    justify-self: center;
  }
}

@media (max-width: 640px) {
  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .pillars-grid .pillar-card:nth-child(5) {
    max-width: 100%;
  }
}

.pillar-card {
  padding: 2rem 1.5rem;
  text-align: center;
  background: var(--color-white);
  border-radius: 16px;
  transition: all var(--transition-base);
}

.pillar-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
}

.pillar-visual {
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform var(--transition-slow);
}

.pillar-card:hover .pillar-icon {
  transform: scale(1.1);
}

.pillar-title {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
}

.pillar-desc {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.pillars-cta {
  text-align: center;
  margin-top: 2.5rem;
}

/* ========================================
   DEFINITION SECTION
   ======================================== */
.definition {
  background: transparent;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.definition-content {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.definition-label {
  display: inline-block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0.75rem;
}

.definition-word {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 400;
  color: var(--color-white);
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
}

.definition-phonetic {
  display: block;
  font-family: 'Times New Roman', Georgia, serif;
  font-style: italic;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.definition-text {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin-bottom: 3rem;
}

.definition-origin {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.origin-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.origin-word {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-accent);
}

.origin-meaning {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  max-width: 200px;
}

.origin-separator {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
}

/* Definition section mobile */
@media (max-width: 768px) {
  .definition-content {
    padding: 0 1rem;
  }

  .definition-word {
    font-size: 2.25rem;
  }

  .definition-text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .definition-origin {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1rem;
    align-items: flex-start;
  }

  .origin-item {
    flex: 1;
    text-align: center;
  }

  .origin-word {
    font-size: 0.95rem;
  }

  .origin-meaning {
    font-size: 0.75rem;
    max-width: none;
  }

  .origin-separator {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
}

/* ========================================
   PATHS SECTION
   ======================================== */
.paths {
  background: transparent;
  position: relative;
  overflow: hidden;
}

.paths-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.paths-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.paths-title em {
  font-style: italic;
  color: var(--color-secondary);
}

.paths-subtitle {
  font-size: 1.15rem;
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 768px) {
  .paths {
    padding: 2.5rem 0;
  }

  .paths-header {
    margin-bottom: 1.5rem;
  }

  .paths-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .paths-subtitle {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .paths-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

.path-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(168, 146, 125, 0.08);
}

.path-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-medium), 0 20px 60px rgba(0, 0, 0, 0.06);
}

.path-card:hover .path-cta {
  color: var(--color-primary);
  transform: translateX(4px);
}

.path-card:hover .path-shapes--off .shape {
  animation-play-state: running;
}

.path-card:hover .path-shapes--on .shape-dot {
  animation-play-state: running;
}

.path-visual {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.path-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.path-shapes {
  position: relative;
  z-index: 1;
}

/* Mobile: Compact vertical cards */
@media (max-width: 768px) {
  .path-card {
    flex-direction: column;
  }

  .path-visual {
    height: 80px;
    min-height: 80px;
  }

  .path-shapes--off,
  .path-shapes--on {
    width: 100px;
    height: 60px;
    isolation: isolate;
  }

  .path-shapes--off .shape-1 {
    width: 40px;
    height: 40px;
    top: 5%;
    left: 15%;
    animation-play-state: running;
    animation-duration: 12s;
  }
  .path-shapes--off .shape-2 {
    width: 30px;
    height: 30px;
    top: 20%;
    right: 15%;
    animation-play-state: running;
    animation-duration: 15s;
  }
  .path-shapes--off .shape-3,
  .path-shapes--off .shape-4 {
    display: none;
  }

  .path-shapes--on .shape-center {
    width: 12px;
    height: 12px;
  }
  .path-shapes--on .shape-orbit-1 {
    width: 40px;
    height: 40px;
  }
  .path-shapes--on .shape-orbit-2 {
    width: 60px;
    height: 60px;
  }
  .path-shapes--on .shape-dot {
    width: 8px;
    height: 8px;
    animation-play-state: running;
    animation-duration: 18s;
  }
  .path-shapes--on .shape-dot-1 {
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
  .path-shapes--on .shape-dot-2 {
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
  .path-shapes--on .shape-dot-3 {
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  .path-content {
    padding: 1rem 1.25rem 1.25rem;
    text-align: center;
  }

  .path-label {
    font-size: 0.65rem;
    margin-bottom: 0.25rem;
  }

  .path-name {
    font-size: 1.5rem;
    margin-bottom: 0.35rem;
  }

  .path-essence {
    font-size: 0.8rem;
    line-height: 1.45;
    margin-bottom: 0.5rem;
  }

  .path-cta {
    font-size: 0.75rem;
  }
}

/* OFF-ERA shapes */
.path-shapes--off {
  position: relative;
  width: 160px;
  height: 160px;
}

.path-shapes--off .shape {
  position: absolute;
  animation-play-state: paused;
}

.path-shapes--off .shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation: off-float1 8s ease-in-out infinite;
}

.path-shapes--off .shape-2 {
  width: 60px;
  height: 60px;
  top: 40%;
  right: 5%;
  animation: off-float2 10s ease-in-out infinite;
}

.path-shapes--off .shape-3 {
  width: 50px;
  height: 50px;
  bottom: 5%;
  left: 25%;
  animation: off-float3 9s ease-in-out infinite;
}

.path-shapes--off .shape-4 {
  width: 35px;
  height: 35px;
  top: 25%;
  right: 25%;
  animation: off-float4 7s ease-in-out infinite;
}

/* ON-ERA shapes */
.path-shapes--on {
  position: relative;
  width: 160px;
  height: 160px;
}

.path-shapes--on .shape-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
}

.path-shapes--on .shape-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.path-shapes--on .shape-orbit-1 {
  width: 80px;
  height: 80px;
}

.path-shapes--on .shape-orbit-2 {
  width: 130px;
  height: 130px;
}

.path-shapes--on .shape-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  animation-play-state: paused;
  transition: all var(--transition-gentle);
}

.path-shapes--on .shape-dot-1 {
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: on-orbit1 12s linear infinite;
}

.path-shapes--on .shape-dot-2 {
  bottom: 15%;
  right: 10%;
  animation: on-orbit2 15s linear infinite;
}

.path-shapes--on .shape-dot-3 {
  bottom: 15%;
  left: 10%;
  animation: on-orbit3 10s linear infinite;
}

/* Card variant styles */
.path-card--off .path-label {
  color: var(--color-secondary);
}

.path-card--off .path-cta {
  color: var(--color-secondary);
}

.path-card--on .path-label {
  color: #8a9f86;
}

.path-card--on .path-cta {
  color: #8a9f86;
}

.path-content {
  padding: 1.5rem 2rem 2rem;
  text-align: center;
}

.path-label {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: 0.75rem;
}

.path-name {
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 400;
  color: var(--color-primary);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.path-name em {
  font-style: italic;
}

.path-essence {
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.path-cta {
  display: inline-block;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-secondary);
  transition: all var(--transition-gentle);
}

/* ========================================
   CLOSING SECTION
   ======================================== */
.closing {
  background: transparent;
  position: relative;
  overflow: hidden;
}

.closing-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.closing-invitation {
  text-align: center;
  margin-bottom: 4rem;
}

.closing-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.closing-title em {
  font-style: italic;
  color: var(--color-secondary);
}

.closing-text {
  font-size: 1.25rem;
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.closing-signature {
  text-align: center;
}

.closing-signature p {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-style: italic;
  color: var(--color-secondary);
  letter-spacing: 0.02em;
}

/* Closing section mobile */
@media (max-width: 768px) {
  .closing-invitation {
    margin-bottom: 2rem;
  }

  .closing-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .closing-text {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .closing-signature p {
    font-size: 1.25rem;
  }
}

/* ========================================
   FAQ SECTION
   ======================================== */
.faq {
  background: transparent;
}

.faq .section-subtitle {
  max-width: 500px;
  margin: 1rem auto 0;
  color: var(--color-text-light);
  line-height: 1.7;
}

.faq-list {
  max-width: 700px;
  margin: 2.5rem auto 0;
}

.faq-item {
  border-bottom: 1px solid rgba(168, 146, 125, 0.15);
}

.faq-item:first-child {
  border-top: 1px solid rgba(168, 146, 125, 0.15);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-primary);
  transition: color var(--transition-base);
}

.faq-question:hover {
  color: var(--color-secondary);
}

.faq-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: var(--color-secondary);
}

.faq-item.open .faq-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
}

.faq-item.open .faq-answer {
  max-height: 300px;
  padding-bottom: 1.25rem;
}

.faq-answer p {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.8;
}

.faq-answer strong {
  color: var(--color-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .faq-question {
    font-size: 0.95rem;
    padding: 1rem 0;
  }

  .faq-answer p {
    font-size: 0.9rem;
  }
}
</style>
