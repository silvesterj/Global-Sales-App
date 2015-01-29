<?xml version = '1.0' ?>
<MessageModule name = 'FPMPath'>
	<Message id='INVALID_PATH'					type='user'	message='Invalid path.' />
	<Message id='NONUNIQUE_CHILD'				type='user'	message='child element not unique: both #%1 and #%2 link to %3.' />
	<Message id='NO_CHILD_FOUND'				type='user'	message='child element %1 not found for %2.' />
	<Message id='DEAD_END_LINK_NOMATCH'			type='user'	message='Dead end in path: specified link was not found in structure element %1.' />
	<Message id='DEAD_END_LINK_NON_SE_CHILD'	type='user'	message='dead end in path: links do not have &quot;%1&quot; children.' />
	<Message id='DEAD_END_SE_NOMATCH_NAME'		type='user' message='dead end in path: no match for structure element %2 on link %1.' />
	<Message id='DEAD_END_SE_NOMATCH_ID'		type='user'	message='dead end in path: no match for specified structure element on link %1.' />
	<Message id='DEAD_END_SE_ROOT_NOMATCH_NAME'	type='user'	message='dead end in path: no match for root structure element %1.' />
	<Message id='DEAD_END_SE_ROOT_NOMATCH_ID'	type='user'	message='dead end in path: no match for specified root structure element.' />
	<Message id='DEAD_END_NO_FEATURES'			type='user'	message='dead end in path: features do not have &quot;%1&quot; children.' />
	<Message id='DEAD_END_NO_VALIDATIONS'		type='user'	message='dead end in path: validations do not have &quot;%1&quot; children.' />
	<Message id='DEAD_END_FEATURE_NOMATCH'		type='user'	message='dead end in path: no feature %1 found in structure element %2.' />
	<Message id='DEAD_END_ATTRIBUTE_NOMATCH'	type='user'	message='dead end in path: no attribute %1 found in structure element %2.' />
	<Message id='DEAD_END_OPERATION_NOMATCH'	type='user'	message='dead end in path: no operation %1 found in structure element %2.' />
	<Message id='DEAD_END_VALIDATIONELEMENT_NOMATCH'
												type='user'	message='dead end in path: no validation element %1 found in structure element %2.' />
	<Message id='DEAD_END_VALIDATION_NOMATCH'	type='user'	message='dead end in path: no validation %1 found in structure element %2.' />
	<Message id='DEAD_END_VALIDATIONGROUP_NOMATCH'
												type='user'	message='dead end in path: no validation group %1 found in structure element %2.' />
	<Message id='MAPPING_PATH_NO_SUCH_MGROUP'	type='user'	message='dead end in path: no matching mapping group found.' />
	<Message id='DEAD_END_FUNC_NOMATCH_NAME'	type='user' message='dead end in path: function %1 not found as available function.' />
	<Message id='DEAD_END_FUNC_NOMATCH_ID'		type='user'	message='dead end in path: function with specified id not found as available function.' />
	<Message id='DEAD_END_NO_REFLIST'			type='user'	message='dead end in path: previous step did not result in a reference list.' />
	<Message id='DEAD_END_UNKNOWN_COMPONENT'	type='user'	message='dead end in path: previous step resulted in unknown (dangling?) component.' />
	<Message id='UNSUPP_WILDCARD'				type='user'	message='error in path: wildcard not supported here.' />
	<Message id='UNSUPP_TYPE'					type='user'	message='error in path: type &quot;%1&quot; not supported here.' />
	<Message id='UNSUPP_AXIS'					type='user'	message='error in path: %1:: axis not supported here.' />
	<Message id='UNKNOWN_VARIABLE'				type='user'	message='error in path: variable %1 is unknown.' />
	<Message id='VAR_UNKNOWN_REFTYPE'			type='user'	message='error in path: variable %1 has unknown (dangling?) reference type' />

	<Message id='UNKNOWN_FUNCTION'				type='user'	message='function %1 unknown.' />
	<Message id="FUNCTION_NO_ARGS"				type='user' message='function %1 does not have arguments.' />
	<Message id="FUNCTION_ONE_ARG"				type='user' message='function %1 expects one argument.' />
	<Message id="FUNCTION_MISSING_ARGS"			type='user' message='function %1 expects %2 arguments.' />
	<Message id="FUNCTION_TOO_MANY_ARGS"		type='user' message='function %1: too many arguments.' />
	<Message id="FN_ARGTYPE_UNSUPPORTED"		type='user' message='function %1: unsupported argument type: %2' />
	<Message id="FN_ARGTYPE_UNEXPECTED"			type='user' message='function %1: argument type: %2; expected: %3' />
	<Message id='OPER_NEEDS_REFLISTS'			type='user'	message='operator %1 expects two reference lists.' />
	<Message id="ARGS_TYPE_MISMATCH"			type='user' message='operands with incompatible types (%1 and %2) for operator %3.' />
	<Message id="ARGS_TYPE_UNSUPPORTED"			type='user' message='operands with type %1 not supported for operator %2.' />
	<Message id="ARGS_DIFFERENT_UNITS"			type='user' message='operands for %1 are quantity values with different units.' />
	<Message id="COMPARE_UNORDERED"				type='user' message='type %1 is not ordered. Values cannot be used in a relational expression.' />
	
</MessageModule>

