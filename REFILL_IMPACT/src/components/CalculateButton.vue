<!-- CalculateButton.vue -->

<template>
    <div class="calculate-button">
      <button @click="calculateImpact" class="btn btn-success">Let's see your Impact!</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      calculateImpact() {
        this.$emit('calculate-impact'); // Event to notify the father component
      },
    },
  };
  </script>
  
  <style scoped>
  /* Specific component styles */
  .calculate-button {
    margin-bottom: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    padding: 2%;
   }
   .btn {
    border-radius: 50px;
   }
  </style>
  