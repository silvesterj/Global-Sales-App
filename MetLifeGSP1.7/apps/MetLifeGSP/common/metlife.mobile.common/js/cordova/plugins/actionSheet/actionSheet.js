angular.module('actionSheet', []).factory('actionSheet', function () {
	return{
		actionSheet : function(args, successCallBack) {
			return cordova.exec(successCallBack,null, "ActionSheet","shareText",[args]);
		}
	}
});