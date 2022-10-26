//주메뉴
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");

for (i = 0; i < gnbMenu.length; i++) {
	gnbMenu[i].addEventListener("mouseover", function () {
		this.className += "on";
		// this.classList.add("on");
		var ht = this.children[1].offsetHeight;
		headerWrap.style.height = 70 + ht + "px";
	});
	gnbMenu[i].addEventListener("mouseout", function () {
		this.classList.remove("on");
		headerWrap.style.height = "70px";
	});
}
const srchBtn = document.querySelector(".btn_srch");
const srchCloseBtn = document.querySelector(".btn_srch_close");
const srchWrap = document.querySelector(".srch_wrap");

srchBtn.addEventListener("click", function () {
	srchWrap.className += " on";
});

srchCloseBtn.addEventListener("click", function () {
	srchWrap.classList.remove("on");
});

//오토배너
const btnNext = document.querySelector(".btn_next");
const btnPrev = document.querySelector(".btn_prev");
const slide = document.querySelectorAll(".slide");
const slideRoll = document.querySelectorAll(".slide_roll li");
const btnPlay = document.querySelector(".btn_play");

let bnnNum = 0;
let lastNum = document.querySelectorAll(".slide_wrap >li").length - 1;

//next 버튼
btnNext.addEventListener("click", function () {
	bnnNum++;
	if (bnnNum > lastNum) {
		bnnNum = 0;
	}
	slide.forEach(function (item) {
		item.classList.remove("active");
	});
	slide[bnnNum].classList.add("active");

	slideRoll.forEach(function (idx) {
		idx.classList.remove("on");
	});
	slideRoll[bnnNum].classList.add("on");
});

//prev버튼
btnPrev.addEventListener("click", function () {
	bnnNum--;
	if (bnnNum < 0) {
		bnnNum = lastNum;
	}
	slide.forEach(function (item) {
		item.classList.remove("active");
	});
	slide[bnnNum].classList.add("active");
	slideRoll.forEach(function (idx) {
		idx.classList.remove("on");
	});
	slideRoll[bnnNum].classList.add("on");
});

//오토배너
function autoBanner() {
	//next버튼 눌렀을때
	bnnNum++;
	if (bnnNum > lastNum) {
		bnnNum = 0;
	}
	slide.forEach(item => {
		item.classList.remove("active");
	});
	slide[bnnNum].classList.add("active");

	slideRoll.forEach(idx => {
		idx.classList.remove("on");
	});
	slideRoll[bnnNum].classList.add("on");
}
var autoBnn = setInterval(autoBanner, 5000);

//배너재생 멈춤버튼
var flag = true;
btnPlay.addEventListener("click", function () {
	if (flag) {
		clearInterval(autoBnn);
		this.classList.add("on");
		flag = false;
	} else {
		autoBnn = setInterval(autoBanner, 5000);
		this.classList.remove("on");
		flag = true;
	}
});

// //롤링버튼
// $(".slide_roll > ul > li > a").click(function () {
// 	var $BnnNum = $(this).parent().index();
// 	$(".slide").removeClass("active");
// 	$(".slide").eq($BnnNum).addClass("active");

// 	$(".slide_roll > ul > li").removeClass("on");
// 	$(".slide_roll > ul > li").eq($BnnNum).addClass("on");
// });

//롤링버튼 클릭
slideRoll.forEach(item => {
	item.addEventListener("click", rollAction);
});

function rollAction(item) {
	curRoll = item.currentTarget; // 클릭이벤트가 전달된 엘리먼트
	parentRoll = curRoll.parentElement; // 연결된 엘리먼트의 부모
	childRoll = parentRoll.children; // 부모 엘리먼트의 자식 엘리먼트들
	curIdx = Array.from(childRoll).indexOf(curRoll); //연결된 인덱스

	slide.forEach(function (item) {
		item.classList.remove("active");
	});
	slide[curIdx].classList.add("active");

	slideRoll.forEach(function (idx) {
		idx.classList.remove("on");
	});
	slideRoll[curIdx].classList.add("on");
	bnnNum = curIdx;
}

//top버튼
const btnTop = document.querySelector(".btn_top");

window.addEventListener("scroll", function () {
	// let scroll = this.scrollTop;
	let scroll = document.querySelector("html").scrollTop;
	console.log(scroll);

	if (scroll <= 0) {
		btnTop.classList.remove("on", "ab");
	} else if (scroll > 0 && scroll < 2700) {
		btnTop.classList.remove("ab");
		btnTop.classList.add("on");
	} else {
		btnTop.classList.add("ab");
	}
});

btnTop.addEventListener("click", function (e) {
	e.preventDefault();
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});
