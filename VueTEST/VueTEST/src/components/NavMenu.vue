<template>
  <nav class="nav-menu">
    <!-- 添加实际导航内容 -->
    <router-link to="/">Home</router-link>
  </nav>
</template>

<style scoped>
.nav-menu {
  background: var(--color-background-soft);
  padding: 1rem;
}
</style>

<script setup>
// 组件逻辑部分，当前为空
</script>

<style scoped>
.nav-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #42b983;
  font-size: 18px;
}

a:hover {
  text-decoration: underline;
}
</style>