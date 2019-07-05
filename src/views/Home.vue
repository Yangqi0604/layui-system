<template>
  <div class="home">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">杨奇的插件库</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <navBar />
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href>退出登录</a>
          </li>
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <newactive />
        </div>
      </div>

      <div class="layui-body">
        <!-- 内容主体区域 -->
        <div>
          <router-view></router-view>
        </div>
      </div>

      <div class="layui-footer">
        <!-- 底部固定区域 -->
        杨奇的LAYUI后台
      </div>
    </div>
    <!-- <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <navBar />
      </div>
      
    </div>

    <router-view></router-view>-->
  </div>
</template>

<script>
import navBar from "../components/home/navBar";
import newactive from "../components/home/newactive";
export default {
  name: "home",
  components: {
    navBar,
    newactive
  }
};
</script>
