<template>
  <div>
      <h2>How to use the Cloudinary Upload widget</h2>
      <button v-on:click="upload">Upload</button><br>
      <p>Look at the console for the message "Image URL"</p>
  </div>
</template>

<script>
export default {
  name: 'CloudinaryComp',
  data() {
    return {
      myWidget : {}
    }
  },
  methods: {
      upload() {
        this.myWidget.open();
      }
  },
  mounted() {
       this.myWidget = window.cloudinary.createUploadWidget(
      {
        // Insert your cloud name and presets here, 
        // see the documentation
        cloudName: 'get-your-own', 
        uploadPreset: 'get-your-own'
      }, 
      (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          console.log("Image URL: " + result.info.url);
        }
      }
    );

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
