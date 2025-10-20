<script setup>
import {ref, onMounted} from 'vue'
import EventService from "@/services/EventService.js";

const props = defineProps(["event"])

</script>

<template>
  <div v-if="event">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<style lang="scss" scoped>

</style>
