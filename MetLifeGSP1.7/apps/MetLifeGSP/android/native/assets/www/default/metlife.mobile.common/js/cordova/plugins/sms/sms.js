
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/sms/sms.js in folder common */
angular.module('sms', []).factory('sms', function () {
	return{
		sendSms : function(number, message, successForSMS, failForSMS) {
			return cordova.exec(successForSMS, failForSMS, 'SMSComposer', 'showSMSComposer', new Array(
					number, message));
		}
	}
});