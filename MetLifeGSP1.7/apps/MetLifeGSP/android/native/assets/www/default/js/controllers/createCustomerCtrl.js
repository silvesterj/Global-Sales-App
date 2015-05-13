
/* JavaScript content from js/controllers/createCustomerCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : <createCustomerCtrl.js >
* This is the controller js file for create customer page*
*
* @author <Abhisek Bhattacharyya>
* @version <1.2> *
*/ 

// /*********************** Loading Json **************************/

 app.controller('createCustomerCtrl', function($scope, $http,$rootScope,$timeout,$jsonStore, $location,$Language,$Occupation,$validator,$logger,$compile) {
	 
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
	 
	 document.getElementById("settings_img").setAttribute("class","hd_settings");
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
	 

	 
	$scope.customer = {}; //This initializes the customer object as soon as the page loads.
	//alert("checking data:"+$scope.$Language.commonData.gender.male);

	$scope.table = 'customer';
	
	/*myHeight = document.body.offsetHeight;
	var content_elems = document.getElementsByClassName('cdm_main_height');
	for(var i = 0; i < content_elems.length; i++) {
		content_elems[i].style.height = (myHeight-190+"px");
	}
	myHeights = document.body.offsetHeight;
	var content_elemss = document.getElementsByClassName('main_body_inner');
	for(var i = 0; i < content_elemss.length; i++) {
		content_elemss[i].style.height = (myHeights-150+"px");
	}*/
	
	/* loading data  from rootscope to local object if rootscope  customer object is not null*/
	if ($rootScope.customerObject !==undefined && $rootScope.customerObject !==null && Object.keys($rootScope.customerObject).length>0){
		$scope.customer=$rootScope.customerObject.json;
	
		//$scope.customer.dob=$filter("date")($scope.customer.dob, 'MM-dd-yyyy');
		
		$scope.customer.dob=new Date($scope.customer.dob);
		//alert("dob in picker: "+$scope.customer.dob);
		
	}
	else{
		
		$scope.customer.salutation=$scope.$Language.commonData.salutation[0];
		$scope.customer.idtype=$scope.$Language.commonData.idtype[0];
		$scope.customer.maritalStatus=$scope.$Language.commonData.maritalStatus[0];
		$scope.customer.gender=1;
		$scope.customer.contactType=$scope.$Language.commonData.contactnotype[0];
		$scope.customer.alternateContactType=$scope.$Language.commonData.contactnotype[0] ;
		$scope.customer.smokingHabit=false;
	}
	var cdm_cur_tab="cdm_tab1_body";
	var cdm_foot_tab="cdm_tab1";
	$scope.cdmTabClick = function(id) {
		var cdm_foot_id = id;
		 var cdm_clicked_id = (cdm_foot_id+"_body");
		document.getElementById(cdm_foot_tab).setAttribute("class", "foot_li_normal");
		document.getElementById(cdm_foot_id).setAttribute("class", "foot_li_orange");
		document.getElementById(cdm_cur_tab).style.display = "none";
		document.getElementById(cdm_clicked_id).style.display = "block"; 
		cdm_cur_tab = cdm_clicked_id;
		cdm_foot_tab = cdm_foot_id;
    };
    //for Devices that doesn't support HTML5 date input.
    $scope.dateChange=function(){	
    var f=prompt("Please enter DoB","mm/dd/yyyy");
    var dateParts = f.split("/");
    if(dateParts[1]>12)
    	{
    	  alert("Please re-enter the month properly");
    	}
    
    else{
    var date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
    $scope.customer.dob=date;
    $scope.dobYear = date;
	$scope.today = new Date();
	$scope.diff=$scope.today-$scope.dobYear;
	$scope.days=($scope.diff/(1000 * 60 * 60 * 24));
	$scope.years=$scope.days/365;
	$scope.customer.anb= Math.ceil($scope.years);
    }
   	
    
    };
    
	$scope.yearcalculation=function(){
	$scope.dobYear = new Date($scope.customer.dob);
	$scope.today = new Date();
	$scope.diff=$scope.today-$scope.dobYear;
	$scope.days=($scope.diff/(1000 * 60 * 60 * 24));
	$scope.years=$scope.days/365;
	$scope.customer.anb= Math.ceil($scope.years);  //anb is not in the customer collecton, so it is not associated to customer like customer.anb
	};
    
///***************************selecting job************************/
	$scope.setData=function(arg)
	{
		 $scope.customer.occupation=arg;
		 $Occupation.setOccupationDetails(arg,function(val1,val2){
		 $scope.customer.occupationCategory=val2;
     	 $scope.customer.occupationClass=val1;
		 });
		
		
	};
// /****************************************************************/  

// /****************************************************************/ 
	$scope.dateValue=$scope.customer.dob;
	/* useing the camera  taking  customer pic.*/
	 $scope.camera_pic = function() {
			 navigator.camera.getPicture(
				        function(data) {
				             var smallImage = document.getElementById('cam_img');
				            smallImage.style.visibility = "visible";
				            smallImage.style.display = "block";
				          //  smallImage.src = "data:image/jpeg;base64," + data;
				           // $scope.customer.customerImageSmallPath="data:image/jpeg;base64," + data;
				            smallImage.src = data;
				            $scope.customer.customerImageSmallPath=data;
				          },
				        function(e) {
				            console.log("Error getting picture: " + e);
				           },
				        { quality: 60, allowEdit: true, destinationType: navigator.camera.DestinationType.FILE_URI, sourceType : navigator.camera.PictureSourceType.CAMERA});
		};
		 /*end.*/
		
		$scope.createCustomer = function() {
		//	alert("customer on save: "+JSON.stringify($scope.customer));
		  			//removing timestamp and changing the date pattern to mm/dd/yy
		  			/*var date = new Date($scope.customer.dob);
		  			var convertedDob= (date.getMonth()+1) +"/"+date.getDate() +           
		  			"/"+date.getFullYear();
		  			$scope.customer.dob=convertedDob;*/
		  	       
		  			var flag=$rootScope.isValid();
	                if(flag==true)
	                	{
	                	//alert("validation true");
	     //   if($rootScope.customerObject._id !=undefined && $rootScope.customerObject._id != null){
			//$scope.customer.dob=$filter("date")($scope.customer.dob, 'MM-dd-yyyy');
			//alert("dob before save: "+$scope.customer.dob);
		
	    				
			 $scope.queryPart= [{"id":$scope.customer.id}];
				$jsonStore.retriveData($scope.table,$scope.queryPart,function (results){
					
			if(results.length !=0){
				
			
			
	        	$scope.dataToUpdate= [{_id:results[0]._id, json: $scope.customer}];
				$jsonStore.updateData($scope.table,$scope.dataToUpdate,function (s){
				
				 $scope.popupMessage="Updated Successfully.";
				 
					$scope.save_popup_open();
					//$scope.customer.dob=new Date($scope.customer.dob);
				}, function (e){alert(JSON.stringify(e));}) ;
				
   				
	        
	        
	        }else{
	        	if($scope.customer.id !=undefined && $scope.customer.id !=null && $scope.customer.dob!=undefined && $scope.customer.dob!=null){
	            
	        	 $scope.dataToInsert=$scope.customer;
	        	 $jsonStore.insertData($scope.table,$scope.dataToInsert,function (s){
	        		 $scope.popupMessage="Saved Successfully.";
	        		 
   				 $scope.save_popup_open();
   				//$scope.customer.dob=new Date($scope.customer.dob);
   				 
	        	}, function (e){
	        		alert(JSON.stringify(e));
	        		});
	        	}
	        }
	        
		}, function (error){
			$logger.log("ERROR",JSON.stringify(error));
			}) ;
	     // if customer created for first time and not yet saved also,navigating to CFF,
	        //all existing root scope object to be set to null, means start afresh
	    	/*Copy the local scope object to the  Root scope Object*/
	         
	                	//}
	                
	                	}      
	
	       
	        
		};
	       
		$scope.dateData=function(){
			document.getElementById("dateCh").style.display="none";
			var dev=device.model;
			if(dev=="A1-830"){
				 
					document.getElementById("dateChange").appendChild($compile('<input type="date" ng-model="customer.dob"  ng-click="dateChange()"  class="form-control" name="dob" ng-required="true" value="{{customer.dob}}"></input>')($scope)[0]);
					
					 if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					 }
					 
			 }
			 
			 else{
					document.getElementById("dateChange").appendChild($compile('<input type="date" ng-model="customer.dob" ng-change="yearcalculation()" class="form-control" name="dob" ng-required="true" value="{{customer.dob}}"></input>')($scope)[0]);
					
					 if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
					    $scope.$apply();
					 }
			 }
		};
		
		
		
		
		$scope.deleteCustomer=function(){
			if($scope.customer.id){
			$scope.queryPart= [{"id":$scope.customer.id}];
			$jsonStore.retriveData($scope.table,$scope.queryPart,function (results){
				
		if(results.length !=0){
			
			$jsonStore.deleteData($scope.table,results,function (s){
			
			 $scope.popupMessage="Deleted Successfully.";
			 
				$scope.save_popup_open();
				$scope.customer={};
				$scope.customer.salutation=$rootScope.$Language.commonData.salutation[0];
				$scope.customer.idtype=$rootScope.$Language.commonData.idtype[0];
				$scope.customer.maritalStatus=$rootScope.$Language.commonData.maritalStatus[0];
				$scope.customer.gender=1;
				$scope.customer.contactType=$rootScope.$Language.commonData.contactnotype[0];
				$scope.customer.alternateContactType=$rootScope.$Language.commonData.contactnotype[0] ;
				$scope.customer.smokingHabit=false;
				//$scope.customer.dob=new Date($scope.customer.dob);
			}, function (e){alert(JSON.stringify(e));}) ;
			
				
        
        
        }else{

			$scope.popupMessage="No Customer data found to Delete.";
			$scope.save_popup_open();
        }
        
	}, function (error){
		$logger.log("ERROR",JSON.stringify(error));
		}) ;
			
			
			}
			
			
		};
		
	        $scope.gotoFactfind=function(){
	        	// if customer created for first time and not yet saved also,navigating to CFF, all existing root scope object to be set to null, means start afresh
	        	if($rootScope.customerObject == null ||$rootScope.customerObject ==undefined){
	        		$rootScope.resetRootScopeVar();

	        	}
	        	if($rootScope.customerObject._id == undefined ){
	        		$rootScope.customerObject._id=null;
	        	}
	        //	$scope.customer.dob=$filter("date")($scope.customer.dob, 'mm-dd-yyyy');
	        	$rootScope.customerObject.json=$scope.customer;
	        	$rootScope.$Footer.customerAdvice('customerAdvice');

	        };
	        
	        
	        
	        
	        
	        
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
			
 });
 
 


// /*********************** END *************************************/
