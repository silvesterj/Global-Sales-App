
/* JavaScript content from js/lib/jsonStoreUtil.js in folder common */

angular.module('jsonStore', []).factory('$jsonStore', function() {

	var options = {password:"MetLife",localKeyGen:true};
	return {
		initCreateTable : function (collection,successCallback, errorCallback) {
		
				WL.JSONStore.init(collection, {localKeyGen:false}).then(successCallback)
				.fail(function(){
					WL.JSONStore.init(collection, options).then(successCallback).fail(errorCallback);
				});
			
		},
		
		insertData : function (tableName,dataToInsert,successCallback, errorCallback) {
			var option = {
			push:true
			};
			WL.JSONStore.get(tableName).add(dataToInsert,option).then(successCallback).fail(errorCallback);



			
		},
		retriveAllData : function (tableName,successCallback,errorCallback){
			
				WL.JSONStore.get(tableName).findAll().then(successCallback)
				.fail(errorCallback);
			
		},
		//notEqual(searchField, value)
		retriveData : function (tableName,query,successCallback,errorCallback){
			var options = {
					  exact: true
					};
				WL.JSONStore.get(tableName).find(query,options).then(successCallback).fail(errorCallback);
			
		},
		 retriveRecentCustomerData : function (tableName,query,successCallback,errorCallback){
				var options = {
						  exact: false, //default
						  limit: 5 // returns a maximum of 5 documents.
						};
				WL.JSONStore.get(tableName).find(query,options).then(successCallback).fail(errorCallback);
	          	},
		retriveAdvancedSearchedData : function (tableName,query,optQuery,successCallback,errorCallback){
			WL.JSONStore.get(tableName).find(query, optQuery).then(successCallback).fail(errorCallback);
	      },
		
		
		deleteData : function (tableName,query,successCallback,errorCallback){
			var option = {
					push:false
			};
				WL.JSONStore.get(tableName).remove(query, option).then(successCallback).fail(errorCallback);
			
		},
		deleteTable : function (tableName,successCallback,errorCallback){
			WL.JSONStore.get(tableName).removeCollection().then(successCallback).fail(errorCallback);
			
		},
		
		updateData : function (tableName,query,successCallback,errorCallback){
			var option = {
push:true
};
			WL.JSONStore.get(tableName).replace(query, option).then(successCallback).fail(errorCallback);
			
		},
		storedRecordCount : function(tableName, successCallback, errorCallback){
			
				WL.JSONStore.get(tableName).count().then(successCallback).fail(errorCallback);
			
		}
	};
});
