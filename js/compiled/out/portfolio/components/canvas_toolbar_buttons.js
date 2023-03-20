// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.canvas_toolbar_buttons');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.components.popup_menu');
goog.require('portfolio.views.canvas.protocols');
/**
 * 
 */
portfolio.components.canvas_toolbar_buttons.MenuButton = dumdom.core.component.call(null,(function (p__11862){
var map__11863 = p__11862;
var map__11863__$1 = cljs.core.__destructure_map.call(null,map__11863);
var text = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"title","title",636505583));
var align = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var menu = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var active_QMARK_ = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var actions = cljs.core.get.call(null,map__11863__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__11864 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null);
if(cljs.core._EQ_.call(null,align,new cljs.core.Keyword(null,"right","right",-452581833))){
return cljs.core.assoc.call(null,G__11864,new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end");
} else {
return G__11864;
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.boldable","button.button.boldable",34576834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return text;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(menu)?"#1ea7fd":"var(--fg)"),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(14),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0",new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(icon)?(20):null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),icon], null):null),text], null),(function (){var G__11865 = menu;
if((G__11865 == null)){
return null;
} else {
return portfolio.components.popup_menu.PopupMenu.call(null,G__11865);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas-toolbar-buttons/MenuButton"], null));
portfolio.components.canvas_toolbar_buttons.Button = portfolio.components.canvas_toolbar_buttons.MenuButton;
/**
 * 
 */
portfolio.components.canvas_toolbar_buttons.ButtonGroup = dumdom.core.component.call(null,(function (p__11866){
var map__11867 = p__11866;
var map__11867__$1 = cljs.core.__destructure_map.call(null,map__11867);
var buttons = cljs.core.get.call(null,map__11867__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$components$canvas_toolbar_buttons$iter__11868(s__11869){
return (new cljs.core.LazySeq(null,(function (){
var s__11869__$1 = s__11869;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11869__$1);
if(temp__5804__auto__){
var s__11869__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11869__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11869__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11871 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11870 = (0);
while(true){
if((i__11870 < size__5522__auto__)){
var button = cljs.core._nth.call(null,c__5521__auto__,i__11870);
cljs.core.chunk_append.call(null,b__11871,portfolio.views.canvas.protocols.render_toolbar_button.call(null,button));

var G__11872 = (i__11870 + (1));
i__11870 = G__11872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11871),portfolio$components$canvas_toolbar_buttons$iter__11868.call(null,cljs.core.chunk_rest.call(null,s__11869__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11871),null);
}
} else {
var button = cljs.core.first.call(null,s__11869__$2);
return cljs.core.cons.call(null,portfolio.views.canvas.protocols.render_toolbar_button.call(null,button),portfolio$components$canvas_toolbar_buttons$iter__11868.call(null,cljs.core.rest.call(null,s__11869__$2)));
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
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas-toolbar-buttons/ButtonGroup"], null));
