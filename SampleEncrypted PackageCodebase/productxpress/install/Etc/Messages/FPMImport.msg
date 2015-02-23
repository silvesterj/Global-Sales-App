<?xml version = "1.0" ?>
<MessageModule name = "FPMImport">

	<Message id ="INCOMPATIBLE_EXPORT_VERSION" type='user' 
		message="Incompatible export version %1, it should be at least %2 and not higher than %3." />
	
	<Message id ="INCOMPATIBLE_EXPORT_TYPE"    type='user' 
		message="Incompatible export type, found '%1' expecting '%2'." />

	<Message id="NO_ID_FOR_DELIVERABLE" type='system'
		message="No id attribute for Deliverable element" />

	<Message id="NO_LID_FOR_DELIVERABLE" type='system'
		message="No lid attribute for Deliverable element" />

	<Message id="WRONG_LID" type="user"
		message="Import data is not valid for this Deliverable (logical id's mismatch)" />

	<Message id="WRONG_DELIVERABLE_TYPE" type="user"
		message="Unknown deliverable type: %1" />

	<Message id ="DIFFERENT_DELIVERABLE_TYPE" type='user'
		message ="Cannot import component from deliverable of one type ('%1') in a deliverable of a different type ('%2')." />

	<Message id ="INPUT_ERROR" type="user"
		message ="Input has incompatible format" />

	<Message id = "NOT_IMPLEMENTED" type='system'
		message = "Method '%1' not implemented." />

</MessageModule>
