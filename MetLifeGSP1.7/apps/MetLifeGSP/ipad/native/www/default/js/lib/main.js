
/* JavaScript content from js/lib/main.js in folder common */
function wlCommonInit() {
	// alert("ready");
	// alert(cordova.file.documentsDirectory);
	$filePath = {};
//getting external storage path
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,
			function(fileSystem) {
				$filePath.externalStoragePath = fileSystem.root.fullPath;

			}, function(error) {
				$logger.log("ERROR", JSON.stringify(error));
			});
//getting application storage path
	cordova.exec(function(path) {
		$filePath.applicationStoragePath = path;
}, function(error) {
		$logger.log("ERROR", JSON.stringify(error));
	}, "FilePlugin", "getApplicationStoragePath", [ "" ]);
	
	/*
	 * Application is started in offline mode as defined by a connectOnStartup
	 * property in initOptions.js file. In order to begin communicating with
	 * Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. This will
	 * make Worklight framework automatically attempt to connect to Worklight
	 * Server as a part of application start-up. Keep in mind - this may
	 * increase application start-up time.
	 * 
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is
	 * required. This API needs to be called only once, before any other
	 * WL.Client methods that communicate with the Worklight Server. Don't
	 * forget to specify and implement onSuccess and onFailure callback
	 * functions for WL.Client.connect(), e.g:
	 * 
	 * WL.Client.connect({ onSuccess: onConnectSuccess, onFailure:
	 * onConnectFailure });
	 * 
	 */

	// Common initialization code goes here
	angular.injector([ 'ng', 'MetLife' ]).get("$initCollections").init();
	var collectionName = 'CustomeHistory';
	var collections = {
		CustomeHistory : {
			"name" : "string",
			"ID" : "string",
			"Email" : "string",
			"Mobile" : "string",
			"DOB" : "string",
			"Profilename" : "string",
			"Profilename1" : "string",
			"Profilename2" : "string",
			"product" : "string",
			"Profileupdatedon" : "string",
			"AnnualIncome" : "string",
			"CapitalRequired" : "string",
			"Date" : "string",
			"AnnualProvision " : "string"
		},

		agent : {
			"username" : 'string',
			"password" : 'string',
		}
	};
	WL.JSONStore.init(collections).then(function() {
	}).fail(function(errorObject) {
		// alert("JSONStore Init fail " + "errcode:" + errorObject.err+ " msg:"
		// + errorObject.msg);
	});

}
