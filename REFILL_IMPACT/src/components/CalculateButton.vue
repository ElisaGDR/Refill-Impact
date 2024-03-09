<!-- CalculateButton.vue -->

<template>
    <div class="calculate-button">
      <button @click="calculateImpact" class="btn btn-primary">Let's see your Impact!</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      calculateImpact() {
        // Lógica de cálculo del impacto
        this.$emit('calculate-impact'); // Emite un evento para notificar al componente padre
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  .calculate-button {
    margin-bottom: 20px;
  }
  </style>
  