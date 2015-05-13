
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/emailComposer/emailComposer.js in folder common */
angular.module('emailComposer', []).factory('emailComposer',  function() {
	return{
		/** Function Name: sendEmail
		 *  Logic: Call to the function of email plugin when the email contains image attachments.
		 *  The arguments are:
		 *  params: Javascript object which contains all headers like Subject, To, Text, etc. 
		 *  Will also have 'path' object containing locations of saved image which are to be attached.
		 *  success: Success callback function
		 *  fail: Failure callback function
		 *  The exec function called belongs to cordova. 
		 *  Third last argument in exec function: Name of plugin to be called.
		 *  Second last argument in exec function: Name of action to identify the function that should be called.
		 */
		sendEmail : function(toAddress, subject,emailContent,filepath, success, fail) {		
			cordova.exec(success, fail, "EmailComposer","singleAttachment", [{
				action :"android.intent.action.SEND",
			    path : filepath,
			    type : 'text/plain',
			    subject : subject,
			    text : emailContent,	    			 	
			    to :  toAddress,
			}]);	
		},
		/** Function Name: sendNonEnglishEmail
		 *  Logic: Call to the function of email plugin when the text content contains language other than English.
		 *  The arguments are:
		 *  params: Javascript object which contains all headers like Subject, To, Text, etc. 
		 *  success: Success callback function
		 *  fail: Failure callback function
		 *  The exec function called belongs to cordova. 
		 *  Third last argument in exec function: Name of plugin to be called.
		 *  Second last argument in exec function: Name of action to identify the function that should be called.
		 */
		sendNonEnglishEmail : function(params, success, fail) {
			return cordova.exec(function(args) {
				success(args);
			}, function(args) {
				fail(args);
			}, 'EmailComposer', 'sendNonEnglishEmail', [ params ]);
		},
		/**
		 * prototype declaration for method attachMultipleImages
		 */
		attachMultipleImages : function(params, success, fail) {
			if(params.action == null || params.action == undefined){
				params.action = "android.intent.action.SEND";
			}
			if(params.type == null || params.type == undefined){
				params.type = "image/jpg";
			}
		    return cordova.exec(function(args) {
		    	if(success)
		    		success(args);
		    	}, function(args) {
		    		if(fail)
		    			fail(args);
		    	}, 'WebIntent', 'attachMultipleImages', [ params ]);
		},
		/**
        * Description: Function call to the iPhone email plugin.
        * Contains a set of attributes which are parameters that have to be sent in the
        * mail. Multiple values can be given in a comma separated format. Last argument
        * is for images to be attached. It will contain comma separated string with the
        * fullpath of the temporary location where the images have been stored within
        * the applications sandbox.
        */
		showEmailComposer : function(subject, body,
				toRecipients, ccRecipients, bccRecipients, bIsHTML, imageAttachments,imageNames) {
			var args = {};
			if (toRecipients)
				args.toRecipients = toRecipients;
			if (ccRecipients)
				args.ccRecipients = ccRecipients;
			if (bccRecipients)
				args.bccRecipients = bccRecipients;
			if (subject)
				args.subject = subject;
			if (body)
				args.body = body;
			if (bIsHTML)
				args.bIsHTML = bIsHTML;
			if (imageAttachments)
				args.attachments = imageAttachments;	
			if (imageNames)
				args.imageNames = imageNames;
			cordova.exec(null, null, "com.cordova.emailComposer","showEmailComposer", [args]);	
		}
	};
});