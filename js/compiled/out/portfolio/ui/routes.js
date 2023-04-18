// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.routes');
goog.require('cljs.core');
goog.require('portfolio.ui.router');
portfolio.ui.routes.get_location = (function portfolio$ui$routes$get_location(location,item){
return cljs.core.assoc.call(null,location,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
});
portfolio.ui.routes.get_url = (function portfolio$ui$routes$get_url(location,item){
return portfolio.ui.router.get_url.call(null,portfolio.ui.routes.get_location.call(null,location,item));
});
portfolio.ui.routes.get_scene_location = (function portfolio$ui$routes$get_scene_location(location,scene){
return cljs.core.assoc.call(null,location,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null));
});
portfolio.ui.routes.get_scene_url = (function portfolio$ui$routes$get_scene_url(location,scene){
return portfolio.ui.router.get_url.call(null,portfolio.ui.routes.get_scene_location.call(null,location,scene));
});
portfolio.ui.routes.get_addon_url = (function portfolio$ui$routes$get_addon_url(location,addon){
return portfolio.ui.router.get_url.call(null,cljs.core.assoc_in.call(null,location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"addon","addon",931813532)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(addon)));
});
portfolio.ui.routes.get_id = (function portfolio$ui$routes$get_id(location){
var G__17045 = location;
var G__17045__$1 = (((G__17045 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__17045));
var G__17045__$2 = (((G__17045__$1 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__17045__$1));
if((G__17045__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__17045__$2);
}
});
