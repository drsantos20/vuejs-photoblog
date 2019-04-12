<template>

  <div>
    <h1>{{ title }}</h1>
    
    <ul>
      <li v-for="photo of photos">
        <img :src="photo.url" :alt="photo.name">
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  
  data() {
    return {
      title: 'Photoblog',
      photos: [
       {
        url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
        name: 'Dog'
       },
       {
        url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
        name: 'Dog'
       },
      ]
    }
  }
}
</script>

<style>
</style>