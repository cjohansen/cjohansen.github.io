// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.completion_input_scenes');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('portfolio.dumdom');
goog.require('sasha.components.completion_input');
portfolio.data.register_namespace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),"sasha.components.completion-input-scenes",new cljs.core.Keyword(null,"title","title",636505583),"Completion Input",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"components","components",-1073188942)], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","empty-input","sasha.components.completion-input-scenes/empty-input",963755461),new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16474__delegate = function (___15743__auto__){
return sasha.components.completion_input.CompletionInput.call(null,cljs.core.PersistentArrayMap.EMPTY);
};
var G__16474 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__16475__i = 0, G__16475__a = new Array(arguments.length -  0);
while (G__16475__i < G__16475__a.length) {G__16475__a[G__16475__i] = arguments[G__16475__i + 0]; ++G__16475__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__16475__a,0,null);
} 
return G__16474__delegate.call(this,___15743__auto__);};
G__16474.cljs$lang$maxFixedArity = 0;
G__16474.cljs$lang$applyTo = (function (arglist__16476){
var ___15743__auto__ = cljs.core.seq(arglist__16476);
return G__16474__delegate(___15743__auto__);
});
G__16474.cljs$core$IFn$_invoke$arity$variadic = G__16474__delegate;
return G__16474;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-placeholder","sasha.components.completion-input-scenes/input-with-placeholder",1602371878),new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16477__delegate = function (___15743__auto__){
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write in it"], null));
};
var G__16477 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__16478__i = 0, G__16478__a = new Array(arguments.length -  0);
while (G__16478__i < G__16478__a.length) {G__16478__a[G__16478__i] = arguments[G__16478__i + 0]; ++G__16478__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__16478__a,0,null);
} 
return G__16477__delegate.call(this,___15743__auto__);};
G__16477.cljs$lang$maxFixedArity = 0;
G__16477.cljs$lang$applyTo = (function (arglist__16479){
var ___15743__auto__ = cljs.core.seq(arglist__16479);
return G__16477__delegate(___15743__auto__);
});
G__16477.cljs$core$IFn$_invoke$arity$variadic = G__16477__delegate;
return G__16477;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-placeholder-and-value","sasha.components.completion-input-scenes/input-with-placeholder-and-value",159981226),new cljs.core.Keyword(null,"line","line",212345235),15,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16480__delegate = function (___15743__auto__){
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write in it",new cljs.core.Keyword(null,"value","value",305978217),"I am writing"], null));
};
var G__16480 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__16481__i = 0, G__16481__a = new Array(arguments.length -  0);
while (G__16481__i < G__16481__a.length) {G__16481__a[G__16481__i] = arguments[G__16481__i + 0]; ++G__16481__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__16481__a,0,null);
} 
return G__16480__delegate.call(this,___15743__auto__);};
G__16480.cljs$lang$maxFixedArity = 0;
G__16480.cljs$lang$applyTo = (function (arglist__16482){
var ___15743__auto__ = cljs.core.seq(arglist__16482);
return G__16480__delegate(___15743__auto__);
});
G__16480.cljs$core$IFn$_invoke$arity$variadic = G__16480__delegate;
return G__16480;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-suggestion","sasha.components.completion-input-scenes/input-with-suggestion",76589559),new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16483__delegate = function (___15743__auto__){
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"I am writing",new cljs.core.Keyword(null,"completion","completion",-731716930),"I am writing to you"], null));
};
var G__16483 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__16484__i = 0, G__16484__a = new Array(arguments.length -  0);
while (G__16484__i < G__16484__a.length) {G__16484__a[G__16484__i] = arguments[G__16484__i + 0]; ++G__16484__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__16484__a,0,null);
} 
return G__16483__delegate.call(this,___15743__auto__);};
G__16483.cljs$lang$maxFixedArity = 0;
G__16483.cljs$lang$applyTo = (function (arglist__16485){
var ___15743__auto__ = cljs.core.seq(arglist__16485);
return G__16483__delegate(___15743__auto__);
});
G__16483.cljs$core$IFn$_invoke$arity$variadic = G__16483__delegate;
return G__16483;
})()
], null)));
sasha.components.completion_input_scenes.completions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bananas","Apples","Oranges","Orangutangs","Orange juice","Oracle"], null);
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-live-suggestions","sasha.components.completion-input-scenes/input-with-live-suggestions",-1780566319),new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16488__delegate = function (store,args){
var map__16487 = cljs.core.deref.call(null,store);
var map__16487__$1 = cljs.core.__destructure_map.call(null,map__16487);
var text = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Try completions",new cljs.core.Keyword(null,"completion","completion",-731716930),((cljs.core.empty_QMARK_.call(null,text))?null:cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16486_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__16486_SHARP_,text);
}),sasha.components.completion_input_scenes.completions))),new cljs.core.Keyword(null,"onInput","onInput",-1944920038),(function (e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
})], null));
};
var G__16488 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16489__i = 0, G__16489__a = new Array(arguments.length -  1);
while (G__16489__i < G__16489__a.length) {G__16489__a[G__16489__i] = arguments[G__16489__i + 1]; ++G__16489__i;}
  args = new cljs.core.IndexedSeq(G__16489__a,0,null);
} 
return G__16488__delegate.call(this,store,args);};
G__16488.cljs$lang$maxFixedArity = 1;
G__16488.cljs$lang$applyTo = (function (arglist__16490){
var store = cljs.core.first(arglist__16490);
var args = cljs.core.rest(arglist__16490);
return G__16488__delegate(store,args);
});
G__16488.cljs$core$IFn$_invoke$arity$variadic = G__16488__delegate;
return G__16488;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
