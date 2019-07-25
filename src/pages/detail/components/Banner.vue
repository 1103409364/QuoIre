<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg">
      <div class="banner-info">
        <div class="banner-title">上海迪士尼乐园</div>
        <div class="banner-number">
          11
          <i class="iconfont banner-icon">&#xe612;</i>
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg', 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_350x240_a8e4d8a8.jpg'],
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
