<?xml version = "1.0" ?>
<MessageModule name = "Ctx">
	<Message id = "DANGLING"
	    message = "From current viewpoint a '%1' could not be found. (Details: lid='%2')."
		   type = "user"/> 
	<Message id = "TABLE_DIMENSION"
	    message = "Dimension %1 does not exist in table '%2'. Number of dimensions: %3."
		   type = "user"/> 
	<Message id = "TABLE_DIMENSION_EMPTY"
	    message = "Dimension '%1' of table '%2' is empty."
		   type = "user" />
	<Message id = "DIMENSIONS"
	    message = "Error in table-lookup(%1): not enough dimension arguments. %2 dimension arguments are needed."
		   type = "user" />
	<Message id = "TDMAPPING_UNSUPPORTED"
	    message = "Time dependency on this mapping is not supported."
		   type = "user" />
	<Message id = "TIME_INDEPENDENT"
	    message = "Value is time-independent" />
	<Message id = "NO_MAPPING_FOUND"
	    message = "Variable '%1' is not mapped in '%2'."
	       type = "user" />
	<Message id = "NOT_IN_TABLE"
	    message = "Error in table-lookup(%1): no value found."
		   type = "user" />
	<Message id = "TABLE_PROPERTY"
	    message = "No value found for property '%1' of table '%2'."
		   type = "user" />
	<Message id = "NO_VALUE"
	    message = "Variable '%1' has no value."
		   type = "user" />
	<Message id = "NO_VALUE_HISTORY"
	    message = "No schedule available for time-dependendent variable."
		   type = "user" /> 
	<Message id = "LEVEL_TOO_DEEP"
	    message = "Call stack overflow, (recursion) level too deep."
		   type = "user" />
	<Message id = "DIMENSIONS_MULTICOLUMN"
	    message = "Error in multi-column table-lookup(%1): not enough arguments. %2 dimension arguments plus 1 return-column argument are needed."
		   type = "user" />
	<Message id = "NO_VALID_COLUMN"
	    message = "Error in multi-column table-lookup(%1): '%2' is not a return-column name."
		   type = "user" />
	<Message id = "RESVAR_NOVALUE"
	    message = "Value missing for reserved variable '%1'"
		   type = "user" />
	<Message id = "SECOND_INSTANCE"
	    message = "'%1' is second instance on link; only one instance expected."
		   type = "user" />
	<Message id = "NON_FUNCTIONVAR_CALLED"
	    message = "Tried to get a value with parameters for a non-function variable." />
	<Message id = "LOOKUP_NULL_ARG"
	    message = "Empty argument used in table lookup(%1)"
		   type = "user"/>
	<Message id = "EXT_TABLE_NOT_SUP"
	    message = "External table is not supported. Table: '%1'"
	       type = "user"/>
	<Message id = "LOOKUP_DFLT_ARG"
	    message = "Error in table-lookup(%1): Type of default argument '%2' is wrong."
		   type = "user" />
	<Message id = "LOOKUP_DFLT_ARG_MULTI"
	    message = "Error in multi-column table-lookup(%1): Type of default argument '%2' is wrong."
		   type = "user" />
	<Message id = "CANNOT_CONVERT_VALUE"
	    message = "Cannot convert %1 value to %2."
		   type = "user" />
	<Message id = "NO_MAPPINGINSTANCE"
	    message = "internal (%2:%3) no mapping instance found for %1" />
	<Message id = "UNKNOWN_MAPPING"
	    message = "unknown mapping" />
	<Message id = "NO_EVALCTX_FOUND"
	    message = "internal error: no suitable evaluation context for instance %1 found." />
	<Message id = "UNSUPP_TYPE"
	    message = "type '%1' in path &quot;%2&quot;: not supported here."
		   type = "user" />
	<Message id = "UNSUPP_AXIS"
	    message = "%1:: axis in path &quot;%2&quot;: not supported here."
		   type = "user" />
	<Message id = "TUPLEMAPPING_TARGET_NO_SE"
	    message = "Tuple mapping structure path &quot;%1&quot; does not end in a Structure Element"
		type = "user" />

	<Message id = "JOINS_NOT_SUPPORTED"
		message = "Joins are no longer supported in this version. Please contact product support."
		   type = "user" />
	<Message id = "LOOKUP_TOO_MANY_ARGS"
	    message = "Error in table-lookup(%1): too many arguments."
		   type = "user" />
	<Message id = "MCLOOKUP_TOO_MANY_ARGS"
	    message = "Error in multi-column table-lookup(%1): too many arguments."
		   type = "user" />
	<Message id = "MCLOOKUP_NOT_IN_TABLE"
	    message = "Error in multi-column table-lookup(%1): no value found."
		   type = "user" />
	<Message id = "EXT_TABLE_OPEN_ERROR"
	    message = "Cannot open external table '%1'"
	       type = "user"/>
	<Message id = "LOOKUP_ARG_TYPE_ERR"
	    message = "Error in table-lookup(%1): type of dimension argument %2 is '%3', expected: '%4'."
		   type = "user" />
	<Message id = "MCLOOKUP_ARG_TYPE_ERR"
	    message = "Error in multi-column table-lookup(%1): type of dimension argument %2 is '%3', expected: '%4'."
		   type = "user" />
	<Message id = "LOOKUP_COORD_NOTFD"
	    message = "Error in lookupcoord in dimension '%2' of table '%1': no value for '%3' with match-type '%4'"
		   type = "user" />
	<Message id = "TABLE_DIMENSION_NAME"
	    message = "Dimension '%1' does not exist in table '%2'."
		   type = "user"/>
	<Message id = "TABLE_COLUMN_VALUE_UNDEFINED"
		message = "Table column value undefined." 
		   type = "user"/>
	<Message id = "MATCHTYPE"
		message = "'%1' is no interpolation type(type = '%2')."
		   type = "user"/>
		   
	<Message id = "NO_DEPLOYMENT_MAPPING_FOUND"
	    message = "%1 has a deferred mapping, but is not mapped in '%2'."
	       type = "user" />	       
	<Message id = "PARTIAL_MAPPING_INCORRECT"
	    message = "The mapping for variable '%1' found at element '%2' in mapping slice '$3' can not be used to complement a partial mapping."
	       type = "user" />
	       
	<Message id = "TABLE_DIMENSION_TYPE"
	    message = "Error: type of table dimension argument '%1' is not correct: '%2'."
		   type = "user"/>
	<Message id = "NESTED_VARVALUE"
	    message = "Calculation of value of variable '%1' uses value of the same variable."
		   type = "user"/>
		   
	<Message id = "TOO_FEW_ARGS"
	    message = "Too few arguments given for calculating feature '%1': expected: %2, was: %3."
		   type = "user"/>

	<Message id = "INCOMPLETE_PARAMETER_MAPPING"
	    message = "Not all function parameters were mapped."
		   type = "user"/>

	<Message id = "PATHEXPR_NOTSUPPORTED"
	    message = "Path expression ('%1') not supported here."
		   type = "user"/>

	<Message id = "ERR_CALC_FEATURE"
	    message = "Error occurred while calculating feature '%1' in %2."
		   type = "user"/>

	<Message id = "ERR_CALC_FUNCTION"
	    message = "Error occurred while calculating function '%1' in %2."
		   type = "user"/>

	<Message id = "ERR_CALC_HISTORY"
	    message = "Error occurred while calculating time dependent value on %1 using '%2' in %3."
		   type = "user"/>

	<Message id = "ERR_AGGR_FEATURE"
	    message = "Error occurred while setting up aggregation for feature %1 of %2."
		   type = "user"/>

	<Message id = "ERR_AGGR_FUNCTION"
	    message = "Error occurred while setting up aggregation for function '%1' evaluated in %2."
		   type = "user"/>

	<Message id = "ERR_AGGR_VALIDATION"
	    message = "Error occurred while setting up aggregation for validation '%1' of %2."
		   type = "user"/>

	<Message id = "NON_FUNCTION_ID"
	    message = "Internal error: tried looking up a selected function, but id '%1' is not a function." />

	<Message id = "ERR_CALC_VALIDATION"
	    message = "Error occurred while calculating validation '%1' in %2."
		   type = "user"/>

	<Message id = "ERR_CALC_MSGPARAM"
	    message = "Error occurred while calculating message parameter '%1' in %2."
		   type = "user"/>

	<Message id = "MAP_ACROSS_AGGRLINK"
	    message = "Mapping crosses an aggregation link"
		   type = "user"/>

	<Message id = "NOTSUPPORTED_AGGR_TDSET_ELEM"
	    message = "Cannot deduce aggregation dependency for variable '%1' (set with time dependent elements)."
		   type = "user"/>

	<Message id = "NO_VALUE_FOR_VARIABLE"
	    message = "No value for variable '%1' in global context."
		   type = "user"/>

	<Message id = "TIMEDEPENDENT_FILTERED_PATH"
	    message = "Illegal result type (%1): time dependency is not supported in filtered paths."
		   type = "user"/>

	<Message id = "TOO_MANY_FILTERED_INSTANCES"
	    message = "Expected at most one instance, but filtered path resulted in %1."
		   type = "user"/>

	<Message id = "INCORRECT_FILTER_RETURNTYPE"
	    message = "Unexpected type returned from filtered path: %1 (%2 expected)."
		   type = "user"/>
	
</MessageModule>

