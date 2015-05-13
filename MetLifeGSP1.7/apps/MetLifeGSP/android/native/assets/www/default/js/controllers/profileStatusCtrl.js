
/* JavaScript content from js/controllers/profileStatusCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : < Home.js >
* This is the controller js file for profileStatus page.*
* @author <Ashish Sharma>
* @version <1.1> *
*/ 
 app.controller('profileStatusCtrl', function($scope, $http,$rootScope,$timeout, $location,$jsonStore,$Language,$adapterUtility,$commonUtility ) {
	    
	    $scope.customer = {};
	    $scope.cffProfile = {};
	    $scope.fnaIncomes = [];
		$scope.fnaChildEducations = [];
		$scope.illustrations= [];
		$scope.fnaIncomeRA = {};
		$scope.fnaChildEducation = {};
		$scope.illustration={};
		$scope.cffTable = 'cff';
		$scope.fnaTableIncome = 'fnaIncomeRA';
		$scope.fnaChildEducationTable = 'fnaChildEducation';
		$scope.illustrationTable = 'illustration';
		var systemDate=new Date();
		$scope.queryPart='';
		

		/* copy the root scope object value in Local scope variable */
		if($rootScope.customerObject!=null && $rootScope.customerObject!=undefined && Object.keys($rootScope.customerObject).length>0)
	     {

			$scope.customer=$rootScope.customerObject.json;
			
		 }
		
		// if local cff object is null, copy the rootScopeCff(if not null) in to
		// local cff object TBD.
		if($rootScope.cffObject!=undefined && $rootScope.cffObject!=null
		   && Object.keys($rootScope.cffObject).length>0 &&  Object.keys($scope.cffProfile).length==0)
		{
			$scope.cffProfile=$rootScope.cffObject.json;	
		}
		
		if($rootScope.fnaIncomeObject!=undefined && $rootScope.fnaIncomeObject!=null && Object.keys($rootScope.fnaIncomeObject).length>0){
			

			$scope.fnaIncomeRA=$rootScope.fnaIncomeObject.json;
			alert("$rootScope.fnaIncomeObject: "+JSON.stringify($rootScope.fnaIncomeObject));
		}
        
		if($rootScope.fnaChildEducationObject!=undefined && $rootScope.fnaChildEducationObject!=null && Object.keys($rootScope.fnaChildEducationObject).length>0){

			$scope.fnaChildEducation=$rootScope.fnaChildEducationObject.json;
			alert("$rootScope.fnaChildEducationObject: "+JSON.stringify($rootScope.fnaChildEducationObject));
		}
		
		if($rootScope.illustrationObject!=undefined && $rootScope.illustrationObject!=null && Object.keys($rootScope.illustrationObject).length>0){

			$scope.illustration=$rootScope.illustrationObject.json;
			alert("$rootScope.illustrationObject: "+JSON.stringify($rootScope.illustrationObject));
		}

		 //Link to edit profile
	     $scope.editCffProfile=function(){
	       $rootScope.$Footer.customerAdvice('customerAdvice');
	     };
	    
		if($rootScope.customerAbsentInProfileStatus!=null)
		{
			
			
		}
		
		//display in html page
		//first -- if rootscope fna income or child objects id is null, then add to fna display list then add the fnaincome and fnachild queried results one by one
		//first -- if rootscope illustration objects id is null, then add to illustration display list then add the illustration results queried 
		
		// clearing local objects before pushing the data
	    $scope.fnaIncomes = [];
		$scope.fnaChildEducations = [];
		$scope.illustrations= [];
		
		// display which is not there in db
	
		if($rootScope.fnaIncomeObject!=null && $rootScope.fnaIncomeObject!=undefined &&
				Object.keys($rootScope.fnaIncomeObject).length>0 && $rootScope.fnaIncomeObject._id == null)
		{	

			$scope.fnaIncomes.push($rootScope.fnaIncomeObject);

		}

		// display which is not there in db
		if($rootScope.fnaChildEducationObject!=null && $rootScope.fnaChildEducationObject!=undefined &&
				Object.keys($rootScope.fnaChildEducationObject).length>0 && $rootScope.fnaChildEducationObject._id == null)
		{	

			$scope.fnaChildEducations.push($rootScope.fnaChildEducationObject);
	
		}
		
		// display which is not there in db
		if($rootScope.illustrationObject!=null && $rootScope.illustrationObject!=undefined &&
				Object.keys($rootScope.illustrationObject).length>0 
				&& $rootScope.illustrationObject._id == null)
		{	
			$scope.illustrations.push($rootScope.illustrationObject);
		}
		
		//if customer not null and cff profile name not null then query fna income, child and illustration
		//JSON store 
		if($scope.customer!=null && $scope.customer!=undefined && Object.keys($scope.customer).length>0 
		 && $scope.customer.dob!=null && $scope.customer.dob!=undefined && $scope.cffProfile!=null 
		 && $scope.cffProfile!=undefined && Object.keys($scope.cffProfile).length>0 && $scope.cffProfile.profileName!=null
		 && $scope.cffProfile.profileName!=undefined && $scope.customer.id!=null && $scope.customer.id!=undefined)
		  {
			
			//maintain the serialNo while displaying
			$scope.serialNumber=0;
			
		  // query fnaIncome object
			$scope.queryPart= [{"profileName":$scope.cffProfile.profileName,"id":$scope.customer.id}];  	   
		   
		   //now display which is there in db
		  
		  $jsonStore.retriveData($scope.fnaTableIncome,$scope.queryPart,function (fnaIncomeResultSet){
		  if(fnaIncomeResultSet.length!=0){
		  for(var index = 0; index < fnaIncomeResultSet.length; index++){
		 
		    $scope.fnaIncomes.push(fnaIncomeResultSet[index]);
		    }
		   // displaying the serial no in diplay list
		   $scope.serialNumber=$scope.fnaIncomes.length+1;
		   
		  
		  }
		
	      }, function (error){alert(JSON.stringify(error));});	 
		   
		  // query fnaIncome object
 		   
		  
		  
		   //now display which is there in db
		  
		     $jsonStore.retriveData($scope.fnaChildEducationTable,$scope.queryPart,function (fnaChildEducationResultSet){
			  if(fnaChildEducationResultSet.length!=0){
			   for(var index = 0; index < fnaChildEducationResultSet.length; index++){
			   $scope.fnaChildEducations.push(fnaChildEducationResultSet[index]);
			   }
			  }
			 
				  
		   }, function (error){alert(JSON.stringify(error));});	 
		  
		  
		    // query illustration object
 		   
		   
		   
		     //now display which is there in db
		   $jsonStore.retriveData($scope.illustrationTable,$scope.queryPart,function (illustrationResultSet){
			
			   if(illustrationResultSet.length!=0){
			  for(var index = 0; index < illustrationResultSet.length; index++){
			
				  $scope.illustrations.push(illustrationResultSet[index]);
			    }
			  }
				  
		   }, function (error){alert(JSON.stringify(error));});	
		   
		  
		   }else{
		
			
		   }
		
		
		
		/* popup box */
	/*	$scope.profile_name_popup = function(){
		 
		 document.getElementById('profile_name_popup').style.display = "block";
		 document.getElementById('popup_overlay').style.display = "block";
		 };*/
		$scope.delete_popup_close = function(){
		document.getElementById('profile_name_popup').style.display = "none";
		document.getElementById('popup_overlay').style.display = "none";
		};
		/* end */
		
		// checking the cff object,profileName, if profile name is not present
		// open the profile popup,setting the profilename to cff object
		// before inserting fna or illustration objects, copy teh cff profile name to fna and illustration objects.
		/*if($scope.cffProfile.profileName==undefined)
		{
			//alert("Inside Call");
			$scope.profile_name_popup();
			
		}*/
		
		
		// on click of create profile button
		
		$scope.saveCffProfileName =function(){
		
			$scope.delete_popup_close();
			// setting the profileName and status in cffProfile object
			$scope.cffProfile.profileName=$scope.userdefinedProfileName;
		
		};
		
		
		// saving data
	   /* $scope.saveProfileData=function(){
		// if customer id , dob is not present, show popup to select customer,
		// customer create and no options
	
	   if($scope.customer!=null && $scope.customer!="undefined" 
	   && Object.keys($scope.customer).length>0 
	   && $scope.customer.id!=null && $scope.customer.id!=undefined
	   && $scope.customer.dob!=null && $scope.customer.dob!=null){
	   // if local cff object is null, query the cff collection in
	   // JSONStore with customer dob and customerid , it should be only one result or null.
	   // If not null do below cff steps.
	   
	   if($scope.cffProfile!=null && $scope.cffProfile!=undefined && Object.keys($scope.cffProfile).length > 0)
	   {
	       // you might have come here from cff, fna, illustration with customer and cff profile name..
		  		   // copy the cff.profile name to local and eventually rootscope fna and illustration objects
		   //copy customer id and dob to local and eventually to cff, rootscope fna and illustration objects
	       
		   // checking root scope objects, if you have i_id, update the collection, else insert the record. 
		 
		  if($rootScope.cffObject!=null && $rootScope.cffObject!=undefined 
			&& $rootScope.cffObject._id!=null) 
		   {
			
			  //updating cff record
				   $scope.dataCffToUpdate= [{_id:$rootScope.cffObject._id, json: $scope.cffProfile}];
				  $jsonStore.updateData($scope.cffTable,$scope.dataCffToUpdate,function (s){alert(
						   JSON.stringify("Cff record Updated"+s));}, function (e){alert(JSON.stringify(e));}) ;
		   }
           if($rootScope.cffObject._id==null && $scope.cffProfile!=null && $scope.cffProfile!=undefined)
           {
        	  
        	
        	   //Inserting cff record
        	   $scope.cffProfile.id= $scope.customer.id;
        	   $scope.cffProfile.dob= $scope.customer.dob;
			   $scope.dataCffToInsert= $scope.cffProfile;
			   $jsonStore.insertData($scope.cffTable,$scope.dataCffToInsert,function (s){alert(
					JSON.stringify("cffRecord Inserted"+s));}, function (e){alert(JSON.stringify(e));}) ;
        	   
           }
           
           if($rootScope.fnaIncomeObject!=null && $rootScope.fnaIncomeObject!=undefined  
        		   && Object.keys($rootScope.fnaIncomeObject).length>0)
		   {
			 
			   if($rootScope.fnaIncomeObject._id!=null)
			   {
				
				   //updating fnaIncome record
				   $scope.dataToFnaUpdate= [{_id:$rootScope.fnaIncomeObject._id, json: $rootScope.fnaIncomeObject}];
				   $jsonStore.updateData($scope.fnaTableIncome,$scope.dataToFnaUpdate,function (s){alert(
						   JSON.stringify("fnaIncomeObjectRecord Updated"+s));}, function (e){alert(JSON.stringify(e));}) ;

			   }
			   else{
				 
				   //insert fnaIncome record
				   $rootScope.fnaIncomeObject.json.id= $scope.customer.id;
				   $rootScope.fnaIncomeObject.json.dob= $scope.customer.dob;
				   $rootScope.fnaIncomeObject.json.profileName= $scope.cffProfile.profileName;
				
				   $scope.dataToFnaInsert=$rootScope.fnaIncomeObject.json;
				 
				   $jsonStore.insertData($scope.fnaTableIncome,$scope.dataToFnaInsert,function (s){alert(
						   JSON.stringify("fnaIncomeObjectRecord Inserted"+s));}, function (e){alert(JSON.stringify(e));}) ;
			   }

		   } 
           
           
           if($rootScope.fnaChildEducationObject!=null && $rootScope.fnaChildEducationObject!=undefined  
        		   && Object.keys($rootScope.fnaChildEducationObject).length>0)
		   {
			 
			   if($rootScope.fnaChildEducationObject._id!=null)
			   {
				
				   //updating fnaIncome record
				   $scope.dataToFnaChildUpdate= [{_id:$rootScope.fnaChildEducationObject._id, json: $rootScope.fnaChildEducationObject}];
				   $jsonStore.updateData($scope.fnaChildEducationTable,$scope.dataToFnaChildUpdate,function (s){alert(
						   JSON.stringify("fnaChildObjectRecord Updated"+s));}, function (e){alert(JSON.stringify(e));}) ;

			   }
			   else{
				  
				   //insert fnaIncome record
				   $rootScope.fnaChildEducationObject.json.id= $scope.customer.id;
				   $rootScope.fnaChildEducationObject.json.dob= $scope.customer.dob;
				   $rootScope.fnaChildEducationObject.json.profileName= $scope.cffProfile.profileName;
				   alert("$rootScope.fnaChildIncomeObject"+JSON.stringify($rootScope.fnaChildEducationObject));
				   $scope.dataToFnaChildInsert=$rootScope.fnaChildEducationObject.json;
				   $jsonStore.insertData($scope.fnaChildEducationTable,$scope.dataToFnaChildInsert,function (s){alert(
						   JSON.stringify("fnaChildObjectRecord Inserted"+s));}, function (e){alert(JSON.stringify(e));}) ;
			   }

		   }
           
           if($rootScope.illustrationObject!=null && $rootScope.illustrationObject!=undefined  
        		   && Object.keys($rootScope.illustrationObject).length>0)
		   {
			 
			   if($rootScope.illustrationObject._id!=null)
			   {
				   
				   //updating fnaIncome record
				   $scope.dataToIllustrationUpdate= [{_id:$rootScope.illustrationObject._id, json: $rootScope.illustrationObject}];
				   $jsonStore.updateData($scope.fnaChildEducationTable,$scope.dataToIllustrationUpdate,function (s){alert(
						   JSON.stringify("llustrationRecord Updated"+s));}, function (e){alert(JSON.stringify(e));}) ;

			   }
			   else{
				   
				   //insert fnaIncome record
				   $rootScope.illustrationObject.json.id= $scope.customer.id;
				   $rootScope.illustrationObject.json.dob= $scope.customer.dob;
				   $rootScope.illustrationObject.json.profileName= $scope.cffProfile.profileName;
				   //alert("$rootScope.illustrationObject"+JSON.stringify($rootScope.illustrationObject));
				   $scope.dataToillustrationInsert=$rootScope.fnaChildEducationObject.json;
				   $jsonStore.insertData($scope.fnaChildEducationTable,$scope.dataToillustrationInsert,function (s){alert(
						   JSON.stringify("IllustrationUpdate Inserted"+s));}, function (e){alert(JSON.stringify(e));}) ;
			   }

		   }		
		   
	   }else{ 
		 // cff profile is not available , so query cff table and get the profile
		   // but since if cff profile name is not there, apop up will be shown and profile name taken 
		   // and assigned to cff..
		   // so  ..  
		   $scope.profile_name_popup();
	   	 
	   }}else{
	    	
	    	 // show popup to select customer,customer create and no options
	    	 $scope.select_create_popup_open();
	     }	
		
		};*/
	
	
	// move this code before save function
		$scope.saveProfileData=function(){	
			
			/*  if customer not present, show the message - can be saved in profile status page
			 *  if profile name not present , show the popup to enter profile anme
			 *   once value entered, popup will call this function again
			 *   query for profile name present in cfff, if not present,  insert cff record  and fnaIncomeRA
			 *   query if fnaIncomeRA record is already present in json store, if yes then update, else insert
			 */	 
					
					//alert("data to save: "+JSON.stringify($scope.fnaIncomeRA));
					if($scope.customer.id){
						
						if(!$scope.cffProfile.profileName){
							
							$scope.openPopup("Please enter a profile name");
							
						}else{
					
					//check for cff profile name then update/insert only fnaIncomeRA record / insert both cff and fnaIncomeRA
					
					$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.cffProfile.profileName}];
			   	    $jsonStore.retriveData($scope.cffTable,$scope.queryPart,
			   				   function (result){
			   	   //update/insert only fnaIncomeRA record 	
			   		if(result.length>0)
			   		{
			   			$rootScope.cffObject=result[0];
			   		//check for fnaIncomeRA proposalId in table then update/insert.
			   			$scope.checkAndUpdateTables();
			   			
					//insert both cff and fnaIncomeRA records	
				   		}else{
				   			
				   		
					//$scope.cff.profileName=$scope.fnaIncomeRA.profileName;
					$scope.cffProfile.dob=$scope.customer.dob;
					$scope.cffProfile.id=$scope.customer.id;
					$scope.cffProfile.cffStatus='Not Started';
					$scope.cffProfile.createdDate=systemDate;
					$scope.cffProfile.updatedDate=systemDate;
					
					$jsonStore.insertData($scope.cffTable,$scope.cffProfile,function (s){
					//alert(JSON.stringify("cffRecord Inserted"+s));
					
					
					$scope.checkAndUpdateTables();
					$rootScope.cffObject={"_id":null,"json":$scope.cffProfile};
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
					$scope.select_create_popup_open();
				}};	

			$scope.checkAndUpdateTables=function(){
				
				if( Object.keys($rootScope.fnaIncomeObject).length>0 && $rootScope.fnaIncomeObject._id==null){
					//alert("income object: "+JSON.stringify($rootScope.fnaIncomeObject));
					
					var queryPart= [{"id":$scope.customer.id,"profileName":$scope.cffProfile.profileName,"proposalId":$scope.fnaIncomeRA.proposalId}];
				    $jsonStore.retriveData($scope.fnaTableIncome,queryPart,
							   function (result){
				    //	alert("query result: "+JSON.stringify(result));
				    	if(result.length>0)
			   		{
				    		
						$scope.fnaIncomeRA.lastUpdatedDate=systemDate;
				    		$scope.dataToUpdate= [{_id:result[0]._id, json: $scope.fnaIncomeRA}];
						$jsonStore.updateData($scope.fnaTableIncome,$scope.dataToUpdate,function (s){
							$scope.openAlert("FNA Income Record Updated Successfully.");
							$rootScope.fnaIncomeObject={};
							
						}
						, function  (error){
							
							$logger.log("ERROR",JSON.stringify(error));
						}) ;
				    		
			   		}else{
			   			$scope.fnaIncomeRA.createdDate=systemDate;
			   			$scope.fnaIncomeRA.lastUpdatedDate=systemDate;
			   			$scope.fnaIncomeRA.profileName=$scope.cffProfile.profileName;
			   			$scope.fnaIncomeRA.id=$scope.customer.id;
			   			$scope.fnaIncomeRA.designedFor=$scope.customer.designedFor;
			   			$jsonStore.insertData($scope.fnaTableIncome,$scope.fnaIncomeRA,function (s){
							
							$scope.openAlert("FNA Income Record Saved Successfully.");
							$rootScope.fnaIncomeObject={};
							}
						, function  (error){
							
							$logger.log("ERROR",JSON.stringify(error));
						}) ;
				}
				    }
				, function  (error){
					
					$logger.log("ERROR",JSON.stringify(error));
				}) ;
					
				}
				if( Object.keys($rootScope.fnaChildEducationObject).length>0 && $rootScope.fnaChildEducationObject._id==null){
					//alert("child object: "+JSON.stringify($rootScope.fnaChildEducationObject));
					

					
					
					
					
					$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.cffProfile.profileName,"proposalId":$scope.fnaChildEducation.proposalId}];
					    $jsonStore.retriveData($scope.fnaChildEducationTable,$scope.queryPart,
								   function (result){
					    	//alert("query result: "+JSON.stringify(result));
					    	if(result.length>0)
				   		{
					    		
							$scope.fnaChildEducation.lastUpdatedDate=systemDate;
					    		$scope.dataToUpdate= [{_id:result[0]._id, json: $scope.fnaChildEducation}];
							$jsonStore.updateData($scope.fnaChildEducationTable,$scope.dataToUpdate,function (s){
								$scope.openAlert("FNA Child Education Updated Successfully.");
								$rootScope.fnaChildEducationObject={};
							}
							, function  (error){
								
								$logger.log("ERROR",JSON.stringify(error));
							}) ;
					    		
				   		}else{
				   			$scope.fnaChildEducation.createdDate=systemDate;
				   			$scope.fnaChildEducation.lastUpdatedDate=systemDate;
				   			$scope.fnaChildEducation.profileName=$scope.cffProfile.profileName;
				   			$scope.fnaChildEducation.id=$scope.customer.id;
				   			$scope.fnaChildEducation.designedFor=$scope.customer.designedFor;
				   			$jsonStore.insertData($scope.fnaChildEducationTable,$scope.fnaChildEducation,function (s){
								
								$scope.openAlert("FNA Child Education Saved Successfully.");
								$rootScope.fnaChildEducationObject={};
								}
							, function  (error){
								
								$logger.log("ERROR",JSON.stringify(error));
							}) ;
					}
					    }
					, function  (error){
						
						$logger.log("ERROR",JSON.stringify(error));
					}) ;

					
					
					
				}
				
				if( Object.keys($rootScope.illustrationObject).length>0 && $rootScope.illustrationObject._id==null){
					//alert("sales object: "+JSON.stringify($rootScope.illustrationObject));
					


					$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.cffProfile.profileName,"proposalId":$scope.illustration.proposalId}];
			   	    $jsonStore.retriveData($scope.illustrationTable,$scope.queryPart,
			   				   function (result){
			   	    	//alert("query result: "+JSON.stringify(result));
			   	    	if(result.length>0)
				   		{
			   	    		
							$scope.illustration.lastUpdatedDate=systemDate;
			   	    		$scope.dataToUpdate= [{_id:result[0]._id, json: $scope.illustration}];
							$jsonStore.updateData($scope.illustrationTable,$scope.dataToUpdate,function (s){
								$scope.openAlert("Sales Illustration Updated Successfully.");
								$rootScope.illustrationObject={};
								
							}
							, function  (error){
								
								$logger.log("ERROR",JSON.stringify(error));
							}) ;
			   	    		
				   		}else{
				   			$scope.illustration.createdDate=systemDate;
				   			$scope.illustration.lastUpdatedDate=systemDate;
				   			$scope.illustration.profileName=$scope.cffProfile.profileName;
				   			$scope.illustration.id=$scope.customer.id;
				   			$jsonStore.insertData($scope.illustrationTable,$scope.illustration,function (s){
								
								$scope.openAlert("Sales Illustration Saved Successfully.");
								$rootScope.illustrationObject={};
								}
							, function  (error){
								
								$logger.log("ERROR",JSON.stringify(error));
							}) ;
					}
			   	    }
					, function  (error){
						
						$logger.log("ERROR",JSON.stringify(error));
					}) ;
				
					
				}
			};
				
			$scope.storeRecomandations=function(){
				
				$rootScope.recommendationList=$scope.illustrations;
			};
			
	    
	     //clicking on fnaIncome item in display list navigates to fnaIncomepage 
		   $scope.goToFnaIncomeFromProfileStatus=function(selectedFnaIncome){
		   $rootScope.$Footer.preSubFooter = "";
		   if($rootScope.fnaIncomeObject._id==undefined){
			$rootScope.fnaIncomeObject._id=null;
			}
		   
		   $rootScope.fnaIncomeObject=selectedFnaIncome;
	       $rootScope.$Footer.financialNeed('fna_tab1_body', 'fna_tab1');
	       //set the fnaIncome object to rootScope fnaIncomeObject
		   // checking the null condition for fnaIncomeObject 
		  };  
	  	
		//clicking on childEducation item in display list navigates to fnaChildEducationpage
		 $scope.goToFnaChildDducationFromProfileStatus=function(selectedFnaChild){
			 $rootScope.$Footer.preSubFooter = "";   
		//set the childEducation object to rootScope fnaChildEducationObject
		 if($rootScope.fnaChildEducationObject._id==undefined)
			{
			 $rootScope.fnaChildEducationObject._id=null;
			}
			 
			   $rootScope.fnaChildEducationObject=selectedFnaChild;
		       $rootScope.$Footer.financialNeed('fna_tab2_body', 'fna_tab2'); 
		 };
	
		/* myHeight = document.body.offsetHeight;
		 var subcontent_elems = document.getElementsByClassName('cff_submain_height');
			for(var i = 0; i < subcontent_elems.length; i++) {
				subcontent_elems[i].style.height = (myHeight-340+"px");
			 } */
		   
		 $scope.select_create_popup_open = function(){
				document.getElementById('select_create_popup').style.display = "block";
				document.getElementById('popup_overlay').style.display = "block";
			};
			 $scope.fna_popup_open = function(){
					document.getElementById('fna_popup').style.display = "block";
					document.getElementById('popup_overlay').style.display = "block";
				};
				// popup starts here 

				$scope.delete_fna_popup_close = function(){
					document.getElementById('select_create_popup').style.display = "none";
					document.getElementById('popup_overlay').style.display = "none";
				};
				$scope.delete_popup_close = function(){
					document.getElementById('fna_popup').style.display = "none";
					document.getElementById('profile_name_popup').style.display = "none";
					document.getElementById('popup_overlay').style.display = "none";
				};
			// popup ends here 

			
	
				$scope.openPopup=function(message){
					$scope.content="<p>"+message+"</p>";
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					document.getElementById('profile_status_popup').style.display = "block";
					document.getElementById('popup_overlay').style.display = "block";
				};
				$scope.closePopup=function(type){
					
					  if(type && type=="save")
						{
						
						 
						   $scope.saveProfileData();
						   
						}
					document.getElementById('popup_overlay').style.display = "none";
					document.getElementById('profile_status_popup').style.display = "none";
				};
				$scope.openAlert=function(message){
					$scope.content="<p>"+message+"</p>";
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					document.getElementById('alert_popup').style.display = "block";
					document.getElementById('popup_overlay').style.display = "block";
				};
				$scope.closeAlert=function(){
					
					document.getElementById('popup_overlay').style.display = "none";
					document.getElementById('alert_popup').style.display = "none";
				};
//				alert popup ends 
		  
		/* end */
		   
				document.getElementById("settings_img").setAttribute("class","hd_settings");
	
 });


// /*********************** END *************************************/
