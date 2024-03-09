<template>
  <div id="app">
    <InputBox @refill-count-change="updateRefillCount" />
    <CalculateButton @calculateImpact="calculateImpact" />
    <ImpactDisplay
      :bottlesSaved="bottlesSaved"
      :plasticSaved="plasticSaved"
      :carbonSaved="carbonSaved"
    />
    <ShareButton :shareLink="shareLink" @click="shareImpact" />
  </div>
</template>

<script>
import InputBox from './components/InputBox.vue';
import CalculateButton from './components/CalculateButton.vue';
import ImpactDisplay from './components/ImpactDisplay.vue';
import ShareButton from './components/ShareButton.vue';

export default {
  components: {
    InputBox,
    CalculateButton,
    ImpactDisplay,
    ShareButton,
  },
  data() {
    return {
      refillCount: 0,
      bottlesSaved: 0,
      plasticSaved: 0,
      carbonSaved: 0,
      shareLink: '',
    };
  },
  methods: {
    updateRefillCount(newRefillCount) {
      this.refillCount = newRefillCount;
    },
    calculateImpact() {
      // Realizar los cálculos
      const bottlesPerRefill = 2;
      const plasticPerBottle = 0.012; // kg
      const carbonPerBottle = 0.08; // kg CO2

      // Calcula el impacto
      this.bottlesSaved = this.refillCount * bottlesPerRefill;
      this.plasticSaved = this.bottlesSaved * plasticPerBottle;
      this.carbonSaved = this.bottlesSaved * carbonPerBottle;
    },
    shareImpact() {
      // Implementa aquí la lógica para compartir utilizando Firebase
    },
  },
};
</script>

<style>
/* Add your global styles here */
</style>

