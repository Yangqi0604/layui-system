<template>
  <div>
    <ul class="layui-nav" lay-filter>
      <li class="layui-nav-item layui-this">
        <router-link tag="a" to="/New">最新活动</router-link>
      </li>

      <li class="layui-nav-item">
        <router-link tag="a" to="/product">产品</router-link>
      </li>
      <li class="layui-nav-item">
        <router-link tag="a" to="/Bigchart">大数据</router-link>
      </li>
      <li class="layui-nav-item">
        <a href="javascript:;">解决方案</a>
        <dl class="layui-nav-child">
          <!-- 二级菜单 -->
          <dd>
            <a href>移动模块</a>
          </dd>
          <dd>
            <a href>后台模版</a>
          </dd>
          <dd>
            <a href>电商平台</a>
          </dd>
        </dl>
      </li>
      <li class="layui-nav-item">
        <a href>社区</a>
      </li>
    </ul>
    <!-- <router-view></router-view> -->
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use("element", function() {
      // var element = layui.element;
      // //…
    });
  },
  methods: {}
};
</script>

<style scoped>
.layui-nav {
  position: relative;
  padding: 0 20px;
  background-color: #393d49;
  color: #fff;
  border-radius: 0;
  font-size: 0;
  box-sizing: border-box;
}
.logo img {
  width: 82px;
  height: 31px;
}

img {
  border: none;
}
</style>