<!-- InputBox.vue -->

<template>
    <div class="input-box">
      <label for="refillCount" class="form-label">Number of Refills:</label>
      <input
        type="number"
        id="refillCount"
        v-model="refillCount"
        class="form-control"
        placeholder="Enter the number of refills"
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
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  .input-box {
    margin-bottom: 20px;
  }
  </style>
  