Equalizer
=========

Equalizer is a MooTools plugin which analyzes a given set of elements and equalizers their height, taking into account the box model additions.

![Screenshot](http://davidwalsh.name/dw-content/equal-columns.jpg)


How to Use
----------

Equalizer can be initialized at any time, but will most likely be initialized at DOMReady.  There are no required arguments -- only options.

	#JS
	/* create instance */
	var equalizer = new Equalizer('.column');
	
	/* equalize heights */
	equalizer.equalize('height');
	
	/* equalize widths */
	equalizer.equalize('width');

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/equalizer](http://davidwalsh.name/js/equalizer)