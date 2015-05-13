
/* JavaScript content from js/lib/pxCalculator.js in folder common */

/* JavaScript content from js/lib/pxCalculator.js in folder common */

/* JavaScript content from js/lib/pxCalculator.js in folder common */
angular
		.module("PxCalculator", [])
		.service(
				"$PxCalculator",
				function() {
					this.service = "PxCalculator";
					// var
					// productxpressRootPath=cordova.file.applicationStorageDirectory+"/productxpress/";
					var x2js = new X2JS();
					this.initialize = function(path, success, fail) {
						cordova.exec(success, fail, this.service, "initialize",
								[ path ]);
					};
					this.loadDeploymentPackage = function(path, success, fail) {
						cordova.exec(success, fail, this.service,
								"loadDeploymentPackage", [ path ]);
					};

					this.calculate = function(input, success, fail) {
						cordova.exec(function(data) {
							success(x2js.xml_str2json(data))
						}, fail, this.service, "calculate", [input]);
					};
					/*this.calculate = function(input, success, fail) {
						cordova.exec(function(data) {
							success(x2js.xml_str2json(data))
						}, fail, this.service, "calculate", [ x2js
								.json2xml_str(input) ]);
					};*/
					this.unloadDeploymentPackages = function(success, fail) {
						cordova.exec(success, fail, this.service,
								"unloadDeploymentPackages", [ "" ]);
					};

					this.importKey = function(path, success, fail) {
						cordova.exec(success, fail, this.service, "importKey",
								[ path ]);
					};
					this.removeKey = function(path, success, fail) {
						cordova.exec(success, fail, this.service, "removeKey",
								[ path ]);
					};
					this.keyList = function(success, fail) {
						cordova.exec(success, fail, this.service, "keyList", [ "" ]);
					};
					
				});
		
