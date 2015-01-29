<?xml version = "1.0" ?>
<MessageModule name = "Clc">
	<Message id = "DELEGATE_CALL_SIGNATURE" message = "Delegate call with wrong function signature for function '%1'" type="user"/>
	<Message id = "DELEGATE_CALL_OBJECT"    message = "Incorrect named object configuration for delegate call in function '%1'" />
	<Message id = "CHECKEDOUT_CONTEXT"      message = "Not allowed to use a checked-out deliverable in calculation." type="user" />
	<Message id = "DEPLOYMENT_NAME_NOT_FOUND" message="Deployment '%1' is unknown." type="user" />
	<Message id = "DEPLOYMENT_VERSION_NOT_FOUND" message="Version '%2' of deployment '%1' is unknown" type="user" />
	<Message id = "DEPLOYMENT_DATE_NOT_FOUND" message="No version of deployment '%1' is known on date '%2'" type="user" />
	<Message id = "DEPLOYMENT_DATE_NOT_UNIQUE" message="There are more versions of deployment '%1' known on date '%2'" type="user" />
	<Message id = "DEPLOYMENT_EXPIRED" message="Deployment package file %1 not loaded while it is expired, expiry date=%2, deployment name=%3." type="user" />
	<Message id = "CALCULATOR_SUSPENDED"    message="Calculator is down for maintenance" type="user" />
	<Message id = "AGGR_SCENARIOS_NOT_ALLOWED"    message="Scenario's are not allowed in aggregations" type="user" />
	<Message id = "CANNOT_CLEAR_WHILE_AGGREGATING"    message="Cannot clear calculator cache when there are active aggregations." type="user" />
	<Message id = "CANNOT_SUSPEND_WHILE_AGGREGATING"    message="Cannot suspend calculator when there are active aggregations." type="user" />
</MessageModule>
