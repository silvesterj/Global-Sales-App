<?xml version = "1.0" ?>
<MessageModule name = "Oracle">
	<!-- Database spec -->
	<Message id = "DBSPEC_SYNTAX_ERROR"
		message = "Syntax error in database spec 'Oracle:%1' for Oracle, should be 'Oracle:&lt;user&gt;/&lt;password&gt;@&lt;server&gt;'"/>

	<!-- Transaction messages -->
	<Message id = "ALREADY_IN_TRANSACTION"
		message = "Begin Transaction issued when already in transaction."/>
	<Message id = "COMMIT_NOT_IN_TRANSACTION"
		message = "Commit without a preceding Begin Transaction issued."/>
	<Message id = "ROLLBACK_NOT_IN_TRANSACTION"
		message = "Rollback without a preceding Begin Transaction issued."/>

	<!-- OCI messages, concatenatable -->
	<Message id = "OCI_MSG"
		message = "%1&#xA;OCI message: Error Code = %2, Text = %3"/>

	<!-- Database access messages -->
	<Message id = "QUERY_EXECUTION_FAILED"
		message = "Execution of query failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "BATCH_EXECUTION_FAILED"
		message = "Execution of batch command failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "OCI_FUNCTION_FAILED1"
		message = "OCI function '%1' failed, return code = '%2'.&#xA;Details: %3"/>
	<Message id = "OCI_FUNCTION_FAILED2"
		message = "OCI function '%1' failed, return code = '%2'."/>
	<Message id = "DATA_LENGTH_WRONG"
		message = "Data for type '%1' has incorrect length: %2; expected: %3"/>
</MessageModule>

