<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        // 图片分页小点, 传 class 进去
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: ' 01',
        imgUrl: 'http://source.qunarzz.com/site/images/wns/20190626_dujia_homepage_top_banner_5.jpg'
      }, {
        id: '02',
        imgUrl: 'http://source.qunarzz.com/site/images/wns/2019715_dujia_homepage_top_banner_6.jpg'
      }]
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
  padding-bottom: 25.60%
  background-color: #999
  .swiper-img
    width 100%
</style>
