/*
---
description:     Equalizer

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - Equalizer
...
*/
var Equalizer=new Class({initialize:function(a){this.elements=$$(a);},equalize:function(b){if(!b){b="height";}var a=0,c=(typeof document.body.style.maxHeight!="undefined"?"min-":"")+b;offset="offset"+b.capitalize();this.elements.each(function(f,e){var d=f[offset];if(d>a){a=d;}},this);this.elements.each(function(e,d){e.setStyle(c,a-(e[offset]-e.getStyle(b).toInt()));});return a;}});