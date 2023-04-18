// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.docs');
goog.require('cljs.core');
goog.require('portfolio.ui.canvas.addons');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.components.canvas_toolbar_buttons');
portfolio.ui.canvas.docs.show_docs_QMARK_ = (function portfolio$ui$canvas$docs$show_docs_QMARK_(state,tool,opts){
return cljs.core.get.call(null,portfolio.ui.canvas.addons.get_current_value.call(null,state,tool,opts),new cljs.core.Keyword("docs","show?","docs/show?",1542850444),true);
});
portfolio.ui.canvas.docs.create_docs_tool = (function portfolio$ui$canvas$docs$create_docs_tool(config){
var tool = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","docs","canvas/docs",1557489714),new cljs.core.Keyword(null,"global?","global?",-2022837689),new cljs.core.Keyword("docs","global-toggle?","docs/global-toggle?",1173853289).cljs$core$IFn$_invoke$arity$2(config,true),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),new cljs.core.Keyword("docs","global-toggle?","docs/global-toggle?",1173853289).cljs$core$IFn$_invoke$arity$2(config,true)], null);
return cljs.core.with_meta.call(null,tool,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),(function (_tool,state,options){
var docs_QMARK_ = portfolio.ui.canvas.docs.show_docs_QMARK_.call(null,state,tool,options);
if(cljs.core.seq.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.concat.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state)))))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle docs",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","file-doc","portfolio.ui.icons/file-doc",1346369244),new cljs.core.Keyword(null,"selected?","selected?",-742502788),docs_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.canvas.addons.get_set_actions.call(null,state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("docs","show?","docs/show?",1542850444),cljs.core.not.call(null,docs_QMARK_)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
} else {
return null;
}
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-pane","portfolio.ui.canvas.protocols/prepare-pane",351871543,null),(function (_,f,state,view,ctx){
return f.call(null,state,view,(function (){var G__17752 = ctx;
if(cljs.core.not.call(null,portfolio.ui.canvas.docs.show_docs_QMARK_.call(null,state,tool,ctx))){
return cljs.core.update.call(null,G__17752,new cljs.core.Keyword(null,"scenes","scenes",-425219404),(function (scenes){
return cljs.core.map.call(null,(function (p1__17751_SHARP_){
return cljs.core.dissoc.call(null,p1__17751_SHARP_,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544));
}),scenes);
}));
} else {
return G__17752;
}
})());
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-view","portfolio.ui.canvas.protocols/prepare-view",-765650856,null),(function (_,f,state,location,view){
var G__17753 = f.call(null,state,location,view);
if(cljs.core.not.call(null,portfolio.ui.canvas.docs.show_docs_QMARK_.call(null,state,tool,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pane-id","pane-id",28980857),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view)], null)))){
return cljs.core.dissoc.call(null,G__17753,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544));
} else {
return G__17753;
}
})], null));
});
