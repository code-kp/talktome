/*
@para	keywords introduced to GuruJi
	hello
	guruname
	username
	guruage
	userage
	marryuser
	marryme
	loveme
	loveuser
	aim
	abusal
	whose
	what
	prank
        finethankyou

*/

function reduceQuery(inp){

	if(inp.search("  ")+1>0)
		return "prank";

	//@param hello hi
	else if(inp.search("hello")+1>0 || inp.search("hi")+1>0 || inp.search("namaste")+1>0 || inp.search("ni hao")+1>0)
		return "hello";

	//@param guru name
	else if(inp.search("your")+1>0 && inp.search("name")+1>0)
		return "guruname";
	else if(inp.search("you")+1>0 && inp.search("call")+1>0)
		return "guruname";
	else if(inp.search("you")+1>0 && inp.search("name")+1>0)
		return "guruname";
	
	//@param user name revised
	else if(inp.search("name")+1>0 && inp.search("my")+1>0)
		return "username";
	else if(inp.search("me")+1>0 && inp.search("call")+1>0)
		return "username";
	else if(inp.search("me")+1>0 && inp.search("name")+1>0)
		return "username";

        else if(inp.search("how")+1>0 && inp.search("are")+1>0 && inp.search("you")+1>0)
                return "finethankyou";


	//@param whose
	else if(inp.search("name")+1>0)
		return "whose";
	
	//@param guru age asked
	else if(inp.search("your")+1>0 && inp.search("age")+1>0)
		return "guruage";
	else if(inp.search("old")+1>0 && inp.search("are")+1>0 && inp.search("you")+1>0)
		return "guruage";

	//@param guru is boy or girl
	else if((inp.search("you are")+1>0 || inp.search("you")+1>0) && (inp.search("boy")+1>0 || inp.search("girl")+1>0 || inp.search("male")+1>0 || inp.search("sex")+1>0))
		return "boyorgirl";

	//@param user age asked
	else if(inp.search("my")+1>0 && inp.search("age")+1>0)
		return "userage";
	else if(inp.search("old")+1>0 && inp.search("am")+1>0)
		return "userage";
	
	//@param marry me???
	else if(inp.search("marry")+1>0 && inp.search("you")+1>0 && inp.search("me")+1>0)
		return "marryme";
	else if(inp.search("marry")+1>0 && inp.search("you")+1>0)
		return "marryme";
	else if(inp.search("marry")+1>0 && inp.search("me")+1>0)
		return "marryuser";
	
	//@param get boy or girl
	else if(inp.search("get")+1>0 && (inp.search("boy")+1>0 || inp.search("girl")+1>0 || inp.search("son")+1>0 || inp.search("daughter")+1>0))
		return "sonordaughter";

	//@param love is everywhere
	else if(inp.search("love")+1>0 && inp.search("you")+1>0 && inp.search("me")+1>0)
		return "loveme";
	else if(inp.search("love")+1>0 && inp.search("you")+1>0)
		return "loveme";
	else if(inp.search("love")+1>0 && inp.search("me")+1>0)
		return "loveuser";
	
	//@param checking ambition
	else if(inp.search("will i")+1>0 && (inp.search("become")+1>0 || inp.search("get")+1>0 || inp.search("selected")+1>0))
		return "aim";
	else if(inp.search("can i")+1>0 && inp.search("become")+1>0 || inp.search("get")+1>0 || inp.search("selected")+1>0)
		return "aim";

	//@param your future
	else if(inp.search("what")+1>0 && inp.search("my")+1>0 && inp.search("future")+1>0)
		return "future";
	else if(inp.search("what")+1>0 && inp.search("become")+1>0)
		return "future";

	//@param how should i??	
/*	else if((inp.search("how")+1>0 || inp.search("should")+1>0) && inp.search("i")+1>0)
		return "howshouldi";
*/
	//@param jonny got abused
	else if(inp.search("fuck")+1>0 || inp.search("dick")+1>0 || inp.search("ass")+1>0 || inp.search("suck")+1>0 && inp.search("hole")+1>0 || inp.search("penis")+1>0 || inp.search("bastard")+1>0 || inp.search("fool")+1>0 ||(inp.search("sex")+1>0 && inp.search("partner")+1>0))
		return "abusal";
	
	//@param last one
	else	
		return "what";
}			