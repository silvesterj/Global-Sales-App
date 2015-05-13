
/* JavaScript content from js/controllers/productsCtrl.js in folder common */

/* JavaScript content from js/controllers/productsCtrl.js in folder common */

/* JavaScript content from js/controllers/productsCtrl.js in folder common */
/* Copyright Ã‚Â©  2015 Wipro Ltd. All Rights Reserved.
 */
/*
 *
 * file name : < settingCtrl.js >
 * This is the controller js file for product page*
 *
 * @author <Abhisek Bhattacharyya>
 * @version <1.3> *
 */

// /*********************** Loading Json **************************/
app.controller('productsCtrl', function($scope, $http, $rootScope, $timeout,
		$location, $Language, $compile,$jsonStore,$logger,$FileUtils) {
	
	$scope.productListCollectionName="productList";
	$rootScope.notDownloadedProductCount=0;//used to count the total no. of not downloaded pdts.
	 //used to check if atleast one product is downloaded
	myHeight_prod = document.body.offsetHeight;
	var content_elems_prod = document.getElementsByClassName('product_main');
	for (var i = 0; i < content_elems_prod.length; i++) {
		content_elems_prod[i].style.height = (myHeight_prod - 180 + "px");
	}

	$scope.pageNavigation=function(){

		 var queryPart= {"subProductDownloadStatus":"complete" };
    		$jsonStore.retriveData($scope.productListCollectionName,queryPart,function (result){
    		   if(result.length>0 ||device.platform.toUpperCase().indexOf("IOS")>=0){
		    	   //$location.path("/home");
    			   $rootScope.$Footer.home();
			    	 if (!$rootScope.$$phase) $rootScope.$apply();
			    }
			   
		
      },function(error){$logger.log("ERROR",JSON.stringify(error));});
	};
	$scope.home = function() {
		
		$scope.pageNavigation();
	};

	

	
	
	$scope.createDownloadBox=function(){
		$jsonStore.retriveAllData($scope.productListCollectionName,function(result){
			
			$scope.productListData=result;
			
			var downloadBoxHtmlData='<div>';
			for(var index=0; index<$scope.productListData.length;index++){
				
				var status=$scope.productListData[index].json.subProductDownloadStatus;
				if(status=="complete"){
					downloadBoxHtmlData+='<div id="downloadbox'+index+'" class="download_box download_success">';
					downloadBoxHtmlData+='<h5>'+$scope.productListData[index].json.subMarketingName+'<span class="product_new_txt"></span></h5>';
					downloadBoxHtmlData+='<div class="percent_main">';
					downloadBoxHtmlData+='	<span id="downloadboxVersion'+index+'">version '+$scope.productListData[index].json.subDeploymentPackageVersion+'</span>';
					downloadBoxHtmlData+='	<div class="download_img" id="downloadIcon'+index+'"  >{{$productDownloadPercent['+index+']}}</div>';
					downloadBoxHtmlData+='</div>';
					downloadBoxHtmlData+='</div>';
					document.getElementById("setup_done").setAttribute('class', 'setup_done_active');
					$rootScope.$Footer.showFooter = "home";
					
				}else if(status=="pending"){
					downloadBoxHtmlData+='<div id="downloadbox'+index+'" class="download_box download_normal" ng-click="download('+index+')">';
					downloadBoxHtmlData+='<h5>'+$scope.productListData[index].json.subMarketingName+'</h5>';
					downloadBoxHtmlData+='<div class="percent_main">';
					downloadBoxHtmlData+='	<span id="downloadboxVersion'+index+'">version '+$scope.productListData[index].json.subDeploymentPackageVersion+'</span>';
					downloadBoxHtmlData+='	<div class="download_img" id="downloadIcon'+index+'" >{{$productDownloadPercent['+index+']}}</div>';
					downloadBoxHtmlData+='</div>';
					downloadBoxHtmlData+='</div>';
					$rootScope.notDownloadedProductCount++;
				}
				else if(status=="update"){
					downloadBoxHtmlData+='<div id="downloadbox'+index+'" class="download_box download_success" ng-click="download('+index+')">';
					downloadBoxHtmlData+='<h5>'+$scope.productListData[index].json.subMarketingName+'<span class="product_new_txt">{{productListData['+index+'].json.subProductDownloadStatus=="update"&&"Update Required"||""}}</span></h5>';
					downloadBoxHtmlData+='<div class="percent_main">';
					downloadBoxHtmlData+='	<span id="downloadboxVersion'+index+'">version '+$scope.productListData[index].json.subDeploymentPackageVersion+'</span>';
					downloadBoxHtmlData+='	<div class="download_img" id="downloadIcon'+index+'" >{{$productDownloadPercent['+index+']}}</div>';
					downloadBoxHtmlData+='</div>';
					downloadBoxHtmlData+='</div>';
					$rootScope.notDownloadedProductCount++;
					document.getElementById("setup_done").setAttribute('class', 'setup_done_active');
					$rootScope.$Footer.showFooter = "home";
				
				}
			}
			downloadBoxHtmlData+='</div>';
		      
				document.getElementById("product_download_box").appendChild($compile(downloadBoxHtmlData)($scope)[0]);
		
				if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
				    $scope.$apply();
				}
	},function(error){$logger.log("ERROR",JSON.stringify(error));});
		//if($rootScope.downloadCheckFlag){
		//	document.getElementById("setup_done").setAttribute('class','setup_done_active');
		//	}
	};

	$scope.createDownloadBox();	


	$scope.download=function(index){
		var fileName="", source="",destination="";
		if($scope.productListData[index].json.subProductDownloadStatus=="pending"){
			 fileName=$scope.productListData[index].json.subDeploymentPackageName+"."+$scope.productListData[index].json.DeploymentPackageType;
			 source=$FileUtils.getProductServerPath()+fileName;
			 destination=$FileUtils.getProductXpressProductPath($FileUtils.absolutePath)+fileName;
		}else{
			 fileName=$scope.productListData[index].json.newSubDeploymentPackageName+"."+$scope.productListData[index].json.DeploymentPackageType;
			 source=$FileUtils.getProductServerPath()+fileName;
			 destination=$FileUtils.getProductXpressProductPath($FileUtils.absolutePath)+fileName;
		}

		var tempdownloadbox= document.getElementById("downloadbox"+index);
		tempdownloadbox.className = "download_box download_progress";
		tempdownloadbox.style.pointerEvents = 'none';
		
		
		$FileUtils.productDownload(source, destination,index,JSON.stringify($rootScope.currentUser),function(success){
			if($scope.productListData[index].json.subProductDownloadStatus=="update"){
			$scope.productListData[index].json.subDeploymentPackageVersion=$scope.productListData[index].json.newSubDeploymentPackageVersion;
			document.getElementById("downloadboxVersion"+index).innerHTML="version "+$scope.productListData[index].json.subDeploymentPackageVersion;
			}
			$http.get($FileUtils.getLocalProductDetailsPath()+$scope.productListData[index].json.subDeploymentPackageName+".json").then(function(values)
			
			//$http.get($FileUtils.getProductXpressProductDetailsPath($FileUtils.relativePath)+$scope.productListData[index].json.subDeploymentPackageName+".json").then(function(values)
					{
						
						//alert(JSON.stringify(values.data));
						
					
						$scope.productListData[index].json.subProductDownloadStatus="complete";
						$scope.productListData[index].json.subProductDetailsJson=JSON.stringify(values.data);
						var updateQuery=	$scope.productListData[index];
						 $jsonStore.updateData($scope.productListCollectionName,updateQuery,function (updatecount){
							
							//   alert("download status updated:"+updatecount); 
							
							var downloadbox= document.getElementById("downloadbox"+index);
							downloadbox.className = "download_box download_success";
							downloadbox.style.pointerEvents = 'none';
							$rootScope.$productDownloadPercent[index]="";
							document.getElementById("setup_done").setAttribute('class', 'setup_done_active');
							$rootScope.$Footer.showFooter = "home";
							$rootScope.notDownloadedProductCount--;
							/*	if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
							    $scope.$apply();*/
							//}
							   },function(error){
								   downloadbox.className = "download_box download_error";
									$rootScope.$productDownloadPercent[index]="";
								   $logger.log("ERROR",JSON.stringify(error));});
						
						
					},function(error){$logger.log("ERROR",JSON.stringify(error));}); 
						    

						
					});
			
			
		
	};
	
	document.getElementById("settings_img").setAttribute("class","hd_settings");
});

// /*********************** END *************************************/
