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
        Vibrate(){ 
            alert("clicked vibrate");
         navigator.vibrate(100); // literally that easy
        },
 
        VibratePattern(){ 
             alert("clicked vibrate pattern");
            navigator.vibrate([300,100,300,100]); 
        }   
    }
})
