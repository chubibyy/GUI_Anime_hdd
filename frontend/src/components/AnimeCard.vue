<template>
    <div class="anime-card">
      <img :src=image alt="anime image" />
      <h2>{{ title }}</h2>
      <p>{{ score }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeCard',
    props: {
      title: {
        type: String,
        required: true
      },
      score: {
        type: Float32Array,
        required: true
      },
      image: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  
  <style scoped>
  .anime-card {
    width: 200px;
    border: 1px solid #cf4b4b;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: center;
  }
  .anime-card img {
    width: 100%;
    height: auto;
  }
  </style>
  