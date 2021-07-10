<!--
 * @ModeRule: 模块作用
 * @Author: 何维想
 * @Date: 2021-07-06 23:43:58
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-11 00:52:43
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
    const { Rem } = this;
    window.addEventListener("load", Rem);
    window.addEventListener("resize", Rem);
  },
  mounted() {
    const { Rem } = this;
    Rem();
  },
  methods: {
    Rem() {
      // 表示1920的设计图,使用100PX的默认值
      let whdef = 16 / 1920;
      // 当前窗口的宽度
      let bodyWidth = document.body.clientWidth;
      // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      let rem = bodyWidth * whdef;
      document.getElementsByTagName("html")[0].style.fontSize = rem + "px";
    },
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
  /* margin-top: 60px; */
}
</style>
