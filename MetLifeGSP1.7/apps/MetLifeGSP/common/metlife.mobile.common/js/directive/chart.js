var app = angular.module('chart',[]);

app.directive('chart', function(){
	var renderChart = function(element, id, data , chartLabel, colors){
		 setTimeout(function(){
		 var matrix = [[0,0],[0,0]];
		 matrix[0][0]=data[0];
	     matrix[1][1]=data[1];
	     
	     var chord = d3.layout.chord()
         .padding(0.02)
         .sortSubgroups(d3.descending)
         .matrix(matrix);
        
          var width = 130,
		    height = 140,
		    radius = Math.min(width, height) / 2;
         innerRadius = radius-30,
         outerRadius = radius-1;
   
         // Object that holds color coding for donut segments based on Data Matrix
         var color = d3.scale.ordinal()
         .range(colors);

         var arc = d3.svg.arc()
         .outerRadius(outerRadius)
         .innerRadius(innerRadius);
         
         // Preparing Pie layout to generate Donut
         var pie = d3.layout.pie()
         .sort(null); 
         var svg =  d3.select("#"+id).append("svg")		
         .attr("width", width)
         .attr("height", height)
         .attr("class", 'floatLeft')
         .append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
         // Assigning Data Matrix to svg where donut layout is created
        var objDonut = svg.selectAll(".arc")
         .data(chord.groups)
         .enter().append("g").append("path")
         .attr("d", arc)
         .style("fill", function(d) {
             return color(d.index);
         });
             
        //for label
       var a = "<table class='legend floatRight'>" + "<tbody>";
         for ( var i = 0; i < chartLabel[0].length; i++) {
             a = a + "<tr> " + "<td>" + "<div class='swatch'"
             + "style='border-color:" + color(i)
             + ";'></div>" +

             "</td>" + "<td>" + (chartLabel[0][i]) + "</td></tr>"
         }
         a = a + "</tbody></table>";
         element.append(a);
        },400);
       
	}

    return {
    
    restrict: 'AE',
    
    link:function(scope, element,attrs,ctrls){
    	data = angular.fromJson(attrs.data);
    	colors = angular.fromJson(attrs.colors);
    	
    	var chartLabel =[["<label class='font13px bold'>"+attrs.label+":</label><br/><label class='font13px fontRegular'>$US " + data[0].toFixed(2) + "</label>",
              	   "<label class='font13px bold'>"+attrs.label1+":</label><br/><label class='font13px fontRegular'>$US " + data[1].toFixed(2) + "</label>"]]; 
		 renderChart(element, attrs.id, data, chartLabel, colors);
    }
    }
    
    });