// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.accordion_scenes');
goog.require('cljs.core');
goog.require('portfolio.dumdom');
goog.require('sasha.components.accordion');
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.accordion-scenes","collapsed-accordion","sasha.components.accordion-scenes/collapsed-accordion",78385806),new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15449__delegate = function (___15419__auto__){
return sasha.components.accordion.Accordion.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What is a scene?",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What is a collection?",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What can't Portfolio do?",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null)], null)], null));
};
var G__15449 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__15450__i = 0, G__15450__a = new Array(arguments.length -  0);
while (G__15450__i < G__15450__a.length) {G__15450__a[G__15450__i] = arguments[G__15450__i + 0]; ++G__15450__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__15450__a,0,null);
} 
return G__15449__delegate.call(this,___15419__auto__);};
G__15449.cljs$lang$maxFixedArity = 0;
G__15449.cljs$lang$applyTo = (function (arglist__15451){
var ___15419__auto__ = cljs.core.seq(arglist__15451);
return G__15449__delegate(___15419__auto__);
});
G__15449.cljs$core$IFn$_invoke$arity$variadic = G__15449__delegate;
return G__15449;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.accordion-scenes","single-expanded-bellow","sasha.components.accordion-scenes/single-expanded-bellow",-1701760607),new cljs.core.Keyword(null,"line","line",212345235),20,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15452__delegate = function (___15419__auto__){
return sasha.components.accordion.Accordion.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What is a scene?",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"What is a collection?",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(180)], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"A collection is a bunch of related scenes. The contents of a collection can be rendered at the same time, and the collection can specify default configuration that controls the rendering of all scenes in it."], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What can't Portfolio do?",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null)], null)], null));
};
var G__15452 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__15453__i = 0, G__15453__a = new Array(arguments.length -  0);
while (G__15453__i < G__15453__a.length) {G__15453__a[G__15453__i] = arguments[G__15453__i + 0]; ++G__15453__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__15453__a,0,null);
} 
return G__15452__delegate.call(this,___15419__auto__);};
G__15452.cljs$lang$maxFixedArity = 0;
G__15452.cljs$lang$applyTo = (function (arglist__15454){
var ___15419__auto__ = cljs.core.seq(arglist__15454);
return G__15452__delegate(___15419__auto__);
});
G__15452.cljs$core$IFn$_invoke$arity$variadic = G__15452__delegate;
return G__15452;
})()
], null)));
sasha.components.accordion_scenes.prepare_accordion = (function sasha$components$accordion_scenes$prepare_accordion(store){
var accordion = cljs.core.deref.call(null,store);
return cljs.core.update.call(null,accordion,new cljs.core.Keyword(null,"items","items",1031954938),(function (items){
return cljs.core.map_indexed.call(null,(function (idx,item){
var G__15455 = cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (_){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),idx,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not);
}));
var G__15455__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc_in.call(null,G__15455,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.Keyword(null,"rotation","rotation",-1728051644)], null),(-180)):G__15455);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296).cljs$core$IFn$_invoke$arity$1(item))){
return cljs.core.dissoc.call(null,G__15455__$1,new cljs.core.Keyword(null,"content","content",15833224));
} else {
return G__15455__$1;
}
}),items);
}));
});
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.accordion-scenes","animating-bellow","sasha.components.accordion-scenes/animating-bellow",-1967806488),new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15456__delegate = function (store,args){
return sasha.components.accordion.Accordion.call(null,sasha.components.accordion_scenes.prepare_accordion.call(null,store));
};
var G__15456 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15457__i = 0, G__15457__a = new Array(arguments.length -  1);
while (G__15457__i < G__15457__a.length) {G__15457__a[G__15457__i] = arguments[G__15457__i + 1]; ++G__15457__i;}
  args = new cljs.core.IndexedSeq(G__15457__a,0,null);
} 
return G__15456__delegate.call(this,store,args);};
G__15456.cljs$lang$maxFixedArity = 1;
G__15456.cljs$lang$applyTo = (function (arglist__15458){
var store = cljs.core.first(arglist__15458);
var args = cljs.core.rest(arglist__15458);
return G__15456__delegate(store,args);
});
G__15456.cljs$core$IFn$_invoke$arity$variadic = G__15456__delegate;
return G__15456;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What is a scene?",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"A scene is an instance of a component. The dataset provokes rendering of a specific UI state."], null),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What is a collection?",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"A collection is a bunch of related scenes. The contents of a collection can be rendered at the same time, and the collection can specify default configuration that controls the rendering of all scenes in it."], null),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"What can't Portfolio do?",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"It can't write UI components for you. Yet. Maybe some AI will help."], null),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","caret-down","sasha.icons/caret-down",8499331),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0)], null)], null)], null)], null))], null)));
