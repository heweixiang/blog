<!--
 * @ModeRule: 头部导航栏
 * @Author: 何维想
 * @Date: 2021-07-07 12:46:26
 * @EditAuthor: heweixiang1110@163.com
 * @LastEditTime: 2021-07-11 21:41:59
-->
<template>
  <div>
    <el-menu
      class="menuBox"
      mode="horizontal"
      :default-active="$route.path"
      router
      unique-opened
    >
      <!-- 头像和网名 -->
      <el-menu-item class="menuLeftBox">
        <img src="https://picsum.photos/id/169/300/300" alt="" />
        <span>nk1999</span>
      </el-menu-item>
      <!-- 菜单选项 -->
      <el-menu-item
        style="float: right"
        v-for="item in menus"
        :key="item.router"
        :index="item.router"
        ><span :class="item.icon"></span>{{ item.text }}</el-menu-item
      >
      <!-- 搜索框,由于使用float则搜索框放在此处 -->
      <el-menu-item class="menuInputBox">
        <el-input class="menuInput" v-model="search"></el-input
        ><i class="el-icon-search"></i>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import api from "../api/index";
export default {
  setup() {
    // 关于导航栏选项内容
    const menus = [
      {
        router: "/about",
        icon: "el-icon-s-custom",
        text: "关于",
      },
      {
        router: "/dynamic",
        icon: "el-icon-timer",
        text: "动态",
      },
      {
        router: "/classification",
        icon: "el-icon-menu",
        text: "分类",
      },
      {
        router: "/index",
        icon: "el-icon-s-home",
        text: "主页",
      },
    ];

    // 搜索框
    const search = ref("");
    watch(
      () => search.value,
      api.debounce((newValue, oldValue) => {
        // 防抖,自动搜索
        console.log(newValue);
      }, 500)
    );
    return { menus, search };
  },
};
</script>

<style scoped lang="less" >
// 搜索框
.menuInputBox {
  float: right;
  margin-right: 5rem;
  width: 25rem;
}

// 鼠标经过 头像ID 输入框 不变
.menuBox .menuLeftBox.el-menu-item:hover,
.menuBox .menuInputBox.el-menu-item:hover {
  background: @theme-bgColor;
}

.menuInput {
  // margin-right: 15px;
  margin-right: 0.8rem;
}

// 选中主题
.is-active.el-menu-item,
.is-active.el-menu-item > i {
  color: @theme-font-color-active;
}

// 鼠标经过  除了头像 搜索框 以及icon
.el-menu-item:not(.menuInputBox):not(.menuLeftBox).el-icon-s-custom:not(span)
  :hover {
  color: @theme-font-hover;
  background-color: @theme-bgColor-hover;
}

// 未选中主题
.el-menu-item .el-menu-item i {
  color: @theme-font-color;
}

// 定位ID名
.menuLeftBox > span {
  display: inline-block;
  margin-left: 1.5rem;
  font-size: 1.6rem;
}

// 导航栏盒子
.menuBox {
  background-color: @theme-bgColor;
}

// 配置头像
.menuLeftBox > img {
  width: 3.3rem;
  border-radius: 50%;
}
// 定位左右
.menuBox:last-child {
  padding-right: 10rem;
}
.menuBox:first-child {
  border: 0px;
}
</style>