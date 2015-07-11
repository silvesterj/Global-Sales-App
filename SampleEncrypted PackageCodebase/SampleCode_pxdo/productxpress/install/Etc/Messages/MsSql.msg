<?xml version = "1.0" ?>
<MessageModule name = "MsSql">
	<!-- Database spec -->
	<Message id = "DBSPEC_SYNTAX_ERROR"
		message = "Syntax error in database spec 'MsSql:%1' for MsSql, should be 'MsSql:&lt;user&gt;/&lt;password&gt;@&lt;server&gt;:&lt;database&gt;'"/>

	<!-- SQL OLE DB messages, concatenatable -->
	<Message id = "OLE_DB_INFO1"
		message = "%1&#xA;OLE DB info: HRESULT = %2"/>
	<Message id = "OLE_DB_INFO2"
		message = "%1&#xA;OLE DB info: HRESULT = %2, SQLSTATE = %3, Native Error = %4"/>
	<Message id = "OLE_DB_INFO3"
		message = "%1&#xA;OLE DB info: HRESULT = %2, SQLSTATE = %3, Native Error = %4,  Error state = %5, Severity = %6, Text = %7"/>

	<!-- Database access messages -->
	<Message id = "QUERY_EXECUTION_FAILED"
		message = "Execution of query failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "BATCH_EXECUTION_FAILED"
		message = "Execution of batch commands failed:&#xA;%1&#xA;Cause: %2"/>
	<Message id = "OLEDB_FUNCTION_FAILED"
		message = "OLE DB function '%1' failed, HRESULT = %2.&#xA;Details: %3"/>
	<Message id = "DATA_LENGTH_WRONG"
		message = "Data for type '%1' has incorrect length: %2; expected: %3"/>
</MessageModule>

