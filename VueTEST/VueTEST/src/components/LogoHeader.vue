<template>
  <div class="logo-header">
    <!-- 修改资源路径 -->
    <img src="/logo.png" alt="Logo" class="logo" />
    <span class="logo-text">JEorc</span>
  </div>
</template>

<script setup>
// 组件逻辑部分，当前为空
</script>

<style scoped>
.logo-header {
  display: flex;
  align-items: center;
  padding: 20px;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
}
</style>