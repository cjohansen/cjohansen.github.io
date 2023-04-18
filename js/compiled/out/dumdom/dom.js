// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('dumdom.dom');
goog.require('cljs.core');
goog.require('dumdom.element');
/**
 * Creates a virtual DOM element component of the specified type with attributes
 *   and optional children. Returns a function that renders the virtual DOM. This
 *   function expects a vector path and a key that addresses the component.
 */
dumdom.dom.el = (function dumdom$dom$el(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14391 = arguments.length;
var i__5770__auto___14392 = (0);
while(true){
if((i__5770__auto___14392 < len__5769__auto___14391)){
args__5775__auto__.push((arguments[i__5770__auto___14392]));

var G__14393 = (i__5770__auto___14392 + (1));
i__5770__auto___14392 = G__14393;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.dom.el.cljs$core$IFn$_invoke$arity$variadic = (function (type,attrs,children){
var el_fn = cljs.core.apply.call(null,dumdom.element.create,type,attrs,dumdom.element.flatten_seqs.call(null,children));
(el_fn.dumdom = true);

return el_fn;
}));

(dumdom.dom.el.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.dom.el.cljs$lang$applyTo = (function (seq14388){
var G__14389 = cljs.core.first.call(null,seq14388);
var seq14388__$1 = cljs.core.next.call(null,seq14388);
var G__14390 = cljs.core.first.call(null,seq14388__$1);
var seq14388__$2 = cljs.core.next.call(null,seq14388__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14389,G__14390,seq14388__$2);
}));

dumdom.dom.a = (function dumdom$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14523 = arguments.length;
var i__5770__auto___14524 = (0);
while(true){
if((i__5770__auto___14524 < len__5769__auto___14523)){
args__5775__auto__.push((arguments[i__5770__auto___14524]));

var G__14525 = (i__5770__auto___14524 + (1));
i__5770__auto___14524 = G__14525;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"a",args__14379__auto__);
}));

(dumdom.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.a.cljs$lang$applyTo = (function (seq14394){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14394));
}));


dumdom.dom.abbr = (function dumdom$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14526 = arguments.length;
var i__5770__auto___14527 = (0);
while(true){
if((i__5770__auto___14527 < len__5769__auto___14526)){
args__5775__auto__.push((arguments[i__5770__auto___14527]));

var G__14528 = (i__5770__auto___14527 + (1));
i__5770__auto___14527 = G__14528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"abbr",args__14379__auto__);
}));

(dumdom.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.abbr.cljs$lang$applyTo = (function (seq14395){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14395));
}));


dumdom.dom.address = (function dumdom$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14529 = arguments.length;
var i__5770__auto___14530 = (0);
while(true){
if((i__5770__auto___14530 < len__5769__auto___14529)){
args__5775__auto__.push((arguments[i__5770__auto___14530]));

var G__14531 = (i__5770__auto___14530 + (1));
i__5770__auto___14530 = G__14531;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"address",args__14379__auto__);
}));

(dumdom.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.address.cljs$lang$applyTo = (function (seq14396){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14396));
}));


dumdom.dom.area = (function dumdom$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14532 = arguments.length;
var i__5770__auto___14533 = (0);
while(true){
if((i__5770__auto___14533 < len__5769__auto___14532)){
args__5775__auto__.push((arguments[i__5770__auto___14533]));

var G__14534 = (i__5770__auto___14533 + (1));
i__5770__auto___14533 = G__14534;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"area",args__14379__auto__);
}));

(dumdom.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.area.cljs$lang$applyTo = (function (seq14397){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14397));
}));


dumdom.dom.article = (function dumdom$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14535 = arguments.length;
var i__5770__auto___14536 = (0);
while(true){
if((i__5770__auto___14536 < len__5769__auto___14535)){
args__5775__auto__.push((arguments[i__5770__auto___14536]));

var G__14537 = (i__5770__auto___14536 + (1));
i__5770__auto___14536 = G__14537;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"article",args__14379__auto__);
}));

(dumdom.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.article.cljs$lang$applyTo = (function (seq14398){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14398));
}));


dumdom.dom.aside = (function dumdom$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14538 = arguments.length;
var i__5770__auto___14539 = (0);
while(true){
if((i__5770__auto___14539 < len__5769__auto___14538)){
args__5775__auto__.push((arguments[i__5770__auto___14539]));

var G__14540 = (i__5770__auto___14539 + (1));
i__5770__auto___14539 = G__14540;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"aside",args__14379__auto__);
}));

(dumdom.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.aside.cljs$lang$applyTo = (function (seq14399){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14399));
}));


dumdom.dom.audio = (function dumdom$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14541 = arguments.length;
var i__5770__auto___14542 = (0);
while(true){
if((i__5770__auto___14542 < len__5769__auto___14541)){
args__5775__auto__.push((arguments[i__5770__auto___14542]));

var G__14543 = (i__5770__auto___14542 + (1));
i__5770__auto___14542 = G__14543;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"audio",args__14379__auto__);
}));

(dumdom.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.audio.cljs$lang$applyTo = (function (seq14400){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14400));
}));


dumdom.dom.b = (function dumdom$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14544 = arguments.length;
var i__5770__auto___14545 = (0);
while(true){
if((i__5770__auto___14545 < len__5769__auto___14544)){
args__5775__auto__.push((arguments[i__5770__auto___14545]));

var G__14546 = (i__5770__auto___14545 + (1));
i__5770__auto___14545 = G__14546;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"b",args__14379__auto__);
}));

(dumdom.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.b.cljs$lang$applyTo = (function (seq14401){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14401));
}));


dumdom.dom.base = (function dumdom$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14547 = arguments.length;
var i__5770__auto___14548 = (0);
while(true){
if((i__5770__auto___14548 < len__5769__auto___14547)){
args__5775__auto__.push((arguments[i__5770__auto___14548]));

var G__14549 = (i__5770__auto___14548 + (1));
i__5770__auto___14548 = G__14549;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"base",args__14379__auto__);
}));

(dumdom.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.base.cljs$lang$applyTo = (function (seq14402){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14402));
}));


dumdom.dom.bdi = (function dumdom$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14550 = arguments.length;
var i__5770__auto___14551 = (0);
while(true){
if((i__5770__auto___14551 < len__5769__auto___14550)){
args__5775__auto__.push((arguments[i__5770__auto___14551]));

var G__14552 = (i__5770__auto___14551 + (1));
i__5770__auto___14551 = G__14552;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"bdi",args__14379__auto__);
}));

(dumdom.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdi.cljs$lang$applyTo = (function (seq14403){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14403));
}));


dumdom.dom.bdo = (function dumdom$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14553 = arguments.length;
var i__5770__auto___14554 = (0);
while(true){
if((i__5770__auto___14554 < len__5769__auto___14553)){
args__5775__auto__.push((arguments[i__5770__auto___14554]));

var G__14555 = (i__5770__auto___14554 + (1));
i__5770__auto___14554 = G__14555;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"bdo",args__14379__auto__);
}));

(dumdom.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdo.cljs$lang$applyTo = (function (seq14404){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14404));
}));


dumdom.dom.big = (function dumdom$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14556 = arguments.length;
var i__5770__auto___14557 = (0);
while(true){
if((i__5770__auto___14557 < len__5769__auto___14556)){
args__5775__auto__.push((arguments[i__5770__auto___14557]));

var G__14558 = (i__5770__auto___14557 + (1));
i__5770__auto___14557 = G__14558;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"big",args__14379__auto__);
}));

(dumdom.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.big.cljs$lang$applyTo = (function (seq14405){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14405));
}));


dumdom.dom.blockquote = (function dumdom$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14559 = arguments.length;
var i__5770__auto___14560 = (0);
while(true){
if((i__5770__auto___14560 < len__5769__auto___14559)){
args__5775__auto__.push((arguments[i__5770__auto___14560]));

var G__14561 = (i__5770__auto___14560 + (1));
i__5770__auto___14560 = G__14561;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"blockquote",args__14379__auto__);
}));

(dumdom.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.blockquote.cljs$lang$applyTo = (function (seq14406){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14406));
}));


dumdom.dom.body = (function dumdom$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14562 = arguments.length;
var i__5770__auto___14563 = (0);
while(true){
if((i__5770__auto___14563 < len__5769__auto___14562)){
args__5775__auto__.push((arguments[i__5770__auto___14563]));

var G__14564 = (i__5770__auto___14563 + (1));
i__5770__auto___14563 = G__14564;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"body",args__14379__auto__);
}));

(dumdom.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.body.cljs$lang$applyTo = (function (seq14407){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14407));
}));


dumdom.dom.br = (function dumdom$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14565 = arguments.length;
var i__5770__auto___14566 = (0);
while(true){
if((i__5770__auto___14566 < len__5769__auto___14565)){
args__5775__auto__.push((arguments[i__5770__auto___14566]));

var G__14567 = (i__5770__auto___14566 + (1));
i__5770__auto___14566 = G__14567;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"br",args__14379__auto__);
}));

(dumdom.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.br.cljs$lang$applyTo = (function (seq14408){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14408));
}));


dumdom.dom.button = (function dumdom$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14568 = arguments.length;
var i__5770__auto___14569 = (0);
while(true){
if((i__5770__auto___14569 < len__5769__auto___14568)){
args__5775__auto__.push((arguments[i__5770__auto___14569]));

var G__14570 = (i__5770__auto___14569 + (1));
i__5770__auto___14569 = G__14570;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"button",args__14379__auto__);
}));

(dumdom.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.button.cljs$lang$applyTo = (function (seq14409){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14409));
}));


dumdom.dom.canvas = (function dumdom$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14571 = arguments.length;
var i__5770__auto___14572 = (0);
while(true){
if((i__5770__auto___14572 < len__5769__auto___14571)){
args__5775__auto__.push((arguments[i__5770__auto___14572]));

var G__14573 = (i__5770__auto___14572 + (1));
i__5770__auto___14572 = G__14573;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"canvas",args__14379__auto__);
}));

(dumdom.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.canvas.cljs$lang$applyTo = (function (seq14410){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14410));
}));


dumdom.dom.caption = (function dumdom$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14574 = arguments.length;
var i__5770__auto___14575 = (0);
while(true){
if((i__5770__auto___14575 < len__5769__auto___14574)){
args__5775__auto__.push((arguments[i__5770__auto___14575]));

var G__14576 = (i__5770__auto___14575 + (1));
i__5770__auto___14575 = G__14576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"caption",args__14379__auto__);
}));

(dumdom.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.caption.cljs$lang$applyTo = (function (seq14411){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14411));
}));


dumdom.dom.cite = (function dumdom$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14577 = arguments.length;
var i__5770__auto___14578 = (0);
while(true){
if((i__5770__auto___14578 < len__5769__auto___14577)){
args__5775__auto__.push((arguments[i__5770__auto___14578]));

var G__14579 = (i__5770__auto___14578 + (1));
i__5770__auto___14578 = G__14579;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"cite",args__14379__auto__);
}));

(dumdom.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.cite.cljs$lang$applyTo = (function (seq14412){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14412));
}));


dumdom.dom.code = (function dumdom$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14580 = arguments.length;
var i__5770__auto___14581 = (0);
while(true){
if((i__5770__auto___14581 < len__5769__auto___14580)){
args__5775__auto__.push((arguments[i__5770__auto___14581]));

var G__14582 = (i__5770__auto___14581 + (1));
i__5770__auto___14581 = G__14582;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"code",args__14379__auto__);
}));

(dumdom.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.code.cljs$lang$applyTo = (function (seq14413){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14413));
}));


dumdom.dom.col = (function dumdom$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14583 = arguments.length;
var i__5770__auto___14584 = (0);
while(true){
if((i__5770__auto___14584 < len__5769__auto___14583)){
args__5775__auto__.push((arguments[i__5770__auto___14584]));

var G__14585 = (i__5770__auto___14584 + (1));
i__5770__auto___14584 = G__14585;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"col",args__14379__auto__);
}));

(dumdom.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.col.cljs$lang$applyTo = (function (seq14414){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14414));
}));


dumdom.dom.colgroup = (function dumdom$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14586 = arguments.length;
var i__5770__auto___14587 = (0);
while(true){
if((i__5770__auto___14587 < len__5769__auto___14586)){
args__5775__auto__.push((arguments[i__5770__auto___14587]));

var G__14588 = (i__5770__auto___14587 + (1));
i__5770__auto___14587 = G__14588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"colgroup",args__14379__auto__);
}));

(dumdom.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.colgroup.cljs$lang$applyTo = (function (seq14415){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14415));
}));


dumdom.dom.data = (function dumdom$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14589 = arguments.length;
var i__5770__auto___14590 = (0);
while(true){
if((i__5770__auto___14590 < len__5769__auto___14589)){
args__5775__auto__.push((arguments[i__5770__auto___14590]));

var G__14591 = (i__5770__auto___14590 + (1));
i__5770__auto___14590 = G__14591;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"data",args__14379__auto__);
}));

(dumdom.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.data.cljs$lang$applyTo = (function (seq14416){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14416));
}));


dumdom.dom.datalist = (function dumdom$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14592 = arguments.length;
var i__5770__auto___14593 = (0);
while(true){
if((i__5770__auto___14593 < len__5769__auto___14592)){
args__5775__auto__.push((arguments[i__5770__auto___14593]));

var G__14594 = (i__5770__auto___14593 + (1));
i__5770__auto___14593 = G__14594;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"datalist",args__14379__auto__);
}));

(dumdom.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.datalist.cljs$lang$applyTo = (function (seq14417){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14417));
}));


dumdom.dom.dd = (function dumdom$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14595 = arguments.length;
var i__5770__auto___14596 = (0);
while(true){
if((i__5770__auto___14596 < len__5769__auto___14595)){
args__5775__auto__.push((arguments[i__5770__auto___14596]));

var G__14597 = (i__5770__auto___14596 + (1));
i__5770__auto___14596 = G__14597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dd",args__14379__auto__);
}));

(dumdom.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dd.cljs$lang$applyTo = (function (seq14418){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14418));
}));


dumdom.dom.del = (function dumdom$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14598 = arguments.length;
var i__5770__auto___14599 = (0);
while(true){
if((i__5770__auto___14599 < len__5769__auto___14598)){
args__5775__auto__.push((arguments[i__5770__auto___14599]));

var G__14600 = (i__5770__auto___14599 + (1));
i__5770__auto___14599 = G__14600;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"del",args__14379__auto__);
}));

(dumdom.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.del.cljs$lang$applyTo = (function (seq14419){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14419));
}));


dumdom.dom.details = (function dumdom$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14601 = arguments.length;
var i__5770__auto___14602 = (0);
while(true){
if((i__5770__auto___14602 < len__5769__auto___14601)){
args__5775__auto__.push((arguments[i__5770__auto___14602]));

var G__14603 = (i__5770__auto___14602 + (1));
i__5770__auto___14602 = G__14603;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"details",args__14379__auto__);
}));

(dumdom.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.details.cljs$lang$applyTo = (function (seq14420){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14420));
}));


dumdom.dom.dfn = (function dumdom$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14604 = arguments.length;
var i__5770__auto___14605 = (0);
while(true){
if((i__5770__auto___14605 < len__5769__auto___14604)){
args__5775__auto__.push((arguments[i__5770__auto___14605]));

var G__14606 = (i__5770__auto___14605 + (1));
i__5770__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dfn",args__14379__auto__);
}));

(dumdom.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dfn.cljs$lang$applyTo = (function (seq14421){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14421));
}));


dumdom.dom.div = (function dumdom$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14607 = arguments.length;
var i__5770__auto___14608 = (0);
while(true){
if((i__5770__auto___14608 < len__5769__auto___14607)){
args__5775__auto__.push((arguments[i__5770__auto___14608]));

var G__14609 = (i__5770__auto___14608 + (1));
i__5770__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"div",args__14379__auto__);
}));

(dumdom.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.div.cljs$lang$applyTo = (function (seq14422){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14422));
}));


dumdom.dom.dl = (function dumdom$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14610 = arguments.length;
var i__5770__auto___14611 = (0);
while(true){
if((i__5770__auto___14611 < len__5769__auto___14610)){
args__5775__auto__.push((arguments[i__5770__auto___14611]));

var G__14612 = (i__5770__auto___14611 + (1));
i__5770__auto___14611 = G__14612;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dl",args__14379__auto__);
}));

(dumdom.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dl.cljs$lang$applyTo = (function (seq14423){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14423));
}));


dumdom.dom.dt = (function dumdom$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14613 = arguments.length;
var i__5770__auto___14614 = (0);
while(true){
if((i__5770__auto___14614 < len__5769__auto___14613)){
args__5775__auto__.push((arguments[i__5770__auto___14614]));

var G__14615 = (i__5770__auto___14614 + (1));
i__5770__auto___14614 = G__14615;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dt",args__14379__auto__);
}));

(dumdom.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dt.cljs$lang$applyTo = (function (seq14424){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14424));
}));


dumdom.dom.em = (function dumdom$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14616 = arguments.length;
var i__5770__auto___14617 = (0);
while(true){
if((i__5770__auto___14617 < len__5769__auto___14616)){
args__5775__auto__.push((arguments[i__5770__auto___14617]));

var G__14618 = (i__5770__auto___14617 + (1));
i__5770__auto___14617 = G__14618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"em",args__14379__auto__);
}));

(dumdom.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.em.cljs$lang$applyTo = (function (seq14425){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14425));
}));


dumdom.dom.embed = (function dumdom$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14619 = arguments.length;
var i__5770__auto___14620 = (0);
while(true){
if((i__5770__auto___14620 < len__5769__auto___14619)){
args__5775__auto__.push((arguments[i__5770__auto___14620]));

var G__14621 = (i__5770__auto___14620 + (1));
i__5770__auto___14620 = G__14621;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"embed",args__14379__auto__);
}));

(dumdom.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.embed.cljs$lang$applyTo = (function (seq14426){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14426));
}));


dumdom.dom.fieldset = (function dumdom$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14622 = arguments.length;
var i__5770__auto___14623 = (0);
while(true){
if((i__5770__auto___14623 < len__5769__auto___14622)){
args__5775__auto__.push((arguments[i__5770__auto___14623]));

var G__14624 = (i__5770__auto___14623 + (1));
i__5770__auto___14623 = G__14624;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"fieldset",args__14379__auto__);
}));

(dumdom.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.fieldset.cljs$lang$applyTo = (function (seq14427){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14427));
}));


dumdom.dom.figcaption = (function dumdom$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14625 = arguments.length;
var i__5770__auto___14626 = (0);
while(true){
if((i__5770__auto___14626 < len__5769__auto___14625)){
args__5775__auto__.push((arguments[i__5770__auto___14626]));

var G__14627 = (i__5770__auto___14626 + (1));
i__5770__auto___14626 = G__14627;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"figcaption",args__14379__auto__);
}));

(dumdom.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figcaption.cljs$lang$applyTo = (function (seq14428){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14428));
}));


dumdom.dom.figure = (function dumdom$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14628 = arguments.length;
var i__5770__auto___14629 = (0);
while(true){
if((i__5770__auto___14629 < len__5769__auto___14628)){
args__5775__auto__.push((arguments[i__5770__auto___14629]));

var G__14630 = (i__5770__auto___14629 + (1));
i__5770__auto___14629 = G__14630;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"figure",args__14379__auto__);
}));

(dumdom.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figure.cljs$lang$applyTo = (function (seq14429){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14429));
}));


dumdom.dom.footer = (function dumdom$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14631 = arguments.length;
var i__5770__auto___14632 = (0);
while(true){
if((i__5770__auto___14632 < len__5769__auto___14631)){
args__5775__auto__.push((arguments[i__5770__auto___14632]));

var G__14633 = (i__5770__auto___14632 + (1));
i__5770__auto___14632 = G__14633;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"footer",args__14379__auto__);
}));

(dumdom.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.footer.cljs$lang$applyTo = (function (seq14430){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14430));
}));


dumdom.dom.form = (function dumdom$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14634 = arguments.length;
var i__5770__auto___14635 = (0);
while(true){
if((i__5770__auto___14635 < len__5769__auto___14634)){
args__5775__auto__.push((arguments[i__5770__auto___14635]));

var G__14636 = (i__5770__auto___14635 + (1));
i__5770__auto___14635 = G__14636;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"form",args__14379__auto__);
}));

(dumdom.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.form.cljs$lang$applyTo = (function (seq14431){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14431));
}));


dumdom.dom.h1 = (function dumdom$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14637 = arguments.length;
var i__5770__auto___14638 = (0);
while(true){
if((i__5770__auto___14638 < len__5769__auto___14637)){
args__5775__auto__.push((arguments[i__5770__auto___14638]));

var G__14639 = (i__5770__auto___14638 + (1));
i__5770__auto___14638 = G__14639;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h1",args__14379__auto__);
}));

(dumdom.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h1.cljs$lang$applyTo = (function (seq14432){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14432));
}));


dumdom.dom.h2 = (function dumdom$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14640 = arguments.length;
var i__5770__auto___14641 = (0);
while(true){
if((i__5770__auto___14641 < len__5769__auto___14640)){
args__5775__auto__.push((arguments[i__5770__auto___14641]));

var G__14642 = (i__5770__auto___14641 + (1));
i__5770__auto___14641 = G__14642;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h2",args__14379__auto__);
}));

(dumdom.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h2.cljs$lang$applyTo = (function (seq14433){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14433));
}));


dumdom.dom.h3 = (function dumdom$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14643 = arguments.length;
var i__5770__auto___14644 = (0);
while(true){
if((i__5770__auto___14644 < len__5769__auto___14643)){
args__5775__auto__.push((arguments[i__5770__auto___14644]));

var G__14645 = (i__5770__auto___14644 + (1));
i__5770__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h3",args__14379__auto__);
}));

(dumdom.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h3.cljs$lang$applyTo = (function (seq14434){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14434));
}));


dumdom.dom.h4 = (function dumdom$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14646 = arguments.length;
var i__5770__auto___14647 = (0);
while(true){
if((i__5770__auto___14647 < len__5769__auto___14646)){
args__5775__auto__.push((arguments[i__5770__auto___14647]));

var G__14648 = (i__5770__auto___14647 + (1));
i__5770__auto___14647 = G__14648;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h4",args__14379__auto__);
}));

(dumdom.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h4.cljs$lang$applyTo = (function (seq14435){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14435));
}));


dumdom.dom.h5 = (function dumdom$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14649 = arguments.length;
var i__5770__auto___14650 = (0);
while(true){
if((i__5770__auto___14650 < len__5769__auto___14649)){
args__5775__auto__.push((arguments[i__5770__auto___14650]));

var G__14651 = (i__5770__auto___14650 + (1));
i__5770__auto___14650 = G__14651;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h5",args__14379__auto__);
}));

(dumdom.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h5.cljs$lang$applyTo = (function (seq14436){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14436));
}));


dumdom.dom.h6 = (function dumdom$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14652 = arguments.length;
var i__5770__auto___14653 = (0);
while(true){
if((i__5770__auto___14653 < len__5769__auto___14652)){
args__5775__auto__.push((arguments[i__5770__auto___14653]));

var G__14654 = (i__5770__auto___14653 + (1));
i__5770__auto___14653 = G__14654;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h6",args__14379__auto__);
}));

(dumdom.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h6.cljs$lang$applyTo = (function (seq14437){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14437));
}));


dumdom.dom.head = (function dumdom$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14655 = arguments.length;
var i__5770__auto___14656 = (0);
while(true){
if((i__5770__auto___14656 < len__5769__auto___14655)){
args__5775__auto__.push((arguments[i__5770__auto___14656]));

var G__14657 = (i__5770__auto___14656 + (1));
i__5770__auto___14656 = G__14657;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"head",args__14379__auto__);
}));

(dumdom.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.head.cljs$lang$applyTo = (function (seq14438){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14438));
}));


dumdom.dom.header = (function dumdom$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14658 = arguments.length;
var i__5770__auto___14659 = (0);
while(true){
if((i__5770__auto___14659 < len__5769__auto___14658)){
args__5775__auto__.push((arguments[i__5770__auto___14659]));

var G__14660 = (i__5770__auto___14659 + (1));
i__5770__auto___14659 = G__14660;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"header",args__14379__auto__);
}));

(dumdom.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.header.cljs$lang$applyTo = (function (seq14439){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14439));
}));


dumdom.dom.hr = (function dumdom$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14661 = arguments.length;
var i__5770__auto___14662 = (0);
while(true){
if((i__5770__auto___14662 < len__5769__auto___14661)){
args__5775__auto__.push((arguments[i__5770__auto___14662]));

var G__14663 = (i__5770__auto___14662 + (1));
i__5770__auto___14662 = G__14663;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"hr",args__14379__auto__);
}));

(dumdom.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.hr.cljs$lang$applyTo = (function (seq14440){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14440));
}));


dumdom.dom.html = (function dumdom$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14664 = arguments.length;
var i__5770__auto___14665 = (0);
while(true){
if((i__5770__auto___14665 < len__5769__auto___14664)){
args__5775__auto__.push((arguments[i__5770__auto___14665]));

var G__14666 = (i__5770__auto___14665 + (1));
i__5770__auto___14665 = G__14666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"html",args__14379__auto__);
}));

(dumdom.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.html.cljs$lang$applyTo = (function (seq14441){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14441));
}));


dumdom.dom.i = (function dumdom$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14667 = arguments.length;
var i__5770__auto___14668 = (0);
while(true){
if((i__5770__auto___14668 < len__5769__auto___14667)){
args__5775__auto__.push((arguments[i__5770__auto___14668]));

var G__14669 = (i__5770__auto___14668 + (1));
i__5770__auto___14668 = G__14669;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"i",args__14379__auto__);
}));

(dumdom.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.i.cljs$lang$applyTo = (function (seq14442){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14442));
}));


dumdom.dom.iframe = (function dumdom$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14670 = arguments.length;
var i__5770__auto___14671 = (0);
while(true){
if((i__5770__auto___14671 < len__5769__auto___14670)){
args__5775__auto__.push((arguments[i__5770__auto___14671]));

var G__14672 = (i__5770__auto___14671 + (1));
i__5770__auto___14671 = G__14672;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"iframe",args__14379__auto__);
}));

(dumdom.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.iframe.cljs$lang$applyTo = (function (seq14443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14443));
}));


dumdom.dom.img = (function dumdom$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14673 = arguments.length;
var i__5770__auto___14674 = (0);
while(true){
if((i__5770__auto___14674 < len__5769__auto___14673)){
args__5775__auto__.push((arguments[i__5770__auto___14674]));

var G__14675 = (i__5770__auto___14674 + (1));
i__5770__auto___14674 = G__14675;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"img",args__14379__auto__);
}));

(dumdom.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.img.cljs$lang$applyTo = (function (seq14444){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14444));
}));


dumdom.dom.input = (function dumdom$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14676 = arguments.length;
var i__5770__auto___14677 = (0);
while(true){
if((i__5770__auto___14677 < len__5769__auto___14676)){
args__5775__auto__.push((arguments[i__5770__auto___14677]));

var G__14678 = (i__5770__auto___14677 + (1));
i__5770__auto___14677 = G__14678;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"input",args__14379__auto__);
}));

(dumdom.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.input.cljs$lang$applyTo = (function (seq14445){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14445));
}));


dumdom.dom.ins = (function dumdom$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14679 = arguments.length;
var i__5770__auto___14680 = (0);
while(true){
if((i__5770__auto___14680 < len__5769__auto___14679)){
args__5775__auto__.push((arguments[i__5770__auto___14680]));

var G__14681 = (i__5770__auto___14680 + (1));
i__5770__auto___14680 = G__14681;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ins",args__14379__auto__);
}));

(dumdom.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ins.cljs$lang$applyTo = (function (seq14446){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14446));
}));


dumdom.dom.kbd = (function dumdom$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14682 = arguments.length;
var i__5770__auto___14683 = (0);
while(true){
if((i__5770__auto___14683 < len__5769__auto___14682)){
args__5775__auto__.push((arguments[i__5770__auto___14683]));

var G__14684 = (i__5770__auto___14683 + (1));
i__5770__auto___14683 = G__14684;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"kbd",args__14379__auto__);
}));

(dumdom.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.kbd.cljs$lang$applyTo = (function (seq14447){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14447));
}));


dumdom.dom.keygen = (function dumdom$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14685 = arguments.length;
var i__5770__auto___14686 = (0);
while(true){
if((i__5770__auto___14686 < len__5769__auto___14685)){
args__5775__auto__.push((arguments[i__5770__auto___14686]));

var G__14687 = (i__5770__auto___14686 + (1));
i__5770__auto___14686 = G__14687;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"keygen",args__14379__auto__);
}));

(dumdom.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.keygen.cljs$lang$applyTo = (function (seq14448){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14448));
}));


dumdom.dom.label = (function dumdom$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14688 = arguments.length;
var i__5770__auto___14689 = (0);
while(true){
if((i__5770__auto___14689 < len__5769__auto___14688)){
args__5775__auto__.push((arguments[i__5770__auto___14689]));

var G__14690 = (i__5770__auto___14689 + (1));
i__5770__auto___14689 = G__14690;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"label",args__14379__auto__);
}));

(dumdom.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.label.cljs$lang$applyTo = (function (seq14449){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14449));
}));


dumdom.dom.legend = (function dumdom$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14691 = arguments.length;
var i__5770__auto___14692 = (0);
while(true){
if((i__5770__auto___14692 < len__5769__auto___14691)){
args__5775__auto__.push((arguments[i__5770__auto___14692]));

var G__14693 = (i__5770__auto___14692 + (1));
i__5770__auto___14692 = G__14693;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"legend",args__14379__auto__);
}));

(dumdom.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.legend.cljs$lang$applyTo = (function (seq14450){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14450));
}));


dumdom.dom.li = (function dumdom$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14694 = arguments.length;
var i__5770__auto___14695 = (0);
while(true){
if((i__5770__auto___14695 < len__5769__auto___14694)){
args__5775__auto__.push((arguments[i__5770__auto___14695]));

var G__14696 = (i__5770__auto___14695 + (1));
i__5770__auto___14695 = G__14696;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"li",args__14379__auto__);
}));

(dumdom.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.li.cljs$lang$applyTo = (function (seq14451){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14451));
}));


dumdom.dom.link = (function dumdom$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14697 = arguments.length;
var i__5770__auto___14698 = (0);
while(true){
if((i__5770__auto___14698 < len__5769__auto___14697)){
args__5775__auto__.push((arguments[i__5770__auto___14698]));

var G__14699 = (i__5770__auto___14698 + (1));
i__5770__auto___14698 = G__14699;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"link",args__14379__auto__);
}));

(dumdom.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.link.cljs$lang$applyTo = (function (seq14452){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14452));
}));


dumdom.dom.main = (function dumdom$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14700 = arguments.length;
var i__5770__auto___14701 = (0);
while(true){
if((i__5770__auto___14701 < len__5769__auto___14700)){
args__5775__auto__.push((arguments[i__5770__auto___14701]));

var G__14702 = (i__5770__auto___14701 + (1));
i__5770__auto___14701 = G__14702;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"main",args__14379__auto__);
}));

(dumdom.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.main.cljs$lang$applyTo = (function (seq14453){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14453));
}));


dumdom.dom.map = (function dumdom$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14703 = arguments.length;
var i__5770__auto___14704 = (0);
while(true){
if((i__5770__auto___14704 < len__5769__auto___14703)){
args__5775__auto__.push((arguments[i__5770__auto___14704]));

var G__14705 = (i__5770__auto___14704 + (1));
i__5770__auto___14704 = G__14705;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"map",args__14379__auto__);
}));

(dumdom.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.map.cljs$lang$applyTo = (function (seq14454){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14454));
}));


dumdom.dom.mark = (function dumdom$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14706 = arguments.length;
var i__5770__auto___14707 = (0);
while(true){
if((i__5770__auto___14707 < len__5769__auto___14706)){
args__5775__auto__.push((arguments[i__5770__auto___14707]));

var G__14708 = (i__5770__auto___14707 + (1));
i__5770__auto___14707 = G__14708;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"mark",args__14379__auto__);
}));

(dumdom.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mark.cljs$lang$applyTo = (function (seq14455){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14455));
}));


dumdom.dom.menu = (function dumdom$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14709 = arguments.length;
var i__5770__auto___14710 = (0);
while(true){
if((i__5770__auto___14710 < len__5769__auto___14709)){
args__5775__auto__.push((arguments[i__5770__auto___14710]));

var G__14711 = (i__5770__auto___14710 + (1));
i__5770__auto___14710 = G__14711;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"menu",args__14379__auto__);
}));

(dumdom.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menu.cljs$lang$applyTo = (function (seq14456){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14456));
}));


dumdom.dom.menuitem = (function dumdom$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14712 = arguments.length;
var i__5770__auto___14713 = (0);
while(true){
if((i__5770__auto___14713 < len__5769__auto___14712)){
args__5775__auto__.push((arguments[i__5770__auto___14713]));

var G__14714 = (i__5770__auto___14713 + (1));
i__5770__auto___14713 = G__14714;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"menuitem",args__14379__auto__);
}));

(dumdom.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menuitem.cljs$lang$applyTo = (function (seq14457){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14457));
}));


dumdom.dom.meta = (function dumdom$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14715 = arguments.length;
var i__5770__auto___14716 = (0);
while(true){
if((i__5770__auto___14716 < len__5769__auto___14715)){
args__5775__auto__.push((arguments[i__5770__auto___14716]));

var G__14717 = (i__5770__auto___14716 + (1));
i__5770__auto___14716 = G__14717;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"meta",args__14379__auto__);
}));

(dumdom.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meta.cljs$lang$applyTo = (function (seq14458){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14458));
}));


dumdom.dom.meter = (function dumdom$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14718 = arguments.length;
var i__5770__auto___14719 = (0);
while(true){
if((i__5770__auto___14719 < len__5769__auto___14718)){
args__5775__auto__.push((arguments[i__5770__auto___14719]));

var G__14720 = (i__5770__auto___14719 + (1));
i__5770__auto___14719 = G__14720;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"meter",args__14379__auto__);
}));

(dumdom.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meter.cljs$lang$applyTo = (function (seq14459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14459));
}));


dumdom.dom.nav = (function dumdom$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14721 = arguments.length;
var i__5770__auto___14722 = (0);
while(true){
if((i__5770__auto___14722 < len__5769__auto___14721)){
args__5775__auto__.push((arguments[i__5770__auto___14722]));

var G__14723 = (i__5770__auto___14722 + (1));
i__5770__auto___14722 = G__14723;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"nav",args__14379__auto__);
}));

(dumdom.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.nav.cljs$lang$applyTo = (function (seq14460){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14460));
}));


dumdom.dom.noscript = (function dumdom$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14724 = arguments.length;
var i__5770__auto___14725 = (0);
while(true){
if((i__5770__auto___14725 < len__5769__auto___14724)){
args__5775__auto__.push((arguments[i__5770__auto___14725]));

var G__14726 = (i__5770__auto___14725 + (1));
i__5770__auto___14725 = G__14726;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"noscript",args__14379__auto__);
}));

(dumdom.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.noscript.cljs$lang$applyTo = (function (seq14461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14461));
}));


dumdom.dom.object = (function dumdom$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14727 = arguments.length;
var i__5770__auto___14728 = (0);
while(true){
if((i__5770__auto___14728 < len__5769__auto___14727)){
args__5775__auto__.push((arguments[i__5770__auto___14728]));

var G__14729 = (i__5770__auto___14728 + (1));
i__5770__auto___14728 = G__14729;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"object",args__14379__auto__);
}));

(dumdom.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.object.cljs$lang$applyTo = (function (seq14462){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14462));
}));


dumdom.dom.ol = (function dumdom$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14730 = arguments.length;
var i__5770__auto___14731 = (0);
while(true){
if((i__5770__auto___14731 < len__5769__auto___14730)){
args__5775__auto__.push((arguments[i__5770__auto___14731]));

var G__14732 = (i__5770__auto___14731 + (1));
i__5770__auto___14731 = G__14732;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ol",args__14379__auto__);
}));

(dumdom.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ol.cljs$lang$applyTo = (function (seq14463){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14463));
}));


dumdom.dom.optgroup = (function dumdom$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14733 = arguments.length;
var i__5770__auto___14734 = (0);
while(true){
if((i__5770__auto___14734 < len__5769__auto___14733)){
args__5775__auto__.push((arguments[i__5770__auto___14734]));

var G__14735 = (i__5770__auto___14734 + (1));
i__5770__auto___14734 = G__14735;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"optgroup",args__14379__auto__);
}));

(dumdom.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.optgroup.cljs$lang$applyTo = (function (seq14464){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14464));
}));


dumdom.dom.option = (function dumdom$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14736 = arguments.length;
var i__5770__auto___14737 = (0);
while(true){
if((i__5770__auto___14737 < len__5769__auto___14736)){
args__5775__auto__.push((arguments[i__5770__auto___14737]));

var G__14738 = (i__5770__auto___14737 + (1));
i__5770__auto___14737 = G__14738;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"option",args__14379__auto__);
}));

(dumdom.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.option.cljs$lang$applyTo = (function (seq14465){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14465));
}));


dumdom.dom.output = (function dumdom$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14739 = arguments.length;
var i__5770__auto___14740 = (0);
while(true){
if((i__5770__auto___14740 < len__5769__auto___14739)){
args__5775__auto__.push((arguments[i__5770__auto___14740]));

var G__14741 = (i__5770__auto___14740 + (1));
i__5770__auto___14740 = G__14741;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"output",args__14379__auto__);
}));

(dumdom.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.output.cljs$lang$applyTo = (function (seq14466){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14466));
}));


dumdom.dom.p = (function dumdom$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14742 = arguments.length;
var i__5770__auto___14743 = (0);
while(true){
if((i__5770__auto___14743 < len__5769__auto___14742)){
args__5775__auto__.push((arguments[i__5770__auto___14743]));

var G__14744 = (i__5770__auto___14743 + (1));
i__5770__auto___14743 = G__14744;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"p",args__14379__auto__);
}));

(dumdom.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.p.cljs$lang$applyTo = (function (seq14467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14467));
}));


dumdom.dom.param = (function dumdom$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14745 = arguments.length;
var i__5770__auto___14746 = (0);
while(true){
if((i__5770__auto___14746 < len__5769__auto___14745)){
args__5775__auto__.push((arguments[i__5770__auto___14746]));

var G__14747 = (i__5770__auto___14746 + (1));
i__5770__auto___14746 = G__14747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"param",args__14379__auto__);
}));

(dumdom.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.param.cljs$lang$applyTo = (function (seq14468){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14468));
}));


dumdom.dom.pre = (function dumdom$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14748 = arguments.length;
var i__5770__auto___14749 = (0);
while(true){
if((i__5770__auto___14749 < len__5769__auto___14748)){
args__5775__auto__.push((arguments[i__5770__auto___14749]));

var G__14750 = (i__5770__auto___14749 + (1));
i__5770__auto___14749 = G__14750;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"pre",args__14379__auto__);
}));

(dumdom.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pre.cljs$lang$applyTo = (function (seq14469){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14469));
}));


dumdom.dom.progress = (function dumdom$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14751 = arguments.length;
var i__5770__auto___14752 = (0);
while(true){
if((i__5770__auto___14752 < len__5769__auto___14751)){
args__5775__auto__.push((arguments[i__5770__auto___14752]));

var G__14753 = (i__5770__auto___14752 + (1));
i__5770__auto___14752 = G__14753;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"progress",args__14379__auto__);
}));

(dumdom.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.progress.cljs$lang$applyTo = (function (seq14470){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14470));
}));


dumdom.dom.q = (function dumdom$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14754 = arguments.length;
var i__5770__auto___14755 = (0);
while(true){
if((i__5770__auto___14755 < len__5769__auto___14754)){
args__5775__auto__.push((arguments[i__5770__auto___14755]));

var G__14756 = (i__5770__auto___14755 + (1));
i__5770__auto___14755 = G__14756;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"q",args__14379__auto__);
}));

(dumdom.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.q.cljs$lang$applyTo = (function (seq14471){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14471));
}));


dumdom.dom.rp = (function dumdom$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14757 = arguments.length;
var i__5770__auto___14758 = (0);
while(true){
if((i__5770__auto___14758 < len__5769__auto___14757)){
args__5775__auto__.push((arguments[i__5770__auto___14758]));

var G__14759 = (i__5770__auto___14758 + (1));
i__5770__auto___14758 = G__14759;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"rp",args__14379__auto__);
}));

(dumdom.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rp.cljs$lang$applyTo = (function (seq14472){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14472));
}));


dumdom.dom.rt = (function dumdom$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14760 = arguments.length;
var i__5770__auto___14761 = (0);
while(true){
if((i__5770__auto___14761 < len__5769__auto___14760)){
args__5775__auto__.push((arguments[i__5770__auto___14761]));

var G__14762 = (i__5770__auto___14761 + (1));
i__5770__auto___14761 = G__14762;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"rt",args__14379__auto__);
}));

(dumdom.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rt.cljs$lang$applyTo = (function (seq14473){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14473));
}));


dumdom.dom.ruby = (function dumdom$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14763 = arguments.length;
var i__5770__auto___14764 = (0);
while(true){
if((i__5770__auto___14764 < len__5769__auto___14763)){
args__5775__auto__.push((arguments[i__5770__auto___14764]));

var G__14765 = (i__5770__auto___14764 + (1));
i__5770__auto___14764 = G__14765;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ruby",args__14379__auto__);
}));

(dumdom.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ruby.cljs$lang$applyTo = (function (seq14474){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14474));
}));


dumdom.dom.s = (function dumdom$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14766 = arguments.length;
var i__5770__auto___14767 = (0);
while(true){
if((i__5770__auto___14767 < len__5769__auto___14766)){
args__5775__auto__.push((arguments[i__5770__auto___14767]));

var G__14768 = (i__5770__auto___14767 + (1));
i__5770__auto___14767 = G__14768;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"s",args__14379__auto__);
}));

(dumdom.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.s.cljs$lang$applyTo = (function (seq14475){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14475));
}));


dumdom.dom.samp = (function dumdom$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14769 = arguments.length;
var i__5770__auto___14770 = (0);
while(true){
if((i__5770__auto___14770 < len__5769__auto___14769)){
args__5775__auto__.push((arguments[i__5770__auto___14770]));

var G__14771 = (i__5770__auto___14770 + (1));
i__5770__auto___14770 = G__14771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"samp",args__14379__auto__);
}));

(dumdom.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.samp.cljs$lang$applyTo = (function (seq14476){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14476));
}));


dumdom.dom.script = (function dumdom$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14772 = arguments.length;
var i__5770__auto___14773 = (0);
while(true){
if((i__5770__auto___14773 < len__5769__auto___14772)){
args__5775__auto__.push((arguments[i__5770__auto___14773]));

var G__14774 = (i__5770__auto___14773 + (1));
i__5770__auto___14773 = G__14774;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"script",args__14379__auto__);
}));

(dumdom.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.script.cljs$lang$applyTo = (function (seq14477){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14477));
}));


dumdom.dom.section = (function dumdom$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14775 = arguments.length;
var i__5770__auto___14776 = (0);
while(true){
if((i__5770__auto___14776 < len__5769__auto___14775)){
args__5775__auto__.push((arguments[i__5770__auto___14776]));

var G__14777 = (i__5770__auto___14776 + (1));
i__5770__auto___14776 = G__14777;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"section",args__14379__auto__);
}));

(dumdom.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.section.cljs$lang$applyTo = (function (seq14478){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14478));
}));


dumdom.dom.select = (function dumdom$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14778 = arguments.length;
var i__5770__auto___14779 = (0);
while(true){
if((i__5770__auto___14779 < len__5769__auto___14778)){
args__5775__auto__.push((arguments[i__5770__auto___14779]));

var G__14780 = (i__5770__auto___14779 + (1));
i__5770__auto___14779 = G__14780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"select",args__14379__auto__);
}));

(dumdom.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.select.cljs$lang$applyTo = (function (seq14479){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14479));
}));


dumdom.dom.small = (function dumdom$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14781 = arguments.length;
var i__5770__auto___14782 = (0);
while(true){
if((i__5770__auto___14782 < len__5769__auto___14781)){
args__5775__auto__.push((arguments[i__5770__auto___14782]));

var G__14783 = (i__5770__auto___14782 + (1));
i__5770__auto___14782 = G__14783;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"small",args__14379__auto__);
}));

(dumdom.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.small.cljs$lang$applyTo = (function (seq14480){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14480));
}));


dumdom.dom.source = (function dumdom$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14784 = arguments.length;
var i__5770__auto___14785 = (0);
while(true){
if((i__5770__auto___14785 < len__5769__auto___14784)){
args__5775__auto__.push((arguments[i__5770__auto___14785]));

var G__14786 = (i__5770__auto___14785 + (1));
i__5770__auto___14785 = G__14786;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"source",args__14379__auto__);
}));

(dumdom.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.source.cljs$lang$applyTo = (function (seq14481){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14481));
}));


dumdom.dom.span = (function dumdom$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14787 = arguments.length;
var i__5770__auto___14788 = (0);
while(true){
if((i__5770__auto___14788 < len__5769__auto___14787)){
args__5775__auto__.push((arguments[i__5770__auto___14788]));

var G__14789 = (i__5770__auto___14788 + (1));
i__5770__auto___14788 = G__14789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"span",args__14379__auto__);
}));

(dumdom.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.span.cljs$lang$applyTo = (function (seq14482){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14482));
}));


dumdom.dom.strong = (function dumdom$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14790 = arguments.length;
var i__5770__auto___14791 = (0);
while(true){
if((i__5770__auto___14791 < len__5769__auto___14790)){
args__5775__auto__.push((arguments[i__5770__auto___14791]));

var G__14792 = (i__5770__auto___14791 + (1));
i__5770__auto___14791 = G__14792;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"strong",args__14379__auto__);
}));

(dumdom.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.strong.cljs$lang$applyTo = (function (seq14483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14483));
}));


dumdom.dom.style = (function dumdom$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14793 = arguments.length;
var i__5770__auto___14794 = (0);
while(true){
if((i__5770__auto___14794 < len__5769__auto___14793)){
args__5775__auto__.push((arguments[i__5770__auto___14794]));

var G__14795 = (i__5770__auto___14794 + (1));
i__5770__auto___14794 = G__14795;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"style",args__14379__auto__);
}));

(dumdom.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.style.cljs$lang$applyTo = (function (seq14484){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14484));
}));


dumdom.dom.sub = (function dumdom$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14796 = arguments.length;
var i__5770__auto___14797 = (0);
while(true){
if((i__5770__auto___14797 < len__5769__auto___14796)){
args__5775__auto__.push((arguments[i__5770__auto___14797]));

var G__14798 = (i__5770__auto___14797 + (1));
i__5770__auto___14797 = G__14798;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"sub",args__14379__auto__);
}));

(dumdom.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sub.cljs$lang$applyTo = (function (seq14485){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14485));
}));


dumdom.dom.summary = (function dumdom$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14799 = arguments.length;
var i__5770__auto___14800 = (0);
while(true){
if((i__5770__auto___14800 < len__5769__auto___14799)){
args__5775__auto__.push((arguments[i__5770__auto___14800]));

var G__14801 = (i__5770__auto___14800 + (1));
i__5770__auto___14800 = G__14801;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"summary",args__14379__auto__);
}));

(dumdom.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.summary.cljs$lang$applyTo = (function (seq14486){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14486));
}));


dumdom.dom.sup = (function dumdom$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14802 = arguments.length;
var i__5770__auto___14803 = (0);
while(true){
if((i__5770__auto___14803 < len__5769__auto___14802)){
args__5775__auto__.push((arguments[i__5770__auto___14803]));

var G__14804 = (i__5770__auto___14803 + (1));
i__5770__auto___14803 = G__14804;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"sup",args__14379__auto__);
}));

(dumdom.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sup.cljs$lang$applyTo = (function (seq14487){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14487));
}));


dumdom.dom.table = (function dumdom$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14805 = arguments.length;
var i__5770__auto___14806 = (0);
while(true){
if((i__5770__auto___14806 < len__5769__auto___14805)){
args__5775__auto__.push((arguments[i__5770__auto___14806]));

var G__14807 = (i__5770__auto___14806 + (1));
i__5770__auto___14806 = G__14807;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"table",args__14379__auto__);
}));

(dumdom.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.table.cljs$lang$applyTo = (function (seq14488){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14488));
}));


dumdom.dom.tbody = (function dumdom$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14808 = arguments.length;
var i__5770__auto___14809 = (0);
while(true){
if((i__5770__auto___14809 < len__5769__auto___14808)){
args__5775__auto__.push((arguments[i__5770__auto___14809]));

var G__14810 = (i__5770__auto___14809 + (1));
i__5770__auto___14809 = G__14810;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tbody",args__14379__auto__);
}));

(dumdom.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tbody.cljs$lang$applyTo = (function (seq14489){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14489));
}));


dumdom.dom.td = (function dumdom$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14811 = arguments.length;
var i__5770__auto___14812 = (0);
while(true){
if((i__5770__auto___14812 < len__5769__auto___14811)){
args__5775__auto__.push((arguments[i__5770__auto___14812]));

var G__14813 = (i__5770__auto___14812 + (1));
i__5770__auto___14812 = G__14813;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"td",args__14379__auto__);
}));

(dumdom.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.td.cljs$lang$applyTo = (function (seq14490){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14490));
}));


dumdom.dom.textarea = (function dumdom$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14814 = arguments.length;
var i__5770__auto___14815 = (0);
while(true){
if((i__5770__auto___14815 < len__5769__auto___14814)){
args__5775__auto__.push((arguments[i__5770__auto___14815]));

var G__14816 = (i__5770__auto___14815 + (1));
i__5770__auto___14815 = G__14816;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"textarea",args__14379__auto__);
}));

(dumdom.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.textarea.cljs$lang$applyTo = (function (seq14491){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14491));
}));


dumdom.dom.tfoot = (function dumdom$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14817 = arguments.length;
var i__5770__auto___14818 = (0);
while(true){
if((i__5770__auto___14818 < len__5769__auto___14817)){
args__5775__auto__.push((arguments[i__5770__auto___14818]));

var G__14819 = (i__5770__auto___14818 + (1));
i__5770__auto___14818 = G__14819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tfoot",args__14379__auto__);
}));

(dumdom.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tfoot.cljs$lang$applyTo = (function (seq14492){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14492));
}));


dumdom.dom.th = (function dumdom$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14820 = arguments.length;
var i__5770__auto___14821 = (0);
while(true){
if((i__5770__auto___14821 < len__5769__auto___14820)){
args__5775__auto__.push((arguments[i__5770__auto___14821]));

var G__14822 = (i__5770__auto___14821 + (1));
i__5770__auto___14821 = G__14822;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"th",args__14379__auto__);
}));

(dumdom.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.th.cljs$lang$applyTo = (function (seq14493){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14493));
}));


dumdom.dom.thead = (function dumdom$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14823 = arguments.length;
var i__5770__auto___14824 = (0);
while(true){
if((i__5770__auto___14824 < len__5769__auto___14823)){
args__5775__auto__.push((arguments[i__5770__auto___14824]));

var G__14825 = (i__5770__auto___14824 + (1));
i__5770__auto___14824 = G__14825;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"thead",args__14379__auto__);
}));

(dumdom.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.thead.cljs$lang$applyTo = (function (seq14494){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14494));
}));


dumdom.dom.time = (function dumdom$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14826 = arguments.length;
var i__5770__auto___14827 = (0);
while(true){
if((i__5770__auto___14827 < len__5769__auto___14826)){
args__5775__auto__.push((arguments[i__5770__auto___14827]));

var G__14828 = (i__5770__auto___14827 + (1));
i__5770__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"time",args__14379__auto__);
}));

(dumdom.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.time.cljs$lang$applyTo = (function (seq14495){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14495));
}));


dumdom.dom.title = (function dumdom$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14829 = arguments.length;
var i__5770__auto___14830 = (0);
while(true){
if((i__5770__auto___14830 < len__5769__auto___14829)){
args__5775__auto__.push((arguments[i__5770__auto___14830]));

var G__14831 = (i__5770__auto___14830 + (1));
i__5770__auto___14830 = G__14831;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"title",args__14379__auto__);
}));

(dumdom.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.title.cljs$lang$applyTo = (function (seq14496){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14496));
}));


dumdom.dom.tr = (function dumdom$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14832 = arguments.length;
var i__5770__auto___14833 = (0);
while(true){
if((i__5770__auto___14833 < len__5769__auto___14832)){
args__5775__auto__.push((arguments[i__5770__auto___14833]));

var G__14834 = (i__5770__auto___14833 + (1));
i__5770__auto___14833 = G__14834;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tr",args__14379__auto__);
}));

(dumdom.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tr.cljs$lang$applyTo = (function (seq14497){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14497));
}));


dumdom.dom.track = (function dumdom$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14835 = arguments.length;
var i__5770__auto___14836 = (0);
while(true){
if((i__5770__auto___14836 < len__5769__auto___14835)){
args__5775__auto__.push((arguments[i__5770__auto___14836]));

var G__14837 = (i__5770__auto___14836 + (1));
i__5770__auto___14836 = G__14837;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"track",args__14379__auto__);
}));

(dumdom.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.track.cljs$lang$applyTo = (function (seq14498){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14498));
}));


dumdom.dom.u = (function dumdom$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14838 = arguments.length;
var i__5770__auto___14839 = (0);
while(true){
if((i__5770__auto___14839 < len__5769__auto___14838)){
args__5775__auto__.push((arguments[i__5770__auto___14839]));

var G__14840 = (i__5770__auto___14839 + (1));
i__5770__auto___14839 = G__14840;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"u",args__14379__auto__);
}));

(dumdom.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.u.cljs$lang$applyTo = (function (seq14499){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14499));
}));


dumdom.dom.ul = (function dumdom$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14841 = arguments.length;
var i__5770__auto___14842 = (0);
while(true){
if((i__5770__auto___14842 < len__5769__auto___14841)){
args__5775__auto__.push((arguments[i__5770__auto___14842]));

var G__14843 = (i__5770__auto___14842 + (1));
i__5770__auto___14842 = G__14843;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ul",args__14379__auto__);
}));

(dumdom.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ul.cljs$lang$applyTo = (function (seq14500){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14500));
}));


dumdom.dom.var$ = (function dumdom$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14844 = arguments.length;
var i__5770__auto___14845 = (0);
while(true){
if((i__5770__auto___14845 < len__5769__auto___14844)){
args__5775__auto__.push((arguments[i__5770__auto___14845]));

var G__14846 = (i__5770__auto___14845 + (1));
i__5770__auto___14845 = G__14846;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"var",args__14379__auto__);
}));

(dumdom.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.var$.cljs$lang$applyTo = (function (seq14501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14501));
}));


dumdom.dom.video = (function dumdom$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14847 = arguments.length;
var i__5770__auto___14848 = (0);
while(true){
if((i__5770__auto___14848 < len__5769__auto___14847)){
args__5775__auto__.push((arguments[i__5770__auto___14848]));

var G__14849 = (i__5770__auto___14848 + (1));
i__5770__auto___14848 = G__14849;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"video",args__14379__auto__);
}));

(dumdom.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.video.cljs$lang$applyTo = (function (seq14502){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14502));
}));


dumdom.dom.wbr = (function dumdom$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14850 = arguments.length;
var i__5770__auto___14851 = (0);
while(true){
if((i__5770__auto___14851 < len__5769__auto___14850)){
args__5775__auto__.push((arguments[i__5770__auto___14851]));

var G__14852 = (i__5770__auto___14851 + (1));
i__5770__auto___14851 = G__14852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"wbr",args__14379__auto__);
}));

(dumdom.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.wbr.cljs$lang$applyTo = (function (seq14503){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14503));
}));


dumdom.dom.circle = (function dumdom$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14853 = arguments.length;
var i__5770__auto___14854 = (0);
while(true){
if((i__5770__auto___14854 < len__5769__auto___14853)){
args__5775__auto__.push((arguments[i__5770__auto___14854]));

var G__14855 = (i__5770__auto___14854 + (1));
i__5770__auto___14854 = G__14855;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"circle",args__14379__auto__);
}));

(dumdom.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.circle.cljs$lang$applyTo = (function (seq14504){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14504));
}));


dumdom.dom.clipPath = (function dumdom$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14856 = arguments.length;
var i__5770__auto___14857 = (0);
while(true){
if((i__5770__auto___14857 < len__5769__auto___14856)){
args__5775__auto__.push((arguments[i__5770__auto___14857]));

var G__14858 = (i__5770__auto___14857 + (1));
i__5770__auto___14857 = G__14858;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"clipPath",args__14379__auto__);
}));

(dumdom.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.clipPath.cljs$lang$applyTo = (function (seq14505){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14505));
}));


dumdom.dom.defs = (function dumdom$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14859 = arguments.length;
var i__5770__auto___14860 = (0);
while(true){
if((i__5770__auto___14860 < len__5769__auto___14859)){
args__5775__auto__.push((arguments[i__5770__auto___14860]));

var G__14861 = (i__5770__auto___14860 + (1));
i__5770__auto___14860 = G__14861;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"defs",args__14379__auto__);
}));

(dumdom.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.defs.cljs$lang$applyTo = (function (seq14506){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14506));
}));


dumdom.dom.ellipse = (function dumdom$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14862 = arguments.length;
var i__5770__auto___14863 = (0);
while(true){
if((i__5770__auto___14863 < len__5769__auto___14862)){
args__5775__auto__.push((arguments[i__5770__auto___14863]));

var G__14864 = (i__5770__auto___14863 + (1));
i__5770__auto___14863 = G__14864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ellipse",args__14379__auto__);
}));

(dumdom.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ellipse.cljs$lang$applyTo = (function (seq14507){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14507));
}));


dumdom.dom.g = (function dumdom$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14865 = arguments.length;
var i__5770__auto___14866 = (0);
while(true){
if((i__5770__auto___14866 < len__5769__auto___14865)){
args__5775__auto__.push((arguments[i__5770__auto___14866]));

var G__14867 = (i__5770__auto___14866 + (1));
i__5770__auto___14866 = G__14867;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"g",args__14379__auto__);
}));

(dumdom.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.g.cljs$lang$applyTo = (function (seq14508){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14508));
}));


dumdom.dom.image = (function dumdom$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14868 = arguments.length;
var i__5770__auto___14869 = (0);
while(true){
if((i__5770__auto___14869 < len__5769__auto___14868)){
args__5775__auto__.push((arguments[i__5770__auto___14869]));

var G__14870 = (i__5770__auto___14869 + (1));
i__5770__auto___14869 = G__14870;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"image",args__14379__auto__);
}));

(dumdom.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.image.cljs$lang$applyTo = (function (seq14509){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14509));
}));


dumdom.dom.line = (function dumdom$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14871 = arguments.length;
var i__5770__auto___14872 = (0);
while(true){
if((i__5770__auto___14872 < len__5769__auto___14871)){
args__5775__auto__.push((arguments[i__5770__auto___14872]));

var G__14873 = (i__5770__auto___14872 + (1));
i__5770__auto___14872 = G__14873;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"line",args__14379__auto__);
}));

(dumdom.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.line.cljs$lang$applyTo = (function (seq14510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14510));
}));


dumdom.dom.linearGradient = (function dumdom$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14874 = arguments.length;
var i__5770__auto___14875 = (0);
while(true){
if((i__5770__auto___14875 < len__5769__auto___14874)){
args__5775__auto__.push((arguments[i__5770__auto___14875]));

var G__14876 = (i__5770__auto___14875 + (1));
i__5770__auto___14875 = G__14876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"linearGradient",args__14379__auto__);
}));

(dumdom.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.linearGradient.cljs$lang$applyTo = (function (seq14511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14511));
}));


dumdom.dom.mask = (function dumdom$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14877 = arguments.length;
var i__5770__auto___14878 = (0);
while(true){
if((i__5770__auto___14878 < len__5769__auto___14877)){
args__5775__auto__.push((arguments[i__5770__auto___14878]));

var G__14879 = (i__5770__auto___14878 + (1));
i__5770__auto___14878 = G__14879;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"mask",args__14379__auto__);
}));

(dumdom.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mask.cljs$lang$applyTo = (function (seq14512){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14512));
}));


dumdom.dom.path = (function dumdom$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14880 = arguments.length;
var i__5770__auto___14881 = (0);
while(true){
if((i__5770__auto___14881 < len__5769__auto___14880)){
args__5775__auto__.push((arguments[i__5770__auto___14881]));

var G__14882 = (i__5770__auto___14881 + (1));
i__5770__auto___14881 = G__14882;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"path",args__14379__auto__);
}));

(dumdom.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.path.cljs$lang$applyTo = (function (seq14513){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14513));
}));


dumdom.dom.pattern = (function dumdom$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14883 = arguments.length;
var i__5770__auto___14884 = (0);
while(true){
if((i__5770__auto___14884 < len__5769__auto___14883)){
args__5775__auto__.push((arguments[i__5770__auto___14884]));

var G__14885 = (i__5770__auto___14884 + (1));
i__5770__auto___14884 = G__14885;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"pattern",args__14379__auto__);
}));

(dumdom.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pattern.cljs$lang$applyTo = (function (seq14514){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14514));
}));


dumdom.dom.polygon = (function dumdom$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14886 = arguments.length;
var i__5770__auto___14887 = (0);
while(true){
if((i__5770__auto___14887 < len__5769__auto___14886)){
args__5775__auto__.push((arguments[i__5770__auto___14887]));

var G__14888 = (i__5770__auto___14887 + (1));
i__5770__auto___14887 = G__14888;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"polygon",args__14379__auto__);
}));

(dumdom.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polygon.cljs$lang$applyTo = (function (seq14515){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14515));
}));


dumdom.dom.polyline = (function dumdom$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14889 = arguments.length;
var i__5770__auto___14890 = (0);
while(true){
if((i__5770__auto___14890 < len__5769__auto___14889)){
args__5775__auto__.push((arguments[i__5770__auto___14890]));

var G__14891 = (i__5770__auto___14890 + (1));
i__5770__auto___14890 = G__14891;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"polyline",args__14379__auto__);
}));

(dumdom.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polyline.cljs$lang$applyTo = (function (seq14516){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14516));
}));


dumdom.dom.radialGradient = (function dumdom$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14892 = arguments.length;
var i__5770__auto___14893 = (0);
while(true){
if((i__5770__auto___14893 < len__5769__auto___14892)){
args__5775__auto__.push((arguments[i__5770__auto___14893]));

var G__14894 = (i__5770__auto___14893 + (1));
i__5770__auto___14893 = G__14894;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"radialGradient",args__14379__auto__);
}));

(dumdom.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.radialGradient.cljs$lang$applyTo = (function (seq14517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14517));
}));


dumdom.dom.rect = (function dumdom$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14895 = arguments.length;
var i__5770__auto___14896 = (0);
while(true){
if((i__5770__auto___14896 < len__5769__auto___14895)){
args__5775__auto__.push((arguments[i__5770__auto___14896]));

var G__14897 = (i__5770__auto___14896 + (1));
i__5770__auto___14896 = G__14897;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"rect",args__14379__auto__);
}));

(dumdom.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rect.cljs$lang$applyTo = (function (seq14518){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14518));
}));


dumdom.dom.stop = (function dumdom$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14898 = arguments.length;
var i__5770__auto___14899 = (0);
while(true){
if((i__5770__auto___14899 < len__5769__auto___14898)){
args__5775__auto__.push((arguments[i__5770__auto___14899]));

var G__14900 = (i__5770__auto___14899 + (1));
i__5770__auto___14899 = G__14900;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"stop",args__14379__auto__);
}));

(dumdom.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.stop.cljs$lang$applyTo = (function (seq14519){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14519));
}));


dumdom.dom.svg = (function dumdom$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14901 = arguments.length;
var i__5770__auto___14902 = (0);
while(true){
if((i__5770__auto___14902 < len__5769__auto___14901)){
args__5775__auto__.push((arguments[i__5770__auto___14902]));

var G__14903 = (i__5770__auto___14902 + (1));
i__5770__auto___14902 = G__14903;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"svg",args__14379__auto__);
}));

(dumdom.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.svg.cljs$lang$applyTo = (function (seq14520){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14520));
}));


dumdom.dom.text = (function dumdom$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14904 = arguments.length;
var i__5770__auto___14905 = (0);
while(true){
if((i__5770__auto___14905 < len__5769__auto___14904)){
args__5775__auto__.push((arguments[i__5770__auto___14905]));

var G__14906 = (i__5770__auto___14905 + (1));
i__5770__auto___14905 = G__14906;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"text",args__14379__auto__);
}));

(dumdom.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.text.cljs$lang$applyTo = (function (seq14521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14521));
}));


dumdom.dom.tspan = (function dumdom$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14907 = arguments.length;
var i__5770__auto___14908 = (0);
while(true){
if((i__5770__auto___14908 < len__5769__auto___14907)){
args__5775__auto__.push((arguments[i__5770__auto___14908]));

var G__14909 = (i__5770__auto___14908 + (1));
i__5770__auto___14908 = G__14909;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__14379__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tspan",args__14379__auto__);
}));

(dumdom.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tspan.cljs$lang$applyTo = (function (seq14522){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14522));
}));


dumdom.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image],[dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image]);
