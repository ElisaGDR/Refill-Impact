<!-- SharePage.vue -->

<template>
    <div class="share-page">
      <h1>Shared Impact</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else>
        <p>Bottles Saved: {{ bottlesSaved }}</p>
        <p>Plastic Saved: {{ plasticSaved }}</p>
        <p>Carbon Saved: {{ carbonSaved }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '../Firebase.js';
  import { doc, getDoc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        bottlesSaved: 0,
        plasticSaved: 0,
        carbonSaved: 0,
        loading: true
      };
    },
    created() {
      const shareId = this.$route.params.id;
      this.getDataFromFirestore(shareId);
    },
    methods: {
      async getDataFromFirestore(shareId) {
        try {
          const docRef = doc(db, 'sharelinks', shareId);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            this.bottlesSaved = data.bottlesSaved;
            this.plasticSaved = data.plasticSaved;
            this.carbonSaved = data.carbonSaved;
            this.loading = false;
          } else {
            console.error('El documento no existe');
            this.loading = false;
          }
        } catch (error) {
          console.error('Error al obtener los datos del documento:', error);
          this.loading = false;
        }
      }
    }
  };
  </script>
  
  <style>
  .share-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .loading {
    font-weight: bold;
  }
  </style>
  