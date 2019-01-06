var num = 0;


function myFunction(elmnt,clr,id) {
  elmnt.style.color = clr;
  var num_x = elmnt.childElementCount;
  if (num_x == 0){
  var x = document.createElement("IMG");
  x.setAttribute("src", "X.png");
  x.setAttribute("width", "30");
  x.setAttribute("height", "30");
  x.setAttribute("alt", "The Pulpit Rock");
  x.setAttribute("id","x");
  var button_num = document.getElementById(id);
  button_num.appendChild(x);
  num+=1;
  if (num < 5){
  computer_plays();}}
}

function computer_plays(){
	
	
	var quad_num = (Math.floor(Math.random() * 10)); //A number between 0 and 9
	if (quad_num==0){quad_num=1;}
	var id = quad_num.toString();
	var elemnt = document.getElementById(id);
	var child_num = elemnt.childElementCount;
	
	while (child_num != 0){
		var quad_num = (Math.floor(Math.random() * 10)); //A number between 0 and 9
	if (quad_num==0){quad_num=1;}
	var id = quad_num.toString();
	var elemnt = document.getElementById(id);
	var child_num = elemnt.childElementCount;
	}
	
	
	
	if (elemnt.childElementCount == 0){
  var x = document.createElement("IMG");
  x.setAttribute("src", "O.png");
  x.setAttribute("width", "30");
  x.setAttribute("height", "30");
  x.setAttribute("alt", "The Pulpit Rock");
  x.setAttribute("id","o");
  var button_num = document.getElementById(id);
  button_num.appendChild(x);
	//computer_plays = false;
	}
}