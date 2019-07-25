<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="swiper-img" :src="item" alt="p">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 分页器样式
        paginationType: 'fraction',
        // 切换效果
        effect: 'coverflow',
        // 监听到父级元素 dom 结构变化自我刷新,解决 swiper 宽度计算的问题
        observeParents: true,
        // 监听到这个元素结构变化自我刷新
        observer: true
      }
    }
  },
  methods: {
    // 画廊点击的时候发布关闭事件
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background-color #000
    .wrapper
      // overflow hidden
      height 0
      width 100%
      padding-bottom 100%
      background-color #fff
      .swiper-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -1rem
</style>
