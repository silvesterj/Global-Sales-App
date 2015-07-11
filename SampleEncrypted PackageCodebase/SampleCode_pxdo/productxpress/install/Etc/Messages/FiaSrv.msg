<?xml version = "1.0" ?>
<MessageModule name = "FiaSrv">
	<Message id = "INV_REQUEST_HEADER"   message = "Invalid request header (%1)" />
	<Message id = "NO_SESSION_FOUND"     type='user' message = "No session information was found at the server. This can be because either a time-out period has expired or the server was restarted, since the last call to the server.  Please retry the same action and if it fails again, restart the application." />
	<Message id = "UNKNOWN_IMPL"         message = "%1: unknown implementation" />
	<Message id = "NO_DISPATCHER"     	 message = "Remote access not possible for implementation '%1'" />
	<Message id = "UNKNOWN_FUNCTION"     message = "Unknown function: %1" />
	<Message id = "TRX_ALREADY_ACTIVE"   message = "Transaction already active" />
	<Message id = "NO_TRX_ACTIVE"        message = "No transaction active" />
	<Message id = "INVALID_REQUEST_SIZE" message = "Invalid request size: %1" />
	<Message id = "NO_COPYBOOK_NAME"     message = "No XIR-NAME found in copy book" />
	<Message id = "INCOMPATIBLE_SIZE"    message = "Copy book '%1': actual size (%2) is not equal to expected size (%3)" />
	<Message id = "INPUT_STREAM_ERROR"   message = "Error reading input stream" />
	<Message id = "INV_AUTHENTICATION"   message = "Invalid username password combination, or user has no access rights" type='user'/>
	<Message id = "READ_PROTECTION"      message = "No permission to read protected attribute '%1'" />
	<Message id = "NO_ACCESS"            message = "No access permission" type = "user"/>
</MessageModule>


