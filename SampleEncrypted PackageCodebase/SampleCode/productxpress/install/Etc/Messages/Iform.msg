<?xml version = "1.0" encoding="ISO-8859-1" ?>
<MessageModule name = "IForm">

	<Message id = "NO_ATTR"
		message = "Expecting mandatory attribute '%1' in node 'iForm:%2'" />

	<Message id = "VAL_MISMATCH_FOR_ATTR"
		message = "Value '%1' for attribute '%2' is illegal." />

	<Message id = "FORMAT_SYNERR_DEC_POINT"
		message = "Decimal point in position '%1' is allowed only at start, after format string or after prefix string" />

	<Message id = "FORMAT_SYNERR"
		message = "Character '%1' in position '%2' is allowed only at start, after a prefix string or as part of a format string. Did you mean '\\%3' ?" />

	<Message id = "GRAPHIC_ELEM_RELATIVE_SIZE"
		message = "Both height and width of image are defined as relative to each other. At least one must have a non-relative value" />

	<Message id = "TEMPLATE_STRUCTURE_SUBNODE_LOCATION_FAULT"
		message = "Node '%1' can only be created as a child of node '%2'" />

	<Message id = "TAG_NOT_SUPPORTED"
		message = "Node name '%1' is not defined for iForm language processor" />

	<Message id = "NO_SCRAP_FOUND"
		message = "No scrap named '%1' found on clipboard "/>

	<Message id = "ERR_IN_NODE_START"
		message = "Error in starting tag '%1'."/>

	<Message id = "ERR_IN_NODE_END"
		message = "Error while ending tag '%2'."/>

	<Message id = "NO_TABLE_WAS_SET"
		message = "Excpected the current context to be a Table."/>

	<Message id = "MISSING_AXIS_REF_IN_STRUCTURED_MODE"
		message = "Missing XML Attribute '%1' in node '%2'. Must have fixed x and y dimensions under 'Structured' mode."/>

	<Message id = "INVALID_AXIS_REF_IN_STRUCTURED_MODE"
		message = "Reference defined by '%1' is not valid axis reference, or axis reference cannot be produced."/>

	<Message id = "NO_Y_AXIS_REF_IN_STRUCTURED_MODE"
		message = "Reference defined by '%1' is not valid axis reference, or table has one dimension. Using flat publishing mode for table."/>
	
	<Message id = "FN_TOO_MANY_ARGS"
		message = "Too many arguments for path function %1 specified."/>
	
	<Message id = "FN_REFLIST_EXPECTED"
		message = "Argument #%2 for path function %1 should be a reference or reference list."/>
	
	<!-- Spellings for values -->
	
	<Message id = "TRUE"				message = "True" />
	<Message id = "FALSE"				message = "False" />
	<Message id = "TIME_DEPENDENT"		message = "Time dependent" />
	<Message id = "TIME_INDEPENDENT"	message = "Time independent" />
	<Message id = "ZERO_LINK"			message = "Zero" />
	<Message id = "SINGLE_LINK"			message = "Single" />
	<Message id = "MULTI_LINK"			message = "Multiple" />
	<Message id = "MAPPED_ON_EXTERNAL"	message = "Mapped on external function" />
	<Message id = "NOT_MAPPED_ON_EXTERNAL"	message = "" />
	<Message id = "OWNED"				message = "Owned" />
	<Message id = "NOT_OWNED"			message = "Not Owned" />
	<Message id = "MANDATORY"			message = "Mandatory" />
	<Message id = "NOT_MANDATORY"		message = "Not Mandatory" />
	<Message id = "TABLE_ID"			message = "Table Id" /> 
	<Message id = "VALUE"				message = "Value" /> 
	<Message id = "EXTERNAL_TABLE"		message = "External Table" /> 


	<!-- class names: -->
	<Message id = "TABLE_PROPERTIES"	message = "TableProperties" />
	

</MessageModule>
