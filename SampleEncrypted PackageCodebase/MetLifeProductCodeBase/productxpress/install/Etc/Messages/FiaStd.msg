<?xml version = "1.0" ?>
<MessageModule name = "FiaStd">
	<Message id = "FUNCFAILED"          message = "Function failed" />
	<Message id = "REGEXPERROR"         message = "Error Regular Expression '%1': %2" />
	<Message id = "DATATYPE_MISMATCH"   message = "Data type Mismatch, cannot convert %1 to %2" />
	<Message id = "UNINITIALIZED_DATA"  message = "Referencing uninitialized data" />
	<Message id = "GUID_SYNTAX"         message = "Illegal Guid Syntax: %1" />
	<Message id = "NO_HEX_DIGIT"        message = "Illegal hexadecimal digit in '%1'" />
	<Message id = "SHORTNAME_TOO_LONG"  message = "Short name too long: '%1' (max = 21)" />
	<Message id = "SHORTNAME_INV_CHAR"  message = "Illegal character in short name: '%1' (must be alpha numeric)" />
	<Message id = "SHORTNAME_INV_GUID"  message = "Cannot convert Guid to short name: %1" />
	<Message id = "COMPRESSION_ERROR"   message = "Compression error, %1 returned '%2'" />
	<Message id = "DECOMPRESSION_ERROR" message = "Decompression error, %1 returned '%2'" />
	<Message id = "SERIALIZE_ERROR"     message = "Serialization error: %1 failed" />
	<Message id = "DESERIALIZE_ERROR"   message = "Deserialization error: %1 failed" />
	<Message id = "DATE_ERROR"   message = "'%1' is not a valid date." type="user" />
	<Message id = "DATE_FORMAT_ERROR"   message = "'%1' is not a valid date format. Format should be %2." type="user" />
	<Message id = "DATE_FORMAT_STRING_ERROR"   message = "'%1' is not a valid date format string. Only %d, %m and %Y are supported." type="user" />
	<Message id = "FROM_STRING_ERROR"	message = "'%1' is not a valid real value." type="user" />
	<Message id = "POWER_ERROR"			message = "Error in power expression: power(%1, %2)" type="user"/>
	<Message id = "LOG_ERROR"			message = "Error in log expression: log(%1)" type="user" /> 
	<Message id = "LOG10_ERROR"			message = "Error in log10 expression: log10(%1)" type="user" /> 
	<Message id = "ILLEGAL_FORMAT"		message = "Error: Format with maximum number of significant digits applied to RWDecimal" />
	<Message id = "DIV_BY_ZERO"			message = "Division by zero" type="user" />
	<Message id = "OVERFLOW"			message = "Overflow:a part of the calculation result was too big to calculate." type="user" />
	<Message id = "DECIMAL_INVALID"		message = "Invalid: part of the calculation was invalid." type="user" />
	<Message id = "NO_EXP_STRING"		message = "Error in expString '%1'. Format is Exponent (length 3), followed by mantissa, starting with non-zero digit), both signed." />
	<Message id = "YEAR"				message = "&lt;year&gt;" />
	<Message id = "MONTH" 				message = "&lt;month&gt;" />
	<Message id = "DAY"   				message = "&lt;day&gt;" />
	<Message id = "INV_INT_SETTING"     message = "Setting %1: '%2' is not a valid integer value" type="user" /> 
	<Message id = "INV_REAL_SETTING"    message = "Setting %1: '%2' is not a valid real number" type="user" /> 
	<Message id = "INV_BOOL_SETTING"    message = "Setting %1: '%2' is not a valid value (expecting true or false)" type="user" />
	<Message id = "OPEN_INPUT_FILE"	    type="user" message = "Error opening input file: %1" />
	<Message id = "OPEN_OUTPUT_FILE"    type="user" message = "Error opening output file: %1" />
	<Message id = "NOSUB_ALLOWED"       message = "No sub-elements allowed in %1 (at %2)" type="user" />
	<Message id = "XML_PARSER_ERROR"    message = "XML parser error: %1" />
	<Message id = "XML_NOT_ENCODING"	message = "XmlBuffer not open for encoding" />
	<Message id = "XML_NOT_DECODING"	message = "XmlBuffer not open for decoding" />
	<Message id = "XML_REQUIRE_ELEMENT" message = "Missing required XML element &lt;%1/&gt;" />
	<Message id = "XML_REQUIRE_ELEMENT_NS" message = "Missing required XML element &lt;%1/&gt; on namespace URI%2" />
	<Message id = "XML_UNEXPECTED_ELEM" message = "Unexpected XML element &lt;%1&gt; when expecting &lt;/%2&gt;" />
	<Message id = "XML_UNEXPECTED_TEXT" message = "Unexpected text '%1'; when expecting &lt;%2&gt;" />
	<Message id = "XML_NO_DATA"         message = "Unexpected XML element &lt;%1&gt; when expecting data for element &lt;%2&gt;" />
	<Message id = "DATA_TYPE_ERROR"     message = "Invalid data type: %1" />
	<Message id = "DATA_STRUCT_ERROR"   message = "Invalid data structure: %1" />
	<Message id = "INV_INT_DATA"		type="user" message = "Invalid integer data: %1" />
	<Message id = "WRONG_METHOD"		message = "Contained Value type does not support this method." />
	<Message id = "INVOPT"				message = "Invalid option -%1, usage: %2" type="user" />
	<Message id = "OPT_NO_VALUE"		message = "Option -%1 cannot have a value, usage: %2" type="user" />
	<Message id = "TOO_FEW_ARGS"        message = "Too few arguments: usage %1" type="user" />
	<Message id = "TOO_MANY_ARGS"       message = "Too many arguments: usage %1" type="user" />
	<Message id = "INV_INT_ARG"			message = "Option %1: Invalid integer value: %2" />
	<Message id = "SQRT_ERROR"			message = "Error in sqrt: sqrt(%1)" type="user" />
	<Message id = "POWER_OVERFLOW_ERROR"	message = "Overflow error in power expression: power(%1, %2); result is too big" type="user" />
	<Message id = "SYSTEM_ERROR"   type="user" message = "A system error has occurred, there is possibly something wrong with either the installation or the environment. Contact your system administrator if the problem persists." />
	<Message id = "ERROR_COPYING_FILE" type="user" message = "Cannot copy file from '%1' to '%2'." />
	<Message id = "ERROR_CREATING_DIRECTORY" type="user" message = "Couldn't create directory %1." />
	<Message id = "ERROR_REMOVE_DIRECTORY" type="user" message = "Cannot remove directory %1" />
	<Message id = "ERROR_READ_DIRECTORY" type="user" message = "Cannot read directory %1" />
	<Message id = "ERROR_REMOVE_FILE" type="user" message = "Cannot remove file %1" />
	<Message id = "ERROR_GET_MODIFICATION_TIME" type="user" message = "Cannot obtain modification time of file %1" />
	<Message id = "ERROR_CREATING_PROCESS" message = "Cannot execute %1, reason %2" />
	<Message id = "DATE_DMY_ERROR"		message = "Invalid date: day = %1, month = %2, year = %3." type="user" />
	<Message id = "DATE_RESULT_TOO_SMALL"		message = "Error in function %1. Date = %2, increment = %3. Result is before year %4." type="user" />
	<Message id = "DATE_RESULT_TOO_LARGE"		message = "Error in function %1. Date = %2, increment = %3. Result is after year %4." type="user" />
	<Message id = "DATE_ARG_TOO_SMALL"			message = "Error in function %1. Date = %2, increment = %3." type="user" />
	<Message id = "DEADLOCK"			message = "Deadlock detected, please retry." type="user" />
	<Message id = "FILE_NOT_FOUND" type="user" message="No access to file or file does not exist: %1" />
	<Message id = "FILE_READ_ERROR" type="user" message="Couldn't read file: %1." />
	<Message id = "FILE_WRITE_ERROR" type="user" message="Couldn't write file: %1." />
	<Message id = "FILE_OPEN_ERROR" type="user" message="Couldn't open file: %1." />
	<Message id = "TIME_DIFF_OVERFLOW"  message="Difference in dates too big, in %1(%2, %3)" type="user" />
	<Message id = "QUANTITY_SYNTAX"     message = "Illegal Quantity syntax: %1" />
	<Message id = "UNIT_SYNTAX"         message = "Illegal Unit syntax: %1" />
	<Message id = "ADD_QUANT_UNIT_DIFF"         message = "Adding quantities with different units: '%1' and '%2'" />
	<Message id = "ERROR_MOVE"  type="user"       message = "Error moving %1 to %2." />
	<Message id = "DEC_PRECISION_ERROR"			message = "Error: trying to set real precision to %1." type="user"/>
	<Message id = "DEC_ROUND_METHOD_ERROR"		message = "Error: trying to set real round method to '%1'." type="user"/>
	<Message id = "DEC_INIT_ERROR"				message = "Error in initialization of type real." type="user"/>
	<Message id = "DEST_NO_DIR"			message = "Destination '%1'is not a directory." type="user"/>
	<Message id = "LOC_STR_TO_DATE"			message = "Cannot convert string '%1' to Date using format '%2'." type="user"/>
	<Message id = "LOC_STR_TO_TIME"			message = "Cannot convert string '%1' to Time using format '%2'." type="user"/>
	<Message id = "PIPE_NOT_OPEN"			message = "The named pipe is not open"/>
	<Message id = "PIPE_ALREADY_OPEN"			message = "The named pipe is already open"/>
	<Message id = "MALFORMED_URI"			message = "'%1' is not a valid URI." type="user"/>
	<Message id = "URI_INVALID_PCTENCODING"	message = "Invalid percent encoding in URI." type="user"/>
	<Message id = "URI_INVALID_AUTHORITY"	message = "Invalid authority part in URI." type="user"/>
	<Message id = "URI_MALFORMED_IPLITERAL"	message = "Invalid IP literal in URI." type="user"/>
	<Message id = "URI_INVALID_PATH"		message = "Invalid path part in URI." type="user"/>
	<Message id = "URI_INVALID_QUERY"		message = "Invalid query part in URI." type="user"/>
	<Message id = "URI_INVALID_FRAGMENT"	message = "Invalid fragment part in URI." type="user"/>
	<Message id = "BUFFER_WRITE_ERROR" type="user" message="Error writing to buffer %1" />
	<Message id = "ENCRYPTION_FAILED" message = "Encryption failed (%1).&#xA;Details: %2" type = "system"/>
	<Message id = "NO_HANDLER_FOR_READING_EXTFILE" message="Unable to read external file '%1'." type="system"/>
	<Message id = "SYSTEM_LOG_INFO" message="%1, see the system log for more information." type="user"/>
</MessageModule>

