
/* JavaScript content from js/directives/ngValidation.js in folder common */

/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : <ngValidation.js >
* This is the controller js file for validation framework directive approach*
*
* @author <Abhisek Bhattacharyya>
* @version <1.0> *
*/ 

app.directive('showErrors', function($rootScope) {
	var element=[];  
	return {
      restrict: 'A',
      require: '^form',
      link: function (scope, el, attrs, formCtrl) {
    	  
        // find the text box element, which has the 'name' attribute
     
    	 var inputEl   = el[0].querySelector("[name]");
         
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        
        // get the name on the text box
        var inputName = inputNgEl.attr('name');
       
      // only apply the has-error class after the user leaves the text box
       if(inputName!=="occupation")
       {
        inputNgEl.bind('blur', function() {
        	         
             el.toggleClass('has-error',formCtrl[inputName].$invalid);	 
             if(!formCtrl[inputName].$invalid)
            	{
            	 el[0].children[0].setAttribute("style",""); 
            	}
        });
     }
       
       
       if(inputName=="occupation")
       {
           inputNgEl.bind('focusin', function() {
        	var value=inputNgEl.attr('value');
        	if(value==null || value==undefined || value=="")
      		  {
      		  el.toggleClass('has-error',true);
      		  }
      	  else
      		  {
      		el[0].children[0].setAttribute("style","");
        		  el.toggleClass('has-error',false);
      		  }

          });
       }
       
       $rootScope.isValid=function(){
       	   var flag=true;
           var elements=document.getElementsByClassName("ng-invalid");
   		   for (var index = 0; index < elements.length; index++) {
        	elements[index].setAttribute("style","border: 1px solid #b94a48; box-shadow: 0 0 3px 3px #d59392;");
   			
   		      }
   		   var element=document.getElementsByClassName("form");
               if(index>0)
            	   {
            	     flag=false;
            	   }
    	   return flag;
       };
       
      }
    };
  });

