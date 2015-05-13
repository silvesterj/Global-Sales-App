
/* JavaScript content from js/controllers/selectCustomer.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : < settingCtrl.js >
* This is the controller js file for select customer page*
*
* @author <Sanjana G Shet>
* @version <1.0> *
*/ 

// /*********************** Loading Json **************************/

 app.controller('selectCustomerCtrl', function($scope,$location,$rootScope,$adapterUtility,$commonUtility,$jsonStore ) {
	myHeight = document.body.offsetHeight;
	
	var content_elemsdd = document.getElementsByClassName('selctCust_main');
	for(var i = 0; i < content_elemsdd.length; i++) {
		content_elemsdd[i].style.height = (myHeight-240+"px");
	 }
	$scope.advance_srch = true;
/* Income Replacement Assessment starts */
	
	
 });


// /*********************** END *************************************/