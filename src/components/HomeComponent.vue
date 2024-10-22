<template>
    <div>
        <div class="bg-box">
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
                        <div class="user-box-bg">
                            <div class="user-box">
                                <img src="../assets/alan.jpg">
                            </div>
                        </div>

                        <h1>Jaloliddin</h1>
                    </div>
                </div>

                <div class="right-box">
                    <div class="aside-right">
                        <router-view />
                    </div>

                    <div class="aside-right__bottom"></div>
                </div>
            </div>

            <div class="main-bottom">
                <!-- <audio controls>
                    <source src="../assets/bande-hain-hum-uske.mp3" type="audio/mp3">
                </audio> -->
            </div>

            <div class="main-bottom-bg">
                <!-- <audio controls>
                    <source src="../assets/bande-hain-hum-uske.mp3" type="audio/mp3">
                </audio> -->
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

.bg-box
    position: relative
    width: 100%
    height: 100vh

.main-bottom
    display: none
    position: fixed
    width: 100%
    height: 120px
    bottom: 0
    left: 0
    backdrop-filter: blur(20px)
    border-top-left-radius: 12px
    border-top-right-radius: 12px

.main-bottom-bg
    display: none
    position: fixed
    width: 100%
    height: 120px
    bottom: 0
    left: 0
    background-color: #1a1a1a
    opacity: 0.8
    border-top-left-radius: 12px
    border-top-right-radius: 12px

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
    padding: 18px 0

    &__box
        .logo
            font-size: 24px
            font-weight: bold
            color: yellow
            margin-bottom: 48px

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

.aside-left__bottom
    display: flex
    align-items: center

    h1
        color: #ebebeb
        margin-left: 16px
        font-size: 16px
        font-weight: 500

.user-box-bg
    display: flex
    justify-content: center
    align-items: center
    width: 50px
    height: 50px
    border-radius: 50%
    background-color: yellow

.user-box
    width: 48px
    height: 48px
    border-radius: 50%

    img
        border-radius: 50%


@media (max-width: 768px)
    .main-bottom
        display: block

    .main-bottom-bg
        display: block

    .main-box
        padding: 12px 12px 12px 0

    .right-box
        width: calc(100% - 68px)
        margin-left: 68px

    .aside-left
        position: fixed
        left: 0
        top: 0
        width: 68px
        align-items: center
        padding: 30px 0 152px 0

        &__box
            .logo
                display: none

            .logo-small
                display: block
                font-size: 24px
                font-weight: bold
                color: yellow
                margin-bottom: 48px

            li
                display: none

    .aside-right
        border: none
        background-color: #000

        &__bottom
            display: none

    .user-box-bg
        width: 42px
        height: 42px

    .user-box
        width: 40px
        height: 40px

    .aside-left__bottom
        h1
            display: none

</style>