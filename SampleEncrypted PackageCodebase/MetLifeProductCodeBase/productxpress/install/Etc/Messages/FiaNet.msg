<?xml version = "1.0" ?>
<MessageModule name = "FiaNet">
	<Message id = "INV_PROTOCOL"          message = "%1: Unsupported protocol" />
	<Message id = "CONN_NOTINITIALIZED"   message = "Connection not initialized" />
	<Message id = "SEND_FAILED"           message = "Send to %1 failed" />
	<Message id = "INV_RESPONSE"          message = "Invalid response from %1
respones =	%2" />
	<Message id = "HOST_NOT_FOUND"        message = "Host not found: %1" />
	<Message id = "INVALID_HOSTNAME"      message = "Invalid host name: %1" />
	<Message id = "INV_PORT"              message = "Invalid port no: %1" />
	<Message id = "CONNECTION_FAILED"     message = "Attempt to connect to port %2 at host %1 failed%3" />
	<Message id = "WINSOCK_ERROR"         message = "WinSock error: %1 failed (%2)" />
	<Message id = "WINSOCK_BIND_ERROR"    message = "WinSock error: bind to port %1 failed (%2)" /> 
	<Message id = "WINSOCK_LISTEN_ERROR"  message = "WinSock error: listen on port %1 failed (%2)" /> 
	<Message id = "WINSOCK_CONNECT_ERROR" message = "WinSock error: connect to %1 failed (%2)" />
	<Message id = "BSDSOCK_ERROR"         message = "BSDSock error: %1 failed (%2)" />
	<Message id = "BSDSOCK_BIND_ERROR"    message = "BSDSock error: bind to port %1 failed (%2)" /> 
	<Message id = "BSDSOCK_LISTEN_ERROR"  message = "BSDSock error: listen on port %1 failed (%2)" /> 
	<Message id = "BSDSOCK_CONNECT_ERROR" message = "BSDSock error: connect to %1 port %2 failed (%3)" />
	<Message id = "UNSUPPORTED_PROTOCOL"  message = "Unsupported protocol: %1" />
	<Message id = "INVALID_URL_SYNTAX"    message = "Invalid URL syntax: %1" />
	<Message id = "WINSOCK_MAX_REACHED"   message = "Maximum number of socket connections reached" />
	<Message id = "SSL_ERROR"             message = "SSL error in function (%1), Details: %2" type = "system"/>
	<Message id = "NO_CERT_FILE"          message = "No certificate file configured" type ="user"/>
	<Message id = "NO_KEY_FILE"           message = "No key file configured" type ="user"/>
	<Message id = "CREATE_FILE_ERROR"     message = "Could not create file: %1" type ="user"/>
	<Message id = "CERT_GEN_ERROR"        message = "Error generating certificate" type ="system"/>
	<Message id = "KEY_GEN_ERROR"         message = "Error generating private key" type ="system"/>
	<Message id = "NO_LOCAL_ADDRESS"      message = "Local address could not be obtained" type ="system"/>
	<Message id = "INVALID_ADDRESS_SYNTAX" message = "Invalid address syntax: %1" />
	<Message id = "BAD_SOCKET"             message = "Bad socket handle." />
	<Message id = "REMOTE_EXCEPTION_THROWN" message = "Remote exception thrown." />
	<Message id = "READ_FAILED"           message = "Recieve from %1 failed" />
</MessageModule>

