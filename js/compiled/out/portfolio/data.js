// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.data');
goog.require('cljs.core');
goog.require('portfolio.homeless');
portfolio.data.scenes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
portfolio.data.scene_order = cljs.core.atom.call(null,(0));
portfolio.data.collections = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Finds scenes that have been deleted. All the scenes in the same namespace
 *   should have :idx 1 apart. If there are scenes in a namespace that are
 *   separated from the rest with :idx more than 1 apart, it means the other scenes
 *   have been re-defined.
 */
portfolio.data.get_deleted_scenes = (function portfolio$data$get_deleted_scenes(scenes){
return cljs.core.mapcat.call(null,(function (p__15386){
var vec__15387 = p__15386;
var _ = cljs.core.nth.call(null,vec__15387,(0),null);
var scenes__$1 = cljs.core.nth.call(null,vec__15387,(1),null);
return cljs.core.keep.call(null,cljs.core.second,cljs.core.drop_while.call(null,(function (p__15390){
var vec__15391 = p__15390;
var a = cljs.core.nth.call(null,vec__15391,(0),null);
var b = cljs.core.nth.call(null,vec__15391,(1),null);
return cljs.core._EQ_.call(null,(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(b)),(1));
}),cljs.core.partition_all.call(null,(2),(1),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),scenes__$1)))));
}),cljs.core.group_by.call(null,cljs.core.comp.call(null,cljs.core.namespace,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,scenes)));
});
portfolio.data.purge_removed_scenes = (function portfolio$data$purge_removed_scenes(){
return cljs.core.swap_BANG_.call(null,portfolio.data.scenes,(function (scenes){
return cljs.core.apply.call(null,cljs.core.dissoc,scenes,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),portfolio.data.get_deleted_scenes.call(null,scenes)));
}));
});
portfolio.data.eventually_purge_scenes = portfolio.homeless.debounce.call(null,portfolio.data.purge_removed_scenes,(50));
/**
 * Finds the line number (if available) and index of the scene. Line number 1 very
 *   likely means the form was sent to the REPL, not recompiled from a file. When
 *   that is the case, we reuse the existing index and line number if possible.
 */
portfolio.data.get_scene_context = (function portfolio$data$get_scene_context(old,new$){
if(cljs.core._EQ_.call(null,(1),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new$))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"idx","idx",1053688473),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(old);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.swap_BANG_.call(null,portfolio.data.scene_order,cljs.core.inc);
}
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new$);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old);
}
})(),new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.swap_BANG_.call(null,portfolio.data.scene_order,cljs.core.inc)], null);
}
});
portfolio.data.register_scene_BANG_ = (function portfolio$data$register_scene_BANG_(scene){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene))){
throw cljs.core.ex_info.call(null,"Cannot register scene without :id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),scene], null));
} else {
var map__15394 = portfolio.data.get_scene_context.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,portfolio.data.scenes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null)),scene);
var map__15394__$1 = cljs.core.__destructure_map.call(null,map__15394);
var idx = cljs.core.get.call(null,map__15394__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var line = cljs.core.get.call(null,map__15394__$1,new cljs.core.Keyword(null,"line","line",212345235));
cljs.core.swap_BANG_.call(null,portfolio.data.scenes,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),(function (){var G__15395 = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,scene,new cljs.core.Keyword(null,"param","param",2013631823)),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),(new Date()).getTime());
var G__15395__$1 = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene)))?cljs.core.assoc.call(null,G__15395,new cljs.core.Keyword(null,"title","title",636505583),portfolio.homeless.__GT_title.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)))):G__15395);
var G__15395__$2 = (((new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(scene) == null))?cljs.core.assoc.call(null,G__15395__$1,new cljs.core.Keyword(null,"collection","collection",-683361892),(function (){var G__15396 = scene;
var G__15396__$1 = (((G__15396 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__15396));
var G__15396__$2 = (((G__15396__$1 == null))?null:cljs.core.namespace.call(null,G__15396__$1));
if((G__15396__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__15396__$2);
}
})()):G__15395__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.call(null,G__15395__$2,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return G__15395__$2;
}
})());

portfolio.data.eventually_purge_scenes.call(null);

return null;
}
});
portfolio.data.register_collection_BANG_ = (function portfolio$data$register_collection_BANG_(id,collection){
if((id instanceof cljs.core.Keyword)){
} else {
throw (new Error(["Assert failed: ","register-collection! must be called with a keyword id as first argument","\n","(keyword? id)"].join('')));
}

return cljs.core.swap_BANG_.call(null,portfolio.data.collections,cljs.core.assoc,id,cljs.core.assoc.call(null,collection,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
