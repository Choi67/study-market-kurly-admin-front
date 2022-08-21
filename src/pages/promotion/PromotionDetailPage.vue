<template>
  <div id="promotion-detail-page" class="page-container">
    <Nav></Nav>
    <Header></Header>
    <PageTitle></PageTitle>
    <div class="page-contents">
      <b-form @submit="onSubmit" class="promotion-form">
        <b-form-group id="input-group-1" label="・ 노출여부" >
          <b-form-radio-group class="input-group" v-model="form.displayYn" id="radios-1">
            <b-form-radio value="Y">노출</b-form-radio>
            <b-form-radio value="N">노출 안함</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group id="input-group-2" label="・ 제목" label-for="input-title">
          <b-form-input id="input-title" v-model="form.title" type="text" placeholder="카테고리 제목" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="・ 프로모션 유형" >
          <b-form-radio-group class="input-group" v-model="form.promotionType" id="radios-2">
            <b-form-radio value="P">기획전</b-form-radio>
            <b-form-radio value="E">이벤트</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-form-group class="input-group" id="input-group-3" label="・ 이벤트 유형" v-if="form.promotionType.includes('E')">
          <b-form-checkbox-group class="input-group" v-model="form.eventType" @change="rangeContents()" id="checkbox-1">
            <b-form-checkbox value="G">랜딩형</b-form-checkbox>
            <b-form-checkbox value="C">댓글형</b-form-checkbox>
            <b-form-checkbox value="P">쿠폰형</b-form-checkbox>
            <b-form-checkbox value="R">난수형</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group id="input-group-4" label="・ 오퍼정보 업로드" label-for="file-offr-excel" v-if="form.eventType.includes('P')">
          <b-form-file
              id="file-offr-excel"
              v-model="form.offr"
              :state="Boolean(form.offr)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ form.offr ? form.offr.name : '' }}</div>
        </b-form-group>
        <b-form-group id="input-group-5" label="・ 난수번호 업로드" label-for="file-rndnum-excel" v-if="form.eventType.includes('R')">
          <b-form-file
              id="file-rndnum-excel"
              v-model="form.rndnum"
              :state="Boolean(form.rndnum)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ form.rndnum ? form.rndnum.name : '' }}</div>
        </b-form-group>
        <b-form-group id="input-group-6" label="・ 이벤트 배너 이미지" label-for="file-banner-image">
          <b-form-file
              id="file-banner-image"
              v-model="form.banner"
              :state="Boolean(form.banner)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ form.banner ? form.banner.name : '' }}</div>
        </b-form-group>
        <b-form-group id="input-group-7" label="・ 이벤트 내용" >
          <b-form-select width="50%" v-model="selectContent" :options="selectOptions"></b-form-select>
          <b-button @click="addEventContent">추가</b-button>
          <b-form-group id="input-group-7-1" v-for="(idx,content) in form.contents" label="・ 이벤트 배너 이미지" label-for="file-content-image">
            <b-form-file
                id="file-content-image"
                v-model="content.image"
                :state="content.image"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">Selected file: {{ form.contents[idx].image ? form.contents[idx].image : '' }}</div>
          </b-form-group>
        </b-form-group>
        <b-form-group id="input-group-8" label="・ 유의사항" >
          <b-form-textarea v-model="form.notice"></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-9" label="・ 프로모션 시작일" >
          <b-form-datepicker id="sDate-datepicker" v-model="form.sDate" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-form-group id="input-group-8" label="・ 프로모션 종료일" >
          <b-form-datepicker id="eDate-datepicker" v-model="form.eDate" class="mb-2"></b-form-datepicker>
        </b-form-group>
      </b-form>
      <b-button type="submit" variant="primary">등록</b-button>
      <b-button type="reset" variant="danger">취소</b-button>
    </div>
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
  },
  data(){
    return {
      selectContent : '',
      selectOptions:[
        { value: null, text: 'Please select some item' , disabled: true },
        { eventType:'G', contentType: '', text: '이미지' , disabled: true },
        { eventType:'G', contentType: 'link', text: '링크 연결', disabled: true  },
        { eventType:'P', contentType: 'coupon', text: '쿠폰 다운로드', disabled: true  },
        { eventType:'Q', contentType: 'quiz', text: '퀴즈 정답 입력', disabled: true },
        { eventType:'R', contentType: 'rndnum', text: '난수번호 입력', disabled: true }
      ],
      form: {
        displayYn: 'N',
        title: '',
        promotionType : 'E',
        eventType: [],
        offr: null,
        rndnum: null,
        banner: null,
        contents: [],
        notice:'',
        sDate:'',
        eDate:'',
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
    },
    // addEventContent(){
    //   var value = {
    //     link : {image:'',link:''},
    //     coupon : {image:'', type:''},
    //     quiz : {image:'',value:'', type: ''},
    //     rndnum : {image:''}
    //   }
    //
    //   var type = this.selectContent;
    //
    //   this.form.contents.push(value.type)
    //
    // },
    rangeContents(){
      this.selectOptions.forEach(e => {
        if(this.form.eventType.includes(e.eventType)){
          e.disabled = false
        } else {
          e.disabled = true
        }
      })
    }
  }
}
</script>

<style scoped>
.promotion-form{
  padding: 1rem 0;
}
.form-group{
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}
.form-group .col-form-label{
  font-weight: bold;
}
.custom-select{
  width: 50% !important;
}
</style>
