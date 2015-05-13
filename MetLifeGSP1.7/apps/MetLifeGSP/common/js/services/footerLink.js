

app.service('$Footer', function($rootScope, $location) {
    
    this.init = function()
    {
    	$rootScope.$Footer = {};
    	if($rootScope.isFirstTime)
    	{
    	 $rootScope.$Footer.loginStatus = "login";
    	 $rootScope.isFirstTime = false;
    	}
    	else
    	{
    		$rootScope.$Footer.loginStatus = "logout";
    	}
    
    	
		$rootScope.$Footer.header = "visible";
        $rootScope.$Footer.showFooter = "";
		$rootScope.$Footer.subFooter = "customerAdvice";
        $rootScope.$Footer.preFooter = "customerAdvice";
        $rootScope.$Footer.preSubFooter = "cff";
        $rootScope.$Footer.preprofileFooter = "";
        $rootScope.$Footer.profileStatusFooter = "createCustomer";
        $rootScope.$Footer.cffFooter = "nofamilydetails";
        $rootScope.$Footer.mainTabs = "cff";
      
        	
        $rootScope.$Footer.createCustomer = function(type) {
        	//reseting the all rootScope objects, 
        	//before creating a new customer
        	//alert("arg"+type);
        	if(type && type == "createCustomer"){
        		//alert("reset create customer");
        		$rootScope.resetRootScopeVar(); 
        	}
        	
        	$rootScope.$Footer.mainTabs = "cff";
		    $location.path("/createCustomer");
             $rootScope.$Footer.showFooter = "createCustomer";
             $rootScope.$Footer.subFooter = "cdm_tab1";
             $rootScope.$Footer.profileStatusFooter = type;
            // alert($rootScope.$Footer.profileStatusFooter);
        };
        
        $rootScope.$Footer.customerAdvice = function(id, subid) {
            var temp = id;
            var subTemp = subid;
            $rootScope.$Footer.preprofileFooter = "";
            //alert(id + " ===  id " +subid);
            $location.path("/customerAdvice");
            $rootScope.$Footer.mainTabs = "cff";
           // //alert($rootScope.$Footer.preSubFooter + " == presubfooter ");
             $rootScope.$Footer.showFooter = "customerAdvice";
             $rootScope.$Footer.subFooter = "customerFactFind";
            $rootScope.$Footer.preFooter = temp;
           // $rootScope.$Footer.preSubFooter = subTemp;
            $rootScope.$Footer.cffFooter = subTemp;
            if(temp == "commonProfile")
            {
                $rootScope.$Footer.subFooter = "customerAdvice";
            }
            if($rootScope.$Footer.showFooter == "customerAdvice" && temp == undefined)
            {
                $rootScope.$Footer.preFooter = "customerAdvice";
                $rootScope.$Footer.preSubFooter = "cff";
            }
            if($rootScope.$Footer.preSubFooter  == undefined)
            {
                $rootScope.$Footer.preSubFooter = "cff";
                $rootScope.$Footer.subFooter = "customerFactFind";
            }
            if(subTemp == "familydetails")
            {
                $rootScope.$Footer.preSubFooter = "cff";
                $rootScope.$Footer.subFooter = "customerAdvice";
                $rootScope.$Footer.mainTabs = "cff";
            }
            if(subTemp == "recordofadvice")
            {
                $rootScope.$Footer.preprofileFooter = "recordofadvice";
                $rootScope.$Footer.subFooter = "customerAdvice";
                $rootScope.$Footer.mainTabs = "recordofadvice";
            }
            if($rootScope.$Footer.cffFooter == undefined)
            {
            	$rootScope.$Footer.cffFooter = "nofamilydetails";
            }
           // alert( $rootScope.$Footer.preSubFooter);
           //alert($rootScope.$Footer.showFooter + " == " + $rootScope.$Footer.subFooter + " == " + $rootScope.$Footer.preFooter + " == " + $rootScope.$Footer.cffFooter );
        };
        
        $rootScope.$Footer.financialNeed = function(id, mainid, subid) {
        	
            var temp = mainid;
            var tempfooter = id;
            $rootScope.$Footer.mainTabs = "cff";
            $location.path("/financialNeed");
             $rootScope.$Footer.showFooter = "financialNeedAnalysis";
            $rootScope.$Footer.subFooter = temp;
            $rootScope.$Footer.financialNeedFooter = tempfooter;
            $rootScope.$Footer.preSubFooter = subid;
           // alert($rootScope.$Footer.preSubFooter);
        };
        
        $rootScope.$Footer.myContent = function() {
        	 $rootScope.$Footer.mainTabs = "cff";
            $location.path("/myContent");
             $rootScope.$Footer.showFooter = "myContent";
        };
        
        $rootScope.$Footer.home = function(id) {
            var temp = id;
            $location.path("/home");
             $rootScope.$Footer.showFooter = "home";
             $rootScope.$Footer.mainTabs = "cff";
            if(temp == "cdm_tab1" || temp == "cdm_tab2")
            {

                 $rootScope.$Footer.subFooter = temp;
                $rootScope.$Footer.showFooter = "createCustomer";
            }
        };
        
        
       $rootScope.$Footer.selectCustomer = function(id, subid) {
           //alert("coming--->  " + id);
        	var temp = id;
            $location.path("/selectCustomer");
            $rootScope.$Footer.showFooter = temp;
           $rootScope.$Footer.subFooter = temp;
          // $rootScope.$Footer.preSubFooter = "cff";
        	$rootScope.$Footer.cffFooter = "nofamilydetails";
           $rootScope.$Footer.mainTabs = "cff";
            if(temp == "fna_tab1" || temp == "fna_tab2")
            {
            	 $rootScope.$Footer.showFooter = "financialNeedAnalysis";
                 $rootScope.$Footer.subFooter = temp;
            }
           if($rootScope.$Footer.preFooter == "commonProfile")
           {
               $rootScope.$Footer.preFooter = "customerAdvice";
           }
           if($rootScope.$Footer.showFooter == "salesIllustration")
           {
               $rootScope.$Footer.presubFooter = "salesIllustration";
           }
           if($rootScope.$Footer.subFooter == "profileStatus")
           {
               $rootScope.$Footer.showFooter = "customerAdvice";
           }
          
          // alert($rootScope.$Footer.subFooter + " ===> $rootScope.$Footer.subFooter");
        };
        
        $rootScope.$Footer.logout = function() {
        	$rootScope.$Footer.loginStatus = "logout";
            $location.path("/login");
            
        };
        
        $rootScope.$Footer.profileStatus = function(id, subid) {
            var temp = id;
           // alert(subid);
            var subtemp = subid;
           // alert(temp + " == " + subtemp);
            $location.path("/profileStatus");
            $rootScope.$Footer.showFooter = "customerAdvice";
             $rootScope.$Footer.preFooter = temp;
            $rootScope.$Footer.subFooter = "customerAdvice";
            
            $rootScope.$Footer.mainTabs = "cff";
            $rootScope.$Footer.cffFooter = "nofamilydetails";
            if(subtemp != undefined)
            {
            	$rootScope.$Footer.preSubFooter = subtemp;
            }
           // alert($rootScope.$Footer.preSubFooter);
            //$rootScope.$Footer.showFooter = "salesIllustration";
        };
        
        $rootScope.$Footer.salesIllustration = function(id) {
       
        	var temp=id;
            $location.path("/salesIllustration");
            $rootScope.$Footer.showFooter = "salesIllustration";
            $rootScope.$Footer.presubFooter = temp;
           // alert($rootScope.$Footer.presubFooter);
        };
        
        
        
    }
});
