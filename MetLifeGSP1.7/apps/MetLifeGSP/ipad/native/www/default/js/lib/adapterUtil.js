
/* JavaScript content from js/lib/adapterUtil.js in folder common */
 
 //wrapper class for worklight adapter
angular.module("adapterUtility",[]).service('$adapterUtility', function(){	
     this.invoke= function(p1,p2,p3,p4,p5,p6){
    	   var options={},invocationData={};
    	     if(typeof p6 !== "undefined") {
    	              invocationData = {
    	                             adapter : p1,
    	                             procedure : p2,
    	                             parameters : [p3],
    	                             compressResponse : p4

    	                         };
    	                   
    	                   
    	                   options = {
    	                             onSuccess : p5,
    	                             onFailure : p6
    	                         };
    	     }
    	     else if(typeof p5 !== "undefined") {
    	              invocationData = {
    	                             adapter : p1,
    	                             procedure : p2,
    	                             parameters : [p3]
    	                         };
    	                   
    	                   
    	                   options = {
    	                             onSuccess : p4,
    	                             onFailure : p5
    	                         };
    	     }
    	else if(typeof p4 !== "undefined") {
    	     invocationData = {
    	                adapter : p1,
    	                procedure : p2,
    	                parameters : []
    	            };
    	     
    	     
    	     options = {
    	                onSuccess : p3,
    	                onFailure : p4
    	            };
    	     }
    	     
    	     
    	     WL.Client.invokeProcedure(invocationData, options);
     };        
       
 });