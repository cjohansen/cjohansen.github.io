// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.actions');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.css');
goog.require('portfolio.ui.layout');
goog.require('portfolio.ui.router');
goog.require('portfolio.ui.routes');
goog.require('portfolio.ui.scene');
goog.require('portfolio.ui.scene_browser');
goog.require('portfolio.ui.search.protocols');
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
portfolio.ui.actions.assoc_in_STAR_ = (function portfolio$ui$actions$assoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17398 = arguments.length;
var i__5770__auto___17399 = (0);
while(true){
if((i__5770__auto___17399 < len__5769__auto___17398)){
args__5775__auto__.push((arguments[i__5770__auto___17399]));

var G__17400 = (i__5770__auto___17399 + (1));
i__5770__auto___17399 = G__17400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.actions.assoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.count.call(null,args),(2)))){
} else {
throw (new Error(["Assert failed: ","assoc-in* takes a map and pairs of path value","\n","(= 0 (mod (count args) 2))"].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),args)))){
} else {
throw (new Error(["Assert failed: ","each path should be a vector","\n","(->> args (partition 2) (map first) (every? vector?))"].join('')));
}

return cljs.core.reduce.call(null,(function (m__$1,p__17394){
var vec__17395 = p__17394;
var path = cljs.core.nth.call(null,vec__17395,(0),null);
var v = cljs.core.nth.call(null,vec__17395,(1),null);
return cljs.core.assoc_in.call(null,m__$1,path,v);
}),m,cljs.core.partition.call(null,(2),args));
}));

(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.assoc_in_STAR_.cljs$lang$applyTo = (function (seq17392){
var G__17393 = cljs.core.first.call(null,seq17392);
var seq17392__$1 = cljs.core.next.call(null,seq17392);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17393,seq17392__$1);
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
portfolio.ui.actions.dissoc_in_STAR_ = (function portfolio$ui$actions$dissoc_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17406 = arguments.length;
var i__5770__auto___17407 = (0);
while(true){
if((i__5770__auto___17407 < len__5769__auto___17406)){
args__5775__auto__.push((arguments[i__5770__auto___17407]));

var G__17408 = (i__5770__auto___17407 + (1));
i__5770__auto___17407 = G__17408;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.actions.dissoc_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (m,args){
return cljs.core.reduce.call(null,(function (m__$1,path){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,path))){
return m__$1;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,path))){
return cljs.core.dissoc.call(null,m__$1,cljs.core.first.call(null,path));
} else {
var vec__17403 = cljs.core.reverse.call(null,path);
var seq__17404 = cljs.core.seq.call(null,vec__17403);
var first__17405 = cljs.core.first.call(null,seq__17404);
var seq__17404__$1 = cljs.core.next.call(null,seq__17404);
var k = first__17405;
var ks = seq__17404__$1;
return cljs.core.update_in.call(null,m__$1,cljs.core.reverse.call(null,ks),cljs.core.dissoc,k);

}
}
}),m,args);
}));

(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.actions.dissoc_in_STAR_.cljs$lang$applyTo = (function (seq17401){
var G__17402 = cljs.core.first.call(null,seq17401);
var seq17401__$1 = cljs.core.next.call(null,seq17401);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17402,seq17401__$1);
}));

portfolio.ui.actions.atom_QMARK_ = (function portfolio$ui$actions$atom_QMARK_(x){
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
portfolio.ui.actions.get_page_title = (function portfolio$ui$actions$get_page_title(state,selection){
var suffix = (cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))?[" - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state))].join(''):null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))){
var G__17410 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(selection);
var G__17410__$1 = (((G__17410 instanceof cljs.core.Keyword))?G__17410.fqn:null);
switch (G__17410__$1) {
case "scene":
return ["Scene: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
case "collection":
return ["Collection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))),suffix].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17410__$1)].join('')));

}
} else {
return ["No scenes found",suffix].join('');
}
});
portfolio.ui.actions.go_to_location = (function portfolio$ui$actions$go_to_location(state,location){
var id = portfolio.ui.routes.get_id.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var current_scenes = portfolio.ui.collection.get_selected_scenes.call(null,state,id);
var selection = portfolio.ui.collection.get_selection.call(null,state,portfolio.ui.routes.get_id.call(null,location));
var layout = portfolio.ui.layout.get_view_layout.call(null,state,selection);
var lp = portfolio.ui.layout.get_layout_path.call(null,layout);
var expansions = cljs.core.mapcat.call(null,(function (path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,true], null);
}),cljs.core.remove.call(null,(function (p1__17412_SHARP_){
return cljs.core.get_in.call(null,state,p1__17412_SHARP_);
}),cljs.core.map.call(null,portfolio.ui.scene_browser.get_expanded_path,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection))));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),(function (){var G__17413 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location","location",1815599388)], null),location,portfolio.ui.layout.get_current_layout_path.call(null),lp], null);
var G__17413__$1 = (((cljs.core.get_in.call(null,state,lp) == null))?cljs.core.into.call(null,G__17413,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lp,layout], null)):G__17413);
if(cljs.core.seq.call(null,expansions)){
return cljs.core.into.call(null,G__17413__$1,expansions);
} else {
return G__17413__$1;
}
})(),new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p__17414){
var map__17415 = p__17414;
var map__17415__$1 = cljs.core.__destructure_map.call(null,map__17415);
var on_unmount = cljs.core.get.call(null,map__17415__$1,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269));
var params = cljs.core.get.call(null,map__17415__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.call(null,map__17415__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__17415__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),(function (){var or__5045__auto__ = id__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_unmount,params], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),current_scenes)),cljs.core.map.call(null,(function (p__17416){
var map__17417 = p__17416;
var map__17417__$1 = cljs.core.__destructure_map.call(null,map__17417);
var on_mount = cljs.core.get.call(null,map__17417__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var params = cljs.core.get.call(null,map__17417__$1,new cljs.core.Keyword(null,"params","params",710516235));
var id__$1 = cljs.core.get.call(null,map__17417__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__17417__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (){var or__5045__auto__ = id__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return title;
}
})(),on_mount,params], null);
}),cljs.core.filter.call(null,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)))),new cljs.core.Keyword(null,"release","release",-1534371381),cljs.core.mapcat.call(null,portfolio.ui.scene.get_scene_atoms,current_scenes),new cljs.core.Keyword(null,"subscribe","subscribe",416253756),cljs.core.mapcat.call(null,portfolio.ui.scene.get_scene_atoms,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(selection)),new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407),portfolio.ui.actions.get_page_title.call(null,state,selection),new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291),portfolio.ui.router.get_url.call(null,location)], null);
});
portfolio.ui.actions.remove_scene_param = (function portfolio$ui$actions$remove_scene_param(var_args){
var G__17419 = arguments.length;
switch (G__17419) {
case 2:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$2 = (function (state,scene_id){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,k){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null))], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.remove_scene_param.cljs$lang$maxFixedArity = 3);

portfolio.ui.actions.set_scene_param = (function portfolio$ui$actions$set_scene_param(var_args){
var G__17422 = arguments.length;
switch (G__17422) {
case 3:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$3 = (function (state,scene_id,v){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197)], null),cljs.core.deref.call(null,param)], null)], null)], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$core$IFn$_invoke$arity$4 = (function (state,scene_id,k,v){
var param = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),scene_id,new cljs.core.Keyword(null,"param","param",2013631823)], null));
if(cljs.core.map_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null)], null);
} else {
if(portfolio.ui.actions.atom_QMARK_.call(null,param)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swap","swap",228675637),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v], null),new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__17423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"overrides","overrides",1738628867),k], null),v], null)], null);
if(cljs.core.not.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null)))){
return cljs.core.into.call(null,G__17423,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),scene_id,new cljs.core.Keyword(null,"original","original",-445386197),k], null),k.call(null,cljs.core.deref.call(null,param))], null)], null));
} else {
return G__17423;
}
})()], null);
} else {
return null;
}
}
}));

(portfolio.ui.actions.set_scene_param.cljs$lang$maxFixedArity = 4);

portfolio.ui.actions.search = (function portfolio$ui$actions$search(p__17425,q){
var map__17426 = p__17425;
var map__17426__$1 = cljs.core.__destructure_map.call(null,map__17426);
var index = cljs.core.get.call(null,map__17426__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(cljs.core.truth_(index)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258)], null),portfolio.ui.search.protocols.query.call(null,index,q)], null)], null);
} else {
return null;
}
});
portfolio.ui.actions.process_action_result_BANG_ = (function portfolio$ui$actions$process_action_result_BANG_(app,res){
var log = (cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))?cljs.core.println:(function() { 
var G__17461__delegate = function (_args){
return null;
};
var G__17461 = function (var_args){
var _args = null;
if (arguments.length > 0) {
var G__17462__i = 0, G__17462__a = new Array(arguments.length -  0);
while (G__17462__i < G__17462__a.length) {G__17462__a[G__17462__i] = arguments[G__17462__i + 0]; ++G__17462__i;}
  _args = new cljs.core.IndexedSeq(G__17462__a,0,null);
} 
return G__17461__delegate.call(this,_args);};
G__17461.cljs$lang$maxFixedArity = 0;
G__17461.cljs$lang$applyTo = (function (arglist__17463){
var _args = cljs.core.seq(arglist__17463);
return G__17461__delegate(_args);
});
G__17461.cljs$core$IFn$_invoke$arity$variadic = G__17461__delegate;
return G__17461;
})()
);
var seq__17427_17464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"release","release",-1534371381).cljs$core$IFn$_invoke$arity$1(res));
var chunk__17428_17465 = null;
var count__17429_17466 = (0);
var i__17430_17467 = (0);
while(true){
if((i__17430_17467 < count__17429_17466)){
var ref_17468 = cljs.core._nth.call(null,chunk__17428_17465,i__17430_17467);
log.call(null,"Stop watching atom",cljs.core.pr_str.call(null,ref_17468));

cljs.core.remove_watch.call(null,ref_17468,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__17469 = seq__17427_17464;
var G__17470 = chunk__17428_17465;
var G__17471 = count__17429_17466;
var G__17472 = (i__17430_17467 + (1));
seq__17427_17464 = G__17469;
chunk__17428_17465 = G__17470;
count__17429_17466 = G__17471;
i__17430_17467 = G__17472;
continue;
} else {
var temp__5804__auto___17473 = cljs.core.seq.call(null,seq__17427_17464);
if(temp__5804__auto___17473){
var seq__17427_17474__$1 = temp__5804__auto___17473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17427_17474__$1)){
var c__5568__auto___17475 = cljs.core.chunk_first.call(null,seq__17427_17474__$1);
var G__17476 = cljs.core.chunk_rest.call(null,seq__17427_17474__$1);
var G__17477 = c__5568__auto___17475;
var G__17478 = cljs.core.count.call(null,c__5568__auto___17475);
var G__17479 = (0);
seq__17427_17464 = G__17476;
chunk__17428_17465 = G__17477;
count__17429_17466 = G__17478;
i__17430_17467 = G__17479;
continue;
} else {
var ref_17480 = cljs.core.first.call(null,seq__17427_17474__$1);
log.call(null,"Stop watching atom",cljs.core.pr_str.call(null,ref_17480));

cljs.core.remove_watch.call(null,ref_17480,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875));


var G__17481 = cljs.core.next.call(null,seq__17427_17474__$1);
var G__17482 = null;
var G__17483 = (0);
var G__17484 = (0);
seq__17427_17464 = G__17481;
chunk__17428_17465 = G__17482;
count__17429_17466 = G__17483;
i__17430_17467 = G__17484;
continue;
}
} else {
}
}
break;
}

var seq__17431_17485 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"fns","fns",1185138786).cljs$core$IFn$_invoke$arity$1(res));
var chunk__17432_17486 = null;
var count__17433_17487 = (0);
var i__17434_17488 = (0);
while(true){
if((i__17434_17488 < count__17433_17487)){
var vec__17441_17489 = cljs.core._nth.call(null,chunk__17432_17486,i__17434_17488);
var seq__17442_17490 = cljs.core.seq.call(null,vec__17441_17489);
var first__17443_17491 = cljs.core.first.call(null,seq__17442_17490);
var seq__17442_17492__$1 = cljs.core.next.call(null,seq__17442_17490);
var k_17493 = first__17443_17491;
var first__17443_17494__$1 = cljs.core.first.call(null,seq__17442_17492__$1);
var seq__17442_17495__$2 = cljs.core.next.call(null,seq__17442_17492__$1);
var t_17496 = first__17443_17494__$1;
var first__17443_17497__$2 = cljs.core.first.call(null,seq__17442_17495__$2);
var seq__17442_17498__$3 = cljs.core.next.call(null,seq__17442_17495__$2);
var f_17499 = first__17443_17497__$2;
var args_17500 = seq__17442_17498__$3;
log.call(null,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_17493)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_17496)," with"].join(''),cljs.core.pr_str.call(null,args_17500));

cljs.core.apply.call(null,f_17499,args_17500);


var G__17501 = seq__17431_17485;
var G__17502 = chunk__17432_17486;
var G__17503 = count__17433_17487;
var G__17504 = (i__17434_17488 + (1));
seq__17431_17485 = G__17501;
chunk__17432_17486 = G__17502;
count__17433_17487 = G__17503;
i__17434_17488 = G__17504;
continue;
} else {
var temp__5804__auto___17505 = cljs.core.seq.call(null,seq__17431_17485);
if(temp__5804__auto___17505){
var seq__17431_17506__$1 = temp__5804__auto___17505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17431_17506__$1)){
var c__5568__auto___17507 = cljs.core.chunk_first.call(null,seq__17431_17506__$1);
var G__17508 = cljs.core.chunk_rest.call(null,seq__17431_17506__$1);
var G__17509 = c__5568__auto___17507;
var G__17510 = cljs.core.count.call(null,c__5568__auto___17507);
var G__17511 = (0);
seq__17431_17485 = G__17508;
chunk__17432_17486 = G__17509;
count__17433_17487 = G__17510;
i__17434_17488 = G__17511;
continue;
} else {
var vec__17444_17512 = cljs.core.first.call(null,seq__17431_17506__$1);
var seq__17445_17513 = cljs.core.seq.call(null,vec__17444_17512);
var first__17446_17514 = cljs.core.first.call(null,seq__17445_17513);
var seq__17445_17515__$1 = cljs.core.next.call(null,seq__17445_17513);
var k_17516 = first__17446_17514;
var first__17446_17517__$1 = cljs.core.first.call(null,seq__17445_17515__$1);
var seq__17445_17518__$2 = cljs.core.next.call(null,seq__17445_17515__$1);
var t_17519 = first__17446_17517__$1;
var first__17446_17520__$2 = cljs.core.first.call(null,seq__17445_17518__$2);
var seq__17445_17521__$3 = cljs.core.next.call(null,seq__17445_17518__$2);
var f_17522 = first__17446_17520__$2;
var args_17523 = seq__17445_17521__$3;
log.call(null,["Calling ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_17516)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_17519)," with"].join(''),cljs.core.pr_str.call(null,args_17523));

cljs.core.apply.call(null,f_17522,args_17523);


var G__17524 = cljs.core.next.call(null,seq__17431_17506__$1);
var G__17525 = null;
var G__17526 = (0);
var G__17527 = (0);
seq__17431_17485 = G__17524;
chunk__17432_17486 = G__17525;
count__17433_17487 = G__17526;
i__17434_17488 = G__17527;
continue;
}
} else {
}
}
break;
}

var seq__17447_17528 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"subscribe","subscribe",416253756).cljs$core$IFn$_invoke$arity$1(res));
var chunk__17448_17529 = null;
var count__17449_17530 = (0);
var i__17450_17531 = (0);
while(true){
if((i__17450_17531 < count__17449_17530)){
var ref_17532 = cljs.core._nth.call(null,chunk__17448_17529,i__17450_17531);
log.call(null,"Start watching atom",cljs.core.pr_str.call(null,ref_17532));

cljs.core.add_watch.call(null,ref_17532,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__17447_17528,chunk__17448_17529,count__17449_17530,i__17450_17531,ref_17532,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(seq__17447_17528,chunk__17448_17529,count__17449_17530,i__17450_17531,ref_17532,log))
);


var G__17533 = seq__17447_17528;
var G__17534 = chunk__17448_17529;
var G__17535 = count__17449_17530;
var G__17536 = (i__17450_17531 + (1));
seq__17447_17528 = G__17533;
chunk__17448_17529 = G__17534;
count__17449_17530 = G__17535;
i__17450_17531 = G__17536;
continue;
} else {
var temp__5804__auto___17537 = cljs.core.seq.call(null,seq__17447_17528);
if(temp__5804__auto___17537){
var seq__17447_17538__$1 = temp__5804__auto___17537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17447_17538__$1)){
var c__5568__auto___17539 = cljs.core.chunk_first.call(null,seq__17447_17538__$1);
var G__17540 = cljs.core.chunk_rest.call(null,seq__17447_17538__$1);
var G__17541 = c__5568__auto___17539;
var G__17542 = cljs.core.count.call(null,c__5568__auto___17539);
var G__17543 = (0);
seq__17447_17528 = G__17540;
chunk__17448_17529 = G__17541;
count__17449_17530 = G__17542;
i__17450_17531 = G__17543;
continue;
} else {
var ref_17544 = cljs.core.first.call(null,seq__17447_17538__$1);
log.call(null,"Start watching atom",cljs.core.pr_str.call(null,ref_17544));

cljs.core.add_watch.call(null,ref_17544,new cljs.core.Keyword("portfolio.ui.actions","portfolio","portfolio.ui.actions/portfolio",-1171773875),((function (seq__17447_17528,chunk__17448_17529,count__17449_17530,i__17450_17531,ref_17544,seq__17447_17538__$1,temp__5804__auto___17537,log){
return (function (_,___$1,___$2,___$3){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"heartbeat","heartbeat",-1141780952),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});})(seq__17447_17528,chunk__17448_17529,count__17449_17530,i__17450_17531,ref_17544,seq__17447_17538__$1,temp__5804__auto___17537,log))
);


var G__17545 = cljs.core.next.call(null,seq__17447_17538__$1);
var G__17546 = null;
var G__17547 = (0);
var G__17548 = (0);
seq__17447_17528 = G__17545;
chunk__17448_17529 = G__17546;
count__17449_17530 = G__17547;
i__17450_17531 = G__17548;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___17549 = new cljs.core.Keyword(null,"update-window-location","update-window-location",770004291).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___17549)){
var url_17550 = temp__5804__auto___17549;
if(cljs.core._EQ_.call(null,url_17550,portfolio.ui.router.get_current_url.call(null))){
} else {
log.call(null,"Updating browser URL to",url_17550);

history.pushState(false,false,url_17550);
}
} else {
}

var temp__5804__auto___17551 = new cljs.core.Keyword(null,"set-page-title","set-page-title",-1142382407).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___17551)){
var title_17552 = temp__5804__auto___17551;
log.call(null,["Set page title to '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_17552),"'"].join(''));

(document.title = title_17552);
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
log.call(null,":assoc-in",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res)));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res))){
log.call(null,":dissoc-in",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)));
} else {
}

cljs.core.swap_BANG_.call(null,app,(function (state){
return cljs.core.apply.call(null,portfolio.ui.actions.assoc_in_STAR_,cljs.core.apply.call(null,portfolio.ui.actions.dissoc_in_STAR_,state,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806).cljs$core$IFn$_invoke$arity$1(res)),new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270).cljs$core$IFn$_invoke$arity$1(res));
}));
} else {
}

var seq__17451_17553 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res));
var chunk__17452_17554 = null;
var count__17453_17555 = (0);
var i__17454_17556 = (0);
while(true){
if((i__17454_17556 < count__17453_17555)){
var action_17557 = cljs.core._nth.call(null,chunk__17452_17554,i__17454_17556);
portfolio.ui.actions.execute_action_BANG_.call(null,app,action_17557);


var G__17558 = seq__17451_17553;
var G__17559 = chunk__17452_17554;
var G__17560 = count__17453_17555;
var G__17561 = (i__17454_17556 + (1));
seq__17451_17553 = G__17558;
chunk__17452_17554 = G__17559;
count__17453_17555 = G__17560;
i__17454_17556 = G__17561;
continue;
} else {
var temp__5804__auto___17562 = cljs.core.seq.call(null,seq__17451_17553);
if(temp__5804__auto___17562){
var seq__17451_17563__$1 = temp__5804__auto___17562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17451_17563__$1)){
var c__5568__auto___17564 = cljs.core.chunk_first.call(null,seq__17451_17563__$1);
var G__17565 = cljs.core.chunk_rest.call(null,seq__17451_17563__$1);
var G__17566 = c__5568__auto___17564;
var G__17567 = cljs.core.count.call(null,c__5568__auto___17564);
var G__17568 = (0);
seq__17451_17553 = G__17565;
chunk__17452_17554 = G__17566;
count__17453_17555 = G__17567;
i__17454_17556 = G__17568;
continue;
} else {
var action_17569 = cljs.core.first.call(null,seq__17451_17563__$1);
portfolio.ui.actions.execute_action_BANG_.call(null,app,action_17569);


var G__17570 = cljs.core.next.call(null,seq__17451_17563__$1);
var G__17571 = null;
var G__17572 = (0);
var G__17573 = (0);
seq__17451_17553 = G__17570;
chunk__17452_17554 = G__17571;
count__17453_17555 = G__17572;
i__17454_17556 = G__17573;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___17574 = new cljs.core.Keyword(null,"swap","swap",228675637).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___17574)){
var vec__17455_17575 = temp__5804__auto___17574;
var ref_17576 = cljs.core.nth.call(null,vec__17455_17575,(0),null);
var path_17577 = cljs.core.nth.call(null,vec__17455_17575,(1),null);
var v_17578 = cljs.core.nth.call(null,vec__17455_17575,(2),null);
cljs.core.swap_BANG_.call(null,ref_17576,cljs.core.assoc_in,path_17577,v_17578);
} else {
}

var temp__5804__auto___17579 = new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___17579)){
var vec__17458_17580 = temp__5804__auto___17579;
var ref_17581 = cljs.core.nth.call(null,vec__17458_17580,(0),null);
var v_17582 = cljs.core.nth.call(null,vec__17458_17580,(1),null);
cljs.core.reset_BANG_.call(null,ref_17581,v_17582);
} else {
}

var temp__5804__auto___17583 = new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto___17583)){
var paths_17584 = temp__5804__auto___17583;
portfolio.ui.css.load_css_files.call(null,paths_17584);
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5804__auto__)){
var paths = temp__5804__auto__;
return portfolio.ui.css.replace_loaded_css_files.call(null,paths);
} else {
return null;
}
});
portfolio.ui.actions.save_in_local_storage = (function portfolio$ui$actions$save_in_local_storage(k,v){
return localStorage.setItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.pr_str.call(null,v));
});
portfolio.ui.actions.execute_action_BANG_ = (function portfolio$ui$actions$execute_action_BANG_(app,action){
if(cljs.core.truth_(new cljs.core.Keyword(null,"log?","log?",-366002723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))){
cljs.core.println.call(null,"execute-action!",action);
} else {
}

portfolio.ui.actions.process_action_result_BANG_.call(null,app,(function (){var G__17585 = cljs.core.first.call(null,action);
var G__17585__$1 = (((G__17585 instanceof cljs.core.Keyword))?G__17585.fqn:null);
switch (G__17585__$1) {
case "assoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),cljs.core.rest.call(null,action)], null);

break;
case "dissoc-in":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),cljs.core.rest.call(null,action)], null);

break;
case "fn/call":
var vec__17586 = cljs.core.rest.call(null,action);
var seq__17587 = cljs.core.seq.call(null,vec__17586);
var first__17588 = cljs.core.first.call(null,seq__17587);
var seq__17587__$1 = cljs.core.next.call(null,seq__17587);
var fn = first__17588;
var args = seq__17587__$1;
return cljs.core.apply.call(null,fn,args);

break;
case "go-to-location":
return cljs.core.apply.call(null,portfolio.ui.actions.go_to_location,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "go-to-current-location":
return portfolio.ui.actions.go_to_location.call(null,cljs.core.deref.call(null,app),portfolio.ui.router.get_current_location.call(null));

break;
case "set-css-files":
var vec__17589 = cljs.core.rest.call(null,action);
var paths = cljs.core.nth.call(null,vec__17589,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-paths","css-paths",582305563)], null),paths], null),new cljs.core.Keyword(null,"load-css-files","load-css-files",-1144872475),paths,new cljs.core.Keyword(null,"replace-css-files","replace-css-files",1438305968),paths], null);

break;
case "remove-scene-param":
return cljs.core.apply.call(null,portfolio.ui.actions.remove_scene_param,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "save-in-local-storage":
return cljs.core.apply.call(null,portfolio.ui.actions.save_in_local_storage,cljs.core.rest.call(null,action));

break;
case "set-scene-param":
return cljs.core.apply.call(null,portfolio.ui.actions.set_scene_param,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
case "search":
return cljs.core.apply.call(null,portfolio.ui.actions.search,cljs.core.deref.call(null,app),cljs.core.rest.call(null,action));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17585__$1)].join('')));

}
})());

return app;
});
portfolio.ui.actions.available_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177),null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),null,new cljs.core.Keyword(null,"remove-scene-param","remove-scene-param",-1304315187),null,new cljs.core.Keyword(null,"search","search",1564939822),null,new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583),null,new cljs.core.Keyword(null,"set-scene-param","set-scene-param",234226032),null,new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),null,new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),null,new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),null,new cljs.core.Keyword("fn","call","fn/call",-519998786),null], null), null);
portfolio.ui.actions.actions_QMARK_ = (function portfolio$ui$actions$actions_QMARK_(x){
return ((cljs.core.sequential_QMARK_.call(null,x)) && ((((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.every_QMARK_.call(null,(function (p1__17593_SHARP_){
return ((cljs.core.sequential_QMARK_.call(null,p1__17593_SHARP_)) && (cljs.core.contains_QMARK_.call(null,portfolio.ui.actions.available_actions,cljs.core.first.call(null,p1__17593_SHARP_))));
}),x)))));
});
portfolio.ui.actions.parse_int = (function portfolio$ui$actions$parse_int(s){
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
portfolio.ui.actions.actionize_data = (function portfolio$ui$actions$actionize_data(app,data){
return clojure.walk.prewalk.call(null,(function (x){
if(portfolio.ui.actions.actions_QMARK_.call(null,x)){
return (function (e){
if(cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.identity,x)))){
e.preventDefault();

e.stopPropagation();
} else {
}

var seq__17594 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null)]),x));
var chunk__17595 = null;
var count__17596 = (0);
var i__17597 = (0);
while(true){
if((i__17597 < count__17596)){
var action = cljs.core._nth.call(null,chunk__17595,i__17597);
portfolio.ui.actions.execute_action_BANG_.call(null,app,clojure.walk.prewalk.call(null,((function (seq__17594,chunk__17595,count__17596,i__17597,action){
return (function (ax){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__17602 = e;
var G__17602__$1 = (((G__17602 == null))?null:G__17602.target);
if((G__17602__$1 == null)){
return null;
} else {
return G__17602__$1.value;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__17603 = e;
var G__17603__$1 = (((G__17603 == null))?null:G__17603.target);
var G__17603__$2 = (((G__17603__$1 == null))?null:G__17603__$1.value);
if((G__17603__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int.call(null,G__17603__$2);
}
} else {
return ax;

}
}
});})(seq__17594,chunk__17595,count__17596,i__17597,action))
,action));


var G__17606 = seq__17594;
var G__17607 = chunk__17595;
var G__17608 = count__17596;
var G__17609 = (i__17597 + (1));
seq__17594 = G__17606;
chunk__17595 = G__17607;
count__17596 = G__17608;
i__17597 = G__17609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17594);
if(temp__5804__auto__){
var seq__17594__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17594__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__17594__$1);
var G__17610 = cljs.core.chunk_rest.call(null,seq__17594__$1);
var G__17611 = c__5568__auto__;
var G__17612 = cljs.core.count.call(null,c__5568__auto__);
var G__17613 = (0);
seq__17594 = G__17610;
chunk__17595 = G__17611;
count__17596 = G__17612;
i__17597 = G__17613;
continue;
} else {
var action = cljs.core.first.call(null,seq__17594__$1);
portfolio.ui.actions.execute_action_BANG_.call(null,app,clojure.walk.prewalk.call(null,((function (seq__17594,chunk__17595,count__17596,i__17597,action,seq__17594__$1,temp__5804__auto__){
return (function (ax){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","value","event.target/value",857030372),ax)){
var G__17604 = e;
var G__17604__$1 = (((G__17604 == null))?null:G__17604.target);
if((G__17604__$1 == null)){
return null;
} else {
return G__17604__$1.value;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("event.target","number-value","event.target/number-value",-362876562),ax)){
var G__17605 = e;
var G__17605__$1 = (((G__17605 == null))?null:G__17605.target);
var G__17605__$2 = (((G__17605__$1 == null))?null:G__17605__$1.value);
if((G__17605__$2 == null)){
return null;
} else {
return portfolio.ui.actions.parse_int.call(null,G__17605__$2);
}
} else {
return ax;

}
}
});})(seq__17594,chunk__17595,count__17596,i__17597,action,seq__17594__$1,temp__5804__auto__))
,action));


var G__17614 = cljs.core.next.call(null,seq__17594__$1);
var G__17615 = null;
var G__17616 = (0);
var G__17617 = (0);
seq__17594 = G__17614;
chunk__17595 = G__17615;
count__17596 = G__17616;
i__17597 = G__17617;
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
