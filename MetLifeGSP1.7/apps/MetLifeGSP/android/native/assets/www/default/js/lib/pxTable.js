
/* JavaScript content from js/lib/pxTable.js in folder common */

/* JavaScript content from js/lib/pxTable.js in folder common */
angular
				.module("pxTable", [])
				.directive(
						"pxtable",
						function($compile) {

							return {
								restrict : "E",
								scope : {
									pxTableScope : "=pxtablescope"
								},
								link : function(scope, element, attrs) {
									scope.pxTableScope = {};

									scope.pxTableScope.createTable = function(
											data) {
									
										element[0].replaceChild($compile(scope.pxTableScope.createTags(data))(
												scope)[0], element[0].childNodes[0]);

									};
									scope.pxTableScope.createTags = function(
											data) {


										//alert("px directive: "+data);
										//alert("px directive: "+JSON.stringify(data));
										var tophead=[]; var head=[];
										var headcount=0;
											scope.header = data.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[0].TableData.Headers.SetElement;
										scope.column = data.CalculationOutput.Calculation.Policy.Features.Tables.SetElement[0].TableData.Columns.SetElement;
										//finding first row data.
										for (var i = 0; i < scope.header.length; i++) {
									
											if(scope.header[i].Parent==""){
									
											tophead.push({"Id":scope.header[i].Id,"Name":scope.header[i].Name});
											}
										}
										head.push(tophead);
										createHead(tophead);
									
									
										//finding all possible row data
										function createHead(subhead){
										var midhead=[];
										for(var t = 0; t < subhead.length; t++){
									
										var childCount=0;
										for (var i = 0; i < scope.header.length; i++) {
										if(scope.header[i].Parent==subhead[t].Id){
										childCount++;
										midhead.push({"Id":scope.header[i].Id,"Name":scope.header[i].Name,"Parent":scope.header[i].Parent});
										}
										}
										
										head[headcount][t].Child=childCount;
										if(childCount>0){
										head[headcount][t].totalChild=childCount;
										}
										else{
										head[headcount][t].totalChild=1;
										}
								
									
										}
										
										if(midhead.length>0){
										head.push(midhead);
										headcount++;
								
											createHead(midhead);
										}
										}
										
										//looping around for rowspan
										for(var i=head.length-3;i>-1;i--){
										for(var h=0; h<head[i].length;h++){
										var count=0;
										for(var s=0; s<head[i+1].length;s++){
										if(head[i+1][s].Parent==head[i][h].Id){
										count+=head[i+1][s].totalChild;
										}
										
										}
										head[i][h].totalChild=count;
										}
										
										}
										
										//forming html upon the generated head object.
									var htmldata = '<div><table>';
									
									for(var h=0;h<head.length;h++){
									htmldata += '<tr>';
										for (var s = 0; s < head[h].length; s++) {
											htmldata += '<th';
											if(h<head.length-1){
											if(head[h][s].Child>0)
											{
											htmldata += ' colspan="'+head[h][s].totalChild+'">';
											}
											else{
										
											var rowspan=head.length-h;
											htmldata += ' rowspan="'+rowspan+'">';
											
											}
											}
											else{
											htmldata += '>';
											}
													htmldata+= head[h][s].Name+ '</th>';
													
										}
										
										htmldata += '</tr>';
										}
										
										for (var row = 0; row < scope.column[0].Values.SetElement.length; row++) {
											htmldata += '<tr>';
											for (var col = 0; col < scope.column.length; col++) {
												htmldata += '<td>'
														+ scope.column[col].Values.SetElement[row].value
														+ '</td>';

											}
											htmldata += '</tr>';
										}
										htmldata += '</table></div>';
										
										return htmldata;
									};

								}
							};
						});