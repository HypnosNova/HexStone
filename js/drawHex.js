var firstSnow, secondSnow;
var sy = document.documentElement.clientHeight; //window.screen.height;
var sx = document.documentElement.clientWidth; //window.screen.width;
var clearAllAmount = 0;
//提示显示的div
var hintDiv1, hintDiv2;
//各类尺寸大小
var actionX, actionY, hexX, hexY, snowX, snowY;
var canChoose = true;
//var evaluation={"Good","Great","Wonderful","Amazing","Excellent","Spectacular"};
//分数，消除数量，第几遍消除
var score = 0,
	clearAmount = 0,
	clearTimes = 1;
var isGameStart = false;
document.documentElement.style.overflow = 'hidden';




//根据分辨率计算各类尺寸
function getXY() {
	if (sx < sy) {
		sy = sx / 16 * 9;
	}
	actionX = sx * 9 / 10;
	actionY = actionX * 9 / 16;
	hexY = actionY / 7;
	hexX = hexY / 100 * 115;
	snowY = hexY * 0.72;
	snowX = hexX * 0.72;
}

//窗口大小改变后重绘
function reDraw() {
	sy = document.documentElement.clientHeight;
	sx = document.documentElement.clientWidth;
	getXY();
	$("#back").css({"width":sx+"px","height":sy+"px"});
	//重画格子大小与位置
	for (var i = 0; i < map.length; i++) {
		if (i % 2 == 0) {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					$("#x" + i + "y" + j).css({
						"height": hexY + "px",
						"width": hexX + "px",
						"marginLeft": i * hexX * 3 / 4 + "px",
						"marginTop": j * hexY + "px"
					});
					$("#dx" + i + "y" + j).css({
						"height": snowY + "px",
						"width": snowX + "px",
						"marginLeft": (i * hexX * 3 / 4 + hexX * 0.14) + "px",
						"marginTop": (j * hexY + hexY * 0.14) + "px"
					});
				}
			}
		} else {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					$("#x" + i + "y" + j).css({
						"height": hexY + "px",
						"width": hexX + "px",
						"marginLeft": i * hexX * 3 / 4 + "px",
						"marginTop": (j + 0.5) * hexY + "px"
					});
					$("#dx" + i + "y" + j).css({
						"height": snowY + "px",
						"width": snowX + "px",
						"marginLeft": (i * hexX * 3 / 4 + hexX * 0.14) + "px",
						"marginTop": (j * hexY + hexY * 0.64) + "px"
					});
				}
			}
		}
	}
}


var snowTypeNumber = 6;
//游戏格子矩阵
var map = maps[0];

//画出游戏格子
function createWorld() {
	$("#world").append("<div id='back' style='height:" + sy + "px;width:" + sx + "px;background-image:url(img/bg.jpeg);background-size:cover;'></div>");
	for (var i = 0; i < map.length; i++) {
		if (i % 2 == 0) {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					$("#back").append("<div id='x" + i + "y" + j + "' style='height:" + hexY + "px;width:" + hexX + "px;position:absolute;margin-left:" + i * hexX * 3 / 4 + "px;margin-top:" + j * hexY + "px;background-size:cover;background-image: url(img/snowBg" + map[i][j] + ".png);' clear-times=" + map[i][j] + "></div>");
				}
			}
		} else {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					$("#back").append("<div id='x" + i + "y" + j + "' style='height:" + hexY + "px;width:" + hexX + "px;position:absolute;margin-left:" + i * hexX * 3 / 4 + "px;margin-top:" + (hexY / 2 + j * hexY) + "px;background-size:cover;background-image: url(img/snowBg" + map[i][j] + ".png);' clear-times=" + map[i][j] + "></div>");
				}
			}
		}
	}
}

//判断是不是相邻的雪花
function isBeside() {
	var id1 = firstSnow.attr("id");
	var id2 = secondSnow.attr("id");
	var tmp = id1.split("y");
	var y1 = parseInt(tmp[1]);
	var x1 = parseInt(tmp[0].substring("2"));
	//若x坐标相同
	if (id2 == "dx" + x1 + "y" + (y1 + 1) || id2 == "dx" + x1 + "y" + (y1 - 1)) {
		return true;
	}

	if (x1 % 2 == 0) {
		//若在左边
		if (id2 == "dx" + (x1 - 1) + "y" + (y1 - 1) || id2 == "dx" + (x1 - 1) + "y" + y1) {
			return true;
		} else
		if (id2 == "dx" + (x1 + 1) + "y" + (y1 - 1) || id2 == "dx" + (x1 + 1) + "y" + y1) {
			//在右侧
			return true;
		}
	} else {
		//若在左边
		if (id2 == "dx" + (x1 - 1) + "y" + (y1 + 1) || id2 == "dx" + (x1 - 1) + "y" + y1) {
			return true;
		} else
		if (id2 == "dx" + (x1 + 1) + "y" + (y1 + 1) || id2 == "dx" + (x1 + 1) + "y" + y1) {
			//在右侧
			return true;
		}
	}
	return false;
}

//雪花点击事件
function snowOnClick(event) {
	if (hintDiv1) {
		hintDiv1.removeClass("rotate");
		hintDiv2.removeClass("rotate");
	}
	if (!canChoose) {
		return;
	}
	clickSoundOpen();
	if (firstSnow) {
		firstSnow.removeClass("rotate");
		secondSnow = $(this);
		if (!isBeside()) {
			firstSnow = secondSnow;
			secondSnow = null;
			firstSnow.addClass("rotate");
			return;
		}
		canChoose = false;
		var xx = $("#world").offset().left;
		var yy = $("#world").offset().top;
		var x2 = secondSnow.offset().left;
		var x1 = firstSnow.offset().left;
		var y2 = secondSnow.offset().top;
		var y1 = firstSnow.offset().top;
		secondSnow.animate({
			marginTop: (y1 - yy) + 'px',
			marginLeft: (x1 - xx) + 'px'
		}, 300);
		firstSnow.animate({
			marginTop: (y2 - yy) + 'px',
			marginLeft: (x2 - xx) + 'px'
		}, 300);
		var id1 = firstSnow.attr("id");
		var id2 = secondSnow.attr("id");
		firstSnow.attr("id", id2);
		secondSnow.attr("id", id1);
		eliminate(id2, id1);
		//		firstSnow = null;
		//		secondSnow = null;
	} else {
		firstSnow = $(this);
		firstSnow.addClass("rotate");
	}
}

function getRandom(n) {
	return Math.floor(Math.random() * n)
}

//添加雪花
function addAllSnow() {
	for (var i = 0; i < map.length; i++) {
		if (i % 2 == 0) {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					var rnd = getRandom(snowTypeNumber);
					$("#back").append("<div id='dx" + i + "y" + j + "' name='" + rnd + "' style='height:" + snowY + "px;width:" + snowX + "px;position:absolute;margin-left:" + (i * hexX * 3 / 4 + hexX * 0.14) + "px;margin-top:" + (j * hexY + hexY * 0.14) + "px;background-size:cover;background-image: url(img/s" + rnd + ".png);'></div>");
					$("#dx" + i + "y" + j).click(snowOnClick);
					$("#dx" + i + "y" + j).attr("canClear", "F");
					$("#dx" + i + "y" + j).addClass("sparkley last");
				}
			}
		} else {
			for (var j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					var rnd = getRandom(snowTypeNumber);
					$("#back").append("<div id='dx" + i + "y" + j + "' name='" + rnd + "' style='height:" + snowY + "px;width:" + snowX + "px;position:absolute;margin-left:" + (i * hexX * 3 / 4 + hexX * 0.14) + "px;margin-top:" + (hexY / 2 + j * hexY + hexY * 0.14) + "px;background-size:cover;background-image: url(img/s" + rnd + ".png);'></div>");
					$("#dx" + i + "y" + j).click(snowOnClick);
					$("#dx" + i + "y" + j).attr("canClear", "F");
					$("#dx" + i + "y" + j).addClass("sparkley last");
				}
			}
		}
	}
	checkAllClear();
}

var c1, c2;
//表示第一张图片开始的路径是否要消除，第二张图片开始的路径是否要消除
function eliminate(i1, i2) {
	//根据id提取坐标
	var id1 = i1;
	var id2 = i2;
	var tmp = id1.split('y');
	var y1 = parseInt(tmp[1]);
	var x1 = parseInt(tmp[0].substring(2));
	tmp = id2.split('y');
	var y2 = parseInt(tmp[1]);
	var x2 = parseInt(tmp[0].substring(2));
	setTimeout('c1=canClear(' + x1 + ',' + y1 + ')', 300);
	setTimeout('c2=canClear(' + x2 + ',' + y2 + ')', 300);
	setTimeout('if(c1||c2){downSnow();}else{exchangeSnowPlace();}secondSnow = null;firstSnow = null;c1=null;c2=null;', 350);
}

//判断某个雪花开始遍历的连线能消除，能就消除
function canClear(x, y) {
	var result = false;
	var line1 = 0;
	var line2 = 0;
	var line3 = 0;
	//alert("#dx" + x + "y" + y);
	var snowPic = $("#dx" + x + "y" + y).attr("name");
	var xtop = y,
		xbottom = y;
	var xleft = x,
		xright = x,
		y2 = y,
		xleft2 = x,
		xright2 = x,
		y3 = y;

	//向上方向遍历
	for (var i = y - 1; i >= 0; i--) {
		//若地图为空或间断，退出循环
		if (map[x][i] == 0) {
			break;
		}
		//alert($("#dx" + x + "y" + i).attr("name")+"??"+snowPic);
		if ($("#dx" + x + "y" + i).attr("name") == snowPic) {
			line1++;
			xtop = i;
		} else {
			break;
		}
	}
	//向下
	for (var i = y + 1; i < map[x].length; i++) {
		//若地图为空或间断，退出循环
		if (map[x][i] == 0) {
			break;
		}
		//alert($("#dx" + x + "y" + i).attr("name")+"??"+snowPic);
		if ($("#dx" + x + "y" + i).attr("name") == snowPic) {
			line1++;
			xbottom = i;
		} else {
			break;
		}
	}
	//alert(line1+","+xtop+"="+xbottom);

	//向左上方向遍历
	var ytmp = y;
	for (var i = x - 1; i >= 0; i--) {
		if ((i + 1) % 2 == 0) {
			ytmp--;
			if (ytmp < 0) {
				break;
			}
		}
		//alert(i+"左上"+ytmp);
		//若地图为空或间断，退出循环
		if (map[i][ytmp] == 0) {
			break;
		}
		//alert($("#dx" + x + "y" + i).attr("name")+"??"+snowPic);
		if ($("#dx" + i + "y" + ytmp).attr("name") == snowPic) {
			line2++;
			xleft = i;
			y2 = ytmp;
		} else {
			break;
		}
	}
	//向右下
	ytmp = y;
	for (var i = x + 1; i < map.length; i++) {
		//若地图为空或间断，退出循环
		if ((i - 1) % 2 != 0) {
			ytmp++;
			if (ytmp > map[x].length) {
				break;
			}
		}
		if (map[i][ytmp] == 0) {
			break;
		}
		//alert($("#dx" + x + "y" + i).attr("name")+"??"+snowPic);
		if ($("#dx" + i + "y" + ytmp).attr("name") == snowPic) {
			line2++;
			xright = i;
		} else {
			break;
		}
	}

	//向左下方向遍历
	ytmp = y;
	for (var i = x - 1; i >= 0; i--) {
		if ((i + 1) % 2 != 0) {
			ytmp++;
			if (ytmp >= map[i].length) {
				break;
			}
		}
		//alert(i+"左上"+ytmp);
		//若地图为空或间断，退出循环
		if (map[i][ytmp] == 0) {
			break;
		}
		//alert($("#dx" + x + "y" + i).attr("name")+"??"+snowPic);
		if ($("#dx" + i + "y" + ytmp).attr("name") == snowPic) {
			line3++;
			xleft2 = i;
			y3 = ytmp;
		} else {
			break;
		}
	}
	//向右上
	ytmp = y;
	for (var i = x + 1; i < map.length; i++) {
		//若地图为空或间断，退出循环
		if ((i - 1) % 2 == 0) {
			ytmp--;
			if (ytmp < 0) {
				break;
			}
		}
		if (map[i][ytmp] == 0) {
			break;
		}
		//alert($("#dx" + x + "y" + i).attr("name")+"??"+snowPic);
		if ($("#dx" + i + "y" + ytmp).attr("name") == snowPic) {
			line3++;
			xright2 = i;
		} else {
			break;
		}
	}
	if (line1 >= 2) {
		for (var i = xtop; i <= xbottom; i++) {
			exploreDiv(x, i);
			$("#dx" + x + "y" + i).css("backgroundImage", "url('img/null.png')");
			$("#dx" + x + "y" + i).attr("canClear", "T");
		}
		result = true;
	}

	if (line2 >= 2) {
		for (var i = xleft; i <= xright; i++) {
			exploreDiv(i, y2);
			$("#dx" + i + "y" + y2).css("backgroundImage", "url('img/null.png')");
			$("#dx" + i + "y" + y2).attr("canClear", "T")
			if (i % 2 != 0) {
				y2++;
			}
		}
		result = true;
	}

	if (line3 >= 2) {
		for (var i = xleft2; i <= xright2; i++) {
			exploreDiv(i, y3);
			$("#dx" + i + "y" + y3).css("backgroundImage", "url('img/null.png')");
			$("#dx" + i + "y" + y3).attr("canClear", "T")
			if (i % 2 == 0) {
				y3--;
			}
		}
		result = true;
	}
	return result;
}

function exploreDiv(x, y) {

}

//交换2位置
function exchangeSnowPlace() {
	var xx = $("#world").offset().left;
	var yy = $("#world").offset().top;
	var x2 = secondSnow.offset().left;
	var x1 = firstSnow.offset().left;
	var y2 = secondSnow.offset().top;
	var y1 = firstSnow.offset().top;
	secondSnow.animate({
		marginTop: (y1 - yy) + 'px',
		marginLeft: (x1 - xx) + 'px'
	}, 300);
	firstSnow.animate({
		marginTop: (y2 - yy) + 'px',
		marginLeft: (x2 - xx) + 'px'
	}, 300);
	var id1 = firstSnow.attr("id");
	var id2 = secondSnow.attr("id");
	firstSnow.attr("id", id2);
	secondSnow.attr("id", id1);
	setTimeout("canChoose=true;", 300);
}

/**
根据消掉的数量来加分
*/
function getScore(number, times) {
	if (!isGameStart)
		return;
	//alert(isGameStart);
	score += number + times;
	for (var i = 3; i < clearAmount; i++) {
		score += i - 4;
	}
	clearAmount = 0;
	$("#scoreDiv").empty();
	$("#scoreDiv").append("Score:" + score);
	//alert(number+"  "+times);
}

function downSnow() {
	eliminateSoundOpen();
	var clearMax = 0;
	for (var i = 0; i < map.length; i++) {
		var que = new Queue();
		var zeroPo = 0;
		for (var j = 0; j < map[i].length; j++) {
			if (map[i][j] != 0) {
				zeroPo = j;
				break;
			}
		}
		for (var j = map[i].length - 1; j >= 0; j--) {
			if (map[i][j] == 0) {
				continue;
			}
			var thisDiv = $("#dx" + i + "y" + j);
			if (thisDiv.attr("canClear") == "T") {
				//将每竖列可以消除的图片放到一个数组队列里
				//如果大于1则切换背景
				if (map[i][j] == 3 && isGameStart) {
					map[i][j] --;
					$("#x" + i + "y" + j).css("backgroundImage", "url(img/snowBg" + map[i][j] + ".png)");
					//添加个特效
					clearAllAmount++;
					addOrangeEffect(i, j);
				} else
				if (map[i][j] == 2 && isGameStart) {
					map[i][j] --;
					$("#x" + i + "y" + j).css("backgroundImage", "url(img/snowBg" + map[i][j] + ".png)");
					//添加个特效
					clearAllAmount++;
					addGreenEffect(i, j);
				} else
				if (map[i][j] == 1 && isGameStart) {
					//添加个特效
					clearAllAmount++;
					addBlueEffect(i, j);
				}
				//消除数量增加
				clearAmount++;
				que.EnQueue(thisDiv);
			} else {
				//如果该竖列有要消除的图片
				if (que.GetSize() > 0) {
					var emptyDiv = que.DeQueue();
					var mT = emptyDiv.css("marginTop");
					emptyDiv.css("marginTop", thisDiv.css("marginTop"));
					var id1 = thisDiv.attr("id");
					var id2 = emptyDiv.attr("id");
					var x1 = parseInt(id1.split("y")[1]);
					var x2 = parseInt(id2.split("y")[1]);
					thisDiv.attr("id", id2);
					emptyDiv.attr("id", id1);
					que.EnQueue(emptyDiv);
					thisDiv.animate({
						marginTop: parseInt(mT) + 'px'
					}, hexY * 2 * (x2 - x1));
					if (clearMax < x2 - x1) {
						clearMax = x2 - x1;
					}
				}
			}
		}
		var frontZero = 0;
		for (var j = 0; j < map[i].length; j++) {
			if (map[i][j] == 0) {
				frontZero++;
			} else {
				break;
			}
		}
		var queLen = que.GetSize();
		if (clearMax < queLen) {
			clearMax = queLen;
		}
		for (var j = que.GetSize() - 1; j >= 0; j--) {
			var thisDiv = que.DeQueue();
			var pn = getRandom(snowTypeNumber);
			var pad = 0; //在上方的偏移位置
			if (i % 2 == 0) {
				pad = (frontZero - zeroPo + 0.14) * hexY;
			} else {
				pad = (frontZero - zeroPo + 0.64) * hexY;
			}
			thisDiv.attr("canClear", "F");
			thisDiv.attr("name", "" + pn);
			thisDiv.css("backgroundImage", "url(img/s" + pn + ".png)")
				//thisDiv.attr("id", "dx" + i + "y" + (j+frontZero));
			var tmph = parseInt(thisDiv.attr("id").split("y")[1]);
			thisDiv.css("marginTop", (hexY * (j - queLen) + pad) + "px"); //j - queLen
			thisDiv.animate({
				marginTop: (hexY * tmph + pad) + 'px'
			}, (hexY * 2 * (tmph - j + queLen)));
		}
	}
	getScore(clearAmount, clearTimes);
	setTimeout("checkAllClear();", hexY * 2.5 * clearMax);
}

//检查整个盘面是不是已经可以消除
function checkAllClear() {
	var haveClear = false;
	for (var i = 0; i < map.length; i++) {
		for (var j = map[i].length - 1; j >= 0; j--) {
			if (canClear(i, j)) {
				haveClear = true;
			}
		}
	}
	if (!haveClear) {
		clearTimes = 1;
		canChoose = true;
		if (!isGameStart) {
			clearTimes = 0;
			clearAmount = 0;
			isGameStart = true;
		} //alert(isGameStart);
		//isGameStart=true;
	} else {
		clearTimes++;
		downSnow();
	}
}

var effectDiv = new EffQueue();

function addGreenEffect(x, y) {
//	$('body').append('<div class="halogreen" id="e' + clearAllAmount + '" style="position:absolute;margin-left:500px;margin-top:0px;"></div>');
//	var leftt = parseInt($("#dx" + x + "y" + y).css("marginLeft")) - 25;
//	var topp = parseInt($("#dx" + x + "y" + y).css("marginTop")) - 50;
//	$("#e" + clearAllAmount).css("marginLeft", leftt);
//	$("#e" + clearAllAmount).css("marginTop", topp);
//	effectDiv.EnQueue($("#e" + clearAllAmount));
//	setTimeout('effectDiv.DeQueue().remove();', 500);
}

function addBlueEffect(x, y) {
	$('body').append('<div class="haloblue" id="e' + clearAllAmount + '" style="position:absolute;margin-left:500px;margin-top:0px;"></div>');
	var leftt = parseInt($("#dx" + x + "y" + y).css("marginLeft")) - 25;
	var topp = parseInt($("#dx" + x + "y" + y).css("marginTop")) - 50;
	$("#e" + clearAllAmount).css("marginLeft", leftt).css("marginTop", topp);;
	$("#e" + clearAllAmount).css("width",snowX).css("height",snowY).css("width",snowX)//-------------------
	effectDiv.EnQueue($("#e" + clearAllAmount));
	setTimeout('effectDiv.DeQueue().remove();', 500);
}

function addOrangeEffect(x, y) {
//	$('body').append('<div class="haloorange" id="e' + clearAllAmount + '" style="position:absolute;margin-left:500px;margin-top:0px;"></div>');
//	var leftt = parseInt($("#dx" + x + "y" + y).css("marginLeft")) - 25;
//	var topp = parseInt($("#dx" + x + "y" + y).css("marginTop")) - 50;
//	$("#e" + clearAllAmount).css("marginLeft", leftt);
//	$("#e" + clearAllAmount).css("marginTop", topp);
//	effectDiv.EnQueue($("#e" + clearAllAmount));
//	setTimeout('effectDiv.DeQueue().remove();', 500);
}