
/* JavaScript content from metlife.mobile.common/js/directive/accordion.js in folder common */
/* JavaScript content from metlife.mobile.common/js/directive/accordion.js in folder common */
var app = angular.module('accordion',[]);

app.directive('accordion', function(){
    return {
    restrict: 'AE',
    scope: {
        callback: '&'
    },
    link:function(scope, element,attrs,ctrls){
			  if(attrs.isOpen=="true"){
				   	element.find('dd').css('display','block');
				  	element.find('dd').addClass('transition');			  		
			  		element.find('dt').removeClass('inactive');
			    }
				else{
					element.find('dt').addClass('inactive');
            	 	element.find('dd').removeClass('transition');
            	 	element.find('dd').css('display','none');
				}
			  if(attrs.isCollapsible=="false"){
				   	element.find('dd').css('display','block');
				  	element.find('dd').addClass('transition');			  		
			  		element.find('dt').removeClass('inactive');
			  		element.find('dt').css({'background-image':'none','padding-right':'15px'});			  		  			
			  		element.find('dt').children().css('width','auto');	  			
			    }
				else{
					element.find('dt').bind('click',function(){
					scope.callback();
	                  if(element.find('dt').hasClass('inactive')){
	                      element.find('dd').addClass('transition');
	                      element.find('dt').removeClass('inactive');
	                      element.find('dd').css('display','block');
	                  }
	                 else{
	            	 	element.find('dt').addClass('inactive');
	            	 	element.find('dd').removeClass('transition');
	            	 	element.find('dd').css('display','none');
	                 }
                 });
	    	
					element.find('dd').bind('click',function(){
				    	scope.callback();
	                    element.find('dt').addClass('inactive');
	                    element.find('dd').removeClass('transition');
	                    element.find('dd').css('display','none');
	                });
				}
         	}
    	};
 });