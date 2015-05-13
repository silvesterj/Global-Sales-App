
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/addContact/addContact.js in folder common */
angular.module('addContact', []).factory('addContact', function () {
	return{
		addContact : function(contactInfo,successContact,errorContact) {
			return cordova.exec(successContact,errorContact, "addContact","addInAddressbook",contactInfo);
		}
	}
});