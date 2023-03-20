// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.dumdom');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.adapter');
goog.require('portfolio.data');
portfolio.dumdom.component_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.adapter","render-component","portfolio.adapter/render-component",-433053335,null),(function (p__12107,el){
var map__12108 = p__12107;
var map__12108__$1 = cljs.core.__destructure_map.call(null,map__12108);
var component = cljs.core.get.call(null,map__12108__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.call(null,map__12108__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var updated_at = cljs.core.get.call(null,map__12108__$1,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336));
if(cljs.core.truth_(el)){
return dumdom.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(updated_at)].join('')], null),component], null),el);
} else {
return console.error("Asked to render Dumdom component without an element");
}
})], null);
portfolio.dumdom.create_scene = (function portfolio$dumdom$create_scene(scene){
return portfolio.adapter.prepare_scene.call(null,scene,portfolio.dumdom.component_impl);
});
