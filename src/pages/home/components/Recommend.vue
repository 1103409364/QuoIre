<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        title: '北京欢乐谷',
        desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'
      }, {
        id: '002',
        title: '北京欢乐谷',
        desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'
      }, {
        id: '003',
        title: '北京欢乐谷',
        desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'
      }, {
        id: '004',
        title: '北京欢乐谷',
        desc: '这里是学生党名副其实的开心课堂，这里同样是青年情侣的浪漫圣地',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg'
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      // 防止省略号无效
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        margin-top .16rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background-color #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff
</style>
