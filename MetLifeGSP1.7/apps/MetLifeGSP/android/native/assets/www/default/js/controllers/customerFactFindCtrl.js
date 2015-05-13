
/* JavaScript content from js/controllers/customerFactFindCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
 */
/*
 *
 * file name : <customerAdviceCtrl >
 * This is the controller js file for customer fact find page*
 *
 * @author <Arun>
 * @version <1.2> *
 */
// /*********************** Loading Json **************************/
app
		.controller(
				'customerFactFindCtrl',
				function($scope, $logger, $compile, $location, $rootScope,
						$adapterUtility, $commonUtility, $jsonStore,
						$Occupation, $FileUtils) {
					$scope.index = 0;
					$scope.cff = {};
					$scope.policyindex = 0;
					$scope.familyindex = 0;
					$scope.recomandationindex = 0;
					$scope.queryPart = '';
					$scope.customer = {};
					$scope.cff.financialNeedsObject = [];
					
					$scope.cff.existingPoliciesObject = [];
					$scope.cff.familyMemberObject = [];
					$scope.cff.recordOfAdvice = [];
					$scope.recommendationList = [];
					$scope.illustrationProfiles=[];
					$scope.customerCollectionName = "customer";
					$scope.cffCollectionName = "cff";
					$scope.illustrationCollectionName="illustration";
					$scope.isFamilyMemberOccupation = false;
					

					// policy,family and recommendation's tab add and delete
					// methods.

					/* Add policy, family , recomandation tab on buton click */

					$scope.policyCount = 3;
					$scope.hidePolicyDetail;
					$scope.removePolicyId;
					$scope.removePolicyTab;

					$scope.familyCount = 3;
					$scope.recomandationCount = 3;
					$scope.hideFamilyDetail;
					
					$scope.content_elems_family=[];

					$scope.removeFamilyId;
					$scope.removeFamilyTab;
					$scope.content_elems_policy;
					//$scope.cff.noOfExistingPolicy

					$scope.createnew = function() {
					document.getElementById('policy_add_popup').style.display = "none";
							document.getElementById('popup_overlay').style.display = "none";
						if ($scope.policyCount >= 10) {
							alert("Sorry Can't Add More Than 10 Policies!!!");
						} else {
							$scope.policyCount++;
							$scope.cff.noOfExistingPolicy = $scope.policyCount;
							hidePolicyDetail = 'showPolicyId'+ $scope.policyCount;
							$scope.removePolicyId = $scope.policyCount;
							$scope.removePolicyTab = $scope.policyCount;

							var newElement = document.createElement('li');
							var clickFunc = 'showPolicyDetail()';
							newElement.id = "policy_" + $scope.policyCount;
							newElement.setAttribute('ng-click','showPolicyDetail($event);policydata('+ $scope.policyCount + ')');
							newElement.appendChild(document.createTextNode("Policy "+ $scope.policyCount));
							var $newLiElement = document.getElementById("addPolicy").appendChild(newElement);
							$compile($newLiElement)($scope);
							var tab_wdth_policy = document.getElementById("policy_1").offsetWidth;
							var no_of_tabs_policy = $scope.policyCount;
							$scope.cff.noOfExistingPolicy = $scope.policyCount;
							//content_elems_policy.length = $scope.policyCount;
							var content_elems_policy = document.getElementById('cff_policy_tab_top_policy');
							//alert($scope.policyCount + " ----  policy count --- " + $scope.cff.noOfExistingPolicy);
							
							//for (var i = 0; i < $scope.content_elems_policy; i++) {
								
								content_elems_policy.style.width = (tab_wdth_policy*no_of_tabs_policy + 100 + "px");
							//} 
						}
					};
		
					$scope.createfamilynew = function() {
						
						if ($scope.familyCount >= 10) {
							alert("Sorry Can't Add More Than 10 Family Members!!!");
						} else {
							$scope.familyCount++;

							hideFamilyDetail = 'showFamilyId'+ $scope.familyCount;
							$scope.removeFamilyId = $scope.familyCount;
							$scope.removeFamilyTab = $scope.familyCount;

							var newElement = document.createElement('li');
							var clickFunc = 'showFamilyDetail()';

							newElement.id = "family_" + $scope.familyCount;
							newElement.setAttribute('ng-click','showFamilyDetail($event);familydata('+ $scope.familyCount + ')');
							newElement.appendChild(document.createTextNode("Family Member"+ $scope.familyCount));

							var $newLiElement = document.getElementById("addFamily").appendChild(newElement);
							$compile($newLiElement)($scope);
							var tab_wdth_family = document.getElementById("family_1").offsetWidth;
							var no_of_tabs_family = $scope.familyCount;
							$scope.cff.noOfFamilyMember = $scope.cff.familyMemberObject.length;
							var content_elems_family = document.getElementById('cff_policy_tab_top_family');
							//alert($scope.content_elems_family.length + " === ")
							//for (var i = 0; i <$scope.content_elems_family.length; i++) {
								content_elems_family.style.width = (tab_wdth_family*no_of_tabs_family + 120 + "px");
						//	}
						}
						$scope.cff.noOfFamilyMember = $scope.familyCount;
					};

					$scope.createrecomandationnew = function() {
						if ($scope.recomandationCount >= 10) {
							// alert("Sorry Can't Add More Than 10
							// recomandation!!!");
						} else {
							$scope.recomandationCount++;
							hideFamilyDetail = 'showFamilyId'
									+ $scope.recomandationCount;
							$scope.removeFamilyId = 'showFamilyId'
									+ $scope.recomandationCount;
							$scope.removeFamilyTab = $scope.recomandationCount;

							var newElement = document.createElement('li');
							newElement.id = "recommend_"
									+ $scope.recomandationCount;
							newElement.setAttribute('ng-click',
									'showrecommendationDetail($event);recommandationData('
											+ ($scope.recomandationCount - 1)
											+ ')');
							newElement.appendChild(document
									.createTextNode("Recommandation #"
											+ $scope.recomandationCount));
							var $newLiElement = document.getElementById(
									"addrecommendation")
									.appendChild(newElement);
							$compile($newLiElement)($scope);
							var tab_wdth_recommend = document
									.getElementById("recommend_1").offsetWidth;
							var no_of_tabs_recommend = $scope.recomandationCount;
							$scope.cff.noOfRecommendations = $scope.cff.recordOfAdvice.length;

							/*
							 * var content_elems_recommend =
							 * document.getElementsByClassName('cff_policy_tab_top_recommend');
							 * for(var i = 0; i <
							 * content_elems_recommend.length; i++) {
							 * content_elems_recommend[i].style.width =
							 * (tab_wdth_recommend*no_of_tabs_recommend+120+"px"); }
							 */
						}

					};

					$scope.showPolicyDetail = function(event) {

					};

					$scope.showFamilyDetail = function(event) {

					};

					$scope.removePolicy = function() {
						if ($scope.policyCount <= 3) {
							//alert("Sorry Can't Delete!!!");
							var policyClear = confirm("Are you sure! Do you want to clear this policy details?'");
							if (policyClear == true) {
								$scope.cff.existingPoliciesObject.splice(
									$scope.policyindex, 1);
						
							//$scope.policyCount--;
							// $scope.removePolicyTab--;
							//$scope.removePolicyId--;
							}
						} else {
							var policyDelete = confirm("Are you sure! Do you want to delete this policy?'");
							if (policyDelete == true) {
								document.getElementById(
										"policy_" + $scope.removePolicyId).remove();
								// ;
								// document.getElementById($scope.removePolicyTab).remove();
	
								document.getElementById("showPolicyId1").style.display = "block";
								hidePolicyDetail = "showPolicyId1";
								$scope.cff.existingPoliciesObject.splice(
										$scope.policyindex, 1);
							
								$scope.policyCount--;
								// $scope.removePolicyTab--;
								$scope.removePolicyId--;
								$scope.cff.noOfExistingPolicy = $scope.policyCount;
							}
						}
					};

					$scope.removeFamily = function() {
						if ($scope.familyCount <= 3) {
							/**alert("Sorry Can't Delete!!!");/
							 */
							var familyClear = confirm("Are you sure! Do you want to clear this family member details?'");
							if (familyClear == true) {
							$scope.cff.familyMemberObject.splice(
									$scope.familyindex, 1);
							//$scope.familyCount = (parseInt($scope.familyCount) - 1);
							//$scope.removeFamilyId--;
							}
						} else {
							var familyDelete = confirm("Are you sure! Do you want to delete this family member?'");
							if (familyDelete == true) {
								document.getElementById(
										"family_" + $scope.familyCount)
										.remove();
								// document.getElementById($scope.removePolicyTab).remove();
								$scope.cff.familyMemberObject.splice(
										$scope.familyindex, 1);
								$scope.familyCount = (parseInt($scope.familyCount) - 1);
								$scope.removeFamilyId--;
								$scope.cff.noOfFamilyMember = $scope.cff.familyMemberObject.length;
								$scope.cff.noOfFamilyMember = $scope.familyCount;
							}
								
							/*
							 * var msgbox = $dialog.messageBox('Delete Family
							 * Member', 'Are you sure! Do you want to delete
							 * this family member?', [{label:'Yes', result:
							 * 'yes'},{label:'No', result: 'no'}]);
							 * msgbox.open().then(function(result){ if(result
							 * === 'yes') { //code to delete here
							 * document.getElementById($scope.familyCount).remove(); //
							 * document.getElementById($scope.removeFamilyTab).remove();
							 *  //
							 * document.getElementById("showFamilyId1").style.display =
							 * "block"; // hideFamilyDetail = "showFamilyId1";
							 * $scope.familyCount--; } });
							 */
						}
						
					};

					/*
					 * loading data from rootscope to local object if rootscope
					 * customer object is not null
					 */
					if ($rootScope.customerObject !== undefined
							&& $rootScope.customerObject !== null
							&& Object.keys($rootScope.customerObject).length > 0) {
						$scope.customer = $rootScope.customerObject.json;
						$scope.customer.dob = new Date($scope.customer.dob);
						$scope.cff.dob = $scope.customer.dob;
						$scope.cff.id = $scope.customer.id;
					} else {
						$scope.customer.salutation = $scope.$Language.commonData.salutation[0];
						$scope.customer.idtype = $scope.$Language.commonData.idtype[0];
						$scope.customer.maritalStatus = $scope.$Language.commonData.maritalStatus[0];
						$scope.customer.gender = 1;
						$scope.customer.contactType = $scope.$Language.commonData.contactnotype[0];
						$scope.customer.alternateContactType = $scope.$Language.commonData.contactnotype[0];
						$scope.customer.smokingHabit = false;
					}
					$scope.cff.customerAdviceChoice = 1;
					for (var financialNeedsObjectIndex = 0; financialNeedsObjectIndex < $rootScope.$Language.cff.myFinancialNeedsData.length; financialNeedsObjectIndex++) {

						$scope.cff.financialNeedsObject[financialNeedsObjectIndex] = {
							"alreadyPlaned" : true,
							"toDiscuss" : true,
							"priorty" : $rootScope.$Language.commonData.priorty[0],
							"remarks" : $rootScope.$Language.commonData.remarksValues[0]
						};
					}

					$scope.cff.existingPoliciesObject[$scope.policyindex] = {};
					$scope.cff.existingPoliciesObject[$scope.policyindex].planType = $rootScope.$Language.commonData.planType[0];
					$scope.cff.existingPoliciesObject[$scope.policyindex].premiumTypeValues = $rootScope.$Language.commonData.premiumTypeValues[0];
					$scope.cff.existingPoliciesObject[$scope.policyindex].frequency = $rootScope.$Language.commonData.frequency[0];

					
					
					$scope.cff.familyMemberObject[$scope.familyindex] = {};
					$scope.cff.familyMemberObject[$scope.familyindex].typeOfPlan = $rootScope.$Language.commonData.planType[0];
					$scope.cff.familyMemberObject[$scope.familyindex].contactnotype = $rootScope.$Language.commonData.contactnotype[0];
					$scope.cff.familyMemberObject[$scope.familyindex].relationship = $rootScope.$Language.commonData.relationship[0];
					$scope.cff.familyMemberObject[$scope.familyindex].gender = 1;
					

					$scope.cff.recordOfAdvice[$scope.recomandationindex] = {};

					$scope.cff.recordOfAdvice[$scope.recomandationindex].reasonOfRecommending = $rootScope.$Language.commonData.Reasonforrecommending[0];
					$scope.cff.recordOfAdvice[$scope.recomandationindex].frequency = $rootScope.$Language.commonData.frequency[0];
					

					if ($rootScope.cffObject != null
							&& $rootScope.cffObject != undefined
							&& Object.keys($rootScope.cffObject).length > 0) {
						$scope.cff = $rootScope.cffObject.json;
					
						// $scope.cff.financialNeedsObject[0].priorty=$rootScope.$Language.commonData.priorty[3];
						if ($scope.cff.existingPoliciesObject) {
							for (var index = 0; index < $scope.cff.existingPoliciesObject.length; index++) {
								if (index >= 3) {
									$scope.createnew();
								}
								if ($scope.cff.existingPoliciesObject[index]
										&& $scope.cff.existingPoliciesObject[index].startDate) {
									$scope.cff.existingPoliciesObject[index].startDate = new Date(
											$scope.cff.existingPoliciesObject[index].startDate);

								}
								if ($scope.cff.existingPoliciesObject[index]
										&& $scope.cff.existingPoliciesObject[index].maturityDate) {
									$scope.cff.existingPoliciesObject[index].maturityDate = new Date(
											$scope.cff.existingPoliciesObject[index].maturityDate);

								}
							}
						} else {

							$scope.cff.existingPoliciesObject = [];
							$scope.cff.existingPoliciesObject[$scope.policyindex] = {};
							$scope.cff.existingPoliciesObject[$scope.policyindex].planType = $rootScope.$Language.commonData.planType[0];
							$scope.cff.existingPoliciesObject[$scope.policyindex].premiumTypeValues = $rootScope.$Language.commonData.premiumTypeValues[0];
							$scope.cff.existingPoliciesObject[$scope.policyindex].frequency = $rootScope.$Language.commonData.frequency[0];

						}
						if ($scope.cff.familyMemberObject) {
							for (var index = 0; index < $scope.cff.familyMemberObject.length; index++) {
								if (index >= 3) {
									$scope.createfamilynew();
								}
								if ($scope.cff.familyMemberObject[index]
										&& $scope.cff.familyMemberObject[index].dob) {
									$scope.cff.familyMemberObject[index].dob = new Date(
											$scope.cff.familyMemberObject[index].dob);

								}
							}
						} else {
							$scope.cff.familyMemberObject = [];
							$scope.cff.familyMemberObject[$scope.familyindex] = {};
							$scope.cff.familyMemberObject[$scope.familyindex].typeOfPlan = $rootScope.$Language.commonData.planType[0];
							$scope.cff.familyMemberObject[$scope.familyindex].contactnotype = $rootScope.$Language.commonData.contactnotype[0];
							$scope.cff.familyMemberObject[$scope.familyindex].relationship = $rootScope.$Language.commonData.relationship[0];
							$scope.cff.familyMemberObject[$scope.familyindex].gender = 1;

						}
						/*
						 * if($scope.cff.recordOfAdvice){ for(var index=0;index<$scope.cff.recordOfAdvice.length;index++){
						 * if(index>=3){ $scope.createrecomandationnew(); }
						 *  }
						 *  } else{
						 */
						if (!$scope.cff.recordOfAdvice) {
							$scope.cff.recordOfAdvice = [];
							$scope.cff.recordOfAdvice[$scope.recomandationindex] = {};

							$scope.cff.recordOfAdvice[$scope.recomandationindex].reasonOfRecommending = $rootScope.$Language.commonData.Reasonforrecommending[0];
							$scope.cff.recordOfAdvice[$scope.recomandationindex].frequency = $rootScope.$Language.commonData.frequency[0];

						}
						
						$scope.cff.noOfRecommendations = $scope.cff.recordOfAdvice.length;
						if (!$scope.cff.customerAdviceChoice) {
							$scope.cff.customerAdviceChoice = 1;
						}
						if (!$scope.cff.financialNeedsObject
								|| Object.keys($scope.cff.financialNeedsObject).length == 0) {
							$scope.cff.financialNeedsObject = [];
							for (var financialNeedsObjectIndex = 0; financialNeedsObjectIndex < $rootScope.$Language.cff.myFinancialNeedsData.length; financialNeedsObjectIndex++) {

								$scope.cff.financialNeedsObject[financialNeedsObjectIndex] = {
									"alreadyPlaned" : true,
									"toDiscuss" : true,
									"priorty" : $rootScope.$Language.commonData.priorty[0],
									"remarks" : $rootScope.$Language.commonData.remarksValues[0]
								};
							}
						}
					} else {
						$scope.cff.isProceedWithCurrentRiskAppetiteSuggestion=false;
					}

					if (Object.keys($rootScope.recommendationList).length > 0) {
						$scope.recommendationList = angular.copy($rootScope.recommendationList);
						//alert("$scope.recommendationList.length: "+$scope.recommendationList.length);
						for (var index = 0; index < $scope.recommendationList.length; index++) {
							
							if (index < 3) {
								if (!$scope.cff.recordOfAdvice[index]) {
									$scope.cff.recordOfAdvice[index] = {};

									$scope.cff.recordOfAdvice[index].reasonOfRecommending = $rootScope.$Language.commonData.Reasonforrecommending[0];
									$scope.cff.recordOfAdvice[index].frequency = $rootScope.$Language.commonData.frequency[0];

								}

								if ($scope.recommendationList[index].json.planName) {

									$scope.cff.recordOfAdvice[index].planType = $scope.recommendationList[index].json.planName;
								}
								if ($scope.recommendationList[index].json.coverageTerm) {
									$scope.cff.recordOfAdvice[index].term = $scope.recommendationList[index].json.coverageTerm;
								}
								if ($scope.recommendationList[index].json.insuredAmount) {
									$scope.cff.recordOfAdvice[index].sumCovered = $scope.recommendationList[index].json.insuredAmount;
								}
								if ($scope.recommendationList[index].json.isPolicyOwner) {
									$scope.cff.recordOfAdvice[index].policyOwnerName = $scope.recommendationList[index].json.customerName;
								} else {
									$scope.cff.recordOfAdvice[index].policyOwnerName = $scope.recommendationList[index].json.policyOwnerName;
								}
								if ($scope.recommendationList[index].json.yearlyPremium) {
									$scope.cff.recordOfAdvice[index].premium = $scope.recommendationList[index].json.yearlyPremium;
								}
								if ($scope.recommendationList[index].json.customerName) {
									$scope.cff.recordOfAdvice[index].lifeAssuredName = $scope.recommendationList[index].json.customerName;
								}

								if ($scope.recommendationList[index].json.riders) {
//alert("recommendations: "+$scope.recommendationList[index].json.riders);

									$scope.recommendationList[index].json.riders = JSON
											.parse($scope.recommendationList[index].json.riders);
									
									$scope.cff.recordOfAdvice[index].additionalCoverage = "";
									for (var riderIndex = 0; riderIndex < $scope.recommendationList[index].json.riders.length; riderIndex++) {
										if ($scope.recommendationList[index].json.riders[riderIndex].riderSelectedStatus) {
											if ($scope.cff.recordOfAdvice[index].additionalCoverage != "") {
												$scope.cff.recordOfAdvice[index].additionalCoverage += ", ";
											}
											$scope.cff.recordOfAdvice[index].additionalCoverage += $scope.recommendationList[index].json.riders[riderIndex].code;
										}

									}
								}
							}
						}
					}

					$scope.cff.noOfExistingPolicy = $scope.policyCount;
					$scope.cff.noOfFamilyMember = $scope.familyCount;
					$scope.cff.noOfRecommendations = $scope.cff.recordOfAdvice.length;
				
					/*
					 * for ($scope.index=0; $scope.index<5;$scope.index++){
					 * if(!$scope.cff.financialNeedsObject[$scope.index]){
					 * $scope.cff.financialNeedsObject[$scope.index]={}; } }
					 */

					$scope.policydata = function(policyindex) {
						$scope.policyindex = policyindex - 1;

						if (!$scope.cff.existingPoliciesObject[$scope.policyindex]) {
							$scope.cff.existingPoliciesObject[$scope.policyindex] = {};
							$scope.cff.existingPoliciesObject[$scope.policyindex].planType = $rootScope.$Language.commonData.planType[0];
							$scope.cff.existingPoliciesObject[$scope.policyindex].premiumTypeValues = $rootScope.$Language.commonData.premiumTypeValues[0];
							$scope.cff.existingPoliciesObject[$scope.policyindex].frequency = $rootScope.$Language.commonData.frequency[0];
						}

					};
					$scope.familydata = function(familyindex) {
						$scope.familyindex = familyindex;
						if (!$scope.cff.familyMemberObject[$scope.familyindex]) {
							$scope.cff.familyMemberObject[$scope.familyindex] = {};
							$scope.cff.familyMemberObject[$scope.familyindex].typeOfPlan = $rootScope.$Language.commonData.planType[0];
							$scope.cff.familyMemberObject[$scope.familyindex].contactnotype = $rootScope.$Language.commonData.contactnotype[0];
							$scope.cff.familyMemberObject[$scope.familyindex].relationship = $rootScope.$Language.commonData.relationship[0];
							$scope.cff.familyMemberObject[$scope.familyindex].gender = 1;
						}
						/*
						 * $scope.cff.familyMemberObject[familyindex].occupation=$scope.occupation;
						 * $scope.cff.familyMemberObject[familyindex].occupationCategory=$scope.occupationCategory;
						 * $scope.cff.familyMemberObject[familyindex].occupationClass=$scope.occupationClass;
						 */

					};
					$scope.recommandationData = function(recomandationindex) {
						$scope.recomandationindex = recomandationindex;
						if (![$scope.recomandationindex]) {
							$scope.cff.recordOfAdvice[$scope.recomandationindex] = {};
							$scope.cff.recordOfAdvice[$scope.recomandationindex].reasonOfRecommending = $rootScope.$Language.commonData.Reasonforrecommending[0];
							$scope.cff.recordOfAdvice[$scope.recomandationindex].frequency = $rootScope.$Language.commonData.frequency[0];

						}
						
					};
				
					/* Saving collected cff data by calling common save function */

					/*
					 * $scope.saveData=function(){ $scope.flag=false;
					 * $scope.path=$location.path();
					 * if($scope.path=="/customerAdvice"){ if
					 * ($rootScope.customerObject !==undefined &&
					 * $rootScope.customerObject !==null &&
					 * Object.keys($rootScope.customerObject).length>0 ){
					 * $scope.customer= $rootScope.customerObject.json; }
					 * if(($scope.cff.profileName ==undefined ||
					 * $scope.cff.profileName==null)){ we have to show popup
					 * message // if(($scope.cff.profileName ==undefined ||
					 * $scope.cff.profileName==null)){
					 * $scope.risk_profile_status_open(); // } //
					 * $scope.cff.profileName=$scope.cff.profilename; } In the
					 * cff controller if selected customer is true, means coming
					 * from selected customer page with customer selected, load
					 * the customer data from selected customer data in to scope
					 * if(($scope.customer.dob !=undefined ||$scope.customer.dob
					 * !=null) &&($scope.customer.id !=undefined ||
					 * $scope.customer.id !=null)){
					 * $scope.cff.dob=$scope.customer.dob;
					 * $scope.cff.id=$scope.customer.id; }
					 * if(($scope.cff.profileName!=undefined ||
					 * $scope.cff.profileName !=null)){ $scope.tableName='cff';
					 * we have to check whether any of policies have data
					 * present $scope.index=0; while($scope.index <
					 * $scope.existingPoliciesObject.length) {
					 * if($scope.existingPoliciesObject[0].lifeAssured
					 * !=undefined){ $scope.flag=true; } break; }
					 * if($scope.flag){
					 * $scope.cff.existingPoliciesObject=JSON.stringify($scope.existingPoliciesObject);
					 * $scope.flag=false; } while($scope.index <
					 * $scope.noOfFamilyMemberobject.length) {
					 * if($scope.noOfFamilyMemberobject[0].memberName
					 * !=undefined){ $scope.flag=true; } break; }
					 * if($scope.flag){
					 * $scope.cff.familyMemberObject=JSON.stringify($scope.noOfFamilyMemberobject);
					 * $scope.flag=false; } while($scope.index <
					 * $scope.noOfRecommendationsobject.length) {
					 * if($scope.noOfRecommendationsobject[0].sumCovered
					 * !=undefined){ $scope.flag=true; } break; }
					 * if($scope.flag){
					 * $scope.cff.recordOfAdvice=JSON.stringify($scope.noOfRecommendationsobject);
					 * $scope.flag=false; } while($scope.index <
					 * Object.keys($scope.cff.financialNeedsObject).length) {
					 * if($scope.cff.financialNeedsObject[0].alreadyPlaned
					 * !=undefined){ $scope.flag=true; } break; }
					 * if($scope.flag){
					 * $scope.cff.financialNeedsObject=JSON.stringify($scope.cff.financialNeedsObject);
					 * $scope.flag=false; }
					 * 
					 * $scope.queryPart=
					 * [{"profileName":$scope.cff.profileName}];
					 * $jsonStore.retriveData("cff",$scope.queryPart,function
					 * (results){ if(results.length !=0){ $scope.dataToUpdate=
					 * [{_id:results[0]._id, json:$scope.cff}];
					 * $jsonStore.updateData($scope.tableName,$scope.dataToUpdate,function
					 * (s){alert( JSON.stringify("cff record Updated"+s));},
					 * function (e){alert(JSON.stringify(e));}) ;
					 * 
					 * }else{ $scope.dataToinsert=$scope.cff;
					 * $jsonStore.insertData($scope.tableName,$scope.dataToinsert,function
					 * (s){ alert(" Sucessfully saved !!!"); }, function
					 * (e){alert(error);});
					 *  } }, function (error){
					 * $logger.log("ERROR",JSON.stringify(error)); }) ;
					 * 
					 *  } } };
					 */

					$scope.saveCustomer = function() {
						// alert("customer on save:
						// "+JSON.stringify($scope.customer));
						// removing timestamp and changing the date pattern to
						// mm/dd/yy
						/*
						 * var date = new Date($scope.customer.dob); var
						 * convertedDob= (date.getMonth()+1) +"/"+date.getDate() +
						 * "/"+date.getFullYear();
						 * $scope.customer.dob=convertedDob;
						 */

						// var flag=$rootScope.isValid();
						// if(flag==true)
						// {
						// alert("validation true");
						// if($rootScope.customerObject._id !=undefined &&
						// $rootScope.customerObject._id != null){
						// $scope.customer.dob=$filter("date")($scope.customer.dob,
						// 'MM-dd-yyyy');
						// alert("dob before save: "+$scope.customer.dob);
						
				
						$scope.queryPart = [ {
							"id" : $scope.customer.id
						} ];
						$jsonStore
								.retriveData(
										$scope.customerCollectionName,
										$scope.queryPart,
										function(results) {

											if (results.length != 0) {
												$scope.customer.updatedDate=new Date();
												
												$scope.dataToUpdate = [ {
													_id : results[0]._id,
													json : $scope.customer
												} ];
												$jsonStore
														.updateData(
																$scope.customerCollectionName,
																$scope.dataToUpdate,
																function(s) {
																	// alert("customer
																	// updated");
																	$scope
																			.saveCffData();

																},
																function(e) {
																	alert(JSON
																			.stringify(e));
																});

											} else {
												if ($scope.customer.id != undefined
														&& $scope.customer.id != null
														&& $scope.customer.dob != undefined
														&& $scope.customer.dob != null) {
													$scope.customer.updatedDate=new Date();
													$scope.customer.createdDate=new Date();
													$scope.dataToInsert = $scope.customer;
													$jsonStore
															.insertData(
																	$scope.customerCollectionName,
																	$scope.dataToInsert,
																	function(s) {
																		// alert("customer
																		// inserted");
																		$scope
																				.saveCffData();

																	},
																	function(e) {
																		alert(JSON
																				.stringify(e));
																	});
												}
											}

										}, function(error) {
											$logger.log("ERROR", JSON
													.stringify(error));
										});
						// if customer created for first time and not yet saved
						// also,navigating to CFF,
						// all existing root scope object to be set to null,
						// means start afresh
						/* Copy the local scope object to the Root scope Object */

						// }
						
						$scope.policy_popup_close();

					};

					$scope.saveCffData = function() {

						if ($scope.customer.id) {

							if (!$scope.cff.profileName) {

								$scope.openPopup("Please enter a profile name");

							} else {
								
								$scope.cff.cffStatus = "InProgress";
								if ($scope.cff.recordOfAdvice.length>0) {
									for(var recordIndex=0; recordIndex<$scope.cff.recordOfAdvice.length; recordIndex++){
									if($scope.cff.recordOfAdvice[recordIndex].bought){
										
										$scope.cff.cffStatus = "Completed";
									};
										
										
									
								
									}}

								// $scope.cff.existingPoliciesObject=JSON.stringify($scope.existingPoliciesObject);
								// $scope.cff.familyMemberObject=JSON.stringify($scope.noOfFamilyMemberobject);
								// $scope.cff.recordOfAdvice=JSON.stringify($scope.noOfRecommendationsobject);
								// $scope.cff.financialNeedsObject=JSON.stringify($scope.cff.financialNeedsObject);
								// alert("data to dave:
								// "+JSON.stringify($scope.cff));

								$scope.queryPart = [ {
									"id" : $scope.customer.id,
									"profileName" : $scope.cff.profileName
								} ];
								$jsonStore
										.retriveData(
												$scope.cffCollectionName,
												$scope.queryPart,
												function(results) {
													if (results.length != 0) {
														$scope.cff.updatedDate=new Date();
														$scope.dataToUpdate = [ {
															_id : results[0]._id,
															json : $scope.cff
														} ];
														$jsonStore
																.updateData(
																		$scope.cffCollectionName,
																		$scope.dataToUpdate,
																		function(
																				s) {
																			$scope
																					.openAlert(" CFF updated successfully.");
																		},
																		function(
																				e) {
																			alert(JSON
																					.stringify(e));
																		});

													} else {
														$scope.cff.updatedDate=new Date();
														$scope.cff.createdDate=new Date();
														$jsonStore
																.insertData(
																		$scope.cffCollectionName,
																		$scope.cff,
																		function(
																				s) {
																			$scope
																					.openAlert(" CFF saved successfully.");
																		},
																		function(
																				e) {
																			alert(error);
																		});

													}
												}, function(error) {
													$logger.log("ERROR", JSON
															.stringify(error));
												});

							}
						} else {
							$rootScope.cffObject = {
								"_id" : null,
								"json" : $scope.cff
							};
							$scope
									.openAlert("Customer not present, data can be saved in profile status by selecting/creating customer.");

						}
					};

					$scope.advance_srch = true;
					$scope.popup_click_button = function() {
						document.getElementById('popup_signature').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
						$scope.xyz.calculateOffset();
					};
					$scope.popup_close = function() {
						document.getElementById('popup_signature').style.display = "none";
						document.getElementById('popup_overlay').style.display = "none";
					};

					/*
					 * Calculation Risk appetite classification up to 5 -- very
					 * low risk 6 to 10 -- low risk 11 to 15 -- Medium risk
					 * appetite 16 to 20 is High risk appetite 21 to 25 is very
					 * risk appetite
					 */
					$scope.riskAppetiteAction=function(){
						if($scope.cff.riskAppetiteSuggestion=='1'){
						
						}
						else if($scope.cff.riskAppetiteSuggestion=='2'){
						
							if($scope.fundPortfolioNameMismatchIndex!=null){
								$rootScope.illustrationObject=$scope.illustrationProfiles[$scope.fundPortfolioNameMismatchIndex];
								$rootScope.$Footer.salesIllustration('salesIllustration');
							}
						}
						else if($scope.cff.riskAppetiteSuggestion=='3'){
						
							$scope.cff.isProceedWithCurrentRiskAppetiteSuggestion=true;
						}
						
					};
					$scope.checkRiskAppetite=function(){
if($scope.customer.id && $scope.cff.profileName ){
	$scope.fundPortfolioNameList="";
	$scope.illustrationProfiles=[];
	$scope.fundPortfolioNameMismatchIndex=null;
	$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.cff.profileName}];
	    $jsonStore.retriveData($scope.illustrationCollectionName,$scope.queryPart,
				   function (result){
	    	$scope.illustrationProfiles=result;
	    //	alert("query result: "+JSON.stringify(result));
	    	if(result.length>0)
   		{
	    		for(var index=0;index<result.length;index++){
	    			
	    			var fundPortfolioType=JSON.parse(result[index].json.fundPortfolioName).portfolioType;
	    				
	    				if(fundPortfolioType 
	    				&&(!(fundPortfolioType=="Low Risk Option 1" && $scope.cff.totalScore <= 5)&&
	    				!(fundPortfolioType=="Low Risk Option 2" && ($scope.cff.totalScore >= 6 && $scope.cff.totalScore <= 10))&&
	    				!((fundPortfolioType=="Medium Risk Option 1" || fundPortfolioType=="Medium Risk Option 2" ) && ($scope.cff.totalScore >= 11 && $scope.cff.totalScore <= 15))&&
	    				!((fundPortfolioType=="High Risk Option 1" || fundPortfolioType=="High Risk Option 2" ) && ($scope.cff.totalScore >= 16 && $scope.cff.totalScore <= 20))&&
	    				!((fundPortfolioType=="High Risk Option 3" || fundPortfolioType=="High Risk Option 4" ) && ($scope.cff.totalScore >= 21 && $scope.cff.totalScore <= 25))
	    				
	    				)){
	    					$scope.fundPortfolioNameList+=fundPortfolioType;
	    					if(index<result.length-1){
	    						$scope.fundPortfolioNameList+=", ";
	    					}
	    					if(!$scope.fundPortfolioNameMismatchIndex){
	    						$scope.fundPortfolioNameMismatchIndex=index;
	    						}
	    					
	    				
	    				
	    			}
	    			
	    		}
	    		if($scope.fundPortfolioNameList && !$scope.cff.isProceedWithCurrentRiskAppetiteSuggestion){
	    			
					$scope.openAlert("The fund allocation("+$scope.fundPortfolioNameList+") does not match with your risk appetite("+$scope.cff.riskAppetitRisk+").");
					$scope.alertType='openRiskPopup';
	    		}else{
	    			$scope.cff_existing_policy();
	    		}
	    		
	    		
   		}else{
   			$scope.cff_existing_policy();
   		}
	    }
	, function  (error){
		
		$logger.log("ERROR",JSON.stringify(error));
	}) ;
	
}else{
	$scope.cff_existing_policy();
}
						
					};
					
					$scope.totalScore = function() {
						if ((($scope.cff.iCanAcceptRisk !== undefined)
								&& ($scope.cff.tolerance !== undefined)
								&& ($scope.cff.investForDuration != undefined)
								&& ($scope.cff.expectationOnMyInvestmentValue != undefined) && ($scope.cff.myknowledgeandexperince != undefined))) {
							$scope.totalscore = parseInt($scope.cff.iCanAcceptRisk)
									+ parseInt($scope.cff.tolerance)
									+ parseInt($scope.cff.investForDuration)
									+ parseInt($scope.cff.expectationOnMyInvestmentValue)
									+ parseInt($scope.cff.myknowledgeandexperince);
							$scope.cff.totalScore = {};
							$scope.cff.totalScore = $scope.totalscore;
							/*
							 * Risk appetite classification up to 5 -- very low
							 * risk 6 to 10 -- low risk 11 to 15 -- Medium risk
							 * appetite 16 to 20 is High risk appetite 21 to 25
							 * is very risk appetite
							 */
							if ($scope.cff.totalScore !== undefined
									|| $scope.cff.totalScore == null) {
								if ($scope.cff.totalScore <= 5) {
									$scope.cff.riskAppetitRisk = $rootScope.$Language.cff.riskAppetitRisk[0];
								} else if ($scope.cff.totalScore >= 6
										&& $scope.cff.totalScore <= 10) {
									$scope.cff.riskAppetitRisk = $rootScope.$Language.cff.riskAppetitRisk[1];
								} else if ($scope.cff.totalScore >= 11
										&& $scope.cff.totalScore <= 15) {
									$scope.cff.riskAppetitRisk = $rootScope.$Language.cff.riskAppetitRisk[2];
								} else if ($scope.cff.totalScore >= 16
										&& $scope.cff.totalScore <= 20) {
									$scope.cff.riskAppetitRisk = $rootScope.$Language.cff.riskAppetitRisk[3];
								} else if ($scope.cff.totalScore >= 21
										&& $scope.cff.totalScore <= 25) {
									$scope.cff.riskAppetitRisk = $rootScope.$Language.cff.riskAppetitRisk[4];
								}
							}
							$scope.cff.isProceedWithCurrentRiskAppetiteSuggestion=false;
							//sales fund portfolio
							
							

						}

					};

					/*
					 * Enable and Disable the Remark text Field if you choose
					 * other.
					 */

					$scope.enableRemarkfield = function(remarkFieldvalue, id) {
						
						if (remarkFieldvalue == "Others") {
							document.getElementById(id).removeAttribute(
									'disabled');

						} else {
							document.getElementById(id).setAttribute(
									'disabled', 'true');
							document.getElementById(id).value = '';
						}
					};

					var cff_foot_tab = "cff_tab1";
					var cur_cff_body = "cff_tab1_body";
					$scope.cff_cust_detail = function() {
						document.getElementById('cff_first_part').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab2').setAttribute(
								"class", "visited");
						cur_cff_body = "cff_first_part";
						cff_foot_tab = "cff_tab2";
					};
					$scope.cff_basic_info = function() {
						document.getElementById('cff_tab1_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab1').setAttribute(
								"class", "active");
						cur_cff_body = "cff_tab1_body";
						cff_foot_tab = "cff_tab1";
					};
					$scope.cff_disclosure_agent = function() {
						
						document.getElementById('cff_tab2_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute("class", "visited");
						document.getElementById('cff_tab2').setAttribute("class", "active");
						cff_foot_tab = "cff_tab2";
						cur_cff_body = "cff_tab2_body";
						
						//$scope.cff.cffStatus = "InProgress";
						/* Selecting the unique priorty for financialNeeds */
						$scope.changeProirty = function(value, index) {
							for (var i = 0; i <= Object
									.keys($scope.cff.financialNeedsObject).length - 1; i++) {
								if ($scope.cff.financialNeedsObject[i].priorty == value
										&& i !== index) {
									$scope.cff.financialNeedsObject[index].priorty = "Select";
									break;
								}

							}

						};
						console.log("from agent disclousre routes...");
						$scope.table = 'settings';
						$scope.parsedata = '';
						$scope.data = '';
						$scope.agentCode = $rootScope.settingsObject.agentCode;
						$scope.agentName = $rootScope.settingsObject.agentName;
						$scope.cff.agentName = $rootScope.settingsObject.agentName;
						$rootScope.settingsObject.agentName = $scope.agentName;
						/*
						 * $jsonStore.retriveAllData($scope.table,function
						 * (result){ $scope.jsonstoredata=[]; if(result.length
						 * !=0){ for(var i=0;i<result.length;i++){
						 * $scope.jsonstoredata.push(result[i].json); }
						 * $scope.parsedata=JSON.parse(JSON.stringify($scope.jsonstoredata));
						 * $scope.$apply(function() {
						 * $scope.agentCode=$scope.parsedata[0].agentCode;
						 * $scope.agentName=$scope.parsedata[0].agentName;
						 * $scope.cff.agentName=$scope.parsedata[0].agentName;
						 * }); } }, function (error){
						 * $logger.log("ERROR",JSON.stringify(error)); }) ;
						 */
					};
					$scope.cff_finance_need = function() {
					//	$rootScope.settingsObject.agentCode = $scope.agentCode;
						//$rootScope.settingsObject.agentName = $scope.agentName;
						if ($scope.cff != null && $scope.cff.length > 0) {

							$rootScope.cffObject.json = $scope.cff;
						}
						document.getElementById('cff_tab3_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab3').setAttribute(
								"class", "active");
						cff_foot_tab = "cff_tab3";
						cur_cff_body = "cff_tab3_body";
					};
					$scope.cff_risk_profile = function() {
						document.getElementById('cff_tab4_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab4').setAttribute(
								"class", "active");
						cff_foot_tab = "cff_tab4";
						cur_cff_body = "cff_tab4_body";
					};
					$scope.cff_existing_policy = function() {
						document.getElementById('cff_tab5_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab5').setAttribute(
								"class", "active");
						cff_foot_tab = "cff_tab5";
						cur_cff_body = "cff_tab5_body";
					};
					$scope.cff_family_detl = function() {
						document.getElementById('cff_tab6_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab6').setAttribute(
								"class", "active");
						cff_foot_tab = "cff_tab6";
						cur_cff_body = "cff_tab6_body";
					};
					$scope.cff_profile_status = function() {
						document.getElementById('cff_tab7_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab7').setAttribute(
								"class", "active");
						cff_foot_tab = "cff_tab7";
						cur_cff_body = "cff_tab7_body";
						document.getElementById('subTabs').style.display = "none";
						document.getElementById('defaultTabs').style.display = "block";
						document.getElementById('id_cff_subfooter').style.width = "59%";
						document.getElementById('id_cff_subfooter_txt').style.width = "21%";
						/* end */
					};
					$scope.cff_record_advice = function() {
						document.getElementById('cff_tab8_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab8').setAttribute(
								"class", "active");
						cur_cff_body = "cff_tab8_body";
						cff_foot_tab = "cff_tab8";

						document.getElementById('subTabs').style.display = "block";
						document.getElementById('defaultTabs').style.display = "none";
						document.getElementById('id_cff_subfooter').style.width = "37.8%";
						document.getElementById('id_cff_subfooter_txt').style.width = "30%";

					};
					$scope.cff_declaration = function() {

						/*
						 * Copy recomandation object to the root scope cff
						 * object
						 
						var indexrecobject = 0;
						while (indexrecobject < $scope.cff.recordOfAdvice.length) {
							if ($scope.cff.recordOfAdvice[0].sumCovered != undefined) {
								$scope.flag = true;
							}
							break;
						}
						if ($scope.flag) {
							$rootScope.cffObject.json.recordOfAdvice = JSON
									.stringify($scope.cff.recordOfAdvice);
							$scope.flag = false;
						}*/

						$scope.cff.createdDate = new Date();
						document.getElementById('cff_tab9_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab9').setAttribute(
								"class", "active");
						cur_cff_body = "cff_tab9_body";
						cff_foot_tab = "cff_tab9";

					};

					$scope.cff_confirm_advice = function() {
						//$scope.cff.cffStatus = "Completed";
						document.getElementById('cff_tab10_body').style.display = "block";
						document.getElementById(cur_cff_body).style.display = "none";
						document.getElementById(cff_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('cff_tab10').setAttribute(
								"class", "active");
						cur_cff_body = "cff_tab10_body";
						cff_foot_tab = "cff_tab10";
						//console.log("CFF confirmationadvice Route.");
						$scope.cff.proposalNo = "1";
						var recordHtmlData="<div>";
							if ($scope.cff.recordOfAdvice.length>0) {
							for(var recordIndex=0; recordIndex<$scope.cff.recordOfAdvice.length; recordIndex++){
								
								recordHtmlData+=' <li>';
								$scope.cff.recordOfAdvice[recordIndex].lifeAssuredName?	recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].lifeAssuredName+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].planType?recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].planType+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].term?recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].term+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].premium?recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].premium+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].frequency?recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].frequency+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].sumCovered?recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].sumCovered+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].additionalCoverage?recordHtmlData+=' <span>'+$scope.cff.recordOfAdvice[recordIndex].additionalCoverage+'</span>':	recordHtmlData+=' <span></span>';
								$scope.cff.recordOfAdvice[recordIndex].bought?recordHtmlData+=' <span>YES</span>':	recordHtmlData+=' <span>NO</span>';
								recordHtmlData+=' </li> ';
								
							
						
							}
							recordHtmlData+="</div>";
						//	alert(recordHtmlData);
							
							var recordOfAdviceSectionElement = document
							.getElementById("recordOfAdviceSection");
							recordOfAdviceSectionElement.replaceChild(
							$compile(recordHtmlData)($scope)[0],
							recordOfAdviceSectionElement.childNodes[0]);
							if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
							    $scope.$apply();
							}
							
						}
						
								//	$scope.confirmationAdvoiceItem = $rootScope.cffObject.json.noOfRecommendations;
							//	}
						
						
						//if ($rootScope.cffObject.json.recordOfAdvice != null
						//		&& $rootScope.cffObject.json.recordOfAdvice != undefined) {
						//	$scope.confirmationAdvoiceItem = $rootScope.cffObject.json.noOfRecommendations;
					//	}

					};
					$scope.dateValue = $scope.customer.dob;
					// for Devices that doesn't support HTML5 date input.
					$scope.dateChange = function() {
						var f = prompt("Please enter DoB", "mm/dd/yyyy");
						var dateParts = f.split("/");
						if (dateParts[1] > 12) {
							alert("Please re-enter the month properly");
						}

						else {
							var date = new Date(dateParts[2],
									(dateParts[1] - 1), dateParts[0]);
							$scope.customer.dob = date;
							$scope.dobYear = date;
							$scope.today = new Date();
							$scope.diff = $scope.today - $scope.dobYear;
							$scope.days = ($scope.diff / (1000 * 60 * 60 * 24));
							$scope.years = $scope.days / 365;
							$scope.customer.anb = Math.ceil($scope.years);
						}

					};

					$scope.yearcalculation = function() {
						$scope.dobYear = $scope.customer.dob;
						$scope.dobYear = new Date($scope.dobYear);
						$scope.today = new Date();
						$scope.diff = $scope.today - $scope.dobYear;
						$scope.days = ($scope.diff / (1000 * 60 * 60 * 24));
						$scope.years = $scope.days / 365;
						$scope.customer.anb = Math.ceil($scope.years);

					};

					$scope.dateData = function() {
						document.getElementById("dateCh").style.display = "none";
						var dev = device.model;
						if (dev == "A1-830") {

							document
									.getElementById("dateChange")
									.appendChild(
											$compile(
													'<input type="date" ng-model="customer.dob"  ng-click="dateChange()"  class="form-control" name="dob" ng-required="true" value="{{customer.dob}}"></input>')
													($scope)[0]);

							if ($scope.$root.$$phase != '$apply'
									&& $scope.$root.$$phase != '$digest') {
								$scope.$apply();
							}

						}

						else {
							document
									.getElementById("dateChange")
									.appendChild(
											$compile(
													'<input type="date" ng-model="customer.dob" ng-change="yearcalculation()" class="form-control" name="dob" ng-required="true" value="{{customer.dob}}"></input>')
													($scope)[0]);

							if ($scope.$root.$$phase != '$apply'
									&& $scope.$root.$$phase != '$digest') {
								$scope.$apply();
							}
						}
					};

					/*
					 * copy local cff object collection in a single root scope
					 * cff objects
					 */

					$scope.goToProfilestatus = function() {
						if ($rootScope.cffObject._id == null) {
							$rootScope.cffObject._id = null;
						}
						$rootScope.cffObject._id = $rootScope.cffObject._id;
						$rootScope.cffObject.json = $scope.cff;

					};

					/* Popups functions */

					$scope.common_profile_status = function() {

						document.getElementById('cff_tab1_body').style.display = "none";
						document.getElementById('cff_tab8_body').style.display = "block";
						cur_cff_body = "cff_tab8_body";
						cff_foot_tab = "cff_tab8";

					};
					// popup starts here $rootScope.$Footer.preFoote
					if ($rootScope.$Footer.preprofileFooter == "recordofadvice") {
						$scope.common_profile_status();
					} else if ($rootScope.$Footer.cffFooter == "familydetails") {
						document.getElementById('cff_tab1_body').style.display = "none";
						document.getElementById('cff_tab6_body').style.display = "block";
						cff_foot_tab = "cff_tab6";
						cur_cff_body = "cff_tab6_body";
					}
					$scope.fna_popup_open = function() {
						document.getElementById('fna_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};

					$scope.risk_profile_status_open = function() {
						document.getElementById('risk_profile_status_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.delete_popup_close = function() {
						if ($scope.cff.profileName) {
							document
									.getElementById('risk_profile_status_popup').style.display = "none";
							document
									.getElementById('profile_status_save_popup').style.display = "none";
							// document.getElementById('popup_signature').style.visibility
							// = "hidden";
							document.getElementById('popup_overlay').style.display = "none";
							$scope.saveCustomer();
						}
					};
					// popup ends here
					// popup starts here

					$scope.profile_status_save_open = function() {
						document.getElementById('profile_status_save_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					// popup ends here
					$scope.popup_click_button = function() {
						document.getElementById('popup_signature').style.visibility = "visible";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.popup_customer_click_button = function() {
						document.getElementById('popup_customer_signature').style.visibility = "visible";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.popup_customer_close = function() {
						document.getElementById('popup_customer_signature').style.visibility = "hidden";
						document.getElementById('popup_overlay').style.display = "none";
					};
					$scope.popup_agent_close = function() {
						document.getElementById('popup_signature').style.visibility = "hidden";
						document.getElementById('popup_overlay').style.display = "none";
					};
					// popup ends here
					$scope.save_popup_open = function() {
						document.getElementById('save_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.delete_save_close = function() {
						document.getElementById('save_popup').style.display = "none";
						document.getElementById('popup_overlay').style.display = "none";
					};
					// popup ends here

					/* saving the signature Images. */
					$scope.saveImage = function(signaturetype) {
						if (signaturetype == "customer") {
							// document.getElementById('customersig').src=$scope.customerSignatureScope.getSignatureData();
							$scope.cff.customerSignImage = $scope.customerSignatureScope
									.getSignatureData();
						} else {
							// document.getElementById('agentsig').src=$scope.agentSignatureScope.getSignatureData();
							$scope.cff.agentSignImage = $scope.agentSignatureScope
									.getSignatureData();
						}
					};

					$scope.clearSignature = function(signaturetype) {
						if (signaturetype == "customer") {
							$scope.customerSignatureScope.clearSignature();
						} else {
							$scope.agentSignatureScope.clearSignature();
						}
					};

					/* Validate existing_policy */
					$scope.validate_existing_policy = function() {
						if ($scope.cff.tolerance != undefined
								&& $scope.cff.expectationOnMyInvestmentValue != undefined
								&& $scope.cff.myknowledgeandexperince != undefined
								&& $scope.cff.myknowledgeandexperince != undefined
								&& $scope.cff.iCanAcceptRisk != undefined) {
							//$scope.cff_existing_policy();
							$scope.checkRiskAppetite();
						} else {
							$scope.openAlert("Please Select your Risk Profile Options.");
						}

					};

					/* vlidate agent disclouser */

					$scope.validateCustomerDisclouser = function() {
						if ($scope.cff.customerAdviceChoice && $scope.cff.customerAdviceChoice!=3) {

							$scope.cff_disclosure_agent();

						} else if($scope.cff.customerAdviceChoice){
							$scope.openAlert("It is highly recommended for you to disclose as much information as you can so that you will receive the right solution.");
							$scope.alertType="customerAdviceChoice";
						}
						else {
							alert("Please select the Customer Advice  Choice and Declaration !!!");
						}

					};

					/*
					 * Genereate PDf
					 * 
					 * $scope.saveAsPdf = function(){ var createpdf =
					 * document.createElement('div'); createpdf.innerHTML = '<div
					 * class="create_new_main"><table><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr><tr><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td><td>aaaaaa</td></tr></div>';
					 * 
					 * document.getElementById("pdfcreator").appendChild(createpdf);
					 * alert("working"); var pdf = new jsPDF();
					 * 
					 * pdf.addHTML(createpdf,function() { alert("coming");
					 * document.getElementById("pdfcreator").remove();
					 * pdf.save('Test123456.pdf'); }); };
					 */

					/*
					 * $scope.saveAsPdf = function(){ alert("ssss"); var doc =
					 * new jsPDF('p','px', 'a4'); var pdfOutput = ""; var
					 * options = { pageSplit: true };
					 *  // var source =
					 * window.document.getElementsByTagName("body")[0];
					 * doc.addHTML(document.body, options, function() {
					 * alert("dddddddd"); doc.save("test.pdf"); }); };
					 */
					
					$scope.formPdfFamilyMembers=function(){
					

						var familyMembersTable=[];
						familyMembersTable.push( [{ text: 'Section 3 : Family Details (Spouse, Children, Parents, etc.)',style: 'tableHeader', colSpan: 6}, {}, {}, {}, {}, {}],
								['Name', 'Relationship', 'Gender','Date of Birth','Occupation','Contact No.']);
						if($scope.cff.familyMemberObject && $scope.cff.familyMemberObject.length>0){
						
						for(var findex=0; findex<$scope.cff.familyMemberObject.length; findex++)
							{
							if($scope.cff.familyMemberObject[findex].memberName){
	
							familyMembersTable.push([$scope.cff.familyMemberObject[findex].memberName+"",$scope.cff.familyMemberObject[findex].relationship+"",'Male / \n Female', $scope.cff.familyMemberObject[findex].dob+"", $scope.cff.familyMemberObject[findex].occupation+"", $scope.cff.familyMemberObject[findex].contact+""]);
							}else{
								familyMembersTable.push(['','Spouse','Male / \n Female', '','', '']);
							}
							}
						return familyMembersTable;
						}
						else{
							//alert("in else conddition");
							familyMembersTable.push(['','Spouse','Male / \n Female', '','', ''],['','Spouse','Male / \n Female', '','', ''],['','Spouse','Male / \n Female', '','', ''],['','Spouse','Male / \n Female', '','', '']);
							
							return familyMembersTable;
						}
					};
				
					
					$scope.formPdfPolicy=function(){
				
						var policyTable=[];
						policyTable.push( [{ text: 'Section 4 : Financial Needs Analysis',style: 'tableHeader', colSpan: 1}],
								[{ text: 'Existing protection/retirement/education/savings plans',style: 'tableSubHeader', colSpan: 1}],
								['']);
						policyTable.push( ['Policy Owner'],
				                ['Life Assured'],
				                ['Company'],
				                ['Type of Plan'],
				                ['Death Benefits (RM)'],
				                ['Disability Benefits (RM)'],
				                ['Critical Illness Benefits (RM)'],
				                ['Other Benefits / \n (H&S Accidental, etc.) (RM)'],
				                ['Premium (RM)'],
				                ['Premium Type'],
				                ['Frequency'],
							    ['Start Date/Policy Effective/Date'],
							    ['Maturity Date'],
							    ['Projected Lump Sum at Maturity (RM)']);
						if($scope.cff.existingPoliciesObject && $scope.cff.existingPoliciesObject.length>0){
													
						for(var pindex=0; pindex<$scope.cff.existingPoliciesObject.length; pindex++)
							{
							if($scope.cff.existingPoliciesObject[pindex].policyOwner){
								policyTable[0][0].colSpan++;
								policyTable[1][0].colSpan++;
								policyTable[0].push({});
								policyTable[1].push({});
								policyTable[2].push("Policy "+(pindex+1));
							policyTable[3].push($scope.cff.existingPoliciesObject[pindex].policyOwner+"");
							policyTable[4].push($scope.cff.existingPoliciesObject[pindex].lifeAssured+"");
							policyTable[5].push($scope.cff.existingPoliciesObject[pindex].company+"");
							policyTable[6].push($scope.cff.existingPoliciesObject[pindex].planType+"");
							policyTable[7].push($scope.cff.existingPoliciesObject[pindex].deathBenefits+"");
							policyTable[8].push($scope.cff.existingPoliciesObject[pindex].disabilityBenefits+"");
							policyTable[9].push($scope.cff.existingPoliciesObject[pindex].criIllRider+"");
							policyTable[10].push($scope.cff.existingPoliciesObject[pindex].otherBenefit+"");
							policyTable[11].push($scope.cff.existingPoliciesObject[pindex].annualPremium+"");
							policyTable[12].push('Regular Premium \n Single Premium');
							policyTable[13].push('Monthly Half Yearly \n Quarterly Yearly');
							policyTable[14].push($scope.cff.existingPoliciesObject[pindex].startDate+"");
							policyTable[15].push($scope.cff.existingPoliciesObject[pindex].maturityDate+"");
							policyTable[16].push($scope.cff.existingPoliciesObject[pindex].projectedSumMaturity+"");
			
							}
							
							else{
								policyTable[0][0].colSpan++;
								policyTable[1][0].colSpan++;
								policyTable[0].push({});
								policyTable[1].push({});
								policyTable[2].push("Policy "+1);
								policyTable[3].push('');
								policyTable[4].push('');
								policyTable[5].push('');
								policyTable[6].push('');
								policyTable[7].push('');
								policyTable[8].push('');
								policyTable[9].push('');
								policyTable[10].push('');
								policyTable[11].push('');
								policyTable[12].push('Regular Premium \n Single Premium');
								policyTable[13].push('Monthly Half Yearly \n Quarterly Yearly');
								policyTable[14].push('');
								policyTable[15].push('');
								policyTable[16].push('');
							}
							
							}
		
						return policyTable;
						}
						
						else{
							//alert("in else conddition");
							policyTable[0][0].colSpan++;
							policyTable[1][0].colSpan++;
							policyTable[0].push({});
							policyTable[1].push({});
							policyTable[2].push("Policy "+1);
							policyTable[3].push('');
							policyTable[4].push('');
							policyTable[5].push('');
							policyTable[6].push('');
							policyTable[7].push('');
							policyTable[8].push('');
							policyTable[9].push('');
							policyTable[10].push('');
							policyTable[11].push('');
							policyTable[12].push('Regular Premium \n Single Premium');
							policyTable[13].push('Monthly Half Yearly \n Quarterly Yearly');
							policyTable[14].push('');
							policyTable[15].push('');
							policyTable[16].push('');
						
							return policyTable;
						}
					};
					
					$scope.formPdfROA=function()
					{
						var recordAdviceTable=[];
						recordAdviceTable.push([{ text: 'Section 7 : Record of Advice',style: 'tableHeader', colSpan: 1}],
						       	['']);
						recordAdviceTable.push( ['Type of Plan'],
				                ['Term'],
				                ['Sum Covered'],
				                ['Additional Coverage'],
				                ['Name of Policy Owner'],
				                ['Premium'],
				                ['Frequency'],
				                ['Bought?'],
				                ['Reason for recommending']);
					if($scope.cff.recordOfAdvice && $scope.cff.recordOfAdvice.length>0)
					{
						//alert("in roa if condition");
						//alert("length roa= "+$scope.cff.recordOfAdvice.length);
						
						for(var rindex=0; rindex<$scope.cff.recordOfAdvice.length; rindex++)
						{
						//	alert("index roa= "+JSON.stringify($scope.cff.recordOfAdvice[rindex]));
							if($scope.cff.recordOfAdvice[rindex].planType){
								recordAdviceTable[0][0].colSpan++;
								recordAdviceTable[0].push({});
								recordAdviceTable[1].push("Recommendation "+(rindex+1));							
								recordAdviceTable[2].push($scope.cff.recordOfAdvice[rindex].planType+"");
								recordAdviceTable[3].push($scope.cff.recordOfAdvice[rindex].term+"");
								recordAdviceTable[4].push($scope.cff.recordOfAdvice[rindex].sumCovered+"");
								recordAdviceTable[5].push($scope.cff.recordOfAdvice[rindex].additionalCoverage+"");
								recordAdviceTable[6].push($scope.cff.recordOfAdvice[rindex].policyOwnerName+"");
								recordAdviceTable[7].push($scope.cff.recordOfAdvice[rindex].premium+"");							
								recordAdviceTable[8].push('Monthly Half Yearly \n Quarterly Yearly');
								recordAdviceTable[9].push('Yes No');
								recordAdviceTable[10].push($scope.cff.recordOfAdvice[rindex].reasonOfRecommending+"");
								
							}
							else{
							//	alert("in roa first else");
								
								recordAdviceTable[0][0].colSpan++;
								recordAdviceTable[0].push({});
								recordAdviceTable[1].push("Recommendation "+1);
								recordAdviceTable[2].push('');
								recordAdviceTable[3].push('');
								recordAdviceTable[4].push('');
								recordAdviceTable[5].push('');
								recordAdviceTable[6].push('');
								recordAdviceTable[7].push('');
								recordAdviceTable[8].push('Monthly Half Yearly \n Quarterly Yearly');
								recordAdviceTable[9].push('Yes No');
								recordAdviceTable[10].push('');
							}	
						}
						//alert(JSON.stringify(recordAdviceTable));
						//console.log(JSON.stringify(recordAdviceTable));
						return recordAdviceTable;
					}	
					
					else{
						//alert("in roa second else");
						
						recordAdviceTable[0][0].colSpan++;
						recordAdviceTable[0].push({});
						recordAdviceTable[1].push("Recommendation "+1);
						recordAdviceTable[2].push('');
						recordAdviceTable[3].push('');
						recordAdviceTable[4].push('');
						recordAdviceTable[5].push('');
						recordAdviceTable[6].push('');
						recordAdviceTable[7].push('');
						recordAdviceTable[8].push('Monthly Half Yearly \n Quarterly Yearly');
						recordAdviceTable[9].push('Yes No');
						recordAdviceTable[10].push('');
						
					return recordAdviceTable;
					}
					};
					
					$scope.formPdfConfirmation=function(){
						
						var confirmationTable=[];
						confirmationTable.push( [ 'Life Assured', 'Product Type', 'Term','Premium (RM)','Frequency','Sum Assured (RM)','Additional Coverage','Bought ?']);
						if($scope.cff.recordOfAdvice && $scope.cff.recordOfAdvice.length>0){
						
							
						for(var cindex=0; cindex<$scope.cff.recordOfAdvice.length; cindex++)
							{
							if($scope.cff.recordOfAdvice[cindex].planType){
	
								confirmationTable.push([$scope.cff.recordOfAdvice[cindex].lifeAssuredName+"",$scope.cff.recordOfAdvice[cindex].planType+"",$scope.cff.recordOfAdvice[cindex].term+"", $scope.cff.recordOfAdvice[cindex].premium+"", 'Monthly / \n Quarterly / \n Half Yearly / \n Yearly', $scope.cff.recordOfAdvice[cindex].sumCovered+"", $scope.cff.recordOfAdvice[cindex].additionalCoverage+"", 'Yes / No']);
							}else{
								confirmationTable.push(['','','','','Monthly / \n Quarterly / \n Half Yearly / \n Yearly', '','', '']);
							}
							}
						return confirmationTable;
						}
						else{
						
							confirmationTable.push(['','','','','Monthly / \n Quarterly / \n Half Yearly / \n Yearly', '','', '']);
							
							return confirmationTable;
						}
					};
				///////////////////////////////////////////////
					/*$scope.formPdfAllocation=function(){
						
						var allocationTable=[];
						allocationTable.push( [{text:'How much of your current income would you like to allocate for protection/retirement/education/savings/investment per month?', colSpan: 5}, {}, {}, {}, {}],
								[{columns: [{text: 'Protection',width: 40},{text: 'RM',alignment: 'right'},
											{text: $scope.cff.existingPoliciesObject[0].protection+"", decoration: 'underline'},
                                    	   ],}, 
                                    		
								{columns: [{text: 'Retirement',width: 40},{text: 'RM',alignment: 'right'},
                                           {text: $scope.cff.existingPoliciesObject[0].retirement+"", decoration: 'underline'}
                                          ],}, 
                                          
								{columns: [{text: 'Education',width: 40},{text: 'RM',alignment: 'right'},
										   {text: $scope.cff.existingPoliciesObject[0].education+"", decoration: 'underline'}
                                          ],}, 
                                          
								{columns: [{text: 'Savings',width: 40},
                                           {text: 'RM',alignment: 'right'},
                                           {text: $scope.cff.existingPoliciesObject[0].savings+"", decoration: 'underline'}
                                          ],}, 
											
								{columns: [{text: 'Investment',width: 40},
                                           {text: 'RM',alignment: 'right'},
                                           {text: $scope.cff.existingPoliciesObject[0].investment+"", decoration: 'underline'}
                                          ],}, 
								   
								]);
						if($scope.cff.existingPoliciesObject && $scope.cff.existingPoliciesObject.length>0){
						
						for(var findex=0; findex<$scope.cff.existingPoliciesObject.length; findex++)
							{
							if($scope.cff.existingPoliciesObject[findex].memberName){
	
								allocationTable.push([$scope.cff.existingPoliciesObject[findex].memberName+"",$scope.cff.existingPoliciesObject[findex].relationship+"",'Male / \n Female', $scope.cff.existingPoliciesObject[findex].dob+"", $scope.cff.existingPoliciesObject[findex].occupation+"", $scope.cff.existingPoliciesObject[findex].contact+""]);
							}else{
								allocationTable.push(['','Spouse','Male / \n Female', '','', '']);
							}
							}
						return familyMembersTable;
						}
						else{
							//alert("in else conddition");
							allocationTable.push(['','Spouse','Male / \n Female', '','', ''],['','Spouse','Male / \n Female', '','', ''],['','Spouse','Male / \n Female', '','', ''],['','Spouse','Male / \n Female', '','', '']);
							
							return allocationTable;
						}
						
					};*/
				////////////////////////////////////////////////////////////
					$scope.saveAsPdf = function() {
						alert("cff pdf");
						var docDefinition = { 
								
								content: [
								{
									columns: [
										{
											text: [
												'AmMetlife Insurance Berhad(15743-P) \n',
												'(',
												{ text: 'formerly known as Amlife Insurance Berhad', italics: true, fontSize: 10},
												') Licensed insurer \n Level 19,Menera AmMetlife. No.1,Jalan Lumut,50400 Kaula Lampur'
											]
										},
										{
											image: 'metLifeLogo',
											width: 200,
											height: 26,
											margin: [0, 20, 0, 20]
										}
									]
								},
								{
									columns:
									[
										{
											image: 'line',
											width: 530,
											height: 3
										}
									]	
								},
								{
									  style: 'tableExample',
								table: {
									body: [
									        ['Customers Name',{ text: $scope.customer.customerName+"",style: 'tableHeader', colSpan:3},{},{}],
										    ['Proposal No.',$scope.cff.proposalNo+"",'Contact No.',$scope.customer.contact+""],
											['Gender','Male Female','Date of Birth/Age',$scope.customer.dob+" / "+$scope.customer.anb],
										    ['Customers Name',{ text: 'Marital Status Single  Married Widowed Divorced/Separated', style: 'tableHeader', colSpan: 3},{},{}],
										    ['NRIC Number','123456789','Estimated Annual Income',$scope.customer.estAnnualIncome+""],
											['Occupation',$scope.customer.occupation+"",'','']
										    ]
									} 
									},
									{
									  style: 'tableExample',
								table: {
									body: [
									        [{ text: 'Section 1 : Disclosure of Agents Status',style: 'tableHeader', colSpan: 2}, {},],
										    ['Agents Name',$rootScope.settingsObject.agentName+""],
										    ['Agents Code',$rootScope.settingsObject.agentCode+""],
									        [{ text: 'I am a life insurance agent who represents AmMetLife Insurance Berhad (AmMetLife) and can advise you on our full range of:', colSpan: 2}, {},],
										     ['Term Insurance Products','Endowment Insurance Products'],
										     ['Whole Life Insurance Products','Investment-Linked Insurance Products'],
										     ['Medical, Accident and Health Insurance Products',''],
										]
									 } 
									},
									{text: 'IMPORTANT NOTICE TO CUSTOMER (Please read this carefully before proceeding with your Customer Fact Find Form CFFF)', margin:[0, 10]},
									{
									ul: [
										'Your agent must have sufficient information before making a suitable recommendation. The information that you provide will be the basis on which advice is given.',
										'If you choose not to provide all the relevant information requested, your agent may not be able to provide you with suitable advice and as a result, you may risk making a financial commitment to a life insurance policy inappropriate to your needs.',
										'Your agent is required to preserve the confidentiality of information disclosed by you and restrict the use of such information only for the purpose of recommending life insurance product(s).',
										'You must ensure that important information regarding the policy is disclosed to you and that you understand that information. Where something is not clear, you should seek an explanation from the agent or AmMetLife.',
										'Before you make a decision to purchase any life insurance policy, you must satisfy yourself that the product(s) meets your insurance needs and resources.',
									]
								},
									{
									  style: 'tableExample',
								table: {
									body: [
									        [{ text: 'Section 2 : Customer Advice Choice and Declaration',style: 'tableHeader', colSpan:2},{}],
									        ['Option A','I/We wish to disclose all information requested for in this form (fill in all sections except sections 7 & 9).'],
									        ['Option B','I/We wish to disclose partially information requested for in this form (fill in all sections except sections 3, 7 & 9).'],
									        ['Option C','I/We wish to receive product information only and do not wish to disclose any information requested for in this form (fill in sections 5, 6 & 8 only).']
										   
								    ]
									} 
									},
						        {
								style: 'tableExample',
								table: {
									body:$scope.formPdfFamilyMembers()
									},
							    },
							    {
								style: 'tableExample',
								table: {
									body:$scope.formPdfPolicy()
									},
							    },
							    {
												style: 'tableExample',
												table: {
													//body:$scope.formPdfAllocation()
													
														body: [
																[{text:'How much of your current income would you like to allocate for protection/retirement/education/savings/investment per month?', colSpan: 5}, {}, {}, {}, {}],
																[
																{
																				columns: [
						                                                				{
						                                                					text: 'Protection',
						                                                					width: 40
						                                                				},
						                                                				{
						                                                					text: 'RM',alignment: 'right'
						                                                				},
						                                                				{
						                                                					text: $scope.cff.existingPoliciesObject[0].protection+"", decoration: 'underline'
						                                                				},
						                                            
						                                                			],
																			}, 
																			{
																				columns: [
						                                                				{
						                                                					text: 'Retirement',
						                                                					width: 40
						                                                				},
						                                                				{
						                                                					text: 'RM',alignment: 'right'
						                                                				},
						                                                				{
						                                                					text: $scope.cff.existingPoliciesObject[0].retirement+"", decoration: 'underline'
						                                                				}
						                                                			],
																			}, 
																			{
																				columns: [
						                                                				{
						                                                					text: 'Education',
						                                                					width: 40
						                                                				},
						                                                				{
						                                                					text: 'RM',alignment: 'right'
						                                                				},
						                                                				{
						                                                					text: $scope.cff.existingPoliciesObject[0].education+"", decoration: 'underline'
						                                                				}
						                                                			],
																			}, 
																			{
																				columns: [
						                                                				{
						                                                					text: 'Savings',
						                                                					width: 40
						                                                				},
						                                                				{
						                                                					text: 'RM',alignment: 'right'
						                                                				},
						                                                				{
						                                                					text: $scope.cff.existingPoliciesObject[0].savings+"", decoration: 'underline'
						                                                				}
						                                                			],
																			}, 
																			
																			{
																				columns: [
						                                                				{
						                                                					text: 'Investment',
						                                                					width: 40
						                                                				},
						                                                				{
						                                                					text: 'RM',alignment: 'right'
						                                                				},
						                                                				{
						                                                					text: $scope.cff.existingPoliciesObject[0].investment+"", decoration: 'underline'
						                                                				}
						                                                			],
																			}, 
																   
																]
														]
												}
										},


							    {
								style: 'tableExample',
								table: {
									body: [
									        [{ text: 'Do you have other income during retirement (such as pension, annuity, etc.)?'},'Yes, please specify?'],
										]
									}
							    },
							    {
								style: 'tableExample',
								table: {
									body: [
									        [{ text: 'Section 5 : Your Risk Profile (Please tick on the appropriate number and add up the total)',style: 'tableHeader', colSpan: 4}, {}, {}, {}],
									        ['* I am prepared to invest for','Only a year or two','Up to 5 years','More than 10 years'],
											['* I can accept','Very low risk & know that my capital is safe','Some fluctuations in value','A higher risk for the chance of a higher return'],
											['* My investment tolerance is','No decline in the value of my investment','I am moderately concerned about short term declines in value','I accept that my investment values may go down in the short/medium term'],
										    ['* I can accept','Very low risk & know that my capital is safe','Some fluctuations in value','A higher risk for the chance of a higher return'],
										    ['* Expectation on my investment','I am not concerned about inflation','At least keep pace with rate of inflation','Exceed the rate of inflation'],
										    ['* My knowledge and experience','I have little knowledge and experience in securities and financial products','I have some knowledge and experience in securities and financial products','I have significant knowledge and experience in a wide range of securities and financial products'],
										    ['','',{ text:'Total score : '+$scope.cff.totalScore+"",colSpan: 2},'']
										]
									},
							    },
							    {
								style: 'tableExample',
								table: {
									body: [
									        [{ text: 'Based on my total score, my preference is',style: 'tableHeader', colSpan: 5},{}, {}, {}, {}],
									        ['Score 0-5 \n Very low appetite','Score 6-10 \n Low appetite','Score 11-15 \n Medium appetite','Score 16-20 \n High appetite','Score 21-25 \n Very high appetite']
										]
									},
							    },
							    {
								style: 'tableExample',
								table: {
									body: [
									        [{ text: 'Section 6 : My Financial Needs',style: 'tableHeader', colSpan: 5},{}, {}, {}, {}],
									        ['My financial needs.','Already planned','To discuss','Priority (1=LOW; 5=HIGH)','Remarks*'],
											['I need to protect myself & my family against the financial impact of death, disability and critical illness.','Yes / No','Yes / No',$scope.cff.financialNeedsObject[0].priorty+"",$scope.cff.financialNeedsObject[0].remarks+""],
											['I am looking for security during retirement.','Yes / No','Yes / No',$scope.cff.financialNeedsObject[1].priorty+"",$scope.cff.financialNeedsObject[1].remarks+""],
											['I want to make provision for my childrens education.','Yes / No','Yes / No',$scope.cff.financialNeedsObject[2].priorty+"",$scope.cff.financialNeedsObject[2].remarks+""],
											['I am saving for a specific need.','Yes / No','Yes / No',$scope.cff.financialNeedsObject[3].priorty+"",$scope.cff.financialNeedsObject[3].remarks+""],
											['I want to make lump-sum investment.','Yes / No','Yes / No',$scope.cff.financialNeedsObject[4].priorty+"",$scope.cff.financialNeedsObject[4].remarks+""],
										]
									},
							    },
							    {
							        text: '* Indicate under remark column, area not to be discussed and why, e.g.: "already planned", "review in future", "not important now", etc.'
							    },
							    {
								style: 'tableExample',
								table: {									
									body:$scope.formPdfROA()
									},
							    },
							    {
							        text: 'Actions taken by customer if different from recommendations'
							    },
							    {
								style: 'tableExample',
								table: {
									body: [
									        ['Recommendation 1'],
									       	['Recommendation 2'],
											['Recommendation 3'],
										]
									}
							    },
								{
								style: 'tableExample',
								table: {
									body: [
									        ['Section 8 : Customers Declaration and Acknowledgement'],
									       	['I/We acknowledge that the agent has explained the purpose of this Customer Fact Find Form to me/us and I/we have provided information to the best of my/our understanding and knowledge.'],
									        ['I/We acknowledge that a copy of this completed Customer Fact Find Form and the Confirmation of Advice will be sent to me together with the life policy insurance contract.'],
									        ['Signature of Customer'],
									        ['Date']
									       
										]
									}
							    },
							    {
								style: 'tableExample',
								table: {
									body: [
									        ['Section 9 : Agents Declaration and Acknowledgement'],
									       	['I declare that I will treat the information provided to me in the Customer Fact Find Form with STRICT CONFIDENTIALITY and I will use it only for the purpose offact finding in the process of recommending suitable insurance products and shall not use it for any other purposes.'],
									        ['The above analysis/advice is based on the facts furnished in the form. I have taken reasonable steps to ensure that the advice is suitable for the client, having regard to the facts disclosed and other relevant facts which are made available to me.'],
									        ['I have also explained to the client about the features of the product recommended and have given sufficient information to enable the client to make an informed decision.'],
									        ['For leader/supervisor: I declare that I have reviewed this Customer Fact Find Form and to my best belief and knowledge, the advice and recommendation given by the intermediary is sound and appropriate (applicable for agent who has been contracted for one (1) year and below)'],
									        ['Signature of Agent'],
									        ['Name of Agent'],
									        ['Date'],
									        ['Signature of LeaderLeader'],
									        ['Name of Leader'],
									        ['Date'],
									        ['Date'],
									        ['Agents status'],
									        ['One (1) year and below'],
									        ['Above one (1) year']
										]
									},
							    },
							    {
							        text : 'Note: In the event of any dispute or ambiguity arising out of the Chinese translation, the English version shall prevail.'
							    },
							    {
							        text : 'CONFIRMATION OF ADVICE'
							    },
							    {
								style: 'tableExample',
								table: {
									body: [
								        [{ text: 'CONFIRMATION OF ADVICE', colSpan: 2}, {}],
								       	['Customers Name',$scope.customer.customerName+""],
								        ['Proposal No.',$scope.cff.proposalNo+""],
								        [{ text: ' 1. Protecting yourself and your family against the financial impact due to death, disability and critical illness.', colSpan: 2}, {}],
								        [{ text: ' 2. Planning for security during retirement.', colSpan: 2}, {}],
								        [{ text: ' 3. Making provision for your childrens education', colSpan: 2}, {}], 
								        [{ text: ' 4. Saving for a specific need.', colSpan: 2}, {}],
								        [{ text: ' 5. Making a lump-sum investment.', colSpan: 2}, {}], 
								        [{ text: 'In order to meet these goals, I have recommended the above customer to purchase the following life insurance products.', colSpan: 2}, {}],
									],
								},
						    },
						    {
								style: 'tableExample',
								table: {
									body:$scope.formPdfConfirmation()
								}
						    },
						     {
								style: 'tableExample',
								table: {
									body: [
								       ['Signature of Agent'],
						    			['New IC'],
						    			['Name of Agent'],
						    			['Date'],
						    			['Notes'],
						    			['You may cancel your life insurance policy by returning the policy document to AmMetLife Insurance Berhad within fifteen (15) calendar days after you receive it.The statement should be attached with the insurance policy contract and a copy will be kept by AmMetLife Insurance Berhad and the agent.']
									],
								},
						    }
						    ],
							styles: {
								header: {
									fontSize: 11,
									bold: true,
									alignment: 'center'
								},
								subheader: {
									fontSize: 11,
									margin: [0, 10, 0, 5]
								},
								labels:{
									fontSize: 9
								},
								tableExample: {
									margin: [0, 5, 0, 15]
								},
								tableHeader: {
									bold: true
								},
								bottomLine:{
								    decoration:'underline'
								},
								
							},
							defaultStyle: {
								fontSize: 8
							}
							
							};
						   // pdfMake.createPdf(docDefinition).download('test.pdf');
						$FileUtils.generatePdf(docDefinition,"CFF"); 
						    };

					$scope.search_popup_open = function() {

						document.getElementById('search_oocu').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.search_occu_close = function() {
						document.getElementById('search_oocu').style.display = "none";
						document.getElementById('popup_overlay').style.display = "none";

					};
					$scope.openPopup = function(message) {
						$scope.content = "<p>" + message + "</p>";
						if ($scope.$root.$$phase != '$apply'
								&& $scope.$root.$$phase != '$digest') {
							$scope.$apply();
						}
						document.getElementById('cff_profile_status_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.closePopup = function(type) {

						if (type && type == "saveCff") {

							$scope.saveCustomer();

						}
						document.getElementById('popup_overlay').style.display = "none";
						document.getElementById('cff_profile_status_popup').style.display = "none";
					};
					$scope.openAlert = function(message) {
						$scope.content = "<p>" + message + "</p>";
						if ($scope.$root.$$phase != '$apply'
								&& $scope.$root.$$phase != '$digest') {
							$scope.$apply();
						}
						document.getElementById('cff_alert_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.closeAlert = function() {

						document.getElementById('popup_overlay').style.display = "none";
						document.getElementById('cff_alert_popup').style.display = "none";
						if($scope.alertType){
							if($scope.alertType=='openRiskPopup'){
							
							$scope.riskAppetitePopupOpen();
							}else if($scope.alertType=='customerAdviceChoice'){
								$scope.cff_disclosure_agent();
							}
							$scope.alertType="";
						}
						
					};
					$scope.policy_popup_open = function() {

						document.getElementById('policy_add_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.policy_popup_close = function() {

						document.getElementById('policy_add_popup').style.display = "none";
						document.getElementById('popup_overlay').style.display = "none";
					};
					
					$scope.riskAppetitePopupOpen=function(){
						document.getElementById("risk_alert_popup").style.display="block";
					};
					
$scope.riskAppetitePopupClose=function(type){
	document.getElementById("risk_alert_popup").style.display="none";
	if(type && type=='action'){
		$scope.riskAppetiteAction();
	}

					};
					// /********************Occuaption
					// Search*******************************/
					$scope.search = {
						category : "",
						searchText : "",
						searchSelect : ""
					};
					$scope.categoryArray;
					$scope.occuaptionArray;
					$Occupation.setOccupation(function(val1, val2) {
						$scope.categoryArray = val1;
						$scope.occuaptionArray = val2;
						$scope.numberOfJobs = val2.length;

					});

					$scope.search = function(arg) {

						if ($scope.search.category == null
								|| $scope.search.category == "undefined") {
							var dummyArray = [];
							var len = arg.length;
							$Occupation
									.setOccupation(function(val1, val2) {
										for (var index = 0; index < val2.length; index++) {
											var part = val2[index].substring(0,
													len);
											if ((part.toLowerCase()) == (arg
													.toLowerCase())) {

												dummyArray.push(val2[index]);
											}

										}
										$scope.occuaptionArray = dummyArray;
										$scope.numberOfJobs = dummyArray.length;
									});
						} else {
							var dummyArray = [];
							var len = arg.length;
							$Occupation
									.setOccupationName(
											$scope.search.category,
											function(val) {
												for (var index = 0; index < val.length; index++) {
													var part = val[index]
															.substring(0, len);
													if ((part.toLowerCase()) == (arg
															.toLowerCase())) {

														dummyArray
																.push(val[index]);
													}

												}
												$scope.occuaptionArray = dummyArray;
												$scope.numberOfJobs = dummyArray.length;
											});
						}
					};

					$scope.searchByCategory = function(arg) {

						var dummyArray = [];
						if ($scope.search.searchText !== null
								&& $scope.search.searchText !== undefined) {
							var len = $scope.search.searchText.length;
						}
						$Occupation
								.setOccupationName(
										arg,
										function(val) {

											if ($scope.search.searchText) {
												for (var index = 0; index < val.length; index++) {
													var part = val[index]
															.substring(0, len);
													if ((part.toLowerCase()) == ($scope.search.searchText
															.toLowerCase())) {

														dummyArray
																.push(val[index]);
													}

												}
												$scope.occuaptionArray = dummyArray;
												$scope.numberOfJobs = dummyArray.length;
											} else {
												$scope.occuaptionArray = val;
												$scope.numberOfJobs = val.length;
											}

										});
					};
					// /******************************************************/
					// /***************************selecting
					// job************************/
					$scope.setData = function(arg) {
						if ($scope.isFamilyMemberOccupation) {
							$scope.cff.familyMemberObject[$scope.familyindex].occupation = arg;
							$Occupation
									.setOccupationDetails(
											arg,
											function(val1, val2) {

												$scope.cff.familyMemberObject[$scope.familyindex].occupationCategory = val2;
												$scope.cff.familyMemberObject[$scope.familyindex].occupationClass = val1;
											});
							$scope.isFamilyMemberOccupation = false;
						} else {
							$scope.customer.occupation = arg;
							$Occupation.setOccupationDetails(arg, function(
									val1, val2) {

								$scope.customer.occupationCategory = val2;
								$scope.customer.occupationClass = val1;
							});
						}

					};
					
					$scope.calculateAffordability=function()
					{
						
						$scope.cff.existingPoliciesObject[$scope.policyindex].affordability=$scope.customer.estAnnualIncome/$scope.cff.existingPoliciesObject[$scope.policyindex].annualPremium;   
						
						
					};
					
					// /****************************************************************/

					document.getElementById("settings_img").setAttribute(
							"class", "hd_settings");

				});

// /*********************** END *************************************/
