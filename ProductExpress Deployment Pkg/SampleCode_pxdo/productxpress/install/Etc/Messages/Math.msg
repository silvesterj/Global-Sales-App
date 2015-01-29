<?xml version="1.0"?>
<MessageModule name="Math">
	<Message id="INTERNAL_ERROR" message="Internal error" type="user"/>
	<Message id="RAW_EVENT_ERROR" message="Syntax error: an operator is missing." type="user"/>
	<Message id="NODE_NOT_RESOLVED" message="Node not resolved[%1]" type="user"/>
	<Message id="UNEXPECTED_EVENT" message="Unexpected math event: %1" type="user"/>
	<Message id="MISSING_END_EXPR" message="No end of expression found" type="user"/>
	<Message id="ERR_EXPR_TIME_DEP" message="Expression is time dependent" type="user"/>
	<Message id="PAR_TYPE_ERR" message="Parameter type &apos;%1&apos; not allowed" type="user"/> 
	<Message id="PAR_TYPE_ERR_EXP" message="Parameter type: %1; expected: %2" type="user"/> 
	<Message id="NOT_ENOUGH_ARGS" message="Not enough arguments" type="user"/>
	<Message id="MEMBER_TYPE_MISMATCH" message="Type mismatch in tuple member &apos;%1&apos;: found: %2; expected: %3" type="user"/> 
	<Message id="LIMIT_TYPE_MISMATCH" message="Type mismatch: lower limit &apos;%1&apos;, upper limit &apos;%2&apos;" type="user"/> 
	<Message id="UNDEFINED_BVAR" message="Bvar &apos;%1&apos; not defined" type="user"/>
	<Message id="ARG_ID_UNDEFINED" message="Argument not defined: %1" type="user"/>
	<Message id="ARG_TYPE_ERROR" message="Argument &apos;%1&apos;: expected dataType &apos;%2&apos;" type="user"/>
	<Message id="CANNOT_DEDUCE_TYPE" message="Cannot deduce type of &apos;%1&apos;"/>
	<Message id="ILLEGAL_FUNC_RETTYPE" message="Expression of function &apos;%1&apos; returns &apos;%2&apos;" type="user"/> 
	<Message id="INT_FUNC_TYPE_UNDEFINED" message="%1 type not defined"/>
	<Message id="VAR_ID_UNDEFINED" message="Not found: variable %1"/>
	<Message id="TUPLETYPE_ID_UNDEFINED" message="Tuple type not found: %1"/>
	<Message id="FUNCTION_ID_UNDEFINED" message="Function not found: %1"/>
	<Message id="FUNCVAR_ID_UNDEFINED" message="Function variable not found: %1"/>
	<Message id="NEG_DEVIATION" message="Accuracy with negative value: %1" type="user"/>
	<Message id="NOM_ACCUR_TYPE" message="Not allowed: nominal accuracy of type &apos;%1&apos;" type="user"/>
	<Message id="PERC_ACCUR_TYPE" message="Not allowed: percentual accuracy of type &apos;%1&apos;" type="user"/>
	<Message id="SOLVE_TYPE_UNDEFINED" message="Solve type not defined"/>
	<Message id="SOLVE_METHOD_UNDEFINED" message="Solve method not defined"/>
	<Message id="TOO_MANY_PARAMETERS" message="Too many parameters" type="user"/> 
	<Message id="UNEXPECTED_ELEM" message="Unexpected element [%1]"/>
	<Message id="UNEXPECTED_CHARS" message="Unexpected characters [%1]"/>
	<Message id="EXPECTED_ELEMS" message="Found element &apos;%1&apos;, expected: %2." type="user"/>
	<Message id="TOO_MANY_CHILD_ELEMS" message="Too many arguments at element &apos;%1&apos;" type="user"/>
	<Message id="NOT_AN_OPERATOR" message="&apos;%1&apos; is not an operator" type="user"/>
	<Message id="UNKNOWN_ENCODING" message="Unknown encoding in csymbol &apos;%1&apos;"/>
	<Message id="ENCODING_ERROR" message="encoding &apos;%1&apos;"/>
	<Message id="UNKNOWN_INTERN_FN" message="Unknown internalfn type &apos;%1&apos;"/>
	<Message id="NOT_AN_INTERN_FN" message="&apos;%1&apos; is not an internal function"/>
	<Message id="UNKNOWN_SELECTOR_TYPE" message="Unknown selector type &apos;%1&apos;"/>
	<Message id="UNKNOWN_INTERVAL_TYPE" message="Unknown interval type &apos;%1&apos;"/>
	<Message id="UNKNOWN_SLVVRDEF_TYPE" message="Unknown solve vardef type &apos;%1&apos;"/> 
	<Message id="UNKNOWN_SOLVE_METHOD" message="Unknown solve method &apos;%1&apos;"/> 
	<Message id="UNKNOWN_STEP_UNIT" message="Unknown step unit &apos;%1&apos;"/>
	<Message id="EMPTY_APPLY" message="Empty apply"/>
	<Message id="OP_NOT_ALLOWED" message="Operator &apos;%1&apos; not allowed"/>
	<Message id="UNDEFINED_ACC_TYPE" message="Accuracy type not defined"/>
	<Message id="UNDEFINED_ACC_POS" message="Accuracy position not defined"/>
	<Message id="UNKNOWN_ACC_TYPE" message="Unknown accuracy type &apos;%1&apos;"/>
	<Message id="UNKNOWN_ACC_POS" message="Unknown accuracy position &apos;%1&apos;"/>
	<Message id="VAR_DATE_ACC_PERC" message="Solve variable of type &apos;date&apos; with percentage accurary not allowed" type="user"/>
	<Message id="GV_DATE_ACC_PERC" message="Solve goal value of type &apos;date&apos; with percentage accurary not allowed" type="user"/>
	<Message id="ARG_NOT_DEFINED" message="Argument not defined"/>
	<Message id="ARG_ALREADY_DEFINED" message="Argument already defined, id: %1"/>
	<Message id="MEMBER_ID_UNDEFINED" message="Tuple member not found, id: %1"/>
	<Message id="MEMBER_ALREADY_DEFINED" message="Tuple member already defined, id: %1"/>
	<Message id="NOT_ALL_MEMBERS_DEFINED" message="Not all tuple members defined"/>
	<Message id="PAR_NOT_TIME_DEP" message="Parameter is not time dependent" type="user"/>
	<Message id="EMPTY_INT_DATA" message="Empty integer data"/>
	<Message id="INV_INT_DATA" message="Invalid integer data: &apos;%1&apos;" type="user"/>
	<Message id="UNKNOWN_LIMIT_TYPE" message="Unknown limit type &apos;%1&apos;"/>
	<Message id="LIMIT_TYPE_NOT_EXP" message="Not expected: limit type &apos;%1&apos;"/>
	<Message id="UNKNOWN_LOG_OP" message="Unknown logical operator &apos;%1&apos;"/> 
	<Message id="UNKNOWN_DEG_TYPE" message="Unknown degeneracy search type &apos;%1&apos;"/>
	<Message id="INVALID_FUNC_TYPE" message="Function &apos;%1&apos;: invalid return type &apos;%2&apos;" type="user"/>
	<Message id="SET_EMPTY" message="Set is empty" type="user"/>
	<Message id="SET_INDEX_TOO_BIG" message="Index: %1, set size: %2" type="user"/>
	<Message id="SET_INDEX_TOO_SMALL" message="Index &lt; %1" type="user"/>
	<Message id="SETFUNC_OFFSET_TOO_BIG"	message="%1: Offset: %2, set size: %3.%4" type="user"/>
	<Message id="SET_SIZE_ERROR" 			message="Number of elements: %1" type="user"/>
	<Message id="SETFUNC_MODE_ERROR"		message="%1: More than 1 value occurs %2 times.%3" type="user"/>
	<Message id="NULL_PIECEWISE"			message="Piecewise returns only NULL values" type="user"/>
	<Message id="EXP_UP_DOWN"				message="Expected constant: &apos;up&apos; or &apos;down&apos;"/>
	<Message id="SET_WITH_NULL_VALUE"		message="Set contains element with null value" type="user"/>
	<Message id="RETURN_COLUMN_TYPE_ERR"	message="Error in multi-column table-lookup: return-column parameter has type &apos;%1&apos;, expected type is &apos;string&apos;." type="user"/>
	<Message id="PREV_PAR_TYPE_ERR"			message="Previous parameter: type &apos;%1&apos; not allowed" type="user"/> 
	<Message id="LAST_PAR_TYPE_ERR_EXP"		message="Last parameter: type: %1; expected: %2" type="user"/> 
	<Message id="ITERATE_TYPEID_MISSING"	message="Iterate: return-type-id is missing" type="user"/> 
	<Message id="ITERATE_NO_TYPE"			message="Iterate return-type: no value definition with id %1." type="user"/> 
	<Message id="CONDITION_ERROR"			message="This construction is not allowed in a condition." type="user"/> 
	<Message id="IDENTITY_FROM_STR"			message="Cannot create identity from string &apos;%1&apos;." type="user"/> 
	<Message id="IDENTITY_FROM_DATA"		message="Cannot create identity from &apos;%1&apos;." type="user"/> 
	<Message id="STR2REAL_ERROR"			message="Cannot convert string &apos;%1&apos; to real value." type="user"/> 
	<Message id="STEP_SIZE_ERROR"			message="Step size %1 not allowed." type="user"/>
	<Message id="SET_TOO_BIG"				message="Set size greater than maximum (%1)." type="user"/> 
	<Message id="SORT_FUNC_ERROR" 			message="Sort expression does not define a total order for arguments ('%1', '%2')." type="user"/> 
	<Message id="PATH_CONST_ERROR" 			message="Error in path selector. Expected: &apos;path&apos;; got: &apos;%1&apos;." type="user"/> 
	<Message id="FNPATH_SELECTOR_ERR" 		message="Error in apply: unexpected internal function &apos;%1&apos;. Expected: &apos;pathselector&apos;." type="user"/> 
	<Message id="ERRMSG_ID_UNDEFINED" 		message="Error message definition not found: %1"/>
	<Message id="SET_TYPE_MISMATCH"			message="Types of set elements do no match: &apos;%1&apos; and &apos;%2&apos;" type="user"/>
	<Message id="SETFUNC_SIZE_NOT_EQUAL"	message = "%1: mumber of elements not equal: %2 and %3.%4" type = "user"/>
	<Message id="SETFUNC_UNIT_DIFF"			message = "%1: mixing quantity values with different units: '%2' and '%3'.%4" type="user" />
	<Message id="SETFUNC_NULLVALUE"			message = "%1: argument with null value.%2" type="user" />
	<Message id="SETFUNC_EMPTY_SET"			message = "%1: empty set.%2" type="user" />
	<Message id="SETFUNC_SET_SIZE"			message = "%1: number of elements: %2.%3" type="user" />
	<Message id="DATE_OVERFLOW"				message = "Date overflow." type="user" />
	<Message id="PATH_VARIABLE_NOT_DEFINED"	message = "Path variable '%1' is not defined" type="user" />
	<Message id="SETFUNC_DIVISION_BY_ZERO"	message = "%1: division by zero.%2" type="user" />
	<Message id="CORRELATION_NULLELEM"		message = "%1: one of the sets contains element with null value.%2" type="user" />
</MessageModule>
