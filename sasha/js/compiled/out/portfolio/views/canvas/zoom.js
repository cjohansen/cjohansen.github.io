// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas.zoom');
goog.require('cljs.core');
goog.require('portfolio.components.canvas');
goog.require('portfolio.components.canvas_toolbar_buttons');
goog.require('portfolio.icons.arrow_counter_clockwise');
goog.require('portfolio.icons.magnifying_glass_minus');
goog.require('portfolio.icons.magnifying_glass_plus');
goog.require('portfolio.views.canvas.addons');
goog.require('portfolio.views.canvas.protocols');
portfolio.views.canvas.zoom.reset_canvas_zoom = (function portfolio$views$canvas$zoom$reset_canvas_zoom(_,el,opt){
if(cljs.core.contains_QMARK_.call(null,opt,new cljs.core.Keyword("zoom","level","zoom/level",1294076441))){
return null;
} else {
var body = portfolio.components.canvas.get_iframe_body.call(null,el);
(body.style.transform = "");

(body.style.width = "100%");

return (body.style.height = "100%");
}
});
portfolio.views.canvas.zoom.zoom = (function portfolio$views$canvas$zoom$zoom(el,opt){
var body = portfolio.components.canvas.get_iframe_body.call(null,el);
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
return portfolio.views.canvas.zoom.reset_canvas_zoom.call(null,null,el,opt);
} else {
return null;
}
}
});
portfolio.views.canvas.zoom.prepare_zoom_button = (function portfolio$views$canvas$zoom$prepare_zoom_button(tool,state,p__16601){
var map__16602 = p__16601;
var map__16602__$1 = cljs.core.__destructure_map.call(null,map__16602);
var pane_id = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
var pane_options = cljs.core.get.call(null,map__16602__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
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
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"active?","active?",459499776),((((0) < increment))?((1) < level):(level < (1))),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),pane_id,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("zoom","level","zoom/level",1294076441)], null),(increment + level)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.views.canvas.protocols","render-toolbar-button","portfolio.views.canvas.protocols/render-toolbar-button",-474027607,null),new cljs.core.Var(function(){return portfolio.components.canvas_toolbar_buttons.Button;},new cljs.core.Symbol("portfolio.components.canvas-toolbar-buttons","Button","portfolio.components.canvas-toolbar-buttons/Button",1140280554,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.components.canvas-toolbar-buttons","portfolio.components.canvas-toolbar-buttons",684710462,null),new cljs.core.Symbol(null,"Button","Button",-1787718586,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/components/canvas_toolbar_buttons.cljs",12,1,24,24,cljs.core.List.EMPTY,null,(cljs.core.truth_(portfolio.components.canvas_toolbar_buttons.Button)?portfolio.components.canvas_toolbar_buttons.Button.cljs$lang$test:null)]))], null));
});
portfolio.views.canvas.zoom.impl = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-canvas","portfolio.views.canvas.protocols/prepare-canvas",1591467281,null),(function (_,el,opt){
return portfolio.views.canvas.zoom.zoom.call(null,el,opt);
}),new cljs.core.Symbol("portfolio.views.canvas.protocols","finalize-canvas","portfolio.views.canvas.protocols/finalize-canvas",-1958789840,null),(function (_,___$1,___$2){
return null;
}),new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-toolbar-button","portfolio.views.canvas.protocols/prepare-toolbar-button",127148166,null),new cljs.core.Var(function(){return portfolio.views.canvas.zoom.prepare_zoom_button;},new cljs.core.Symbol("portfolio.views.canvas.zoom","prepare-zoom-button","portfolio.views.canvas.zoom/prepare-zoom-button",-606198771,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.zoom","portfolio.views.canvas.zoom",539896532,null),new cljs.core.Symbol(null,"prepare-zoom-button","prepare-zoom-button",1051862024,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas/zoom.cljs",26,1,32,32,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pane-id","pane-id",1669512384,null),new cljs.core.Symbol(null,"pane-options","pane-options",-73137102,null)], null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.zoom.prepare_zoom_button)?portfolio.views.canvas.zoom.prepare_zoom_button.cljs$lang$test:null)]))], null);
portfolio.views.canvas.zoom.create_zoom_in_tool = (function portfolio$views$canvas$zoom$create_zoom_in_tool(config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"title","title",636505583),"Zoom in",new cljs.core.Keyword(null,"icon","icon",1679606541),portfolio.icons.magnifying_glass_plus.icon,new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.25;
}
})()], null),portfolio.views.canvas.zoom.impl);
});
portfolio.views.canvas.zoom.create_zoom_out_tool = (function portfolio$views$canvas$zoom$create_zoom_out_tool(config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"title","title",636505583),"Zoom out",new cljs.core.Keyword(null,"icon","icon",1679606541),portfolio.icons.magnifying_glass_minus.icon,new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"zoom-increment","zoom-increment",1290521682).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return -0.25;
}
})()], null),portfolio.views.canvas.zoom.impl);
});
portfolio.views.canvas.zoom.create_reset_zoom_tool = (function portfolio$views$canvas$zoom$create_reset_zoom_tool(config){
return portfolio.views.canvas.addons.create_action_button.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom-reset","canvas/zoom-reset",-1575077322),new cljs.core.Keyword(null,"title","title",636505583),"Reset zoom",new cljs.core.Keyword(null,"icon","icon",1679606541),portfolio.icons.arrow_counter_clockwise.icon,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.views.canvas.zoom.reset_canvas_zoom;},new cljs.core.Symbol("portfolio.views.canvas.zoom","reset-canvas-zoom","portfolio.views.canvas.zoom/reset-canvas-zoom",49617911,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.zoom","portfolio.views.canvas.zoom",539896532,null),new cljs.core.Symbol(null,"reset-canvas-zoom","reset-canvas-zoom",1640045512,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas/zoom.cljs",24,1,10,10,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.zoom.reset_canvas_zoom)?portfolio.views.canvas.zoom.reset_canvas_zoom.cljs$lang$test:null)])),new cljs.core.Keyword(null,"get-actions","get-actions",396936459),(function (_,___$1,p__16603){
var map__16604 = p__16603;
var map__16604__$1 = cljs.core.__destructure_map.call(null,map__16604);
var pane_id = cljs.core.get.call(null,map__16604__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),pane_id,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("zoom","level","zoom/level",1294076441)], null)], null)], null);
}),new cljs.core.Keyword(null,"show?","show?",1543842127),(function (_,___$1,p__16605){
var map__16606 = p__16605;
var map__16606__$1 = cljs.core.__destructure_map.call(null,map__16606);
var pane_options = cljs.core.get.call(null,map__16606__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
var and__5043__auto__ = new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(pane_options);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.call(null,(1),new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(pane_options));
} else {
return and__5043__auto__;
}
})], null));
});
portfolio.views.canvas.zoom.prepare_button_group = (function portfolio$views$canvas$zoom$prepare_button_group(tool,state,opt){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buttons","buttons",-1953831197),cljs.core.keep.call(null,(function (p1__16607_SHARP_){
return portfolio.views.canvas.protocols.prepare_toolbar_button.call(null,p1__16607_SHARP_,state,opt);
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197).cljs$core$IFn$_invoke$arity$1(tool))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.views.canvas.protocols","render-toolbar-button","portfolio.views.canvas.protocols/render-toolbar-button",-474027607,null),new cljs.core.Var(function(){return portfolio.components.canvas_toolbar_buttons.ButtonGroup;},new cljs.core.Symbol("portfolio.components.canvas-toolbar-buttons","ButtonGroup","portfolio.components.canvas-toolbar-buttons/ButtonGroup",1443226220,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.components.canvas-toolbar-buttons","portfolio.components.canvas-toolbar-buttons",684710462,null),new cljs.core.Symbol(null,"ButtonGroup","ButtonGroup",-309978472,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/components/canvas_toolbar_buttons.cljs",28,1,26,26,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.components.canvas_toolbar_buttons.ButtonGroup)?portfolio.components.canvas_toolbar_buttons.ButtonGroup.cljs$lang$test:null)]))], null));
});
portfolio.views.canvas.zoom.create_zoom_tool = (function portfolio$views$canvas$zoom$create_zoom_tool(config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","zoom","canvas/zoom",596462602),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.views.canvas.zoom.create_zoom_in_tool.call(null,config),portfolio.views.canvas.zoom.create_zoom_out_tool.call(null,config),portfolio.views.canvas.zoom.create_reset_zoom_tool.call(null,config)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-canvas","portfolio.views.canvas.protocols/prepare-canvas",1591467281,null),(function (_,el,opt){
return portfolio.views.canvas.zoom.zoom.call(null,el,opt);
}),new cljs.core.Symbol("portfolio.views.canvas.protocols","finalize-canvas","portfolio.views.canvas.protocols/finalize-canvas",-1958789840,null),(function (_,___$1,___$2){
return null;
}),new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-toolbar-button","portfolio.views.canvas.protocols/prepare-toolbar-button",127148166,null),new cljs.core.Var(function(){return portfolio.views.canvas.zoom.prepare_button_group;},new cljs.core.Symbol("portfolio.views.canvas.zoom","prepare-button-group","portfolio.views.canvas.zoom/prepare-button-group",-1359650072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.zoom","portfolio.views.canvas.zoom",539896532,null),new cljs.core.Symbol(null,"prepare-button-group","prepare-button-group",-1014930705,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas/zoom.cljs",27,1,79,79,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.zoom.prepare_button_group)?portfolio.views.canvas.zoom.prepare_button_group.cljs$lang$test:null)]))], null));
});
