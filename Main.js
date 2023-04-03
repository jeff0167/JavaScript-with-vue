const app = Vue.createApp({
    data() {
        return {
            word: '',
            wordTable: ['normalWord', 'lowerCase', 'upperCase'],
        }
    },
    methods: {
        ManipulateWord() {
            this.wordTable[0] = this.word;
            this.wordTable[1] = this.word.toLowerCase();
            this.wordTable[2] = this.word.toUpperCase();
        },
        vibrate(){ 
         navigator.vibrate(100); // literally that easy
        },
 
        vibratePattern(){ 
            navigator.vibrate([300,100,300,100]); 
        }   
    }
})
