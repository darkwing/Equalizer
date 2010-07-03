Class: Equalizer {#Equalizer}
=========================================

Equalizer is a MooTools plugin which analyzes a given set of elements and equalizers their height, taking into account the box model additions.

### Implements:

Options


Equalizer Method: constructor {#Equalizer:constructor}
-------------------------------------------------------------------


### Syntax:

	var equalizer = new Equalizer(elements);

### Arguments:

1. elements - (*string*) A string selector of the elements to be equalized.  Could also be an Elements collection.

### Returns:

An Equalizer instance.


Equalizer Method: equalize {#Equalizer:equalize}
---------------------------------------------------------------------

Equalizes the height or width of the group of elements.

### Syntax:

	equalizer.equalize('height');

### Arguments:

1. heightOrWidth - (*string*) Should be the string 'height' or 'width'.

### Returns:

* (*object*) The *Equalizer* instance.