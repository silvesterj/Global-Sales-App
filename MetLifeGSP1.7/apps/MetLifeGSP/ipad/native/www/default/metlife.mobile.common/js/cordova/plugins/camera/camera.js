
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/camera/camera.js in folder common */
angular.module('camera', []).factory('camera', function () {
	return{
		takePicture : function(options, successCallback, errorCallback) {
			var cameraOptions = {
					quality : 80,
					maxResolution : 0,
					targetWidth : -1,
					targetHeight : -1,
					allowEdit : true,
					destinationType : 1
			};
			if(options != null && options != undefined){
				if(options.quality != null && options.quality != undefined){
					cameraOptions.quality = options.quality;
				}
				if(options.maxResolution != null && options.maxResolution != undefined){
					cameraOptions.maxResolution = options.maxResolution;
				}
				if(options.targetWidth != null && options.targetWidth != undefined){
					cameraOptions.targetWidth = options.targetWidth;
				}
				if(options.targetHeight != null && options.targetHeight != undefined){
					cameraOptions.targetHeight = options.targetHeight;
				}
				if(options.sourceType != null && options.sourceType != undefined){
					cameraOptions.sourceType = options.sourceType;
				}
			}
			cordova.exec(successCallback, errorCallback, "Camera", "takePicture",
					[ cameraOptions ]);
		},
		getPicture : function(openCameraGallery, successCallback, errorCallback){
			cordova.exec( successCallback, errorCallback, "com.tricedesigns.CameraPlugin", "nativeFunction", [openCameraGallery]);
		}
	};
});