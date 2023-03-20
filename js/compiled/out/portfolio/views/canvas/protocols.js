// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
portfolio.views.canvas.protocols.ICanvasToolbarButtonData = function(){};

var portfolio$views$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$dyn_11706 = (function (self,state,opt){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.views.canvas.protocols.prepare_toolbar_button[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,state,opt);
} else {
var m__5392__auto__ = (portfolio.views.canvas.protocols.prepare_toolbar_button["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,state,opt);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolbarButtonData.prepare-toolbar-button",self);
}
}
});
portfolio.views.canvas.protocols.prepare_toolbar_button = (function portfolio$views$canvas$protocols$prepare_toolbar_button(self,state,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-toolbar-button","portfolio.views.canvas.protocols/prepare-toolbar-button",127148166,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,state,opt);
} else {
if((((!((self == null)))) && ((!((self.portfolio$views$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$arity$3 == null)))))){
return self.portfolio$views$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$arity$3(self,state,opt);
} else {
return portfolio$views$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$dyn_11706.call(null,self,state,opt);
}
}
});


/**
 * @interface
 */
portfolio.views.canvas.protocols.ICanvasToolbarButtonView = function(){};

var portfolio$views$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$dyn_11707 = (function (data){
var x__5393__auto__ = (((data == null))?null:data);
var m__5394__auto__ = (portfolio.views.canvas.protocols.render_toolbar_button[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,data);
} else {
var m__5392__auto__ = (portfolio.views.canvas.protocols.render_toolbar_button["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,data);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolbarButtonView.render-toolbar-button",data);
}
}
});
portfolio.views.canvas.protocols.render_toolbar_button = (function portfolio$views$canvas$protocols$render_toolbar_button(data){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,data),cljs.core.with_meta(new cljs.core.Symbol("portfolio.views.canvas.protocols","render-toolbar-button","portfolio.views.canvas.protocols/render-toolbar-button",-474027607,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,data);
} else {
if((((!((data == null)))) && ((!((data.portfolio$views$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$arity$1 == null)))))){
return data.portfolio$views$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$arity$1(data);
} else {
return portfolio$views$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$dyn_11707.call(null,data);
}
}
});


/**
 * @interface
 */
portfolio.views.canvas.protocols.ICanvasTool = function(){};

var portfolio$views$canvas$protocols$ICanvasTool$prepare_canvas$dyn_11708 = (function (self,el,opt){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.views.canvas.protocols.prepare_canvas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,el,opt);
} else {
var m__5392__auto__ = (portfolio.views.canvas.protocols.prepare_canvas["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,el,opt);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasTool.prepare-canvas",self);
}
}
});
portfolio.views.canvas.protocols.prepare_canvas = (function portfolio$views$canvas$protocols$prepare_canvas(self,el,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-canvas","portfolio.views.canvas.protocols/prepare-canvas",1591467281,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,el,opt);
} else {
if((((!((self == null)))) && ((!((self.portfolio$views$canvas$protocols$ICanvasTool$prepare_canvas$arity$3 == null)))))){
return self.portfolio$views$canvas$protocols$ICanvasTool$prepare_canvas$arity$3(self,el,opt);
} else {
return portfolio$views$canvas$protocols$ICanvasTool$prepare_canvas$dyn_11708.call(null,self,el,opt);
}
}
});

var portfolio$views$canvas$protocols$ICanvasTool$finalize_canvas$dyn_11709 = (function (self,el,opt){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.views.canvas.protocols.finalize_canvas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,el,opt);
} else {
var m__5392__auto__ = (portfolio.views.canvas.protocols.finalize_canvas["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,el,opt);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasTool.finalize-canvas",self);
}
}
});
portfolio.views.canvas.protocols.finalize_canvas = (function portfolio$views$canvas$protocols$finalize_canvas(self,el,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.views.canvas.protocols","finalize-canvas","portfolio.views.canvas.protocols/finalize-canvas",-1958789840,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,el,opt);
} else {
if((((!((self == null)))) && ((!((self.portfolio$views$canvas$protocols$ICanvasTool$finalize_canvas$arity$3 == null)))))){
return self.portfolio$views$canvas$protocols$ICanvasTool$finalize_canvas$arity$3(self,el,opt);
} else {
return portfolio$views$canvas$protocols$ICanvasTool$finalize_canvas$dyn_11709.call(null,self,el,opt);
}
}
});


/**
 * @interface
 */
portfolio.views.canvas.protocols.ICanvasToolValue = function(){};

var portfolio$views$canvas$protocols$ICanvasToolValue$get_tool_value$dyn_11710 = (function (self,state,canvas_id){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.views.canvas.protocols.get_tool_value[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,state,canvas_id);
} else {
var m__5392__auto__ = (portfolio.views.canvas.protocols.get_tool_value["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,state,canvas_id);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolValue.get-tool-value",self);
}
}
});
portfolio.views.canvas.protocols.get_tool_value = (function portfolio$views$canvas$protocols$get_tool_value(self,state,canvas_id){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.views.canvas.protocols","get-tool-value","portfolio.views.canvas.protocols/get-tool-value",-1168238097,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,state,canvas_id);
} else {
if((((!((self == null)))) && ((!((self.portfolio$views$canvas$protocols$ICanvasToolValue$get_tool_value$arity$3 == null)))))){
return self.portfolio$views$canvas$protocols$ICanvasToolValue$get_tool_value$arity$3(self,state,canvas_id);
} else {
return portfolio$views$canvas$protocols$ICanvasToolValue$get_tool_value$dyn_11710.call(null,self,state,canvas_id);
}
}
});


/**
 * @interface
 */
portfolio.views.canvas.protocols.ICanvasPanelAddon = function(){};

var portfolio$views$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$dyn_11711 = (function (panel,state,scene){
var x__5393__auto__ = (((panel == null))?null:panel);
var m__5394__auto__ = (portfolio.views.canvas.protocols.prepare_panel_content[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,panel,state,scene);
} else {
var m__5392__auto__ = (portfolio.views.canvas.protocols.prepare_panel_content["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,panel,state,scene);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasPanelAddon.prepare-panel-content",panel);
}
}
});
portfolio.views.canvas.protocols.prepare_panel_content = (function portfolio$views$canvas$protocols$prepare_panel_content(panel,state,scene){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,panel),cljs.core.with_meta(new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-panel-content","portfolio.views.canvas.protocols/prepare-panel-content",997549574,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,panel,state,scene);
} else {
if((((!((panel == null)))) && ((!((panel.portfolio$views$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$arity$3 == null)))))){
return panel.portfolio$views$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$arity$3(panel,state,scene);
} else {
return portfolio$views$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$dyn_11711.call(null,panel,state,scene);
}
}
});

