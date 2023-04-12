let prev = document.getElementsByClassName("btn")[0];
let one = document.getElementsByClassName("btn")[1];
let two = document.getElementsByClassName("btn")[2];
let tree = document.getElementsByClassName("btn")[3];
let four = document.getElementsByClassName("btn")[4];
let five = document.getElementsByClassName("btn")[5];
let next = document.getElementsByClassName("btn")[6];
let slide = document.querySelectorAll(".slide");

let slideShow = document.getElementsByClassName("slide_sub")[0];

let count = 0;

/* let slideClone = slideShow.firstElementChild.cloneNode(true);
slideShow.appendChild(slideClone); */

prev.addEventListener("click", function () {
  if (count == 0) {
    count = 0;
  } else {
    count += 500;
  }
  slideShow.style.transform = "translateX(" + count + "px)";
});

next.addEventListener("click", function () {
  if (count == -2000) {
    /*     setTimeout(function () {
      count = 0;
      slideShow.style.transition = "all 0s";
      slideShow.style.transform = "translateX(" + count + "px)";
    }, 500); */
    count = -2000;
  }
  if (count != -2000) {
    count -= 500;
    slideShow.style.transition = "all 0.3s";
    slideShow.style.transform = "translateX(" + count + "px)";
  }
});

one.addEventListener("click", function () {
  count = 0;
  slideShow.style.transform = "translateX(" + count + "px)";
});

two.addEventListener("click", function () {
  count = -500;
  slideShow.style.transform = "translateX(" + count + "px)";
});

tree.addEventListener("click", function () {
  count = -1000;
  slideShow.style.transform = "translateX(" + count + "px)";
});

four.addEventListener("click", function () {
  count = -1500;
  slideShow.style.transform = "translateX(" + count + "px)";
});

five.addEventListener("click", function () {
  count = -2000;
  slideShow.style.transform = "translateX(" + count + "px)";
});

//무한 슬라이드
/* if (count == -2500) {
  setTimeout(function () {
    slideShow.style.transform = "translateX(0px)";
    slideShow.style.transition = `${0}s ease-out`;
  }, 500);
  count = 0;
  console.log(count);
} */

// 사진을 드래그 한만큼 박스를 움직이게 한다.
// 손을 놓으면 둘째 사진이 보임

//학습 사항

//mousedown
/* 마우스를 눌렀을 때 */
//mouseup
// 마우스를 땠을 때
//mousemove
//요소에서 마우스를 움직였을 때

/* slide[0].addEventListener("mousemove", function (e) {
  console.log(e.clientX);
}); */
//이런식으로 짜면  e.clientX 요소에 마우스 x좌표 출력  y좌표 생각해봐

//

var 시작좌표 = 0;
var 눌렀냐 = false;
slide[0].addEventListener("mousedown", function (e) {
  시작좌표 = e.clientX;
  눌렀냐 = true;
});
// 시작 좌표

slide[0].addEventListener("mousemove", function (e) {
  // 이동거리
  if (눌렀냐 == true) {
    slideShow.style.transform = `translateX(${e.clientX - 시작좌표}px)`;
  }
});
//움직임 거리

//시작좌표 - 움직임 거리

slide[0].addEventListener("mouseup", function (e) {
  시작좌표 = e.clientX;
  눌렀냐 = false;

  if (e.clientX - 시작좌표 < -100) {
    count = -500;
    slideShow.style.transform = "translateX(" + count + "px)";
  } else {
    count = 0;
    slideShow.style.transform = "translateX(" + count + "px)";
  }
});

// 모바일에서는 tuchstart == mousedown
//  tuchmove==mousemove

//tuchend==mouseup
// e.touches[0]clientX;
//touches[0] 이렇게 몇개를 축하

/* e.clientX를 e.touches[0].clientX 이걸로 바꾸면 됩니다.

왜냐면 터치는 여러 손가락으로 할 수 있어서 그 중 몇번째 손가락인지 지정해줘야합니다. 

touchend 이벤트리스너에선 e.clientX 말고 e.changedTouches[0].clientX 쓰면 됩니다. 
 */
//hammers.js t사용하는 것도 답