
/* JavaScript content from js/lib/signature.js in folder common */
angular.module("signature",[]).directive("signature",
              function() {
 
                     return {
                           restrict : "E",
                           scope : {
                                  signatureScope : "=signaturescope"
                           },
                           link : function(scope, element, attrs) {
                                 
                                  scope.signatureScope = {};
                                 
                                  var canvasOffsetTop=0,canvasOffsetLeft=0;
                                  var sigCanvas = document.createElement("canvas");
                                  //sigCanvas.setAttribute("style", "position:absolute !important;");
                                  element[0].appendChild(sigCanvas);
                          
                                 
                                 
                                 
                                         var element=sigCanvas;
                                         while(element){
                                                canvasOffsetTop+=element.offsetTop;
                                                canvasOffsetLeft+=element.offsetLeft;
                                                //alert("offset"+canvasOffsetTop+":"+canvasOffsetLeft);
                                                //alert(element.tagName+element.id+element.className);
                                                element=element.offsetParent;
                                         }
                                       //  alert("total offset"+canvasOffsetTop+":"+canvasOffsetLeft);
                          
                                  var ctx = sigCanvas.getContext('2d');
 
                                  scope.signatureScope.setSignatureWidth = function(
                                                width) {
                                         sigCanvas.width = width;
                                  };
                                  scope.signatureScope.getSignatureWidth = function(
                                                ) {
                                         return sigCanvas.width;
                                  };
                                 
                                  scope.signatureScope.setSignatureHeight = function(
                                                height) {
                                         sigCanvas.height = height;
                                  };
                                  scope.signatureScope.getSignatureHeight = function(
                                                ) {
                                         return sigCanvas.height;
                                  };
                                 
                                  scope.signatureScope.setSignatureBgColor = function(
                                                bgcolor) {
                                         sigCanvas.style.backgroundColor = bgcolor;
                                  };
                                  scope.signatureScope.getSignatureBgColor = function(
                                                ) {
                                         return sigCanvas.style.backgroundColor;
                                  };
                                 
 
                                  scope.signatureScope.setSignatureStrokeColor = function(
                                                sigColor) {
 
                                         ctx.strokeStyle = sigColor;
                                  };
                                  scope.signatureScope.getSignatureStrokeColor = function(
                                                ) {
 
                                         return ctx.strokeStyle;
                                  };
 
                                  scope.signatureScope.setSignatureStrokeWidth = function(
                                                sigWidth) {
 
                                         ctx.lineWidth = sigWidth;
                                  };
                                  scope.signatureScope.getSignatureStrokeWidth = function(
                                                ) {
 
                                         return ctx.lineWidth;
                                  };
 
                                  scope.signatureScope.getSignatureData = function(
                                               ) {
                                        var imgData = ctx.getImageData(0, 0,
                                                       sigCanvas.width,
                                                       sigCanvas.height);
                                	  return sigCanvas.toDataURL();
                                         //callback(imgData);
                                  };
 
                                  scope.signatureScope.clearSignature = function() {
                                         ctx.clearRect(0, 0, sigCanvas.width,
                                                       sigCanvas.height);
                                  };
 
                                  // prototype to      start drawing on touch using canvas moveTo and lineTo
                                  var drawTouch = function() {
 
                                         var start = function(e) {
                                                if (e.targetTouches.length == 1) {
                                                       ctx.beginPath();
                                                       scope.signatureScope.touch = e.targetTouches.length;
                                                       var x = e.changedTouches[0].pageX-canvasOffsetLeft+sigCanvas.scrollLeft;
                                                       var y = e.changedTouches[0].pageY-canvasOffsetTop+sigCanvas.scrollTop;
                                                       ctx.moveTo(x, y);
                                                }
                                         };
                                         var move = function(e) {
                                                e.preventDefault();
                                                if (e.targetTouches.length == 1) {
                                                       var x = e.changedTouches[0].pageX-canvasOffsetLeft+sigCanvas.scrollLeft;
                                                       var y = e.changedTouches[0].pageY-canvasOffsetTop+sigCanvas.scrollTop;
                                               
                                                       ctx.lineTo(x, y);
                                                       ctx.stroke();
                                                }
                                         };
                                         sigCanvas.addEventListener(
                                                       "touchstart", start, false);
                                         sigCanvas.addEventListener("touchmove",
                                                       move, false);
                                  };
 
                                  // prototype to      start drawing on pointer(microsoft ie) using canvas moveTo and lineTo
                                  var drawPointer = function() {
 
                                         var start = function(e) {
                                                e = e.originalEvent;
                                                ctx.beginPath();
                                                var x = e.pageX-canvasOffsetLeft+sigCanvas.scrollLeft;
                                                var y = e.pageY-canvasOffsetTop+sigCanvas.scrollTop;
                                                ctx.moveTo(x, y);
                                         };
                                         var move = function(e) {
                                                e.preventDefault();
                                                e = e.originalEvent;
                                                var x = e.pageX-canvasOffsetLeft+sigCanvas.scrollLeft;
                                                var y = e.pageY-canvasOffsetTop+sigCanvas.scrollTop;
                                                ctx.lineTo(x, y);
                                                ctx.stroke();
                                         };
                                         sigCanvas.addEventListener(
                                                       "MSPointerDown", start, false);
                                         sigCanvas.addEventListener(
                                                       "MSPointerMove", move, false);
                                  };
 
                                  // prototype to      start drawing on mouse using canvas moveTo and lineTo
                                  var drawMouse = function() {
                                         var clicked = 0;
 
                                         var start = function(e) {
//alert("start");
                                                clicked = 1;
                                                ctx.beginPath();
                                                var x = e.pageX-canvasOffsetLeft+sigCanvas.scrollLeft;
                                                var y = e.pageY-canvasOffsetTop+sigCanvas.scrollTop;
                                                ctx.moveTo(x, y);
                                         };
                                         var move = function(e) {
 
                                                if (clicked) {
 
                                                       var x = e.pageX-canvasOffsetLeft+sigCanvas.scrollLeft;
                                                       var y = e.pageY-canvasOffsetTop+sigCanvas.scrollTop;
                                                       //console.log("ex:ey  "+e.pageX +":"+e.pageY);
                                                       //console.log("cx:cy  "+canvasOffsetLeft+":"+canvasOffsetTop);
                                                       //console.log("x:y  "+x +":"+y);
                                                       ctx.lineTo(x, y);
                                                       ctx.stroke();
                                                }
                                         };
                                         var stop = function(e) {
                                                clicked = 0;
                                         };
                                         sigCanvas.addEventListener("mousedown",
                                                       start, false);
                                         sigCanvas.addEventListener("mousemove",
                                                       move, false);
                                         document.addEventListener("mouseup",
                                                       stop, false);
                                  };
                                  if (attrs["signaturewidth"]
                                                && attrs["signaturewidth"] != "") {
 
                                         scope.signatureScope
                                                       .setSignatureWidth(attrs["signaturewidth"]);
                                  } else {
 
                                         scope.signatureScope
                                                       .setSignatureWidth(200);
                                  }
                                  if (attrs["signatureheight"]
                                                && attrs["signatureheight"] !== "") {
                                         scope.signatureScope
                                                       .setSignatureHeight(attrs["signatureheight"]);
                                  } else {
                                         scope.signatureScope
                                                       .setSignatureHeight(200);
                                  }
                                  if (attrs["signaturebgcolor"]
                                                && attrs["signaturebgcolor"] !== "") {
                                         scope.signatureScope
                                                       .setSignatureBgColor(attrs["signaturebgcolor"]);
                                  } else {
                                         scope.signatureScope
                                                       .setSignatureBgColor("#ffffff");
                                  }
                                  if (attrs["signaturestrokewidth"]
                                                && attrs["signaturestrokewidth"] !== "") {
                                         scope.signatureScope
                                                       .setSignatureStrokeWidth(attrs["signaturestrokewidth"]);
                                  }
                                  if (attrs["signaturestrokecolor"]
                                                && attrs["signaturestrokecolor"] !== "") {
                                         scope.signatureScope
                                                       .setSignatureStrokeColor(attrs["signaturestrokecolor"]);
                                  }
 
                                  drawTouch();
                                  drawPointer();
                                  drawMouse();
 
                           }
                     };
              });
