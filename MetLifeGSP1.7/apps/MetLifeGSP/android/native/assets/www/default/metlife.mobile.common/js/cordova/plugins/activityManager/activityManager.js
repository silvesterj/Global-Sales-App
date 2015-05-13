
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/activityManager/activityManager.js in folder common */
angular.module('activityManager', []).factory('activityManager', function () {
return{
	minimize : function(options, sucessCallback, failureCallback) {
		cordova.exec(null, null, "ActivityManager", "minimize",
				[]);
	}
}
});
