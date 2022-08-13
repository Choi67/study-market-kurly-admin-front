<template>
  <div id="nav">
    <div class="logo">
      <button @click="$router.push('/').catch(()=>{});">
      </button>
    </div>
    <div class="menu-nav">
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    searchresultshow(keyword) {
      if (keyword !== ''){
        this.$router.push({
          name: "SearchPage",
          params: {
            keyword: this.keyword,
            isResultShow: true,
          },
        });
        this.keyword = ''
        console.log('"',keyword,'"' + ' 검색')
      } else {
        alert('검색어를 입력해주세요!')
      }
    },
  }
};
</script>

<style>
#nav {
  border-bottom: 1px solid lightgray;
  margin-top: 1em;
}
.logo > button {
  border: none;
  background-color: inherit;
}
.logo img {
  width: auto;
  height: 80px;
}
.menu-nav {
  display: flex;
  text-align:right;
  width: 1000px;
  padding: 0 1em 0.6em 1em;
  flex-direction: row-reverse;
  margin: 0 auto;
}
.search-form {
  background-color: rgb(245, 245, 245);
  border:none;
  border-radius: 0.7em;
}
.search-form > input[type=text] {
  background-color: inherit;
  color:rgb(48, 48, 48);;
  font-weight: bold;
}
.menu-nav button,
.menu-nav a {
  background-color: inherit;
  color: black;
  border: none;
  padding-right: 1em;
}
.menu-nav button:hover,
.menu-nav button:focus,
.menu-nav a:hover,
.menu-nav a:focus {
  background-color: inherit;
  border: none;
  color: #5f0080;
}
.menu-nav > .search-form {
  display: flex;
}
</style>
