// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.dumdom');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.adapter');
goog.require('portfolio.data');
portfolio.dumdom.component_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.adapter","render-component","portfolio.adapter/render-component",-433053335,null),(function (p__15442,el){
var map__15443 = p__15442;
var map__15443__$1 = cljs.core.__destructure_map.call(null,map__15443);
var component = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var updated_at = cljs.core.get.call(null,map__15443__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
if((!((el == null)))){
} else {
throw (new Error(["Assert failed: ","Asked to render Dumdom component without an element.","\n","(some? el)"].join('')));
}

var temp__5804__auto___15445 = (function (){var G__15444 = el;
if((G__15444 == null)){
return null;
} else {
return G__15444.unmount;
}
})();
if(cljs.core.truth_(temp__5804__auto___15445)){
var f_15446 = temp__5804__auto___15445;
if(cljs.core._EQ_.call(null,"dumdom",el.unmountLib)){
} else {
f_15446.call(null);
}
} else {
}

(el.unmount = (function (){
return Object.keys(el.dataset).forEach((function (k){
return (el.dataset[k] = "");
}));
}));

(el.unmountLib = "dumdom");

return dumdom.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(updated_at)].join('')], null),component], null),el);
})], null);
portfolio.dumdom.create_scene = (function portfolio$dumdom$create_scene(scene){
return portfolio.adapter.prepare_scene.call(null,scene,portfolio.dumdom.component_impl);
});
