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
        {{this.city}}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
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
      width 1.24rem
      float left
      text-align left
      padding-left .15rem
      position relative
      color #fff
      &:after
        width 0
        height 0
        content ''
        position absolute
        right .15rem
        top .3575rem
        border .15rem solid #fff
        border-bottom  none
        border-left-color transparent
        border-right-color transparent
</style>
