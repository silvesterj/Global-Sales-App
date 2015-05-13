
/* JavaScript content from js/controllers/fnaCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
 */
/*
 *
 * file name : < settingCtrl.js >
 * This is the controller js file for financial need analysis page*
 *
 * @author <Sanjana G Shet>
 * @version <1.0> *
 */ 

//  old //

///*********************** Loading Json **************************/

app.controller('fnaCtrl', function($scope, $http,$rootScope,$timeout, $location,$Language,$fnaformula,$jsonStore, $Footer,$FileUtils) {
	
	document.getElementById($rootScope.$Footer.financialNeedFooter).style.display="block";
 
	/* Income Replacement Assessment starts */
	var cur_ira_inner = "ira_tab1_inner";
	$scope.ira_select_cust = function() {
		document.getElementById('ira_tab1_inner').style.display = "block";
		document.getElementById(cur_ira_inner).style.display = "none";
		cur_ira_inner = "ira_tab1_inner";
	};

	/* if the customer is selected in the select customer page, copy that customer into FNA scope */
	$scope.customer = {};
	// direct flow for fna //
	$scope.fnaIncomeRA = {};
	$scope.fnaChildEducation = {};
	$scope.cff = {};
	$scope.cffCollectionName="cff";
	$scope.fnaIncomeRACollectionName="fnaIncomeRA";
	$scope.fnaChildEducationCollectionName="fnaChildEducation";

	var systemDate = new Date();
	
	$scope.fnaIncomeRA.designedFor = '';
	$scope.fnaChildEducation.designedFor = '';
	
	//initliaze the default status not started
	$scope.fnaIncomeRA.status="Not Started";
	$scope.fnaChildEducation.status="Not Started";

	// coming from customer home or historic page, so customer object and cff object are available
	// assigned the passed objects to customer and cff objects in this model trying to avoid json storage query
	
	if($rootScope.customerObject!=null && $rootScope.customerObject!=undefined && Object.keys($rootScope.customerObject).length>0){
		console.log("Inside customer object"+JSON.stringify($rootScope.customerObject));
		$scope.customer =$rootScope.customerObject.json;
		$scope.fnaIncomeRA.designedFor= $scope.customer.customerName;
		$scope.fnaIncomeRA.id=$scope.customer.id;
		$scope.fnaChildEducation.designedFor= $scope.customer.customerName;
		$scope.fnaChildEducation.id= $scope.customer.id;
	}
	if($rootScope.cffObject!=null && $rootScope.cffObject!=undefined && Object.keys($rootScope.cffObject).length>0){
		console.log("Inside cf object"+JSON.stringify($rootScope.cffObject.json));
		$scope.cff =$rootScope.cffObject.json; 
		$scope.fnaIncomeRA.profileName=$scope.cff.profileName;
		$scope.fnaChildEducation.profileName=$scope.cff.profileName;
		
	}
	
	
	
	if($rootScope.fnaIncomeObject!=null && $rootScope.fnaIncomeObject!=undefined && Object.keys($rootScope.fnaIncomeObject).length>0){
		
	
		$scope.fnaIncomeRA =$rootScope.fnaIncomeObject.json;
		// coming from profile status, pass the cff and customer objects if not null TBD//
		// TBD take the profileName from profile status, query the cff table
		//with this profile name and assigned the record to cff object
			if($scope.cff.id!=null && $scope.cff.id!=undefined && $scope.cff.dob!=null 
					&& $scope.cff.dob!=undefined){
				$scope.fnaIncomeRA.dob=$scope.cff.dob;
				$scope.fnaIncomeRA.id=$scope.cff.id;
				$scope.fnaIncomeRA.designedFor= $scope.customer.customerName;
			}
		
		
	}else{
		$scope.fnaIncomeRA.proposalId=""+Math.floor( (Math.random()*10000000000));
	}

	if($rootScope.fnaChildEducationObject!=null && $rootScope.fnaChildEducationObject!=undefined && Object.keys($rootScope.fnaChildEducationObject).length>0){
		
		$scope.fnaChildEducation =$rootScope.fnaChildEducationObject.json;
		
		// coming from profile status, pass the cff and customer objects if not null TBD//
		// TBD take the profileName from profile status, query the cff table
		//with this profile name and assigned the record to cff object
		if($scope.cff!=null && $scope.cff.profileName!=null && $scope.cff.profileName!=undefined){
			if($scope.cff.id!=null && $scope.cff.id!=undefined && $scope.cff.dob!=null 
					&& $scope.cff.dob!=undefined){
				$scope.fnaChildEducation.dob=$scope.cff.dob;
				$scope.fnaChildEducation.id=$scope.cff.id;
				$scope.fnaChildEducation.designedFor= $scope.customer.customerName;
			}
		}
	}else{
		$scope.fnaChildEducation.proposalId=""+Math.floor( (Math.random()*10000000000));
	}

		
	$scope.ira_replace = function() {
		document.getElementById('ira_tab1_inner').style.display = "block";
		document.getElementById(cur_ira_inner).style.display = "none";
		cur_ira_inner = "ira_tab1_inner";
	};


	// This function to Calculate Desired Income//
	$scope.calculateDesiredIncome=function(){
		if(($scope.fnaIncomeRA.incomePercentage!=null) && ($scope.fnaIncomeRA.currentIncome!=null))		{
			/*REQ-177: Desired Income to be protected is auto populated by multiplying 
		Current Annual Income and Percentage of Income to be protected*/
			$scope.fnaIncomeRA.desiredIncome=Math.round(($scope.fnaIncomeRA.currentIncome)*($scope.fnaIncomeRA.incomePercentage/100));

		}
	};
      
	// saving the saveProfileFnaIncomeRA or saveProfileFnaChildEducation depending upon condition
	
	/*$scope.saveProfileName=function(){
		
		   if($rootScope.$Footer.subFooter=='fna_tab1')
			{
			   $scope.fnaIncomeRA.profileName=$scope.userenteredProfilename;
			   $scope.saveProfileFnaIncomeRA();
			   
			}else if($rootScope.$Footer.subFooter=='fna_tab2'){
				$scope.fnaChildEducation.profileName=$scope.userenteredProfilename;
				$scope.saveProfileFnaChildEducation();
			}
	   };*/
	
	
	// This function to save FnaIncomeRa record into the fna table//
	/*$scope.saveFnaIncomeRA=function(){
		
		if(($scope.fnaIncomeRA.profileName == undefined || $scope.fnaIncomeRA.profileName == null)){
			 we have to show popup message
			 // this alert should have text box to take the input. Rajesh to provide this kind of popup.
			// needed css popup to enter the profile name from the user.
			//assigned the entered profile name to fna profile name, if cff not null copp profile 
			//name to cff function TBD
			$scope.profileName = "Please enter a profile name";
			$scope.fna_profile_status_open();
		
		}else{
            
			
			//update the fnaIncomeRA record only.
			if($rootScope.fnaIncomeObject._id!=null && $rootScope.fnaIncomeObject._id!=undefined)
			{
				$scope.fnaIncomeRA.lastUpdateDate=systemDate;	
				$scope.tableName='fnaIncomeRA';
				$scope.dataToUpdate= [{_id:$rootScope.fnaIncomeObject._id, json: $scope.fnaIncomeRA}];
				$jsonStore.updateData($scope.tableName,$scope.dataToUpdate,function (s){
					$scope.fna_alert_popup_open();
					$scope.content = "<p>fnaIncomeRARecord Updated</p>";
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					//alert(JSON.stringify("fnaIncomeRARecord Updated"+s));
				}, function (e){
					console.log(JSON.stringify(e));
				}) ;
			}else{
			  
			
				
				$scope.fnaIncomeRA.dob=$scope.customer.dob;
				$scope.fnaIncomeRA.id=$scope.customer.id;
				console.log("$scope.fnaIncomeRA"+JSON.stringify($scope.fnaIncomeRA));
				$scope.tableName='fnaIncomeRA';
				$scope.dataToinsert=$scope.fnaIncomeRA;
				$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
					$scope.fna_alert_popup_open();
					$scope.content = "<p>FNA Record Inserted</p>";
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					//	alert(JSON.stringify("fnaRecord Inserted"+s));
				}, function (e){
					console.log(JSON.stringify(e));
				}) ;
			}

		}

};
	

   

	$scope.saveProfileFnaIncomeRA=function(){
		$scope.delete_popup_close();
		if($scope.customer.id!=null && 
				$scope.customer.id!=undefined 
				&& $scope.customer.dob!=null 
				&& $scope.customer.dob!=undefined 
				&& $scope.fnaIncomeRA.profileName!=null && 
				$scope.fnaIncomeRA.profileName!=undefined){
			// check the profile name doesn't exit in cff table 
			//hence alert the user to choose another profile name
			
			$scope.tableName='cff';
			$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.fnaIncomeRA.profileName}];
			$jsonStore.retriveData($scope.tableName,$scope.queryPart,
					function (result){
				if(result.length>0)
				{
					alert($scope.fnaIncomeRA.profileName+" is present in Cff adding only FNA");
					$rootScope.cffObject={"_id":result[0]._id,"json":$scope.cff};
					//$scope.fna_profile_status_open();
					//$scope.profileName = "Please enter a different profile name";
					//alert("Please enter a different profile name");
//profile name already exist in the cff. add the fna income record with same profile name.
					$scope.fnaIncomeRA.dob=$scope.customer.dob;
					$scope.fnaIncomeRA.id=$scope.customer.id;
//					
					console.log("$scope.fnaIncomeRA"+JSON.stringify($scope.fnaIncomeRA));
					$scope.tableName='fnaIncomeRA';
					$scope.dataToinsert=$scope.fnaIncomeRA;
					$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
						$scope.fna_alert_popup_open();
						$scope.content = "<p>FNA Income Record Saved Successfully.</p>";
						if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						    $scope.$apply();
						}
						//alert(JSON.stringify("fnaRecord Inserted"+s));}, function (e){
						console.log(JSON.stringify(e));
					}) ;
					
				}else{
					alert($scope.fnaIncomeRA.profileName+" is not present in Cff adding both cff and FNA");
					$scope.cff.profileName=$scope.fnaIncomeRA.profileName;
					$scope.cff.dob=$scope.customer.dob;
					$scope.cff.id=$scope.customer.id;
					$scope.cff.cffStatus='Not Started';
					$scope.cff.createdDate=systemDate;
					$scope.cff.updatedDate=systemDate;
					$scope.dataToinsert=$scope.cff;
					$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
						//alert("cff inserted :"+s);
						//$scope.content = "<p>cff Record Inserted</p>";
						//$scope.fna_alert_popup_open(); 
						//alert(JSON.stringify("cffRecord Inserted"+s));}, function (e){
						console.log(JSON.stringify(s));
						$scope.fnaIncomeRA.dob=$scope.customer.dob;
						$scope.fnaIncomeRA.id=$scope.customer.id;
						console.log("$scope.fnaIncomeRA"+JSON.stringify($scope.fnaIncomeRA));
						$scope.tableName='fnaIncomeRA';
						$scope.dataToinsert=$scope.fnaIncomeRA;
						$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
							alert("fna inserted :"+s);
							$scope.content = "<p>FNA Income Record Saved Successfully.</p>";
							$scope.fna_alert_popup_open();
							if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
							    $scope.$apply();
							}
							//alert(JSON.stringify("fnaRecord Inserted"+s));}, function (e){
							console.log(JSON.stringify(e));
						},function (error){
							
							$logger.log("ERROR",JSON.stringify(error));
						}) ;
						
					},function (error){
						
						$logger.log("ERROR",JSON.stringify(error));
					}) ;
				
					$rootScope.cffObject={"_id":null,"json":$scope.cff};
				}
			},function(error){});
		}else{

			//Customer is not selected so no insert. have to put the fna income data in the rootscope object 
			//TBD revisit this condition.
			$rootScope.fnaIncomeObject={"_id":null,"json":$scope.fnaIncomeRA};
			
			
			$scope.content = "<p>Customer not present, data can be saved in profile status by selecting/creating customer.</p>";
			$scope.fna_alert_popup_open();
			if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
			    $scope.$apply();
			}
			//alert("Customer not present");
		}
		
		
		
	};
	*/
	
	
	
	
	
	$scope.saveFnaIncomeRA=function(id){	
	
/*  if customer not present, show the message - can be saved in profile status page
 *  if profile name not present , show the popup to enter profile anme
 *   once value entered, popup will call this function again
 *   query for profile name present in cfff, if not present,  insert cff record  and fnaIncomeRA
 *   query if fnaIncomeRA record is already present in json store, if yes then update, else insert
// */	
		var flag=$rootScope.isValid();
		formOneTab1=($scope.fnaIncomeRA.designedFor==""||$scope.fnaIncomeRA.designedFor==undefined);
	    formOneTab2=($scope.fnaIncomeRA.currentIncome==""||$scope.fnaIncomeRA.currentIncome==undefined);
	    formOneTab3=($scope.fnaIncomeRA.incomePercentage==""||$scope.fnaIncomeRA.incomePercentage==undefined);
	    formOne=(!formOneTab1&&!formOneTab2&&!formOneTab3);
	    formTwoTab1=($scope.fnaIncomeRA.designedFor==""||$scope.fnaIncomeRA.designedFor==undefined);
	    formTwoTab2=($scope.fnaIncomeRA.inflationRate==""||$scope.fnaIncomeRA.inflationRate==undefined);
	    formTwoTab3=($scope.fnaIncomeRA.investmentRate==""||$scope.fnaIncomeRA.investmentRate==undefined);
	    formTwoTab4=($scope.fnaIncomeRA.yearsProtection==""||$scope.fnaIncomeRA.yearsProtection==undefined);
	    formTwo=(!formTwoTab1&&!formTwoTab2&&!formTwoTab3&&!formTwoTab4);
	    formThreeTab1=($scope.fnaIncomeRA.designedFor==""||$scope.fnaIncomeRA.designedFor==undefined);
	    formThreeTab2=($scope.fnaIncomeRA.existingFunds==""||$scope.fnaIncomeRA.existingFunds==undefined);
	    formThree=(!formThreeTab1&&!formThreeTab2);
	    formFour=($scope.fnaIncomeRA.designedFor==""||$scope.fnaIncomeRA.designedFor==undefined);
	    if(id=='1')
	    	{
	    	
	         if(formOne)
			  {
			   flag=true;
			  }
	    	}
	    if(id=='2')
    	{
	    	
         if(formTwo)
		  {
		   flag=true;
		  }
    	}
	    if(id=='3')
    	{
	    
         if(formThree)
		  {
		   flag=true;
		  }
    	}
	    if(id=='4')
    	{	
         if(!formFour)
		  {
		   flag=true;
		  }
    	}
	 	
        if(flag==true)
        	{
		//alert("data to save: "+JSON.stringify($scope.fnaIncomeRA));
		if($scope.customer.id){
			
			if(!$scope.fnaIncomeRA.profileName){
				
				$scope.openPopup("Please enter a profile name");
				
			}else{
		
		//check for cff profile name then update/insert only fnaIncomeRA record / insert both cff and fnaIncomeRA
		
		$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.fnaIncomeRA.profileName}];
   	    $jsonStore.retriveData($scope.cffCollectionName,$scope.queryPart,
   				   function (result){
   	   //update/insert only fnaIncomeRA record 	
   		if(result.length>0)
   		{
   			$rootScope.cffObject={"_id":result[0]._id,"json":$scope.cff};
   		//check for fnaIncomeRA proposalId in table then update/insert.
   			$scope.checkAndUpdateFnaIncomeRA();
   			
		//insert both cff and fnaIncomeRA records	
	   		}else{
	   			
	   		
		$scope.cff.profileName=$scope.fnaIncomeRA.profileName;
		$scope.cff.dob=$scope.customer.dob;
		$scope.cff.id=$scope.customer.id;
		$scope.cff.cffStatus='Not Started';
		$scope.cff.createdDate=systemDate;
		$scope.cff.updatedDate=systemDate;
		
		$jsonStore.insertData($scope.cffCollectionName,$scope.cff,function (s){
	//	alert(JSON.stringify("cffRecord Inserted"+s));
		
		
		$scope.checkAndUpdateFnaIncomeRA();
		$rootScope.cffObject={"_id":null,"json":$scope.cff};
		}, 
		 function  (error){
			
			$logger.log("ERROR",JSON.stringify(error));
		}) ;
		
		
       
	   		
	   		}
   		},function  (error){
			
			$logger.log("ERROR",JSON.stringify(error));
		}) ;
	   		
			}

	}else{

		//Customer is not selected so no insert. have to put the data in the rootscope object 
		//TBD revisit this condition.
		$rootScope.fnaIncomeObject={"_id":null,"json":$scope.fnaIncomeRA};
		$scope.openAlert("Customer not present, data can be saved in profile status by selecting/creating customer.");
		
	}}};	

$scope.checkAndUpdateFnaIncomeRA=function(){
	
	
	
	
	$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.fnaIncomeRA.profileName,"proposalId":$scope.fnaIncomeRA.proposalId}];
	    $jsonStore.retriveData($scope.fnaIncomeRACollectionName,$scope.queryPart,
				   function (result){
	    	//alert("query result: "+JSON.stringify(result));
	    	if(result.length>0)
   		{
	    		
			$scope.fnaIncomeRA.lastUpdatedDate=systemDate;
	    		$scope.dataToUpdate= [{_id:result[0]._id, json: $scope.fnaIncomeRA}];
			$jsonStore.updateData($scope.fnaIncomeRACollectionName,$scope.dataToUpdate,function (s){
				$scope.openAlert("FNA Income Record Updated Successfully.");
				
				$rootScope.fnaIncomeObject={"_id":"saved","json":$scope.fnaIncomeRA};
			}
			, function  (error){
				
				$logger.log("ERROR",JSON.stringify(error));
			}) ;
	    		
   		}else{
   			$scope.fnaIncomeRA.createdDate=systemDate;
   			$scope.fnaIncomeRA.lastUpdatedDate=systemDate;
   			$jsonStore.insertData($scope.fnaIncomeRACollectionName,$scope.fnaIncomeRA,function (s){
				
				$scope.openAlert("FNA Income Record Saved Successfully.");
				$rootScope.fnaIncomeObject={"_id":"saved","json":$scope.fnaIncomeRA};
				}
			, function  (error){
				
				$logger.log("ERROR",JSON.stringify(error));
			}) ;
	}
	    }
	, function  (error){
		
		$logger.log("ERROR",JSON.stringify(error));
	}) ;
};
	
	// End of save FnaIncomeRa function into the fna table//	

	$scope.ira_protect = function() {
        // setting the fnaIncome status to In Progress 
		$scope.fnaIncomeRA.status="In Progress";
		$scope.fnaIncomeRA.createDate= systemDate;
		document.getElementById('ira_tab2_inner').style.display = "block";
		document.getElementById(cur_ira_inner).style.display = "none";
		cur_ira_inner = "ira_tab2_inner";
		$scope.fnaIncomeRA.incometobeprotected=$scope.fnaIncomeRA.currentIncome;
		$scope.calculatePV=function(){
		 /*
		        REQ-181: The UI shall calculate and show the Present Value (PV) Capital Requirement in Income protection Assessment form using the formula below:
		PV = Present Value Capital Requirement
		PMT = Desired Income to be protected
		i = Inflation Rate in % (i.e. 8 % will be 0.08 in formula)
		g = Projection of Investment rate in % (i.e. 8 % will be 0.08 in formula)
		n = Years of Income Protection
		T = 1 (always)
		The above formula will not work when i = g
		In that scenario when i=g the formula will be
		PV = PMT * n
					 */
		
		if(($scope.fnaIncomeRA.desiredIncome!=null) && ($scope.fnaIncomeRA.inflationRate!=null) && ($scope.fnaIncomeRA.investmentRate!=null) && ($scope.fnaIncomeRA.yearsProtection!=null)){
				$scope.fnaIncomeRA.presentValue =$fnaformula.incomeProtectionAssessment($scope.fnaIncomeRA.inflationRate, $scope.fnaIncomeRA.desiredIncome,$scope.fnaIncomeRA.investmentRate,$scope.fnaIncomeRA.yearsProtection);
				// capital required and present value both are same //
				$scope.fnaIncomeRA.capitalRequired = $scope.fnaIncomeRA.presentValue;
			}
		};

	};
	
	// save data in FnaChildEducation
	/*$scope.saveFnaChildEducation=function(){
		
		
		if(($scope.fnaChildEducation.profileName ==undefined || $scope.fnaChildEducation.profileName==null)){
			 we have to show popup message
			//	alert("Please Enter Profile name"); // this alert should have text box to take the input. Rajesh to provide this kind of popup.
			//assigned the entered profile name to fna profile name, if cff not null copp profile 
			$scope.fna_profile_status_open();
			$scope.profileName = "Please enter a profile name";
			
		}else{
			// update fnaChildEducation
			if($rootScope.fnaChildEducationObject._id!=null && $rootScope.fnaChildEducationObject._id!=undefined)
			{
				$scope.fnaChildEducation.lastUpdateDate=systemDate;
				$scope.tableName='fnaChildEducation';
				$scope.dataToUpdate= [{_id:$rootScope.fnaChildEducationObject._id, json: $scope.fnaChildEducation}];
				$jsonStore.updateData($scope.tableName,$scope.dataToUpdate,function (s){
					$scope.fna_alert_popup_open();
					$scope.content = "<p>fnaChildEducationRecord Updated</p>";
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					//alert(JSON.stringify("fnaChildEducationRecord Updated"+s));
				}, function (e){
					console.log(JSON.stringify(e));
				}) ;
			}else{
			
				$scope.fnaChildEducation.dob=$scope.customer.dob;
				$scope.fnaChildEducation.id=$scope.customer.id;
				$scope.tableName='fnaChildEducation';
				$scope.dataToinsert=$scope.fnaChildEducation;	
				$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
					$scope.fna_alert_popup_open();
					$scope.content = "<p>fnaChildEducationRecord inserted</p>";
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					//alert(JSON.stringify("fnaChildEducationRecord Inserted"+s));
				}, function (e){
					console.log(JSON.stringify(e));
				}) ;
			}
	    }};
		
		$scope.saveProfileFnaChildEducation=function(){	
		 
			
			$scope.delete_popup_close();
	
			if($scope.customer.id!=null && 
				$scope.customer.id!=undefined 
				&& $scope.customer.dob!=null 
				&& $scope.customer.dob!=undefined && $scope.fnaChildEducation.profileName!=null && 
				$scope.fnaChildEducation.profileName!=undefined){
		
			// check the profile name doesn't exit in cff table hence alert the user to choose another profile name
      	
			// check the profile name doesn't exit in cff table 
			//hence alert the user to choose another profile name
			
			$scope.tableName='cff';
			$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.fnaChildEducation.profileName}];
	   	    $jsonStore.retriveData($scope.tableName,$scope.queryPart,
	   				   function (result){
	   		if(result.length>0)
	   		{
	   			//alert("Please enter a different profile name");
	   		
	   			$rootScope.cffObject={"_id":result[0]._id,"json":$scope.cff};
				$scope.fnaChildEducation.dob=$scope.customer.dob;
				$scope.fnaChildEducation.id=$scope.customer.id;
				$scope.tableName='fnaChildEducation';
				$scope.dataToinsert=$scope.fnaChildEducation;	
				$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
					
					alert(
						JSON.stringify("fnaChildEducationRecord Inserted"+s));}, function (e){alert(JSON.stringify(e));}) ;
				$scope.content = "<p>FNA Child Education Record Saved Successfully.</p>";
				$scope.fna_alert_popup_open();
				if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
				    $scope.$apply();
				}
 	   		}else{
 	   			
 	   		$scope.tableName='cff';
			$scope.cff.profileName=$scope.fnaChildEducation.profileName;
			$scope.cff.dob=$scope.customer.dob;
			$scope.cff.id=$scope.customer.id;
			$scope.cff.cffStatus='Not Started';
			$scope.cff.createdDate=systemDate;
			$scope.cff.updatedDate=systemDate;
			$scope.dataToinsert=$scope.cff;
			$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
			alert(JSON.stringify("cffRecord Inserted"+s));
			

			$scope.fnaChildEducation.dob=$scope.customer.dob;
			$scope.fnaChildEducation.id=$scope.customer.id;
			$scope.tableName='fnaChildEducation';
			$scope.dataToinsert=$scope.fnaChildEducation;	
			$jsonStore.insertData($scope.tableName,$scope.dataToinsert,function (s){
				
				alert(JSON.stringify("fnaChildEducationRecord Inserted"+s));}, function (e){alert(JSON.stringify(e));}) ;
			$scope.content = "<p>FNA Child Education Record Saved Successfully.</p>";
			$scope.fna_alert_popup_open();
			if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
			    $scope.$apply();
			}
			}, function (e){alert(JSON.stringify(e));}) ;
			$rootScope.cffObject={"_id":null,"json":$scope.cff};
           
 	   		
 	   		}},function(error){});
 	   		
	

		}else{

			//Customer is not selected so no insert. have to put the data in the rootscope object 
			//TBD revisit this condition.
			$scope.content = "<p>Customer not present, data can be saved in profile status by selecting/creating customer.</p>";
			$scope.fna_alert_popup_open();
			if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
			    $scope.$apply();
			}
		}};	*/

	
	
	$scope.saveFnaChildEducation=function(id){	
	
/*  if customer not present, show the message - can be saved in profile status page
 *  if profile name not present , show the popup to enter profile anme
 *   once value entered, popup will call this function again
 *   query for profile name present in cfff, if not present,  insert cff record  and fnaChildEducation
 *   query if fnaChildEducation record is already present in json store, if yes then update, else insert
 */	 
		var flag=$rootScope.isValid();
		formOneTab1=($scope.fnaChildEducation.designedFor==""||$scope.fnaChildEducation.designedFor==undefined);
		formOneTab2=($scope.fnaChildEducation.childName==""||$scope.fnaChildEducation.childName==undefined);
	    formOneTab3=($scope.fnaChildEducation.currentEducationFees==""||$scope.fnaChildEducation.currentEducationFees==undefined);
	    formOneTab4=($scope.fnaChildEducation.projectedInflation==""||$scope.fnaChildEducation.projectedInflation==undefined);
	    formOneTab5=($scope.fnaChildEducation.currentAge==""||$scope.fnaChildEducation.currentAge==undefined);
	    formOneTab6=($scope.fnaChildEducation.uniEntryAge==""||$scope.fnaChildEducation.uniEntryAge==undefined);
	    formOne=(!formOneTab1&&!formOneTab2&&!formOneTab3&&!formOneTab4&&!formOneTab5&&!formOneTab6);
	    formTwoTab1=($scope.fnaChildEducation.designedFor==""||$scope.fnaChildEducation.designedFor==undefined);
	    formTwoTab2=($scope.fnaChildEducation.childName==""||$scope.fnaChildEducation.childName==undefined);
	    formTwoTab3=($scope.fnaChildEducation.existingSavings==""||$scope.fnaChildEducation.existingSavings==undefined);
	    formTwoTab4=($scope.fnaChildEducation.existingSavingsYield==""||$scope.fnaChildEducation.existingSavingsYield==undefined);
	    formTwoTab5=($scope.fnaChildEducation.futureYearlySavings==""||$scope.fnaChildEducation.futureYearlySavings==undefined);
	    formTwoTab6=($scope.fnaChildEducation.futureYearlySavingsYield==""||$scope.fnaChildEducation.futureYearlySavingsYield==undefined);
	    formTwo=(!formTwoTab1&&!formTwoTab2&&!formTwoTab3&&!formTwoTab4&&!formTwoTab5&&!formTwoTab6);
	    formThreeTab1=($scope.fnaChildEducation.designedFor==""||$scope.fnaChildEducation.designedFor==undefined);
	    formThreeTab2=($scope.fnaChildEducation.childName==""||$scope.fnaChildEducation.childName==undefined);
	    formThreeTab3=($scope.fnaChildEducation.invstReturnProjection==""||$scope.fnaChildEducation.invstReturnProjection==undefined);
	    formThree=(!formThreeTab1&&!formThreeTab2&&!formThreeTab3);
	    formFourTab1=($scope.fnaChildEducation.designedFor==""||$scope.fnaChildEducation.designedFor==undefined);
	    formFourTab2=($scope.fnaChildEducation.childName==""||$scope.fnaChildEducation.childName==undefined);
	    formFour=(!formFourTab1&&!formFourTab2);
	    if(id=='1')
	    	{
	    	
	         if(formOne)
			  {
			   flag=true;
			  }
	    	}
	    if(id=='2')
 	{
	    	
      if(formTwo)
		  {
		   flag=true;
		  }
 	}
	    if(id=='3')
 	{
	    
      if(formThree)
		  {
		   flag=true;
		  }
 	}
	    if(id=='4')
 	{	
      if(formFour)
		  {
		   flag=true;
		  }
 	}
        if(flag==true)
        	{
		//alert("data to save: "+JSON.stringify($scope.fnaChildEducation));
		if($scope.customer.id){
			
			if(!$scope.fnaChildEducation.profileName){
				
				$scope.openPopup("Please enter a profile name");
				
			}else{
		
		//check for cff profile name then update/insert only fnaChildEducation record / insert both cff and fnaChildEducation
		
		$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.fnaChildEducation.profileName}];
   	    $jsonStore.retriveData($scope.cffCollectionName,$scope.queryPart,
   				   function (result){
   	   //update/insert only fnaChildEducation record 	
   		if(result.length>0)
   		{
   			$rootScope.cffObject={"_id":result[0]._id,"json":$scope.cff};
   		//check for fnaChildEducation proposalId in table then update/insert.
   			$scope.checkAndUpdatefnaChildEducation();
   			
		//insert both cff and fnaChildEducation records	
	   		}else{
	   			
	   		
		$scope.cff.profileName=$scope.fnaChildEducation.profileName;
		$scope.cff.dob=$scope.customer.dob;
		$scope.cff.id=$scope.customer.id;
		$scope.cff.cffStatus='Not Started';
		$scope.cff.createdDate=systemDate;
		$scope.cff.updatedDate=systemDate;
		
		$jsonStore.insertData($scope.cffCollectionName,$scope.cff,function (s){
		//alert(JSON.stringify("cffRecord Inserted"+s));
		
		
		$scope.checkAndUpdatefnaChildEducation();
		$rootScope.cffObject={"_id":null,"json":$scope.cff};
		}, 
		 function  (error){
			
			$logger.log("ERROR",JSON.stringify(error));
		}) ;
		
		
       
	   		
	   		}
   		},function  (error){
			
			$logger.log("ERROR",JSON.stringify(error));
		}) ;
	   		
			}

	}else{

		//Customer is not selected so no insert. have to put the data in the rootscope object 
		//TBD revisit this condition.
		$rootScope.fnaChildEducationObject={"_id":null,"json":$scope.fnaChildEducation};
		$scope.openAlert("Customer not present, data can be saved in profile status by selecting/creating customer.");
		
	}}};	

$scope.checkAndUpdatefnaChildEducation=function(){
	
	
	
	
	$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.fnaChildEducation.profileName,"proposalId":$scope.fnaChildEducation.proposalId}];
	    $jsonStore.retriveData($scope.fnaChildEducationCollectionName,$scope.queryPart,
				   function (result){
	    	//alert("query result: "+JSON.stringify(result));
	    	if(result.length>0)
   		{
	    		
			$scope.fnaChildEducation.lastUpdatedDate=systemDate;
	    		$scope.dataToUpdate= [{_id:result[0]._id, json: $scope.fnaChildEducation}];
			$jsonStore.updateData($scope.fnaChildEducationCollectionName,$scope.dataToUpdate,function (s){
				$scope.openAlert("FNA Child Education Updated Successfully.");
			
				$rootScope.fnaChildEducationObject={"_id":"saved","json":$scope.fnaChildEducation};
			}
			, function  (error){
				
				$logger.log("ERROR",JSON.stringify(error));
			}) ;
	    		
   		}else{
   			$scope.fnaChildEducation.createdDate=systemDate;
   			$scope.fnaChildEducation.lastUpdatedDate=systemDate;
   			$jsonStore.insertData($scope.fnaChildEducationCollectionName,$scope.fnaChildEducation,function (s){
				
				$scope.openAlert("FNA Child Education Saved Successfully.");
				$rootScope.fnaChildEducationObject={"_id":"saved","json":$scope.fnaChildEducation};
				}
			, function  (error){
				
				$logger.log("ERROR",JSON.stringify(error));
			}) ;
	}
	    }
	, function  (error){
		
		$logger.log("ERROR",JSON.stringify(error));
	}) ;
};
	
	
		
		$scope.ira_need_anlys = function() {
			document.getElementById('ira_tab3_inner').style.display = "block";
			document.getElementById(cur_ira_inner).style.display = "none";
			cur_ira_inner = "ira_tab3_inner";
			$scope.calculateAddlCapital=function(){
				if(($scope.fnaIncomeRA.capitalRequired!=null) && ($scope.fnaIncomeRA.existingFunds!=null)){
					$scope.fnaIncomeRA.additionalCapital=($scope.fnaIncomeRA.capitalRequired)-($scope.fnaIncomeRA.existingFunds);
				}
				/*else if($scope.fnaIncomeRA.existingFunds == 0)
				{
					$scope.fnaIncomeRA.additionalCapital = $scope.fnaIncomeRA.capitalRequired;
				}*/
			};
	

		};
		
		/* Child Education Fund Assessment starts */
		var cur_cdf_inner = "cdf_tab1_inner";
		$scope.cdf_select_cust = function() {
			document.getElementById('cdf_tab1_inner').style.display = "block";
			document.getElementById(cur_cdf_inner).style.display = "none";
			cur_cdf_inner = "cdf_tab1_inner";
		};
		$scope.cdf_child = function() {
			document.getElementById('cdf_tab1_inner').style.display = "block";
			document.getElementById(cur_cdf_inner).style.display = "none";
			cur_cdf_inner = "cdf_tab1_inner";
		};

		$scope.calculateNoOfYearsToCollege=function(){
			if(($scope.fnaChildEducation.currentEducationFees!=null) && ($scope.fnaChildEducation.projectedInflation!=null) 
					&& ($scope.fnaChildEducation.currentAge!=null) && ($scope.fnaChildEducation.uniEntryAge!=null)){	
				$scope.fnaChildEducation.yearsLeftToUni=$scope.fnaChildEducation.uniEntryAge-$scope.fnaChildEducation.currentAge;
				$scope.fnaChildEducation.childDesiredIncome=$scope.fnaChildEducation.yearsLeftToUni;
				$scope.fnaChildEducation.year1=$fnaformula.educationInvestment($scope.fnaChildEducation.projectedInflation,$scope.fnaChildEducation.currentEducationFees,$scope.fnaChildEducation.yearsLeftToUni,1);
				$scope.fnaChildEducation.year2=$fnaformula.educationInvestment($scope.fnaChildEducation.projectedInflation,$scope.fnaChildEducation.currentEducationFees,$scope.fnaChildEducation.yearsLeftToUni,2);
				$scope.fnaChildEducation.year3=$fnaformula.educationInvestment($scope.fnaChildEducation.projectedInflation,$scope.fnaChildEducation.currentEducationFees,$scope.fnaChildEducation.yearsLeftToUni,3);
				$scope.fnaChildEducation.year4=$fnaformula.educationInvestment($scope.fnaChildEducation.projectedInflation,$scope.fnaChildEducation.currentEducationFees,$scope.fnaChildEducation.yearsLeftToUni,4);
				$scope.fnaChildEducation.total=$fnaformula.educationInvestment($scope.fnaChildEducation.projectedInflation,$scope.fnaChildEducation.currentEducationFees,$scope.fnaChildEducation.yearsLeftToUni,'');
			}

		};

		$scope.cdf_educ_need = function() {
			
			// setting the fnaChildEducation status to In Progress 
			$scope.fnaChildEducation.status="In Progress";
			$scope.fnaChildEducation.createDate=systemDate;
			document.getElementById('cdf_tab2_inner').style.display = "block";
			document.getElementById(cur_cdf_inner).style.display = "none";
			cur_cdf_inner = "cdf_tab2_inner";
			$scope.calculateEducationNeed = function() {

				if(($scope.fnaChildEducation.existingSavings!=null) && ($scope.fnaChildEducation.existingSavingsYield!=null) && ($scope.fnaChildEducation.futureYearlySavings!=null) && ($scope.fnaChildEducation.futureYearlySavingsYield!=null)){		
					var existingYield = ($scope.fnaChildEducation.existingSavingsYield/100);
					var futureYield = ($scope.fnaChildEducation.futureYearlySavingsYield/100);
					
					$scope.test1=(Math.pow((1+((existingYield)*1)),$scope.fnaChildEducation.yearsLeftToUni));
					$scope.A=(($scope.fnaChildEducation.existingSavings)*$scope.test1);
					$scope.test2=($scope.fnaChildEducation.futureYearlySavings/futureYield);
					$scope.test3=(Math.pow((1+((futureYield)*1)),$scope.fnaChildEducation.yearsLeftToUni));
					$scope.test4=($scope.test3-1);
					$scope.FV=(($scope.test2)*($scope.test4));
					var A = parseInt($scope.A);
					var B = parseInt($scope.FV);
					$scope.fnaChildEducation.savingsProjection=(A+B);
					var C = parseInt($scope.fnaChildEducation.total);
					var D = parseInt($scope.fnaChildEducation.savingsProjection);
					$scope.fnaChildEducation.addlFundsRequired=(C-D);
				}

			};

		};
		$scope.cdf_finance = function() {
			document.getElementById('cdf_tab3_inner').style.display = "block";
			document.getElementById(cur_cdf_inner).style.display = "none";
			cur_cdf_inner = "cdf_tab3_inner";
			$scope.financialCal=function(){
				var investmentReturn = ($scope.fnaChildEducation.invstReturnProjection/100);
				$scope.fnaChildEducation.optionAYearly=(($scope.fnaChildEducation.addlFundsRequired * investmentReturn) / [(Math.pow((1+((investmentReturn)*1)),$scope.fnaChildEducation.yearsLeftToUni)- 1)]);
				$scope.c=investmentReturn/12;
				var test1 = (($scope.fnaChildEducation.optionAYearly)*(1+((investmentReturn)*1))*$scope.c);
				var test2 = ((Math.pow((1+ $scope.c),12)-1));
				$scope.fnaChildEducation.optionBMonthly=test1/test2;

			};
		};
		
		
		/* Draw Child  FNA Graphs*/
		
		$scope.fnaChildEducationGraphDraw=function(childEducationdata){

			// alert("childEducationdata.existingSavings "+ childEducationdata.existingSavings);

			$scope.childEducation = [

			                      {

			                          "key": "Year 1",

			                          "color":"#006AB6",

			                          "values": [ [ "Income" , childEducationdata.year1],[ "Fund",0]]

			                      },

			                      {

			                          "key": "Year 2",

			                          "color":"#A30E15",

			                          "values": [ [ "Income"  ,childEducationdata.year2],[ "Fund"  ,0]]

			                      },

			                      {

			                          "key": "Year 3",

			                          "color":"#679120",

			                          "values": [ [ "Income"  ,childEducationdata.year3],[ "Fund"  ,0]]

			                      },,

			                      {

			                          "key": "Year 4",

			                            "color":"#662071",

			                          "values": [ [ "Income"  ,childEducationdata.year4],[ "Fund"  ,0]]

			                      },

			                      {

			                          "key": "Existing Savings",

			                            "color":"#3C4840",

			                          "values": [ [ "Income"  ,0],[ "Fund", childEducationdata.existingSavings]]

			                      },

			                      {

			                          "key": "Additional Funds",

			                            "color":"#5A0F00",

			                          "values": [ [ "Income"  ,0],[ "Fund", childEducationdata.addlFundsRequired]]

			                      }


			                  ];


			  $scope.$on('tooltipShow.directive', function(event){

			              console.log('scope.tooltipShow', event);

			          });


			          $scope.$on('tooltipHide.directive', function(event){

			              console.log('scope.tooltipHide', event);

			          });
		};
		
		
//		
		/* footer tab functionality starts */
		var fna_cur_tab="fna_tab1_body";
		var fna_foot_tab="fna_tab1";
		$scope.fnaTabClick = function(id) {
			var fna_foot_id = id;
			var fna_clicked_id = (fna_foot_id+"_body");
			document.getElementById(fna_foot_tab).setAttribute("class", "foot_li_normal");
			document.getElementById(fna_foot_id).setAttribute("class", "foot_li_orange");
			document.getElementById(fna_cur_tab).style.display = "none";
			document.getElementById(fna_clicked_id).style.display = "block"; 
			fna_cur_tab = fna_clicked_id;
			fna_foot_tab = fna_foot_id;
		};
		
		
		//popup to enter profileName open
		$scope.fna_profile_status_open = function(){
			document.getElementById('fna_profile_status_popup').style.display = "block";
			document.getElementById('popup_overlay').style.display = "block";
			if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
			    $scope.$apply();
			}
			};
			
		//popup close function
		$scope.delete_popup_close = function(){
		document.getElementById('fna_profile_status_popup').style.display = "none";
		document.getElementById('popup_overlay').style.display = "none";
		document.getElementById('info_popup1').style.display = "none";
		document.getElementById('info_popup2').style.display = "none";
		document.getElementById('info_popup3').style.display = "none";
		document.getElementById('info_popup4').style.display = "none";
		document.getElementById('info_popup5').style.display = "none";
		document.getElementById('info_popup6').style.display = "none";
		document.getElementById('info_popup7').style.display = "none";
		document.getElementById('info_popup8').style.display = "none";
		document.getElementById('fna_alert_popup').style.display = "none";
	};
	// popup ends here 
	
	// information popup starts here 
	
	$scope.information_open1 = function(){
		document.getElementById('info_popup1').style.display = "block";
	};
	$scope.information_open2 = function(){
		document.getElementById('info_popup2').style.display = "block";
	};
	$scope.information_open3 = function(){
		document.getElementById('info_popup3').style.display = "block";
	};
	$scope.information_open4 = function(){
		document.getElementById('info_popup4').style.display = "block";
	};
	$scope.information_open5 = function(){
		document.getElementById('info_popup5').style.display = "block";
	};
	$scope.information_open6 = function(){
		document.getElementById('info_popup6').style.display = "block";
	};
	$scope.information_open7 = function(){
		document.getElementById('info_popup7').style.display = "block";
	};
	$scope.information_open8 = function(){
		document.getElementById('info_popup8').style.display = "block";
	};
	// information popup ends here 
		 
		 
	
        
    
      // setting the root scope and navigating to profile page 
	  // on clicking of profile button in profile button in fnaIncme page
	
       $scope.goToProfileStatusFromFnaIncome=function(){
        
    	//set the fnaIncome object to rootScope fnaIncomeObject
	   // checking the null condition for fnaIncomeObject 
    	  
	   if($rootScope.fnaIncomeObject._id==undefined){
	      $rootScope.fnaIncomeObject._id=null;
	    }
	   
	 
	    $rootScope.fnaIncomeObject.json=$scope.fnaIncomeRA;
    	   
		$rootScope.$Footer.profileStatus('commonProfile', 'income');
      };
   

      // setting the root scope and navigating to profile page 
	  // on clicking of profile button in profile button in fnachildEducation page
      
      $scope.goToProfileStatusFromFnaChildDducation=function(){
    	
	    //set the childEducation object to rootScope fnaChildEducationObject
	  if($rootScope.fnaChildEducationObject._id==undefined)
		 {
		   $rootScope.fnaChildEducationObject._id=null;
		 }
	 
	   $rootScope.fnaChildEducationObject.json=$scope.fnaChildEducation;
    	  
   	   $rootScope.$Footer.profileStatus('commonProfile', 'childeducation');
    	 
	};
	
	/*Draw FnaIncome Graph.*/
	

			// alert popup starts 
			/*$scope.fna_alert_popup_open = function(){
				document.getElementById('fna_alert_popup').style.display = "block";
				document.getElementById('popup_overlay').style.display = "block";
			};*/
			
			$scope.openPopup=function(message){
				$scope.content="<p>"+message+"</p>";
				if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
				    $scope.$apply();
				}
				document.getElementById('fna_profile_status_popup').style.display = "block";
				document.getElementById('popup_overlay').style.display = "block";
			};
			$scope.closePopup=function(){
				
				  if($rootScope.$Footer.subFooter=='fna_tab1')
					{
					   $scope.fnaIncomeRA.profileName=$scope.userenteredProfilename;
					   $scope.saveFnaIncomeRA();
					   
					}else if($rootScope.$Footer.subFooter=='fna_tab2'){
						$scope.fnaChildEducation.profileName=$scope.userenteredProfilename;
						$scope.saveFnaChildEducation();
					}
				document.getElementById('popup_overlay').style.display = "none";
				document.getElementById('fna_profile_status_popup').style.display = "none";
			};
			$scope.openAlert=function(message){
				$scope.content="<p>"+message+"</p>";
				if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
				    $scope.$apply();
				}
				document.getElementById('fna_alert_popup').style.display = "block";
				document.getElementById('popup_overlay').style.display = "block";
			};
			$scope.closeAlert=function(){
				
				document.getElementById('popup_overlay').style.display = "none";
				document.getElementById('fna_alert_popup').style.display = "none";
			};
//			alert popup ends 
			
			document.getElementById("settings_img").setAttribute("class","hd_settings");
			
			$scope.getPDF = function(){
				
			//	alert("working");
				var svgdiv  = document.getElementById('incomeGraph');
				 var svg = svgdiv.querySelector("svg");

				var   xml  = new XMLSerializer().serializeToString(svg);
				  var  data = "data:image/svg+xml;base64," + btoa(xml);

						var canvas = document.createElement("canvas");
						canvas.width="300";
						canvas.height="300";
					  context = canvas.getContext("2d");
					   context.drawSvg(data, 0, 0);
					    var canvasdata = canvas.toDataURL("image/png");
						
						$scope.graphIncomeImageData=canvasdata;
						//alert("working");
				var docDefinition = { 
	footer: 
	function(page, pages) { 
		return { 
	
        columns: [ 
			{
					text:"Prepared by :  \n Agent Code :  \nDate Prepared : "
			},
            { 
                alignment: 'right',
                text: [
					{text: 'MOS version 1.10.\n\n'},
                    { text: 'page ' + page.toString()},
                    ' of ',
                    { text: pages.toString(), italics: true }
                ]
            }
        ],
        margin: [40, 10, 20, 40]
    };
},
	
	content: 	[
				
				{
			
			columns: [
				{
					text: [
						'AmMetlife Insurance Berhad(15743-P) \n',
						'(',
						{ text: 'formerly known as Amlife Insurance Berhad', italics: true, fontSize: 7},
						') Licensed insurer \n Level 19,Menera AmMetlife. No.1,Jalan Lumut,50400 Kaula Lampur'
					]
				},
				{
					image: 'metLifeLogo',
					width: 200,
					height: 26,
					margin: [0, 0, 0, 5]
				}
			]
		},
		{
			columns:
			[
				{
					image: 'line',
					width: 530,
					height: 3,
					margin:[0, 0, 0, 20]
				}
			]	
		},
		{
			columns:
			[
				{
					text: $rootScope.$Language.fnaPdfData.capitalIRA, style:'header',
					margin: [0, 10]
				}
			]	
		},
		{
			style: 'firstTable',
			table: {
					widths: [100, 50],
					body: [
							[$rootScope.$Language.commonData.designedFor, {text:$scope.fnaIncomeRA.designedFor+"", fillColor: '#BDE9EF', alignment: 'center'}]
		  				]
					},
			layout: 'noBorders'
		},
		{
			style: 'tableExample',
			table: {
					widths: [10, 250, 50],
					body: [
							['1.',$rootScope.$Language.fna.incomeReplacement.currentAnnualIncome, {text:$scope.fnaIncomeRA.currentIncome+"", style:'firstValues'}],
							[' ',' ', ' '],
							['2.',$rootScope.$Language.fna.incomeReplacement.percentageIncomeToBeProtected, {text:$scope.fnaIncomeRA.incomePercentage+"", style:'firstValues'}],
							[' ',' ', ' '],
							['3.',$rootScope.$Language.commonData.desiredIncomeToBeProtected, {text:$scope.fnaIncomeRA.desiredIncome+"",alignment: 'right'}],
							[' ',' ', ' '],
							['4.',$rootScope.$Language.fna.incomeProtection.yearsOfIncomeProtection, {text:$scope.fnaIncomeRA.yearsProtection+"", style:'firstValues'}],
							[' ',' ', ' '],
		  				]
					},
			layout: 'noBorders'
		},
		{
			columns:
			[
				{
					text: $rootScope.$Language.commonData.incomeProtection, style:'subHeader',
					margin: [0, 0, 0, 10]
				}
			]	
		},
		{
			style: 'secondTable',
			table: {
					body: [
							['Desired Annual Income Protection (RM)', 'Inflation Rate', 'Projection of Investment Rate', 'Years of Income Protection (RM)', 'Present Value (PV) Capital Requirement (RM)'],
							[$scope.fnaIncomeRA.desiredIncome+"", {text:$scope.fnaIncomeRA.inflationRate+"", style:'blueValues'}, {text:$scope.fnaIncomeRA.investmentRate+"", style:'blueValues'}, $scope.fnaIncomeRA.yearsProtection+"",  $scope.fnaIncomeRA.presentValue+""]
						  ]
				}
		},
				
		{
			style: 'tableExample',
			table: {
					widths: [10, 300, 50, 75],
					body: [
							['5.','Capital Required to Fund Income Needs', {text:$scope.fnaIncomeRA.capitalRequired+"",alignment: 'right'}, ''],
							[' ',' ', ' ', ' '],
							['6.','Existing Funds Available to Fund Income Needs (inclusive of savings, \ninvestable assets and sum assured of all insurance policies)', {text:$scope.fnaIncomeRA.existingFunds+"", style:'firstValues'}, ''],
							[' ',' ', ' ', ' '],
							['7.', 'Additional Capital Required to Fund Income Needs', {text:$scope.fnaIncomeRA.additionalCapital+"",alignment: 'right', color: '#ff0000'},{text:'If the value is negative, no additional fund is required.', italics: true, alignment: 'right'}],
							[' ',' ', ' ', ' '],
		  				]
					},
			layout: 'noBorders'
		},
		{
			columns:
			[
				{
					text: 'Financial Solution', style:'subHeader',
					margin: [0, 0, 0, 10]
				}
			]	
		},
		{
			style: 'tableExample',
			table: {
					widths: [10, 300, 50, 75],
					body: [
							['5.','Sum Assured required', {text:$scope.fnaIncomeRA.additionalCapital+"",alignment: 'right'}, ''],
							[' ',' ', ' ', ' '],
		  				]
					},
			layout: 'noBorders'
		},
		{
			style: 'tableExample',
			table: {
					widths: [10, 'auto'],
					body: [
							['1',{text: ['The amount of RM ', { text: "  "+$scope.fnaIncomeRA.additionalCapital+"  ", decoration: 'underline', color: '#ff0000'}, ' would help to ensure that your loved ones and family members can continue the current lifestyle if anything happens to you.' ]}],
							[' ', ' '],
							['2', 'Allow us to use a simple sales illustration to help you close the gap.'],
							[' ', ' '],
		  				]
					},
			layout: 'noBorders'
		},
		{text: 'Disclaimer: The formulation provided is meant for projection purposes. The formulation also uses assumptions for inflation rates, rates of returns for investments which are highly subjective as well. Where necessary, further expert advice should be sought over matters relating to tax, company laws and other related items. AmMetLife will only take responsibility for information regarding our insurance products.\nPenafian: Pengiraan yang disediakan adalah untuk tujuan rujukan. Pengiraan juga menggunakan andaian kadar inflasi, kadar pulangan bagi pelaburan yang sangat subjektif juga.Di mana perlu, nasihat pakar perlu dirujuk bagi hal-hal yang berhubungan dengan cukai, undang-undang syarikat dan lain-lain yang berkaitan. AmMetLife hanya bertanggungjawab untuk maklumat mengenai insurans produk.', italics: true, fontSize:7},
		{
				columns:
				[
					{
						text: '',
						margin: [0, 150]
					}
				]	
			},
		{
			
			columns: [
				{
					text: [
						'AmMetlife Insurance Berhad(15743-P) \n',
						'(',
						{ text: 'formerly known as Amlife Insurance Berhad', italics: true, fontSize: 7},
						') Licensed insurer \n Level 19,Menera AmMetlife. No.1,Jalan Lumut,50400 Kaula Lampur'
					]
				},
				{
					image: 'metLifeLogo',
					width: 200,
					height: 26,
					margin: [0, 0, 0, 5]
				}
			]
		},
		{
			columns:
			[
				{
					image: 'line',
					width: 530,
					height: 3,
					margin:[0, 0, 0, 20]
				}
			]	
		},
		{
			columns:
			[
				{
					text: 'Income Replacement Assessment', style:'header',
					margin: [0, 10]
				}
			]	
		},
		{
		      image:  $scope.graphIncomeImageData,
				alignment: 'center'
	    }
	],
				styles: {
						header: {
							fontSize: 15,
							bold: true,
							alignment: 'center',
						},
						subHeader:
						{
							fontSize: 8,
							bold: true,
							decoration: 'underline'
						},
						labels:
						{
							fontSize: 20,
						},
						dvalues:
						{
							background:'#ff0000'
						},
						firstValues:
						{
							fillColor: '#BDE9EF', 
							alignment: 'right', 
							color:'#3625FD',
							bold: true
						},
						firstTable:
						{
							margin:[0, 0, 0, 10]
						},
						secondTable:
						{
							alignment: 'center',
							margin:[0, 0, 0, 10]
						},
						blueValues:
						{
							fillColor: '#BDE9EF', 
							alignment: 'center', 
							color:'#3625FD',
							bold: true
						}
					},
					defaultStyle: 
						{
							alignment: 'justify',
							fontSize: 8,
							color: '#000000'
						}
			};
				//pdfMake.createPdf(docDefinition).download('test.pdf');
				$FileUtils.generatePdf(docDefinition,"IncomeRA");
				/*var fileName="IncomeRA.pdf";
 				var pdfOutput;

 				pdfMake.createPdf(docDefinition).getBuffer(function(base64){
 					   
 					pdfOutput =  new Blob([base64]);

 				    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
 				    	alert("writing: 	"+fileSystem.root.fullPath);
 				      
 				       fileSystem.root.getFile(fileName, {create: true}, function(entry) {
 				         
 				          entry.createWriter(function(writer) {
 				             writer.onwrite = function(evt) {
 				             alert("write success");
 				          };
 				     
 				        
 				             writer.write(pdfOutput);
 				    
 				         // writer.write(buffer);
 				          }, function(error) {
 				        	 console.log("error:"+error);
 				          });
 				     
 				       }, function(error){
 				          console.log(error);
 				       });
 				    },
 				    function(event){
 				     console.log( evt.target.error.code );
 				    }); 
 				  
 					});*/
				                     
				                     };
			

				                     $scope.getchildPDF = function(){
				                    //	 alert("working");
				         				var svgdiv  = document.getElementById('childGraph');
				         				 var svg = svgdiv.querySelector("svg");

				         				var   xml  = new XMLSerializer().serializeToString(svg);
				         				  var  data = "data:image/svg+xml;base64," + btoa(xml);

				         						var canvas = document.createElement("canvas");
				         						canvas.width="300";
				         						canvas.height="300";
				         					  context = canvas.getContext("2d");
				         					   context.drawSvg(data, 0, 0);
				         					    var canvasdata = canvas.toDataURL("image/png");
				         						
				         						$scope.graphChildImageData=canvasdata;
				         						//alert("working");
				         				
				         				var docDefinition = { 
	footer: 
	function(page, pages) { 
		return { 
	
        columns: [ 
			{
					text:"Prepared by :  \n Agent Code :  \nDate Prepared : "
			},
            { 
                alignment: 'right',
                text: [
					{text: 'MOS version 1.10.\n\n'},
                    { text: 'page ' + page.toString()},
                    ' of ',
                    { text: pages.toString(), italics: true }
                ]
            }
        ],
        margin: [40, 10, 20, 40]
    };
},
	
	content: 	[
				
				{
			
			columns: [
				{
					text: [
						'AmMetlife Insurance Berhad(15743-P) \n',
						'(',
						{ text: 'formerly known as Amlife Insurance Berhad', italics: true, fontSize: 7},
						') Licensed insurer \n Level 19,Menera AmMetlife. No.1,Jalan Lumut,50400 Kaula Lampur'
					]
				},
				{
					image: 'metLifeLogo',
					width: 200,
					height: 26,
					margin: [0, 0, 0, 5]
				}
			]
		},
		{
			columns:
			[
				{
					image: 'line',
					width: 530,
					height: 3,
					margin:[0, 0, 0, 20]
				}
			]	
		},
		{
			columns:
			[
				{
					text: $rootScope.$Language.fnaPdfData.capitalCEFA, style:'header',
					margin: [0, 10]
				}
			]	
		},
		{
			style: 'firstTable',
			table: {
					widths: [100, 50],
					body: [
							[$rootScope.$Language.commonData.designedFor, {text:$scope.fnaChildEducation.designedFor+"",fillColor: '#BDE9EF', alignment: 'center'}]
		  				]
					},
			layout: 'noBorders'
		},
		{
			columns:
			[
				{
					text: '1. ', width: 20
				},
				{
					text: $rootScope.$Language.commonData.childEducationFund, style:'subHeader',
					margin: [0, 0, 0, 10]
				}
			]	
		},
		{
			style: 'secondTable',
			table: {
					body: [
							["Child's Name", ['Current Education Fees',{text:'(for a year)',italics: true, fontSize: 7 }] , 'Projection of Education Cost Inflation rate', 'Current Age', 'Uni/College Entry Age', 'No. of Year to Uni/College'],
							[{text:$scope.fnaChildEducation.childName+"", style:'blueValues'}, {text:$scope.fnaChildEducation.currentEducationFees+"", style:'blueValues'}, {text:$scope.fnaChildEducation.projectedInflation+"", style:'blueValues'}, {text:$scope.fnaChildEducation.currentAge+"", style:'blueValues'}, {text:$scope.fnaChildEducation.uniEntryAge+"", style:'blueValues'}, $scope.fnaChildEducation.yearsLeftToUni+""]
						  ]
				}
		},
				
		{
			columns:
			[
				{
					text: '1. ', width: 20
				},
				{
					text: $rootScope.$Language.fnaPdfData.projectionOfEducationcostWhen, width: 160
				},
				{
					text: $scope.fnaChildEducation.childName+"", decoration: 'underline', width: 40
				},
				{
					text: 'is', width: 20
				},
				{
					text: $scope.fnaChildEducation.currentAge+"", decoration: 'underline', width: 20
				},
				{
					text: 'years old', width: 50, margin: [0, 0, 0, 10]
				},
			]
		},
		{
			style: 'secondTable',
			table: {
					widths:[75, 75, 75, 75, 178],
					body: [
							[$rootScope.$Language.fnaPdfData.forYearOne, $rootScope.$Language.fnaPdfData.forYearTwo , $rootScope.$Language.fnaPdfData.forYearThree, $rootScope.$Language.fnaPdfData.forYearFour, $rootScope.$Language.fnaPdfData.totalProjectionOf],
							[$scope.fnaChildEducation.year1+"", $scope.fnaChildEducation.year2+"",$scope.fnaChildEducation.year3+"",$scope.fnaChildEducation.year4+"",{text:$scope.fnaChildEducation.total+"", bold: true}],
						  ]
				}
		},
		{
			style: 'thirdTable',
			table: {
					widths: [10, 250, 30, 40, 10, 40, 30, 50],
					body: [
							['3.','Existing Saving and Investable Available Assets for Education Funding',' ', ' ', ' ', {text:$scope.fnaChildEducation.existingSavings+"",style:'blueValuesa'}, {text:'yield', alignment:'right'}, {text:$scope.fnaChildEducation.existingSavingsYield+"",style:'blueValuesa'}],
							[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
							['4.','Future Yearly Savings and Investment for',{text:$scope.fnaChildEducation.childName+"", decoration: 'underline'}, ' until age ', {text:$scope.fnaChildEducation.uniEntryAge+"", decoration: 'underline'}, {text:$scope.fnaChildEducation.futureYearlySavings+"",style:'blueValuesa'}, {text:'yield', alignment:'right'}, {text:$scope.fnaChildEducation.futureYearlySavingsYield+"",style:'blueValuesa'}],
							[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
							['5.','Projection of Total Savings and Investable Assets for',{text:$scope.fnaChildEducation.childName+"", decoration: 'underline'}, ' at age ', {text:$scope.fnaChildEducation.uniEntryAge+"", decoration: 'underline'}, {text:$scope.fnaChildEducation.savingsProjection+"" , alignment:'right'}, ' ', ' '],
							['6.','Additional Fund Required for Education Funding for',{text:$scope.fnaChildEducation.childName+"", decoration: 'underline'}, ' at age ', {text:$scope.fnaChildEducation.uniEntryAge+"", decoration: 'underline'}, {text:$scope.fnaChildEducation.addlFundsRequired+"", alignment:'right'}, {text:'If value is negative, no additional fund is required.', italics:true, colSpan: 2}, {}],
		  				]
					},
			layout: 'noBorders'
		},
		{
			columns:
			[
				{
					text: 'Financial Solution', style:'subHeader',
					margin: [0, 0, 0, 10]
				}
			]
		},
		{
			table: {
					widths:[20, 75, 200, 50],
					body: [
							[" ", {text:'Projection of investment return (%)', colSpan:2} , {}, {text: $scope.fnaChildEducation.invstReturnProjection+"", style:'blueValuesa'}],
							[" ", {text:'Option A', color:'#3625FD'} , {text:'Yearly Investment required', color:'#3625FD'}, {text: $scope.fnaChildEducation.optionAYearly+"", alignment:'right'}],
							[" ", {text:'Option B', color:'#3625FD'} , {text:'Monthly Investment required', color:'#3625FD'}, {text: $scope.fnaChildEducation.optionBMonthly+"", alignment:'right'}],
							
						  ]
				},
				layout: 'noBorders'
		},
		{text:'Notes', bold: true, margin:[0, 10]},
		{
			style: 'tableExample',
			table: {
					widths: [10, 'auto'],
					body: [
							['1',{text: ['To accumulate this amount of RM', { text: "  "+$scope.fnaChildEducation.addlFundsRequired+"  ", color: '#ff0000'}, "and to ensure that your child's education journey is not distrupted, should anything happens to you as the payor, we recommend that you take on the ",{ text: 'Payor Benefit Rider', decoration: 'underline', color: '#ff0000'}, ' for the plan.' ]}],
							[' ', ' '],
							['2', 'Allow us to use a simple sales illustration to help you close the gap.'],
		  				]
					},
			layout: 'noBorders'
		},
		

		{margin:[0, 10], text: 'Disclaimer: The formulation provided is meant for projection purposes. The formulation also uses assumptions for inflation rates, rates of returns for investments which are highly subjective as well. Where necessary, further expert advice should be sought over matters relating to tax, company laws and other related items. AmMetLife will only take responsibility for information regarding our insurance products.\nPenafian: Pengiraan yang disediakan adalah untuk tujuan rujukan. Pengiraan juga menggunakan andaian kadar inflasi, kadar pulangan bagi pelaburan yang sangat subjektif juga.Di mana perlu, nasihat pakar perlu dirujuk bagi hal-hal yang berhubungan dengan cukai, undang-undang syarikat dan lain-lain yang berkaitan. AmMetLife hanya bertanggungjawab untuk maklumat mengenai insurans produk.', italics: true, fontSize:7},
		{
				columns:
				[
					{
						text: '',
						margin: [0, 150]
					}
				]	
			},
		{
			
			columns: [
				{
					text: [
						'AmMetlife Insurance Berhad(15743-P) \n',
						'(',
						{ text: 'formerly known as Amlife Insurance Berhad', italics: true, fontSize: 7},
						') Licensed insurer \n Level 19,Menera AmMetlife. No.1,Jalan Lumut,50400 Kaula Lampur'
					]
				},
				{
					image: 'metLifeLogo',
					width: 200,
					height: 26,
					margin: [0, 0, 0, 5]
				}
			]
		},
		{
			columns:
			[
				{
					image: 'line',
					width: 530,
					height: 3,
					margin:[0, 0, 0, 20]
				}
			]	
		},
		{
			columns:
			[
				{
					text: 'Child Education Fund Assessment', style:'header',
					margin: [0, 10]
				}
			]	
		},
		{
		      image:  $scope.graphChildImageData,
				alignment: 'center'
	    }
	],
				styles: {
						header: {
							fontSize: 15,
							bold: true,
							alignment: 'center',
						},
						subHeader:
						{
							fontSize: 8,
							bold: true,
							decoration: 'underline'
						},
						labels:
						{
							fontSize: 20,
						},
						dvalues:
						{
							background:'#ff0000'
						},
						firstValues:
						{
							fillColor: '#BDE9EF', 
							alignment: 'right', 
							color:'#3625FD',
							bold: true
						},
						firstTable:
						{
							margin:[0, 0, 0, 10]
						},
						secondTable:
						{
							alignment: 'center',
							margin:[0, 0, 0, 10]
						},
						blueValues:
						{
							fillColor: '#BDE9EF', 
							alignment: 'center', 
							color:'#3625FD',
							bold: true
						},
						blueValuesa:
						{
							fillColor: '#BDE9EF', 
							alignment: 'right', 
							color:'#3625FD',
							bold: true
						},
									
						thirdTable:
						{
							fontSize: 8,
						},
					},
					defaultStyle: 
						{
							fontSize: 8,
							color: '#000000'
						}
			};
				         			//pdfMake.createPdf(docDefinition).download('test.pdf');
				         				                     
				         				$FileUtils.generatePdf(docDefinition,"ChildEducation");  
				         			/*	var fileName="ChildEducation.pdf";
				         				var pdfOutput;

				         				pdfMake.createPdf(docDefinition).getBuffer(function(base64){
				         					   
				         					pdfOutput =  new Blob([base64]);

				         				    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
				         				    	alert("writing: 	"+fileSystem.root.fullPath);
				         				      
				         				       fileSystem.root.getFile(fileName, {create: true}, function(entry) {
				         				         
				         				          entry.createWriter(function(writer) {
				         				             writer.onwrite = function(evt) {
				         				             alert("write success");
				         				          };
				         				     
				         				        
				         				             writer.write(pdfOutput);
				         				    
				         				         // writer.write(buffer);
				         				          }, function(error) {
				         				        	 console.log("error:"+error);
				         				          });
				         				     
				         				       }, function(error){
				         				          console.log(error);
				         				       });
				         				    },
				         				    function(event){
				         				     console.log( evt.target.error.code );
				         				    }); 
				         				  
				         					});*/
				                     };

/* $scope.drawFnaIncomeGraph=function(data){
		
		
		//alert("$scope.fnaIncomeRA.currentIncome "+ $scope.fnaIncomeRA.currentIncome);
	
		//alert("$scope.exampleData "+JSON.stringify($scope.exampleData));
		$scope.graphIncome = [
		                      {
		                         "key": "Current Income",
		                          "color":"blue",
		                          "values": [ [ "Current Income", $scope.fnaIncomeRA.currentIncome],["Capital Required",0] ]
		                     },
		                      {
		                          "key": "Current Income",
		                           "color":"red",
		                          "values": [ [ "Current Income",0],[ "Capital Required",$scope.fnaIncomeRA.currentIncome]  ]
		                     },
		                     {
		                         "key": "Capital Required",
		                          "color":"green",
		                         "values": [ [ "Current Income",0],[ "Capital Required",$scope.fnaIncomeRA.capitalRequired]  ]
		                     }
		                 ];

		
		
		  $scope.$on('tooltipShow.directive', function(event){
              console.log('scope.tooltipShow', event);
          });

          $scope.$on('tooltipHide.directive', function(event){
              console.log('scope.tooltipHide', event);
          });

	}; */
			$scope.drawFnaIncomeGraph=function(data){

				//alert("$scope.exampleData "+JSON.stringify($scope.exampleData));

				$scope.graphIncome = [

				                      {

				                        "key": "Capital Required",

				                          "color":"#006AB6",

				                          "values": [ [ "Income", $scope.fnaIncomeRA.capitalRequired],["Fund",0] ]

				                    },

				                      {

				                          "key": "Existing Funds",

				                          "color":"#A30E15",

				                          "values": [ [ "Income",0],["Fund",$scope.fnaIncomeRA.existingFunds]]

				                    },

				                      {

				                          "key": "Additional Capital",

				                          "color":"#679120",

				                          "values": [ [ "Income",0],["Fund",$scope.fnaIncomeRA.additionalCapital]]

				                    }

				                ];


				  $scope.$on('tooltipShow.directive', function(event){

				              console.log('scope.tooltipShow', event);

				          });


				          $scope.$on('tooltipHide.directive', function(event){

				              console.log('scope.tooltipHide', event);

				          });


				};
				
				$scope.ira_finance = function() {
					
					$scope.fnaIncomeRA.status="Completed";
					document.getElementById('ira_tab4_inner').style.display = "block";
					document.getElementById(cur_ira_inner).style.display = "none";
					cur_ira_inner = "ira_tab4_inner";
					//alert($scope.fnaIncomeRA.desiredIncome + " == "+ $scope.fnaIncomeRA)
					if($scope.fnaIncomeRA.desiredIncome != undefined || $scope.fnaIncomeRA.desiredIncome != null){
					
						$scope.drawFnaIncomeGraph($scope.fnaIncomeRA);
					}
					
					$scope.requiredIncome=$scope.fnaIncomeRA.additionalCapital;
				};
				
				$scope.cdf_finance_summary = function() {
					$scope.fnaChildEducation.status="Completed";
					if(($scope.fnaChildEducation.year1 != undefined || $scope.fnaChildEducation.year1 != null)){
						$scope.fnaChildEducationGraphDraw($scope.fnaChildEducation);
					}
					
					document.getElementById('cdf_tab4_inner').style.display = "block";
					document.getElementById(cur_cdf_inner).style.display = "none";
					cur_cdf_inner = "cdf_tab4_inner";
				};
				
				if($rootScope.$Footer.preSubFooter == "income")
			      {
			        $scope.ira_finance();
			      }
			    if($rootScope.$Footer.preSubFooter == "childeducation")
			       {
			        $scope.cdf_finance_summary();
			       }


				
});



	

///*********************** END *************************************/
