<template>
  <div id="app">
    <InputBox v-model="refillCount" />
    <CalculateButton @click="calculateImpact" />
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
    calculateImpact() {
      // Implement the impact calculation logic here
    },
    shareImpact() {
      // Implement the sharing functionality using Firebase
    },
  },
};
</script>

<style>
/* Add your global styles here */
</style>
