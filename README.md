# jQuery Countdown Timer Plugin

This is a jQuery plugin that allows to display a ticking timer.

## Usage

You can bind the jQuery timer plugin to every element you want to. Specify a duration and a unit that should be shown
by the ticking timer. Supported units are hours <code>'h'</code>, minutes <code>'m'</code> and seconds <code>'s'</code>.

*HTML*

<pre>
<span id="my-timer"></span>
</pre>

*JS*

<pre>
$('#my-timer').timer({duration: 7, unit: 'm'});
</pre>

## Integration

The files `timer.css` and `timer.js` are needed for functionality.


