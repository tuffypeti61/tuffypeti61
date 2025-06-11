<template>
  <div class="card-list">
    <div v-for="card in cards" :key="card.id" class="card">
      <a :href="card.link" target="_blank">
        <img :src="card.image" alt="card" class="card-image" />
        <p>{{ card.title }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
const cards = ref([
  {
    id: 1,
    title: '示例卡片 1',
    // 修改资源路径
    image: './images/1.jpg',
    link: 'https://example.com',
  },
  {
    id: 2,
    title: '示例卡片 2',
    // 修改资源路径
    image: './images/2.jpg',
    link: 'https://example.org',
  },
]);
</script>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.card {
  margin: 20px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.1);
}

.card-image {
  width: 100%;
  height: auto;
}
</style>