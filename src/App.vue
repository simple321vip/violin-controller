<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      show: true,
      url: 'https://www.github.com',
      number: 1,
      books: [
        {name:'vue/js action'},
        {name:'javascript la'}
      ]
    }
  },
  computed: {
    atest: function() {
      console.log("do atest");
      return this.number - 1
    }
  },
  methods: {
    handleClose: function () {
      this.show = false
    },
    calcute: function () {
      console.log("do calcute");
      return this.number - 1
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
