$(function () {

    //フロートヘッダーメニュー
    var targetHeight = $('.js-float-menu-target').height();
    $(window).on('scroll', function () {
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    //SPメニュー
    $('.js-toggle-sp-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    //SPメニュー　選択したら閉じる
    $(".menu .menu-link").on("click", function () {
        $(".menu ul").slideToggle();
        $(".js-toggle-sp-menu").removeClass("active");
        $(".js-toggle-sp-menu-target").removeClass("active");
    });

});
