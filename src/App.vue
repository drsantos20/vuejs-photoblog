<template>

  <div class="blog-main">
    <h1 class="blog-center">{{ title }}</h1>
    
    <ul class="list-photos">
      <li class="list-photos-item" v-for="photo in photos" :key="photo.id">
        <div class="panel">
          <h2 class="panel-title">{{photo.titulo}}</h2>
          <div class="panel-main">
            <img class="img-responsive" :src="photo.url" :alt="photo.name">
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  
  data() {
    return {
      title: 'Photoblog',
      photos: []
    }
  },
  created() {
      this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(photos => this.photos = photos, err => console.log(err));
  }
}
</script>

<style>

  .blog-main {
    text-align: center
  }

  .blog-center {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto;
    width:  96%;
  }

  .list-photos {
    list-style: none;
  }

  .list-photos .list-photos-item {
    display: inline-block;
  }

  .img-responsive {
    width: 100%;
  }


   .panel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .panel .panel-title {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

</style>