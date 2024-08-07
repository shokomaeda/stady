// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
  // ふわっ
  $(".fadeUpTrigger").each(function () {
    //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
    } else {
      $(this).removeClass("fadeUp"); // 画面外に出たらfadeUpというクラス名を外す(elseの条件分岐で繰り返し処理になっている。)
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// ハンバーガーボタンの動き
$(".openbtn1").click(function () {
  $(this).toggleClass("active");
});

$(document).ready(function () {
  $(".openbtn1").click(function () {
    $(".header-site-menu").toggleClass("is-show");
  });
});

// メインビジュアルのスライドショー
$(".slide-items").slick({
  autoplay: true,
  autoplaySpeed: 4000,
});
