<script setup>
import EventCard from "@/components/EventCard.vue";
import {ref, onMounted, computed, watchEffect} from "vue";
import EventService from "@/services/EventService.js";
import {useRouter} from "vue-router";

const router = useRouter();
const props = defineProps(['page'])

const events = ref(null)
const totalEvent = ref(0);

const page = computed(() => props.page)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 2)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    events.value = null;
    EventService.getEvents(2, page.value)
      .then(response => {
        events.value = response.data;
        totalEvent.value = response.headers['x-total-count']
      })
      .catch(error => {
        router.push({name: 'NetworkError'})
      })
  })
})

</script>

<template>
  <h1>Events For Good</h1>

  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>

    <div class="pagination">
      <router-link :to="{ name:'event-list', query:{page:page - 1 }}"
                   v-if="page != 1"
                   rel="prev">
        &#60; Prev
      </router-link>
      <router-link :to="{ name:'event-list', query:{page:page + 1 }}"
                   v-if="hasNextPage"
                   rel="next">
        Next &#62;
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3d50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
