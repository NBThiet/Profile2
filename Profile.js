var tab_child_1 = document.querySelector(".tab_child_1");
var tab_child_2 = document.querySelector(".tab_child_2");
var tab_child_3 = document.querySelector(".tab_child_3");

var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");
var screen3 = document.querySelector(".screen3");

var dayOfWeek = document.querySelector(".day");
var dateInner = document.querySelector(".date");
var monthInner = document.querySelector(".month");

var btnMenu = document.querySelector(".fa-bars");
var MenuMB = document.querySelector(".MenuMB");

var btnEmail = document.querySelector(".fa-address-card");
var EmailMB = document.querySelector(".EmailMB");

tab_child_1.onclick = () => {
  tab_child_1.style.backgroundColor = "rgb(27, 29, 46)";
  tab_child_1.style.borderBottom = "3px solid rgb(18, 112, 235)";
  screen2.style.display = "none";
  screen3.style.display = "none";

  screen1.style.display = "block";
  tab_child_2.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_2.style.borderBottom = "none";
  tab_child_3.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_3.style.borderBottom = "none";
};

tab_child_2.onclick = () => {
  tab_child_2.style.backgroundColor = "rgb(27, 29, 46)";
  tab_child_2.style.borderBottom = "3px solid rgb(18, 112, 235)";
  screen1.style.display = "none";
  screen3.style.display = "none";
  screen2.style.display = "block";
  tab_child_1.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_1.style.borderBottom = "none";
  tab_child_3.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_3.style.borderBottom = "none";
};

tab_child_3.onclick = () => {
  tab_child_3.style.backgroundColor = "rgb(27, 29, 46)";
  tab_child_3.style.borderBottom = "3px solid rgb(18, 112, 235)";
  // tab_child_3.style.justifyContent = "space-between";
  screen2.style.display = "none";
  screen1.style.display = "none";
  screen3.style.display = "block";
  tab_child_2.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_2.style.borderBottom = "none";
  tab_child_1.style.backgroundColor = "rgb(21, 23, 40)";
  tab_child_1.style.borderBottom = "none";
};
var date = new Date();

var day = date.getDay();
var date_child = date.getDate();
var months = date.getMonth() + 1;
var year = date.getFullYear();
const dayArray = [
  "MonDay",
  "TueDay",
  "WedDay",
  "ThuDay",
  "FriDay",
  "Sat",
  "Sun",
];

dayOfWeek.innerText = dayArray[day - 1];

dateInner.innerText = date_child;
monthInner.innerText = months + "-" + year;

btnMenu.onclick = () => {
  MenuMB.style.display = "block";
};

MenuMB.onclick = () => {
  MenuMB.style.display = "none";
};

btnEmail.onclick = () => {
  EmailMB.style.display = "block";
};

EmailMB.onclick = () => {
  EmailMB.style.display = "none";
};
