// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.canvas_toolbar_buttons');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.components.popup_menu');
goog.require('portfolio.views.canvas.protocols');
/**
 * 
 */
portfolio.components.canvas_toolbar_buttons.MenuButton = dumdom.core.component.call(null,(function (p__14067){
var map__14068 = p__14067;
var map__14068__$1 = cljs.core.__destructure_map.call(null,map__14068);
var text = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var icon = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"title","title",636505583));
var align = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var menu = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var active_QMARK_ = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var actions = cljs.core.get.call(null,map__14068__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__14069 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null);
if(cljs.core._EQ_.call(null,align,new cljs.core.Keyword(null,"right","right",-452581833))){
return cljs.core.assoc.call(null,G__14069,new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end");
} else {
return G__14069;
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.boldable","button.button.boldable",34576834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return text;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(menu)?"#1ea7fd":"#000"),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(active_QMARK_)?"bold":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0",new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(icon)?(20):null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),icon], null):null),text], null),(function (){var G__14070 = menu;
if((G__14070 == null)){
return null;
} else {
return portfolio.components.popup_menu.PopupMenu.call(null,G__14070);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas-toolbar-buttons/MenuButton"], null));
portfolio.components.canvas_toolbar_buttons.Button = portfolio.components.canvas_toolbar_buttons.MenuButton;
/**
 * 
 */
portfolio.components.canvas_toolbar_buttons.ButtonGroup = dumdom.core.component.call(null,(function (p__14071){
var map__14072 = p__14071;
var map__14072__$1 = cljs.core.__destructure_map.call(null,map__14072);
var buttons = cljs.core.get.call(null,map__14072__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$components$canvas_toolbar_buttons$iter__14073(s__14074){
return (new cljs.core.LazySeq(null,(function (){
var s__14074__$1 = s__14074;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__14074__$1);
if(temp__5804__auto__){
var s__14074__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14074__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__14074__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__14076 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__14075 = (0);
while(true){
if((i__14075 < size__5522__auto__)){
var button = cljs.core._nth.call(null,c__5521__auto__,i__14075);
cljs.core.chunk_append.call(null,b__14076,portfolio.views.canvas.protocols.render_toolbar_button.call(null,button));

var G__14077 = (i__14075 + (1));
i__14075 = G__14077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14076),portfolio$components$canvas_toolbar_buttons$iter__14073.call(null,cljs.core.chunk_rest.call(null,s__14074__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14076),null);
}
} else {
var button = cljs.core.first.call(null,s__14074__$2);
return cljs.core.cons.call(null,portfolio.views.canvas.protocols.render_toolbar_button.call(null,button),portfolio$components$canvas_toolbar_buttons$iter__14073.call(null,cljs.core.rest.call(null,s__14074__$2)));
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
