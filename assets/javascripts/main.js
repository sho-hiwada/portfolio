/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  const headerHeight = window.innerHeight / 2;
  if (this.scrollY >= headerHeight) header.classList.add('scroll-header');
  if (this.scrollY < headerHeight) header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop
    const sectionId = current.getAttribute('id')

    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.p-header__nav-menu a[href*=' + sectionId + ']').classList.add('is-active-link')
    } else {
      document.querySelector('.p-header__nav-menu a[href*=' + sectionId + ']').classList.remove('is-active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW MENU ===============*/
const snowButton = document.getElementById('js-snow-button');
const snowCanvas = document.getElementById('particles-js');
const snowing = 'is-snow'

window.addEventListener('DOMContentLoaded', function () {
  snowButton.addEventListener('change', function () {
    if (this.checked) {
      snowCanvas.classList.remove(snowing);
    } else {
      snowCanvas.classList.add(snowing);
    }
  });
});

/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => { //TabContent
      tc.classList.remove('p-filters__active')
    })
    target.classList.add('p-filters__active')

    tabs.forEach(t => { //Tab
      t.classList.remove('js-tab-active')
    })
    tab.classList.add('js-tab-active')
  })
})


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('js-theme-button')
const darkTheme = 'c-dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) //bodyのクラスはdark?
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)//テーマボタンのクラスはmoon?
}

themeButton.addEventListener('click', () => { //テーマボタン押したら
  document.body.classList.toggle(darkTheme) //c-deak-thema つけはずし　
  themeButton.classList.toggle(iconTheme) // icon 切り替え
  localStorage.setItem('selected-theme', getCurrentTheme()) //現在のテーマを確認
  localStorage.setItem('selected-icon', getCurrentIcon()) //現在のアイコンを確認
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal('.p-profile__border')
sr.reveal('.p-profile__name', { delay: 500 })
sr.reveal('.p-profile__profession', { delay: 600 })
sr.reveal('.p-profile__social', { delay: 700 })
sr.reveal('.p-profile__info-group', { interval: 100, delay: 700 })
sr.reveal('.p-profile__buttons', { delay: 800 })
sr.reveal('.p-filters__content', { delay: 900 })
sr.reveal('.p-filters', { delay: 1000 })
sr.reveal('.p-contact', { delay: 1100 })


////////////

// 	/*=========================================
// 				 コンタクトフォームバリデーション
// 				 ========================================*/
// window.addEventListener('DOMContentLoaded', () => {
//   const submit = document.querySelector('.submit');
//   var form_g = $(this).closest('.js-form-group');

//   const MSG_EMPTY = '入力必須です';
//   const MSG_NAME_MAX = '20文字以内でご入力ください';
//   const MSG_EMAIL_TYPE = 'emailの形式でご入力ください';
//   const MSG_MESSAGE_MAX = '100文字以内でご入力ください';

//   submit.addEventListener('click', (e) => {
//       e.preventDefault();

//       // NAME
//       const name = document.querySelector('#name');
//       // エラーメッセージを表示させる要素を取得
//       const errMsgName = document.querySelector('.err-msg-name');
//       if(!name.value){
//           // クラスを追加(エラーメッセージを表示する)
//           errMsgName.classList.add('form-invalid');
//           // エラーメッセージのテキスト
//           errMsgName.textContent = 'お名前が入力されていません';
//           // クラスを追加(フォームの枠線を赤くする)
//           name.classList.add('input-invalid');
//           // 後続の処理を止める
//           return;
//       }else{
//           // エラーメッセージのテキストに空文字を代入
//           errMsgName.textContent ='';
//           // クラスを削除
//           name.classList.remove('input-invalid');
//       }

//       // 「パスワード」入力欄の形式チェック
//       const pass = document.querySelector('#password');
//       const errMsgPass = document.querySelector('.err-msg-pass');
//       // パスワードが5文字以上の半角英数字であるかどうかのチェック
//       if(!pass.value.match(/^([a-zA-Z0-9]{5,})$/)){
//           errMsgPass.classList.add('form-invalid');
//           errMsgPass.textContent = '半角英数字5文字以上で入力してください';
//           pass.classList.add('input-invalid');
//           return;
//       }else{
//           errMsgPass.textContent ='';
//           pass.classList.remove('input-invalid');
//       }

//       // 「パスワード」と「パスワード再入力」が一致しているかどうかのチェック
//       const passRe = document.querySelector('#pass-re');
//       const errMsgPassRe = document.querySelector('.err-msg-passre');
//       if(pass.value !== passRe.value){
//           errMsgPassRe.classList.add('form-invalid');
//           errMsgPassRe.textContent = 'パスワードとパスワード再入力が一致していません';
//           passRe.classList.add('input-invalid');
//           return;
//       }else{
//           errMsgPassRe.textContent ='';
//           passRe.classList.remove('input-invalid');
//       }
//   }, false);
// }, false);



/*=============== CANVAS ===============*/

/*=========================================
  雪
  ========================================*/
var snow_js = document.getElementsByClassName('snow-js');
var canvas = document.getElementById('canvas'); //canvasを取得
var ctx = canvas.getContext('2d'); //canvasのコンテキストを取得

/*=========================================
  canvasサイズ設定
  ========================================*/
var wd_width = window.innerWidth - 2; //ウィンドウ幅をキャンパス幅に設定
var wd_height = window.innerHeight; //ウィンドウ高をキャンパス高に

ctx.canvas.width = wd_width;
ctx.canvas.height = wd_height;

/*=========================================
  canvasサイズを可変に
  ========================================*/

function canvas_resize() {
  var rswd_width = window.innerWidth;
  var rswd_height = window.innerHeight;

  ctx.canvas.width = rswd_width;
  ctx.canvas.height = rswd_height;

  canvas.setAttribute('width', rswd_width); //属性を変更
  canvas.setAttribute('height', rswd_height);
}
//リサイズイベントを拾って実行
window.addEventListener('resize', canvas_resize, false); //
canvas_resize();

/*=========================================
  ループ処理
  ========================================*/

var animFrame = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60); //60FPS
  };

/*=========================================
  乱数
  minからmaxまでの乱整数を返す
  ========================================*/
function getRandamInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*=========================================
  雪の設定
  ========================================*/
//雪の粒を保存
const snows = [];

//			function snow_paint(){
//雪の粒の初期位置とサイズの設定
function snow() {
  this.position_x = getRandamInt(0, wd_width);
  this.position_y = getRandamInt(0, wd_height);
  this.snow_size = getRandamInt(1, 5);
  this.speed = getRandamInt(1, 3); //落下速度
  this.wind = getRandamInt(0, 1); //横風の強さ
}

//雪の粒を描写
snow.prototype.draw = function () {
  var snow_grad = ctx.createRadialGradient(
    this.position_x,
    this.position_y,
    this.snow_size * 0.6,
    this.position_x,
    this.position_y,
    this.snow_size
  );
  //グラデーション終点のオフセットと色をセット
  snow_grad.addColorStop(0, 'rgba(225,225,225,0.8)');
  snow_grad.addColorStop(0.5, 'rgba(225,225,225,0.2)');
  snow_grad.addColorStop(1, 'rgba(225,225,225,0.1)');
  ctx.beginPath();
  ctx.fillStyle = snow_grad;
  ctx.arc(this.position_x, this.position_y, this.snow_size, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
//雪の粒の移動
snow.prototype.move = function () {
  this.position_x += this.wind + Math.sin(this.position_y / 20) * 0.3;
  this.position_y += this.speed;

  if (this.position_y > ctx.canvas.height) {
    this.position_y = 0;
    this.position_x = getRandamInt(0, wd_width);
  }
}



/*=========================================
  雪を降らす
  ========================================*/
//雪の粒
function snow_density(snow_count) {
  for (var num = 0; num < snow_count; num++) {
    snows[num] = new snow();
  }
}

function snow_draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (var num = 0; num < snows.length; num++) {
    snows[num].draw();
  }
}

function snow_move() {
  for (var num = 0; num < snows.length; num++) {
    snows[num].move();
  }
}

//ループ処理
function snowy() {
  snow_draw();
  snow_move();
  animFrame(snowy);
}

/*=========================================
  実行
  ========================================*/

snow_density(100);
snowy();

/*=========================================
    雪 particles.js
  ========================================*/
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
