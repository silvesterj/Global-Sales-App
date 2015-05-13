
/* JavaScript content from js/controllers/selectCustomerCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
 */
/*
 *
 * file name : < settingCtrl.js >
 * This is the controller js file for select customer page*
 *
 * @author <Abhisek Bhattacharyya>
 * @version <1.2> *
 */ 

///*********************** Loading Json **************************/

app.controller('selectCustomerCtrl', function($scope,$location,$rootScope,$adapterUtility,$commonUtility,$jsonStore ) {

	var clickCounter=false;
	myHeight = document.body.offsetHeight;
	$scope.customers=[];
	$scope.customersname=[];
	$scope.customerTable = 'customer';
	$scope.customerProfileData=[];
	/*Show Recent Customer....*/
	/* query  the latest five records of customer and display on left side panel*/
	var el=document.getElementsByClassName("advSearch_mrg");
	el[0].style.display="none";
	//TBD
	if($rootScope.$Footer.subFooter!="profileStatus"){
		$rootScope.resetRootScopeVar(); // Clear the recent customer object.
	}
	
		$jsonStore.retriveAllData($scope.customerTable,function (customerResultSet){
		if(customerResultSet.length !==0){
			for(var i=0;i<customerResultSet.length;i++){
				// push to local jsonstoredata array and populate it on the the left side.  
				
				$scope.customers.push(customerResultSet[i]); //data update need record id also 

			}
			
			for(var i=0;i<$scope.customers.length;i++){
				
				if($scope.customers[i].json.customerImageSmallPath=="path2"||$scope.customers[i].json.customerImageSmallPath==undefined){
					$scope.customers[i].json.customerImageSmallPath="assets/images/customer_icon.png";
				}
			}

		}	

	}, function (error){
		$logger.log("ERROR",JSON.stringify(error));
	});
	
////////////////////////////////////////////////////////
	
/*	$jsonStore.retriveRecentCustomerData($scope.customerTable,function (customerResultSet){
		
		if(customerResultSet.length !==0){
			
			for(var i=0;i<customerResultSet.length;i++){
				alert(customerResultSet[i].json.dob);
				$scope.customers.push(customerResultSet[i]);
			}
			
				for(var i=0;i<$scope.customers.length;i++){
				
				if($scope.customers[i].json.customerImageSmallPath=="path2"||$scope.customers[i].json.customerImageSmallPath==undefined){
					$scope.customers[i].json.customerImageSmallPath="assets/images/customer_icon.png";
				}
			}

		
		}
	},
			function (error){
		$logger.log("ERROR",JSON.stringify(error));
	});*/
	
	////////////////////////////////////////////////////////////////////

	/*query  all the customer records and display the right side of panel*/

	$jsonStore.retriveAllData($scope.customerTable,function (customerResultSet){
		if(customerResultSet.length !==0){
			for(var i=0;i<customerResultSet.length;i++){
				// push to local jsonstoredata array and populate it on the the left side.  

				$scope.customerProfileData.push(customerResultSet[i]); //data update need record id also 

			}

			// first time, image wont be available in customer object, so set the default image 
			for(var i=0;i<$scope.customerProfileData.length;i++){
				//$scope.customerProfileData[i].json.dob= new Date ($scope.customerProfileData[i].json.dob);
				if($scope.customerProfileData[i].json.customerImageSmallPath=="path2"||$scope.customerProfileData[i].json.customerImageSmallPath==undefined){
					$scope.customerProfileData[i].json.customerImageSmallPath="assets/images/customer_icon.png";
				}
			}

		}	

	}, function (error){
		$logger.log("ERROR",JSON.stringify(error));
	});


	/*when customer is selected, reset all root scope values and 
	 * set teh rootscope customer object with selected customer object including _id and json */
	$scope.selectCustomer=function(selectedCustomer,id){

		// css should use another functiona to handle selection color

		/* snario - customer getting selected for first time - set the rootscope customer object with this selected customer object
			  .. 2 - customer getting deselected  -- set root customer to null again
			  .. 3 - another customer getting selected so previously selected customer get reset
			  and newly selected customer will be set to rootscope customer object
		 */
		// checking for null and not equal condition,  
		//and 
		var id1=id+"left";
		var id2=id+"right";
		//alert($scope.customerProfileData.length);
		for(i=0; i<$scope.customerProfileData.length; i++)
		{
			document.getElementById(i+"left").style.backgroundColor = "#ffffff";
			//document.getElementById(i+"right").style.backgroundColor = "#ffffff";
		}
		if($rootScope.IscustomerAlredySelected!=selectedCustomer ){
			//IscustomerAlredySelected to selected index
			$rootScope.IscustomerAlredySelected=selectedCustomer;
			//set customer rootScope with selected customer
			$rootScope.customerObject=selectedCustomer;
			document.getElementById(id1).style.backgroundColor="#D6ECF9";
			//document.getElementById(id2).style.backgroundColor="#FF8000";
			//TBD showing selected row with css effect Abhisek
		}else{
			//  alert("De-Selected");
			document.getElementById(id1).style.backgroundColor="white";
			//document.getElementById(id2).style.backgroundColor="white";
			//TBD showing unselected row with css effect rajesh/sanjana.
			//clear the rootScope IscustomerAlredySelected object
			$rootScope.IscustomerAlredySelected=[];
			//clear the rootScope of customerObject
			$rootScope.customerObject=[];
		}
	};





	/*Select any recent Customer from left side grid ,
	 * it should be shown on the right side grid first record..*/
	var temp;
	$scope.selectedRecentCustomerDislayedRight=function(rightCustomer,id){
		//initializing for swapping
		//alert(rightCustomer.json.updatedDate + " ==== >");
		$scope.orderProp="";
		
		document.getElementById(id+"right").style.backgroundColor="#D6ECF9";
		if(temp != undefined)
		{
			//alert(temp);
			document.getElementById(temp).style.backgroundColor = "#ffffff";
		}
		
		id=id+"right";
		var a={};
		var c={};
		//document.getElementById(id).style.backgroundColor="#D6ECF9";
		temp = id;
		//alert(temp);
	   for(var index=0;index<$scope.customerProfileData.length;index++)
		{
			var dataArg=rightCustomer.json.id;
			var dataList=$scope.customerProfileData[index].json.id;
			document.getElementById(index+"left").style.backgroundColor = "#ffffff";
			if(dataArg===dataList)
			{
				a = $scope.customerProfileData[0];
				c = $scope.customerProfileData[index];
				$scope.customerProfileData[0]=c;
				$scope.customerProfileData[index]=a;
				//alert(index+"right" + " ===== > ")
				document.getElementById(index+"left").style.backgroundColor="#D6ECF9";
				$rootScope.customerObject=rightCustomer;
			}
			
		//	//alert(dataArg + " == " + dataList);
			
		}	
	   
		//  - search for optimal algoithm 
		//search for this recent customer _id in all customers array, 
		//swap the positions with 0 postion in array



		//also show selected color
		//also set the rootscope customer object with this customer object
	};
	/*$scope.selectRecentCustomer=function(customerObject){
		 //Clear the Root scope Object and copy the selected customer data
		$rootScope.resetRootScopeVar(); 
		document.getElementById('toprow').style.display = "block";
		$scope.queryPart= [{customerName: customerObject.json.customerName}];
		$jsonStore.retriveData($scope.customerTable,$scope.queryPart,function (result){

			for(var i=0;i<result.length;i++){
				$scope.jsontopedata.push(result[i]);
			}
			$scope.newProfiledat=[];
			$scope.oldProfiledat=$scope.profiledata;
			for(var i=0;i<$scope.oldProfiledat.length;i++){
				if($scope.oldProfiledat[i].json.customerName==data){
					//don do anything
				}else{
					$scope.jsontopedata.push($scope.oldProfiledat[i]);
					// selected recent customer is shown on the right side top
					$rootScope.customerObject=$scope.jsontopedata;
				}
			}
			$scope.$apply(function() {
				$scope.toprowdata=$scope.jsontopedata;
				$scope.iscustomerSelected=true;
				$rootScope.customerSelected=true;
			});
			document.getElementById('belowrow').style.display = "none";
		}, function (error){
			$logger.log("ERROR",JSON.stringify(error));
		}) ;
	}; */
	
	
	

	/* Filter Button Click  Functiionality.*/
	//var fullName = [];
//	var lastNamee = [];
	$scope.firstname=function(){

		$scope.orderProp === 'json.customerName'? $scope.orderProp = '-json.customerName' : $scope.orderProp = 'json.customerName';
	};
	$scope.lastname=function(){
		
		$scope.orderProp === 'json.customerName'? $scope.orderProp = '-json.customerName' : $scope.orderProp = 'json.customerName';

	/*
		for(var i=0;i<$scope.customerProfileData.length-1;i++){
			fullName[i]= $scope.customerProfileData[i].json.customerName;
			lastNamee[i] = fullName[i].split(' ').slice(-1);
		//	alert(lastName[i]);
			}
		alert(lastNamee);
		$scope.orderProp === lastNamee ? $scope.orderProp = -lastNamee : $scope.orderProp = lastNamee;

		
	//	var fullName = JSON.stringify($scope.customer.json.customerName);
		//var lastName = fullName.split(' ').slice(-1).join(' ');
		//alert()
		//$scope.orderProp === lastName ? $scope.orderProp = -lastName : $scope.orderProp = lastName;*/
		
		
	};
	$scope.id=function(){
		$scope.orderProp === 'json.id'? $scope.orderProp = '-json.id' : $scope.orderProp = 'json.id';
	};
	$scope.dob=function(){
		
		$scope.orderProp === 'json.dob'? $scope.orderProp = '-json.dob' : $scope.orderProp = 'json.dob';
	};

	/*var content_elemsdd = document.getElementsByClassName('selctCust_main');
	for(var i = 0; i < content_elemsdd.length; i++) {
		content_elemsdd[i].style.height = (myHeight-280+"px");
	} */
	
	$scope.advance_srch = function(){
	clickCounter=!clickCounter;
	var element=document.getElementsByClassName("advSearch_mrg");
    
	if(clickCounter){
	  element[0].style.display = "none";
	  $scope.search.json.gender="";
	  $scope.search.json.dob="";
	  $scope.search.json.contact="";
	  $scope.search.json.email="";
	}
	else 
    	{
    	element[0].style.display = "block";
    	}
    
	};
	
	/* Income Replacement Assessment starts */
	document.getElementById("settings_img").setAttribute("class","hd_settings");

});


///*********************** END *************************************/
