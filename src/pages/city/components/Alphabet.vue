<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="key"
      :ref="key"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      timmer: null,
      startX: 0,
      startY: 0,
      endY: 0
    }
  },
  // 字母列表
  // computed: {
  //   letters () {
  //     const letters = []
  //     for (let i in this.cities) {
  //       letters.push(i)
  //     }
  //     return letters
  //   }
  // },
  // 优化1:这个组件初次渲染的时候, 传进来的数据是空对象, 当父组件 ajax 获取数据, 传进来的数据发送变化, 组件重新渲染, updated 重新执行
  updated () {
    this.startX = document.documentElement.clientWidth - 5
    this.startY = this.$refs['A'][0].offsetTop + 79
    this.endY = this.$refs['Z'][0].offsetTop + 79
  },
  methods: {
    // 使用触摸事件代替 click
    // handleLetterClick (e) {
    // },
    // @click="handleLetterClick"
    handleTouchStart (e) {
      this.$emit('change', e.touches[0].target.innerText)

      this.touchStatus = true
    },
    handleTouchEnd () {
      this.touchStatus = false
    },
    // 滑动到某个字母, 切换城市列表
    handleTouchMove (e) {
      // 优化2:函数节流
      if (this.touchStatus) {
        // 阻止默认事件, 比如下拉刷新
        // e.preventDefault()
        if (this.timer) clearTimeout(this.timer)
        // 使用箭头函数不用备份 this
        // const _this = this
        this.timer = setTimeout(() => {
          // elementFromPoint 获取指定坐标位置最顶层的元素, 固定 x 坐标为字母那一列
          let letter = ''
          // console.log(this.startY, this.endY)
          if (e.touches[0].clientY < this.endY && e.touches[0].clientY > this.startY) {
            console.log(1)

            letter = document.elementFromPoint(this.startX, e.touches[0].clientY).innerText
          }

          if (letter !== '') {
            this.$emit('change', letter)
          }
        }, 16)
      }

      // 另一种做法是, 计算手指到顶部的距离, 通过距离判断手指的位置
      // const startY = this.$refs['A'][0].offsetTop
      // const touchY = e.touches[0].clientY - 79 // 顶部 header 高度 79
      // const index = Math.floor((touchY - startY) / 20) // 字母高度 20, 计算第几个字母
      // if (index >= 0 && index <= this.letters.length) {
      //   this.$emit('change', this.letters[index])
      // }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    display flex
    flex-direction column
    justify-content  center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color $bgColor
</style>
