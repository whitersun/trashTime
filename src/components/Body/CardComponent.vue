<template>
    <ion-card :class="className" :button="button ? true : false" router-direction="forward">
        <ion-card-header>
            <ion-card-title>{{ cardTitle }}</ion-card-title>
            <ion-card-subtitle>{{ cardSubtitle }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            {{ cardContent }}
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';

interface ComponentProps {
    button?: boolean | Record<string, any>;
}

defineProps({
    button: [Boolean, Object],
    href: [String, Object],
    className: [String, Object],
    cardTitle: [String, Object],
    cardSubtitle: [String, Object],
    cardContent: [String, Object],
})

</script>

<style lang="scss" scoped>

</style>