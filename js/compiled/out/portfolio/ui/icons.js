// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.icons');
goog.require('cljs.core');
goog.require('portfolio.ui.icons.arrow_counter_clockwise');
goog.require('portfolio.ui.icons.bookmark');
goog.require('portfolio.ui.icons.browsers');
goog.require('portfolio.ui.icons.caret_double_left');
goog.require('portfolio.ui.icons.caret_double_right');
goog.require('portfolio.ui.icons.caret_down');
goog.require('portfolio.ui.icons.caret_right');
goog.require('portfolio.ui.icons.caret_up');
goog.require('portfolio.ui.icons.columns');
goog.require('portfolio.ui.icons.cross');
goog.require('portfolio.ui.icons.cube');
goog.require('portfolio.ui.icons.device_mobile');
goog.require('portfolio.ui.icons.devices');
goog.require('portfolio.ui.icons.file_doc');
goog.require('portfolio.ui.icons.folder');
goog.require('portfolio.ui.icons.folder_open');
goog.require('portfolio.ui.icons.git_diff');
goog.require('portfolio.ui.icons.grid_four');
goog.require('portfolio.ui.icons.hamburger');
goog.require('portfolio.ui.icons.hourglass_high');
goog.require('portfolio.ui.icons.list_plus');
goog.require('portfolio.ui.icons.magnifying_glass');
goog.require('portfolio.ui.icons.magnifying_glass_minus');
goog.require('portfolio.ui.icons.magnifying_glass_plus');
goog.require('portfolio.ui.icons.package_icon');
goog.require('portfolio.ui.icons.palette');
goog.require('portfolio.ui.icons.rows');
goog.require('portfolio.ui.icons.x');
portfolio.ui.icons.render_icon = (function portfolio$ui$icons$render_icon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15621 = arguments.length;
var i__5770__auto___15622 = (0);
while(true){
if((i__5770__auto___15622 < len__5769__auto___15621)){
args__5775__auto__.push((arguments[i__5770__auto___15622]));

var G__15623 = (i__5770__auto___15622 + (1));
i__5770__auto___15622 = G__15623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.icons.render_icon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.icons.render_icon.cljs$core$IFn$_invoke$arity$variadic = (function (icon,p__15614){
var vec__15615 = p__15614;
var map__15618 = cljs.core.nth.call(null,vec__15615,(0),null);
var map__15618__$1 = cljs.core.__destructure_map.call(null,map__15618);
var size = cljs.core.get.call(null,map__15618__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var color = cljs.core.get.call(null,map__15618__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var style = cljs.core.get.call(null,map__15618__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var on_click = cljs.core.get.call(null,map__15618__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__15619 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null);
var G__15619__$1 = (cljs.core.truth_(size)?cljs.core.assoc.call(null,G__15619,new cljs.core.Keyword(null,"height","height",1025178622),size):G__15619);
var G__15619__$2 = (cljs.core.truth_(size)?cljs.core.assoc.call(null,G__15619__$1,new cljs.core.Keyword(null,"width","width",-384071477),size):G__15619__$1);
var G__15619__$3 = (cljs.core.truth_(color)?cljs.core.assoc.call(null,G__15619__$2,new cljs.core.Keyword(null,"color","color",1011675173),color):G__15619__$2);
var G__15619__$4 = (cljs.core.truth_(on_click)?cljs.core.assoc.call(null,G__15619__$3,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"):G__15619__$3);
if(cljs.core.truth_(style)){
return cljs.core.into.call(null,G__15619__$4,style);
} else {
return G__15619__$4;
}
})()], null),(function (){var G__15620 = icon;
var G__15620__$1 = (((G__15620 instanceof cljs.core.Keyword))?G__15620.fqn:null);
switch (G__15620__$1) {
case "portfolio.ui.icons/arrow-counter-clockwise":
return portfolio.ui.icons.arrow_counter_clockwise.icon;

break;
case "portfolio.ui.icons/bookmark":
return portfolio.ui.icons.bookmark.icon;

break;
case "portfolio.ui.icons/browsers":
return portfolio.ui.icons.browsers.icon;

break;
case "portfolio.ui.icons/caret-double-left":
return portfolio.ui.icons.caret_double_left.icon;

break;
case "portfolio.ui.icons/caret-double-right":
return portfolio.ui.icons.caret_double_right.icon;

break;
case "portfolio.ui.icons/caret-down":
return portfolio.ui.icons.caret_down.icon;

break;
case "portfolio.ui.icons/caret-right":
return portfolio.ui.icons.caret_right.icon;

break;
case "portfolio.ui.icons/caret-up":
return portfolio.ui.icons.caret_up.icon;

break;
case "portfolio.ui.icons/columns":
return portfolio.ui.icons.columns.icon;

break;
case "portfolio.ui.icons/cross":
return portfolio.ui.icons.cross.icon;

break;
case "portfolio.ui.icons/cube":
return portfolio.ui.icons.cube.icon;

break;
case "portfolio.ui.icons/device-mobile":
return portfolio.ui.icons.device_mobile.icon;

break;
case "portfolio.ui.icons/devices":
return portfolio.ui.icons.devices.icon;

break;
case "portfolio.ui.icons/file-doc":
return portfolio.ui.icons.file_doc.icon;

break;
case "portfolio.ui.icons/folder":
return portfolio.ui.icons.folder.icon;

break;
case "portfolio.ui.icons/folder-open":
return portfolio.ui.icons.folder_open.icon;

break;
case "portfolio.ui.icons/hamburger":
return portfolio.ui.icons.hamburger.icon;

break;
case "portfolio.ui.icons/hourglass-high":
return portfolio.ui.icons.hourglass_high.icon;

break;
case "portfolio.ui.icons/git-diff":
return portfolio.ui.icons.git_diff.icon;

break;
case "portfolio.ui.icons/grid-four":
return portfolio.ui.icons.grid_four.icon;

break;
case "portfolio.ui.icons/list-plus":
return portfolio.ui.icons.list_plus.icon;

break;
case "portfolio.ui.icons/magnifying-glass":
return portfolio.ui.icons.magnifying_glass.icon;

break;
case "portfolio.ui.icons/magnifying-glass-plus":
return portfolio.ui.icons.magnifying_glass_plus.icon;

break;
case "portfolio.ui.icons/magnifying-glass-minus":
return portfolio.ui.icons.magnifying_glass_minus.icon;

break;
case "portfolio.ui.icons/package":
return portfolio.ui.icons.package_icon.icon;

break;
case "portfolio.ui.icons/palette":
return portfolio.ui.icons.palette.icon;

break;
case "portfolio.ui.icons/rows":
return portfolio.ui.icons.rows.icon;

break;
case "portfolio.ui.icons/x":
return portfolio.ui.icons.x.icon;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15620__$1)].join('')));

}
})()], null);
}));

(portfolio.ui.icons.render_icon.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.icons.render_icon.cljs$lang$applyTo = (function (seq15612){
var G__15613 = cljs.core.first.call(null,seq15612);
var seq15612__$1 = cljs.core.next.call(null,seq15612);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15613,seq15612__$1);
}));

