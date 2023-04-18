// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.scene');
goog.require('cljs.core');
goog.require('portfolio.ui.code');
portfolio.ui.scene.get_param_overrides = (function portfolio$ui$scene$get_param_overrides(state,scene){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null));
});
portfolio.ui.scene.get_param_STAR_ = (function portfolio$ui$scene$get_param_STAR_(state,scene,param){
if(cljs.core.map_QMARK_.call(null,param)){
return cljs.core.merge.call(null,param,portfolio.ui.scene.get_param_overrides.call(null,state,scene));
} else {
return param;
}
});
portfolio.ui.scene.get_params = (function portfolio$ui$scene$get_params(state,scene){
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16521){
var vec__16522 = p__16521;
var k = cljs.core.nth.call(null,vec__16522,(0),null);
var v = cljs.core.nth.call(null,vec__16522,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,portfolio.ui.scene.get_param_STAR_.call(null,state,scene,v)], null);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene)));
} else {
if(cljs.core.coll_QMARK_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.map.call(null,(function (p1__16520_SHARP_){
return portfolio.ui.scene.get_param_STAR_.call(null,state,scene,p1__16520_SHARP_);
}),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return portfolio.ui.scene.get_param_STAR_.call(null,state,scene,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene));

}
}
});
portfolio.ui.scene.prep_scene_fn = (function portfolio$ui$scene$prep_scene_fn(state,scene){
var params = portfolio.ui.scene.get_params.call(null,state,scene);
var G__16526 = cljs.core.assoc.call(null,scene,new cljs.core.Keyword(null,"component-params","component-params",-1900426525),portfolio.ui.code.code_str.call(null,params));
var G__16526__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.call(null,G__16526,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene);
})):G__16526);
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.call(null,G__16526__$1,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16527__delegate = function (rest__16525_SHARP_){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene),params,rest__16525_SHARP_);
};
var G__16527 = function (var_args){
var rest__16525_SHARP_ = null;
if (arguments.length > 0) {
var G__16528__i = 0, G__16528__a = new Array(arguments.length -  0);
while (G__16528__i < G__16528__a.length) {G__16528__a[G__16528__i] = arguments[G__16528__i + 0]; ++G__16528__i;}
  rest__16525_SHARP_ = new cljs.core.IndexedSeq(G__16528__a,0,null);
} 
return G__16527__delegate.call(this,rest__16525_SHARP_);};
G__16527.cljs$lang$maxFixedArity = 0;
G__16527.cljs$lang$applyTo = (function (arglist__16529){
var rest__16525_SHARP_ = cljs.core.seq(arglist__16529);
return G__16527__delegate(rest__16525_SHARP_);
});
G__16527.cljs$core$IFn$_invoke$arity$variadic = G__16527__delegate;
return G__16527;
})()
);
} else {
return G__16526__$1;
}
});
portfolio.ui.scene.sort_key = (function portfolio$ui$scene$sort_key(scene){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(scene)], null);
});
portfolio.ui.scene.get_scene_atoms = (function portfolio$ui$scene$get_scene_atoms(p__16531){
var map__16532 = p__16531;
var map__16532__$1 = cljs.core.__destructure_map.call(null,map__16532);
var params = cljs.core.get.call(null,map__16532__$1,new cljs.core.Keyword(null,"params","params",710516235));
return cljs.core.filter.call(null,(function (p1__16530_SHARP_){
if((!((p1__16530_SHARP_ == null)))){
if((((p1__16530_SHARP_.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === p1__16530_SHARP_.cljs$core$IWatchable$)))){
return true;
} else {
if((!p1__16530_SHARP_.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,p1__16530_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,p1__16530_SHARP_);
}
}),cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.identity,params));
});
