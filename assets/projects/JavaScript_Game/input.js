export class InputHandler {
  constructor(game){
    this.game = game;
    this.gameOver = false;
    this.keys = [];
    this.touchY = '';
    this.touchX = '';
    this.touchTresHold = 30;
    this.currentSwipe = '';
    window.addEventListener('keydown', e => {
      console.log(e.key, this.keys);
      if((  e.key === 'ArrowDown' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'Enter'
          ) && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      } else if (e.key === 'd') this.game.debug = !this.game.debug;
      else if(e.key === 'q' && this.game.gameOver === true) this.game.restartGame();
    });
    window.addEventListener('keyup' , e => {
      if(   e.key === 'ArrowDown' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight' ||
            e.key === 'Enter' ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
    // mobile
    window.addEventListener('touchstart', e => {
      // console.log('start');
      // console.log(e.changedTouches[0].pageY);
      // console.log(e.changedTouches[0].pageX);
      this.touchY = e.changedTouches[0].pageY;
      this.touchX = e.changedTouches[0].pageX;
    });
    window.addEventListener('touchmove', e => {
      // console.log('move');
      // console.log(e.changedTouches[0].pageY);
      // console.log(e.changedTouches[0].pageX);
      const swipeDistanceY = e.changedTouches[0].pageY - this.touchY;
      const swipeDistanceX = e.changedTouches[0].pageX - this.touchX;
      if (swipeDistanceY < -this.touchTresHold && this.keys.indexOf('swipe up') === -1) {
        this.keys = this.keys.filter(key => key !== 'swipe down'); // 逆方向のスワイプを削除
        this.keys.push('swipe up');
      } else if (swipeDistanceY > this.touchTresHold && this.keys.indexOf('swipe down') === -1) {
        this.keys = this.keys.filter(key => key !== 'swipe up'); // 逆方向のスワイプを削除
        this.keys.push('swipe down');
        if(this.game.gameOver) this.game.restartGame();
      }
      if (swipeDistanceX < -this.touchTresHold && this.keys.indexOf('swipe left') === -1) {
        this.keys = this.keys.filter(key => key !== 'swipe right'); // 逆方向のスワイプを削除
        this.keys.push('swipe left');
      } else if (swipeDistanceX > this.touchTresHold && this.keys.indexOf('swipe right') === -1) {
        this.keys = this.keys.filter(key => key !== 'swipe left'); // 逆方向のスワイプを削除
        this.keys.push('swipe right');
      }
    });
    window.addEventListener('touchend', e => {
      console.log(this.keys);
      // console.log(e.changedTouches[0].pageY);
      // console.log(e.changedTouches[0].pageX);
      this.keys.splice(this.keys.indexOf(this.currentSwipe), 1);
      this.currentSwipe = '';
      this.keys = [];
    });
  }
}