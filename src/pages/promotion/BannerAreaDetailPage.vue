<template>
  <div id="banner-area-detail-page" class="page-container">
    <Nav></Nav>
    <Header></Header>
    <PageTitle></PageTitle>
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
export default {
  name: "BannerAreaDetailPage",
  components: {
    Nav,
    Header,
    PageTitle
  }
}
</script>

<style scoped>

</style>
