<!-- ImpactDisplay.vue -->

<template>
    <div class="impact-display">
      <div class="impact-box">
        <h4>Number of Bottles Saved</h4>
        <p>{{ bottlesSaved }}</p>
      </div>
      <div class="impact-box">
        <h4>Kg of Plastic Saved</h4>
        <p>{{ plasticSaved }}</p>
      </div>
      <div class="impact-box">
        <h4>Kg of Carbon Saved</h4>
        <p>{{ carbonSaved }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      bottlesSaved: {
        type: Number,
        default: 0,
      },
      plasticSaved: {
        type: Number,
        default: 0,
      },
      carbonSaved: {
        type: Number,
        default: 0,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  .impact-display {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .impact-box {
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .impact-box h4 {
    margin-bottom: 10px;
  }
  
  .impact-box p {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
  </style>
  