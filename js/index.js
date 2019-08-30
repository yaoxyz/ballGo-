var i = 0;
$(".fontgo span").hide();
var $ball_1 = $(".ball_1");
var $ball_2 = $(".ball_2");
var $ball_3 = $(".ball_3");
var $ball_4 = $(".ball_4");
var $ball_5 = $(".ball_5");

var $SecondPage = $(".SecondPage");
var $ThreePage = $(".ThreePage");
var $topball_1 = $(".topball_1");
var $leftball_1 = $(".leftball_1");
var $bottonball_1 = $(".bottonball_1");
var $rightball_1 = $(".rightball_1");
var $center = $(".center");
var $body = $("body");
var $qiu = $(".qiu");
var $lightBall_1 = $(".lightBall_1");
var $lightBall_2 = $(".lightBall_2");
var $lightBall_3 = $(".lightBall_3");
var $lightBall_4 = $(".lightBall_4");
// 场景5元素获取
var $firstLine = $(".firstLine");
var $firstLine_1 = $(".firstLine_1");
var $secondLine = $(".secondLine");
var $secondLine_1 = $(".secondLine_1");
var $threeLine = $(".threeLine");
var $threeLine_1 = $(".threeLine_1");
var $fourLine = $(".fourLine");
var $fourLine_1 = $(".fourLine_1");
var $contain_5 = $(".contain_5");
var $inner_contain_5 = $(".inner_contain_5");
var $daqiu = $(".daqiu");
var $map = $(".map");
var $xiaoqiu = $(".xiaoqiu");
var $mapColor = $(".mapColor");
var $borderd = $(".borderd");
$inner_contain_5.hide();
// 场景6元素获取
var $ball_6 = $(".ball_6");
var $contain_first = $(".contain_first");
var $top_6 = $(".top_6");
var $bottom_6 = $(".bottom_6");
var $right_6 = $(".right_6");
var $heng = $(".heng");
var $shu = $(".shu");
var $ball_6_Change = $(".ball_6_Change");
var $ball_button = $(".ball_button");
var $buttonBackground = $(".buttonBackground");
//先隐藏该元素
$ball_button.hide();
$(".contain_8").hide();
//$(".FourPage").hide();

//	$ThreePage.hide();
// $("#myName").hide();
// $SecondPage.hide();   //测试
$ThreePage.hide()

function goFont() {
	var timer = setInterval(function() {
		$(".fontgo span").eq(i).fadeIn();
		i++;
		if (i == 16) {
			$("#myName").show();
			clearInterval(timer);
			$(".FirstPage").fadeOut(600);
			$body.css({
				"background": "rgb(6,148,228)"
			})
			ball_1();
		}
	}, 300) //测试  原定300
}
//圆的动画动作
function ball_1() {
	$ball_1.animate({
		height: '360px',
		width: '360px'
	}, 1000, function() {
		$ball_1.css({
			"background-color": "rgb(247,166,36)"
		});
		$SecondPage.css({
			"background-color": "rgb(0,146,131)"
		});
		$ball_2.animate({
			height: '290px',
			width: '290px'
		}, 1000, function() {
			$ball_3.animate({
				height: '220px',
				width: '220px'
			}, 900, function() {
				$ball_4.animate({
					height: '150px',
					width: '150px'
				}, 900, function() {
					$ball_5.animate({
						height: '80px',
						width: '80px'
					}, 700, function() {
						goOne();
					})
					$ball_1.css({
						"background-color": "rgb(252,229,54)"
					});
					$ball_2.css({
						"background-color": "rgb(154,37,172)"
					});
					$ball_3.css({
						"background-color": "rgb(124,207,244)"
					});
					$ball_3.css({
						"background-color": "rgb(255,87,34)"
					});
					$SecondPage.css({
						"background-color": "rgb(7,170,26)"
					}).fadeIn();
				});
				$ball_1.css({
					"background-color": "rgb(0,147,132)"
				});
				$ball_2.css({
					"background-color": "rgb(252,252,252)"
				});
				$SecondPage.css({
					"background-color": "rgb(125,230,36)"
				});
			});
			$ball_1.css({
				"background-color": "rgb(0,180,205)"
			});
			$ball_2.css({
				"background-color": "rgb(252,252,252)"
			});
			$SecondPage.css({
				"background-color": "rgb(132,189,66)"
			});
		});

	});
}

// 让圆合并并且缩小
function goOne() {
	$ball_1.addClass('suofang');
	$ball_2.addClass('suofang');
	$ball_3.addClass('suofang');
	$ball_4.addClass('suofang');
	$ball_5.addClass('suofang');
	$ball_1.css({
		"background": "rgb(7,170,246)"
	})
	$ball_2.css({
		"background": "rgb(63,81,180)"
	})
	$ball_3.css({
		"background": "rgb(79,43,165)"
	})
	$ball_4.css({
		"background": "rgb(154,37,172)"
	})
	$ball_5.css({
		"background": "rgb(232,28,96)"
	})
	$SecondPage.css({
		"background": "rgb(2,136,209)"
	}).fadeIn();

	setTimeout(function() {
		$('.SecondPage div').animate({
			height: "0px",
			width: "0px"
		}, 1000, function() {
			goThreePage();
		});
	}, 1000)
}

function goThreePage() {
	// 二三页面交替
	$SecondPage.fadeOut();
	// $body.css({"background":"rgb(132,189,66)"});

	$ThreePage.fadeIn();
	$ThreePage.show();

	$topball_1.addClass("topGo");
	$leftball_1.addClass("leftGo");
	$bottonball_1.addClass("bottonGo");
	$rightball_1.addClass("rightGo");
	$center.addClass("centerGo");

	setTimeout(function() {
		goUp();
	}, 2000)
}

function goUp() {
	$topball_1.addClass("upTop");
	$leftball_1.addClass("upLeft");
	$bottonball_1.addClass("upBotton");
	$rightball_1.addClass("upRight");
	$qiu.addClass("downQiu");
	$lightBall_1.addClass("lightBig_1");
	$ThreePage.css({
		"background": "rgb(238,232,170)"
	})
	$lightBall_2.addClass("lightBig_2");
	$ThreePage.css({
		"background": "#20B2AA"
	})
	$lightBall_3.addClass("lightBig_3");
	$ThreePage.css({
		"background": "#9ACD32"
	})
	$lightBall_4.addClass("lightBig_4");
	$ThreePage.css({
		"background": "#32CD32"
	})
	$(".lightBig_4").on("animationend", function() {
		$ThreePage.hide();
		$(".my_transit").addClass("my_transit_Change");
		$(".my_transit_left").addClass("my_transit_left_go");
		$(".my_transit_right").addClass("my_transit_right_go");


	})
	setTimeout(function() {
		$(".contain_transit").hide();
		//$(".FourPage").show();
		LineGo();
	}, 10800)
	$(".my_transit_left_go").on("animationend", function() {

	})
}
// 场景5
function LineGo() {
	$firstLine.addClass("firstLine_go");
	$firstLine_1.addClass("firstLine_1_go");
	$secondLine.addClass("secondLine_go");
	$secondLine_1.addClass("secondLine_1_go");
	$threeLine.addClass("threeLine_go");
	$threeLine_1.addClass("threeLine_1_go");
	$fourLine.addClass("fourLine_go");
	$fourLine_1.addClass("fourLine_1_go");
	// 可是使用动画监听做
	setTimeout(function() {
		$fourLine_1.addClass("fourLine_1_change");
	}, 600)
	setTimeout(function() {
		$inner_contain.show();
	}, 3000)
	Move();
}

function LineGo() {
	$firstLine.addClass("firstLine_go");
	$firstLine_1.addClass("firstLine_1_go");
	$secondLine.addClass("secondLine_go");
	$secondLine_1.addClass("secondLine_1_go");
	$threeLine.addClass("threeLine_go");
	$threeLine_1.addClass("threeLine_1_go");
	$fourLine.addClass("fourLine_go");
	$fourLine_1.addClass("fourLine_1_go");
	// 可是使用动画监听做
	setTimeout(function() {
		$fourLine_1.addClass("fourLine_1_change");
	}, 600)
	setTimeout(function() {
		$inner_contain_5.show();
	}, 3000)
	Move();
}

function Move() {
	$map.addClass("mapMove");
	$contain_5.addClass("contain_5Move");
	$(".mapMove").on("animationend", function() {
		$xiaoqiu.animate({
			height: "7px",
			width: "7px"
		}, 300, function() {
			$xiaoqiu.addClass("xiaoqiuMove");
			$mapColor.addClass("mapGo");
			$daqiu.css({
				"background": "#ff7043"
			})
		})
	})
	setTimeout(function() {
		$contain_5.addClass("contain_5Change");
		$map.addClass("mapChange");
	}, 9000);
	$daqiu.addClass("daqiuMove");
	setTimeout(function() {
		//$map.addClass("mapOut");
		//$map.css({"background":"white"});
		// $borderd.addClass("borderdOut");
		// $mapColor.addClass("mapColorOut");
		// $daqiu.addClass("daqiuOut");
		$map.fadeOut(300);
		$borderd.fadeOut(300);
		$mapColor.fadeOut(300);
		$daqiu.fadeOut(300);
		$(".FourPage").hide();
		sixPage();
	}, 12000)
}

// 场景六代码
function sixPage() {
	$contain_first.animate({
		height: "100%",
		width: "100%"
	}, 500, function() {
		$ball_6.animate({
			height: "300px",
			width: "300px"
		}, 600, function() {
			$ball_6.animate({
				height: "280px",
				width: "280px",
			}, 300)
			$ball_6.css({
				"background": "#fbc02d"
			});
			$top_6.css({
				"background": "#dd2c00"
			});
			$bottom_6.css({
				"background": "#ff7043"
			});
			setTimeout(function() {
				allTogether();
			}, 500)
		});
	})
}

function allTogether() {
	$top_6.animate({
		height: "5%"
	}, 800);
	$bottom_6.animate({
		top: "5%",
		height: "10%"
	}, 800);
	$right_6.animate({
		right: "0%"
	}, 800);
	$heng.hide();
	$shu.hide();
	$ball_6.addClass("ball_6_Change");

	$(".ball_6_Change").on("animationend", function() {
		$ball_button.show();
		$ball_button.addClass("ball_button_change");
	})
	setTimeout(function() {
		$ball_button.hide();
		$ball_6.css({
			"background": "rgb(0,77,64)"
		});
		$top_6.css({
			"background": "#8d6e63"
		});
		$bottom_6.css({
			"background": "#4e342e"
		});
		$right_6.css({
			"background": "#1b5e20"
		});
	}, 2800)
	setTimeout(function() {
		$ball_6.addClass("ball_6_Changeball");
		$buttonBackground.addClass("buttonBackground_Change");
		$right_6.addClass("right_6_right");
	}, 1100)


	$(".right_6_right").on("animationend", function() {
		$(".FivePage").fadeOut(800);
		$(".contain_7").fadeIn();
		$(".huaqiu").addClass("huakuai_Go");
	})
	$(".huakuai_Go").on("animationend", function() {
		$(".contain_7").hide();
		$(".contain_8").css({
			"backgrounk": "while"
		});
		$body.css({
			"background": "while"
		})
		$(".contain_8").fadeIn();
		thank();
	})
}


//结束动画

function thank() {
	let tl = anime.timeline({
		easing: 'easeOutExpo',
		duration: 850
	});

	tl.add({
		targets: 'section .item',
		width: '100%',
		backgroundColor: '#F6A9BD',
		delay: anime.stagger(100)
	});

	tl.add({
		targets: 'section .item',
		delay: anime.stagger(70),
		width: '97%',
		backgroundColor: '#F4E0E1'
	});

	tl.add({
		targets: 'section .item',
		backgroundColor: '#FFFFFF',
		delay: anime.stagger(50, {
			from: 'center'
		})
	});

	tl.add({
		targets: 'p',
		top: '49%',
		duration: 4500,
		opacity: 1
	}, '-=1000')

	var textWrapper = document.querySelector('.effect1');
	textWrapper.innerHTML = textWrapper.textContent.replace(/([^.\s]|\w)/g, "<span class='letter'>$&</span>");

	anime.timeline()
		.add({
			targets: '.effect1 .letter',
			scale: [5, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 1350,
			delay: function(el, i) {
				return 70 * i;
			}
		}, 1500);
}


// goThreePage();
goFont();
