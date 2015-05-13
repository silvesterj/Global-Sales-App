/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */



/*******************************************************************************
 * Implementation code for procedure - 'procedure1'
 * 
 * 
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select * from customer");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}


/*******************************************************************************
 * Implementation code for procedure - 'procedure2'
 * 
 * 
 * @return - invocationResult
 */
 
function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}


/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * 
 */
var selectStatement = WL.Server.createSQLStatement("select * from GSPDB.customer");

function getProcedureInCustomerAdapters() 
{
//param = JSON.parse(paramPassed);

return WL.Server.invokeSQLStatement({
preparedStatement : selectStatement,
parameters : []
});
}

/*var selectStatement = WL.Server.createSQLStatement("select * from customer where id=?");

function getProcedureInCustomerAdapters(paramPassed) 
{
	param = JSON.parse(paramPassed);

	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : [param.id]
	});
}
*/


var addStatement = WL.Server.createSQLStatement('insert into GSPDB.customer(dob,id,salutation,customerName,idType,occupation,occupationCategory,occupationClass,email,smokingHabit,gender,maritalStatus,contactType,contact,alternateContactType,alternateContact,estAnnualIncome,customerImageBigPath,customerImageSmallPath,updatedDate,createdDate)' 
+'values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)');

//var addStatement = WL.Server.createSQLStatement('insert into customer(dob,id,someName)' 
//		+'values (?,?,?);');

		
function addProcedureInCustomerAdapterName(paramPassed)
{
	param = JSON.parse(paramPassed);

	param.dob ?'':param.dob='';
	param.id ?'':param.id='';
	param.salutation ?'':param.salutation='';
	param.customerName ?'':param.customerName='';
	param.idType ?'':param.idType='';
	param.occupation ?'':param.occupation='';
	param.occupationCategory ?'':param.occupationCategory='';
	param.occupationClass ?'': param.occupationClass='';
	param.email ?'': param.email ='';
	param.smokingHabit ?'':param.smokingHabit='';
	param.gender ?'': param.gender='';
	param.maritalStatus ?'':param.maritalStatus='';
	param.contactType ?'':param.contactType='';
	param.contact ?'':param.contact='';
	param.alternateContactType ?'':param.alternateContactType='';
	param.alternateContact ? '':param.alternateContact ='';
	param.estAnnualIncome ? '':param.estAnnualIncome='';
	param.customerImageBigPath ? '':param.customerImageBigPath='';
	param.customerImageSmallPath ? '':param.customerImageSmallPath='';
	param.updatedDate ?'':param.updatedDate='';
	param.createdDate ?'':param.createdDate='';


	delete param["idtype"];
	delete param["contactCode"];
	delete param["anb"];


	return WL.Server.invokeSQLStatement
	({
		preparedStatement : addStatement,
		parameters:[param.dob,param.id,param.salutation,param.customerName,param.idType,param.occupation,param.occupationCategory,param.occupationClass,param.email,param.smokingHabit,param.gender,param.maritalStatus,param.contactType,param.contact,param.alternateContactType,param.alternateContact,param.estAnnualIncome,param.customerImageBigPath,param.customerImageSmallPath,param.updatedDate,param.createdDate]
	
	});
	
}



	
var updateStatement = WL.Server.createSQLStatement("update GSPDB.customer set dob=?,salutation=?,customerName=?,idType=?,occupation=?,occupationCategory=?,occupationClass=?,email=?,smokingHabit=?,gender=?,maritalStatus=?,contactType=?,contact=?,alternateContactType=?,alternateContact=?,estAnnualIncome=?,customerImageBigPath=?,customerImageSmallPath=?,updatedDate=?,createdDate=? where id=?");



function replaceProcedureInCustomerAdapterName(paramPassed)
{
	param = JSON.parse(paramPassed);
	
	
	param.dob ?'':param.dob='';
	param.id ?'':param.id='';
	param.salutation ?'':param.salutation='';
	param.customerName ?'':param.customerName='';
	param.idtype ? param.idType = param.idtype :param.idType='';
	param.occupation ?'':param.occupation='';
	param.occupationCategory ?'':param.occupationCategory='';
	param.occupationClass ?'': param.occupationClass='';
	param.email ?'': param.email ='';
	param.smokingHabit ?'':param.smokingHabit='';
	param.gender ?'': param.gender='';
	param.maritalStatus ?'':param.maritalStatus='';
	param.contactType ?'':param.contactType='';
	param.contact ?'':param.contact='';
	param.alternateContactType ?'':param.alternateContactType='';
	param.alternateContact ? '':param.alternateContact ='';
	param.estAnnualIncome ? '':param.estAnnualIncome='';
	param.customerImageBigPath ? '':param.customerImageBigPath='';
	param.customerImageSmallPath ? '':param.customerImageSmallPath='';
	param.updatedDate ?'':param.updatedDate='';
	param.createdDate ?'':param.createdDate='';


	delete param["idtype"];
	delete param["contactCode"];
	delete param["anb"];
	
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters:[param.dob,param.salutation,param.customerName,param.idType,param.occupation,param.occupationCategory,param.occupationClass,param.email,param.smokingHabit,param.gender,param.maritalStatus,param.contactType,param.contact,param.alternateContactType,param.alternateContact,param.estAnnualIncome,param.customerImageBigPath,param.customerImageSmallPath,param.updatedDate,param.createdDate,param.id]
	});
	
}

var deleteStatement = WL.Server.createSQLStatement("delete from customer where COLUMN1=?");

function removeProcedureInCustomerAdapterName(paramPassed) 
{
		
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [param.id]
	});
}
