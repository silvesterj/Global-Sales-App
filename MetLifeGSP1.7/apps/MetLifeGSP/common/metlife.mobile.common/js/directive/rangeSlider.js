var app = angular.module('rangeSlider',[]);

app.directive('rangeSlider', function() {
    return {
	    restrict: 'AE',
	    replace: 'true',
	    scope: {
		    ngModel: '=',
		    step:'@step',
		    min:'@min',
		    max:'@max',
		    width:'@width',
	    	reverse:'@reverse'
	    },
	    //template: "<div class='rangeSlider'><input type='range' class='rangeSliderInput' step='{{step}}' min='{{min}}' max='{{max}}' ng-model='ngModel'/><div class='sliderBar'></div><div class='highlight'></div></div>",
		template: "<div class='rangeSlider'><input type='range' class='rangeSliderInput' step='{{step}}' min='{{min}}' max='{{max}}' ng-model='ngModel'/><div class='sliderBar' style='width:{{width-3}}px'></div><div class='highlight' style='width:{{sliderWidth}}px'></div></div>",
	    link:function(scope, element, attrs,ctrls){
			scope.sliderWidth = scope.width;
		    scope.$watch('ngModel',function(){
		    	if(scope.reverse == 'true'){
		    		scope.sliderWidth = scope.width - scope.width*(scope.ngModel - scope.min)/(scope.max - scope.min);
		    	}
		    	else{
		    		scope.sliderWidth = scope.width*(scope.ngModel - scope.min)/(scope.max - scope.min);
		    	}	
			});
	    }
    };
});