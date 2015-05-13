
/* JavaScript content from js/lib/uiConfigurator.js in folder common */
// /*********************** UI Configurator **************************/


angular.module("uiConfigurator",[]).directive(
			"ui",
			function($compile) {

				return {
					restrict : "E",
					scope:{
					uiScope:"=uiscope"
					},
					link : function(scope, element, attrs) {
							scope.uiScope={};
					
						scope.uiScope.createUi=function(data){
						element.replaceWith($compile(scope.uiScope.createUiTags(data))(scope));
						
						};
						scope.uiScope.createUiTags=function(data){
						var htmldata='';
						
							for(var index in data){
							if(!data[index].hide || data[index].hide==false || data[index].hide=="false"){
						if(data[index].tagName && data[index].tagName!==""){
						htmldata +='<'+data[index].tagName+' ';
						
						
						
						if(data[index].properties && data[index].properties!==""){
						
						
						for(var attr in data[index].properties){
					
		
						htmldata+=attr+'="'+data[index].properties[attr]+'" ';
						}
						}
						htmldata+='> ';
						if(data[index].innerText && data[index].innerText!==""){
						htmldata+=data[index].innerText;
						}
						if(data[index].child && data[index].child!==""){
						htmldata+=scope.uiScope.createUiTags(data[index].child);
						}
						htmldata+='</'+data[index].tagName+'> ';
						
						}
						}
						}
						return htmldata;
						};
						
					}
				};
			});



// /*********************** END *************************************/