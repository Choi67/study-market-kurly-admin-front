<template>
  <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" visible no-header shadow>
    <template>
      <div id="nav">
        <b-nav vertical>
          <b-nav-item v-for="depth1 in menuTree"
                      @click="moveToPage(depth1)">
            {{depth1.label}}
            <b-nav-item v-if="depth1.sub.length > 0"
                        v-for="depth2 in depth1.sub"
                        @click="moveToPage(depth2)">
              {{depth2.label}}
              <b-nav-item v-if="depth2.sub.length > 0"
                          v-for="depth3 in depth2.sub"
                          @click="moveToPage(depth3)">
                {{depth3.label}}
              </b-nav-item>
            </b-nav-item>
          </b-nav-item>
        </b-nav>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      menuTree: [
        {
          delYn: "N",
          depth: 1,
          id: "001",
          isOpen: true,
          label: "상품관리",
          url: null,
          parentId: "MKT",
          programId: "001",
          seq: 1,
          sortNo: 1,
          sub:[
            {
              delYn: "N",
              depth: 2,
              id: "001_001",
              isOpen: true,
              label: "상품 등록/수정",
              url: "ProductListPage",
              parentId: "001",
              programId: "001/001",
              seq: 5,
              sortNo: 1,
              sub:[]
            },
            {
              delYn: "N",
              depth: 2,
              id: "001_002",
              isOpen: true,
              label: "상품 카테고리 등록/수정",
              url: "CatagoryListPage",
              parentId: "001",
              programId: "001/002",
              seq: 6,
              sortNo: 2,
              sub:[]
            }
          ]
        },
        {
          delYn: "N",
          depth: 1,
          id: "002",
          isOpen: true,
          label: "프로모션관리",
          url: null,
          parentId: "MKT",
          programId: "002",
          seq: 2,
          sortNo: 2,
          sub:[
            {
              delYn: "N",
              depth: 2,
              id: "002_001",
              isOpen: true,
              label: "프로모션 등록/수정",
              url: "PromotionListPage",
              parentId: "002",
              programId: "002/001",
              seq: 5,
              sortNo: 1,
              sub:[]
            },
            {
              delYn: "N",
              depth: 2,
              id: "002_002",
              isOpen: true,
              label: "프로모션 배너관리",
              url: null,
              parentId: "002",
              programId: "002/002",
              seq: 6,
              sortNo: 2,
              sub:[
                {
                  delYn: "N",
                  depth: 3,
                  id: "002_002_001",
                  isOpen: true,
                  label: "소재관리",
                  url: "BannerListPage",
                  parentId: "002_002",
                  programId: "002/002/001",
                  seq: 5,
                  sortNo: 1,
                  sub:[]
                },
                {
                  delYn: "N",
                  depth: 3,
                  id: "002_002_002",
                  isOpen: true,
                  label: "편성관리",
                  url: "BannerPlanPage",
                  parentId: "002_002",
                  programId: "002/002/002",
                  seq: 5,
                  sortNo: 2,
                  sub:[]
                },
                {
                  delYn: "N",
                  depth: 3,
                  id: "002_002_003",
                  isOpen: true,
                  label: "영역관리",
                  url: "BannerAreaListPage",
                  parentId: "002_002",
                  programId: "002/002/003",
                  seq: 5,
                  sortNo: 3,
                  sub:[]
                }
              ]
            }
          ]
        },
        {
          delYn: "N",
          depth: 1,
          id: "003",
          isOpen: true,
          label: "인포메이션관리",
          url: null,
          parentId: "MKT",
          programId: "003",
          seq: 3,
          sortNo: 3,
          sub:[
            {
              delYn: "N",
              depth: 2,
              id: "003_001",
              isOpen: true,
              label: "공지사항",
              url: "NoticePage",
              parentId: "003",
              programId: "003/001",
              seq: 5,
              sortNo: 1,
              sub:[]
            },
            {
              delYn: "N",
              depth: 2,
              id: "003_002",
              isOpen: true,
              label: "이용약관",
              url: "TermsPage",
              parentId: "003",
              programId: "003/002",
              seq: 6,
              sortNo: 2,
              sub:[]
            },
            {
              delYn: "N",
              depth: 2,
              id: "003_003",
              isOpen: true,
              label: "하단푸터",
              url: "FooterPage",
              parentId: "003",
              programId: "003/003",
              seq: 6,
              sortNo: 3,
              sub:[]
            }
          ]
        },
        {
          delYn: "N",
          depth: 1,
          id: "004",
          isOpen: true,
          label: "내정보관리",
          url: "MyPage",
          parentId: "MKT",
          programId: "004",
          seq: 4,
          sortNo: 4,
          sub:[]
        }
      ]
    }
  },
  methods: {
    moveToPage(menu) {
      if(menu.url != '' && menu.url != undefined){
        this.$router.push({
          name: menu.url,
          params:{
            pageName : menu.label
          }
        });
      }
    },
  }
};
</script>

<style>
#nav {
  padding-top: 50px;
}
</style>
