// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas.addons');
goog.require('cljs.core');
goog.require('portfolio.components.canvas_toolbar_buttons');
goog.require('portfolio.views.canvas.protocols');
portfolio.views.canvas.addons.get_expand_path = (function portfolio$views$canvas$addons$get_expand_path(vid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","tools","canvas/tools",-491389486),vid,new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null);
});
portfolio.views.canvas.addons.get_custom_tool_source_title = (function portfolio$views$canvas$addons$get_custom_tool_source_title(p__15510){
var vec__15511 = p__15510;
var source = cljs.core.nth.call(null,vec__15511,(0),null);
var G__15514 = source;
var G__15514__$1 = (((G__15514 instanceof cljs.core.Keyword))?G__15514.fqn:null);
switch (G__15514__$1) {
case "scene":
return "Scene config";

break;
case "namespace":
return "NS config";

break;
case "collection":
return "Collection config";

break;
case "state-layout":
return "Global config";

break;
case "view":
return "Canvas config";

break;
case "portfolio.views.canvas/gallery-default":
return "Default config (gallery)";

break;
case "layout/default":
return "Default config";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15514__$1)].join('')));

}
});
portfolio.views.canvas.addons.get_current_value = (function portfolio$views$canvas$addons$get_current_value(tool,state,p__15516){
var map__15517 = p__15516;
var map__15517__$1 = cljs.core.__destructure_map.call(null,map__15517);
var pane_id = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
var pane_options = cljs.core.get.call(null,map__15517__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
var selected_value = portfolio.views.canvas.protocols.get_tool_value.call(null,tool,state,pane_id);
var value = (function (){var or__5045__auto__ = selected_value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(tool);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"current-value","current-value",2066017989),(function (){var and__5043__auto__ = cljs.core.map_QMARK_.call(null,value);
if(and__5043__auto__){
return cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,pane_options,cljs.core.keys.call(null,value)));
} else {
return and__5043__auto__;
}
})()], null);
});
portfolio.views.canvas.addons.prepare_tool_menu = (function portfolio$views$canvas$addons$prepare_tool_menu(tool,state,pane){
var map__15518 = portfolio.views.canvas.addons.get_current_value.call(null,tool,state,pane);
var map__15518__$1 = cljs.core.__destructure_map.call(null,map__15518);
var value = cljs.core.get.call(null,map__15518__$1,new cljs.core.Keyword(null,"value","value",305978217));
var current_value = cljs.core.get.call(null,map__15518__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
var custom_options = (cljs.core.truth_((function (){var and__5043__auto__ = current_value;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_EQ_.call(null,current_value,value);
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),portfolio.views.canvas.addons.get_custom_tool_source_title.call(null,new cljs.core.Keyword(null,"config-source","config-source",-1282385545).cljs$core$IFn$_invoke$arity$1(pane)),new cljs.core.Keyword(null,"value","value",305978217),current_value,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null):null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5523__auto__ = (function portfolio$views$canvas$addons$prepare_tool_menu_$_iter__15519(s__15520){
return (new cljs.core.LazySeq(null,(function (){
var s__15520__$1 = s__15520;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15520__$1);
if(temp__5804__auto__){
var s__15520__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15520__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15520__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15522 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15521 = (0);
while(true){
if((i__15521 < size__5522__auto__)){
var map__15523 = cljs.core._nth.call(null,c__5521__auto__,i__15521);
var map__15523__$1 = cljs.core.__destructure_map.call(null,map__15523);
var title = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value__$1 = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.get.call(null,map__15523__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
cljs.core.chunk_append.call(null,b__15522,(function (){var selected_QMARK_ = cljs.core._EQ_.call(null,value__$1,current_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_(disabled_QMARK_)?null:cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),portfolio.views.canvas.addons.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane))], null),((selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),new cljs.core.Keyword(null,"value","value",305978217)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),new cljs.core.Keyword(null,"value","value",305978217)], null),value__$1], null)),((cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fn","call","fn/call",-519998786),new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool),value__$1], null):null)], null)))], null);
})());

var G__15525 = (i__15521 + (1));
i__15521 = G__15525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15522),portfolio$views$canvas$addons$prepare_tool_menu_$_iter__15519.call(null,cljs.core.chunk_rest.call(null,s__15520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15522),null);
}
} else {
var map__15524 = cljs.core.first.call(null,s__15520__$2);
var map__15524__$1 = cljs.core.__destructure_map.call(null,map__15524);
var title = cljs.core.get.call(null,map__15524__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value__$1 = cljs.core.get.call(null,map__15524__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.get.call(null,map__15524__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return cljs.core.cons.call(null,(function (){var selected_QMARK_ = cljs.core._EQ_.call(null,value__$1,current_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_(disabled_QMARK_)?null:cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),portfolio.views.canvas.addons.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane))], null),((selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),new cljs.core.Keyword(null,"value","value",305978217)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),new cljs.core.Keyword(null,"value","value",305978217)], null),value__$1], null)),((cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fn","call","fn/call",-519998786),new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool),value__$1], null):null)], null)))], null);
})(),portfolio$views$canvas$addons$prepare_tool_menu_$_iter__15519.call(null,cljs.core.rest.call(null,s__15520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool),custom_options));
})()], null);
});
portfolio.views.canvas.addons.prepare_toolbar_menu_button = (function portfolio$views$canvas$addons$prepare_toolbar_menu_button(tool,state,pane){
var expand_path = portfolio.views.canvas.addons.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane));
var expanded_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),cljs.core.get_in.call(null,state,expand_path));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var or__5045__auto__ = ((cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"prepare-title","prepare-title",-384904958).cljs$core$IFn$_invoke$arity$1(tool)))?(function (){var f = new cljs.core.Keyword(null,"prepare-title","prepare-title",-384904958).cljs$core$IFn$_invoke$arity$1(tool);
return f.call(null,new cljs.core.Keyword(null,"current-value","current-value",2066017989).cljs$core$IFn$_invoke$arity$1(portfolio.views.canvas.addons.get_current_value.call(null,tool,state,pane)));
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tool);
}
})(),new cljs.core.Keyword(null,"actions","actions",-812656882),((expanded_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),expand_path], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),expand_path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool)], null)], null)),new cljs.core.Keyword(null,"menu","menu",352255198),((expanded_QMARK_)?portfolio.views.canvas.addons.prepare_tool_menu.call(null,tool,state,pane):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.views.canvas.protocols","render-toolbar-button","portfolio.views.canvas.protocols/render-toolbar-button",-474027607,null),new cljs.core.Var(function(){return portfolio.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.components.canvas-toolbar-buttons","MenuButton","portfolio.components.canvas-toolbar-buttons/MenuButton",-1000164917,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.components.canvas-toolbar-buttons","portfolio.components.canvas-toolbar-buttons",684710462,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/components/canvas_toolbar_buttons.cljs",27,1,6,6,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.components.canvas_toolbar_buttons.MenuButton)?portfolio.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
});
portfolio.views.canvas.addons.create_toolbar_menu_button = (function portfolio$views$canvas$addons$create_toolbar_menu_button(data){
var seq__15526_15530 = cljs.core.seq.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),null], null), null));
var chunk__15527_15531 = null;
var count__15528_15532 = (0);
var i__15529_15533 = (0);
while(true){
if((i__15529_15533 < count__15528_15532)){
var k_15534 = cljs.core._nth.call(null,chunk__15527_15531,i__15529_15533);
if(cljs.core.truth_(k_15534.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar menu button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_15534,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__15535 = seq__15526_15530;
var G__15536 = chunk__15527_15531;
var G__15537 = count__15528_15532;
var G__15538 = (i__15529_15533 + (1));
seq__15526_15530 = G__15535;
chunk__15527_15531 = G__15536;
count__15528_15532 = G__15537;
i__15529_15533 = G__15538;
continue;
} else {
var temp__5804__auto___15539 = cljs.core.seq.call(null,seq__15526_15530);
if(temp__5804__auto___15539){
var seq__15526_15540__$1 = temp__5804__auto___15539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15526_15540__$1)){
var c__5568__auto___15541 = cljs.core.chunk_first.call(null,seq__15526_15540__$1);
var G__15542 = cljs.core.chunk_rest.call(null,seq__15526_15540__$1);
var G__15543 = c__5568__auto___15541;
var G__15544 = cljs.core.count.call(null,c__5568__auto___15541);
var G__15545 = (0);
seq__15526_15530 = G__15542;
chunk__15527_15531 = G__15543;
count__15528_15532 = G__15544;
i__15529_15533 = G__15545;
continue;
} else {
var k_15546 = cljs.core.first.call(null,seq__15526_15540__$1);
if(cljs.core.truth_(k_15546.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar menu button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_15546,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__15547 = cljs.core.next.call(null,seq__15526_15540__$1);
var G__15548 = null;
var G__15549 = (0);
var G__15550 = (0);
seq__15526_15530 = G__15547;
chunk__15527_15531 = G__15548;
count__15528_15532 = G__15549;
i__15529_15533 = G__15550;
continue;
}
} else {
}
}
break;
}

return cljs.core.with_meta.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-toolbar-button","portfolio.views.canvas.protocols/prepare-toolbar-button",127148166,null),new cljs.core.Var(function(){return portfolio.views.canvas.addons.prepare_toolbar_menu_button;},new cljs.core.Symbol("portfolio.views.canvas.addons","prepare-toolbar-menu-button","portfolio.views.canvas.addons/prepare-toolbar-menu-button",1402114613,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.addons","portfolio.views.canvas.addons",-1938046669,null),new cljs.core.Symbol(null,"prepare-toolbar-menu-button","prepare-toolbar-menu-button",2050463894,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas/addons.cljs",34,1,46,46,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"pane","pane",-1060985046,null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.addons.prepare_toolbar_menu_button)?portfolio.views.canvas.addons.prepare_toolbar_menu_button.cljs$lang$test:null)])),new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-canvas","portfolio.views.canvas.protocols/prepare-canvas",1591467281,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})(),new cljs.core.Symbol("portfolio.views.canvas.protocols","finalize-canvas","portfolio.views.canvas.protocols/finalize-canvas",-1958789840,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})()], null));
});
portfolio.views.canvas.addons.create_canvas_extension = (function portfolio$views$canvas$addons$create_canvas_extension(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data))){
} else {
throw (new Error(["Assert failed: ","Can't create viewport extension without :id","\n","(:id data)"].join('')));
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
}
})())){
} else {
throw (new Error(["Assert failed: ","Can't create viewport extension without neither :prepare-canvas nor :finalize-canvas","\n","(or (:prepare-canvas data) (:finalize-canvas data))"].join('')));
}

return cljs.core.with_meta.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-canvas","portfolio.views.canvas.protocols/prepare-canvas",1591467281,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})(),new cljs.core.Symbol("portfolio.views.canvas.protocols","finalize-canvas","portfolio.views.canvas.protocols/finalize-canvas",-1958789840,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})()], null));
});
portfolio.views.canvas.addons.create_action_button = (function portfolio$views$canvas$addons$create_action_button(data){
var seq__15551_15555 = cljs.core.seq.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-actions","get-actions",396936459),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),null], null), null));
var chunk__15552_15556 = null;
var count__15553_15557 = (0);
var i__15554_15558 = (0);
while(true){
if((i__15554_15558 < count__15553_15557)){
var k_15559 = cljs.core._nth.call(null,chunk__15552_15556,i__15554_15558);
if(cljs.core.truth_(k_15559.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar action button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_15559,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__15560 = seq__15551_15555;
var G__15561 = chunk__15552_15556;
var G__15562 = count__15553_15557;
var G__15563 = (i__15554_15558 + (1));
seq__15551_15555 = G__15560;
chunk__15552_15556 = G__15561;
count__15553_15557 = G__15562;
i__15554_15558 = G__15563;
continue;
} else {
var temp__5804__auto___15564 = cljs.core.seq.call(null,seq__15551_15555);
if(temp__5804__auto___15564){
var seq__15551_15565__$1 = temp__5804__auto___15564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15551_15565__$1)){
var c__5568__auto___15566 = cljs.core.chunk_first.call(null,seq__15551_15565__$1);
var G__15567 = cljs.core.chunk_rest.call(null,seq__15551_15565__$1);
var G__15568 = c__5568__auto___15566;
var G__15569 = cljs.core.count.call(null,c__5568__auto___15566);
var G__15570 = (0);
seq__15551_15555 = G__15567;
chunk__15552_15556 = G__15568;
count__15553_15557 = G__15569;
i__15554_15558 = G__15570;
continue;
} else {
var k_15571 = cljs.core.first.call(null,seq__15551_15565__$1);
if(cljs.core.truth_(k_15571.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar action button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_15571,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__15572 = cljs.core.next.call(null,seq__15551_15565__$1);
var G__15573 = null;
var G__15574 = (0);
var G__15575 = (0);
seq__15551_15555 = G__15572;
chunk__15552_15556 = G__15573;
count__15553_15557 = G__15574;
i__15554_15558 = G__15575;
continue;
}
} else {
}
}
break;
}

var show_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
return cljs.core.with_meta.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"get-actions","get-actions",396936459),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.views.canvas.protocols","prepare-toolbar-button","portfolio.views.canvas.protocols/prepare-toolbar-button",127148166,null),(function (tool,state,options){
if(cljs.core.truth_(show_QMARK_.call(null,tool,state,options))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(data))?null:new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"get-actions","get-actions",396936459).cljs$core$IFn$_invoke$arity$1(data).call(null,tool,state,options)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.views.canvas.protocols","render-toolbar-button","portfolio.views.canvas.protocols/render-toolbar-button",-474027607,null),new cljs.core.Var(function(){return portfolio.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.components.canvas-toolbar-buttons","MenuButton","portfolio.components.canvas-toolbar-buttons/MenuButton",-1000164917,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.components.canvas-toolbar-buttons","portfolio.components.canvas-toolbar-buttons",684710462,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/components/canvas_toolbar_buttons.cljs",27,1,6,6,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.components.canvas_toolbar_buttons.MenuButton)?portfolio.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
} else {
return null;
}
})], null));
});
