// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.zoom');
goog.require('cljs.core');
goog.require('portfolio.ui.canvas.addons');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.components.canvas');
goog.require('portfolio.ui.components.canvas_toolbar_buttons');
portfolio.ui.canvas.zoom.reset_canvas_zoom = (function portfolio$ui$canvas$zoom$reset_canvas_zoom(_,el,opt){
if(cljs.core.contains_QMARK_.call(null,opt,new cljs.core.Keyword("zoom","level","zoom/level",1294076441))){
return null;
} else {
var body = portfolio.ui.components.canvas.get_iframe_body.call(null,el);
(body.style.transform = "");

(body.style.width = "100%");

return (body.style.height = "100%");
}
});
portfolio.ui.canvas.zoom.zoom = (function portfolio$ui$canvas$zoom$zoom(el,opt){
var body = portfolio.ui.components.canvas.get_iframe_body.call(null,el);
var lvl = new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(lvl)){
var size = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) / lvl)),"%"].join('');
(body.zoomed = true);

(body.style.transform = ["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lvl),")"].join(''));

(body.style.transformOrigin = "left top");

(body.style.width = size);

return (body.style.height = size);
} else {
if(cljs.core.truth_(body.zoomed)){
return portfolio.ui.canvas.zoom.reset_canvas_zoom.call(null,null,el,opt);
} else {
return null;
}
}
});
portfolio.ui.canvas.zoom.prepare_zoom_button = (function portfolio$ui$canvas$zoom$prepare_zoom_button(tool,state,p__17939){
var map__17940 = p__17939;
var map__17940__$1 = cljs.core.__destructure_map.call(null,map__17940);
var pane_options = cljs.core.get.call(null,map__17940__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
var pane_id = cljs.core.get.call(null,map__17940__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
var level = (function (){var or__5045__auto__ = new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(pane_options);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
var increment = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682).cljs$core$IFn$_invoke$arity$1(tool);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.25;
}
})();
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"active?","active?",459499776),((((0) < increment))?((1) < level):(level < (1))),new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.canvas.addons.get_set_actions.call(null,state,tool,pane_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("zoom","level","zoom/level",1294076441),(increment + level)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.Button;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","Button","portfolio.ui.components.canvas-toolbar-buttons/Button",-1222153436,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"Button","Button",-1787718586,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas_toolbar_buttons.cljs",12,1,31,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.Button)?portfolio.ui.components.canvas_toolbar_buttons.Button.cljs$lang$test:null)]))], null));
});
portfolio.ui.canvas.zoom.impl = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),(function (_,el,opt){
return portfolio.ui.canvas.zoom.zoom.call(null,el,opt);
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),(function (_,___$1,___$2){
return null;
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),new cljs.core.Var(function(){return portfolio.ui.canvas.zoom.prepare_zoom_button;},new cljs.core.Symbol("portfolio.ui.canvas.zoom","prepare-zoom-button","portfolio.ui.canvas.zoom/prepare-zoom-button",-1279851277,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.zoom","portfolio.ui.canvas.zoom",1797413362,null),new cljs.core.Symbol(null,"prepare-zoom-button","prepare-zoom-button",1051862024,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/zoom.cljs",26,1,29,29,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pane-options","pane-options",-73137102,null),new cljs.core.Symbol(null,"pane-id","pane-id",1669512384,null)], null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.zoom.prepare_zoom_button)?portfolio.ui.canvas.zoom.prepare_zoom_button.cljs$lang$test:null)]))], null);
portfolio.ui.canvas.zoom.create_zoom_in_tool = (function portfolio$ui$canvas$zoom$create_zoom_in_tool(config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom-in","canvas/zoom-in",-1550942035),new cljs.core.Keyword(null,"group-id","group-id",-1316082778),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"title","title",636505583),"Zoom in",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","magnifying-glass-plus","portfolio.ui.icons/magnifying-glass-plus",1715787535),new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.25;
}
})()], null),portfolio.ui.canvas.zoom.impl);
});
portfolio.ui.canvas.zoom.create_zoom_out_tool = (function portfolio$ui$canvas$zoom$create_zoom_out_tool(config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom-out","canvas/zoom-out",-1692432389),new cljs.core.Keyword(null,"group-id","group-id",-1316082778),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"title","title",636505583),"Zoom out",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","magnifying-glass-minus","portfolio.ui.icons/magnifying-glass-minus",-875480928),new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return -0.25;
}
})()], null),portfolio.ui.canvas.zoom.impl);
});
portfolio.ui.canvas.zoom.create_reset_zoom_tool = (function portfolio$ui$canvas$zoom$create_reset_zoom_tool(config){
return portfolio.ui.canvas.addons.create_action_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom-reset","canvas/zoom-reset",-1575077322),new cljs.core.Keyword(null,"group-id","group-id",-1316082778),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"title","title",636505583),"Reset zoom",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","arrow-counter-clockwise","portfolio.ui.icons/arrow-counter-clockwise",805953901),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.zoom.reset_canvas_zoom;},new cljs.core.Symbol("portfolio.ui.canvas.zoom","reset-canvas-zoom","portfolio.ui.canvas.zoom/reset-canvas-zoom",-86361211,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.zoom","portfolio.ui.canvas.zoom",1797413362,null),new cljs.core.Symbol(null,"reset-canvas-zoom","reset-canvas-zoom",1640045512,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/zoom.cljs",24,1,7,7,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.zoom.reset_canvas_zoom)?portfolio.ui.canvas.zoom.reset_canvas_zoom.cljs$lang$test:null)])),new cljs.core.Keyword(null,"get-actions","get-actions",396936459),(function (tool,state,p__17941){
var map__17942 = p__17941;
var map__17942__$1 = cljs.core.__destructure_map.call(null,map__17942);
var pane_id = cljs.core.get.call(null,map__17942__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
return portfolio.ui.canvas.addons.get_clear_actions.call(null,state,tool,pane_id);
}),new cljs.core.Keyword(null,"show?","show?",1543842127),(function (_,___$1,p__17943){
var map__17944 = p__17943;
var map__17944__$1 = cljs.core.__destructure_map.call(null,map__17944);
var pane_options = cljs.core.get.call(null,map__17944__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
var and__5043__auto__ = new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(pane_options);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.call(null,(1),new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(pane_options));
} else {
return and__5043__auto__;
}
})], null));
});
portfolio.ui.canvas.zoom.prepare_button_group = (function portfolio$ui$canvas$zoom$prepare_button_group(tool,state,opt){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),cljs.core.keep.call(null,(function (p1__17945_SHARP_){
return portfolio.ui.canvas.protocols.prepare_toolbar_button.call(null,p1__17945_SHARP_,state,opt);
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197).cljs$core$IFn$_invoke$arity$1(tool))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","ButtonGroup","portfolio.ui.components.canvas-toolbar-buttons/ButtonGroup",-873134790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas_toolbar_buttons.cljs",28,1,33,33,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup)?portfolio.ui.components.canvas_toolbar_buttons.ButtonGroup.cljs$lang$test:null)]))], null));
});
portfolio.ui.canvas.zoom.create_zoom_tool = (function portfolio$ui$canvas$zoom$create_zoom_tool(config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.canvas.zoom.create_zoom_out_tool.call(null,config),portfolio.ui.canvas.zoom.create_zoom_in_tool.call(null,config),portfolio.ui.canvas.zoom.create_reset_zoom_tool.call(null,config)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),(function (_,el,opt){
return portfolio.ui.canvas.zoom.zoom.call(null,el,opt);
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),(function (_,___$1,___$2){
return null;
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),new cljs.core.Var(function(){return portfolio.ui.canvas.zoom.prepare_button_group;},new cljs.core.Symbol("portfolio.ui.canvas.zoom","prepare-button-group","portfolio.ui.canvas.zoom/prepare-button-group",1453080858,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.zoom","portfolio.ui.canvas.zoom",1797413362,null),new cljs.core.Symbol(null,"prepare-button-group","prepare-button-group",-1014930705,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/zoom.cljs",27,1,77,77,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.zoom.prepare_button_group)?portfolio.ui.canvas.zoom.prepare_button_group.cljs$lang$test:null)])),new cljs.core.Symbol("portfolio.ui.canvas.protocols","get-tool-value","portfolio.ui.canvas.protocols/get-tool-value",732248337,null),(function (tool,state,pane_id){
return portfolio.ui.canvas.addons.get_tool_value.call(null,state,tool,pane_id);
})], null));
});
