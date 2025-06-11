<template>
  <div class="search-bar">
    <p>{{ currentDate }}</p>
    <div class="search-engine-buttons">
      <button @click="currentEngine = 'baidu'" :class="{ active: currentEngine === 'baidu' }">百度</button>
      <button @click="currentEngine = 'bing'" :class="{ active: currentEngine === 'bing' }">必应</button>
      <button @click="currentEngine = 'google'" :class="{ active: currentEngine === 'google' }">Google</button>
    </div>
    <input
      v-model="searchQuery"
      @keyup.enter="performSearch"
      placeholder="请输入搜索内容"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const currentDate = ref(new Date().toLocaleString());
const currentEngine = ref('baidu');
const searchQuery = ref('');

onMounted(() => {
  setInterval(() => {
    currentDate.value = new Date().toLocaleString();
  }, 1000);
});

const performSearch = () => {
  let url = '';
  switch (currentEngine.value) {
    case 'baidu':
      url = `https://www.baidu.com/s?wd=${encodeURIComponent(searchQuery.value)}`;
      break;
    case 'bing':
      url = `https://www.bing.com/search?q=${encodeURIComponent(searchQuery.value)}`;
      break;
    case 'google':
      url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery.value)}`;
      break;
  }
  window.open(url, '_blank');
};
</script>

<style scoped>
.search-bar {
  text-align: center;
  margin-top: 50px;
}

.search-engine-buttons {
  margin-bottom: 10px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}

button.active {
  background-color: #42b983;
  color: white;
}

input {
  padding: 8px;
  width: 300px;
}
</style>