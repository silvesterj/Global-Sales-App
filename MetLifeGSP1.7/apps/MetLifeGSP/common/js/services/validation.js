
//function validationCtrl($scope){


/* for child uni/college entry years */

function invalidChildYears(inputText)  
{  

	var pattern=/^([1-9]|[1-3][0-9]|40)$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Numeric Value From 1 to 40");  
	    return false;  
	 }  
};


/* for child years */

function invalidChildYears(inputText)  
{  

	var pattern=/^([1-6])$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Numeric Value From 1 to 6");  
	    return false;  
	 }  
};


/* for years 1 to 80 */

function invalidYears(inputText)  
{  

	var pattern=/^([1-9]|[1-7][0-9]|80)$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Numeric Value");  
	    return false;  
	 }  
};


/* for percent value upto 50*/
function invalidPercentFifty(inputText)  
{  

	var pattern=/(?:^[1-4][0-9]\.[0-9]?$)|^[1-4][0-9]$|^[0-9]$|^50$|(?:^[0-9]\.[0-9]?$)​/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Numeric Value");  
	    return false;  
	 }  
};

/* for percent value upto 100*/
function invalidPercentHundred(inputText)  
{  

	var pattern=/^(100(?:\.0)?|0(?:\.\d)?|\d?\d(?:\.\d)?)$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Numeric Value");  
	    return false;  
	 }  
};


/* for any number value */
function invalidDigit(inputText)  
{  

	var pattern=/^[1-5]$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Numeric Value");  
	    return false;  
	 }  
};




/* for Priority 1 to 5 */
function invalidPriority(inputText)  
{  

	var pattern=/^[1-5]{1}$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Numeric Value From 1 to 5");  
	    return false;  
	 }  
};





/* for income value */

function invalidIncome(inputText)  
{  

	var pattern=/^[0-9]{1,11}$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Numeric Value Upto 11 digits");  
	    return false;  
	 }  
};




/* for alphanumeric value */

function invalidId(inputText)  
{  

	var pattern=/^[A-Za-z0-9]{1,100}$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only AlphaNumeric Value Upto 100 characters");  
	    return false;  
	 }  
};


/* for alphanumeric value agent code */

function invalidAgentCode(inputText)  
{  

	var pattern=/^[A-Za-z0-9]{1,50}$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only AlphaNumeric Value Upto 50 characters");  
	    return false;  
	 }  
};



	/* for text upto 100 characters */
	
function invalidText(inputText)  
{  

	var pattern=/^[a-zA-Z\s]{1,100}$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Characters and spaces Upto 100 characters");  
	    return false;  
	 }  
};

/* for text unlimited */

function invalidLongText(inputText)  
{  

	var pattern=/^[a-zA-Z\s]+$/;
	 if(inputText.value.match(pattern))  
	 {  
	     return true;  
	 }  
	 else  
	 {  
	    alert("Please Enter Only Characters and spaces");  
	    return false;  
	 }  
};


/* valid 10  Digit PhoneNumber*/

function invalidPhone(inputText)  
{
	
  var phoneno = /^\d{10}$/;  
  if(inputText.value.match(phoneno))  
  {  
      return true;  
  }  
  else  
  {  
     alert("Not a valid Phone Number");  
     return false;  
  }  
};
  
  /* Internation PhoneNumber with country code*/
  function invalidIsdPhone(inputText)  
  {  
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
    if(inputText.value.match(phoneno))  
       {  
         return true;    
       }  
     else  
       {  
         alert("Not a valid Phone Number");  
         return false;  
       }  
  } ;
  
  /*Email Validation*/
  
  function invalidEmail(inputText)  
  {  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if(inputText.value.match(mailformat))  
  {  
  document.form1.inputText.focus();  
  return true;  
  }  
  else  
  {  
  alert("You have entered an invalid email address!");  
  document.form1.inputText.focus();  
  return false;  
  }  
  }  
  
  /* Empty Input box*/
  
 function Emptyvalidation(inputText)  
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
  }  ;
  
  /*Check Floating Number*/
  
  function checkDecimal(inputText)   
  {   
  var decimal=  /^[-+]?[0-9]+\.[0-9]+$/;   
  if(inputText.value.match(decimal))   
  {   
  alert('Correct, try another...'); 
  return true;  
  }  
  else  
  {   
  return false;  
  }  
  } ;
  
  /*Date validation with  mm/dd/yyyy or mm-dd-yyyy format*/
  
  function invalidDate(inputText)  
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
  function validatedate(inputText)  
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
  
//}//controller over
  