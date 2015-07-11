<?xml version = "1.0" ?>
<MessageModule name = "FPMUtil">
	<Message id = "DELIV_IMPORT_NOT_REVERTED"   message = "Warning: Deliverable '%1' (%2) has been imported already; this import is not reverted after the failing import of Deliverable '%3' (%4)."/>
	<Message id = "2X_IMPORT_NOT_SUPPORTED"   message = "Import of a ProductXpress version 2.x package is no longer supported." type = "user" />
	<Message id = "CANNOT_LOAD_TEST_DEPLOYMENT"   message = "Cannot load test deployment in production calculator." type = "user" />
	<Message id = "FPMEXPORT_OWNED_ATTR" message = "Cannot determine 'owned' attribute value from the FPMExport data of Deliverable '%1'."/>
	<Message id = "FPMEXPORT_CHECKEDOUT_ATTR" message = "Cannot determine 'checked-out' attribute value from the FPMExport data of Deliverable '%1'."/>
	<Message id = "FPMEXPORT_CHECKSUM_MISMATCH" message = "Checksum mismatch for the FPMExport data of Deliverable '%1'."/>
	<Message id = "COMPONENT_IS_EDITED" message = "Component %1 is edited by user %2" type = "user"/>
	<Message id = "INTERNAL_ENCRYPTION_ERROR" message = "Internal error during encryption." type = "system"/>
	<Message id = "INTERNAL_DECRYPTION_ERROR" message = "Internal error during decryption." type = "system"/>
	<Message id = "ENCRYPTIONKEY_NOT_FOUND" message = "The indicated encryption key is not present in the key registry (KeyName='%1')." type = "user"/>
	<Message id = "ENCRYPTION_FAILED" message = "Encryption failed (%1).&#xA;Details: %2" type = "system"/>
	<Message id = "DECRYPTION_FAILED" message = "Decryption failed (%1).&#xA;Details: %2" type = "system"/>
	<Message id = "ENCRYPTIONKEY_INVALID" message = "Cannot add invalid key to the key registry." type = "system"/>
	<Message id = "ADDKEY_LABEL_NOT_UNIQUE" message = "Cannot add key; its label ('%1') is already present in the key registry." type = "user"/>
	<Message id = "RELABEL_NOT_UNIQUE" message = "Cannot relabel key; the new label ('%1') is invalid or already present in the key registry." type = "user"/>
	<Message id = "KEY_ID_VALUE_NOT_UNIQUE" message = "Cannot add key '%1'; its id or its value is already present in the key registry." type = "user"/>
	<Message id = "EXPORT_KEY_NOT_FOUND" message = "Cannot export a key that is not present in the key registry." type = "system"/>
	<Message id = "KEY_NOT_SECURE" message = "Could not generate a secure key (%1)." type = "system"/>
	<Message id = "DECRYPTION_VERIFICATION_FAILED" message = "The decryption does not result in the original, unencrypted contents." type = "user"/>
	<Message id = "ENC_IMPORT_FORMAT_ERROR" message = "Encrypted import has incompatible format." type = "user"/>
	<Message id = "NOT_EXTERNAL_TABLE" message = "Table %1 is not external." type = "user"/>
	<Message id = "EXT_TABLE_FILE_FORMAT_ERROR" message = "External table file has incompatible format." type = "user"/>
	<Message id = "EXPIRY_DATE_INVALID" message = "Expiry date cannot be before activation date." type = "user"/>
	<Message id = "MEMBER_HAS_NO_CONTROL_PERMISSION_OVER_DELIV_NO_EXPORT" message = "User %1 does not have control permission over deliverable %2. The user export of this deliverable is not allowed." type = "user" />
	<Message id = "NO_EXPORT_WITH_TRANSFER_OWNERSHIP" message = "Cannot export deliverable on branch with transfer of ownership." type = "user" />
	<Message id = "NO_EXPORT_WITH_EDITS" message = "Cannot export deliverable with pending edits." type = "user" />
	<Message id = "NO_IMPORT_WRONG_USESTATUS" message = "Cannot import Deliverable '%1' because it has UseStatus '%2'." type = "user" />
	<Message id = "NO_IMPORT_PENDING_IMPORT_TRY_AGAIN_LATER" message = "Cannot import Deliverable '%1' because another import for this Deliverable is still in progress or has been terminated unexpectedly. Try to import the same ProductXpress Package later again. In case this message is raised because of an unexpectedly terminated import, have the ProductXpress Repository checked for consistency. For more information on this see the ProductXpress Designer Installation Guide." type = "user" />
	<Message id = "NO_EXPORT_WRONG_USESTATUS" message = "Cannot export Deliverable '%1' because Deliverable '%2' has UseStatus '%3'." type = "user" />
	<Message id = "UNEXPECTED_EXPORTOPTION" message = "Unexpected ExportOption '%1' for Deliverable '%2'." type = "system"/>
	<Message id = "UNEXPECTED_EXPORTOPTION_COMBINATION" message = "Unexpected combination of ExportOptions: '%1' (for Deliverable '%2') while '%3' is used for other Deliverables." type = "system"/>
	<Message id = "INVALID_FILE_TYPE" message = "File '%1' has invalid file type for import. Use only *.pxep(z), *.pxto(z) and *.pxbb(z) files." type = "user"/>
	<Message id = "INVALID_FILE_FORMAT" message = "File '%1' has invalid format for import." type = "user"/>
	<Message id = "INVALID_ARCHIVE_FILE_TYPE" message = "Export archive file has invalid file type '%1'." type = "user"/>
	<Message id = "FPMEXPORT_EXT_FILE_CHECKSUM_MISMATCH" message = "Checksum mismatch for the FPMExport data in external file '%1'."/>
	<Message id = "CREATING_EXPORTARCHIVE_FAILED" message = "Creating Export Archive file '%1' failed. Reason:&#xA; %2"/>
	<Message id = "EXTRACTING_EXPORTARCHIVE_FAILED" message = "Extracting Export Archive file '%1' failed. Reason:&#xA; %2"/>
	<Message id = "INCOMPLETE_EXPORT_ARCHIVE" message = "The Export Archive file '%1' is incomplete: file '%2' is missing." type = "user"/>
	<Message id = "CANNOT_SAVE_ARCHIVE_DP_AS_REGULAR_DP" message = "Cannot save created/loaded archive Deployment Package as regular Deployment Package"/>
	<Message id = "CANNOT_SAVE_REGULAR_DP_AS_ARCHIVE_DP" message = "Cannot save created/loaded regular Deployment Package as archive Deployment Package"/>
	<Message id = "INCOMPLETE_EXPORT_ARCHIVE_CACHE" message = "The Export Archive cache folder '%1' is incomplete: file '%2' is missing." type = "user"/>
	<Message id = "MERGE_SOURCE_PENDINGEDITS" message = "The source deliverable of the merge has pending edits!" type = "user"/>
	<Message id = "MERGE_TARGET_PRIVATECOMPONENT" message = "Changes made to the private version of the component will be lost when merged!" type = "user"/>
	<Message id = "MERGE_NO_MODIFY_PERMISSION" message = "No modify permission!" type = "user"/>
	<Message id = "MERGE_EDITED_BY_OTHER_USER" message = "Edited by other user!" type = "user"/>
	<Message id = "MERGE_EDITED_IN_REPLICA" message = "Edited in replicated version of the deliverable!" type = "user"/>
	<Message id = "MERGE_DIFF_SOURCE_TARGET" message = "Cannot merge between different deliverables!" type = "system"/>
	<Message id = "MERGE_TARGET_HAS_SUCCESSOR" message = "Target deliverable of merge already has a successor version!" type = "user"/>
	<Message id = "MERGE_FIND_RUNNING" message = "Find for merge candidates is already running!" type = "user"/>
	<Message id = "MERGE_MERGE_RUNNING" message = "Merge is already running!" type = "user"/>
	<Message id = "MERGE_COMP_NOT_MERGED_PRESENT_IN_USED" message = "Component is not merged to prevent version conflicts as it is already present in used deliverable %1" type = "user"/>
	<Message id = "REPOSITORY_NAME_ALREADY_EXISTS" message = "Repository with name %1 already exists!" type = "user"/>
	<Message id = "CANNOT_UPLOAD_DELIV_OWNED"   message = "Deliverable '%1' (%2), for which a copy already exists in the source repository, can only be uploaded from a local repository, if both deliverables have status 'not-owned'." type = "user"/>
	<Message id = "NO_UPLOAD_WITH_EDITS" message = "Cannot upload deliverable '%1' (%2) with pending edits." type = "user" />
	<Message id = "NO_UPLOAD_IF_REPLICATED" message = "Cannot upload a replicated deliverable to the source repository: '%1' (%2)." type = "user" />
	<Message id = "REPLICATION_UPDATE_CONFLICT" message = "Update conflict: component cannot be updated by replication, because it is currently being edited." type = "user"/>
	<Message id = "REPLICATION_UPDATE_FIND_RUNNING" message = "Find for components affected by a replication update is already running!" type = "user"/>
	<Message id = "REPLICATION_UPDATE_NOT_APPLY" message = "Cannot update deliverable '%1' (%2) by replication, since it is not a replicated deliverable, or the source deliverable does not exist." type = "user" />
	<Message id = "NO_UPDATE_IF_NOT_REPLICATED" message = "Cannot update a deliverable by replication from the source repository, if it is not a replicated deliverable: '%1' (%2)." type = "user" />
    <Message id = "USER_INTERRUPT" message = "The operation was interrupted by the user." type = "user" />
	<Message id = "NO_PORT_AVAILABLE" message = "The Designer Calculator could not allocate a TCP/IP port in the range %1-%2" type = "user" />
    <Message id = "REPLICATION_SOURCE_NOT_REACHABLE" message = "The source repository is currently not reachable. No replication functions can be performed at this point. Please try again later." type = "user" />
    <Message id = "REPLICATION_LICENSE_EXPIRED" message = "The license for the soure repository has expired." type = "user" />
    <Message id = "REPLICATION_NO_LICENSE_AVAILABLE" message = "A valid license for the source repository could not be obtained." type = "user" />
    <Message id = "REPLICATION_INCOMPATIBLE_VERSION" message = "The replication source repository has an incompatible version." type = "user" />
    <Message id = "REPLICATION_BRANCHTYPE_NOT_IN_SOURCE" message = "Branch type '%1' is not available in the source repsoitory." type = "user" />
    <Message id = "REPLICATION_NOT_CHECKEDIN" message = "Deliverable '%1' (%2) is not checked-in; cannot check out." type = "user" />
    <Message id = "BATCH_ALREADY_RUNNING" message = "There is already a %1 process running; cannot start." type = "user" />
    <Message id = "REMOTE_REPOSITORY_MAINT" message = "Cannot run repository maintenance in remote repository." type = "user" />
    <Message id = "CANNOT_STOP_FPMSERVER" message = "Could not stop Designer server service:&#xA;%1" type = "user" />
    <Message id = "CANNOT_START_FPMSERVER" message = "Could not start Designer server service:&#xA;%1" type = "user" />
    <Message id = "CANNOT_STOP_BATCH" message = "Could not stop %1 process (pid = %2)." type = "user" />
</MessageModule>

