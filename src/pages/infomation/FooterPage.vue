<template>
  <div id="footer-page" class="page-container">
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
  name: "FooterPage",
  components: {
    Nav,
    Header,
    PageTitle
  }
}
</script>

<style scoped>

</style>
