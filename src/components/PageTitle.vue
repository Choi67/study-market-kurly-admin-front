<template>
  <div id="page-title">
    <h1 class="page-name">{{pageName}}</h1>
    <ul v-if="pageNav.length > 0" class="page-navigation">
      <li v-for="depth in pageNav">{{depth}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  data() {
    return {
      pageName: this.$route.params.pageName,
      pageNav : ["홈",this.$route.params.pageName]
    }
  }
}
</script>

<style scoped>
#page-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 20px 320px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #d9e0e7;
}

#page-title .page-name{
  font-size: 24px;
  padding: 0 30px;
  border: none;
  line-height: 32px;
  font-weight: 500;
}
#page-title .page-navigation{
  display: flex;
  align-items: center;
}
#page-title .page-navigation li{}
#page-title .page-navigation li:not(:last-child):after{
  content: '❯';
  display: inline-block;
  padding:0 5px
}
</style>
