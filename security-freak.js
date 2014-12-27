document.onselectstart = retFalse;

document.onmousedown = disableRtClick;

document.onkeyup=disablePrtScr;

function disableRtClick(event){
	if(event.button==2){
		alert("Sorry..right click disabled..");
		return false;
			
	}
}

function disablePrtScr(e){
	if(e.which==44){
		alert("Sorry..Print Screen Is Blocked.");
	}
}

function retFalse(){
	return false;
}