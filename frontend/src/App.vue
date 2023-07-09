<template>
  <div>
    <AnimeCard  
      :title="animes.title"
      :score="animes.score"
      :image="animes.images?.jpg?.image_url"
    />
  </div>
</template>

<script>
import AnimeCard from './components/AnimeCard.vue'
export default {
  name : 'App',
  components: {
    AnimeCard
  },
  data() {
    return {
      animes: []
    }
  },
  // Appel API pour récupérer les animes
  created() {
    fetch(`${process.env.VUE_APP_API_URL}/anime/konosuba`)
      .then(response => response.json())
      .then(data => {
        this.animes = data;
        console.log(this.animes.title)

      })
  }
}
</script>
