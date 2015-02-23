<?xml version = "1.0" ?>
<MessageModule name = "FPM">

	<!-- Repository -->
	<Message id = "KEYWORD_ALREADY_EXISTS"
		message = "Keyword '%1' already exists in repository." 
			type = "user" />
	<Message id = "KEYWORD_DOES_NOT_EXIST"
		message = "Keyword '%1' does not exist in repository." /> 
	<Message id = "KEYWORD_USED_BY_COMPONENTS"
		message = "Keyword '%1' is still used by component(s), and therefore can't be removed." 
			type = "user" /> 
	<Message id = "AUTH_GROUP_ALREADY_EXISTS"
		message = "Authorization group '%1' already exists in the repository." 
		   type = "user" />
	<Message id = "AUTH_GROUP_DOES_NOT_EXIST"
		message = "Authorization group no longer exists in repository."
		   type = "system"/> 
	<Message id = "AUTH_USER_ALREADY_EXISTS"
		message = "Authorization user '%1' already exists in the repository." 
		   type = "user" />
	<Message id = "AUTH_USER_DOES_NOT_EXIST"
		message = "Authorization user no longer exists in repository."
		   type = "system" /> 
	<Message id = "AUTH_GROUP_HAS_MEMBERS"
		message = "Authorization group '%1' still has authorization user members, and therefore can't be removed." 
		   type = "user" /> 
	<Message id = "AUTH_USER_IS_MEMBER"
		message = "Authorization user '%1' is still member of authorization groups, and therefore can't be removed." 
		   type = "user" /> 
	<Message id = "AUTH_GROUP_HAS_PERMISSIONS"
		message = "Authorization group '%1' still has permissions in deliverables and/or repository folders." 
		   type = "user" /> 
	<Message id = "AUTH_PROHIBITED"
		message = "Unauthorized use of this utility is prohibited."
		   type = "system" /> 
	<Message id = "INCOMPATIBLE_PRODUCT_VERSION"
		message = "Product version '%1' is not compatible with FPM server's product version '%2'." 
		   type = "user" /> 

	<!-- Repository folders -->
	<Message id = "WRONG_NODE_FOLDER"
		message = "Folder '%1' does not own this node." 
		   type = "system" />
	<Message id = "REMOVE_FOLDER_NOT_EMPTY"
		message = "Cannot remove non-empty folder '%1'" 
		   type = "user" />
	<Message id = "FOLDER_USES_NAME"
		message = "The name '%1' is not unique in folder '%2'; a folder with that name exists." 
		   type = "user" />
	<Message id = "MOVE_TARGET_THISFOLDER"
		message = "Cannot move folder '%1'; the destination is the folder itself." 
		   type = "user" />
	<Message id = "MOVE_TARGET_SUBFOLDER"
		message = "Cannot move folder '%1'; the destination is a subfolder." 
		   type = "user" />
	<Message id = "USER_HAS_NO_CTRL_PERM_OVER_REPFOLDER_MOD_USERS"
		message = "User '%1' does not have control permission over folder '%2'. The user has no permission to Add/Remove users or to modify their permissions."
			type = "user" />
	<Message id = "USER_ALREADY_EXISTS_IN_REPFOLDER"
		message = "User '%1' already exists in folder '%2'." 
			type="user"/>
	<Message id = "USER_DOES_NOT_EXIST_IN_REPFOLDER"
		message = "User '%1' does not exist in folder '%2'." 
			type="user" />
	<Message id = "NO_REPFOLDER_MOD_PERMISSION"
		message = "You have no modify permission in repository folder '%1'."
		   type = "user" />
	<Message id = "NO_REPFOLDER_READ_PERMISSION"
		message = "You have no read permission in repository folder '%1'."
		   type = "user" />
	<Message id = "USER_HAS_NO_READ_PERMISSION_ON_REPFOLDER"
		message = "Not allowed to read repository folder '%1'." 
			type = "user" />
	<Message id = "USER_HAS_NO_UPDATE_PERMISSION_ON_REPFOLDER"
		message = "Not allowed to update repository folder '%1'." 
			type = "user" />
	<Message id = "DELIVPERM_ALREADY_EXISTS_IN_REPFOLDER"
		message = "A default deliverable permission for user '%1' already exists in folder '%2'." 
			type="user"/>
	<Message id = "DELIVPERM_DOES_NOT_EXIST_IN_REPFOLDER"
		message = "A default deliverable permission for user '%1' does not exist in folder '%2'." 
			type="user" />

	<!-- Deliverables -->
	<Message id = "DELIV_ELEMENT_USES_NAME"
		message = "The name '%1' is not unique in folder '%2'; a deliverable element with that name exists." 
		   type = "user" />
	<Message id = "NO_LAST_DELIVERABLE_VERSION"
		message = "Cannot find last version of Deliverable." 
		   type = "system" />
	<Message id = "INVALID_DELIVERABLE_CLASS"
		message = "Invalid Deliverable class: '%1'" 
		   type = "system" />
	<Message id = "REMOVE_DELIV_ELEMENT_NOT_EMPTY"
		message = "Cannot remove non-empty deliverable element '%1'" 
		   type = "user" />
	<Message id = "REPNOTOWNER"
		message = "Deliverable cannot be checked out because this repository is not the owner." 
			type = "user" />	
	<Message id = "NO_MODIFICATIONS_REPNOTOWNER"
		message = "Deliverable cannot be modified because this repository is not the owner." 
			type = "user" />	
	<Message id = "NO_EXPORT_WITH_EDITS"
		message = "Cannot export deliverable with pending edits." 
			type = "user" />
	<Message id = "NO_EXPORT_WITH_TRANSFER_OWNERSHIP"
		message = "Cannot export deliverable on branch with transfer of ownership." 
			type = "user" />
	<Message id = "MEMBER_ALREADY_EXISTS_IN_DELIV"
		message = "User %1 already exists in deliverable %2." 
			type="user"/>
	<Message id = "MEMBER_DOES_NOT_EXIST_IN_DELIV"
		message = "User %1 does not exist in deliverable %2." 
			type="user" />
	<Message id = "USER_EXSITS_IN_USING_DELIV"
		message = "User '%1' uses deliverable '%2' via deliverable '%3' and can't be removed." 
			type="user" />
	<Message id = "MEMBER_HAS_NO_CONTROL_PERMISSION_OVER_DELIV_CI_CO"
		message = "User %1 does not have control permission over deliverable %2. The user has no permission to Check In/Out or Undo Check Out of deliverables." 
			type = "user" />
	<Message id = "MEMBER_HAS_NO_CONTROL_PERMISSION_OVER_DELIV_MOD_USERS"
		message = "User %1 does not have control permission over deliverable %2. The user has no permission to Add/Remove users or to modify their permissions" 
			type = "user" />
	<Message id = "MEMBER_HAS_NO_CONTROL_PERMISSION_OVER_DELIV_NO_EXPORT"
		message = "User %1 does not have control permission over deliverable %2. The user export of this deliverable is not allowed." 
			type = "user" />
	<Message id = "CANNOT_REVOKE_CONTROL_FROM_ONLY_CONTROLING_USER"
		message = "User %1 is the only user with control permission over deliverable %2. At least one user must have control over a deliverable."
			type = "user" />
	<Message id = "CANNOT_REMOVE_ONLY_CONTROLING_USER"
		message = "User %1 is the only user with control permission over deliverable %2. At least one user must have control over deliverable." 
			type = "user" />
 	<Message id = "ILLEGAL_DELIV_DEPENDENCY"
		message = "A using dependency between these types of deliverables is not allowed." 
			type = "user" />
	<Message id = "USER_HAS_NO_READ_PERMISSION_ON_DELIV"
		message = "Not allowed to read deliverable %1" 
			type = "user" />
	<Message id = "USER_HAS_NO_UPDATE_PERMISSION_ON_DELIV"
		message = "Not allowed to update deliverable %1" 
			type = "user" />
	<Message id = "EXPORT_ID_ALREADY_SET"
		message = "ExportId of Deliverable '%1' is already set." 
			type = "system" />


	<!-- Component folders -->
	<Message id = "COMPONENT_NAME_IN_USE"
		message = "The name '%1' is not unique in folder '%2'; another component with the same type and name exists."
		   type = "user" />
	<Message id = "WRONG_COMPONENT_FOLDER"
		message = "Folder '%1' does not contain %2." 
		   type = "system" />
	<Message id = "COMPONENT_NOT_FOR_DELIVERABLE"
		message = "Component type '%1' not allowed for Deliverable type '%2'." 
		   type = "system" />
	<Message id = "COMPONENT_NOT_FOR_TARGET_DELIVERABLE"
		message = "Cannot copy/move %1 to Deliverable '%2'; Component type not allowed for Deliverable type." 
		   type = "user" />
	<Message id = "TARGET_DELIVTYPE_DIFFERS"
		message = "Cannot copy/move %1 to a different type of deliverable." 
		   type = "user" />
	<Message id = "IMPORT_FOLDER_NOT_WRITABLE"
		message = "Cannot import; folder not writable." />
	<Message id = "COMPONENT_NOT_FOR_TARGET_REPOSITORY"
		message = "Cannot copy/move %1 to Deliverable '%2'; they are in different repositories." 
		   type = "user" />

	<!-- import errors -->
	<Message id = "IMPERR_ALREADY_OWNED"
		message = "This version of the deliverable cannot be imported with transfer of ownership, because it already exists and is owned by the repository (in folder '%1')." 
			type = "user" />
	<Message id = "IMPERR_ALREADY_EXIST"
		message = "This version of the deliverable cannot be imported because it already exists in the repository (in folder '%1')." 
			type = "user" />
	<Message id = "IMPERR_VERSIONNUMBER_ALREADY_EXISTS"
		message = "Version %1 of Deliverable '%2' cannot be imported because another version with that version number already exists." 
			type = "user" />
	<Message id = "IMPERR_CHECKED_OUT_VERSION_HAS_SUCCESSOR"
		message = "Checked-out Version %1 of Deliverable '%2' cannot be imported because a more recent version already exists." 
			type = "user" />
	<Message id = "IMPERR_NEWER_VERSION_EXIST"
		message = "Cannot import version %1 of %2 %3: version %4 already exist." 
			type = "user" />
	<Message id = "IMPERR_SAME_VERSION_EXIST"
		   type = "user"
		message = "Cannot import version %1 of %2 %3: another version of the same components exist with the same version number." />
	<Message id = "IMPERR_DELNOTPRESENT"
		message = "A deliverable that is required by one of the imported components is not available in your repository, please import that first." 
		   type = "user" />
	<Message id = "IMPORT_WRONG_FOLDER" 
		   type = "user"
		   message = "Deliverable '%1' is already present in folder '%2' and consequently cannot be imported in folder '%3'."/>
	<Message id = "IMPERR_IN_PROGRESS"
		message = "Deliverable cannot be imported because another import of Deliverable '%1' is still in progress." 
			type = "user" />
	<Message id = "IMPERR_IN_PROGRESS_OR_TERMINATED"
		message = "Deliverable cannot be imported because another import of Deliverable '%1' is still in progress or has terminated unexpectedly." 
			type = "user" />
	<Message id = "IMPERR_TERMINATED_DEL_EXISTS"
		message = "Deliverable cannot be imported because another import of Deliverable '%1' seems to have terminated unexpectedly. Try to delete this Deliverable from the Repository and import again. Otherwise have the Repository checked for consistency. For more information on this see the ProductXpress Designer Installation Guide." 
			type = "user" />
	<Message id = "IMPERR_BRINGBACK_NONEXISTENT_DELIVERABLE"
		message = "Cannot bring back Deliverable '%1' because it does not exist in the Repository." 
			type = "user" />

	<!-- replication errors -->
	<Message id = "REPERR_ALREADY_EXIST"
		message = "This version of the deliverable cannot be replicated because it already exists in the repository (in folder '%1')." 
			type = "user" />
	<Message id = "REPERR_UPDATE_CONFLICT"
		message = "Update conflict: version '%1' of %2 cannot be updated by replication, since it is currently being edited. Please restart the Designer client."
			type = "user" />

	   <!-- Structure elements subtyping -->
	<Message id = "SUBTYPING_LOOP"
		message = "Making %1 a sub-type of %2 will create a sub-typing loop."
		   type = "user" />
	<Message id = "SUBTYPING_LOOP_EXIST"
		message = "Super type %1 of Structure Element %2 is part of a sub-typing loop."
		   type = "user" />
	<Message id = "ALREADY_HAS_SUPER"
		message = "Cannot  make Structure Element '%1' a subtype of '%2' because it already is a subtype of '%3'."
		   type = "user" />
	<Message id = "IS_NOT_SUBTYPE_OF"
		message = "Structure Element '%1' is not a subtype of '%2'."
		   type = "user" />
	<Message id = "FINAL_SUPERTYPE"
		message = "Cannot make structure element '%1' a subtype of final structure element '%2'."
		   type = "user" />

	<!-- Controlleds and TextBlocks -->
	<Message id = "TEXTBLOCK_ALREADY_LINKED"
		message = "Text block '%1', or another version of it, is already linked to %2." 
		   type = "user" />
	<Message id = "TEXTBLOCK_NOT_LINKED"
		message = "Cannot unlink text block '%1' from %2; it is not currently linked to it." 
		   type = "system" />
	<Message id = "HYPERLINK_NOT_LINKED"
		message = "This Hyperlink with start position %1 and length %2 does not exist in %3."
		   type = "system" />

	<!-- Structure elements and MappingGroups -->
	<Message id = "MAPPING_GROUP_DOES_NOT_EXIST"
		message = "Mapping Group '%1' does not exist in %2." />
	<Message id = "MAPPING_GROUP_NAME_IN_USE"
		message = "The name '%2' is not unique in %1; a mapping group with that name already exists." 
			type = "user" />
	<Message id = "MAPPINGGROUP_NOT_LINKED"
		message = "Cannot remove mapping group '%1' from %2; it does not own this mapping group."
		   type = "system" />
	
	<!-- Value Definitions -->
	<Message id = "VALUEDEFINITION_NO_TUPLE"
		message = "Value definition '%1' must be a tuple." 
		   type = "system" />
	<Message id = "VALUEDEFINITION_NO_JOIN"
		message = "Value definition '%1' must be a join." 
		   type = "system" />
	<Message id = "VALUEDEFINITION_NO_SET"
		message = "Value definition '%1' must be a set." 
		   type = "system" />
	<Message id = "JOIN_VALUEDEFINITION_WRONG"
		message = "Value definition '%1' must be a join; value definition '%2' and '%3' must be a set." 
		   type = "system" />
	<Message id = "JOIN_SET_VALDEF_SCALAR"
		message = "Set value definition '%1' contains a simple value definition; not allowed in a join value definition ('%2')." 
		   type = "system" />
	<Message id = "DATATYPE_ONLY_WITH_SCALAR"
		message = "Value definition '%1' must be simple to have a data type." 
		   type = "system" />
	<Message id = "UNIT_ONLY_WITH_QUANTITY"
		message = "Value definition '%1' must be a quantity to have a unit." 
		   type = "system" />
	<Message id = "TIMEDEPENDENT_UNIT"
		message = "Value definition '%1' cannot be used as a unit if it is time-dependent."
		   type = "system" />
	<Message id = "TIMEDEPENDENT_TUPLE"
		message = "Value definition '%1' cannot be both a tuple and time-dependent."
		   type = "system" />
	<Message id = "VALUEDOMAIN_DATATYPE_MISMATCH"
		message = "The data type of the value domain does not match the data type of the value definition ('%1')."
		   type = "user" />
	<Message id = "ILLEGAL_UNIT"
		message = "The unit ('%1') of the quantity value definition ('%2') must be either of type string or must have an enumerated value domain of type string or integer."
		   type = "system" />
	<Message id = "VALUEDOMAIN_UNITTYPE_MISMATCH"
		message = "The unit type of the value domain does not match the unit of the quantity value definition ('%1')."
		   type = "system" />
	<Message id = "VALDOM_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the value domain of quantity '%2' is not in the value domain of the quantity's unit ('%3')."
		   type = "user" />
	<Message id = "VALUEDOMAIN_ONLY_WITH_SCALAR"
		message = "Value definition '%1' must be simple to have a value domain."
		   type = "system" />
	<Message id = "STRUCTURE_NOT_CHANGEABLE"
		message = "Changing the structure of a value definition ('%1') is not allowed."
		   type = "system" />
	<Message id = "TUPLE_MEMBER_NAME_IN_USE"
		message = "The name '%1' is not unique in tuple '%2'; a member with that name exists."
		   type = "user" />
	<Message id = "TUPLE_MEMBER_OUT_OF_RANGE"
		message = "Sequence number (%1) for member '%2' of tuple '%3' out of range."
		   type = "system" />
	<Message id = "TUPLE_INDEX_OUT_OF_RANGE"
		message = "Member sequence number (%1) for tuple '%2' out of range."
		   type = "system" />
	<Message id = "NO_TUPLE_VALDEF_MEMBER"
		message = "Value definition '%1' has no tuple member with id '%2'."
		   type = "system" />
	<Message id = "VALDEF_NOT_SELF_RECURSIVE"
		message = "A value definition ('%1') cannot directly or indirectly refer to itself as a contained or tuple member value definition (under '%2')."
		   type = "user" />

	<!-- Variables -->
	<Message id = "VARIABLE_STRUCTURE_NULL"
		message = "Value definition '%1' has an undefined structure; it cannot be used by variable '%2'."
		   type = "system" />
	<Message id = "UNEXPECTED_VARIABLE_STRUCTURE"
		message = "Variable (%1) has unexpected structure '%2'; expected: '%3'."
		   type = "system" />
	<Message id = "DFAULT_VALDEF_TYPE_MISMATCH"
		message = "Variable '%1' has structure '%2 - %3'; default value of type '%4' does not match." 
		   type = "user" />
	<Message id = "DFAULT_VAL_DATATYPE_MISMATCH"
		message = "Variable '%1' has data type '%2'; default value with data type '%3' does not match." 
		   type = "user" />
	<Message id = "DFAULT_VAL_UNITTYPE_MISMATCH"
		message = "A unit type in the default value of variable '%1' does not match the unit of the quantity value definition ('%2')."
		   type = "user" />
	<Message id = "DFAULT_VAL_NOT_IN_VALDOM"
		message = "Variable '%1' has a default value '%2' that is not included in the value domain of its value definition '%3'." 
		   type = "user" />
	<Message id = "DFAULT_VAL_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the default value of variable '%2' is not in the value domain of the quantity value definition's unit ('%3')."
		   type = "user" />
	<Message id = "VAR_TYPE_DEPLENV_STRELM"
		message = "The type of a variable ('%1') cannot contain a structure element from a deployment environment."
		   type = "user" />

	<!-- Function Variable -->
	<Message id = "FUNCVAR_DFAULT_ILLEGAL_MAPPING"
		message = "The default value of function variable '%1' has an incorrect mapping." 
		   type = "system" />

	<!-- Functions / Function Variables / Operations -->
	<Message id = "FUNCPARAM_VALDEFLID_NOTFOUND"
		message = "Cannot select value definition of parameter '%1' in signature for %2 in this deliverable."
		   type = "system" />
	<Message id = "FUNCPARAM_TIMEDEPENDENT"
		message = "Parameter '%1' in the signature for function/variable '%2' is time-dependent."
		   type = "system" />
	<Message id = "RETURN_VALDEF_TIMEDEPENDENT"
		message = "The return value of a function or operation ('%1') cannot be time-dependent."
		   type = "user" />
	<Message id = "NO_FUNC_SIG_PARAM"
		message = "Signature of function/variable or operation '%1' has no parameter with id '%2'."
		   type = "system" />
	<Message id = "RETURN_TYPE_DEPLENV_STRELM"
		message = "The return type of a function or function variable ('%1') cannot contain a structure element from a deployment environment."
		   type = "user" />
	<Message id = "FUNCPARAM_TYPE_DEPLENV_STRELM"
		message = "The type of parameter '%1' in the signature of function or function variable '%2' cannot contain a structure element from a deployment environment."
		   type = "user" />

	<!-- External Function -->
	<Message id = "EXTERNFUNC_RETDEF_NOT_SUPPORTED"
		message = "The return value of external function '%1' must have a simple, tuple or set value definition."
		   type = "user" />
	<Message id = "EXTERNFUNC_RETTYPE_STRELM"
		message = "The return type of an external function ('%1') cannot contain a structure element."
		   type = "user" />
	<Message id = "EXTERNFUNC_PARAM_TYPE_STRELM"
		message = "The type of parameter '%1' in the signature of external function '%2' cannot contain a structure element."
		   type = "user" />

	<!-- Function -->
	<Message id = "FUNCTION_VALDEF_STRUCTURE_NULL"
		message = "Value definition '%1' has an undefined structure; it cannot be used for the return value of function '%2'."
		   type = "system" />

	<!-- Error Message -->
	<Message id = "ERRMSG_PARAMTYPE_NOT_ALLOWED"
		message = "Parameter '%1' in the signature for error message '%2' must be simple (no structure element and not with data type Identity) and cannot be time-dependent."
		   type = "user" />
	<Message id = "ERRMSG_TXT_UNKNOWN_PARAM"
		message = "In the message text a parameter is referenced that is not part of the signature of error message '%1'."
		   type = "user" />

	<!-- Linking structure elements  -->
	<Message id = "LINK_NAME_NOT_UNIQUE"
		message = "%1 already has a link named %2."
		   type = "user" />
	<Message id = "LINK_DOESNT_EXIST"
		message = "link %1 does not exist in %2."
		   type = "user" />
    <Message id = "NAVLINKMAPPING_ALREADY_EXISTS"
		message = "Structure element '%1' already has a mapping for Navigation Link '%2'."
		   type = "user" />
    <Message id = "LINK_ALREADY_MAPPED"
		message = "Structure link %1 is already mapped to Navigation Link %2"
		   type = "user" />
    <Message id = "LINK_NOT_MAPPED"
		message = "Structure link %1 is not mapped to Navigation Link %2"
		   type = "user" />
	<Message id = "INVALID_LINK_REQUESTED"
		message = "The requested link between component of type '%1' and component of type '%2' is not a valid link."
		   type = "system" />
	<Message id = "LINK_STRUCTELM_DELIVTYPE_DIFF"
		message = "Cannot link a structure element from a different type of deliverable."
		   type = "system" />

	<Message id = "CANNOT_OVERRIDE_ATTR_NAME"
		   type = "user"
		message = "Cannot change the name in an overridden Attribute." />

	<Message id = "CANNOT_OVERRIDE_AVS_NAME"
		   type = "user"
		message = "Cannot change the name in an overridden Value source." />

	<Message id = "CANNOT_PARTITION_FINAL_LINK"
		   type = "user"
		message = "Cannot partition a Structure Link marked as Final." />

	<Message id = "CANNOT_BE_PARTOF_ITSELF"
		   type = "user"
	    message = "A Structure Link cannot be a Partition Part of itself." />

	<Message id = "ALREADY_PART_OF_OTHER_PARTITION"
		   type = "user"
	    message = "Structure Link is already part of a different partition." />

	<Message id = "CANNOT_OVERRIDE_FINAL_ATTRIBUTE"
		   type = "user"
		message = "Cannot override an Attribute marked as Final." />

	<Message id = "CANNOT_OVERRIDE_FEAT_VISIBILITY"
		   type = "user"
		message = "Cannot change the visibility in an overridden Attribute or Operation ('%1')." />

	<Message id = "CANNOT_OVERRIDE_FINAL_AVS"
		   type = "user"
		message = "Cannot override an Value source marked as Final." />

	<Message id = "PARTITION_NOT_OWNED_BY_SUPER"
		   type = "user"
		message = "Can only partition Structure Links owned by a super-type." />
		
	<Message id = "SPLIT_PARTITION_LEVEL"
		   type = "user"
		message = "Cannot define a partition of link '%1' in Structure Element '%2', because a partition of link '%1' already exists in Structure Element '%3'." />

	<Message id = "CANNOT_SET_COMPLEMET_TARGET"
		   type = "system"
		   message = "Cannot set the target of a Partition Complement." />

	<Message id = "CANNOT_OVERRIDE_DISALLOW_COMPLEMET"
		   type = "user"
		   message = "This partition doesn't allow complemantary classes to be added in sub-types." />

	<Message id = "PART_NOT_VALID_FOR_COMPLEMENT"
		   type = "user"
  	    message = "This Partition Part's target cannot be part of the given Partition Complement, because its target is a sub-type of another Partition Part of the same Partition," />

	<Message id = "PART_NOT_VALID_FOR_PARTITION"
		   type = "user"
	    message = "The Structure Link's target is not a sub-type of the target of the Structure Link being partitioned." />

	<Message id = "PART_NOT_ALLOWED_FOR_PARTITION"
		   type = "user"
		message = "The Structure Link's target is not an allowed sub-type for the Structure Link being partitioned." />

	<Message id = "INCOMPATIBLE_LINK_TYPES"
		   type = "user"
	    message = "Structure Links of a specific type can only be partitined in Structure Links of the same type." />

	<Message id = "INCOMPATIBLE_MULTIPLICITIES"
		   type = "user"
	    message = "The multiplicity of Partition Parts should be a sub-set of that of the Partitioned Link." />

	<Message id = "BASEATTR_ALREADY_SET"
		   type = "user"
		message = "Attribute already overrides another Attribute." />

	<Message id = "BASE_AVS_ALREADY_SET"
		   type = "user"
		message = "Value source already overrides another Value source." />

	<Message id = "CANNOT_OVERRIDE_SELF_ATTR"
		   type = "user"
	    message = "Attribute cannot override itself" />

	<Message id = "CANNOT_OVERRIDE_SELF_AVS"
		   type = "user"
		   message = "Value source cannot override itself" />

	<Message id = "CANNOT_OVERRIDE_OVERRIDING_ATTR"
		   type = "user"
		   message = "An Attribute can only override an Attribute that doesn't override another Attribute itself." />

	<Message id = "CANNOT_OVERRIDE_WITH_NULL_ATTR"
		   type = "user"
		   message = "Cannot override Attribut with Null." />

	<Message id = "CANNOT_OVERRIDE_OVERRIDING_AVS"
		   type = "user"
		   message = "A Value-source can only override a Value-source that doesn't override another Value-source itself." />

	<Message id = "ATTR_ALREADY_OVERRIDDEN"
	       type = "user"
		   message = "Attribute '%1' is already overridden on this level." />

	<Message id = "AVS_ALREADY_OVERRIDDEN"
	       type = "user"
		   message = "Value source '%1' is already overridden on this level." />
	
	<Message id = "PARTITION_COMPLEMENT_EXISTS"
		   type = "user"
		   message = "Partition Complement already exists." />

	<Message id = "LINK_OWNERS_NOT_RELATED"
		   type = "user"
		   message = "Link owners are not releated, '%1' should be a sub-type of '%2'." />

	<Message id = "PARTITION_LOOP"
		   type = "user"
		   message = "A loop was encountered in partition definitions." />

	<Message id = "CANNOT_RESOLVE_PARTITION"
		   type = "user"
		   message = "Cannot resolve partition link-id '%1' of link '%2' at structure element '%3'." />

	<Message id = "CANNOT_RESOLVE_NAVLINK"
		   type = "user"
		   message = "Cannot resolve navigation-link id '%1' in a navigation link mapping at structure element '%2'." />

	<Message id = "CANNOT_RESOLVE_NAVMAPPEDLINK"
		   type = "user"
		   message = "Cannot resolve mapped-link id '%1' in mapping for navigation link '%2' at structure element '%3'." />

	<Message id = "CANNOT_RESOLVE_LINKMAPPING_LINK"
		   type = "user"
		   message = "Cannot resolve mapped-link id '%1' in the deployment link mapping at financial product structure element '%2'." />

	<!-- Attributes -->
	<Message id = "TIMEDEP_ATTR_VALDEF_NOT_SIMPLE"
		message = "Value definition '%1' with time-dependency is not simple; it cannot be used by attribute '%2'."
		   type = "user" />
	<Message id = "ATTRIBUTE_NOT_LINKED"
		message = "Cannot remove attribute '%1' from %2; it does not own this attribute."
		   type = "system" />
	<Message id = "FEATURE_NAME_IN_USE"
		message = "The feature name '%1' is not unique in Structure Element %2; a feature with that name already exists."
		   type = "user" />
    <Message id = "FEATURE_NAME_USED_IN_SUPER"
		message = "The feature name '%1' is not unique in Structure Element %2; a feature with the same name already exists in super-type %3."
		   type = "user" />
    <Message id = "FEAT_INCOMPATIBLE_VALDEF"
		message = "The Value Definition (%1) is incompatible with that defined in the parent of the Feature (%2)."
	       type = "user" />
    <Message id = "DIFFERENT_ATTRIBUTE"
		message = "Cannot override value source of a different attribute; Attribute of the overriding value source should override the attribute of the overridden value source."
	       type = "user" />
	<Message id = "FEAT_VALDEF_NO_IDENTITY"
		message = "A feature cannot have a value definition with data type Identity."
		   type = "user" />
	<Message id = "FINPROD_FEAT_TYPE_DEPLENV_STRELM"
		message = "The type of a financial product feature ('%1' of '%2') cannot contain a structure element from a deployment environment."
		   type = "user" />
	<Message id = "DEPLENV_FEAT_TYPE_FINPROD_STRELM"
		message = "The type of a deployment environment feature ('%1' of '%2') cannot contain a structure element from a financial product."
		   type = "user" />

	<Message id = "STARTENDDATE_ATTR_NOT_OWNED"
		message = "The start/end date must be an attribute of the structure element."
		   type = "system" />
	<Message id = "STARTENDDATE_NO_OVERRIDING"
		message = "The start/end date cannot be overridden in a subtype."
		   type = "user" />
	<Message id = "STARTENDDATE_ATTR_NO_TIMEINDEP_DATETIME"
		message = "Cannot use attribute '%1' of %2 as start/end date; it is not a time-independent date-time attribute."
		   type = "user" />

	<Message id = "OVERRIDING_SIG_INCOMPATIBLE"
		message = "Cannot override '%1': wrong number of arguments."
		   type = "user" />
	<Message id = "OVERRIDING_SIG_NOT_WIDER"
		message = "Cannot override '%1': arguments are not compatible."
		   type = "user" />
	<Message id = "FINPROD_FEAT_PARAM_TYPE_DEPLENV_STRELM"
		message = "The type of parameter '%1' in the signature of financial product feature '%2' of '%3' cannot contain a structure element from a deployment environment."
		   type = "user" />
	<Message id = "DEPLENV_FEAT_PARAM_TYPE_FINPROD_STRELM"
		message = "The type of parameter '%1' in the signature of deployment environment feature '%2' of '%3' cannot contain a structure element from a financial product."
		   type = "user" />


	<!-- Mapping Slice -->
	<Message id = "FUNCTION_ALREADY_IN_MAPPING_CONTEXT"
		message = "Function '%1', or another version of it, is already available in %2 and cannot be added twice." 
			type = "user" />
	<Message id = "VARIABLE_ALREADY_MAPPED"
		message = "Variable '%1', or another version of it, has already been mapped in %2."
		   type = "user" />
	<Message id = "VARIABLE_MAPPING_NOT_LINKED"
		message = "Cannot remove mapping of variable '%1' from %2; it does not own this variable mapping."
		   type = "user" />
	<Message id = "MAPPINGSLICE_ALREADY_EXISTS"
		message = "Structure element '%1' already has a mapping slice for this destination path."
		   type = "user" />
	<Message id = "MAPPINGSLICE_NOT_LINKED"
		message = "Cannot remove mapping slice for destination '%1' from %2; it does not own this mapping slice."
		   type = "system" />
	<Message id = "CANNOT_REMOVE_PRINCIPAL_MAPPINGSLICE"
		message = "The principal mapping slice cannot be removed."
		   type = "user" />

	<!-- Variable Mapping -->
	<Message id = "VAR_MAPPING_NOT_MULTIPLE"
		message = "Cannot map variable '%1' across a multiple link."
		   type = "user" />
	<Message id = "VAR_FEAT_TYPE_INCONV"
		message = "Cannot map variable '%1' on feature '%2'; the type is not convertible."
		   type = "user" />
	<Message id = "VAR_MAPPING_FEAT_PARAMLESS"
		message = "Cannot map variable '%1' on feature '%2'; it must be a feature without parameters."
		   type = "user" />
	<Message id = "VAR_CONST_TYPE_INCONV"
		message = "Cannot map variable '%1' on constant '%2'; the data type is not convertible."
		   type = "system" />
	<Message id = "VAR_MAPPING_FUNC_PATH_WRONG"
		message = "In the mapping of variable '%1' on function '%2' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "VAR_MAPPING_FUNC_PARAMLESS"
		message = "Cannot map variable '%1' on function '%2'; it must be a function without parameters."
		   type = "user" />
	<Message id = "VAR_MAPPING_FUNC_VALDEF_INCONV"
		message = "Cannot map variable '%1' on function '%2'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "STRUCTELM_UNMAPPED_TUPLE"
		message = "The tuple '%1' in variable '%2' must be mapped on a structure element first."
		   type = "system" />
	<Message id = "TUPLE_VAR_FEAT_TYPE_INCONV"
		message = "Cannot map member '%1' of tuple '%2' on feature '%3'; the type is not convertible."
		   type = "user" />
	<Message id = "TUPLE_VAR_FEAT_PARAMLESS"
		message = "Cannot map member '%1' of tuple '%2' on feature '%3'; it must be a feature without parameters."
		   type = "user" />
	<Message id = "TUPLE_VAR_CONST_TYPE_INCONV"
		message = "Cannot map member '%1' of tuple '%2' on constant '%3'; the data type is not convertible."
		   type = "system" />
	<Message id = "TUPLE_VAR_FUNC_PATH_WRONG"
		message = "In the mapping of member '%1' of tuple '%2' on function '%3' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "TUPLE_VAR_FUNC_PARAMLESS"
		message = "Cannot map member '%1' of tuple '%2' on function '%3'; it must be a function without parameters."
		   type = "user" />
	<Message id = "TUPLE_VAR_FUNC_VALDEF_INCONV"
		message = "Cannot map member '%1' of tuple of variable '%2' on function '%3'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "VAR_TUPLE_VALDEF_NOTFOUND"
		message = "Cannot find tuple value definition for variable '%1'."
		   type = "system" />
	<Message id = "TUP_MEM_NOMAP_SCALAR"
		message = "Cannot map member '%1' of tuple '%2' on a simple value; the member is a tuple, set or instance reference."
		   type = "system" />
	<Message id = "TUP_MEM_NOMAP_TUPLE"
		message = "Cannot map member '%1' of tuple '%2' on a tuple; the member is a simple value, set or instance reference."
		   type = "system" />
	<Message id = "TUP_MEM_NOMAP_SET"
		message = "Cannot map member '%1' of tuple '%2' on a set; the member is a simple value, tuple or instance reference."
		   type = "system" />
	<Message id = "TUP_MEM_NOMAP_INST_REF"
		message = "Cannot map member '%1' of tuple '%2' on an instance reference; the member is a simple value, tuple or set."
		   type = "system" />
	<Message id = "MEMBER_MAPPING_NOT_LINKED"
		message = "Cannot remove member mapping of variable '%1' from tuple mapping; it does not own this member mapping."
		   type = "user" />
	<Message id = "MEMBERMAPPED_TUPLE_NOT_ON_TUPVAL"
		message = "A tuple cannot be mapped on a tuple function/feature/constant when it already has member mappings."
		   type = "system" />
	<Message id = "PARTIAL_ONLY_WITH_MEMBERMAPPED_TUPLEVAR"
		message = "'Partial' indication only allowed for mapping of tuple variable on members."
		   type = "system" />
	<Message id = "TUPLE_FUNC_PATH_WRONG"
		message = "In the mapping of tuple '%1' on function '%2' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "TUPLE_FUNC_PARAMLESS"
		message = "Cannot map tuple '%1' on function/operation '%2'; it must be a function/operation without parameters."
		   type = "user" />
	<Message id = "TUPLE_FUNC_VALDEF_INCONV"
		message = "Cannot map tuple '%1' on function/feature '%2'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "NO_STRUCTLINK_PRESENT"
		message = "There is no (unique) structure link from structure element '%1' to '%2'."
		   type = "system" />
	<Message id = "STRUCTLINK_UNMAPPED_SET"
		message = "The set '%1' in variable '%2' must be mapped on a structure link first."
		   type = "system" />
	<Message id = "SETMAPPING_NOT_MUTABLE"
		message = "The set mapping under set '%1' in variable '%2' is final and can not be edited."
		   type = "system" />
	<Message id = "SET_ELEM_NOMAP_SCALAR"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on simple values; the set contains tuples, sets or instance references."
		   type = "system" />
	<Message id = "SET_ELEM_NOMAP_TUPLE"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on tuples; the set contains simple values, sets or instance references."
		   type = "system" />
	<Message id = "SET_ELEM_NOMAP_INST_REF"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on instance references; the set contains simple values, tuples or sets."
		   type = "system" />
	<Message id = "VAR_SET_VALDEF_NOTFOUND"
		message = "Cannot find set value definition for variable '%1'."
		   type = "system" />
	<Message id = "SETELM_MAPPING_FEAT_TYPE_INCONV"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on feature '%4'; the type is not convertible."
		   type = "user" />
	<Message id = "SETELM_MAPPING_FEAT_PARAMLESS"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on feature '%4'; it must be a feature without parameters."
		   type = "user" />
	<Message id = "SETELM_MAPPING_CONST_TYPE_INCONV"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on constant '%4'; the data type is not convertible."
		   type = "system" />
	<Message id = "SETELM_MAPPING_FUNC_PATH_WRONG"
		message = "In the mapping of element '%1' of set '%2' in variable '%3' on function '%4' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "SETELM_MAPPING_FUNC_PARAMLESS"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on function '%4'; it must be a function without parameters."
		   type = "user" />
	<Message id = "SETELM_MAPPING_FUNC_VALDEF_INCONV"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on function '%4'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "SETMAPPING_FUNC_PATH_WRONG"
		message = "In the mapping of set '%1' in variable '%2' on function '%3' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "SETMAPPING_FUNC_PARAMLESS"
		message = "Cannot map set '%1' in variable '%2' on function/operation '%3'; it must be a function without parameters."
		   type = "user" />
	<Message id = "SETMAPPING_FUNC_VALDEF_INCONV"
		message = "Cannot map set '%1' in variable '%2' on function/feature '%3'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "SETVAR_MAPPING_SETFUNC_PARAMLESS"
		message = "Cannot map set variable '%1' on set function/operation '%2'; it must be a function/operation without parameters."
		   type = "user" />
	<Message id = "SETVAR_MAPPING_SETFUNC_VALDEF_INCONV"
		message = "Cannot map set variable '%1' on set function/feature '%2'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "SETVAR_MAPPING_SETCONST_EXTFUNC_NOT_WITH_STRUCTLINK"
		message = "Cannot map set variable '%1' on a set constant or external function if it is already mapped on a structure link."
		   type = "system" />
	<Message id = "STRUCTLINK_UNMAPPED_JOINVAR"
		message = "The join variable '%1' must be mapped on a structure link first."
		   type = "system" />
	<Message id = "ASSOCTYPE_UNMAPPED_JOINVAR"
		message = "The join variable '%1' must be mapped on an association type first."
		   type = "system" />
	<Message id = "JOINVAR_ASSOCTYPE_ATTR_NOTOWNED"
		message = "Cannot map join of variable '%1' on attribute '%2'; it is not owned by the association type ('%3')."
		   type = "system" />
	<Message id = "JOINVAR_FEAT_TYPE_INCONV"
		message = "Cannot map join of variable '%1' on feature '%2'; the type is not convertible."
		   type = "user" />
	<Message id = "JOINVAR_FEAT_PARAMLESS"
		message = "Cannot map join of variable '%1' on feature '%2'; it must be a feature without parameters."
		   type = "user" />
	<Message id = "JOINVAR_CONST_TYPE_INCONV"
		message = "Cannot map join of variable '%1' on constant '%2'; the data type is not convertible."
		   type = "system" />
	<Message id = "JOINVAR_FUNC_PATH_WRONG"
		message = "In the mapping of join of variable '%1' on function '%2' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "JOINVAR_FUNC_PARAMLESS"
		message = "Cannot map join of variable '%1' on function '%2'; it must be a function without parameters."
		   type = "user" />
	<Message id = "JOINVAR_FUNC_VALDEF_INCONV"
		message = "Cannot map join of variable '%1' on function '%2'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "JOINVAR_MAP_NO_ASSOCTYPE"
		message = "Cannot base mapping of join variable '%1' on structure link from %2 to %3; the role player '%4' must be an association type."
		   type = "system" />
	<Message id = "JOINVAR_NOMAP_TIMEDEP_LINK"
		message = "Cannot base mapping of time-independent join variable '%1' on time-dependent structure link from %2 to %3'."
		   type = "user" />
	<Message id = "JOINVAR_SET_NOMAP_TIMEDEP_LINK"
		message = "Cannot map time-independent set '%1' of join variable '%2' on time-dependent link '%3' from association type '%4' to object relation type '%5'."
		   type = "user" />
	<Message id = "TUPLE_JOINVAR_NOMAP_SCALAR"
		message = "Cannot map the join of variable '%1' on simple values; it contains tuples."
		   type = "system" />
	<Message id = "SCALAR_JOINVAR_NOMAP_TUPLE"
		message = "Cannot map the join of variable '%1' on tuples; it contains simple values."
		   type = "system" />
	<Message id = "SCALAR_JOINVAR_SET_NOT_ALLOWED"
		message = "Cannot map set '%1' of join variable '%2', because the set of the join value definition contains simple values (not allowed)."
		   type = "system" />
	<Message id = "JOINVAR_SET_ILLEGAL"
		message = "Illegal set indication '%1' when mapping set of join variable '%2'."
		   type = "system" />
	<Message id = "JOINVAR_SET_POS_IN_USE"
		message = "Cannot map set '%1' of join variable '%2' on object relation type '%3'; set '%4' already maps on it."
		   type = "user" />
	<Message id = "FUNC_PARAM_NOT_SIMPLE"
		message = "Parameter '%1' of function/operation '%2' does not have a simple data type; it can not be mapped on a constant."
		   type = "system" />
	<Message id = "FUNC_PARAM_CONST_TYPE_INCONV"
		message = "Cannot map parameter '%1' of function/operation '%2' on constant '%3'; the data type is not convertible."
		   type = "system" />
	<Message id = "FUNC_VAR_PARAM_TYPE_INCONV"
		message = "Cannot map parameter '%1' of function/operation '%2' on parameter '%3' of function variable '%4'; the type is not convertible."
		   type = "user" />
	<Message id = "FUNC_VAR_MAPPING_PATH_WRONG"
		message = "In the mapping of function variable '%1' on function '%2' the function is not available as a Local Function in the last structure element in the mapping path to the function."
		   type = "user" />
	<Message id = "FUNC_VAR_MAPPING_RETDEF_INCONV"
		message = "Cannot map function variable '%1' on function/feature '%2'; the types of the return values are not convertible."
		   type = "system" />
	<Message id = "FUNCTION_UNMAPPED_FUNCVAR"
		message = "The function variable '%1' must be mapped on a function/feature first."
		   type = "system" />
	<Message id = "PARAM_MAPPING_NOT_LINKED"
		message = "Cannot remove paramer mapping from variable mapping of function variable '%1'; it does not own this parameter mapping."
		   type = "user" />
	<Message id = "VAL_DEF_INST_INFO_MAPPING_NOT_BOOL_INT"
		message = "Variable '%1' using Value Definition '%2' cannot be used in mapping on instance info. It must have a boolean or integer Value Definition."
		   type = "user" />
   	<Message id = "OPT_LINK_MAPPING_LINK_MULTIPLICITY_ERR"
		message = "Mapping on optional link can be performed only on Single links. The link between '%1' and '%2' is '%3'"
		   type = "user" />
   	<Message id = "OPT_LINK_MAPPING_LINK_MANDATORY"
		message = "Mapping on optional link can be performed only on an optional link. There is no optional link between '%1' and '%2'."
		   type = "user" />
   	<Message id = "OPT_LINK_MAPPING_NO_LINK"
		message = "There is no optional link originating at '%1'. Can't create this mapping."
		   type = "user" />
	<Message id = "NO_FEATUREID_IN_PATH"
		message = "No feature id for structure element '%1' in mapping path '%2'."
		   type = "system" />
	<Message id = "NO_STR_ELM_AT_PATH_END"
		message = "No structure element found at end of mapping path '%1'."
		   type = "system" />
	<Message id = "NO_PREV_STR_ELM_IN_PATH"
		message = "No previous structure element found in mapping path '%1'."
		   type = "user" />
	<Message id = "NO_MAP_CTX_AT_PATH_END"
		message = "No mapping context found at end of mapping path '%1'."
		   type = "system" />
	<Message id = "NOT_ALLOWED_IN_REMOTED_VARMAPPING"
		message = "This operation is not allowed in a &quot;not mapped here&quot; variable mapping."
		   type = "system" />
	<Message id = "VAR_STR_ELM_TYPE_INCONV"
		message = "Cannot map variable '%1' on structure element '%2'; the type is not convertible."
		   type = "user" />
	<Message id = "TUPLE_VAR_STR_ELM_TYPE_INCONV"
		message = "Cannot map member '%1' of tuple '%2' on structure element '%3'; the type is not convertible."
		   type = "user" />
	<Message id = "SETELM_MAPPING_STR_ELM_TYPE_INCONV"
		message = "Cannot map element '%1' of set '%2' in variable '%3' on structure element '%4'; the type is not convertible."
		   type = "user" />
	<Message id = "CONST_VARMAPP_STRUCTURE_MISMATCH"
		message = "Variable '%1' has structure '%2 - %3'; mapped constant value of type '%4' does not match." 
		   type = "user" />
	<Message id = "CONST_VARMAPP_DATATYPE_MISMATCH"
		message = "Variable '%1' has data type '%2'; mapped constant value with data type '%3' does not match." 
		   type = "user" />
	<Message id = "CONST_VARMAPP_UNITTYPE_MISMATCH"
		message = "A unit type in the mapped constant value for variable '%1' does not match the unit of the quantity value definition ('%2')."
		   type = "user" />
	<Message id = "CONST_VARMAPP_NOT_IN_VALDOM"
		message = "Variable '%1' has a mapping on constant value '%2' that is not included in the value domain of its value definition '%3'." 
		   type = "user" />
	<Message id = "CONST_VARMAPP_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the mapped constant value for variable '%2' is not in the value domain of the quantity value definition's unit ('%3')."
		   type = "user" />

	<!-- Validations -->
	<Message id = "CANNOT_OVERRIDE_VLD_ELT_NAME"
		message = "Cannot change the name in an overridden Validation or Validation Group ('%1')."
			type = "user" />
	<Message id = "CANNOT_OVERRIDE_VLD_ELT_SHORTNAME"
		message = "Cannot change the short name in an overridden Validation or Validation Group ('%1')."
			type = "user" />
	<Message id = "CANNOT_OVERRIDE_VLD_ELT_VISIBILITY"
		message = "Cannot change the visibility in an overridden Validation or Validation Group ('%1')."
			type = "user" />
	<Message id = "CANNOT_OVERRIDE_VLD_SEVERITY"
		message = "Cannot change the severity in an overridden Validation ('%1')."
			type = "user" />
	<Message id = "VLD_ELT_NAME_IN_USE"
		message = "The validation element name '%1' is not unique in Structure Element '%2'; a validation element with that name already exists."
		   type = "user" />
	<Message id = "VLD_ELT_NAME_USED_IN_SUPER"
		message = "The validation element name '%1' is not unique in Structure Element '%2'; a validation element with the same name already exists in super-type '%3'."
		   type = "user" />
	<Message id = "NO_VALIDATIONID_IN_PATH"
		message = "No validation id or validation group id for structure element '%1' in mapping path '%2'."
		   type = "system" />
	<Message id = "VLD_MSG_PARAM_NAME_IN_USE"
		message = "The name '%1' is not unique in the message signature of validation '%2'; a message parameter with that name exists."
		   type = "user" />
	<Message id = "VLD_MSG_PARAMTYPE_NOT_ALLOWED"
		message = "Parameter '%1' in the message signature of validation '%2' must be simple (no structure element and not with data type Identity) and cannot be time-dependent."
		   type = "user" />
	<Message id = "VLD_MSG_PARAM_OUT_OF_RANGE"
		message = "Sequence number (%1) for message parameter '%2' of validation '%3' out of range."
		   type = "system" />
	<Message id = "VLD_MSG_PARAM_INDEX_OUT_OF_RANGE"
		message = "Message parameter sequence number (%1) for validation '%2' out of range."
		   type = "system" />
	<Message id = "BASE_VLD_ELT_ALREADY_SET"
		message = "Validation already overrides another Validation."
			type = "user" />
	<Message id = "CANNOT_OVERRIDE_SELF_VLD_ELT"
	    message = "Validation cannot override itself."
		   type = "user" />
	<Message id = "CANNOT_OVERRIDE_OVERRIDING_VLD_ELT"
		message = "A Validation can only override a Validation that doesn't override another Validation itself."
		   type = "user" />
	<Message id = "VLD_ELT_ALREADY_OVERRIDDEN"
		message = "Validation '%1' is already overridden on this level."
	       type = "user" />
	<Message id = "DIFFERENT_VLD_ELT_OWNER"
		message = "Cannot override validation of a different structure element; structure element of the overriding validation should be a subtype of the structure element of the overridden validation."
	       type = "user" />
	<Message id = "VLD_MSGTXT_UNKNOWN_PARAM"
		message = "In the message text a parameter is referenced that is not part of the signature of validation '%1' of '%2'."
		   type = "user" />
	<Message id = "MAIN_MEMBER_ALREADY_EXISTS"
		message = "Validation group '%1' of '%2' already has a main section validation member for this validation path."
		   type = "user" />
	<Message id = "PREREQ_MEMBER_ALREADY_EXISTS"
		message = "Validation group '%1' of '%2' already has a prerequisite section validation member for this validation path."
		   type = "user" />
	<Message id = "MAIN_MEMBER_NOT_LINKED"
		message = "Cannot remove main section member for validation element '%1' from validation group '%2' of '%3'; it does not own this member."
		   type = "system" />
	<Message id = "PREREQ_MEMBER_NOT_LINKED"
		message = "Cannot remove prerequisite section member for validation element '%1' from validation group '%2' of '%3'; it does not own this member."
		   type = "system" />
	<Message id = "VLD_ELT_NOT_LINKED"
		message = "Cannot remove validation element '%1' from structure element '%2'; it does not own this validation element."
		   type = "system" />


	<!-- AttributeValueSources -->
	<Message id = "ATTRVALSRC_NOT_LINKED"
		message = "Cannot remove value source '%1' from attribute '%2'; it does not own this value source."
		   type = "system" />
	<Message id = "ONE_ENTRY_ATTRVALSRC"
		message = "An attribute ('%1') can have only one entry value source."
		   type = "system" />
	<Message id = "ATTRVALSRC_NOT_CALCULATED"
		message = "Attribute value source '%1' must be 'calculated'."
		   type = "system" />
	<Message id = "ATTRVALSRC_NOT_ENTERED"
		message = "Attribute value source '%1' must be 'entered'."
		   type = "system" />
	<Message id = "AGGREGATION_TYPE_NULL"
		message = "Aggregation type  not defined" type = "user" />		   
	<Message id = "ATTRVALSRC_NOT_AGGREGATED"
		message = "Attribute value source '%1' must be of type 'aggregated'."
		   type = "system" />
	<Message id = "ATTRVALSRC_NEITHER_AGGREGATED_NOR_CALCULATED"
		message = "Attribute value source '%1' must be of type 'aggregated OR calculated'."
		   type = "system" />
		   
	<Message id = "ATTRVALSRC_NAME_IN_USE"
		message = "The value source name '%1' is not unique in attribute '%2'; a value source with that name already exists."
		   type = "user" />
	<Message id = "ATTRVALSRC_INCOMPATIBLE_DEFAULT_VALUE"
		message = "The default value of value source '%1' of attribute '%2' of '%3' is incompatible with the attribute's value definition."
		   type = "user" />
	<Message id = "ATTRVALSRC_DEFAULT_VALUE_NOT_IN_VALDOM"
		message = "The default value '%1' of value source '%2' of attribute '%3' of '%4' is not in the value domain of the attribute's value definition."
		   type = "user" />
	<Message id = "ATTRVALSRC_DEFVAL_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the quantity default value of value source '%2' of attribute '%3' of '%4' is not in the value domain of the unit of the attribute's value definition."
		   type = "user" />
	<Message id = "CANNOT_OVERRIDE_DIFFERENT_AVS"
		message = "A value source can only override a value source of the same type (calculated/entered/aggregated)."
		   type = "user" />


	<!-- DeploymentEnvironment -->
	<Message id = "STRUCT_NO_DEPL_RSC_ROOT_ELM"
		message = "Cannot include %1 in deployment environment '%2'; it is not a deployment resource root element." />

	<!-- Deployment -->
	<Message id = "DEPLOYM_NO_RSC_ROOT_ELM"
		message = "Structure element '%1' is not a resource root element; it cannot be used as an entry point of a deployment." />
	<Message id = "ENTRYPOINT_NOT_IN_FINPRODUCT"
		message = "The entry point is not from a financial product deliverable." />
	<Message id = "DEPLELEM_MAPPINGS_PRESENT"
		message = "Cannot change the deployment environment and entry point of deployment '%1'; there are still deployment structure mappings." />
	<Message id = "DEPLFUNC_MAPPINGS_PRESENT"
		message = "Cannot change the deployment environment and entry point of deployment '%1'; there are still deployment mappings of variables on functions." />
	<Message id = "STRUCTELEM_NOT_INSTANTIABLE"
		message = "Structure element '%1' cannot be instantiable in deployment '%2', as it is an abstract type."
		   type = "user" />

	<!-- Deployment mapping -->
	<Message id = "MAPPED_COMPONENT_WRONG_DELIV_TYPE"
		message = "The mapped financial product and/or deployment environment component is not from the appropriate type of deliverable."
		   type = "system" />
	<Message id = "MAPPED_FINPROD_STRUCTELM_NO_RSCROOT"
		message = "The mapped financial product structure element '%1' is not the entry point or an indirect resource root element of the deployment."
		   type = "user" />
	<Message id = "MAPPED_DEPLENV_STRUCTELM_NO_RSCROOT"
		message = "The mapped deployment environment structure element '%1' is not a direct or indirect resource root element of the deployment environment."
		   type = "user" />
	<Message id = "DEPL_FUNCMAPPING_NOT_LINKED"
		message = "Cannot remove deployment function mapping of variable '%1' for %2; the mapping is not owned."
		   type = "user" />
	<Message id = "DEPL_MEMBER_FUNCMAPPING_NOT_LINKED"
		message = "Cannot remove deployment function mapping of member '%1' of variable '%2' for %3; the mapping is not owned."
		   type = "user" />
	<Message id = "DEPL_TUPLE_FUNCMAPPING_NOT_LINKED"
		message = "Cannot remove deployment function mapping of tuple '%1' of variable '%2' for %3; the mapping is not owned."
		   type = "user" />
	<Message id = "VARMAPPING_ALREADY_FUNCMAPPED"
		message = "Variable '%1' already has a deployment function mapping for %2."
		   type = "user" />
	<Message id = "VARMAPPING_NOT_UNDER_ENTRYPOINT"
		message = "The mapping of variable '%1' in mapping context '%2' is not under the entry point of the deployment."
		   type = "user" />
	<Message id = "VARMAPPING_NOT_TOEXERNAL"
		message = "The mapping of variable '%1' in mapping context '%2' must be 'to external'."
		   type = "system" />
	<Message id = "INTERN_FUNC_VAR_MAPPING_IN_CTX"
		message = "In the mapping of variable '%1' on internal function '%2' the function is not context free: it is using variables."
		   type = "user" />
	<Message id = "INTERN_FUNC_VAR_MAPPING_RETDEF_INCONV"
		message = "Cannot map variable '%1' on internal function '%2'; the types of the return values are not convertible."
		   type = "user" />
	<Message id = "EXTERN_FUNC_VAR_MAPPING_RETDEF_INCONV"
		message = "Cannot map variable '%1' on external function '%2'; the types of the return values are not convertible."
		   type = "user" />
	<Message id = "FUNC_VAR_MAPPING_SIGNATURE_MISMATCH"
		message = "Cannot map variable '%1' on external/internal function '%2'; mismatch in parameter no. %3 of the signature."
		   type = "user" />

	<Message id = "MAPPED_EXTERN_FUNC_NOT_IN_DEPLENV"
		message = "Cannot map variable '%1' on an external function ('%2') that has not been selected in the deployment environment."
		   type = "system" />
	<Message id = "MEMBER_MAPPED_EXTERN_FUNC_NOT_IN_DEPLENV"
		message = "Cannot map member '%1' of variable '%2' on an external function ('%3') that has not been selected in the deployment environment."
		   type = "system" />
	<Message id = "INTERN_FUNC_MEMBER_MAPPING_IN_CTX"
		message = "In the mapping of member '%1' of variable '%2' on internal function '%3' the function is not context free: it is using variables."
		   type = "user" />
    <Message id = "INTERN_FUNC_MEMBER_MAPPING_RETDEF_INCONV"
		message = "Cannot map member '%1' of variable '%2' on internal function '%3'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "EXTERN_FUNC_MEMBER_MAPPING_RETDEF_INCONV"
		message = "Cannot map member '%1' of variable '%2' on external function '%3'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "DEPL_MEMBER_MAPPING_FUNC_PARAMLESS"
		message = "Cannot map member '%1' of variable '%2' on external/internal function '%3'; it must be a function without parameters."
		   type = "user" />
	<Message id = "NOT_A_MEMBERMAPPING"
		message = "Not a member mapping: the ScalarMapping does not refer to a tuple member or a set-element or a join-element."
		   type = "system" />
	<Message id = "MEMBERMAPPING_ALREADY_FUNCMAPPED"
		message = "Member '%1' of variable '%2' already has a deployment function mapping for %3."
		   type = "user" />
	<Message id = "MEMBERMAPPING_NOT_UNDER_ENTRYPOINT"
		message = "The mapping of member '%1' of variable '%2' in mapping context '%3' is not under the entry point of the deployment."
		   type = "user" />
	<Message id = "MEMBERMAPPING_NOT_TOEXERNAL"
		message = "The mapping of member '%1' of variable '%2' in mapping context '%3' must be 'to external'."
		   type = "system" />
	<Message id = "CONST_MEMMAPP_STRUCTURE_MISMATCH"
		message = "Member '%1' of variable '%2' has structure '%3 - %4'; mapped constant value of type '%5' does not match." 
		   type = "user" />
	<Message id = "CONST_MEMMAPP_DATATYPE_MISMATCH"
		message = "Member '%1' of variable '%2' has data type '%3'; mapped constant value with data type '%4' does not match." 
		   type = "user" />
	<Message id = "CONST_MEMMAPP_UNITTYPE_MISMATCH"
		message = "A unit type in the mapped constant value for member '%1' of variable '%2' does not match the unit of the quantity value definition ('%3')."
		   type = "user" />
	<Message id = "CONST_MEMMAPP_NOT_IN_VALDOM"
		message = "Member '%1' of variable '%2' has a mapping on constant value '%3' that is not included in the value domain of its value definition '%4'." 
		   type = "user" />
	<Message id = "CONST_MEMMAPP_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the mapped constant value for member '%2' of variable '%3' is not in the value domain of the quantity value definition's unit ('%4')."
		   type = "user" />

	<Message id = "TUPLE_MAPPED_EXTERN_FUNC_NOT_IN_DEPLENV"
		message = "Cannot map tuple '%1' of variable '%2' on an external function ('%3') that has not been selected in the deployment environment."
		   type = "system" />
	<Message id = "INTERN_FUNC_TUPLE_MAPPING_IN_CTX"
		message = "In the mapping of tuple '%1' of variable '%2' on internal function '%3' the function is not context free: it is using variables."
		   type = "user" />
	<Message id = "INTERN_FUNC_TUPLE_MAPPING_RETDEF_INCONV"
		message = "Cannot map tuple '%1' of variable '%2' on internal function '%3'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "EXTERN_FUNC_TUPLE_MAPPING_RETDEF_INCONV"
		message = "Cannot map tuple '%1' of variable '%2' on external function '%3'; the type of the return value is not convertible."
		   type = "user" />
	<Message id = "DEPL_TUPLE_MAPPING_FUNC_PARAMLESS"
		message = "Cannot map tuple '%1' of variable '%2' on external/internal function '%3'; it must be a function without parameters."
		   type = "user" />
	<Message id = "NOT_A_TUPLE_ELEM_MAPPING"
		message = "Not a tuple element mapping: the TupleMapping does not refer to a tuple member or a set-element or a join-element or joinset-element."
		   type = "system" />
	<Message id = "TUPLE_ELEM_MAPPING_ALREADY_FUNCMAPPED"
		message = "Tuple '%1' of variable '%2' already has a deployment function mapping for %3."
		   type = "user" />
	<Message id = "TUPLE_ELEM_MAPPING_NOT_UNDER_ENTRYPOINT"
		message = "The mapping of tuple '%1' of variable '%2' in mapping context '%3' is not under the entry point of the deployment."
		   type = "user" />
	<Message id = "TUPLE_ELEM_MAPPING_NOT_TOEXERNAL"
		message = "The mapping of tuple '%1' of variable '%2' in mapping context '%3' must be 'to external'."
		   type = "system" />
	<Message id = "CONST_TUPELMMAPP_STRUCTURE_MISMATCH"
		message = "Tuple '%1' of variable '%2' has structure '%3 - %4'; mapped constant value of type '%5' does not match." 
		   type = "user" />
	<Message id = "CONST_TUPELMMAPP_DATATYPE_MISMATCH"
		message = "Tuple '%1' of variable '%2' has data type '%3'; mapped constant value with data type '%4' does not match." 
		   type = "user" />
	<Message id = "CONST_TUPELMMAPP_UNITTYPE_MISMATCH"
		message = "A unit type in the mapped constant value for tuple '%1' of variable '%2' does not match the unit of the quantity value definition ('%3')."
		   type = "user" />
	<Message id = "CONST_TUPELMMAPP_NOT_IN_VALDOM"
		message = "Tuple '%1' of variable '%2' has a mapping on constant value '%3' that is not included in the value domain of its value definition '%4'." 
		   type = "user" />
	<Message id = "CONST_TUPELMMAPP_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the mapped constant value for tuple '%2' of variable '%3' is not in the value domain of the quantity value definition's unit ('%4')."
		   type = "user" />

	<Message id = "CONST_SETELMMAPP_STRUCTURE_MISMATCH"
		message = "Set '%1' of variable '%2' has structure '%3 - %4'; mapped constant value of type '%5' does not match." 
		   type = "user" />
	<Message id = "CONST_SETELMMAPP_DATATYPE_MISMATCH"
		message = "Set '%1' of variable '%2' has data type '%3'; mapped constant value with data type '%4' does not match." 
		   type = "user" />
	<Message id = "CONST_SETELMMAPP_UNITTYPE_MISMATCH"
		message = "A unit type in the mapped constant value for set '%1' of variable '%2' does not match the unit of the quantity value definition ('%3')."
		   type = "user" />
	<Message id = "CONST_SETELMMAPP_NOT_IN_VALDOM"
		message = "Set '%1' of variable '%2' has a mapping on constant value '%3' that is not included in the value domain of its value definition '%4'." 
		   type = "user" />
	<Message id = "CONST_SETELMMAPP_UNIT_NOT_IN_VALDOM"
		message = "The unit '%1' in the mapped constant value for set '%2' of variable '%3' is not in the value domain of the quantity value definition's unit ('%4')."
		   type = "user" />

	<Message id = "DYNAMIC_TYPE_NO_SUBTYPE"
		message = "Cannot use financial product structure element '%1' as the dynamic type of '%2'; it is not a subtype."
		   type = "user" />
	<Message id = "INVALID_DEPLENVELM_IN_REUSELMMAPPING"
		message = "Cannot use reusable element mapping with '%1' as the deployment environment structure element; only '%2' is allowed."
		   type = "user" />
	<Message id = "DYNTYPESEL_EXPR_IN_CTX"
		message = "Dynamic type selector expression with variables or calculation dates is not allowed: it is not context free."
		   type = "user" />
	<Message id = "MAPPED_FINPROD_FEATURE_NOT_OWNED"
		message = "The mapped financial product %1 does not belong to the element mapping's financial product structure element '%2'."
		   type = "user" />
	<Message id = "FINPROD_FEATURE_NO_ENTRY_VALSRC"
		message = "Financial product %1 of '%2' does not have an entry value source; input mapping not possible."
		   type = "user" />
	<Message id = "FINPROD_FEATURE_ALREADY_MAPPED"
		message = "Financial product %1 of '%2' already has a mapping."
		   type = "user" />
	<Message id = "MAPPED_FINPROD_STRUCTLINK_NOT_OWNED"
		message = "The mapped financial product structure link '%1' of '%2' does not originate in the financial product structure element '%3' of the element mapping."
		   type = "system" />
	<Message id = "FINPROD_STRUCTLINK_ALREADY_MAPPED"
		message = "Financial product structure link '%1' of '%2' already has a mapping."
		   type = "user" />
	<Message id = "PARTITION_PART_MAPPING_NO_MIX"
		message = "It is not allowed to mix link mappings on a partition and its partition parts ('%1' of '%2' and '%3' of '%4')."
		   type = "user" />
	<Message id = "MAPPED_DEPLENV_FEATURE_NOT_OWNED"
		message = "The mapped deployment environment %1 does not belong to the element mapping's deployment environment structure element '%2'."
		   type = "user" />
	<Message id = "DEPLENV_FEATURE_NO_CALC_VALSRC"
		message = "Deployment environment %1 of '%2' does not have a calculated value source; output mapping not possible."
		   type = "user" />
	<Message id = "DEPLENV_FEATURE_ALREADY_MAPPED"
		message = "Deployment environment %1 of '%2' already has a mapping."
		   type = "user" />
	<Message id = "MAPP_PATH_FEAT_PARAMLESS"
		message = "Deployment mapping of feature '%1' on feature '%2' not possible with a mapping path; it must be a feature without parameters."
		   type = "user" />
	<Message id = "FEATMAPPING_EXPR_IN_CTX"
		message = "Deployment feature mapping expression with variables or calculation dates is not allowed: it is not context free."
		   type = "user" />
	<Message id = "MAPPED_FINPROD_VALSRC_NOT_OWNED"
		message = "The mapped financial product value source '%1' of %2 does not belong to one of the features of the element mapping's financial product structure element '%3'."
		   type = "user" />
	<Message id = "FINPROD_VALSRC_ALREADY_MAPPED"
		message = "Financial product attribute value source '%1' of %2 of '%3' already has a mapping."
		   type = "user" />
	<Message id = "MAPPED_DEPLENV_VALIDATION_NOT_OWNED"
		message = "The mapped deployment environment validation '%1' does not belong to the element mapping's deployment environment structure element '%2'."
		   type = "user" />
	<Message id = "DEPLENV_VALIDATION_ALREADY_MAPPED"
		message = "Deployment environment validation '%1' of '%2' already has a mapping."
		   type = "user" />
	<Message id = "ELMMAPPING_ABSTRACT_FINPRODSE"
		message = "Cannot create element mapping for abstract financial product structure element '%1'."
		   type = "user" />
	<Message id = "CHAIN_TO_ELMMAPPING_FINPROD_NO_SUPERTYPE"
		message = "Cannot be chained to reusable element mapping with financial product structure element '%1'; it is not a supertype of '%2'."
		   type = "user" />
	<Message id = "CHAIN_TO_ELMMAPPING_DEPLENV_NO_SUPERTYPE"
		message = "Cannot be chained to reusable element mapping with deployment environment structure element '%1'; it is not a supertype of '%2'."
		   type = "user" />
	<Message id = "INPUT_FEATMAPPING_NOT_LINKED"
		message = "Cannot remove input mapping for financial product %1 of '%2'; the mapping is not owned."
		   type = "user" />
	<Message id = "LINKMAPPING_NOT_LINKED"
		message = "Cannot remove mapping for financial product structure link '%1' of '%2'; the mapping is not owned."
		   type = "user" />
	<Message id = "OUTPUT_FEATMAPPING_NOT_LINKED"
		message = "Cannot remove output mapping for deployment environment %1 of '%2'; the mapping is not owned."
		   type = "user" />
	<Message id = "VALSRCMAPPING_NOT_LINKED"
		message = "Cannot remove mapping of financial product value source '%1' of %2 of '%3'; the mapping is not owned."
		   type = "user" />
	<Message id = "VALIDATIONMAPPING_NOT_LINKED"
		message = "Cannot remove mapping for deployment environment validation '%1' of '%2'; the mapping is not owned."
		   type = "user" />
	<Message id = "NO_DEPLENV_STR_LNK_AT_PATH_END"
		message = "The path does not end with a matching deployment environment structure link."
		   type = "system" />
	<Message id = "REFERENCELINKMAPPING_NO_TYPEMAPPING"
		message = "A link mapping for a reference link ('%1' of '%2') cannot have a type mapping."
		   type = "user" />
	<Message id = "INVALID_FINPRODELM_IN_REUSTYPEMAPPING"
		message = "Cannot use reusable type mapping with '%1' as the financial product static type; only '%2' is allowed."
		   type = "user" />
	<Message id = "INVALID_DEPLENVELM_IN_REUSTYPEMAPPING"
		message = "Cannot use reusable type mapping with '%1' as the deployment environment source; only '%2' is allowed."
		   type = "user" />
	<Message id = "CHAIN_TO_TYPEMAPP_DEPLENV_NO_SUPERTYPE"
		message = "Cannot be chained to reusable type mapping with deployment environment source '%1'; it is not a supertype of '%2'."
		   type = "user" />
	<Message id = "CHAIN_TO_TYPEMAPP_FINPROD_NO_SUPERTYPE"
		message = "Cannot be chained to reusable type mapping with financial product static type '%1'; it is not a supertype of '%2'."
		   type = "user" />
	<Message id = "DEPLENV_RESOURCEROOT_ALREADY_MAPPED"
		message = "Deployment environment structure element '%1' already has a resource mapping."
		   type = "user" />
	<Message id = "RESOURCEMAPPING_NOT_LINKED"
		message = "Cannot remove resource mapping for deployment environment structure element '%1'; the mapping is not owned."
		   type = "user" />
	<Message id = "DYNTYPESELECTOR_NOT_LINKED"
		message = "Cannot remove the indicated dynamic type selector from the type mapping for financial product structure element ''%1'; the selector is not owned."
		   type = "system" />
	<Message id = "NO_DEPLENV_VALSRC_AT_PATH_END"
		message = "The path does not end in a deployment environment value source."
		   type = "system" />

	<!-- Authorization -->
	<Message id = "NO_PERMISSION"
		message = "You have no %1 permission for category %2 in deliverable %3."
		   type = "user" />
	<Message id = "NO_MOD_PERMISSION"
		message = "You have no modify permission for category %1 in deliverable %2."
		   type = "user" />
	<Message id = "NO_READ_PERMISSION"
		message = "You have no read permission for category %1 in deliverable %2."
		   type = "user" />
    <Message id = "NO_MOD_PERM_REP_NOT_OWNER"
	    message = "Deliverable '%1' is not owned by this repository. It is not writable."
		   type = "user" />
	<Message id = "COMPONENT_NO_READ_PERMISSION"
		message = "You have no read permission for %1 in deliverable %2."
	   	   type = "user" />
	<Message id = "AUTH_GROUP_ALREADY_HAS_MEMBER"
		message = "Authorization Group '%1' already has Authorization User '%2' as a member."
		   type = "user" />
	<Message id = "AUTH_GROUP_DOES_NOT_HAVE_MEMBER"
		message = "Authorization Group '%1' does not have Authorization User '%2' as a member."
		   type = "user" />
	<Message id = "USER_NO_ADMIN"
		message = "User '%1' is not an administrator of the repository." 
			type = "user" />


	<!-- VControlled -->
	<Message id = "COMPONENT_ALREADY_HAS_KEYWORD"
		message = "Component '%1' already has keyword '%2'" />
	<Message id = "COMPONENT_DOES_NOT_HAVE_KEYWORD"
		message = "Component '%1' doesn't have keyword '%2'. Keyword cannot be removed" />

	<!-- Controlled -->
	<Message id = "NOT_ALLOWED_IN_DEPLENV"
		message = "This operation is not allowed in a deployment environment deliverable." />
	<Message id = "TAG_ALREADY_VALUED"
		message = "%1 already has a Tagged Value for Tag '%2'."
		   type = "user" />
	<Message id = "INVALID_TAG_VALUE"
		message = "'%1' is not a valid value for Tag '%2'."
		   type = "user" />
	<Message id = "STEREOTYPE_ALREADY_LINKED"
		message = "%1 already has a Stereotype '%2'."
		   type = "user" />
	<Message id = "TAGGED_VALUE_NOT_LINKED"
		message = "Tagged Value for Tag '%1' does not exist; cannot remove from %2."
		   type = "user" />
	<Message id = "STEREOTYPE_NOT_LINKED"
		message = "Stereotype '%1' is not linked to '%2' and cannot be removed."
		   type = "user" />

	<!-- Tables -->
	<Message id = "EXTERNAL_TABLE_NO_DEFINITION"
		message = "An external table cannot contain table data."
		   type = "user" />

 	<!-- Test case file selector -->	 
	<Message id = "NO_ACCESSIBLE_PATH"
		message = "'%1' is not an accessible path."
		   type = "user" />
	<Message id = "SAME_FILE_PATTERN"
		message = "Calculation input and expected result cannot have the same file pattern."
		   type = "user" />
	<Message id = "NOT_SAME_WILD_SECTION"
		message = "Calculation input and expected result patterns must have the same section with wild card characters."
		   type = "user" />
	<Message id = "MORE_THAN_ONE_WILD_SECTION"
		message = "File pattern '%1' contains more than one section with wild card characters."
		   type = "user" />

	<!-- batch regression tests and portfolios -->
	<Message id = "PORTFOLIO_ALREADY_CONTAINED"
		message = "Portfolio '%1', or another version of it, is already contained in %2." 
		   type = "user" />
	<Message id = "PORTFOLIO_NOT_CONTAINED"
		message = "Cannot remove Portfolio '%1' from %2; it is not currently contained in it." 
		   type = "system" />

	<!-- General -->
	<Message id = "NOT_IMPLEMENTED"
	   message = "Function %1 not available in this implementation."
		  type = "user" />

	<!-- Internal -->
   <Message id = "IMP_IN_COMP_WEAK_COMP"
	   message = "Function %1 is implemented in it's derived classes, Component and Weak Component." />

	<!-- Descriptions -->
	<Message id = "MSG_DESCRIBE"					message = "%1 '%2'" type = "user" />
	<Message id = "TYPE_DELIVERABLE"				message = "Deliverable" type = "user" />
	<Message id = "TYPE_VALUESOURCE"				message = "Value Source" type = "user" />
	<Message id = "TYPE_AUTODEPLOYMENT"				message = "Automatic Deployment" type = "user" />
	<Message id = "TYPE_AUTODEPLOYMENTENVIRONMENT"	message = "Automatic Deployment Environment" type = "user" />
	<Message id = "TYPE_BATCHREGRESSIONTEST"		message = "Batch Regression Test" type = "user" />
	<Message id = "TYPE_CONSTRAINT"					message = "Constraint" type = "user" />
	<Message id = "TYPE_DEPLMEMBERFUNCMAPPING"		message = "Deployment Member Function Mapping" type = "user" />
	<Message id = "TYPE_DEPLTUPLEFUNCMAPPING"		message = "Deployment Tuple Function Mapping" type = "user" />
	<Message id = "TYPE_DEPLOYMFEATUREMAPPING"		message = "Deployment Feature Mapping" type = "user" />
	<Message id = "TYPE_DEPLOYMFUNCTIONMAPPING"		message = "Deployment Function Mapping" type = "user" />
	<Message id = "TYPE_DEPLOYMTYPEMAPPING"			message = "Deployment Type Mapping" type = "user" />
	<Message id = "TYPE_DEPLVALIDATIONMAPPING"		message = "Deployment Validation Mapping" type = "user" />
	<Message id = "TYPE_DIAGRAM"					message = "Diagram" type = "user" />
	<Message id = "TYPE_DOCUMENT"					message = "Document" type = "user" />
	<Message id = "TYPE_DYNAMICTYPESELECTOR"		message = "Dynamic Type Selector" type = "user" />
	<Message id = "TYPE_ERRORMESSAGE"				message = "Error Message" type = "user" />
	<Message id = "TYPE_EXTERNALFUNCTION"			message = "External Function" type = "user" />
	<Message id = "TYPE_ATTR"						message = "Attribute" type = "user" />
	<Message id = "TYPE_OPERATION"					message = "Operation" type = "user" />
	<Message id = "TYPE_FILEEXTERNTESTCASE"  		message = "File Based External Test Case" type = "user" />
	<Message id = "TYPE_FOLDER"						message = "Folder" type = "user" />
	<Message id = "TYPE_FUNCTIONINMAPPINGCONTEXT"	message = "Local Function" type = "user" />
	<Message id = "TYPE_FUNCTIONVARIABLEMAPPING"	message = "Function Variable Mapping" type = "user" />
	<Message id = "TYPE_FUNCTIONVARIABLE"			message = "Function Variable" type = "user" />
	<Message id = "TYPE_FUNCTION"					message = "Function" type = "user" />
	<Message id = "TYPE_HYPERLINK"					message = "Hyperlink" type = "user" />
	<Message id = "TYPE_INSTREFMAPPING"				message = "Instance Reference Mapping" type = "user" />
	<Message id = "TYPE_INSTREFVARIABLEMAPPING"		message = "Instance Reference Variable Mapping" type = "user" />
	<Message id = "TYPE_INTERNTESTCASE"				message = "Internal Test Case" type = "user" />
	<Message id = "TYPE_JOINVARIABLEMAPPING"		message = "Join Variable Mapping" type = "user" />
	<Message id = "TYPE_LINKMAPPING"				message = "Link Mapping" type = "user" />
	<Message id = "TYPE_LOCALELEMENTMAPPING"		message = "Local Element Mapping" type = "user" />
	<Message id = "TYPE_LOCALTYPEMAPPING	"		message = "Local Type Mapping" type = "user" />
	<Message id = "TYPE_MAPPINGGROUP"				message = "Mapping Group" type = "user" />
	<Message id = "TYPE_MAPPINGSLICE"				message = "Mapping Slice" type = "user" />
	<Message id = "TYPE_MESSAGEPARAMETER"			message = "Message Parameter" type = "user" />
	<Message id = "TYPE_PARAMETERMAPPING"			message = "Parameter Mapping" type = "user" />
	<Message id = "TYPE_REUSABLEELEMMAPPING"		message = "Reusable Element Mapping" type = "user" />
	<Message id = "TYPE_REUSABLETYPEMAPPING"		message = "Reusable Type Mapping" type = "user" />
	<Message id = "TYPE_SCALARMAPPING"				message = "Scalar Mapping" type = "user" />
	<Message id = "TYPE_SCALARVARIABLEMAPPING"		message = "Scalar Variable Mapping" type = "user" />
	<Message id = "TYPE_SETMAPPING"					message = "Set Mapping" type = "user" />
	<Message id = "TYPE_SETVARIABLEMAPPING"			message = "Set Variable Mapping" type = "user" />
	<Message id = "TYPE_SIMPLEVARIABLE"				message = "Variable" type = "user" />
	<Message id = "TYPE_STATICDEPLOYMENTENVIRONMENT" message = "Static Deployment Environment" type = "user" />
	<Message id = "TYPE_STATICDEPLOYMENT"			message = "Static Deployment" type = "user" />
	<Message id = "TYPE_TABLE"						message = "Table" type = "user" />
	<Message id = "TYPE_STEREOTYPE"					message = "Stereotype" type = "user" />
	<Message id = "TYPE_TAG"						message = "Tag" type = "user" />
	<Message id = "TYPE_TAGGEDVALUE"				message = "Tagged Value" type = "user" />
	<Message id = "TYPE_TESTCASEFILESELECTOR"  		message = "Test Case File Selector" type = "user" />
	<Message id = "TYPE_TESTSET"					message = "Test Set" type = "user" />
	<Message id = "TYPE_TEXTBLOCK"					message = "Text Block" type = "user" />
	<Message id = "TYPE_TUPLEMAPPING"				message = "Tuple Mapping" type = "user" />
	<Message id = "TYPE_TUPLEMEMBERDEFINITION"		message = "Tuple Member Definition" type = "user" />
	<Message id = "TYPE_TUPLEVARIABLEMAPPING"		message = "Tuple Variable Mapping" type = "user" />
	<Message id = "TYPE_TYPEDEPLOYMENT"				message = "Type Deployment" type = "user" />
	<Message id = "TYPE_VALIDATION"					message = "Validation" type = "user" />
	<Message id = "TYPE_VALIDATIONGROUP"			message = "Validation Group" type = "user" />
	<Message id = "TYPE_VALIDATIONMEMBER"			message = "Validation Member" type = "user" />
	<Message id = "TYPE_VALUEDEFINITION"			message = "Value Definition" type = "user" />
	<Message id = "TYPE_VALUESOURCEMAPPING"			message = "Value Source Mapping" type = "user" />
	<Message id = "TYPE_STRUCTUREELEMENT"			message = "Structure Element" type = "user" />
	<Message id = "TYPE_STRUCTURELINK"				message = "Structure Link" type = "user" />
	<Message id = "TYPE_NAVIGATIONLINK"				message = "Navigation Link" type = "user" />
	<Message id = "TYPE_NAVIGATIONLINKMAPPING"		message = "Navigation Link Mapping" type = "user" />
	<Message id = "TYPE_COMPLEMENTPART"  			message = "Complement Part" type = "user" />
	<Message id = "TYPE_DEPLOYEDFUNCTION"  			message = "Deployed Function" type = "user" />
	<Message id = "TYPE_FUNCTIONDEPLOYMENT"  		message = "Function Deployment" type = "user" />
	<Message id = "TYPE_USEDVARIABLE"  			message = "Used Varuable" type = "user" />
	<Message id = "TYPE_DEPLOYMENTPORTFOLIO"  			message = "Deployment Portfolio" type = "user" />
	<Message id = "TYPE_QUICKPORTFOLIO"  			message = "Quick Portfolio" type = "user" />
	<Message id = "TYPE_TESTCONFIG"  			message = "Test Config" type = "user" />
	<Message id = "TYPE_TESTCONFIGSELECTOR"  			message = "Test Config Selector" type = "user" />
	<Message id = "TYPE_TYPEDEPLOYMENTSELECTOR"  			message = "Type Deployment Selector" type = "user" />
	<Message id = "TYPE_BINAGGREGATION"  			message = "Bin Aggregation" type = "user" />
	<Message id = "TYPE_CUSTOMAGGREGATION"  		message = "Custom Aggregation" type = "user" />
	<Message id = "TYPE_STANDARDAGGREGATION"  		message = "Standard Aggregation" type = "user" />

</MessageModule>
