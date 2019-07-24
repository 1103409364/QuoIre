<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      输入城市景点游玩主题
    </div>
    <router-link to="./city">
      <div class="header-right">
        <!-- 直接从 store 中取数据 -->
        {{this.city}}
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  // 通过 mapState 把 city 属性映射到组件的计算属性
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .header
    display flex
    height $headerHeight
    line-height $headerHeight
    background-color $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      text-align center
      .iconfont
        font-size .4rem
    .header-input
      flex 1
      line-height .64rem
      height .64rem
      margin-left .2rem
      margin-top .12rem
      padding-left .2rem
      background #fff
      border-radius .1rem
      color #ccc
    .header-right
      box-sizing border-box
      min-width 1.04rem
      float right
      text-align center
      padding-left .1rem
      padding-right .5rem
      position relative
      color #fff
      &:after
        width 0
        height 0
        content ''
        position absolute
        right .1rem
        top .3575rem
        border .15rem solid #fff
        border-bottom  none
        border-left-color transparent
        border-right-color transparent
</style>
