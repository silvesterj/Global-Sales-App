
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/actionSheet/actionSheet.js in folder common */
angular.module('actionSheet', []).factory('actionSheet', function () {
	return{
		actionSheet : function(args, successCallBack) {
			return cordova.exec(successCallBack,null, "ActionSheet","shareText",[args]);
		}
	}
});