<template>
  <div class="weather-widget">
    <p>今日天气：{{ weatherInfo }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const weatherInfo = ref('加载中...');

onMounted(async () => {
  try {
    // 修改请求地址
    const response = await fetch('/api/s/xiangfang/71471.htm');
    const html = await response.text();
    // 此处需要根据页面结构解析天气信息，示例仅占位
    weatherInfo.value = '小雨，西北风 2 级，优';
  } catch (error) {
    weatherInfo.value = '获取天气失败';
  }
});
</script>

<style scoped>
.weather-widget {
  padding: 20px;
  text-align: right;
}
</style>