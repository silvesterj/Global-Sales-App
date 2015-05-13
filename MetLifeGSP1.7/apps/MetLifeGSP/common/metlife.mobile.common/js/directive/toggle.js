var app = angular.module('toggle',[]);

app.directive('toggle', function(){
	return {
		scope: {  
		ngModel: '='
		},
		require: ['ngModel'],
		link:function(scope, element, attrs,ctrls){
			var ngModelCtrl = ctrls[0];
			ngModelCtrl.$render = function () {
				element.toggleClass('active', angular.equals(ngModelCtrl.$modelValue, attrs.toggle));
			};
			element.bind('click',function(){
				element.parent().children().removeClass('active');
				element.addClass('active');
				scope.$apply(function() {
					scope.ngModel = attrs.toggle;										 
				});
			})
		} 
	}
});