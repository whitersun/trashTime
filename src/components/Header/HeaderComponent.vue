<template>
    <ion-page>
        <ion-header :class="className" style="--background: transparent">
            <ion-toolbar>
                <ion-title>{{ headerTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
            <ion-toolbar>
                <ion-title size="large">{{ headerTitle }}</ion-title>
            </ion-toolbar>
            </ion-header>

            <slot />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

defineProps({
    headerTitle: String,
    className: String
})
</script>

<style lang="scss" scoped>
    .ios.ion-page {
        ion-header {
            ion-toolbar {
                --min-height: 52px;
            }
        }
    }
</style>