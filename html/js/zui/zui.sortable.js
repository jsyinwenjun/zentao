/* ========================================================================
 * ZUI: sortable (include droppable)
 * http://zui.sexy
 * ========================================================================
 * Copyright (c) 2014 cnezsoft.com; Licensed MIT
 * ======================================================================== */
 !function(a,b,c){"use strict";var d=function(b,c){this.$=a(b),this.options=this.getOptions(c),this.init()};d.DEFAULTS={container:"body",deviation:5,sensorOffsetX:0,sensorOffsetY:0},d.prototype.getOptions=function(b){return b=a.extend({},d.DEFAULTS,this.$.data(),b)},d.prototype.callEvent=function(b,c){return a.zui.callEvent(this.options[b],c,this)},d.prototype.init=function(){this.handleMouseEvents()},d.prototype.handleMouseEvents=function(){var d=this.$,e=this,f=this.options,g="before";this.$triggerTarget=f.trigger?(a.isFunction(f.trigger)?f.trigger(d):d.find(f.trigger)).first():d,this.$triggerTarget.on("mousedown",function(h){function v(b){var h,i,q,v,w,x,g={left:b.pageX,top:b.pageY};c.abs(g.left-r.left)<f.deviation&&c.abs(g.top-r.top)<f.deviation||(null===l&&(h=m.css("position"),"absolute"!=h&&"relative"!=h&&"fixed"!=h&&(p=h,m.css("position","relative")),l=d.clone().removeClass("drag-from").addClass("drag-shadow").css({position:"absolute",width:d.outerWidth(),transition:"none"}).appendTo(m),d.addClass("dragging"),e.callEvent("start",{event:b,element:d})),i={left:g.left-t.left,top:g.top-t.top},q={left:i.left-s.left,top:i.top-s.top},l.css(q),u.left=g.left,u.top=g.top,v=!1,n=!1,f.flex||j.removeClass("drop-to"),w=null,j.each(function(){var b=a(this),c=b.offset(),d=b.outerWidth(),e=b.outerHeight(),h=c.left+f.sensorOffsetX,i=c.top+f.sensorOffsetY;return g.left>h&&g.top>i&&g.left<h+d&&g.top<i+e&&(w&&w.removeClass("drop-to"),w=b,!f.nested)?!1:void 0}),w&&(n=!0,x=w.data("id"),d.data("id")!=x&&(o=!1),(null===k||k.data("id")!==x&&!o)&&(v=!0),k=w,f.flex&&j.removeClass("drop-to"),k.addClass("drop-to")),f.flex?null!==k&&k.length&&(n=!0):(d.toggleClass("drop-in",n),l.toggleClass("drop-in",n)),e.callEvent("drag",{event:b,isIn:n,target:k,element:d,isNew:v,selfTarget:o,clickOffset:t,offset:i,position:{left:i.left-s.left,top:i.top-s.top},mouseOffset:g}),b.preventDefault())}function w(c){var f,g,h,i,q;return p&&m.css("position",p),null===l?(d.removeClass("drag-from"),a(b).unbind("mousemove",v).unbind("mouseup",w),e.callEvent("always",{event:c,cancel:!0}),void 0):(n||(k=null),f=!0,g={left:c.pageX,top:c.pageY},h={left:g.left-t.left,top:g.top-t.top},i={left:g.left-u.left,top:g.top-u.top},u.left=g.left,u.top=g.top,q={event:c,isIn:n,target:k,element:d,isNew:!o&&null!==k,selfTarget:o,offset:h,mouseOffset:g,position:{left:h.left-s.left,top:h.top-s.top},lastMouseOffset:u,moveOffset:i},f=e.callEvent("beforeDrop",q),f&&n&&e.callEvent("drop",q),a(b).unbind("mousemove",v).unbind("mouseup",w),j.removeClass("drop-to"),d.removeClass("dragging").removeClass("drag-from"),l.remove(),e.callEvent("finish",q),e.callEvent("always",q),c.preventDefault(),void 0)}var i,p,j,k,l,m,n,o,q,r,s,t,u;f.hasOwnProperty(g)&&a.isFunction(f[g])&&(i=f[g]({event:h,element:d}),void 0!==i&&!i)||(j=a.isFunction(f.target)?f.target(d):a(f.target),k=null,l=null,m=a(f.container).first(),n=!1,o=!0,q=d.offset(),r={left:h.pageX,top:h.pageY},s=m.offset(),t={left:r.left-q.left,top:r.top-q.top},u={left:r.left,top:r.top},d.addClass("drag-from"),a(b).bind("mousemove",v).bind("mouseup",w),h.preventDefault())})},d.prototype.reset=function(){this.$triggerTarget.off("mousedown"),this.handleMouseEvents()},a.fn.droppable=function(b){return this.each(function(){var c=a(this),e=c.data("zui.droppable"),f="object"==typeof b&&b;e||c.data("zui.droppable",e=new d(this,f)),"string"==typeof b&&e[b]()})},a.fn.droppable.Constructor=d}(jQuery,document,Math),+function(a){"use strict";var e=function(b,c){this.$=a(b),this.options=this.getOptions(c),this.init()};e.DEFAULTS={selector:"li, div",dragCssClass:"invisible"},e.prototype.getOptions=function(b){return b=a.extend({},e.DEFAULTS,this.$.data(),b)},e.prototype.init=function(){this.bindEventToList(this.$.children(this.options.selector))},e.prototype.reset=function(){var b=this,d=this.$.children(this.options.selector).not(".drag-shadow");d.each(function(){var c=a(this);c.data("zui.droppable")?(c.data("zui.droppable").options.target=d,c.droppable("reset")):b.bindEventToList(c)})},e.prototype.bindEventToList=function(b){function f(b){var d,f,c=[];for(b.each(function(){var b=a(this).data("order");"number"==typeof b&&c.push(b)}),c.sort(function(a,b){return a-b}),d=b.length;c.length<d;)c.push(c.length?c[c.length-1]+1:0);e&&c.reverse(),f=0,b.each(function(){a(this).attr("data-order",c[f++])})}var c=this.$,d=this.options,e=d.reverse;f(b),b.droppable({trigger:d.trigger,target:c.children(d.selector),container:c,always:d.always,flex:!0,start:function(b){d.dragCssClass&&b.element.addClass(d.dragCssClass),a.zui.callEvent(d["start"])},drag:function(b){var g,h,i,j,k;if(c.addClass("sortable-sorting"),b.isIn){if(g=b.element,h=b.target,i=g.attr("data-order"),j=h.attr("data-order"),i==j)return;i>j?h[e?"after":"before"](g):h[e?"before":"after"](g),k=c.children(d.selector).not(".drag-shadow"),f(k),a.zui.callEvent(d["order"],{list:k,element:g})}},finish:function(b){d.dragCssClass&&b.element&&b.element.removeClass(d.dragCssClass),a.zui.callEvent(d["finish"],{list:c.children(d.selector),element:b.element}),c.removeClass("sortable-sorting")}})},a.fn.sortable=function(b){return this.each(function(){var c=a(this),d=c.data("zui.sortable"),f="object"==typeof b&&b;d?"object"==typeof b&&d.reset():c.data("zui.sortable",d=new e(this,f)),"string"==typeof b&&d[b]()})},a.fn.sortable.Constructor=e}(jQuery,window,document,Math);