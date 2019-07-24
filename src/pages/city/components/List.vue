<template>
  <div class="list" ref="wrapper">
    <!-- better-scroll 只能控制一个子节点, 这里包裹一层 div -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wraper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object, // 对象
    letter: String
  },
  // mapState 参数也可以是对象
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    // 监听 letter, 下面是 es6 的写法, 属性值变量一致可以缩写
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter])
        // ref 在循环里, 获得的是数组
        const el = this.$refs[this.letter][0]
        // better-scroll 提供的接口, 参数要求是 dom 元素或者选择器
        this.scroll.scrollToElement(el)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 把 mutation 映射到组件中 changeCity 这个方法里，相当于给组件新增了一个方法
    ...mapMutations(['changeCity'])
  },
  mounted () {
    const options = {
      mouseWheel: true,
      click: true,
      taps: true
    }

    this.scroll = new BScroll(this.$refs.wrapper, options)
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
        line-height .76rem
        color #666666
        padding-left .2rem
</style>
