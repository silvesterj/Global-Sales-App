angular.module('activityManager', []).factory('activityManager', function () {
return{
	minimize : function(options, sucessCallback, failureCallback) {
		cordova.exec(null, null, "ActivityManager", "minimize",
				[]);
	}
}
});
