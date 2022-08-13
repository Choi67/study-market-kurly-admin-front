<template>
  <div id="my-page" class="page-container">
    <Nav></Nav>
    <Header></Header>
    <PageTitle></PageTitle>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Header from "../components/Header.vue";
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "MyPage",
  components: {
    Nav,
    Header,
    PageTitle
  }
}
</script>

<style scoped>

</style>
