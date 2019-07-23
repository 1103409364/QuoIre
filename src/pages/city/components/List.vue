<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object // 对象
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-topbottom
    // 改变 1px 边框的颜色
    &:before, &:after
      border-color: #ccc
  .border-bottom
    // 改变 1px 边框的颜色
    &:before
      border-color: #ccc
  .list
    // 禁用默认的拖动, 禁止溢出滑动, 使用插件模拟
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background-color #eee
      padding-left .26rem
      color #666
    .button-list
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wraper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid  #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .46rem
        color #666666
        padding .2rem
</style>
