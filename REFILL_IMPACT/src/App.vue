<template>
  <div id="app">
    <InputBox @refill-count-change="updateRefillCount" />
    <CalculateButton @calculateImpact="calculateImpact" />
    <ImpactDisplay :bottlesSaved="bottlesSaved" :plasticSaved="plasticSaved" :carbonSaved="carbonSaved" />
    <ShareButton :shareLink="shareLink" @share-impact="shareImpact" />
  </div>
</template>

<script>
import { database } from './Firebase.js';
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
      const bottlesPerRefill = 2;
      const plasticPerBottle = 0.012; // kg
      const carbonPerBottle = 0.08; // kg CO2

      this.bottlesSaved = this.refillCount * bottlesPerRefill;
      this.plasticSaved = this.bottlesSaved * plasticPerBottle;
      this.carbonSaved = this.bottlesSaved * carbonPerBottle;
      // The unique link 
      this.shareLink = this.generateUniqueLink();
    },
    shareImpact() {
      // Saving the generated link to Firebase
      console.log(database);
      if (this.shareLink) {
        const shareLinkId = database.ref('shareLinks').push().key;
        database.ref(`shareLinks/${shareLinkId}`).set(this.shareLink);
      }
    },
    generateUniqueLink() {
      const uniqueId = Math.random().toString(36).substring(2, 15);
      return `https://your-refill-impact.com/share/${uniqueId}`;
    },
  },
};
</script>

<style>
/* Specific component styles */
#app {
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-size: 1.5em;
}
</style>
