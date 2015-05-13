
/* JavaScript content from js/controllers/salesIllustrationCtrl.js in folder common */

/* JavaScript content from js/controllers/salesIllustrationCtrl.js in folder common */

/* JavaScript content from js/controllers/salesIllustrationCtrl.js in folder common */
// /*********************** Loading Json **************************/
app
		.controller(
				'salesIllustrationCtrl',
				function($scope, $http, $rootScope, $timeout, $location,
						$Language, $logger, $jsonStore, $compile,
						$PxCalculator, $FileUtils,$Occupation) {
					// document.getElementById("loader").style.display="block";
					
					/*$http.get('json/lifestyleoutput.json').then(function(values)
							{
						$scope.pdfTableData=values.data;
								//alert(values.data);
						//$scope.formGraph();
								    
					//	$scope.updatePremiumPerMode($scope.pdfTableData);
						$scope.pxScope.createTable($scope.pdfTableData);
								
							});*/
					//graph code
					
			  
					
					
					$scope.customer = {};
					$scope.cff = {};
					$scope.illustration = {};
					$scope.riders=[];
					$scope.funds = [];
					$scope.illustration.recommentations=[];
					$scope.selectedFundPortfolio={};
					$scope.topups={};
					$scope.productList = {};
					$scope.productListCollectionName = "productList";
					$scope.cffCollectionName="cff";
					$scope.fnaIncomeRACollectionName="fnaIncomeRA";
					$scope.fnaChildEducationCollectionName="fnaChildEducation";
					$scope.illustrationCollectionName="illustration";
					$scope.productListWithProductCategory = {};
					$scope.subProductIndexList={};
					$scope.selectedOccupation=1;
					$scope.isPlanPageRefreshRequried=false;
					
				$scope.template=1;     // 1-LifeStyle and Link       2-Secure Builder and Secure Wealth   3-Secure Guard Plus
				var systemDate = new Date();					
					//
//$scope.planOptionData=["Plan1","Plan2","Plan3","Plan4"];
					$scope.planOptionData=[];
					$scope.frequencyData = [ {
						"name" : "Annually",
						"value" : 1,"index":0
					}, {
						"name" : "Half Yearly",
						"value" : 2,"index":1
					}, {
						"name" : "Quarterly",
						"value" : 4,"index":2
					}, {
						"name" : "Monthly",
						"value" : 12,"index":3
					}, {
						"name" : "Monthly(Biro Angkasa)",
						"value" : 13,"index":4
					}, {
						"name" : "Monthly(Worksite Mktg Salary Deduction)",
						"value" : 16,"index":5
					}, {
						"name" : "Monthly(Salary Deduction)",
						"value" : 14,"index":6
					}, {
						"name" : "EPP",
						"value" : 15,"index":7
					} ];
					$scope.relationshipData = [ "Spouse", "Parent / Guardian",
							"Others" ];
					$scope.fundData = [
					                   {
					                       "portfolioType": "Low Risk Option 1","index":0,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Bond Fund",
					                               "fundCode": "AMBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Balanced Fund",
					                               "fundCode": "AMBAF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "Low Risk Option 2","index":1,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Bond Fund",
					                               "fundCode": "AMBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Balanced Fund",
					                               "fundCode": "AMBAF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "Medium Risk Option 1","index":2,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Tactical Bond Fund",
					                               "fundCode": "AMTBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Dividend Fund",
					                               "fundCode": "AMDF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "Medium Risk Option 2","index":3,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Tactical Bond Fund",
					                               "fundCode": "AMTBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Asia Pacific REITS Fund",
					                               "fundCode": "AMAPRF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "High Risk Option 1","index":4,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Bond Fund",
					                               "fundCode": "AMBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Asia Pacific REITS Fund",
					                               "fundCode": "AMAPRF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "High Risk Option 2","index":5,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Dana Teguh",
					                               "fundCode": "AMDT"
					                           },
					                           {
					                               "fundName": "AmMetLife Asia Pacific REITS Fund",
					                               "fundCode": "AMAPRF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "High Risk Option 3","index":6,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Balanced Fund",
					                               "fundCode": "AMBAF"
					                           },
					                           {
					                               "fundName": "AmMetLife Equity Fund",
					                               "fundCode": "AMEF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "High Risk Option 4","index":7,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Dana Teguh",
					                               "fundCode": "AMDT"
					                           },
					                           {
					                               "fundName": "AmMetLife Equity Fund",
					                               "fundCode": "AMEF"
					                           }
					                       ]
					                   },
					                   {
					                       "portfolioType": "Customize","index":8,
					                       "funds": [
					                           {
					                               "fundName": "AmMetLife Bond Fund",
					                               "fundCode": "AMBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Balanced Fund",
					                               "fundCode": "AMBAF"
					                           },
					                           {
					                               "fundName": "AmMetLife Tactical Bond Fund",
					                               "fundCode": "AMTBF"
					                           },
					                           {
					                               "fundName": "AmMetLife Dividend Fund",
					                               "fundCode": "AMDF"
					                           },
					                           {
					                               "fundName": "AmMetLife Asia Pacific REITS Fund",
					                               "fundCode": "AMAPRF"
					                           },
					                           {
					                               "fundName": "AmMetLife Dana Teguh",
					                               "fundCode": "AMDT"
					                           },
					                           {
					                               "fundName": "AmMetLife Equity Fund",
					                               "fundCode": "AMEF"
					                           }
					                       ]
					                   }
					               ];
					/* $scope.progressBar = function(type) {
		                 if(type.toUpperCase()=="START"){
		                	 document.getElementById("loader").style.display="block";
		                	
		                 }
		                 else if(type.toUpperCase()=="STOP"){
		                	 document.getElementById("loader").style.display="none";
		                }
		                 
		              };*/
		              //$scope.progressBar('START');
					
					
				    /*  $scope.formGraph=function(){              
				        	var labels= 	$scope.pdfTableData.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[0].TableData.Headers;
				            var values= 	$scope.pdfTableData.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[0].TableData.Columns;
				            

			                for (k = 4; k >= 1; k--) { 
			                    
			                    if(k == '1'){
			                        var color = "#006AB6";
			                    } else if(k == '2'){
			                        var color = "#A30E15";
			                    } else if(k == '3'){
			                        var color = "#679120";
			                    } else if(k == '4'){
			                        var color = "#6C4414";
			                    }
			                   
			                    var jsondata  = '{';
			                        jsondata  += '"key": "Year '+k+'",';
			                        jsondata  += '"color":"'+color+'",';
			                        jsondata  += '"values": [';
			                    
			                        for(j=0;j<values.SetElement[k].Values.SetElement.length;j++){
			                            
			                            jsondata  += "["+(j+1)+","+values.SetElement[k].Values.SetElement[j].value+"]";
			                            
			                            if(j != (values.SetElement[k].Values.SetElement.length-1)){
			                               // alert(values.SetElement[k].Values.SetElement.length);
			                                 jsondata  += ',';
			                            }
			                        }
			                        
			                    
			                        jsondata  += ']},';
			                        //var ress = jsondata.reverse();
			                        var res = jsondata.concat(res).replace(",undefined","");    
			                        alert("res1: "+res);
			                    }      
			                alert("res2: "+res);
			                    $scope.salesGraphData = JSON.parse('['+res+']');
			            
			                //
			                    //alert(  $scope.salesGraphData);
			           // document.body.innerHTML = $scope.exampleData;
			            //       alert($scope.exampleData);
			            // alert("$scope.exampleData "+JSON.stringify($scope.exampleData));
			        };*/
			        
					$scope.graphConfig={"ALSB":[4,3,2,1],"ULLA5":[2,13,14],"ULRP6":[2,13,14]};
					
					
					   $scope.formGraph=function(){  
						   $scope.graphColorCount=1;
				        	var labels= 	$scope.pdfTableData.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[0].TableData.Headers;
				            var values= 	$scope.pdfTableData.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[0].TableData.Columns;
				            

			               for(var graphIndex in $scope.graphConfig[JSON.parse($scope.productList[$scope.selectedSubProductIndex].json.subProductDetailsJson).transaction.products[0].subProducts[0].subProductCode]){
			            	   var k=$scope.graphConfig[JSON.parse($scope.productList[$scope.selectedSubProductIndex].json.subProductDetailsJson).transaction.products[0].subProducts[0].subProductCode][graphIndex];
			            	//   alert("K: "+k);
			                    
			                    if($scope.graphColorCount == 1){
			                        var color = "#006AB6";
			                    } else if($scope.graphColorCount == 2){
			                        var color = "#A30E15";
			                    } else if($scope.graphColorCount == 3){
			                        var color = "#679120";
			                    } else if($scope.graphColorCount == 4){
			                        var color = "#6C4414";
			                    }
			                   
			                    var jsondata  = '{';
			                        jsondata  += '"key": "Year '+k+'",';
			                        jsondata  += '"color":"'+color+'",';
			                        jsondata  += '"values": [';
			                    
			                        for(j=0;j<values.SetElement[k].Values.SetElement.length;j++){
			                            
			                            jsondata  += "["+(j+1)+","+values.SetElement[k].Values.SetElement[j].value+"]";
			                            
			                            if(j != (values.SetElement[k].Values.SetElement.length-1)){
			                               // alert(values.SetElement[k].Values.SetElement.length);
			                                 jsondata  += ',';
			                            }
			                        }
			                        
			                    
			                        jsondata  += ']},';
			                        //var ress = jsondata.reverse();
			                        var res = jsondata.concat(res).replace(",undefined","");    
			                       
			                        $scope.graphColorCount++;
			                    }      
			              
			                    $scope.salesGraphData = JSON.parse('['+res+']');
			            
			                //
			                    //alert(  $scope.salesGraphData);
			           // document.body.innerHTML = $scope.exampleData;
			            //       alert($scope.exampleData);
			            // alert("$scope.exampleData "+JSON.stringify($scope.exampleData));
			        };
					
					
					
			        document.getElementById("salesTableSection").style.display='block';
		        	document.getElementById("salesGraphSection").style.display='none';
		        	   document.getElementById("salesTableButton").style.display='none';
			        	document.getElementById("salesGraphButton").style.display='block';
			        	
			        $scope.showSalesTableSection = function(){
			        	document.getElementById("salesTableSection").style.display="block";
			        	document.getElementById("salesGraphSection").style.display="none";
			        	   document.getElementById("salesTableButton").style.display="none";
				        	document.getElementById("salesGraphButton").style.display="block";
			        };
			       $scope.showSalesGraphSection = function(){
			    	   document.getElementById("salesTableSection").style.display="none";
			        	document.getElementById("salesGraphSection").style.display="block";
			        	   document.getElementById("salesTableButton").style.display="block";
				        	document.getElementById("salesGraphButton").style.display="none";
			       };
			
					$scope.isPolicyOwner = function() {
						$scope.isPlanPageRefreshRequried=true;
						if ($scope.illustration.isPolicyOwner) {
							document.getElementById("policyOwnerDetails").style.visibility = "hidden";
						} else {
							document.getElementById("policyOwnerDetails").style.visibility = "visible";
						}

					};
					
					$scope.fillRecommentations=function(){
						if($scope.cff.profileName){
							$scope.queryPart= [{"id":$scope.cff.id,"profileName":$scope.cff.profileName}];
						    $jsonStore.retriveData($scope.fnaIncomeRACollectionName,$scope.queryPart,
									   function (result){
						    	if(result.length>0 && result[result.length-1].json.capitalRequired){
						    		
						    		$scope.illustration.recommentations.push('IR - RM '+result[result.length-1].json.capitalRequired);
						    	}
						    	
						    }
							, function  (error){
								
								$logger.log("ERROR",JSON.stringify(error));
							}) ;
						    	
						    	
						    	
						    
							    $jsonStore.retriveData($scope.fnaChildEducationCollectionName,$scope.queryPart,
										   function (result){
							    	if(result.length>0 && result[result.length-1].json.addlFundsRequired){
							    		$scope.illustration.recommentations.push('CEF - RM '+result[result.length-1].json.addlFundsRequired);

							    	}
							    	
							    }
								, function  (error){
									
									$logger.log("ERROR",JSON.stringify(error));
								}) ;
						    }
						
						
					};
					if(Object.keys($rootScope.customerObject).length>0){
						//alert("Inside customer object"+JSON.stringify($rootScope.customerObject));
						$scope.customer = $rootScope.customerObject.json;
						$scope.illustration.id=$scope.customer.id;
						$scope.illustration.salutation=$scope.customer.salutation;
						$scope.illustration.customerName=$scope.customer.customerName;
						$scope.illustration.gender=$scope.customer.gender;
						$scope.illustration.dob=new Date($scope.customer.dob);
						$scope.illustration.anb=$scope.customer.anb;
						$scope.illustration.occupation=$scope.customer.occupation;
						$scope.illustration.occupationClass=$scope.customer.occupationClass;
						$scope.illustration.smokingHabit=$scope.customer.smokingHabit;
						
						//if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						//    $scope.$apply();
						//}
						//alert(JSON.stringify($scope.illustration));
					

					}else{
						
						$scope.illustration.salutation=$scope.$Language.commonData.salutation[0];
						
						$scope.illustration.gender=1;
						$scope.illustration.smokingHabit=false;
				
					}
					if (Object.keys($rootScope.cffObject).length>0) {
						$scope.cff = $rootScope.cffObject.json;
						
						$scope.illustration.profileName=$scope.cff.profileName;
						$scope.fillRecommentations();
					}
					if (Object.keys($rootScope.illustrationObject).length>0) {
						
						$scope.illustration = angular.copy($rootScope.illustrationObject.json);
						$scope.illustration.dob=new Date($scope.illustration.dob);
						$scope.illustration.policyOwnerDob?$scope.illustration.policyOwnerDob=new Date($scope.illustration.policyOwnerDob):"" ;

					//	$scope.riders=JSON.parse($scope.illustration.riders);
					//	alert($scope.illustration.fundPortfolioName);
						//$scope.selectedFundPortfolio=JSON.parse($scope.illustration.fundPortfolioName);
						//alert("$scope.selectedFundPortfolio"+JSON.stringify($scope.selectedFundPortfolio));
						//$scope.funds=JSON.parse($scope.illustration.funds);
						//$scope.topups=JSON.parse($scope.illustration.topups);
						$scope.isPolicyOwner();
					//	alert("$scope.illustration.tempPaymentFrequency: "+JSON.stringify($scope.illustration.tempPaymentFrequency));
					}else{
						$scope.illustration.proposalId=""+Math.floor( (Math.random()*10000000000));
						$scope.illustration.policyOwnerSalutation=$scope.$Language.commonData.salutation[0];
						
						$scope.illustration.isPolicySustainabilitySelected=false;
						$scope.illustration.isCashValueSelected=false;
						$scope.illustration.tempPaymentFrequency=$scope.frequencyData[0];
						$scope.illustration.paymentFrequency=$scope.frequencyData[0].value;
						$scope.illustration.gender=1;
						$scope.illustration.isPolicyOwner=true;
						$scope.illustration.policyOwnerGender=1;
						$scope.illustration.policyOwnerRelationship=$scope.relationshipData[0];
						$scope.illustration.withdrawalOption=1;
						//$scope.illustration.productCategory="Wealth";
						//$scope.illustration.subProductCode="BTASGP1EPA";
						
					}

					// $scope.coverageCounter=1;
					$scope.formInputXml = function() {
						$scope.inputXmlData = "";
						$scope.tempInputXmlData = "";
						$scope.inputXmlData += "<?xml version='1.0'?>";
						$scope.inputXmlData += "<clc:CalculationInput xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:clc='http://www.solcorp.com/ns/ProductXpress/CalculationInputOutput/CalculatorElement' detailed-errors='true' request-id='1' xmlns='http://www.example.org/AmLife_Lifestyle'>";
						$scope.inputXmlData += "<clc:DeplR dep-name='"
								+ $scope.illustration.planName
								+ "' ver-sel='last'/>";
						$scope.inputXmlData += "<clc:CalculationData>";
						$scope.inputXmlData += "<Policy id='ID1'>";
						$scope.inputXmlData += " <Features>";
						$scope.illustration.coverageTerm ? $scope.inputXmlData += " <CoverageTerm><TermType>Duration</TermType><Term>"
								+ $scope.illustration.coverageTerm
								+ "</Term></CoverageTerm>"
								: $scope.inputXmlData += " <CoverageTerm xsi:nil='true'/>";
						$scope.inputXmlData += " <DeductibleLevel xsi:nil='true'/>";
						$scope.inputXmlData += " <ExtendedCoverageOption xsi:nil='true'/>";

						$scope.illustration.insurancePortion ? $scope.inputXmlData += "<InsurancePortion>"
								+ $scope.illustration.insurancePortion
								+ "</InsurancePortion>"
								: $scope.inputXmlData += " <InsurancePortion xsi:nil='true'/>";
						/* TBD */$scope.illustration.paymentFrequency? $scope.inputXmlData += "<PaymentFrequency>"
								+ $scope.illustration.paymentFrequency
								+ "</PaymentFrequency>"
								: $scope.inputXmlData += " <PaymentFrequency xsi:nil='true'/>";
						$scope.illustration.paymentTerm ? $scope.inputXmlData += "<PaymentTerm><TermType>Duration</TermType><Term>"
								+ $scope.illustration.paymentTerm
								+ "</Term></PaymentTerm>"
								: $scope.inputXmlData += " <PaymentTerm xsi:nil='true'/>";
						$scope.inputXmlData += " <PlanCode xsi:nil='true'/>";
						$scope.illustration.planCode ? $scope.inputXmlData += "<ProductCode>"
								+ $scope.illustration.planCode
								+ "</ProductCode>"
								: $scope.inputXmlData += " <ProductCode xsi:nil='true'/>";
					$scope.isPolicySustainabilitySelected &&	$scope.illustration.sustainibilityOption ? $scope.inputXmlData += " <SustainabilityOptionTerm><TermType xsi:nil='true'/><Term>"
								+ $scope.illustration.sustainibilityOption
								+ "</Term></SustainabilityOptionTerm>"
								: $scope.inputXmlData += " <SustainabilityOptionTerm xsi:nil='true'/>";
						$scope.inputXmlData += "<TargetAge xsi:nil='true'/>";
						$scope.inputXmlData += " <TargetValue xsi:nil='true'/>";
						$scope.illustration.totalPremium ? $scope.inputXmlData += "<TotalPremium>"
								+ $scope.illustration.totalPremium
								+ "</TotalPremium>"
								: $scope.inputXmlData += " <TotalPremium xsi:nil='true'/>";
						$scope.illustration.withdrawalOption ? $scope.inputXmlData += "<WithdrawalOption>"
								+ $scope.illustration.withdrawalOption
								+ "</WithdrawalOption>"
								: $scope.inputXmlData += " <WithdrawalOption xsi:nil='true'/>";
						$scope.inputXmlData += "</Features>";

						$scope.inputXmlData += "<Links>";
						$scope.inputXmlData += "<Coverage>";
						$scope.inputXmlData += "<Coverage id='IDC0'>";
						$scope.inputXmlData += "<Features>";
						$scope.illustration.planCode ? $scope.inputXmlData += "<CoverageCode>"
								+ $scope.illustration.planCode
								+ "</CoverageCode>"
								: $scope.inputXmlData += " <CoverageCode xsi:nil='true'/>";
						$scope.illustration.coverageTerm ? $scope.inputXmlData += "<CoverageTerm><TermType>Duration</TermType><Term>"
								+ $scope.illustration.coverageTerm
								+ "</Term></CoverageTerm>"
								: $scope.inputXmlData += " <CoverageTerm xsi:nil='true'/>";
						$scope.illustration.insuredAmount ? $scope.inputXmlData += "<InsuredAmount>"
								+ $scope.illustration.insuredAmount
								+ "</InsuredAmount>"
								: $scope.inputXmlData += " <InsuredAmount xsi:nil='true'/>";
						$scope.illustration.paymentTerm ? $scope.inputXmlData += "<PaymentTerm><TermType>Duration</TermType><Term>"
								+ $scope.illustration.paymentTerm
								+ "</Term></PaymentTerm>"
								: $scope.inputXmlData += " <PaymentTerm xsi:nil='true'/>";
						$scope.illustration.planCode ? $scope.inputXmlData += "<PlanCode>"
								+ $scope.illustration.planCode + "</PlanCode>"
								: $scope.inputXmlData += " <PlanCode xsi:nil='true'/>";
						$scope.inputXmlData += "</Features>";
						$scope.inputXmlData += "<Links>";
						$scope.inputXmlData += "<Insured>";
						$scope.inputXmlData += "<clc:Reference ref='IDI0'/>";
						$scope.inputXmlData += "</Insured>";
						$scope.inputXmlData += "</Links>";
						$scope.inputXmlData += "</Coverage>";

						// temp
						$scope.tempInputXmlData += "<Coverage>";
						$scope.tempInputXmlData += "<Coverage ref='IDC0'>";
						$scope.tempInputXmlData += "<Features>";
						$scope.tempInputXmlData += "<CoverageCode/>";
						$scope.tempInputXmlData += "<CoverageTerm/>";
						$scope.tempInputXmlData += "<InsuredAmount/>";
						$scope.tempInputXmlData += "<PaymentTerm/>";
						$scope.tempInputXmlData += "<PlanCode/>";
						$scope.tempInputXmlData += "<PremiumPerMode/>";
						$scope.tempInputXmlData += " </Features>";
						$scope.tempInputXmlData += "<Links>";
						$scope.tempInputXmlData += "<Insured>";
						$scope.tempInputXmlData += " <clc:Reference ref='IDI0'/>";
						$scope.tempInputXmlData += "</Insured>";
						$scope.tempInputXmlData += " </Links>";
						$scope.tempInputXmlData += "</Coverage>";

						for (var riderIndex = 0; riderIndex < $scope.riders.length; riderIndex++) {
if($scope.riders && $scope.riders[riderIndex] && $scope.riders[riderIndex].riderSelectedStatus){
							$scope.inputXmlData += "<Coverage id='IDC"
									+ (riderIndex + 1) + "'>";
							$scope.inputXmlData += "<Features>";
							$scope.riders[riderIndex].code ? $scope.inputXmlData += "<CoverageCode>"
									+ $scope.riders[riderIndex].code
									+ "</CoverageCode>"
									: $scope.inputXmlData += " <CoverageCode xsi:nil='true'/>";
							$scope.riders[riderIndex].coverageTerm ? $scope.inputXmlData += "<CoverageTerm><TermType>Duration</TermType><Term>"
									+ $scope.riders[riderIndex].coverageTerm
									+ "</Term></CoverageTerm>"
									: $scope.inputXmlData += " <CoverageTerm xsi:nil='true'/>";
							$scope.riders[riderIndex].insuredAmount ? $scope.inputXmlData += "<InsuredAmount>"
									+ $scope.riders[riderIndex].insuredAmount
									+ "</InsuredAmount>"
									: $scope.inputXmlData += " <InsuredAmount xsi:nil='true'/>";
							$scope.riders[riderIndex].coverageTerm ? $scope.inputXmlData += "<PaymentTerm><TermType>Duration</TermType><Term>"
									+ $scope.riders[riderIndex].coverageTerm
									+ "</Term></PaymentTerm>"
									: $scope.inputXmlData += " <PaymentTerm xsi:nil='true'/>";
							if ($scope.riders[riderIndex].name == "AmMedic Flexi Plus Rider") {
								$scope.riders[riderIndex].code ? $scope.inputXmlData += "<PlanCode>"
										+ $scope.riders[riderIndex].code
										+ "</PlanCode>"
										: $scope.inputXmlData += " <PlanCode xsi:nil='true'/>";
							} else {
								$scope.inputXmlData += " <PlanCode xsi:nil='true'/>";
							}

							$scope.inputXmlData += "</Features>";
							$scope.inputXmlData += "<Links>";
							$scope.inputXmlData += "<Insured>";
							$scope.inputXmlData += "<clc:Reference ref='IDI0'/>";
							$scope.inputXmlData += "</Insured>";
							$scope.inputXmlData += "</Links>";
							$scope.inputXmlData += "</Coverage>";

							$scope.tempInputXmlData += "<Coverage ref='IDC"
									+ (riderIndex + 1) + "'>";
							$scope.tempInputXmlData += "<Features>";
							$scope.tempInputXmlData += "<CoverageCode/>";
							$scope.tempInputXmlData += "<CoverageTerm/>";
							$scope.tempInputXmlData += "<InsuredAmount/>";
							$scope.tempInputXmlData += "<PaymentTerm/>";
							$scope.tempInputXmlData += "<PlanCode/>";
							$scope.tempInputXmlData += "<PremiumPerMode/>";
							$scope.tempInputXmlData += " </Features>";
							$scope.tempInputXmlData += "<Links>";
							$scope.tempInputXmlData += "<Insured>";
							$scope.tempInputXmlData += " <clc:Reference ref='IDI0'/>";
							$scope.tempInputXmlData += "</Insured>";
							$scope.tempInputXmlData += " </Links>";
							$scope.tempInputXmlData += "</Coverage>";
						}}
						$scope.tempInputXmlData += "</Coverage>";
						$scope.inputXmlData += "</Coverage>";

						if ($scope.funds.length > 0) {
							$scope.inputXmlData += "<FundInvestment>";
							$scope.tempInputXmlData += "<FundInvestment>";

							for (var fundIndex = 0; fundIndex < $scope.funds.length; fundIndex++) {
								$scope.inputXmlData += " <FundInvestment id='IDF"
										+ fundIndex + "'>";
								$scope.inputXmlData += " <Features>";
								$scope.inputXmlData += "<FundCode>"
										+ $scope.funds[fundIndex].fundCode
										+ "</FundCode>";
								if ($scope.funds[fundIndex].percentage) {
									$scope.inputXmlData += "<FundPercentage>"
											+ $scope.funds[fundIndex].percentage
											+ "</FundPercentage>";
								} else {
									$scope.inputXmlData += "<FundPercentage>0</FundPercentage>";

								}
								$scope.inputXmlData += "</Features>";
								$scope.inputXmlData += " </FundInvestment>";

								$scope.tempInputXmlData += "<FundInvestment ref='IDF"
										+ fundIndex + "'>";
								$scope.tempInputXmlData += "<Features>";
								$scope.tempInputXmlData += "<FundCode/>";
								$scope.tempInputXmlData += "<FundPercentage/>";
								$scope.tempInputXmlData += "</Features>";
								$scope.tempInputXmlData += "</FundInvestment>";
							}
							$scope.tempInputXmlData += "</FundInvestment>";
							$scope.inputXmlData += " </FundInvestment>";
						} else {
							$scope.inputXmlData += "<FundInvestment/>";
						}

						$scope.inputXmlData += "<Insured>";
						$scope.inputXmlData += "<Insured id='IDI0'>";
						$scope.inputXmlData += " <Features>";
						$scope.inputXmlData += "<RoleCode>Insured</RoleCode>";
						$scope.inputXmlData += "</Features>";
						$scope.inputXmlData += "<Links>";
						$scope.inputXmlData += "<Person>";
						$scope.inputXmlData += "<clc:Reference ref='IDP0'/>";
						$scope.inputXmlData += "</Person>";
						$scope.inputXmlData += "</Links>";
						$scope.inputXmlData += "</Insured>";
						$scope.inputXmlData += "</Insured>";

						$scope.tempInputXmlData += "<Insured>";
						$scope.tempInputXmlData += "<Insured ref='IDI0'>";
						$scope.tempInputXmlData += " <Features>";
						$scope.tempInputXmlData += "<RoleCode/>";
						$scope.tempInputXmlData += "</Features>";
						$scope.tempInputXmlData += "<Links>";
						$scope.tempInputXmlData += "<Person>";
						$scope.tempInputXmlData += "<clc:Reference ref='IDP0'/>";
						$scope.tempInputXmlData += "</Person>";
						$scope.tempInputXmlData += "</Links>";
						$scope.tempInputXmlData += "</Insured>";
						$scope.tempInputXmlData += "</Insured>";

						if (!$scope.illustration.isPolicyOwner) {
							$scope.inputXmlData += "<Owner>";
							$scope.inputXmlData += "<Owner id='IDO0'>";
							$scope.inputXmlData += "<Features>";
							$scope.inputXmlData += "<RoleCode>"
									+ $scope.illustration.policyOwnerRelationship
									+ "</RoleCode>";
							$scope.inputXmlData += "</Features>";
							$scope.inputXmlData += "<Links>";
							$scope.inputXmlData += "<Person>";
							$scope.inputXmlData += "<clc:Reference ref='IDP1'/>";
							$scope.inputXmlData += "</Person>";
							$scope.inputXmlData += "</Links>";
							$scope.inputXmlData += "</Owner>";
							$scope.inputXmlData += "</Owner>";

							$scope.tempInputXmlData += "<Owner>";
							$scope.tempInputXmlData += "<Owner ref='IDO0'>";
							$scope.tempInputXmlData += "<Features>";
							$scope.tempInputXmlData += "<RoleCode/>";
							$scope.tempInputXmlData += "</Features>";
							$scope.tempInputXmlData += "<Links>";
							$scope.tempInputXmlData += "<Person>";
							$scope.tempInputXmlData += "<clc:Reference ref='IDP1'/>";
							$scope.tempInputXmlData += "</Person>";
							$scope.tempInputXmlData += "</Links>";
							$scope.tempInputXmlData += "</Owner>";
							$scope.tempInputXmlData += "</Owner>";

						} else {
							$scope.inputXmlData += "<Owner/>";
						}

						if (Object.keys($scope.topups).length > 0) {
						
							$scope.inputXmlData += "<TopUp>";
							$scope.tempInputXmlData += "<TopUp>";
							var topupIndex = 0;
							for (var year in $scope.topups) {

								$scope.inputXmlData += "<TopUp id='IDT"
										+ topupIndex + "'>";
								$scope.inputXmlData += "<Features>";
								$scope.inputXmlData += "<TopUpAmount>"
										+ $scope.topups[year]
										+ "</TopUpAmount>";
								$scope.inputXmlData += "<TopUpYear>"
										+year
										+ "</TopUpYear>";
								$scope.inputXmlData += "</Features>";
								$scope.inputXmlData += "</TopUp>";

								$scope.tempInputXmlData += "<TopUp ref='IDT"
										+ topupIndex + "'>";
								$scope.tempInputXmlData += "<Features>";
								$scope.tempInputXmlData += "<TopUpAmount/>";
								$scope.tempInputXmlData += "<TopUpYear/>";
								$scope.tempInputXmlData += "</Features>";
								$scope.tempInputXmlData += "</TopUp>";
								topupIndex++;
							}
							$scope.tempInputXmlData += "</TopUp>";
							$scope.inputXmlData += "</TopUp>";
						} else {
							$scope.inputXmlData += "<TopUp/>";
						}

						$scope.inputXmlData += "</Links>";
						$scope.inputXmlData += "</Policy>";

						$scope.inputXmlData += "<Person id='IDP0'>";
						$scope.inputXmlData += "<Features>";
						$scope.inputXmlData += "<AgeNextBirthday>"
								+ $scope.illustration.anb
								+ "</AgeNextBirthday>";
						$scope.inputXmlData += "<BirthDate xsi:nil='true'/>";
						$scope.inputXmlData += "<Gender>"+$scope.illustration.gender+"</Gender>";
						$scope.illustration.occupationClass?$scope.inputXmlData += "<OccupationClass>"
								+ $scope.illustration.occupationClass
								+ "</OccupationClass>":$scope.inputXmlData += " <OccupationClass xsi:nil='true'/>";
						$scope.illustration.smokingHabit?$scope.inputXmlData += "<SmokingHabit>Y</SmokingHabit>":$scope.inputXmlData += "<SmokingHabit>N</SmokingHabit>";
						$scope.inputXmlData += "</Features>";
						$scope.inputXmlData += "</Person>";

						if (!$scope.illustration.isPolicyOwner) {
							$scope.inputXmlData += "<Person id='IDP1'>";
							$scope.inputXmlData += " <Features>";
							$scope.inputXmlData += "<AgeNextBirthday>"
									+ $scope.illustration.policyOwnerAnb
									+ "</AgeNextBirthday>";
							$scope.inputXmlData += "<BirthDate xsi:nil='true'/>";
							$scope.inputXmlData += "<Gender>"+$scope.illustration.policyOwnerGender+"</Gender>";
							$scope.illustration.policyOwnerOccupationClass?$scope.inputXmlData += "<OccupationClass>"
								+ $scope.illustration.policyOwnerOccupationClass
								+ "</OccupationClass>":$scope.inputXmlData += " <OccupationClass xsi:nil='true'/>";
							$scope.illustration.policyOwnerSmokingHabit?$scope.inputXmlData += "<SmokingHabit>Y</SmokingHabit>":$scope.inputXmlData += "<SmokingHabit>N</SmokingHabit>";

							$scope.inputXmlData += "</Features>";
							$scope.inputXmlData += "</Person>";
						}

						$scope.inputXmlData += "</clc:CalculationData>";

						$scope.inputXmlData += "<clc:Calculation name='main test'>";
						$scope.inputXmlData += "<Policy ref='ID1'>";
						$scope.inputXmlData += "<Validations>";
						$scope.inputXmlData += "<All_validations/>";
						$scope.inputXmlData += "</Validations>";
						$scope.inputXmlData += "<Features>";
						$scope.inputXmlData += "<CoverageTerm/>";
						$scope.inputXmlData += "<InsurancePortion/>";
						$scope.inputXmlData += "<PaymentFrequency/>";
						$scope.inputXmlData += "<PaymentTerm/>";
						$scope.inputXmlData += "<PlanCode/>";
						$scope.inputXmlData += "<ProductCode/>";
						$scope.inputXmlData += "<SustainabilityOptionTerm/>";
						$scope.inputXmlData += "<TargetAge/>";
						$scope.inputXmlData += "<TargetValue/>";
						$scope.inputXmlData += "<TotalPremium/>";
						$scope.inputXmlData += "<WithdrawalOption/>";
						$scope.inputXmlData += "<PremiumPerMode/>";
						$scope.inputXmlData += "<Tables/>";
						$scope.inputXmlData += "</Features>";

						$scope.inputXmlData += "<Links>";
						$scope.inputXmlData += $scope.tempInputXmlData;
						$scope.inputXmlData += "</Links>";
						$scope.inputXmlData += "</Policy>";

						$scope.inputXmlData += "<Person ref='IDP0'>";
						$scope.inputXmlData += "<Features>";
						$scope.inputXmlData += "<AgeNextBirthday/>";
						$scope.inputXmlData += "<BirthDate/>";
						$scope.inputXmlData += "<Gender/>";
						$scope.inputXmlData += "<OccupationClass/>";
						$scope.inputXmlData += "<SmokingHabit/>";
						$scope.inputXmlData += "</Features>";
						$scope.inputXmlData += "</Person>";
						if (!$scope.illustration.isPolicyOwner) {
							$scope.inputXmlData += "<Person ref='IDP1'>";
							$scope.inputXmlData += "<Features>";
							$scope.inputXmlData += "<AgeNextBirthday/>";
							$scope.inputXmlData += "<BirthDate/>";
							$scope.inputXmlData += "<Gender/>";
							$scope.inputXmlData += "<OccupationClass/>";
							$scope.inputXmlData += "<SmokingHabit/>";
							$scope.inputXmlData += "</Features>";
							$scope.inputXmlData += "</Person>";
						}

						$scope.inputXmlData += "<clc:CalculationDates><clc:At>2015-04-06</clc:At></clc:CalculationDates>";
						$scope.inputXmlData += "<clc:InputData scenario='main'/>";
						$scope.inputXmlData += "</clc:Calculation>";
						$scope.inputXmlData += "</clc:CalculationInput>";
					};

					/*
					 * $scope.illustration.policyOwnerSmokingHabit=false;
					 * $scope.illustration.smokingHabit=false;
					 */
					$scope.fillPlanPage = function(tempPlanOptionData) {
						if(tempPlanOptionData){
						
							$scope.PlanData=tempPlanOptionData;
						}
						
						var plan=$scope.PlanData;
						// alert(selectedProductObject.subMarketingName);
						/*var productDetailsObj = JSON
								.parse(selectedProductObject.subProductDetailsJson);*/
						
						$scope.planExpression = {
							"CoverageTermmin" : "",
							"CoverageTermmax" : "",
							"PaymentTermmin" : "",
							"PaymentTermmin" : "",
							"InsuredAmountmin" : "",
							"InsuredAmountmax" : "",
							"InsurancePortionmin" : "",
							"InsurancePortionmax" : "",
							"SustainabilityOptionmin" : "",
							"SustainabilityOptionmax" : "",
							"SustainabilityOption":{},
							"TotalPremiummin" : "",
							"TotalPremiummax" : ""
						};
						if(plan.planCode){
							
							$scope.illustration.planCode = plan.planCode;
							$scope.illustration.planName = plan.planName;
						}
						else{
							
							$scope.illustration.planCode = plan.subProductCode;
							$scope.illustration.planName = plan.subProductName;
						}
						
						
						var rules = plan.rules.SetElement;
						var riders = plan.riders.SetElement;
						for (var ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
							if (rules[ruleIndex].applicableAttribute == "CoverageTerm"
									|| rules[ruleIndex].applicableAttribute == "PaymentTerm"
									|| rules[ruleIndex].applicableAttribute == "InsuredAmount"
									|| rules[ruleIndex].applicableAttribute == "InsurancePortion"
									|| rules[ruleIndex].applicableAttribute == "SustainabilityOption"
									|| rules[ruleIndex].applicableAttribute == "TotalPremium") {
							//	if (rules[ruleIndex].applicableAttribute
								//		+ rules[ruleIndex].bound) {
									rules[ruleIndex].ruleExpression ? $scope.planExpression[rules[ruleIndex].applicableAttribute
											+ rules[ruleIndex].bound] = rules[ruleIndex].ruleExpression
											: $scope.planExpression[rules[ruleIndex].applicableAttribute
													+ rules[ruleIndex].bound] = rules[ruleIndex].values.SetElement[0];
								//} else {
									if (rules[ruleIndex].applicableAttribute == "SustainabilityOption" && !rules[ruleIndex].bound) {
										// $scope.planExpression[rules[ruleIndex].applicableAttribute]=[];
										$scope.planExpression[rules[ruleIndex].applicableAttribute] = rules[ruleIndex].values.SetElement;
									}
								//}
							}

						}
						if ($scope.planExpression.CoverageTermmin
								&& $scope.planExpression.CoverageTermmax) {
							if ($scope
									.resolveExpression($scope.planExpression.CoverageTermmin) == $scope
									.resolveExpression($scope.planExpression.CoverageTermmax)) {
								$scope.illustration.coverageTerm = $scope
										.resolveExpression($scope.planExpression.CoverageTermmin);
								document.getElementById('illustration.coverageTerm').disabled=true;
								// make it disabled.
							} else {
								$scope.illustration.coverageTerm = $scope
										.resolveExpression($scope.planExpression.CoverageTermmin);
								document.getElementById('illustration.coverageTerm').disabled=false;
								// range
							}
						} else if ($scope.planExpression.CoverageTermmin) {
							$scope.illustration.coverageTerm = $scope
									.resolveExpression($scope.planExpression.CoverageTermmin);
							// make it disabled.
							//document.getElementById('illustration.coverageTerm').disabled=true;
						}
						if ($scope.planExpression.PaymentTermmin
								&& $scope.planExpression.PaymentTermmax) {
							if ($scope
									.resolveExpression($scope.planExpression.PaymentTermmin) == $scope
									.resolveExpression($scope.planExpression.PaymentTermmax)) {
								$scope.illustration.paymentTerm = $scope
										.resolveExpression($scope.planExpression.PaymentTermmin);
								$scope.fillTopUps();
								document.getElementById('illustration.paymentTerm').disabled=true;
							} else {
								$scope.illustration.paymentTerm = $scope
										.resolveExpression($scope.planExpression.PaymentTermmin);
								
								$scope.fillTopUps();
								document.getElementById('illustration.paymentTerm').disabled=false;
							}
						} else if ($scope.planExpression.PaymentTermmin) {
							$scope.illustration.paymentTerm = $scope
									.resolveExpression($scope.planExpression.PaymentTermmin);
							$scope.fillTopUps();
							//document.getElementById('illustration.paymentTerm').disabled=true;
						}
						if ($scope.planExpression.InsuredAmountmin
								&& $scope.planExpression.InsuredAmountmax) {
							if ($scope
									.resolveExpression($scope.planExpression.InsuredAmountmin) == $scope
									.resolveExpression($scope.planExpression.InsuredAmountmax)) {
								$scope.illustration.insuredAmount = $scope
										.resolveExpression($scope.planExpression.InsuredAmountmin);
								document.getElementById('illustration.insuredAmount').disabled=true;
							} else {
								$scope.illustration.insuredAmount = $scope
										.resolveExpression($scope.planExpression.InsuredAmountmin);
								document.getElementById('illustration.insuredAmount').disabled=false;
							}
						} else if ($scope.planExpression.InsuredAmountmin) {
							$scope.illustration.insuredAmount = $scope
									.resolveExpression($scope.planExpression.InsuredAmountmin);
							//document.getElementById('illustration.insuredAmount').disabled=true;
						}
						if ($scope.planExpression.InsurancePortionmin
								&& $scope.planExpression.InsurancePortionmax) {
							if ($scope
									.resolveExpression($scope.planExpression.InsurancePortionmin) == $scope
									.resolveExpression($scope.planExpression.InsurancePortionmax)) {
								$scope.illustration.insurancePortion = $scope
										.resolveExpression($scope.planExpression.InsurancePortionmin);
								document.getElementById('illustration.insurancePortion').disabled=true;
							} else {
								$scope.illustration.insurancePortion = $scope
										.resolveExpression($scope.planExpression.InsurancePortionmin);
								document.getElementById('illustration.insurancePortion').disabled=false;
							}
						} else if ($scope.planExpression.InsurancePortionmin) {
							$scope.illustration.insurancePortion = $scope
									.resolveExpression($scope.planExpression.InsurancePortionmin);
							//document.getElementById('illustration.insurancePortion').disabled=true;
						}
						if ($scope.planExpression.TotalPremiummin
								&& $scope.planExpression.TotalPremiummax) {
							if ($scope
									.resolveExpression($scope.planExpression.TotalPremiummin) == $scope
									.resolveExpression($scope.planExpression.TotalPremiummax)) {
								$scope.illustration.totalPremium = $scope
										.resolveExpression($scope.planExpression.TotalPremiummin);
								document.getElementById('illustration.totalPremium').disabled=true;
							} else {
								$scope.illustration.totalPremium = $scope
										.resolveExpression($scope.planExpression.TotalPremiummin);
								document.getElementById('illustration.totalPremium').disabled=false;
							}
						} else if ($scope.planExpression.TotalPremiummin) {
							$scope.illustration.totalPremium = $scope
									.resolveExpression($scope.planExpression.TotalPremiummin);
							//document.getElementById('illustration.totalPremium').disabled=true;
						}
						
						if ($scope.planExpression.SustainabilityOption && $scope.template==1){
							var htmlData="<div>";
							for(var index=0;index<$scope.planExpression.SustainabilityOption.length;index++){
								htmlData+='<input type="radio" class="si_radio_btn" ng-model="illustration.sustainibilityOption" name="policy_radio" id="upto_'+$scope.planExpression.SustainabilityOption[index]+'" ng-value="'+$scope.planExpression.SustainabilityOption[index]+'" />';
								htmlData+='<label class="si_radio_label" for="upto_'+$scope.planExpression.SustainabilityOption[index]+'">Up to '+$scope.planExpression.SustainabilityOption[index]+'</label>';
								
							}
							htmlData+='<input type="radio" class="si_radio_btn"  name="policy_radio" id="upto_anb" />';
							htmlData+='<label class="si_radio_label" for="upto_anb">Up to ANB</label>';
							htmlData+='<input type="text" ng-model="illustration.sustainibilityOption"/>';
							
							htmlData+='</div>';
							
							var sustainabilitySectionElement = document
							.getElementById("sustainabilitySection");
							sustainabilitySectionElement.replaceChild(
							$compile(htmlData)($scope)[0],
							sustainabilitySectionElement.childNodes[0]);
							if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
							    $scope.$apply();
							}
						}
						if ($scope.planExpression.SustainabilityOptionmin
								&& $scope.planExpression.SustainabilityOptionmax) {
							if ($scope
									.resolveExpression($scope.planExpression.SustainabilityOptionmin) == $scope
									.resolveExpression($scope.planExpression.SustainabilityOptionmax)) {
								$scope.illustration.sustainabilityOption = $scope
										.resolveExpression($scope.planExpression.SustainabilityOptionmin);
							} else {
								$scope.illustration.sustainabilityOption = $scope
										.resolveExpression($scope.planExpression.SustainabilityOptionmin);
							}
						} else if ($scope.planExpression.SustainabilityOptionmin) {
							$scope.illustration.sustainabilityOption = $scope
									.resolveExpression($scope.planExpression.SustainabilityOptionmin);
						}
						
						
							$scope.fillRiders(riders);
						
							
						
						
					};

					$scope.fillRiders = function(riders) {
						$scope.riders = [];
						$scope.superRiderIndexList={};
						$scope.dependentRiderIndexList={};
						$scope.riderExpressionArray=[];
						$scope.isAmMedicFlexiPlusRider=false;
						// alert(JSON.stringify(riders));
						//var riderHtmlData = '<div><table><tr><th>Code</th><th>Rider Name</th><th>Term</th><th>Sum Assured</th><th></th></tr>';
						var selectedRiderIndex = 0;
						for (var riderIndex = 0; riderIndex < riders.length; riderIndex++) {
							$scope.riderExpression = {
								"LifeAssuredAgemin" : "",
								"LifeAssuredAgemax" : "",
								"PayorAgemin" : "",
								"PayorAgemax" : "",
								"CoverageTermmin" : "",
								"CoverageTermmax" : "",
								"PaymentTermmin" : "",
								"PaymentTermmin" : "",
								"InsuredAmountmin" : "",
								"InsuredAmountmax" : "",
								"Dependency":""
							};

							var rules = riders[riderIndex].rules.SetElement;
							for (var ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
								// getting min and max expression for all the
								if (rules[ruleIndex].applicableAttribute == "LifeAssuredAge"
										|| rules[ruleIndex].applicableAttribute == "PayorAge"
										|| rules[ruleIndex].applicableAttribute == "CoverageTerm"
										|| rules[ruleIndex].applicableAttribute == "PaymentTerm"
										|| rules[ruleIndex].applicableAttribute == "InsuredAmount"
											) {
									//if (	rules[ruleIndex].applicableAttribute
									//		+ rules[ruleIndex].bound) {
										rules[ruleIndex].ruleExpression ? $scope.riderExpression[rules[ruleIndex].applicableAttribute
												+ rules[ruleIndex].bound] = rules[ruleIndex].ruleExpression
												: $scope.riderExpression[rules[ruleIndex].applicableAttribute
														+ rules[ruleIndex].bound] = rules[ruleIndex].values.SetElement[0];
									//}

								}else if( rules[ruleIndex].applicableAttribute == "Dependency"){
									//copy the rider code to dependency riderExpression.
								//	alert("coming");
									$scope.riderExpression[rules[ruleIndex].applicableAttribute] = rules[ruleIndex].values.SetElement[0];
									//alert(JSON.stringify($scope.riderExpression));
								//alert("code: "+rules[ruleIndex].values.SetElement[0]);
								}

							}
							$scope.isApplicable = false;
							// alert("rider");

							if (riders[riderIndex].features.SetElement[2].value == "Payor"
									&& !$scope.illustration.isPolicyOwner && $scope.illustration.policyOwnerAnb) {
								// alert("payor");
								$scope.isApplicable = $scope
										.checkApplicability(
												$scope.illustration.policyOwnerAnb,
												$scope.riderExpression.PayorAgemin,
												$scope.riderExpression.PayorAgemax);

							} else if (riders[riderIndex].features.SetElement[2].value == "Life Assured") {
								// alert("life assured");
								$scope.isApplicable = $scope
										.checkApplicability(
												$scope.illustration.anb,
												$scope.riderExpression.LifeAssuredAgemin,
												$scope.riderExpression.LifeAssuredAgemax);
							}

							if ($scope.isApplicable) {
							
								
								// alert("riderapplicable");
								// if it is AmMedic rider we need to put
								// dropdown TBD
								if(riders[riderIndex].features.SetElement[0].value=="AmMedic Flexi Plus Rider" && $scope.isAmMedicFlexiPlusRider){
									$scope.AmMedicFlexiPlusRiderCode.push(riders[riderIndex].features.SetElement[3].value);
									continue;
								}
								if(riders[riderIndex].features.SetElement[0].value=="AmMedic Flexi Plus Rider"){
									
									$scope.isAmMedicFlexiPlusRider=true;
									$scope.AmMedicFlexiPlusRiderCode=[];
									$scope.AmMedicFlexiPlusRiderCode.push(riders[riderIndex].features.SetElement[3].value);
									
								}
								
									$scope.riders[selectedRiderIndex] = {};
									$scope.riders[selectedRiderIndex].code = riders[riderIndex].features.SetElement[3].value;
									$scope.riders[selectedRiderIndex].name = riders[riderIndex].features.SetElement[0].value;
									$scope.superRiderIndexList[$scope.riders[selectedRiderIndex].code]=selectedRiderIndex;
									$scope.riders[selectedRiderIndex].riderSelectedStatus = false;
									$scope.riderExpressionArray.push($scope.riderExpression);
									
									//alert($scope.riderExpressionArray.length);
									//alert($scope.riders.length);
									selectedRiderIndex++;
								
								
							}
							/*if($scope.riderExpression["Dependency"]){
								alert("if"+JSON.stringify($scope.riderExpression["Dependency"]));
							}*/
							//alert("if"+JSON.stringify($scope.superRiderIndexList));
							
							}
						//alert($scope.riderExpressionArray.length+"expression"+JSON.stringify($scope.riderExpressionArray));
						//alert($scope.riders.length+"riders"+JSON.stringify($scope.riders));
						if($scope.iscreateRiderTableRequired){
							
						$scope.createRiderTable();
						$scope.iscreateRiderTableRequired=false;
						}
						$scope.updateSuperRiderData();
						for (var riderIndex = 0; riderIndex < $scope.riders.length; riderIndex++) {
						$scope.updateRiderData(riderIndex);
						}
						
						$scope.copySavedIllustrationValues();
						//alert(JSON.stringify($scope.AmMedicFlexiPlusRiderCode));
					};
					
					//overriding plan page data if it is home and profile status flow.
					$scope.isCopySavedIllustrationValuesRequired=true;
					$scope.copySavedIllustrationValues=function(){
					
						//alert("isCopySavedIllustrationValuesRequired: "+$scope.isCopySavedIllustrationValuesRequired);
						if (Object.keys($rootScope.illustrationObject).length>0 && $scope.isCopySavedIllustrationValuesRequired) {
						//	alert("copying...");
							//alert("insured amt2: "+$rootScope.illustrationObject.json.insuredAmount);
							var illustrationObject=$rootScope.illustrationObject.json;
							//alert("insured amt3: "+illustrationObject.insuredAmount);
							$scope.illustration.yearlyPremium=illustrationObject.yearlyPremium;
							$scope.illustration.halfYearlyPremium=illustrationObject.halfYearlyPremium;
							$scope.illustration.quarterlyPremium=illustrationObject.quarterlyPremium;
							$scope.illustration.monthlyPremium=illustrationObject.monthlyPremium;
							
							$scope.illustration.planOption=illustrationObject.planOption;
							$scope.illustration.planCode=illustrationObject.planCode;
							$scope.illustration.planName=illustrationObject.planName;
							$scope.illustration.coverageTerm=illustrationObject.coverageTerm;
							$scope.illustration.paymentTerm=illustrationObject.paymentTerm;
							$scope.illustration.totalPremium=illustrationObject.totalPremium;
							$scope.illustration.insuredAmount=illustrationObject.insuredAmount;
							$scope.illustration.insurancePortion=illustrationObject.insurancePortion;
							
							
							
							
							$scope.riders=JSON.parse(illustrationObject.riders);
							//alert("JSON.parse(illustrationObject.fundPortfolioName).index: "+JSON.parse(illustrationObject.fundPortfolioName).index);
							if(JSON.parse(illustrationObject.fundPortfolioName).index){
								$scope.selectedFundPortfolio=$scope.fundData[JSON.parse(illustrationObject.fundPortfolioName).index];

							}
							$scope.illustration.tempPaymentFrequency=$scope.frequencyData[illustrationObject.tempPaymentFrequency.index];
							$scope.illustration.paymentFrequency=$scope.frequencyData[illustrationObject.tempPaymentFrequency.index].value;
							
							$scope.funds=JSON.parse(illustrationObject.funds);
							$scope.topups=JSON.parse(illustrationObject.topups);
							//$scope.isCopySavedIllustrationValuesRequired=false;
						}
						
					};
					$scope.basicPlanDataChange=function(){
						$scope.updateSuperRiderData();
						for (var riderIndex = 0; riderIndex < $scope.riders.length; riderIndex++) {
						$scope.updateRiderData(riderIndex);
						}
					};
					$scope.riderDataChange=function(riderCode){
						if($scope.dependentRiderIndexList[riderCode]){
						for (var riderIndex in $scope.dependentRiderIndexList[riderCode]) {
							//alert("updating: "+$scope.dependentRiderIndexList[riderCode][riderIndex]);
						$scope.updateRiderData($scope.dependentRiderIndexList[riderCode][riderIndex]);
						}
						}
					};
					$scope.createRiderTable = function() {
						var riderHtmlData = '<div><table><tr><th>Code</th><th>Rider Name</th><th>Term</th><th>Sum Assured</th>';
						
						if($scope.template==2 ||$scope.template==3){
							riderHtmlData+='<th>Premium</th>';
						}
							
							riderHtmlData+='<th></th></tr>';
						
								for (var riderIndex = 0; riderIndex < $scope.riders.length; riderIndex++) {
								riderHtmlData += '<tr id="rider'
										+ riderIndex + '"';
							
									riderHtmlData += 'class="{{riders['+riderIndex+'].riderSelectedStatus?'+"'active'"+':'+"''"+'}}"';
								
								riderHtmlData +=' >';
								riderHtmlData += '<td>';
								if($scope.riders[riderIndex].name=="AmMedic Flexi Plus Rider"){
									
										riderHtmlData += '<div class="styled-select"><select ng-model="riders['+riderIndex+'].code"';
											riderHtmlData += 'ng-options="option for option in AmMedicFlexiPlusRiderCode">';

									riderHtmlData += '</select></div>';
									
								}else{
									riderHtmlData +=  $scope.riders[riderIndex].code;
								}
								
								riderHtmlData += '</td>';
								riderHtmlData += '<td>'
										+ $scope.riders[riderIndex].name
										+ '<button class="info_btn"></button></td>';
								
								riderHtmlData += '<td><input id="ridersCoverageTerm'+riderIndex+'" ng-model="riders['
								+ riderIndex
								+ '].coverageTerm" type="text" ng-change="riderDataChange('+"'"+ $scope.riders[riderIndex].code+"'"+');"/>{{riders['
								+ riderIndex
								+ '].coverageTermRange}}</td>';
								
								riderHtmlData += '<td><input id="ridersInsuredAmount'+riderIndex+'" ng-model="riders['
								+ riderIndex
								+ '].insuredAmount" type="text" ng-change="riderDataChange('+"'"+ $scope.riders[riderIndex].code+"'"+');"/>{{riders['
								+ riderIndex
								+ '].insuredAmountRange}}</td>';
								
								if($scope.template==2 ||$scope.template==3){
									riderHtmlData+='<td><input ng-model="riders['
										+ riderIndex
										+ '].premium" type="text"/></td>';
								}
								
								riderHtmlData += '<td ng-click="selectRider('
										+ riderIndex
										+ ');"><span></span></td>';
								riderHtmlData += '</tr>';

								
							

							

						}
						riderHtmlData += '</table></div>';
						var riderSectionElement = document
								.getElementById("riderSection");
						riderSectionElement.replaceChild(
								$compile(riderHtmlData)($scope)[0],
								riderSectionElement.childNodes[0]);
						
				};
				
				
	$scope.updateSuperRiderData=function(){
		$scope.dependentRiderIndexList={};
					for (var expressionIndex = 0; expressionIndex < $scope.riderExpressionArray.length; expressionIndex++) {
						
						if($scope.riderExpressionArray[expressionIndex]["Dependency"]){
							var isMatched=false;
							for(var tempIndex=0 ;tempIndex<$scope.riders.length; tempIndex++){
								if($scope.riders[tempIndex].code==$scope.riderExpressionArray[expressionIndex]["Dependency"]){
									
									
									if($scope.dependentRiderIndexList[$scope.riderExpressionArray[expressionIndex]["Dependency"]]){
										$scope.dependentRiderIndexList[$scope.riderExpressionArray[expressionIndex]["Dependency"]].push(expressionIndex);
									}else{
										$scope.dependentRiderIndexList[$scope.riderExpressionArray[expressionIndex]["Dependency"]]=[];
										$scope.dependentRiderIndexList[$scope.riderExpressionArray[expressionIndex]["Dependency"]].push(expressionIndex);

									}
									isMatched=true;
									if ($scope.riderExpressionArray[tempIndex].InsuredAmountmin) {
										$scope.riders[tempIndex].insuredAmount = $scope
												.resolveExpression($scope.riderExpressionArray[tempIndex].InsuredAmountmin);
									}
									if ($scope.riderExpressionArray[tempIndex].CoverageTermmin) {
										$scope.riders[tempIndex].coverageTerm = $scope
												.resolveExpression($scope.riderExpressionArray[tempIndex].CoverageTermmin);
									}
									//alert("Dependency: "+$scope.riderExpressionArray[riderIndex]["Dependency"]);
									//alert(JSON.stringify($scope.superRiderIndexList[$scope.riderExpressionArray[expressionIndex]["Dependency"]]));
									//$scope.riders[riderIndex].dependencyIndex=$scope.riderExpressionArray[riderIndex]["Dependency"];
								}
								
							}
							if(!isMatched){
								//alert("not matching");
								delete $scope.riders[expressionIndex];
								delete $scope.riderExpressionArray[expressionIndex];
							}
						}}
					
					
					//alert($scope.riderExpressionArray.length+"expression"+JSON.stringify($scope.riderExpressionArray));
					//alert($scope.riders.length+"riders"+JSON.stringify($scope.riders));
					//alert(JSON.stringify($scope.dependentRiderIndexList));
					//	alert("end");
				
	};
				
				$scope.updateRiderData=function(riderIndex){
					
				
							
							
							if ($scope.riderExpressionArray[riderIndex].CoverageTermmin
									&& $scope.riderExpressionArray[riderIndex].CoverageTermmax) {
								if ($scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmin) == $scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmax)) {
									$scope.riders[riderIndex].coverageTerm = $scope
											.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmin);
									$scope.riders[riderIndex].coverageTermRange="";
									document.getElementById('ridersCoverageTerm'+riderIndex).style.visibility="visible";
									document.getElementById('ridersCoverageTerm'+riderIndex).disabled=true;
									
								} else {
									$scope.riders[riderIndex].coverageTerm = $scope
											.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmin);
									$scope.riders[riderIndex].coverageTermRange='('
										+ $scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmin)
								+ '-'
								+ $scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmax)
								+ ')';
									document.getElementById('ridersCoverageTerm'+riderIndex).style.visibility="visible";
									document.getElementById('ridersCoverageTerm'+riderIndex).disabled=false;
									
								}
								
							}
							 else if ($scope.riderExpressionArray[riderIndex].CoverageTermmin) {
									$scope.riders[riderIndex].coverageTerm = $scope
											.resolveExpression($scope.riderExpressionArray[riderIndex].CoverageTermmin);
									
									document.getElementById('ridersCoverageTerm'+riderIndex).style.visibility="visible";
									//document.getElementById('ridersCoverageTerm'+riderIndex).disabled=true;
								} else {
									document.getElementById('ridersCoverageTerm'+riderIndex).style.visibility="hidden";
								
								}
							if ($scope.riderExpressionArray[riderIndex].InsuredAmountmin
									&& $scope.riderExpressionArray[riderIndex].InsuredAmountmax) {
								if ($scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmin) == $scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmax)) {
									$scope.riders[riderIndex].insuredAmount = $scope
											.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmin);
									$scope.riders[riderIndex].insuredAmountRange="";
									document.getElementById('ridersInsuredAmount'+riderIndex).style.visibility="visible";
									document.getElementById('ridersInsuredAmount'+riderIndex).disabled=true;
									
								} else {
									$scope.riders[riderIndex].insuredAmount = $scope
											.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmin);
									$scope.riders[riderIndex].insuredAmountRange='('
											+ $scope
													.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmin)
											+ '-'
											+ $scope
													.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmax)
											+ ')';
									document.getElementById('ridersInsuredAmount'+riderIndex).style.visibility="visible";
									document.getElementById('ridersInsuredAmount'+riderIndex).disabled=false;
								}
							} else if ($scope.riderExpressionArray[riderIndex].InsuredAmountmin) {
								$scope.riders[riderIndex].insuredAmount = $scope
										.resolveExpression($scope.riderExpressionArray[riderIndex].InsuredAmountmin);
							
								document.getElementById('ridersInsuredAmount'+riderIndex).style.visibility="visible";
								//document.getElementById('ridersInsuredAmount'+riderIndex).disabled=true;
							} else {
								
								document.getElementById('ridersInsuredAmount'+riderIndex).style.visibility="hidden";
							}
							
							
							
							
						


					
					
				};
				
					
					$scope.fillTopUps=function(){
						if($scope.template==1){
						var topupHtmlData='<div>';
						for(var topupIndex=1;topupIndex<=$scope.illustration.paymentTerm;topupIndex++ ){
							topupHtmlData+='<div class="topups_main_box">';
							topupHtmlData+='<label class="year">year</label>';
							topupHtmlData+='<div class="clear"></div>';
							topupHtmlData+='<div class="topups_box">';
							topupHtmlData+='<label>'+topupIndex+'</label>';
							topupHtmlData+='<input ng-model="topups['+topupIndex+']" type="number" ng-change="topupAmountChange('+topupIndex+');"/>';
							topupHtmlData+='</div>';
							topupHtmlData+='<div class="clear"></div>';
							topupHtmlData+='<label class="foramount">Amount</label>';
							topupHtmlData+='</div>';
						}
						topupHtmlData+='</div>';
						var topupSectionElement = document
						.getElementById("topupSection");
						topupSectionElement.replaceChild(
						$compile(topupHtmlData)($scope)[0],
						topupSectionElement.childNodes[0]);
						topupSectionElement.setAttribute("style","width:"+$scope.illustration.paymentTerm*100+"px;");
						
						}
					};
					$scope.selectRider = function(index) {
						//alert(JSON.stringify($scope.riders[index]));
						$scope.riders[index].riderSelectedStatus = !$scope.riders[index].riderSelectedStatus;
						if ($scope.riders[index].riderSelectedStatus) {
							document.getElementById("rider" + index).className = "active";
						} else {
							document.getElementById("rider" + index).className = "";
						}

					};
					
					$scope.fillSubProduct = function(selectedCategory) {
						if( $scope.productListWithProductCategory[selectedCategory])
						{
							if($scope.previousSelectedProductCategory){
								document.getElementById("category" + $scope.previousSelectedProductCategory).className = "normal";
							}
							document.getElementById("category" + selectedCategory).className = "active";
							$scope.previousSelectedProductCategory=selectedCategory;
						$scope.illustration.productCategory=selectedCategory;
						var subProductHtmlData = '<div>';
						var subProducts = $scope.productListWithProductCategory[selectedCategory];
						for (var index = 0; index < subProducts.length; index++) {

							// alert(JSON.stringify($scope.planExpression));
							// alert(subProducts[index].subMarketingName+":"+JSON.stringify(JSON.parse($scope.productList[subProducts[index].index].json.subProductDetailsJson)));
							$scope.subProductExpression = {
								"LifeAssuredAgemin" : "",
								"LifeAssuredAgemax" : "",
								"PayorAgemin" : "",
								"PayorAgemax" : ""
							};
							var productDetailsObj = JSON
									.parse($scope.productList[subProducts[index].index].json.subProductDetailsJson);
							var rules = {};
							if (productDetailsObj.transaction.products[0].subProducts[0].plans) {
								rules = productDetailsObj.transaction.products[0].subProducts[0].plans[0].rules.SetElement;
							} else {
								rules = productDetailsObj.transaction.products[0].subProducts[0].rules.SetElement;
							}

							for (var ruleIndex = 0; ruleIndex < rules.length; ruleIndex++) {
							//	if (rules[ruleIndex].applicableAttribute
							//			+ rules[ruleIndex].bound) {
									if (rules[ruleIndex].applicableAttribute == "LifeAssuredAge"
											|| rules[ruleIndex].applicableAttribute == "PayorAge") {
										rules[ruleIndex].ruleExpression ? $scope.subProductExpression[rules[ruleIndex].applicableAttribute
												+ rules[ruleIndex].bound] = rules[ruleIndex].ruleExpression
												: $scope.subProductExpression[rules[ruleIndex].applicableAttribute
														+ rules[ruleIndex].bound] = rules[ruleIndex].values.SetElement[0];
									}
								//}
							}
							$scope.isApplicable = false;
						//	alert("isPolicyOwner: "+$scope.illustration.isPolicyOwner);
							if ( !$scope.illustration.isPolicyOwner && $scope.illustration.policyOwnerAnb) {
								$scope.isApplicable = $scope
								.checkApplicability(
										$scope.illustration.anb,
										$scope.subProductExpression.LifeAssuredAgemin,
										$scope.subProductExpression.LifeAssuredAgemax)
								&& $scope
										.checkApplicability(
												$scope.illustration.policyOwnerAnb,
												$scope.subProductExpression.PayorAgemin,
												$scope.subProductExpression.PayorAgemax);
							} else {
								
								
								
								$scope.isApplicable = $scope
								.checkApplicability(
										$scope.illustration.anb,
										$scope.subProductExpression.LifeAssuredAgemin,
										$scope.subProductExpression.LifeAssuredAgemax);
							}
							if ($scope.isApplicable) {
								
								subProductHtmlData += '<input ng-model="selectedSubProductIndex" value="'
										+ subProducts[index].index
										+ '" type="radio" class="si_sub_product" id="si_sub_product'
										+ index
										+ '" name="sub_product_radio" ng-change="isCopySavedIllustrationValuesRequired=false;isPlanPageRefreshRequried=false;subProductSelected();"/>';
										//+ '" name="sub_product_radio" ng-change="subProductSelected();"/>';
								subProductHtmlData += '<label class="si_sub_product_box" for="si_sub_product'
										+ index + '">';
								subProductHtmlData += '<h5>'
										+ subProducts[index].subMarketingName
										+ '</h5>';
								subProductHtmlData += '<span class="selected"></span>';
								subProductHtmlData += '</label>';
							}
						}
						subProductHtmlData += "</div>";

						var subProductElement = document
								.getElementById("subProducts");
						subProductElement.replaceChild($compile(
								subProductHtmlData)($scope)[0],
								subProductElement.childNodes[0]);
					}else{
						$scope.openAlert("No Plans Available for this Category.");
					}
					};
					$scope.resolveExpression = function(expression) {
						return eval(expression);
					};
					$scope.checkApplicability = function(value, min, max) {

						if (min && max) {
							return (value >= eval(min) && value <= eval(max)) ? true
									: false;
						} else if (min) {
							return (value >= eval(min)) ? true : false;
						} else if (max) {
							return (value <= eval(max)) ? true : false;
						}

					};
					//$scope.isHomeFlow=true;
					$scope.fillProductCategory = function() {
						$scope.productListWithProductCategory = {};
						for (var productIndex = 0; productIndex < $scope.productList.length; productIndex++) {
							$scope.subProductIndexList[$scope.productList[productIndex].json.subProductCode]=productIndex;
							if($scope.productList[productIndex].json.subProductDetailsJson){
							if ($scope.productListWithProductCategory[$scope.productList[productIndex].json.productCategory]) {
								$scope.productList[productIndex].json.index = productIndex;
								$scope.productListWithProductCategory[$scope.productList[productIndex].json.productCategory]
										.push($scope.productList[productIndex].json);
							} else {
								$scope.productListWithProductCategory[$scope.productList[productIndex].json.productCategory] = [];
								$scope.productList[productIndex].json.index = productIndex;
								$scope.productListWithProductCategory[$scope.productList[productIndex].json.productCategory]
										.push($scope.productList[productIndex].json);
							}
							}
						}
					
						/*var selectDefault = true;
						var productCategoryhtmlData = "<div>";
						for ( var category in $scope.productListWithProductCategory) {
							if (selectDefault) {
								selectDefault = false;
								$scope.currentProductCategoryId = "category"
										+ category;
								productCategoryhtmlData += "<div id='"
										+ "category"
										+ category
										+ "' class='frstProdCategory_mrg' ng-click='fillSubProduct("
										+ '"' + category + '"' + ");'>";
								productCategoryhtmlData += "<label>" + category
										+ "</label>";
								productCategoryhtmlData += "</div>";
								$scope.fillSubProduct(category);

							} else {
								productCategoryhtmlData += "<div id='"
										+ "category"
										+ category
										+ "' class='secProdCategory_mrg' ng-click='fillSubProduct("
										+ '"' + category + '"' + ");'>";
								productCategoryhtmlData += "<label>" + category
										+ "</label>";
								productCategoryhtmlData += "</div>";
							}
						}
						productCategoryhtmlData += "</div>";
						// alert(productCategoryhtmlData);

						var productCategoryElement = document
								.getElementById("productCategory");
						productCategoryElement.replaceChild($compile(
								productCategoryhtmlData)($scope)[0],
								productCategoryElement.childNodes[0]);*/
						// alert(JSON.stringify($scope.productListWithProductCategory));
						
						if($scope.illustration.productCategory){
							
						//	if($scope.isHomeFlow){
								//this part of code will run only once in the controller.
								//so that we are preventing the code to rebuild the sub production selection from jsonstore data
								//when navigating to basic information page and coming back to product selection page.
							//	$scope.isHomeFlow=false;
							$scope.fillSubProduct($scope.illustration.productCategory);
							if($scope.illustration.subProductCode){
								
								$scope.selectedSubProductIndex=$scope.subProductIndexList[$scope.illustration.subProductCode];
								
								//$scope.subProductSelected();
								//$scope.loadTemplateForSavedProfile($scope.illustration.subProductCode);
								
								
							}
							//}
							
						}else{
							$scope.fillSubProduct('Protection');
						}
						
					};
					
					
					$scope.loadTemplateForSavedProfile=function(selectedProductCode){
					
						
						if(Object.keys($scope.riders).length>0){
							$scope.createRiderTable();
							
						}
						if($scope.illustration.paymentTerm){
							$scope.fillTopUps();
						}
						
					};
				
						$scope.saveIllustration=function(){	
						
					/*  if customer not present, show the message - can be saved in profile status page
					 *  if profile name not present , show the popup to enter profile anme
					 *   once value entered, popup will call this function again
					 *   query for profile name present in cfff, if not present,  insert cff record  and illustration
					 *   query if illustration record is already present in json store, if yes then update, else insert
					 */	 
							$scope.illustration.riders=JSON.stringify($scope.riders);
							$scope.illustration.fundPortfolioName=JSON.stringify($scope.selectedFundPortfolio);
							$scope.illustration.funds=JSON.stringify($scope.funds);
							$scope.illustration.topups=JSON.stringify($scope.topups);
							//alert("data to save: "+JSON.stringify($scope.illustration));
							if($scope.customer.id){
								
								if(!$scope.illustration.profileName){
									
									$scope.openPopup("Please enter a profile name");
									
								}else{
							
							//check for cff profile name then update/insert only illustration record / insert both cff and illustration
							
							$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.illustration.profileName}];
					   	    $jsonStore.retriveData($scope.cffCollectionName,$scope.queryPart,
					   				   function (result){
					   	   //update/insert only illustration record 	
					   		if(result.length>0)
					   		{
					   			$rootScope.cffObject={"_id":result[0]._id,"json":$scope.cff};
					   		//check for illustration proposalId in table then update/insert.
					   			$scope.checkAndUpdateIllustration();
					   			
							//insert both cff and illustration records	
				 	   		}else{
				 	   			
				 	   		
							$scope.cff.profileName=$scope.illustration.profileName;
							$scope.cff.dob=$scope.customer.dob;
							$scope.cff.id=$scope.customer.id;
							$scope.cff.cffStatus='Not Started';
							$scope.cff.createdDate=systemDate;
							$scope.cff.updatedDate=systemDate;
							
							$jsonStore.insertData($scope.cffCollectionName,$scope.cff,function (s){
						//	alert(JSON.stringify("cffRecord Inserted"+s));
							
							
							$scope.checkAndUpdateIllustration();
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
							$rootScope.illustrationObject={"_id":null,"json":$scope.illustration};
							$scope.openAlert("Customer not present, data can be saved in profile status by selecting/creating customer.");
							
						}};	
					
					
					
					$scope.checkAndUpdateIllustration=function(){

						$scope.queryPart= [{"id":$scope.customer.id,"profileName":$scope.illustration.profileName,"proposalId":$scope.illustration.proposalId}];
				   	    $jsonStore.retriveData($scope.illustrationCollectionName,$scope.queryPart,
				   				   function (result){
				   	    //	alert("query result: "+JSON.stringify(result));
				   	    	if(result.length>0)
					   		{
				   	    		
								$scope.illustration.lastUpdatedDate=systemDate;
				   	    		$scope.dataToUpdate= [{_id:result[0]._id, json: $scope.illustration}];
								$jsonStore.updateData($scope.illustrationCollectionName,$scope.dataToUpdate,function (s){
									$scope.openAlert("Sales Illustration Updated Successfully.");
									
									$rootScope.illustrationObject={"_id":"saved","json":$scope.illustration};
								}
								, function  (error){
									
									$logger.log("ERROR",JSON.stringify(error));
								}) ;
				   	    		
					   		}else{
					   			$scope.illustration.createdDate=systemDate;
					   			$scope.illustration.lastUpdatedDate=systemDate;
					   			$jsonStore.insertData($scope.illustrationCollectionName,$scope.illustration,function (s){
									
									$scope.openAlert("Sales Illustration Saved Successfully.");
									
									$rootScope.illustrationObject={"_id":"saved","json":$scope.illustration};
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
					
				$scope.updatePremiumPerMode=function(outputData){
					var permiumPerMode=outputData.CalculationOutput.Calculation.Policy.Features.PremiumPerMode.SetElement;
					var coveragePremium=outputData.CalculationOutput.Calculation.Policy.Links.Coverage.Coverage;
					//alert("coverage: "+JSON.stringify(coveragePremium));
					for(var premiumIndex=0;premiumIndex<permiumPerMode.length;premiumIndex++){
						var Frequency=permiumPerMode[premiumIndex].Frequency;
						var Premium=permiumPerMode[premiumIndex].Premium;
						//alert(Frequency+":premium:"+Premium);
						if(Frequency==1){
							
							$scope.illustration.yearlyPremium=Premium;
							
						}
						else if(Frequency==2){
							$scope.illustration.halfYearlyPremium=Premium;
							
							
						}else if(Frequency==4){
							$scope.illustration.quarterlyPremium=Premium;
							
							
						}else if(Frequency==12){
							
							$scope.illustration.monthlyPremium=Premium;
						}
						
					}
					for(var coverageIndex=1; coverageIndex<coveragePremium.length; coverageIndex++){
						$scope.riders[$scope.superRiderIndexList[coveragePremium[coverageIndex].Features.CoverageCode]].premium=coveragePremium[coverageIndex].Features.PremiumPerMode.SetElement[0].Premium;
					}
					if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					}
					
				};	
					
					
$scope.pxInitialize=function(){
	document.getElementById("loader").style.display="block";
	if(!$rootScope.deployedPackages["initialize"]){

	$PxCalculator
	.initialize(
			$FileUtils
					.getProductXpressInstallPath($FileUtils.relativePath),
			function(s) {
				document.getElementById("loader").style.display="none";
				alert("initialize success:"
						+ JSON.stringify(s));
				$rootScope.deployedPackages["initialize"]="true";

				$scope.pxLoad();

			}, function(e) {
				document.getElementById("loader").style.display="none";
				alert("initialize error:"
						+ JSON.stringify(e));
			});
	}else{
		$scope.pxLoad();
	}
};
$scope.pxLoad=function(){
	document.getElementById("loader").style.display="block";
	if(!$rootScope.deployedPackages[$scope.productList[$scope.selectedSubProductIndex].json.subDeploymentPackageName]){
		$PxCalculator
		.loadDeploymentPackage(
				$FileUtils
						.getProductXpressProductPath($FileUtils.relativePath)
						+ $scope.productList[$scope.selectedSubProductIndex].json.subDeploymentPackageName
						+ ".pxdpz",
				function(s) {
					document.getElementById("loader").style.display="none";
					alert("load success:"
							+ JSON
									.stringify(s));
					$rootScope.deployedPackages[$scope.productList[$scope.selectedSubProductIndex].json.subDeploymentPackageName]="true";
					
					$scope.pxCalculate();
				
				},
				function(e) {
					document.getElementById("loader").style.display="none";
					alert("load error:"
							+ JSON
									.stringify(e));
				});
			
		}
		else{
			$scope.pxCalculate();
	}
	
};			
$scope.pxCalculate=function(){
	document.getElementById("loader").style.display="block";
	$PxCalculator
	.calculate(
			$scope.inputXmlData,
			function(
					s) {
				document.getElementById("loader").style.display="none";
				if(s.CalculationOutput.Error){
					alert("Error:"
							+ JSON
									.stringify(s.CalculationOutput.Error));
					console
							.log("Error:"
									+ JSON
											.stringify(s.CalculationOutput.Error));
				}else if(s.CalculationOutput.Calculation.Policy.Validations.All_validations){
					
					if(s.CalculationOutput.Calculation.Policy.Validations.All_validations.ValidationMessage && s.CalculationOutput.Calculation.Policy.Validations.All_validations.ValidationMessage.Message.__text){
						alert(s.CalculationOutput.Calculation.Policy.Validations.All_validations.ValidationMessage.Message.__text);
						console
								.log("Error:"
										+s.CalculationOutput.Calculation.Policy.Validations.All_validations.ValidationMessage.Message.__text);
					}
					else{
						alert(JSON.stringify(s.CalculationOutput.Calculation.Policy.Validations.All_validations));
					}
					
				}else{
				
				//alert("calculator success:"
					//	+ JSON
							//	.stringify(s));
				console
						.log("calculator success:"
								+ JSON
										.stringify(s));
				$scope.updatePremiumPerMode(s);
				$scope.pxScope.createTable(s);
				$scope.pdfTableData=s;
				$scope.formGraph();
				}},
			function(
					e) {
					document.getElementById("loader").style.display="none";
				alert("calculator error:"
						+ JSON
								.stringify(e));
			});
};
				
$scope.calculate=function(){

	
	
	var totalFundPercentage=0;
	for (var fundIndex = 0; fundIndex < $scope.funds.length; fundIndex++) {
		if($scope.funds[fundIndex].percentage){
			totalFundPercentage+= $scope.funds[fundIndex].percentage;
			
		}
		
	}
	
	if(totalFundPercentage==100 || $scope.template!=1){
	$scope.formInputXml();
	//alert($scope.inputXmlData);
	console.log("calculator input:" + $scope.inputXmlData);
	$scope.pxInitialize();

	
	
}else{
	alert("Total Fund Percentage should be 100% for this calculation.");
}
};
					$scope.yearcalculation = function(dob, type) {

						$scope.dobYear = new Date(dob);
						$scope.today = new Date();
						$scope.diff = $scope.today - $scope.dobYear;
						$scope.days = ($scope.diff / (1000 * 60 * 60 * 24));
						$scope.years = $scope.days / 365;
						if (type == "policyOwner") {

							$scope.illustration.policyOwnerAnb = Math
									.ceil($scope.years);
							$scope.isPlanPageRefreshRequried=true;
						} else {
							$scope.illustration.anb = Math.ceil($scope.years);
							$scope.isPlanPageRefreshRequried=true;
							// $scope.$digest();
						}
						// anb is not in the customer collecton, so it is not
						// associated to customer like customer.anb
					};
					
					/*
					myHeight = document.body.offsetHeight;
					var content_elems = document
							.getElementsByClassName('cff_main_height	');
					for (var i = 0; i < content_elems.length; i++) {
						content_elems[i].style.height = (myHeight - 290 + "px");
					}  */

					// $scope.createNew = function() {

					// $location.path("/createNew");
					// }
					// $scope.customer_advice_page = function() {
					// $location.path("/customerAdvice");
					// }
					// $scope.my_financial_page = function() {
					// $location.path("/myFinancial");
					// }
					// $scope.sales_basic_plan_page = function() {
					// $location.path("/salesBasicPlan");
					// }
					// $scope.home_page = function() {
					// $location.path("/homePage");
					// }

					// initiate an array to hold all active tabs
					$scope.activeTabs = [];

					// check if the tab is active
					$scope.isOpenTab = function(tab) {
						// check if this tab is already in the activeTabs array
						if ($scope.activeTabs.indexOf(tab) > -1) {
							// if so, return true
							return true;
						} else {
							// if not, return false
							return false;
						}
					};

					// function to 'open' a tab
					$scope.openTab = function(tab) {
						// check if tab is already open
						if ($scope.isOpenTab(tab)) {
							// if it is, remove it from the activeTabs array
							$scope.activeTabs.splice($scope.activeTabs
									.indexOf(tab), 1);
						} else {
							// if it's not, add it!
							$scope.activeTabs.push(tab);
						}
					};
					$scope.openTab('tab one');
					// var si_cur_tab="si_tab1_body";
					// var si_foot_tab="si_tab1";
					// $scope.siTabClick = function(id) {
					// var si_foot_id = id;
					// var si_clicked_id = (si_foot_id+"_body");
					// document.getElementById('si_first_part').style.display =
					// "none";
					// document.getElementById(si_foot_tab).setAttribute("class",
					// "visited");
					// document.getElementById(si_foot_id).setAttribute("class",
					// "active");
					// document.getElementById(si_cur_tab).style.display =
					// "none";
					// document.getElementById(si_clicked_id).style.display =
					// "block";
					// si_cur_tab = si_clicked_id;
					// si_foot_tab = si_foot_id;
					// }

					var si_foot_tab = "si_tab1";
					var cur_si_body = "si_tab1_body";
					
					$scope.si_select_customer = function() {
						// document.getElementById('si_tab2_body').style.display
						// = "block";
						// document.getElementById(cur_si_body).style.display =
						// "none";
						// document.getElementById(si_foot_tab).setAttribute("class",
						// "visited");
						// document.getElementById('si_tab2').setAttribute("class",
						// "visited");
						// cur_si_body = "si_tab2_body";
						// si_foot_tab = "si_tab2";
					};
					$scope.si_basic_info = function() {
						document.getElementById('si_tab1_body').style.display = "block";
						document.getElementById(cur_si_body).style.display = "none";
						document.getElementById(si_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('si_tab1').setAttribute(
								"class", "active");
						si_foot_tab = "si_tab1";
						cur_si_body = "si_tab1_body";
					};
					$scope.si_select_product = function(para) {
if(para=="fillProduct"){
						$jsonStore
								.retriveAllData(
										$scope.productListCollectionName,
										function(result) {

											$scope.productList = result;
											// alert(JSON.stringify($scope.productList));
											$scope.fillProductCategory();
										}, function(error) {
											$logger.log("ERROR", JSON
													.stringify(error));
										});
						/*var productCategoryElement = document
								.getElementById("productCategory");
						productCategoryElement.replaceChild($compile(
								"<div></div>")($scope)[0],
								productCategoryElement.childNodes[0]);*/
						var subProductElement = document
								.getElementById("subProducts");
						subProductElement.replaceChild($compile("<div></div>")(
								$scope)[0], subProductElement.childNodes[0]);
					}
						document.getElementById('si_tab2_body').style.display = "block";
						document.getElementById(cur_si_body).style.display = "none";
						document.getElementById(si_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('si_tab2').setAttribute(
								"class", "active");
						cur_si_body = "si_tab2_body";
						si_foot_tab = "si_tab2";
					};
					//*************************Email plugin added*******************//
					// TBD Custmer name to be updated properly
					$scope.email=function()
					{
						if($rootScope.customerObject.customerName==$scope.illustration.customerName)
							{
						$FileUtils.email("$rootScope.customerObject.email", "selected Customer","email","", function(e){},function(error){});
							 }
						else
							{
							$FileUtils.email("", "Not Selected Customer","email","", function(e){},function(error){});
							}
							};
					
					//****************************************************************//
					$scope.subProductSelected=function(){
						
						$scope.planOptionData=[];
						
						//resetting premium data
						$scope.illustration.yearlyPremium="";
						$scope.illustration.halfYearlyPremium="";
						$scope.illustration.quarterlyPremium="";
						$scope.illustration.monthlyPremium="";
						

						$scope.illustration.planCode="";
						$scope.illustration.planName="";
						$scope.illustration.coverageTerm="";
						$scope.illustration.paymentTerm="";
						$scope.illustration.totalPremium="";
						$scope.illustration.insuredAmount="";
						$scope.illustration.insurancePortion="";
						//alert("reseted: "+JSON.stringify($scope.illustration));
						
						
						$scope.riders=[];
						$scope.funds=[];
						$scope.topups={};
						$scope.selectedFundPortfolio={};
					
						$http.get('json/salesIllustrationTemplates/basic_'+JSON.parse($scope.productList[$scope.selectedSubProductIndex].json.subProductDetailsJson).transaction.products[0].subProducts[0].subProductCode+'.html').then(function(values)
								{
									//alert(values.data);
									var basicPlanSectionElement = document
									.getElementById("sales_plan_body");
									basicPlanSectionElement.replaceChild(
									$compile(values.data)($scope)[0],
									basicPlanSectionElement.childNodes[0]);
									var productDetailsObj= JSON.parse($scope.productList[$scope.selectedSubProductIndex].json.subProductDetailsJson);
									var plan={};
									if(productDetailsObj.transaction.products[0].subProducts[0].subProductCode=="ULLA5" || productDetailsObj.transaction.products[0].subProducts[0].subProductCode=="ULRP6"){
										$scope.template=1;
										$scope.selectedFundPortfolio=$scope.fundData[0];
									}else if(productDetailsObj.transaction.products[0].subProducts[0].subProductCode=="ALSB" || productDetailsObj.transaction.products[0].subProducts[0].subProductCode=="BTAS3G1WPA"){
										$scope.template=2;
									}
									else if(productDetailsObj.transaction.products[0].subProducts[0].subProductCode=="BTASGP1EPA" ){
										$scope.template=3;
									}
									
									if (productDetailsObj.transaction.products[0].subProducts[0].plans) {
										
										for(var planIndex=0;planIndex<productDetailsObj.transaction.products[0].subProducts[0].plans.length;planIndex++){
											$scope.planOptionData.push({name:productDetailsObj.transaction.products[0].subProducts[0].plans[planIndex].marketingName,value:productDetailsObj.transaction.products[0].subProducts[0].plans[planIndex]});
											//alert(productDetailsObj.transaction.products[0].subProducts[0].plans[planIndex].marketingName);
										}
										
										$scope.tempPlanOption=$scope.planOptionData[0];
										$scope.illustration.planOption=$scope.planOptionData[0].name;
										plan = productDetailsObj.transaction.products[0].subProducts[0].plans[0];
										
									} else {
										plan = productDetailsObj.transaction.products[0].subProducts[0];
										
									}
									$scope.illustration.subProductName=productDetailsObj.transaction.products[0].subProducts[0].subProductName;
									$scope.illustration.subProductCode=productDetailsObj.transaction.products[0].subProducts[0].subProductCode;
									$scope.PlanData=plan;
									$scope.iscreateRiderTableRequired=true;
									$scope.fillPlanPage();
									//alert("reseted2: "+JSON.stringify($scope.illustration));
									
								});
					/*	if( JSON.parse($scope.productList[$scope.selectedSubProductIndex].json.subProductDetailsJson).transaction.products[0].subProducts[0].subProductCode=="ULLA5"){
							$scope.template1=true;
							$scope.template2=false;
							if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
							    $scope.$apply();
							}
						}else{
							$scope.template1=false;
							$scope.template2=true;
							if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
							    $scope.$apply();
							}
						}*/
					};
					
					
					  $scope.goToProfileStatusFromIllustration=function(){
				    	 
					    //set the Illustration object to rootScope illustrationObject
					  if($rootScope.illustrationObject._id==undefined)
						 {
						   $rootScope.illustrationObject._id=null;
						 }
					 
					   $rootScope.illustrationObject.json=$scope.illustration;
				    	  
				   	   $rootScope.$Footer.profileStatus('commonProfile', 'salesIllustration');
				    	 
					};
					
					$scope.topupAmountChange=function(index){
						$scope.topups[index]==null ? (delete $scope.topups[index]) : ($scope.topups[index]=$scope.topups[index]);
					};
					
					$scope.si_plan = function() {
						if($scope.isPlanPageRefreshRequried){
						//	alert("isPlanPageRefreshRequried");
						$scope.subProductSelected();
						}
						// alert(JSON.stringify(JSON.parse($scope.productList[$scope.selectedSubProductIndex].json.subProductDetailsJson)));
						// $scope.fillPlanPage($scope.productList[$scope.selectedSubProductIndex].json);
						document.getElementById('si_tab3_body').style.display = "block";
						document.getElementById(cur_si_body).style.display = "none";
						document.getElementById(si_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('si_tab3').setAttribute(
								"class", "active");
						si_foot_tab = "si_tab3";
						cur_si_body = "si_tab3_body";

					};
					$scope.si_illustration = function() {
						document.getElementById('si_tab4_body').style.display = "block";
						document.getElementById(cur_si_body).style.display = "none";
						document.getElementById(si_foot_tab).setAttribute(
								"class", "visited");
						document.getElementById('si_tab4').setAttribute(
								"class", "active");
						si_foot_tab = "si_tab4";
						cur_si_body = "si_tab4_body";
					};
					
				
					if($rootScope.$Footer.presubFooter == "illustration")
					{
						document.getElementById('si_tab1_body').style.display = "none";
						document.getElementById('si_tab4_body').style.display = "block";
						cur_si_body = "si_tab4_body";
						si_foot_tab = "si_tab4";
						cur_si_body = "si_tab4_body";
					}
					$scope.openPopup=function(message){
						$scope.content="<p>"+message+"</p>";
						if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						    $scope.$apply();
						}
						document.getElementById('sales_profile_status_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.closePopup=function(save){
						if(save && save=="saveIllustration"){
							$scope.saveIllustration();
						}
						
						document.getElementById('popup_overlay').style.display = "none";
						document.getElementById('sales_profile_status_popup').style.display = "none";
					};
					$scope.openAlert=function(message){
						$scope.content="<p>"+message+"</p>";
						if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						    $scope.$apply();
						}
						document.getElementById('sales_alert_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.closeAlert=function(){
						
						document.getElementById('popup_overlay').style.display = "none";
						document.getElementById('sales_alert_popup').style.display = "none";
					};
					
					 // /********************Occuaption Search*******************************/
					 $scope.search={
							 category:"",
							 searchText:"",
							 searchSelect:""
					 };
					 $scope.categoryArray;
					 $scope.occuaptionArray;
					 $Occupation.setOccupation(function(val1,val2){
					 $scope.categoryArray=val1;
					 $scope.occuaptionArray=val2;
					 $scope.numberOfJobs=val2.length;
					 
					 });
					 
					 
					 $scope.search=function(arg){
					
						if($scope.search.category==null || $scope.search.category== "undefined")
							{
						var dummyArray=[];
						 var len=arg.length;
						 $Occupation.setOccupation(function(val1,val2){
							for(var index=0; index<val2.length; index++)
								{
								 var part=val2[index].substring(0,len);
								 if ((part.toLowerCase())==(arg.toLowerCase())) {
								    
									dummyArray.push(val2[index]);
								 }
								
								}
							 $scope.occuaptionArray=dummyArray;
							 $scope.numberOfJobs=dummyArray.length;
						 });
					 }
						else
							{
							var dummyArray=[];
							 var len=arg.length;
							$Occupation.setOccupationName($scope.search.category,function(val){
						  		   for(var index=0; index<val.length; index++)
									{
									 var part=val[index].substring(0,len);
									 if ((part.toLowerCase())==(arg.toLowerCase())) {
									   
										dummyArray.push(val[index]);
									 }
									
									}
								 $scope.occuaptionArray=dummyArray;
								 $scope.numberOfJobs=dummyArray.length;
							});
						  }
					 };
					 
					 $scope.searchByCategory=function(arg){
						 
						 var dummyArray=[];
						 if($scope.search.searchText!==null && $scope.search.searchText!==undefined){
						 var len=$scope.search.searchText.length;
						 }
						 $Occupation.setOccupationName(arg,function(val){
				  		
				  		  	 if($scope.search.searchText)
				  		  		 {
				  		   for(var index=0; index<val.length; index++)
							{
							 var part=val[index].substring(0,len);
							 if ((part.toLowerCase())==($scope.search.searchText.toLowerCase())) {
							    
								dummyArray.push(val[index]);
							 }
							
							}
						    $scope.occuaptionArray=dummyArray;
						    $scope.numberOfJobs=dummyArray.length;
				  		  		 }
				  		  	 else
				  		  		 {
				  		  		$scope.occuaptionArray=val;
				  		  	 $scope.numberOfJobs=val.length;
				  		  		 }
				  		  	 
				     	 });
					 };
					
					
		//*****************************************************************************************************************//			
					///***************************selecting job************************/
						$scope.setData=function(arg)
						{
							if($scope.selectedOccupation==1){
							 $scope.illustration.occupation=arg;
							 $Occupation.setOccupationDetails(arg,function(val1,val2){
							 $scope.illustration.occupationClass=val1;
							 });
							}else{
								 $scope.illustration.policyOwnerOccupation=arg;
								 $Occupation.setOccupationDetails(arg,function(val1,val2){
								 $scope.illustration.policyOwnerOccupationClass=val1;
								 });
							}
							
						};
					// /****************************************************************/  
						 
					// popup starts here 
					
					$scope.search_popup_open = function(){
						document.getElementById('search_oocu').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
					$scope.search_occu_close = function(){
						document.getElementById('search_oocu').style.display = "none";
						document.getElementById('popup_overlay').style.display = "none";
						document.getElementById('occupaton_text').focus();
					};
					
					$scope.save_popup_open = function(){
						if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
						    $scope.$apply();
						}
						document.getElementById('save_popup').style.display = "block";
						document.getElementById('popup_overlay').style.display = "block";
					};
				$scope.delete_save_close=function(){
				document.getElementById('save_popup').style.display = "none";
					document.getElementById('popup_overlay').style.display = "none";
				   
				};
					// popup ends here 
				document.getElementById("settings_img").setAttribute("class","hd_settings");	
				
				//pdf generation
				$scope.formPdfFunds=function(){
					var formPdfFundsData=[];
					var formPdfFundsFlag=true;
					if($scope.funds.length>0){
					
					for(var fundIndex=0; fundIndex<$scope.selectedFundPortfolio.funds.length;fundIndex++){
						if(formPdfFundsFlag){
							formPdfFundsData.push([ 'Fund Type', ':', $scope.funds[fundIndex].percentage+'% '+$scope.funds[fundIndex].fundName]);
							formPdfFundsFlag=false;
						}else{
							formPdfFundsData.push([ '', '', $scope.funds[fundIndex].percentage+'% '+$scope.funds[fundIndex].fundName]);

						}
					}
					
					
					
					return {
						 
						style: 'tableFund',
						table: {
							widths: [ 150, 10, 250, 250],
							body: 	formPdfFundsData
								
							},
						layout: 'noBorders'
					};
					}
					else{
						return {
							 
						};
						
					}
					
					
					
					
				};
				$scope.formPdfRiders=function(){
					return "";
				};
				$scope.generatePdf=function(){
					var docDefinition = { 
							
							footer: function(page, pages) { 
							return { 
						
					        columns: [ 
								{
										text:"Prepared by : Vald Vaynrokh \n Agent Code : AG1002001 \nDate Prepared : 17 December 2014"
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
					        margin: [40, 10, 20, 10]
					    };
					},
						pageOrientation : 'landscape', pageSize: 'A3',
						content: 	[
							
							{
								columns: [
									{
										image: 'bigLogo',
										alignment:'center'
									}
								]
							},
							{text:'Specially Prepared for \n SAMPLE CUSTOMERTHIRD',margin: [100, 40, 100, 40], fontSize: 25,alignment:'center'},
							{text:'Proposed Plan \n AmMetLife Lifestyle',margin: [100, 40, 100, 40], fontSize: 25,alignment:'center'},
							{text:'Presented By: Vald Vaynrokh \n Date Prepared: 17 December 2014',margin: [100, 40, 100, 40], fontSize: 25,alignment:'center'},
							/*{
								columns: [
								
									{
										pageBreak: 'before',
										/*text: 
										
											[
												'AmMetlife Insurance Berhad(15743-P) \n',
												'(',
												{ text: 'formerly known as Amlife Insurance Berhad', italics: true, fontSize: 10},
												') Licensed insurer \n Level 19,Menera AmMetlife. No.1,Jalan Lumut,50400 Kaula Lampur'
											],
										image: 'address',
										width: 400,
										height: 80,
										margin: [0, 0, 0, 10]
									},
									{
										image: 'metLifeLogo',
										width: 200,
										height: 26,
										margin: [0, 20, 100, 0],
										alignment: 'right'
									}
								]
							}, */
							{
								pageBreak: 'before',
								style: 'tableExample',
								table: {
									widths: [870, 230],
									body: [
											[{image: 'address', width: 380, height: 75,}, {image: 'metLifeLogo', 		width: 200, height: 26, alignment: 'right', margin:[0, 50, 0, 0]} ],
										]
									},
								layout: 'noBorders'
							},
							
							{
								columns:
								[
									{
										image: 'line',
										width: 1100,
										height: 3
									}
								]	
							},
							{
								columns:
								[
									{
										image: 'blackline',
										width: 1100,
										height: 0.2,
										margin: [0, 20, 0, 2]
									},
								]	
							},
							{
								style: 'tableExample',
								table: {
									widths: [250, 10, 400, 150, 20, 150],
									body: [
											[ 'Life Assured', ':', $scope.illustration.customerName+" ", 'Payor', ':-', $scope.illustration.policyOwnerName+" " ],
											[ 'Gender', ':', $scope.illustration.gender+" ", 'Gender', ':-', $scope.illustration.policyOwnerGender+" "],
											[ 'Primary Plan', ':', $scope.illustration.planName+" ", 'Age Next Birthday', ':-', $scope.illustration.policyOwnerAnb+" "],
											[ 'Plan Type', ':', 'testPlan', 'Relationship', ':-', $scope.illustration.policyOwnerRelationship+" "],
											[ 'Age Next Birthday', ':', $scope.illustration.anb+" ", '', '', '' ],
											[ 'Job Class', ':', $scope.illustration.occupationClass+" ", '', '', '' ],
											[ 'Smoker', ':', $scope.illustration.smokingHabit+" ", '', '', '' ]
															]
									},
								layout: 'noBorders'
							},	

							{
								
								columns:
								[
									{
										image: 'blackline',
										width: 1100,
										height: 0.5,
										margin: [0, 0, 0, 5]
									},
								]	
							},
							$scope.formPdfFunds(),
							{
								style: 'tableRider',
								table: {
									widths: [350, 175, 175, 175, 185],
									body: [
											[ {text:'Plan'}, 'Insured Life', 'Coverage Term', 'Sum Assured', 'Premium Payable'],
											[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'ULLA5', 'AmMetLife Lifestyle'],
																[ '', {text:'Protection Portion Premium RM1,200\nInvestment Portion Premium RM1,800', style: 'riderfirstcol'}]
																
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '62', '100,000', '300,000'],
											[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'ABB+', 'Accident Benefit Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
											[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-'],
												[ [
												{
													style: 'tableRiderInner',
													table: {
													widths: [80, 250],
														body: [
																[ 'AMF3+', 'AmMedic Flexi Plus Rider']
															  ]
															},
															layout: 'noBorders'
												}], 'Life Assured', '28', '5,000', '-']
										]
									}
							},
							{	
								style: 'planTable',		
								table: {
								widths:  [305, 90, 90, 90, 90, 90, 90, 90, 90],
								body: [
										['Plan', {text:'Occupation Loading', colSpan: 4}, {}, {}, {}, {text:'Occupation Loading', colSpan: 4}, {}, {}, {}],
										[{text:'AMF3+ AmMedic Flexi Plus Rider',  rowSpan: 2}, '%', 'Term', 'Per 1000 SA', 'Term', '%', 'Term', 'Per 1000 SA', 'Term'],
										[{}, '%', 'Term', 'Per 1000 SA', 'Term', '%', 'Term', 'Per 1000 SA', 'Term']
									  ]
									}
							},
							{	
								style: 'modeTable',
								table: {
								widths:  [305, 189, 189, 189, 189],
								body: [
										['Mode of Payment', 'Monthly (RM)', 'Quarterly (RM)', 'Half Yearly (RM)', 'Yearly (RM)'],
										['Monthly Premium', '250.00', '-', '-', '-'],
										['Monthly Salary Deduction Charges', '250.00', '-', '-', '-'],
										['Total Monthly Premium', '250.00', '-', '-', '-']
									  ]
									}
							},
							'The following table has nothing more than a body array',
							{
								style: 'tableDef',
								table: {
										body: [
												['ULLA5', 'AmMetLife Lifestyle is a regular premium investment-linked plan expiring at age 99 that provides:\n1) The Basic Sum Assured upon first diagnosis of a critical illness with the policy remaining in force until the death or total and permanent disability (TPD) of the insured.\n2) The Basic Sum Assured and the fund value upon death or total and permanent disability of the insured (TPD coverage is up to age 65), thereby ending the policy. Upon maturity, the fund value will be payable. Surrender or partial withdrawal of funds can be made to the plan at any time. Upon full surrender, the fund value is paid and the plan terminates.'],
												['ABB+', 'This rider provides additional protection to meet the financial consequences of sudden accidental death. The percentage of Sum Assured Payable will be based on the schedule of Benefits provided by the company.'],
												['AMF3+', 'age 80. There are 4 plans: AMF1+, AMF2+, AMF3+, AMF4+ with varying benefit amounts according to the plan selected. Note that the charges upon renewal depend on attained age.'],
												['CAIB+', 'This rider provides comprehensive coverage for death or injuries resulting within 90 days from an accident.'],
												['HBR+', 'This benefit is payable as a daily fixed cash allowance upon hospitalization in a Government hospital or any licensed hospital approved by the company for a maximum period of 52 weeks with coverage expiring at age 60.'],
												['MCIU+', 'This rider provides Critical Illness protection up to age 80 from seven (7) CI groups with a guaranteed lump sum benefit paid if you are diagnosed with any one of the Core Critical Illnesses, Tier 1 or Tier 2 (refer to the Benefits Schedule) during the term of the policy.'],
												['DWPW+', 'In the event the life assured is diagnosed of a critical illness within the selected term, this rider will waive future premiums of the basic policy and level term rider (whichever is applicable) up to the term of this rider or death of the life assured, whichever is earlier.'],
												['DDIB+', 'This rider provides an extended series of annual payment of 10% of the Initial Sum Assured after the full payment of Total and Permanent Disability (TPD) Benefit before age 65. Payments will continue up to attained age 70 and premium will be waived during the continuance of TPD.'],
												['RICIR01TNU', 'This rider provides additional protection against 36 critical illnesses. If Life Assured is diagnosed of one of the 36 critical illnesses prior to age 80, or within the rider term, whichever is earlier, the sum assured of this rider will be payable in one lump sum. Please refer to the Sales Illustration or policy contract for list of 36 critical illnesses.'],
												['LTR+', 'This rider pays a pre-specified sum assured in the event of death of the life assured prior to age 70, or Total and Permanent disability prior to age 65 and within the selected term.'],
											  ]
										},
										layout: 'noBorders'
							},	
							{
								style: 'redText',
								table: {
								widths: [1100],	
											body: [
														['THIS IS AN INSURANCE PRODUCT THAT IS TIED TO THE PERFORMANCE OF THE UNDERLYING ASSETS, AND IS NOT A PURE INVESTMENT PRODUCT SUCH AS UNIT TRUSTS.'],
														
													]
										}
							},	
							{ text: 'IMPORTANT', decoration: 'underline', style:'staticText' },
							{text:'You should read this illustration together with the fund fact sheet(s) of the investment-linked fund(s) which you have chosen. The fund fact sheet contains all the important information that you will need to know regarding the investment-linked fund(s). \n\nYour annual premium will be divided into an insurance portion and an investment portion. Out of the insurance portion, 50% and 55% for the first two policy years respectively is allocated towards the purchase of units. Out of the investment portion and top up premium, 95% is allocated towards the purchase of units. You can maximise your investment value by minimising your annual premium and maximising your top ups.\n'},
							{
								ul: [
									'Minimum Annual Premium Required : RM1,800',
									'Minimum Annual Insurance Portion of Premium Required : RM1,200',
									'Minimum Top-Ups Allowed : RM50',
								]
							},
							{text:'\nTherefore, if your purchase involves a premium of sizeable amount say RM5,000 and above, you should consider purchasing single premium investment-linked policy (rather than a regular premium policy) as single premium plans offer better allocation rates for investment. \n\nYour investment-linked policy will lapse/terminate if there is not enough units in your fund to pay the charges. Your units may not be enough over the years due to:\n'},
							{
								ul: [
									'High insurance charges if you buy many riders, and especially if the charges are increasing over time as you get older.',
									'Poor investment return',
									'Premium holiday - i.e. if you stop paying premiums for a long period of time.',
								]
							},
							{
								style: 'redText',
								table: {
								widths: [1100],
											body: [
														[{text:'THIS IS AN INSURANCE PRODUCT THAT IS TIED TO THE PERFORMANCE OF THE UNDERLYING ASSETS, AND IS NOT A PURE INVESTMENT PRODUCT SUCH AS UNIT TRUSTS.'}],
														
													]
										}
							},
							{text:'* You should ask the agent to explain to you about the insurance charges and its effect on your future insurance coverage.', style:'staticText'},
							
							{text:'SUMMARY ILLUSTRATION:\n\nThis summary illustration is intended to show the movements of possible cash flows for the investment and the impact of fees and charges on cash \n\nvalues based on the above illustration.\n\nThe projected investment returns used below are for illustration purposes and not meant to show possible returns of your chosen investment fund(s).\nThey are not guaranteed and not based on past performance.\n\nActual returns of the fund will fluctuate (i.e. rise or fall) each year based on the performance of the assets the fund invests in.\n\nThe actual return may be even below the projected rates or negative.', style:'staticBold'},
							{table: {headerRows: 3, body: $scope.createTags($scope.pdfTableData,1)}},
							{text:'# The premium payable is not sufficient to sustain the Cash Value and to keep the policy inforce. Investment via top up is required to maintain the policy and to continue with the illustrated benefits.'},
							{
								ol: [
									"This represents a charge to your premium and is used to meet the direct distribution cost and company's expenses.",
									'Cost directly attributable to the distribution channel for the sale/marketing of this policy, i.e. payments to agent. This cost is paid from the charges that are imposed on your policy for services that the agent will provide to you for the duration of your policy.',
								]
							},
							{text:'Notes:'},
							{
								ol: [
									"All figures presented are in Ringgit Malaysia (RM).",
								],
								margin: [30, 0, 0, 0]
							},
							{table: {headerRows: 3, body: $scope.createTags($scope.pdfTableData,2)}},
							{text:'Note', style:'staticText', decoration: 'underline'},
							{text:'The information set out below forms part of your sales illustration. AmMetLife Insurance Berhad believes it is important that you fully appreciate all the benefits under your policy, and that you also understand how the cost of the insurance protection, distribution, administration, investment and other costs affect these benefits. You should satisfy yourself that the plan best serves your needs and that you can afford the premium. Please contact our Customer Care Centre at 1300 88 8800 or your agent for any clarification. Buying a regular premium life policy is a long-term commitment. It is not advisable to hold this policy for a short period of time in view of the high initial costs. You may increase or decrease the Sum Assured at any time without changing the regular premium amount. This is subject to minimum Sum Assured requirement. An increase in Sum Assured will be subjected to underwritting. The information set out below explains the benefits of this investment-linked policy and the individual items in the sales illustration table.', style:'staticText'},
							
							{text:'Plan Description', style:'staticText', decoration: 'underline'},
							{text:'AmMetLife Lifestyle is a regular premium investment-linked plan expiring at age 99. Upon maturity, the fund value is payable.', style:'staticText'},
							
							{text:'Upon Diagnosis of a Critical Illness', style:'staticText', decoration: 'underline'},
							{text:'100% of Basic Sum Assured is payable. Critical Illness limit per life is RM 1 million. The policy shall remain inforce until a claim is made for Death or Total and Permanent Disability (TPD).', style:'staticText'},
							
							{text:'Basic Sum Assured', style:'staticText', decoration: 'underline'},
							{text:'The Basic Sum Assured illustrated in the sales illustration will be the minimum amount to be received in the event of death or TPD.', style:'staticText'},
							
							{text:'Premium', style:'staticText', decoration: 'underline'},
							{text:'The Premium column in the sales illustration is the amount that you (the policy owner) pay annually for this policy. Take note that not all of the amount paid will be invested into the investment fund(s) you selected. See explanation on unallocated and allocated premium.', style:'staticText'},
							
							{text:'Unallocated Premium', style:'staticText', decoration: 'underline'},
							{text:'The unallocated premium is an upfront charge on the premium paid and is used to meet insurer’s expenses and direct distribution cost, including the commissions payable to the agent. The agent may also be entitled to production and persistency bonus during the first three years of the policy provided that the agent meets the qualifying criteria set by the insurer.', style:'staticText'},
							
							{text:'Allocated Premium', style:'staticText', decoration: 'underline'},
							{text:'This is the amount that will be used to purchase units in the investment fund(s) which you selected. The allocation rates for this investment-linked policy are as follows (as a % of premiums):-', style:'staticText'},
							
							{text:'Allocated Premium', style:'staticText', decoration: 'underline'},
							{text:'This is the amount that will be used to purchase units in the investment fund(s) which you selected. The allocation rates for this investment-linked policy are as follows (as a % of premiums):-', style:'staticText'},
							
							{	
								style: 'modeTable',
								table: {
								widths:[120,120,100,100,100,100,100,100,100],
								body: [
										[{text:'Policy Year', colSpan:'2'},'','1', '2', '3', '4','5','6','>=7'],
										[{text:'Premiums Paid (RM)', colSpan:'2'},'','3,000.00', '3,000.00', '3,000.00', '3,000.00','3,000.00','3,000.00','3,000.00'],
										[{text:'Allocated Premium'}, 'Protection Portion (%)', '50', '50', '50', '50', '50', '50','50'],
										['','Investment Portion (%)', '95', '95', '95', '95', '95', '95','95'],
										['','RM', '2,310.00', '2,310.00', '2,310.00', '2,310.00', '2,310.00', '2,310.00','2,310.00']
									]
								}
							},
							
							{text:'For top-ups, the premium allocation is 95%.', style:'staticText'},
							
							{text:'Cash Value', style:'staticText', decoration: 'underline'},
							{text:'This is the projected value of units at any particular point in time that you may receive if you surrender the policy and is net of tax and all applicable charges. If the policy is terminated early, you may get less than the amount of premiums paid.', style:'staticText'},
							
							{text:'Fund Management Charge', style:'staticText', decoration: 'underline'},
							{text:'This refers to the annual management fee (% of investment fund) deducted to cover the cost of managing the investment fund.', style:'staticText'},
							
							{text:'Death or TPD Benefit', style:'staticText', decoration: 'underline'},
							{text:'This is the amount that will be payable on your death or TPD, based on the aggregate of value of units and the Basic Sum Assured. The full terms and conditions of AmLifestyle are set out in the policy document. For death due to accident, the benefit payable will be the total basic sum assured, Comprehensive Accident Indemnity (CAI) sum assured and Accident Benefit (AB) sum assured, if any.', style:'staticText'},
							{text:'If death is due to suicide within one year from the effective date of the policy or date of reinstatement, whichever is later, your nominee will receive the value of units at current unit price less a redemption fee valued on the date of the death of the life assured. AmMetLife shall be entitled to make any adjustments to reflect the change in the market value of the units in the fund at the date the notification is received by AmMetLife, together with any charges incurred by AmMetLife.', style:'staticText'},
							
							{text:'Critical Illness Benefit', style:'staticText', decoration: 'underline'},
							{text:'This is the amount that will be payable on diagnosis of a critical illness prior to death or TPD. It is the Basic Sum Assured.', style:'staticText'},
							
							{text:'Critical Illness Benefit', style:'staticText', decoration: 'underline'},
							{text:'Funds currently available are: -', style:'staticText'},
							{	
								style: 'modeTable',
								table: {
								widths:[450,450],
								body: [
										['AmMetLife Bond Fund','AmMetLife Asia Pacific REITS Fund'],
										['AmMetLife Tactical Bond Fund','AmMetLife Oasis Islamic Equity Fund'],
										['AmMetLife Dana Teguh','AmMetLife Global Emerging Market Fund'],
										['AmMetLife Balanced Fund','AmMetLife Global Agribusiness Fund'],
										['AmMetLife Dividend Fund','AmMetLife Precious Metals Fund'],
										['AmMetLife Equity Fund','']
									]
								}
							},
							{text:'', style:'staticText'},
							{text:'Projected Investment Rate of Return', style:'staticText', decoration: 'underline'},
							{text:'The projected investment returns of X% and Y% have been used respectively to represent the range of possible returns on the funds. When investments are made in more than one fund, an average return of the funds is used.', style:'staticText'},
							{text:'The illustrated gross rates of each fund are :', style:'staticText'},
							{	
								style: 'modeTable',
								table: {
								widths:[350, 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
								body: [
										['Fund Types','AmMetLife Bond Fund','AmMetLife Tactical Bond Fund','AmMetLife Dana Teguh','AmMetLife Balanced Fund','AmMetLife Dividend Fund','AmMetLife Equity Fund','AmMetLife Asia Pacific REITS Fund'],
										['Projected Investment Return of X% (Year 1 to 30)','4.00%','4.00%','3.00%','3.00%','2.00%','2.00%','2.00%'],
										['Projected Investment Return of Y% (Year 1 to 20)','7.00%','7.00%','8.00%','8.00%','9.00%','9.00%','9.00%'],
										['Projected Investment Return of Y% (Year 21 to 30)','5.00%','5.00%','5.00%','5.00%','6.00%','6.00%','6.00%'],
									]
								}
							},
							{text:'', style:'staticText'},
							{	
								style: 'modeTable',
								table: {
								widths:[235,200,200,200,200],
								body: [
										['Fund Types','AmMetLife Oasis Islamic Equity Fund','AmMetLife Global Emerging Market Fund','AmMetLife Global Agribusiness Fund','AmMetLife Precious Metals Fund'],
										['Projected Investment Return of X% (Year 1 to 30)','4.00%','4.00%','3.00%','3.00%'],
										['Projected Investment Return of Y% (Year 1 to 20)','7.00%','7.00%','8.00%','8.00%'],
										['Projected Investment Return of Y% (Year 21 to 30)','5.00%','5.00%','5.00%','5.00%'],
									]
								}
							},
							{text:'The value of the fund may fall below the amount of premium paid and depends on the performance of the underlying investments. The past actual returns of the funds and the appropriate benchmarks are shown in the fund fact sheet.', style:'staticText'},	
							
							{text:'Charges', style:'staticText', decoration: 'underline'},
							{text:'The following charges are taken out of your investment fund(s):', style:'staticText'},
							{
								ol: [
									'Insurance Charges - A monthly insurance charge is deducted from the units for the cost of providing insurance coverage for Death/TPD/Critical Illness. The insurance charge varies by the attained age, gender, occupation and medical rating status. Insurance Charges are inclusive of selected riders insurance charges. The insurance charge will increase as you grow older.',
									'Policy Charge - Maximum of RM5, deducted monthly from the units.',
									'Fund Management Charge - The annual fund management fee shall not be more than 1.0% of the NAV for Bond Fund and 1.5% of the NAV for all other funds. The actual charge will reflect the actual weightage of the fund.',
									'Switching Fee - First two switches in a policy year are free, thereafter a maximum charge of RM50 per switch is charged.',
									'Partial Withdrawal Charge - Maximum charge of RM50 per withdrawal.',
									'Surrender Charge - A surrender charge of RM100 or 10% of the Fund Value, whichever is lower, for full surrender of units.'
								]
							},
							
							{text:'All Charges are not guaranteed and may be varied from time to time by giving 3 months notice to the policy owner.', style:'staticText'},
							
							{text:'Rider Charges', style:'staticText', decoration: 'underline'},
							{text:'Riders are charged via unit deductions. Purchasing too many unit deducting riders may deplete the investment-linked funds.', style:'staticText'},
							
							{text:'Investment-Linked Funds', style:'staticText', decoration: 'underline'},

					        {	
								style: 'modeTable',
								table: {
								body: [
										['Name of Funds','AmMetLife Bond Fund','AmMetLife Tactical Bond Fund','AmMetLife Dana Teguh *','AmMetLife Balanced Fund','AmMetLife Dividend Fund','AmMetLife Equity Fund'],
										['Investment Objective','The Fund aims to provide the Policyholder with an opportunity to gain higher than the average income earned from fixed deposits, over the long-term investment horizon, mainly through investments in a diversified portfolio of fixed income securities.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund seeks to achieve moderate capital appreciation over the medium to long-term horizon through investing mainly in a Target Fund : AmTactical Bond Fund, a Collective Investment Scheme (CIS) managed by AmInvest, where the Target Fund aims to provide income and to a lesser extent, capital appreciation, by investing primarily in bonds.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund aims to provide the Policyholder with an opportunity to gain higher than the average income earned from fixed deposits with a lower level of risk as compared to equity funds, over the medium-term investment horizon, via exposure in Shariahapproved Malaysian equities and/or equity-related securities and Islamic debt and/or debtrelated securities.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund aims to provide the Policyholder with an opportunity to gain higher than the average income earned from fixed deposits with a lower level of risk as compared to equity funds, over the medium-term investment horizon.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund aims to provide the Policyholder with total returns primarily through investments in equities and/or equity-related securities of companies that offer sustainable dividend payments and attractive yields, emphasising on medium to long-term capital appreciation opportunities.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund aims to provide the Policyholder with capital appreciation, over the medium to long-term investment horizon, mainly through investments in Malaysian securities with superior growth potential.  \n\n Returns will be obtained via growth in unit price rather than income distribution.']
									]
								}
							},
							{text:'', style:'staticText'},
							
							{	
								style: 'modeTable',
								table: {
								body: [
										['Name of Funds','AmMetLife Asia Pacific REITS Fund','AmMetLife Oasis Islamic Equity Fund *','AmMetLife Global Emerging Market Fund','AmMetLife Global Agribusiness Fund','AmMetLife Precious Metals Fund *'],
								        ['Investment Objective','The Fund seeks to achieve moderate capital appreciation over the medium to long-term horizon, investing mainly in a Target Fund : AmAsia Pacific REITS Fund, a Collective Investment Scheme (CIS) managed by AmInvest, where the Target Fund aims to provide regular income and to a lesser extent, capital appreciation over the medium to long-term by investing in real estate investment trusts (REITs). \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund seeks to achieve capital appreciation over the medium to long-term via investments in :  \n\n 1) AmOasis Global Islamic Equity Fund, a Collective Investment Scheme (CIS) managed by AmInvest.  \n\n 2) Shariah-approved equities listed on Bursa Malaysia.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund seeks to achieve capital appreciation over the long-term horizon through investing mainly in :  \n\n 1) AmGlobal Emerging Market Opportunities Fund, a Collective Investment Scheme (CIS) managed by AmInvest.  \n\n 2) Equities listed on Bursa Malaysia.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund seeks to achieve capital appreciation over the long-term horizon through investing mainly in a Target Fund: AmGlobal Agribusiness Fund, a Collective Investment Scheme (CIS) managed by AmInvest, that invests in global agribusiness equities from agricultural commodities to consumer products.  \n\n Returns will be obtained via growth in unit price rather than income distribution.','The Fund seeks to achieve capital appreciation over the medium to long-term horizon through investing mainly in a Target Fund : AmPrecious Metals Fund, a Collective Investment Scheme (CIS) managed by AmInvest, that invests in a portfolio of global Shariah-observant equities and equity-related securities of companies engaged in activities related to gold, silver, platinum or other precious metals.  \n\n Returns will be obtained via growth in unit price rather than income distribution.']
									]
								}
							},
							
							{text:'', style:'staticText'},
							{text:'* The investment-linked insurance plan itself is not a Shariah-compliant product. However, investments of these funds are in Shariah-approved securities.', style:'staticText'},
					        
					        {text:'Investment-Linked Funds and Benchmarks Historical Returns', style:'staticText', decoration: 'underline'},
					        {text:'Notice: Past Performance of the fund is not an indication of its future performance.', style:'staticText'},
					        {text:'', style:'staticText'},
					        {	
								style: 'modeTable',
								table: {
								widths:[300,'auto','auto','auto','auto','auto','auto','auto','auto','auto','auto','auto','auto'],
								body: [
										[{text:'', rowSpan:'3'},{text:'Historical Actual Annual Returns (%) of the Funds Compared with the selected benchmarks #',colSpan:'12'},'','','','','','','','','','',''],
										['',{text:'2008',colSpan:'2'},'',{text:'2009',colSpan:'2'},'',{text:'2010',colSpan:'2'},'',{text:'2011',colSpan:'2'},'',{text:'2012',colSpan:'2'},'',{text:'2013',colSpan:'2'},''],
										['','Historical','Benchmark','Historical','Benchmark','Historical','Benchmark','Historical','Benchmark','Historical','Benchmark','Historical','Benchmark'],
										['AmMetLife Bond Fund (AMBF)','3.92','3.92','3.92','4.45','4.45','2.80','2.80','3.09','3.09','2.80','2.80','2.80'],
										['AmMetLife Tactical Bond Fund § (AMTBF)','-','-','-','-','-','-','-','-','-','-','-','-'],
										['AmMetLife Dana Teguh * (AMDT)','-22.32','-22.32','-22.32','-22.32','-22.32','-22.32','-22.32','-22.32','-22.32','-22.32','-22.32-22.32','-22.32'],
										['AmMetLife Balanced Fund (AMBAF)','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8'],
										['AmMetLife Dividend Fund (AMDF)','-','-','-','-','-','-','-','-','-','-','-','-'],
										['AmMetLife Equity Fund (AMEF)','-29.48','-29.48','-29.48','-29.48','-29.48','-29.-29.-29.48','-29.48','-29.48','-29.48','-29.48','-29.48','-29.48'],
										['AmMetLife Asia Pacific REITS Fund § (AMAPRF)','-','-','-','-','-','-','-','-','-','-','-','-'],
										['AmMetLife Oasis Islamic Equity Fund * (AMAIEF)','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8'],
										['AmMetLife Global Emerging Market Fund (AMGEMF)','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8'],
										['AmMetLife Global Agribusiness Fund (AMGAF)','-','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8'],
										['AmMetLife Precious Metals Fund * (AMPMF)','-','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8','14.8'],
									]
								}
							},
					       
					        {text:'§ Historical actual annual returns of the Unit Fund(s) are not available for new fund(s)', style:'staticText'},
					        {text:'# Date is based on calendar year', style:'staticText'},   
					        {text:'* The investment-linked insurance plan itself is not a Shariah-compliant product. However, investments of these funds are in Shariah-approved securities.', style:'staticText'}, 
					        {text:'The benchmarks used for each funds are:', style:'staticText'},  
					        
					        {	
								style: 'modeTable',
								table: {
								widths:[100,350,100,350,],
								body: [
										[{text:'AMBF',style:'staticBold'},'Maybank 12-Month Fixed Deposit Rates',{text:'AMAPRF',style:'staticBold'},'Bloomberg Asia REIT Index'],
										[{text:'AMTBF',style:'staticBold'},'RAM Quantshop All MGS Index',{text:'AMAIEF',style:'staticBold'},'Dow Jones Islamic Market World Index'],
										[{text:'AMDT',style:'staticBold'},'50% FTSE Bursa Malaysia EMAS Shariah Index + 50% Maybank 12-Month GIA-i Tier 1 Rates',{text:'AMGEMF',style:'staticBold'},'MSCI EM (Emerging Markets) Index'],
										[{text:'AMBAF',style:'staticBold'},'50% FTSE Bursa Malaysia KLCI + 50% Maybank 12-Month Fixed Deposit Rates',{text:'AMGAF',style:'staticBold'},'MSCI World Index'],
										[{text:'AMDF & AMEF',style:'staticBold'},'FTSE Bursa Malaysia KLCI',{text:'AMPMF',style:'staticBold'},'FTSE Gold Mines Index']
									]
								}
							},
					        
					        {text:'Basis of Past Performance Calculation', style:'staticBold', decoration: 'underline'},
							{text:'Returns of n periods as at time t (%) = [(Fund Price (NAV) per unit at time t/ Fund Price (NAV) per unit at time t-n) - 1 ] X 100%', style:'staticText'},
							{text:'The actual investment returns shown above are on a net basis (net of tax and charges) and do not take into account the bid/offer spread if any, nor any charges that may be levied.', style:'staticText'}, 
					        
					        {text:'Basis and Frequency of Unit Valuation', style:'staticBold'},
					        {
					            ol: [
								'Unit pricing is done daily.',
								'The Unit Price of the Fund on any Valuation Date shall be equal to the Fund Value divided by the number of Units in Circulation on Valuation Date.',
								'The Fund Net Asset Value (NAV) is the value of all the assets of the Fund after the deduction of expenses for managing, acquiring, maintaining and valuing the assets of that Fund, tax or other statutory levy incurred by the Company on investment income or capital gains on the assets of the Fund and any accrued or anticipated income.',
						        'The Valuation Date shall be the date as determined by AmMetLife Insurance Berhad from time to time, but not less frequent than once a day, for the purpose of determining Unit Price.',
						        'The final valuation point of the Fund is at the end of each Business Day. Final Unit Price is valued at 4 decimal points.',
						        'To recoup the cost of acquiring and disposing of assets, a transaction cost adjustment may be made to the Fund Value to recover any amount which the Fund had already paid or reasonably expects to pay for the creation or cancellation of units.'
						        ]
					            
					        },
					        
					        {text:'Exceptional Circumstances', style:'staticBold'},
					        {text:'We reserve the right to suspend or freeze unit pricing, allocation or redemption of units, or switching for a period not exceeding 6 months, in exceptional circumstances that include, but are not limited to, intervening events resulting in the temporary closure of any exchange in which the fund is invested.', style:'staticText'}, 
					        
					        {text:'Warning statement: this is strictly the performance of the investment fund, and not the returns earned on the actual premium paid of the Investment-Linked product', style:'staticBold'},
					        {text:'IMPORTANT NOTICE:', style:'staticBold'},
					        
					        {
					            ul: [
								    'Funds do not pay any dividends. All investment income and capital gains are reinvested and reflected in the unit price.',
								    'The price at which units are sold/purchased will be determined at the next price following the receipt of premium or claim. This is known as forward pricing.',
								    'You must understand the risks associated with investing in investment-linked funds, understand your tolerance for risks, and make an informed decision before investing in any investment-linked fund.',
						            'Please refer to AmMetLife Fund Fact Sheets for full list of risk disclosure.'
						        ],
								pageBreak: 'after'
					            
					        },
							{
								style: 'tableExample',
								table: {
									widths: [870, 230],
									body: [
											[{image: 'address', width: 380, height: 75,}, {image: 'metLifeLogo', 		width: 200, height: 26, alignment: 'right', margin:[0, 50, 0, 0]} ],
										]
									},
								layout: 'noBorders'
							},
							
							{
								columns:
								[
									{
										image: 'line',
										width: 1100,
										height: 3
									}
								]	
							},
							{
								columns:
								[
									{
										image: 'blackline',
										width: 1100,
										height: 0.2,
										margin: [0, 20, 0, 2]
									},
								]	
							},
							{text:'', style:'staticText'},
							{	
								style: 'modeTable',
								table: {
								widths: [540, 540],
								body: [
										[{text:'PRODUCT DISCLOSURE SHEET Read this Product Disclosure Sheet before you decide to take up the AmMetLife Lifestyle. Be sure to also read the general terms and conditions.', rowSpan:'1'},'AmMetLife Insurance Berhad'],
										['','AmMetLife Lifestyle \n 17/12/2014']
									]
								}
							},
							{text:'', style:'staticText'},
							{text:'1. What is this product about?', style:'staticBold'},
					        {text:'This investment-linked policy (ILP) offers a combination of insurance protection and investment. It pays a lump sum benefit if the life assured dies or suffers from total and permanent disability during the term of the policy and the fund value at the time of claim. It pays an additional lump sum benefit if you are diagnosed with critical illness during the term of the policy before event of death or total and permanent disability. Upon maturity, the fund value is payable.', style:'staticText'},
					        
					        {text:'Riders attached to your policy are:', style:'staticText'},
					        {	
								style: 'modeTable',
								table: {
								widths: [200, 200, 200],
								body: [
										['ABB+','MCIU+','LTR+'],
										['AMF3+','DWPW+',''],
										['CAIB+','DDIB+',''],
										['HBR+','RICIR01TNU','']
									]
								},
								layout: 'noBorders'
							},
							
							{text:'The charges for the optional riders above will be deducted from the value of your invested units on a monthly basis. This investment-linked plan is not a Shariah-compliant product.', style:'staticText'},
					        
							{text:'2. What are the covers / benefits provided?', style:'staticBold'},
					        {text:'This policy covers:', style:'staticText'},
					        
					        {text:'Riders attached to your policy are:', style:'staticText'},
					        
					        {
					            ul : [
					                'Death - RM 100,000 AND the fund value at the time of claim.',
					                'Total and Permanent Disability - RM 100,000 AND the fund value at the time of claim. The amount payable is limited to RM1 million on a per life basis. This only covers up to age 65 next birthday.',
					                'Critical Illness - RM 100,000 The amount payable is limited to RM 1 million on a per life basis. The policy remains in force until event of death or total permanent disability.',
					                'In case of death or total and permanent disability at attained ages 1, 2, or 3 years next birthday, the amount payable is as follows:'
					            ]
					        },
					        {text:'', style:'staticText'},
					        {	
								style: 'modeTable',
								table: {
								body: [
										['Age Next Birthday','Amount Payable (RM)'],
										['1','(25% of RM100,000) AND fund value at the time of claim'],
										['2','(50% of RM100,000) AND fund value at the time of claim'],
										['3','(75% of RM100,000) AND fund value at the time of claim']
									]
								}
							},
					        {text:'', style:'staticText'},
					        {
					            ul : [
					                'In case of critical illness at attained ages 1, 2 or 3 years next birthday, the amount payable is as follows:'
					                ]
					        },
					        {text:'', style:'staticText'},
					        {	
								style: 'modeTable',
								table: {
								body: [
										['Age Next Birthday','Amount Payable (RM)'],
										['1','25% of 100,000'],
										['2','50% of 100,000'],
										['3','75% of 100,000']
									]
								}
							},
					        {text:'', style:'staticText'},
					        {text:'Please refer to the policy contract for the full list of covered critical illnesses.', style:'staticText'},
					        {
					            ul : [
					                'Maturity - the fund value at the time of maturity.'
					                ]
					        },
					        {text:'', style:'staticText'},
					        {text:'Reminder: Please read the Sales Literature which includes product benefits and objectives of the investment-linked fund. It is important to select a plan or a combination of funds that suit your financial goals and risk profile.', style:'staticText'},
					        {text:'The Funds chosen are:', style:'staticText'},
					        
					        {	
								style: 'modeTable',
								table: {
								widths: [540, 540],
								body: [
										['25% AmMetLife Bond Fund','10% AmMetLife Equity Fund'],
										['25% AmMetLife Tactical Bond Fund','10% AmMetLife Precious Metals Fund'],
										['10% AmMetLife Balanced Fund',''],
										['20% AmMetLife Dana Teguh','']
									]
								},
								layout: 'noBorders'
							},
					        
					        {text:'3. How much premium do I have to pay?', style:'staticBold'},
					        {text:'The total premium that you have to pay and the terms and conditions relating to your policy may vary depending on the underwriting requirements of AmMetLife:', style:'staticText'},
					        
					        {
					            ul : [
					                'Total premium that you have to pay: RM 250.00 Monthly, RM 750.00 Quarterly, RM 1,500.00 Half Yearly, RM 3,000.00 Yearly',
					                'Premium duration : 62 years' ]
					        },
					        {text:'AmMetLife allocates a portion of the premium to purchase units in the investment-linked fund that you have chosen. Any unallocated amount will be used to pay commissions to agents and other expenses of AmMetLife. You are advised to refer to the allocation rates given in the sales illustration. You have thirty (30) days from the premium due date to pay the premium. If you do not pay your premium within thirty (30) days of the premium due date, your policy will still continue to be in force so long as the value of invested units is sufficient to cover the insurance, riders and other charges. Your policy will lapse when the value of invested units is insufficient to pay for the insurance, riders and other charges.', style:'staticText',pageBreak: 'after' },
					        
							{
								pageBreak: 'before',
								style: 'tableExample',
								table: {
									widths: [870, 230],
									body: [
											[{image: 'address', width: 380, height: 75,}, {image: 'metLifeLogo', 		width: 200, height: 26, alignment: 'right', margin:[0, 50, 0, 0]} ],
										]
									},
								layout: 'noBorders'
							},
							
							{
								columns:
								[
									{
										image: 'line',
										width: 1100,
										height: 3
									}
								]	
							},
							{
								columns:
								[
									{
										image: 'blackline',
										width: 1100,
										height: 0.2,
										margin: [0, 20, 0, 2]
									},
								]	
							},
							{text:'', style:'staticText'},
					        {	
								style: 'modeTable',
								table: {
								widths: [540, 540],
									body: [
										[{text:'PRODUCT DISCLOSURE SHEET Read this Product Disclosure Sheet before you decide to take up the AmMetLife Lifestyle. Be sure to also read the general terms and conditions.', rowSpan:'1'},'AmMetLife Insurance Berhad'],
										['','AmMetLife Lifestyle \n 17/12/2014']
									]
								}
							},
							 {text:'', style:'staticText'},
					        {text:'4. What are the fees and charges that I have to pay?', style:'staticBold'},
					        
					        {
					            ul : [
					                'The insurance coverage charges are deducted monthly from the value of your units. The insurance charges may increase as you grow older. Details of insurance charges and other charges for the ILP are given in the sales illustration.',
					                'If you pay via Biro Angkasa, there will be an additional charge of 2% of your premium.',
					                'If you pay via Salary Deduction, there will be an additional charge of 5% of your premium.',
					                'Two free switches between investment funds are allowed during a complete policy year. Thereafter, an administration fee of RM 50 will be charged for each additional switch.',
					                'RM 50 will also be charged for each withdrawal that is made on the invested funds.',
					                'A charge of 10% of value of the invested units up to RM100 will be made on full surrender.',
					                'Commission - Please refer to the sales illustration for commission payable to agent.'
					            ]
					        },
					        
					        {text:'5. What are some of the key terms and conditions that I should be aware of?', style:'staticBold'},
					        
					        {
					            ul : [
					                'You should satisfy yourself that this plan will best serve your needs and that the premium payable under this policy is an amount you can afford.',
					                'Importance of disclosure - you must disclose all material facts such as medical condition, and state your age correctly.',
					                'You must complete the proposal form accurately as it forms the basis of your contract.',
					                'If you fail to disclose or wrongly disclose any material information you may not be able to receive any of the entitled benefits. Your premium and benefit amount may be affected. Your policy may also be cancelled and all premiums less medical expenses, claims and indebtedness will be refunded to you without any interest.',
					                'You should be satisfied that the product serves your needs and that the premium payable under the policy is affordable to you.',
					                'Free-look period - you may cancel your ILP by returning the policy within 15 calendar days from the delivery of your policy. AmMetLife will refund to you the unallocated premiums, the value of units that have been allocated (if any) at unit price at the next valuation date and any insurance charge and policy fee that have been deducted less any medical fee incurred.',
					                'Cash value - the cash value of the ILP depends on the investment performance of the investment-linked fund(s) selected. The higher the level of insurance coverage selected, the more units will be absorbed to pay for the insurance charges and rider charges and the fewer units will remain to accumulate cash values under your policy.',
					                'The life assured will be covered for accidental death once binding receipt has been issued to you. Please ensure you receive and keep the receipt as proof of your premium payment. You are advised to refer to the Terms and Conditions shown in the binding receipt.',
					                'Qualifying/Waiting period - the eligibility of the critical illness coverage will only start thirty (30) days after the effective date of the policy or date of reinstatement, whichever is later.',
					                'You are allowed to top up the premium under this policy and this may be done at any time while the policy is in force. The minimum top up premium payable shall be RM 50.00.',
					                'If you switch to another insurer or transfer from one policy to another, you may be subject to the new terms and conditions of the new policy or the new insurer.',
					                'If your insurance agent ceases to be an agent of AmMetLife Insurance Berhad, AmMetLife will take the necessary action to inform you accordingly.',
					                'Your investment-linked plan will lapse if there is not enough units in your fund to pay the insurance and other charges.',
					            ]
					        },
					        {text:'Note: This list is non-exhaustive. Please refer to the policy contract for the terms and conditions under this policy.', style:'staticText'},
					        
					        {text:'6. What are the major exclusions under this policy?', style:'staticBold'},
					        
					        {
					            ul : [
					                'If death is due to suicide within one year from the effective date of the policy or date of reinstatement, whichever is later, your nominee will receive the value of units at current unit price less a redemption fee valued on the date of the death of the life assured. AmMetLife shall be entitled to make any adjustments to reflect the change in the market value of the units in the Fund at the date the notification is received by AmMetLife, together with any charges incurred by AmMetLife.',
					                'Waiting period - if critical illness is diagnosed within thirty (30) days following the effective date of the policy or date of reinstatement, whichever is later, your nominee will not receive any money for the critical illness benefit.'
					            ]
					        },
					        {text:'Note: This list is non-exhaustive. Please refer to the policy contract for the full exclusions under this policy.', style:'staticText'},
					        
					        {text:'7. Can I cancel my policy?', style:'staticBold'},
					        {text:'Buying a regular premium ILP is a long-term financial commitment. It is not advisable to hold this policy for a short period of time in view of the high initial costs. If you find that the investment fund that you have chosen is no longer appropriate, you have the flexibility to switch funds. You are allowed to make two switches per year without any fee. For additional switches, you may be charged a processing fee. If you terminate your policy in early years, you may not get back the same amount of premium that you have paid.', style:'staticText'},
					        
					        {text:'8. What do I need to do if there are changes to my contact details?', style:'staticBold'},
					        {text:'It is important that you inform us of any change in your contact details (including that of the nominee and/or trustee) to ensure that all correspondences reach you and/or nominee/trustee in a timely manner. AmMetLife contact details are as below.', style:'staticText',pageBreak: 'after' },
					        
							{
								pageBreak: 'before',
								style: 'tableExample',
								table: {
									widths: [870, 230],
									body: [
											[{image: 'address', width: 380, height: 75,}, {image: 'metLifeLogo', 		width: 200, height: 26, alignment: 'right', margin:[0, 50, 0, 0]} ],
										]
									},
								layout: 'noBorders'
							},
							
							{
								columns:
								[
									{
										image: 'line',
										width: 1100,
										height: 3
									}
								]	
							},
							{
								columns:
								[
									{
										image: 'blackline',
										width: 1100,
										height: 0.2,
										margin: [0, 20, 0, 2]
									},
								]	
							},
							{text:'', style:'staticText'},
					        {	
								style: 'modeTable',
								table: {
								widths: [540, 540],
									body: [
										[{text:'PRODUCT DISCLOSURE SHEET Read this Product Disclosure Sheet before you decide to take up the AmMetLife Lifestyle. Be sure to also read the general terms and conditions.', rowSpan:'1'},'AmMetLife Insurance Berhad'],
										['','AmMetLife Lifestyle \n 17/12/2014']
									]
								}
							},
							 {text:'', style:'staticText'},
					        {text:'9. Where can I get further information?', style:'staticBold'},
					        {text:'Should you require additional information about investment-linked insurance, please refer to the insuranceinfo booklet on ‘Investment-linked Insurance’, available at all our branches or you can obtain a copy from the insurance agent or visit www.insuranceinfo.com.my.', style:'staticText'},
					        {text:'If you have any enquiries, please contact us at:', style:'staticText'},
					        
					        {text:'', style:'staticText'},
					        {
					            style: 'modeTable',
								table: {
									body: [
										[{text:'Customer Care Centre', style:'plainBold'}],
										['AmMetLife Insurance Berhad'],
					                    ['Ground Floor, Menara AmMetLife'],
					                    ['No.1, Jalan Lumut, 50400 Kuala Lumpur.'],
					                    ['Tel: 1 300 88 8800 Fax: (603) 21713000'],
					                    ['E-mail: customercare@ammetlife.com'],
					                    ['Homepage: www.ammetlife.com'],
					                    [''],
					                    [{text:'SMS (Alert)', style:'plainBold'}],
					                    ['Type AML<space>Message'],
					                    ['Send to 33911']
									]
								},
					            layout: 'noBorders'
					        },
							
									
						    {text:'10. Other similar types of cover available?', style:'staticBold'},
					        {text:'Please contact AmMetLife Insurance Berhad for other similar type of plans offered by AmMetLife Insurance Berhad.', style:'staticText'},
					        {text:'IMPORTANT NOTE:', style:'staticBold'},
					        {text:'THIS IS AN INSURANCE PRODUCT THAT IS TIED TO THE PERFORMANCE OF THE UNDERLYING ASSETS, AND IS NOT A PURE INVESTMENT PRODUCT SUCH AS UNIT TRUSTS. YOU MUST EVALUATE YOUR OPTIONS CAREFULLY AND SATISFY YOURSELF THAT THE INVESTMENT-LINKED PLAN CHOSEN MEET YOUR RISK APPETITE, AND THAT YOU CAN AFFORD THE PREMIUM THROUGHOUT THE POLICY DURATION. TO INCREASE INVESTMENT VALUE AT ANY TIME, IT IS ADVISABLE THAT YOU PAY THE ADDITIONAL PREMIUMS AS ‘TOP UPS’. RETURN ON AN INVESTMENTLINKED FUND IS NOT GUARANTEED.', style:'staticBold'},
					        {text:'The information provided in this Product Disclosure Sheet is valid as at 17 December 2014', style:'staticText'},
					        
							
						],
									styles: {
											header: {
												fontSize: 12,
												bold: true,
												alignment: 'center',
											},
											labels:
											{
												fontSize: 8,
											},
											dvalues:
											{
												fontSize: 8,
											},
											sideheader:
											{
												fontSize: 12,
												bold: true,
											},
											redtext:
											{
												fontSize: 13,
												bold: true,
												color: 'red'
											},
											tableExample: {
												margin: [0, 5, 0, 5]
											},
											tableFund:
											{
												margin: [0, -2, 0, 10]
											},
											tableRider:
											{
												margin: [0, -2, 0, 10],
												alignment: 'left'
											},
											riderfirstcol:
											{
												italics: true,
												fontSize:7
											},
											modeTable:
											{
												margin: [0, -2, 0, 2]
											},
											planTable:
											{
												margin: [0, -2, 0, 10]
											},
											redText:
											{
												color:'#ff0000',
												fontSize: 8,
												margin: [0, 10, 0, 10],
												bold: true
											},
											staticText:
											{
												margin: [0, 0, 0, 10]
											},
											plainBold:
											{
												bold: true
											},
											staticBold:
											{
												bold: true,
												margin: [0, 0, 0, 10]
											}
										},
									defaultStyle: {
									alignment: 'justify',
									fontSize: 8.5,
									color: '#000000'
									}
												
								};
					    //pdfMake.createPdf(docDefinition).open('test.pdf');
					$FileUtils.generatePdf(docDefinition,"Illustration"); 
						};
					
					$scope.createTags = function(data,tableIndex) {
						tableIndex=tableIndex-1;

						//alert("px directive: "+data);
						//alert("px directive: "+JSON.stringify(data));
						var tophead=[]; var head=[];
						var headcount=0;
							$scope.header = data.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[tableIndex].TableData.Headers.SetElement;
						$scope.column = data.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[tableIndex].TableData.Columns.SetElement;
						//finding first row data.
						
						for (var i = 0; i < $scope.header.length; i++) {
					
							if($scope.header[i].Parent==""){
					
							tophead.push({"Id":$scope.header[i].Id,"Name":$scope.header[i].Name});
							}
						}
						head.push(tophead);
						createHead(tophead);
					
					
						//finding all possible row data
						function createHead(subhead){
						var midhead=[];
						for(var t = 0; t < subhead.length; t++){
					
						var childCount=0;
						for (var i = 0; i < $scope.header.length; i++) {
						if($scope.header[i].Parent==subhead[t].Id){
						childCount++;
						midhead.push({"Id":$scope.header[i].Id,"Name":$scope.header[i].Name,"Parent":$scope.header[i].Parent});
						}
						}
						
						head[headcount][t].Child=childCount;
						if(childCount>0){
						head[headcount][t].totalChild=childCount;
						}
						else{
						head[headcount][t].totalChild=1;
						}
				
					
						}
						
						if(midhead.length>0){
						head.push(midhead);
						headcount++;
				
							createHead(midhead);
						}
						}
						
						//looping around for rowspan
						for(var i=head.length-3;i>-1;i--){
						for(var h=0; h<head[i].length;h++){
						var count=0;
						for(var s=0; s<head[i+1].length;s++){
						if(head[i+1][s].Parent==head[i][h].Id){  
						count+=head[i+1][s].totalChild;
						}
						
						}
						head[i][h].totalChild=count;
						}
						
						}
						
						//forming html upon the generated head object.
						var tableObj=[];
				
//	alert(head.length);
//var temprowObj=[];
var maxIndex=head[0].length;
for (var firstindex = 0; firstindex < maxIndex; firstindex++) {
if(head[0][firstindex] && head[0][firstindex].Child>0)
							{
maxIndex+=head[0][firstindex].totalChild-1;
}
}

for(var h=0;h<head.length;h++){
tableObj.push([]);
for (var firstindex = 0; firstindex < maxIndex; firstindex++) {
tableObj[h].push({});
}
}
			


					for(var h=0;h<head.length;h++){
					
				//	var rowObj=[];
					var s = 0;
					
						for (var firstindex = 0; firstindex < maxIndex; firstindex++) {
						if(tableObj[h][firstindex]==""){
						
						}
								else{
								if(head[h][s] ){
							if( h<head.length-1){
							if( head[h][s].Child>0)
							{
							tableObj[h][firstindex].text=head[h][s].Name;
							tableObj[h][firstindex].colSpan=head[h][s].totalChild;
						tableObj[h][firstindex].fontSize= 8;
							for(var colIndex=1;colIndex<head[h][s].totalChild;colIndex++){
										firstindex++;																				tableObj[h][firstindex]="";
																														}
							}
							else{
							tableObj[h][firstindex].text=head[h][s].Name;
							tableObj[h][firstindex].rowSpan=head.length-h;
							tableObj[h][firstindex].fontSize= 8;
						
							for(var rowIndex=1;rowIndex<head.length-h;rowIndex++){
																														tableObj[h+rowIndex][firstindex]="";
																														}
							}
							}
							else{
								tableObj[h][firstindex].text=head[h][s].Name;
								tableObj[h][firstindex].fontSize= 8;
							}}
								s++;
								}	
						
						}
						}
							//alert(JSON.stringify(temprowObj));
							//tableObj.push(temprowObj);
						for (var row = 0; row < $scope.column[0].Values.SetElement.length; row++) {
							var rowObj=[];
							for (var col = 0; col < $scope.column.length; col++) {
							rowObj.push({text:$scope.column[col].Values.SetElement[row].value,fontSize: 8});
								

							}
							tableObj.push(rowObj);
						}

//alert(JSON.stringify(tableObj));





						return tableObj;
					};
				
				
					
				});

// /*********************** END *************************************/
