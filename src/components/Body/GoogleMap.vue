<template>
    <GMapMap
        :center="{ lat: item.x, lng: item.y }"
        :zoom="7"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { isPlatform } from '@ionic/vue';
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    setup () {
        const webAPI = import.meta.env.VITE_WEB_MAP_API;
        const androidAPI = import.meta.env.VITE_ANDROID_MAP_API;
        const api = isPlatform('hybrid') ? androidAPI : webAPI;

        return {}
    }
});
</script>

<style scoped>

</style>