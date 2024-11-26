
function CheckEmpty(field_id){
	//code
	var MyValue = document.getElementById(field_id).value;
	if(MyValue == "" || MyValue == null){
		//code
		alert("You cant leave this empty"); 
	}
	
}


function validateemail(email){
	var myEmail =document.getElementById(email).value;
	var format=/.+@.+/;
	if(!myEmail.match(format)){
		alert("enter a valid mail");
	}
	
}

function validatecheckbox(checkbox){
	var check_box=document.getElementById(checkbox).checked;
	if(check_box==false){
		//code
		alert("agree to proceed");
	}
	
}


function validateselect(select){
	//code
selected=document.getElementById(select).selectedIndex;
if(selected==0){
	//code
	alert("please select a country");
	
}	
	
}

