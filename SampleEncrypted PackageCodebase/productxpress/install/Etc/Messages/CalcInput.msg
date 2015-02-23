<?xml version="1.0" encoding="iso-8859-1"?>
<MessageModule name="CalcInput">
  <Message id="CALCINPUT_ERROR"
	  message="Error in calculator input: %1" 
		 type="user" />

  <Message id="TAG_MISSING"
	  message="Element missing in calculator input. Expecting: &lt;%1&gt;, found: &lt;%2&gt;" 
		 type="user" />

  <Message id="ATTR_MISSING"
	  message="Required attribute '%1' missing for element '%2' in calculator input." 
		 type="user" />

  <Message id="SYNTAX_ERROR"
	  message="Syntax error in calculator input near &lt;%1&gt;" 
		 type="user" />

  <Message id="DEPLREF_NONAME"
	  message="Element &lt;DeplR&gt; should contain either dep-name or dep-lid attribute" 
		 type="user" />

  <Message id="DEPLREF_NOVERS"
	  message="Element &lt;DeplR&gt; with ver-sel='specific' should contain ver-nr attribute" 
		 type="user" />

  <Message id="DEPLREF_NODATE"
	  message="Element &lt;DeplR&gt; with ver-sel='active on date' should contain act-date attribute" 
		 type="user" />

  <Message id="DEPLREF_INVALID_VERSEL"
	  message="Element &lt;DeplR&gt;: '%1' is not a valid value for ver-sel attribute. Expected: 'specific' 'last' or 'active on date'."
		 type="user" />

  <Message id="AMBIGUOUS_TYPE"
	  message="Element &lt;%1&gt;: '%1' is an ambiguous type."
		 type="user" />

  <Message id="UNKNOWN_TABLE"
	  message="'%1' is not a valid table for '%2'"
		 type="user" />

  <Message id="TIME_MISSING"
	  message="No time specified for time dependent value."
		 type="user" />
	 
  <Message id="UNIT_MISSING"
	  message="No unit specified for quantity value."
		 type="user" />

  <Message id="NO_SUCH_LINK"
	  message="No link with name '%1' in Structure Element '%2'."
		 type="user" />

  <Message id="NO_SUCH_FEATURE"
	  message="No feature with name '%1' in Structure Element '%2'."
		 type="user" />

  <Message id="NO_SUCH_VALUE_SOURCE"
	  message="Feature '%1' in Structure Element '%2' has no value source named '%3'."
		 type="user" />

  <Message id="UNEXPECTED_ELEMENT"
	  message="Unexpected element &lt;%2&gt; in calculator input, expecting %1."
		 type="user" />
	 
  <Message id="INVALID_LINKTYPE"
	  message="Cannot create instances on navigation-link '%1' in Structure Element '%2'."
		 type="user" />
	 
  <Message id="DUPLICATE_ID"
	  message="Identifier '%1' used in the calculator input is not unique."
		 type="user" />

  <Message id="UNKNOWN_ID"
	  message="Reference to undefined id '%1' in calculator input."
		 type="user" />
	 
  <Message id="INVALID_STEPUNIT"
	  message="Invalid attribute value unit='%1' in StepSize element."
		 type="user" />

  <Message id="NO_SUCH_ROOT"
	  message="Instance type '%1' used in calculator input, is unknown or not instantiable."
		 type="user" />

  <Message id="UNKNOWN_SUBTYPE"
	  message="Type '%1', used in calculator input, cannot be used in link '%2' because it is not an instantiable type or not a sub-type of '%3'."
		 type="user" />
	 
  <Message id="MULTIPLE_FEATURES_IN_PRECALC"
	  message="Multiple features specified in a precalculation in the CalculationDates section of calculator input."
		 type="user" />

  <Message id="JOIN_SYNTAX_ERROR"
	  message="Syntax error in function parameter of type Join, expecting &lt;Set1&gt; &lt;Set2&gt; and &lt;Join&gt; elements."
		 type="user" />

  <Message id="JOIN_REFERENCE_SYNTAX_ERROR"
	  message="Error in &lt;Join&gt; element, attributes set1-element-ref and set2-element-ref are required."
		 type="user" />

  <Message id="INVALID_JOINSET_REF"
	  message="Attribute set%1-element-ref in calculator input, refers to undefined Set Element '%2'"
		 type="user" />

  <Message id="UNKNOWN_TUPLE_MEMBER"
	  message="'%1' is not a valid member of tuple '%2'."
		 type="user" />

  <Message id="NO_SUCH_VARIABLE"
	  message="No variable with name '%1'."
		 type="user" />
       
  <Message id="NO_SUCH_FUNCTION"
	  message="No function with name '%1'."
		 type="user" />

  <Message id="NO_SUCH_ARGUMENT"
	  message="No function argument with name '%1'."
		 type="user" />
	 
  <Message id="INVALID_RANGE"
	  message="Invalid range '%1' '%2'."
		 type="user" />
	 
  <Message id="INVALID_ATTRIBUTE_VALUE"
	  message="Invalid attribute value '%1' for attribute '%2'."
		 type="user" />
	 
  <Message id="UNSUPPORTED_PXTYPE"
	  message="Unsupported PxType %1."
		 type="user" />

  <Message id="DATE_RANDE_ERROR"
	  message="from &lt;From&gt; &lt;To&gt; and &lt;NumberOfSteps&gt; excactly two should be specified for each range."
		 type="user" />

  <Message id="DATE_STEP_SIZEMISSING"
	  message="&lt;StepSize&gt; required for range."
		 type="user" />


  <Message id="VALSRC_IN_SCENARIO"
	  message ="Value source selections not allowed in scenario's"
	  type="user" />

  <Message id="MULTIPLE_VALUES_NOT_ALLOWED"
	  message ="Multiple values specified for scalar value."
	  type="user" />
 
  <Message id="ERROR_PARSING_OPEN_TAG"
	  message ="Error parsing &lt;%1&gt;"
	  type="user" />

  <Message id="ERROR_PARSING_CLOSE_TAG"
	  message ="Error parsing &lt;/%1&gt;"
	  type="user" />

 
  <Message id="UNKNOWN_PARAMETER"
	  message ="Unkonwn parameter: '%1'"
	  type="user" />

  <Message id="NO_TYPE_FOR_PARAMETER"
	  message ="Type of parameter: '%1' is unknown"
	  type="user" />

  <Message id="VALUE_DOMAIN_VIOLATION"
	  message ="Value '%1' (in %2) is not within value domain '%3'"
	  type="user" />

   
  <Message id="MISSING_REF_IN_REFERENCE"
	  message ="Missing required attribute 'ref' in element 'Reference' in for %1"
	  type="user" />

  <Message id="AGGR_INVALID"
	  message ="Invalid use of aggregate attribute in link %1: Only valid in CalculationData section"
	  type="user" />

  <Message id="AGGRID_MISSING"
	  message ="Aggregation link Id missing for aggregated link %1"
	  type="user" />

  <Message id="DUPLICATE_AGGRID"
	  message ="Aggregation link Id '%1' is not unique"
	  type="user" />

  <Message id="UNKNOWN_AGGREGATION"
	  message ="Aggregation link with Id '%1' not found"
	  type="user" />

  <Message id="REQPARAM_NONAME"
	  message ="Request parameter requires name attribute"
	  type="user" />

  <Message id="REQPARAM_RESERVED"
	  message ="Request Parameter uses reserved name: '%1'"
	  type="user" />

  <Message id="REQPARAM_NOTYPE"
	  message ="Request Parameter '%1' has no type"
	  type="user" />

  <Message id="REQPARAM_INVALID"
	  message ="Request Parameter '%1' uses invalid type '%2'"
	  type="user" />

  <Message id="ILLEGAL_REQPARAM_SYNTAX"
	  message ="Syntax error in Request Parameter value specification: '%1'. error = '%2'"
	  type="user" />


  <Message id="DATERANGE_NOSTEPUNIT"
	  message ="Date/Time range: no step unit specified."
	  type="user" />


  <Message id="SUBTYPE_NOT_ALLOWED"
	  message ="Link '%1' in Structure Element '%2' does not allow subtypes: cannot use a '%3' here."
	  type="user" />

  <Message id="INVALID_NAMESPACE"
	  message ="Invalid or missing namespace declaration for root element, expecting: '%1'."
	  type="user" />

  <Message id="NO_SUCH_VALIDATION"
	  message="No validation or validation group with name '%1' in Structure Element '%2'."
		 type="user" />

  <Message id="VALIDATION_IN_DATA_SECTION"
	  message ="Validation '%1' occurs in CalculationData section of the calculator input, while it is only valid in the Calculations section."
	  type="user" />

  <Message id="VALIDATION_IN_PRECALC"
	  message ="Validation '%1' occurs in a Scenario in the calculator input, while it is only valid in the Calculations section."
	  type="user" />

  <Message id="VALIDATION_IN_SCENARIO"
	  message ="Validation '%1' occurs in a pre-calculation in the calculator input, while it is only valid in the Calculations section."
	  type="user" />

  <Message id="MISSING_VARID"
	  message ="Variable element: attribute 'variable-id' missing."
	  type="user" />

  <Message id="VARID_NOT_FOUND"
	  message ="Variable with id '%1', referenced in calculator input, was not found."
	  type="user" />

  <Message id="UNKNOWN_MAPPING_TYPE"
	  message ="Unknown mapping type '%1'"
	  type="user" />

  <Message id="UNKNOWN_FUNCTIONID"
	  message ="No function with id '%1' in current snapshot."
	  type="user" />

  <Message id="UNEXPECTED_END_ELEMENT"
	  message="Unexpected element &lt;/%2&gt; in calculator input, expecting %1."
		 type="user" />
	 
  <Message id="MEMBER_IN_NULLTUPLE"
	  message="Unexpected member '%1' specified for null tuple value '%2'in calculator input."
		 type="user" />

  <Message id="ELEMENT_IN_NULLSET"
	  message="Null set containing element(s) specified in calculator input."
		 type="user" />


  <Message id="RTC_NONAME"
	  message="Name attribute missing in RuntimeConfig element in AggregationData"
		 type="user" />

  <Message id="RTC_NOVERS"
	  message="Version attribute missing in RuntimeConfig element in AggregationData"
		 type="user" />

  <Message id="AGGR_ATTR_MISSING"
	  message="Required attribute '%1' missing for element '%2' in aggregation data." 
		 type="user" />

  <Message id="AGGR_NO_SUCH_FEATURE"
	  message="Unkonown feature with id '%1' referenced in aggregation data."
		 type="user" />

  <Message id="AGGR_INVALID_SCENARION_IN_DETAIL"
	  message="Scenario '%1' used in aggregation detail request, is not defined in aggregation master request."
		 type="user" />

  <Message id="DUPLICATE_SCENARIO"
	  message="Mulitple definitions for scenario '%1' in calculation input."
		 type="user" />

  <Message id="EMPTY_VALUE_NOT_ALLOWED"
	  message="Empty values are not allowed for type '%1', use xsi:nil='true' to specify null values."
		 type="user" />


</MessageModule>
