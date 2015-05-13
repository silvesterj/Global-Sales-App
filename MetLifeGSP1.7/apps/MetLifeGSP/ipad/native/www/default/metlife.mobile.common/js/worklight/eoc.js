
/* JavaScript content from metlife.mobile.common/js/worklight/eoc.js in folder common */
'use strict';
angular.module('offlineStorage',[]).factory('offlineStorage', function($rootScope) {
	var isEOCAvailable = false;
     return {
    	 /**
    	  * Function to open Encrypted Offline Cache
    	  */
    	  openEOC : function(credentials, isCreate, successCB, errorCB){
    	 	if (navigator.userAgent.match(/(ipad|iPhone|Android)/) == null
    	 			|| navigator.userAgent.match(/(ipad|iPhone|Android)/) == "null") {
    	 		if(successCB)
    	 			successCB("");
    	 	}
    	 	else{
    	 		WL.EncryptedCache.open(credentials,isCreate, function(status){
    	 			isEOCAvailable = true;
    	 			if(successCB){
    	 				successCB(status);
    	 			}
    	 		},function(error){
    	 			if(errorCB)
    	 				errorCB(error);
    	 		});
    	 	}
    	 },
    	 /**
    	  *  Function to insert value in EOC
    	  * @param key
    	  * @param value
    	  * @param successCB
    	  * @param errorCB
    	  */
    	 setItem : function(key, value, successCB, errorCB){
    	 	if (isEOCAvailable) {
    	 		WL.EncryptedCache.write(key, value,function(status){
    	 			if(successCB){
    	 				successCB(status);
    	 			}
    	 		},function(status){
    	 			if(errorCB){
    	 				errorCB(status);
    	 			}
    	 		});
    	 	}
    	 	else{
    	 		localStorage.setItem(key, value);
    	 		if(successCB){
	 				successCB("");
	 			}
    	 	}
    	 },
    	 /**
    	  *  Function to read value from EOC
    	  * @param key
    	  * @param successCB
    	  * @param errorCB
    	  */
    	 getItem : function(key, successCB, errorCB){
    	 	if (isEOCAvailable) {
    	 		WL.EncryptedCache.read(key,function(value){
    	 			if(successCB){
    	 				$rootScope.$apply(successCB(value));
    	 			}
    	 		},function(status){
    	 			if(errorCB){
    	 				errorCB(status);
    	 			}
    	 		});
    	 	}
    	 	else{
    	 		if(successCB){
    	 			successCB(localStorage.getItem(key));
    	 		}
    	 		else{
    	 			return localStorage.getItem(key);
    	 		}
    	 	}
    	 },
    	 /**
    	  * Function to remove data from EOC
    	  * @param key
    	  * @param successCB
    	  * @param errorCB
    	  */
    	 removeItem : function(key, successCB, errorCB){
    	 	if (isEOCAvailable) {
    	 		WL.EncryptedCache.remove(key,function(status){
    	 			if(successCB){
    	 				successCB(status);
    	 			}
    	 		},function(status){
    	 			if(errorCB){
    	 				errorCB(status);
    	 			}
    	 		});
    	 	}
    	 	else{
    	 		if(successCB){
    	 			successCB(localStorage.removeItem(key));
    	 		}
    	 		else{
    	 			return localStorage.removeItem(key);
    	 		}
    	 	}
    	 }
     };
});