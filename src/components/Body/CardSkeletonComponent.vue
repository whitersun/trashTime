<template>
    <ion-card class="ion-no-margin ion-no-padding">
        <ion-card-header>
            <ion-card-title>
                <ion-skeleton-text :animated="true" style="width: 80px; border-radius: 12px;"></ion-skeleton-text>
            </ion-card-title>
            <ion-card-subtitle>
                <ion-skeleton-text :animated="true" style="width: 200px; border-radius: 12px;"></ion-skeleton-text>
            </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-skeleton-text :animated="true" style="width: 100%; height: 90px; border-radius: 12px;"></ion-skeleton-text>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSkeletonText } from '@ionic/vue';

</script>

<style scoped>

</style>