export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 60;
    this.fontFamily = 'Creepster';
    this.livesImage = document.getElementById('lives');
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = 'white';
    context.shadowBlur = 0;
    context.font = this.fontSize + 'px ' + this.fontFamily;
    context.textAlign = 'left';
    context.fillStyle = this.game.fontColor;
    // Score
    context.fillText('score: ' + this.game.score, 40, 100);
    // timer
    context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
    context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 40, 160);
    // lives
    for (let i = 0; i < this.game.lives; i++){
    context.drawImage(this.livesImage, 50 * i + 40, 190, 50, 50);
    }
    // game over message
    if(this.game.gameOver) {
      context.textAlign = 'center';
      context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
      if (this.game.score > this.game.winningScore){
        context.fillText('Game Clear!', this.game.width * 0.5, this.game.height * 0.5 - 20);
        context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
        context.fillText('お散歩レベル', this.game.width * 0.5, this.game.height * 0.5 + 40);
      } else {
        context.fillText('Game Over!', this.game.width * 0.5, this.game.height * 0.5 - 20);
        context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
        context.fillText('帰ってお昼寝でもするワン', this.game.width * 0.5, this.game.height * 0.5 + 40);
      }

    }
    context.restore();
  }
}