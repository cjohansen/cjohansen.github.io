// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui');
goog.require('cljs.core');
goog.require('portfolio.data');
goog.require('portfolio.homeless');
goog.require('portfolio.ui.actions');
goog.require('portfolio.ui.canvas');
goog.require('portfolio.ui.canvas.background');
goog.require('portfolio.ui.canvas.compare');
goog.require('portfolio.ui.canvas.docs');
goog.require('portfolio.ui.canvas.grid');
goog.require('portfolio.ui.canvas.split');
goog.require('portfolio.ui.canvas.viewport');
goog.require('portfolio.ui.canvas.zoom');
goog.require('portfolio.ui.client');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.search');
goog.require('portfolio.ui.search.protocols');
if((typeof portfolio !== 'undefined') && (typeof portfolio.ui !== 'undefined') && (typeof portfolio.ui.app !== 'undefined')){
} else {
portfolio.ui.app = cljs.core.atom.call(null,null);
}
portfolio.ui.get_collections = (function portfolio$ui$get_collections(scenes,collections){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),portfolio.ui.collection.get_default_organization.call(null,cljs.core.vals.call(null,scenes),cljs.core.vals.call(null,collections))));
});
portfolio.ui.create_app = (function portfolio$ui$create_app(config,canvas_tools,extra_canvas_tools){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"scenes","scenes",-425219404),cljs.core.deref.call(null,portfolio.data.scenes)),new cljs.core.Keyword(null,"collections","collections",-2114643505),portfolio.ui.get_collections.call(null,cljs.core.deref.call(null,portfolio.data.scenes),cljs.core.deref.call(null,portfolio.data.collections))),new cljs.core.Keyword(null,"views","views",1450155487),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.canvas.create_canvas.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185),new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.into.call(null,(function (){var or__5045__auto__ = canvas_tools;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.canvas.background.create_background_tool.call(null,config),portfolio.ui.canvas.viewport.create_viewport_tool.call(null,config),portfolio.ui.canvas.grid.create_grid_tool.call(null,config),portfolio.ui.canvas.zoom.create_zoom_tool.call(null,config),portfolio.ui.canvas.split.create_split_tool.call(null,config),portfolio.ui.canvas.docs.create_docs_tool.call(null,config),portfolio.ui.canvas.compare.create_compare_tool.call(null,config),portfolio.ui.canvas.split.create_close_tool.call(null,config)], null);
}
})(),extra_canvas_tools)], null))], null));
});
portfolio.ui.eventually_execute = portfolio.homeless.debounce.call(null,portfolio.ui.actions.execute_action_BANG_,(250));
portfolio.ui.index_content = (function portfolio$ui$index_content(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17980 = arguments.length;
var i__5770__auto___17981 = (0);
while(true){
if((i__5770__auto___17981 < len__5769__auto___17980)){
args__5775__auto__.push((arguments[i__5770__auto___17981]));

var G__17982 = (i__5770__auto___17981 + (1));
i__5770__auto___17981 = G__17982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.index_content.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.index_content.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__17968){
var vec__17969 = p__17968;
var map__17972 = cljs.core.nth.call(null,vec__17969,(0),null);
var map__17972__$1 = cljs.core.__destructure_map.call(null,map__17972);
var ids = cljs.core.get.call(null,map__17972__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var map__17973 = cljs.core.deref.call(null,app);
var map__17973__$1 = cljs.core.__destructure_map.call(null,map__17973);
var index = cljs.core.get.call(null,map__17973__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var scenes = cljs.core.get.call(null,map__17973__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var collections = cljs.core.get.call(null,map__17973__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var log_QMARK_ = cljs.core.get.call(null,map__17973__$1,new cljs.core.Keyword(null,"log?","log?",-366002723));
if(cljs.core.truth_(index)){
return requestAnimationFrame((function (_){
var seq__17974 = cljs.core.seq.call(null,(function (){var G__17979 = cljs.core.concat.call(null,cljs.core.vals.call(null,scenes),cljs.core.vals.call(null,collections));
if(cljs.core.truth_(ids)){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.set.call(null,ids),new cljs.core.Keyword(null,"id","id",-1388402092)),G__17979);
} else {
return G__17979;
}
})());
var chunk__17975 = null;
var count__17976 = (0);
var i__17977 = (0);
while(true){
if((i__17977 < count__17976)){
var doc = cljs.core._nth.call(null,chunk__17975,i__17977);
if(cljs.core.truth_(log_QMARK_)){
cljs.core.println.call(null,"Index",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(doc));
} else {
}

portfolio.ui.search.protocols.index.call(null,index,doc);


var G__17983 = seq__17974;
var G__17984 = chunk__17975;
var G__17985 = count__17976;
var G__17986 = (i__17977 + (1));
seq__17974 = G__17983;
chunk__17975 = G__17984;
count__17976 = G__17985;
i__17977 = G__17986;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17974);
if(temp__5804__auto__){
var seq__17974__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17974__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__17974__$1);
var G__17987 = cljs.core.chunk_rest.call(null,seq__17974__$1);
var G__17988 = c__5568__auto__;
var G__17989 = cljs.core.count.call(null,c__5568__auto__);
var G__17990 = (0);
seq__17974 = G__17987;
chunk__17975 = G__17988;
count__17976 = G__17989;
i__17977 = G__17990;
continue;
} else {
var doc = cljs.core.first.call(null,seq__17974__$1);
if(cljs.core.truth_(log_QMARK_)){
cljs.core.println.call(null,"Index",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(doc));
} else {
}

portfolio.ui.search.protocols.index.call(null,index,doc);


var G__17991 = cljs.core.next.call(null,seq__17974__$1);
var G__17992 = null;
var G__17993 = (0);
var G__17994 = (0);
seq__17974 = G__17991;
chunk__17975 = G__17992;
count__17976 = G__17993;
i__17977 = G__17994;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
}));

(portfolio.ui.index_content.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.index_content.cljs$lang$applyTo = (function (seq17966){
var G__17967 = cljs.core.first.call(null,seq17966);
var seq17966__$1 = cljs.core.next.call(null,seq17966);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17967,seq17966__$1);
}));

portfolio.ui.start_BANG_ = (function portfolio$ui$start_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18001 = arguments.length;
var i__5770__auto___18002 = (0);
while(true){
if((i__5770__auto___18002 < len__5769__auto___18001)){
args__5775__auto__.push((arguments[i__5770__auto___18002]));

var G__18003 = (i__5770__auto___18002 + (1));
i__5770__auto___18002 = G__18003;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return portfolio.ui.start_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(portfolio.ui.start_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17996){
var vec__17997 = p__17996;
var map__18000 = cljs.core.nth.call(null,vec__17997,(0),null);
var map__18000__$1 = cljs.core.__destructure_map.call(null,map__18000);
var opt = map__18000__$1;
var on_render = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var config = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"config","config",994861415));
var canvas_tools = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"canvas-tools","canvas-tools",-1946158067));
var extra_canvas_tools = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"extra-canvas-tools","extra-canvas-tools",1666309267));
var index = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var get_indexable_data = cljs.core.get.call(null,map__18000__$1,new cljs.core.Keyword(null,"get-indexable-data","get-indexable-data",-1702722423));
var __GT_diffable_18004 = cljs.core.partial.call(null,portfolio.ui.search.get_diffables,(function (){var or__5045__auto__ = get_indexable_data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.search.get_indexable_data;
}
})());
cljs.core.swap_BANG_.call(null,portfolio.ui.app,cljs.core.merge,portfolio.ui.create_app.call(null,config,canvas_tools,extra_canvas_tools),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_.call(null,portfolio.ui.app))){
} else {
cljs.core.add_watch.call(null,portfolio.data.scenes,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,old_scenes,scenes){
var collections_18005 = portfolio.ui.get_collections.call(null,scenes,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,portfolio.ui.app)));
var old_collections_18006 = portfolio.ui.get_collections.call(null,old_scenes,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,portfolio.ui.app)));
cljs.core.swap_BANG_.call(null,portfolio.ui.app,(function (state){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"scenes","scenes",-425219404),scenes),new cljs.core.Keyword(null,"collections","collections",-2114643505),collections_18005);
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"reindex?","reindex?",683464852).cljs$core$IFn$_invoke$arity$2(opt,true))){
portfolio.ui.index_content.call(null,portfolio.ui.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.concat.call(null,portfolio.ui.search.get_diff_keys.call(null,__GT_diffable_18004.call(null,scenes),__GT_diffable_18004.call(null,old_scenes)),portfolio.ui.search.get_diff_keys.call(null,__GT_diffable_18004.call(null,collections_18005),__GT_diffable_18004.call(null,old_collections_18006)))], null));
} else {
}

return portfolio.ui.eventually_execute.call(null,portfolio.ui.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_watch.call(null,portfolio.data.collections,new cljs.core.Keyword("portfolio.ui","app","portfolio.ui/app",355044435),(function (_,___$1,___$2,collections){
var old_collections = new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,portfolio.ui.app));
var collections__$1 = portfolio.ui.get_collections.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,portfolio.ui.app)),collections);
cljs.core.swap_BANG_.call(null,portfolio.ui.app,cljs.core.assoc,new cljs.core.Keyword(null,"collections","collections",-2114643505),collections__$1);

if(cljs.core.truth_(new cljs.core.Keyword(null,"reindex?","reindex?",683464852).cljs$core$IFn$_invoke$arity$2(opt,true))){
return portfolio.ui.index_content.call(null,portfolio.ui.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),portfolio.ui.search.get_diff_keys.call(null,__GT_diffable_18004.call(null,collections__$1),__GT_diffable_18004.call(null,old_collections))], null));
} else {
return null;
}
}));
}

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_.call(null,portfolio.ui.app))){
} else {
portfolio.ui.index_content.call(null,portfolio.ui.app);
}

return portfolio.ui.client.start_app.call(null,portfolio.ui.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
}));

(portfolio.ui.start_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(portfolio.ui.start_BANG_.cljs$lang$applyTo = (function (seq17995){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17995));
}));

