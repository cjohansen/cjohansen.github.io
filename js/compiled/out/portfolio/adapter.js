// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.adapter');
goog.require('cljs.core');

/**
 * @interface
 */
portfolio.adapter.IComponentLibrary = function(){};

var portfolio$adapter$IComponentLibrary$render_component$dyn_11732 = (function (component,el){
var x__5393__auto__ = (((component == null))?null:component);
var m__5394__auto__ = (portfolio.adapter.render_component[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,component,el);
} else {
var m__5392__auto__ = (portfolio.adapter.render_component["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,component,el);
} else {
throw cljs.core.missing_protocol.call(null,"IComponentLibrary.render-component",component);
}
}
});
portfolio.adapter.render_component = (function portfolio$adapter$render_component(component,el){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,component),cljs.core.with_meta(new cljs.core.Symbol("portfolio.adapter","render-component","portfolio.adapter/render-component",-433053335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,component,el);
} else {
if((((!((component == null)))) && ((!((component.portfolio$adapter$IComponentLibrary$render_component$arity$2 == null)))))){
return component.portfolio$adapter$IComponentLibrary$render_component$arity$2(component,el);
} else {
return portfolio$adapter$IComponentLibrary$render_component$dyn_11732.call(null,component,el);
}
}
});

portfolio.adapter.prepare_scene = (function portfolio$adapter$prepare_scene(scene,component_impl){
return cljs.core.with_meta.call(null,scene,component_impl);
});
