<?xml version="1.0" encoding="iso-8859-1"?>
<MessageModule name="CalcPush">

  <Message id="NO_INSTANCE_WITH_ID"
	  message="Reference to instance with unkown Id '%1' found in calculator input." 
		 type="user" />

  <Message id="NOT_SAME_TYPE"
	  message="Reference to instance with Id '%1' in calculator input has type '%2', expecting '%3'." 
		 type="user" />

  <Message id="CALCULATOR_SUSPENDED"    
	  message="Calculator is down for maintenance" 
	     type="user" />

  <Message id="UNKNOWN_FEATURE_REF"
	  message="Referenced feature '%1' does not exist in instance with Id '%2' (%3)." 
		 type="user" />

  <Message id="TIMEDEP_CONFLICT"    
	  message="Time independent feature '%1'recieving time dependent value." 
	     type="user" />

  <Message id="UNKNOWN_AGGRID"    
	  message="'%1' is not the Id of a open Aggregation in this calculator." 
	     type="user" />

  <Message id="UNEXPECTED_AGGREGATION"
	  message="Unexpected aggregated Link(s) found in input."
	  type="user" />

  <Message id="NO_AGGREGATION"
	  message="No aggregated Link found in aggregation-master input."
	  type="user" />

  <Message id="AGGR_VALIDATIONS_NOT_ALLOWED"
	  message="Validations are not supported while aggregating."
	  type="user" />

</MessageModule>
