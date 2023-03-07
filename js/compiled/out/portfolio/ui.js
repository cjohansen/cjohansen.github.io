// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui');
goog.require('cljs.core');
goog.require('portfolio.actions');
goog.require('portfolio.client');
goog.require('portfolio.core');
goog.require('portfolio.data');
goog.require('portfolio.homeless');
goog.require('portfolio.views.canvas');
goog.require('portfolio.views.canvas.background');
goog.require('portfolio.views.canvas.grid');
goog.require('portfolio.views.canvas.split');
goog.require('portfolio.views.canvas.viewport');
goog.require('portfolio.views.canvas.zoom');
portfolio.ui.app = cljs.core.atom.call(null,null);
portfolio.ui.create_app = (function portfolio$ui$create_app(config,canvas_tools,extra_canvas_tools){
return cljs.core.assoc.call(null,portfolio.core.init_state.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"scenes","scenes",-425219404),cljs.core.vals.call(null,cljs.core.deref.call(null,portfolio.data.scenes)),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.vals.call(null,cljs.core.deref.call(null,portfolio.data.namespaces)),new cljs.core.Keyword(null,"collections","collections",-2114643505),cljs.core.vals.call(null,cljs.core.deref.call(null,portfolio.data.collections)))),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.views.canvas.create_canvas.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185),new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.into.call(null,(function (){var or__5045__auto__ = canvas_tools;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.views.canvas.background.create_background_tool.call(null,config),portfolio.views.canvas.viewport.create_viewport_tool.call(null,config),portfolio.views.canvas.grid.create_grid_tool.call(null,config),portfolio.views.canvas.zoom.create_zoom_tool.call(null,config),portfolio.views.canvas.split.create_split_horizontally_tool.call(null,config),portfolio.views.canvas.split.create_split_vertically_tool.call(null,config),portfolio.views.canvas.split.create_close_tool.call(null,config)], null);
}
})(),extra_canvas_tools)], null))], null));
});
portfolio.ui.eventually_execute = portfolio.homeless.debounce.call(null,portfolio.actions.execute_action_BANG_,(250));
portfolio.ui.start_BANG_ = (function portfolio$ui$start_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16637 = arguments.length;
var i__5770__auto___16638 = (0);
while(true){
if((i__5770__auto___16638 < len__5769__auto___16637)){
args__5775__auto__.push((arguments[i__5770__auto___16638]));

var G__16639 = (i__5770__auto___16638 + (1));
i__5770__auto___16638 = G__16639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.start_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16632){
var vec__16633 = p__16632;
var map__16636 = cljs.core.nth.call(null,vec__16633,(0),null);
var map__16636__$1 = cljs.core.__destructure_map.call(null,map__16636);
var on_render = cljs.core.get.call(null,map__16636__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var config = cljs.core.get.call(null,map__16636__$1,new cljs.core.Keyword(null,"config","config",994861415));
var canvas_tools = cljs.core.get.call(null,map__16636__$1,new cljs.core.Keyword(null,"canvas-tools","canvas-tools",-1946158067));
var extra_canvas_tools = cljs.core.get.call(null,map__16636__$1,new cljs.core.Keyword(null,"extra-canvas-tools","extra-canvas-tools",1666309267));
cljs.core.swap_BANG_.call(null,portfolio.ui.app,cljs.core.merge,portfolio.ui.create_app.call(null,config,canvas_tools,extra_canvas_tools));

cljs.core.add_watch.call(null,portfolio.data.scenes,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,___$2,scenes){
cljs.core.swap_BANG_.call(null,portfolio.ui.app,cljs.core.assoc,new cljs.core.Keyword(null,"scenes","scenes",-425219404),scenes);

return portfolio.ui.eventually_execute.call(null,portfolio.ui.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_watch.call(null,portfolio.data.namespaces,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,___$2,namespaces){
return cljs.core.swap_BANG_.call(null,portfolio.ui.app,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces);
}));

cljs.core.add_watch.call(null,portfolio.data.collections,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,___$2,collections){
return cljs.core.swap_BANG_.call(null,portfolio.ui.app,cljs.core.assoc,new cljs.core.Keyword(null,"collections","collections",-2114643505),collections);
}));

return portfolio.client.start_app.call(null,portfolio.ui.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
}));

(portfolio.ui.start_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.start_BANG_.cljs$lang$applyTo = (function (seq16631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16631));
}));

