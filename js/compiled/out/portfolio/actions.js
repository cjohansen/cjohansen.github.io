// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.actions');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('portfolio.core');
goog.require('portfolio.css');
goog.require('portfolio.router');
/**
 * Takes a map and pairs of path value to assoc-in to the map. Makes `assoc-in`
 *   work like `assoc`, e.g.:
 * 
 *   ```clj
 *   (assoc-in* {}
 *           [:person :name] "Christian"
 *           [:person :language] "Clojure")
 *   ;;=>
 *   {:person {:name "Christian"
 *          :language "Clojure"}}
 *   ```
 */
portfolio.actions.assoc_in_STAR_ = (function portfolio$actions$assoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12440 = arguments.length;
var i__5770__auto___12441 = (0);
while(true){
if((i__5770__auto___12441 < len__5769__auto___12440)){
args__5775__auto__.push((arguments[i__5770__auto___12441]));

var G__12442 = (i__5770__auto___12441 + (1));
i__5770__auto___12441 = G__12442;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.count.call(null,args),(2)))){
} else {
throw (new Error(["Assert failed: ","assoc-in* takes a map and pairs of path value","\n","(= 0 (mod (count args) 2))"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),args)))){
} else {
throw (new Error(["Assert failed: ","each path should be a vector","\n","(->> args (partition 2) (map first) (every? vector?))"].join('')));
}

return cljs.core.reduce.call(null,(function (m__$1,p__12436){
var vec__12437 = p__12436;
var path = cljs.core.nth.call(null,vec__12437,(0),null);
var v = cljs.core.nth.call(null,vec__12437,(1),null);
return cljs.core.assoc_in.call(null,m__$1,path,v);
}),m,cljs.core.partition.call(null,(2),args));
}));

(portfolio.actions.assoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.actions.assoc_in_STAR_.cljs$lang$applyTo = (function (seq12434){
var G__12435 = cljs.core.first.call(null,seq12434);
var seq12434__$1 = cljs.core.next.call(null,seq12434);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12435,seq12434__$1);
}));

/**
 * Takes a map and paths to dissoc from it. An example explains it best:
 * 
 *   ```clj
 *   (dissoc-in* {:person {:name "Christian"
 *                      :language "Clojure"}}
 *            [:person :language])
 *   ;;=>
 *   {:person {:name "Christian"}}
 *   ```
 * 
 *   Optionally pass additional paths.
 *   
 */
portfolio.actions.dissoc_in_STAR_ = (function portfolio$actions$dissoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12448 = arguments.length;
var i__5770__auto___12449 = (0);
while(true){
if((i__5770__auto___12449 < len__5769__auto___12448)){
args__5775__auto__.push((arguments[i__5770__auto___12449]));

var G__12450 = (i__5770__auto___12449 + (1));
i__5770__auto___12449 = G__12450;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
return cljs.core.reduce.call(null,(function (m__$1,path){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,path))){
return m__$1;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,path))){
return cljs.core.dissoc.call(null,m__$1,cljs.core.first.call(null,path));
} else {
var vec__12445 = cljs.core.reverse.call(null,path);
var seq__12446 = cljs.core.seq.call(null,vec__12445);
var first__12447 = cljs.core.first.call(null,seq__12446);
var seq__12446__$1 = cljs.core.next.call(null,seq__12446);
var k = first__12447;
var ks = seq__12446__$1;
return cljs.core.update_in.call(null,m__$1,cljs.core.reverse.call(null,ks),cljs.core.dissoc,k);

}
}
}),m,args);
}));

(portfolio.actions.dissoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.actions.dissoc_in_STAR_.cljs$lang$applyTo = (function (seq12443){
var G__12444 = cljs.core.first.call(null,seq12443);
var seq12443__$1 = cljs.core.next.call(null,seq12443);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12444,seq12443__$1);
}));

portfolio.actions.atom_QMARK_ = (function portfolio$actions$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x);
}
});
portfolio.actions.get_page_title = (function portfolio$actions$get_page_title(location){
var params = new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location);
var scene = (cljs.core.truth_(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(params))?cljs.core.keyword.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(params)):null);
if(cljs.core.truth_(scene)){
return ["Scene: ",cljs.core.name.call(null,scene)," (",cljs.core.namespace.call(null,scene),") - Portfolio"].join('');
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(params))){
return ["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(params))," - Portfolio"].join('');
} else {
return null;
}
}
});
portfolio.actions.go_to_location = (function portfolio$actions$go_to_location(state,location){
var current_scenes = portfolio.core.get_current_scenes.call(null,state,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var next_scenes = portfolio.core.get_current_scenes.call(null,state,location);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),location], null),new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__12452){
var map__12453 = p__12452;
var map__12453__$1 = cljs.core.__destructure_map.call(null,map__12453);
var on_unmount = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var param = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var id = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__12453__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_unmount,param], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),current_scenes)),cljs.core.map.call(null,(function (p__12454){
var map__12455 = p__12454;
var map__12455__$1 = cljs.core.__destructure_map.call(null,map__12455);
var on_mount = cljs.core.get.call(null,map__12455__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var param = cljs.core.get.call(null,map__12455__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var id = cljs.core.get.call(null,map__12455__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__12455__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_mount,param], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),next_scenes))),new cljs.core.Keyword(null,"release","release",-1534371381),cljs.core.map.call(null,(function (ref){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword("portfolio.actions","portfolio","portfolio.actions/portfolio",-1131433853)], null);
}),cljs.core.filter.call(null,portfolio.actions.atom_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"param","param",2013631823),current_scenes))),new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.map.call(null,(function (p__12456){
var vec__12457 = p__12456;
var ref = cljs.core.nth.call(null,vec__12457,(0),null);
var scene = cljs.core.nth.call(null,vec__12457,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword("portfolio.actions","portfolio","portfolio.actions/portfolio",-1131433853),scene], null);
}),cljs.core.filter.call(null,cljs.core.comp.call(null,portfolio.actions.atom_QMARK_,cljs.core.first),cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.identity),next_scenes))),new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407),portfolio.actions.get_page_title.call(null,location),new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291),portfolio.router.get_url.call(null,location)], null);
});
portfolio.actions.remove_scene_param = (function portfolio$actions$remove_scene_param(var_args){
var G__12461 = arguments.length;
switch (G__12461) {
case 2:
return portfolio.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2 = (function (state,scene_id){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null)], null)], null);
} else {
if(portfolio.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,k){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null)], null)], null);
} else {
if(portfolio.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.actions.remove_scene_param.cljs$lang$maxFixedArity = 3);

portfolio.actions.set_scene_param = (function portfolio$actions$set_scene_param(var_args){
var G__12464 = arguments.length;
switch (G__12464) {
case 3:
return portfolio.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portfolio.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,v){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null)], null)], null);
} else {
if(portfolio.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null),cljs.core.deref.call(null,param)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4 = (function (state,scene_id,k,v){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null)], null);
} else {
if(portfolio.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__12465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null);
if(cljs.core.not.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)))){
return cljs.core.into.call(null,G__12465,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null),k.call(null,cljs.core.deref.call(null,param))], null)], null));
} else {
return G__12465;
}
})()], null);
} else {
return null;
}
}
}));

(portfolio.actions.set_scene_param.cljs$lang$maxFixedArity = 4);

portfolio.actions.process_action_result_BANG_ = (function portfolio$actions$process_action_result_BANG_(app,res){
var seq__12467_12525 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"release","release",-1534371381).cljs$core$IFn$_invoke$arity$1(res));
var chunk__12468_12526 = null;
var count__12469_12527 = (0);
var i__12470_12528 = (0);
while(true){
if((i__12470_12528 < count__12469_12527)){
var vec__12477_12529 = cljs.core._nth.call(null,chunk__12468_12526,i__12470_12528);
var ref_12530 = cljs.core.nth.call(null,vec__12477_12529,(0),null);
var k_12531 = cljs.core.nth.call(null,vec__12477_12529,(1),null);
cljs.core.println.call(null,"Stop watching atom",cljs.core.pr_str.call(null,ref_12530));

cljs.core.remove_watch.call(null,ref_12530,k_12531);


var G__12532 = seq__12467_12525;
var G__12533 = chunk__12468_12526;
var G__12534 = count__12469_12527;
var G__12535 = (i__12470_12528 + (1));
seq__12467_12525 = G__12532;
chunk__12468_12526 = G__12533;
count__12469_12527 = G__12534;
i__12470_12528 = G__12535;
continue;
} else {
var temp__5804__auto___12536 = cljs.core.seq.call(null,seq__12467_12525);
if(temp__5804__auto___12536){
var seq__12467_12537__$1 = temp__5804__auto___12536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12467_12537__$1)){
var c__5568__auto___12538 = cljs.core.chunk_first.call(null,seq__12467_12537__$1);
var G__12539 = cljs.core.chunk_rest.call(null,seq__12467_12537__$1);
var G__12540 = c__5568__auto___12538;
var G__12541 = cljs.core.count.call(null,c__5568__auto___12538);
var G__12542 = (0);
seq__12467_12525 = G__12539;
chunk__12468_12526 = G__12540;
count__12469_12527 = G__12541;
i__12470_12528 = G__12542;
continue;
} else {
var vec__12480_12543 = cljs.core.first.call(null,seq__12467_12537__$1);
var ref_12544 = cljs.core.nth.call(null,vec__12480_12543,(0),null);
var k_12545 = cljs.core.nth.call(null,vec__12480_12543,(1),null);
cljs.core.println.call(null,"Stop watching atom",cljs.core.pr_str.call(null,ref_12544));

cljs.core.remove_watch.call(null,ref_12544,k_12545);


var G__12546 = cljs.core.next.call(null,seq__12467_12537__$1);
var G__12547 = null;
var G__12548 = (0);
var G__12549 = (0);
seq__12467_12525 = G__12546;
chunk__12468_12526 = G__12547;
count__12469_12527 = G__12548;
i__12470_12528 = G__12549;
continue;
}
} else {
}
}
break;
}

var seq__12483_12550 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(res));
var chunk__12484_12551 = null;
var count__12485_12552 = (0);
var i__12486_12553 = (0);
while(true){
if((i__12486_12553 < count__12485_12552)){
var vec__12493_12554 = cljs.core._nth.call(null,chunk__12484_12551,i__12486_12553);
var seq__12494_12555 = cljs.core.seq.call(null,vec__12493_12554);
var first__12495_12556 = cljs.core.first.call(null,seq__12494_12555);
var seq__12494_12557__$1 = cljs.core.next.call(null,seq__12494_12555);
var k_12558 = first__12495_12556;
var first__12495_12559__$1 = cljs.core.first.call(null,seq__12494_12557__$1);
var seq__12494_12560__$2 = cljs.core.next.call(null,seq__12494_12557__$1);
var t_12561 = first__12495_12559__$1;
var first__12495_12562__$2 = cljs.core.first.call(null,seq__12494_12560__$2);
var seq__12494_12563__$3 = cljs.core.next.call(null,seq__12494_12560__$2);
var f_12564 = first__12495_12562__$2;
var args_12565 = seq__12494_12563__$3;
cljs.core.println.call(null,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_12558)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_12561)," with"].join(''),cljs.core.pr_str.call(null,args_12565));

cljs.core.apply.call(null,f_12564,args_12565);


var G__12566 = seq__12483_12550;
var G__12567 = chunk__12484_12551;
var G__12568 = count__12485_12552;
var G__12569 = (i__12486_12553 + (1));
seq__12483_12550 = G__12566;
chunk__12484_12551 = G__12567;
count__12485_12552 = G__12568;
i__12486_12553 = G__12569;
continue;
} else {
var temp__5804__auto___12570 = cljs.core.seq.call(null,seq__12483_12550);
if(temp__5804__auto___12570){
var seq__12483_12571__$1 = temp__5804__auto___12570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12483_12571__$1)){
var c__5568__auto___12572 = cljs.core.chunk_first.call(null,seq__12483_12571__$1);
var G__12573 = cljs.core.chunk_rest.call(null,seq__12483_12571__$1);
var G__12574 = c__5568__auto___12572;
var G__12575 = cljs.core.count.call(null,c__5568__auto___12572);
var G__12576 = (0);
seq__12483_12550 = G__12573;
chunk__12484_12551 = G__12574;
count__12485_12552 = G__12575;
i__12486_12553 = G__12576;
continue;
} else {
var vec__12496_12577 = cljs.core.first.call(null,seq__12483_12571__$1);
var seq__12497_12578 = cljs.core.seq.call(null,vec__12496_12577);
var first__12498_12579 = cljs.core.first.call(null,seq__12497_12578);
var seq__12497_12580__$1 = cljs.core.next.call(null,seq__12497_12578);
var k_12581 = first__12498_12579;
var first__12498_12582__$1 = cljs.core.first.call(null,seq__12497_12580__$1);
var seq__12497_12583__$2 = cljs.core.next.call(null,seq__12497_12580__$1);
var t_12584 = first__12498_12582__$1;
var first__12498_12585__$2 = cljs.core.first.call(null,seq__12497_12583__$2);
var seq__12497_12586__$3 = cljs.core.next.call(null,seq__12497_12583__$2);
var f_12587 = first__12498_12585__$2;
var args_12588 = seq__12497_12586__$3;
cljs.core.println.call(null,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_12581)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_12584)," with"].join(''),cljs.core.pr_str.call(null,args_12588));

cljs.core.apply.call(null,f_12587,args_12588);


var G__12589 = cljs.core.next.call(null,seq__12483_12571__$1);
var G__12590 = null;
var G__12591 = (0);
var G__12592 = (0);
seq__12483_12550 = G__12589;
chunk__12484_12551 = G__12590;
count__12485_12552 = G__12591;
i__12486_12553 = G__12592;
continue;
}
} else {
}
}
break;
}

var seq__12499_12593 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscribe","subscribe",416253756).cljs$core$IFn$_invoke$arity$1(res));
var chunk__12500_12594 = null;
var count__12501_12595 = (0);
var i__12502_12596 = (0);
while(true){
if((i__12502_12596 < count__12501_12595)){
var vec__12509_12597 = cljs.core._nth.call(null,chunk__12500_12594,i__12502_12596);
var ref_12598 = cljs.core.nth.call(null,vec__12509_12597,(0),null);
var k_12599 = cljs.core.nth.call(null,vec__12509_12597,(1),null);
var scene_12600 = cljs.core.nth.call(null,vec__12509_12597,(2),null);
cljs.core.println.call(null,"Start watching atom",cljs.core.pr_str.call(null,ref_12598));

cljs.core.add_watch.call(null,ref_12598,k_12599,((function (seq__12499_12593,chunk__12500_12594,count__12501_12595,i__12502_12596,vec__12509_12597,ref_12598,k_12599,scene_12600){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(seq__12499_12593,chunk__12500_12594,count__12501_12595,i__12502_12596,vec__12509_12597,ref_12598,k_12599,scene_12600))
);


var G__12601 = seq__12499_12593;
var G__12602 = chunk__12500_12594;
var G__12603 = count__12501_12595;
var G__12604 = (i__12502_12596 + (1));
seq__12499_12593 = G__12601;
chunk__12500_12594 = G__12602;
count__12501_12595 = G__12603;
i__12502_12596 = G__12604;
continue;
} else {
var temp__5804__auto___12605 = cljs.core.seq.call(null,seq__12499_12593);
if(temp__5804__auto___12605){
var seq__12499_12606__$1 = temp__5804__auto___12605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12499_12606__$1)){
var c__5568__auto___12607 = cljs.core.chunk_first.call(null,seq__12499_12606__$1);
var G__12608 = cljs.core.chunk_rest.call(null,seq__12499_12606__$1);
var G__12609 = c__5568__auto___12607;
var G__12610 = cljs.core.count.call(null,c__5568__auto___12607);
var G__12611 = (0);
seq__12499_12593 = G__12608;
chunk__12500_12594 = G__12609;
count__12501_12595 = G__12610;
i__12502_12596 = G__12611;
continue;
} else {
var vec__12512_12612 = cljs.core.first.call(null,seq__12499_12606__$1);
var ref_12613 = cljs.core.nth.call(null,vec__12512_12612,(0),null);
var k_12614 = cljs.core.nth.call(null,vec__12512_12612,(1),null);
var scene_12615 = cljs.core.nth.call(null,vec__12512_12612,(2),null);
cljs.core.println.call(null,"Start watching atom",cljs.core.pr_str.call(null,ref_12613));

cljs.core.add_watch.call(null,ref_12613,k_12614,((function (seq__12499_12593,chunk__12500_12594,count__12501_12595,i__12502_12596,vec__12512_12612,ref_12613,k_12614,scene_12615,seq__12499_12606__$1,temp__5804__auto___12605){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(seq__12499_12593,chunk__12500_12594,count__12501_12595,i__12502_12596,vec__12512_12612,ref_12613,k_12614,scene_12615,seq__12499_12606__$1,temp__5804__auto___12605))
);


var G__12616 = cljs.core.next.call(null,seq__12499_12606__$1);
var G__12617 = null;
var G__12618 = (0);
var G__12619 = (0);
seq__12499_12593 = G__12616;
chunk__12500_12594 = G__12617;
count__12501_12595 = G__12618;
i__12502_12596 = G__12619;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___12620 = new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___12620)){
var url_12621 = temp__5804__auto___12620;
if(cljs.core._EQ_.call(null,url_12621,portfolio.router.get_current_url.call(null))){
} else {
cljs.core.println.call(null,"Updating browser URL to",url_12621);

history.pushState(false,false,url_12621);
}
} else {
}

var temp__5804__auto___12622 = new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___12622)){
var title_12623 = temp__5804__auto___12622;
(document.title = title_12623);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res);
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res))){
cljs.core.println.call(null,":assoc-in",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res)));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res))){
cljs.core.println.call(null,":dissoc-in",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)));
} else {
}

cljs.core.swap_BANG_.call(null,app,(function (state){
return cljs.core.apply.call(null,portfolio.actions.assoc_in_STAR_,cljs.core.apply.call(null,portfolio.actions.dissoc_in_STAR_,state,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res));
}));
} else {
}

var seq__12515_12624 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res));
var chunk__12516_12625 = null;
var count__12517_12626 = (0);
var i__12518_12627 = (0);
while(true){
if((i__12518_12627 < count__12517_12626)){
var action_12628 = cljs.core._nth.call(null,chunk__12516_12625,i__12518_12627);
portfolio.actions.execute_action_BANG_.call(null,app,action_12628);


var G__12629 = seq__12515_12624;
var G__12630 = chunk__12516_12625;
var G__12631 = count__12517_12626;
var G__12632 = (i__12518_12627 + (1));
seq__12515_12624 = G__12629;
chunk__12516_12625 = G__12630;
count__12517_12626 = G__12631;
i__12518_12627 = G__12632;
continue;
} else {
var temp__5804__auto___12633 = cljs.core.seq.call(null,seq__12515_12624);
if(temp__5804__auto___12633){
var seq__12515_12634__$1 = temp__5804__auto___12633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12515_12634__$1)){
var c__5568__auto___12635 = cljs.core.chunk_first.call(null,seq__12515_12634__$1);
var G__12636 = cljs.core.chunk_rest.call(null,seq__12515_12634__$1);
var G__12637 = c__5568__auto___12635;
var G__12638 = cljs.core.count.call(null,c__5568__auto___12635);
var G__12639 = (0);
seq__12515_12624 = G__12636;
chunk__12516_12625 = G__12637;
count__12517_12626 = G__12638;
i__12518_12627 = G__12639;
continue;
} else {
var action_12640 = cljs.core.first.call(null,seq__12515_12634__$1);
portfolio.actions.execute_action_BANG_.call(null,app,action_12640);


var G__12641 = cljs.core.next.call(null,seq__12515_12634__$1);
var G__12642 = null;
var G__12643 = (0);
var G__12644 = (0);
seq__12515_12624 = G__12641;
chunk__12516_12625 = G__12642;
count__12517_12626 = G__12643;
i__12518_12627 = G__12644;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___12645 = new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___12645)){
var vec__12519_12646 = temp__5804__auto___12645;
var ref_12647 = cljs.core.nth.call(null,vec__12519_12646,(0),null);
var path_12648 = cljs.core.nth.call(null,vec__12519_12646,(1),null);
var v_12649 = cljs.core.nth.call(null,vec__12519_12646,(2),null);
cljs.core.swap_BANG_.call(null,ref_12647,cljs.core.assoc_in,path_12648,v_12649);
} else {
}

var temp__5804__auto___12650 = new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___12650)){
var vec__12522_12651 = temp__5804__auto___12650;
var ref_12652 = cljs.core.nth.call(null,vec__12522_12651,(0),null);
var v_12653 = cljs.core.nth.call(null,vec__12522_12651,(1),null);
cljs.core.reset_BANG_.call(null,ref_12652,v_12653);
} else {
}

var temp__5804__auto___12654 = new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___12654)){
var paths_12655 = temp__5804__auto___12654;
portfolio.css.load_css_files.call(null,paths_12655);
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto__)){
var paths = temp__5804__auto__;
return portfolio.css.replace_loaded_css_files.call(null,paths);
} else {
return null;
}
});
portfolio.actions.execute_action_BANG_ = (function portfolio$actions$execute_action_BANG_(app,action){
cljs.core.println.call(null,"execute-action!",action);

portfolio.actions.process_action_result_BANG_.call(null,app,(function (){var G__12656 = cljs.core.first.call(null,action);
var G__12656__$1 = (((G__12656 instanceof cljs.core.Keyword))?G__12656.fqn:null);
switch (G__12656__$1) {
case "assoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),cljs.core.rest.call(null,action)], null);

break;
case "dissoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),cljs.core.rest.call(null,action)], null);

break;
case "fn/call":
var vec__12657 = cljs.core.rest.call(null,action);
var seq__12658 = cljs.core.seq.call(null,vec__12657);
var first__12659 = cljs.core.first.call(null,seq__12658);
var seq__12658__$1 = cljs.core.next.call(null,seq__12658);
var fn = first__12659;
var args = seq__12658__$1;
return cljs.core.apply.call(null,fn,args);

break;
case "go-to-location":
return cljs.core.apply.call(null,portfolio.actions.go_to_location,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "go-to-current-location":
return portfolio.actions.go_to_location.call(null,cljs.core.deref.call(null,app),portfolio.router.get_current_location.call(null));

break;
case "set-css-files":
var vec__12660 = cljs.core.rest.call(null,action);
var paths = cljs.core.nth.call(null,vec__12660,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-paths","css-paths",582305563)], null),paths], null),new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475),paths,new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968),paths], null);

break;
case "remove-scene-param":
return cljs.core.apply.call(null,portfolio.actions.remove_scene_param,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "set-scene-param":
return cljs.core.apply.call(null,portfolio.actions.set_scene_param,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12656__$1)].join('')));

}
})());

return app;
});
portfolio.actions.available_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),null,new cljs.core.Keyword(null,"remove-scene-param","remove-scene-param",-1304315187),null,new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583),null,new cljs.core.Keyword(null,"set-scene-param","set-scene-param",234226032),null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),null,new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),null,new cljs.core.Keyword("fn","call","fn/call",-519998786),null], null), null);
portfolio.actions.actions_QMARK_ = (function portfolio$actions$actions_QMARK_(x){
return ((cljs.core.sequential_QMARK_.call(null,x)) && ((((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.every_QMARK_.call(null,(function (p1__12664_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__12664_SHARP_)) && (cljs.core.contains_QMARK_.call(null,portfolio.actions.available_actions,cljs.core.first.call(null,p1__12664_SHARP_))));
}),x)))));
});
portfolio.actions.parse_int = (function portfolio$actions$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not_EQ_.call(null,n,n)){
return (0);
} else {
return n;
}
});
/**
 * Given a Portfolio `app` instance and some prepared data to render, wrap
 *   collections of actions in a function that executes these actions. Using this
 *   function makes it possible to prepare event handlers as a sequence of action
 *   tuples, and have them seemlessly emitted as actions in the components.
 * 
 *   If you need to access the `.-value` of the event target (e.g. for on-change on
 *   input fields, etc), use `:event.target/value` as a placeholder in your action,
 *   and it will be replaced with the value.
 */
portfolio.actions.actionize_data = (function portfolio$actions$actionize_data(app,data){
return clojure.walk.prewalk.call(null,(function (x){
if(portfolio.actions.actions_QMARK_.call(null,x)){
return (function (e){
var seq__12665 = cljs.core.seq.call(null,x);
var chunk__12666 = null;
var count__12667 = (0);
var i__12668 = (0);
while(true){
if((i__12668 < count__12667)){
var action = cljs.core._nth.call(null,chunk__12666,i__12668);
portfolio.actions.execute_action_BANG_.call(null,app,clojure.walk.prewalk.call(null,((function (seq__12665,chunk__12666,count__12667,i__12668,action){
return (function (ax){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__12673 = e;
var G__12673__$1 = (((G__12673 == null))?null:G__12673.target);
if((G__12673__$1 == null)){
return null;
} else {
return G__12673__$1.value;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__12674 = e;
var G__12674__$1 = (((G__12674 == null))?null:G__12674.target);
var G__12674__$2 = (((G__12674__$1 == null))?null:G__12674__$1.value);
if((G__12674__$2 == null)){
return null;
} else {
return portfolio.actions.parse_int.call(null,G__12674__$2);
}
} else {
return ax;

}
}
});})(seq__12665,chunk__12666,count__12667,i__12668,action))
,action));


var G__12677 = seq__12665;
var G__12678 = chunk__12666;
var G__12679 = count__12667;
var G__12680 = (i__12668 + (1));
seq__12665 = G__12677;
chunk__12666 = G__12678;
count__12667 = G__12679;
i__12668 = G__12680;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12665);
if(temp__5804__auto__){
var seq__12665__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12665__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12665__$1);
var G__12681 = cljs.core.chunk_rest.call(null,seq__12665__$1);
var G__12682 = c__5568__auto__;
var G__12683 = cljs.core.count.call(null,c__5568__auto__);
var G__12684 = (0);
seq__12665 = G__12681;
chunk__12666 = G__12682;
count__12667 = G__12683;
i__12668 = G__12684;
continue;
} else {
var action = cljs.core.first.call(null,seq__12665__$1);
portfolio.actions.execute_action_BANG_.call(null,app,clojure.walk.prewalk.call(null,((function (seq__12665,chunk__12666,count__12667,i__12668,action,seq__12665__$1,temp__5804__auto__){
return (function (ax){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__12675 = e;
var G__12675__$1 = (((G__12675 == null))?null:G__12675.target);
if((G__12675__$1 == null)){
return null;
} else {
return G__12675__$1.value;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__12676 = e;
var G__12676__$1 = (((G__12676 == null))?null:G__12676.target);
var G__12676__$2 = (((G__12676__$1 == null))?null:G__12676__$1.value);
if((G__12676__$2 == null)){
return null;
} else {
return portfolio.actions.parse_int.call(null,G__12676__$2);
}
} else {
return ax;

}
}
});})(seq__12665,chunk__12666,count__12667,i__12668,action,seq__12665__$1,temp__5804__auto__))
,action));


var G__12685 = cljs.core.next.call(null,seq__12665__$1);
var G__12686 = null;
var G__12687 = (0);
var G__12688 = (0);
seq__12665 = G__12685;
chunk__12666 = G__12686;
count__12667 = G__12687;
i__12668 = G__12688;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return x;
}
}),data);
});
