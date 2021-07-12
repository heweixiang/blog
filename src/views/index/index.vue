<!--
 * @ModeRule: 模块作用
 * @Author: 何维想
 * @Date: 2021-07-10 01:15:22
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-11 15:59:16
-->
<template>
  <div>
    <Nav></Nav>
    <div>
      <img src="https://picsum.photos/id/171/1920/250" alt="" />
    </div>
    <div class="indexBox">
      <span class="indexLeftBox">0 </span>
      <span class="indexRightBox">3</span>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/nav.vue";
export default {
  setup() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>

<style lang="less" scoped>
.indexBox {
  text-align: left;
}
.indexLeftBox {
  width: 57rem;
  display: inline-block;
  margin-left: 23rem;
  background: red;
}
.indexRightBox {
  width: 25rem;
  display: inline-block;
  background: yellow;
}
</style>