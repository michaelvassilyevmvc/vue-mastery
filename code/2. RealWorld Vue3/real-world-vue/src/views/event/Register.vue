<script setup>
import {ref, onMounted} from 'vue'
import EventService from "@/services/EventService.js";
import {useRouter} from "vue-router";

const props = defineProps(["event"])
const router = useRouter();

const register = () => {
  router.push({name: 'event-details'})
}

</script>

<template>
  <p>Register for event here</p>
  <button @click="register">Register Me!</button>
</template>
<style lang="scss" scoped>

</style>
