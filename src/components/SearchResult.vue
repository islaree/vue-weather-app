<script setup lang="ts">
import { WeatherResponse } from "../types/weather";

defineProps<{
  data: WeatherResponse | null;
}>();

const getIconUrl = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}.png`;
};
</script>

<template>
  <div v-if="data">
    <div>{{ data?.name }}の天気</div>
    <div>緯度, 軽度：{{ data?.coord.lat }}, {{ data?.coord.lon }}</div>
    <div v-for="(weather, index) in data?.weather" :key="index">
      <img :src="getIconUrl(weather.icon)" :alt="weather.description" />
      <div>main: {{ weather.main }}</div>
      <div>description: {{ weather.description }}</div>
    </div>
  </div>
  <div v-else>
    <p>データが見つかりませんでした。</p>
  </div>
</template>
