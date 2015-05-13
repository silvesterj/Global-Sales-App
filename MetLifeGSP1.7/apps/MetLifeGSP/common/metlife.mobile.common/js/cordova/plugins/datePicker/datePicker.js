	/**
	 * Constructor
	 */
angular.module('datePicker', []).factory('datePicker', function () {
	return {
		/**
	 * show - true to show the ad, false to hide the ad
	 */
		
		show : function(options, sucessCallback, failureCallback) {
			if (options.date) {
				options.date = (options.date.getMonth() + 1) + "/" + (options.date.getDate()) + "/" + (options.date.getFullYear()) + "/"
						+ (options.date.getHours()) + "/" + (options.date.getMinutes());
			}
			var defaults = {
				mode : '',
				date : '',
				allowOldDates : true
			};
	
			for ( var key in defaults) {
				if (typeof options[key] !== "undefined")
					defaults[key] = options[key];
			}
			return cordova.exec(sucessCallback, failureCallback, 'DatePickerPlugin', defaults.mode, new Array(defaults));
		},
		showPicker : function(options, sucessCallback, failureCallback) {
			var padDate = function(date) {
				if (date.length == 1) {
					return ("0" + date);
				}
				return date;
			};
			if (options.date) {
				options.date = options.date.getFullYear() + "-"
						+ padDate(options.date.getMonth() + 1) + "-"
						+ padDate(options.date.getDate()) + "T"
						+ padDate(options.date.getHours()) + ":"
						+ padDate(options.date.getMinutes()) + ":00Z";
			}
			var defaults = {
				mode : 'datetime',
				date : '',
				allowFutureDates : true
			};
			for ( var key in defaults) {
				if (typeof options[key] !== "undefined")
					defaults[key] = options[key];
			}

			cordova.exec(sucessCallback, failureCallback, "DatePicker",	"show", [ defaults ]);
		}
	};
});
