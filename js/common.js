const searchEl = document.querySelector('.search');
const serachInputEl = searchEl.querySelector('input');
console.log(searchEl);
console.log(serachInputEl);
searchEl.addEventListener("click", function () {
  serachInputEl.focus();
});
serachInputEl.addEventListener("focus", function () {
  searchEl.classList.add('focused');
  serachInputEl.setAttribute('placeholder', '통합검색');
});
serachInputEl.addEventListener("blur", function () {
  searchEl.classList.remove('focused');
  serachInputEl.setAttribute('placeholder', '');
});

// 년도
const thisYear=document.querySelector(".this-year");
thisYear.textContent=new Date().getFullYear();