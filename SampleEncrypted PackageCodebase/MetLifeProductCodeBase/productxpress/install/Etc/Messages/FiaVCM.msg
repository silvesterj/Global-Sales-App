<?xml version="1.0" encoding="iso-8859-1"?>
<MessageModule name="FiaVCM">
	<!-- DB Helper messages -->
	<Message id="SCHEMA_NOTFOUND" message="Schema for %1 does not exist."/>
	<Message id="TABLE_NOTFOUND" message="Table %1 does not exist."/>
	<Message id="MAPPING_NOTFOUND" message="No mapping defined for attribute m_%1."/>
	<Message id="UNEXPECTED_CLASSNAME" message="Unexpected class name for ComponentVersion: '%1'."/>
	<Message id="WRITELOCKED" message="%1 is edited by another user (%2)." type="user"/>
	<Message id="READLOCKED" message="%1 is locked for read, and can therefore not be modified." type="user"/>
	<Message id="PENDINGDELETE" message="User '%1' has deleted %2, but did not yet commit the change." type="user"/>
	<Message id="HAS_SUCCESSOR" message="Version already has a successor." type="user"/>
	<Message id="HAS_SUCCESSOR_FOR_BRANCH" message="Version already has a successor for branch type %1." type="user"/>
	<Message id="NO_VERSION_FOR_LID" message="No version found with element id '%1'."/>
	<Message id="NOT_IN_YOUR_WS" message="%1 is not in your working set." type="user" />
	<Message id="DEEPLOCKED" message="%1 is deep locked." type="user"/>
	<Message id="DEEPLOCK_FAILED" message="Deep locking not possible while there is a dependency with %1 that is in use by another user." type="user"/>
	<Message id="DEEPLOCK_FAILED_MOVE" message="Deep locking not possible while %1 is moved or being moved by another user." type="user"/>
	<Message id="PENDING_EDITS" message="%1 has pending edits." type="user"/>
	<Message id="PENDING_MOVE" message="%1 has pending moves." type="user"/>
	<Message id="CTX_USES_CHECKEDOUT_CTX" message="%1 uses checked out %2." type="user"/>
	<Message id="CTX_USED_BY_ANOTHER_CTX" message="%1 is used by %2." type="user"/>
	<Message id="CTX_NOT_CHECKEDOUT" message="%1 is not checked out." type="user"/>
	<Message id="ALREADY_CHECKEDOUT" message="%1 is already checked out." type="user"/>
	<Message id="COMP_NOT_WRITABLE" message="%1 is not writable." type="user"/>
	<Message id="IS_EDITED" message="%1 is being edited." type="user" />
	<Message id="WRONG_STATUS" message="Not allowed for version with current status."/>
	<Message id="CANNOT_USE_SELF" message="%1 cannot use another version of itself." type="user"/>
	<Message id="CANNOT_UNUSE_SELF" message="%1 cannot stop using itself." type="user"/>
	<Message id="CANNOT_CREATE_CIRC_DEP" message="It is not allowed to create circular dependencies." type="user"/>
	<Message id="USAGE_CONFLICT" message="Not allowed because of version conflicts." type="user"/>
	<Message id="USAGE_CONFLICT_NOT_ALLOWED" message="Use of conflicting %1 is not allowed while there are pending edits with lock." type="user"/>
	<Message id="VERSION_NUMBER_SYNTAX" message="'%1' is not a valid version number."/>
	<Message id="VERSION_NUMBER_SYNTAX_BRANCH" message="'%1' is not a valid branch part of a version number."/>
	<Message id="COMP_NOT_IN_CONTAINER" message="Component is not located in container with id '%1'."/>
	<Message id="FOLDER_NOT_EMPTY" message="%1 is not empty." type="user"/>
	<Message id="DELETE_CONTAINER_HAS_DEPENDENCIES" message="%1 has dependencies to other components (pending moves), release before delete" type="user"/>
	<Message id="CANNOT_COPY_FOLDER" message="It is not possible to copy a folder."/>
	<Message id="CANNOT_RESTORE_COMPONENT" message="It is not possible to restore a %1."/>
	<Message id="CANNOT_COPY_MERGE_FOLDER" message="It is not possible to copy merge a folder." type="user"/>
	<Message id="TARGET_IS_SUBCONTAINER" message="The target %1 is a hierarchical contained by %2." type="user"/>
	<Message id="REEDIT_NOT_GRANTED" message="No reeditable version available." type="user"/>
	<Message id="MOVING_COMPONENT_VERSION_CONFLICT" message="Moving %1 would cause a component version conflict in %2." type="user"/>
	<Message id="VCM_NOT_AVAILABLE" message="Version and configuration functions are not available in this implementation."/>
	<Message id="COMP_DANGLING" message="One or more of the components in %1 are dangling." type="user"/>
	<Message id="NO_READ_PERM_CTX_STATUS_NOT_OK" message="No permission to read %1. The status of its %2 is not 'OK' (it has version conflicts or is incomplete)." type="user"/>
	<Message id="BRANCH_NAME_EXISTS" message="Branch name %1 already exists." type="user"/>
	<Message id="BRANCH_NAME_INVALID" message="Branch name %1 contains invalid characters '.', '/', '\' or starts with a numeric character." type="user"/>
	<Message id="BRANCH_MAX_REACHED" message="Not allowed to create more than 40 branch levels" type="user"/>
	<Message id="MOVE_TO_SAME_CONTEXT" message="Not allowed to move to other version of '%1'." type="user"/>
	<Message id="CHECKOUT_NON_OWNED_BRANCH" message="Cannot create branch of type '%1' while it is not owned by this repository." type="user"/>
	<Message id="STRONG_COMPONENT_NOT_PRIVATE" message="%1 is not being edited." type="user"/>
	<Message id="CANNOT_RESTORE_NON_ANCESTER_VERSION" message="It is not possible to restore a version that is no ancester of the current version." type="user"/>
	<Message id="USE_FAILS_FOR_SAME_ELEMENT_TWICE_IN_SELECTION" message="Setting dependency failed, while  a version of %1 is present in %2 and %3." type="user"/>
	<Message id="CANNOT_EDIT_TAKEN_OUT_COMPONENT" message="It is not possible to edit a taken out component %1." type="user"/>
	<Message id="CANNOT_REVERT_TAKEN_OUT_COMPONENT" message="It is not possible to revert a taken out component %1." type="user"/>
	<Message id="CANNOT_COMMIT_TAKEN_OUT_COMPONENT" message="It is not possible to commit a taken out component %1." type="user"/>
	<Message id="CANNOT_DELETE_TAKEN_OUT_COMPONENT" message="It is not possible to delete a taken out component %1." type="user"/>
	<Message id="CANNOT_MOVE_TAKEN_OUT_COMPONENT" message="It is not possible to move from a taken out component to another deliverable." type="user"/>
	<Message id="CANNOT_EDIT_COMPONENT" message="it is not allowed to edit %1." type="user"/>
	<Message id="CANNOT_EDIT_MOVED_COMPONENT" message="it is not allowed to edit %1, while it is moved by another user." type="user"/>
	<Message id="CANNOT_MERGE_BETWEEN_DIFF_ELEM" message="Cannot merge between versions of different elements." type="user"/>
	<Message id="CANNOT_MERGE_TO_SELF" message="Merge not possible. To and from version are the same." type="user"/>
	<Message id="CANNOT_MERGE_MOVED_COMPONENT" message="it is not allowed to merge %1, while it is moved by another user." type="user"/>
	<Message id="CANNOT_MERGE_FROM_CHECKEDOUT_CTX" message="It is not allowed to merge from a checked out deliverable." type="user"/>
	<Message id="CANNOT_MERGE_EDITED_COMPONENT" message="It is not allowed to merge an edited component %1." type="user"/>
	<Message id="CANNOT_MERGE_CONTAINER_DELETED" message="It is not possible to merge %1 as the containing component %2 has been deleted." type="user"/>
	<Message id="CANNOT_MERGE_TO_DIFFERENT_CTX" message="It is not possible to merge between different deliverables." type="user"/>
	<Message id="CANNOT_RESTORE_COMPONENT_HAS_SUCCESSOR" message="It is not allowed to restore a component that already has a successor version." type="user"/>
	<Message id="CANNOT_MARK_COMPONENT_AS_DELETED" message="Cannot mark component %1 as deleted in the source repository!" type="user"/>
	<Message id="CANNOT_MARK_COMPONENT_AS_MOVED" message="Cannot mark component %1 as moved in the source repository!" type="user"/>
	<Message id="CTX_DOES_NOT_EXIST_IN_SOURCE" message="Deliverable does not exist anymore in the source repository!" type="user" />
	<Message id="COMPONENT_CHANGED_IN_SOURCE" message="Component %1 has been changed in the source repository!" type="user" />
	<Message id="CANNOT_DELETE_CONTAINER_NOT_EDITED_IN_SOURCE" message="Cannot delete %1 as its container is not marked as edited in the source repository!" type="user" />
	<Message id="CANNOT_MOVE_CONTAINER_NOT_EDITED_IN_SOURCE" message="Cannot move %1 as its container is not marked as edited in the source repository!" type="user" />
	<Message id="CANNOT_MOVE_CONTAINERS_NOT_BOTH_GLOBAL_LOCAL_EDIT" message="Cannot move %1 as the containers between which it is moved are not both edited locally/globally!" type="user" />
	<Message id="DELETED" message="User %1 has deleted %2." type="user"/>
	<Message id="CANNOT_COMMIT_WITH_CONFLICT" message="It is not possible to commit component %1, as it is conflicting with the source repository." type="user"/>
	<Message id="CANNOT_COMMIT_LOCAL_EDIT" message="It is not possible to commit component %1, as it is only edited locally in the replicated deliverable." type="user"/>
	<Message id="CANNOT_MOVE_BETWEEN_REPLICATED_ANF_NON_REPLICTED" message="It's not possible to move components between replicated and non replicated deliverables, and vice versa." type="user"/>
	<Message id="CANNOT_CHECKOUT_REPLICATED_DELIVERABLE" message="It's not possible to check-out replicated %1." type="user"/>
	<Message id="NO_CONNECTION_WITH_SOURCE_REPOSITORY" message="Cannot connect to source repository." type="user"/>
	<Message id="CANNOT_MERGE_PENDING_DELETED_COMPONENT" message="It is not allowed to merge %1, while it is deleted and deletion is not yet released." type="user"/>
	<Message id="COMPONENT_NOT_PRESENT_IN_SOURCE" message="The replicated component is no longer present in the source repository." type="user"/> 
	<Message id="CONTEXT_NOT_PRESENT_IN_SOURCE" message="The replicated deliverable is no longer present in the source repository." type="user"/> 
	<Message id="COMPONENT_DELETED_IN_SOURCE" message="The component %1 has been deleted in the source repository." type="user"/> 
	<Message id="CHECK_IN_FAILED_REPLICATED_DELIVERABLE_NOT_UPTO_DATE" message="%1 was checked-in on the source repository only, because the replication is not up-to-date" type="user"/>
	<Message id="CANNOT_REEDIT_REPLICATED" message="Cannot be reedited when there is no connection with source repository." type="user"/>
	<Message id="CANNOT_UPDATE_MOVEDIN_CONFLICT" message="Cannot update %1 as %2, that is moved into this container, is still present in %3." type="user"/>
	<Message id="NO_LOCAL_PRIVATE_CONFLICT_NO_PROMOTE" message="%1 can only be promoted to become the private successor of the last version in the source repository, if it has the local private conflict status." type="user"/>
	<Message id="CANNOT_PROMOTE_TO_CHECKEDOUT_WRONG_STATUS" message="Cannot promote %1 to a successor deliverable version: the status of the component or the deliverable prevents it." type="user"/>
	<Message id="CANNOT_UPDATE_CHECKEDIN_SOURCE" message="Cannot update %1, as its deliverable has been checked in in the source repository." type="user"/>
	<Message id="CANNOT_COMMIT_USING_NON_REPLICATED_COMP" message="It is not possible to release %1: it is using %2 in %3 that has to be transferred to the source repository first." type="user"/>
	<Message id="CANNOT_COMMIT_MIXED_ADDED_EXISTING_IN_REPLICA" message="Cannot release %1, as its dependent components are a mix of newly added components in replica and already existing components in source\n Release container of the newly added component(s) first." type="user"/>
	<Message id="CANNOT_LOCK_UNLOCK_ADDED_IN_SOURCE" message="Cannot lock or unlock newly added %1 in the source repository, as it does not exist there yet." type="user"/>
</MessageModule>
