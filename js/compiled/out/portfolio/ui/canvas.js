// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas');
goog.require('cljs.core');
goog.require('markdown.core');
goog.require('portfolio.ui.canvas.addons');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.code');
goog.require('portfolio.ui.color');
goog.require('portfolio.ui.components.canvas');
goog.require('portfolio.ui.layout');
goog.require('portfolio.ui.routes');
goog.require('portfolio.ui.scene');
goog.require('portfolio.ui.view');
portfolio.ui.canvas.view_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.view","render-view","portfolio.ui.view/render-view",657855785,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas.CanvasView;},new cljs.core.Symbol("portfolio.ui.components.canvas","CanvasView","portfolio.ui.components.canvas/CanvasView",1850747569,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas","portfolio.ui.components.canvas",-1179967811,null),new cljs.core.Symbol(null,"CanvasView","CanvasView",1270527477,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas.cljs",27,1,356,356,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas.CanvasView)?portfolio.ui.components.canvas.CanvasView.cljs$lang$test:null)]))], null);
portfolio.ui.canvas.get_current_addon = (function portfolio$ui$canvas$get_current_addon(location,addons){
var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var G__17224 = location;
var G__17224__$1 = (((G__17224 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__17224));
var G__17224__$2 = (((G__17224__$1 == null))?null:new cljs.core.Keyword(null,"addon","addon",931813532).cljs$core$IFn$_invoke$arity$1(G__17224__$1));
if((G__17224__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__17224__$2);
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
portfolio.ui.canvas.prepare_panel = (function portfolio$ui$canvas$prepare_panel(state,location,scene,addons){
var current_addon = portfolio.ui.canvas.get_current_addon.call(null,location,addons);
var minimize_path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","panel","canvas/panel",892496792),new cljs.core.Keyword(null,"minimized?","minimized?",1807883709)], null);
var content = portfolio.ui.canvas.protocols.prepare_panel_content.call(null,current_addon,state,scene);
var minimized_QMARK_ = cljs.core.get_in.call(null,state,minimize_path,cljs.core.not.call(null,content));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),(function (){var iter__5523__auto__ = (function portfolio$ui$canvas$prepare_panel_$_iter__17225(s__17226){
return (new cljs.core.LazySeq(null,(function (){
var s__17226__$1 = s__17226;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17226__$1);
if(temp__5804__auto__){
var s__17226__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17226__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17226__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17228 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17227 = (0);
while(true){
if((i__17227 < size__5522__auto__)){
var addon = cljs.core._nth.call(null,c__5521__auto__,i__17227);
cljs.core.chunk_append.call(null,b__17228,(function (){var G__17229 = addon;
var G__17229__$1 = ((cljs.core._EQ_.call(null,current_addon,addon))?cljs.core.assoc.call(null,G__17229,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__17229);
if(cljs.core.not_EQ_.call(null,current_addon,addon)){
return cljs.core.assoc.call(null,G__17229__$1,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_addon_url.call(null,location,addon));
} else {
return G__17229__$1;
}
})());

var G__17231 = (i__17227 + (1));
i__17227 = G__17231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17228),portfolio$ui$canvas$prepare_panel_$_iter__17225.call(null,cljs.core.chunk_rest.call(null,s__17226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17228),null);
}
} else {
var addon = cljs.core.first.call(null,s__17226__$2);
return cljs.core.cons.call(null,(function (){var G__17230 = addon;
var G__17230__$1 = ((cljs.core._EQ_.call(null,current_addon,addon))?cljs.core.assoc.call(null,G__17230,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true):G__17230);
if(cljs.core.not_EQ_.call(null,current_addon,addon)){
return cljs.core.assoc.call(null,G__17230__$1,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_addon_url.call(null,location,addon));
} else {
return G__17230__$1;
}
})(),portfolio$ui$canvas$prepare_panel_$_iter__17225.call(null,cljs.core.rest.call(null,s__17226__$2)));
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
portfolio.ui.canvas.get_tool_defaults = (function portfolio$ui$canvas$get_tool_defaults(tools){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,portfolio.ui.canvas.addons.get_default_value,tools));
});
portfolio.ui.canvas.toolbar_value_QMARK_ = (function portfolio$ui$canvas$toolbar_value_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolValue$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolValue,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolValue,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","get-tool-value","portfolio.ui.canvas.protocols/get-tool-value",732248337,null)));
}
});
portfolio.ui.canvas.get_tool_values = (function portfolio$ui$canvas$get_tool_values(state,id,tools){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__17233_SHARP_){
return portfolio.ui.canvas.protocols.get_tool_value.call(null,p1__17233_SHARP_,state,id);
}),cljs.core.filter.call(null,portfolio.ui.canvas.toolbar_value_QMARK_,tools)));
});
portfolio.ui.canvas.prepare_canvas = (function portfolio$ui$canvas$prepare_canvas(options,canvas){
var f = new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(canvas));
var canvas__$1 = cljs.core.assoc.call(null,canvas,new cljs.core.Keyword(null,"opt","opt",-794706369),options);
try{var G__17235 = canvas__$1;
if(cljs.core.ifn_QMARK_.call(null,f)){
return cljs.core.assoc_in.call(null,G__17235,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"component","component",1555936782)], null),f.call(null,options));
} else {
return G__17235;
}
}catch (e17234){var e = e17234;
return cljs.core.assoc_in.call(null,canvas__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"error","error",-978969032)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),portfolio.ui.code.code_str.call(null,cljs.core.ex_data.call(null,e)),new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack,new cljs.core.Keyword(null,"title","title",636505583),"Failed to render component"], null));
}});
portfolio.ui.canvas.toolbar_button_QMARK_ = (function portfolio$ui$canvas$toolbar_button_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolbarButtonData$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolbarButtonData,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolbarButtonData,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null)));
}
});
portfolio.ui.canvas.dark_QMARK_ = (function portfolio$ui$canvas$dark_QMARK_(background){
if(cljs.core.truth_(background)){
return (new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(portfolio.ui.color.rgb__GT_hsl.call(null,portfolio.ui.color.__GT_rgb.call(null,background))) < (40));
} else {
return null;
}
});
portfolio.ui.canvas.prepare_pane = (function portfolio$ui$canvas$prepare_pane(state,view,ctx){
var temp__5804__auto__ = cljs.core.seq.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(ctx));
if(temp__5804__auto__){
var scenes = temp__5804__auto__;
var buttons = cljs.core.keep.call(null,(function (p1__17237_SHARP_){
return portfolio.ui.canvas.protocols.prepare_toolbar_button.call(null,p1__17237_SHARP_,state,cljs.core.dissoc.call(null,ctx,new cljs.core.Keyword(null,"scenes","scenes",-425219404)));
}),cljs.core.filter.call(null,portfolio.ui.canvas.toolbar_button_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
var background = new cljs.core.Keyword("background","background-color","background/background-color",1902638780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629).cljs$core$IFn$_invoke$arity$1(ctx));
var G__17238 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"pane","pane",1593450723),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"canvases","canvases",-441653731),cljs.core.map.call(null,cljs.core.partial.call(null,portfolio.ui.canvas.prepare_canvas,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629).cljs$core$IFn$_invoke$arity$1(ctx)),scenes),new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(portfolio.ui.canvas.dark_QMARK_.call(null,background))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747))], null);
if(cljs.core.seq.call(null,buttons)){
return cljs.core.assoc.call(null,G__17238,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null));
} else {
return G__17238;
}
} else {
return null;
}
});
portfolio.ui.canvas.canvas_tool_QMARK_ = (function portfolio$ui$canvas$canvas_tool_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasTool$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasTool,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasTool,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null)))) && (cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null)))));
}
});
portfolio.ui.canvas.pane_prepper_QMARK_ = (function portfolio$ui$canvas$pane_prepper_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolPaneMiddleware$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolPaneMiddleware,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolPaneMiddleware,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-pane","portfolio.ui.canvas.protocols/prepare-pane",351871543,null)));
}
});
portfolio.ui.canvas.prepare_scenes = (function portfolio$ui$canvas$prepare_scenes(state,location,view,layout,scenes){
var iter__5523__auto__ = (function portfolio$ui$canvas$prepare_scenes_$_iter__17241(s__17242){
return (new cljs.core.LazySeq(null,(function (){
var s__17242__$1 = s__17242;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17242__$1);
if(temp__5804__auto__){
var s__17242__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17242__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17242__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17244 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17243 = (0);
while(true){
if((i__17243 < size__5522__auto__)){
var scene = cljs.core._nth.call(null,c__5521__auto__,i__17243);
cljs.core.chunk_append.call(null,b__17244,(function (){var tools = cljs.core.filter.call(null,portfolio.ui.canvas.canvas_tool_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view));
var G__17245 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),portfolio.ui.scene.prep_scene_fn.call(null,state,scene)], null);
var G__17245__$1 = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.assoc.call(null,G__17245,new cljs.core.Keyword(null,"css-paths","css-paths",582305563),new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)):G__17245);
var G__17245__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.assoc.call(null,G__17245__$1,new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618),new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state)):G__17245__$1);
var G__17245__$3 = ((cljs.core.seq.call(null,tools))?cljs.core.assoc.call(null,G__17245__$2,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools):G__17245__$2);
var G__17245__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.call(null,G__17245__$3,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"description","description",-1428560544),markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene))):G__17245__$3);
if(cljs.core.truth_(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(layout))){
return cljs.core.assoc.call(null,G__17245__$4,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_scene_url.call(null,location,scene));
} else {
return G__17245__$4;
}
})());

var G__17247 = (i__17243 + (1));
i__17243 = G__17247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17244),portfolio$ui$canvas$prepare_scenes_$_iter__17241.call(null,cljs.core.chunk_rest.call(null,s__17242__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17244),null);
}
} else {
var scene = cljs.core.first.call(null,s__17242__$2);
return cljs.core.cons.call(null,(function (){var tools = cljs.core.filter.call(null,portfolio.ui.canvas.canvas_tool_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view));
var G__17246 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),portfolio.ui.scene.prep_scene_fn.call(null,state,scene)], null);
var G__17246__$1 = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.assoc.call(null,G__17246,new cljs.core.Keyword(null,"css-paths","css-paths",582305563),new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(state)):G__17246);
var G__17246__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.assoc.call(null,G__17246__$1,new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618),new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(state)):G__17246__$1);
var G__17246__$3 = ((cljs.core.seq.call(null,tools))?cljs.core.assoc.call(null,G__17246__$2,new cljs.core.Keyword(null,"tools","tools",-1241731990),tools):G__17246__$2);
var G__17246__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.call(null,G__17246__$3,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"description","description",-1428560544),markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(scene))):G__17246__$3);
if(cljs.core.truth_(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(layout))){
return cljs.core.assoc.call(null,G__17246__$4,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_scene_url.call(null,location,scene));
} else {
return G__17246__$4;
}
})(),portfolio$ui$canvas$prepare_scenes_$_iter__17241.call(null,cljs.core.rest.call(null,s__17242__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.sort_by.call(null,portfolio.ui.scene.sort_key,scenes));
});
portfolio.ui.canvas.prepare_layout_pane = (function portfolio$ui$canvas$prepare_layout_pane(state,view,ctx){
var f = cljs.core.reduce.call(null,(function (f,tool){
return cljs.core.partial.call(null,portfolio.ui.canvas.protocols.prepare_pane,tool,f);
}),portfolio.ui.canvas.prepare_pane,cljs.core.filter.call(null,portfolio.ui.canvas.pane_prepper_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
return f.call(null,state,view,ctx);
});
portfolio.ui.canvas.prepare_layout_xs = (function portfolio$ui$canvas$prepare_layout_xs(state,location,root_layout,source,view,scenes,path,opt){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null).call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"xs","xs",649443341),(function (){var n = cljs.core.count.call(null,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(opt));
var iter__5523__auto__ = (function portfolio$ui$canvas$prepare_layout_xs_$_iter__17248(s__17249){
return (new cljs.core.LazySeq(null,(function (){
var s__17249__$1 = s__17249;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17249__$1);
if(temp__5804__auto__){
var s__17249__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17249__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17249__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17251 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17250 = (0);
while(true){
if((i__17250 < size__5522__auto__)){
var vec__17252 = cljs.core._nth.call(null,c__5521__auto__,i__17250);
var i = cljs.core.nth.call(null,vec__17252,(0),null);
var x = cljs.core.nth.call(null,vec__17252,(1),null);
cljs.core.chunk_append.call(null,b__17251,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,portfolio.ui.canvas.prepare_layout_xs.call(null,state,location,root_layout,source,view,scenes,cljs.core.conj.call(null,path,i),x),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"height","height",1025178622):new cljs.core.Keyword(null,"width","width",-384071477)),["calc(100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('')),new cljs.core.Keyword(null,"offset","offset",296498311),["calc((100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),") * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('')),new cljs.core.Keyword(null,"handle","handle",1538948854),(((i < (n - (1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"horizontal","horizontal",2062109475):new cljs.core.Keyword(null,"vertical","vertical",718696748))], null):null)));

var G__17258 = (i__17250 + (1));
i__17250 = G__17258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17251),portfolio$ui$canvas$prepare_layout_xs_$_iter__17248.call(null,cljs.core.chunk_rest.call(null,s__17249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17251),null);
}
} else {
var vec__17255 = cljs.core.first.call(null,s__17249__$2);
var i = cljs.core.nth.call(null,vec__17255,(0),null);
var x = cljs.core.nth.call(null,vec__17255,(1),null);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,portfolio.ui.canvas.prepare_layout_xs.call(null,state,location,root_layout,source,view,scenes,cljs.core.conj.call(null,path,i),x),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"height","height",1025178622):new cljs.core.Keyword(null,"width","width",-384071477)),["calc(100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('')),new cljs.core.Keyword(null,"offset","offset",296498311),["calc((100% / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),") * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('')),new cljs.core.Keyword(null,"handle","handle",1538948854),(((i < (n - (1))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opt)))?new cljs.core.Keyword(null,"horizontal","horizontal",2062109475):new cljs.core.Keyword(null,"vertical","vertical",718696748))], null):null)),portfolio$ui$canvas$prepare_layout_xs_$_iter__17248.call(null,cljs.core.rest.call(null,s__17249__$2)));
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
return portfolio.ui.canvas.prepare_layout_pane.call(null,state,view,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"pane-id","pane-id",28980857),new cljs.core.Keyword("portfolio.ui.layout","pane-id","portfolio.ui.layout/pane-id",792660767).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629),cljs.core.merge.call(null,portfolio.ui.canvas.get_tool_defaults.call(null,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)),opt,portfolio.ui.canvas.get_tool_values.call(null,state,new cljs.core.Keyword("portfolio.ui.layout","pane-id","portfolio.ui.layout/pane-id",792660767).cljs$core$IFn$_invoke$arity$1(opt),new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view))),new cljs.core.Keyword(null,"pane-path","pane-path",-316302892),path,new cljs.core.Keyword(null,"layout-path","layout-path",-654991240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),source], null),new cljs.core.Keyword(null,"layout","layout",-2120940921),root_layout,new cljs.core.Keyword(null,"config-source","config-source",-1282385545),source,new cljs.core.Keyword(null,"scenes","scenes",-425219404),scenes], null));
}
});
portfolio.ui.canvas.prepare_layout = (function portfolio$ui$canvas$prepare_layout(state,location,view,p__17259,scenes){
var map__17260 = p__17259;
var map__17260__$1 = cljs.core.__destructure_map.call(null,map__17260);
var layout = cljs.core.get.call(null,map__17260__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var source = cljs.core.get.call(null,map__17260__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var scenes__$1 = portfolio.ui.canvas.prepare_scenes.call(null,state,location,view,layout,scenes);
return cljs.core.assoc.call(null,portfolio.ui.canvas.prepare_layout_xs.call(null,state,location,layout,source,view,scenes__$1,cljs.core.PersistentVector.EMPTY,layout),new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.truth_(new cljs.core.Keyword(null,"gallery?","gallery?",-905074488).cljs$core$IFn$_invoke$arity$1(layout))?portfolio.ui.routes.get_id.call(null,location):new cljs.core.Keyword(null,"single-scene","single-scene",-30974946)),new cljs.core.Keyword(null,"height","height",1025178622),"100%");
});
portfolio.ui.canvas.prepare_canvas_view = (function portfolio$ui$canvas$prepare_canvas_view(state,location,view){
var layout = portfolio.ui.layout.get_current_layout.call(null,state);
var map__17261 = new cljs.core.Keyword(null,"current-selection","current-selection",-812715814).cljs$core$IFn$_invoke$arity$1(state);
var map__17261__$1 = cljs.core.__destructure_map.call(null,map__17261);
var scenes = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var kind = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var target = cljs.core.get.call(null,map__17261__$1,new cljs.core.Keyword(null,"target","target",253001721));
return cljs.core.with_meta.call(null,(function (){var G__17262 = (function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(view);
if(cljs.core.truth_(temp__5802__auto__)){
var problems = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null);
} else {
return cljs.core.assoc.call(null,portfolio.ui.canvas.prepare_layout.call(null,state,location,view,layout,scenes),new cljs.core.Keyword(null,"panel","panel",-558637456),((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,scenes))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"addons","addons",-1518903852).cljs$core$IFn$_invoke$arity$1(view)))))?portfolio.ui.canvas.prepare_panel.call(null,state,location,cljs.core.first.call(null,scenes),new cljs.core.Keyword(null,"addons","addons",-1518903852).cljs$core$IFn$_invoke$arity$1(view)):null));
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(target);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),kind);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__17262,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(target),new cljs.core.Keyword(null,"description","description",-1428560544),markdown.core.md__GT_html.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502).cljs$core$IFn$_invoke$arity$1(target)));
} else {
return G__17262;
}
})(),portfolio.ui.canvas.view_impl);
});
portfolio.ui.canvas.view_prepper_QMARK_ = (function portfolio$ui$canvas$view_prepper_QMARK_(tool){
var or__5045__auto__ = (((!((tool == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tool.portfolio$ui$canvas$protocols$ICanvasToolMiddleware$))))?true:(((!tool.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolMiddleware,tool):false)):cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.canvas.protocols.ICanvasToolMiddleware,tool));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.ifn_QMARK_.call(null,cljs.core.get.call(null,cljs.core.meta.call(null,tool),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-view","portfolio.ui.canvas.protocols/prepare-view",-765650856,null)));
}
});
portfolio.ui.canvas.prepare_view = (function portfolio$ui$canvas$prepare_view(view,state,location){
var f = cljs.core.reduce.call(null,(function (f,tool){
return cljs.core.partial.call(null,portfolio.ui.canvas.protocols.prepare_view,tool,f,state,location,view);
}),portfolio.ui.canvas.prepare_canvas_view,cljs.core.filter.call(null,portfolio.ui.canvas.view_prepper_QMARK_,new cljs.core.Keyword(null,"tools","tools",-1241731990).cljs$core$IFn$_invoke$arity$1(view)));
return f.call(null,state,location,view);
});
portfolio.ui.canvas.data_impl = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.view","prepare-data","portfolio.ui.view/prepare-data",800392415,null),new cljs.core.Var(function(){return portfolio.ui.canvas.prepare_view;},new cljs.core.Symbol("portfolio.ui.canvas","prepare-view","portfolio.ui.canvas/prepare-view",1102582197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas","portfolio.ui.canvas",1102171045,null),new cljs.core.Symbol(null,"prepare-view","prepare-view",-1617068415,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas.cljs",19,1,191,191,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"view","view",-1406440955,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"location","location",-838836381,null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.prepare_view)?portfolio.ui.canvas.prepare_view.cljs$lang$test:null)]))], null);
portfolio.ui.canvas.describe_missing_tool_id = (function portfolio$ui$canvas$describe_missing_tool_id(tool){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Badly configured canvas tool",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Canvas tool extensions must have an ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)," or they won't work correctly. Please inspect this tool:"], null),new cljs.core.Keyword(null,"code","code",1586293142),portfolio.ui.code.code_str.call(null,tool)], null);
});
portfolio.ui.canvas.create_canvas = (function portfolio$ui$canvas$create_canvas(p__17264){
var map__17265 = p__17264;
var map__17265__$1 = cljs.core.__destructure_map.call(null,map__17265);
var tools = cljs.core.get.call(null,map__17265__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var addons = cljs.core.get.call(null,map__17265__$1,new cljs.core.Keyword(null,"addons","addons",-1518903852));
var layout = cljs.core.get.call(null,map__17265__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("portfolio.ui.canvas","canvas","portfolio.ui.canvas/canvas",1995656155),new cljs.core.Keyword(null,"title","title",636505583),"Canvas",new cljs.core.Keyword(null,"tools","tools",-1241731990),cljs.core.filter.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),tools),new cljs.core.Keyword(null,"addons","addons",-1518903852),addons,new cljs.core.Keyword(null,"layout","layout",-2120940921),(function (){var or__5045__auto__ = layout;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.seq.call(null,cljs.core.map.call(null,portfolio.ui.canvas.describe_missing_tool_id,cljs.core.remove.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),tools)))], null),portfolio.ui.canvas.data_impl);
});
