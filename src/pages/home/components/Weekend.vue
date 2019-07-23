<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '001',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
      }, {
        id: '002',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
      }, {
        id: '003',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
      }, {
        id: '004',
        title: '京城周末撒欢',
        desc: '在帝都过周末，不仅仅是城中游！',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .title
    margin-top .2rem
    padding-left .1rem
    line-height .8rem
    background #eee
    text-align .2rem
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
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
      ellipsis()
</style>
