
/* JavaScript content from js/lib/commonUtil.js in folder common */
// service for common utilities  
angular.module("commonUtility",[]).service('$commonUtility', function(){	
        this.checkNetwork= function(){
        	var networkConnect = navigator.network.connection.type;
		   /* var typeConnect = {};
		    typeConnect[Connection.UNKNOWN]  = 'Unknown connection';
		    typeConnect[Connection.ETHERNET] = 'Ethernet connection';
		    typeConnect[Connection.WIFI]     = 'WiFi connection';
		    typeConnect[Connection.NONE]     = 'No network connection';
        	
            return  typeConnect[networkConnect];*/
        	return networkConnect;
        };        
          
    });

 

