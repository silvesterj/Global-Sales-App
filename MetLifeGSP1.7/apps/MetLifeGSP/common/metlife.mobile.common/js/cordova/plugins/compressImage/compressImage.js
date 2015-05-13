angular.module('compressImage', []).factory('compressImage', function () {
	return{
		compressMultipleImage : function(imagePath, imageDescription, successCallback, errorCallback) {
			cordova.exec(successCallback, errorCallback, "ImageCompressionPlugin", "CompressMultipleImages", [imagePath,imageDescription]);
		}
	};
});