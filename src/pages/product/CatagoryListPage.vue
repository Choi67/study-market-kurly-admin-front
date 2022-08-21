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
        :fields="fields"
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
        { seq: 1, depth1: '카테고리', depth2: '채소' , depth3:'', title:'친환경', subTitle:'',adminId:'sy.choi',createDate:'20220815',useYn:'Y'},
        { seq: 3, depth1: '시즌프로모션', depth2: '추석 선물세트', depth3:'[추천선물]' , title:'플러스딜 EVENT', subTitle:'',adminId:'sy.choi',createDate:'20220815',useYn:'Y'},
        { seq: 4, depth1: '신제품', depth2: '' , depth3:'', title:'', subTitle:'',adminId:'sy.choi',createDate:'20220815',useYn:'Y'},
        { seq: 5, depth1: '베스트', depth2: '' , depth3:'', title:'', subTitle:'',adminId:'sy.choi',createDate:'20220815',useYn:'Y'},
        { seq: 6, depth1: '알뜰쇼핑', depth2: '' , depth3:'', title:'', subTitle:'',adminId:'sy.choi',createDate:'20220815',useYn:'Y'},
      ],
      fields: [
        { key: 'seq', label: 'No' },
        { key: 'depth1', label: '대분류' },
        { key: 'depth2', label: '중분류' },
        { key: 'depth3', label: '소분류' },
        { key: 'title', label: '이름' },
        { key: 'subTitle', label: '설명' },
        { key: 'adminId', label: '등록자' },
        { key: 'createDate', label: '등록일자' },
        { key: 'useYn', label: '사용여부' }
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
