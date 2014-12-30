document.onselectstart = retFalse;

document.onmousedown = disableRtClick;

document.onkeyup=disablePrtScr;

//Right click disabled
function disableRtClick(event){
	if(event.button==2){
		alert("Sorry..right click disabled..");
		return false;
	}
}

//Print Screen disabled
function disablePrtScr(e){
	if(e.which==44){
		alert("Sorry..Print Screen Is Blocked.");
		return false;
	}
}

function retFalse(){
	return false;
}