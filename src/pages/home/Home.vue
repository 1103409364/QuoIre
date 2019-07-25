<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '', // 上一次的城市
      scrollTop: 0,
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    // 映射到 vuex 中的 city 当前城市,如果要重命名 city 属性 使用对象参数({k:v})
    // state 中的数据会被城市选择页改变,
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },
    handleScroll () {
      this.scrollTop = document.documentElement && document.documentElement.scrollTop
    }
  },
  mounted () {
    this.getHomeInfo()
    // city 从计算属性中来
    this.lastCity = this.city
    //
    window.addEventListener('scroll', this.handleScroll)
  },
  // 使用 keep-alive 之后, 组件会多一个生命周期 activated, keep-alive加载时调用
  activated () {
    // 当城市发生改变的时候，请求新的数据
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    // 进入详情页记住滚动位置
    if (this.scrollTop > 0) {
      window.scrollTo(0, this.scrollTop)
      this.scrollTop = 0
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  // deactivated 页面退出时关闭事件 防止其他页面出现问题
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
</style>
