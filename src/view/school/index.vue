<template>
  <div>
    <div ref="hello">
      <h1>hello World{{name}}</h1>
    </div>
    <el-button type="danger"
               @click="get">クリック</el-button>
    <el-button type="mark"
               @click="reset()">リセット</el-button>
  </div>
</template>

<script>
import pauseTime from '../../utils/pause'
export default {
  components: {

  },
  data () {
    return {
      name: 'welcome'
    }
  },
  created () {
    console.log(111)
    console.log(this.$refs.hello)
    this.$nextTick(() => {
      console.log(222)
      console.log(this.$refs.hello.innerHTML)
    })
  },
  mounted () {
    console.log(333)
    console.log(this.$refs.hello.innerHTML)
    this.$nextTick(() => {
      console.log(444)
      console.log(this.$refs.hello.innerHTML)
    })
    // alert('mounted function will be executed when dom was updated')
  },
  methods: {
    get () {
      // 1 update name property
      this.name = 'こんにちは'
      // 2 print dom, but dom is not uodated
      console.log(this.$refs.hello.innerHTML)
      this.$nextTick(() => {
        console.log(this.$refs.hello.innerHTML)
        pauseTime(10000)
      })
      // 3 the result of print is a promise
      // 4 the callback is microtask, when all the mircotask is executed ,render will be started
      // 5 we can find 2 async method. but they are mircrotask.
      console.log(this.$nextTick().then(() => {
        console.log(this.$refs.hello.innerHTML)
        pauseTime(10000)
      }))

      // 6 the macrotask will be executed when microtask is executed and rendered
      setTimeout(() => {
        this.name = '取り焼き'
        pauseTime(5000)
      }, 5000)
    },
    reset () {
      this.name = 'welcome'
    }
  }
}
</script>

<style>
</style>
