// import template from './template';

// template();

$('.js-carousel').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  nextArrow: '.carousel__arrow--next',
  prevArrow: '.carousel__arrow--prev',
  dotsClass: 'carousel__dots',
});
$('.js-opinions-carousel').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  nextArrow: '.opinions__arrow--next',
  prevArrow: '.opinions__arrow--prev',
  dotsClass: 'carousel__dots',
});

import {init} from 'ityped';

init(`#ityped`, {
  // required - for now, only accepting texts
    strings: ['Nam varius accumsan elementum aliquam'],
    // 表示させる文字
    typeSpeed: 65, // default
    // 表示する時のスピード
    backSpeed: 30, // default
    // 戻る時のスピード
    startDelay: 500, // default
    // スタート時の遅延時間
    backDelay: 500, // default
    // 戻る時の遅延時間
    loop: false, // default
    // ループの有無
    showCursor: true, // default
    // カーソル表示の有無
    cursorChar: '|', // default
    // カーソルの形状
    onFinished: function() {},
});
$('a[href^="#"]').click(function() {
  // デフォルトのイベントをキャンセル
  event.preventDefault();

  // 移動先となる要素を取得します。
  let target = $(this.hash);
  if (!target.length) return;

  // 移動先の位置を取得します
  let targetY = target.offset().top;
  // animateで移動します
  $('html,body').animate({scrollTop: targetY}, 1000, 'swing');
});

$('.js-drawer-trg').on('click', () => {
  $('body').addClass('is-drawer-open');
  return false;
});

$('.js-drawer-back').on('click', () => {
  $('body').removeClass('is-drawer-open');
  return false;
});
