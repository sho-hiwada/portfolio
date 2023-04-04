window.addEventListener('load', function () {
  $(function () {

    console.log("test");

    // $(".js-slick-wrapper").slick({
    //   infinite: true,
    //     slidesToShow: 1,
    //     // slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 0,//隣あう画像のスライドするまでの間隔時間
    //     speed: 5000,
    //     arrows: false,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     adaptiveHeight: true,
    //     cssEase: 'linear'//開始から終了まで一定に変化する
    // });

    // new Swiper('.swiper', {
    //   speed: 1000,
    //   autoplay: {
    //     delay: 4000,
    //     // disableOnInteraction: false,
    //     reverseDirection: true,
    //     waitForTransition: false,
    //   },
    //   loop: true,
    //   allowTouchMove: false,
    //   parallax: true
    // });



$(document).ready(function(){
  $('h1').hide().fadeIn(1000, function() {
    $('.js-display-show2').addClass('is-visible');
  });
});

    function scrollFadeIn() {
      var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
      var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
      //====右に動くアニメーションここから===
      $('.js-display-show').each(function () {                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
        var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
        if (scroll > cntPos - windowHeight + windowHeight / 4) {  /* 要素がある位置までスクロールされていたら */
          $(this).addClass('is-visible');              /* 「active」のクラスを付与 */
        }
      });
    }

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load scroll', function () {
      scrollFadeIn();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

    // $(window).on('scroll load', function () {        /* ページロード時、またはスクロールされた時*/
    //     var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
    //     var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
    //     $('.js-display-show').each(function () {                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
    //       var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
    //       if (scroll > cntPos - windowHeight + windowHeight / 4) {  /* 要素がある位置までスクロールされていたら */
    //         $(this).addClass('is-visible');              /* 「active」のクラスを付与 */
    //       }
    //     });
    //   });

    // jQuery(function ($) {
    //   var fadeIn = $('.js-display-show');
    //   $(window).scroll(function () {
    //     $(fadeIn).each(function () {
    //       var offset = $(this).offset().top;
    //       var scroll = $(window).scrollTop();
    //       var windowHeight = $(window).height();
    //       if (scroll > offset - windowHeight + 150) {
    //         $(this).addClass("is-visible");
    //       }
    //     });
    //   });
    // });

  })
}, false);
