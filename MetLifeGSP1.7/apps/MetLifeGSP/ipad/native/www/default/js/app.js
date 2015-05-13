
/* JavaScript content from js/app.js in folder common */
/* Copyright ©  2015 Wipro Ltd. All Rights Reserved.
*/
/*
*
 * file name : < settingCtrl.js >
* This is the js file where routing is done for navigation *
*
* @author <Sanjana G Shet>
* @version <1.0> *
*/ 

'use strict';
// angular.js main app initialization
var app=angular.module("MetLife",["uiConfigurator","adapterUtility","jsonStore", "commonUtility", "signature", "logger", "PxCalculator","FileUtils", "ngRoute" , "ngSanitize", "pxTable", "nvd3ChartDirectives", "customswipe"]);
    //$rootScope.id="";
	app.run(function($rootScope, $Language) {

	$rootScope.isFirstTime = true;
	$rootScope.customerObject={};
	$rootScope.IscustomerAlredySelected={};
	$rootScope.cffObject={};
	$rootScope.fnaIncomeObject={};
	$rootScope.fnaChildEducationObject={};
	$rootScope.illustrationObject={};//TBD write a reset function to reset the root variables 
	$rootScope.recommendationList=[];
	$rootScope.$productDownloadPercent={};
	$rootScope.$contentDownloadPercent={};
	$rootScope.currentUser={};
	$rootScope.fileUtils={};
	$rootScope.customerAbsentInProfileStatus=null;
	$Language.setLanguage("Language_EN");
	$rootScope.deployedPackages={};
	
	
	/* function to reset the below root scope variables. This function will be used from any controller. */
	$rootScope.resetRootScopeVar = function() {
		$rootScope.customerSelected={};
		$rootScope.customerObject={};
		$rootScope.cffObject={};
		$rootScope.fnaIncomeObject={};
		$rootScope.fnaChildEducationObject={};
		$rootScope.illustrationObject={};
		 };
	});

    app.config(function ($routeProvider) {
      $routeProvider
  	.when('/login', { 
		 
		templateUrl: 'layouts/login.html', controller: 'loginCtrl'
	})
	.when('/productsPage', {
	  
		templateUrl: 'layouts/products.html', controller: 'productsCtrl'
	})
	.when('/home', {
			templateUrl: 'layouts/home.html', controller: 'homeCtrl'
		})
	.when('/createCustomer', {
		templateUrl: 'layouts/createCustomer.html', controller: 'createCustomerCtrl'
	})
    .when('/customerAdvice', {
		templateUrl: 'layouts/customerFactFind.html', controller:'customerFactFindCtrl'
	})
	.when('/salesBasicPlan', {
			templateUrl: 'layouts/salesIllustrationBasicPlan.html', controller: 'salesIllustrationCtrl'
		})
	.when('/settingsPage', {
			templateUrl: 'layouts/settings.html',controller:'SettingCtrl'
		})
	.when('/financialNeed', {
			templateUrl: 'layouts/financialNeedAnalysis.html', controller:'fnaCtrl'
		})
		.when('/salesIllustration', {
			templateUrl: 'layouts/salesIllustration.html', controller:'salesIllustrationCtrl'
		})
    	.when('/myContent', {
			templateUrl: 'layouts/myContent.html', controller:'myContentCtrl'
		})
		.when('/selectCustomer', {
			templateUrl: 'layouts/selectCustomer.html', controller:'selectCustomerCtrl'
		})
        .when('/profileStatus', {
			templateUrl: 'layouts/profileStatus.html', controller:'profileStatusCtrl'
		})
	   .otherwise({ redirectTo: '/login' });
       
    });
    
    app.filter('myFilter', function() {
        return function(items, begin, end) {                                     

            return items.slice( begin, end);
        };
    });




