<?xml version = "1.0" ?>
<MessageModule name = "Db2">
	<!-- Database spec -->
	<Message id = "DBSPEC_SYNTAX_ERROR"
		message = "Syntax error in database spec 'Db2:%1' for Db2, should be 'Db2:&lt;user&gt;/&lt;password&gt;@&lt;server&gt;:&lt;schema&gt;'"/>

	<!-- Transaction messages -->
	<Message id = "ALREADY_IN_TRANSACTION"
		message = "Begin Transaction issued when already in transaction."/>
	<Message id = "COMMIT_NOT_IN_TRANSACTION"
		message = "Commit without a preceding Begin Transaction issued."/>
	<Message id = "ROLLBACK_NOT_IN_TRANSACTION"
		message = "Rollback without a preceding Begin Transaction issued."/>

	<!-- DB2 CLI messages, concatenatable -->
	<Message id = "DB2_CLI_MSG"
		message = "%1&#xA;DB2 CLI message: SQLSTATE = %2, Native Code = %3, Text = %4"/>

	<!-- Database access messages -->
	<Message id = "QUERY_EXECUTION_FAILED"
		message = "Execution of query failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "BATCH_EXECUTION_FAILED"
		message = "Execution of batch commands failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "DB2CLI_FUNCTION_FAILED"
		message = "DB2 CLI function '%1' failed, return code = '%2'.&#xA;Details: %3"/>
	<Message id = "DB2CLI_FUNCTION_INFO"
		message = "DB2 CLI function '%1' has info, return code = '%2'.&#xA;Details: %3"/>
	<Message id = "DATA_LENGTH_WRONG"
		message = "Data for type '%1' has incorrect length: %2; expected: %3"/>
</MessageModule>

