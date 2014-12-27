var retMess =[
	"Was a tough time getting challenged by you. Visit back soon..",
	"Was it boring, buddy??",
	"I suppose, you had fun here..",
	"And i thought..i would make your time special..my bad luck :'(",
	"Will remember you.."
];

window.onbeforeunload=function(){
	var randIndex=parseInt(Math.random()*retMess.length);

	return retMess[randIndex];
}