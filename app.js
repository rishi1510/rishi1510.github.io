var arr = [0,0,0,0,0,0,0,0,0];
var count = 0;
var f = 0;
var p_1score = 0, p_2score = 0;
function play(id) {
	if(count % 2 == 0) {
		document.getElementById(id).innerHTML = 'X';
	}
	else {
		document.getElementById(id).innerHTML = 'O';
	}
	checkwin(id);
	document.getElementById(id).onclick = "";
}

function checkwin(id) {
	var no = Number(id[2]);
	if(count % 2 == 0) {
		arr[no-1] = 1;
	}
	else {
		arr[no-1] = -1;
	}
	count++;
	if((arr[0] == arr[4]) && (arr[0] == arr[8]) && (arr[0] != 0)) {
		switch(arr[0]) {
			case 1:
				document.getElementById("d_1").innerHTML = "Player 1 wins";
				document.getElementById("c_1").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_9").style = "color:red; border:2px solid;border-radius:100px;";

				win(1);
				break;
			case -1:
				document.getElementById("d_1").innerHTML = "Player 2 wins";
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
				document.getElementById("d_1").innerHTML = "Player 1 wins";
				document.getElementById("c_3").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_5").style = "color:red; border:2px solid;border-radius:100px;";
				document.getElementById("c_7").style = "color:red; border:2px solid;border-radius:100px;";

				win(1);
				break;
			case -1:
				document.getElementById("d_1").innerHTML = "Player 2 wins";
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
					document.getElementById("d_1").innerHTML = "Player 1 wins";
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
					document.getElementById("d_1").innerHTML = "Player 2 wins";
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
					document.getElementById("d_1").innerHTML = "Player 1 wins";
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
					document.getElementById("d_1").innerHTML = "Player 2 wins";
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
	if((count == 9) && (f == 0)) {
		document.getElementById("d_1").innerHTML = "Draw";
	document.getElementById("b_1").style = "background-color:green;";
	document.getElementById("b_1").setAttribute('onclick', 'refresh()');
		draws++;	
	}
}

function win(score) {
	for(var i=1; i<=9; i++) {
		document.getElementById("c_" + i).onclick = "";
	}
	document.getElementById("b_1").style = "background-color:green;";
	document.getElementById("b_1").setAttribute('onclick', 'refresh()');

	f=1;
	if (score == 1) {
		p_1score++;
	}
	else {
		p_2score++;
	}
}
function refresh() {
	var id;
	var att;
	var name;
	arr = [0,0,0,0,0,0,0,0,0];
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
		document.getElementById("b_1").style = "background-color:grey;";
		document.getElementById("b_1").setAttribute('onclick', '');

		document.getElementById("d_1").innerHTML = "";
}

function checkscore() {
	alert("Player 1: "+ p_1score +"\nPlayer 2: "+ p_2score);
}


