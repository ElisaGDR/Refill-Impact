<!-- InputBox.vue -->

<template>
  <div>
    <label for="refillCount">Number of Refills:</label>
    <input
      type="number"
      id="refillCount"
      v-model="refillCount"
      placeholder="Enter the number of refills"
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
/* Add your component-specific styles here */
label {
  font-weight: bold;
  margin-bottom: 8px;
}
input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>

  