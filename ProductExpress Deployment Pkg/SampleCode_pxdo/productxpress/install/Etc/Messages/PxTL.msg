<?xml version = "1.0" encoding="ISO-8859-1" ?>
<MessageModule name = "PxTL">
  <Message id = "UNKNOWN_PXTL_ELEMENT"		type="user"
      message = "Unknown PxTL element &lt;%1&gt;."
  />
  <Message id = "MISSING_ATTRIBUTE"	type="user"
      message = "A &lt;%1&gt; element needs a '%2' attribute."
  />

  <Message id = "TEMPLATE_NOT_FOUND"		type="user"
      message = "Could not find template named '%1'."
  />

  <Message id = "PARAMETER_SUPPLIED_TWICE"	type="user"
      message = "Parameter '%1' was already given a value."
  />

  <Message id = "LOADING_REQUIRED_MODULE"	type="user"
	  message = "Errors while loading required module at %1"
  />
  
  <Message id = "INCORRECT_DOCUMENT_ROOT"	type="user"
	  message = "A required module must start with the &lt;%1&gt; element."
  />
  
  <Message id = "MIXED_CONTENT_IN_TEXT"		type="user"
	  message = "A &lt;%1&gt; element should only contain text.&#x0A;Detected in %2"
  />
  
</MessageModule>
