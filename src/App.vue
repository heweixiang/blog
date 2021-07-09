<!--
 * @ModeRule: 模块作用
 * @Author: 何维想
 * @Date: 2021-07-06 23:43:58
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-07 12:41:49
-->
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup() {},
  created() {
    // this.$api.index.test();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
