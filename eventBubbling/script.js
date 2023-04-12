var modalwrap = document.querySelectorAll(".modal-wrap")[0];
var btn = document.getElementsByClassName("btn")[0];
var from = document.getElementsByTagName("form")[0];
var submit = document.getElementById("sub");
btn.addEventListener("click", function () {
  modalwrap.classList.add("on");
});

from.addEventListener("submit", function () {
  alert("전송~~~");
});

submit.addEventListener("click", function () {
  modalwrap.classList.remove("on");
});

modalwrap.addEventListener("click", function (e) {
  e.target;
  console.log(e.target);
  e.currentTarget;
  e.preventDefault();
  e.stopPropagation();

  if (e.target == modalwrap) {
    modalwrap.classList.remove("on");
  }
});

//모든 브라우저는 이벤트 버블링이 일어남
// 이벤트가 상위 html로 퍼지는 현상 항상 일어남
// 만약에 내가 form을 클릭했으면 상위요소도 클릭을 한 거로 침 점점 퍼진다 파동~~
// 종이를 3장을 겹쳐서 누르면 3장다 눌린다.
//이벤트 버블링 방지

//이벤트 객체(함수)
//콜백함수에 e라는 파라미터를 삽입하면
//아래 있는 것들을 사용가능하다
//콜백함수에 파라미터가 있는 곳은 실제로 행한 것
/* modalwrap.addEventListener("click", function (e) {
  modalwrap.classList.remove("on");
  e.target; // 유저가 실제로 누른것 클릭한것
  e.currentTarget; == this //  이벤트리스너가 달린곳 현재 이벤트가 달린곳 this라고 쓸 수 있다.
  e.preventDefault(); // 클릭안한 것 처럼 동작 // 이벤트 기본 동작 막아줌
  e.stopPropagation(); // 이벤트 버블링 막아줌 상위 요소로 이벤트가 퍼지는 것을 막아줌
});
 */
