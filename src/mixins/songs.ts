import { Vue, Component } from 'vue-property-decorator';
import { ISongs } from './interface';

@Component
export default class SongsMixin extends Vue {
    songs: ISongs[] = [
        {
            title: 'Faded',
            text: 'Alan Walker',
            url: '../assets/bande-hain-hum-uske.mp3',
            id: 1,
            image: '../assets/alan.jpg'
        }
    ]
}