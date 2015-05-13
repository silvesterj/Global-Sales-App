
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/base64Conversion/base64Conversion.js in folder common */
angular.module('base64Conversion', []).factory('base64Conversion', function () {
	return{
		convertToBase64 : function(paths, successCallback, errorCallback) {
			var args = {};
		    if (paths){
		    	args.imagepaths = paths;
		    }
		    cordova.exec(function(compressedImages){
		    	if(successCallback){
		    		if(compressedImages == ""){
		    			successCallback("");
		    		}
		    		else{
		    			successCallback(compressedImages.split(":"));
		    		}
		    		
		    	}
		    }, errorCallback,"ReturnBase64Plugin","convertImgToBase64", [args]);
		}
	};
});