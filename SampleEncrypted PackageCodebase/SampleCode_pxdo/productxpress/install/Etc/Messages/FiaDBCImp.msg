<?xml version = "1.0" ?>
<MessageModule name = "FiaDBCImp">

	<!-- Template transformation -->
	<Message id = "NULL_NOT_ALLOWED"
		message = "Null %1 not allowed."/>
	<Message id = "MISSING_TRANSFORM_TEMPLATE"
		message = "No template for transformation."/>
	<Message id = "UNKNOWN_TEMPLATE_ELEMENT"
		message = "Unknown template element: &lt;%1&gt;"/>
	<Message id = "OTHER_SCOPE_EXPECTED"
		message = "Must be in %1 scope."/>
	<Message id = "ILLEGAL_ELEMENT_NESTING"
		message = "Illegal nesting of &lt;%1&gt;"/>
	<Message id = "UNEXPECTED_IF_CHILD"
		message = "Unexpected child element of &lt;if&gt; element: &lt;%1&gt;"/>
	<Message id = "WRONG_ATTRIBUTE_SCOPE"
		message = "Inappropriate scope '%1' for attribute '%2'"/>
	<Message id = "ILLEGAL_TEMPLATE_TAG"
		message = "Invalid document element &lt;%1&gt; in template '%2'; expected: &lt;%3&gt;" />

	<!-- Insert query -->
	<Message id = "INSERT_KEY_VALUE_NOT_FIXED"
		message = "Cannot find a fixed insert value for the key field '%1'"/>
	<Message id = "SOURCE_FIELD_ALREADY_MAPPED"
		message = "Cannot map insert field '%1' to source select field '%2', because '%3' is already mapped to it."/>
</MessageModule>

