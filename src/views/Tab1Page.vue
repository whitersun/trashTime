<template>
  <headerComponent header-title="垃圾時間列表">
    <div class="container-fluid">
      <ion-grid :fixed="true">
        <ion-row>
          <template v-if="limitInfo.length > 0">
            <ion-col size="12" size-md="6" size-lg="4"
              v-for="(item, index) in limitInfo" :key="index">
              <cardComponent
                :button="true"
                :card-title="`車牌: ${item.car}`"
                :card-subtitle="`預估到達時間: ${convertDatetime(item.time)}`"
                :card-content="`地點: ${item.location}`"
                @click="GoDetail(item.linid)"
                class-name="ion-no-margin ion-no-padding"
              />
            </ion-col>
          </template>

          <template v-else-if="information.status === 'error'">
            <ion-col size="12" size-md="6" size-lg="4">
              API 事故異常，請稍後再試
            </ion-col>
          </template>

          <template v-else>
            <ion-col v-for="index in 5" :key="index" size="12" size-md="6" size-lg="4" size-xl="3" offset-md="3" offset-lg="2">
              <cardSkeletonComponent />
            </ion-col>
          </template>

          <ion-infinite-scroll
            :disabled="isDisabled"
            class="ion-padding-top"
            @ionInfinite="ionInfinite($event)">
            <ion-infinite-scroll-content
              loading-text="Please wait..."
              loading-spinner="bubbles"
              color="--color: #161616"
            ></ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-row>
      </ion-grid>
    </div>
</headerComponent>
</template>

<script setup lang="ts">
import { IonGrid, IonRow, IonCol, InfiniteScrollCustomEvent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/vue';
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue';
import cardComponent from '@/components/Body/CardComponent.vue';
import cardSkeletonComponent from '@/components/Body/CardSkeletonComponent.vue';

import { storeToRefs } from 'pinia';
import { useApiStore } from '../store/index';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useApiStore();

const limitInfo: any = reactive([]);
const { info } = storeToRefs(store);


function GoDetail (id: string) {
  router.push({ name: 'garbageDetailPage', params: { id: id } });
}


const information: any = computed(() => {
  if (!info.value.error) {
    if (info.value.result) {
      return info.value.result;
    } else {
      return [];
    }
  } else {
    return {
      status: 'error',
      message: 'Occurred an error in the API'
    };
  }
});


const isDisabled = ref(false);
function generateItems() {
  const max = limitInfo.length + 20;
  const min = max - 20;
  console.log('min: ', min);
  console.log('max: ', max);
  
  for (let i = min; i < max; i++) {
    limitInfo.push(information.value.data[i]);
  }
}

function ionInfinite (ev: InfiniteScrollCustomEvent) {
  setTimeout(() => {
    generateItems();
    ev.target.complete();

    if (limitInfo.length === information.value.data.length) {
      ev.target.disabled = true;
    }
  }, 500);
}

const stopWatch = watchEffect(() => {
  // do something here
  return;
})

watchEffect(async () => {
  if (!info.value.error) {
    if (information.value.length === 0) {
      await store.getApi();
    } else {
      // Stop the watch effect
      stopWatch();
    }
  } else {
    // Stop the watch effect
    stopWatch();
    return;
  }
});

watch(information, (newValue, oldValue) => {
  console.log('oldValue: ', oldValue);
  console.log('newValue: ', newValue);
  
  if (newValue?.status === 'error') {
    // Stop the watch effect
    stopWatch();
    return;
  } else {
    if (newValue && !newValue.hasOwnProperty('status')) {
      generateItems();
    }
  }
});

const convertDatetime = (datetime: string) => {
  const inputDate = datetime;
  const date = new Date(inputDate);
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const dayOfWeek = days[date.getDay()];
  const { year, month, day } = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatYear = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
  const formatDate = `${dayOfWeek}`
  const formatTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const formatDateAndTime = `${formatYear} ${formatDate} ${formatTime}`;

  return formatDateAndTime;
};

onMounted(() => {
  // console.log(information.value?.data);
  // setTimeout(() => {
  //   generateItems();
  // }, 1000)

})
</script>