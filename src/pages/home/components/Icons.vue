<template>
  <div class="icons">
    <swiper :options="swiperOption">
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" alt="img">
        </div>
      <div class="icon-desc">{{item.desc}}</div>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      }
    }
  },
  computed: {
    // 分页算法
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0;
    padding-bottom 50%

  .icon
    overflow hidden
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      left 0
      top 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .2rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
