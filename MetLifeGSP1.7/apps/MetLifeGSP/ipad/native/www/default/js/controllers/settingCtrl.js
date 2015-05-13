
/* JavaScript content from js/controllers/settingCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : < settingCtrl.js >
* This is the controller js file for settings page*
*
* @author <Abhisek Bhattacharyya>
* @version <1.5> *
*/ 



app.controller('SettingCtrl', function($scope,$logger,$compile,$location,$rootScope,$adapterUtility,$commonUtility,$jsonStore) {
	
	$scope.downloadCount=$rootScope.notDownloadedProductCount;



$scope.table = 'settings';
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
 /* useing the camera  taking  customer pic.*/
 $scope.camera_pic = function() {
		 navigator.camera.getPicture(
			        function(data) {
			             var smallImage = document.getElementById('agentImage');
			            smallImage.style.visibility = "visible";
			            smallImage.style.display = "block";
			          //  smallImage.src = "data:image/jpeg;base64," + data;
			           // $scope.customer.customerImageSmallPath="data:image/jpeg;base64," + data;
			            smallImage.src = data;
			            $scope.settings.imagePath=data;
			            $rootScope.settingsObject.imagePath=data;
			            $scope.agentPic = data;
			          },
			        function(e) {
			            console.log("Error getting picture: " + e);
			           },
			        { quality: 60, allowEdit: true, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType : navigator.camera.PictureSourceType.CAMERA});
	};
	 /*end.*/
$scope.goToProductpage=function(){
$location.path("/productsPage");
};
    

$scope.settings=$rootScope.settingsObject;
document.getElementById('agentImage').src=$scope.settings.imagePath;

$scope.updateAgentDetails = function()
{
	var flag=$rootScope.isValid();
    if(flag==true)
    	{
	$scope.dataToUpdate = {_id: 1, json: $scope.settings};
	$jsonStore.updateData($scope.table,$scope.dataToUpdate,
			function (result)
			{    
                $scope.settings_popup_open();
					$scope.content = "<p>Successfuly updated Agent details</p>";
	   		},
	   		function (error)
	   		{
                $scope.settings_popup_open();
					$scope.content = "<p>failed to update agent details</p>";
	   		});
    	}
};

    // SETTINGS popup starts 
			
			$scope.settings_popup_open = function(){
				document.getElementById('settings_popup').style.display = "block";
				document.getElementById('popup_overlay').style.display = "block";
			}
			$scope.delete_popup_close = function(){
				document.getElementById('settings_popup').style.display = "none";
				document.getElementById('popup_overlay').style.display = "none";
			}
		// SETTINGS popup ends 
			
			
			$scope.syncData = function()
			{
				
				WL.JSONStore.get('customer').push().then(function (res) {
					alert("Sync success");
				}).fail(function (errorObject) {
					
					alert("Sync Failure");
				});
				
				

				
			};
		
		/*	$scope.syncSelectData = function()
			{
			var input = {
			adapter : 'customerAdapter',
			procedure : 'getProcedureInCustomerAdapters',
			parameters:[]
			};

			WL.Client.invokeProcedure(input, 
			{
			onSuccess : function(res)
			{
			alert("Sync Success");
			},
			onFailure : function(err)
			{
			alert("Sync Failure");
			}
			}
			).fail(function (errorObject) {
			alert("Failure");
			});
			};*/
			
$scope.syncUpdateData = function()
{
					alert("Sync Update data");

					WL.JSONStore.get('customer').getPushRequired().then(function (res) 
					{						
						alert("Checking if push required is getting required");
						alert(JSON.stringify(res));
						alert("Res Length is"+res.length);
						
						
						var dob;
						var id;
						var salutation;
						var customerName;
						var idType;
						var occupation;
						var occupationCategory;
						var occupationClass;
						var email;
						var smokingHabit;
						var gender;
						var maritalStatus;
						var contactType;
						var contact;
						var alternateContactType;
						var alternateContact;
						var estAnnualIncome;
						var customerImageBigPath;
						var customerImageSmallPath;
						var updatedDate;
						var createdDate;
						
						var operation;
						
						for(var i=0;i < res.length ;i++)
						{
							
							alert("Looping through the results --> row loop count->" + i);
							dob = res[i].json.dob;
							id = res[i].json.id;
							salutation = res[i].json.salutation;
							customerName= res[i].json.customerName;
							idType = res[i].json.idtype;
							occupation = res[i].json.occupation;
							occupationCategory = res[i].json.occupationCategory;
							occupationClass = res[i].json.occupationClass;
							email = res[i].json.email;
							smokingHabit = res[i].json.smokingHabit;
							gender = res[i].json.gender ;
							maritalStatus = res[i].json.maritalStatus;
							contactType = res[i].json.contactType;
							contact = res[i].json.contact;
							alternateContactType = res[i].json.alternateContactType;
							alternateContact = res[i].json.alternateContact;
							estAnnualIncome = res[i].json.estAnnualIncome ;
							customerImageBigPath = res[i].json.customerImageBigPath;
							customerImageSmallPath = res[i].json.customerImageSmallPath;
							updatedDate = res[i].json.updatedDate;
							createdDate = res[i].json.createdDate;
							
							operation = res[i].json._operation;
							
							alert("Operation valuejjkh:"+operation);
							
							if(operation == "add")
							{
								
								alert("Calling add procedure");
								
								var input = {
										adapter : 'customerAdapter',
										procedure : 'addProcedureInCustomerAdapterName',
										parameters:[dob,id,salutation,customerName,idType,occupation,occupationCategory,occupationClass,email,smokingHabit,gender,maritalStatus,contactType,contact,alternateContactType,alternateContact,estAnnualIncome,customerImageBigPath,customerImageSmallPath,updatedDate,createdDate]
										 
										
										};

										WL.Client.invokeProcedure(input, 
												{
												
												onSuccess : function(){alert("success");},
												onFailure : function(){alert("err");}
										}
										).fail(function (errorObject) {
											alert("Failure");
										});
						
								
								
							}
							else
							{
								alert("Calling Update procedure");
								
								var input = {
										adapter : 'customerAdapter',
										procedure : 'replaceProcedureInCustomerAdapterName',
										parameters:[dob,salutation,customerName,idType,occupation,occupationCategory,occupationClass,email,smokingHabit,gender,maritalStatus,contactType,contact,alternateContactType,alternateContact,estAnnualIncome,customerImageBigPath,customerImageSmallPath,updatedDate,createdDate,id]
										 
										
										};

										WL.Client.invokeProcedure(input, 
												{
												
												onSuccess : function(){alert("success");},
												onFailure : function(){alert("err");}
										}
							).fail(function (errorObject) {
							alert("Failure");
							});
								
							}
						}
				});

	};
					
										
});



