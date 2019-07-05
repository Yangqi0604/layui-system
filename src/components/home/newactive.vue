<template>
  <div class="layui-side layui-bg-black">
    <div class="site-demo-nav layui-side-scroll">
      <ul class="layui-nav layui-nav-tree">
        <!-- 侧边导航: <ul class="layui-nav layui-nav-tree layui-nav-side"> -->
        <li class="layui-nav-item">
          <a>开发工具</a>
          <dl class="layui-nav-child">
            <dd>
              <a>调试预览</a>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a>布局</a>
          <dl class="layui-nav-child">
            <dd>
              <a @click="$router.push('/Grid')">栅格</a>
            </dd>
            <dd>
              <a>后台布局</a>
            </dd>
            <!-- <router-view></router-view> -->
          </dl>
          <!-- <router-view></router-view> -->
        </li>

        <li class="layui-nav-item">
          <a>基本元素</a>
          <dl class="layui-nav-child">
            <dd>
              <a>按钮</a>
            </dd>
            <dd>
              <a>表单</a>
            </dd>
            <dd>
              <a>导航/面包屑</a>
            </dd>
            <dd>
              <a>选项卡</a>
            </dd>
            <dd>
              <a>进度条</a>
            </dd>
            <dd>
              <a>面板</a>
            </dd>
            <dd>
              <a>徽章</a>
            </dd>
            <dd>
              <a>时间线</a>
            </dd>
            <dd>
              <a>静态表格</a>
            </dd>
            <dd>
              <a>动画</a>
            </dd>
            <dd>
              <a>辅助元素</a>
            </dd>
          </dl>
        </li>
        <li class="layui-nav-item">
          <a>组件示例</a>
          <dl class="layui-nav-child">
            <dd>
              <a @click="$router.push('/phonelogin')">登陆注册/手机验证码</a>
            </dd>
            <dd>
              <a>弹出层</a>
            </dd>
            <dd>
              <a>日期与时间选择</a>
            </dd>
            <dd>
              <a>即时通讯</a>
            </dd>
            <dd>
              <a>数据表格</a>
            </dd>
            <dd>
              <a>分页</a>
            </dd>
            <dd>
              <a>文件上传</a>
            </dd>
            <dd>
              <a>穿梭框</a>
            </dd>
            <dd>
              <a>树形组件</a>
            </dd>
            <dd>
              <a>颜色选择器</a>
            </dd>
            <dd>
              <a>滑块</a>
            </dd>
            <dd>
              <a>轮播</a>
            </dd>
            <dd>
              <a>模板引擎</a>
            </dd>
            <dd>
              <a>流加载</a>
            </dd>
            <dd>
              <a>工具集</a>
            </dd>
            <dd>
              <a>代码修饰器</a>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layui-nav-tree .layui-nav-item a {
  position: relative;
  height: 45px;
  line-height: 45px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
}
.layui-nav-tree {
  height: 100%;
  width: 200px;
  /* padding-top: 60px; */
}
.layui-nav {
  position: relative;
  /* padding: 0 20px; */
  background-color: #393d49;
  color: #fff;
  border-radius: 0;
  font-size: 0;
  box-sizing: border-box;
}
.layui-layout-admin .layui-side {
  top: 60px;
  width: 200px;
  overflow-x: hidden;
}
.layui-side-scroll {
  position: relative;
  width: 220px;
  height: 100%;
  overflow-x: hidden;
}
</style>
