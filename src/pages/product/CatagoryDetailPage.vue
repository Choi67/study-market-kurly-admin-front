<template>
  <div id="catagory-detail-page" class="page-container">
    <Nav></Nav>
    <Header></Header>
    <PageTitle></PageTitle>
    <div class="page-contents">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="제목" label-for="input-title">
          <b-form-input id="input-title" v-model="form.title" type="text" placeholder="카테고리 제목" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="설명" label-for="input-subTitle">
          <b-form-input id="input-subTitle" v-model="form.subTitle" type="text" placeholder="카테고리 설명"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3">
          <b-form-radio-group v-model="form.checked" id="radios-3">
            <b-form-radio value="M">중분류</b-form-radio>
            <b-form-radio value="S">소분류</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group id="input-group-4" label="대분류" label-for="input-largeCategory">
          <b-form-select id="input-largeCategory" v-model="form.largeCategory" :options="largeCategorys" required></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-5" label="중분류" label-for="input-middleCategory">
          <b-form-select id="input-middleCategory" v-model="form.middleCategory" :options="middleCategorys" required></b-form-select>
        </b-form-group>
        <b-form-group id="input-group-6" label="카테고리 이미지" label-for="file-categoryImage">
          <b-form-file
            id="file-categoryImage"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
        </b-form-group>
        <b-form-group id="input-group-7" label="뷰타입" >
          <b-form-radio-group v-model="form.checked" id="radios-3">
            <b-form-radio value="1">타입1</b-form-radio>
            <b-form-radio value="2">타입2</b-form-radio>
            <b-form-radio value="3">타입3</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group id="input-group-8" label="등록자" label-for="input-user">
          <b-form-input id="input-user" v-model="form.title" type="text" readonly></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-9" label="등록일자" label-for="input-date">
          <b-form-input id="input-date" v-model="form.title" type="text" readonly></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
    
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
export default {
  name: "CatagoryDetailPage",
  components: {
    Nav,
    Header,
    PageTitle
  },
  data(){
    return {
      form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
    }
  },
  methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  }
}
</script>

<style scoped>

</style>
