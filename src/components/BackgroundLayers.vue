<script setup>
// BackgroundLayers - Fixed background layers with animated orbs
// Controlled via useBackgroundTransition composable
</script>

<template>
  <div class="bg-layers">
    <!-- Light layer (Hero, Pillars, Paths) -->
    <div class="bg-layer bg-layer--light" data-layer="light">
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
      <div class="bg-orb bg-orb-3"></div>
    </div>

    <!-- Dark layer (Definition) -->
    <div class="bg-layer bg-layer--dark" data-layer="dark">
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
    </div>

    <!-- Warm layer (Closing) -->
    <div class="bg-layer bg-layer--warm" data-layer="warm">
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
      <div class="bg-orb bg-orb-3"></div>
    </div>
  </div>
</template>

<style scoped>
.bg-layers {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg-layer {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease-out;
}

.bg-layer.active {
  opacity: 1;
}

/* Light Layer */
.bg-layer--light {
  background: var(--color-light);
}

.bg-layer--light .bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
}

.bg-layer--light .bg-orb-1 {
  width: 650px;
  height: 650px;
  background: rgba(212, 184, 150, 0.4);
  top: -10%;
  right: -15%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: bg-morph1 12s ease-in-out infinite, bg-float1 8s ease-in-out infinite;
}

.bg-layer--light .bg-orb-2 {
  width: 550px;
  height: 550px;
  background: rgba(181, 196, 177, 0.35);
  bottom: -15%;
  left: -10%;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  animation: bg-morph2 15s ease-in-out infinite, bg-float2 10s ease-in-out infinite;
}

.bg-layer--light .bg-orb-3 {
  width: 450px;
  height: 450px;
  background: rgba(232, 212, 196, 0.45);
  top: 35%;
  left: 25%;
  border-radius: 50% 60% 40% 60% / 60% 40% 60% 40%;
  animation: bg-morph3 10s ease-in-out infinite, bg-float3 7s ease-in-out infinite;
}

/* Dark Layer */
.bg-layer--dark {
  background: #1a1a1a;
}

.bg-layer--dark .bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
}

.bg-layer--dark .bg-orb-1 {
  width: 500px;
  height: 500px;
  background: rgba(212, 184, 150, 0.12);
  top: -15%;
  left: -10%;
  animation: bg-float1 12s ease-in-out infinite;
}

.bg-layer--dark .bg-orb-2 {
  width: 400px;
  height: 400px;
  background: rgba(181, 196, 177, 0.08);
  bottom: -10%;
  right: -5%;
  animation: bg-float2 15s ease-in-out infinite;
}

/* Warm Layer */
.bg-layer--warm {
  background: linear-gradient(135deg, #f5ebe0 0%, #f7f0e8 50%, #faf5ef 100%);
}

.bg-layer--warm .bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.bg-layer--warm .bg-orb-1 {
  width: 700px;
  height: 700px;
  background: rgba(232, 212, 196, 0.5);
  top: -25%;
  right: -20%;
  animation: bg-float1 20s ease-in-out infinite;
}

.bg-layer--warm .bg-orb-2 {
  width: 550px;
  height: 550px;
  background: rgba(212, 184, 150, 0.45);
  bottom: -20%;
  left: -15%;
  animation: bg-float2 18s ease-in-out infinite;
}

.bg-layer--warm .bg-orb-3 {
  width: 450px;
  height: 450px;
  background: rgba(232, 196, 168, 0.5);
  top: 25%;
  left: 15%;
  animation: bg-float3 15s ease-in-out infinite;
}
</style>
