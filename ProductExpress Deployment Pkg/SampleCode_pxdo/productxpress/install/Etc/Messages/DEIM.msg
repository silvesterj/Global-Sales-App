<?xml version = "1.0" ?>
<MessageModule name = "DEIM">

	<Message id = "INSTANCE_STRUCTELM_NOT_SET"
		type = "user"
		message = "StructureElement for %1 not set." /> 

	<Message id = "STRUCTELM_NO_STRUCTLINKID"
		type = "user"
		message = "StructureElement '%1' does not have StructureLink with id '%2'." /> 

	<Message id = "STRUCTLINK_IS_A_REFERENCELINK"
		type = "user"
		message = "StructureLink (of StructureElement '%1') with id '%2' is a ReferenceLink." /> 

	<Message id = "INSTANCE_SPLIT_NOT_ALLOWED"
		type = "user"
		message = "Split of %1 not allowed." /> 

	<Message id = "NO_INPUT_FEATURE_MAPPING"
		type = "user"
		message = "No input Feature Mapping is found for Feature '%1' of %2." /> 

	<Message id = "MULTIPLE_VALSRCS_SELECTED"
		type = "user"
		message = "Multiple ValueSources are selected for Feature '%1' of %2." /> 

	<Message id = "MULTIPLE_DEFAULT_VALSRC_MAPPINGS"
		type = "user"
		message = "Multiple default ValueSource Mappings are found for Feature '%1' of %2." /> 

	<Message id = "MULTIPLE_OUTPUT_FEATURE_MAPPINGS"
		type = "user"
		message = "Multiple output Feature Mappings are found for Feature '%1' of %2." /> 

	<Message id = "NO_OUTPUT_FEATURE_MAPPING_FOUND"
		type = "user"
		message = "No output Feature Mapping is found for Feature '%1' of %2." /> 

	<Message id = "NO_OUTPUT_FEATURE_MAPPING_EVALUATED"
		type = "user"
		message = "No output Feature Mapping is evaluated for Feature '%1' of %2 as no Element Mapping for the Instance applies." /> 

	<Message id = "NO_SECOND_RESOURCE_SESSION"
		message = "Cannot create a second Resource::Session for a DEIM::Session." /> 

	<Message id = "NO_VALID_INSTANCESTORE"
		message = "No valid InstanceStore was provided for this Session." /> 

	<Message id = "PULL_INTERFACE_NO_SUPPORT"
		type = "user"
		message = "The pull interface does not support function '%1'." /> 

	<Message id = "DEIM_INSTANCE_NOT_FOUND"
		message = "Instance (DEIM) for id '%1' not found." /> 

	<Message id = "RESOURCE_INSTANCE_NOT_FOUND"
		message = "Instance (Resource) for id '%1' not found." /> 

	<Message id = "FEATURE_NOT_FOUND"
		message = "Feature with featureId '%1' not found in StructureElement '%2'." /> 

	<Message id = "DEIM_INSTANCE_ALREADY_EXISTS"
		message = "Instance (DEIM) with id '%1' already exists." /> 

	<Message id = "CANNOT_EVALUATE_PATH_IN_MAPPINGEXPR"
		type = "user"
		message = "Cannot evaluate path '%1' in mapping expression for Instance '%2'." /> 

	<Message id = "CANNOT_EVALUATE_DEPLENVATTRPATH"
		type = "user"
		message = "Cannot evaluate DeplEnvAttrPath '%1' for Instance '%2'." /> 

	<Message id = "DEPLENVATTRPATH_MULTIPLE_INSTANCES"
		type = "user"
		message = "Multiple instances found for DeplEnvAttrPath '%1' for Instance '%2'." /> 

	<Message id = "CANNOT_EVALUATE_DEPLENVVSPATH"
		type = "user"
		message = "Cannot evaluate DeplEnvVSPath '%1' for Instance '%2'." /> 

	<Message id = "DEPLENVVSPATH_MULTIPLE_INSTANCES"
		type = "user"
		message = "Multiple instances found for DeplEnvVSPath '%1' for Instance '%2'." /> 

	<Message id = "MISSING_DMIEXTTYPE_FOR_INSTANCE"
		type = "user"
		message = "Deployment Mapping information for type of %1 is missing." /> 

	<Message id = "CIRCULAR_DEPENDENCY_FOR_EXTERNAL_RESOURCE"
		type = "user"
		message = "Circular dependency for external resource %1." /> 

	<Message id = "NO_ROOT_FOR_INSTANCE"
		type = "user"
		message = "No root for instance %1.." /> 


	<Message id = "LINK_ALREADY_EXIST"
		type = "user"
		message = "An instance of link %1 already exists." /> 


	<Message id = "INSTANCE_MULTIPLE_OWNING_LINKS"
		type = "user"
		message = "Instance '%1' has multiple owning instance links." /> 

	<Message id = "INSTANCELINK_PARENT_ALREADY_SET"
		type = "user"
		message = "Cannot set parent instance of InstanceLink (StructureLink '%1') because it is already set to parent Instance '%2'." /> 

	<Message id = "INSTANCE_NO_OWNINGINSTANCE"
		type = "user"
		message = "Instance '%1' has no owning instance." /> 

	<Message id = "CANNOT_EVALUATE_LINKSTEPS_IN_DEPLENVPATH"
		type = "user"
		message = "Cannot evaluate link steps in DeplEnv path '%1' for Instance '%2' because of unexpected step '%3'." /> 

	<Message id = "VALIDATION_NOT_FOUND"
		message = "Validation or ValidationGroup with id '%1' not found in StructureElement '%2'." /> 

	<Message id = "CANNOT_CONVERT_TUPLE_WITH_INSTREF"
		type = "user"
		message = "Cannot convert Tuple because it has a member value that is an Instance Reference: %1." /> 

	<Message id = "CANNOT_CONVERT_DEINST_TO_MULTIPLE_FPINST"
		type = "user"
		message = "Cannot convert reference to Deployment Environment instance '%1' because more than one Financial Product instances result from it." /> 

	<Message id = "MULTIPLE_VALIDATION_MAPPINGS"
		type = "user"
		message = "Multiple Validation Mappings are found for Validation '%1' of %2." /> 

	<Message id = "NO_VALIDATION_MAPPING_FOUND"
		type = "user"
		message = "No Validation Mapping is found for Validation '%1' of %2." /> 

	<Message id = "NO_VALIDATION_MAPPING_EVALUATED"
		type = "user"
		message = "No Validation Mapping is evaluated for Validation '%1' of %2 as no Element Mapping for the Instance applies." /> 

	<Message id = "UNXPECTED_ARRGATION_DEPENDENCY"
		type = "user"
		message = "Unexpected Aggregation Dependency: Deployment Input Mapping contents path over Aggregation Link." /> 

	<Message id = "NULL_DANGLING"
		type = "user"
	    message = "The '%1' with lid '%2' could not be found." /> 

	<Message id = "INVALIDATION_NOT_ALLOWED"
		type = "user"
		message = "Invalidation not allowed during calculation." /> 

	<Message id = "MULTIPLICITY_MANDATORY"
		type = "user"
		message = "No Instance found on mandatory link '%1' in Instance '%2' with id = '%3'" /> 

	<Message id = "MULTIPLICITY_ZERO"
		type = "user"
		message = "Creating Instance on link '%1' with multiplicity 'zero' is not allowed, in Instance %2 with id = %3" /> 

	<Message id = "MULTIPLICITY_SINGLE"
		type = "user"
		message = "Creating multiple Instances on single link '%1' is not allowed in Instance '%2' with id = '%3'" /> 

	<Message id = "NO_VALUE_FOR_VARIABLE"
		type = "user"
		message = "No value found for variable %1" /> 

	<Message id = "WRONG_TYPE"
		type = "user"
		message = "Unexpected type %1 (%2 expected)." /> 

	<Message id = "CANNOT_CLEAR"
		type = "user"
		message = "Cannot clear calculator while there are still open sessions." /> 

	<Message id = "IS_AGGREGATION_LINK"
		type = "user"
		message = "It is not allowed to get all children of link '%1' in Instance '%2' with id = '%3' because it is used as an aggregated link." /> 

	<Message id = "NO_AGGREGATION_LINK"
		type = "user"
		message = "Cannot get the aggregated children of link '%1' in Instance '%2' with id = '%3' while it is not an aggregated link." /> 

	<Message id = "CANNOT_LINK_TO_AGGRGATION_LINK"
		type = "user"
		message = "Cannot define normal children for link '%1' (and its partition parts) in Instance '%2' with id = '%3' while it is used as aggregated link with id '%4'." /> 

	<Message id = "AGGREGATION_NAME_CONFLICT"
		type = "user"
		message = "Conficting aggregation id '%1' for link '%2' in Instance '%3' with id = '%4'. The link (or one of its partitions) is alread aggregated with id '%5'." /> 

	<Message id = "NONEXISTING_LINK"
		type = "user"
		message = "Cannot add aggregation detail. No link instance defined for link '%1' in Instance '%2' with id = '%3'." /> 

	<Message id = "NOT_A_AGGRGATION_LINK"
		type = "user"
		message = "Cannot add aggregation detail. Link '%1' in Instance '%2' with id = '%3', is not used as an aggregation link." /> 

</MessageModule>
