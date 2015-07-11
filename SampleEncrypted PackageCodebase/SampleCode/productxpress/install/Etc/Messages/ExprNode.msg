<?xml version = "1.0" ?>
<MessageModule name = "ExprNode">
	<Message id = "REDEF_IN_ARG_LIST"		message = "Redefinition of '%1' in argument list" type="user" />
	<Message id = "EMPTY_DATE_RANGE"		message = "Empty date range: start = %1, end = %2.%3" type="user" />
	<Message id = "INTERNAL_ERROR"			message = "Internal error in %1" type="user" />
	<Message id = "EXPR_TYPE_MISMATCH"		message = "Expression of function '%1' returns %2" type="user"/> 
	<Message id = "DIV_BY_ZERO"				message = "Division by zero.%1" type="user"/>
	<Message id = "SIZE_NEGATIVE"			message = "Size &lt; 0 in '%1'.%2" type="user" />
	<Message id = "TYPE_MISMATCH"			message = "Internal error: Type mismatch. Expected type %1, used type %2" type="user" />
	<Message id = "BIN_OP_ERROR"			message = "Illegal value in (%1 %2 %3)" type="user" /> 
	<Message id = "ZERO_ITERATIONS"			message = "Number of iterations in iterative function is 0.%1" type="user" />
	<Message id = "NOT_ENOUGH_VALUES"		message = "Not enough values.%1" type="user" />
	<Message id = "POSITION_LESS_ONE"		message = "Position &lt; 1 in '%1'.%2" type="user" />
	<Message id = "OFFSET_LESS_ONE"			message = "Index of '%1' was %2; such an index cannot be less than 1.%3" type="user" />
	<Message id = "NO_SELECT"				message = "No condition evaluates to 'true' in piecewise.%1" type="user" />
	<Message id = "COUNT_NEGATIVE"			message = "Count &lt; 0 in '%1'.%2" type="user" />
	<Message id = "NO_VAR_VALUE"			message = "No value found for variable '%1'.%2" type="user" />
	<Message id = "FUNC_WRONG_ARG_TYPE"		message = "Function '%1' argument %2: expected type '%3', found '%4'" type="user" />
	<Message id = "FUNC_MISSING_ARG"		message = "Function '%1' expects %2 arguments, %3 given." type="user" />
	<Message id = "NO_VAR_VALUE_ONDATE"		message = "No value found for variable '%1' on date %2.%3" type="user" />
	<Message id = "OVERFLOW_IN_PROD"		message = "Overflow in prod function (%1 * %2). Result is too big." type="user" />
	<Message id = "OVERFLOW_IN_SUM"			message = "Overflow in sum function (%1 + %2). Result is too big." type="user" />
	<Message id = "BLD_TOO_MANY_ARGUMENTS"  message = "Function call with too many arguments" type="user"/>
	<Message id = "BLD_ARGUMENTS_MISSING"	message = "Function call not enough arguments" type="user" />
	<Message id = "NO_MEMBER_VALUE"			message = "No value for tuple member '%1' in tuple of type '%2' with id '%3'.%4" type="user" />
	<Message id = "NO_MEMBER_VALUE_ONDATE"	message = "No value on date %1 for tuple member '%2' in tuple of type '%3' with id '%4'.%5" type="user" />
	<Message id = "BLD_ARG_TYPE_ERROR"		message = "Argument is of type %1" type="user" />
	<Message id = "BLD_ARG_TYPE_EXPECTED"   message = "Argument is of type %1 (Expected: %2)" type="user" />  
	<Message id = "INTERNAL_ERROR_MSG"		message = "%1" />
	<Message id = "TABLE_PROP_TYPE"			message = "Table property '%1' returns value of type %2. Expected: %3.%4" type="user" />
	<Message id = "TABLE_MAXCOORD_TYPE"		message = "Maxcoord returns value of type %1. Expected: %2.%3" type="user" />
	<Message id = "TABLE_MINCOORD_TYPE"		message = "Mincoord returns value of type %1. Expected: %2.%3" type="user" />
	<Message id = "TABLE_LOOKUP_TYPE"		message = "Table returns values of type %1. Expected: %2.%3" type="user" />
	<Message id = "ERROR_SOLVE_STEPUNIT"    message = "Solve error: step unit '%1' not allowed.%2" type="user" />
	<Message id = "LOCAL_NO_VALUE_ONDATE"   message = "No value on date %1 for local variable '%2'.%3" type="user" />
	<Message id = "SOLVE_DATE_RANGE_ERROR"	message = "Solve error: start date '%1', end date '%2'.%3" type="user" />
	<Message id = "NO_ELEM_VALUE_ONDATE"	message = "Set element has no value on date %1.%2" type="user" />
	<Message id = "NO_VALUE_ONDATE"			message = "No value on date %1.%2" type="user" />
	<Message id = "ERROR_FIRST_WEEK"		message = "First week method '%1' unknown.%2" type="user" />
	<Message id = "ERROR_WEEKDAY"			message = "Weekday '%1' unknown.%2" type="user" />
	<Message id = "TABLE_LOOKUPCOORD_TYPE"	message = "Lookupcoord returns value of type %1. Expected: %2.%3" type="user" />
	<Message id = "FUNC_NO_VALUE_ONDATE"    message = "No value on date %1 in result returned by function '%2'.%3" type="user" />
	<Message id = "LOCAL_NO_VALUE"			message = "Local variable with empty value '%1'.%2" type="user" />
	<Message id = "NULL_CONST_ERROR"		message = "Using null constant.%1" type ="user" /> 
	<Message id = "ELEM_NOT_FOUND"			message = "FindElement did not find element.%1" type="user"/>
	<Message id = "SET_WITH_NULL_VALUE"		message = "Set contains element that has no value.%1" type="user"/>
	<Message id = "ERR_DOM_TO_SET"          message = "Cannot convert domain %1 to set.%2" type="user" />
	<Message id = "ADD_QUANT_UNIT_DIFF"     message = "Adding quantities with different units: '%1' and '%2'.%3" type="user" />
	<Message id = "CMP_QUANT_UNIT_DIFF"     message = "Comparing quantities with different units: '%1' and '%2'.%3" type="user" />
	<Message id = "SUBTRACT_QUANT_UNIT_DIFF"	
											message = "Subtracting quantities with different units: '%1' and '%2'.%3" type="user" />
	<Message id = "DIVIDE_QUANT_UNIT_DIFF"	message = "Division of quantities with different units: '%1' and '%2'.%3" type="user" />
	<Message id = "TABLE_LOOKUP_EMPTY"		message = "Table lookup returns empty value.%1" type="user" />
	<Message id = "UNITINTEGER_ERROR"		message = "UnitInteger: cannot convert [%1] to integer value.%2" type="user" />
	<Message id = "NO_ELEM_WITH_ID"			message = "No element in set that matches id.%1" type="user" />
	<Message id = "STR2INT_ERROR"           message = "Cannot convert string '%1' to integer.%2" type="user" />
	<Message id = "STR2REAL_ERROR"          message = "Cannot convert string '%1' to real.%2" type="user" />
	<Message id = "STR2DATETIME_ERROR"      message = "Cannot convert string '%1' to datetime.%2" type="user" />
	<Message id = "DATETIME2STR_ERROR"      message = "Cannot convert datetime '%1' to string.%2" type="user" />
	<Message id = "FUNC_RET_NULL"			message = "Function '%1' returns null value.%2" type="user" />
	<Message id = "NO_FUNCVAR_VALUE"		message = "No value found for function variable '%1', arguments: %2.%3" type="user" />
	<Message id = "OCCURRED_IN_FUNCTION"	message = " In function '%1'" type="user" />
	<Message id = "RANDOM_SEED_ERR"			message = "Internal function 'random': 'seed' argument has invalid value '%1'.%2" type="user" />
	<Message id = "RANDOM_PRECISION_ERR"	message = "Internal function 'random': 'precision' argument has invalid value '%1'.%2" type="user" />
	<Message id = "RANDOM_INDEX_ERR"		message = "Internal function 'random': 'index' argument has invalid value '%1'.%2" type="user" />
	<Message id = "ARG_VAL_ERR"				message = "Internal function call '%1': argument has invalid value '%2'.%3" type="user" />
	<Message id = "ARG2_GT_ARG1"			message = "Internal function call '%1': second argument greater than first.%2" type="user" />
	<Message id = "OVERFLOW_IN_FACT"		message = "Error: result of factorial(%1) is too big.%2" type="user" />
	<Message id = "JOIN_CALC_ERROR"			message = "Calculation using join in %1" type="user" />
	<Message id = "INTFUNC_RETURNS_NULL"	message = "Internal function '%1' returns null value.%2" type="user" />
	<Message id = "AGGR_NO_VALUE_ONDATE"    message = "No value on date %1 for aggregation '%2'.%3" type="user" />
	<Message id = "AGGR_NO_VALUE"			message = "Aggregation '%1' has empty value.%2" type="user" />
	<Message id = "RECURSION_OVERFLOW"		message = "Recursion too deep(%1). In function '%2'" type="user" />
	<Message id = "NO_ANCHORED_PATH_VALUE"	message = "No value found for anchored path '%1', arguments: %2.%3" type="user" />
	<Message id = "BINCOUNT_LESS_ONE"		message = "%1: number of bins: %2. Must be greater than 1.%3" type="user" />
	<Message id = "ERROR_IN_EXPRESSION" 	message = "Error in expression." type="user" />
	<Message id = "SET_RMV_ELEM_ERROR" 		message = "Error in %1: set size=%2, elements to remove=%3.%4." type="user" />
	<Message id = "SET_LEFT_RIGHT_ERROR"	message = "Error in %1: set size=%2, elements asked for=%3.%4." type="user" />
	<Message id = "ROUND_SIGNIF_ERROR"		message = "The number of significant digits of '%1' is %2 but must be larger than zero.%3" type="user" />
	<Message id = "TUPLEFIND_EMPTY_SET"     message = "TupleFind: Set is empty.%1" type="user" />
	<Message id = "TUPLEFIND_NO_ELEM_FOUND" message = "TupleFind: No set element matches filter.%1" type="user" />
</MessageModule>


