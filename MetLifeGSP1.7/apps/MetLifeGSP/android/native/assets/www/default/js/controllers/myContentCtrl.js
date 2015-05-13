
/* JavaScript content from js/controllers/myContentCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
 */
/*
 *
 * file name : < settingCtrl.js >
 * This is the controller js file for my content page*
 *
 * @author <Sanjana G Shet>
 * @version <1.0> *
 */

// /*********************** Loading Json **************************/
app
		.controller(
				'myContentCtrl',
				function($scope, $http, $rootScope, $timeout, $location,
						$Language, $jsonStore, $logger, $compile,$FileUtils) {

					$scope.current_tab = "Reference";
					$scope.myContentCollectionName = "myContent";
					$scope.myContents = [];
					$scope.myContentWithProductCategory = {};
					$scope.myContentWithoutProductCategory = [];
					$scope.currentProductCategoryId = "";
					var isproductCategory = false;
					$scope.fillProductCategory = function(categoryName) {
						$scope.myContentWithProductCategory = {};
						$scope.myContentWithoutProductCategory = [];
						var productCategoryhtmlData = "<div>";
						for (var contentIndex = 0; contentIndex < $scope.myContents.length; contentIndex++) {

							if ($scope.myContents[contentIndex].json.categoryName
									&& categoryName == $scope.myContents[contentIndex].json.categoryName) {
								$scope.myContents[contentIndex].json.index=contentIndex;
								if ($scope.myContents[contentIndex].json.productCategory) {
									isproductCategory = true;
									if ($scope.myContentWithProductCategory[$scope.myContents[contentIndex].json.productCategory]) {
										$scope.myContentWithProductCategory[$scope.myContents[contentIndex].json.productCategory]
												.push($scope.myContents[contentIndex].json);
									} else {
										$scope.myContentWithProductCategory[$scope.myContents[contentIndex].json.productCategory] = [];
										$scope.myContentWithProductCategory[$scope.myContents[contentIndex].json.productCategory]
												.push($scope.myContents[contentIndex].json);
									}

								} else {
									var docElement = document
											.getElementById("productCategory");
									docElement.replaceChild($compile(
											"<div></div>")($scope)[0],
											docElement.childNodes[0]);
									isproductCategory = false;
									$scope.myContentWithoutProductCategory
											.push($scope.myContents[contentIndex].json);
								}
							}

						}
						if (isproductCategory) {
							var selectDefault = true;

							for ( var category in $scope.myContentWithProductCategory) {
								if (selectDefault) {
									selectDefault = false;
									$scope.currentProductCategoryId = "category"
											+ category;
									productCategoryhtmlData += "<div id='"
											+ "category"
											+ category
											+ "' class='frstProdCategory_mrg' ng-click='fillDocument("+'"'+category+'"'+");'>";
									productCategoryhtmlData += "<label>"
											+ category + "</label>";
									productCategoryhtmlData += "</div>";
									$scope
											.fillDocument($scope.myContentWithProductCategory[category]);

								} else {
									productCategoryhtmlData += "<div id='"
											+ "category"
											+ category
											+ "' class='secProdCategory_mrg' ng-click='fillDocument("+'"'+category+'"'+");'>";
									productCategoryhtmlData += "<label>"
											+ category + "</label>";
									productCategoryhtmlData += "</div>";
								}
							}
							productCategoryhtmlData += "</div>";
							//alert(productCategoryhtmlData);

							var docElement = document
									.getElementById("productCategory");
							docElement.replaceChild($compile(
									productCategoryhtmlData)($scope)[0],
									docElement.childNodes[0]);
						} else {
							$scope
									.fillDocument($scope.myContentWithoutProductCategory);

						}
					};
		
					$scope.downloadDocument = function(fileName,index) {
						var source="",destination="";
						var contentBox= document.getElementById("contentBox"+index);
						contentBox.className = "download_algn progress";
						contentBox.disabled = true;
							 source=$FileUtils.getContentServerPath()+fileName;
							 destination=$FileUtils.getContentPath($FileUtils.absolutePath)+fileName;
						
						
				
							 $FileUtils.contentDownload(source, destination,index,JSON.stringify($rootScope.currentUser),function(success){
							
						
							
							
							$scope.myContents[index].json.docDownloadStatus="complete";
							var updateQuery=	$scope.myContents[index];
							 $jsonStore.updateData($scope.myContentCollectionName,updateQuery,function (updatecount){
								
							
								
								var contentBox= document.getElementById("contentBox"+index);
								contentBox.className = "download_algn success";
								contentBox.disabled = true;
								$rootScope.$contentDownloadPercent[index]="";
								var contentBoxView= document.getElementById("contentBoxView"+index);
								contentBoxView.className = "view_algn active";
								contentBoxView.disabled = false;
								
								if($scope.myContents[index].json.productCategory){
									var downloadedCategory= $scope.myContentWithProductCategory[$scope.myContents[index].json.productCategory];
									for(var catIndex=0;catIndex<downloadedCategory.length;catIndex++){
										
										if($scope.myContents[index].json.docName==downloadedCategory[catIndex].docName){
											$scope.myContentWithProductCategory[$scope.myContents[index].json.productCategory].docDownloadStatus="complete";
											
										}
									}
								}
								
								
								   },function(error){$logger.log("ERROR",JSON.stringify(error));});
							
							
						},function(error){$logger.log("ERROR",JSON.stringify(error));}); 
						
						
				
					};
					$scope.viewDocument = function(fileName,extension) {
						var filePath=$FileUtils.getContentPath($FileUtils.relativePath)+fileName;
						 $FileUtils.open(filePath, extension,function(success){
							 
						
						 },function(error){$logger.log("ERROR",JSON.stringify(error));alert(JSON.stringify(error));});
					};
					$scope.fillDocument = function(documents) {
						if (typeof documents=="string") {
							var id="category"+documents;
							
							documents=$scope.myContentWithProductCategory[documents];
							document.getElementById(
									$scope.currentProductCategoryId)
									.setAttribute("class",
											"secProdCategory_mrg");
							document.getElementById(id).setAttribute("class",
									"frstProdCategory_mrg");

							$scope.currentProductCategoryId = id;
						}

						var documentHtmlData = '<div>';
						for (var index = 0; index < documents.length; index++) {
							var status = documents[index].docDownloadStatus;
							if (status == "complete") {
								documentHtmlData += '<div class="referAll_algn">';
								if(documents[index].DocType=="mp4"||documents[index].DocType=="mkv"){
									documentHtmlData += '<div class="type_video">';
									}else if(documents[index].DocType=="ppt"){
									documentHtmlData += '<div class="type_ppt">';
									}else {
									documentHtmlData += '<div class="type_doc">';
									}
								documentHtmlData+=documents[index].docMarketingName
										+ '</div>';
								documentHtmlData += '<div class="download_algn success"></div>';
								documentHtmlData += '<button id="'+"contentBoxView"+documents[index].index+'" class="view_algn active" ng-click="viewDocument('
										+ "'"
										+ documents[index].docName
										+ "','"
										+ documents[index].DocType
										+ "'"
										+ ')">View</button>';
								documentHtmlData += '</div>';
							} else if (status == "pending") {
								documentHtmlData += '<div class="referAll_algn">';
								if(documents[index].DocType=="mp4"||documents[index].DocType=="mkv"){
									documentHtmlData += '<div class="type_video">';
									}else if(documents[index].DocType=="ppt"){
									documentHtmlData += '<div class="type_ppt">';
									}else {
									documentHtmlData += '<div class="type_doc">';
									}
								documentHtmlData+=documents[index].docMarketingName
										+ '</div>';
								documentHtmlData += '<div id="'+"contentBox"+documents[index].index+'" class="download_algn pending" ng-click="downloadDocument('
										+ "'"
										+ documents[index].docName
										+ "."
										+ documents[index].DocType
										+ "'"
										+ ','+"'"+documents[index].index+"'"+')">{{$contentDownloadPercent['+documents[index].index+']}}</div>';
								documentHtmlData += '<button id="'+"contentBoxView"+documents[index].index+'" class="view_algn" disabled ng-click="viewDocument('
									+ "'"
									+ documents[index].docName
									+ "','"
									+ documents[index].DocType
									+ "'"
									+ ')">View</button>';
								documentHtmlData += '</div>';
							} else if (status == "update") {
								documentHtmlData += '<div class="referAll_algn">';
								if(documents[index].DocType=="mp4"||documents[index].DocType=="mkv"){
									documentHtmlData += '<div class="type_video">';
									}else if(documents[index].DocType=="pptx" || documents[index].DocType=="pdf"){
									documentHtmlData += '<div class="type_ppt">';
									}else {
									documentHtmlData += '<div class="type_doc">';
									}
								documentHtmlData+=documents[index].docMarketingName
										+ '</div>';
								documentHtmlData += '<div  id="'+"contentBox"+documents[index].index+'" class="download_algn error" ng-click="downloadDocument('
										+ "'"
										+ documents[index].docName
										+ "."
										+ documents[index].DocType
										+ "'"
										+ ','+"'"+documents[index].index+"'"+')">{{$contentDownloadPercent['+documents[index].index+']}}</div>';
								documentHtmlData += '<button id="'+"contentBoxView"+documents[index].index+'" class="view_algn" disabled ng-click="viewDocument('
									+ "'"
									+ documents[index].docName
									+ "','"
									+ documents[index].DocType
									+ "'"
									+ ')">View</button>';
								documentHtmlData += '</div>';
							}
						}
						documentHtmlData += '</div>';
						
						var docElement = document.getElementById("myDocument");
						docElement.replaceChild($compile(documentHtmlData)(
								$scope)[0], docElement.childNodes[0]);
						if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						    $scope.$apply();
						}
					
					};
					$jsonStore.retriveAllData($scope.myContentCollectionName,
							function(result) {

								$scope.myContents = result;
								
								$scope.fillProductCategory($scope.current_tab);
							}, function(error) {
								$logger.log("ERROR", JSON.stringify(error));
							});
					
					
					$scope.mcTabClick = function(id) {
						if($scope.current_tab!=id){
						document.getElementById(id + "_tab").setAttribute(
								"class", "foot_li_orange");
						document.getElementById(id+"_algn").setAttribute("class",
								"active");
						document.getElementById($scope.current_tab + "_tab")
								.setAttribute("class", "foot_li_normal");
						document.getElementById($scope.current_tab+"_algn")
								.setAttribute("class", "");
						$scope.current_tab = id;
						$scope.fillProductCategory(id);
						}
					};
					
					document.getElementById("settings_img").setAttribute("class","hd_settings");
				});
