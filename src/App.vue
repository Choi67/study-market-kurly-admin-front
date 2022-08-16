<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
h1, h2, h3, h4, h5, h6, p{
  margin: 0;
  padding: 0;
}
button{
  margin: 0;
  padding: 0;
  background: none;
  outline: none;
  border: none;
}
img{
  display: block;
  width: 100%;
}
ul, li{
  margin: 0;
  padding: 0;
  /*list-style: none;*/
}
.page-container{
  padding-top: 50px;
}
</style>
