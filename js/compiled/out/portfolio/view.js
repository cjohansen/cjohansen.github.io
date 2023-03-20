// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.view');
goog.require('cljs.core');

/**
 * @interface
 */
portfolio.view.IViewData = function(){};

var portfolio$view$IViewData$prepare_data$dyn_11739 = (function (view,state,location){
var x__5393__auto__ = (((view == null))?null:view);
var m__5394__auto__ = (portfolio.view.prepare_data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,view,state,location);
} else {
var m__5392__auto__ = (portfolio.view.prepare_data["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,view,state,location);
} else {
throw cljs.core.missing_protocol.call(null,"IViewData.prepare-data",view);
}
}
});
portfolio.view.prepare_data = (function portfolio$view$prepare_data(view,state,location){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,view),cljs.core.with_meta(new cljs.core.Symbol("portfolio.view","prepare-data","portfolio.view/prepare-data",-1000148919,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,view,state,location);
} else {
if((((!((view == null)))) && ((!((view.portfolio$view$IViewData$prepare_data$arity$3 == null)))))){
return view.portfolio$view$IViewData$prepare_data$arity$3(view,state,location);
} else {
return portfolio$view$IViewData$prepare_data$dyn_11739.call(null,view,state,location);
}
}
});


/**
 * @interface
 */
portfolio.view.IView = function(){};

var portfolio$view$IView$render_view$dyn_11740 = (function (self){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.view.render_view[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self);
} else {
var m__5392__auto__ = (portfolio.view.render_view["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self);
} else {
throw cljs.core.missing_protocol.call(null,"IView.render-view",self);
}
}
});
portfolio.view.render_view = (function portfolio$view$render_view(self){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.view","render-view","portfolio.view/render-view",-822188357,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self);
} else {
if((((!((self == null)))) && ((!((self.portfolio$view$IView$render_view$arity$1 == null)))))){
return self.portfolio$view$IView$render_view$arity$1(self);
} else {
return portfolio$view$IView$render_view$dyn_11740.call(null,self);
}
}
});

