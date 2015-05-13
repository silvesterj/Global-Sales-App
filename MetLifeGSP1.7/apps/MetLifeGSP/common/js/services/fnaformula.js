app.service('$fnaformula',function(){
	 this.incomeProtectionAssessment=function(inflationrate,incomeProtection,investmentRate,numberofyears){
	   	    var T=1;
	   	    var PV='';
	   	    if(inflationrate == investmentRate){
	   	    	 PV=(incomeProtection*numberofyears);
	   	    }
	   	    else{ 
	   	    	/*PMT/(i-9)*/
	   	    	var  firstpart= incomeProtection/(inflationrate-investmentRate);
	   	    	var test =(inflationrate-investmentRate);
	   	    	/* (1+g)/(1+i)^n*/
	   	    	var secondpart=Math.pow(((1+inflationrate)/(1+investmentRate)),numberofyears);
	   	    	 secondpart=1-secondpart;
	   	    	 /*(1+iT)*/
	   	    	 var thirdpart=(1+inflationrate*T);
	   	    	  PV =(firstpart*secondpart*thirdpart);
	   	    }
	   	 return PV;
	      };
	   
	      $scope.educationInvestment = function(inflationrate,educationFees,numberofyears,yearcal){
	    	  alert("in formuls");
	    	   var educationcost;
	    	   if (yearcal==1){
	    		   var secondpart=Math.pow((1+inflationrate),numberofyears);
	    		    educationcost= educationFees*secondpart;
	    		    return  educationcost;
	    		   
	    	   }
	    	   else if(yearcal==2){
	    	    var secondpart=Math.pow((1+inflationrate),(numberofyears+1));
	   		    educationcost= educationFees*secondpart;
	   		    return  educationcost;
	    		   
	    	   }
	    	   else if(yearcal==3){
	    		   var secondpart=Math.pow((1+inflationrate),(numberofyears+2));
	      		   educationcost= educationFees*secondpart;
	      		    return  educationcost;
	    		   
	    	   }else{
	    		   var secondpart1=Math.pow((1+inflationrate),numberofyears);
	   		       var firstyeareducationcost= educationFees*secondpart1;
	   		       var secondpart2=Math.pow((1+inflationrate),(numberofyears+1));
	   		       var secondyeareducationcost= educationFees*secondpart2;
	   		       var secondpart3=Math.pow((1+inflationrate),(numberofyears+2));
	      		   var  thirdyeareducationcost= educationFees*secondpart3;
	      		   var totalcost =firstyeareducationcost+secondyeareducationcost+thirdyeareducationcost;
	      		   return totalcost;
	    		   
	    	   }
	       };
	      
	      
	});