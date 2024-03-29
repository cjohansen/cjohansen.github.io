// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasToolbarButtonData = function(){};

var portfolio$ui$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$dyn_14087 = (function (self,state,opt){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.prepare_toolbar_button[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,state,opt);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.prepare_toolbar_button["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,state,opt);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolbarButtonData.prepare-toolbar-button",self);
}
}
});
portfolio.ui.canvas.protocols.prepare_toolbar_button = (function portfolio$ui$canvas$protocols$prepare_toolbar_button(self,state,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,state,opt);
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$arity$3 == null)))))){
return self.portfolio$ui$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$arity$3(self,state,opt);
} else {
return portfolio$ui$canvas$protocols$ICanvasToolbarButtonData$prepare_toolbar_button$dyn_14087.call(null,self,state,opt);
}
}
});


/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasToolbarButtonView = function(){};

var portfolio$ui$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$dyn_14088 = (function (data){
var x__5393__auto__ = (((data == null))?null:data);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.render_toolbar_button[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,data);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.render_toolbar_button["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,data);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolbarButtonView.render-toolbar-button",data);
}
}
});
portfolio.ui.canvas.protocols.render_toolbar_button = (function portfolio$ui$canvas$protocols$render_toolbar_button(data){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,data),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,data);
} else {
if((((!((data == null)))) && ((!((data.portfolio$ui$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$arity$1 == null)))))){
return data.portfolio$ui$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$arity$1(data);
} else {
return portfolio$ui$canvas$protocols$ICanvasToolbarButtonView$render_toolbar_button$dyn_14088.call(null,data);
}
}
});


/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasTool = function(){};

var portfolio$ui$canvas$protocols$ICanvasTool$prepare_canvas$dyn_14089 = (function (self,el,opt){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.prepare_canvas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,el,opt);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.prepare_canvas["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,el,opt);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasTool.prepare-canvas",self);
}
}
});
portfolio.ui.canvas.protocols.prepare_canvas = (function portfolio$ui$canvas$protocols$prepare_canvas(self,el,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,el,opt);
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$canvas$protocols$ICanvasTool$prepare_canvas$arity$3 == null)))))){
return self.portfolio$ui$canvas$protocols$ICanvasTool$prepare_canvas$arity$3(self,el,opt);
} else {
return portfolio$ui$canvas$protocols$ICanvasTool$prepare_canvas$dyn_14089.call(null,self,el,opt);
}
}
});

var portfolio$ui$canvas$protocols$ICanvasTool$finalize_canvas$dyn_14090 = (function (self,el,opt){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.finalize_canvas[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,el,opt);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.finalize_canvas["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,el,opt);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasTool.finalize-canvas",self);
}
}
});
portfolio.ui.canvas.protocols.finalize_canvas = (function portfolio$ui$canvas$protocols$finalize_canvas(self,el,opt){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,el,opt);
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$canvas$protocols$ICanvasTool$finalize_canvas$arity$3 == null)))))){
return self.portfolio$ui$canvas$protocols$ICanvasTool$finalize_canvas$arity$3(self,el,opt);
} else {
return portfolio$ui$canvas$protocols$ICanvasTool$finalize_canvas$dyn_14090.call(null,self,el,opt);
}
}
});


/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasToolValue = function(){};

var portfolio$ui$canvas$protocols$ICanvasToolValue$get_tool_value$dyn_14091 = (function (self,state,pane_id){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.get_tool_value[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,state,pane_id);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.get_tool_value["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,state,pane_id);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolValue.get-tool-value",self);
}
}
});
portfolio.ui.canvas.protocols.get_tool_value = (function portfolio$ui$canvas$protocols$get_tool_value(self,state,pane_id){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","get-tool-value","portfolio.ui.canvas.protocols/get-tool-value",732248337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,state,pane_id);
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$canvas$protocols$ICanvasToolValue$get_tool_value$arity$3 == null)))))){
return self.portfolio$ui$canvas$protocols$ICanvasToolValue$get_tool_value$arity$3(self,state,pane_id);
} else {
return portfolio$ui$canvas$protocols$ICanvasToolValue$get_tool_value$dyn_14091.call(null,self,state,pane_id);
}
}
});


/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasToolMiddleware = function(){};

var portfolio$ui$canvas$protocols$ICanvasToolMiddleware$prepare_view$dyn_14092 = (function (self,f,state,location,view){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.prepare_view[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,f,state,location,view);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.prepare_view["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,f,state,location,view);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolMiddleware.prepare-view",self);
}
}
});
portfolio.ui.canvas.protocols.prepare_view = (function portfolio$ui$canvas$protocols$prepare_view(self,f,state,location,view){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-view","portfolio.ui.canvas.protocols/prepare-view",-765650856,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,f,state,location,view);
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$canvas$protocols$ICanvasToolMiddleware$prepare_view$arity$5 == null)))))){
return self.portfolio$ui$canvas$protocols$ICanvasToolMiddleware$prepare_view$arity$5(self,f,state,location,view);
} else {
return portfolio$ui$canvas$protocols$ICanvasToolMiddleware$prepare_view$dyn_14092.call(null,self,f,state,location,view);
}
}
});


/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasToolPaneMiddleware = function(){};

var portfolio$ui$canvas$protocols$ICanvasToolPaneMiddleware$prepare_pane$dyn_14093 = (function (self,f,state,view,ctx){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.prepare_pane[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,self,f,state,view,ctx);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.prepare_pane["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,self,f,state,view,ctx);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasToolPaneMiddleware.prepare-pane",self);
}
}
});
portfolio.ui.canvas.protocols.prepare_pane = (function portfolio$ui$canvas$protocols$prepare_pane(self,f,state,view,ctx){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,self),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-pane","portfolio.ui.canvas.protocols/prepare-pane",351871543,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,self,f,state,view,ctx);
} else {
if((((!((self == null)))) && ((!((self.portfolio$ui$canvas$protocols$ICanvasToolPaneMiddleware$prepare_pane$arity$5 == null)))))){
return self.portfolio$ui$canvas$protocols$ICanvasToolPaneMiddleware$prepare_pane$arity$5(self,f,state,view,ctx);
} else {
return portfolio$ui$canvas$protocols$ICanvasToolPaneMiddleware$prepare_pane$dyn_14093.call(null,self,f,state,view,ctx);
}
}
});


/**
 * @interface
 */
portfolio.ui.canvas.protocols.ICanvasPanelAddon = function(){};

var portfolio$ui$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$dyn_14094 = (function (panel,state,scene){
var x__5393__auto__ = (((panel == null))?null:panel);
var m__5394__auto__ = (portfolio.ui.canvas.protocols.prepare_panel_content[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,panel,state,scene);
} else {
var m__5392__auto__ = (portfolio.ui.canvas.protocols.prepare_panel_content["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,panel,state,scene);
} else {
throw cljs.core.missing_protocol.call(null,"ICanvasPanelAddon.prepare-panel-content",panel);
}
}
});
portfolio.ui.canvas.protocols.prepare_panel_content = (function portfolio$ui$canvas$protocols$prepare_panel_content(panel,state,scene){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,panel),cljs.core.with_meta(new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-panel-content","portfolio.ui.canvas.protocols/prepare-panel-content",-1431697776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,panel,state,scene);
} else {
if((((!((panel == null)))) && ((!((panel.portfolio$ui$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$arity$3 == null)))))){
return panel.portfolio$ui$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$arity$3(panel,state,scene);
} else {
return portfolio$ui$canvas$protocols$ICanvasPanelAddon$prepare_panel_content$dyn_14094.call(null,panel,state,scene);
}
}
});

