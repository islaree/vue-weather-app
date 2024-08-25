<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["handle-search"]);

const cityName = ref("");

const handleSubmit = (e: Event) => {
  e.preventDefault();
  emit("handle-search", cityName.value);
};
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="cityName" placeholder="都市名を入力してください" />
    <button>search</button>
  </form>
</template>
