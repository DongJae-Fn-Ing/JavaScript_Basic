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
