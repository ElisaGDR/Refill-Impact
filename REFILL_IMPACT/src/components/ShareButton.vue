<!-- ShareButton.vue -->

<template>
  <div class="share-button">
    <button @click="shareImpact" class="btn btn-success" :disabled="loading">
      {{ loading ? 'Sharing...' : 'Share your Impact' }}
    </button>
    <div v-if="shareLink" class="share-link">
      <p class="title">Share this link:</p>
      <div class="input-group">
        <input :value="firebaseLink" readonly class="form-control" />
        <button @click="copyToClipboard" class="btn btn-success">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shareLink: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    firebaseLink() {
      return `https://refill-impact.firebaseapp.com/${this.shareLink}`;
    },
  },
  methods: {
    shareImpact() {
      this.loading = true;
      this.$emit('share-impact');
    },
    copyToClipboard() {
      const input = this.$el.querySelector('.form-control');
      input.select();
      document.execCommand('copy');
    },
  },
  
};
</script>

<style scoped>
/* Specific component styles */
.share-button {
  margin-bottom: 40px;
  border-radius: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 2%;
}
.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: beige; 
  padding: 5%;
}
.form-control {
  padding: 4px;
  width: 20%;
  box-sizing: border-box;
  text-align: center;
  background-color: beige; 
  border-radius: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.btn {
  border-radius: 50px;
}
</style>

  