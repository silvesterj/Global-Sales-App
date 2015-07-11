<?xml version = "1.0" ?>
<MessageModule name = "FPNav">
	<Message id = "PATH_NOINIT"
		message = "Path not yet initialized." />

	<Message id = "EMPTY_PATH"
		   type = "user"
		message = "Cannot parse empty string." />

	<Message id = "PATH_SYNTAX"
		   type = "user"
		message = "Syntax error in path at position %1:&#xA;%2&#xA;%3" />

	<Message id = "PATH_ERRORS"
		   type = "user"
		message = "Errors in path '%1':%2" />
		
	<Message id = "ABSOLUTE_WITH_FILTER"
		   type = "user"
		message = "A path with a filter expression cannot be made absolute." />

	<Message id = "LEGACY_NO_RESTRICTION"
		   type = "user"
		message = "Step without restriction found in old format mapping path '%1'." />
		
	<Message id = "LEGACY_NO_ATTR_ID"
		   type = "user"
		message = "Attribute without id restriction in old format mapping path '%1'." />

	<Message id = "LEGACY_NO_TYPE_ID"
		   type = "user"
		message = "Type step without id restriction in old mapping path '%1'." />
		
	<Message id = "LEGACY_UNEXPECTED_INSTANCESTEP"
		   type = "user"
		message = "Instance step cannot be first step in old format mapping path '%1'." />
		
</MessageModule>
