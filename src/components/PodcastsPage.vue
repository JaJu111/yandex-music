<template>
    <div>
        <div class="podcasts-page">
            <h1>Подкасты и книги</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PodcastsPage extends Vue {}

</script>

<style lang="sass" scoped>

.podcasts-page
    padding: 8px 12px

</style>