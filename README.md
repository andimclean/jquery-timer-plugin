# jQuery Countdown Timer Plugin

This is a jQuery plugin that allows to display a ticking timer.

## Usage

You can bind the jQuery timer plugin to every element you want to. Specify a duration and a unit that should be shown
by the ticking timer. Supported units are hours <code>'h'</code>, minutes <code>'m'</code> and seconds <code>'s'</code>.

*HTML*

```
<span id="my-timer"></span>
```

*JS*

```
$('#my-timer').timer({duration: 7, unit: 'm'});
```

## Integration

The files `timer.css` and `timer.js` are needed for functionality.

## Development

You can see the documentation / example page by executing `grunt`.

