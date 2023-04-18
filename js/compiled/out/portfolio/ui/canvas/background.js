// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.background');
goog.require('cljs.core');
goog.require('portfolio.ui.canvas.addons');
goog.require('portfolio.ui.components.canvas');
portfolio.ui.canvas.background.default_options = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"light-mode","light-mode",-1650913509),new cljs.core.Keyword(null,"title","title",636505583),"Light (.light-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#fff",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"light-mode"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dark-mode","dark-mode",491620517),new cljs.core.Keyword(null,"title","title",636505583),"Dark (.dark-mode)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("background","background-color","background/background-color",1902638780),"#111111",new cljs.core.Keyword("background","body-class","background/body-class",181741863),"dark-mode"], null)], null)], null);
portfolio.ui.canvas.background.prepare_canvas = (function portfolio$ui$canvas$background$prepare_canvas(data,el,p__17296){
var map__17297 = p__17296;
var map__17297__$1 = cljs.core.__destructure_map.call(null,map__17297);
var background_color = cljs.core.get.call(null,map__17297__$1,new cljs.core.Keyword("background","background-color","background/background-color",1902638780));
var body_class = cljs.core.get.call(null,map__17297__$1,new cljs.core.Keyword("background","body-class","background/body-class",181741863));
(portfolio.ui.components.canvas.get_iframe.call(null,el).style.backgroundColor = background_color);

var body = portfolio.ui.components.canvas.get_iframe_body.call(null,el);
var seq__17298 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(data));
var chunk__17299 = null;
var count__17300 = (0);
var i__17301 = (0);
while(true){
if((i__17301 < count__17300)){
var map__17304 = cljs.core._nth.call(null,chunk__17299,i__17301);
var map__17304__$1 = cljs.core.__destructure_map.call(null,map__17304);
var value = cljs.core.get.call(null,map__17304__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.call(null,body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}


var G__17306 = seq__17298;
var G__17307 = chunk__17299;
var G__17308 = count__17300;
var G__17309 = (i__17301 + (1));
seq__17298 = G__17306;
chunk__17299 = G__17307;
count__17300 = G__17308;
i__17301 = G__17309;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17298);
if(temp__5804__auto__){
var seq__17298__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17298__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__17298__$1);
var G__17310 = cljs.core.chunk_rest.call(null,seq__17298__$1);
var G__17311 = c__5568__auto__;
var G__17312 = cljs.core.count.call(null,c__5568__auto__);
var G__17313 = (0);
seq__17298 = G__17310;
chunk__17299 = G__17311;
count__17300 = G__17312;
i__17301 = G__17313;
continue;
} else {
var map__17305 = cljs.core.first.call(null,seq__17298__$1);
var map__17305__$1 = cljs.core.__destructure_map.call(null,map__17305);
var value = cljs.core.get.call(null,map__17305__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
} else {
if(cljs.core._EQ_.call(null,body_class,new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value))){
body.classList.add(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
} else {
body.classList.remove(new cljs.core.Keyword("background","body-class","background/body-class",181741863).cljs$core$IFn$_invoke$arity$1(value));
}
}


var G__17314 = cljs.core.next.call(null,seq__17298__$1);
var G__17315 = null;
var G__17316 = (0);
var G__17317 = (0);
seq__17298 = G__17314;
chunk__17299 = G__17315;
count__17300 = G__17316;
i__17301 = G__17317;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.canvas.background.create_background_tool = (function portfolio$ui$canvas$background$create_background_tool(config){
var options = (function (){var or__5045__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.canvas.background.default_options;
}
})();
return portfolio.ui.canvas.addons.create_toolbar_menu_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","background","canvas/background",-533817437),new cljs.core.Keyword(null,"persist?","persist?",-1772568760),true,new cljs.core.Keyword(null,"title","title",636505583),"Background",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","palette","portfolio.ui.icons/palette",-198944441),new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__5045__auto__ = new cljs.core.Keyword("background","options","background/options",1180140427).cljs$core$IFn$_invoke$arity$1(config);
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
})())),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.background.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.background","prepare-canvas","portfolio.ui.canvas.background/prepare-canvas",-1224444684,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.background","portfolio.ui.canvas.background",1900476903,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/background.cljs",21,1,15,15,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("background","keys","background/keys",-1876510524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"background-color","background-color",-2084001743,null),new cljs.core.Symbol(null,"body-class","body-class",1006967324,null)], null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.background.prepare_canvas)?portfolio.ui.canvas.background.prepare_canvas.cljs$lang$test:null)]))], null));
});
