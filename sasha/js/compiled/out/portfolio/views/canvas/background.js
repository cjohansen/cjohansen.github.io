// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas.background');
goog.require('cljs.core');
goog.require('portfolio.components.canvas');
goog.require('portfolio.views.canvas.addons');
portfolio.views.canvas.background.default_options = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"light-mode","light-mode",-1650913509),new cljs.core.Keyword(null,"title","title",636505583),"Light (.light-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#fff",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"light-mode"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dark-mode","dark-mode",491620517),new cljs.core.Keyword(null,"title","title",636505583),"Dark (.dark-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#111111",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"dark-mode"], null)], null)], null);
portfolio.views.canvas.background.prepare_canvas = (function portfolio$views$canvas$background$prepare_canvas(data,el,p__15585){
var map__15586 = p__15585;
var map__15586__$1 = cljs.core.__destructure_map.call(null,map__15586);
var background_color = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword("background","background-color","background/background-color",1902638780));
var body_class = cljs.core.get.call(null,map__15586__$1,new cljs.core.Keyword("background","body-class","background/body-class",181741863));
(portfolio.components.canvas.get_iframe.call(null,el).style.backgroundColor = background_color);

var body = portfolio.components.canvas.get_iframe_body.call(null,el);
var seq__15587 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(data));
var chunk__15588 = null;
var count__15589 = (0);
var i__15590 = (0);
while(true){
if((i__15590 < count__15589)){
var map__15593 = cljs.core._nth.call(null,chunk__15588,i__15590);
var map__15593__$1 = cljs.core.__destructure_map.call(null,map__15593);
var value = cljs.core.get.call(null,map__15593__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.call(null,body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}


var G__15595 = seq__15587;
var G__15596 = chunk__15588;
var G__15597 = count__15589;
var G__15598 = (i__15590 + (1));
seq__15587 = G__15595;
chunk__15588 = G__15596;
count__15589 = G__15597;
i__15590 = G__15598;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15587);
if(temp__5804__auto__){
var seq__15587__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15587__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__15587__$1);
var G__15599 = cljs.core.chunk_rest.call(null,seq__15587__$1);
var G__15600 = c__5568__auto__;
var G__15601 = cljs.core.count.call(null,c__5568__auto__);
var G__15602 = (0);
seq__15587 = G__15599;
chunk__15588 = G__15600;
count__15589 = G__15601;
i__15590 = G__15602;
continue;
} else {
var map__15594 = cljs.core.first.call(null,seq__15587__$1);
var map__15594__$1 = cljs.core.__destructure_map.call(null,map__15594);
var value = cljs.core.get.call(null,map__15594__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.call(null,body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}


var G__15603 = cljs.core.next.call(null,seq__15587__$1);
var G__15604 = null;
var G__15605 = (0);
var G__15606 = (0);
seq__15587 = G__15603;
chunk__15588 = G__15604;
count__15589 = G__15605;
i__15590 = G__15606;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.views.canvas.background.create_background_tool = (function portfolio$views$canvas$background$create_background_tool(config){
var options = (function (){var or__5045__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.views.canvas.background.default_options;
}
})();
return portfolio.views.canvas.addons.create_toolbar_menu_button.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","background","canvas/background",-533817437),new cljs.core.Keyword(null,"title","title",636505583),"Background",new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__5045__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return options;
}
})(),new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,(function (){var or__5045__auto__ = (function (){var temp__5804__auto__ = new cljs.core.Keyword("background","default-option-id","background/default-option-id",-1599012737).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5804__auto__)){
var id = temp__5804__auto__;
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),options);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return options;
}
})())),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.views.canvas.background.prepare_canvas;},new cljs.core.Symbol("portfolio.views.canvas.background","prepare-canvas","portfolio.views.canvas.background/prepare-canvas",735124134,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.background","portfolio.views.canvas.background",-1099920894,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas/background.cljs",21,1,15,15,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("background","keys","background/keys",-1876510524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"background-color","background-color",-2084001743,null),new cljs.core.Symbol(null,"body-class","body-class",1006967324,null)], null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.background.prepare_canvas)?portfolio.views.canvas.background.prepare_canvas.cljs$lang$test:null)]))], null));
});
