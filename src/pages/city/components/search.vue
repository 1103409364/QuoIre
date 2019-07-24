<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <!-- 有关键词的时候显示 -->
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有这个城市
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timmer: null
    }
  },
  computed: {
    // 逻辑相关的放到 script 中,保持模板简洁
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timmer) {
        clearTimeout(this.timmer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      // 函数节流
      this.timmer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            // 去除空格
            this.keyword = this.keyword.trim()
            // 检查关键词是否包含拼音或者地名的汉字
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
      this.keyword = ''
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    const options = {
      mouseWheel: true,
      click: true,
      taps: true
    }
    this.scroll = new Bscroll(this.$refs.search, options)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      border-radius .06rem
      color #666
      text-align center
      font-family Arial, Helvetica, sans-serif
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .search-item
      line-height .76rem
      padding-left .2rem
      background-color #ffffff
</style>
