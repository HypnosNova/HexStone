function getAroundSnow(x, y) {
	var aroundArray = new Array();
	if (x % 2 == 0) {
		//如果是偶数
		if ($("#dx" + (x - 1) + "y" + (y - 1)).attr("name")) {
			aroundArray.push($("#dx" + (x - 1) + "y" + (y - 1)));
		}
		if ($("#dx" + (x - 1) + "y" + (y)).attr("name")) {
			aroundArray.push($("#dx" + (x - 1) + "y" + (y)));
		}

		if ($("#dx" + (x) + "y" + (y - 1)).attr("name")) {
			aroundArray.push($("#dx" + (x) + "y" + (y - 1)));
		}
		if ($("#dx" + (x) + "y" + (y + 1)).attr("name")) {
			aroundArray.push($("#dx" + (x) + "y" + (y + 1)));
		}

		if ($("#dx" + (x + 1) + "y" + (y)).attr("name")) {
			aroundArray.push($("#dx" + (x + 1) + "y" + (y)));
		}
		if ($("#dx" + (x + 1) + "y" + (y - 1)).attr("name")) {
			aroundArray.push($("#dx" + (x + 1) + "y" + (y - 1)));
		}
	} else {
		//如果是奇数
		if ($("#dx" + (x - 1) + "y" + (y)).attr("name")) {
			aroundArray.push($("#dx" + (x - 1) + "y" + (y)));
		}
		if ($("#dx" + (x - 1) + "y" + (y + 1)).attr("name")) {
			aroundArray.push($("#dx" + (x - 1) + "y" + (y + 1)));
		}

		if ($("#dx" + (x) + "y" + (y - 1)).attr("name")) {
			aroundArray.push($("#dx" + (x) + "y" + (y - 1)));
		}
		if ($("#dx" + (x) + "y" + (y + 1)).attr("name")) {
			aroundArray.push($("#dx" + (x) + "y" + (y + 1)));
		}

		if ($("#dx" + (x + 1) + "y" + (y + 1)).attr("name")) {
			aroundArray.push($("#dx" + (x + 1) + "y" + (y + 1)));
		}
		if ($("#dx" + (x + 1) + "y" + (y)).attr("name")) {
			aroundArray.push($("#dx" + (x + 1) + "y" + (y)));
		}
	}
	return aroundArray;
}

function scanAll() {
	if (hintDiv1) {
		hintDiv1.removeClass("rotate");
		hintDiv2.removeClass("rotate");
	}
	var findOne = false;
	for (var i = 0; i < map.length; i++) {
		for (var j = 0; j < map[i].length; j++) {
			if (map[i][j] == 0) {
				continue;
			}
			findOne = canHint(i, j);
			if (findOne) {
				//alert(i+","+j)
				return;

			}
		}
	}
}

function scanAll2() {
	if (hintDiv1) {
		hintDiv1.removeClass("rotate");
		hintDiv2.removeClass("rotate");
	}
	var findOne = false;
	var mid = Math.floor(Math.random() * map.length);
	for (var i = mid; i < map.length; i++) {
		for (var j = 0; j < map[i].length; j++) {
			if (map[i][j] == 0) {
				continue;
			}
			findOne = canHint(i, j);
			if (findOne) {
				//alert(i+","+j)
				return;

			}
		}
	}
	for (var i = 0; i < mid; i++) {
		for (var j = 0; j < map[i].length; j++) {
			if (map[i][j] == 0) {
				continue;
			}
			findOne = canHint(i, j);
			if (findOne) {
				//alert(i+","+j)
				return;

			}
		}
	}
}

function canHint(x, y) {
	var array = getAroundSnow(x, y);
	for (var i = 0; i < array.length; i++) {
		var tmp = $("#dx" + x + "y" + y).attr("name");
		$("#dx" + x + "y" + y).attr("name", array[i].attr("name"));
		array[i].attr("name", tmp);

		var result = canClear(x, y);

		tmp = $("#dx" + x + "y" + y).attr("name");
		$("#dx" + x + "y" + y).attr("name", array[i].attr("name"));
		array[i].attr("name", tmp);
		if (result) {
			for (var i2 = 0; i2 < map.length; i2++) {
				for (var j2 = 0; j2 < map[i2].length; j2++) {
					if (map[i2][j2] == 0) {
						continue;
					}
					$("#dx" + i2 + "y" + j2).css("backgroundImage", "url('img/s" + $("#dx" + i2 + "y" + j2).attr("name") + ".png')");
					$("#dx" + i2 + "y" + j2).attr("canClear", "F");
				}
			}
			hintDiv1 = $("#dx" + x + "y" + y);
			hintDiv2 = array[i];
			array[i].addClass("rotate");
			$("#dx" + x + "y" + y).addClass("rotate");
			return true;
		}
	}
	return false;
}