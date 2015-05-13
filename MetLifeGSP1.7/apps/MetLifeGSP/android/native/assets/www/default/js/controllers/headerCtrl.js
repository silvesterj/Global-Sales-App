
/* JavaScript content from js/controllers/headerCtrl.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : < headerCtrl.js >
* This is the controller js file for header*
*
* @author <Ashish Sharma>
* @version <1.1> *
*/ 


// /*********************** Loading Json **************************/

 app.controller('headerCtrl', function($scope, $http,$rootScope,$timeout, $location,$Language ) {
	$scope.settingsPage = function (){
		
		$scope.agentPic=$rootScope.settingsObject.imagePath;
		$rootScope.$Footer.showFooter = "home";
		$location.path("/settingsPage");
					
	};
		
		
 });


// /*********************** END *************************************/
