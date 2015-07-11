<?xml version = "1.0" ?>
<MessageModule name = "FPMTypes">

	<!-- Table -->
	<Message id = "CANNOTADDDIM"   message = "Cannot add dimensions to existing table"/>
	<Message id = "CANNOTDROPDIM"  message = "Cannot drop dimensions of existing table"/>
	<Message id = "DUPLDIMNAME"    message = "Duplicate dimension name: %1"/>
	<Message id = "DIMOUTOFRANGE"  message = "Dimension number %1 out of range (should be less then %2)"/>
	<Message id = "WRONGKEYDIM"    message = "Number of dimensions specified in key (%1) does not match the number of dimensions of the table (%2)"/>
	<Message id = "WRONGITERDIM"   message = "Number of dimensions specified in the iterator (%1) does not match the number of dimensions of the table (%2)"/>
	<Message id = "WRONGITER"      message = "Wrong iterator, not for this table"/>
	<Message id = "NOCOLUMNTYPE"   message = "No data type has been defined for column %1 of table"/>
	<Message id = "NODIMTYPE"      message = "No data type has been defined for dimension %1 of table"/>
	<Message id = "NULLKEY"        message = "[Null] is not a valid key value"/>
	<Message id = "BOUNDSCONFLICT" message = "Invalid key: upper bound (%1) must be greater or equal then lower bound (%2)" type="user"/>
	<Message id = "BOUNDSTYPESERR" message = "Invalid key: upper bound (%1) and lower bound (%2) have incompatible types" type="user"/>
	<Message id = "NOTSINGLE"      message = "Tryin to access Single value function on %1 value TableColumnValue"/>
	<Message id = "NOTRANGE"       message = "Tryin to access Range value function on %1 value TableColumnValue"/>
	<Message id = "NOTSET"         message = "Tryin to access Set value function on %1 value TableColumnValue"/>
	<Message id = "DUPLRANVAL"     message = "Duplicate entry (%1) in range"/>
	<Message id = "WRONGDIMTYPE"   message = "Wrong data type for column %1, expecting %2 getting %3"/>
	<Message id = "INVDIMINSPOS"   message = "Invalid insert position for dimension %1, position = %2 (should be less then or equal to %3)"/>
	<Message id = "INVDIMPOS"      message = "Invalid position for dimension %1, position = %2 (should be less then %3)"/>
	<Message id = "DIMVALNOTFOUND" message = "Value (%1) not found in valid values for dimension %2"/>
	<Message id = "INVTABITER"     message = "Invalid table iterator"/>
	<Message id = "LOOKUPFAILED"   message = "Table lookup failed: no value for %1 in dimension %2" type="user"/>
	<Message id = "DIMVALCONFL"    message = "Dimension value conflict for value %1 in dimension %2 index %3" type="user"/>
	<Message id = "DIMRANCONFL"    message = "Dimension value conflict for range %1, %2 in dimension %3" type="user"/>
	<Message id = "INVTBLXMLTAG"   message = "Unexpected element in table XML"/>
	<Message id = "TABXMLERR"      message = "Parser error in table XML: %1"/>
	<Message id = "XMLTOOMANYVAL"  message = "Too many values in table XML"/>
	<Message id = "XMLNOTBLTYPE"   message = "Table XML error: No data-type attribute in %1 element"/>
	<Message id = "TABLETYPEERR"   message = "Table XML error: Invalid value (%1) specified for data-type attribute in %2 element"/>
	<Message id = "TBLXMLINVVAL"   message = "Table XML error: Invalid value (%1) specified for element %2"/>
	<Message id = "PROPNAMERR"     message = "Invalid (empty) name for table property" type="user"/>
	<Message id = "CHANGE_TYPE_NOT_ALLOWED" message="Change of data type not allowed for dimensions that already contain data" type="user"/> 
	<Message id = "INTERPOLATION_IN_ONE_DIMENSION" message="Interpolation is not allowed for more one than one dimension of the table." type="user"/> 
	<Message id = "INTERPOLATION_IN_SET_RANGE" message="Table lookup for dimension %1: cannot interpolate between sets or ranges." type="user"/>
	<Message id = "TABLE_NO_VALUE" message="No value found in table cell, dimension %1." type="user"/>
	<Message id = "INTERPOLATION_RESULT_REAL" message="Interpolated table must have cell data type real." type="user"/>
	<Message id = "INTERPOLATION_DIMENSION_REAL_INT" message="Interpolated table dimension %1 must have data type real or integer." type="user"/>
	<Message id = "CANNOTADDCOLUMN"   message = "Cannot add column to existing table"/>
	<Message id = "COLUMNINDEXOUTOFRANGE"  message = "Column index %1 out of range (should be less than %2)"/>
	<Message id = "COLUMNNAMENOTUNIQUE"  message = "Column name %1 is not a unique name." type="user"/>
	<Message id = "CANNOTCHANGECOLUMNTYPE"  message = "Cannot change data type of column %1." type="user"/>
	
	<Message id = "CANNOTCHANGEEXTERNALTABLE"  message = "Cannot change an external table."/>
	<Message id = "NOTALLOWEDONEXTERNALTABLE"  message = "Not allowed on an external table."/>
	<Message id = "DROP_SINGLE_COLUMN"  message = "Remove of column from single column table not allowed." type="user"/>

	<Message id = "LOAD_CSV_NOT_EMPTY"  message = "Cannot load csv file '%1' into table '%2': table already contains table data." type="user"/>
	<Message id = "LOAD_CSV_LIST_SEPARATOR"  message = "Cannot load csv file '%1': list separator ('%2') must be exactly one character." type="user"/>
	<Message id = "LOAD_CSV_DIFF_NR_COLS"  message = "Cannot load csv file '%1' into table '%2': number of columns in csv file differs from total number of dimensions and columns in table." type="user"/>
	<Message id = "LOAD_CSV_DIFF_DIM_NAME"  message = "Cannot load csv file '%1' into table '%2': csv column %3 ('%4') and table dimension %5 ('%6') have different names." type="user"/>
	<Message id = "LOAD_CSV_DIFF_COL_NAME"  message = "Cannot load csv file '%1' into table '%2': csv column %3 ('%4') and table column %5 ('%6') have different names." type="user"/>
	<Message id = "LOAD_CSV_DIFF_NR_VALS"  message = "Cannot load csv file '%1' into table '%2': line %3 of the csv file contains %4 values where %5 values were expected." type="user"/>
	<Message id = "LOAD_CSV_CONVERT_VALUE"  message = "Cannot load csv file '%1' into table '%2': line %3 of the csv file contains value '%4' which can not be converted to a value of type %5." type="user"/>

	<!-- FPM strings -->
	<Message id = "VALUE_TOO_LONG" type="user"
		message = "Length (%1) of value of type '%2' exceeds maximum length (%3)." />
	<Message id = "INVALID_NCNAME_CHAR" type="user"
		message = "%2 (%1) is not a valid XML-element name." />
	
	<!-- Value domains -->
	<Message id = "DATATYPE_UNDEFINED"
		message = "The data type '%1' is not defined." />
	<Message id = "UNITTYPE_DEFINITION"
		message = "A value domain of data type '%1' must have a unit type defined; a value domain of another data type must not." />
	<Message id = "VALUEDOMAINTYPE_UNDEFINED"
		message = "The value domain type '%1' is not defined." />
	<Message id = "VALUE_DATATYPE_MISMATCH"
		message = "The data type of the value (%1) does not match the data type of the value domain (%2)." type="user" />
	<Message id = "QTYVALUE_UNITTYPE_MISMATCH"
		message = "The unit type of the quantity value does not match the unit type of the value domain." type="user" />
	<Message id = "RANGE_DATATYPE_MISMATCH"
		message = "The data types of the range boundaries (%1, %2) do not match the data type of the value domain (%3)." type="user"/>
	<Message id = "QTYRANGE_UNITTYPE_MISMATCH"
		message = "The unit type of a range boundary does not match the unit type of the value domain." type="user"/>
	<Message id = "QTYRANGE_BOUND_UNIT_MISMATCH"
		message = "The units of the range boundaries ('%1' and '%2') do not match." type="user"/>
	<Message id = "RANGECLOSURE_UNDEFINED"
		message = "The range closure value '%1' is not defined." />
	<Message id = "INVALID_RANGEELEMENT"
		message = "Invalid range element: %1%2, %3%4." type="user"/>
	<Message id = "RANGEELEMENT_NOT_DISJUNCT"
		message = "The new range %1%2, %3%4 overlaps with the range %5%6, %7%8."
		   type = "user" />
	<Message id = "RANGEELEMENT_CONTIGUOUS"
		message = "The new range %1%2, %3%4 must be merged with the range %5%6, %7%8."
		   type = "user" />
	
	<!-- Function signature -->
	<Message id = "INVALID_PARAM_POS"
		message = "Function signature position '%1' is invalid for function parameter '%2'." />
	<Message id = "NON_EXISTING_PARAM_POS"
		message = "No function parameter at position '%1' of function signature." />

	<!-- DataType -->
	<Message id = "DATA_TYPE_ERROR" message = "Invalid data type: %1" />

	<!-- AggregationTypes -->
	<Message id = "AGGRTYPE_ERROR" message = "Invalid aggregation type: %1" />

	<!-- ValueSourceOption -->
	<Message id = "VALUE_SOURCE_OPTION_ERROR" message = "Invalid value source option: %1" />


	<!-- LinkPosition -->
	<Message id = "LINK_POSITION_ERROR" message = "Invalid link position: %1" />

	<!-- ScalarMappingType -->
	<Message id = "SCALAR_MAPPING_TYPE_ERROR" message = "Invalid scalar mapping type: %1" />

	<!-- ParameterMappingType -->
	<Message id = "PARAM_MAPPING_TYPE_ERROR" message = "Invalid parameter mapping type: %1" />

	<!-- JoinMappingType -->
	<Message id = "JOIN_MAPPING_TYPE_ERROR" message = "Invalid join mapping type: %1" />

	<!-- TupleMappingType -->
	<Message id = "TUPLE_MAPPING_TYPE_ERROR" message = "Invalid tuple mapping type: %1" />

	<!-- SetVarMappingType -->
	<Message id = "SETVAR_MAPPING_TYPE_ERROR" message = "Invalid set variable mapping type: %1" />

	<!-- RemoteMappingType -->
	<Message id = "REMOTE_MAPPING_TYPE_ERROR" message = "Invalid remote mapping type: %1" />

	<!-- SetMappingType -->
	<Message id = "SET_MAPPING_TYPE_ERROR" message = "Invalid set mapping type: %1" />

	<!-- FuncVarMappingType -->
	<Message id = "FUNCVAR_MAPPING_TYPE_ERROR" message = "Invalid function variable mapping type: %1" />

	<!-- DeplFuncMappingType -->
	<Message id = "DEPLFUNC_MAPPING_TYPE_ERROR" message = "Invalid deployment function mapping type: %1" />

	<!-- InstRefMappingType -->
	<Message id = "INSTREF_MAPPING_TYPE_ERROR" message = "Invalid instance-reference mapping type: %1" />

	<!-- ValidationSeverity -->
	<Message id = "VALIDATION_SEVERITY_ERROR" message = "Invalid validation severity: %1" />

	<!-- VisibilityScope -->
	<Message id = "VISIBILITY_SCOPE_ERROR" message = "Invalid visibility scope: %1" />

	<!-- MultiValue -->
	<Message id = "MULTIVALUE_DATATYPE_NOT_SUPPORTED"
		message = "The data type '%1' is not supported for multi valued data" type="user"/>
	<Message id = "MULTIVALUE_DATATYPE_DIFF"
		message = "The data type '%1' is different from the data type of other multi valued data" type="user"/>
	<Message id = "RANGE_BOUNDS_DATATYPE_DIFF"
		message = "The data types of the lower and upper bounds of the range differ" type="user"/>
	<Message id = "QTYRANGE_BOUNDS_UNIT_DIFF"
		message = "The units of the lower and upper bounds of the quantity range differ." type="user"/>

	<!-- DiscreteRange -->
	<Message id = "DISCRETERANGE_DATATYPE_NOT_SUPPORTED"
		message = "The data type '%1' is not supported for discrete ranges" type="user"/>
	<Message id = "DISCRETERANGE_STEPSIZE_DATATYPE_NOT_SUPPORTED"
		message = "The data type '%1' is not supported for the stepsize of discrete ranges" type="user"/>
	<Message id = "DISCRETERANGE_QTY_STEPSIZE_UNIT_DIFF"
		message = "The unit of the stepsize and the unit of the lower bound of the quantity discrete range differ." type="user"/>
	<Message id = "DISCRETERANGE_LOWERBOUND_NOT_SET"
		message = "The lower bound of the discrete range is not set" type="user"/>
	<Message id = "DISCRETERANGE_UPPERBOUND_NOT_SET"
		message = "The upper bound of the discrete range is not set" type="user"/>
	<Message id = "DISCRETERANGE_INVALID"
		message = "The lower (%1) and/or upper (%2) bound of the discrete range are invalid" type="user"/>
	<Message id = "DISCRETERANGE_STEPSIZE_NOT_POSITIVE"
		message = "The step size of a discrete range must be positive" type="user"/>
	<Message id = "DISCRETERANGE_DATETIME_STEPUNIT_NOT_SET"
		message = "The step unit of a discrete range of data type 'Date' or 'Datetime' is not set" type="user"/>
	<Message id = "DISCRETERANGE_OVERFLOW"
		message = "Overflow in number of elements of discrete range."/>

	<Message id = "TABLE_CAPACITY_TOO_BIG"
		message = "Total number of possible combinations of dimension values in table exceeds %1." type="user"/>

	<!-- MessageText -->
	<Message id = "DOM_PARSE_ERROR"
		message = "DOM error %2 while parsing %1: %3" />
	<Message id = "PARAMREF_EXPECTED"
		message = "Invalid XML element '%1' in message text, expecting 'Param ref='" />
	<Message id = "MISSING_REFATTR"
		message = "Missing 'ref' attribute value for 'Param' element in message text." />
</MessageModule>

