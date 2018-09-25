
var turntable = document.getElementById("turntable");
var pointer = document.getElementById("pointer");
var dontclick = true;
pointer.onclick = function () {
	if(dontclick === true){
	dontclick = false;
	var r = Math.floor(Math.random()*10);
	console.log(r);
	switch(r) {
	case 0 :{rotate(5,'提高白条额度');break;}
	case 1 :{rotate(0,'免单4999元');break;}
	case 2 :{rotate(1,'免单50元');break;}
	case 3 :{rotate(2,'免单10元');break;}
	case 4 :{rotate(3,'免单5元');break;}
	case 5 :{rotate(4,'免分期服务费');break;}
	default :{rotate(6,'未中奖');}
}
	}
}
function rotate(a,text) {
	turntable.style.transition = "all 5s";
	var rotadeg = 30 + 360*5 + (360/7)*a;
	turntable.style.transform = "rotateZ("+ rotadeg + "deg)";
	setTimeout(function delay(){
		turntable.style.transition = "all 0s";
		rotadeg -= 360*5;
		turntable.style.transform = "rotateZ("+ rotadeg + "deg)";
		alert(text);
		dontclick = true;
	},5000)
	
}

