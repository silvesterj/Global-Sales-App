<?xml version = "1.0" ?>
<MessageModule name = "Check">


	<Message id = "UNEXPECTED_TYPE"
		message = "Checked component is of type '%1'. Expected component of type '%2'."
	/>

	<!-- Check results -->

	<Message id = "EXCEPTION_WAS_THROWN"
		message = "Check caught an exception: '%1." 
		   type = "user" />

	<Message id = "EXCEPTION_WAS_THROWN_CHANGE_WHILE_CHECK_PEND"
		message = "Check caught an exception. This might be due to change of some components during the check. : '%1" 
		   type = "user" />
		   
	<Message id = "USER_INTERUPT"
		message = "The check was interrupted by the user." 
		   type = "user" />
		   
	<Message id = "VERSION_CONFLICT"
		message = "Version conflict: Deliverable '%1' uses more than one version of the same deliverable or the same component."
		   type = "user" />
	
	<Message id = "RELEASE_BY_ANOTHER_USER"
		message = "Some components were changed by other users while the checking was in progress."
		   type = "user" />

	<Message id = "PENDING_IMPORT"
		message = "Pending import: import of Deliverable '%1' is still in progress or it has terminated unexpectedly."
		   type = "user" />
	

	<!-- Null references and dangling references -->
	<!-- Deliverable -->
	<Message id = "DANG_DELIV"
		message = "Deliverable '%1' uses another deliverable that can't be accessed." 
		   type = "user" />

   	<!-- Controlled -->
 	<Message id = "DANGLING_REFERENCE"
		message = "Dangling reference in '%1'." 
		   type = "user" />

	<Message id = "PATH_TIMEDEP_SET_DEPRECATED"
		message = "Path in expression of '%1': time-dependent sets are deprecated. Please contact ProductXpress support."
		   type = "user" />

	<!-- Function -->
	<Message id = "NULL_USED_FUNC"
		message = "'%1' has a used Function in that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_USED_FUNC"
		message = "'%1' has a dangling reference to a used Function." 
		   type = "user" />

	<Message id = "MAPPING_NULL_FUNC_VAR"
		message = "Mapping on function/feature '%1' has a function variable that can't be accessed." 
		   type = "user" />
	<Message id = "MAPPING_DANG_FUNC_VAR"
		message = "Mapping on function/feature '%1' has a dangling reference to a function variable." 
		   type = "user" />
	<Message id = "CONST_MAPPING_NULL_FUNC_VAR"
		message = "Mapping on constant value has a function variable that can't be accessed." 
		   type = "user" />
	<Message id = "CONST_MAPPING_DANG_FUNC_VAR"
		message = "Mapping on constant value has a dangling reference to a function variable." 
		   type = "user" />


	<Message id = "NULL_FUNC_VAR"
		message = "'%1' has a function with a Variable that can't be accessed." 
		   type = "user" />
	<Message id = "DANG_FUNC_VAR"
		message = "'%1' has a function with a dangling reference to a Variable." 
		   type = "user" />

	<Message id = "NULL_FUNC_VAR_VAL_DEF"
		message = "function variable '%1' has a Value Definition in parameter '%2' that can't be accessed." 
		   type = "user" />

	<Message id = "DANG_FUNC_VAR_VAL_DEF"
		message = "function variable '%1' has a dangling reference to the Value Definition of parameter '%2'." 
		   type = "user" />

   	<Message id = "NULL_FUNC_PARAM_VAR_VAL_DEF"
		message = "function '%1' has a Value Definition in function's parameter '%2' that can't be accessed." 
		   type = "user" />

	<Message id = "DANG_FUNC_PARAM_VAR_VAL_DEF"
		message = "function '%1' has a dangling reference to a Value Definition in function's parameter '%2'." 
		   type = "user" />

  	<Message id = "NULL_RETVAL"
		message = "function/feature '%1' has a null Value Definition as a return value." 
		   type = "user" />

  	<Message id = "DANG_RETVAL"
		message = "function/feature '%1' has a dangling Value Definition as a return value." 
		   type = "user" />

	<Message id = "NULL_FUNC"
		message = "'%1' has a Function that can't be accessed (under '%2')." 
		   type = "user" />
  	<Message id = "DANG_FUNC"
		message = "'%1' has a dangling reference to a Function (under '%2')." 
		   type = "user" />

	<Message id = "NULL_FEATURE"
		message = "'%1' has a Feature that can't be accessed (under '%2')." 
		   type = "user" />
  	<Message id = "DANG_FEATURE"
		message = "'%1' has a dangling reference to a Feature (under '%2')." 
		   type = "user" />
		   
	<Message id = "NULL_FUNC_IN_CALC_AVSO"
		message = "'%1' has a Function that can't be accessed (under'%2')." 
		   type = "user" />

  	<Message id = "DANG_FUNC_IN_CALC_AVSO"
		message = "'%1' has a dangling reference to a Function (under'%2')." 
		   type = "user" />

 	<Message id = "FUNC_SYN_ERROR"
		message = "Syntax error in function '%1': '%2'." 
		   type = "user" />

	<Message id = "NULL_FUNC_DEF_VAL"
		message = "'%1' has a Function used as default value that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_FUNC_DEF_VAL"
		message = "'%1' has a dangling reference to a Function used as default value." 
		   type = "user" />	

	<Message id = "DANG_FUNC_EXPR_VAL_DEF"
		message = "function '%1' has a dangling reference to a Value Definition in function's expression." 
		   type = "user" />

	<Message id = "DANG_FUNC_TUP_MEM"
		message = "function '%1' has a dangling reference to a tuple member in function's expression." 
		   type = "user" />

	<Message id = "DANG_FUNC_EXPR_ERR_MSG"
		message = "function '%1' has a dangling reference to an Error Message in function's expression." 
		   type = "user" />

	<Message id = "FUNC_EXPR_NO_PATHS_ALLOWED"
		message = "Non-anchored paths in the expression of a function ('%1') are not allowed."
		   type = "user" />

	<Message id = "FUNC_NOT_SUPPORTED"
		message = "Function '%1' used in '%2' is not supported anymore, please use '%3' instead."
		   type = "user" />

	<Message id = "FUNC_ANCHORED_PATH_ERROR"
		message = "Error when checking path starting from structure element '%2' in expression of function '%1': %3"
		   type = "user" />	 

	<Message id = "FUNC_NULL_PATH_FUNC"
		message = "Function '%1' has a path Function in its expression that can't be accessed." 
		   type = "user" />

  	<Message id = "FUNC_DANG_PATH_FUNC"
		message = "Function '%1' has a dangling reference to a path Function in its expression." 
		   type = "user" />

  	<Message id = "FUNC_PATH_FUNC_NOTREACHABLE"
		message = "The function '%1' is not reachable via the path starting from structure element '%3' in the expression of function '%2'." 
		   type = "user" />	 

	<!-- Folder -->
	<Message id = "NULL_FOLDER_COMP"
		message = "Folder '%1' has a component that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_FOLDER_COMP"
		message = "Folder '%1' has a dangling reference to one of its components." 
		   type = "user" />

  	<!-- Diagram -->
	<Message id = "NULL_DIAGRAM_COMP"
		message = "Diagram '%1' has a component that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_DIAGRAM_COMP"
		message = "Diagram '%1' has a dangling reference to one of its components." 
		   type = "user" />

	<!-- Variable Mapping -->
	<Message id = "NULL_VARIABLE_MAPPING"
		message = "'%1' has a Variable Mapping that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VARIABLE_MAPPING"
		message = "'%1' has a dangling reference to a Variable Mapping." 
		   type = "user" />

	<Message id = "NULL_VAR_MAPP_SINGL"
		message = "'%1' has a SingleValueMapping in a mapping of a join variable  that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAR_MAPP_SINGL"
		message = "'%1' has a dangling reference to a SingleValueMapping in a mapping of a join variable." 
		   type = "user" />

   	<Message id = "NULL_VAR_MAPP_SCAL"
		message = "'%1' has a Scalar Variable Mapping that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAR_MAPP_SCAL"
		message = "'%1' has a dangling reference to a Scalar Variable Mapping." 
		   type = "user" />

   	<Message id = "NULL_VAR_MAPP_JOIN"
		message = "'%1' has a Join Variable Mapping that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAR_MAPP_JOIN"
		message = "'%1' has a dangling reference to a Join Variable Mapping." 
		   type = "user" />

   	<Message id = "NULL_VAR_IN_MAPPING"
		message = "'%1' has a Variable that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAR_IN_MAPPING"
		message = "'%1' has a dangling reference to a Variable." 
		   type = "user" />

   	<Message id = "NULL_VAR_IN_VAR_MAPPING"
		message = "'%1' has a Variable that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAR_IN_VAR_MAPPING"
		message = "'%1' has a dangling reference to a Variable." 
		   type = "user" />

  	<Message id = "CALC_DATE_FUNC_MAPPED_ON_NON_TIME_DEP_IN_ATTR"
		message = "Function '%1' (or one of the function it uses) which is depending on calculation date, is mapped on '%2' which is not time dependent." 
		   type = "user" />	
		   
   	<Message id = "CALC_DATE_FUNC_MAPPED_ON_NON_TIME_DEP_IN_MAPPING"
		message = "Function '%1' (or one of its used functions), which is depending on calculation date is mapped on '%2' whose value definition (or its used value definitions) contain a non-time-dependent value." 
		   type = "user" />		   

   	<Message id = "NON_TD_SET_MAPPED_ON_TD_LINK"
		message = "Set Variable '%1' which is time independent is mapped on a time dependant link between '%2' and '%3'." 
		   type = "user" />		   

	<Message id = "VAR_MAPPING_NOT_USED"
		message = "Variable Mapping for '%1' exists, but is not used by any of the functions in its mapping context ('%2') or by any lower level mapping context." 
		   type = "user" />

	<Message id = "CONST_MAP_UNITTYPE_MISMATCH"
		message = "The unit type of the quantity '%1' onto which '%2' is mapped does not match the unit of the quantity value definition ('%3')." 
		   type = "user" />

	<Message id = "CONST_MAP_UNIT_NOT_IN_VAL_DOM"
		message = "The unit '%1' of the quantity '%2' onto which '%3' is mapped does not comply with the Value Domain of the unit of '%4'." 
		   type = "user" />

	<Message id = "CONST_MAP_NOT_IN_VAL_DOM"
		message = "The value '%1' onto which '%2' is mapped does not comply with the Value Domain of '%3'." 
		   type = "user" />

	<Message id = "MISSING_MEMBER_MAPPING"
		message = "The input mapping of variable '%1' in structure element '%2' does not have a mapping for member '%3' of tuple value definition '%4'."
		   type = "user" />
	<Message id = "OBSOLETE_MEMBER_MAPPING"
		message = "The input mapping of variable '%1' in structure element '%2' contains a mapping for a tuple member of value definition '%3' that no longer exists."
		   type = "user" />

	<Message id = "OBSOLETE_PARAM_MAPPING"
		message = "The input mapping of function variable '%1' on function/operation '%2' contains a parameter mapping for a function/variable/operation parameter that no longer exists."
		   type = "user" />

  	<Message id = "NULL_FUNCVAR_RETVAL"
		message = "Function Variable '%1' has a null Value Definition as a return value." 
		   type = "user" />
  	<Message id = "DANG_FUNCVAR_RETVAL"
		message = "Function Variable '%1' has a dangling Value Definition as a return value." 
		   type = "user" />

	<Message id = "NULL_TABLE_CONSTVAL_MAPPING"
		message = "Variable '%1' has a Table mapped as constant value that can't be accessed." 
		   type = "user" />
  	<Message id = "DANG_TABLE_CONSTVAL_MAPPING"
		message = "Variable '%1' has a dangling reference to a Table mapped as constant value." 
		   type = "user" />	

	<Message id = "NULL_UNITTYPE_CONSTVAL_MAPPING"
		message = "Variable '%1' has a unit type in a quantity mapped as constant value that can't be accessed." 
		   type = "user" />
  	<Message id = "DANG_UNITTYPE_CONSTVAL_MAPPING"
		message = "Variable '%1' has a dangling reference to a unit type in a quantity mapped as constant value." 
		   type = "user" />	

	<!-- FPMAttribute -->
	<Message id = "NULL_FPMATTRIBUTE_IN_MAP"
		message = "'%1' has a feature that can't be accessed (contained in the Mapping of '%2')." 
		   type = "user" />

  	<Message id = "DANG_FPMATTRIBUTE_IN_MAP"
		message = "'%1' has a dangling reference to a feature in the Mapping of '%2'." 
		   type = "user" />	

	<Message id = "NULL_USED_BASE_FEAT_IN_MAP"
		message = "'%1' has a used base feature that can't be accessed (contained the Scalar Mapping of '%2')." 
		   type = "user" />
  	<Message id = "DANG_USED_BASE_FEAT_IN_MAP"
		message = "'%1' has a dangling reference to a used base feature in the Mapping of '%2'." 
		   type = "user" />	

   	<Message id = "NULL_FPMATTRIBUTE_IN_VAR_MAP"
		message = "'%1' has a a feature that can't be accessed (contained in the Mapping of '%2')." 
		   type = "user" />

  	<Message id = "DANG_FPMATTRIBUTE_IN_VAR_MAP"
		message = "'%1' has a dangling reference to a feature in the Mapping of '%2'." 
		   type = "user" />	

  	<Message id = "DANG_STARTENDDATE"
		message = "'%1' has a dangling start/end date." 
		   type = "user" />		

  	<Message id = "STARTENDDATE_NOT_TIMEINDEP_DATE_ATTR"
		message = "Start/end date of '%1' is not a time-independent date-time attribute (%2)." 
		   type = "user" />		


	<!-- Metadata -->
  	<Message id = "DANG_TXT_BLOCK"
		message = "'%1' has a dangling reference to a Text Block." 
		   type = "user" />
  	<Message id = "DANG_STEREOTYPE"
		message = "'%1' has a dangling reference to a Stereotype." 
		   type = "user" />

	<!-- Hyperlink -->
  	<Message id = "NULL_REFCOMP_IN_HYPERLINK"
		message = "Text block '%1' has a hyperlink with a null referred component." 
		   type = "user" />
  	<Message id = "DANG_REFCOMP_IN_HYPERLINK"
		message = "Text block '%1' has a hyperlink with a dangling referred component." 
		   type = "user" />

   	<!-- Value Definition -->

	<Message id = "JOIN_SET_VALDEF_SCALAR"
		message = "Set value definition '%1' contains a simple value definition; not allowed in a join value definition ('%2')." 
		   type = "system" />

	<Message id = "VAL_DEF_UNDEFINED_DATA_STRUCTURE"
		message = "Value definition '%1' has an undefined data structure."
		   type = "user" />  

	<Message id = "VAL_DEF_UNDEFINED_DATA_TYPE"
		message = "Value definition '%1' has an undefined data type."
		   type = "user" />

	<Message id = "NULL_VAL_DEF"
		message = "'%1' has a Value Definition that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAL_DEF"
		message = "'%1' has a dangling reference to a Value Definition." 
		   type = "user" />

   	<Message id = "NULL_VAL_DEF_JOINSET"
		message = "Join Value Definition '%1' has Set Value Definition that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAL_DEF_JOINSET"
		message = "Join Value Definition '%1' has a dangling reference to a Set Value Definition." 
		   type = "user" />

   	<Message id = "NULL_VAL_DEF_PARENT"
		message = "'%1' (in '%2') has a Value Definition that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAL_DEF_PARENT"
		message = "'%1' (in '%2') has a dangling reference to a Value Definition." 
		   type = "user" />

   	<Message id = "NULL_VAL_DEF_IN_ATTR"
		message = "Attribute '%1' (in '%2') has a Value Definition that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_VAL_DEF_IN_ATTR"
		message = "Attribute '%1' (in '%2') has a dangling reference to a Value Definition." 
		   type = "user" />
	
	<Message id = "VAL_DEF_TBL_ID_NO_VALDOMDEF"
		message = "Value definition '%1' of type 'Table Id' in feature '%2' (in '%3') has no value domain defined."
		   type = "user" />

	<Message id = "SET_VALDEF_NO_CONTAINED"
		message = "Set Value definition '%1' has no contained Value Definition."
		   type = "user" />

	<Message id = "QTY_VALDEF_NO_UNIT"
		message = "Quantity Value definition '%1' has no unit."
		   type = "user" />

	<Message id = "QTY_VALDEF_TIMEDEP_UNIT"
		message = "Quantity Value definition '%1' has a time-dependent unit ('%2')."
		   type = "user" />

	<Message id = "QTY_VALDEF_ILLEGAL_UNIT"
		message = "The unit ('%1') of the quantity value definition '%2' must be either of type string or must have an enumerated value domain of type string or integer."
		   type = "user" />

	<Message id = "QTY_VALDOM_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1', used in the value domain of quantity '%2', is not in the value domain of the quantity's unit ('%3')."
		   type = "user" />

 	<Message id = "MISSING_SETS"
		message = "Join ValueDefinition '%1' does not have two sets."
		   type = "user" />	
		   
 	<Message id = "ONE_ENUM_VAL_DOM_DEF"
		message = "The Value Domain of '%1' has only one value option."
		   type = "user" />

	<Message id = "TUP_VAL_DEF_HAS_NO_NAME"
		message = "Tuple value definition has no name." 
		   type = "user" />

  	<Message id = "TUP_VAL_DEF_HAS_INVALID_NAVNAME"
		message = "Tuple value definition '%1' has an invalid navigation name." 
		   type = "user" />

	<Message id = "TUP_MEM_HAS_NO_NAME"
		message = "Value definition '%1' has a tuple member without a name."
		   type = "user" />

	<Message id = "TUP_MEM_HAS_INVALID_NAVNAME"
		message = "Tuple member '%1' in value definition '%2' contains invalid navigation name characters."
		   type = "user" />

	<Message id = "DUPLICATE_TUP_MEM_NAME"
		message = "Tuple member name '%1' is not unique in value definition '%2'."
		   type = "user" />
		   
	<Message id = "VAL_DEF_NO_UNIFORM_STR_ELMS"
		message = "Value definition '%1' contains both deployment environment structure elements and financial product structure elements."
		   type = "user" />

	<Message id = "VAL_DEF_TIMEDEP_SET_DEPRECATED"
		message = "Value definition '%1': time-dependent sets are deprecated. Please contact ProductXpress support."
		   type = "user" />


	<!-- Structure Element -->
	<Message id = "DANG_SUPER_TYPE"
		message = "StructureElement '%1' has a dangling reference to its Super Type." 
		   type = "user" />
	<Message id = "SUPER_TYPE_FINAL"
		message = "The super type '%1' of structure element '%2' is final."
		   type = "user" />

	<Message id = "INV_STARTENDDATE_ATTR"
		message = "Start/end date of '%1' is not an owned or inherited attribute ('%2' is an attribute of '%3')." 
		   type = "user" />

	<Message id = "NO_STARTENDDATE_OVERRIDING"
		message = "The start/end date of a structure element ('%1') cannot be overridden in a subtype."
		   type = "user" />

	<Message id = "STARTENDDATE_DEPRECATED"
		message = "Structure element (%1) with a start-date or end-date is deprecated. Please contact ProductXpress support."
		   type = "user" />


	<Message id = "DUPLICATE_LINK_NAME"
		message = "Link name '%1' is not unique in the scope of Structure Element '%2'." 
		   type = "user" />

	<Message id = "DUPLICATE_LINKID"
		message = "Link '%1' has a link id that is not unique in the scope of Structure Element '%2'." 
		   type = "user" />

	<Message id = "INCOMPATIBLE_PARTITION"
		message = "Link '%1' cannot be a part of link '%2', since their owning Structure Elements are not related." 
		   type = "user" />

	<Message id = "SPLIT_PARTITION_LEVEL"
		message = "Link '%1' cannot be partitioned in Structure Element '%2', since it is already partitioned in Structure Element '%3'." 
		   type = "user" />

	<Message id = "CANNOT_PARTITION_FINAL_LINK"
		message = "Link '%1' cannot be a part of link '%2', since '%2' is declared final." 
		   type = "user" />

	<Message id = "INCOMPATIBLE_LINK_TYPES"
		message = "Link '%1' cannot be a part of link '%2', because one of them is a Reference Link and the other one is not." 
		   type = "user" />

	<Message id = "INCOMPATIBLE_LINK_TARGETS"
		message = "Link '%1' cannot be a part of link '%2', because the targeted Structure Elements are not related." 
		   type = "user" />

	<Message id = "UNEQUAL_LINK_TARGETS"
		message = "Link '%1' cannot be a part of link '%2', because they do not target the same Structure Element and subtypes were not allowed." 
		   type = "user" />

	<Message id = "INCOMPATIBLE_MULTIPLICITY"
		message = "Link '%1' cannot be a part of link '%2', because the multiplicity of '%1' is not a sub-set of that of '%2'." 
		   type = "user" />

	<Message id = "CANNOT_PARTITION_ZERO_COMPLEMENNT"
		message = "Partition Complement '%1' cannot be partitioned, because it has zero multiplicity." 
		   type = "user" />

	<Message id = "OVERLAPPING_PARTITION_PARTS"
		message = "Structure Links '%1' and '%2' cannot be part of the same partition ('%3'), since they have overlapping target types."
		   type = "user" />

	<Message id = "OVERRIDING_PARTITION_PART"
		message = "Link '%1' of '%2' cannot partition link '%3' of '%4', since that link is already partitioned in intermediate type '%5'."
		   type = "user" />

	<Message id = "COMPLEMENT_PART_ONLY_PARTITION_PART"
		message = "Structure Element '%1' contains a complement part '%2', but no other partition parts based on the same partition '%3' of '%4'." 
		   type = "user" />

	<Message id = "DUPLICATE_MAPPINGGROUP_NAME"
		message = "Mapping group name '%1' is not unique in Structure Element '%2'."
		   type = "user" />

	<!-- Feature -->
	<Message id = "DANGLING_BASE_FEATURE"
		message = "Feature '%1' of Structure Element '%2' has a dangling reference to its base feature.')." 
		   type = "user" />

	<Message id = "INVALID_BASE_FEATURE"
		message = "Feature '%3' of Structure Element '%4' is not a valid base feature for Feature '%1' of Structure Element '%2', because the Structure Elements aren't Sub and Supertypes." 
		   type = "user" />

	<Message id = "BASE_FEATURE_NOT_ROOT"
		message = "Feature '%3' of Structure Element '%4' is not a valid base feature for Feature '%1' of Structure Element '%2', because it is an overriding feature itself." 
		   type = "user" />

	<Message id = "BASE_FEATURE_NOT_VISIBLE"
		message = "Cannot override private feature '%1' of Structure Element '%2' in Structure Element '%3'." 
		   type = "user" />

	<Message id = "NO_PARENT_FEATURE"
		message = "Cannot determine the parent Feature of Feature '%1' of Structure Element '%2'." 
		   type = "user" />

	<Message id = "INCOMPATIBLE_FEATURE_TYPES"
		message = "The Value Definition of Feature '%1' of Structure Element '%2' is incompatible with that of its parent Feature in '%3'." 
		   type = "user" />

	<Message id = "FEATURE_HAS_NO_VALUEDEFINITION"
		message = "Feature '%1' of Structure Element '%2' has no value definition." 
		   type = "user" />

	<Message id = "FEATURE_VALDEF_NO_IDENTITY"
		message = "Feature '%1' of Structure Element '%2' has a value definition with illegal data type Identity." 
		   type = "user" />

	<Message id = "FEATURE_HAS_NO_AVSO"
		message = "Feature  '%1' has no value-source defined." 
		   type = "user" />

	<Message id = "FEATURE_HAS_MORE_THAN_ONE_ENTERED_AVSO"
		message = "Attribute  '%1' has more than one source-option of type 'entered'. Only one is allowed." 
		   type = "user" />

	<Message id = "FEATURE_UNTITLED_MULTIPLE_AVSO"
		message = "Feature '%1' of '%2' has an untitled source-option among multiple value-sources." 
		   type = "user" />

	<Message id = "AVSO_NAME_REQUIRED"
		message = "Feature '%1' has a source-option without a name."
		   type = "user" />

	<Message id = "AVSO_NAME_NOT_UNIQUE"
		message = "Feature '%1' has more then one source-option named '%2'."
		   type = "user" />

	<Message id = "MULTI_ENTERED_AVSO_FOR_NONPUBLIC_ATTR"
		message = "Feature '%1' of '%2' has multiple source-options or a source-option of type 'entered', hence it must have public visibility." 
		   type = "user" />

	<Message id = "DUPLICATE_FEATURE_NAME"
		message = "Feature name '%1' is not unique in Structure Element '%2'."
		   type = "user" />

	<Message id = "NO_ABSTRACT_FEATURE_ALLOWED"
		message = "Feature '%1' is abstract in Structure Element '%2' that is not abstract."
		   type = "user" />


	<Message id = "FEATURE_HAS_NO_NAME"
		message = "Structure Element '%1' has a Feature without a name."
		   type = "user" />


	<Message id = "FEATURE_HAS_INVALID_NAVNAME"
		message = "Feature name '%1' in Structure Element '%2' contains invalid navigation name characters."
		   type = "user" />


   	<Message id = "NULL_FEAT_PARAM_VAL_DEF"
		message = "Feature '%1' of Structure Element '%2' has a Value Definition in signature's parameter '%3' that can't be accessed." 
		   type = "user" />

	<Message id = "DANG_FEAT_PARAM_VAL_DEF"
		message = "Feature '%1' of Structure Element '%2' has a dangling reference to a Value Definition in signature's parameter '%3'." 
		   type = "user" />

	<Message id = "FEAT_PARAM_NO_IDENTITY"
		message = "Feature '%1' of Structure Element '%2' has a parameter ('%3') with illegal data type Identity." 
		   type = "user" />

	<Message id = "FEAT_PARAM_HAS_NO_NAME"
		message = "Feature '%1' of Structure Element '%2' has a signature parameter without a name."
		   type = "user" />

	<Message id = "FEAT_PARAM_HAS_INVALID_NAVNAME"
		message = "Signature parameter '%1' in Feature '%2' of Structure Element '%3' contains invalid navigation name characters."
		   type = "user" />

	<Message id = "DUPLICATE_FEAT_PARAM_NAME"
		message = "Signature parameter name '%1' is not unique in Feature '%2' of Structure Element '%3'."
		   type = "user" />

	<Message id = "OVERRIDING_SIGNAT_INCOMPATIBLE"
		message = "The signature of Feature '%1' of Structure Element '%2' is incompatible with that of its parent Feature in '%3': wrong number of arguments." 
		   type = "user" />

	<Message id = "OVERRIDING_SIGNAT_NOT_WIDER"
		message = "The signature of Feature '%1' of Structure Element '%2' is incompatible with that of its parent Feature in '%3': arguments are not compatible." 
		   type = "user" />

	<Message id = "ABSTRACT_FEAT_FINAL_PRIVATE"
		message = "An abstract Feature ('%1' of Structure Element '%2') cannot be final or private." 
		   type = "user" />


   	<!-- Value Source -->
  	<Message id = "TIMEDEP_VALSRC_FOR_NONTIMEDEP_FEATURE"
		message = "Time dependent Value Source '%1' (using CalcDate) for non time dependent feature '%2' in '%3'." 
		   type = "user" />	

    <Message id = "DANGLING_BASE_VALUESOURCE"		
		message = "Value Source %1 of feature '%2' in Structure Element '%3', has a dangling teference to its base Value Source." 
		   type = "user" />	

    <Message id = "INVALID_BASE_VALUESOURCE"		
		message = "Value Source %1 of feature '%2' in Structure Element '%3', is not a valid base Value Source for %4 of Feature '%5' in '%6', because their owning Features are not related."
		   type = "user" />	

    <Message id = "BASE_VALUESOURCE_NOT_ROOT"		
		message = "Value Source %1 of feature '%2' in Structure Element '%3', is not a valid base Value Source for %4 of Feature '%5' in '%6', because it is not a root Value Source."
		   type = "user" />	

    <Message id = "NO_PARENT_VALUESOURCE"		
		message = "Could not obtain parent Value Source for Value Source %1 of feature '%2' in Structure Element '%3'."
		   type = "user" />	

 	<Message id = "VALSRC_EXPR_EMPTY"
		message = "The expression of value source '%1' of '%2' in '%3' is empty and the structure element is not abstract." 
		   type = "user" />

 	<Message id = "VALSRC_EXPR_SYN_ERROR"
		message = "Syntax error in the expression of value source '%1' of '%2' in '%3': %4." 
		   type = "user" />

  	<Message id = "VALSRC_DANG_USED_FUNC"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to a used Function in its expression." 
		   type = "user" />

  	<Message id = "VALSRC_DANG_TABLE"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to a Table in its expression." 
		   type = "user" />

	<Message id = "VALSRC_DANG_EXPR_VAL_DEF"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to a Value Definition in its expression." 
		   type = "user" />

  	<Message id = "VALSRC_DANG_USED_VAR"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to a used Variable in its expression." 
		   type = "user" />

	<Message id = "VALSRC_DANG_TUP_MEM"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to a tuple member in its expression." 
		   type = "user" />

	<Message id = "VALSRC_DANG_EXPR_ERR_MSG"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to an Error Message in its expression." 
		   type = "user" />

  	<Message id = "VALSRC_NULL_PATH_FUNC"
		message = "Value source '%1' of '%2' in '%3' has a path Function in its expression that can't be accessed." 
		   type = "user" />

  	<Message id = "VALSRC_DANG_PATH_FUNC"
		message = "Value source '%1' of '%2' in '%3' has a dangling reference to a path Function in its expression." 
		   type = "user" />

  	<Message id = "VALSRC_PATH_FUNC_NOTREACHABLE"
		message = "The function '%1' is not reachable via the path in the expression of value source '%2' of '%3' in '%4'." 
		   type = "user" />	 

  	<Message id = "VALSRC_USED_PATH_ERROR"
		message = "Error when checking path in expression of value source '%1' of '%2' in '%3': %4"
		   type = "user" />	
		   

<!-- Aggregations -->	

	<Message id = "VALSRC_NULL_AGGREGATION"
		message = "The aggregation of '%1' of '%2' in  '%3' is not defined." 
		   type = "user" />
	<Message id = "AGGR_LINKPATH_EMPTY_EXCEPTION"
		message = "Exception due to aggregation link for type '%1 ' as value source  for '%2' in '%3' is undefined: '%4'" 
		   type = "user" />
	<Message id = "AGGR_EXPR_UNDEFRET_EXCEPTION"
		message = "Exception due to return type for expression of aggregation  value source of type'%1 ' for '%2' in '%3' is undefined:'%4'" 
		   type = "user" />
	<Message id = "AGGR_LINKPATH_EMPTY"
		message = "The aggregated link for type '%1 ' as value source for '%2' in '%3' is empty." 
		   type = "user" />
	<Message id = "AGGR_LINK_USED_IN_PATH"
		message = "The aggregated link of %1 aggregation value source %2 of '%3' in '%4', or one of its partitions, is also used in a path in %5 %6 (under %7 %8)."
		   type = "user" />
	<Message id = "AGGR_LINK_IN_PATH_USED_IN_CALC"
		message = "The aggregated link of %1 aggregation value source %2 of '%3' in '%4' is also used in a path in %5 %6 (under %7 %8), used in the calculation of this aggregation."
		   type = "user" />
	<Message id = "AGGR_EXPR_UNDEFRET"
		message = "The return type for expression of aggregation of type '%1 ' as value source for '%2' in '%3' is undefined." 
		   type = "user" />
 	<Message id = "AGGR_EXPR_EMPTY"
		message = "The expression of aggregation of type '%1 ' as  value source  for '%2' in '%3' is empty." 
		   type = "user" />
 	<Message id = "CUSTAGGR_REDUCE_EXPR_EMPTY"
		message = "The reduce expression of the custom aggregation value source for '%1' in '%2' is empty." 
		   type = "user" />
	<Message id = "AGGR_EXPR_SYN_ERROR"
		message = "Syntax error in the expression of the aggregation value source of type '%1' of '%2' in '%3' : %4" 
		   type = "user" />

  	<Message id = "AGGR_DANG_USED_FUNC"
		message = "The aggregation value source of type '%1' of '%2' in '%3' has a dangling reference to a used function in its expression." 
		   type = "user" />

	<Message id = "AGGR_DANG_EXPR_VAL_DEF"
		message = "The aggregation value source of type '%1' of  '%2' in '%3' has a dangling reference to a value definition in its expression." 
		   type = "user" />

  	<Message id = "AGGR_DANG_USED_VAR"
		message = "The aggregation value source of type '%1 ' of '%2' in '%3' has a dangling reference to a variable in its expression." 
		   type = "user" />

  	<Message id = "AGGR_NULL_PATH_FUNC"
		message = "The aggregation value source of type '%1' of '%2' in '%3' has a path in its expression that can't be accessed." 
		   type = "user" />

  	<Message id = "AGGR_DANG_PATH_FUNC"
		message = "The aggregation value source of type '%1' of '%2' in '%3' has a dangling reference to a function inside a path in its expression." 
		   type = "user" />

  	<Message id = "AGGR_PATH_FUNC_NOTREACHABLE"
		message = "The function '%1' is not reachable via the path in the expression of the aggregation value source of type '%2' of '%3' in '%4'." 
		   type = "user" />	 

  	<Message id = "AGGR_USED_PATH_ERROR"
		message = "Error when checking path in expression of aggregation of type'%1' of '%2' in '%3': %4."
		   type = "user" />	
		   
	<Message id = "AGGR_DANG_TUP_MEM"
		message = "The aggregation value source of type '%1' of '%2' in '%3' has a dangling reference to a tuple member in its expression." 
		   type = "user" />

	<Message id = "AGGR_DANG_EXPR_ERR_MSG"
		message = "The aggregation value source of type '%1' of '%2' in '%3' has a dangling reference to an error message in its expression." 
		   type = "user" />
		
<Message id = "CUSTAGGR_FINAL_EXPR_SYN_ERROR"
		message = "Syntax error in the finalize expression of the custom aggregation value source of '%1' in '%2': %3" 
		   type = "user" />		   

 	<Message id = "CUSTAGGR_REDUCE_EXPR_SYN_ERROR"
		message = " Syntax error in the reduce expression of the custom aggregation value source of '%1' in '%2': %3" 
		   type = "user" />
		   
		   


   	<!-- Validations -->
	<Message id = "DANGLING_BASE_VALIDATIONELEMENT"
		message = "Validation element '%1' of Structure Element '%2' has a dangling reference to its base validation element.')." 
		   type = "user" />
	<Message id = "INVALID_BASE_VALIDATIONELEMENT"
		message = "Validation element '%3' of Structure Element '%4' is not a valid base validation element for validation element '%1' of Structure Element '%2', because the Structure Elements aren't Sub and Supertypes." 
		   type = "user" />
	<Message id = "BASE_VALIDATIONELEMENT_NOT_ROOT"
		message = "Validation element '%3' of Structure Element '%4' is not a valid base validation element for validation element '%1' of Structure Element '%2', because it is an overriding validation element itself." 
		   type = "user" />
	<Message id = "BASE_VALIDATIONELEMENT_NOT_VISIBLE"
		message = "Cannot override private validation element '%1' of Structure Element '%2' in Structure Element '%3'." 
		   type = "user" />
	<Message id = "NO_PARENT_VALIDATIONELEMENT"
		message = "Cannot determine the parent validation element of validation element '%1' of Structure Element '%2'." 
		   type = "user" />
	<Message id = "VALIDATIONELEMENT_HAS_NO_NAME"
		message = "Structure Element '%1' has a validation element without a name."
		   type = "user" />
	<Message id = "VALIDATIONELEMENT_HAS_INVALID_NAVNAME"
		message = "Validation element name '%1' in Structure Element '%2' contains invalid navigation name characters."
		   type = "user" />
	<Message id = "DUPLICATE_VALIDATIONELEMENT_NAME"
		message = "Validation element name '%1' is not unique in Structure Element '%2'."
		   type = "user" />
	<Message id = "VALIDATION_MSGTXT_PARAM_NOT_IN_SIG"
		message = "In the message of validation '%1' of Structure Element '%2' a parameter is referenced that is not part of the signature."
		   type = "user" />
	<Message id = "VALIDATION_UNDEFINED_SEVERITY"
		message = "Validation '%1' of Structure Element '%2' has an undefined severity."
		   type = "user" />  
 	<Message id = "VALIDATION_EXPR_SYN_ERROR"
		message = "Syntax error in the expression of Validation '%1' of Structure Element '%2': %3." 
		   type = "user" />
  	<Message id = "TIMEDEP_VALIDATION_EXPR"
		message = "A Validation ('%1' of Structure Element '%2') cannot have a time dependent expression (using CalcDate)." 
		   type = "user" />	
  	<Message id = "VALIDATION_DANG_USED_FUNC"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to a used Function in its expression." 
		   type = "user" />
  	<Message id = "VALIDATION_DANG_TABLE"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to a Table in its expression." 
		   type = "user" />
	<Message id = "VALIDATION_DANG_EXPR_VAL_DEF"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to a Value Definition in its expression." 
		   type = "user" />
  	<Message id = "VALIDATION_DANG_USED_VAR"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to a used Variable in its expression." 
		   type = "user" />
	<Message id = "VALIDATION_DANG_TUP_MEM"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to a tuple member in its expression." 
		   type = "user" />
	<Message id = "VALIDATION_DANG_EXPR_ERR_MSG"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to an Error Message in its expression." 
		   type = "user" />
  	<Message id = "VALIDATION_USED_PATH_ERROR"
		message = "Error when checking path in expression of Validation '%1' of Structure Element '%2': %3"
		   type = "user" />	 
  	<Message id = "VALIDATION_NULL_PATH_FUNC"
		message = "Validation '%1' of Structure Element '%2' has a path Function in its expression that can't be accessed." 
		   type = "user" />
  	<Message id = "VALIDATION_DANG_PATH_FUNC"
		message = "Validation '%1' of Structure Element '%2' has a dangling reference to a path Function in its expression." 
		   type = "user" />
  	<Message id = "VALIDATION_PATH_FUNC_NOTREACHABLE"
		message = "The function '%1' is not reachable via the path in the expression of Validation '%2' of Structure Element '%3'." 
		   type = "user" />	 

	<!-- Validation MessageParameter -->
	<Message id = "DUPLICATE_VLD_MESG_PARAM_NAME"
		message = "Message Parameter name '%1' is not unique in Validation '%2' in '%3'."
		   type = "user" />
   	<Message id = "NULL_VLD_MESG_PARAM_TYPE"
		message = "Message parameter '%1'  of Validation '%2' in '%3' has a Type that can't be accessed." 
		   type = "user" />
	<Message id = "DANG_VLD_MESG_PARAM_TYPE"
		message = "Message parameter '%1' of Validation '%2' in '%3' has a dangling reference to a Type." 
		   type = "user" />
	<Message id = "VLD_MESG_PARAM_HAS_NO_NAME"
		message = "Validation '%1' in '%2' has a message parameter without a name."
		   type = "user" />
	<Message id = "VLD_MESG_PARAM_HAS_INVALID_NAVNAME"
		message = "Message parameter name '%1' in Validation '%2' in '%3' contains invalid navigation name characters."
		   type = "user" />
 	<Message id = "VLD_MESG_PARAM_EXPR_SYN_ERROR"
		message = "Syntax error in the expression of Message Parameter '%1' of Validation '%2' in '%3': %4." 
		   type = "user" />
  	<Message id = "TIMEDEP_VLD_MESG_PARAM_EXPR"
		message = "A Message Parameter ('%1' of Validation '%2' in '%3') cannot have a time dependent expression (using CalcDate)." 
		   type = "user" />	
  	<Message id = "VLD_MESG_PARAM_DANG_USED_FUNC"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a dangling reference to a used Function in its expression." 
		   type = "user" />
  	<Message id = "VLD_MESG_PARAM_DANG_TABLE"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a dangling reference to a Table in its expression." 
		   type = "user" />
	<Message id = "VLD_MESG_PARAM_DANG_EXPR_VAL_DEF"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a dangling reference to a Value Definition in its expression." 
		   type = "user" />
  	<Message id = "VLD_MESG_PARAM_DANG_USED_VAR"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a dangling reference to a used Variable in its expression." 
		   type = "user" />
	<Message id = "VLD_MESG_PARAM_DANG_TUP_MEM"
		message = "Message Parameter '%1' of Validation '%2' in '%3 has a dangling reference to a tuple member in its expression." 
		   type = "user" />
	<Message id = "VLD_MESG_PARAM_DANG_EXPR_ERR_MSG"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a dangling reference to an Error Message in its expression." 
		   type = "user" />
  	<Message id = "VLD_MESG_PARAM_USED_PATH_ERROR"
		message = "Error when checking path in expression of Message Parameter '%1' of Validation '%2' in '%3': %4"
		   type = "user" />	 
  	<Message id = "VLD_MESG_PARAM_NULL_PATH_FUNC"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a path Function in its expression that can't be accessed." 
		   type = "user" />
  	<Message id = "VLD_MESG_PARAM_DANG_PATH_FUNC"
		message = "Message Parameter '%1' of Validation '%2' in '%3' has a dangling reference to a path Function in its expression." 
		   type = "user" />
  	<Message id = "VLD_MESG_PARAM_PATH_FUNC_NOTREACHABLE"
		message = "The function '%1' is not reachable via the path in the expression of Message Parameter '%2' of Validation '%3' in '%4'." 
		   type = "user" />	 

	<!-- ValidationGroup -->
  	<Message id = "VLD_GRP_MEMBER_NULL_VLD_ELMT"
		message = "Validation Group '%1' in Structure Element '%2' has a null validation element."
		   type = "user" />	 
  	<Message id = "VLD_GRP_MEMBER_DANG_VLD_ELMT"
		message = "Validation Group '%1' in Structure Element '%2' has a dangling reference to a validation element."
		   type = "user" />	 
  	<Message id = "VLD_GRP_MEMBER_PATH_ERROR"
		message = "Error when checking validation path of Validation Group '%1' in Structure Element '%2': %3"
		   type = "user" />	 
	<Message id = "DUPLICATE_VLD_GRP_MAIN_PATH"
		message = "The path to validation element '%1' is duplicate in the list of own and inherited validation paths in the main section of Validation Group '%2' in Structure Element '%3'."
		   type = "user" />
	<Message id = "DUPLICATE_VLD_GRP_PREREQ_PATH"
		message = "The path to validation element '%1' is duplicate in the list of own and inherited validation paths in the prerequisite section of Validation Group '%2' in Structure Element '%3'."
		   type = "user" />
  	<Message id = "VLD_GRP_RECURSIVE"
		message = "Validation Group '%1' in Structure Element '%2' contains itself (directly or through its contained validation groups)."
		   type = "user" />	 

	<!-- Variable Mapping -->
	<Message id = "NULL_REF_VAR_TO_VAR_MAPPING"
		message = "Variable '%1' is used but has no full mapping specified, under '%2' as an entry point." 
		   type = "user" />

  	<Message id = "DANG_REF_VAR_TO_VAR_MAPPING"
		message = "Variable '%1' has a dangling reference to its mapping, under '%2' as an entry point."
		   type = "user" />	
		   
	<Message id = "NULL_REF_VAR_TO_VAR_MAPPING_NO_ENT_POINT"
		message = "Variable '%1' is used but has no mapping specified, in mapping slice for '%2' at '%3'." 
		   type = "user" />

  	<Message id = "DANG_REF_VAR_TO_VAR_MAPPING_NO_ENT_POINT"
		message = "Variable '%1' has a dangling reference to its mapping, in mapping slice for '%2' at '%3'."
		   type = "user" />	

	<Message id = "REF_VAR_TO_VAR_MAPPING_IN_SUB_TYPE"
		message = "Variable '%1' is not mapped in '%2' and '%2' is not abstract (in mapping slice for '%3'); mapping in sub-type not allowed."
		   type = "user" />

	<Message id = "REMOTE_MAPPING_NOT_USED"
		message = "Mapped in subtype or composition ancestor indication for variable '%1' in '%2' (in mapping slice for mapping context '%3') exists, but variable is not used in this mapping slice." 
		   type = "user" />

	<Message id = "NO_OVERRIDING_MAPPING_IN_COMP_ANC"
		message = "Mapped in composition ancestor indication for variable '%1' in '%2' (in mapping slice for '%3') pointless as it is already mapped in super type '%4'."
		   type = "user" />

	<Message id = "NO_OVERRIDING_MAPPING_IN_SUBTYPE"
		message = "Mapped in subtype indication for variable '%1' in '%2' (in mapping slice for '%3') pointless as it is already mapped in super type '%4'."
		   type = "user" />

	<Message id = "NULL_MAPPING"
		message = "'%1' has empty mapping specified for Variable '%2'." 
		   type = "user" />

  	<Message id = "DANG_MAPPING"
		message = "'%1' has a dangling reference to a mapping for Variable '%2'." 
		   type = "user" />	

	<Message id = "NULL_STRUCT_ELEM"
		message = "'%1' has no Structure Element in Mapping of Variable '%2'." 
		   type = "user" />

  	<Message id = "DANG_STRUCT_ELEM"
		message = "'%1' has a dangling reference to a Structure Element in Mapping of Variable '%2'." 
		   type = "user" />
		   
   	<Message id = "NULL_STRUCT_ELEM_SRC"
		message = "'%1' has no Structure Element as link source in Mapping of Set Variable '%2'." 
		   type = "user" />

  	<Message id = "DANG_STRUCT_ELEM_SRC"
		message = "'%1' has a dangling reference to a Structure Element functioning as link source in Mapping of Set Variable '%2'." 
		   type = "user" />	

	<Message id = "NULL_STRUCT_ELEM_TARG"
		message = "'%1' has no Structure Element as link target in Mapping of Set Variable '%2'." 
		   type = "user" />

  	<Message id = "DANG_STRUCT_ELEM_TARG"
		message = "'%1' has a dangling reference to a Structure Element functioning as link target in Mapping of Set Variable '%2'." 
		   type = "user" />	 

   	<Message id = "NULL_STRUCTELM_FROM"
		message = "'%1' has no Product Structure Element as link source in Join Variable Mapping." 
		   type = "user" />

  	<Message id = "DANG_STRUCTELM_FROM"
		message = "'%1' has a dangling reference to a Product Structure Element functioning as link source in Join Variable Mapping." 
		   type = "user" />	

	<Message id = "NULL_STRUCTELM_TO"
		message = "'%1' has no Structure Element as link target in Join Variable Mapping." 
		   type = "user" />

  	<Message id = "DANG_STRUCTELM_TO"
		message = "'%1' has a dangling reference to a Structure Element functioning as link target in Join Variable Mapping." 
		   type = "user" />	 

	<Message id = "MAPPATH_INVALID_DEFTYPE"
		message = "Invalid definition type in mapping path: %1." />

  	<Message id = "MAPPATH_NOTREACHEABLE"
		message = "%1 '%2' is not reachable from '%3'." 
		   type = "user" />	 

  	<Message id = "MAPPATH_NOTREACHEABLE_BY_ID"
		message = "The path refers to a(n) %1 that was deleted or is no longer reachable from '%2'."
		   type = "user" />	 

  	<Message id = "MAPPATH_NOTREACHEABLE_BY_NAME"
		message = "There is no %1 named '%2' reachable from '%3'." 
		   type = "user" />	 

  	<Message id = "MAPPATH_NOT_VISIBLE"
		message = "The path refers to a(n) %1 named '%2' (owned by '%3') that is not visible from path owner '%4'."
		   type = "user" />	 

  	<Message id = "MAPPATH_COMPONENT_DOESNT_MATCH_ID"
		message = "There is a %1 reachable from '%2', but it does not match the id given." 
		   type = "user" />	 

  	<Message id = "MAPPATH_COMPONENT_DOESNT_MATCH_NAME"
		message = "There is a %1 reachable from '%2', but it is not named '%3'. "
		   type = "user" />	 

  	<Message id = "MAPPATH_UNCONSTRAINT"
		message = "A step in a mapping path following a structure link must be restricted either by name or by id."
		   type = "user" />	 

  	<Message id = "MAPPATH_LINK_MULTIPLICITY_NOT_SINGLE"
		message = "The link between '%1' and '%2' must be 'Single'."
		   type = "user" />	 

  	<Message id = "MAPPATH_NO_NAVIGATION_BY_NAME"
		message = "Path navigated by name is not valid (%1 named '%2' from '%3')." 
		   type = "user" />	 

   	<Message id = "MAPPATH_NO_NAME_IN_PREDICATE"
		message = "A navigation path with a name in a predicate is not valid ('%1' from '%2')." 
		   type = "user" />	 

  	<Message id = "MAPPATH_CONCAT_VAR_NAME"
		message = "Error when checking mapping path for Variable '%1' : %2"
		   type = "user" />	 

  	<Message id = "VARMAPPING_STRUCTURE_MISMATCH"
		message = "The structure '%1' of the value definition '%2' of variable '%3' mapped in mapping context '%4' does not match the type of the variable mapping ('%5')."
		   type = "user" />

   	<Message id = "OBJRELTYPE_SET_MAP_ERROR"
		message = "ObjectRelationType '%1' of mapping target '%2' is not same as the ObjectRelationType ('%3') of the mapped set '%4' of join variable '%5'"
		   type = "user" />

   	<Message id = "ASSOCTYPE_JOIN_MAP_ERROR"
		message = "Attribute '%1' is not from AssociationType '%2', and cannot be used to map values from join '%3'."
		   type = "user" />

   	<Message id = "NON_TUPLE_MAPPED_AS_SET"
		message = "Join Variable '%1' has a component with a simple value definition mapped on one of its sets, instead of a %2."
		   type = "user" />

	<Message id = "STRUCTLINK_UNMAPPED_SETVAR"
		message = "The set variable '%1' must be mapped on a structure link first."
		   type = "system" />

	<Message id = "STRUCTLINK_TARGET_INVALID"
		message = "The target of the last structure link in the mapping path has changed; the mapping of variable '%1' in '%2' has become invalid."
		   type = "system" />

	<!-- Table -->
	<Message id = "NULL_TABLE"
		message = "'%1' has a Table that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_TABLE"
		message = "'%1' has a dangling reference to a Table." 
		   type = "user" />
		   	
	<Message id = "NULL_TABLE_AS_VAL_DOM_DEF"
		message = "The table used by '%1' as a value domain definition can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_TABLE_AS_VAL_DOM_DEF"
		message = "'%1' has a dangling reference to a Table used as a value domain definition." 
		   type = "user" />	

	<Message id = "NULL_TABLE_DEF_VAL"
		message = "'%1' has a Table used as default value that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_TABLE_DEF_VAL"
		message = "'%1' has a dangling reference to a Table used as default value." 
		   type = "user" />	
		   
	<Message id = "NULL_TABLE_IN_MAP_CONST"
		message = "The constant used as mapping for '%1' (in '%2) uses a Table that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_TABLE_IN_MAP_CONST"
		message = "The constant used as mapping for '%1' (in '%2) has a dangling reference to a Table." 
		   type = "user" />	
		   
	<Message id = "NULL_TABLE_AFSO_DEFAULT_VAL"
		message = "Value source option in Attribute '%1' has a Table used as default value that can't be accessed." 
		   type = "user" />
		   
	<Message id = "DANG_TABLE_AFSO_DEFAULT_VAL"
		message = "Value source option in Attribute '%1' has a dangling reference to a Table used as a default value." 
		   type = "user" />	

  	<Message id = "NO_DIM_VAL"
		message = "Dimension '%1' is missing a value." 
		   type = "user" />

   	<Message id = "RECURSIVE_TABLE"
		message = "Table '%1' uses itself (directly or through other used tables)."
		   type = "user" />

   	<Message id = "USED_RECURSIVE_TABLE"
		message = "Table '%1' uses recursive table '%2' (directly or through other used tables)."
		   type = "user" />

   	<!-- Structure Element -->
	<Message id = "STRUCTURE_ELEMENT_HAS_NO_NAME"
		message = "Structure Element has no name." 
		   type = "user" />

  	<Message id = "STRUCTURE_ELEMENT_HAS_INVALID_NAVNAME"
		message = "Structure Element '%1' has an invalid navigation name." 
		   type = "user" />

 	<Message id = "NULL_INST_CONST"
		message = "'%1' has an owned Instance Constraint that can't be accessed" 
		   type = "user" />

  	<Message id = "DANG_INST_CONST"
		message = "'%1' has a dangling reference to an owned Instance Constraint" 
		   type = "user" />

  	<Message id = "MORE_THAN_ONE_INST_CONST"
		message = "'%1' has a more than one Instance Constraint for the following structure elements: '%2' and '%3', '%4' and '%5'." 
		   type = "user" />

  	<!-- Links -->
  	<Message id = "LINK_HAS_NO_TARGET"
		message = "Link '%1' has no target."
		   type = "user" />

  	<Message id = "LINK_HAS_DANGLING_TARGET"
		message = "Link '%1' has dangling target."
		   type = "user" />

  	<Message id = "LINK_HAS_NO_NAME"
		message = "Link from Structure Element '%1' to Structure Element '%2' has no name."
		   type = "user" />

  	<Message id = "LINK_HAS_INVALID_NAVNAME"
		message = "Link from Structure Element '%1' to Structure Element '%2' has an invalid navigation name: '%3'."
		   type = "user" />

  	<Message id = "MULTIPLE_LINK_FOR_STARTENDDATE"
		message = "End point of link from Structure Element '%1' to '%2' has start or end date; the link must be multiple."
		   type = "user" />
	
  	<Message id = "NULL_PARTITION"
		message = "Link '%1' of Structure Element '%2' has no partition."
		   type = "user" />
	

  	<Message id = "FINAL_LINK_ABSTRACT_TARGET_ALLOW_SUBTYPES"
		message = "Final link '%1' from Structure Element '%2' to abstract Structure Element '%3' must allow subtypes."
		   type = "user" />

  	<Message id = "DANGLINK_PARTITION"
		message = "Link '%1' of Structure Element '%2' has a dangling partition."
		   type = "user" />

  	<Message id = "NAVLINK_MAPPING_HAS_NO_NAVLINK"
		message = "Found a Navigation Link Mapping that does not belong to any Navigation Link"
		   type = "user" />

  	<Message id = "NAVLINK_MAPPING_HAS_DANGLING_NAVLINK"
		message = "Found Navigation Link Mapping for dangling Navigation Link."
		   type = "user" />

  	<Message id = "NAVLINK_MAPPING_MAPS_DANGLING_LINK"
		message = "Navigation Link Mapping for Navigation Link '%1' contains mapping for dangling link."
		   type = "user" />

  	<Message id = "NAVLINK_MAPPING_ORIGIN_MISMATCH"
		message = "Navigation Link Mapping for Navigation Link '%1' contains mapping for link with origin that is not Navigation Link's origin or sub type."
		   type = "user" />

  	<Message id = "NAVLINK_MAPPING_TARGET_MISMATCH"
		message = "Navigation Link Mapping for Navigation Link '%1' contains mapping for link with target that is not Navigation Link's target or sub type."
		   type = "user" />

	<!-- Deployment Environment -->
	<Message id = "NULL_EXT_FUNCT"
		message = "Deployment Environment '%1' has an External Function that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_EXT_FUNCT"
		message = "Deployment Environment '%1' has a dangling reference to an External Function." 
		   type = "user" />

	<Message id = "NULL_RSC_ROOT_ELM"
		message = "Deployment Environment '%1' has a resource root element that can't be accessed." 
		   type = "user" />

  	<Message id = "DANG_RSC_ROOT_ELM"
		message = "Deployment Environment '%1' has a dangling reference to a resource root element." 
		   type = "user" />

   	<!-- Deployment -->
  	<Message id = "DEPLOYM_NULL_ENTRYPOINT"
		message = "The deployment element '%1' has a null entry point." 
		   type = "user" />

  	<Message id = "DEPLOYM_DANG_ENTRYPOINT"
		message = "The deployment element '%1' has a dangling entry point." 
		   type = "user" />

  	<Message id = "DEPLOYM_NULL_DEPLENV"
		message = "The deployment element '%1' has a null deployment environment." 
		   type = "user" />

  	<Message id = "DEPLOYM_DANG_DEPLENV"
		message = "The deployment element '%1' has a dangling deployment environment." 
		   type = "user" />

  	<Message id = "DANG_EXT_RSC_ROOT"
		message = "The deployment element '%1' has a dangling reference to an external resource root." 
		   type = "user" />

  	<Message id = "EXT_RSC_ROOT_FUNC_VARMAPPING"
		message = "Available function '%1', though used from external resource '%2' of deployment '%3', will return the local result where used in the function mapping of variable '%4'." 
		   type = "user" />

  	<Message id = "DANG_INSTANTIABLE"
		message = "The deployment '%1' has a dangling reference to an instantiable structure element." 
		   type = "user" />

	<Message id = "DUPLICATE_INSTANTIABLE_NAME"
		message = "Structure element name '%1' is not unique in the set of instantiables of deployment '%2'."
		   type = "user" />

  	<Message id = "DEPLFUNCMAPP_NULL_FUNC"
		message = "The deployment function mapping has a null external or internal function." 
		   type = "user" />
  	<Message id = "DEPLFUNCMAPP_DANG_EXTERNFUNC"
		message = "The deployment function mapping for variable '%1' in mapping context '%2' has a dangling external function." 
		   type = "user" />
  	<Message id = "DEPLFUNCMAPP_DANG_INTERNFUNC"
		message = "The deployment function mapping for variable '%1' in mapping context '%2' has a dangling internal function." 
		   type = "user" />

  	<Message id = "DEPLMEMFUNCMAPP_NULL_FUNC"
		message = "The deployment member function mapping has a null external or internal function." 
		   type = "user" />
  	<Message id = "DEPLMEMFUNCMAPP_DANG_EXTERNFUNC"
		message = "The deployment function mapping for member '%1' of variable '%2' in mapping context '%3' has a dangling external function." 
		   type = "user" />
  	<Message id = "DEPLMEMFUNCMAPP_DANG_INTERNFUNC"
		message = "The deployment function mapping for member '%1' of variable '%2' in mapping context '%3' has a dangling internal function." 
		   type = "user" />

  	<Message id = "DEPLTUPFUNCMAPP_NULL_FUNC"
		message = "The deployment tuple function mapping has a null external or internal function." 
		   type = "user" />
  	<Message id = "DEPLTUPFUNCMAPP_DANG_EXTERNFUNC"
		message = "The deployment function mapping for tuple '%1' of variable '%2' in mapping context '%3' has a dangling external function." 
		   type = "user" />
  	<Message id = "DEPLTUPFUNCMAPP_DANG_INTERNFUNC"
		message = "The deployment function mapping for tuple '%1' of variable '%2' in mapping context '%3' has a dangling internal function." 
		   type = "user" />

  	<Message id = "DEPLFUNCMAPP_NULL_VARMAPP"
		message = "A deployment function mapping of deployment '%1' has a null variable mapping." 
		   type = "user" />
  	<Message id = "DEPLFUNCMAPP_DANG_VARMAPP"
		message = "A deployment function mapping of deployment '%1' has a dangling variable mapping." 
		   type = "user" />

  	<Message id = "DEPLFUNCMAPP_NULL_MEMBERMAPP"
		message = "A deployment function mapping of deployment '%1' has a null member mapping." 
		   type = "user" />
  	<Message id = "DEPLFUNCMAPP_DANG_MEMBERMAPP"
		message = "A deployment function mapping of deployment '%1' has a dangling member mapping." 
		   type = "user" />

  	<Message id = "DEPLFUNCMAPP_NULL_TUPLEMAPP"
		message = "A deployment function mapping of deployment '%1' has a null tuple mapping." 
		   type = "user" />
  	<Message id = "DEPLFUNCMAPP_DANG_TUPLEMAPP"
		message = "A deployment function mapping of deployment '%1' has a dangling tuple mapping." 
		   type = "user" />

	<Message id = "DEPL_FUNCTION_MAPPING_INCOMPLETE"
		message = "No deployment function mapping for variable '%1' that was mapped to external in mapping context '%2'."
		   type = "user" />
	<Message id = "DEPL_MEMBER_FUNC_MAPPING_INCOMPLETE"
		message = "No deployment function mapping for member '%1' of variable '%2' that was mapped to external in mapping context '%3'."
		   type = "user" />
	<Message id = "DEPL_TUPLE_FUNC_MAPPING_INCOMPLETE"
		message = "No deployment function mapping for tuple '%1' of variable '%2' that was mapped to external in mapping context '%3'."
		   type = "user" />

  	<Message id = "ELEMMAPPING_DANG_CHAIN"
		message = "The element mapping '%1' has a dangling chain." 
		   type = "user" />

  	<Message id = "ELEMMAPPING_NULL_FINPRODSE"
		message = "The element mapping '%1' has a null financial product structure element." 
		   type = "user" />
  	<Message id = "ELEMMAPPING_DANG_FINPRODSE"
		message = "The element mapping '%1' has a dangling financial product structure element." 
		   type = "user" />

	<Message id = "ELEMMAPPING_NULL_DEPLENVSE"
		message = "The element mapping '%1' has a null deployment environment structure element." 
		   type = "user" />
  	<Message id = "ELEMMAPPING_DANG_DEPLENVSE"
		message = "The element mapping '%1' has a dangling deployment environment structure element." 
		   type = "user" />

	<Message id = "ELEMMAPPING_ABSTRACT_FINPRODSE"
		message = "Element mapping for deployment environment structure element '%1' has an abstract financial product structure element '%2'."
		   type = "user" />

	<Message id = "TYPEMAPPING_DANG_CHAIN"
		message = "The type mapping '%1' has a dangling chain." 
		   type = "user" />

  	<Message id = "TYPEMAPPING_NULL_STATICTYPE"
		message = "The type mapping '%1' has a null financial product static type." 
		   type = "user" />
  	<Message id = "TYPEMAPPING_DANG_STATICTYPE"
		message = "The type mapping '%1' has a dangling financial product static type." 
		   type = "user" />

  	<Message id = "TYPEMAPPING_NULL_DESOURCE"
		message = "The type mapping '%1' has a null deployment environment source." 
		   type = "user" />
  	<Message id = "TYPEMAPPING_DANG_DESOURCE"
		message = "The type mapping '%1' has a dangling deployment environment source." 
		   type = "user" />

  	<Message id = "DEPLTYPEMAPP_NULL_EXPLDESOURCE"
		message = "The deployment type mapping '%1' has a null deployment environment source." 
		   type = "user" />
  	<Message id = "DEPLTYPEMAPP_DANG_EXPLDESOURCE"
		message = "The deployment type mapping '%1' has a dangling deployment environment source." 
		   type = "user" />

  	<Message id = "LINKMAPPING_NULL_STRUCTLINK"
		message = "The link mapping '%1' has a null financial product structure link." 
		   type = "user" />
  	<Message id = "LINKMAPPING_DANG_STRUCTLINK"
		message = "The link mapping '%1' has a dangling financial product structure link." 
		   type = "user" />

  	<Message id = "LINKMAPPING_NULL_TARGET"
		message = "The link mapping '%1' has a null deployment environment target." 
		   type = "user" />
  	<Message id = "LINKMAPPING_DANG_TARGET"
		message = "The link mapping '%1' has a dangling deployment environment target." 
		   type = "user" />

  	<Message id = "LINKMAPPING_NULL_TYPEMAPPING"
		message = "The link mapping '%1' has a null type mapping." 
		   type = "user" />
  	<Message id = "LINKMAPPING_DANG_TYPEMAPPING"
		message = "The link mapping '%1' has a dangling type mapping." 
		   type = "user" />

  	<Message id = "DYNTYPESEL_NULL_ELEMMAPPING"
		message = "The dynamic type selector '%1' has a null element mapping." 
		   type = "user" />
  	<Message id = "DYNTYPESEL_DANG_ELEMMAPPING"
		message = "The dynamic type selector '%1' has a dangling element mapping." 
		   type = "user" />

  	<Message id = "FEATMAPPING_NULL_TARGET"
		message = "The deployment feature mapping '%1' has a null target feature." 
		   type = "user" />
  	<Message id = "FEATMAPPING_DANG_TARGET"
		message = "The deployment feature mapping '%1' has a dangling target feature." 
		   type = "user" />

  	<Message id = "VALSRCMAPPING_NULL_FINPRODVS"
		message = "The value source mapping '%1' has a null financial product value source." 
		   type = "user" />
  	<Message id = "VALSRCMAPPING_DANG_FINPRODVS"
		message = "The value source mapping '%1' has a dangling financial product value source." 
		   type = "user" />

  	<Message id = "VALSRCMAPPING_NULL_DEPLENVVS"
		message = "The value source mapping '%1' has a null deployment environment value source." 
		   type = "user" />
  	<Message id = "VALSRCMAPPING_DANG_DEPLENVVS"
		message = "The value source mapping '%1' has a dangling deployment environment value source." 
		   type = "user" />

	<Message id = "INVALID_FINPRODELM_IN_TYPEMAPPING"
		message = "Link mapping cannot have type mapping with '%1' as the financial product static type; only target '%2' of the mapped link is allowed."
		   type = "user" />

	<Message id = "MAPPED_FINPROD_FEAT_NOT_OWNED"
		message = "The mapped financial product feature '%1' does not belong to the element mapping's financial product structure element '%2'."
		   type = "user" />
	<Message id = "FINPROD_FEAT_NO_ENTRY_VALSRC"
		message = "Financial product feature '%1' of '%2' does not have an entry value source; input mapping not possible."
		   type = "user" />

	<Message id = "MAPPED_DEPLENV_FEAT_NOT_OWNED"
		message = "The mapped deployment environment feature '%1' does not belong to the element mapping's deployment environment structure element '%2'."
		   type = "user" />
	<Message id = "DEPLENV_FEAT_NO_CALC_VALSRC"
		message = "Deployment environment feature '%1' of '%2' does not have a calculated value source; output mapping not possible."
		   type = "user" />

	<Message id = "RESOURCE_MAPPING_INCOMPLETE"
		message = "No resource mapping for financial product structure element '%1' in deployment '%2'."
		   type = "user" />

  	<Message id = "DEPLENVLINKPATH_ERROR"
		message = "Error when checking deployment environment link path in link mapping for link '%1' of '%2': %3"
		   type = "user" />	 
	<Message id = "DEPLENVLNK_NO_MATCH_FINPRODLINK"
		message = "The deployment environment link and financial product link must both be a reference link or not in link mapping for link '%1' of '%2'."
		   type = "user" />

  	<Message id = "DEPLENVVSPATH_ERROR"
		message = "Error when checking deployment environment value source path in value source mapping for '%1' of feature '%2' of '%3': %4"
		   type = "user" />	 

 	<Message id = "DYNTYPESEL_EXPR_SYN_ERROR"
		message = "Syntax error in a dynamic type selector expression of the type mapping between structure element '%1' and deployment element '%2': %3." 
		   type = "user" />

  	<Message id = "DYNTYPESEL_EXPRPATH_ERROR"
		message = "Error when checking a path in a dynamic type selector expression of the type mapping between structure element '%1' and deployment element '%2': %3"
		   type = "user" />

	<Message id = "DANG_DYNTYPESEL_EXPR_ERR_MSG"
		message = "A dynamic type selector of the type mapping between structure element '%1' and deployment element '%2' has a dangling reference to an Error Message in its expression." 
		   type = "user" />

	<Message id = "DANG_DYNTYPESEL_EXPR_VAL_DEF"
		message = "A dynamic type selector of the type mapping between structure element '%1' and deployment element '%2' has a dangling reference to a Value Definition in its expression." 
		   type = "user" />

	<Message id = "DANG_DYNTYPESEL_EXPR_FUNCTION"
		message = "A dynamic type selector of the type mapping between structure element '%1' and deployment element '%2' has a dangling reference to a Function in its expression." 
		   type = "user" />

	<Message id = "DANG_DYNTYPESEL_EXPR_TABLE"
		message = "A dynamic type selector of the type mapping between structure element '%1' and deployment element '%2' has a dangling reference to a Table in its expression." 
		   type = "user" />

	<Message id = "DYNTYPESEL_EXPR_FUNCTION_IN_CTX"
		message = "Function '%1' in the expression of a dynamic type selector of the type mapping between structure element '%2' and deployment element '%3' is not context free: it is using variables and/or a calculation date." 
		   type = "user" />

	<Message id = "PARENT_NOT_REACHABLE_IN_DYNTYPESEL_EXPRPATH"
		message = "Cannot navigate to parent in a path in a dynamic type selector expression of the type mapping between structure element '%1' and deployment element '%2'."
		   type = "user" />

	<Message id = "FEATMAPPING_EXPR_SYN_ERROR"
		message = "Syntax error in the mapping expression of the feature mapping of feature '%1' of '%2': %3." 
		   type = "user" />

  	<Message id = "FEATMAPPING_EXPRPATH_ERROR"
		message = "Error when checking a path in the mapping expression of the feature mapping of feature '%1' of '%2': %3"
		   type = "user" />	 

	<Message id = "DANG_FEATMAPPING_EXPR_ERR_MSG"
		message = "Feature mapping of feature '%1' of '%2' has a dangling reference to an Error Message in its expression." 
		   type = "user" />

	<Message id = "DANG_FEATMAPPING_EXPR_VAL_DEF"
		message = "Feature mapping of feature '%1' of '%2' has a dangling reference to a Value Definition in its expression." 
		   type = "user" />

	<Message id = "DANG_FEATMAPPING_EXPR_FUNCTION"
		message = "Feature mapping of feature '%1' of '%2' has a dangling reference to a Function in its expression." 
		   type = "user" />

	<Message id = "DANG_FEATMAPPING_EXPR_TABLE"
		message = "Feature mapping of feature '%1' of '%2' has a dangling reference to a Table in its expression." 
		   type = "user" />

	<Message id = "FEATMAPPING_EXPR_FUNCTION_IN_CTX"
		message = "Function '%1' in the expression of feature mapping of feature '%2' of '%3' is not context free: it is using variables and/or a calculation date." 
		   type = "user" />

  	<Message id = "PARENT_NOT_REACHABLE_IN_FEATMAPPING_EXPRPATH"
		message = "Cannot navigate to parent in a path in mapping path/expression of feature mapping for feature '%1' of '%2'."
		   type = "user" />	 

  	<Message id = "FEATMAPPING_EXPRPATH_FEAT_NO_ENTRY_VALSRC"
		message = "Feature '%1' of '%2' in the mapping expression/path of the input feature mapping of feature '%3' of '%4' does not have an entry value source."
		   type = "user" />

  	<Message id = "FEATMAPPING_NULL_SOURCE"
		message = "The deployment feature mapping for '%1' of '%2' has a mapping path where the source feature can't be accessed." 
		   type = "user" />
  	<Message id = "FEATMAPPING_DANG_SOURCE"
		message = "The deployment feature mapping for '%1' of '%2' has a dangling source feature in the mapping path." 
		   type = "user" />

	<Message id = "ENTRY_FINPROD_DEPLENV_FEAT_INCONV"
		message = "Cannot convert the type of deployment environment attribute '%1' of '%2' to the type of financial product attribute '%3' of '%4'; input feature mapping not possible."
		   type = "user" />
	<Message id = "CALC_DEPLENV_FINPROD_FEAT_INCONV"
		message = "Cannot convert the type of financial product feature '%1' of '%2' to the type of deployment environment feature '%3' of '%4'; output feature mapping not possible."
		   type = "user" />

  	<Message id = "DEPLVALDMAPPING_NULL_TARGET"
		message = "The deployment validation mapping '%1' has a null target validation." 
		   type = "user" />
  	<Message id = "DEPLVALDMAPPING_DANG_TARGET"
		message = "The deployment validation mapping '%1' has a dangling target validation." 
		   type = "user" />

	<Message id = "MAPPED_DEPLENV_VALD_NOT_OWNED"
		message = "The mapped deployment environment validation '%1' does not belong to the element mapping's deployment environment structure element '%2'."
		   type = "user" />

  	<Message id = "DEPLVALDMAPPING_NULL_SOURCE"
		message = "The deployment validation mapping for '%1' of '%2' has a mapping path where the source validation element can't be accessed." 
		   type = "user" />
  	<Message id = "DEPLVALDMAPPING_DANG_SOURCE"
		message = "The deployment validation mapping for '%1' of '%2' has a dangling source validation element in the mapping path." 
		   type = "user" />

  	<Message id = "DEPLVALDMAPPING_PATH_ERROR"
		message = "Error when checking path in deployment validation mapping of validation '%1' of '%2': %3"
		   type = "user" />	 

  	<Message id = "PARENT_NOT_REACHABLE_IN_DEPLVALDMAPPING_PATH"
		message = "Cannot navigate to parent in the path in deployment validation mapping for validation '%1' of '%2'."
		   type = "user" />	 


	<!-- Functions / Function Variables / Operations -->
	<Message id = "FUNCPARAM_VALDEFLID_NOTFOUND"
		message = "Cannot select value definition of parameter '%1' in signature for function/variable '%2' in this deliverable."
		   type = "system" />
	<Message id = "ARG_NUMBER_ERROR"
		message = "Mapping of function variable '%1' has %2 parameter mappings while signature of function/operation '%3' has %4 parameters."
		   type = "user" />
	<Message id = "VAR_MAPP_FUNC_OPER_PARAMLESS"
		message = "Cannot map variable '%1' on function/operation '%2'; it must be a function/operation without parameters."
		   type = "user" />
  	<Message id = "DANG_TABLE_IN_PARAM_MAP_CONST"
		message = "The constant used as the mapping for a parameter for the mapping of function variable '%1' on '%2' (in '%3') has a dangling reference to a Table." 
		   type = "user" />	

	<!-- ErrorMessage -->
	<Message id = "ERRMSG_HAS_NO_NAME"
		message = "Error Message has no name."
		   type = "user" />

	<Message id = "ERRMSG_HAS_INVALID_NAVNAME"
		message = "Error Message '%1' has an invalid navigation name."
		   type = "user" />

	<Message id = "NULL_ERRMSG_PARAM_TYPE"
		message = "Error Message '%1' has a Type in parameter '%2' that can't be accessed."
		   type = "user" />

	<Message id = "DANG_ERRMSG_PARAM_TYPE"
		message = "Error Message '%1' has a dangling reference to the Type in parameter '%2'."
		   type = "user" />

	<Message id = "ERRMSG_TXT_PARAM_NOT_IN_SIG"
		message = "In the text of error message '%1' a parameter is referenced that is not part of the signature."
		   type = "user" />

	<!--  MappingSlice -->	 
  	<Message id = "MAPPINGSLICE_NULL_DEST"
		message = "A mapping slice of '%1' has a null destination." 
		   type = "user" />
  	<Message id = "MAPPINGSLICE_DANG_DEST"
		message = "A mapping slice of '%1' has a dangling destination." 
		   type = "user" />
  	<Message id = "DESTINATIONPATH_ERROR"
		message = "Error when checking destination path in mapping slice of '%1': %2"
		   type = "user" />
	<Message id = "MAPPINGSLICE_DANG_AVAIL_FUNC"
		message = "Mapping slice of '%1' has a dangling reference to a local function."
		   type = "user" />

	<!--  Mapping -->	 
   	<Message id = "INVALID_MAPPING_PATH"
		message = "Invalid mapping path in '%1'. '%2'." 
		   type = "user" />
   	<Message id = "MAPPING_PATH_NOT_RELATIVE"
		message = "Mapping path in '%1' is not relative. ('%2')." 
		   type = "user" />
   	<Message id = "MAPPING_PATH_EMPTY"
		message = "Mapping path in '%1' is empty." 
		   type = "user" />
	<Message id	= "MAPPINGPATH_UNEXPECTED"
		message = "Mapping path '%1' uses unexpected construct." />

	<Message id = "VAR_MAPPING_TYPE_INCONV"
		message = "The mapping of Variable '%1' is of type '%2' which is not convertible to '%3'."
		   type = "user" />
	
	<Message id = "VAR_MAPPING_TYPE_INCONV_VAL_DEF"
		message = "The mapping of Variable '%1' (based on value definition '%2'),  is not convertible to value definition '%3'."
		   type = "user" />

   	<Message id = "LINK_MULTIPLICITY_UN_DEF"
		message = "Structure link '%1' on '%2' has undefined multiplicity." 
		   type = "user" />

   <Message id = "JOIN_MAP_MORE_THAN_1_MANY_LNK"	
		message = "When mapping a join, not more than 1 multiple / named link is allowed between the entry point ('%1') and the Structure Element owning the association type. A second multiple link was detected between '%2' and '%3' in the mapping of '%4'. " 
		   type = "user" />
   
	<Message id = "LINK_MULTIPLICITY_ERR_NOT_SINGL"
		message = "Structure link '%1' from '%2' to '%3' has multiplicity '%4'. Should be single." 
		   type = "user" />

   	<Message id = "LINK_NUM_ERR"
		message = "There are '%1' structure links between '%2' and '%3'. There should be one." 
		   type = "user" />

   	<Message id = "NO_STRUCT_LINK"
		message = "There is no Structure link between '%1' and '%2'."
		   type = "user" />

	<Message id = "ATTRIB_NOT_MAPPABLE"
		message = "Attribute '%1' is not a mappable attribute for '%2' in '%3'." 
		   type = "user" />	

   	<Message id = "LESS_THAN_TWO_OBJRELTYPES_LINKED"
		message = "There are/is less '%1' object/relation types linked to association type '%2'."
		   type = "system" /> 

 	<!-- Join Variable Mapping -->
	<Message id = "PATH_NOT_UNIQ"
		message = "There should be a unique path (i.e. only single links allowed) from '%1' (used in the mapping of the join variable '%2') to Association Type '%3'."
		   type = "user" />
 
 	<!-- Attribute Value Source -->	 
	<Message id = "MAPPED_CONST_TYPE_INCOMPATIBLE"
		message = "the value definitions of '%1' and '%2' are not compatible."
		   type = "user" />

	<!-- Controlled -->
  	<Message id = "CONTROLLED_NULL_TAGGEDVALUE"
		message = "The component has a null tagged value." 
		   type = "user" />
  	<Message id = "CONTROLLED_DANG_TAGGEDVALUE"
		message = "The component has a dangling tagged value." 
		   type = "user" />

	<!-- TaggedValue -->
  	<Message id = "NULL_TAG_IN_TAGGEDVALUE"
		message = "Component '%1' has a tagged value with a null tag." 
		   type = "user" />
  	<Message id = "DANG_TAG_IN_TAGGEDVALUE"
		message = "Component '%1' has a tagged value with a dangling tag." 
		   type = "user" />

	<!-- Portfolio -->
  	<Message id = "PORTFOLIO_NULL_TESTCONFIG"
		message = "Portfolio '%1' has a null test configuration." 
		   type = "user" />
  	<Message id = "PORTFOLIO_DANG_TESTCONFIG"
		message = "Portfolio '%1' has a dangling test configuration." 
		   type = "user" />
  	<Message id = "PORTFOLIO_NULL_ENTRYPOINT"
		message = "Portfolio '%1' has a null entry point." 
		   type = "user" />
  	<Message id = "PORTFOLIO_DANG_ENTRYPOINT"
		message = "Portfolio '%1' has a dangling entry point." 
		   type = "user" />
  	<Message id = "PORTFOLIO_NULL_ENTRYPOINTDEPL"
		message = "Portfolio '%1' has a null entry point deployment." 
		   type = "user" />
  	<Message id = "PORTFOLIO_DANG_ENTRYPOINTDEPL"
		message = "Portfolio '%1' has a dangling entry point deployment." 
		   type = "user" />
  	<Message id = "DANG_PORTFOLIO"
		message = "Batch Regression Test '%1' has a dangling reference to a Portfolio." 
		   type = "user" />

	<!-- InternTestCase -->
  	<Message id = "DANG_USED_PORTFOLIO"
		message = "Test case '%1' of '%2' has a dangling reference to a used portfolio." 
		   type = "user" />

	<!-- TestConfig -->
	<Message id = "TESTCONFIG_TYPEDEPL_VERSION_CONFLICT"
		message = "Test configuration '%1' is using type deployment '%2' from a version of deliverable '%3' that is a conflicting version itself - or one of its dependencies is %4"
		   type = "user" />



	<!-- FunctionDeployment -->
  	<Message id = "DANG_DEPLOYED_FUNC"
		message = "'%1' has a dangling reference to a deployed Function." 
		   type = "user" />
	
  	<Message id = "DANG_USED_VAR"
		message = "'%1' has a dangling reference to a used Variable." 
		   type = "user" />
	
	<!-- DeploymFunctionMapping -->

	<!-- mapping loop -->
   	<Message id = "MAPPING_LOOP_STACK_OVERFLOW"
		message = "There was a stack overflow in the mapping loop stack with the following components: '%1'."
		   type = "user" />

   	<Message id = "MAPPING_LOOP_ERR"
		message = "Unavoidable mapping loop detected: the loop '%1' cannot be avoided."
		   type = "user" />
		   
   	<Message id = "MAPPING_LOOP_WARN"
		message = "Potential mapping loop detected: the loop  '%1'."
		   type = "user" />

	<!-- mapping loop msg formatting -->
	<Message id = "VAR"
	   message = "(var.)" />

	<Message id = "ATTR"
	   message = "(attr.)" />

	<Message id = "FUNC"
	   message = "(func.)" />

	<Message id = "IN"
	   message = " in " />
	   
	<Message id = "DELETED"
	   message = "deleted" />
	   
	<!-- The raw string representing the loop -->
	<Message id = "THE_LOOP"
	   message = "%1" />

</MessageModule>
