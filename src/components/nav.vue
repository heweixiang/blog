<!--
 * @ModeRule: 头部导航栏
 * @Author: 何维想
 * @Date: 2021-07-07 12:46:26
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-07 13:01:59
-->
<template>
  <div>
    <el-menu mode="horizontal" default-active="" @select="a">
      <el-submenu
        v-for="(submenus, index) in menus"
        :index="index + 1"
        :key="submenus.key"
      >
        <template #title>{{ submenus.title }}</template>
        <el-menu-item
          v-for="(item, subIndex) in submenus.menus"
          :index="index + 1 + '-' + (subIndex + 1)"
          :key="item.key"
        >
          {{ item.title }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>