// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.icons_scenes');
goog.require('cljs.core');
goog.require('portfolio.dumdom');
goog.require('portfolio.data');
goog.require('sasha.icons');
portfolio.data.register_collection_BANG_.call(null,new cljs.core.Keyword(null,"icon-folder","icon-folder",476225210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Icons"], null));
portfolio.data.register_collection_BANG_.call(null,new cljs.core.Keyword(null,"sasha.icons-scenes","sasha.icons-scenes",-531429561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"icon-folder","icon-folder",476225210),new cljs.core.Keyword(null,"title","title",636505583),"Icons"], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.icons-scenes","icon-listing","sasha.icons-scenes/icon-listing",-85613265),new cljs.core.Keyword(null,"line","line",212345235),14,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__17631__delegate = function (___15419__auto__){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null),(function (){var iter__5523__auto__ = (function sasha$icons_scenes$iter__17627(s__17628){
return (new cljs.core.LazySeq(null,(function (){
var s__17628__$1 = s__17628;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17628__$1);
if(temp__5804__auto__){
var s__17628__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17628__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17628__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17630 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17629 = (0);
while(true){
if((i__17629 < size__5522__auto__)){
var icon = cljs.core._nth.call(null,c__5521__auto__,i__17629);
cljs.core.chunk_append.call(null,b__17630,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 32px"], null),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)], null),sasha.icons.render.call(null,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(32)], null))], null));

var G__17632 = (i__17629 + (1));
i__17629 = G__17632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17630),sasha$icons_scenes$iter__17627.call(null,cljs.core.chunk_rest.call(null,s__17628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17630),null);
}
} else {
var icon = cljs.core.first.call(null,s__17628__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 32px"], null),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)], null),sasha.icons.render.call(null,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(32)], null))], null),sasha$icons_scenes$iter__17627.call(null,cljs.core.rest.call(null,s__17628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,sasha.icons.get_icon_ids.call(null));
})()], null);
};
var G__17631 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__17633__i = 0, G__17633__a = new Array(arguments.length -  0);
while (G__17633__i < G__17633__a.length) {G__17633__a[G__17633__i] = arguments[G__17633__i + 0]; ++G__17633__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__17633__a,0,null);
} 
return G__17631__delegate.call(this,___15419__auto__);};
G__17631.cljs$lang$maxFixedArity = 0;
G__17631.cljs$lang$applyTo = (function (arglist__17634){
var ___15419__auto__ = cljs.core.seq(arglist__17634);
return G__17631__delegate(___15419__auto__);
});
G__17631.cljs$core$IFn$_invoke$arity$variadic = G__17631__delegate;
return G__17631;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.icons-scenes","colorized-icon-listing","sasha.icons-scenes/colorized-icon-listing",2127308000),new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__17639__delegate = function (___15419__auto__){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),"wrap"], null)], null),(function (){var iter__5523__auto__ = (function sasha$icons_scenes$iter__17635(s__17636){
return (new cljs.core.LazySeq(null,(function (){
var s__17636__$1 = s__17636;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17636__$1);
if(temp__5804__auto__){
var s__17636__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17636__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17636__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17638 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17637 = (0);
while(true){
if((i__17637 < size__5522__auto__)){
var icon = cljs.core._nth.call(null,c__5521__auto__,i__17637);
cljs.core.chunk_append.call(null,b__17638,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 32px"], null),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)], null),sasha.icons.render.call(null,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(32)], null))], null));

var G__17640 = (i__17637 + (1));
i__17637 = G__17640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17638),sasha$icons_scenes$iter__17635.call(null,cljs.core.chunk_rest.call(null,s__17636__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17638),null);
}
} else {
var icon = cljs.core.first.call(null,s__17636__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 32px"], null),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)], null),sasha.icons.render.call(null,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(32)], null))], null),sasha$icons_scenes$iter__17635.call(null,cljs.core.rest.call(null,s__17636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,sasha.icons.get_icon_ids.call(null));
})()], null);
};
var G__17639 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__17641__i = 0, G__17641__a = new Array(arguments.length -  0);
while (G__17641__i < G__17641__a.length) {G__17641__a[G__17641__i] = arguments[G__17641__i + 0]; ++G__17641__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__17641__a,0,null);
} 
return G__17639__delegate.call(this,___15419__auto__);};
G__17639.cljs$lang$maxFixedArity = 0;
G__17639.cljs$lang$applyTo = (function (arglist__17642){
var ___15419__auto__ = cljs.core.seq(arglist__17642);
return G__17639__delegate(___15419__auto__);
});
G__17639.cljs$core$IFn$_invoke$arity$variadic = G__17639__delegate;
return G__17639;
})()
], null)));
