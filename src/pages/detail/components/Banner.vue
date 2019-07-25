<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          {{this.gallaryImgs.length}}
          <i class="iconfont banner-icon">&#xe612;</i>
        </div>
      </div>
    </div>
    <!-- 使用动画组件-->
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-if="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/Fade'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    // 点击画廊关闭
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding  0 .2rem
      .banner-number
        height .32rem
        padding 0 .4rem
        margin-top .14rem
        font-size .24rem
        line-height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        .banner-icon
          font-size .24rem
</style>
