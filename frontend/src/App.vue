<template>
  <div id="app">
    <input type="file" @change="handleFileUpload" multiple webkitdirectory directory />
    <ul>
      <li v-for="(folder, index) in folders" :key="index">{{ folder }}</li>
    </ul>
    <div v-for="(anime, index) in animes" :key="index">
      <AnimeCard  
        :title="anime.title"
        :score="anime.score"
        :image="anime.images?.jpg?.image_url"
      />
    </div>
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
      animes: [],
      folders: []
    }
  },
  methods: {
    async handleFileUpload(event) {
      const files = [...event.target.files];
      const folderSet = new Set();
      files.forEach(file => {
        let pathParts = file.webkitRelativePath.split('/');
        let folder = pathParts.slice(1, pathParts.length - 1).join('/');
        const slashIndex = folder.indexOf('/');
        if (slashIndex > -1) {
          folder = folder.substring(0, slashIndex);
        }
        // Supprimer tout ce qui vient après le nom principal de l'anime
        const regex = /(\s\d+|\sS\d+|\sVOSTFR|\sMULTi|\sBD|\sHDTV|\sWEBRip|\sWEB-DL|\sAAC|\sWKN|\sBDRip|\sBDRIP|\sFLAC|\sX265|\s10BITS|\s720p|\s1080p|\s-\s|[[(]|\.[\w\d-]+)/i;
        const matchIndex = folder.search(regex);
        if (matchIndex > -1) {
          folder = folder.substring(0, matchIndex).trim();
        }
        folderSet.add(folder);
      });
      this.folders = Array.from(folderSet);
      await this.fetchAnimes();
    }

,
    async fetchAnimes() {
      for(const folder of this.folders){
        try {
          const response = await fetch(`${process.env.VUE_APP_API_URL}/anime/${encodeURIComponent(folder)}`)
          const data = await response.json();
          this.animes.push(data);
        } catch (error) {
          console.error('There was an error!', error);
        }
      }
    }
  }
}
</script>
