// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.compare');
goog.require('cljs.core');
goog.require('portfolio.ui.canvas');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.components.canvas_toolbar_buttons');
goog.require('portfolio.ui.layout');
goog.require('portfolio.ui.scene_browser');
portfolio.ui.canvas.compare.get_ctx = (function portfolio$ui$canvas$compare$get_ctx(state,view,ctx,id){
var G__17961 = ctx;
if(cljs.core.truth_(id)){
return cljs.core.assoc.call(null,G__17961,new cljs.core.Keyword(null,"scenes","scenes",-425219404),portfolio.ui.canvas.prepare_scenes.call(null,state,null,view,null,portfolio.ui.collection.get_selected_scenes.call(null,state,id)));
} else {
return G__17961;
}
});
portfolio.ui.canvas.compare.get_expand_path = (function portfolio$ui$canvas$compare$get_expand_path(id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),id,new cljs.core.Keyword(null,"menu-expanded?","menu-expanded?",-55857445)], null);
});
portfolio.ui.canvas.compare.can_curate_QMARK_ = (function portfolio$ui$canvas$compare$can_curate_QMARK_(state){
return ((1) < cljs.core.count.call(null,portfolio.ui.layout.get_layout_panes.call(null,portfolio.ui.layout.get_current_layout.call(null,state))));
});
portfolio.ui.canvas.compare.create_compare_tool = (function portfolio$ui$canvas$compare$create_compare_tool(_config){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","selection","canvas/selection",-340599789)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),(function (_tool,state,options){
if(portfolio.ui.canvas.compare.can_curate_QMARK_.call(null,state)){
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"curate-selection?","curate-selection?",704208529)], null);
var curating_QMARK_ = cljs.core.get_in.call(null,state,path);
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Select pane scene(s) for comparison",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","git-diff","portfolio.ui.icons/git-diff",-1033533310),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"selected?","selected?",-742502788),curating_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__17962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),path,cljs.core.not.call(null,curating_QMARK_)], null)], null);
if((!(cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(options)], null)),new cljs.core.Keyword(null,"curate-selection?","curate-selection?",704208529))))){
return cljs.core.conj.call(null,G__17962,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),portfolio.ui.canvas.compare.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(options)),true], null));
} else {
return G__17962;
}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
} else {
return null;
}
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-pane","portfolio.ui.canvas.protocols/prepare-pane",351871543,null),(function (_,f,state,view,ctx){
var expand_path = portfolio.ui.canvas.compare.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx));
var curating_QMARK_ = ((portfolio.ui.canvas.compare.can_curate_QMARK_.call(null,state))?cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"curate-selection?","curate-selection?",704208529)], null)):null);
var expanded_QMARK_ = (function (){var and__5043__auto__ = curating_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get_in.call(null,state,expand_path);
} else {
return and__5043__auto__;
}
})();
var id = (cljs.core.truth_(curating_QMARK_)?cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"selection-id","selection-id",985859565)], null)):null);
var ctx__$1 = (cljs.core.truth_(curating_QMARK_)?portfolio.ui.canvas.compare.get_ctx.call(null,state,view,ctx,id):ctx);
var G__17963 = f.call(null,state,view,ctx__$1);
var G__17963__$1 = (cljs.core.truth_(curating_QMARK_)?cljs.core.assoc.call(null,G__17963,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683),portfolio.ui.collection.prepare_selection_menu_bar.call(null,state,(cljs.core.truth_(id)?portfolio.ui.collection.get_selection.call(null,state,id):new cljs.core.Keyword(null,"current-selection","current-selection",-812715814).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expand-path","expand-path",-436455836),expand_path,new cljs.core.Keyword(null,"tight?","tight?",1625746895),true], null))):G__17963);
var G__17963__$2 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.assoc.call(null,G__17963__$1,new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.scene_browser.prepare_browser.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select-actions","select-actions",-859150860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx__$1),new cljs.core.Keyword(null,"selection-id","selection-id",985859565)], null),new cljs.core.Keyword("portfolio.ui.scene-browser","target-id","portfolio.ui.scene-browser/target-id",-1487055392)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),expand_path,false], null)], null),new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(ctx__$1)], null)], null))], null)):G__17963__$1);
if(cljs.core.truth_(expanded_QMARK_)){
return cljs.core.dissoc.call(null,G__17963__$2,new cljs.core.Keyword(null,"canvases","canvases",-441653731));
} else {
return G__17963__$2;
}
})], null));
});
