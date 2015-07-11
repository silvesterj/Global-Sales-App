<?xml version = "1.0" ?>
<MessageModule name = "MySQL">
	<!-- Database spec -->
	<Message id = "DBSPEC_SYNTAX_ERROR"
		message = "Syntax error in database spec 'MySQL:%1' for MySQL, should be 'MySQL:&lt;user&gt;/&lt;password&gt;@&lt;host&gt;#&lt;port&gt;:&lt;database&gt;'"/>
	<Message id = "DBSPEC_INVALID_PORTNO"
		message = "Syntax error in database spec 'MySQL:%1' for MySQL: the port # '%2' is invalid."/>

	<!-- Server initialization -->
	<Message id = "INI_FILE_NOT_FOUND"
		message = "Embedded server initialization file not found: %1"/>
	<Message id = "DATA_DIR_NOT_EXIST"
		message = "Embedded server data directory does not exist: %1"/>

	<!-- Transaction messages -->
	<Message id = "ALREADY_IN_TRANSACTION"
		message = "Begin Transaction issued when already in transaction."/>
	<Message id = "COMMIT_NOT_IN_TRANSACTION"
		message = "Commit without a preceding Begin Transaction issued."/>
	<Message id = "ROLLBACK_NOT_IN_TRANSACTION"
		message = "Rollback without a preceding Begin Transaction issued."/>

	<!-- MySQL messages, concatenatable -->
	<Message id = "MYSQL_MSG"
		message = "%1&#xA;MySQL info: ERROR = %2, SQLSTATE = %3, TEXT = %4"/>

	<!-- Database access messages -->
	<Message id = "QUERY_EXECUTION_FAILED"
		message = "Execution of query failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "BATCH_EXECUTION_FAILED"
		message = "Execution of batch command failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "MYSQL_FUNCTION_FAILED"
		message = "MySQL function '%1' failed.&#xA;Details: %2"/>
	<Message id = "DATA_LENGTH_WRONG"
		message = "Data for type '%1' has incorrect length: %2; expected: %3"/>
</MessageModule>

