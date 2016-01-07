function leftUp(x, y, x2) {
	var jo = 1 - x % 2;
	return y - parseInt((x - x2 + jo) / 2);
}

function leftDown(x, y, x2) {
	var jo = x % 2;
	return y + parseInt((x - x2 + jo) / 2);
}

function rightDown(x, y, x2) {
	var jo = x % 2;
	return y + parseInt((x2 - x + jo) / 2);
}

function rightUp(x, y, x2) {
	var jo = 1 - x % 2;
	return y - parseInt((x2 - x + jo) / 2);
}

function canHint(x, y) {
	var thisDiv = $("#dx" + x + "y" + y);
	var theName = thisDiv.attr("name");
	if (map[y][x] == 0) {
		return false;
	}
	//向上方向
	//情况一：001情况
	//在最顶部2格不可能有这个情况,先排除这2个

	if (y > 1) {
		//001情况，相邻是一样的图片
		if ($("#dx" + x + "y" + (y - 1)).attr("name") == theName) {
			//001情况第三格不能是空格子
			if (map[x][y - 2] != 0) {
				//上方第3个格子
				if ($("#dx" + x + "y" + (y - 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + x + "y" + (y - 3));
					hintDiv2 = $("#dx" + x + "y" + (y - 2));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//在偶数列
				if (x % 2 == 0) {
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y - 3)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 3));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + (y - 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 2));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y - 3)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 3));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y - 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 2));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//
				} else {
					//在奇数列
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y - 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 2));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + (y - 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 1));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y - 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 1));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y - 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 2));
						hintDiv2 = $("#dx" + x + "y" + (y - 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
				}
			}

		}
		if ($("#dx" + x + "y" + (y - 2)).attr("name") == theName) {
			//情况二101状态
			if (map[x][y - 1] != 0) {
				if (x % 2 == 0) {
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y - 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 2));
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + (y - 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 1));
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y - 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 2));
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y - 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 1));
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//
				} else {
					//在奇数列
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y - 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y - 1));
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + y).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + y);
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + y).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + y);
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y - 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y - 1));
						hintDiv2 = $("#dx" + x + "y" + (y - 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
				}
			}
		}
	}

	//向下001情况
	if (y < map[x].length - 2) {
		if ($("#dx" + x + "y" + (y + 1)).attr("name") == theName) {
			//001情况第三格不能是空格子
			if (map[x][y + 2] != 0) {
				//下方第3个格子
				if ($("#dx" + x + "y" + (y + 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + x + "y" + (y + 3));
					hintDiv2 = $("#dx" + x + "y" + (y + 2));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//在偶数列
				if (x % 2 == 0) {
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y + 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 2));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + (y + 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 1));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y + 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 2));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y + 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 1));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//
				} else {
					//在奇数列
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y + 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 2));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + (y + 3)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 3));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y + 3)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 3));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y + 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 2));
						hintDiv2 = $("#dx" + x + "y" + (y + 2));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
				}
			}
		}
		//101状态
		if ($("#dx" + x + "y" + (y + 2)).attr("name") == theName) {
			if (map[x][y + 1] != 0) {
				//在偶数列
				if (x % 2 == 0) {
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y + 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 1));
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + y).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + y);
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y + 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 1));
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + y).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + y);
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//
				} else {
					//在奇数列
					//左边2个
					if ($("#dx" + (x - 1) + "y" + (y + 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 1));
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x - 1) + "y" + (y + 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x - 1) + "y" + (y + 2));
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					//右边2个
					if ($("#dx" + (x + 1) + "y" + (y + 2)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 2));
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
					if ($("#dx" + (x + 1) + "y" + (y + 1)).attr("name") == theName) {
						hintDiv1 = $("#dx" + (x + 1) + "y" + (y + 1));
						hintDiv2 = $("#dx" + x + "y" + (y + 1));
						hintDiv1.addClass("rotate");
						hintDiv2.addClass("rotate");
						return true;
					}
				}
			}
		}
	}

	//左上001情况
	if (y > 0 && x > 1) {
		if ($("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1)).attr("name") == theName) {
			//001情况第三格不能是空格子
			if (map[x - 2][y - 1] != 0) {
				//上方1个格子
				if ($("#dx" + (x - 2) + "y" + (y - 2)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 2) + "y" + (y - 2));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个格子
				if ($("#dx" + (x - 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 2) + "y" + y);
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边2个
				if ($("#dx" + (x - 3) + "y" + leftUp(x, y, x - 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 3) + "y" + leftUp(x, y, x - 3));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				if ($("#dx" + (x - 3) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 3) + "y" + y);
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//右边1个
				if ($("#dx" + (x - 1) + "y" + rightUp(x, y - 1, x - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 1) + "y" + rightUp(x, y - 1, x - 1));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
			}
		}
		//101状态
		if ($("#dx" + (x - 2) + "y" + (y - 1)).attr("name") == theName) {
			if (map[x - 1][leftUp(x, y, x - 1)] != 0) {
				//上方1个
				if ($("#dx" + (x - 1) + "y" + leftUp(x, y - 1, x - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 1) + "y" + leftUp(x, y - 1, x - 1));
					hintDiv2 = $("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个
				if ($("#dx" + (x - 1) + "y" + leftUp(x, y + 1, x - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 1) + "y" + leftUp(x, y + 1, x - 1));
					hintDiv2 = $("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//右边1个
				if ($("#dx" + x + "y" + (y - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + x + "y" + (y - 1));
					hintDiv2 = $("#dx" + (x - 1) + "y" + rightUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边1个
				if ($("#dx" + (x - 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 2) + "y" + y);
					hintDiv2 = $("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
			}
		}
	}
	//右上001情况
	if (y > 0 && x < map.length - 2) {
		if ($("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1)).attr("name") == theName) {
			//001情况第三格不能是空格子
			if (map[x + 2][y - 1] != 0) {
				//上方1个格子
				if ($("#dx" + (x + 2) + "y" + (y - 2)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 2) + "y" + (y - 2));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个格子
				if ($("#dx" + (x + 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 2) + "y" + y);
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//右边2个
				if ($("#dx" + (x + 3) + "y" + rightUp(x, y, x + 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 3) + "y" + rightUp(x, y, x + 3));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				if ($("#dx" + (x + 3) + "y" + rightDown(x + 2, y, x + 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 3) + "y" + rightDown(x + 2, y, x + 3));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边1个
				if ($("#dx" + (x + 1) + "y" + rightUp(x, y - 1, x + 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 1) + "y" + rightUp(x, y - 1, x + 1));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
			}
		}
		//101状态
		if ($("#dx" + (x + 2) + "y" + (y - 1)).attr("name") == theName) {
			if (map[x + 1][rightUp(x, y, x + 1)] != 0) {
				//上方1个
				if ($("#dx" + (x + 1) + "y" + rightUp(x, y - 1, x + 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 1) + "y" + rightUp(x, y - 1, x + 1));
					hintDiv2 = $("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个
				if ($("#dx" + (x + 1) + "y" + rightUp(x, y + 1, x + 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 1) + "y" + rightUp(x, y + 1, x + 1));
					hintDiv2 = $("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边1个
				if ($("#dx" + x + "y" + (y - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + x + "y" + (y - 1));
					hintDiv2 = $("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					//alert("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1));
					return true;
				}
				//右边1个
				if ($("#dx" + (x + 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 2) + "y" + y);
					hintDiv2 = $("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					//alert("#dx" + (x + 1) + "y" + rightUp(x, y, x + 1));
					return true;
				}
			}
		}
	}

	//左下001情况
	if (y < map[x].length - 1 && x > 1) {
		if ($("#dx" + (x - 1) + "y" + leftDown(x, y, x - 1)).attr("name") == theName) {
			//001情况第三格不能是空格子
			if (map[x - 2][y + 1] != 0) {
				//上方1个格子
				if ($("#dx" + (x - 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 2) + "y" + y);
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个格子
				if ($("#dx" + (x - 2) + "y" + (y + 2)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 2) + "y" + (y + 2));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边2个
				if ($("#dx" + (x - 3) + "y" + leftDown(x, y, x - 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 3) + "y" + leftDown(x, y, x - 3));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				if ($("#dx" + (x - 3) + "y" + leftDown(x, y - 1, x - 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 3) + "y" + leftDown(x, y - 1, x - 3));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//右边1个
				if ($("#dx" + (x - 1) + "y" + leftDown(x, y + 1, x - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 1) + "y" + leftDown(x, y + 1, x - 1));
					hintDiv2 = $("#dx" + (x - 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
			}
		}
		//101状态
		if ($("#dx" + (x - 2) + "y" + (y - 1)).attr("name") == theName) {
			if (map[x - 1][leftUp(x, y, x - 1)] != 0) {
				//上方1个
				if ($("#dx" + (x - 1) + "y" + leftUp(x, y - 1, x - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 1) + "y" + leftUp(x, y - 1, x - 1));
					hintDiv2 = $("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个
				if ($("#dx" + (x - 1) + "y" + leftUp(x, y + 1, x - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 1) + "y" + leftUp(x, y + 1, x - 1));
					hintDiv2 = $("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//右边1个
				if ($("#dx" + x + "y" + (y - 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + x + "y" + (y - 1));
					hintDiv2 = $("#dx" + (x - 1) + "y" + rightUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边1个
				if ($("#dx" + (x - 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x - 2) + "y" + y);
					hintDiv2 = $("#dx" + (x - 1) + "y" + leftUp(x, y, x - 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
			}
		}

	}
	//右下
	if (y < map[x].length - 1 && x < map.length - 2) {
		if ($("#dx" + (x + 1) + "y" + rightDown(x, y, x + 1)).attr("name") == theName) {
			//001情况第三格不能是空格子
			if (map[x + 2][y + 1] != 0) {
				//上方1个格子
				if ($("#dx" + (x + 2) + "y" + y).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 2) + "y" + y);
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//下方1个格子
				if ($("#dx" + (x + 2) + "y" + (y + 2)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 2) + "y" + (y + 2));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//you边2个
				if ($("#dx" + (x + 3) + "y" + rightDown(x, y, x + 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 3) + "y" + rightDown(x, y, x + 3));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				if ($("#dx" + (x + 3) + "y" + rightDown(x, y - 1, x + 3)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 3) + "y" + rightDown(x, y - 1, x + 3));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
				//左边1个
				if ($("#dx" + (x + 1) + "y" + rightDown(x, y + 1, x + 1)).attr("name") == theName) {
					hintDiv1 = $("#dx" + (x + 1) + "y" + rightDown(x, y + 1, x + 1));
					hintDiv2 = $("#dx" + (x + 2) + "y" + (y + 1));
					hintDiv1.addClass("rotate");
					hintDiv2.addClass("rotate");
					return true;
				}
			}
		}
	}
}

function scanAll() {
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