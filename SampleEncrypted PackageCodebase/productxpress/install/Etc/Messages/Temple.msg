<?xml version = "1.0" encoding="ISO-8859-1" ?>
<MessageModule name = "Temple">
	<Message
		id      = "TEMPLATE_PARSE_ERROR"
		message = "An error occurred while parsing template '%1'."
	/>

	<!--
		%1 = sourceName
		%2 = line
		%3 = column
		%4 = errorCode
		%5 = errorMessage
	-->
	<Message
		id		= "TEMPLATE_SYNTAX_ERROR"
		message = "%1(%2): error %4: %5."
	/>

	<Message
		id		= "INCLUDE_NEEDS_HREF"
		message	= "no href specified for XInclude[%2] in &lt;%1&gt;."
	/>

	<Message
		id		= "TEMPLATE_INCLUDE_ERROR"
		message	= "Error while processing includes from template '%1'."
	/>

	<Message
		id		= "RECURSIVE_INCLUSION"
		message	= "Recursive nesting of templates detected: template '%1'."
	/>

	<Message
		id		= "CANNOT_HANDLE_URI"
		message	= "Sorry, don't know how to resolve URI &lt;%1&gt;."
	/>

	<Message
		id		= "ATTR_TYPE_MISMATCH"
		message	= "The value (%2) for attribute %1 does not match its type (%3)."
	/>

	<Message
		id		= "TEXT_TYPE_MISMATCH"
		message	= "The literal text (%2) does not match expected type (%3)."
	/>

	<Message
		id		= "DATA_TYPE_GUID"
		message	= "Encountered an ambiguous data type. guid can be a table-id, an identity or a guid."
	/>

</MessageModule>
