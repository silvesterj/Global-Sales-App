
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/phoneDialer/phoneDialer.js in folder common */
'use strict';
angular.module('phoneDialer', []).factory(
	'phoneDialer', function() {
		return {
			dial : function(phnum){
				cordova.exec(null, null, "PhoneDialer", "dialPhone", [{"number":phnum,}]);
			}
		};
	});