/*validate the feedback form = cust */

function checkData(){
	if (document.cust.fname.value == "")
	{
		alert("Please insert your name.");
		return false;
	}
	
	else if (document.cust.email.value == "")
	{
		alert("Please insert the email.");
		return false;
		
	}
	
	else if (document.cust.message.value == "")
	{
		alert("Please insert the comment");
		return false;
	}
	else{
		return true;
	}
	
}