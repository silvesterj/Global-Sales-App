<?xml version = "1.0" encoding="utf8" ?>
<!--
	vim:syntax=xml sw=4 ts=4
-->
<MessageModule name = "Resource">
	<Message id = "NO_SUCH_FEATURE_ID"
		   type = "user"
		message = "Instance %1 of type '%2' does not have feature with id %3." />

	<Message id = "NO_SUCH_FEATURE_INDEX"
		   type = "user"
		message = "Instance %1 of type '%2' does not have a feature at index %3." />

	<Message id = "NO_SUCH_LINK_INDEX"
		   type = "user"
		message = "Instance %1 of type '%2' does not have a link at index %3." />

	<Message id = "FEATURE_UNKNOWN"
		message = "internal error: feature not yet known." />

	<Message id = "INVALID_FEATUREID"
		message = "internal error: featureID &lt;%1&gt; not valid for type '%2'." />

	<Message id = "NO_VALUE_SOURCE"
		   type = "user"
		message = "No valid value source found for feature %1 of type %2." />

	<Message id = "INSTANCE_REFUSED"
		   type = "user"
		message = "Cannot have child &lt;%1&gt; (%2) on link %5::%3 of &lt;%4&gt;." />

	<Message id = "INSTANCE_REFUSED__ALREADY_HAS_OTHER_PARENT"
		   type = "user"
		message = "The instance is already owned by another parent." />

	<Message id = "INSTANCE_REFUSED__TYPE_MISMATCH"
		   type = "user"
		message = "The link only accepts '%1' instances." />

	<Message id = "INSTANCE_REFUSED__NON_INSTANTIABLE_LINK"
		   type = "user"
		message = "Cannot add instances to this type of link." />

	<Message id = "INSTANCE_REFUSED__ALREADY_INSTANTIATED"
		   type = "user"
		message = "This link can have at most one child instance, which currently is &lt;%1&gt;" />

	<Message id = "INSTANCE_REFUSED__SUBTYPES_NOT_ALLOWED"
		   type = "user"
		message = "The link does not allow instances of subtypes of '%1'." />

	<Message id = "INSTANCE_REFUSED__ALREADY_ON_OTHER_LINK"
		   type = "user"
		message = "This instance was already instantiated on another link: %1." />

	<Message id = "INSTANCE_REFUSED__ON_PARTITION"
		   type = "user"
		message = "Instance matched partitioning link %1." />

	<Message id = "ABSOLUTE_PATH"
		   type = "user"
		message = "NOT SUPPORTED: absolute instance path." />

	<Message id = "VARIABLE_IN_PATH"
		   type = "user"
		message = "NOT SUPPORTED: variable in instance path." />

	<Message id = "INSTANCE_INSTANCE_PATH"
		   type = "user"
		message = "NOT SUPPORTED: transition from instance to child instances in instance path." />

	<Message id = "NO_VALUE_WITH_ARGUMENTS"
		message = "internal error: instance %1 does not support values with an argument list." />

	<Message id = "ERROR_IN_LIFECYCLEDATE"
		   type = "user"
		message = "Could not determine value for lifecycle attribute '%1' in %2." />

	<Message id = "NO_RESOURCEROOT_CANDIDATE"
		   type = "user"
		message = "No parent given for instance &lt;%1&gt;, but '%2' is not a resource root candidate." />
	
	<Message id = "NO_VALUE_FOR_VARIABLE"
		   type = "user"
		message = "No value for variable '%1' in resource '%2' (%3)." />
	
	<Message id = "NO_CURRENTTIME"
		   type = "user"
		message = "The use of built-in function date() without parameter is not supported in a filtered path expression." />
	

</MessageModule>
