
/* JavaScript content from metlife.mobile.common/js/cordova/plugins/fileManager/fileManager.js in folder common */
angular.module('fileManager', []).factory('fileManager', function () {
	// prototype declaration for plugins
	var fileManager = {
		/**
		 * * Save the base64 String as a File file to the specified
		 * directory(i.e. in File folder)
		 * 
		 */
		saveFile : function(successFile,errorFile,args) {
			cordova.exec(successFile, errorFile, "FileManager", "save", args);
		},
		saveOpenFile : function(successSaveOpenFile,errorSaveOpenFile,args) {
			cordova.exec(successSaveOpenFile, errorSaveOpenFile, "FileManager", "saveOpen", args);
		},
		openFile : function(successOpenFile,errorOpenFile,args) {
			cordova.exec(successOpenFile, errorOpenFile, "FileManager", "open", args);
		},
        deleteSavedFile : function(successfulDelete,errorInDelete) {
            if(!successfulDelete){
                successfulDelete = function(data){
                    console.log('deleteFile.js > Success res:'+data);
                };
            }
            if(!errorInDelete){
                errorInDelete = function(error){
                    console.log('deleteFile.js > Err: '+error);
                };
            }
            cordova.exec(successfulDelete, errorInDelete, "FileManager", "delete",
                    []);
       }
	};
	return fileManager;
});