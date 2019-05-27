// import template from './template';

// template();

$('.js-carousel').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
});

import { init } from 'ityped';

init(`#ityped`, {
  // required - for now, only accepting texts
    strings: ['Nam varius accumsan elementum aliquam'],
    //表示させる文字
    typeSpeed: 65, //default
    //表示する時のスピード
    backSpeed: 30, //default
    //戻る時のスピード
    startDelay: 500, //default
    //スタート時の遅延時間
    backDelay: 500, //default
    //戻る時の遅延時間
    loop: false, //default
    //ループの有無
    showCursor: true, //default
    //カーソル表示の有無
    cursorChar: "|", //default
    //カーソルの形状
    onFinished: function(){}
});
