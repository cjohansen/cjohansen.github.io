// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.data');
goog.require('cljs.core');
goog.require('portfolio.homeless');
portfolio.data.scenes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
portfolio.data.scene_order = cljs.core.atom.call(null,(0));
portfolio.data.namespaces = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
portfolio.data.collections = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Finds scenes that have been deleted. All the scenes in the same namespace
 *   should have :idx 1 apart. If there are scenes in a namespace that are
 *   separated from the rest with :idx more than 1 apart, it means the other scenes
 *   have been re-defined. 
 */
portfolio.data.get_deleted_scenes = (function portfolio$data$get_deleted_scenes(scenes){
return cljs.core.mapcat.call(null,(function (p__12057){
var vec__12058 = p__12057;
var _ = cljs.core.nth.call(null,vec__12058,(0),null);
var scenes__$1 = cljs.core.nth.call(null,vec__12058,(1),null);
return cljs.core.keep.call(null,cljs.core.second,cljs.core.drop_while.call(null,(function (p__12061){
var vec__12062 = p__12061;
var a = cljs.core.nth.call(null,vec__12062,(0),null);
var b = cljs.core.nth.call(null,vec__12062,(1),null);
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
var map__12065 = portfolio.data.get_scene_context.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,portfolio.data.scenes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null)),scene);
var map__12065__$1 = cljs.core.__destructure_map.call(null,map__12065);
var idx = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var line = cljs.core.get.call(null,map__12065__$1,new cljs.core.Keyword(null,"line","line",212345235));
cljs.core.swap_BANG_.call(null,portfolio.data.scenes,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),(function (){var G__12066 = cljs.core.assoc.call(null,scene,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"idx","idx",1053688473),idx,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),(new Date()).getTime());
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.call(null,G__12066,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)));
} else {
return G__12066;
}
})());

portfolio.data.eventually_purge_scenes.call(null);

return null;
}
});
portfolio.data.register_namespace_BANG_ = (function portfolio$data$register_namespace_BANG_(ns){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(ns))){
throw cljs.core.ex_info.call(null,"Cannot register namespace without :namespace",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns], null));
} else {
return cljs.core.swap_BANG_.call(null,portfolio.data.namespaces,cljs.core.assoc,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(ns),ns);
}
});
portfolio.data.register_collection_BANG_ = (function portfolio$data$register_collection_BANG_(collection){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection))){
throw cljs.core.ex_info.call(null,"Cannot register collection without :id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),collection], null));
} else {
return cljs.core.swap_BANG_.call(null,portfolio.data.collections,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),collection);
}
});
