
/* JavaScript content from js/controllers/loginCtrl.js in folder common */
/**
* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/**
*
 * file name : < loginCtrl.js >
* The Class <code>loginCtrl</code> is an MVC controller for
*
* @author <Arun Kumar Murugesan>
* @version < 1.1> *
*/
// /*********************** Loading Json **************************/
 app.controller('loginCtrl', function($scope, $http,$rootScope,$timeout, $location,$Language ,$jsonStore,$commonUtility,$adapterUtility,$logger,$PxCalculator,$FileUtils,$Footer, $interval) {
	 $scope.agent={};
	 $Footer.init();
	 $scope.languagetoggle=0;
	 $scope.plantoggle=0;
	 $scope.credentialsCollectionName ="credentials";
	 $scope.productListCollectionName="productList";
	 $scope.myContentCollectionName="myContent";
	 $scope.globalDataCollectionName="globalData";
	 $scope.settingsCollectionName="settings";
	 $scope.productList=[];
	 $scope.newProductList=[];
	 $scope.updateProductList=[];
	 $scope.productCollectionTemp=[];
	 $scope.myContents=[];
	 $scope.newMyContents=[];
	 $scope.updateMyContents=[];
	 $scope.contentCollectionTemp=[];
	 
	 
	$scope.appVersion = WL.Client.getAppProperty("APP_VERSION");

	$scope.options = [
    {
	  name: 'English',
	  value: 'Language_EN'
	},
	{
		  name: 'Arabic',
		  value: 'Language_AR'
	},
	{
	  name: 'Spanish',
	  value: 'Language_ESP'
	}
	
  ];

    if($rootScope.languageSelect==null || $rootScope.languageSelect=="")
    {
      $scope.selectedOption=$scope.options[0];
    }
    else
    {
     if($rootScope.languageSelect=="Language_EN")
     {
      $scope.selectedOption=$scope.options[0];
     }
     if($rootScope.languageSelect=="Language_AR")
     {
      $scope.selectedOption=$scope.options[1];
     }
     if($rootScope.languageSelect=="Language_ESP")
     {
      $scope.selectedOption=$scope.options[2];
     }
    }
    $scope.changeLanguage = function()
   {
     $rootScope.languageSelect=$scope.selectedOption.value;
     $Language.setLanguage($scope.selectedOption.value);
   };
   
	$http.get('json/uiConfigurator.json').then(function(values)
			{
				$rootScope.uiConfigurator=values.data;
				
					$scope.loginScope.createUi(values.data.login.loginPage);
				    

				
			});
	$scope.updateProductListStore=function(){
		var productListRequest={
			    "transaction": {
			        "header": {
			            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
			            "locale": "en_US",
			            "authenticationToken": "HEXA0000123456",
			            "guid": "HEX0000000001111",
			            "userId": "admin",
			            "deviceId": "macid13",
			            "sourceType": "mobile"
			        },
			        "type": "getProductList",
			        "parameters": $scope.agent 
			        }
			    
			};
		

		//updating product list to jsonstore.
		$adapterUtility.invoke("serviceAdapter","getService",JSON.stringify(productListRequest),function(result){

		if(result.invocationResult.transaction.parameters.products){
		var products=result.invocationResult.transaction.parameters.products;
		
		
			for(var productIndex=0;productIndex<products.length;productIndex++){
				var productFields={};
				var subProducts={};
				var product= products[productIndex];
				for (var productKey in product) {
			
					if(typeof product[productKey]=="object"){
						
						 subProducts=product[productKey];
						
					}else{
						productFields[productKey]=product[productKey];
					}
				}
			
				for(var subproductIndex=0;subproductIndex<subProducts.length;subproductIndex++){
					var subProduct= subProducts[subproductIndex];
					
					for (var productKey in productFields) {
						subProduct[productKey]=productFields[productKey];
					}
					
					$scope.productList.push(subProduct);
					}
			
			}
		
			//Iteration for finding updated products and new products available
			$jsonStore.retriveAllData($scope.productListCollectionName,function (result){
					
					 $scope.productCollectionTemp=result;
					
					 if($scope.productCollectionTemp==null || $scope.productCollectionTemp==""){
						 for(var productListIndex=0;productListIndex< $scope.productList.length;productListIndex++){
							 $scope.productList[productListIndex].subProductDownloadStatus="pending";
						 $scope.newProductList.push($scope.productList[productListIndex]);
						 }
					 }
					 else{
						 
						 for(var productListIndex=0;productListIndex< $scope.productList.length;productListIndex++){
							 var newdata=true;
							 for(var collectionIndex=0;collectionIndex< $scope.productCollectionTemp.length;collectionIndex++){
								 
								 if($scope.productList[productListIndex].subProductCode==$scope.productCollectionTemp[collectionIndex].json.subProductCode){
									if($scope.productList[productListIndex].subDeploymentPackageVersion!=$scope.productCollectionTemp[collectionIndex].json.subDeploymentPackageVersion){
										$scope.productCollectionTemp[collectionIndex].json.newProductVersion=$scope.productList[productListIndex].productVersion;
										$scope.productCollectionTemp[collectionIndex].json.newSubDeploymentPackageName=$scope.productList[productListIndex].subDeploymentPackageName;
										$scope.productCollectionTemp[collectionIndex].json.newSubDeploymentPackageVersion=$scope.productList[productListIndex].subDeploymentPackageVersion;
										$scope.productCollectionTemp[collectionIndex].json.newSubDeploymentPackageDeploymentDate=$scope.productList[productListIndex].subDeploymentPackageDeploymentDate;
										$scope.productCollectionTemp[collectionIndex].json.subProductDownloadStatus="update";
										
										$scope.updateProductList.push($scope.productCollectionTemp[collectionIndex]);
									}
									newdata=false;
									 break;
								 }
								 
							 }
							 if(newdata){
								 $scope.productList[productListIndex].subProductDownloadStatus="pending";
								 $scope.newProductList.push($scope.productList[productListIndex]);
							 }
							 }
							 
						 }
					 if($scope.newProductList.length>0){
							$jsonStore.insertData($scope.productListCollectionName,$scope.newProductList,function (count){
								
								
								if($scope.updateProductList.length>0){
									$jsonStore.updateData($scope.productListCollectionName,$scope.updateProductList,function (count){
										
										$scope.updateMyContentStore();
										
								},function(error){$logger.log("ERROR",JSON.stringify(error));});
								} 
								else{
									$scope.updateMyContentStore();

								
								}
						},function(error){$logger.log("ERROR",JSON.stringify(error));});
						} else if($scope.updateProductList.length>0){
							$jsonStore.updateData($scope.productListCollectionName,$scope.updateProductList,function (count){
							
								$scope.updateMyContentStore();

							
						},function(error){$logger.log("ERROR",JSON.stringify(error));});
						} else{
							$scope.updateMyContentStore();

							
						}
					 
			},function(error){$logger.log("ERROR",JSON.stringify(error));});
			
			
			
		}
		},function(error){$logger.log("ERROR",JSON.stringify(error));$scope.progressBar("stop");alert("Server is not responding! Please contact admin..");});
	};
	
	
	$scope.arrangeContent=function(contents){
		for(var contentIndex=0;contentIndex<contents.length;contentIndex++){
				
				var contentFields={};
				var subContents={};
				var content= contents[contentIndex];
			
				if(content.documentByproduct){
					$scope.contentCategory={};
					$scope.contentCategory["categoryName"]=content["categoryName"];
					
					$scope.arrangeContent(content.documentByproduct);
							}
				else{
				for (var contentKey in content) {
			
					if(typeof content[contentKey]=="object"){
						
						 subContents=content[contentKey];
						
					}else{
						contentFields[contentKey]=content[contentKey];
					}
				}
			
				for(var subcontentIndex=0;subcontentIndex<subContents.length;subcontentIndex++){
					var subContent= subContents[subcontentIndex];
					
					for (var contentKey in contentFields) {
						subContent[contentKey]=contentFields[contentKey];
					}
					
				
						for (var contentCategoryKey in 	$scope.contentCategory) {
							subContent[contentCategoryKey]=	$scope.contentCategory[contentCategoryKey];
						}
						
					
					$scope.myContents.push(subContent);
					
					}
				}
			}
		};
	$scope.updateMyContentStore=function(){
		var myContentRequest={
			    "transaction": {
			        "header": {
			            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
			            "locale": "en_US",
			            "authenticationToken": "HEXA0000123456",
			            "guid": "HEX0000000001111",
			            "userId": "admin",
			            "deviceId": "macid13",
			            "sourceType": "mobile"
			        },
			        "type": "getAdvertismentContentList",
			        "parameters": $scope.agent
			        }
			    
			};
		

		//updating product list to jsonstore.
		$adapterUtility.invoke("serviceAdapter","getService",JSON.stringify(myContentRequest),function(result){
		//alert(JSON.stringify(result.invocationResult.transaction.parameters.products));
		if(result.invocationResult.transaction.parameters.content){
		var contents=result.invocationResult.transaction.parameters.content;

		
		$scope.arrangeContent(contents);

		$jsonStore.retriveAllData($scope.myContentCollectionName,function (result){
			
			 $scope.contentCollectionTemp=result;
				
			 if($scope.contentCollectionTemp==null || $scope.contentCollectionTemp==""){
				 for(var myContentsIndex=0;myContentsIndex< $scope.myContents.length;myContentsIndex++){
					 $scope.myContents[myContentsIndex].docDownloadStatus="pending";
				 $scope.newMyContents.push($scope.myContents[myContentsIndex]);
				 }
			 } else{
				 
				 for(var myContentsIndex=0;myContentsIndex< $scope.myContents.length;myContentsIndex++){
					 var newdata=true;
					 for(var collectionIndex=0;collectionIndex< $scope.contentCollectionTemp.length;collectionIndex++){
						 
						 if($scope.myContents[myContentsIndex].docName==$scope.contentCollectionTemp[collectionIndex].json.docName){
							if($scope.myContents[myContentsIndex].docVersion!=$scope.contentCollectionTemp[collectionIndex].json.docVersion){
								$scope.contentCollectionTemp[collectionIndex].json.docVersion=$scope.myContents[myContentsIndex].docVersion;
								$scope.contentCollectionTemp[collectionIndex].json.docDeploymentDate=$scope.myContents[myContentsIndex].docDeploymentDate;
								$scope.contentCollectionTemp[collectionIndex].json.docDownloadStatus="update";
								
								$scope.updateMyContents.push($scope.contentCollectionTemp[collectionIndex]);
							}
							newdata=false;
							 break;
						 }
						 
					 }
					 if(newdata){
						 $scope.myContents[myContentsIndex].docDownloadStatus="pending";
						 $scope.newMyContents.push($scope.myContents[myContentsIndex]);
					 }
					 }
					 
				 }
			 if($scope.newMyContents.length>0){
					$jsonStore.insertData($scope.myContentCollectionName,$scope.newMyContents,function (count){
						
						
						if($scope.updateMyContents.length>0){
							$jsonStore.updateData($scope.myContentCollectionName,$scope.updateMyContents,function (count){
							
								$scope.downloadDependencyFiles();
							
						},function(error){$logger.log("ERROR",JSON.stringify(error));});
						} 
						else{
							$scope.downloadDependencyFiles();

					
						}
				},function(error){$logger.log("ERROR",JSON.stringify(error));});
				} else if($scope.updateMyContents.length>0){
					$jsonStore.updateData($scope.myContentCollectionName,$scope.updateMyContents,function (count){
						
						$scope.downloadDependencyFiles();

					
				},function(error){$logger.log("ERROR",JSON.stringify(error));});
				} else{
					$scope.downloadDependencyFiles();

					
				}
		
		},function(error){$logger.log("ERROR",JSON.stringify(error));});
		
		}
		},function(error){$logger.log("ERROR",JSON.stringify(error));$scope.progressBar("stop");alert("Server is not responding! Please contact admin..");});
	};
	
	
	
	$scope.pageNavigation=function(){
		
		
		

		$scope.queryPart= [{"agentCode":$scope.agent.username}];
		$jsonStore.retriveData($scope.settingsCollectionName,$scope.queryPart,
				function (result)
				{
if(result.length>0){
					$rootScope.settingsObject=result[0].json;
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}}
					$rootScope.currentUser=$scope.agent;
					 var queryPart= {"subProductDownloadStatus":"complete" };
			     		$jsonStore.retriveData($scope.productListCollectionName,queryPart,function (result){
			     			
					       if(result==null || result==""){
					    	   /*bypass product download page*/
					    	   
		
							   $rootScope.$Footer.header = "hidden";
					    	  $location.path("/productsPage");
					    	 if (!$rootScope.$$phase) $rootScope.$apply();
						    }
						    else{
								$rootScope.$Footer.header = "hidden";
								$rootScope.$Footer.showFooter = "home";
						    	 $location.path("/home");
						    	 if (!$rootScope.$$phase) $rootScope.$apply();
							}
					
			       },function(error){$logger.log("ERROR",JSON.stringify(error));});					
					
				},
				function (error)
				{
					alert("no agent found"+JSON.stringify(error));
				}) ;
	};
	$scope.downloadDependencyFiles=function(){
		
		
		 $jsonStore.storedRecordCount($scope.globalDataCollectionName,function (count) {
			 
				if(count<1 && device.platform.toUpperCase()=="ANDROID"){
		var source=$FileUtils.getDependencyServerPath();
		var destination=$FileUtils.getApplicationStoragePath($FileUtils.absolutePath)+"productxpress.zip";
		
		$FileUtils.download(source, destination,JSON.stringify($scope.agent),function(success){
			
			var source=$FileUtils.getApplicationStoragePath($FileUtils.relativePath)+"productxpress.zip";;
			var destination=$FileUtils.getApplicationStoragePath($FileUtils.relativePath);
		
			$FileUtils.unZip(source, destination,function(success){
				var data={dependencyDownloadStatus: 'complete'};
				$jsonStore.insertData($scope.globalDataCollectionName,data,function (count){
					
					$scope.progressBar("stop");
					$scope.pageNavigation();
					
				},function(error){$logger.log("ERROR",JSON.stringify(error));});
			
				
			},function(error){$logger.log("ERROR",JSON.stringify(error));$scope.progressBar("stop");$scope.pageNavigation();});

		
			
		},function(error){$logger.log("ERROR",JSON.stringify(error));$scope.progressBar("stop");$scope.pageNavigation();});
				}
				else{
					$scope.progressBar("stop");
					$scope.pageNavigation();
				}
				},function(error){$logger.log("ERROR",JSON.stringify(error));});
	};
	
	$scope.onlineMode=function(){
		
		$scope.progressBar("start");
		var request={
			    "transaction": {
			        "header": {
			            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
			            "locale": "en_US",
			            "authenticationToken": "HEXA0000123456",
			            "guid": "HEX0000000001111",
			            "userId": "admin",
			            "deviceId": "macid13",
			            "sourceType": "mobile"
			        },
			        "type": "login",
			        "parameters": $scope.agent 
			        }
			    
			};
		$adapterUtility.invoke("serviceAdapter","getService",JSON.stringify(request),function(result){
			if(result.invocationResult.transaction.header.responseStatus=="OK")
				{
				  $jsonStore.storedRecordCount($scope.credentialsCollectionName,function (count) {
					  
					  
					if(count>0){
						var updateQuery=[{"_id":1,"json":$scope.agent}];
						 $jsonStore.updateData($scope.credentialsCollectionName,updateQuery,function (updatecount){
							
							 
							 },function(error){$logger.log("ERROR",JSON.stringify(error));});
						
						   $scope.updateProductListStore();
					}else{
					   $jsonStore.insertData($scope.credentialsCollectionName,$scope.agent,function (successValue){
						   var request={
								    "transaction": {
								        "header": {
								            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
								            "locale": "en_US",
								            "authenticationToken": "HEXA0000123456",
								            "guid": "HEX0000000001111",
								            "userId": "admin",
								            "deviceId": "macid13",
								            "sourceType": "mobile"
								        },
								        "type": "getAgentDetails",
								        "parameters":{} 
								        }};
					
						   $adapterUtility.invoke("serviceAdapter","getService",JSON.stringify(request),function(result){
						
							  $jsonStore.insertData($scope.settingsCollectionName,result.invocationResult.agentResult,function (successValue){
						   $scope.updateProductListStore();
							  },function(error){$logger.log("ERROR",JSON.stringify(error));});
					   },function(error){$logger.log("ERROR",JSON.stringify(error));$scope.progressBar("stop");alert("Server is not responding! Please contact admin..");});
					   },function(error){$logger.log("ERROR",JSON.stringify(error));});
					 }
					
				    },function(error){$logger.log("ERROR",JSON.stringify(error));});	
				  }
			else{
				$scope.progressBar("stop");
				$scope.login_popup_open();
				 $scope.content = "<p>Please check your username and password</p>";
			}
				
				},function(error){
					$logger.log("ERROR",JSON.stringify(error));
					$scope.progressBar("stop");
					$scope.login_popup_open();
					 $scope.content = "<p>Server is not responding! and Going Offline mode..</p>";
					$scope.offlineMode();
				});
	};
	
	$scope.offlineMode=function(){

    	$jsonStore.storedRecordCount($scope.credentialsCollectionName,function (count) {
    		
	    	  if(count>0)
	    		  {
	    		  $jsonStore.retriveAllData($scope.credentialsCollectionName,function(arrayResults) {
	    			 
						
							
						if(arrayResults[0].json.username==$scope.agent.username && arrayResults[0].json.password==$scope.agent.password)
							{
							$scope.pageNavigation();
						   }else{
								  $scope.login_popup_open();
								  $scope.content = "<p>Please Enter the valid Username and Password.</p>";
							}
	                   },function(error){$logger.log("ERROR",JSON.stringify(error));});
	    		 }
	    	  else
    		  {		
					$scope.login_popup_open();
					$scope.content = "<p>Please connect to wifi to login for the very first time</p>";
				
	    		  }
    	},function(error){$logger.log("ERROR",JSON.stringify(error));});
	};
	
	$scope.submit = function() {
		/*var dummycustomer = {dob: "10/02/1992",anb:18, id: '1256', salutation: 'Mr', customerName: 'kumar', idType: 'Passport', occupation: 'Copy-Writer', occupationCategory: 'ADVERTISING', occupationClass: '1', email: 'arun@wipro.com', smokingHabit: true, gender: 1, maritalStatus: 'Single', contactType: 'Mobile', contact: '9123456789'};


		$jsonStore.insertData("customer",dummycustomer,function (count){
			alert("customer inserted: "+count);
			
	},function(error){$logger.log("ERROR",JSON.stringify(error));}); */
		if ($scope.agent.username && $scope.agent.password) {	
			
			
			if( $commonUtility.checkNetwork()=="wifi")
				{ 
				$scope.onlineMode();
				
				
				    }
			
			else
			    	{
				$scope.offlineMode();
		        }
			}else{
				$scope.progressBar("stop");
				$scope.login_popup_open();
				$scope.content = "<p>Please enter Username and Password.</p>";
			}
		

		
	};
	 
	 $scope.photos = [
	                  {src: 'assets/images/img1.jpg', desc: 'Image 01'},
	                  {src: 'assets/images/img2.jpg', desc: 'Image 02'},
	                  {src: 'assets/images/img3.jpg', desc: 'Image 03'},
	                  {src: 'assets/images/img4.jpg', desc: 'Image 04'},
	                  {src: 'assets/images/img5.png', desc: 'Image 05'}
	                 
	              ];
	               
	              
	              $scope._Index = 0;
	               $scope.pressed = 0;
	              // if a current image is the same as requested image
	              $scope.isActive = function (index) {
	                  return $scope._Index === index;
	              };

	              // show prev image
	              $scope.showPrev = function () {
	                  $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
	              };

	              // show next image
	              $scope.showNext = function () {
	               
	                  $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
	                 // alert("previous");
	              };
	               
	               
	              // show a certain image
	              $scope.showPhoto = function (index) {
	                
	                  $scope.pressed = 1;
	                  $scope._Index = index;
	              };
	              
	              
	              $scope.progressBar = function (type) {
	                 if(type.toUpperCase()=="START"){
	                	 document.getElementById("loader").style.display="block";
	                 }
	                 else if(type.toUpperCase()=="STOP"){
	                	 document.getElementById("loader").style.display="none";
	                 }
	                 
	              };
	              
	               
	               var timer=$interval(function(){
	                
	                   if($scope.pressed == 0)
	                   {
	                      $scope.showNext();
	                   }
	                },5000); 
	       
			
			// login popup starts 
			
			$scope.login_popup_open = function(){
				document.getElementById('login_popup').style.display = "block";
				document.getElementById('popup_overlay').style.display = "block";
			};
			$scope.delete_popup_close = function(){
				document.getElementById('login_popup').style.display = "none";
				document.getElementById('popup_overlay').style.display = "none";
			};
	        
	    });

// /*********************** END *************************************/
