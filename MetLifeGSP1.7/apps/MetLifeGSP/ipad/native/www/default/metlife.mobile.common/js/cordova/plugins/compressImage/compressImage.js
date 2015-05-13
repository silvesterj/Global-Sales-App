
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/compressImage/compressImage.js in folder common */
angular.module('compressImage', []).factory('compressImage', function () {
	return{
		compressMultipleImage : function(imagePath, imageDescription, successCallback, errorCallback) {
			cordova.exec(successCallback, errorCallback, "ImageCompressionPlugin", "CompressMultipleImages", [imagePath,imageDescription]);
		}
	};
});