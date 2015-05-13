
app.service('$validator',function(){
	/* for text */

	this.invalidText=function(inputText)  
	{  

	 var pattern=/^[a-zA-Z\s]{1,100}$/;
	  if(!inputText.match(pattern))  
	  {  
		  //alert("Please Enter Only 100 Characters and spaces"); 
		  return false;
	  }  
	  else{
		  return true;
	  }
	};
	this.invalidPhoneCode=function(inputText) 
	{
		
		var phoneno = /^\d{1,5}$/;  
		  if(!inputText.match(phoneno))  
		  {  
			  //alert("Not a valid Phone Number"); 
			 var g= parseInt(inputText);
			  if(g<0)
			   {
				   return false;
			   }
		} 
		  else {
			  
			  return true;
		  }
	};
	this.invalidId=function(inputText)  
	{  
  
		var pattern=/^[A-Za-z0-9]{1,100}$/;
		 if(!inputText.match(pattern))  
		 {  
			 //alert("Please Enter Only AlphaNumeric Value Upto 100 characters");  
			 return false;
		 } 
		 else{
			  return true;
		  }
		
	};
    
	 this.invalidEmail=function(inputText)  
	  {  
		 var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	     
	     if(!inputText.match(mailformat))  
	    {  
		  //alert("You have entered an invalid email address!");
		   return false;
	    
	    } 
	     else{
			  return true;
		  }
	 
	  };
/* valid 10  Digit PhoneNumber*/

this.invalidPhone=function(inputText)  
{
	
  var phoneno = /^\d{10}$/;  
  if(!inputText.match(phoneno))  
  {  
	  //alert("Not a valid Phone Number"); 
	  var g= parseInt(inputText);
	  if(g<0)
	   {
		  return false;
	   }
  } 
  else{
	  return true;
  }
 
};
  
this.invalidIncome=function(inputText)  
{
	
  var income=/^[0-9]+$/;  
  if(!inputText.match(income))  
  {  
	 /// alert("Only numbers accepted"); 
	  var g= parseInt(inputText);
	  if(g<0)
	   {
		  return false;
	   }
  }  
  else{
	  return true;
  } 
};



  /* Internation PhoneNumber with country code*/
// this.invalidIsdPhone= function(inputText)  
//  {  
//      
//    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
//    if(!inputText.match(phoneno))  
//       {  
//    	 alert("Not a valid Phone Number");  
//       }  
//      
//  } ;
  

 
  
  /* Empty Input box*/
  
this.emptyValidation=function(inputText)  
  {  
if (inputText.value.length == 0)   
  {  
document.inputText.style.background =   'Yellow';   
  }  
else  
  {  
document.inputText.style.background = 'White';  
  }  
return error;    
  };
  
  /*Check Floating Number*/
  
  this.CheckDecimal=function(inputText)   
  {   
  var decimal=  /^[-+]?[0-9]+\.[0-9]+$/;   
  if(inputText.value.match(decimal))   
  {   
  alert('Correct, try another...'); 
  return true;  
  }  
  else  
  {   
  alert('Wrong...!')  ;
  return false;  
  }  
  } ;
  
  /*Date validation with  mm/dd/yyyy or mm-dd-yyyy format*/
  
  this.invalidDate=function(inputText)  
  {  
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  
  // Match the date format through regular expression  
  if(inputText.value.match(dateformat))  
  {  
  document.form1.text1.focus();  
  //Test which seperator is used '/' or '-'  
  var opera1 = inputText.value.split('/');  
  var opera2 = inputText.value.split('-');  
  lopera1 = opera1.length;  
  lopera2 = opera2.length;  
  // Extract the string into month, date and year  
  if (lopera1>1)  
  {  
  var pdate = inputText.value.split('/');  
  }  
  else if (lopera2>1)  
  {  
  var pdate = inputText.value.split('-');  
  }  
  var dd = parseInt(pdate[0]);  
  var mm  = parseInt(pdate[1]);  
  var yy = parseInt(pdate[2]);  
  // Create list of days of a month [assume there is no leap year by default]  
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
  if (mm==1 || mm>2)  
  {  
  if (dd>ListofDays[mm-1])  
  {  
  alert('Invalid date format!');  
  return false;  
  }  
  }  
  if (mm==2)  
  {  
  var lyear = false;  
  if ( (!(yy % 4) && yy % 100) || !(yy % 400))   
  {  
  lyear = true;  
  }  
  if ((lyear==false) && (dd>=29))  
  {  
  alert('Invalid date format!');  
  return false;  
  }  
  if ((lyear==true) && (dd>29))  
  {  
  alert('Invalid date format!');  
  return false;  
  }  
  }  
  }  
  else  
  {  
  alert("Invalid date format!");  
  document.form1.text1.focus();  
  return false;  
  }  
  };
  
  /* date formate dd/mm/yyyy or dd-mm-yyyy format */
 /* 
 $scope.validatedate= function(inputText)  
  {  
  var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;  
  // Match the date format through regular expression  
  if(inputText.value.match(dateformat))  
  {  
  document.form1.text1.focus();  
  //Test which seperator is used '/' or '-'  
  var opera1 = inputText.value.split('/');  
  var opera2 = inputText.value.split('-');  
  lopera1 = opera1.length;  
  lopera2 = opera2.length;  
  // Extract the string into month, date and year  
  if (lopera1>1)  
  {  
  var pdate = inputText.value.split('/');  
  }  
  else if (lopera2>1)  
  {  
  var pdate = inputText.value.split('-');  
  }  
  var dd = parseInt(pdate[0]);  
  var mm  = parseInt(pdate[1]);  
  var yy = parseInt(pdate[2]);  
  // Create list of days of a month [assume there is no leap year by default]  
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
  if (mm==1 || mm>2)  
  {  
  if (dd>ListofDays[mm-1])  
  {  
  alert('Invalid date format!');  
  return false;  
  }  
  }  
  if (mm==2)  
  {  
  var lyear = false;  
  if ( (!(yy % 4) && yy % 100) || !(yy % 400))   
  {  
  lyear = true;  
  }  
  if ((lyear==false) && (dd>=29))  
  {  
  alert('Invalid date format!');  
  return false;  
  }  
  if ((lyear==true) && (dd>29))  
  {  
  alert('Invalid date format!');  
  return false;  
  }  
  }  
  }  
  else  
  {  
  alert("Invalid date format!");  
  document.form1.text1.focus();  
  return false;  
  }  
  };
  */
});//over
  