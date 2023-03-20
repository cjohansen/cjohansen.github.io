// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.completion_input_scenes');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('portfolio.dumdom');
goog.require('sasha.components.completion_input');
portfolio.data.register_namespace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),"sasha.components.completion-input-scenes",new cljs.core.Keyword(null,"title","title",636505583),"Completion Input",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"components","components",-1073188942)], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","empty-input","sasha.components.completion-input-scenes/empty-input",963755461),new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12737__delegate = function (___12086__auto__){
return sasha.components.completion_input.CompletionInput.call(null,cljs.core.PersistentArrayMap.EMPTY);
};
var G__12737 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12738__i = 0, G__12738__a = new Array(arguments.length -  0);
while (G__12738__i < G__12738__a.length) {G__12738__a[G__12738__i] = arguments[G__12738__i + 0]; ++G__12738__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12738__a,0,null);
} 
return G__12737__delegate.call(this,___12086__auto__);};
G__12737.cljs$lang$maxFixedArity = 0;
G__12737.cljs$lang$applyTo = (function (arglist__12739){
var ___12086__auto__ = cljs.core.seq(arglist__12739);
return G__12737__delegate(___12086__auto__);
});
G__12737.cljs$core$IFn$_invoke$arity$variadic = G__12737__delegate;
return G__12737;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-placeholder","sasha.components.completion-input-scenes/input-with-placeholder",1602371878),new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12740__delegate = function (___12086__auto__){
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write in it"], null));
};
var G__12740 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12741__i = 0, G__12741__a = new Array(arguments.length -  0);
while (G__12741__i < G__12741__a.length) {G__12741__a[G__12741__i] = arguments[G__12741__i + 0]; ++G__12741__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12741__a,0,null);
} 
return G__12740__delegate.call(this,___12086__auto__);};
G__12740.cljs$lang$maxFixedArity = 0;
G__12740.cljs$lang$applyTo = (function (arglist__12742){
var ___12086__auto__ = cljs.core.seq(arglist__12742);
return G__12740__delegate(___12086__auto__);
});
G__12740.cljs$core$IFn$_invoke$arity$variadic = G__12740__delegate;
return G__12740;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-placeholder-and-value","sasha.components.completion-input-scenes/input-with-placeholder-and-value",159981226),new cljs.core.Keyword(null,"line","line",212345235),15,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12743__delegate = function (___12086__auto__){
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Write in it",new cljs.core.Keyword(null,"value","value",305978217),"I am writing"], null));
};
var G__12743 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12744__i = 0, G__12744__a = new Array(arguments.length -  0);
while (G__12744__i < G__12744__a.length) {G__12744__a[G__12744__i] = arguments[G__12744__i + 0]; ++G__12744__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12744__a,0,null);
} 
return G__12743__delegate.call(this,___12086__auto__);};
G__12743.cljs$lang$maxFixedArity = 0;
G__12743.cljs$lang$applyTo = (function (arglist__12745){
var ___12086__auto__ = cljs.core.seq(arglist__12745);
return G__12743__delegate(___12086__auto__);
});
G__12743.cljs$core$IFn$_invoke$arity$variadic = G__12743__delegate;
return G__12743;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-suggestion","sasha.components.completion-input-scenes/input-with-suggestion",76589559),new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12746__delegate = function (___12086__auto__){
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"I am writing",new cljs.core.Keyword(null,"completion","completion",-731716930),"I am writing to you"], null));
};
var G__12746 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12747__i = 0, G__12747__a = new Array(arguments.length -  0);
while (G__12747__i < G__12747__a.length) {G__12747__a[G__12747__i] = arguments[G__12747__i + 0]; ++G__12747__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12747__a,0,null);
} 
return G__12746__delegate.call(this,___12086__auto__);};
G__12746.cljs$lang$maxFixedArity = 0;
G__12746.cljs$lang$applyTo = (function (arglist__12748){
var ___12086__auto__ = cljs.core.seq(arglist__12748);
return G__12746__delegate(___12086__auto__);
});
G__12746.cljs$core$IFn$_invoke$arity$variadic = G__12746__delegate;
return G__12746;
})()
], null)));
sasha.components.completion_input_scenes.completions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bananas","Apples","Oranges","Orangutangs","Orange juice","Oracle"], null);
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.completion-input-scenes","input-with-live-suggestions","sasha.components.completion-input-scenes/input-with-live-suggestions",-1780566319),new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12751__delegate = function (store,args){
var map__12750 = cljs.core.deref.call(null,store);
var map__12750__$1 = cljs.core.__destructure_map.call(null,map__12750);
var text = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return sasha.components.completion_input.CompletionInput.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Try completions",new cljs.core.Keyword(null,"completion","completion",-731716930),((cljs.core.empty_QMARK_.call(null,text))?null:cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12749_SHARP_){
return clojure.string.starts_with_QMARK_.call(null,p1__12749_SHARP_,text);
}),sasha.components.completion_input_scenes.completions))),new cljs.core.Keyword(null,"onInput","onInput",-1944920038),(function (e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),e.target.value);
})], null));
};
var G__12751 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12752__i = 0, G__12752__a = new Array(arguments.length -  1);
while (G__12752__i < G__12752__a.length) {G__12752__a[G__12752__i] = arguments[G__12752__i + 1]; ++G__12752__i;}
  args = new cljs.core.IndexedSeq(G__12752__a,0,null);
} 
return G__12751__delegate.call(this,store,args);};
G__12751.cljs$lang$maxFixedArity = 1;
G__12751.cljs$lang$applyTo = (function (arglist__12753){
var store = cljs.core.first(arglist__12753);
var args = cljs.core.rest(arglist__12753);
return G__12751__delegate(store,args);
});
G__12751.cljs$core$IFn$_invoke$arity$variadic = G__12751__delegate;
return G__12751;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
