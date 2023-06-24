<template>
    <headerInteriorComponent className="transparent ion-no-border">
        <GoogleMap :item="information" />

        <div class="container">
            {{ information }}
        </div>
    </headerInteriorComponent>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useApiStore } from '../../store/index';
import { computed } from 'vue';

import { isPlatform } from '@ionic/vue';
import GoogleMap from '@/components/Body/GoogleMap.vue';

const route = useRoute();
const store = useApiStore();
const { info }: any = storeToRefs(store);

const information = computed(() => {
    if (!info.value.error) {
        if (info.value.result) {
            const result = info.value.result.data.find((item: any) => {
                return item.linid === route.params.id;
            });

            return result;
        } else {
            return [];
        }
    } else {
        return {
            status: 'error',
            message: 'Occurred an error in the API'
        }
    }
});



</script>

<style scoped>

</style>