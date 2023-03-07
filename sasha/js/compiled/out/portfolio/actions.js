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
var len__5769__auto___16180 = arguments.length;
var i__5770__auto___16181 = (0);
while(true){
if((i__5770__auto___16181 < len__5769__auto___16180)){
args__5775__auto__.push((arguments[i__5770__auto___16181]));

var G__16182 = (i__5770__auto___16181 + (1));
i__5770__auto___16181 = G__16182;
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

return cljs.core.reduce.call(null,(function (m__$1,p__16176){
var vec__16177 = p__16176;
var path = cljs.core.nth.call(null,vec__16177,(0),null);
var v = cljs.core.nth.call(null,vec__16177,(1),null);
return cljs.core.assoc_in.call(null,m__$1,path,v);
}),m,cljs.core.partition.call(null,(2),args));
}));

(portfolio.actions.assoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.actions.assoc_in_STAR_.cljs$lang$applyTo = (function (seq16174){
var G__16175 = cljs.core.first.call(null,seq16174);
var seq16174__$1 = cljs.core.next.call(null,seq16174);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16175,seq16174__$1);
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
var len__5769__auto___16188 = arguments.length;
var i__5770__auto___16189 = (0);
while(true){
if((i__5770__auto___16189 < len__5769__auto___16188)){
args__5775__auto__.push((arguments[i__5770__auto___16189]));

var G__16190 = (i__5770__auto___16189 + (1));
i__5770__auto___16189 = G__16190;
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
var vec__16185 = cljs.core.reverse.call(null,path);
var seq__16186 = cljs.core.seq.call(null,vec__16185);
var first__16187 = cljs.core.first.call(null,seq__16186);
var seq__16186__$1 = cljs.core.next.call(null,seq__16186);
var k = first__16187;
var ks = seq__16186__$1;
return cljs.core.update_in.call(null,m__$1,cljs.core.reverse.call(null,ks),cljs.core.dissoc,k);

}
}
}),m,args);
}));

(portfolio.actions.dissoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.actions.dissoc_in_STAR_.cljs$lang$applyTo = (function (seq16183){
var G__16184 = cljs.core.first.call(null,seq16183);
var seq16183__$1 = cljs.core.next.call(null,seq16183);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16184,seq16183__$1);
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
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),location], null),new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__16192){
var map__16193 = p__16192;
var map__16193__$1 = cljs.core.__destructure_map.call(null,map__16193);
var on_unmount = cljs.core.get.call(null,map__16193__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var param = cljs.core.get.call(null,map__16193__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var id = cljs.core.get.call(null,map__16193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__16193__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_unmount,param], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),current_scenes)),cljs.core.map.call(null,(function (p__16194){
var map__16195 = p__16194;
var map__16195__$1 = cljs.core.__destructure_map.call(null,map__16195);
var on_mount = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var param = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"param","param",2013631823));
var id = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__16195__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){var or__5045__auto__ = id;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_mount,param], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),next_scenes))),new cljs.core.Keyword(null,"release","release",-1534371381),cljs.core.map.call(null,(function (ref){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword("portfolio.actions","portfolio","portfolio.actions/portfolio",-1131433853)], null);
}),cljs.core.filter.call(null,portfolio.actions.atom_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"param","param",2013631823),current_scenes))),new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.map.call(null,(function (p__16196){
var vec__16197 = p__16196;
var ref = cljs.core.nth.call(null,vec__16197,(0),null);
var scene = cljs.core.nth.call(null,vec__16197,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,new cljs.core.Keyword("portfolio.actions","portfolio","portfolio.actions/portfolio",-1131433853),scene], null);
}),cljs.core.filter.call(null,cljs.core.comp.call(null,portfolio.actions.atom_QMARK_,cljs.core.first),cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.identity),next_scenes))),new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407),portfolio.actions.get_page_title.call(null,location),new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291),portfolio.router.get_url.call(null,location)], null);
});
portfolio.actions.remove_scene_param = (function portfolio$actions$remove_scene_param(var_args){
var G__16201 = arguments.length;
switch (G__16201) {
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
var G__16204 = arguments.length;
switch (G__16204) {
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__16205 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null);
if(cljs.core.not.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)))){
return cljs.core.into.call(null,G__16205,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null),k.call(null,cljs.core.deref.call(null,param))], null)], null));
} else {
return G__16205;
}
})()], null);
} else {
return null;
}
}
}));

(portfolio.actions.set_scene_param.cljs$lang$maxFixedArity = 4);

portfolio.actions.process_action_result_BANG_ = (function portfolio$actions$process_action_result_BANG_(app,res){
var seq__16207_16265 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"release","release",-1534371381).cljs$core$IFn$_invoke$arity$1(res));
var chunk__16208_16266 = null;
var count__16209_16267 = (0);
var i__16210_16268 = (0);
while(true){
if((i__16210_16268 < count__16209_16267)){
var vec__16217_16269 = cljs.core._nth.call(null,chunk__16208_16266,i__16210_16268);
var ref_16270 = cljs.core.nth.call(null,vec__16217_16269,(0),null);
var k_16271 = cljs.core.nth.call(null,vec__16217_16269,(1),null);
cljs.core.println.call(null,"Stop watching atom",cljs.core.pr_str.call(null,ref_16270));

cljs.core.remove_watch.call(null,ref_16270,k_16271);


var G__16272 = seq__16207_16265;
var G__16273 = chunk__16208_16266;
var G__16274 = count__16209_16267;
var G__16275 = (i__16210_16268 + (1));
seq__16207_16265 = G__16272;
chunk__16208_16266 = G__16273;
count__16209_16267 = G__16274;
i__16210_16268 = G__16275;
continue;
} else {
var temp__5804__auto___16276 = cljs.core.seq.call(null,seq__16207_16265);
if(temp__5804__auto___16276){
var seq__16207_16277__$1 = temp__5804__auto___16276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16207_16277__$1)){
var c__5568__auto___16278 = cljs.core.chunk_first.call(null,seq__16207_16277__$1);
var G__16279 = cljs.core.chunk_rest.call(null,seq__16207_16277__$1);
var G__16280 = c__5568__auto___16278;
var G__16281 = cljs.core.count.call(null,c__5568__auto___16278);
var G__16282 = (0);
seq__16207_16265 = G__16279;
chunk__16208_16266 = G__16280;
count__16209_16267 = G__16281;
i__16210_16268 = G__16282;
continue;
} else {
var vec__16220_16283 = cljs.core.first.call(null,seq__16207_16277__$1);
var ref_16284 = cljs.core.nth.call(null,vec__16220_16283,(0),null);
var k_16285 = cljs.core.nth.call(null,vec__16220_16283,(1),null);
cljs.core.println.call(null,"Stop watching atom",cljs.core.pr_str.call(null,ref_16284));

cljs.core.remove_watch.call(null,ref_16284,k_16285);


var G__16286 = cljs.core.next.call(null,seq__16207_16277__$1);
var G__16287 = null;
var G__16288 = (0);
var G__16289 = (0);
seq__16207_16265 = G__16286;
chunk__16208_16266 = G__16287;
count__16209_16267 = G__16288;
i__16210_16268 = G__16289;
continue;
}
} else {
}
}
break;
}

var seq__16223_16290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(res));
var chunk__16224_16291 = null;
var count__16225_16292 = (0);
var i__16226_16293 = (0);
while(true){
if((i__16226_16293 < count__16225_16292)){
var vec__16233_16294 = cljs.core._nth.call(null,chunk__16224_16291,i__16226_16293);
var seq__16234_16295 = cljs.core.seq.call(null,vec__16233_16294);
var first__16235_16296 = cljs.core.first.call(null,seq__16234_16295);
var seq__16234_16297__$1 = cljs.core.next.call(null,seq__16234_16295);
var k_16298 = first__16235_16296;
var first__16235_16299__$1 = cljs.core.first.call(null,seq__16234_16297__$1);
var seq__16234_16300__$2 = cljs.core.next.call(null,seq__16234_16297__$1);
var t_16301 = first__16235_16299__$1;
var first__16235_16302__$2 = cljs.core.first.call(null,seq__16234_16300__$2);
var seq__16234_16303__$3 = cljs.core.next.call(null,seq__16234_16300__$2);
var f_16304 = first__16235_16302__$2;
var args_16305 = seq__16234_16303__$3;
cljs.core.println.call(null,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_16298)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_16301)," with"].join(''),cljs.core.pr_str.call(null,args_16305));

cljs.core.apply.call(null,f_16304,args_16305);


var G__16306 = seq__16223_16290;
var G__16307 = chunk__16224_16291;
var G__16308 = count__16225_16292;
var G__16309 = (i__16226_16293 + (1));
seq__16223_16290 = G__16306;
chunk__16224_16291 = G__16307;
count__16225_16292 = G__16308;
i__16226_16293 = G__16309;
continue;
} else {
var temp__5804__auto___16310 = cljs.core.seq.call(null,seq__16223_16290);
if(temp__5804__auto___16310){
var seq__16223_16311__$1 = temp__5804__auto___16310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16223_16311__$1)){
var c__5568__auto___16312 = cljs.core.chunk_first.call(null,seq__16223_16311__$1);
var G__16313 = cljs.core.chunk_rest.call(null,seq__16223_16311__$1);
var G__16314 = c__5568__auto___16312;
var G__16315 = cljs.core.count.call(null,c__5568__auto___16312);
var G__16316 = (0);
seq__16223_16290 = G__16313;
chunk__16224_16291 = G__16314;
count__16225_16292 = G__16315;
i__16226_16293 = G__16316;
continue;
} else {
var vec__16236_16317 = cljs.core.first.call(null,seq__16223_16311__$1);
var seq__16237_16318 = cljs.core.seq.call(null,vec__16236_16317);
var first__16238_16319 = cljs.core.first.call(null,seq__16237_16318);
var seq__16237_16320__$1 = cljs.core.next.call(null,seq__16237_16318);
var k_16321 = first__16238_16319;
var first__16238_16322__$1 = cljs.core.first.call(null,seq__16237_16320__$1);
var seq__16237_16323__$2 = cljs.core.next.call(null,seq__16237_16320__$1);
var t_16324 = first__16238_16322__$1;
var first__16238_16325__$2 = cljs.core.first.call(null,seq__16237_16323__$2);
var seq__16237_16326__$3 = cljs.core.next.call(null,seq__16237_16323__$2);
var f_16327 = first__16238_16325__$2;
var args_16328 = seq__16237_16326__$3;
cljs.core.println.call(null,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_16321)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_16324)," with"].join(''),cljs.core.pr_str.call(null,args_16328));

cljs.core.apply.call(null,f_16327,args_16328);


var G__16329 = cljs.core.next.call(null,seq__16223_16311__$1);
var G__16330 = null;
var G__16331 = (0);
var G__16332 = (0);
seq__16223_16290 = G__16329;
chunk__16224_16291 = G__16330;
count__16225_16292 = G__16331;
i__16226_16293 = G__16332;
continue;
}
} else {
}
}
break;
}

var seq__16239_16333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscribe","subscribe",416253756).cljs$core$IFn$_invoke$arity$1(res));
var chunk__16240_16334 = null;
var count__16241_16335 = (0);
var i__16242_16336 = (0);
while(true){
if((i__16242_16336 < count__16241_16335)){
var vec__16249_16337 = cljs.core._nth.call(null,chunk__16240_16334,i__16242_16336);
var ref_16338 = cljs.core.nth.call(null,vec__16249_16337,(0),null);
var k_16339 = cljs.core.nth.call(null,vec__16249_16337,(1),null);
var scene_16340 = cljs.core.nth.call(null,vec__16249_16337,(2),null);
cljs.core.println.call(null,"Start watching atom",cljs.core.pr_str.call(null,ref_16338));

cljs.core.add_watch.call(null,ref_16338,k_16339,((function (seq__16239_16333,chunk__16240_16334,count__16241_16335,i__16242_16336,vec__16249_16337,ref_16338,k_16339,scene_16340){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(seq__16239_16333,chunk__16240_16334,count__16241_16335,i__16242_16336,vec__16249_16337,ref_16338,k_16339,scene_16340))
);


var G__16341 = seq__16239_16333;
var G__16342 = chunk__16240_16334;
var G__16343 = count__16241_16335;
var G__16344 = (i__16242_16336 + (1));
seq__16239_16333 = G__16341;
chunk__16240_16334 = G__16342;
count__16241_16335 = G__16343;
i__16242_16336 = G__16344;
continue;
} else {
var temp__5804__auto___16345 = cljs.core.seq.call(null,seq__16239_16333);
if(temp__5804__auto___16345){
var seq__16239_16346__$1 = temp__5804__auto___16345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16239_16346__$1)){
var c__5568__auto___16347 = cljs.core.chunk_first.call(null,seq__16239_16346__$1);
var G__16348 = cljs.core.chunk_rest.call(null,seq__16239_16346__$1);
var G__16349 = c__5568__auto___16347;
var G__16350 = cljs.core.count.call(null,c__5568__auto___16347);
var G__16351 = (0);
seq__16239_16333 = G__16348;
chunk__16240_16334 = G__16349;
count__16241_16335 = G__16350;
i__16242_16336 = G__16351;
continue;
} else {
var vec__16252_16352 = cljs.core.first.call(null,seq__16239_16346__$1);
var ref_16353 = cljs.core.nth.call(null,vec__16252_16352,(0),null);
var k_16354 = cljs.core.nth.call(null,vec__16252_16352,(1),null);
var scene_16355 = cljs.core.nth.call(null,vec__16252_16352,(2),null);
cljs.core.println.call(null,"Start watching atom",cljs.core.pr_str.call(null,ref_16353));

cljs.core.add_watch.call(null,ref_16353,k_16354,((function (seq__16239_16333,chunk__16240_16334,count__16241_16335,i__16242_16336,vec__16252_16352,ref_16353,k_16354,scene_16355,seq__16239_16346__$1,temp__5804__auto___16345){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(seq__16239_16333,chunk__16240_16334,count__16241_16335,i__16242_16336,vec__16252_16352,ref_16353,k_16354,scene_16355,seq__16239_16346__$1,temp__5804__auto___16345))
);


var G__16356 = cljs.core.next.call(null,seq__16239_16346__$1);
var G__16357 = null;
var G__16358 = (0);
var G__16359 = (0);
seq__16239_16333 = G__16356;
chunk__16240_16334 = G__16357;
count__16241_16335 = G__16358;
i__16242_16336 = G__16359;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___16360 = new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___16360)){
var url_16361 = temp__5804__auto___16360;
if(cljs.core._EQ_.call(null,url_16361,portfolio.router.get_current_url.call(null))){
} else {
cljs.core.println.call(null,"Updating browser URL to",url_16361);

history.pushState(false,false,url_16361);
}
} else {
}

var temp__5804__auto___16362 = new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___16362)){
var title_16363 = temp__5804__auto___16362;
(document.title = title_16363);
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

var seq__16255_16364 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res));
var chunk__16256_16365 = null;
var count__16257_16366 = (0);
var i__16258_16367 = (0);
while(true){
if((i__16258_16367 < count__16257_16366)){
var action_16368 = cljs.core._nth.call(null,chunk__16256_16365,i__16258_16367);
portfolio.actions.execute_action_BANG_.call(null,app,action_16368);


var G__16369 = seq__16255_16364;
var G__16370 = chunk__16256_16365;
var G__16371 = count__16257_16366;
var G__16372 = (i__16258_16367 + (1));
seq__16255_16364 = G__16369;
chunk__16256_16365 = G__16370;
count__16257_16366 = G__16371;
i__16258_16367 = G__16372;
continue;
} else {
var temp__5804__auto___16373 = cljs.core.seq.call(null,seq__16255_16364);
if(temp__5804__auto___16373){
var seq__16255_16374__$1 = temp__5804__auto___16373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16255_16374__$1)){
var c__5568__auto___16375 = cljs.core.chunk_first.call(null,seq__16255_16374__$1);
var G__16376 = cljs.core.chunk_rest.call(null,seq__16255_16374__$1);
var G__16377 = c__5568__auto___16375;
var G__16378 = cljs.core.count.call(null,c__5568__auto___16375);
var G__16379 = (0);
seq__16255_16364 = G__16376;
chunk__16256_16365 = G__16377;
count__16257_16366 = G__16378;
i__16258_16367 = G__16379;
continue;
} else {
var action_16380 = cljs.core.first.call(null,seq__16255_16374__$1);
portfolio.actions.execute_action_BANG_.call(null,app,action_16380);


var G__16381 = cljs.core.next.call(null,seq__16255_16374__$1);
var G__16382 = null;
var G__16383 = (0);
var G__16384 = (0);
seq__16255_16364 = G__16381;
chunk__16256_16365 = G__16382;
count__16257_16366 = G__16383;
i__16258_16367 = G__16384;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___16385 = new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___16385)){
var vec__16259_16386 = temp__5804__auto___16385;
var ref_16387 = cljs.core.nth.call(null,vec__16259_16386,(0),null);
var path_16388 = cljs.core.nth.call(null,vec__16259_16386,(1),null);
var v_16389 = cljs.core.nth.call(null,vec__16259_16386,(2),null);
cljs.core.swap_BANG_.call(null,ref_16387,cljs.core.assoc_in,path_16388,v_16389);
} else {
}

var temp__5804__auto___16390 = new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___16390)){
var vec__16262_16391 = temp__5804__auto___16390;
var ref_16392 = cljs.core.nth.call(null,vec__16262_16391,(0),null);
var v_16393 = cljs.core.nth.call(null,vec__16262_16391,(1),null);
cljs.core.reset_BANG_.call(null,ref_16392,v_16393);
} else {
}

var temp__5804__auto___16394 = new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___16394)){
var paths_16395 = temp__5804__auto___16394;
portfolio.css.load_css_files.call(null,paths_16395);
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

portfolio.actions.process_action_result_BANG_.call(null,app,(function (){var G__16396 = cljs.core.first.call(null,action);
var G__16396__$1 = (((G__16396 instanceof cljs.core.Keyword))?G__16396.fqn:null);
switch (G__16396__$1) {
case "assoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),cljs.core.rest.call(null,action)], null);

break;
case "dissoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),cljs.core.rest.call(null,action)], null);

break;
case "fn/call":
var vec__16397 = cljs.core.rest.call(null,action);
var seq__16398 = cljs.core.seq.call(null,vec__16397);
var first__16399 = cljs.core.first.call(null,seq__16398);
var seq__16398__$1 = cljs.core.next.call(null,seq__16398);
var fn = first__16399;
var args = seq__16398__$1;
return cljs.core.apply.call(null,fn,args);

break;
case "go-to-location":
return cljs.core.apply.call(null,portfolio.actions.go_to_location,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "go-to-current-location":
return portfolio.actions.go_to_location.call(null,cljs.core.deref.call(null,app),portfolio.router.get_current_location.call(null));

break;
case "set-css-files":
var vec__16400 = cljs.core.rest.call(null,action);
var paths = cljs.core.nth.call(null,vec__16400,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-paths","css-paths",582305563)], null),paths], null),new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475),paths,new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968),paths], null);

break;
case "remove-scene-param":
return cljs.core.apply.call(null,portfolio.actions.remove_scene_param,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "set-scene-param":
return cljs.core.apply.call(null,portfolio.actions.set_scene_param,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16396__$1)].join('')));

}
})());

return app;
});
portfolio.actions.available_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),null,new cljs.core.Keyword(null,"remove-scene-param","remove-scene-param",-1304315187),null,new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583),null,new cljs.core.Keyword(null,"set-scene-param","set-scene-param",234226032),null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),null,new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),null,new cljs.core.Keyword("fn","call","fn/call",-519998786),null], null), null);
portfolio.actions.actions_QMARK_ = (function portfolio$actions$actions_QMARK_(x){
return ((cljs.core.sequential_QMARK_.call(null,x)) && ((((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.every_QMARK_.call(null,(function (p1__16404_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__16404_SHARP_)) && (cljs.core.contains_QMARK_.call(null,portfolio.actions.available_actions,cljs.core.first.call(null,p1__16404_SHARP_))));
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
var seq__16405 = cljs.core.seq.call(null,x);
var chunk__16406 = null;
var count__16407 = (0);
var i__16408 = (0);
while(true){
if((i__16408 < count__16407)){
var action = cljs.core._nth.call(null,chunk__16406,i__16408);
portfolio.actions.execute_action_BANG_.call(null,app,clojure.walk.prewalk.call(null,((function (seq__16405,chunk__16406,count__16407,i__16408,action){
return (function (ax){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__16413 = e;
var G__16413__$1 = (((G__16413 == null))?null:G__16413.target);
if((G__16413__$1 == null)){
return null;
} else {
return G__16413__$1.value;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__16414 = e;
var G__16414__$1 = (((G__16414 == null))?null:G__16414.target);
var G__16414__$2 = (((G__16414__$1 == null))?null:G__16414__$1.value);
if((G__16414__$2 == null)){
return null;
} else {
return portfolio.actions.parse_int.call(null,G__16414__$2);
}
} else {
return ax;

}
}
});})(seq__16405,chunk__16406,count__16407,i__16408,action))
,action));


var G__16417 = seq__16405;
var G__16418 = chunk__16406;
var G__16419 = count__16407;
var G__16420 = (i__16408 + (1));
seq__16405 = G__16417;
chunk__16406 = G__16418;
count__16407 = G__16419;
i__16408 = G__16420;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16405);
if(temp__5804__auto__){
var seq__16405__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16405__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__16405__$1);
var G__16421 = cljs.core.chunk_rest.call(null,seq__16405__$1);
var G__16422 = c__5568__auto__;
var G__16423 = cljs.core.count.call(null,c__5568__auto__);
var G__16424 = (0);
seq__16405 = G__16421;
chunk__16406 = G__16422;
count__16407 = G__16423;
i__16408 = G__16424;
continue;
} else {
var action = cljs.core.first.call(null,seq__16405__$1);
portfolio.actions.execute_action_BANG_.call(null,app,clojure.walk.prewalk.call(null,((function (seq__16405,chunk__16406,count__16407,i__16408,action,seq__16405__$1,temp__5804__auto__){
return (function (ax){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__16415 = e;
var G__16415__$1 = (((G__16415 == null))?null:G__16415.target);
if((G__16415__$1 == null)){
return null;
} else {
return G__16415__$1.value;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__16416 = e;
var G__16416__$1 = (((G__16416 == null))?null:G__16416.target);
var G__16416__$2 = (((G__16416__$1 == null))?null:G__16416__$1.value);
if((G__16416__$2 == null)){
return null;
} else {
return portfolio.actions.parse_int.call(null,G__16416__$2);
}
} else {
return ax;

}
}
});})(seq__16405,chunk__16406,count__16407,i__16408,action,seq__16405__$1,temp__5804__auto__))
,action));


var G__16425 = cljs.core.next.call(null,seq__16405__$1);
var G__16426 = null;
var G__16427 = (0);
var G__16428 = (0);
seq__16405 = G__16425;
chunk__16406 = G__16426;
count__16407 = G__16427;
i__16408 = G__16428;
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
