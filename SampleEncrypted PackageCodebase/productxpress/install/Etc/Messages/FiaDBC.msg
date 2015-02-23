<?xml version = "1.0" ?>
<MessageModule name = "FiaDBC">

	<!-- Schema management -->
	<Message id = "ILLEGAL_SCHEMA_TAG"
		message = "Illegal Schema tag: %1." />
	<Message id = "SCHEMA_FILE_MISMATCH"
		message = "Schema name %1 does not match file name %2.dbs" />
	<Message id = "DOM_PARSE_ERROR"
		message = "Error while parsing %1 in %2, line %3: %4"/>
	<Message id = "DOM_EXCEPTION"
		message = "An XML exception (%1) occurred."/>

	<!-- Table specs -->
	<Message id = "ILLEGAL_FIELD_TYPE"
		message = "Illegal Field type: %1"/>
	<Message id = "MISSING_NAME_ATTRIBUTE"
		message = "Error: missing %1 name."/>
	<Message id = "ILLEGAL_CHILD_ELEMENT"
		message = "Illegal &lt;%1&gt; child element: &lt;%2&gt;"/>
	<Message id = "UNKNOWN_INDEX_FIELD"
		message = "No field with name '%1' in table '%2' for index '%3'"/>
	<Message id = "KEY_FIELDS_NOT_ON_TOP"
		message = "The key field '%1' is not at the top of table '%2'"/>
	<Message id = "ELEMENT_MULTIPLY_DEFINED"
		message = "%1 '%2' multiply defined in %3 '%4'"/>

	<!-- Database connection -->
	<Message id = "DBSPEC_SYNTAX_ERROR"
		message = "Syntax error in database spec '%1', should start with '&lt;dbms-name&gt;:'"/>
	<Message id = "DB_DLL_NOT_INSTALLED"
		message = "For DBMS '%1' the following database DLL, or one of its dependencies, must be installed: %2"/>
	<Message id = "DB_DLL_LOAD_ERROR"
		message = "OS error %1 trying to load database DLL: %2"/>
	<Message id = "DLL_FUNCTION_NOT_FOUND"
		message = "Unable to find function '%1' in database DLL: %2"/>
	<Message id = "DBMAP_ACCESS_ERROR"
		message = "Unexpected error accessing DB map."/>

	<!-- DB data exchange -->
	<Message id = "DBDATA_SCHEMA_NAME_MISMATCH"
		message = "Schema '%1' of DB data file '%2' is wrong; expected schema: '%3'" />
	<Message id = "DBDATA_SCHEMA_VERSION_MISMATCH"
		message = "Schema version '%1' of DB data file '%2' is wrong; expected version: '%3'" />
	<Message id = "TABLE_NOT_IN_SCHEMA"
		message = "Table '%1' is not defined in Schema '%2'." />
	<Message id = "FIELD_NOT_TABLE_SCHEMA"
		message = "Field '%1' is not defined in Table '%2' of Schema '%3'." />
	<Message id = "TABLE_NOT_EMPTY"
		message = "Table '%1' of Schema '%2' is not empty." />
</MessageModule>

