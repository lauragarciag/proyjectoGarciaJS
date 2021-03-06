
window.onload = function () {

    function MouseGame() {
        this.mousesWrap = this.$('.game-content');
        this.mouses = this.$('.game-content div');
        this.gameStart = this.$('#game-start');
        this.gameState = this.$('#game-state');
        this.gameTime = this.$('#game-time');
        this.gameScore = this.$('#game-score');
        this.totScore = 1;
        this.isStart = false;
        this.bindEvent();
    }

    MouseGame.prototype = {
        constructor: MouseGame,

        /**
         *
         * @param  {String} elem
         * @example
         * $('div') | $('p.active')
         * @return {NodeList}
         */
        $: function (elem) {
            return document.querySelectorAll(elem);
        },

        /**
         * 
         * @param  {Number} from
         * @param  {Number} to  
         * @return {Number}     
         */
        getRandom: function (from, to) {
            return Math.floor(Math.random() * (to - from + 1)) + from + 1;
        },

        /**
         * 
         * @param  {HTMLElement} elem 
         * @param  {String} val  
         * @return {String}     
         */
        text: function (elem, val) {
            if (elem.textContent) {
                return val !== undefined ? elem.textContent = val : elem.textContent;
            } else if (elem.innerText) {
                return val !== undefined ? elem.innerText = val : elem.innerText;
            }
        },

        //
        moveUpAndDown: function () {
            let that = this;

            
            that.moveTime = setInterval(function () {

                for (let i = 0, j = that.mouses.length; i < j; ++i) {
                    that.mouses[i].setAttribute('clicked', '0');
                    that.mouses[i].className = 'hamster active';
                    that.mouses[i].style.display = 'none';
                }

                
                var showNum = that.getRandom(0, 9);
                for (let i = 0; i < showNum; i++) {
                    that.mouses[that.getRandom(0, 59)].style.display = 'block';
                }
            }, 2000);
        },

        
        bindEvent: function () {
            let that = this;

            
            that.gameStart[0].addEventListener('click', function () {
                if (!that.isStart) that.startGame();
                else { that.totalTime = 1; that.text(that.gameState[0], "Game over"); that.text(that.gameTime[0], "0"); }
            }, false);

            
            that.mousesWrap[0].addEventListener('click', function (e) {
                e = e || window.event;
                let elem = e.target

                
                if (elem.getAttribute('clicked') === '1') {
                    return;
                }

                
                if (elem.style.display !== 'block') {
                    that.score -= 1;
                }
                
                if (elem.className.indexOf('hamster') !== -1) {
                    that.score += that.totScore;
                }

                elem.setAttribute('clicked', '1');
                if (that.score < 0) that.score = 0;
                that.text(that.gameScore[0], that.score);
            }, false);
        },

        
        countDown: function () {
            let that = this;
            that.text(that.gameState[0], "Playing");
            let t = setInterval(function () {
                that.text(that.gameTime[0], --that.totalTime);
                if (that.totalTime === 0) {
                    clearInterval(t);
                    clearInterval(that.moveTime);
                    that.isStart = false;
                    for (var i = 0, j = that.mouses.length; i < j; ++i) {
                        that.mouses[i].style.display = 'none';
                    }
                    if (that.score < 0) that.score = 0; 
                    Swal.fire({
                        title: '??Termin?? el juego!',
                        text: 'Tu puntaje: ' + that.score,
                        icon: 'warning',
                        confirmButtonText: ':-)'
                    })                                 
              }
            }, 1000);
        },

        
        startGame: function () {
            this.score = 0;
            this.totalTime = 30;
            this.text(this.gameTime[0], this.totalTime);
            this.text(this.gameScore[0], this.score);
            this.countDown();
            this.moveUpAndDown();
            this.isStart = true;

        }
    };

    new MouseGame();
}