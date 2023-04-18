// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.canvas_toolbar_buttons');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.ui.icons');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.components.popup_menu');
/**
 * 
 */
portfolio.ui.components.canvas_toolbar_buttons.MenuButton = dumdom.core.component.call(null,(function (p__16918){
var map__16919 = p__16918;
var map__16919__$1 = cljs.core.__destructure_map.call(null,map__16919);
var text = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"title","title",636505583));
var menu = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var active_QMARK_ = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var actions = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var selected_QMARK_ = cljs.core.get.call(null,map__16919__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var selected_QMARK___$1 = (function (){var or__5045__auto__ = menu;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return selected_QMARK_;
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.canvas-menu-button","span.canvas-menu-button",1483541186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.boldable","button.button.boldable",34576834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return text;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK___$1)?"var(--highlight-color)":"var(--fg)"),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"padding","padding",1660304693),(cljs.core.truth_(icon)?(6):"6px 12px"),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(icon)?(32):null),new cljs.core.Keyword(null,"height","height",1025178622),(32),new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"var(--toolbar-button-active)":"var(--toolbar-button)")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),(cljs.core.truth_(icon)?portfolio.ui.icons.render_icon.call(null,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)):null),text], null),(function (){var G__16920 = menu;
if((G__16920 == null)){
return null;
} else {
return portfolio.ui.components.popup_menu.PopupMenu.call(null,G__16920);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas-toolbar-buttons/MenuButton"], null));
portfolio.ui.components.canvas_toolbar_buttons.Button = portfolio.ui.components.canvas_toolbar_buttons.MenuButton;
/**
 * 
 */
portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup = dumdom.core.component.call(null,(function (p__16921){
var map__16922 = p__16921;
var map__16922__$1 = cljs.core.__destructure_map.call(null,map__16922);
var buttons = cljs.core.get.call(null,map__16922__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.canvas-button-group","div.canvas-button-group",1622996814),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),(1)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas_toolbar_buttons$iter__16923(s__16924){
return (new cljs.core.LazySeq(null,(function (){
var s__16924__$1 = s__16924;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16924__$1);
if(temp__5804__auto__){
var s__16924__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16924__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16924__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16926 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16925 = (0);
while(true){
if((i__16925 < size__5522__auto__)){
var button = cljs.core._nth.call(null,c__5521__auto__,i__16925);
cljs.core.chunk_append.call(null,b__16926,portfolio.ui.canvas.protocols.render_toolbar_button.call(null,button));

var G__16927 = (i__16925 + (1));
i__16925 = G__16927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16926),portfolio$ui$components$canvas_toolbar_buttons$iter__16923.call(null,cljs.core.chunk_rest.call(null,s__16924__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16926),null);
}
} else {
var button = cljs.core.first.call(null,s__16924__$2);
return cljs.core.cons.call(null,portfolio.ui.canvas.protocols.render_toolbar_button.call(null,button),portfolio$ui$components$canvas_toolbar_buttons$iter__16923.call(null,cljs.core.rest.call(null,s__16924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,buttons);
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas-toolbar-buttons/ButtonGroup"], null));
