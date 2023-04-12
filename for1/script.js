/* var tab1 = document.getElementsByClassName("tab")[0];
var tab2 = document.getElementsByClassName("tab")[1];
var tab3 = document.getElementsByClassName("tab")[2];

var tab_con1 = document.getElementsByClassName("tab_content")[0];
var tab_con2 = document.getElementsByClassName("tab_content")[1];
var tab_con3 = document.getElementsByClassName("tab_content")[2];

/* 버튼 0 누르면 */

/* for (var i = 0; i < 3; i++) {
  var tab = document.getElementsByClassName("tab")[i];
  var tab_con = document.getElementsByClassName("tab_content")[i];
  tab.addEventListener("click", function () {
    tab1.classList.remove("on");
    tab_con1.classList.remove("on");
    tab2.classList.remove("on");
    tab_con2.classList.remove("on");
    tab3.classList.remove("on");
    tab_con3.classList.remove("on");
    tab.classList.add("on");
    tab_con.classList.add("on");
  });
} */

/* var tab = document.getElementsByClassName("tab")[0];
var tab2 = document.getElementsByClassName("tab")[1];
var tab3 = document.getElementsByClassName("tab")[2];

var tab_con = document.getElementsByClassName("tab_content")[0];
var tab_con2 = document.getElementsByClassName("tab_content")[1];
var tab_con3 = document.getElementsByClassName("tab_content")[2];



tab.addEventListener("click", function () {
  tab.classList.add("on");
  tab_con.classList.add("on");
  tab2.classList.remove("on");
  tab_con2.classList.remove("on");
  tab3.classList.remove("on");
  tab_con3.classList.remove("on");
});

tab2.addEventListener("click", function () {
  tab.classList.remove("on");
  tab_con.classList.remove("on");
  tab2.classList.add("on");
  tab_con2.classList.add("on");
  tab3.classList.remove("on");
  tab_con3.classList.remove("on");
});

tab3.addEventListener("click", function () {
  tab.classList.remove("on");
  tab_con.classList.remove("on");
  tab2.classList.remove("on");
  tab_con2.classList.remove("on");
  tab3.classList.add("on");
  tab_con3.classList.add("on");
});
 */

//자주쓰는 셀렉터는 변수에 담아서 써라

//for 반복문
//복붙을 대신해주는 문법

/* for (횟수){
  console.log("반복문");
} */

/* for (var i = 0; i < 3; i++) {
  console.log("반복문");
} */
// i가 0이고 / i가 3보다 작을시 / i를 증가시켜주세요  === 3일 경우 중지다

/* for (var i = 0; i < 3; i++) {
  console.log(i);
}
 */

//

/* var tab = document.getElementsByClassName("tab")[0];
var tab2 = document.getElementsByClassName("tab")[1];
var tab3 = document.getElementsByClassName("tab")[2];

var tab_con = document.getElementsByClassName("tab_content")[0];
var tab_con2 = document.getElementsByClassName("tab_content")[1];
var tab_con3 = document.getElementsByClassName("tab_content")[2];

tab.addEventListener("click", function () {
  탭1();
});

function 탭1() {
  tab.classList.add("on");
  tab_con.classList.add("on");
  tab2.classList.remove("on");
  tab_con2.classList.remove("on");
  tab3.classList.remove("on");
  tab_con3.classList.remove("on");
}

tab2.addEventListener("click", function () {
  탭2();
});

function 탭2() {
  tab.classList.remove("on");
  tab_con.classList.remove("on");
  tab2.classList.add("on");
  tab_con2.classList.add("on");
  tab3.classList.remove("on");
  tab_con3.classList.remove("on");
}

tab3.addEventListener("click", function () {
  탭3();
});

function 탭3() {
  tab.classList.remove("on");
  tab_con.classList.remove("on");
  tab2.classList.remove("on");
  tab_con2.classList.remove("on");
  tab3.classList.add("on");
  tab_con3.classList.add("on");
} */

//이벤트 리스너를 적게 쓰면 렘에 여유를 준다.

var tab = document.getElementsByClassName("tab")[0];
var tab2 = document.getElementsByClassName("tab")[1];
var tab3 = document.getElementsByClassName("tab")[2];

var tab_con = document.getElementsByClassName("tab_content")[0];
var tab_con2 = document.getElementsByClassName("tab_content")[1];
var tab_con3 = document.getElementsByClassName("tab_content")[2];



tab.addEventListener("click", function () {
  tab.classList.add("on");
  tab_con.classList.add("on");
  tab2.classList.remove("on");
  tab_con2.classList.remove("on");
  tab3.classList.remove("on");
  tab_con3.classList.remove("on");
});

tab2.addEventListener("click", function () {
  tab.classList.remove("on");
  tab_con.classList.remove("on");
  tab2.classList.add("on");
  tab_con2.classList.add("on");
  tab3.classList.remove("on");
  tab_con3.classList.remove("on");
});

tab3.addEventListener("click", function () {
  tab.classList.remove("on");
  tab_con.classList.remove("on");
  tab2.classList.remove("on");
  tab_con2.classList.remove("on");
  tab3.classList.add("on");
  tab_con3.classList.add("on");
});