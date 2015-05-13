'use strict';
angular.module('phoneDialer', []).factory(
	'phoneDialer', function() {
		return {
			dial : function(phnum){
				cordova.exec(null, null, "PhoneDialer", "dialPhone", [{"number":phnum,}]);
			}
		};
	});