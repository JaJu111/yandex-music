<template>
    <div>
        <div class="home-page" :style="{ backgroundColor: currentColor }">
            <div class="play-box">
                <div @click="getPlaying">
                    <i v-if="!isPlaying" class="fa-solid fa-play"></i>

                    <i v-if="isPlaying" class="fa-solid fa-pause"></i>

                    <h1>Моя волна</h1>
                </div>
            </div>

            <div class="info-box">
                <div class="for-you-box">
                    <div class="for-you-box__left">
                        <div>
                            <img src="../assets/marshmello.jpg">
                        </div>
                        <div>
                            <img src="../assets/alan.jpg">
                        </div>
                    </div>
                    <div class="for-you-box__right">
                        <h1>Для вас</h1>
                        <span>Alan Walker, Marshmello</span>
                    </div>
                </div>

                <div class="i-like-box">
                    <h1>I like</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
    colors: string[] = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6', '#e0c409', '#19e3c8', '#df1ced', '#ed1c8b', '#ed1c46', '#ed1c1c', '#8de314', '#d9661a'];
    currentColor: string = '#080808';
    isPlaying: boolean = false;
    intervalId: number = NaN;

    changeColor(): void {
        let index = 0;

        this.intervalId = setInterval(() => {
            this.currentColor = this.colors[index];
            index = (index + 1) % this.colors.length;
        }, 2000);
    }

    getPlaying(): void {
        this.isPlaying = !this.isPlaying;

        if (this.isPlaying) {
            this.changeColor();
        } else {
            // this.currentColor = '#080808'; // return default color

            clearInterval(this.intervalId);
        }
    }
}

</script>

<style lang="sass" scoped>

.home-page
    display: flex
    flex-direction: column
    justify-content: space-between
    height: calc(100vh - 125px)
    // height: calc(100vh - 26px)
    padding: 12px
    border-radius: 16px
    transition: all .2s

.play-box
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 320px
    // background: red
    border-radius: 8px

    div
        display: flex
        align-items: center
        cursor: pointer

    i
        color: #fff
        font-size: 30px

    h1
        color: #fff
        margin-left: 12px
        font-size: 20px
        font-weight: bold

.for-you-box
    display: flex
    width: 300px
    height: 60px
    background-color: #252525
    border-radius: 32px
    padding: 6px 12px
    cursor: pointer
    transition: all .2s

    h1
        color: #fff

    &__left
        display: flex
        align-items: center
        margin-right: 12px

        div
            width: 40px
            height: 40px
            border-radius: 50%

        img
            border-radius: 50%

    &__right
        span
            font-size: 14px
            color: #878787

        h1
            margin-top: 4px

.for-you-box:hover
    background-color: #2f2f2f

    

@media (max-width: 768px)
    .home-page
        height: calc(100vh - 26px)

    
@media (max-width: 430px)
    .for-you-box
        width: 100%

        &__right
            span
                font-size: 12px


</style>