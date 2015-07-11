<?xml version = "1.0" ?>
<MessageModule name = "FiaPOS">

	<!-- AttributeSet -->
	<Message id = "OTHER_ELMT_EXPECTED"
		message = "Invalid element '%1', expecting '%2'." />
	<Message id = "NO_ATTRIBUTE_NAME"
		message = "'Attribute' element requires 'name' attribute." />
	<Message id = "NO_ATTRIBUTE_FIELD"
		message = "No Field defined for Attribute '%1'" />
	<Message id = "NO_ATTR_FIELD_NAME"
		message = "Attribute element '%1': no field name specified." />
	<Message id = "ATTR_MAPPED_FIELD_NOT_FOUND"
		message = "Attribute '%1' mapped to non-existing field '%2' of table '%3'" />

	<!-- PersistentAttributeLoader -->
	<Message id = "NO_F_ID_IN_TABLE"
		message = "No field 'f_id' in table '%1'." />
	<Message id = "FIELD_NOT_IN_ROOTTABLE"
		message = "No field '%1' in root table '%2' for class '%3'" />
	<Message id = "OBJECT_NOT_FOUND_IN_DB"
		message = "Object with id '%1.%2' not found in database" />
	<Message id = "F_ID_NOT_UNIQUE_FOR_CLASS"
		message = "f_id = '%1' not unique for class '%2'" />
	<Message id = "NO_FIELD_FOR_CLASS_ATTR"
		message = "No field defined for attribute '%1' in class '%2'" />

	<!-- PersistentAttributeSaver -->
	<Message id = "NO_F_ID_IN_TABLE_SCHEMA"
		message = "Table '%1' has no field 'f_id' in xml schema definition." />
	<Message id = "FIELD_NOT_IN_ROOTTABLE_SCHEMA"
		message = "Root table '%1' has no field '%2' in xml schema definition." />
	<Message id = "OBJECT_NOT_IN_SYNC_WITH_DB"
		message = "Object with id '%1' not in sync with the database." />
	<Message id = "NO_MAPPING_FOR_ATTR"
		message = "No mapping defined for attribute '%1::m_%2'." />
	<Message id = "ATTR_NOT_IN_CLASS_OR_NO_VALUE"
		message = "No attribute '%1' in class '%2' or no value in table '%3' specified." />

	<!-- PersistentClass -->
	<Message id = "NO_ROOTTABLE_FOR_CLASS"
		message = "No root table specified for class '%1'" />
	<Message id = "NON_EXISTENT_ROOTTABLE"
		message = "Root table '%1' for class '%2' does not exist." />
	<Message id = "TABLE_MULTIPLY_USED_FOR_ATTRSETS"
		message = "Table '%1' multiply used for AttributeSet's of Class '%2'" />
	<Message id = "ATTRSET_QUERYATTR_EXPECTED"
		message = "Invalid element '%1', expecting 'AttributeSet' or 'QueryAttribute'" />
	<Message id = "NON_EXISTENT_ATTRSET_TABLE"
		message = "AttributeSet mapped on non-existing table '%1'" />
	<Message id = "MISSING_ATTRSET_ATTRIBUTES"
		message = "No 'table' or 'ref' specified for AttributeSet of class '%1'" />
	<Message id = "ERROR_DEFINING_ATTRSET"
		message = "Error defining AttributeSet for table '%1'" />
	<Message id = "REF_WITHOUT_CLASS_OWNER"
		message = "Class '%1' has no owner, 'ref' not possible." />
	<Message id = "ERROR_COPYING_ATTRSET"
		message = "Error copying AttributeSet for class '%1'" />
	<Message id = "NO_QUERYATTR_NAME"
		message = "No name specified for QueryAttribute" />
	<Message id = "QUERYATTR_MULTIPLY_DEFINED"
		message = "QueryAttribute '%1' is multiply defined in Class '%2'" />
	<Message id = "ATTRIBUTE_UNDEFINED"
		message = "Attribute '%1' not defined in class '%2'" />

	<!-- PersistentServantManager -->
	<Message id = "NO_MAPPING_FOR_CLASS"
		message = "No mapping defined for class %1." />
	<Message id = "NAMED_ATTRSET_NOT_DEFINED"
		message = "No definition for named AttributeSet '%1'." />
	<Message id = "GLOBAL_QUERYATTR_NOT_DEFINED"
		message = "No definition for global QueryAttribute '%1'." />
	<Message id = "FILE_NOT_FOUND"
		message = "File '%1' not found." />
	<Message id = "FILE_NOT_ACCESSIBLE"
		message = "File '%1' not accessible." />
	<Message id = "DBMAPPING_TOP_EXPECTED"
		message = "Invalid top element '%1', expecting 'DBMapping'" />
	<Message id = "CLASS_ATTRSET_QUERYATTR_EXPECTED"
		message = "Invalid element '%1', expecting 'Class', 'AttributeSet' or 'QueryAttribute'" />
	<Message id = "DOM_PARSE_ERROR"
		message = "DOM error %2 in database mapping file '%1': %3" />
	<Message id = "ERROR_PARSING_DBMAPPING"
		message = "Error parsing database mapping file '%1'" />
	<Message id = "NO_NAME_FOR_CLASS"
		message = "No 'name' attribute specified for 'Class' element" />
	<Message id = "CLASS_MAPPING_MULTIPLY_DEFINED"
		message = "Mapping for class '%1' is multiply defined" />
	<Message id = "ERROR_LOADING_DBMAPPINGS"
		message = "Error while loading database mappings for class '%1'" />
	<Message id = "NO_NAME_FOR_GLOBAL_ATTRSET"
		message = "No 'name' attribute specified for global 'AttributeSet' element" />
	<Message id = "NAMED_ATTRSET_MULTIPLY_DEFINED"
		message = "Named AttributeSet '%1' is multiply defined" />
	<Message id = "NO_TABLE_FOR_ATTRSET"
		message = "No table specified for AttributeSet" />
	<Message id = "NON_EXISTENT_ATTRSET_MAPPING_TABLE"
		message = "AttributeSet mapped on non-existing table '%1'" />
	<Message id = "ERROR_DEFINING_NAMED_ATTRSET"
		message = "Error defining named AttributeSet '%1' for table '%2'" />
	<Message id = "GLOBAL_QUERYATTR_MULTIPLY_DEFINED"
		message = "Global QueryAttribute '%1' is multiply defined" />
	<Message id = "WRONG_SCHEMA_VERSION"
		message = "Incompatible database schema version found '%1' expecting '%2'" />
	<Message id = "WRONG_DATABASE_VERSION"
		   type = "user"
		message = "Incompatible database version found '%1' expecting '%2'" />
	<Message id = "WRONG_DATABASE_SCHEMA"
		message = "Incompatible database schema, table '%1' or field '%2' not defined" />
	<Message id = "SERVER_ON_REMOTE_HOST"
		message = "The server runs on a remote host: %1" />

	<!-- QueryAttribute -->
	<Message id = "NON_EXISTENT_TABLE"
		message = "Table '%1' does not exist." />
	<Message id = "UNEXPECTED_ELMT"
		message = "Unexpected element '%1'." />
	<Message id = "QUERYATTR_ERROR"
		message = "Error in QueryAttribute '%1'." />
	<Message id = "QUERYATTR_FIELD_WITHOUT_NAME"
		message = "No name specified for field in QueryAttribute." />
	<Message id = "NO_TABLE_FOR_QUERYATTR_FIELD"
		message = "No table specified in QueryAttribute for field '%1'." />
	<Message id = "FIELD_NOT_IN_TABLE"
		message = "Field '%1' does not exist in table '%2'" />
	<Message id = "NO_ATTRIBUTE_FOR_CONDITION"
		message = "No attribute specified for Condition." />
	<Message id = "NO_FIELD_FOR_CONDITION"
		message = "No Field name specified for Condition" />
	<Message id = "NO_TABLE_FOR_CONDITION"
		message = "No table specified for condition." />
	<Message id = "INVALID_OPERATOR"
		message = "Invalid operator '%1' in condition." />
	<Message id = "MISSING_IN_JOIN_SPEC"
		message = "'%1' not specified for join" />
	<Message id = "QUERYATTR_MAPPED_FIELD_NOT_FOUND"
		message = "Reused QueryAttribute mapped to non-existing field '%1' of table '%2'" />
	<Message id = "MAPPED_CONDITION_FIELD_NOT_FOUND"
		message = "Condition attribute '%1' mapped to non-existing field '%2' of table '%3'" />
	<Message id = "ILLEGAL_QUERYATTR_LOAD_CLASS"
		message = "Load class '%1' has no AttributeSet tables in common with QueryAttribute '%2.%3'." />
	<Message id = "ILLEGAL_QUERYATTR_LOAD_CLASS_ROOT"
		message = "The root of load class '%1' is not a table of QueryAttribute '%2.%3'." />

	<!-- VCMAssocAttribute -->
	<Message id = "NO_VCMASSOC_NAME"
		message = "No name specified for VCMAssocAttribute" />
	<Message id = "NO_VCMASSOC_TABLE"
		message = "No table specified for VCMAssocAttribute" />
	<Message id = "LINKID_WITHOUT_LINKCLASS"
		message = "A linkId was specified for attribute '%1' in Class '%2', but there was no linkClass." />
	<Message id = "LINKCLASS_NOT_FOUND"
		message = "No class '%1' found in '%2', but it was used as a link class." />
	<Message id = "VCMASSOC_MULTIPLY_DEFINED"
		message = "VCMAssocAttribute '%1' is multiply defined in Class '%2'" />

	<!-- VCMReverseAssoc -->
	<Message id = "NO_REVASSOC_TABLE"
		message = "No name specified for VCMReverseAssociation" />

	<!-- DBConnection -->
	<Message id = "NO_DB_CONNECTION"
		message = "No connection to the database." />

	<Message id = "CONNECTION_CLOSED"
		message = "Connection to the database was already closed." />

</MessageModule>

