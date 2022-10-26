/*  main.js  */
$(function () {
	/* 주메뉴 */

	//주메뉴 마우스 올렸을때
	$("nav > ul > li > a").bind("mouseover focus", function () {
		var ht = $(this).next().height();

		$(".header_wrap")
			.stop()
			.animate({ height: 70 + ht + "px" }, 500, "linear");
		$("nav.gnb > ul > li > div").css({ display: "none" });
		$(this).next().css({ display: "block" });
	});
	//주메뉴 마우스 뗐을때
	$(".gnb").bind("mouseleave blur", function () {
		$(".header_wrap").stop().animate({ height: "70px" }, 300, "linear");
		$("nav.gnb > ul > li > div").css({ display: "none" });
	});

	/*  검색버튼  */
	$(".btn_srch > a").bind("click focus", function () {
		if ($("nav.gnb > ul > li > div").is(":visible")) {
			$(".header_wrap").stop().animate({ height: "70px" }, 300, "linear");
			$("nav.gnb > ul > li > div").css({ display: "none" });
		}
		$(".srch_wrap").css({ display: "block" });
	});

	$(".btn_srch_close").bind("click focus", function () {
		$(".srch_wrap").css({ display: "none" });
	});

	/*  배너  */
	var slideNum = 0;
	var slideIdx = $(".slide").size() - 1;
	console.log(slideIdx);

	//next
	$(".btn_next").bind("click focus", function () {
		slideNum++;
		if (slideNum > slideIdx) slideNum = 0;
		$(".slide").removeClass("active");
		$(".slide").eq(slideNum).addClass("active");

		$(".slide_roll > ul > li").removeClass("on");
		$(".slide_roll > ul > li").eq(slideNum).addClass("on");
	});
	//prev
	$(".btn_prev").bind("click focus", function () {
		slideNum--;
		if (slideNum < 0) slideNum = slideIdx;
		$(".slide").removeClass("active");
		$(".slide").eq(slideNum).addClass("active");

		$(".slide_roll > ul > li").removeClass("on");
		$(".slide_roll > ul > li").eq(slideNum).addClass("on");
	});

	//autoBanner
	function autoBanner() {
		slideNum++;
		if (slideNum > slideIdx) slideNum = 0;
		$(".slide").removeClass("active");
		$(".slide").eq(slideNum).addClass("active");

		$(".slide_roll > ul > li").removeClass("on");
		$(".slide_roll > ul > li").eq(slideNum).addClass("on");
	}
	var $autoBnn = setInterval(autoBanner, 5000);

	var flag = true;
	$(".slide_roll > a").bind("click focus", function () {
		if (flag) {
			clearInterval($autoBnn);
			$(this).addClass("on");
			flag = false;
		} else {
			$autoBnn = setInterval(autoBanner, 5000);
			$(this).removeClass("on");
			flag = true;
		}
	});

	//롤링버튼
	$(".slide_roll > ul > li > a").click(function () {
		var $BnnNum = $(this).parent().index();
		$(".slide").removeClass("active");
		$(".slide").eq($BnnNum).addClass("active");

		$(".slide_roll > ul > li").removeClass("on");
		$(".slide_roll > ul > li").eq($BnnNum).addClass("on");
	});

	//top btn
	$(window).scroll(function () {
		var $scroll = $(window).scrollTop();
		console.log($scroll);

		if ($scroll < 130) {
			$(".btn_top").removeClass("on ab");
		}

		if ($scroll >= 130 && $scroll < 2800) {
			$(".btn_top").addClass("on");
		} else {
			$(".btn_top").removeClass("on");
		}
		if ($scroll >= 2800) {
			$(".btn_top").addClass("ab");
		} else {
			$(".btn_top").removeClass("ab");
		}
	});

	$(".btn_top").bind("click focus", function () {
		$("html,body").stop().animate({ scrollTop: 0 }, 1400, "swing");
	});
});
