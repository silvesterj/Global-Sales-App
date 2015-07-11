<?xml version = "1.0" ?>
<MessageModule name = "Solve">
	<Message id = "INTERNAL_ERROR"			message = "Internal error in Solve" />
	<Message id = "GUESS_LT_MIN"			message = "Guessed value[%1], minimum value[%2]" type="user"/>
	<Message id = "GUESS_GT_MAX"			message = "Guessed value[%1], maximum value[%2]" type="user"/>
	<Message id = "ERROR_GOAL_LEFT_RIGHT"	message = "GoalValue[%1], left%2, right%3" type="user"/>
	<Message id = "ERROR_GOAL_LEFT_M_RIGHT"	message = "GoalValue[%1], left%2, middle%3, right%4" type="user"/>
	<Message id = "MIN_GE_MAX"				message = "MinAttrValue[%1] MaxAttrValue[%2]" type="user"/>
	<Message id = "EMPTY_VALUE"				message = "%1: empty value" type="user"/>
	<Message id = "TYPE_MISMATCH"			message = "%1: type mismatch, expected '%2', found '%3'" type="user"/>
	<Message id = "FUNC_TYPE_ERROR"			message = "Not allowed in solve: function with return type '%1'" type="user"/>
	<Message id = "MAX_NR_ITER_REACHED"		message = "Maximum number of iterations(%1) reached. GoalValue[%2], left%3, middle%4, right%5" type="user"/>
	<Message id = "ERROR_EQUAL_X"			message = "Cannot find a solution: The most recent guess is equal to one of the previous guesses: GoalValue[%1], left%2, middle%3, right%4" type="user"/>
</MessageModule>
