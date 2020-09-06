var arr = [0,0,0,0,0,0,0,0,0];
var line = [0,0,0,0,0,0,0,0];
var f = 0;
var count = 0;
var flag = 0;
var p_1score = 0, p_2score = 0, draws = 0;
function play(id) {
	document.getElementById(id).innerHTML = 'X';
	document.getElementById(id).onclick = "";
	comp(id);
}

function comp(id) {
	var no = Number(id[2]) - 1;
	arr[no] = 1;
	checkwin(id);
	for(var i=0; i<=6; i+=3) {
		if ((arr[i] != 0) && (arr[i+1] != 0) && (arr[i+2] != 0)) {
			line[(i/3)] = 1;
		}
	}
	for(var i=0; i<3; i++) {
		if ((arr[i] != 0) && (arr[i+3] != 0) && (arr[i+6] != 0)) {
			line[(i + 3)] = 1;
		}
	}
	if((arr[0] != 0) && (arr[4] != 0) && (arr[8] != 0)) {
		line[6] = 1;
	}
	if((arr[2] != 0) && (arr[4] != 0) && (arr[6] != 0)) {
		line[7] = 1;
	}
	if (f == 0) {
		if (count == 0) {
			if(id == 'c_5') {
				document.getElementById('c_1').innerHTML = 'O';
				document.getElementById('c_1').onclick = "";
				arr[0] = -1;
			}
			else {
				document.getElementById('c_5').innerHTML = 'O';
				document.getElementById('c_5').onclick = "";
				arr[4] = -1
			}
		}
		else {
			if(line[0] == 0) {
				if((arr[0] == arr[1]) && (arr[0] != 0)) {
					document.getElementById('c_3').innerHTML = 'O';
					document.getElementById('c_3').onclick = "";
					flag = 1;
					arr[2] = -1;
				}
				else if((arr[0] == arr[2]) && (arr[0] != 0)) {
					document.getElementById('c_2').innerHTML = 'O';
					document.getElementById('c_2').onclick = "";
					flag = 1;
					arr[1] = -1;
				}
				else if((arr[1] == arr[2]) && (arr[1] != 0)) {
					document.getElementById('c_1').innerHTML = 'O';
					document.getElementById('c_1').onclick = "";
					flag = 1;
					arr[0] = -1;
				}
			}
			if (flag == 0) {
				if(line[1] == 0) {
					if((arr[3] == arr[4]) && (arr[3] != 0)) {
						document.getElementById('c_6').innerHTML = 'O';
						document.getElementById('c_6').onclick = "";
						flag = 1;
						arr[5] = -1;
					}
					else if((arr[3] == arr[5]) && (arr[3] != 0)) {
						document.getElementById('c_5').innerHTML = 'O';
						document.getElementById('c_5').onclick = "";
						flag=1;
						arr[4] = -1;
					}
					else if((arr[4] == arr[5]) && (arr[4] != 0)) {
						document.getElementById('c_4').innerHTML = 'O';
						document.getElementById('c_4').onclick = "";
						flag=1;
						arr[3] = -1;
					}
				}
			}
			if (flag == 0) {
				if(line[2] == 0) {
					if((arr[6] == arr[7]) && (arr[6] != 0)) {
						document.getElementById('c_9').innerHTML = 'O';
						document.getElementById('c_9').onclick = "";
						flag = 1;
						arr[8] = -1;
					}
					else if((arr[6] == arr[8]) && (arr[6] != 0)) {
						document.getElementById('c_8').innerHTML = 'O';
						document.getElementById('c_8').onclick = "";
						flag=1;
						arr[7] = -1;
					}
					else if((arr[7] == arr[8]) && (arr[7] != 0)) {
						document.getElementById('c_7').innerHTML = 'O';
						document.getElementById('c_7').onclick = "";
						flag=1;
						arr[6] = -1;
					}
				}
			}
			if (flag == 0) {
				if(line[3] == 0) {
					if((arr[0] == arr[3]) && (arr[3] != 0)) {
						document.getElementById('c_7').innerHTML = 'O';
						document.getElementById('c_7').onclick = "";
						flag = 1;
						arr[6] = -1;
					}
					else if((arr[0] == arr[6]) && (arr[0] != 0)) {
						document.getElementById('c_4').innerHTML = 'O';
						document.getElementById('c_4').onclick = "";
						flag=1;
						arr[3] = -1;
					}
					else if((arr[3] == arr[6]) && (arr[3] != 0)) {
						document.getElementById('c_1').innerHTML = 'O';
						document.getElementById('c_1').onclick = "";
						flag=1;
						arr[0] = -1;
					}
				}
			}
			if (flag == 0) {
				if(line[4] == 0) {
					if((arr[1] == arr[4]) && (arr[4] != 0)) {
						document.getElementById('c_8').innerHTML = 'O';
						document.getElementById('c_8').onclick = "";
						flag = 1;
						arr[7] = -1;
					}
					else if((arr[1] == arr[7]) && (arr[1] != 0)) {
						document.getElementById('c_5').innerHTML = 'O';
						document.getElementById('c_5').onclick = "";
						flag=1;
						arr[4] = -1;
					}
					else if((arr[7] == arr[4]) && (arr[7] != 0)) {
						document.getElementById('c_2').innerHTML = 'O';
						document.getElementById('c_2').onclick = "";
						flag=1;
						arr[1] = -1;
					}
				}
			}
			if (flag == 0) {
				if(line[5] == 0) {
					if((arr[2] == arr[5]) && (arr[2] != 0)) {
						document.getElementById('c_9').innerHTML = 'O';
						document.getElementById('c_9').onclick = "";
						flag = 1;
						arr[8] = -1;
					}
					else if((arr[2] == arr[8]) && (arr[2] != 0)) {
						document.getElementById('c_6').innerHTML = 'O';
						document.getElementById('c_6').onclick = "";
						flag=1;
						arr[5] = -1;
					}
					else if((arr[5] == arr[8]) && (arr[5] != 0)) {
						document.getElementById('c_3').innerHTML = 'O';
						document.getElementById('c_3').onclick = "";
						flag=1;
						arr[2] = -1;
					}
				}
			}
			if (flag == 0) {
				if(line[7] == 0) {
					if((arr[2] == arr[4]) && (arr[2] != 0)) {
						document.getElementById('c_7').innerHTML = 'O';
						document.getElementById('c_7').onclick = "";
						flag = 1;
						arr[6] = -1;
					}
					else if((arr[2] == arr[6]) && (arr[2] != 0)) {
						document.getElementById('c_5').innerHTML = 'O';
						document.getElementById('c_5').onclick = "";
						flag=1;
						arr[4] = -1;
					}
					else if((arr[4] == arr[6]) && (arr[4] != 0)) {
						document.getElementById('c_3').innerHTML = 'O';
						document.getElementById('c_3').onclick = "";
						flag=1;
						arr[2] = -1;
					}
				}
			}
			if (flag == 0) {
				for(i=0; i<9; i+=2) {
					if(arr[i] == 0) {
						document.getElementById('c_' + (i+1)).innerHTML = 'O';
						document.getElementById('c_' + (i+1)).onclick = "";
						arr[i] = -1;
						break;
					}
				}
			}
		}
		count++;
		flag = 0;
		checkwin(id);
	}
}

function checkwin(id) {
	if((arr[0] == arr[4]) && (arr[0] == arr[8]) && (arr[0] != 0)) {
		switch(arr[0]) {
			case 1:
				document.getElementById("d_1").innerHTML = "You win";
				document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

				win(1);
				break;
			case -1:
				document.getElementById("d_1").innerHTML = "Computer wins";
				document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

				win(-1);
				break;

		}
	}
	else if((arr[2] == arr[4]) && (arr[2] == arr[6]) && (arr[2] != 0)) {
		switch(arr[2]) {
			case 1:
				document.getElementById("d_1").innerHTML = "You win";
				document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";

				win(1);
				break;
			case -1:
				document.getElementById("d_1").innerHTML = "Computer wins";
				document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";
	
				win(-1);
				break;

		}
	}
	for(var i=0; i<=6; i+=3) {
		if((arr[i] == arr[i+1]) && (arr[i] == arr[i+2])) {
			switch(arr[i]) {
				case 0:
					continue;
					break;

				case 1:
					document.getElementById("d_1").innerHTML = "You win";
					if (i == 0) {
						document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_2").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 3) {
						document.getElementById("c_4").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_6").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 6) {
						document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_8").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

					}
					win(1);
					break;

				case -1:
					document.getElementById("d_1").innerHTML = "Computer wins";
					if (i == 0) {
						document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_2").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 3) {
						document.getElementById("c_4").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_6").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 6) {
						document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_8").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

					}
					win(-1);
					break;
			}
			break;
		}
	}
	for(i=0; i<3; i++) {
		 if((arr[i] == arr[i+3]) && (arr[i] == arr[i+6])) {
			switch(arr[i]) {
				case 0:
					continue;
					break;

				case 1:
					document.getElementById("d_1").innerHTML = "You win";
					if (i == 0) {
						document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_4").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 1) {
						document.getElementById("c_2").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_8").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 2) {
						document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_6").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

					}
					win(1);
					break;

				case -1:
					document.getElementById("d_1").innerHTML = "Computer wins";
					if (i == 0) {
						document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_4").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 1) {
						document.getElementById("c_2").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_8").style = "color:red; border:2px solid;border-radius:100px;";

					}
					else if(i == 2) {
						document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_6").style = "color:red; border:2px solid;border-radius:100px;";
						document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

					}
					win(-1);
					break;
			}
			break;
		}
	}
	if((count == 5) && (f == 0)) {
		document.getElementById("d_1").innerHTML = "Draw";

	win(0);
	}
}

function win(score) {
	for(var i=1; i<=9; i++) {
		document.getElementById("c_" + i).onclick = "";
	}

	document.getElementById("b_1").setAttribute('class', 'button');
	document.getElementById("b_1").setAttribute('onclick', 'refresh()');

	f=1;
	if (score == 1) {
		p_1score++;
	}
	else if(score == -1) {
		p_2score++;
	}
	else {
		draws++;
	}
}

function refresh() {
	var id;
	var att;
	var name;
	arr = [0,0,0,0,0,0,0,0,0];
	line = [0,0,0,0,0,0,0,0];
	count = 0;
	f = 0;
	for(var i=1; i<10; i++) {
		name = "c_" + i;
		document.getElementById("c_" + i).innerHTML = "&nbsp&nbsp";
	}
		document.getElementById("c_1").setAttribute('onclick', 'play("c_1")');
		document.getElementById("c_2").setAttribute('onclick', 'play("c_2")');
		document.getElementById("c_3").setAttribute('onclick', 'play("c_3")');
		document.getElementById("c_4").setAttribute('onclick', 'play("c_4")');
		document.getElementById("c_5").setAttribute('onclick', 'play("c_5")');
		document.getElementById("c_6").setAttribute('onclick', 'play("c_6")');
		document.getElementById("c_7").setAttribute('onclick', 'play("c_7")');
		document.getElementById("c_8").setAttribute('onclick', 'play("c_8")');
		document.getElementById("c_9").setAttribute('onclick', 'play("c_9")');

		document.getElementById("c_1").setAttribute('style', 'border-right: 1px solid; border-bottom: 1px solid;' );
		document.getElementById("c_2").setAttribute('style', 'border-right: 1px solid; border-bottom: 1px solid; border-left:1px solid;' );
		document.getElementById("c_3").setAttribute('style', 'border-left: 1px solid; border-bottom: 1px solid;' );
		document.getElementById("c_4").setAttribute('style', 'border-right: 1px solid; border-bottom: 1px solid; border-top:1px solid;' );
		document.getElementById("c_5").setAttribute('style', 'border:1px solid;' );
		document.getElementById("c_6").setAttribute('style', 'border-left: 1px solid; border-bottom: 1px solid; border-top:1px solid;' );
		document.getElementById("c_7").setAttribute('style', 'border-right: 1px solid; border-top: 1px solid;' );
		document.getElementById("c_8").setAttribute('style', 'border-right: 1px solid; border-top: 1px solid; border-left:1px solid;' );
		document.getElementById("c_9").setAttribute('style', 'border-left: 1px solid; border-top: 1px solid;' );

		document.getElementById("b_1").value = "Rematch";
		document.getElementById("b_1").setAttribute('class', 'Unclicked');
		document.getElementById("b_1").setAttribute('onclick', '');


		document.getElementById("d_1").innerHTML = "";
}

function checkscore() {
	alert("\tPlayer: "+ p_1score +"\n\tComputer: "+ p_2score +"\n\tDraws: "+ draws);
}