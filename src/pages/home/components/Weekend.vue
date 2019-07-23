<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    padding-left .1rem
    line-height .8rem
    background #eee
    text-align .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
  .item-info
    flex 1
    padding .1rem
    // 防止省略号无效
    min-width 0
    .item-title
      line-height .54rem
      font-size .28rem
      ellipsis()
    .item-desc
      font-size .22rem
      line-height .4rem
      margin-bottom .16rem
      color: #999
      ellipsis()
</style>
