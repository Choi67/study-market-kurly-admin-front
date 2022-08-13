<template>
  <div id="promotion-detail-page" class="page-container">
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
  name: "PromotionDetailPage",
  components: {
    Nav,
    Header,
    PageTitle
  }
}
</script>

<style scoped>

</style>
