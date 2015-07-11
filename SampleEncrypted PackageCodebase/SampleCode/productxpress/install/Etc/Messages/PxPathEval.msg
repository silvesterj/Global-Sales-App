<?xml version = "1.0" ?>
<MessageModule name = "PxPathEval">
	<Message id = "PATH_ERRORS"
		   type = "user"
		message = "Errors in path '%1':%2" />
		
	<Message id = "UNKNOWN_NAVMODE"
		   type = "user"
		message = "%1 is not a legal navigation mode name: should be one of 'Bound', 'Free', or 'Component'." />

	<Message id = "UNKNOWN_PXPATH_FUNCTION"
		   type = "user"
		message = "unknown function in path expression: '%1'." />
		
	<Message id = "FUNCTION_NO_ARGS"
		   type = "user"
		message = "Function %1 does not have arguments." />
		
	<Message id = "FUNCTION_ONE_ARG"
		   type = "user"
		message = "Function %1: expected one argument." />
		
	<Message id = "FUNCTION_MISSING_ARGS"
		   type = "user"
		message = "Function %1: expected %2 arguments." />
		
	<Message id = "FUNCTION_TOO_MANY_ARGS"
		   type = "user"
		message = "Function %1: too many arguments." />
		
	<Message id = "FUNCTION_REFLIST_EXPECTED"
		   type = "user"
		message = "Function %1: argument is not a reference list." />

	<Message id = "ARGS_TYPE_MISMATCH"
		   type = "user"
		message = "Operands with incompatible types: %1 and %2." />

	<Message id = "ARGS_TYPE_UNSUPPORTED"
		   type = "user"
		message = "Operands with type %1 not supported here." />

	<Message id = "ARGS_DIFFERENT_UNITS"
		   type = "user"
		message = "Operands are quantity values with different units (%1 and %2)." />

	<Message id = "ARGS_ILLEGAL_VALUE"
		   type = "user"
		message = "Operand (%1) out of bounds for this operation." />

	<Message id = "COMPARE_UNORDERED"
		   type = "user"
		message = "Type %1 is not ordered. Values cannot be used in a relational expression." />

	<Message id = "DIV_BY_ZERO"
		   type = "user"
		message = "Division by zero." />

	<Message id = "EMPTY_CONTEXT"
		   type = "user"
		message = "No current node in %1." />
	
</MessageModule>
