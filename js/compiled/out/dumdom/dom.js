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
var len__5769__auto___13111 = arguments.length;
var i__5770__auto___13112 = (0);
while(true){
if((i__5770__auto___13112 < len__5769__auto___13111)){
args__5775__auto__.push((arguments[i__5770__auto___13112]));

var G__13113 = (i__5770__auto___13112 + (1));
i__5770__auto___13112 = G__13113;
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
(dumdom.dom.el.cljs$lang$applyTo = (function (seq13108){
var G__13109 = cljs.core.first.call(null,seq13108);
var seq13108__$1 = cljs.core.next.call(null,seq13108);
var G__13110 = cljs.core.first.call(null,seq13108__$1);
var seq13108__$2 = cljs.core.next.call(null,seq13108__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13109,G__13110,seq13108__$2);
}));

dumdom.dom.a = (function dumdom$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13243 = arguments.length;
var i__5770__auto___13244 = (0);
while(true){
if((i__5770__auto___13244 < len__5769__auto___13243)){
args__5775__auto__.push((arguments[i__5770__auto___13244]));

var G__13245 = (i__5770__auto___13244 + (1));
i__5770__auto___13244 = G__13245;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"a",args__13099__auto__);
}));

(dumdom.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.a.cljs$lang$applyTo = (function (seq13114){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13114));
}));


dumdom.dom.abbr = (function dumdom$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13246 = arguments.length;
var i__5770__auto___13247 = (0);
while(true){
if((i__5770__auto___13247 < len__5769__auto___13246)){
args__5775__auto__.push((arguments[i__5770__auto___13247]));

var G__13248 = (i__5770__auto___13247 + (1));
i__5770__auto___13247 = G__13248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"abbr",args__13099__auto__);
}));

(dumdom.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.abbr.cljs$lang$applyTo = (function (seq13115){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13115));
}));


dumdom.dom.address = (function dumdom$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13249 = arguments.length;
var i__5770__auto___13250 = (0);
while(true){
if((i__5770__auto___13250 < len__5769__auto___13249)){
args__5775__auto__.push((arguments[i__5770__auto___13250]));

var G__13251 = (i__5770__auto___13250 + (1));
i__5770__auto___13250 = G__13251;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"address",args__13099__auto__);
}));

(dumdom.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.address.cljs$lang$applyTo = (function (seq13116){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13116));
}));


dumdom.dom.area = (function dumdom$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13252 = arguments.length;
var i__5770__auto___13253 = (0);
while(true){
if((i__5770__auto___13253 < len__5769__auto___13252)){
args__5775__auto__.push((arguments[i__5770__auto___13253]));

var G__13254 = (i__5770__auto___13253 + (1));
i__5770__auto___13253 = G__13254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"area",args__13099__auto__);
}));

(dumdom.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.area.cljs$lang$applyTo = (function (seq13117){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13117));
}));


dumdom.dom.article = (function dumdom$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13255 = arguments.length;
var i__5770__auto___13256 = (0);
while(true){
if((i__5770__auto___13256 < len__5769__auto___13255)){
args__5775__auto__.push((arguments[i__5770__auto___13256]));

var G__13257 = (i__5770__auto___13256 + (1));
i__5770__auto___13256 = G__13257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"article",args__13099__auto__);
}));

(dumdom.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.article.cljs$lang$applyTo = (function (seq13118){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13118));
}));


dumdom.dom.aside = (function dumdom$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13258 = arguments.length;
var i__5770__auto___13259 = (0);
while(true){
if((i__5770__auto___13259 < len__5769__auto___13258)){
args__5775__auto__.push((arguments[i__5770__auto___13259]));

var G__13260 = (i__5770__auto___13259 + (1));
i__5770__auto___13259 = G__13260;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"aside",args__13099__auto__);
}));

(dumdom.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.aside.cljs$lang$applyTo = (function (seq13119){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13119));
}));


dumdom.dom.audio = (function dumdom$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13261 = arguments.length;
var i__5770__auto___13262 = (0);
while(true){
if((i__5770__auto___13262 < len__5769__auto___13261)){
args__5775__auto__.push((arguments[i__5770__auto___13262]));

var G__13263 = (i__5770__auto___13262 + (1));
i__5770__auto___13262 = G__13263;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"audio",args__13099__auto__);
}));

(dumdom.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.audio.cljs$lang$applyTo = (function (seq13120){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13120));
}));


dumdom.dom.b = (function dumdom$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13264 = arguments.length;
var i__5770__auto___13265 = (0);
while(true){
if((i__5770__auto___13265 < len__5769__auto___13264)){
args__5775__auto__.push((arguments[i__5770__auto___13265]));

var G__13266 = (i__5770__auto___13265 + (1));
i__5770__auto___13265 = G__13266;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"b",args__13099__auto__);
}));

(dumdom.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.b.cljs$lang$applyTo = (function (seq13121){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13121));
}));


dumdom.dom.base = (function dumdom$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13267 = arguments.length;
var i__5770__auto___13268 = (0);
while(true){
if((i__5770__auto___13268 < len__5769__auto___13267)){
args__5775__auto__.push((arguments[i__5770__auto___13268]));

var G__13269 = (i__5770__auto___13268 + (1));
i__5770__auto___13268 = G__13269;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"base",args__13099__auto__);
}));

(dumdom.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.base.cljs$lang$applyTo = (function (seq13122){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13122));
}));


dumdom.dom.bdi = (function dumdom$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13270 = arguments.length;
var i__5770__auto___13271 = (0);
while(true){
if((i__5770__auto___13271 < len__5769__auto___13270)){
args__5775__auto__.push((arguments[i__5770__auto___13271]));

var G__13272 = (i__5770__auto___13271 + (1));
i__5770__auto___13271 = G__13272;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"bdi",args__13099__auto__);
}));

(dumdom.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdi.cljs$lang$applyTo = (function (seq13123){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13123));
}));


dumdom.dom.bdo = (function dumdom$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13273 = arguments.length;
var i__5770__auto___13274 = (0);
while(true){
if((i__5770__auto___13274 < len__5769__auto___13273)){
args__5775__auto__.push((arguments[i__5770__auto___13274]));

var G__13275 = (i__5770__auto___13274 + (1));
i__5770__auto___13274 = G__13275;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"bdo",args__13099__auto__);
}));

(dumdom.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.bdo.cljs$lang$applyTo = (function (seq13124){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13124));
}));


dumdom.dom.big = (function dumdom$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13276 = arguments.length;
var i__5770__auto___13277 = (0);
while(true){
if((i__5770__auto___13277 < len__5769__auto___13276)){
args__5775__auto__.push((arguments[i__5770__auto___13277]));

var G__13278 = (i__5770__auto___13277 + (1));
i__5770__auto___13277 = G__13278;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"big",args__13099__auto__);
}));

(dumdom.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.big.cljs$lang$applyTo = (function (seq13125){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13125));
}));


dumdom.dom.blockquote = (function dumdom$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13279 = arguments.length;
var i__5770__auto___13280 = (0);
while(true){
if((i__5770__auto___13280 < len__5769__auto___13279)){
args__5775__auto__.push((arguments[i__5770__auto___13280]));

var G__13281 = (i__5770__auto___13280 + (1));
i__5770__auto___13280 = G__13281;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"blockquote",args__13099__auto__);
}));

(dumdom.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.blockquote.cljs$lang$applyTo = (function (seq13126){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13126));
}));


dumdom.dom.body = (function dumdom$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13282 = arguments.length;
var i__5770__auto___13283 = (0);
while(true){
if((i__5770__auto___13283 < len__5769__auto___13282)){
args__5775__auto__.push((arguments[i__5770__auto___13283]));

var G__13284 = (i__5770__auto___13283 + (1));
i__5770__auto___13283 = G__13284;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"body",args__13099__auto__);
}));

(dumdom.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.body.cljs$lang$applyTo = (function (seq13127){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13127));
}));


dumdom.dom.br = (function dumdom$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13285 = arguments.length;
var i__5770__auto___13286 = (0);
while(true){
if((i__5770__auto___13286 < len__5769__auto___13285)){
args__5775__auto__.push((arguments[i__5770__auto___13286]));

var G__13287 = (i__5770__auto___13286 + (1));
i__5770__auto___13286 = G__13287;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"br",args__13099__auto__);
}));

(dumdom.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.br.cljs$lang$applyTo = (function (seq13128){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13128));
}));


dumdom.dom.button = (function dumdom$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13288 = arguments.length;
var i__5770__auto___13289 = (0);
while(true){
if((i__5770__auto___13289 < len__5769__auto___13288)){
args__5775__auto__.push((arguments[i__5770__auto___13289]));

var G__13290 = (i__5770__auto___13289 + (1));
i__5770__auto___13289 = G__13290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"button",args__13099__auto__);
}));

(dumdom.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.button.cljs$lang$applyTo = (function (seq13129){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13129));
}));


dumdom.dom.canvas = (function dumdom$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13291 = arguments.length;
var i__5770__auto___13292 = (0);
while(true){
if((i__5770__auto___13292 < len__5769__auto___13291)){
args__5775__auto__.push((arguments[i__5770__auto___13292]));

var G__13293 = (i__5770__auto___13292 + (1));
i__5770__auto___13292 = G__13293;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"canvas",args__13099__auto__);
}));

(dumdom.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.canvas.cljs$lang$applyTo = (function (seq13130){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13130));
}));


dumdom.dom.caption = (function dumdom$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13294 = arguments.length;
var i__5770__auto___13295 = (0);
while(true){
if((i__5770__auto___13295 < len__5769__auto___13294)){
args__5775__auto__.push((arguments[i__5770__auto___13295]));

var G__13296 = (i__5770__auto___13295 + (1));
i__5770__auto___13295 = G__13296;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"caption",args__13099__auto__);
}));

(dumdom.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.caption.cljs$lang$applyTo = (function (seq13131){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13131));
}));


dumdom.dom.cite = (function dumdom$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13297 = arguments.length;
var i__5770__auto___13298 = (0);
while(true){
if((i__5770__auto___13298 < len__5769__auto___13297)){
args__5775__auto__.push((arguments[i__5770__auto___13298]));

var G__13299 = (i__5770__auto___13298 + (1));
i__5770__auto___13298 = G__13299;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"cite",args__13099__auto__);
}));

(dumdom.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.cite.cljs$lang$applyTo = (function (seq13132){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13132));
}));


dumdom.dom.code = (function dumdom$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13300 = arguments.length;
var i__5770__auto___13301 = (0);
while(true){
if((i__5770__auto___13301 < len__5769__auto___13300)){
args__5775__auto__.push((arguments[i__5770__auto___13301]));

var G__13302 = (i__5770__auto___13301 + (1));
i__5770__auto___13301 = G__13302;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"code",args__13099__auto__);
}));

(dumdom.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.code.cljs$lang$applyTo = (function (seq13133){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13133));
}));


dumdom.dom.col = (function dumdom$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13303 = arguments.length;
var i__5770__auto___13304 = (0);
while(true){
if((i__5770__auto___13304 < len__5769__auto___13303)){
args__5775__auto__.push((arguments[i__5770__auto___13304]));

var G__13305 = (i__5770__auto___13304 + (1));
i__5770__auto___13304 = G__13305;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"col",args__13099__auto__);
}));

(dumdom.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.col.cljs$lang$applyTo = (function (seq13134){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13134));
}));


dumdom.dom.colgroup = (function dumdom$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13306 = arguments.length;
var i__5770__auto___13307 = (0);
while(true){
if((i__5770__auto___13307 < len__5769__auto___13306)){
args__5775__auto__.push((arguments[i__5770__auto___13307]));

var G__13308 = (i__5770__auto___13307 + (1));
i__5770__auto___13307 = G__13308;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"colgroup",args__13099__auto__);
}));

(dumdom.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.colgroup.cljs$lang$applyTo = (function (seq13135){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13135));
}));


dumdom.dom.data = (function dumdom$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13309 = arguments.length;
var i__5770__auto___13310 = (0);
while(true){
if((i__5770__auto___13310 < len__5769__auto___13309)){
args__5775__auto__.push((arguments[i__5770__auto___13310]));

var G__13311 = (i__5770__auto___13310 + (1));
i__5770__auto___13310 = G__13311;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"data",args__13099__auto__);
}));

(dumdom.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.data.cljs$lang$applyTo = (function (seq13136){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13136));
}));


dumdom.dom.datalist = (function dumdom$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13312 = arguments.length;
var i__5770__auto___13313 = (0);
while(true){
if((i__5770__auto___13313 < len__5769__auto___13312)){
args__5775__auto__.push((arguments[i__5770__auto___13313]));

var G__13314 = (i__5770__auto___13313 + (1));
i__5770__auto___13313 = G__13314;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"datalist",args__13099__auto__);
}));

(dumdom.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.datalist.cljs$lang$applyTo = (function (seq13137){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13137));
}));


dumdom.dom.dd = (function dumdom$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13315 = arguments.length;
var i__5770__auto___13316 = (0);
while(true){
if((i__5770__auto___13316 < len__5769__auto___13315)){
args__5775__auto__.push((arguments[i__5770__auto___13316]));

var G__13317 = (i__5770__auto___13316 + (1));
i__5770__auto___13316 = G__13317;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dd",args__13099__auto__);
}));

(dumdom.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dd.cljs$lang$applyTo = (function (seq13138){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13138));
}));


dumdom.dom.del = (function dumdom$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13318 = arguments.length;
var i__5770__auto___13319 = (0);
while(true){
if((i__5770__auto___13319 < len__5769__auto___13318)){
args__5775__auto__.push((arguments[i__5770__auto___13319]));

var G__13320 = (i__5770__auto___13319 + (1));
i__5770__auto___13319 = G__13320;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"del",args__13099__auto__);
}));

(dumdom.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.del.cljs$lang$applyTo = (function (seq13139){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13139));
}));


dumdom.dom.details = (function dumdom$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13321 = arguments.length;
var i__5770__auto___13322 = (0);
while(true){
if((i__5770__auto___13322 < len__5769__auto___13321)){
args__5775__auto__.push((arguments[i__5770__auto___13322]));

var G__13323 = (i__5770__auto___13322 + (1));
i__5770__auto___13322 = G__13323;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"details",args__13099__auto__);
}));

(dumdom.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.details.cljs$lang$applyTo = (function (seq13140){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13140));
}));


dumdom.dom.dfn = (function dumdom$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13324 = arguments.length;
var i__5770__auto___13325 = (0);
while(true){
if((i__5770__auto___13325 < len__5769__auto___13324)){
args__5775__auto__.push((arguments[i__5770__auto___13325]));

var G__13326 = (i__5770__auto___13325 + (1));
i__5770__auto___13325 = G__13326;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dfn",args__13099__auto__);
}));

(dumdom.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dfn.cljs$lang$applyTo = (function (seq13141){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13141));
}));


dumdom.dom.div = (function dumdom$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13327 = arguments.length;
var i__5770__auto___13328 = (0);
while(true){
if((i__5770__auto___13328 < len__5769__auto___13327)){
args__5775__auto__.push((arguments[i__5770__auto___13328]));

var G__13329 = (i__5770__auto___13328 + (1));
i__5770__auto___13328 = G__13329;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"div",args__13099__auto__);
}));

(dumdom.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.div.cljs$lang$applyTo = (function (seq13142){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13142));
}));


dumdom.dom.dl = (function dumdom$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13330 = arguments.length;
var i__5770__auto___13331 = (0);
while(true){
if((i__5770__auto___13331 < len__5769__auto___13330)){
args__5775__auto__.push((arguments[i__5770__auto___13331]));

var G__13332 = (i__5770__auto___13331 + (1));
i__5770__auto___13331 = G__13332;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dl",args__13099__auto__);
}));

(dumdom.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dl.cljs$lang$applyTo = (function (seq13143){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13143));
}));


dumdom.dom.dt = (function dumdom$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13333 = arguments.length;
var i__5770__auto___13334 = (0);
while(true){
if((i__5770__auto___13334 < len__5769__auto___13333)){
args__5775__auto__.push((arguments[i__5770__auto___13334]));

var G__13335 = (i__5770__auto___13334 + (1));
i__5770__auto___13334 = G__13335;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"dt",args__13099__auto__);
}));

(dumdom.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.dt.cljs$lang$applyTo = (function (seq13144){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13144));
}));


dumdom.dom.em = (function dumdom$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13336 = arguments.length;
var i__5770__auto___13337 = (0);
while(true){
if((i__5770__auto___13337 < len__5769__auto___13336)){
args__5775__auto__.push((arguments[i__5770__auto___13337]));

var G__13338 = (i__5770__auto___13337 + (1));
i__5770__auto___13337 = G__13338;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"em",args__13099__auto__);
}));

(dumdom.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.em.cljs$lang$applyTo = (function (seq13145){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13145));
}));


dumdom.dom.embed = (function dumdom$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13339 = arguments.length;
var i__5770__auto___13340 = (0);
while(true){
if((i__5770__auto___13340 < len__5769__auto___13339)){
args__5775__auto__.push((arguments[i__5770__auto___13340]));

var G__13341 = (i__5770__auto___13340 + (1));
i__5770__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"embed",args__13099__auto__);
}));

(dumdom.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.embed.cljs$lang$applyTo = (function (seq13146){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13146));
}));


dumdom.dom.fieldset = (function dumdom$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13342 = arguments.length;
var i__5770__auto___13343 = (0);
while(true){
if((i__5770__auto___13343 < len__5769__auto___13342)){
args__5775__auto__.push((arguments[i__5770__auto___13343]));

var G__13344 = (i__5770__auto___13343 + (1));
i__5770__auto___13343 = G__13344;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"fieldset",args__13099__auto__);
}));

(dumdom.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.fieldset.cljs$lang$applyTo = (function (seq13147){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13147));
}));


dumdom.dom.figcaption = (function dumdom$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13345 = arguments.length;
var i__5770__auto___13346 = (0);
while(true){
if((i__5770__auto___13346 < len__5769__auto___13345)){
args__5775__auto__.push((arguments[i__5770__auto___13346]));

var G__13347 = (i__5770__auto___13346 + (1));
i__5770__auto___13346 = G__13347;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"figcaption",args__13099__auto__);
}));

(dumdom.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figcaption.cljs$lang$applyTo = (function (seq13148){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13148));
}));


dumdom.dom.figure = (function dumdom$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13348 = arguments.length;
var i__5770__auto___13349 = (0);
while(true){
if((i__5770__auto___13349 < len__5769__auto___13348)){
args__5775__auto__.push((arguments[i__5770__auto___13349]));

var G__13350 = (i__5770__auto___13349 + (1));
i__5770__auto___13349 = G__13350;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"figure",args__13099__auto__);
}));

(dumdom.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.figure.cljs$lang$applyTo = (function (seq13149){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13149));
}));


dumdom.dom.footer = (function dumdom$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13351 = arguments.length;
var i__5770__auto___13352 = (0);
while(true){
if((i__5770__auto___13352 < len__5769__auto___13351)){
args__5775__auto__.push((arguments[i__5770__auto___13352]));

var G__13353 = (i__5770__auto___13352 + (1));
i__5770__auto___13352 = G__13353;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"footer",args__13099__auto__);
}));

(dumdom.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.footer.cljs$lang$applyTo = (function (seq13150){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13150));
}));


dumdom.dom.form = (function dumdom$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13354 = arguments.length;
var i__5770__auto___13355 = (0);
while(true){
if((i__5770__auto___13355 < len__5769__auto___13354)){
args__5775__auto__.push((arguments[i__5770__auto___13355]));

var G__13356 = (i__5770__auto___13355 + (1));
i__5770__auto___13355 = G__13356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"form",args__13099__auto__);
}));

(dumdom.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.form.cljs$lang$applyTo = (function (seq13151){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13151));
}));


dumdom.dom.h1 = (function dumdom$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13357 = arguments.length;
var i__5770__auto___13358 = (0);
while(true){
if((i__5770__auto___13358 < len__5769__auto___13357)){
args__5775__auto__.push((arguments[i__5770__auto___13358]));

var G__13359 = (i__5770__auto___13358 + (1));
i__5770__auto___13358 = G__13359;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h1",args__13099__auto__);
}));

(dumdom.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h1.cljs$lang$applyTo = (function (seq13152){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13152));
}));


dumdom.dom.h2 = (function dumdom$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13360 = arguments.length;
var i__5770__auto___13361 = (0);
while(true){
if((i__5770__auto___13361 < len__5769__auto___13360)){
args__5775__auto__.push((arguments[i__5770__auto___13361]));

var G__13362 = (i__5770__auto___13361 + (1));
i__5770__auto___13361 = G__13362;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h2",args__13099__auto__);
}));

(dumdom.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h2.cljs$lang$applyTo = (function (seq13153){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13153));
}));


dumdom.dom.h3 = (function dumdom$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13363 = arguments.length;
var i__5770__auto___13364 = (0);
while(true){
if((i__5770__auto___13364 < len__5769__auto___13363)){
args__5775__auto__.push((arguments[i__5770__auto___13364]));

var G__13365 = (i__5770__auto___13364 + (1));
i__5770__auto___13364 = G__13365;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h3",args__13099__auto__);
}));

(dumdom.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h3.cljs$lang$applyTo = (function (seq13154){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13154));
}));


dumdom.dom.h4 = (function dumdom$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13366 = arguments.length;
var i__5770__auto___13367 = (0);
while(true){
if((i__5770__auto___13367 < len__5769__auto___13366)){
args__5775__auto__.push((arguments[i__5770__auto___13367]));

var G__13368 = (i__5770__auto___13367 + (1));
i__5770__auto___13367 = G__13368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h4",args__13099__auto__);
}));

(dumdom.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h4.cljs$lang$applyTo = (function (seq13155){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13155));
}));


dumdom.dom.h5 = (function dumdom$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13369 = arguments.length;
var i__5770__auto___13370 = (0);
while(true){
if((i__5770__auto___13370 < len__5769__auto___13369)){
args__5775__auto__.push((arguments[i__5770__auto___13370]));

var G__13371 = (i__5770__auto___13370 + (1));
i__5770__auto___13370 = G__13371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h5",args__13099__auto__);
}));

(dumdom.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h5.cljs$lang$applyTo = (function (seq13156){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13156));
}));


dumdom.dom.h6 = (function dumdom$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13372 = arguments.length;
var i__5770__auto___13373 = (0);
while(true){
if((i__5770__auto___13373 < len__5769__auto___13372)){
args__5775__auto__.push((arguments[i__5770__auto___13373]));

var G__13374 = (i__5770__auto___13373 + (1));
i__5770__auto___13373 = G__13374;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"h6",args__13099__auto__);
}));

(dumdom.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.h6.cljs$lang$applyTo = (function (seq13157){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13157));
}));


dumdom.dom.head = (function dumdom$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13375 = arguments.length;
var i__5770__auto___13376 = (0);
while(true){
if((i__5770__auto___13376 < len__5769__auto___13375)){
args__5775__auto__.push((arguments[i__5770__auto___13376]));

var G__13377 = (i__5770__auto___13376 + (1));
i__5770__auto___13376 = G__13377;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"head",args__13099__auto__);
}));

(dumdom.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.head.cljs$lang$applyTo = (function (seq13158){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13158));
}));


dumdom.dom.header = (function dumdom$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13378 = arguments.length;
var i__5770__auto___13379 = (0);
while(true){
if((i__5770__auto___13379 < len__5769__auto___13378)){
args__5775__auto__.push((arguments[i__5770__auto___13379]));

var G__13380 = (i__5770__auto___13379 + (1));
i__5770__auto___13379 = G__13380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"header",args__13099__auto__);
}));

(dumdom.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.header.cljs$lang$applyTo = (function (seq13159){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13159));
}));


dumdom.dom.hr = (function dumdom$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13381 = arguments.length;
var i__5770__auto___13382 = (0);
while(true){
if((i__5770__auto___13382 < len__5769__auto___13381)){
args__5775__auto__.push((arguments[i__5770__auto___13382]));

var G__13383 = (i__5770__auto___13382 + (1));
i__5770__auto___13382 = G__13383;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"hr",args__13099__auto__);
}));

(dumdom.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.hr.cljs$lang$applyTo = (function (seq13160){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13160));
}));


dumdom.dom.html = (function dumdom$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13384 = arguments.length;
var i__5770__auto___13385 = (0);
while(true){
if((i__5770__auto___13385 < len__5769__auto___13384)){
args__5775__auto__.push((arguments[i__5770__auto___13385]));

var G__13386 = (i__5770__auto___13385 + (1));
i__5770__auto___13385 = G__13386;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"html",args__13099__auto__);
}));

(dumdom.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.html.cljs$lang$applyTo = (function (seq13161){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13161));
}));


dumdom.dom.i = (function dumdom$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13387 = arguments.length;
var i__5770__auto___13388 = (0);
while(true){
if((i__5770__auto___13388 < len__5769__auto___13387)){
args__5775__auto__.push((arguments[i__5770__auto___13388]));

var G__13389 = (i__5770__auto___13388 + (1));
i__5770__auto___13388 = G__13389;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"i",args__13099__auto__);
}));

(dumdom.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.i.cljs$lang$applyTo = (function (seq13162){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13162));
}));


dumdom.dom.iframe = (function dumdom$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13390 = arguments.length;
var i__5770__auto___13391 = (0);
while(true){
if((i__5770__auto___13391 < len__5769__auto___13390)){
args__5775__auto__.push((arguments[i__5770__auto___13391]));

var G__13392 = (i__5770__auto___13391 + (1));
i__5770__auto___13391 = G__13392;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"iframe",args__13099__auto__);
}));

(dumdom.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.iframe.cljs$lang$applyTo = (function (seq13163){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13163));
}));


dumdom.dom.img = (function dumdom$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13393 = arguments.length;
var i__5770__auto___13394 = (0);
while(true){
if((i__5770__auto___13394 < len__5769__auto___13393)){
args__5775__auto__.push((arguments[i__5770__auto___13394]));

var G__13395 = (i__5770__auto___13394 + (1));
i__5770__auto___13394 = G__13395;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"img",args__13099__auto__);
}));

(dumdom.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.img.cljs$lang$applyTo = (function (seq13164){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13164));
}));


dumdom.dom.input = (function dumdom$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13396 = arguments.length;
var i__5770__auto___13397 = (0);
while(true){
if((i__5770__auto___13397 < len__5769__auto___13396)){
args__5775__auto__.push((arguments[i__5770__auto___13397]));

var G__13398 = (i__5770__auto___13397 + (1));
i__5770__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"input",args__13099__auto__);
}));

(dumdom.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.input.cljs$lang$applyTo = (function (seq13165){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13165));
}));


dumdom.dom.ins = (function dumdom$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13399 = arguments.length;
var i__5770__auto___13400 = (0);
while(true){
if((i__5770__auto___13400 < len__5769__auto___13399)){
args__5775__auto__.push((arguments[i__5770__auto___13400]));

var G__13401 = (i__5770__auto___13400 + (1));
i__5770__auto___13400 = G__13401;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ins",args__13099__auto__);
}));

(dumdom.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ins.cljs$lang$applyTo = (function (seq13166){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13166));
}));


dumdom.dom.kbd = (function dumdom$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13402 = arguments.length;
var i__5770__auto___13403 = (0);
while(true){
if((i__5770__auto___13403 < len__5769__auto___13402)){
args__5775__auto__.push((arguments[i__5770__auto___13403]));

var G__13404 = (i__5770__auto___13403 + (1));
i__5770__auto___13403 = G__13404;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"kbd",args__13099__auto__);
}));

(dumdom.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.kbd.cljs$lang$applyTo = (function (seq13167){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13167));
}));


dumdom.dom.keygen = (function dumdom$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13405 = arguments.length;
var i__5770__auto___13406 = (0);
while(true){
if((i__5770__auto___13406 < len__5769__auto___13405)){
args__5775__auto__.push((arguments[i__5770__auto___13406]));

var G__13407 = (i__5770__auto___13406 + (1));
i__5770__auto___13406 = G__13407;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"keygen",args__13099__auto__);
}));

(dumdom.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.keygen.cljs$lang$applyTo = (function (seq13168){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13168));
}));


dumdom.dom.label = (function dumdom$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13408 = arguments.length;
var i__5770__auto___13409 = (0);
while(true){
if((i__5770__auto___13409 < len__5769__auto___13408)){
args__5775__auto__.push((arguments[i__5770__auto___13409]));

var G__13410 = (i__5770__auto___13409 + (1));
i__5770__auto___13409 = G__13410;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"label",args__13099__auto__);
}));

(dumdom.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.label.cljs$lang$applyTo = (function (seq13169){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13169));
}));


dumdom.dom.legend = (function dumdom$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13411 = arguments.length;
var i__5770__auto___13412 = (0);
while(true){
if((i__5770__auto___13412 < len__5769__auto___13411)){
args__5775__auto__.push((arguments[i__5770__auto___13412]));

var G__13413 = (i__5770__auto___13412 + (1));
i__5770__auto___13412 = G__13413;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"legend",args__13099__auto__);
}));

(dumdom.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.legend.cljs$lang$applyTo = (function (seq13170){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13170));
}));


dumdom.dom.li = (function dumdom$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13414 = arguments.length;
var i__5770__auto___13415 = (0);
while(true){
if((i__5770__auto___13415 < len__5769__auto___13414)){
args__5775__auto__.push((arguments[i__5770__auto___13415]));

var G__13416 = (i__5770__auto___13415 + (1));
i__5770__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"li",args__13099__auto__);
}));

(dumdom.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.li.cljs$lang$applyTo = (function (seq13171){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13171));
}));


dumdom.dom.link = (function dumdom$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13417 = arguments.length;
var i__5770__auto___13418 = (0);
while(true){
if((i__5770__auto___13418 < len__5769__auto___13417)){
args__5775__auto__.push((arguments[i__5770__auto___13418]));

var G__13419 = (i__5770__auto___13418 + (1));
i__5770__auto___13418 = G__13419;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"link",args__13099__auto__);
}));

(dumdom.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.link.cljs$lang$applyTo = (function (seq13172){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13172));
}));


dumdom.dom.main = (function dumdom$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13420 = arguments.length;
var i__5770__auto___13421 = (0);
while(true){
if((i__5770__auto___13421 < len__5769__auto___13420)){
args__5775__auto__.push((arguments[i__5770__auto___13421]));

var G__13422 = (i__5770__auto___13421 + (1));
i__5770__auto___13421 = G__13422;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"main",args__13099__auto__);
}));

(dumdom.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.main.cljs$lang$applyTo = (function (seq13173){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13173));
}));


dumdom.dom.map = (function dumdom$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13423 = arguments.length;
var i__5770__auto___13424 = (0);
while(true){
if((i__5770__auto___13424 < len__5769__auto___13423)){
args__5775__auto__.push((arguments[i__5770__auto___13424]));

var G__13425 = (i__5770__auto___13424 + (1));
i__5770__auto___13424 = G__13425;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"map",args__13099__auto__);
}));

(dumdom.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.map.cljs$lang$applyTo = (function (seq13174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13174));
}));


dumdom.dom.mark = (function dumdom$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13426 = arguments.length;
var i__5770__auto___13427 = (0);
while(true){
if((i__5770__auto___13427 < len__5769__auto___13426)){
args__5775__auto__.push((arguments[i__5770__auto___13427]));

var G__13428 = (i__5770__auto___13427 + (1));
i__5770__auto___13427 = G__13428;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"mark",args__13099__auto__);
}));

(dumdom.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mark.cljs$lang$applyTo = (function (seq13175){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13175));
}));


dumdom.dom.menu = (function dumdom$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13429 = arguments.length;
var i__5770__auto___13430 = (0);
while(true){
if((i__5770__auto___13430 < len__5769__auto___13429)){
args__5775__auto__.push((arguments[i__5770__auto___13430]));

var G__13431 = (i__5770__auto___13430 + (1));
i__5770__auto___13430 = G__13431;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"menu",args__13099__auto__);
}));

(dumdom.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menu.cljs$lang$applyTo = (function (seq13176){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13176));
}));


dumdom.dom.menuitem = (function dumdom$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13432 = arguments.length;
var i__5770__auto___13433 = (0);
while(true){
if((i__5770__auto___13433 < len__5769__auto___13432)){
args__5775__auto__.push((arguments[i__5770__auto___13433]));

var G__13434 = (i__5770__auto___13433 + (1));
i__5770__auto___13433 = G__13434;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"menuitem",args__13099__auto__);
}));

(dumdom.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.menuitem.cljs$lang$applyTo = (function (seq13177){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13177));
}));


dumdom.dom.meta = (function dumdom$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13435 = arguments.length;
var i__5770__auto___13436 = (0);
while(true){
if((i__5770__auto___13436 < len__5769__auto___13435)){
args__5775__auto__.push((arguments[i__5770__auto___13436]));

var G__13437 = (i__5770__auto___13436 + (1));
i__5770__auto___13436 = G__13437;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"meta",args__13099__auto__);
}));

(dumdom.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meta.cljs$lang$applyTo = (function (seq13178){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13178));
}));


dumdom.dom.meter = (function dumdom$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13438 = arguments.length;
var i__5770__auto___13439 = (0);
while(true){
if((i__5770__auto___13439 < len__5769__auto___13438)){
args__5775__auto__.push((arguments[i__5770__auto___13439]));

var G__13440 = (i__5770__auto___13439 + (1));
i__5770__auto___13439 = G__13440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"meter",args__13099__auto__);
}));

(dumdom.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.meter.cljs$lang$applyTo = (function (seq13179){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13179));
}));


dumdom.dom.nav = (function dumdom$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13441 = arguments.length;
var i__5770__auto___13442 = (0);
while(true){
if((i__5770__auto___13442 < len__5769__auto___13441)){
args__5775__auto__.push((arguments[i__5770__auto___13442]));

var G__13443 = (i__5770__auto___13442 + (1));
i__5770__auto___13442 = G__13443;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"nav",args__13099__auto__);
}));

(dumdom.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.nav.cljs$lang$applyTo = (function (seq13180){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13180));
}));


dumdom.dom.noscript = (function dumdom$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13444 = arguments.length;
var i__5770__auto___13445 = (0);
while(true){
if((i__5770__auto___13445 < len__5769__auto___13444)){
args__5775__auto__.push((arguments[i__5770__auto___13445]));

var G__13446 = (i__5770__auto___13445 + (1));
i__5770__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"noscript",args__13099__auto__);
}));

(dumdom.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.noscript.cljs$lang$applyTo = (function (seq13181){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13181));
}));


dumdom.dom.object = (function dumdom$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13447 = arguments.length;
var i__5770__auto___13448 = (0);
while(true){
if((i__5770__auto___13448 < len__5769__auto___13447)){
args__5775__auto__.push((arguments[i__5770__auto___13448]));

var G__13449 = (i__5770__auto___13448 + (1));
i__5770__auto___13448 = G__13449;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"object",args__13099__auto__);
}));

(dumdom.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.object.cljs$lang$applyTo = (function (seq13182){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13182));
}));


dumdom.dom.ol = (function dumdom$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13450 = arguments.length;
var i__5770__auto___13451 = (0);
while(true){
if((i__5770__auto___13451 < len__5769__auto___13450)){
args__5775__auto__.push((arguments[i__5770__auto___13451]));

var G__13452 = (i__5770__auto___13451 + (1));
i__5770__auto___13451 = G__13452;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ol",args__13099__auto__);
}));

(dumdom.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ol.cljs$lang$applyTo = (function (seq13183){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13183));
}));


dumdom.dom.optgroup = (function dumdom$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13453 = arguments.length;
var i__5770__auto___13454 = (0);
while(true){
if((i__5770__auto___13454 < len__5769__auto___13453)){
args__5775__auto__.push((arguments[i__5770__auto___13454]));

var G__13455 = (i__5770__auto___13454 + (1));
i__5770__auto___13454 = G__13455;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"optgroup",args__13099__auto__);
}));

(dumdom.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.optgroup.cljs$lang$applyTo = (function (seq13184){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13184));
}));


dumdom.dom.option = (function dumdom$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13456 = arguments.length;
var i__5770__auto___13457 = (0);
while(true){
if((i__5770__auto___13457 < len__5769__auto___13456)){
args__5775__auto__.push((arguments[i__5770__auto___13457]));

var G__13458 = (i__5770__auto___13457 + (1));
i__5770__auto___13457 = G__13458;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"option",args__13099__auto__);
}));

(dumdom.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.option.cljs$lang$applyTo = (function (seq13185){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13185));
}));


dumdom.dom.output = (function dumdom$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13459 = arguments.length;
var i__5770__auto___13460 = (0);
while(true){
if((i__5770__auto___13460 < len__5769__auto___13459)){
args__5775__auto__.push((arguments[i__5770__auto___13460]));

var G__13461 = (i__5770__auto___13460 + (1));
i__5770__auto___13460 = G__13461;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"output",args__13099__auto__);
}));

(dumdom.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.output.cljs$lang$applyTo = (function (seq13186){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13186));
}));


dumdom.dom.p = (function dumdom$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13462 = arguments.length;
var i__5770__auto___13463 = (0);
while(true){
if((i__5770__auto___13463 < len__5769__auto___13462)){
args__5775__auto__.push((arguments[i__5770__auto___13463]));

var G__13464 = (i__5770__auto___13463 + (1));
i__5770__auto___13463 = G__13464;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"p",args__13099__auto__);
}));

(dumdom.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.p.cljs$lang$applyTo = (function (seq13187){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13187));
}));


dumdom.dom.param = (function dumdom$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13465 = arguments.length;
var i__5770__auto___13466 = (0);
while(true){
if((i__5770__auto___13466 < len__5769__auto___13465)){
args__5775__auto__.push((arguments[i__5770__auto___13466]));

var G__13467 = (i__5770__auto___13466 + (1));
i__5770__auto___13466 = G__13467;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"param",args__13099__auto__);
}));

(dumdom.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.param.cljs$lang$applyTo = (function (seq13188){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13188));
}));


dumdom.dom.pre = (function dumdom$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13468 = arguments.length;
var i__5770__auto___13469 = (0);
while(true){
if((i__5770__auto___13469 < len__5769__auto___13468)){
args__5775__auto__.push((arguments[i__5770__auto___13469]));

var G__13470 = (i__5770__auto___13469 + (1));
i__5770__auto___13469 = G__13470;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"pre",args__13099__auto__);
}));

(dumdom.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pre.cljs$lang$applyTo = (function (seq13189){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13189));
}));


dumdom.dom.progress = (function dumdom$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13471 = arguments.length;
var i__5770__auto___13472 = (0);
while(true){
if((i__5770__auto___13472 < len__5769__auto___13471)){
args__5775__auto__.push((arguments[i__5770__auto___13472]));

var G__13473 = (i__5770__auto___13472 + (1));
i__5770__auto___13472 = G__13473;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"progress",args__13099__auto__);
}));

(dumdom.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.progress.cljs$lang$applyTo = (function (seq13190){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13190));
}));


dumdom.dom.q = (function dumdom$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13474 = arguments.length;
var i__5770__auto___13475 = (0);
while(true){
if((i__5770__auto___13475 < len__5769__auto___13474)){
args__5775__auto__.push((arguments[i__5770__auto___13475]));

var G__13476 = (i__5770__auto___13475 + (1));
i__5770__auto___13475 = G__13476;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"q",args__13099__auto__);
}));

(dumdom.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.q.cljs$lang$applyTo = (function (seq13191){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13191));
}));


dumdom.dom.rp = (function dumdom$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13477 = arguments.length;
var i__5770__auto___13478 = (0);
while(true){
if((i__5770__auto___13478 < len__5769__auto___13477)){
args__5775__auto__.push((arguments[i__5770__auto___13478]));

var G__13479 = (i__5770__auto___13478 + (1));
i__5770__auto___13478 = G__13479;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"rp",args__13099__auto__);
}));

(dumdom.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rp.cljs$lang$applyTo = (function (seq13192){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13192));
}));


dumdom.dom.rt = (function dumdom$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13480 = arguments.length;
var i__5770__auto___13481 = (0);
while(true){
if((i__5770__auto___13481 < len__5769__auto___13480)){
args__5775__auto__.push((arguments[i__5770__auto___13481]));

var G__13482 = (i__5770__auto___13481 + (1));
i__5770__auto___13481 = G__13482;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"rt",args__13099__auto__);
}));

(dumdom.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rt.cljs$lang$applyTo = (function (seq13193){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13193));
}));


dumdom.dom.ruby = (function dumdom$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13483 = arguments.length;
var i__5770__auto___13484 = (0);
while(true){
if((i__5770__auto___13484 < len__5769__auto___13483)){
args__5775__auto__.push((arguments[i__5770__auto___13484]));

var G__13485 = (i__5770__auto___13484 + (1));
i__5770__auto___13484 = G__13485;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ruby",args__13099__auto__);
}));

(dumdom.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ruby.cljs$lang$applyTo = (function (seq13194){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13194));
}));


dumdom.dom.s = (function dumdom$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13486 = arguments.length;
var i__5770__auto___13487 = (0);
while(true){
if((i__5770__auto___13487 < len__5769__auto___13486)){
args__5775__auto__.push((arguments[i__5770__auto___13487]));

var G__13488 = (i__5770__auto___13487 + (1));
i__5770__auto___13487 = G__13488;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"s",args__13099__auto__);
}));

(dumdom.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.s.cljs$lang$applyTo = (function (seq13195){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13195));
}));


dumdom.dom.samp = (function dumdom$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13489 = arguments.length;
var i__5770__auto___13490 = (0);
while(true){
if((i__5770__auto___13490 < len__5769__auto___13489)){
args__5775__auto__.push((arguments[i__5770__auto___13490]));

var G__13491 = (i__5770__auto___13490 + (1));
i__5770__auto___13490 = G__13491;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"samp",args__13099__auto__);
}));

(dumdom.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.samp.cljs$lang$applyTo = (function (seq13196){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13196));
}));


dumdom.dom.script = (function dumdom$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13492 = arguments.length;
var i__5770__auto___13493 = (0);
while(true){
if((i__5770__auto___13493 < len__5769__auto___13492)){
args__5775__auto__.push((arguments[i__5770__auto___13493]));

var G__13494 = (i__5770__auto___13493 + (1));
i__5770__auto___13493 = G__13494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"script",args__13099__auto__);
}));

(dumdom.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.script.cljs$lang$applyTo = (function (seq13197){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13197));
}));


dumdom.dom.section = (function dumdom$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13495 = arguments.length;
var i__5770__auto___13496 = (0);
while(true){
if((i__5770__auto___13496 < len__5769__auto___13495)){
args__5775__auto__.push((arguments[i__5770__auto___13496]));

var G__13497 = (i__5770__auto___13496 + (1));
i__5770__auto___13496 = G__13497;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"section",args__13099__auto__);
}));

(dumdom.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.section.cljs$lang$applyTo = (function (seq13198){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13198));
}));


dumdom.dom.select = (function dumdom$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13498 = arguments.length;
var i__5770__auto___13499 = (0);
while(true){
if((i__5770__auto___13499 < len__5769__auto___13498)){
args__5775__auto__.push((arguments[i__5770__auto___13499]));

var G__13500 = (i__5770__auto___13499 + (1));
i__5770__auto___13499 = G__13500;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"select",args__13099__auto__);
}));

(dumdom.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.select.cljs$lang$applyTo = (function (seq13199){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13199));
}));


dumdom.dom.small = (function dumdom$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13501 = arguments.length;
var i__5770__auto___13502 = (0);
while(true){
if((i__5770__auto___13502 < len__5769__auto___13501)){
args__5775__auto__.push((arguments[i__5770__auto___13502]));

var G__13503 = (i__5770__auto___13502 + (1));
i__5770__auto___13502 = G__13503;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"small",args__13099__auto__);
}));

(dumdom.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.small.cljs$lang$applyTo = (function (seq13200){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13200));
}));


dumdom.dom.source = (function dumdom$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13504 = arguments.length;
var i__5770__auto___13505 = (0);
while(true){
if((i__5770__auto___13505 < len__5769__auto___13504)){
args__5775__auto__.push((arguments[i__5770__auto___13505]));

var G__13506 = (i__5770__auto___13505 + (1));
i__5770__auto___13505 = G__13506;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"source",args__13099__auto__);
}));

(dumdom.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.source.cljs$lang$applyTo = (function (seq13201){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13201));
}));


dumdom.dom.span = (function dumdom$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13507 = arguments.length;
var i__5770__auto___13508 = (0);
while(true){
if((i__5770__auto___13508 < len__5769__auto___13507)){
args__5775__auto__.push((arguments[i__5770__auto___13508]));

var G__13509 = (i__5770__auto___13508 + (1));
i__5770__auto___13508 = G__13509;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"span",args__13099__auto__);
}));

(dumdom.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.span.cljs$lang$applyTo = (function (seq13202){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13202));
}));


dumdom.dom.strong = (function dumdom$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13510 = arguments.length;
var i__5770__auto___13511 = (0);
while(true){
if((i__5770__auto___13511 < len__5769__auto___13510)){
args__5775__auto__.push((arguments[i__5770__auto___13511]));

var G__13512 = (i__5770__auto___13511 + (1));
i__5770__auto___13511 = G__13512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"strong",args__13099__auto__);
}));

(dumdom.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.strong.cljs$lang$applyTo = (function (seq13203){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13203));
}));


dumdom.dom.style = (function dumdom$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13513 = arguments.length;
var i__5770__auto___13514 = (0);
while(true){
if((i__5770__auto___13514 < len__5769__auto___13513)){
args__5775__auto__.push((arguments[i__5770__auto___13514]));

var G__13515 = (i__5770__auto___13514 + (1));
i__5770__auto___13514 = G__13515;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"style",args__13099__auto__);
}));

(dumdom.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.style.cljs$lang$applyTo = (function (seq13204){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13204));
}));


dumdom.dom.sub = (function dumdom$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13516 = arguments.length;
var i__5770__auto___13517 = (0);
while(true){
if((i__5770__auto___13517 < len__5769__auto___13516)){
args__5775__auto__.push((arguments[i__5770__auto___13517]));

var G__13518 = (i__5770__auto___13517 + (1));
i__5770__auto___13517 = G__13518;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"sub",args__13099__auto__);
}));

(dumdom.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sub.cljs$lang$applyTo = (function (seq13205){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13205));
}));


dumdom.dom.summary = (function dumdom$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13519 = arguments.length;
var i__5770__auto___13520 = (0);
while(true){
if((i__5770__auto___13520 < len__5769__auto___13519)){
args__5775__auto__.push((arguments[i__5770__auto___13520]));

var G__13521 = (i__5770__auto___13520 + (1));
i__5770__auto___13520 = G__13521;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"summary",args__13099__auto__);
}));

(dumdom.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.summary.cljs$lang$applyTo = (function (seq13206){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13206));
}));


dumdom.dom.sup = (function dumdom$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13522 = arguments.length;
var i__5770__auto___13523 = (0);
while(true){
if((i__5770__auto___13523 < len__5769__auto___13522)){
args__5775__auto__.push((arguments[i__5770__auto___13523]));

var G__13524 = (i__5770__auto___13523 + (1));
i__5770__auto___13523 = G__13524;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"sup",args__13099__auto__);
}));

(dumdom.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.sup.cljs$lang$applyTo = (function (seq13207){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13207));
}));


dumdom.dom.table = (function dumdom$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13525 = arguments.length;
var i__5770__auto___13526 = (0);
while(true){
if((i__5770__auto___13526 < len__5769__auto___13525)){
args__5775__auto__.push((arguments[i__5770__auto___13526]));

var G__13527 = (i__5770__auto___13526 + (1));
i__5770__auto___13526 = G__13527;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"table",args__13099__auto__);
}));

(dumdom.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.table.cljs$lang$applyTo = (function (seq13208){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13208));
}));


dumdom.dom.tbody = (function dumdom$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13528 = arguments.length;
var i__5770__auto___13529 = (0);
while(true){
if((i__5770__auto___13529 < len__5769__auto___13528)){
args__5775__auto__.push((arguments[i__5770__auto___13529]));

var G__13530 = (i__5770__auto___13529 + (1));
i__5770__auto___13529 = G__13530;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tbody",args__13099__auto__);
}));

(dumdom.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tbody.cljs$lang$applyTo = (function (seq13209){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13209));
}));


dumdom.dom.td = (function dumdom$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13531 = arguments.length;
var i__5770__auto___13532 = (0);
while(true){
if((i__5770__auto___13532 < len__5769__auto___13531)){
args__5775__auto__.push((arguments[i__5770__auto___13532]));

var G__13533 = (i__5770__auto___13532 + (1));
i__5770__auto___13532 = G__13533;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"td",args__13099__auto__);
}));

(dumdom.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.td.cljs$lang$applyTo = (function (seq13210){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13210));
}));


dumdom.dom.textarea = (function dumdom$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13534 = arguments.length;
var i__5770__auto___13535 = (0);
while(true){
if((i__5770__auto___13535 < len__5769__auto___13534)){
args__5775__auto__.push((arguments[i__5770__auto___13535]));

var G__13536 = (i__5770__auto___13535 + (1));
i__5770__auto___13535 = G__13536;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"textarea",args__13099__auto__);
}));

(dumdom.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.textarea.cljs$lang$applyTo = (function (seq13211){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13211));
}));


dumdom.dom.tfoot = (function dumdom$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13537 = arguments.length;
var i__5770__auto___13538 = (0);
while(true){
if((i__5770__auto___13538 < len__5769__auto___13537)){
args__5775__auto__.push((arguments[i__5770__auto___13538]));

var G__13539 = (i__5770__auto___13538 + (1));
i__5770__auto___13538 = G__13539;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tfoot",args__13099__auto__);
}));

(dumdom.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tfoot.cljs$lang$applyTo = (function (seq13212){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13212));
}));


dumdom.dom.th = (function dumdom$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13540 = arguments.length;
var i__5770__auto___13541 = (0);
while(true){
if((i__5770__auto___13541 < len__5769__auto___13540)){
args__5775__auto__.push((arguments[i__5770__auto___13541]));

var G__13542 = (i__5770__auto___13541 + (1));
i__5770__auto___13541 = G__13542;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"th",args__13099__auto__);
}));

(dumdom.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.th.cljs$lang$applyTo = (function (seq13213){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13213));
}));


dumdom.dom.thead = (function dumdom$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13543 = arguments.length;
var i__5770__auto___13544 = (0);
while(true){
if((i__5770__auto___13544 < len__5769__auto___13543)){
args__5775__auto__.push((arguments[i__5770__auto___13544]));

var G__13545 = (i__5770__auto___13544 + (1));
i__5770__auto___13544 = G__13545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"thead",args__13099__auto__);
}));

(dumdom.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.thead.cljs$lang$applyTo = (function (seq13214){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13214));
}));


dumdom.dom.time = (function dumdom$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13546 = arguments.length;
var i__5770__auto___13547 = (0);
while(true){
if((i__5770__auto___13547 < len__5769__auto___13546)){
args__5775__auto__.push((arguments[i__5770__auto___13547]));

var G__13548 = (i__5770__auto___13547 + (1));
i__5770__auto___13547 = G__13548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"time",args__13099__auto__);
}));

(dumdom.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.time.cljs$lang$applyTo = (function (seq13215){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13215));
}));


dumdom.dom.title = (function dumdom$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13549 = arguments.length;
var i__5770__auto___13550 = (0);
while(true){
if((i__5770__auto___13550 < len__5769__auto___13549)){
args__5775__auto__.push((arguments[i__5770__auto___13550]));

var G__13551 = (i__5770__auto___13550 + (1));
i__5770__auto___13550 = G__13551;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"title",args__13099__auto__);
}));

(dumdom.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.title.cljs$lang$applyTo = (function (seq13216){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13216));
}));


dumdom.dom.tr = (function dumdom$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13552 = arguments.length;
var i__5770__auto___13553 = (0);
while(true){
if((i__5770__auto___13553 < len__5769__auto___13552)){
args__5775__auto__.push((arguments[i__5770__auto___13553]));

var G__13554 = (i__5770__auto___13553 + (1));
i__5770__auto___13553 = G__13554;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tr",args__13099__auto__);
}));

(dumdom.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tr.cljs$lang$applyTo = (function (seq13217){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13217));
}));


dumdom.dom.track = (function dumdom$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13555 = arguments.length;
var i__5770__auto___13556 = (0);
while(true){
if((i__5770__auto___13556 < len__5769__auto___13555)){
args__5775__auto__.push((arguments[i__5770__auto___13556]));

var G__13557 = (i__5770__auto___13556 + (1));
i__5770__auto___13556 = G__13557;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"track",args__13099__auto__);
}));

(dumdom.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.track.cljs$lang$applyTo = (function (seq13218){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13218));
}));


dumdom.dom.u = (function dumdom$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13558 = arguments.length;
var i__5770__auto___13559 = (0);
while(true){
if((i__5770__auto___13559 < len__5769__auto___13558)){
args__5775__auto__.push((arguments[i__5770__auto___13559]));

var G__13560 = (i__5770__auto___13559 + (1));
i__5770__auto___13559 = G__13560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"u",args__13099__auto__);
}));

(dumdom.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.u.cljs$lang$applyTo = (function (seq13219){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13219));
}));


dumdom.dom.ul = (function dumdom$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13561 = arguments.length;
var i__5770__auto___13562 = (0);
while(true){
if((i__5770__auto___13562 < len__5769__auto___13561)){
args__5775__auto__.push((arguments[i__5770__auto___13562]));

var G__13563 = (i__5770__auto___13562 + (1));
i__5770__auto___13562 = G__13563;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ul",args__13099__auto__);
}));

(dumdom.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ul.cljs$lang$applyTo = (function (seq13220){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13220));
}));


dumdom.dom.var$ = (function dumdom$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13564 = arguments.length;
var i__5770__auto___13565 = (0);
while(true){
if((i__5770__auto___13565 < len__5769__auto___13564)){
args__5775__auto__.push((arguments[i__5770__auto___13565]));

var G__13566 = (i__5770__auto___13565 + (1));
i__5770__auto___13565 = G__13566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"var",args__13099__auto__);
}));

(dumdom.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.var$.cljs$lang$applyTo = (function (seq13221){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13221));
}));


dumdom.dom.video = (function dumdom$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13567 = arguments.length;
var i__5770__auto___13568 = (0);
while(true){
if((i__5770__auto___13568 < len__5769__auto___13567)){
args__5775__auto__.push((arguments[i__5770__auto___13568]));

var G__13569 = (i__5770__auto___13568 + (1));
i__5770__auto___13568 = G__13569;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"video",args__13099__auto__);
}));

(dumdom.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.video.cljs$lang$applyTo = (function (seq13222){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13222));
}));


dumdom.dom.wbr = (function dumdom$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13570 = arguments.length;
var i__5770__auto___13571 = (0);
while(true){
if((i__5770__auto___13571 < len__5769__auto___13570)){
args__5775__auto__.push((arguments[i__5770__auto___13571]));

var G__13572 = (i__5770__auto___13571 + (1));
i__5770__auto___13571 = G__13572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"wbr",args__13099__auto__);
}));

(dumdom.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.wbr.cljs$lang$applyTo = (function (seq13223){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13223));
}));


dumdom.dom.circle = (function dumdom$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13573 = arguments.length;
var i__5770__auto___13574 = (0);
while(true){
if((i__5770__auto___13574 < len__5769__auto___13573)){
args__5775__auto__.push((arguments[i__5770__auto___13574]));

var G__13575 = (i__5770__auto___13574 + (1));
i__5770__auto___13574 = G__13575;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"circle",args__13099__auto__);
}));

(dumdom.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.circle.cljs$lang$applyTo = (function (seq13224){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13224));
}));


dumdom.dom.clipPath = (function dumdom$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13576 = arguments.length;
var i__5770__auto___13577 = (0);
while(true){
if((i__5770__auto___13577 < len__5769__auto___13576)){
args__5775__auto__.push((arguments[i__5770__auto___13577]));

var G__13578 = (i__5770__auto___13577 + (1));
i__5770__auto___13577 = G__13578;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"clipPath",args__13099__auto__);
}));

(dumdom.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.clipPath.cljs$lang$applyTo = (function (seq13225){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13225));
}));


dumdom.dom.defs = (function dumdom$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13579 = arguments.length;
var i__5770__auto___13580 = (0);
while(true){
if((i__5770__auto___13580 < len__5769__auto___13579)){
args__5775__auto__.push((arguments[i__5770__auto___13580]));

var G__13581 = (i__5770__auto___13580 + (1));
i__5770__auto___13580 = G__13581;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"defs",args__13099__auto__);
}));

(dumdom.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.defs.cljs$lang$applyTo = (function (seq13226){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13226));
}));


dumdom.dom.ellipse = (function dumdom$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13582 = arguments.length;
var i__5770__auto___13583 = (0);
while(true){
if((i__5770__auto___13583 < len__5769__auto___13582)){
args__5775__auto__.push((arguments[i__5770__auto___13583]));

var G__13584 = (i__5770__auto___13583 + (1));
i__5770__auto___13583 = G__13584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"ellipse",args__13099__auto__);
}));

(dumdom.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.ellipse.cljs$lang$applyTo = (function (seq13227){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13227));
}));


dumdom.dom.g = (function dumdom$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13585 = arguments.length;
var i__5770__auto___13586 = (0);
while(true){
if((i__5770__auto___13586 < len__5769__auto___13585)){
args__5775__auto__.push((arguments[i__5770__auto___13586]));

var G__13587 = (i__5770__auto___13586 + (1));
i__5770__auto___13586 = G__13587;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"g",args__13099__auto__);
}));

(dumdom.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.g.cljs$lang$applyTo = (function (seq13228){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13228));
}));


dumdom.dom.image = (function dumdom$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13588 = arguments.length;
var i__5770__auto___13589 = (0);
while(true){
if((i__5770__auto___13589 < len__5769__auto___13588)){
args__5775__auto__.push((arguments[i__5770__auto___13589]));

var G__13590 = (i__5770__auto___13589 + (1));
i__5770__auto___13589 = G__13590;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"image",args__13099__auto__);
}));

(dumdom.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.image.cljs$lang$applyTo = (function (seq13229){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13229));
}));


dumdom.dom.line = (function dumdom$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13591 = arguments.length;
var i__5770__auto___13592 = (0);
while(true){
if((i__5770__auto___13592 < len__5769__auto___13591)){
args__5775__auto__.push((arguments[i__5770__auto___13592]));

var G__13593 = (i__5770__auto___13592 + (1));
i__5770__auto___13592 = G__13593;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"line",args__13099__auto__);
}));

(dumdom.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.line.cljs$lang$applyTo = (function (seq13230){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13230));
}));


dumdom.dom.linearGradient = (function dumdom$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13594 = arguments.length;
var i__5770__auto___13595 = (0);
while(true){
if((i__5770__auto___13595 < len__5769__auto___13594)){
args__5775__auto__.push((arguments[i__5770__auto___13595]));

var G__13596 = (i__5770__auto___13595 + (1));
i__5770__auto___13595 = G__13596;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"linearGradient",args__13099__auto__);
}));

(dumdom.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.linearGradient.cljs$lang$applyTo = (function (seq13231){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13231));
}));


dumdom.dom.mask = (function dumdom$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13597 = arguments.length;
var i__5770__auto___13598 = (0);
while(true){
if((i__5770__auto___13598 < len__5769__auto___13597)){
args__5775__auto__.push((arguments[i__5770__auto___13598]));

var G__13599 = (i__5770__auto___13598 + (1));
i__5770__auto___13598 = G__13599;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"mask",args__13099__auto__);
}));

(dumdom.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.mask.cljs$lang$applyTo = (function (seq13232){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13232));
}));


dumdom.dom.path = (function dumdom$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13600 = arguments.length;
var i__5770__auto___13601 = (0);
while(true){
if((i__5770__auto___13601 < len__5769__auto___13600)){
args__5775__auto__.push((arguments[i__5770__auto___13601]));

var G__13602 = (i__5770__auto___13601 + (1));
i__5770__auto___13601 = G__13602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"path",args__13099__auto__);
}));

(dumdom.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.path.cljs$lang$applyTo = (function (seq13233){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13233));
}));


dumdom.dom.pattern = (function dumdom$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13603 = arguments.length;
var i__5770__auto___13604 = (0);
while(true){
if((i__5770__auto___13604 < len__5769__auto___13603)){
args__5775__auto__.push((arguments[i__5770__auto___13604]));

var G__13605 = (i__5770__auto___13604 + (1));
i__5770__auto___13604 = G__13605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"pattern",args__13099__auto__);
}));

(dumdom.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.pattern.cljs$lang$applyTo = (function (seq13234){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13234));
}));


dumdom.dom.polygon = (function dumdom$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13606 = arguments.length;
var i__5770__auto___13607 = (0);
while(true){
if((i__5770__auto___13607 < len__5769__auto___13606)){
args__5775__auto__.push((arguments[i__5770__auto___13607]));

var G__13608 = (i__5770__auto___13607 + (1));
i__5770__auto___13607 = G__13608;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"polygon",args__13099__auto__);
}));

(dumdom.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polygon.cljs$lang$applyTo = (function (seq13235){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13235));
}));


dumdom.dom.polyline = (function dumdom$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13609 = arguments.length;
var i__5770__auto___13610 = (0);
while(true){
if((i__5770__auto___13610 < len__5769__auto___13609)){
args__5775__auto__.push((arguments[i__5770__auto___13610]));

var G__13611 = (i__5770__auto___13610 + (1));
i__5770__auto___13610 = G__13611;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"polyline",args__13099__auto__);
}));

(dumdom.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.polyline.cljs$lang$applyTo = (function (seq13236){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13236));
}));


dumdom.dom.radialGradient = (function dumdom$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13612 = arguments.length;
var i__5770__auto___13613 = (0);
while(true){
if((i__5770__auto___13613 < len__5769__auto___13612)){
args__5775__auto__.push((arguments[i__5770__auto___13613]));

var G__13614 = (i__5770__auto___13613 + (1));
i__5770__auto___13613 = G__13614;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"radialGradient",args__13099__auto__);
}));

(dumdom.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.radialGradient.cljs$lang$applyTo = (function (seq13237){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13237));
}));


dumdom.dom.rect = (function dumdom$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13615 = arguments.length;
var i__5770__auto___13616 = (0);
while(true){
if((i__5770__auto___13616 < len__5769__auto___13615)){
args__5775__auto__.push((arguments[i__5770__auto___13616]));

var G__13617 = (i__5770__auto___13616 + (1));
i__5770__auto___13616 = G__13617;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"rect",args__13099__auto__);
}));

(dumdom.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.rect.cljs$lang$applyTo = (function (seq13238){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13238));
}));


dumdom.dom.stop = (function dumdom$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13618 = arguments.length;
var i__5770__auto___13619 = (0);
while(true){
if((i__5770__auto___13619 < len__5769__auto___13618)){
args__5775__auto__.push((arguments[i__5770__auto___13619]));

var G__13620 = (i__5770__auto___13619 + (1));
i__5770__auto___13619 = G__13620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"stop",args__13099__auto__);
}));

(dumdom.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.stop.cljs$lang$applyTo = (function (seq13239){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13239));
}));


dumdom.dom.svg = (function dumdom$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13621 = arguments.length;
var i__5770__auto___13622 = (0);
while(true){
if((i__5770__auto___13622 < len__5769__auto___13621)){
args__5775__auto__.push((arguments[i__5770__auto___13622]));

var G__13623 = (i__5770__auto___13622 + (1));
i__5770__auto___13622 = G__13623;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"svg",args__13099__auto__);
}));

(dumdom.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.svg.cljs$lang$applyTo = (function (seq13240){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13240));
}));


dumdom.dom.text = (function dumdom$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13624 = arguments.length;
var i__5770__auto___13625 = (0);
while(true){
if((i__5770__auto___13625 < len__5769__auto___13624)){
args__5775__auto__.push((arguments[i__5770__auto___13625]));

var G__13626 = (i__5770__auto___13625 + (1));
i__5770__auto___13625 = G__13626;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"text",args__13099__auto__);
}));

(dumdom.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.text.cljs$lang$applyTo = (function (seq13241){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13241));
}));


dumdom.dom.tspan = (function dumdom$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13627 = arguments.length;
var i__5770__auto___13628 = (0);
while(true){
if((i__5770__auto___13628 < len__5769__auto___13627)){
args__5775__auto__.push((arguments[i__5770__auto___13628]));

var G__13629 = (i__5770__auto___13628 + (1));
i__5770__auto___13628 = G__13629;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(dumdom.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args__13099__auto__){
return cljs.core.apply.call(null,dumdom.dom.el,"tspan",args__13099__auto__);
}));

(dumdom.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dumdom.dom.tspan.cljs$lang$applyTo = (function (seq13242){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13242));
}));


dumdom.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image],[dumdom.dom.form,dumdom.dom.audio,dumdom.dom.input,dumdom.dom.menuitem,dumdom.dom.radialGradient,dumdom.dom.base,dumdom.dom.h1,dumdom.dom.embed,dumdom.dom.h3,dumdom.dom.body,dumdom.dom.keygen,dumdom.dom.progress,dumdom.dom.main,dumdom.dom.cite,dumdom.dom.rect,dumdom.dom.polyline,dumdom.dom.map,dumdom.dom.object,dumdom.dom.i,dumdom.dom.p,dumdom.dom.nav,dumdom.dom.ruby,dumdom.dom.a,dumdom.dom.menu,dumdom.dom.blockquote,dumdom.dom.img,dumdom.dom.text,dumdom.dom.span,dumdom.dom.track,dumdom.dom.data,dumdom.dom.u,dumdom.dom.dl,dumdom.dom.select,dumdom.dom.polygon,dumdom.dom.pattern,dumdom.dom.html,dumdom.dom.thead,dumdom.dom.path,dumdom.dom.del,dumdom.dom.fieldset,dumdom.dom.aside,dumdom.dom.figure,dumdom.dom.figcaption,dumdom.dom.mask,dumdom.dom.q,dumdom.dom.bdi,dumdom.dom.video,dumdom.dom.address,dumdom.dom.caption,dumdom.dom.dd,dumdom.dom.rp,dumdom.dom.hr,dumdom.dom.meta,dumdom.dom.tbody,dumdom.dom.table,dumdom.dom.pre,dumdom.dom.ul,dumdom.dom.sup,dumdom.dom.dfn,dumdom.dom.sub,dumdom.dom.mark,dumdom.dom.script,dumdom.dom.big,dumdom.dom.button,dumdom.dom.wbr,dumdom.dom.strong,dumdom.dom.li,dumdom.dom.dt,dumdom.dom.td,dumdom.dom.tr,dumdom.dom.circle,dumdom.dom.section,dumdom.dom.th,dumdom.dom.time,dumdom.dom.optgroup,dumdom.dom.iframe,dumdom.dom.legend,dumdom.dom.em,dumdom.dom.kbd,dumdom.dom.article,dumdom.dom.clipPath,dumdom.dom.abbr,dumdom.dom.source,dumdom.dom.output,dumdom.dom.header,dumdom.dom.datalist,dumdom.dom.tfoot,dumdom.dom.s,dumdom.dom.ins,dumdom.dom.footer,dumdom.dom.title,dumdom.dom.h5,dumdom.dom.canvas,dumdom.dom.param,dumdom.dom.div,dumdom.dom.option,dumdom.dom.summary,dumdom.dom.samp,dumdom.dom.small,dumdom.dom.style,dumdom.dom.textarea,dumdom.dom.h4,dumdom.dom.head,dumdom.dom.g,dumdom.dom.stop,dumdom.dom.var$,dumdom.dom.tspan,dumdom.dom.ol,dumdom.dom.details,dumdom.dom.line,dumdom.dom.col,dumdom.dom.label,dumdom.dom.rt,dumdom.dom.h6,dumdom.dom.link,dumdom.dom.defs,dumdom.dom.colgroup,dumdom.dom.meter,dumdom.dom.bdo,dumdom.dom.b,dumdom.dom.svg,dumdom.dom.ellipse,dumdom.dom.code,dumdom.dom.linearGradient,dumdom.dom.noscript,dumdom.dom.h2,dumdom.dom.area,dumdom.dom.br,dumdom.dom.image]);
