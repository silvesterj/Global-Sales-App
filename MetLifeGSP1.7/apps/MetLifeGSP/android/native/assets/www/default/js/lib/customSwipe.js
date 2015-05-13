
/* JavaScript content from js/lib/customSwipe.js in folder common */
var app = angular.module('customswipe', []);
app
				.directive(
						"myswipe",
						function() {

							return {
								restrict : "EA",

								link : function(scope, element, attrs) {
									//scope.pxTableScope = {};
									//alert("from dir: "+JSON.stringify(scope));
									scope.swipeList ={};
								//	alert("dir" + attrs.myswipe);

								//	scope.swipeList[attrs.myswipe] = true;

									var drawTouch = function() {
										var startx, starty, movex, movey,clicked = 0;
										var start = function(e) {
											if (e.targetTouches.length == 1) {
												clicked = 1;
												//    scope.signatureScope.touch = e.targetTouches.length;
												startx = e.changedTouches[0].pageX;
												starty = e.changedTouches[0].pageY;

											}
										};
										var move = function(e) {
											e.preventDefault();
											if (e.targetTouches.length == 1 && clicked) {
												movex = e.changedTouches[0].pageX;
												movey = e.changedTouches[0].pageY;
												if (movex < startx - 100) {

													scope.swipeList[attrs.myswipe] = true;
													if (scope.$root.$$phase != '$apply'
															&& scope.$root.$$phase != '$digest') {
														scope.$apply();
													}
													// alert("l"+scope.swipeList[attrs.myswipe]);

													clicked = 0;
												} else if (movex > startx + 100) {
													//  alert("r");
													scope.swipeList[attrs.myswipe] = false;
													if (scope.$root.$$phase != '$apply'
															&& scope.$root.$$phase != '$digest') {
														scope.$apply();
													}
													//  alert("r"+scope.swipeList[attrs.myswipe]);
													clicked = 0;
												}

											}
										};
										element[0].addEventListener(
												"touchstart", start, false);
										element[0].addEventListener(
												"touchmove", move, false);
									};

									// prototype to      start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
									var drawPointer = function() {
										var startx, starty, movex, movey,clicked = 0;
										var start = function(e) {
											e = e.originalEvent;
											clicked = 1;
											startx = e.pageX;
											starty = e.pageY;

										};
										var move = function(e) {
										if(clicked){
											e.preventDefault();
											e = e.originalEvent;
											movex = e.pageX;
											movey = e.pageY;
										if (movex < startx - 100) {

													scope.swipeList[attrs.myswipe] = true;
													if (scope.$root.$$phase != '$apply'
															&& scope.$root.$$phase != '$digest') {
														scope.$apply();
													}
													// alert("l"+scope.swipeList[attrs.myswipe]);

													clicked = 0;
												} else if (movex > startx + 100) {
													//  alert("r");
													scope.swipeList[attrs.myswipe] = false;
													if (scope.$root.$$phase != '$apply'
															&& scope.$root.$$phase != '$digest') {
														scope.$apply();
													}
													//  alert("r"+scope.swipeList[attrs.myswipe]);
													clicked = 0;
												}
												}
										};
										element[0].addEventListener(
												"MSPointerDown", start, false);
										element[0].addEventListener(
												"MSPointerMove", move, false);
									};

									// prototype to      start drawing on mouse using canvas moveTo and lineTo
									var drawMouse = function() {
										var startx, starty, movex, movey;
										var clicked = 0;

										var start = function(e) {
											//alert("start");
											clicked = 1;

											startx = e.pageX;
											starty = e.pageY;

										};
										var move = function(e) {

											if (clicked) {
												//alert("move");
												movex = e.pageX;
												movey = e.pageY;
												//    console.log("ex:ey  "+e.pageX +":"+e.pageY);
												// console.log("cx:cy  "+canvasOffsetLeft+":"+canvasOffsetTop);
												//  console.log("x:y  "+movex +":"+movey);
												if (movex < startx - 100) {

													scope.swipeList[attrs.myswipe] = true;
													if (scope.$root.$$phase != '$apply'
															&& scope.$root.$$phase != '$digest') {
														scope.$apply();
													}
													// alert("l"+scope.swipeList[attrs.myswipe]);

													clicked = 0;
												} else if (movex > startx + 100) {
													//  alert("r");
													scope.swipeList[attrs.myswipe] = false;
													if (scope.$root.$$phase != '$apply'
															&& scope.$root.$$phase != '$digest') {
														scope.$apply();
													}
													//  alert("r"+scope.swipeList[attrs.myswipe]);
													clicked = 0;
												}

											}
										};
										var stop = function(e) {
											clicked = 0;
										};
										element[0].addEventListener(
												"mousedown", start, false);
										element[0].addEventListener(
												"mousemove", move, false);
										document.addEventListener("mouseup",
												stop, false);
									};
									drawTouch();
									drawPointer();
									drawMouse();

								}
							};
						});