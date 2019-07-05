<template>
  <div class="site-demo-title">
    <div class="layui-tab layui-tab-brief" lay-filter="demo">
      <ul class="layui-tab-title">
        <li class="layui-this" lay-id="11">预览</li>
        <li lay-id="22">查看源代码</li>
        <li lay-id="33">帮助</li>
      </ul>
      <div class="layui-tab-content">
        <div class="layui-tab-item layui-show">内容1</div>
        <div class="layui-tab-item">内容2</div>
        <div class="layui-tab-item">内容3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    layui.use("element", function() {
      var element = layui.element;

      //一些事件监听
      element.on("tab(demo)", function(data) {
        console.log(data);
      });
    });
  }
};
</script>

<style scoped>
.site-demo-title {
  background: #ffff;
  position: fixed;
  left: 200px;
  right: 0;
  z-index: 999;
}
.layui-tab-brief > .layui-tab-title .layui-this {
  color: #009688;
}
.layui-tab-title li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  font-size: 14px;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  position: relative;
  line-height: 40px;
  min-width: 65px;
  padding: 0 15px;
  text-align: center;
  cursor: pointer;
}
.layui-nav {
  position: relative;
  /* padding: 0 20px; */
  background-color: #393d49;
  color: #fff;
  /* border-radius: 2px; */
  font-size: 0;
  box-sizing: border-box;
}
.layui-tab-content {
  padding: 0;
}
</style>
