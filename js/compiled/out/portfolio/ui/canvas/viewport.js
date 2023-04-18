// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.viewport');
goog.require('cljs.core');
goog.require('portfolio.ui.canvas.addons');
goog.require('portfolio.ui.components.canvas');
portfolio.ui.canvas.viewport.get_width = (function portfolio$ui$canvas$viewport$get_width(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17716 = arguments.length;
var i__5770__auto___17717 = (0);
while(true){
if((i__5770__auto___17717 < len__5769__auto___17716)){
args__5775__auto__.push((arguments[i__5770__auto___17717]));

var G__17718 = (i__5770__auto___17717 + (1));
i__5770__auto___17717 = G__17718;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return portfolio.ui.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.viewport.get_width.cljs$core$IFn$_invoke$arity$variadic = (function (frame,frame_body,width,p__17711){
var vec__17712 = p__17711;
var map__17715 = cljs.core.nth.call(null,vec__17712,(0),null);
var map__17715__$1 = cljs.core.__destructure_map.call(null,map__17715);
var level = cljs.core.get.call(null,map__17715__$1,new cljs.core.Keyword("zoom","level","zoom/level",1294076441));
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

(portfolio.ui.canvas.viewport.get_width.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(portfolio.ui.canvas.viewport.get_width.cljs$lang$applyTo = (function (seq17707){
var G__17708 = cljs.core.first.call(null,seq17707);
var seq17707__$1 = cljs.core.next.call(null,seq17707);
var G__17709 = cljs.core.first.call(null,seq17707__$1);
var seq17707__$2 = cljs.core.next.call(null,seq17707__$1);
var G__17710 = cljs.core.first.call(null,seq17707__$2);
var seq17707__$3 = cljs.core.next.call(null,seq17707__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17708,G__17709,G__17710,seq17707__$3);
}));

portfolio.ui.canvas.viewport.get_style_px = (function portfolio$ui$canvas$viewport$get_style_px(style,prop){
var temp__5802__auto__ = (function (){var G__17719 = style;
var G__17719__$1 = (((G__17719 == null))?null:G__17719.getPropertyValue(prop));
if((G__17719__$1 == null)){
return null;
} else {
return cljs.core.not_empty.call(null,G__17719__$1);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return parseInt(v,(10));
} else {
return (0);
}
});
portfolio.ui.canvas.viewport.get_height = (function portfolio$ui$canvas$viewport$get_height(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17730 = arguments.length;
var i__5770__auto___17731 = (0);
while(true){
if((i__5770__auto___17731 < len__5769__auto___17730)){
args__5775__auto__.push((arguments[i__5770__auto___17731]));

var G__17732 = (i__5770__auto___17731 + (1));
i__5770__auto___17731 = G__17732;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return portfolio.ui.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.viewport.get_height.cljs$core$IFn$_invoke$arity$variadic = (function (frame,frame_body,height,p__17724){
var vec__17725 = p__17724;
var map__17728 = cljs.core.nth.call(null,vec__17725,(0),null);
var map__17728__$1 = cljs.core.__destructure_map.call(null,map__17728);
var level = cljs.core.get.call(null,map__17728__$1,new cljs.core.Keyword("zoom","level","zoom/level",1294076441));
var level__$1 = (function (){var or__5045__auto__ = level;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"auto","auto",-566279492),height)){
var style = window.getComputedStyle(frame);
var root_el_style = (function (){var G__17729 = frame_body;
var G__17729__$1 = (((G__17729 == null))?null:G__17729.firstElementChild);
var G__17729__$2 = (((G__17729__$1 == null))?null:G__17729__$1.firstElementChild);
if((G__17729__$2 == null)){
return null;
} else {
return window.getComputedStyle(G__17729__$2);
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((portfolio.ui.canvas.viewport.get_style_px.call(null,style,"padding-top") + portfolio.ui.canvas.viewport.get_style_px.call(null,style,"padding-bottom")) + portfolio.ui.canvas.viewport.get_style_px.call(null,root_el_style,"margin-top")) + portfolio.ui.canvas.viewport.get_style_px.call(null,root_el_style,"margin-bottom")) + frame_body.scrollHeight) * level__$1)),"px"].join('');
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

(portfolio.ui.canvas.viewport.get_height.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(portfolio.ui.canvas.viewport.get_height.cljs$lang$applyTo = (function (seq17720){
var G__17721 = cljs.core.first.call(null,seq17720);
var seq17720__$1 = cljs.core.next.call(null,seq17720);
var G__17722 = cljs.core.first.call(null,seq17720__$1);
var seq17720__$2 = cljs.core.next.call(null,seq17720__$1);
var G__17723 = cljs.core.first.call(null,seq17720__$2);
var seq17720__$3 = cljs.core.next.call(null,seq17720__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17721,G__17722,G__17723,seq17720__$3);
}));

portfolio.ui.canvas.viewport.get_available_width = (function portfolio$ui$canvas$viewport$get_available_width(el){
return el.parentNode.getBoundingClientRect().width;
});
portfolio.ui.canvas.viewport.prepare_canvas = (function portfolio$ui$canvas$viewport$prepare_canvas(_,el,p__17733){
var map__17734 = p__17733;
var map__17734__$1 = cljs.core.__destructure_map.call(null,map__17734);
var opt = map__17734__$1;
var width = cljs.core.get.call(null,map__17734__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.call(null,map__17734__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
var frame = portfolio.ui.components.canvas.get_iframe.call(null,el);
var frame_body = portfolio.ui.components.canvas.get_iframe_body.call(null,el);
var w = portfolio.ui.canvas.viewport.get_width.call(null,frame,frame_body,width,opt);
return (el.style.width = ((((cljs.core._EQ_.call(null,"100%",w)) && (cljs.core.not_EQ_.call(null,"100%",(function (){var or__5045__auto__ = height;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})()))))?"calc(100% - 40px)":(cljs.core.truth_(((typeof w === 'number')?(portfolio.ui.canvas.viewport.get_available_width.call(null,el) <= w):null))?"100%":w
)));
});
portfolio.ui.canvas.viewport.finalize_canvas = (function portfolio$ui$canvas$viewport$finalize_canvas(_,el,p__17735){
var map__17736 = p__17735;
var map__17736__$1 = cljs.core.__destructure_map.call(null,map__17736);
var opt = map__17736__$1;
var width = cljs.core.get.call(null,map__17736__$1,new cljs.core.Keyword("viewport","width","viewport/width",809992237));
var height = cljs.core.get.call(null,map__17736__$1,new cljs.core.Keyword("viewport","height","viewport/height",1951335772));
var frame = portfolio.ui.components.canvas.get_iframe.call(null,el);
var frame_body = portfolio.ui.components.canvas.get_iframe_body.call(null,el);
var w = portfolio.ui.canvas.viewport.get_width.call(null,frame,frame_body,width,opt);
var h = portfolio.ui.canvas.viewport.get_height.call(null,frame,frame_body,height,opt);
var vec__17737 = ((((((cljs.core.not_EQ_.call(null,"100%",w)) || (cljs.core.not_EQ_.call(null,"100%",h)))) && ((((!(typeof width === 'number'))) || ((((40) + width) < portfolio.ui.canvas.viewport.get_available_width.call(null,el)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["20px","rgba(0, 0, 0, 0.1) 0px 1px 5px 0px"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","none"], null));
var margin = cljs.core.nth.call(null,vec__17737,(0),null);
var shadow = cljs.core.nth.call(null,vec__17737,(1),null);
(el.style.height = h);

(el.style.margin = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(margin)," auto"].join(''));

return (el.style.boxShadow = shadow);
});
portfolio.ui.canvas.viewport.get_padding = (function portfolio$ui$canvas$viewport$get_padding(var_args){
var G__17741 = arguments.length;
switch (G__17741) {
case 1:
return portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return portfolio.ui.canvas.viewport.get_padding.call(null,null,xs);
}));

(portfolio.ui.canvas.viewport.get_padding.cljs$core$IFn$_invoke$arity$2 = (function (defaults,xs){
var xs__$1 = ((cljs.core.empty_QMARK_.call(null,xs))?new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(defaults):xs);
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20),(20),(20)], null);
} else {
if(typeof xs__$1 === 'number'){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs__$1,xs__$1,xs__$1,xs__$1], null);
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs__$1))){
var x = cljs.core.first.call(null,xs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x,x], null);
} else {
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,xs__$1))){
var vec__17742 = xs__$1;
var v = cljs.core.nth.call(null,vec__17742,(0),null);
var h = cljs.core.nth.call(null,vec__17742,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,h,v,h], null);
} else {
return xs__$1;

}
}
}
}
}));

(portfolio.ui.canvas.viewport.get_padding.cljs$lang$maxFixedArity = 2);

portfolio.ui.canvas.viewport.create_viewport_tool = (function portfolio$ui$canvas$viewport$create_viewport_tool(config){
var default_value = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,new cljs.core.Keyword("viewport","defaults","viewport/defaults",2054751788).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword("viewport","width","viewport/width",809992237),(function (p1__17746_SHARP_){
var or__5045__auto__ = p1__17746_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})),new cljs.core.Keyword("viewport","height","viewport/height",1951335772),(function (p1__17747_SHARP_){
var or__5045__auto__ = p1__17747_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})),new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021),portfolio.ui.canvas.viewport.get_padding);
return portfolio.ui.canvas.addons.create_toolbar_menu_button.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","viewport","canvas/viewport",1810532963),new cljs.core.Keyword(null,"title","title",636505583),"Viewport",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","browsers","portfolio.ui.icons/browsers",2137530679),new cljs.core.Keyword(null,"default-value","default-value",232220170),default_value,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.map.call(null,(function (p1__17748_SHARP_){
return cljs.core.update_in.call(null,p1__17748_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021)], null),cljs.core.partial.call(null,portfolio.ui.canvas.viewport.get_padding,default_value));
}),(function (){var or__5045__auto__ = new cljs.core.Keyword("viewport","options","viewport/options",-576953325).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Auto",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","width","viewport/width",809992237),"100%",new cljs.core.Keyword("viewport","height","viewport/height",1951335772),"100%"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"desktop","desktop",1494219798)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"iPhone 12 / 13 Pro",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","width","viewport/width",809992237),(390),new cljs.core.Keyword("viewport","height","viewport/height",1951335772),(844)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mobile","mobile",1403078170)], null)], null);
}
})()),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","prepare-canvas","portfolio.ui.canvas.viewport/prepare-canvas",2054635772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/viewport.cljs",21,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.prepare_canvas)?portfolio.ui.canvas.viewport.prepare_canvas.cljs$lang$test:null)])),new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.finalize_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","finalize-canvas","portfolio.ui.canvas.viewport/finalize-canvas",1877118547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"finalize-canvas","finalize-canvas",-735738917,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/viewport.cljs",22,1,68,68,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.finalize_canvas)?portfolio.ui.canvas.viewport.finalize_canvas.cljs$lang$test:null)]))], null));
});
portfolio.ui.canvas.viewport.create_viewport_extension = (function portfolio$ui$canvas$viewport$create_viewport_extension(config){
return portfolio.ui.canvas.addons.create_canvas_extension.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("canvas","viewport","canvas/viewport",1810532963),new cljs.core.Keyword(null,"title","title",636505583),"Viewport",new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword("viewport","defaults","viewport/defaults",2054751788).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.prepare_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","prepare-canvas","portfolio.ui.canvas.viewport/prepare-canvas",2054635772,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"prepare-canvas","prepare-canvas",-1313844156,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/viewport.cljs",21,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.prepare_canvas)?portfolio.ui.canvas.viewport.prepare_canvas.cljs$lang$test:null)])),new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852),new cljs.core.Var(function(){return portfolio.ui.canvas.viewport.finalize_canvas;},new cljs.core.Symbol("portfolio.ui.canvas.viewport","finalize-canvas","portfolio.ui.canvas.viewport/finalize-canvas",1877118547,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.viewport","portfolio.ui.canvas.viewport",1403140653,null),new cljs.core.Symbol(null,"finalize-canvas","finalize-canvas",-735738917,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/viewport.cljs",22,1,68,68,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("viewport","keys","viewport/keys",-161294996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"opt","opt",845825158,null)], null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.viewport.finalize_canvas)?portfolio.ui.canvas.viewport.finalize_canvas.cljs$lang$test:null)]))], null));
});
