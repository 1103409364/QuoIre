<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <i class="item-title-icon"></i>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 名字给自己用, 自己使用自己,就是递归组件
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
      position relative
      top .06rem
      left .06rem
      display inline-block
      width .36rem
      height .36rem
      background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right .1rem
      background-size .4rem 3rem
  .item-children
    padding 0 .2rem
</style>
