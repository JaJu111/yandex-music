<template>
    <div>
        <div class="main-box">
            <div class="aside-left">
                <div class="aside-left__box">
                    <h1 class="logo">i-MUSIC</h1>
                    <h1 class="logo-small">M</h1>

                    <ul>
                        <router-link to="/search" :class="{'active': $route.path === '/search'}">
                            <i class="fa-solid fa-magnifying-glass"></i> <li>Поиск</li>
                        </router-link>

                        <router-link to="/" :class="{'active': $route.path === '/'}">
                            <i class="fa-solid fa-music"></i> <li>Главная</li>
                        </router-link>

                        <router-link to="/podcasts" :class="{'active': $route.path === '/podcasts'}">
                            <i class="fa-solid fa-microphone"></i> <li>Подкасты и книги</li>
                        </router-link>

                        <router-link to="/collection" :class="{'active': $route.path === '/collection'}">
                            <i class="fa-regular fa-heart"></i> <li>Коллекция</li>
                        </router-link>
                    </ul>
                </div>

                <div class="aside-left__bottom">
                    <h1>Bottom</h1>
                </div>
            </div>

            <div class="right-box">
                <div class="aside-right">
                    <router-view />
                </div>

                <div class="aside-right__bottom"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {}

</script>

<style lang="sass" scoped>

.main-box
    display: flex
    width: 100%
    height: 100vh
    background-color: #000
    padding: 12px 12px 12px 24px

.aside-left
    width: 250px
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between

    &__box
        .logo
            font-size: 24px
            font-weight: bold
            color: yellow
            margin: 18px 0 48px

        .logo-small
            display: none

        a
            display: flex
            align-items: center
            gap: 18px
            color: #797979
            font-size: 18px
            font-weight: bold
            margin-bottom: 24px
            transition: all .2s

        a:hover
            color: #ebebeb

        a.active
            color: #ebebeb

.right-box
    width: calc(100% - 250px)
    display: flex
    flex-direction: column

.aside-right
    width: 100%
    height: 100%
    background-color: #080808
    border-radius: 16px
    border: 1px solid #1c1c1c

    &__bottom
        width: 100%
        height: 100px
        margin-top: 14px
        background-color: #080808
        border-radius: 16px
        border: 1px solid #1c1c1c


@media (max-width: 768px)
    .main-box
        padding: 12px 12px 12px 0

    .right-box
        width: calc(100% - 68px)

    .aside-left
        width: 68px
        align-items: center

        &__box
            .logo
                display: none

            .logo-small
                display: block
                font-size: 24px
                font-weight: bold
                color: yellow
                margin: 18px 0 48px

            li
                display: none

</style>