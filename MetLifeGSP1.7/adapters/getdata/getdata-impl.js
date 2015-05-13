/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 *  WL.Server.invokeHttp(parameters) accepts the following json object as an argument:
 *  
 *  {
 *  	// Mandatory 
 *  	method : 'get' , 'post', 'delete' , 'put' or 'head' 
 *  	path: value,
 *  	
 *  	// Optional 
 *  	returnedContentType: any known mime-type or one of "json", "css", "csv", "javascript", "plain", "xml", "html"  
 *  	returnedContentEncoding : 'encoding', 
 *  	parameters: {name1: value1, ... }, 
 *  	headers: {name1: value1, ... }, 
 *  	cookies: {name1: value1, ... }, 
 *  	body: { 
 *  		contentType: 'text/xml; charset=utf-8' or similar value, 
 *  		content: stringValue 
 *  	}, 
 *  	transformation: { 
 *  		type: 'default', or 'xslFile', 
 *  		xslFile: fileName 
 *  	} 
 *  } 
 */

/**
 * @param interest
 *            must be one of the following: world, africa, sport, technology, ...
 *            (The list can be found in http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */
function getStories(interest) {
	path = getPath(interest);
	
	var input = {
	    method : 'get',
	    returnedContentType : 'xml',
	    path : path
	};
	
	
	return WL.Server.invokeHttp(input);
}
/**
 * 
 * @param interest
 *            must be one of the following: world, africa, sport, technology, ...
 *            (The list can be found in http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */
function getdatafromserver(interest) {
	//path = getPath(interest);
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : "/test/Testservice"
	};

	return WL.Server.invokeHttp(input);
}
/**
 * 
 * @param interest
 *            must be one of the following: world, africa, sport, technology, ...
 *            (The list can be found in http://edition.cnn.com/services/rss/)
 * @returns json list of items
 */

function getPath(interest) {
	if (interest == undefined || interest == '') {
		interest = '';
	}else {
		interest = "/test/Testservice";
	}
	return interest ;
}

function getdataHome(){
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : "/test/Home"
		};
	var data= {"responseData":[
	                   		{
	                			"name": "Mrs.A.Smith",
	                			"ID": "E323214",
	                			"Gender":"Female",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1980",
	                			"Profilename":"A Smith Protection",
	                            "Profilename1":"A Smith wealth",
	                            "Profilename2":"A Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,275",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years",
	                			"activeprofile":"active"

	                		},
	                		{
	                			"name": "Mr.C.Smith",
	                			"ID": "E323215",
	                			"Gender":"male",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1981",
	                			"Profilename":"C Smith Protection",
	                            "Profilename1":"C Smith wealth",
	                            "Profilename2":"C Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,256654",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		},
	                		{
	                			"name": "Mrs.K.Smith",
	                			"ID": "E323216",
	                			"Gender":"Female",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1996",
	                			"Profilename":"K Smith Protection",
	                            "Profilename1":"K Smith wealth",
	                            "Profilename2":"K Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,28113",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		},
	                		{
	                			"name": "Mr.S.Smith",
	                			"ID": "E323217",
	                			"Gender":"male",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1975",
	                			"Profilename":"S Smith Protection",
	                            "Profilename1":"S Smith wealth",
	                            "Profilename2":"S Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,222283",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		},
	                		{
	                			"name": "Mrs.H.Smith",
	                			"ID": "E323218",
	                			"Gender":"Female",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1990",
	                			"Profilename":"H Smith Protection",
	                            "Profilename1":"H Smith wealth",
	                            "Profilename2":"H Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,233383",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		},
	                		{
	                			"name": "Mr.B.Smith",
	                			"ID": "E323219",
	                			"Gender":"male",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1981",
	                			"Profilename":"B Smith Protection",
	                            "Profilename1":"B Smith wealth",
	                            "Profilename2":"B Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,2837777",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		},
	                		{
	                			"name": "Mrs.KK.Smith",
	                			"ID": "E323220",
	                			"Gender":"Female",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1982",
	                			"Profilename":"KK Smith Protection",
	                            "Profilename1":"KK Smith wealth",
	                            "Profilename2":"KK Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,283666",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		},
	                		{
	                			"name": "Mr.Z.Smith",
	                			"ID": "E323221",
	                			"Gender":"male",
	                			"Email": "rsmith@gmail.com",
	                			"Mobile": "997472837698",
	                			"DOB":"Jan 25, 1983",
	                			"Profilename":"Z Smith Protection",
	                            "Profilename1":"Z Smith wealth",
	                            "Profilename2":"Z Smith health",
	                			"product":"AmMetlife Secure Gaurd",
	                            "Profileupdatedon":"Jan 16,2015",
	                            "AnnualIncome":"RM 25,000",
	                            "CapitalRequired" :"RM 168,283333",
	                            "Date":"Jan 16,2015",
	                            "AnnualProvision ":"15 Years"
	                		}
	                	]};
	return data;
}
function getdataSetting(){
	
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : "/test/Setting"
		};
	return WL.Server.invokeHttp(input); 
}

function login(param) {
	/*var input = {
	    method : 'post',
	    returnedContentType : 'json',
	    path : "/test/Login",
	    body: {   
	    	'contentType' : 'application/json',         
	         'content' : param
	            }
	};
	return WL.Server.invokeHttp(input);*/
	if(param.username=="ashish" && param.password=="wipro")
		{
		 var data={responseData:true};
		 return data;
		}
	else
		{
		  var data={responseData:true};
		  return data;
		}
	
	
}

function getSecretData(){
	return {
		secretData: '123456'
	};
}


