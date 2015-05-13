
app.service('$Language',function($rootScope,$http){
this.setLanguage=function(language){
   $http.get('json/'+language+'.json').then(function(values)
	{
        $rootScope.$Language = values.data; 

	});
};
});

app.service('$fnaformula',function(){
	 this.incomeProtectionAssessment=function(inflationrate,incomeProtection,investmentRate,numberofyears){
		 var T=1;
	   	    var PV='';
	   	    if(inflationrate == investmentRate){
	   	    	 PV=(incomeProtection*numberofyears);
	   	    }
	   	    else{ 
	   	    	/*PMT/(i-9)*/
	   	    	investmentRate =(investmentRate/100);
	   	    	inflationrate =(inflationrate/100);
	   	    	var  firstpart= (incomeProtection/(inflationrate-investmentRate)).toFixed(2);
	   	    	var test =(inflationrate-investmentRate);
	   	    	var a = 1+(investmentRate*1);
	   	    		var b= 1+(inflationrate*1);
	   	    		var test2=a/b;
	   	    	/* (1+g)/(1+i)^n*/
	   	    	var secondpart=(Math.pow(test2,numberofyears));
	   	    	var secondpart2 = (1-secondpart);
	   	    	 /*(1+iT)*/
	   	    	 var thirdpart=(1+(inflationrate*T));
	   	    	  PV =(firstpart*secondpart2*thirdpart);
	   	    }
	   	 return PV;
	      };
	   
	      this.educationInvestment = function(inflationrate,educationFees,numberofyears,yearcal){
	    	   var educationcost;
	    	   inflationrate = (inflationrate/100);
	    	   if (yearcal==1){
	    		   var secondpart=Math.pow((1+(inflationrate*1)),numberofyears);
	    		    educationcost= educationFees*secondpart;
	    		    return  educationcost;
	    		   
	    	   }
	    	   else if(yearcal==2){
	    	    var secondpart=Math.pow((1+(inflationrate*1)),(numberofyears+1));
	   		    educationcost= educationFees*secondpart;
	   		    return  educationcost;
	    		   
	    	   }
	    	   else if(yearcal==3){
	    		   var secondpart=Math.pow((1+(inflationrate*1)),(numberofyears+2));
	      		   educationcost= educationFees*secondpart;
	      		    return  educationcost;
	    		   
	    	   }
	    	   else if(yearcal==4){
	    		   var secondpart=Math.pow((1+(inflationrate*1)),(numberofyears+3));
	      		   educationcost= educationFees*secondpart;
	      		    return  educationcost;
	    		   
	    	   }
	    	   else{
	    		   var secondpart1=Math.pow((1+(inflationrate*1)),numberofyears);
	   		       var firstyeareducationcost= educationFees*secondpart1;
	   		       var secondpart2=Math.pow((1+(inflationrate*1)),(numberofyears+1));
	   		       var secondyeareducationcost= educationFees*secondpart2;
	   		       var secondpart3=Math.pow((1+(inflationrate*1)),(numberofyears+2));
	      		   var  thirdyeareducationcost= educationFees*secondpart3;
	      		  var secondpart4=Math.pow((1+(inflationrate*1)),(numberofyears+3));
	      		   var  fourthyeareducationcost= educationFees*secondpart4;
	      		   var totalcost =firstyeareducationcost+secondyeareducationcost+thirdyeareducationcost+fourthyeareducationcost;
	      		   return totalcost;
	    		   
	    	   }
	       };
	      
	      
	});