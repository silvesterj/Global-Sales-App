"use strict";
function getService(param) {

var request = JSON.parse(param);


var errorObject = {
			    "transaction": {
			        "header": {
			            "tenantCode": "DC.HKG.SALES.VNM",
			            "locale": "en_US",
			            "guid": "HEX0000000001111",
			            "sourceType": "mobile",
			            "responseStatus": "ERR"
			        },
			        "type": "authenticate",
			        "parameters": {
			            "errorCode": "ERR101",
			            "errorMessage ": " Invalid JSON request - JSON Structure mismatch found "
			        }
			    }
			};

var agentDetails = {"agentResult":[{
	agentCode: 'Ag111111',
	agentName: 'Arun Kumar',
	email: 'arun@abc.com',
	contactNo: '555555555',
	selectedLang: 'english',
	currencyType: 'RM',
	currencyImagePath: 'imagePath',
	imagePath: 'assets/images/profile_edit.png'
    },{agentCode: 'Ag222222',
    agentName: 'Abishek',
    email: 'abishek@abc.com',
    contactNo: '999999999',
    selectedLang: 'english',
    currencyType: 'RM',
    currencyImagePath: 'imagePath',
    imagePath: 'assets/images/profile_edit.png'

    },{agentCode: 'Ag333333',
    	agentName: 'Ashish',
    	email: 'ashish@abc.com',
    	contactNo: '88888888',
    	selectedLang: 'english',
    	currencyType: 'RM',
    	currencyImagePath: 'imagePath',
    	imagePath: 'assets/images/profile_edit.png'

    },{agentCode: 'Ag444444',
    	agentName: 'Mark David',
    	email: 'markdavid@metlife.com',
    	contactNo: '666666666',
    	selectedLang: 'english',
    	currencyType: 'RM',
    	currencyImagePath: 'imagePath',
    	imagePath: 'assets/images/profile_edit.png'

    },{agentCode: 'Salesdemo',
    	agentName: 'Mark David',
    	email: 'markdavid@metlife.com',
    	contactNo: '666666666',
    	selectedLang: 'english',
    	currencyType: 'RM',
    	currencyImagePath: 'imagePath',
    	imagePath: 'assets/images/profile_edit.png'

    }]};

var successObjectAd = {
	    "transaction": {
	        "header": {
	            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
	            "locale": "en_US",
	            "guid": "HEX0000000001111",
	            "sourceType": "mobile",
	            "responseStatus": "OK"
	        },
	        "type": " getadvertismentcontentList ",
	        "parameters": {
	            "userId": "admin",
	            "content":[
	                     {
	                        "categoryName": "Presentation",
	                        "documents": [
	                              {
	                                "docName": "AmMetLifeLifestyle",
	                                "docMarketingName": "AmLifestyle",
	                                 "DocType":"pdf",
	                                "docVersion":"2.0",
	                                "docDeploymentDate":"02-04-2014" 
	                               },
	                              {
	                                "docName": "AmMetLifeLife",
	                                "docMarketingName": "AmLife",
	                                 "DocType":"pptx",
	                                "docVersion":"1.6",
	                                "docDeploymentDate":"02-09-2014" 
	                               }
	                              ]
	                    },
	                    {
	                        "categoryName": "Reference",
	                        "documents": [
	                              {
	                                "docName": "PanelHospital",
	                                "docMarketingName": "Panel Hospital",
	                                 "DocType":"docx",
	                                "docVersion":"2.1",
	                                "docDeploymentDate":"01-04-2014" 
	                               },
	                              {
	                                "docName": "NonMedicalLimit",
	                                "docMarketingName": "Non-Medical Limit",
	                                 "DocType":"mp4",
	                                "docVersion":"1.4",
	                                "docDeploymentDate":"02-09-2014" 
	                               }
	                              ]
	                    },
	                    {
	                        "categoryName": "Brochure",
	                        "documentByproduct":[
	                        {  
	                        "productCategory":"Wealth",
	                        "documents": [
	                              {
	                                "docName": "AmMetLifeSecureBuilder",
	                                "docMarketingName": "AmMetLife Secure Builder",
	                                "DocType":"pdf",
	                                "docVersion":"1.9",
	                                "docDeploymentDate":"01-04-2014" 
	                               },
	                              {
	                                "docName": "AmMetLifeSecureGuardPlus",
	                                "docMarketingName": "AmMetLife SecureGuard Plus",
	                                 "DocType":"pdf",
	                                "docVersion":"1.4",
	                                "docDeploymentDate":"04-09-2014" 
	                               }
	                              ]},
	                        {
	                        "productCategory":"Protection",
	                        "documents": [
	                              {
	                                "docName": "AmMetLifeLink",
	                                "docMarketingName": "AmMetLife Link",
	                                "DocType":"pdf",
	                                "docVersion":"1.9",
	                                "docDeploymentDate":"11-04-2014" 
	                               },
	                              {
	                                "docName": "AmBeautifulAmMetLifeLifestyle",
	                                "docMarketingName": "AmBeautiful AmMetLife Lifestyle",
	                                 "DocType":"docx",
	                                "docVersion":"1.4",
	                                "docDeploymentDate":"02-12-2014" 
	                               }
	                              ]
	                        }]
	                    }]          
	        } 
	    }
	};



var successObjectlogin = {
			    "transaction": {
			        "header": {
			            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
			            "locale": "en_US",
			            "authenticationToken": "HEXA0000123456",
			            "guid": "HEX0000000001111",
			            "userId": "admin",
			            "deviceId": "macid13",
			            "sourceType": "mobile",
			            "responseStatus":"OK"
			        },
			        "type": "login",
			        "parameters":{
			        	
			            }
			        }
			};

var failureObjectlogin = {
	    "transaction": {
	        "header": {
	            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
	            "locale": "en_US",
	            "authenticationToken": "HEXA0000123456",
	            "guid": "HEX0000000001111",
	            "userId": "admin",
	            "deviceId": "macid13",
	            "sourceType": "mobile",
	            "responseStatus":"FAILED"
	        },
	        "type": "login",
	        "parameters":{
	        	
	            }
	        }
	};

var successObjectProdList = {
	    "transaction": {
	        "header": {
	            "tenantCode": "DC.HKG.SALES.<Tanent Name>",
	            "locale": "en_US",
	            "guid": "HEX0000000001111",
	            "sourceType": "mobile",
	            "responseStatus": "OK"
	        },
	        "type": "getProductList",
	        "parameters": {
	            "userId": "admin",
	            "products": [
	                    {
	                        "productCode": "UL",
	                        "productName": "Universal Life",
	                        "productCategory":"Protection",
	                        "productVersion": "0.8",
	                        "productURI": "http://www.example.org/UL",
	                        "subProducts": [
	                            {
	                                "subProductCode": "ULLA5",
	                                "subProductName": "AmLife Lifestyle",
	                                "subMarketingName": "AmLifestyle",
	                                "subDeploymentPackageName":"AmLifeLifestyle_0_33_14_0",
	                                 "DeploymentPackageType":"pxdpz",
	                                "subDeploymentPackageVersion":"3.0",
	                                "subDeploymentPackageDeploymentDate":"02-04-2014"
	                            },{
	                                "subProductCode": "ULRP6",
	                                "subProductName": "AmLife Link",
	                                "subMarketingName": "AmLink",
	                                 "subDeploymentPackageName":"AmLifeLink_0_31_15_0",
	                                 "DeploymentPackageType":"pxdpz",
	                                "subDeploymentPackageVersion":"1.67",
	                                " subDeploymentPackageDeploymentDate ":"02-04-2011"
	                            }
	                        ]
	                    },                         
	                    {
	                        "productCode": "EN",
	                        "productName": "Endowment Product",
	                        "productCategory":"Wealth",
	                        "productVersion": "0.8",
	                        "productURI": "http://www.example.org/TP",
	                        "subProducts": [
	                            {
	                                "subProductCode": "ALSB",
	                                "subProductName": "AmMetlife SecureBuilder ",
	                                "subMarketingName": "AmMetlife SecureBuilder", 
	                                "subDeploymentPackageName":"AmLifeSecureBuilder_0_44_22_0",
	                                "DeploymentPackageType":"pxdpz",
	                                "subDeploymentPackageVersion":"1.82",
	                                " subDeploymentPackageDeploymentDate ":"02-04-2015"
	                            },
	                           {
	                                "subProductCode": "BTASGP1EPA",
	                                "subProductName": "AmMetlife SecureGuard Plus",
	                                 "subMarketingName": "AmMetlife SecureGuard Plus",
	                                 "subDeploymentPackageName":"AmLifeSecureGuardPlus_0_43_25_0",
	                                 "DeploymentPackageType":"pxdpz",
	                                "subDeploymentPackageVersion":"1.90",
	                                " subDeploymentPackageDeploymentDate ":"08-04-2015" 
	                         },{
	                                "subProductCode": "BTAS3G1WPA",
	                                "subProductName": "Secure Wealth",
	                                 "subMarketingName": "Secure Wealth",
	                                 "subDeploymentPackageName":"AmLifeSecureWealth_0_32_15_0",
	                                 "DeploymentPackageType":"pxdpz",
	                                "subDeploymentPackageVersion":"1.16",
	                                " subDeploymentPackageDeploymentDate ":"04-04-2015"
	                         }
	                        ]
	                    }
	                ]
	          }
	 }       
	} 
;

		if((request.transaction.header) && (request.transaction.type) && (request.transaction.parameters))
		{
			if(request.transaction.type=="getAdvertismentContentList")
			{
				return successObjectAd;				
			}
			else if(request.transaction.type=="login")
				{
				   if((request.transaction.parameters.username=="Ag111111") && (request.transaction.parameters.password=="a")
				   || (request.transaction.parameters.username=="Ag222222") && (request.transaction.parameters.password=="a")
				   || (request.transaction.parameters.username=="Ag333333") && (request.transaction.parameters.password=="a")
				   || (request.transaction.parameters.username=="Ag444444") && (request.transaction.parameters.password=="a")	  
				   || (request.transaction.parameters.username=="Salesdemo") && (request.transaction.parameters.password=="Metlife1")
				   ) 
				   {
					return successObjectlogin;
					   }
				   else
					   return failureObjectlogin;   
				}
			else if(request.transaction.type=="getProductList")
			{
				return successObjectProdList;
			}
			else if(request.transaction.type=="getAgentDetails")
			{
				return agentDetails;
			}
		
		}
	
		else
		{	
			return errorObject;
		}
	
}//function over
