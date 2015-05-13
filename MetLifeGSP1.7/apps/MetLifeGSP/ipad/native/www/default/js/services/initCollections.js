
/* JavaScript content from js/services/initCollections.js in folder common */

app.service('$initCollections', function($jsonStore){

        this.init= function(){

        var productList = 'productList';

        var globalData='globalData';

        var customer = 'customer';

        var settings = 'settings';

        var cff= 'cff';

        //var riskProfile = 'riskProfile';

        //var financialNeedsObject = 'financialNeedsObject';

        //var existingPoliciesObject = 'existingPoliciesObject';

        //var familyMemberObject = 'familyMemberObject';

        //var recordOfAdvice = 'recordOfAdvice';

        //var declarationAndAck = 'declarationAndAck';

        //var fna = 'fna';

        var fnaIncomeRA = 'fnaIncomeRA';

        var fnaChildEducation = 'fnaChildEducation';

        var illustration = 'illustration';

        //var lifeAssuredObject = 'lifeAssuredObject';

        //var policyOwnerObject = 'policyOwnerObject';

//var selectedProductObject = 'selectedProductObject';

        //var plan = 'plan';

//var rider = 'rider';

//var fundType = 'fundType';

//var topUp = 'topUp';

//var preferences = 'preferences';

        var credentials = 'credentials';

        var myContent = 'myContent';


        var collections = {};

       

        collections[productList] = {};

        collections[productList].searchFields = {productCode: 'string',productName: 'string',productCategory: 'string',productVersion: 'string',newProductVersion: 'string',productURI: 'string',subProductCode: 'string',subProductName: 'string',subMarketingName: 'string',subDeploymentPackageName: 'string', newSubDeploymentPackageName: 'string',DeploymentPackageType: 'string',subDeploymentPackageVersion: 'string',newSubDeploymentPackageVersion: 'string',subDeploymentPackageDeploymentDate: 'string',newSubDeploymentPackageDeploymentDate: 'string',subProductDownloadStatus: 'string',subProductDetailsJson:'string'};

       

        collections[globalData] = {};

        collections[globalData].searchFields = {dependencyDownloadStatus: 'string'};

       

        collections[myContent] = {};

        collections[myContent].searchFields = {docName: 'string', docMarketingName: 'string', docType: 'string', docVersion: 'string', docDeploymentDate: 'string', categoryName: 'string', productCategory: 'string',docPath:'string',docDownloadStatus:'string',associatedProductName:'string',associatedProductCode:'string',associatedSubProductName:'string',associatedSubProductCode:'string'};


        
        collections[customer] = {};
        

        collections[customer].searchFields = {dob: 'string', id: 'string', salutation: 'string', customerName: 'string', idType: 'string', occupation: 'string', occupationCategory: 'string', occupationClass: 'string', email: 'string', smokingHabit: 'string', gender: 'string', maritalStatus: 'string', contactType: 'string', contact: 'string', alternateContactType: 'string', alternateContact: 'string', estAnnualIncome: 'string', customerImageBigPath: 'string', customerImageSmallPath: 'string', updatedDate: 'string', createdDate: 'string'};
       
    //    collections[customer].searchFields = {dob: 'string', id: 'string', someName: 'string'};
        collections[customer].adapter = 
        {
        	    name: 'customerAdapter',
        	    add: 'addProcedureInCustomerAdapterName',
        	    remove: 'removeProcedureInCustomerAdapterName',
        	    replace: 'replaceProcedureInCustomerAdapterName',
        	    load: {
        	        procedure: 'getProcedureInCustomerAdapters',
        	        params: [],
        	        key: "customers"
        	    },
        	    accept: function (data) 
        	    {
        	         return (data.status === 200);
        	            
        	    },
        	    timeout:5000	
        	};


        collections[settings] = {};

        collections[settings].searchFields = {agentCode: 'string', agentName: 'string', email: 'string', contactNo: 'string', selectedLang: 'string', currencyType: 'string', currencyImagePath: 'string', imagePath: 'string'};

 

       collections[cff] = {};

       collections[cff].searchFields = {familyMemberObject: 'string',  financialNeedsObject: 'string', existingPoliciesObject: 'string', recordOfAdvice: 'string', dob: 'string', id: 'string', profileName: 'string', cffStatus: 'string', updatedDate: 'string', createdDate: 'string', customerAdviceChoice: 'string', termDeclaration: 'boolean', enowmentDeclaration: 'boolean', lifeDeclaration: 'boolean', medicalDeclaration: 'boolean', investmentDeclaration: 'boolean', noOfExistingPolicies: 'string', totalScore: 'string', preference: 'string', noOfFamilyMembers: 'string', noOfRecommendations: 'string', investForDuration: 'string', iCanAcceptRisk: 'string', tolerance: 'string', customerDeclaration1: 'boolean', customerDeclaration2: 'boolean', customerSignImage: 'string', agentStatus: 'string', agentSignImage: 'string'};

      

       //collections[familyMemberObject] = {};

        //collections[familyMemberObject].searchFields = {memberName: 'string', relationship: 'string', gender: 'string', dob: 'string', occupation: 'string', occupationCategory: 'string', occupationClass: 'string', contactType: 'string',contactCode:'string', contact: 'string'};


//collections[financialNeedsObject] = {};

       //collections[financialNeedsObject].searchFields = {financialNeed: 'string', alreadyPlanned: 'string', toDiscuss: 'string', priority: 'string', remarks: 'string', comment: 'string'};*/

      

      // collections[existingPoliciesObject] = {};

      // collections[existingPoliciesObject].searchFields = {policyOwner: 'string', lifeAssured: 'string', company: 'string', planType: 'string', deathBenefits: 'string', disabilityBenefits: 'string', criIllRider: 'string', otherBenefit: 'string', annualPremium: 'string', premiumType: 'string', frequency: 'string', startDate: 'string', maturityDate: 'string', projectedSumMaturity: 'string', affordability: 'string', protection: 'string', retirement: 'string', education: 'string', savings: 'string', investment: 'string', otherIncome: 'string', otherIncomeComment: 'string'};


  //collections[recordOfAdvice] = {};

        //collections[recordOfAdvice].searchFields = {selectedIllustrations: 'string', planType: 'string', sumCovered: 'string', policyOwnerName: 'string', premium: 'string', recommendingReason: 'string', otherRecommendReasons: 'string', term: 'string', additionalCoverage: 'string', frequency: 'string', bought: 'string', actionDescription: 'string'};


       //collections[riskProfile] = {};

       //collections[riskProfile].searchFields = {investForDuration: 'string', iCanAcceptRisk: 'string', tolerance: 'string'};

     

        //collections[declarationAndAck] = {};

        //collections[declarationAndAck].searchFields = {customerDeclaration1: 'boolean', customerDeclaration2: 'boolean', customerSignImage: 'string', agentStatus: 'string', agentSignImage: 'string'};


        //collections[fna] = {};

        //collections[fna].searchFields = {dob: 'string', id: 'string', designedFor: 'string', createDate: 'string', lastUpdateDate: 'string',annualIncome:'string',yearsProtection:'string',capitalRequired:'string'};


        collections[fnaIncomeRA] = {};

        collections[fnaIncomeRA].searchFields = {profileName: 'string',proposalId:'string', dob: 'string', id: 'string', designedFor: 'string', createDate: 'string', lastUpdateDate: 'string', annualIncome: 'string', incomePercentage: 'string', desiredIncome: 'string', inflationRate: 'string', projectionRate: 'string', yearsProtection: 'string', presentValue: 'string', capitalRequired: 'string', existingFunds: 'string', additionalCapital: 'string',status: 'string'};


        collections[fnaChildEducation] = {};

        collections[fnaChildEducation].searchFields = {profileName: 'string',proposalId:'string', dob: 'string', id: 'string', designedFor: 'string', createDate: 'string', lastUpdateDate: 'string', childName: 'string', projectedInflation: 'string', currentAge: 'string', uniEntryAge: 'string', yearsLeftToUni: 'string', year1: 'string', year2: 'string', year3: 'string', year4: 'string', total: 'string', existingSavings: 'string', existingSavingsYield: 'string', futureYearlySavings: 'string', futureYearlySavingsYield: 'string', savingsProjection: 'string', addlFundsRequired: 'string', invstReturnProjection: 'string', optionAYearly: 'string', optionBMonthly: 'string',status: 'string'};


        collections[illustration] = {};

        collections[illustration].searchFields = {profileName: 'string',proposalId:'string', planCode: 'string',  planName: 'string', paymentFrequency: 'string', coverageTerm: 'string', paymentTerm: 'string', totalPremium: 'string', insuredAmount: 'string', insurancePortion: 'string', sustainibilityOption: 'string',withdrawalOption:'string', riders: 'string', funds: 'string', topups: 'string', id: 'string', createdDate: 'string', lastUpdatedDate: 'string', yearlyPremium: 'string', halfYearlyPremium: 'string', quarterlyPremium: 'string', monthlyPremium: 'string', totalRidersPremium: 'string', fundPortfolioName: 'string', salutation: 'string', lifeAssuredName: 'string', dob: 'string',anb:'string', gender: 'string', occupation: 'string',occupationClass: 'string', smokingHabit: 'string', isPlicyOwner: 'string', policyOwnerSalutation: 'string', policyOwnerName: 'string', policyOwnerRelationship: 'string', policyOwnerDob: 'string',policyOwnerAnb: 'string', policyOwnerGender: 'string', policyOwnerOccupation: 'string', policyOwnerOccupationClass: 'string', policyOwnerSmokingHabit: 'string', productCategory: 'string', subProductName: 'string', subProductCode: 'string', sustOptionMaxUpTo: 'string', sustOptionMinUpTo: 'string', cvProjectionTargetValue: 'string', cvProjectionANB: 'string', withdrawalOption: 'string', extendedCoverageOption: 'string',isPolicySustainabilitySelected:'string',isCashValueSelected:'string'};

        

        //collections[lifeAssuredObject] = {};

        //collections[lifeAssuredObject].searchFields = {salutation: 'string', lifeAssuredName: 'string', dob: 'string', gender: 'string', occupation: 'string', occupationClass: 'string', smokingHabit: 'string', isPlicyOwner: 'string'};


        //collections[policyOwnerObject] = {};

        //collections[policyOwnerObject].searchFields = {salutation: 'string', policyOwnerName: 'string', relationship: 'string', dob: 'string', gender: 'string', occupation: 'string', occupationClass: 'string', smokingHabit: 'string'};


        //collections[selectedProductObject] = {};

        //collections[selectedProductObject].searchFields = {productCategory: 'string', subProductName: 'string', subProductCode: 'string'};


//collections[plan] = {};

        //collections[plan].searchFields = {planCode: 'string',  planName: 'string', paymentFrequency: 'string', coverageTerm: 'string', paymentTerm: 'string', yearlyPremium: 'string', insuredAmount: 'string', insurancePortion: 'string', sustainibilityOption: 'string', };


//collections[rider] = {};

        //collections[rider].searchFields = {code: 'string', name: 'string', coverageTerm: 'string', paymentTerm: 'string', insuredAmount: 'string', premium: 'string',riderSelectedStatus:'string'};


//collections[fundType] = {};

        //collections[fundType].searchFields = {fundName: 'string', fundCode: 'string', percentage: 'string'};


//collections[topUp] = {};

        //collections[topUp].searchFields = {year: 'string', amount: 'string'};

//collections[preferences] = {};

        //collections[preferences].searchFields = {sustOptionMaxUpTo: 'string', sustOptionMinUpTo: 'string', cvProjectionTargetValue: 'string', cvProjectionANB: 'string', guaranteedCashPaymentLeaveWithCompany: 'string', guaranteedCashPaymentWithdrawEveryYear: 'string', extendedCoverageOption: 'string'};


        collections[credentials] = {};

        collections[credentials].searchFields = {username: 'string', password: 'string'};


$jsonStore.initCreateTable(collections, function(s){/*alert("success: "+JSON.stringify(s));*/}, function(e){alert("error: "+JSON.stringify(e));});

       

        };        

          

    });

