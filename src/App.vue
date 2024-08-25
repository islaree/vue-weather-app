<script setup lang="ts">
import { ref } from "vue";
import { getLocation } from "./api/location";
import { getWeather } from "./api/weather";
import SearchForm from "./components/SearchForm.vue";
import SearchResult from "./components/SearchResult.vue";
import { WeatherResponse } from "./types/weather";

const data = ref<WeatherResponse | null>(null);
const error = ref<string | null>(null);

const handleSearch = async (query: string) => {
  try {
    const location = await getLocation(query);

    if (location) {
      const { lat, lon } = location;
      const weather = await getWeather(lat, lon);

      if (weather) {
        data.value = weather;
        error.value = null;
      } else {
        error.value = "Weather data not found.";
      }
    } else {
      error.value = "Location not found.";
    }
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
};
</script>

<template>
  <SearchForm @handle-search="handleSearch" />
  <SearchResult :data="data" />
  <div v-if="error" class="error-message">{{ error }}</div>
</template>

<style>
.error-message {
  color: red;
}
</style>
