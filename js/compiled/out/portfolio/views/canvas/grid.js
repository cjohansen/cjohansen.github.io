// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas.grid');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('portfolio.components.canvas');
goog.require('portfolio.views.canvas.addons');
portfolio.views.canvas.grid.prepare_canvas = (function portfolio$views$canvas$grid$prepare_canvas(data,el,p__15578){
var map__15579 = p__15578;
var map__15579__$1 = cljs.core.__destructure_map.call(null,map__15579);
var opt = map__15579__$1;
var offset = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword("grid","offset","grid/offset",289189693));
var size = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword("grid","size","grid/size",1053670865));
var group_size = cljs.core.get.call(null,map__15579__$1,new cljs.core.Keyword("grid","group-size","grid/group-size",-624518492));
var body_style = portfolio.components.canvas.get_iframe.call(null,el).style;
var zoom = (function (){var or__5045__auto__ = new cljs.core.Keyword("zoom","level","zoom/level",1294076441).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(((typeof size === 'number') && (cljs.core.not_EQ_.call(null,(0),size)))){
var real_size = (zoom * size);
var vec__15580 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(opt);
var t = cljs.core.nth.call(null,vec__15580,(0),null);
var _ = cljs.core.nth.call(null,vec__15580,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__15580,(2),null);
var l = cljs.core.nth.call(null,vec__15580,(3),null);
(body_style.backgroundSize = (function (){var big = ((function (){var or__5045__auto__ = group_size;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (5);
}
})() * real_size);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(big),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(real_size),"px"].join('');
})());

(body_style.backgroundPosition = (function (){var offset__$1 = (function (){var or__5045__auto__ = offset;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
return clojure.string.join.call(null,", ",cljs.core.repeat.call(null,(4),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((l + (offset__$1 * zoom))),"px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zoom * (t + offset__$1))),"px"].join('')));
})());

(body_style.backgroundBlendMode = "difference");

return (body_style.backgroundImage = "linear-gradient(rgba(130, 130, 130, 0.5) 1px, transparent 1px),\n                  linear-gradient(90deg, rgba(130, 130, 130, 0.5) 1px, transparent 1px),\n                  linear-gradient(rgba(130, 130, 130, 0.25) 1px, transparent 1px),\n                  linear-gradient(90deg, rgba(130, 130, 130, 0.25) 1px, transparent 1px)");
} else {
return (body_style.backgroundImage = "none");
}
});
portfolio.views.canvas.grid.create_grid_tool = (function portfolio$views$canvas$grid$create_grid_tool(config){
return portfolio.views.canvas.addons.create_toolbar_menu_button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","grid","canvas/grid",645886336),new cljs.core.Keyword(null,"title","title",636505583),"Grid",new cljs.core.Keyword(null,"options","options",99638489),(function (){var or__5045__auto__ = new cljs.core.Keyword("grid","options","grid/options",96459187).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"5 x 20px",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("grid","offset","grid/offset",289189693),(0),new cljs.core.Keyword("grid","size","grid/size",1053670865),(20),new cljs.core.Keyword("grid","group-size","grid/group-size",-624518492),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"No grid",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("grid","size","grid/size",1053670865),(0)], null)], null)], null);
}
})(),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.views.canvas.grid.prepare_canvas;},new cljs.core.Symbol("portfolio.views.canvas.grid","prepare-canvas","portfolio.views.canvas.grid/prepare-canvas",1558133966,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.grid","portfolio.views.canvas.grid",-656194143,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/5f9d05e933a4e64af54740c016a7a81ddef583fc/src/portfolio/views/canvas/grid.cljs",21,1,6,6,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("grid","keys","grid/keys",1065119436),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"group-size","group-size",996060049,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.grid.prepare_canvas)?portfolio.views.canvas.grid.prepare_canvas.cljs$lang$test:null)]))], null));
});
