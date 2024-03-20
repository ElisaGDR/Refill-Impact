<!-- ShareButton.vue -->

<template>
  <div class="share-button">
    <button @click="shareImpact" class="btn btn-success" :disabled="loading">
      {{ loading ? 'Sharing...' : 'Share your Impact' }}
    </button>
    <div v-if="shareLink" class="share-link">
      <p class="title">Share this link:</p>
      <div class="input-group">
        <input :value="shareUrl" readonly class="form-control" />
        <button @click="copyToClipboard" class="btn btn-success">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '../Firebase.js';

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
      shareUrl: '',
    };
  },
  computed: {
    firebaseLink() {
      return `http://localhost:5173/share/${this.shareLink}`;
    },
  },
  methods: {
    async shareImpact() {
      this.loading = true;
      try {
        const docRef = await firestore.collection('sharelinks').add({
          bottlesSaved: this.bottlesSaved,
          plasticSaved: this.plasticSaved,
          carbonSaved: this.carbonSaved,
        });
        console.log(bottlesSaved);
        this.shareUrl = `http://localhost:5173/share/${docRef.id}`;
        this.loading = false;
      } catch (error) {
        console.error('Error sharing impact:', error);
        this.loading = false;
      }
    },
    async copyToClipboard() {
      const input = this.$el.querySelector('.form-control');
      input.select();
      try {
        await navigator.clipboard.writeText(input.value);
        console.log('Text successfully copied to clipboard');
      } catch (err) {
        console.error('Unable to copy text to clipboard', err);
      }
    },
  },
};
</script>

<style scoped>
/* Specific component styles */
.share-button {
  margin-bottom: 10px;
  border-radius: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding: 2%;
}

.title {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: beige;
  padding: 2%;
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
