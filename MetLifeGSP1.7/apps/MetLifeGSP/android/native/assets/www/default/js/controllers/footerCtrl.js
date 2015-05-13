
/* JavaScript content from js/controllers/footerCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : < footerCtrl.js >
* This is the controller js file for create footer*
*
* @author <Ashish Sharma>
* @version <1.1> *
*/ 


// /*********************** Loading Json **************************/

 app.controller('footerCtrl', function($scope, $http,$rootScope,$timeout, $location,$Language ) {
	
	$rootScope.createCustomer = function() {
		
		$location.path("/createCustomer");
	};
	$rootScope.customerAdvice = function() {
		$location.path("/customerAdvice");
		
	};
	$rootScope.financialNeed = function() {
		$location.path("/financialNeed");
	};	
	$rootScope.myContent = function() {
		$location.path("/myContent");
	};
	$rootScope.home = function() {
		$location.path("/home");
	};
	$rootScope.salesIllustration = function() {
		$location.path("/salesIllustration");
	};
 });


// /*********************** END *************************************/