app.service('$Occupation',function($rootScope,$http){

this.setOccupation=function(callback){
   
	$http.get('json/occupation.json').then(function(values)
	{  var category = [];
       var occupation = [];
       var count=0;
	   for(var dataIndex=0; dataIndex<values.data.length; dataIndex++)
	   { 
    	
		   var occ=values.data[dataIndex].data;
    	   category[dataIndex] = values.data[dataIndex].categoryName;
		 
    	   for(occupationIndex=0;occupationIndex<occ.length;occupationIndex++)
    		   {
    		   
    		     occupation[count]=occ[occupationIndex].occName;
    		     count++;
    		   }
		   
		  
       }
       callback(category,occupation);

	});
};
this.setOccupationName=function(arg,callback){
	   
	$http.get('json/occupation.json').then(function(values)
	{  var category = [];
       var occupation = [];
       var count=0;
       
        for(var dataIndex=0; dataIndex<values.data.length; dataIndex++)
	    { 
        	
       	   category[dataIndex] = values.data[dataIndex].categoryName;
	      
       	   if(category[dataIndex]==arg)
			  {
			
			  var occ=values.data[dataIndex].data;
			  for(occupationIndex=0;occupationIndex<occ.length;occupationIndex++)
    		   {
    		   
    		     occupation[count]=occ[occupationIndex].occName;
    		     count++;
    		   }
			  }
		  }
       callback(occupation);

	});
  };
  this.setOccupationDetails=function(arg,callback){
	   
		$http.get('json/occupation.json').then(function(values)
		{  var category = [];
	       var occupation = [];
	       var count=0;
	       
	        for(var dataIndex=0; dataIndex<values.data.length; dataIndex++)
		    { 
     	       	   category[dataIndex] = values.data[dataIndex].categoryName;
		      
				  var occ=values.data[dataIndex].data;
				  for(occupationIndex=0;occupationIndex<occ.length;occupationIndex++)
	    		   {
	    		      if(occ[occupationIndex].occName==arg)
	    		    	  {
	    		           occClass=occ[occupationIndex].occClass;
	    		           occCategory=category[dataIndex];
	    		    	  }
	    		   }
			  }
			  
	       callback(occClass,occCategory);

		});
	  };
});