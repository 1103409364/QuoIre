<template>
<div class="wrapper">
  <!--默认图片不是第一张解决方法: 请求成功时再生成 swiper -->
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src=item.imgUrl alt="p">
    </swiper-slide>
    <!-- Optional controls -->
    <!-- 父组件通过 slot 定制 swiper 组件 -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 图片分页小点, 传 class 进去
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom: 31.20%
  background-color: #999
  .swiper-img
    width 100%
</style>
