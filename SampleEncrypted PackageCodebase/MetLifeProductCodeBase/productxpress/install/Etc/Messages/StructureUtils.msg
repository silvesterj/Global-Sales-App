<?xml version = "1.0" ?>
<MessageModule name = "StructureUtils">
	<Message id = "AMBIGUOUS_PATH"			message = "Ambiguous path while converting: Multiple objects match step %1 under %2 '%3'" />
	<Message id = "NO_MATCH_FOR_PATH"		message = "No match for path while converting: step %1 not found under %2 '%3'" />
	<Message id = "NO_LINK_IN_SET_PATH"		message = "Invalid source mapping: no path for set variable %1" />
	<Message id = "NO_LINK_IN_JOIN_PATH"	message = "Invalid source mapping: no path for join variable %1" />
	<Message id = "FUNCTION_NOT_IN_CONTEXT"	message = "Function '%1' was not found in %2 '%3'" />
	<Message id = "NO_RESOLVE_FOR_PATH"		message = "Mapping path does not resolve: %1 matched by '%2' not found under %3 '%4'" />
	<Message id = "CAN_NOT_CONVERT_PATH"	message = "Can not convert the mapping path.&#10;%1" />
	<Message id = "ATTRIBUTE_DEF_CHANGED"	message = "Warning: Value definition was changed for target attribute %1" />
	<Message id = "FUNCVAR_ALREADY_MAPPED"	message = "The function variable is already mapped on another function" />
	<Message id = "PARAM_ALREADY_MAPPED"	message = "The function variable parameter is already mapped on another target" />
	<Message id = "SCALAR_ALREADY_MAPPED"	message = "The scalar is already mapped on another target" />
	<Message id = "TUPLEVAR_ALREADY_MAPPED"	message = "The variable is already mapped (as a tuple) on another structure element" />
	<Message id = "SETVAR_ALREADY_MAPPED"	message = "The set variable is already mapped on another target type" />
	<Message id = "SETVAR_ALREADY_ON_LINK"	message = "The set variable is already mapped on another link" />
	<Message id = "TUPLE_ALREADY_MAPPED"	message = "The tuple is already mapped on another target type" />
	<Message id = "TUPLE_ALREADY_ON_FIMC"	message = "The tuple is already mapped on another function" />
	<Message id = "JOIN_ALREADY_MAPPED"		message = "The join is already mapped on another link" />
	<Message id = "FEATURE_SKIPPED"			message = "Warning: Skipped copying feature %1 because another feature with the same name already exists"/>

	<!-- errors when putting simple mapping targets -->
	<Message id = "INVALID_SIMPLE_TARGET"	message = "Attempted to put an invalid simple target to a variable mapping" />
	<Message id = "SIMPLE_TUPLE_TARGET"		message = "A tuple value can only be mapped member-wise, on a function that returns a tuple, or on an operation that returns a tuple" />
	<Message id = "SIMPLE_FVARPARAM_TARGET"	message = "A function variable parameter can only be mapped on a function parameter or a constant" />
	<Message id = "SIMPLE_JOINSET_TARGET"	message = "A join set can only be mapped on a structure element" />
	<Message id = "SIMPLE_TUPLEVAR_TARGET"	message = "A tuple variable can only be mapped on a structure element" />
	<Message id = "SIMPLE_SETVAR_TARGET"	message = "A set variable can only be mapped on a structure link, a function that returns a set, an operation that returns a set, a structure element as a tuple or on a set constant" />
	<Message id = "SIMPLE_JOINVAR_TARGET"	message = "A join variable can only be mapped on a link" />
	<Message id = "SIMPLE_FUNCVAR_TARGET"	message = "A function variable can only be mapped on a function or external" />
	<Message id = "NO_MAPPING_PATH"			message = "No mapping path specified" />
	<Message id = "VARIABLE_PATH_TUPLE"		message = "Attempted to map an unknown part of a tuple value" />
	<Message id = "VARIABLE_PATH_SET"		message = "Attempted to map an unknown part of a set variable" />
	<Message id = "VARIABLE_PATH_JOIN"		message = "Attempted to map an unknown part of a join variable" />
	<Message id = "VARIABLE_PATH_FUNCVAR"	message = "Attempted to map an unknown part of a function variable" />
	<Message id = "INVALID_FIMC_PATH"		message = "Invalid mapping path to local function" />
	<Message id = "FIMC_NOT_FOUND"			message = "Function not found" />

	<Message id = "FAULT_WHILE_COPYING"		message = "Error while copying %1&#10;%2" />
	<Message id = "FAULT_WHILE_MAPPING"		message = "Error while mapping %1&#10;%2" />

	<Message id = "SET_OF_SCALAR_AS_TUPLE"	message = "Attempted to map a set of scalars as a set of tuples" />
	<Message id = "SET_OF_TUPLE_AS_SCALAR"	message = "Attempted to map a set of tuples as a set of scalars" />
	<Message id = "SET_ON_SINGLE_TUPLE"		message = "Attempted to map a set on a scalar value but found a tuple value" />
	<Message id = "NON_TUPLE_AS_TUPLE"		message = "Attempted to map a non-tuple as a tuple" />
	<Message id = "SCALAR_JOIN_AS_TUPLE"	message = "Attempted to map a join of scalars as a join of tuples" />
	<Message id = "TUPLE_JOIN_AS_SCALAR"	message = "Attempted to map a join of tuples as a join of scalars" />

	<Message id = "SCALAR_ON_NONSCALAR"		message = "Attempted to map a scalar variable on a incompatible type of target" />
	<Message id = "TUPLE_ON_NONTUPLE"		message = "Attempted to map a tuple variable on a incompatible type of target" />
	<Message id = "SET_ON_NONSET"			message = "Attempted to map a set variable on a incompatible type of target" />
	<Message id = "JOIN_ON_NONJOIN"			message = "Attempted to map a join variable on a incompatible type of target" />
	<Message id = "FUNCVAR_ON_NONFUNCVAR"	message = "Attempted to map a function variable on a incompatible type of target" />

	<Message id = "TUPLE_MEMBER_FORMAT"		message = "tuple member %1" />
	<Message id = "PARAMETER_FORMAT"		message = "parameter %1 of function variable %2" />
	<Message id = "MAPPING_FORMAT"			message = "mapping for %1" />
	<Message id = "COMPONENT_NAME_FORMAT"	message = "%1 '%2'" />
	<Message id = "UNKNOWN"					message = "&lt;unknown&gt;" />
	
	<Message id = "UNTITLED_LINK"			message = "&lt;untitled link&gt;" />
	<Message id = "INCOMPATIBLE_SETMAPPING" message = "The existing set-mapping is incompatible with the current value definition of the variable. Please remove the mapping."/>
	<Message id = "INCOMPATIBLE_TUPLEMAPPING" message = "The existing tuple-mapping is incompatible with the current value definition of the variable. Please remove the mapping."/>
	<Message id = "MAP_PARENT_FIRST" message = "Cannot create a mapping at this level, map the parent first."/>
	
</MessageModule>
