<!-- ShareButton.vue -->

<template>
    <div class="share-button">
      <button @click="shareImpact" class="btn btn-success">Share Impact</button>
      <div v-if="shareLink" class="share-link">
        <p>Share this link:</p>
        <div class="input-group">
          <input :value="shareLink" readonly class="form-control" />
          <button @click="copyToClipboard" class="btn btn-outline-secondary">Copy</button>
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
    methods: {
      shareImpact() {
        // Lógica para compartir utilizando Firebase
        this.$emit('share-impact'); // Emite un evento para notificar al componente padre
      },
      copyToClipboard() {
        // Lógica para copiar el enlace al portapapeles
        const input = this.$el.querySelector('.form-control');
        input.select();
        document.execCommand('copy');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  .share-button {
    margin-bottom: 20px;
  }
  
  .share-link {
    margin-top: 10px;
  }
  
  .input-group {
    margin-top: 10px;
  }
  
  .input-group button {
    cursor: pointer;
  }
  </style>
  