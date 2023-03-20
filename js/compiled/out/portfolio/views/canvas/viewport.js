// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.views.canvas.viewport');
goog.require('cljs.core');
goog.require('portfolio.components.canvas');
goog.require('portfolio.views.canvas.addons');
portfolio.views.canvas.viewport.get_width = (function portfolio$views$canvas$viewport$get_width(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12778 = arguments.length;
var i__5770__auto___12779 = (0);
while(true){
if((i__5770__auto___12779 < len__5769__auto___12778)){
args__5775__auto__.push((arguments[i__5770__auto___12779]));

var G__12780 = (i__5770__auto___12779 + (1));
i__5770__auto___12779 = G__12780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return portfolio.views.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(portfolio.views.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic = (function (frame,frame_body,width,p__12773){
var vec__12774 = p__12773;
var map__12777 = cljs.core.nth.call(null,vec__12774,(0),null);
var map__12777__$1 = cljs.core.__destructure_map.call(null,map__12777);
var level = cljs.core.get.call(null,map__12777__$1,new cljs.core.Keyword("zoom","level","zoom/level",1294076441));
var level__$1 = (function (){var or__5045__auto__ = level;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"auto","auto",-566279492),width)){
var style = window.getComputedStyle(frame);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((parseInt(style.getPropertyValue("padding-left"),(10)) + parseInt(style.getPropertyValue("padding-right"),(10))) + frame_body.scrollWidth) * level__$1)),"px"].join('');
} else {
if(typeof width === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((width * level__$1)),"px"].join('');
} else {
if((width == null)){
return "100%";
} else {
return width;

}
}
}
}));

(portfolio.views.canvas.viewport.get_width.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(portfolio.views.canvas.viewport.get_width.cljs$lang$applyTo = (function (seq12769){
var G__12770 = cljs.core.first.call(null,seq12769);
var seq12769__$1 = cljs.core.next.call(null,seq12769);
var G__12771 = cljs.core.first.call(null,seq12769__$1);
var seq12769__$2 = cljs.core.next.call(null,seq12769__$1);
var G__12772 = cljs.core.first.call(null,seq12769__$2);
var seq12769__$3 = cljs.core.next.call(null,seq12769__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12770,G__12771,G__12772,seq12769__$3);
}));

portfolio.views.canvas.viewport.get_style_px = (function portfolio$views$canvas$viewport$get_style_px(style,prop){
var temp__5802__auto__ = (function (){var G__12781 = style;
var G__12781__$1 = (((G__12781 == null))?null:G__12781.getPropertyValue(prop));
if((G__12781__$1 == null)){
return null;
} else {
return cljs.core.not_empty.call(null,G__12781__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return parseInt(v,(10));
} else {
return (0);
}
});
portfolio.views.canvas.viewport.get_height = (function portfolio$views$canvas$viewport$get_height(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12792 = arguments.length;
var i__5770__auto___12793 = (0);
while(true){
if((i__5770__auto___12793 < len__5769__auto___12792)){
args__5775__auto__.push((arguments[i__5770__auto___12793]));

var G__12794 = (i__5770__auto___12793 + (1));
i__5770__auto___12793 = G__12794;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return portfolio.views.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(portfolio.views.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic = (function (frame,frame_body,height,p__12786){
var vec__12787 = p__12786;
var map__12790 = cljs.core.nth.call(null,vec__12787,(0),null);
var map__12790__$1 = cljs.core.__destructure_map.call(null,map__12790);
var level = cljs.core.get.call(null,map__12790__$1,new cljs.core.Keyword("zoom","level","zoom/level",1294076441));
var level__$1 = (function (){var or__5045__auto__ = level;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"auto","auto",-566279492),height)){
var style = window.getComputedStyle(frame);
var root_el_style = (function (){var G__12791 = frame_body;
var G__12791__$1 = (((G__12791 == null))?null:G__12791.firstElementChild);
var G__12791__$2 = (((G__12791__$1 == null))?null:G__12791__$1.firstElementChild);
if((G__12791__$2 == null)){
return null;
} else {
return window.getComputedStyle(G__12791__$2);
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((portfolio.views.canvas.viewport.get_style_px.call(null,style,"padding-top") + portfolio.views.canvas.viewport.get_style_px.call(null,style,"padding-bottom")) + portfolio.views.canvas.viewport.get_style_px.call(null,root_el_style,"margin-top")) + portfolio.views.canvas.viewport.get_style_px.call(null,root_el_style,"margin-bottom")) + frame_body.scrollHeight) * level__$1)),"px"].join('');
} else {
if(typeof height === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((height * level__$1)),"px"].join('');
} else {
if((height == null)){
return "100%";
} else {
return height;

}
}
}
}));

(portfolio.views.canvas.viewport.get_height.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(portfolio.views.canvas.viewport.get_height.cljs$lang$applyTo = (function (seq12782){
var G__12783 = cljs.core.first.call(null,seq12782);
var seq12782__$1 = cljs.core.next.call(null,seq12782);
var G__12784 = cljs.core.first.call(null,seq12782__$1);
var seq12782__$2 = cljs.core.next.call(null,seq12782__$1);
var G__12785 = cljs.core.first.call(null,seq12782__$2);
var seq12782__$3 = cljs.core.next.call(null,seq12782__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12783,G__12784,G__12785,seq12782__$3);
}));

portfolio.views.canvas.viewport.get_available_width = (function portfolio$views$canvas$viewport$get_available_width(el){
return el.parentNode.getBoundingClientRect().width;
});
portfolio.views.canvas.viewport.prepare_canvas = (function portfolio$views$canvas$viewport$prepare_canvas(_,el,p__12795){
var map__12796 = p__12795;
var map__12796__$1 = cljs.core.__destructure_map.call(null,map__12796);
var opt = map__12796__$1;
var width = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
var frame = portfolio.components.canvas.get_iframe.call(null,el);
var frame_body = portfolio.components.canvas.get_iframe_body.call(null,el);
var w = portfolio.views.canvas.viewport.get_width.call(null,frame,frame_body,width,opt);
return (el.style.width = ((((cljs.core._EQ_.call(null,"100%",w)) && (cljs.core.not_EQ_.call(null,"100%",(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})()))))?"calc(100% - 40px)":(cljs.core.truth_(((typeof w === 'number')?(portfolio.views.canvas.viewport.get_available_width.call(null,el) <= w):null))?"100%":w
)));
});
portfolio.views.canvas.viewport.finalize_canvas = (function portfolio$views$canvas$viewport$finalize_canvas(_,el,p__12797){
var map__12798 = p__12797;
var map__12798__$1 = cljs.core.__destructure_map.call(null,map__12798);
var opt = map__12798__$1;
var width = cljs.core.get.call(null,map__12798__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.call(null,map__12798__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
var frame = portfolio.components.canvas.get_iframe.call(null,el);
var frame_body = portfolio.components.canvas.get_iframe_body.call(null,el);
var w = portfolio.views.canvas.viewport.get_width.call(null,frame,frame_body,width,opt);
var h = portfolio.views.canvas.viewport.get_height.call(null,frame,frame_body,height,opt);
var vec__12799 = ((((((cljs.core.not_EQ_.call(null,"100%",w)) || (cljs.core.not_EQ_.call(null,"100%",h)))) && ((((!(typeof width === 'number'))) || ((((40) + width) < portfolio.views.canvas.viewport.get_available_width.call(null,el)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["20px","rgba(0, 0, 0, 0.1) 0px 1px 5px 0px"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","none"], null));
var margin = cljs.core.nth.call(null,vec__12799,(0),null);
var shadow = cljs.core.nth.call(null,vec__12799,(1),null);
(el.style.height = h);

(el.style.margin = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(margin)," auto"].join(''));

return (el.style.boxShadow = shadow);
});
portfolio.views.canvas.viewport.get_padding = (function portfolio$views$canvas$viewport$get_padding(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(20),(20)], null);
} else {
if(typeof xs === 'number'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,xs,xs,xs], null);
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs))){
var x = cljs.core.first.call(null,xs);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x,x], null);
} else {
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,xs))){
var vec__12802 = xs;
var v = cljs.core.nth.call(null,vec__12802,(0),null);
var h = cljs.core.nth.call(null,vec__12802,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,h,v,h], null);
} else {
return xs;

}
}
}
}
});
portfolio.views.canvas.viewport.create_viewport_tool = (function portfolio$views$canvas$viewport$create_viewport_tool(config){
return portfolio.views.canvas.addons.create_toolbar_menu_button.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","viewport","canvas/viewport",1810532963),new cljs.core.Keyword(null,"title","title",636505583),"Viewport",new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.update.call(null,new cljs.core.Keyword("viewport","defaults","viewport/defaults",2054751788).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021),portfolio.views.canvas.viewport.get_padding),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.map.call(null,(function (p1__12805_SHARP_){
return cljs.core.update.call(null,p1__12805_SHARP_,new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021),portfolio.views.canvas.viewport.get_padding);
}),(function (){var or__5045__auto__ = new cljs.core.Keyword("viewport","options","viewport/options",-576953325).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Auto",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","width","viewport/width",809992237),"100%",new cljs.core.Keyword("viewport","height","viewport/height",1951335772),"100%"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"desktop","desktop",1494219798)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"iPhone 12 / 13 Prop",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","width","viewport/width",809992237),(390),new cljs.core.Keyword("viewport","height","viewport/height",1951335772),(844)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mobile","mobile",1403078170)], null)], null);
}
})()),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.views.canvas.viewport.prepare_canvas;},new cljs.core.Symbol("portfolio.views.canvas.viewport","prepare-canvas","portfolio.views.canvas.viewport/prepare-canvas",534055726,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.viewport","portfolio.views.canvas.viewport",439168753,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/ee9a0e5097ba6552c668ff816bd9b8f10b598d90/src/portfolio/views/canvas/viewport.cljs",21,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.viewport.prepare_canvas)?portfolio.views.canvas.viewport.prepare_canvas.cljs$lang$test:null)])),new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852),new cljs.core.Var(function(){return portfolio.views.canvas.viewport.finalize_canvas;},new cljs.core.Symbol("portfolio.views.canvas.viewport","finalize-canvas","portfolio.views.canvas.viewport/finalize-canvas",1245758693,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.viewport","portfolio.views.canvas.viewport",439168753,null),new cljs.core.Symbol(null,"finalize-canvas","finalize-canvas",-735738917,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/ee9a0e5097ba6552c668ff816bd9b8f10b598d90/src/portfolio/views/canvas/viewport.cljs",22,1,68,68,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.viewport.finalize_canvas)?portfolio.views.canvas.viewport.finalize_canvas.cljs$lang$test:null)]))], null));
});
portfolio.views.canvas.viewport.create_viewport_extension = (function portfolio$views$canvas$viewport$create_viewport_extension(config){
return portfolio.views.canvas.addons.create_canvas_extension.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","viewport","canvas/viewport",1810532963),new cljs.core.Keyword(null,"title","title",636505583),"Viewport",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("viewport","defaults","viewport/defaults",2054751788).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.views.canvas.viewport.prepare_canvas;},new cljs.core.Symbol("portfolio.views.canvas.viewport","prepare-canvas","portfolio.views.canvas.viewport/prepare-canvas",534055726,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.viewport","portfolio.views.canvas.viewport",439168753,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/ee9a0e5097ba6552c668ff816bd9b8f10b598d90/src/portfolio/views/canvas/viewport.cljs",21,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.viewport.prepare_canvas)?portfolio.views.canvas.viewport.prepare_canvas.cljs$lang$test:null)])),new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852),new cljs.core.Var(function(){return portfolio.views.canvas.viewport.finalize_canvas;},new cljs.core.Symbol("portfolio.views.canvas.viewport","finalize-canvas","portfolio.views.canvas.viewport/finalize-canvas",1245758693,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.views.canvas.viewport","portfolio.views.canvas.viewport",439168753,null),new cljs.core.Symbol(null,"finalize-canvas","finalize-canvas",-735738917,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/ee9a0e5097ba6552c668ff816bd9b8f10b598d90/src/portfolio/views/canvas/viewport.cljs",22,1,68,68,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.views.canvas.viewport.finalize_canvas)?portfolio.views.canvas.viewport.finalize_canvas.cljs$lang$test:null)]))], null));
});
