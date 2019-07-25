<template>
  <div>
    <router-link tag="div" class="header-abs" to="/" v-show="showAbs">
      <i class="iconfont header-abs-back">&#xe624;</i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/" >
        <i class="iconfont header-fixed-back">&#xe624;</i>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    // 顶部有两层返回栏,下滑的时候隐藏第一层,显示第二层
    // 第二层起始 opacity 为 0,渐变到1
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 1) {
        let opacity = top / 200
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // keep-alive 提供的另一个生命周期函数,页面即将被替换或者隐藏的时候执行
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background-color rgba(0,0,0,.5)
    .header-abs-back
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    background-color $bgColor
    color #fff
    .header-fixed-back
      position absolute
      left 0
      top 0
      width .64rem
      text-align center
      color #fff
      font-size .4rem
</style>
