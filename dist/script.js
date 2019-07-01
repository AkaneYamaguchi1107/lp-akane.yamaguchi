/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ityped = __webpack_require__(1);

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
  dotsClass: 'carousel__dots'
});
$('.js-opinions-carousel').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 8000,
  nextArrow: '.opinions__arrow--next',
  prevArrow: '.opinions__arrow--prev',
  dotsClass: 'carousel__dots'
});

(0, _ityped.init)('#ityped', {
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
  onFinished: function onFinished() {}
});
$('a[href^="#"]').click(function () {
  // デフォルトのイベントをキャンセル
  event.preventDefault();

  // 移動先となる要素を取得します。
  var target = $(this.hash);
  if (!target.length) return;

  // 移動先の位置を取得します
  var targetY = target.offset().top;
  // animateで移動します
  $('html,body').animate({ scrollTop: targetY }, 1000, 'swing');
});

$('.js-drawer-trg').on('click', function () {
  $('body').addClass('is-drawer-open');
  return false;
});

$('.js-drawer-back').on('click', function () {
  $('body').removeClass('is-drawer-open');
  return false;
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * @name setProps
 * @description Set the ityped properties configuration
 * @param {Object} config The configuration properties
 * @return {Promise}
 */
const setProps = ({
  strings = ['Put your strings here...', 'and Enjoy!'],
  typeSpeed = 100,
  backSpeed = 50,
  backDelay = 500,
  startDelay = 500,
  cursorChar = '|',
  placeholder = false,
  showCursor = true,
  disableBackTyping = false,
  onFinished = function () { },
  loop = true
}) => ({
  strings,
  typeSpeed,
  backSpeed,
  cursorChar,
  backDelay,
  placeholder,
  startDelay,
  showCursor,
  loop,
  disableBackTyping,
  onFinished
})

const init = (element, properties) => {
  let i = 0, l, STRINGS_TO_ITERATE;

  const typewrite = (strings, props) => {
    if (i === l)
      if (props.loop) i = 0;
    setTimeout(() => { typeString(strings[i], props); }, props.startDelay);
  }

  const typeString = (str, props) => {
    let index = 0,
      strLen = str.length;
    let intervalID = setInterval(() => {
      props.placeholder ? element.placeholder += str[index] : element.textContent += str[index];
      if (++index === strLen) return onStringTyped(intervalID, props);
    }, props.typeSpeed);
  }

  const onStringTyped = (id, props) => {
    clearInterval(id);
    if (props.disableBackTyping && i === l - 1) {
      return props.onFinished()
    }
    if (!props.loop && i === l - 1) {
      return props.onFinished();
    }
    setTimeout(() => eraseString(props), props.backDelay);
  }

  const eraseString = (props) => {
    let str = props.placeholder ? element.placeholder : element.textContent,
      strLen = str.length;
    let intervalID = setInterval(() => {
      props.placeholder
        ? element.placeholder = element.placeholder.substr(0, --strLen)
        : element.textContent = str.substr(0, --strLen);
      if (strLen === 0) return onStringErased(intervalID, props);
    }, props.backSpeed);
  }

  const onStringErased = (id, props) => {
    clearInterval(id);
    ++i;
    typewrite(STRINGS_TO_ITERATE, props);
  }

  const setCursor = (element, props) => {
    let cursorSpan = document.createElement('span');
    cursorSpan.classList.add('ityped-cursor');
    cursorSpan.textContent = '|';
    cursorSpan.textContent = props.cursorChar;
    element.insertAdjacentElement('afterend', cursorSpan);
  }


  const startTyping = (prop) => {
    let props = setProps(prop || {})
    let strings = props.strings
    STRINGS_TO_ITERATE = strings
    l = strings.length
    if (typeof element === "string") element = document.querySelector(element)
    if (props.showCursor) setCursor(element, props)
    typewrite(strings, props)
  }

  return startTyping(properties)
}
/* harmony export (immutable) */ __webpack_exports__["init"] = init;


/***/ })
/******/ ]);