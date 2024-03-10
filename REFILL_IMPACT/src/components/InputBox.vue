<!-- InputBox.vue -->

<template>
  <div>
    <label for="refillCount">Insert the number of your Water Refills:</label>
    <br>
    <input
      type="number"
      id="refillCount"
      v-model="refillCount"
      placeholder="Enter the number"
      @input="emitRefillCountChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      refillCount: 0,
    };
  },
  methods: {
    emitRefillCountChange() {
      this.$emit('refill-count-change', this.refillCount);
    },
  },
};
</script>

<style scoped>
/* Specific component styles */
label {
  font-weight: bold;
  color: beige;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-bottom: 30px;
}
input {
  padding: 4px;
  width: 20%;
  box-sizing: border-box;
  text-align: center;
  background-color: beige; 
  border-radius: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
input::placeholder {
  font-size: 0.5em; 
}
</style>

  