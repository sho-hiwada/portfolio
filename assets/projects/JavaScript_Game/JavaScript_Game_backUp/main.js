import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { FlyingEnemy, ClimbingEnemy, GroundEnemy } from './enemies.js';
import { UI } from './Ui.js';

window.addEventListener('load', function(){
  const canvas = this.document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1300; //2.6倍
  canvas.height = 720; //1.44倍

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 72;
      this.speed = 0;
      this.maxSpeed = 5;
      this.background = new Background(this);
      this.player = new Player(this);
      this.input = new InputHandler();
      this.UI = new UI(this);
      this.enemies = [];
      this.particles = [];
      this.collisions = [];
      this.floatingMessages = [];
      this.maxParticles = 50;
      this.enemyTimer = 0;
      this.enemyInterval = 1000;
      this.debug = false;
      this.score = 0;
      this.winningScore = 5;
      this.fontColor = 'black';
      this.time = 0;
      this.maxTime = 180 * 1000; //s * 1000
      this.gameOver = false;
      this.lives = 5;
      this.player.currentState = this.player.states[0];
      this.player.currentState.enter();
    }
    update(deltaTime){
      this.time += deltaTime;
      if(this.time > this.maxTime) this.gameOver = true;
      this.background.update();
      this.player.update(this.input.keys, deltaTime);

      if(this.enemyTimer > this.enemyInterval) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
      this.enemies.forEach(enemy => {
        enemy.update(deltaTime);
      });

      this.floatingMessages.forEach(message => {
        message.update();
      });

      this.particles.forEach((particle, index) => {
        particle.update();
      });
      if(this.particles.length > this.maxParticles) {
        this.particles.length = this.maxParticles;
      }
      this.collisions.forEach((collision, index) => {
        collision.update(deltaTime);
      });
      this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion);
      this.particles = this.particles.filter(particle => !particle.markedForDeletion);
      this.collisions = this.collisions.filter(collision => !collision.markedForDeletion);
      this.floatingMessages = this.floatingMessages.filter(message => !message.markedForDeletion);
    }
    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
      this.enemies.forEach(enemy => {
        enemy.draw(context);
      });
      this.particles.forEach(particle => {
        particle.draw(context);
      });
      this.collisions.forEach(collision => {
        collision.draw(context);
      });
      this.floatingMessages.forEach(message => {
        message.draw(context);
      });
      this.UI.draw(context);
    }
    addEnemy() {
      if(this.speed > 0 && Math.random() < 0.5) this.enemies.push(new GroundEnemy(this));
      else if (this.speed > 0) this.enemies.push(new ClimbingEnemy(this));
      this.enemies.push(new FlyingEnemy(this));
    }
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update(deltaTime);
    game.draw(ctx);
    if(!game.gameOver)requestAnimationFrame(animate);
  }
  const slider = document.getElementById('slider');
  const showGameSpeed = document.getElementById('showGameSpeed');
  slider.value = game.maxSpeed;
  showGameSpeed.innerHTML = game.maxSpeed;
  slider.addEventListener('change', function(e){
  game.maxSpeed = e.target.value;
  showGameSpeed.innerHTML = e.target.value;
  });
  animate(0);
});