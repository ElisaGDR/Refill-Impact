<template>
  <div class="impact-display">
    <div class="impact-box">
      <h4>Saved Plastic Bottles (nº) </h4>
      {{ bottlesSaved }}
    </div>
    <div class="impact-box">
      <h4>Saved Plastic (Kg)</h4>
      {{ plasticSaved }}
    </div>
    <div class="impact-box">
      <h4>Saved Carbon Dioxide (Kg)</h4>
      {{ carbonSaved }}
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
  padding: 30px;
  border: 5px solid #4acb2d;
  border-radius: 30px;
  margin: 2%;
}

.impact-box h4 {
  margin-bottom: 10px;
  color: beige; 
  font-family: Georgia, 'Times New Roman', Times, serif;
}

div {
  color: beige; 
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 0.9em
}
</style>



  