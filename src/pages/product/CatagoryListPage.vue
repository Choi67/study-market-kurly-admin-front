<template>
  <div id="catagory-list-page" class="page-container">
    <Nav></Nav>
    <Header></Header>
    <PageTitle></PageTitle>
    <div class="page-contents">
      <div class="btn-wrap">
        <b-button @click="goCategoryDetail">등록</b-button>
      </div>
      <b-table 
        :items="items"
        :select-mode="selectMode"
        responsive="sm"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
      ></b-table>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
export default {
  name: "CatagoryListPage",
  components: {
    Nav,
    Header,
    PageTitle
  },
  data() {
    return {
      items: [
        { No: 1, 대분류: '카테고리', 중분류: '채소' , 소분류:'', 이름:'친환경', 설명:'',등록자:'sy.choi',등록일시:'20220815',사용여부:'Y'},
        { No: 2, 대분류: '컬리추천', 중분류: '' , 소분류:'', 이름:'이 상품 어때요?', 설명:'',등록자:'sy.choi',등록일시:'20220815',사용여부:'Y'},
        { No: 3, 대분류: '시즌프로모션', 중분류: '추석 선물세트', 소분류:'[추천선물]' , 이름:'플러스딜 EVENT', 설명:'',등록자:'sy.choi',등록일시:'20220815',사용여부:'Y'},
        { No: 4, 대분류: '신제품', 중분류: '' , 소분류:'', 이름:'', 설명:'',등록자:'sy.choi',등록일시:'20220815',사용여부:'Y'},
        { No: 5, 대분류: '베스트', 중분류: '' , 소분류:'', 이름:'', 설명:'',등록자:'sy.choi',등록일시:'20220815',사용여부:'Y'},
        { No: 6, 대분류: '알뜰쇼핑', 중분류: '' , 소분류:'', 이름:'', 설명:'',등록자:'sy.choi',등록일시:'20220815',사용여부:'Y'},
      ],
      selectMode: 'single',

    }
  },
  methods: {
      goCategoryDetail(items) {
        this.$router.push({
          name: "CatagoryDetailPage",
          params:{
            seq : items.seq,
            pageName : "상품 카테고리 등록/수정"
          }
        });
      },
      selectAllRows() {
        this.$refs.selectableTable.selectAllRows()
      },
      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      },
      selectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.selectRow(2)
      },
      unselectThirdRow() {
        // Rows are indexed from 0, so the third row is index 2
        this.$refs.selectableTable.unselectRow(2)
      }
  }
}
</script>
<style scoped>
.btn-wrap{
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 0;
}
</style>
