import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import MyPage from '../pages/MyPage'

import ProductListPage from '../pages/product/ProductListPage'
import ProductDetailPage from '../pages/product/ProductDetailPage'
import CatagoryListPage from '../pages/product/CatagoryListPage'
import CatagoryDetailPage from '../pages/product/CatagoryDetailPage'

import PromotionListPage from '../pages/promotion/PromotionListPage'
import PromotionDetailPage from '../pages/promotion/PromotionDetailPage'
import BannerListPage from '../pages/promotion/BannerListPage'
import BannerDetailPage from '../pages/promotion/BannerDetailPage'
import BannerPlanPage from '../pages/promotion/BannerPlanPage'
import BannerAreaListPage from '../pages/promotion/BannerAreaListPage'
import BannerAreaDetailPage from '../pages/promotion/BannerAreaDetailPage'

import NoticePage from '../pages/infomation/NoticePage'
import TermsPage from '../pages/infomation/TermsPage'
import FooterPage from '../pages/infomation/FooterPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/product/product-list',
      name: 'ProductListPage',
      component: ProductListPage
    },
    {
      path: '/product/product-detail',
      name: 'ProductDetailPage',
      component: ProductDetailPage
    },
    {
      path: '/product/catagory-list',
      name: 'CatagoryListPage',
      component: CatagoryListPage
    },
    {
      path: '/product/catagory-detail',
      name: 'CatagoryDetailPage',
      component: CatagoryDetailPage
    },
    {
      path: '/promtion/promotion-list',
      name: 'PromotionListPage',
      component: PromotionListPage
    },
    {
      path: '/promotion/promotion-detail',
      name: 'PromotionDetailPage',
      component: PromotionDetailPage
    },
    {
      path: '/promotion/banner-list',
      name: 'BannerListPage',
      component: BannerListPage
    },
    {
      path: '/promotion/banner-detail',
      name: 'BannerDetailPage',
      component: BannerDetailPage
    },
    {
      path: '/promotion/banner-plan',
      name: 'BannerPlanPage',
      component: BannerPlanPage
    },
    {
      path: '/promotion/banner-area-list',
      name: 'BannerAreaListPage',
      component: BannerAreaListPage
    },
    {
      path: '/promotion/banner-area-detail',
      name: 'BannerAreaDetailPage',
      component: BannerAreaDetailPage
    },
    {
      path: '/infomation/notice',
      name: 'NoticePage',
      component: NoticePage
    },
    {
      path: '/infomation/terms',
      name: 'TermsPage',
      component: TermsPage
    },
    {
      path: '/infomation/footer',
      name: 'FooterPage',
      component: FooterPage
    },
  ]
})
