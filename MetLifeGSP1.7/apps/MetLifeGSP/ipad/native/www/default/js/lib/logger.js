
/* JavaScript content from js/lib/logger.js in folder common */
'use strict';
angular.module('logger', []).factory('$logger', function() {
	
	return{
		log : function(logLevel, message){
			var logger = null;
			
				logger = WL.Logger.create({pkg: 'GobalSalesMobileApp'});
			
			
			if(logLevel.toUpperCase() == "LOG"){
				logger.log(message);
				WL.Logger.send();
			}
			else if(logLevel.toUpperCase() == "INFO"){
				logger.info(message);
				WL.Logger.send();
			}
			else if(logLevel.toUpperCase() == "WARN"){
				logger.warn(message);
				WL.Logger.send();
			}
			else if(logLevel.toUpperCase() == "ERROR"){
				logger.error(message);
				WL.Logger.send();
			}
			else{
				logger.debug(message);
				WL.Logger.send();
			}
		}
	};
});