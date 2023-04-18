// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__16390){
var map__16391 = p__16390;
var map__16391__$1 = cljs.core.__destructure_map.call(null,map__16391);
var replacement_transformers = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__16392 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__16393 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__16393);

try{var vec__16394 = cljs.core.reduce.call(null,(function (p__16397,transformer){
var vec__16398 = p__16397;
var text = cljs.core.nth.call(null,vec__16398,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__16398,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__5045__auto__ = replacement_transformers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__16394,(0),null);
var new_state = cljs.core.nth.call(null,vec__16394,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__16392);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16403 = arguments.length;
var i__5770__auto___16404 = (0);
while(true){
if((i__5770__auto___16404 < len__5769__auto___16403)){
args__5775__auto__.push((arguments[i__5770__auto___16404]));

var G__16405 = (i__5770__auto___16404 + (1));
i__5770__auto___16404 = G__16405;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq16401){
var G__16402 = cljs.core.first.call(null,seq16401);
var seq16401__$1 = cljs.core.next.call(null,seq16401);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16402,seq16401__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__16406_16410 = cljs.core.seq.call(null,lines);
var chunk__16407_16411 = null;
var count__16408_16412 = (0);
var i__16409_16413 = (0);
while(true){
if((i__16409_16413 < count__16408_16412)){
var line_16414 = cljs.core._nth.call(null,chunk__16407_16411,i__16409_16413);
markdown.links.parse_reference_link.call(null,line_16414,references);


var G__16415 = seq__16406_16410;
var G__16416 = chunk__16407_16411;
var G__16417 = count__16408_16412;
var G__16418 = (i__16409_16413 + (1));
seq__16406_16410 = G__16415;
chunk__16407_16411 = G__16416;
count__16408_16412 = G__16417;
i__16409_16413 = G__16418;
continue;
} else {
var temp__5804__auto___16419 = cljs.core.seq.call(null,seq__16406_16410);
if(temp__5804__auto___16419){
var seq__16406_16420__$1 = temp__5804__auto___16419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16406_16420__$1)){
var c__5568__auto___16421 = cljs.core.chunk_first.call(null,seq__16406_16420__$1);
var G__16422 = cljs.core.chunk_rest.call(null,seq__16406_16420__$1);
var G__16423 = c__5568__auto___16421;
var G__16424 = cljs.core.count.call(null,c__5568__auto___16421);
var G__16425 = (0);
seq__16406_16410 = G__16422;
chunk__16407_16411 = G__16423;
count__16408_16412 = G__16424;
i__16409_16413 = G__16425;
continue;
} else {
var line_16426 = cljs.core.first.call(null,seq__16406_16420__$1);
markdown.links.parse_reference_link.call(null,line_16426,references);


var G__16427 = cljs.core.next.call(null,seq__16406_16420__$1);
var G__16428 = null;
var G__16429 = (0);
var G__16430 = (0);
seq__16406_16410 = G__16427;
chunk__16407_16411 = G__16428;
count__16408_16412 = G__16429;
i__16409_16413 = G__16430;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__16431_16435 = cljs.core.seq.call(null,lines);
var chunk__16432_16436 = null;
var count__16433_16437 = (0);
var i__16434_16438 = (0);
while(true){
if((i__16434_16438 < count__16433_16437)){
var line_16439 = cljs.core._nth.call(null,chunk__16432_16436,i__16434_16438);
markdown.links.parse_footnote_link.call(null,line_16439,footnotes);


var G__16440 = seq__16431_16435;
var G__16441 = chunk__16432_16436;
var G__16442 = count__16433_16437;
var G__16443 = (i__16434_16438 + (1));
seq__16431_16435 = G__16440;
chunk__16432_16436 = G__16441;
count__16433_16437 = G__16442;
i__16434_16438 = G__16443;
continue;
} else {
var temp__5804__auto___16444 = cljs.core.seq.call(null,seq__16431_16435);
if(temp__5804__auto___16444){
var seq__16431_16445__$1 = temp__5804__auto___16444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16431_16445__$1)){
var c__5568__auto___16446 = cljs.core.chunk_first.call(null,seq__16431_16445__$1);
var G__16447 = cljs.core.chunk_rest.call(null,seq__16431_16445__$1);
var G__16448 = c__5568__auto___16446;
var G__16449 = cljs.core.count.call(null,c__5568__auto___16446);
var G__16450 = (0);
seq__16431_16435 = G__16447;
chunk__16432_16436 = G__16448;
count__16433_16437 = G__16449;
i__16434_16438 = G__16450;
continue;
} else {
var line_16451 = cljs.core.first.call(null,seq__16431_16445__$1);
markdown.links.parse_footnote_link.call(null,line_16451,footnotes);


var G__16452 = cljs.core.next.call(null,seq__16431_16445__$1);
var G__16453 = null;
var G__16454 = (0);
var G__16455 = (0);
seq__16431_16435 = G__16452;
chunk__16432_16436 = G__16453;
count__16433_16437 = G__16454;
i__16434_16438 = G__16455;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__16456 = markdown.transformers.parse_metadata_headers.call(null,lines);
var metadata = cljs.core.nth.call(null,vec__16456,(0),null);
var num_lines = cljs.core.nth.call(null,vec__16456,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.call(null,num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__16459 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__16460 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__16461 = (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});
var _STAR_formatter_STAR__temp_val__16462 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__16461);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__16462);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__16463 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__16463,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__16463,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__16469_16479 = lines__$1;
var vec__16470_16480 = G__16469_16479;
var seq__16471_16481 = cljs.core.seq.call(null,vec__16470_16480);
var first__16472_16482 = cljs.core.first.call(null,seq__16471_16481);
var seq__16471_16483__$1 = cljs.core.next.call(null,seq__16471_16481);
var line_16484 = first__16472_16482;
var more_16485 = seq__16471_16483__$1;
var state_16486 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__16469_16487__$1 = G__16469_16479;
var state_16488__$1 = state_16486;
while(true){
var vec__16476_16489 = G__16469_16487__$1;
var seq__16477_16490 = cljs.core.seq.call(null,vec__16476_16489);
var first__16478_16491 = cljs.core.first.call(null,seq__16477_16490);
var seq__16477_16492__$1 = cljs.core.next.call(null,seq__16477_16490);
var line_16493__$1 = first__16478_16491;
var more_16494__$1 = seq__16477_16492__$1;
var state_16495__$2 = state_16488__$1;
var line_16496__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_16495__$2))?"":line_16493__$1);
var state_16497__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_16495__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_16495__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_16495__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_16495__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_16495__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_16494__$1))){
var G__16498 = more_16494__$1;
var G__16499 = cljs.core.assoc.call(null,transformer.call(null,html,line_16496__$2,cljs.core.first.call(null,more_16494__$1),cljs.core.dissoc.call(null,state_16497__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_16496__$2.trim()));
G__16469_16487__$1 = G__16498;
state_16488__$1 = G__16499;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_16497__$3))),line_16496__$2,"",cljs.core.assoc.call(null,state_16497__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__16460);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__16459);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16502 = arguments.length;
var i__5770__auto___16503 = (0);
while(true){
if((i__5770__auto___16503 < len__5769__auto___16502)){
args__5775__auto__.push((arguments[i__5770__auto___16503]));

var G__16504 = (i__5770__auto___16503 + (1));
i__5770__auto___16503 = G__16504;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq16500){
var G__16501 = cljs.core.first.call(null,seq16500);
var seq16500__$1 = cljs.core.next.call(null,seq16500);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16501,seq16500__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16507 = arguments.length;
var i__5770__auto___16508 = (0);
while(true){
if((i__5770__auto___16508 < len__5769__auto___16507)){
args__5775__auto__.push((arguments[i__5770__auto___16508]));

var G__16509 = (i__5770__auto___16508 + (1));
i__5770__auto___16508 = G__16509;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq16505){
var G__16506 = cljs.core.first.call(null,seq16505);
var seq16505__$1 = cljs.core.next.call(null,seq16505);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16506,seq16505__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16511 = arguments.length;
var i__5770__auto___16512 = (0);
while(true){
if((i__5770__auto___16512 < len__5769__auto___16511)){
args__5775__auto__.push((arguments[i__5770__auto___16512]));

var G__16513 = (i__5770__auto___16512 + (1));
i__5770__auto___16512 = G__16513;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq16510){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16510));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16515 = arguments.length;
var i__5770__auto___16516 = (0);
while(true){
if((i__5770__auto___16516 < len__5769__auto___16515)){
args__5775__auto__.push((arguments[i__5770__auto___16516]));

var G__16517 = (i__5770__auto___16516 + (1));
i__5770__auto___16516 = G__16517;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq16514){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16514));
}));

