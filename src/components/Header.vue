<template>
  <div id="header">
    <div class="logo">
      <button @click="$router.push('/').catch(()=>{});">
      </button>
    </div>
    <h1 class="header-title">마켓컬리 어드민</h1>
    <div class="user-info">
      <p class="user-name"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
