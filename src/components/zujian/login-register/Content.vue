<template>
  <div class="layui-tab-content">
    <msgLR />
    <psdLR />
  </div>
</template>

<script>
import msgLR from "./msgLR";
import psdLR from "./psdLR";
export default {
  components: {
    msgLR,
    psdLR
  }
};
</script>

<style scoped>
</style>
