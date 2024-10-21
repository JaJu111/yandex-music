<template>
    <div>
        <div class="home-page">
            <h1>Главная</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {}

</script>

<style lang="sass" scoped>

.home-page
    padding: 8px 12px

</style>