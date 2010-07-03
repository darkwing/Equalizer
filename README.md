Equalizer
=========

Equalizer is a MooTools plugin which analyzes a given set of elements and equalizers their height, taking into account the box model additions.

![Screenshot](http://davidwalsh.name/dw-content/lazyload.png)


How to Use
----------

LazyLoad should be initialized during the DOMReady event.  There are no required arguments -- only options.

	#JS
	/* LazyLoad instance */
	var lazyloader = new LazyLoad({
		range: 200,
		image: 'Assets/blank.gif',
		elements: 'img'
	});
	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/lazyload](http://davidwalsh.name/js/lazyLoad)