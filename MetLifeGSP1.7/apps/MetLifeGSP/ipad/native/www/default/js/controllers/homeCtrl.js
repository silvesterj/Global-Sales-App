
/* JavaScript content from js/controllers/homeCtrl.js in folder common */
/* Copyright �  2015 Wipro Ltd. All Rights Reserved.
 */
/*
 *
 * file name : < Home.js >
 * This is the controller js file for home page*
 * @author <Ashish Sharma>
 * @version <1.1> *
 */ 
app.controller('homeCtrl', function($scope,$route, $http,$rootScope,$timeout,$logger, $location,$jsonStore,$Language,$adapterUtility,$commonUtility) {
    
	var clickCounter=true;
	var deleteItemType;
	var objArg={};
	var count=0;
	var el=document.getElementsByClassName("advSearch_mrg");
	el[0].style.display="none";
	//******************************Spinner Added******************************************
	var spinnerFlag="start";
	$scope.spinner = function () {
      spinnerFlag="stop";
		$scope.progressBar(spinnerFlag);
    };
	
	//************************************************************************
	/*Clear the old rootscope objects value for CFF ,FNA Income,Child and illustration*/
	$rootScope.resetRootScopeVar();
	/* helper function to navigate  to other pages.*/
	$scope.setting=function(){
		$location.path("/settingsPage");
	};
	
	$scope.gotoSales=function(){
	//	$location.path("/salesIllustration");
		$rootScope.$Footer.salesIllustration('salesIllustration');
	};

	$scope.toggle1 = true;
	$scope.toggle2 = true;
	$scope.var1=true; 
	/* Populate Ui data*/
		$scope.customerTable = 'customer';
		$scope.cffTable = 'cff';
		$scope.fnaIncomeTable = 'fnaIncomeRA';
		$scope.fnaChildEducationTable = 'fnaChildEducation';
		$scope.illustrationTable = 'illustration';
		$scope.id='';
		$scope.jsonstorefnaIncome=[];
		$scope.jsonstorefnaChildEducation=[];
		$scope.jsonstoredata=[]; //copy customer data 
		$scope.jsonstorecff=[];
		$scope.jsonstoreIllustration=[];
		$scope.customers=[];
		$scope.cffProfiles=[];
		$scope.fnaIncomes=[];
		$scope.fnaChildEducations=[];
		$scope.illustrations=[];
   
		//retirve the recent customerData
		$scope.editcustomer=function(customerData){
			$rootScope.customerObject=customerData;
			//$location.path("/createCustomer"); //TBD,open the create customer page to edit. it should not have right side navigation to cff
			$rootScope.$Footer.createCustomer();
		};
		$scope.addCffProfile=function(){
			 $rootScope.cffObject={};
			 $rootScope.$Footer.customerAdvice('customerAdvice');
		};
		$scope.editCffProfile=function(){
			
			$rootScope.$Footer.customerAdvice('customerAdvice');
		};
	$scope.copyAndCreateNewCff=function(){
		 $rootScope.cffObject.json.profileName=null;
		 $rootScope.$Footer.customerAdvice('customerAdvice');
		};
	$scope.deleteCffProfile=function(){
		//alert(index+ " : "+ JSON.stringify(selectedFnaIncomeObject));
		$jsonStore.deleteData($scope.cffTable, $rootScope.cffObject,function (s){
			$rootScope.cffObject={};
			//$rootScope.$Footer.home();
			$route.reload();
			//document.getElementById("fnaIncome"+index).remove();
			}, function (e){alert(JSON.stringify(e));}) ;
		
		};
		
		
		$jsonStore.retriveAllData($scope.customerTable,function (customerResultSet){
			
			$scope.progressBar(spinnerFlag);
			if(customerResultSet.length==0)
				{
				spinnerFlag="stop";
				   $scope.progressBar(spinnerFlag);
				}
			if(customerResultSet.length !==0){

				for(var i=0;i<customerResultSet.length;i++){
					// push to local jsonstoredata array and populate it on the the left side.  
					
					$scope.jsonstoredata.push(customerResultSet[i]); //data update need record id also 
					$scope.customers.push(customerResultSet[i]);//Html page need values 
				//alert("date form db: "+$scope.customers[i].json.dob);
					 //TBD
					//$scope.customers[i].json.dob= new Date ($scope.customers[i].json.dob);
					//alert("after change date form db: "+$scope.customers[i].json.dob);
					if($scope.customers[i].json.customerImageSmallPath=="imagePath" ||
							$scope.customers[i].json.customerImageSmallPath==undefined){
						  $scope.customers[i].json.customerImageSmallPath="assets/images/customer_icon.png";
					  }
					//$scope.progressBar("stop");
				}
                
				
				
				// populate the cff,fna,illustation for first recent customer by default. 
				
				$scope.selectCustomer($scope.customers[0],'customer'+0);
			}	

		}, function (error){
			$logger.log("ERROR",JSON.stringify(error));
		});
		//$scope.progressBar("stop");
		//on selection of customer 
	
		$scope.selectCustomer = function(selectedCustomerObject,id) {
			//alert("selected customer: "+JSON.stringify(selectedCustomerObject));
		/*	for(index=0;index<$scope.customers.length;index++)
				{

					 document.getElementById(index).style.backgroundColor="#ffffff";
				}
			document.getElementById(id).style.backgroundColor="#D6ECF9";*/
			//query cff table with customer id and dob   
			//clearing previous list of cffProfiles,fnaItem,child education and illustrations
			
			
			if($scope.previousSelectedCustomerId)
			{

				 document.getElementById($scope.previousSelectedCustomerId).style.backgroundColor="#ffffff";
			}
			if(document.getElementById(id)){
				document.getElementById(id).style.backgroundColor="#D6ECF9";
			}
			
			$scope.previousSelectedCustomerId=id;
			$scope.jsonstorefnaIncome=[];
			$scope.jsonstorefnaChildEducation=[];
			$scope.jsonstorecff=[];
			$scope.jsonstoreIllustration=[];
		    $scope.cffProfiles=[];
			$scope.fnaIncomes=[];
			$scope.fnaChildEducations=[];
			$scope.illustrations=[];
			
			//set the customerobject to rootScope customer
			$rootScope.customerObject=selectedCustomerObject;			
			//alert("selected id: "+selectedCustomerObject.json.id+"  dob: "+selectedCustomerObject.json.dob);
			$scope.queryCffTable= [{"id":selectedCustomerObject.json.id}];
            
			$jsonStore.retriveData($scope.cffTable,$scope.queryCffTable,
					function (cffResultSet){
			//	alert("retrived CFF:"+JSON.stringify(cffResultSet));
				if(cffResultSet.length!=0)
				{
				//alert("cffResultSet.length"+cffResultSet.length);
				 for(var i=0;i<cffResultSet.length;i++){

					$scope.jsonstorecff.push(cffResultSet[i]); //data update need record id also 
					$scope.cffProfiles.push(cffResultSet[i]); //Html page need values
				}
				
				// populate the fnaillustration for first profile by default 
				$scope.selectProfile($scope.jsonstorecff[0]);
				
				}else{
					
				  //clearing the selected customer's cffObject if the result is empty.
				   $rootScope.cffObject={};
				}
				
			},function (error){
				$logger.log("ERROR",JSON.stringify(error));


			});
		};

		// on selection of profile 

		$scope.selectProfile=function(selectedCffObject){
			$scope.fnaIncomes=[];
			$scope.fnaChildEducations=[];
			$scope.illustrations=[];
		    //set the cffObject to rootScope customer
		    $rootScope.cffObject=selectedCffObject;
			
		    if($rootScope.cffObject!=null && $rootScope.cffObject!=undefined && 
		    Object.keys($rootScope.cffObject).length>0)
		    {	
			//query fnaIncome table with cusomer id,dob, cff profile name
 			$scope.queryFnaIncomeTable=[{"id":selectedCffObject.json.id,"profileName":selectedCffObject.json.profileName}];

			$jsonStore.retriveData($scope.fnaIncomeTable,$scope.queryFnaIncomeTable,
			function (fnaResultSet){
			
			if(fnaResultSet.length!=0){   
            for(var i=0;i<fnaResultSet.length;i++){

					// push to local jsonstorefnaincome array and populate the FnaIncome list
					//$scope.jsonstorefnaIncome.push(fnaResultSet[i]); //data update need record id also 
					$scope.fnaIncomes.push(fnaResultSet[i]); //Html page need values

				  }
            
               
			}
		
				
							},function (error){
				$logger.log("ERROR",JSON.stringify(error));

			});

			//query fna ChildEducation table with cusomer cff profile name

			$scope.queryFnaChildEducationTable=[{"id":selectedCffObject.json.id,"profileName":selectedCffObject.json.profileName}];

			$jsonStore.retriveData($scope.fnaChildEducationTable,$scope.queryFnaChildEducationTable,
					function (fnaChildResultSet){

				if(fnaChildResultSet.length!=0){
				for(var i=0;i<fnaChildResultSet.length;i++){

					// push to local jsonstorefnachild array and populate the Child list
					
					//$scope.jsonstorefnaChildEducation.push(fnaChildResultSet[i]); //data update need record id also 
					$scope.fnaChildEducations.push(fnaChildResultSet[i]); //Html page need values

				}
			
				}
			

			},function (error){
				$logger.log("ERROR",JSON.stringify(error));
			});


			//query illustration table table with customer cff profile name

			$scope.queryIllustrationTable=[{"id":selectedCffObject.json.id,"profileName":selectedCffObject.json.profileName}];

			$jsonStore.retriveData($scope.illustrationTable,$scope.queryIllustrationTable,
					function (illustrationResultSet){
               if(illustrationResultSet.length!=0){
				for(var i=0;i<illustrationResultSet.length;i++){

					// push to local jsonstorefnachild array and populate the Child list
					
					//$scope.jsonstoreIllustration.push(illustrationResultSet[i]); //data update need record id also 
					$scope.illustrations.push(illustrationResultSet[i]); //Html page need values

				}
				
               }
			
			},function (error){
				$logger.log("ERROR",JSON.stringify(error));
			});
	 	   }
		};
      
		//End of selectProfile function

		// on selection of fnaIncome

		$scope.selectfnaIncome=function(selectedFnaIncomeObject){
		
			
			//set the fnaIncome object to rootScope fnaIncomeObject
			$rootScope.fnaIncomeObject=selectedFnaIncomeObject;
			//navigate to fnaIncome first page 
			$rootScope.$Footer.financialNeed('fna_tab1_body', 'fna_tab1');


		};

		// on selection of fnaChild

		//select fnaChildfunction pass the childEducatiionobject as parameter

		$scope.selectfnaChidEducation=function(selectedChildEducationObject){
         
			//set the fnaChidEducation object to rootScope fnaChildEducationObject
			$rootScope.fnaChildEducationObject=selectedChildEducationObject;
			//navigate to fnaChidEducation first page 
			$rootScope.$Footer.financialNeed('fna_tab2_body', 'fna_tab2');

		};


		// on selection of fnaChild

		//select illustrationObject pass the illustrationObject as parameter

		$scope.selectIllustration=function(selectedIllustrationObject){

			//set the selectedIllustrationObject to rootScope illustrationObject
			$rootScope.illustrationObject=selectedIllustrationObject;

			//navigate to illustration first page 
			$scope.gotoSales();

		};

		$scope.copyfnaIncome=function(selectedFnaIncomeObject){
			
			selectedFnaIncomeObject.json.proposalId=""+Math.floor( (Math.random()*10000000000));
			
			
			 $jsonStore.insertData($scope.fnaIncomeTable,selectedFnaIncomeObject.json,function (s){
				 
				 var queryfnaIncomeTable=[{"id":selectedFnaIncomeObject.json.id,"profileName":selectedFnaIncomeObject.json.profileName,"proposalId":selectedFnaIncomeObject.json.proposalId}];

					$jsonStore.retriveData($scope.fnaIncomeTable,queryfnaIncomeTable,
							function (results){
		               if(results.length>0){
					
		            	   $scope.fnaIncomes.push(results[0]);
		            	   if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
		   				    $scope.$apply();
		   				}
		               }
					
					},function (error){$logger.log("ERROR",JSON.stringify(error));});
					 
			 },function (error){$logger.log("ERROR",JSON.stringify(error));});
		};
		$scope.deletefnaIncome=function(selectedFnaIncomeObject){
			
			//alert(index+ " : "+ JSON.stringify(selectedFnaIncomeObject));
			$jsonStore.deleteData($scope.fnaIncomeTable,selectedFnaIncomeObject,function (s){
				
				
				$route.reload();
				//document.getElementById("fnaIncome"+index).remove();
				}, function (e){alert(JSON.stringify(e));}) ;
		};
		
		$scope.copyfnaChidEducation=function(selectedChildEducationObject){
		
			selectedChildEducationObject.json.proposalId=""+Math.floor( (Math.random()*10000000000));
		
			 $jsonStore.insertData($scope.fnaChildEducationTable,selectedChildEducationObject.json,function (s){
				 
				var queryfnaChildEducationTable=[{"id":selectedChildEducationObject.json.id,"profileName":selectedChildEducationObject.json.profileName,"proposalId":selectedChildEducationObject.json.proposalId}];
					$jsonStore.retriveData($scope.fnaChildEducationTable,queryfnaChildEducationTable,
							function (results){
						//alert("results"+JSON.stringify(results));
		               if(results.length>0){
					
		            	   $scope.fnaChildEducations.push(results[0]);
		            	   if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
		   				    $scope.$apply();
		   				}
		               }
					
					},function (error){$logger.log("ERROR",JSON.stringify(error));});
					 
			 },function (error){$logger.log("ERROR",JSON.stringify(error));});
		};
		$scope.deletefnaChidEducation=function(selectedChildEducationObject,index){
			
			
			$jsonStore.deleteData($scope.fnaChildEducationTable,selectedChildEducationObject,function (s){
			
			//	delete $scope.fnaChildEducations[index];
				$route.reload();
				//document.getElementById("fnaChidEducation"+index).remove();
				
				}, function (e){alert(JSON.stringify(e));}) ;
		};
		
		$scope.copyIllustration=function(selectedIllustrationObject){
			selectedIllustrationObject.json.proposalId=""+Math.floor( (Math.random()*10000000000));
			
			 $jsonStore.insertData($scope.illustrationTable,selectedIllustrationObject.json,function (s){
				 
				var queryillustrationTable=[{"id":selectedIllustrationObject.json.id,"profileName":selectedIllustrationObject.json.profileName,"proposalId":selectedIllustrationObject.json.proposalId}];
					$jsonStore.retriveData($scope.illustrationTable,queryillustrationTable,
							function (results){
						//alert("results"+JSON.stringify(results));
		               if(results.length>0){
					
		            	   $scope.illustrations.push(results[0]);
		            	   if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
		   				    $scope.$apply();
		   				}
		               }
					
					},function (error){$logger.log("ERROR",JSON.stringify(error));});
					 
			 },function (error){$logger.log("ERROR",JSON.stringify(error));});
		};
		$scope.deleteIllustration=function(selectedIllustrationObject,index){
			$jsonStore.deleteData($scope.illustrationTable,selectedIllustrationObject,function (s){
				
				$route.reload();
				/*document.getElementById("illustration"+index).remove();*/
				
				}, function (e){alert(JSON.stringify(e));}) ;
		};

  //pop up for confirmation and delete
	
		$scope.delete_confirm_popup_open = function(type,arg){
			objArg=arg;
			deleteItemType=type;
			document.getElementById('delete_confirm_popup').style.display = "block";
			document.getElementById('popup_overlay').style.display = "block";
		};
		  
		$scope.delete_confirm_popup_close = function(deleteConfirm){
			
		
			if(deleteConfirm==='true'){
			if(deleteItemType){
				if( deleteItemType=="deleteCffProfile"){
					
					  $scope.deleteCffProfile();
					
				}
				else if(deleteItemType == "deleteFNAIncome"){
					$scope.deletefnaIncome(objArg); 
				}else if(deleteItemType == "deleteFNAChildEducation"){

				}else if(deleteItemType == "deleteIllustration"){

				}
			 }
			}
			document.getElementById('delete_confirm_popup').style.display = "none";
//			document.getElementById('add_popup').style.display = "none";
			document.getElementById('popup_overlay').style.display = "none";
//	        document.getElementById('fna_popup').style.display = "none";	
			document.getElementById('fna_popup').style.display = "none";
			};
		// popup ends here 
	
	// popup starts here 
	$scope.fna_popup_open = function(){
		document.getElementById('fna_popup').style.display = "block";
		document.getElementById('popup_overlay').style.display = "block";
	};
	// popup ends here 

	// popup starts here 

	$scope.delete_popup_open = function(){
		document.getElementById('deletess_popup').style.display = "block";
		
	};
//	$scope.delete_popup_close = function(type){
//		
//		if(type && type=="deleteCffProfile"){
//			$scope.deleteCffProfile();
//		}
//		
//		document.getElementById('delete_popup').style.display = "none";
//			
//		};
	// popup ends here 
	
	//search feature
	//the function is changing the label of Recent customers to Customers and count of the resultant searched customers' list.
	$scope.dynamicLabelChange_CustomerLength=function(){
		  
		
		     if(!$scope.search.json.customerName){
		    	 // reload the home page when search query is empty (profile is not shown for first customer by default)
		    	 
		    	 $route.reload();
		    }
		    else{
		    	
		    	 document.getElementById('searchCustomer').innerHTML=$scope.$Language.commonData.customers+$scope.filteredCustomers.length;
		     }
							
	};
	//clickCounter=true;
	//the function resets the advanced search query data
	$scope.advance_srch = function(){
		
		clickCounter=!clickCounter;
		var element=document.getElementsByClassName("advSearch_mrg");
	    
		if(clickCounter){
		  element[0].style.display = "none";
		  $scope.search.json.gender="";
		  $scope.search.json.dob="";
		  $scope.search.json.contact="";
		  $scope.search.json.email="";
		  document.getElementById('searchCustomer').innerHTML=$scope.$Language.commonData.recentCustomers;
		}
		else 
	    	{
			document.getElementById('searchCustomer').innerHTML=$scope.$Language.commonData.customers+$scope.filteredCustomers.length;
	    	element[0].style.display = "block";
	    	}
	    
		};
	
	
	$scope.add_popup_open = function(){
		document.getElementById('add_popup').style.display = "block";
		document.getElementById('popup_overlay').style.display = "block";
	} ;
	document.getElementById("settings_img").setAttribute("class","hd_settings");

	$scope.pageLoadComplete=function(arg)
	{
		
		$scope.progressBar("stop");
	};
	$scope.progressBar = function (type) {
		if(type.toUpperCase()=="START"){
			
	   	 document.getElementById("loader").style.display="block";
	    }
	    else if(type.toUpperCase()=="STOP"){
	    	
	   	 document.getElementById("loader").style.display="none";
	    }
	    
	 };
	
	//var elements=document.getElementByClassName("home_left_txt");
	
});

///*********************** END *************************************/
