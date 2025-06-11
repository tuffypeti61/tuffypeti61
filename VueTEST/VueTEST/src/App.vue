<script setup>
import LogoHeader from './components/LogoHeader.vue';
import WeatherWidget from './components/WeatherWidget.vue';
import SearchBar from './components/SearchBar.vue';
import CardList from './components/CardList.vue';
</script>

<template>
  <div class="app">
    <div class="header">
      <LogoHeader />
      <WeatherWidget />
    </div>
    <SearchBar />
    <CardList />
  </div>
</template>