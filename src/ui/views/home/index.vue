<template>
  <div>
    <div class="p-5 bc-home">
      <div class="bc-home__header">
        <div>
          <h3>Youtube</h3>
          <span>Mostre sua vida</span>
        </div>

        <div class="d-flex gap-2 align-items-center">
          <InputText/>
          <Button label="Buscar"/>
        </div>

        <div>
          <span>Histórico</span>
        </div>
    </div>

    <div class="bc-home__main">
      <Card class="mt-5 bc-home__main__main-card">
        <template #header>
          <p class="p-3">
            O TOP 5 mais assistido
          </p>
        </template>

        <template #content>
          <div>
            <img v-if="getVideosList.length > 0" :src="getVideosList[0].thumbnails.maxres.url" alt="" srcset="">
            <p v-if="getVideosList.length > 0" >{{ getVideosList[0].title }}</p>
          </div>
          <div class="d-flex flex-column gap-4">
            <div class="d-flex gap-2" v-for="(video, index) in getVideosList.filter((value, indexFilter) => indexFilter > 0)" :key="index">
              <img :src="video.thumbnails.medium.url" alt="" srcset="">
              <p>{{ video.title }}</p>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="bc-home__secondary">
      <Card class="mt-5 ">
        <template #header>
          <p class="p-3">
            Top vídeos de tecnologia
          </p>
        </template>

        <template #content>
          <div class="d-flex gap-4 flex-wrap">
            <div class="bc-home__secondary__card" v-for="(video, index) in getTecnologyPageVideos" :key="index">
              <img :src="video.thumbnails.medium.url" alt="" srcset="">
              <div class="bc-home__secondary__card__description">
                <p>{{ video.channelTitle }}</p>
                <p>{{ video.title }}</p>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@providers/store';
import { AnalyticsActionTypes } from '@providers/store/analytics';
import { computed, onMounted } from 'vue';

const store = useStore()
const getVideosList = computed(() => store.getters.getHomePageVideos)
const getTecnologyPageVideos = computed(() => store.getters.getTecnologyPageVideos)

onMounted(async () => {
  await Promise.all([
    store.dispatch(AnalyticsActionTypes.GET_HOME_PAGE_VIDEOS), 
    store.dispatch(AnalyticsActionTypes.GET_TECNOLOGY_PAGE_VIDEOS)
  ])
})


</script>

<style scoped lang="scss">

.bc-home {

  &__header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 16px;

  }
  
  &__main {
    &__main-card {
      :deep(.p-card-content) {
        display: flex;
        gap: 16px;
      }
    }
  }

  &__secondary {
    &__card {
      flex: 1 0 25%;
      display: flex;
      gap: 8px;
      
      &__description {
        p:first-child {
          font-weight: bold;
        }
      }
    }
  }

}

</style>
