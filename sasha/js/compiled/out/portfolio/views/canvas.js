// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas');
goog.require('cljs.core');
goog.require('portfolio.code');
goog.require('portfolio.components.canvas');
goog.require('portfolio.core');
goog.require('portfolio.router');
goog.require('portfolio.view');
goog.require('portfolio.views.canvas.protocols');
portfolio.views.canvas.view_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.view","render-view","portfolio.view/render-view",-822188357,null),new cljs.core.Var(function(){return portfolio.components.canvas.CanvasView;},new cljs.core.Symbol("portfolio.components.canvas","CanvasView","portfolio.components.canvas/CanvasView",-1195790877,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.components.canvas","portfolio.components.canvas",-1989616955,null),new cljs.core.Symbol(null,"CanvasView","CanvasView",1270527477,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/components/canvas.cljs",27,1,223,223,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.components.canvas.CanvasView)?portfolio.components.canvas.CanvasView.cljs$lang$test:null)]))], null);
(cljs.core.PersistentArrayMap.prototype.portfolio$views$canvas$protocols$ICanvasToolValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.portfolio$views$canvas$protocols$ICanvasToolValue$get_tool_value$arity$3 = (function (tool,state,canvas_id){
var tool__$1 = this;
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool__$1),canvas_id,new cljs.core.Keyword(null,"value","value",305978217)], null));
}));
portfolio.views.canvas.gallery_QMARK_ = (function portfolio$views$canvas$gallery_QMARK_(state,location){
return ((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location),new cljs.core.Keyword(null,"namespace","namespace",-377510372))) || (((1) < cljs.core.count.call(null,new cljs.core.Keyword(null,"current-scenes","current-scenes",1736940721).cljs$core$IFn$_invoke$arity$1(state)))));
});
portfolio.views.canvas.inflate_layout = (function portfolio$views$canvas$inflate_layout(layout){
if(cljs.core.vector_QMARK_.call(null,layout)){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,layout))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"xs","xs",649443341),cljs.core.first.call(null,layout)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"xs","xs",649443341),(function (){var iter__5523__auto__ = (function portfolio$views$canvas$inflate_layout_$_iter__16547(s__16548){
return (new cljs.core.LazySeq(null,(function (){
var s__16548__$1 = s__16548;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16548__$1);
if(temp__5804__auto__){
var s__16548__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16548__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16548__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16550 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16549 = (0);
while(true){
if((i__16549 < size__5522__auto__)){
var row = cljs.core._nth.call(null,c__5521__auto__,i__16549);
cljs.core.chunk_append.call(null,b__16550,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"xs","xs",649443341),row], null));

var G__16551 = (i__16549 + (1));
i__16549 = G__16551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16550),portfolio$views$canvas$inflate_layout_$_iter__16547.call(null,cljs.core.chunk_rest.call(null,s__16548__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16550),null);
}
} else {
var row = cljs.core.first.call(null,s__16548__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"xs","xs",649443341),row], null),portfolio$views$canvas$inflate_layout_$_iter__16547.call(null,cljs.core.rest.call(null,s__16548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,layout);
})()], null);
}
} else {
return layout;
}
});
portfolio.views.canvas.get_layout = (function portfolio$views$canvas$get_layout(state,layout,path){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout","layout",-2120940921),portfolio.views.canvas.inflate_layout.call(null,(function (){var or__5045__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),path], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return layout;
}
})()),new cljs.core.Keyword(null,"source","source",-433931539),path], null);
});
portfolio.views.canvas.get_current_layout = (function portfolio$views$canvas$get_current_layout(state,location,view){
if(portfolio.views.canvas.gallery_QMARK_.call(null,state,location)){
return portfolio.views.canvas.get_layout.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("viewport","height","viewport/height",1951335772),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.Keyword("canvas","gallery-defaults","canvas/gallery-defaults",119496358).cljs$core$IFn$_invoke$arity$1(state))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio.views.canvas","gallery-default","portfolio.views.canvas/gallery-default",85792540)], null));
} else {
var or__5045__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"current-scenes","current-scenes",1736940721).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(temp__5804__auto__)){
var layout = temp__5804__auto__;
return portfolio.views.canvas.get_layout.call(null,state,layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"current-scenes","current-scenes",1736940721).cljs$core$IFn$_invoke$arity$1(state)))], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (function (){var temp__5804__auto__ = new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-namespace","current-namespace",-1512089502).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5804__auto__)){
var layout = temp__5804__auto__;
return portfolio.views.canvas.get_layout.call(null,state,layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-namespace","current-namespace",-1512089502).cljs$core$IFn$_invoke$arity$1(state))], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var temp__5804__auto__ = new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-collection","current-collection",-1148466995).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5804__auto__)){
var layout = temp__5804__auto__;
return portfolio.views.canvas.get_layout.call(null,state,layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-collection","current-collection",-1148466995).cljs$core$IFn$_invoke$arity$1(state))], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = (function (){var temp__5804__auto__ = new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto__)){
var layout = temp__5804__auto__;
return portfolio.views.canvas.get_layout.call(null,state,layout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-layout","state-layout",2065724593)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
var or__5045__auto____$4 = (function (){var temp__5804__auto__ = new cljs.core.Keyword("canvas","layout","canvas/layout",-737151185).cljs$core$IFn$_invoke$arity$1(view);
if(cljs.core.truth_(temp__5804__auto__)){
var layout = temp__5804__auto__;
return portfolio.views.canvas.get_layout.call(null,state,layout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view)], null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto____$4)){
return or__5045__auto____$4;
} else {
return portfolio.views.canvas.get_layout.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("layout","default","layout/default",-941526574)], null));
}
}
}
}
}
}
});
portfolio.views.canvas.get_current_addon = (function portfolio$views$canvas$get_current_addon(location,addons){
var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var G__16552 = location;
var G__16552__$1 = (((G__16552 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__16552));
var G__16552__$2 = (((G__16552__$1 == null))?null:new cljs.core.Keyword(null,"addon","addon",931813532).cljs$core$IFn$_invoke$arity$1(G__16552__$1));
if((G__16552__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__16552__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),addons));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first.call(null,addons);
}
});
portfolio.views.canvas.prepare_panel = (function portfolio$views$canvas$prepare_panel(state,location,scene,addons){
var current_addon = portfolio.views.canvas.get_current_addon.call(null,location,addons);
var minimize_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","panel","canvas/panel",892496792),new cljs.core.Keyword(null,"minimized?","minimized?",1807883709)], null);
var content = portfolio.views.canvas.protocols.prepare_panel_content.call(null,current_addon,state,scene);
var minimized_QMARK_ = cljs.core.get_in.call(null,state,minimize_path,cljs.core.not.call(null,content));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),(function (){var iter__5523__auto__ = (function portfolio$views$canvas$prepare_panel_$_iter__16553(s__16554){
return (new cljs.core.LazySeq(null,(function (){
var s__16554__$1 = s__16554;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16554__$1);
if(temp__5804__auto__){
var s__16554__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16554__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16554__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16556 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16555 = (0);
while(true){
if((i__16555 < size__5522__auto__)){
var addon = cljs.core._nth.call(null,c__5521__auto__,i__16555);
cljs.core.chunk_append.call(null,b__16556,(function (){var G__16557 = addon;
var G__16557__$1 = ((cljs.core._EQ_.call(null,current_addon,addon))?cljs.core.assoc.call(null,G__16557,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__16557);
if(cljs.core.not_EQ_.call(null,current_addon,addon)){
return cljs.core.assoc.call(null,G__16557__$1,new cljs.core.Keyword(null,"url","url",276297046),portfolio.router.get_url.call(null,cljs.core.assoc_in.call(null,location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"addon","addon",931813532)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(addon))));
} else {
return G__16557__$1;
}
})());

var G__16559 = (i__16555 + (1));
i__16555 = G__16559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16556),portfolio$views$canvas$prepare_panel_$_iter__16553.call(null,cljs.core.chunk_rest.call(null,s__16554__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16556),null);
}
} else {
var addon = cljs.core.first.call(null,s__16554__$2);
return cljs.core.cons.call(null,(function (){var G__16558 = addon;
var G__16558__$1 = ((cljs.core._EQ_.call(null,current_addon,addon))?cljs.core.assoc.call(null,G__16558,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__16558);
if(cljs.core.not_EQ_.call(null,current_addon,addon)){
return cljs.core.assoc.call(null,G__16558__$1,new cljs.core.Keyword(null,"url","url",276297046),portfolio.router.get_url.call(null,cljs.core.assoc_in.call(null,location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"addon","addon",931813532)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(addon))));
} else {
return G__16558__$1;
}
})(),portfolio$views$canvas$prepare_panel_$_iter__16553.call(null,cljs.core.rest.call(null,s__16554__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,addons);
})(),new cljs.core.Keyword(null,"minimized?","minimized?",1807883709),minimized_QMARK_,new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(minimized_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Maximize",new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),minimize_path], null)], null),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"up","up",-269712113)], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Minimize",new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),minimize_path,true], null)], null)], null)),new cljs.core.Keyword(null,"content","content",15833224),content], null);
});
portfolio.views.canvas.get_tool_defaults = (function portfolio$views$canvas$get_tool_defaults(tools){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,new cljs.core.Keyword(null,"default-value","default-value",232220170),tools));
});
portfolio.views.canvas.toolbar_value_QMARK_ = (function portfolio$views$canvas$toolbar_value_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$views$canvas$protocols$ICanvasToolValue$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.views.canvas.protocols.ICanvasToolValue,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.views.canvas.protocols.ICanvasToolValue,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.views.canvas.protocols","get-tool-value","portfolio.views.canvas.protocols/get-tool-value",-1168238097,null)));
}
});
portfolio.views.canvas.get_tool_values = (function portfolio$views$canvas$get_tool_values(state,id,tools){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__16561_SHARP_){
return portfolio.views.canvas.protocols.get_tool_value.call(null,p1__16561_SHARP_,state,id);
}),cljs.core.filter.call(null,portfolio.views.canvas.toolbar_value_QMARK_,tools)));
});
portfolio.views.canvas.prepare_canvas = (function portfolio$views$canvas$prepare_canvas(options,canvas){
var f = new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(canvas));
var canvas__$1 = cljs.core.assoc.call(null,canvas,new cljs.core.Keyword(null,"opt","opt",-794706369),options);
try{var G__16563 = canvas__$1;
if(cljs.core.ifn_QMARK_.call(null,f)){
return cljs.core.assoc_in.call(null,G__16563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"component","component",1555936782)], null),f.call(null,options));
} else {
return G__16563;
}
}catch (e16562){var e = e16562;
return cljs.core.assoc_in.call(null,canvas__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),portfolio.code.code_str.call(null,cljs.core.ex_data.call(null,e)),new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack,new cljs.core.Keyword(null,"title","title",636505583),"Failed to render component"], null));
}});
portfolio.views.canvas.toolbar_button_QMARK_ = (function portfolio$views$canvas$toolbar_button_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$views$canvas$protocols$ICanvasToolbarButtonData$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.views.canvas.protocols.ICanvasToolbarButtonData,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.views.canvas.protocols.ICanvasToolbarButtonData,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-toolbar-button","portfolio.views.canvas.protocols/prepare-toolbar-button",127148166,null)));
}
});
portfolio.views.canvas.prepare_layout_xs = (function portfolio$views$canvas$prepare_layout_xs(state,root_layout,source,view,scenes,path,opt){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null).call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"xs","xs",649443341),(function (){var iter__5523__auto__ = (function portfolio$views$canvas$prepare_layout_xs_$_iter__16566(s__16567){
return (new cljs.core.LazySeq(null,(function (){
var s__16567__$1 = s__16567;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16567__$1);
if(temp__5804__auto__){
var s__16567__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16567__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16567__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16569 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16568 = (0);
while(true){
if((i__16568 < size__5522__auto__)){
var vec__16570 = cljs.core._nth.call(null,c__5521__auto__,i__16568);
var i = cljs.core.nth.call(null,vec__16570,(0),null);
var x = cljs.core.nth.call(null,vec__16570,(1),null);
cljs.core.chunk_append.call(null,b__16569,portfolio.views.canvas.prepare_layout_xs.call(null,state,root_layout,source,view,scenes,cljs.core.conj.call(null,path,i),x));

var G__16577 = (i__16568 + (1));
i__16568 = G__16577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16569),portfolio$views$canvas$prepare_layout_xs_$_iter__16566.call(null,cljs.core.chunk_rest.call(null,s__16567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16569),null);
}
} else {
var vec__16573 = cljs.core.first.call(null,s__16567__$2);
var i = cljs.core.nth.call(null,vec__16573,(0),null);
var x = cljs.core.nth.call(null,vec__16573,(1),null);
return cljs.core.cons.call(null,portfolio.views.canvas.prepare_layout_xs.call(null,state,root_layout,source,view,scenes,cljs.core.conj.call(null,path,i),x),portfolio$views$canvas$prepare_layout_xs_$_iter__16566.call(null,cljs.core.rest.call(null,s__16567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(opt)));
})()], null);
} else {
var id = cljs.core.concat.call(null,source,path);
var options = cljs.core.merge.call(null,portfolio.views.canvas.get_tool_defaults.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)),opt,portfolio.views.canvas.get_tool_values.call(null,state,id,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
if(cljs.core.seq.call(null,scenes)){
var buttons = cljs.core.keep.call(null,(function (p1__16565_SHARP_){
return portfolio.views.canvas.protocols.prepare_toolbar_button.call(null,p1__16565_SHARP_,state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pane-id","pane-id",28980857),id,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629),options,new cljs.core.Keyword(null,"pane-path","pane-path",-316302892),path,new cljs.core.Keyword(null,"layout-path","layout-path",-654991240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),source], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),root_layout,new cljs.core.Keyword(null,"config-source","config-source",-1282385545),source], null));
}),cljs.core.filter.call(null,portfolio.views.canvas.toolbar_button_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
var G__16576 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"pane","pane",1593450723),new cljs.core.Keyword(null,"canvases","canvases",-441653731),cljs.core.map.call(null,cljs.core.partial.call(null,portfolio.views.canvas.prepare_canvas,options),scenes)], null);
if(cljs.core.seq.call(null,buttons)){
return cljs.core.assoc.call(null,G__16576,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null));
} else {
return G__16576;
}
} else {
return null;
}
}
});
portfolio.views.canvas.canvas_tool_QMARK_ = (function portfolio$views$canvas$canvas_tool_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$views$canvas$protocols$ICanvasTool$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.views.canvas.protocols.ICanvasTool,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.views.canvas.protocols.ICanvasTool,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-canvas","portfolio.views.canvas.protocols/prepare-canvas",1591467281,null)))) && (cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.views.canvas.protocols","finalize-canvas","portfolio.views.canvas.protocols/finalize-canvas",-1958789840,null)))));
}
});
portfolio.views.canvas.prepare_layout = (function portfolio$views$canvas$prepare_layout(state,location,view,p__16579,scenes,gallery_QMARK_){
var map__16580 = p__16579;
var map__16580__$1 = cljs.core.__destructure_map.call(null,map__16580);
var layout = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var source = cljs.core.get.call(null,map__16580__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var scenes__$1 = (function (){var iter__5523__auto__ = (function portfolio$views$canvas$prepare_layout_$_iter__16581(s__16582){
return (new cljs.core.LazySeq(null,(function (){
var s__16582__$1 = s__16582;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16582__$1);
if(temp__5804__auto__){
var s__16582__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16582__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16582__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16584 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16583 = (0);
while(true){
if((i__16583 < size__5522__auto__)){
var scene = cljs.core._nth.call(null,c__5521__auto__,i__16583);
cljs.core.chunk_append.call(null,b__16584,(function (){var tools = cljs.core.filter.call(null,portfolio.views.canvas.canvas_tool_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view));
var G__16585 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),scene], null);
var G__16585__$1 = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.assoc.call(null,G__16585,new cljs.core.Keyword(null,"css-paths","css-paths",582305563),new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)):G__16585);
var G__16585__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.assoc.call(null,G__16585__$1,new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618),new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state)):G__16585__$1);
var G__16585__$3 = ((cljs.core.seq.call(null,tools))?cljs.core.assoc.call(null,G__16585__$2,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools):G__16585__$2);
if(cljs.core.truth_(gallery_QMARK_)){
return cljs.core.assoc.call(null,G__16585__$3,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"url","url",276297046),portfolio.core.get_scene_url.call(null,location,scene),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return G__16585__$3;
}
})());

var G__16587 = (i__16583 + (1));
i__16583 = G__16587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16584),portfolio$views$canvas$prepare_layout_$_iter__16581.call(null,cljs.core.chunk_rest.call(null,s__16582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16584),null);
}
} else {
var scene = cljs.core.first.call(null,s__16582__$2);
return cljs.core.cons.call(null,(function (){var tools = cljs.core.filter.call(null,portfolio.views.canvas.canvas_tool_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view));
var G__16586 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),scene], null);
var G__16586__$1 = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.assoc.call(null,G__16586,new cljs.core.Keyword(null,"css-paths","css-paths",582305563),new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)):G__16586);
var G__16586__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.assoc.call(null,G__16586__$1,new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618),new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state)):G__16586__$1);
var G__16586__$3 = ((cljs.core.seq.call(null,tools))?cljs.core.assoc.call(null,G__16586__$2,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools):G__16586__$2);
if(cljs.core.truth_(gallery_QMARK_)){
return cljs.core.assoc.call(null,G__16586__$3,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"url","url",276297046),portfolio.core.get_scene_url.call(null,location,scene),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(scene));
} else {
return G__16586__$3;
}
})(),portfolio$views$canvas$prepare_layout_$_iter__16581.call(null,cljs.core.rest.call(null,s__16582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,scenes);
})();
return cljs.core.assoc.call(null,portfolio.views.canvas.prepare_layout_xs.call(null,state,layout,source,view,scenes__$1,cljs.core.PersistentVector.EMPTY,layout),new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.truth_(gallery_QMARK_)?new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-namespace","current-namespace",-1512089502).cljs$core$IFn$_invoke$arity$1(state)):new cljs.core.Keyword(null,"single-scene","single-scene",-30974946)));
});
portfolio.views.canvas.prepare_canvas_view = (function portfolio$views$canvas$prepare_canvas_view(view,state,location){
var layout = portfolio.views.canvas.get_current_layout.call(null,state,location,view);
var scenes = new cljs.core.Keyword(null,"current-scenes","current-scenes",1736940721).cljs$core$IFn$_invoke$arity$1(state);
var multi_QMARK_ = portfolio.views.canvas.gallery_QMARK_.call(null,state,location);
return cljs.core.with_meta.call(null,(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(view);
if(cljs.core.truth_(temp__5802__auto__)){
var problems = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null);
} else {
return cljs.core.assoc.call(null,portfolio.views.canvas.prepare_layout.call(null,state,location,view,layout,scenes,multi_QMARK_),new cljs.core.Keyword(null,"panel","panel",-558637456),((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,scenes))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"addons","addons",-1518903852).cljs$core$IFn$_invoke$arity$1(view)))))?portfolio.views.canvas.prepare_panel.call(null,state,location,cljs.core.first.call(null,scenes),new cljs.core.Keyword(null,"addons","addons",-1518903852).cljs$core$IFn$_invoke$arity$1(view)):null));
}
})(),portfolio.views.canvas.view_impl);
});
portfolio.views.canvas.data_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.view","prepare-data","portfolio.view/prepare-data",-1000148919,null),new cljs.core.Var(function(){return portfolio.views.canvas.prepare_canvas_view;},new cljs.core.Symbol("portfolio.views.canvas","prepare-canvas-view","portfolio.views.canvas/prepare-canvas-view",-102305783,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas","portfolio.views.canvas",1374113554,null),new cljs.core.Symbol(null,"prepare-canvas-view","prepare-canvas-view",1078914127,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas.cljs",26,1,164,164,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"location","location",-838836381,null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.prepare_canvas_view)?portfolio.views.canvas.prepare_canvas_view.cljs$lang$test:null)]))], null);
portfolio.views.canvas.describe_missing_tool_id = (function portfolio$views$canvas$describe_missing_tool_id(tool){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Badly configured canvas tool",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Canvas tool extensions must have an ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)," or they won't work correctly. Please inspect this tool:"], null),new cljs.core.Keyword(null,"code","code",1586293142),portfolio.code.code_str.call(null,tool)], null);
});
portfolio.views.canvas.create_canvas = (function portfolio$views$canvas$create_canvas(p__16588){
var map__16589 = p__16588;
var map__16589__$1 = cljs.core.__destructure_map.call(null,map__16589);
var tools = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var addons = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"addons","addons",-1518903852));
var layout = cljs.core.get.call(null,map__16589__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("portfolio.views.canvas","canvas","portfolio.views.canvas/canvas",225457385),new cljs.core.Keyword(null,"title","title",636505583),"Canvas",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),tools),new cljs.core.Keyword(null,"addons","addons",-1518903852),addons,new cljs.core.Keyword(null,"layout","layout",-2120940921),(function (){var or__5045__auto__ = layout;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)], null);
}
})(),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.seq.call(null,cljs.core.map.call(null,portfolio.views.canvas.describe_missing_tool_id,cljs.core.remove.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),tools)))], null),portfolio.views.canvas.data_impl);
});
