(function(factory) {
  'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD anonymous module
		define([ 'jquery' ], factory);
	} else if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
		// CommonJS module
		var jQuery = require('jquery');
		require('jquery.ui.sortable');
		factory(jQuery);
	} else {
		// No module loader (plain <script> tag) - put directly in global namespace
		factory(window.jQuery);
	}
})
    (function($) {
	    'use strict';
	    function timeNow() {
		    var d = new Date();
		    return d.getTime();
	    }

	    $.fn.timer = function(options) {

		    var settings = $.extend({
		      duration : 60,
		      unit : 's'
		    }, options);

		    return this
		        .each(function() {

			        var time = timeNow();
			        var timeEnd;
			        var duration = settings.duration;
			        var unit = settings.unit;

			        var updateInterval;

			        if (unit === 'm') {
				        duration = duration * 60;
			        } else if (unit === 's') {
			        	duration = duration * 1;
			        } else if (unit === 'h') {
				        unit = 'm';
				        duration = duration * 3600;
			        } else {
				        throw 'The provided unit "' + unit + 
				           '" is unsupported! Supported units are "s", "m" and "h".';
			        }

			        timeEnd = time + duration * 1000;
			        updateInterval = Math.floor((timeEnd - time) / 100);
			        var $$ = $(this);

			        $$
			            .html('<div class="timer-bg"><span class="duration"></span><small class="unit"></small></div>' + 
			              '<div class="timer-half-container right"><div class="timer-half right"></div></div>' +
			              '<div class="timer-half-container left"><div class="timer-half left"></div></div>');

			        $$.addClass('timer');

			        // start ticking
			        $$.attr('data-duration', 100);

			        /* global setInterval */
			        var interval = null;
			        interval = setInterval(function() {
				        var timeN = timeNow();

				        var percent = Math.floor((timeEnd - timeN) / updateInterval);
				        if (percent <0) {
				        	percent = 0;
				        }
				        $$.attr('data-duration', percent);
				        if (timeN >= timeEnd) {
					        window.clearInterval(interval);
					        if (typeof options.callback === 'function') {
						        options.callback($$);
					        }
					        
				        }
			        }, updateInterval);

		        });
	    };
    });
