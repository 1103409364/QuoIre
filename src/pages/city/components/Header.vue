<template>
  <div class="header">
    城市选择
    <router-link to="./">
    <i class="iconfont header-back">&#xe624;</i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    font-size .32rem
    text-align center
    color #fff
    background-color: $bgColor
    .header-back
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
      color #fff
</style>
