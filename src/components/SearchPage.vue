<template>
    <div>
        <div class="search-box">
            <h1>Поиск</h1>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SearchPage extends Vue {}

</script>

<style lang="sass" scoped>

.search-box
    padding: 8px 12px

</style>