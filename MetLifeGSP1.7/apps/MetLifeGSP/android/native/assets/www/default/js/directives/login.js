
/* JavaScript content from js/directives/login.js in folder common */
// /*********************** Dynamic Header **************************/

// app.directive('ngTableRiderField', function () {
	
        // return {
            // link: function (scope, element, attrs) {
				// if(scope.rider_values.color == "white")
				// {
					// //alert("111111");
					// element.html('<td>'+scope.rider_values.code+'</td><td>'+scope.rider_values.RiderName+'<button class="info_btn"></button></td><td><input type='+scope.rider_values.type+'/>'+scope.rider_values.Term+'</td><td><input type='+scope.rider_values.type+'/>'+scope.rider_values.SumAssured+'</td><td>'+scope.rider_values.Premium+'</td><td><span></span></td>');
				// }
				// else{
					// element.html('<td>'+scope.rider_values.code+'</td><td>'+scope.rider_values.RiderName+'<button class="info_btn"></button></td><td><input type='+scope.rider_values.type+'/>'+scope.rider_values.Term+'</td><td><input type='+scope.rider_values.type+'/>'+scope.rider_values.SumAssured+'</td><td>'+scope.rider_values.Premium+'</td><td><span class="active"></span></td>');
				// }
            // }
        // }
    // });
// /*********************** Dynamic Header **************************/

// app.directive('ngLoginField', function () {
	
        // return {
            // link: function (scope, element, attrs) {
				
				
				// for(i=0; i<scope.loginfield.length; i++)
				// {
					// //alert(scope.loginfield[i].counter);
				// //	alert(scope.loginfield[i].type)
					// if(scope.loginfield[i].type == "submit")
					// {
						// //alert("111111");
						// element.html('<button type='+scope.loginfield[i].type+' ng-click="submit()" />'+scope.loginfield[i].label+'</button>');
						
					// }
					// else if(scope.loginfield[i].counter != undefined)
					// {
						// //alert("22222");
						// element.html('<button>'+scope.loginfield[i].label+'</button> <input type='+scope.loginfield[i].type+' ng-model='+scope.loginfield[i].model+'  placeholder='+scope.loginfield[i].placeholder+ ' />');
					// }
					// else if(scope.loginfield[i].inputfield == "no")
					// {
						// //alert("22222");
						// element.html('<label>'+scope.loginfield[i].label+'</label>');
					// }
					// else
					// {
						// //alert("33333");
						// element.html('<label>'+scope.loginfield[i].label + ' </label> <input type='+scope.loginfield[i].type+' ng-model='+scope.loginfield[i].model+'  placeholder='+scope.loginfield[i].placeholder+ ' />');
						
					// }	
				// }
				
            // }
        // }
    // });

  app.directive(
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