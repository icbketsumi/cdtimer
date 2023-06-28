'use strict';

// // // 変数の定義①

// 入力値からミリ秒に変換して時間の合計⑨
let total = 0;

let countdown;


// jsで変化させたいところ（カウントダウンさせたい）②
// カウントの表示

let displayHour = document.querySelector('#hour');
let displayMin = document.querySelector('#min');
let displaySec = document.querySelector('#sec');



// jsが処理されるきっかけ（値を入力後、ボタンをクリックする）③
// ボタンの要素を取り出す

const Startbtn = document.querySelector('#start');
const Stopbtn = document.querySelector('#stop');
const Resetbtn = document.querySelector('#reset');

// startをクリックしたときの処理④

Startbtn.addEventListener('click', function () {

  // 入力した値から時間を計算する…⑦
  // 時分秒を変数に詰める
  // 要素から、値だけを取り出す…整数にする
  let calcHour = parseInt(document.querySelector('#inputHour').value);
  let calcMin = parseInt(document.querySelector('#inputMin').value);
  let calcSec = parseInt(document.querySelector('#inputSec').value);

  // 1000ミリ秒に変換して合計＝total（戻って定義）⑧
  total = (calcHour * 60 * 60 * 1000) + (calcMin * 60 * 1000) + (calcSec * 1000);




  // updateTimerが処理されます＝カウントが始まる…⑤
  updateTimer();

});


// 関数定義⑥
// updateTimer＝カウントしていく処理

function updateTimer() {

  // ミリ秒の合計totalを使って、時分秒を計算⑩
  // 時間(totalを時間に戻して、整数部分だけを取り出す)
  let countHour = Math.floor(total / (60 * 60 * 1000))
  // 分
  let countMin = Math.floor((total % (60 * 60 * 1000)) / (60 * 1000));
  // 秒
  let countSec = Math.floor((total % (60 * 1000)) / 1000);

  // 表示させる⑪
  displayHour.textContent = countHour;
  displayMin.textContent = countMin;
  displaySec.textContent = countSec;

  // 1000ミリ秒ずつカウントが減る
  total -= 1000;

  // total 0以上ならカウントダウン
  if (total >= 0) {

    countdown = setTimeout(updateTimer, 1000);
  } else {
    // タイムアップ後
    resetTimer();




  }

}

// 関数定義
// resetTimer()

function resetTimer() {

  displayHour.textContent = '00';
  displayMin.textContent = '00';
  displaySec.textContent = '00';

  total = 0;



}

// stopをクリックしたときの処理

Stopbtn.addEventListener('click', function countStop() {

  clearTimeout(countdown);


});


// resetをクリックしたときの処理

Resetbtn.addEventListener('click', function () {

  location.reload()
});