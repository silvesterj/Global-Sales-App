<?xml version="1.0" encoding="iso-8859-1"?>
<MessageModule name="CalcRuntimeConf">
	<Message id="INVALID_ATTRIBUTE_SELECT_TYPE" message="Resource selection attribute %1 is invalid for resource selection type %2."/>
	<Message id="INVALID_ATTRIBUTE_IDENT_TYPE" message="Resource selection attribute %1 is invalid for resource identification type %2."/>
	<Message id="INVALID_IDENT_TYPE" message="Invalid resource identification type: %1."/>
	<Message id="INVALID_SELECTION_TYPE" message="Invalid resource selection type: %1."/>
	<Message id="INVALID_RESOURCE_SELECTOR" message="Invalid resource selector."/>
	<Message id="INVALID_EXTERNAL_ROOT" message="%1 is not an external root of entry point deployment %2." type="user"/>
	<Message id="NO_RESOURCE_SELECTOR_FOUND" message="No resource selector found in for external root %1." type="user"/>
	<Message id="DEPLOYMENT_NAME_NOT_FOUND" message="Deployment with name '%1' is unknown." type="user" />
	<Message id="DEPLOYMENT_ID_NOT_FOUND" message="Deployment with id '%1' is unknown." type="user" />
	<Message id="DEPLOYMENT_VERSION_NOT_FOUND" message="Version '%2' of deployment '%1' is unknown" type="user" />
	<Message id="DEPLOYMENT_DATE_NOT_FOUND" message="No version of deployment '%1' is known on date '%2'" type="user" />
	<Message id="DEPLOYMENT_DATE_NOT_UNIQUE" message="There are more versions of deployment '%1' known on date '%2'" type="user" />
	<Message id="DEPLOYMENT_NAME_DATE_EXIST" message="Deployment with name %1 and active date %2 already exist" type="user" />
	<Message id="DEPLOYMENT_NAME_EXIST_OTHER_LID" message="Name %1 is already in use by another deployment" type="user" />
	<Message id="DEPLOYMENT_NAME_VERSION_EXIST" message="Deployment with name %1 and version %2 already exist" type="user" />
	<Message id="DEPLOYMENT_ALREADY_EXIST" message="Deployment already exist in configuration" type="user" />
	<Message id="HAS_CONFLICTING_VERSIONS" message="Resource configuration '%1' has conflicting deliverable versions" type="user" />
	<Message id="INVALID_NAME" message="Try to set invalid name for configuration" type="user" />
	<Message id="INVALID_URI" message="Try to set invalid URI for configuration" type="user" />
	<Message id="INVALID_DATE" message="Try to set invalid date for configuration" type="user" />
	<Message id="UPDATE_ONLY_SAME_LID" message="Update of a type configuration can only be done with a different version of the configured type deployment" type ="user" />
	<Message id="TYPECONFIG_IS_USED" message="Cannot remove type configuration because it is used by a resource configuration." type="user" />
	<Message id="TYPECONFIG_NOT_ALLOWED" message="Cannot add type deployment for a static deployment." type="user" />
	<Message id="OBJECT_DEPL_NOT_ALLOWED" message="Cannot add object deployment in persistent environment." />
	<Message id="NOT_PERSISTENT" message="Only allowed in persistent environment." />
	<Message id="AMBIGUOUS_MAPPING" message="Ambiguous deferred mapping: variable '%1' is mapped differently in deployments '%2' and '%3'." type="user" />
	<Message id="CONFLICTING_DELIVERABLE_VERSIONS" message="Type provider contains conflicting deliverable versions." type="user" />
	<Message id="CONFIGURATION_NOTVALID" message="Used configuration is not valid." type="user" />
	<Message id="CONFIGURATION_HAS_AMBIGUOUS_TYPE" message="Configuration has ambiguous type with name '%1'." type="user" />
	<Message id="CONFIGURATION_EXT_RES_HAS_NO_SELECTOR" message="Configuration has no external resource selector for external resource with name '%1'." type="user" />
	<Message id="CONFIGURATION_EXT_RES_NOT_ENTRYPOINT" message="External resource with name '%1' is not an entry point in selected resource configuration." type="user" />
	<Message id="CONFIGURATION_EXT_RES_NOT_PRESENT" message="External resource with name '%1' not available through external resource selector." type="user" />
	<Message id="CONFIGURATION_EXT_RES_SELECTOR_HAS_NO_RESULT" message="External resource selector for external resource with name '%1' has no resulting resource configuration." type="user" />
	<Message id="CONFIGURATION_EXT_RES_SELECTOR_HAS_INVALID_RESULT" message="External resource selector for external resource with name '%1' has an invalid resulting resource configuration." type="user" />
	<Message id="CANNOT_LOAD_TEST_DEPLOYMENT" message="Cannot load test deployment in production calculator." type="user" />
	<Message id="REMOVE_RESOURCECONFIG_NOT_ALLOWED" message="Not allowed to remove resource configuration '%1'." type="user" />
	<Message id="NOT_INITIALIZED" message="Runtime configuration not yet loaded" type="user" />
	<Message id="CANNOT_CHANGE_WHILE_AGGREGATING" message="Cannot remove from runtime configuration when there are active aggregations." type="user" />
	<Message id="TEST_TYPE" message="Cannot use test-mode Type Deployment in a normal Runtime Configuration." type="user" />
</MessageModule>
