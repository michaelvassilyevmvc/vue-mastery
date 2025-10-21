<script setup>
import { ref } from 'vue'
import NotificationToast from '@/components/NotificationToast.vue'

const message = ref('Image uploaded successfully')

const clearNotifications = () => {
  message.value = ''
}
</script>

<template>
  <NotificationToast status="success" :message="message" @clear-notification="clearNotifications" />
</template>

<style scoped></style>
