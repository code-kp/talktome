var username=prompt("Your Name Please ");
var guru="Respected GuruJi";	
var inpText=document.getElementById("inp");
var output=document.getElementById("converDiv");

var inpclick=document.getElementById("askbtn");

inpText.focus();

inpclick.onclick=getInput;

inpText.onkeyup=function(e){
	if(e.which==13)
		getInput();
}

function getInput(){
	var text=inpText.value;

	if(text!="" && text!=" ")
		addOutput(inpText.value);

}

function addOutput(userText){
	var user="<b class='gray-text'>"+username+"</b> &raquo; "+userText+"<br/>";
	var guruji="<b class='orange-text'>"+guru+"</b> &raquo; "+gurujis()+"<br/><br/>";

	output.innerHTML += user+guruji;

	inpText.value="";
	output.scroll(0,1000);

	return true;
}

function gurujis(){
	var query=inpText.value;
	query=query.toLowerCase();
	query = reduceQuery(query);

	var result = query+"??? and what does that mean??";

	if(ans[query.toLowerCase()]){
		var rand=parseInt(Math.random()* ans[query.toLowerCase()].length);

		result = ans[query.toLowerCase()][rand];
	}

	return result;
}