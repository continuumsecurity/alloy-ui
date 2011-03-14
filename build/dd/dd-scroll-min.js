/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("dd-scroll",function(c){var g=function(){g.superclass.constructor.apply(this,arguments);},b,d,k="host",a="buffer",j="parentScroll",f="windowScroll",i="scrollTop",e="scrollLeft",h="offsetWidth",l="offsetHeight";g.ATTRS={parentScroll:{value:false,setter:function(m){if(m){return m;}return false;}},buffer:{value:30,validator:c.Lang.isNumber},scrollDelay:{value:235,validator:c.Lang.isNumber},host:{value:null},windowScroll:{value:false,validator:c.Lang.isBoolean},vertical:{value:true,validator:c.Lang.isBoolean},horizontal:{value:true,validator:c.Lang.isBoolean}};c.extend(g,c.Base,{_scrolling:null,_vpRegionCache:null,_dimCache:null,_scrollTimer:null,_getVPRegion:function(){var m={},o=this.get(j),u=this.get(a),s=this.get(f),y=((s)?[]:o.getXY()),v=((s)?"winWidth":h),q=((s)?"winHeight":l),x=((s)?o.get(i):y[1]),p=((s)?o.get(e):y[0]);m={top:x+u,right:(o.get(v)+p)-u,bottom:(o.get(q)+x)-u,left:p+u};this._vpRegionCache=m;return m;},initializer:function(){var m=this.get(k);m.after("drag:start",c.bind(this.start,this));m.after("drag:end",c.bind(this.end,this));m.on("drag:align",c.bind(this.align,this));c.one("win").on("scroll",c.bind(function(){this._vpRegionCache=null;},this));},_checkWinScroll:function(A){var y=this._getVPRegion(),m=this.get(k),n=this.get(f),t=m.lastXY,x=false,F=this.get(a),s=this.get(j),H=s.get(i),u=s.get(e),v=this._dimCache.w,C=this._dimCache.h,p=t[1]+C,z=t[1],E=t[0]+v,q=t[0],G=z,o=q,B=H,D=u;if(this.get("horizontal")){if(q<=y.left){x=true;o=t[0]-((n)?F:0);D=u-F;}if(E>=y.right){x=true;o=t[0]+((n)?F:0);D=u+F;}}if(this.get("vertical")){if(p>=y.bottom){x=true;G=t[1]+((n)?F:0);B=H+F;}if(z<=y.top){x=true;G=t[1]-((n)?F:0);B=H-F;}}if(B<0){B=0;G=t[1];}if(D<0){D=0;o=t[0];}if(G<0){G=t[1];}if(o<0){o=t[0];}if(A){m.actXY=[o,G];m._moveNode({node:s,top:B,left:D});if(!B&&!D){this._cancelScroll();}}else{if(x){this._initScroll();}else{this._cancelScroll();}}},_initScroll:function(){this._cancelScroll();this._scrollTimer=c.Lang.later(this.get("scrollDelay"),this,this._checkWinScroll,[true],true);},_cancelScroll:function(){this._scrolling=false;if(this._scrollTimer){this._scrollTimer.cancel();delete this._scrollTimer;}},align:function(m){if(this._scrolling){this._cancelScroll();m.preventDefault();}if(!this._scrolling){this._checkWinScroll();}},_setDimCache:function(){var m=this.get(k).get("dragNode");this._dimCache={h:m.get(l),w:m.get(h)};},start:function(){this._setDimCache();},end:function(m){this._dimCache=null;this._cancelScroll();},toString:function(){return g.NAME+" #"+this.get("node").get("id");}});c.namespace("Plugin");b=function(){b.superclass.constructor.apply(this,arguments);};b.ATTRS=c.merge(g.ATTRS,{windowScroll:{value:true,setter:function(m){if(m){this.set(j,c.one("win"));}return m;}}});c.extend(b,g,{initializer:function(){this.set("windowScroll",this.get("windowScroll"));}});b.NAME=b.NS="winscroll";c.Plugin.DDWinScroll=b;d=function(){d.superclass.constructor.apply(this,arguments);};d.ATTRS=c.merge(g.ATTRS,{node:{value:false,setter:function(m){var o=c.one(m);if(!o){if(m!==false){c.error("DDNodeScroll: Invalid Node Given: "+m);}}else{o=o.item(0);this.set(j,o);}return o;}}});c.extend(d,g,{initializer:function(){this.set("node",this.get("node"));}});d.NAME=d.NS="nodescroll";c.Plugin.DDNodeScroll=d;c.DD.Scroll=g;},"3.2.0",{optional:["dd-proxy"],skinnable:false,requires:["dd-drag"]});