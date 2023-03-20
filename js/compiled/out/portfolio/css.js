// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.css');
goog.require('cljs.core');
goog.require('clojure.string');
portfolio.css.find_link_by_href = (function portfolio$css$find_link_by_href(el,path){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__12232_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__12232_SHARP_.href,path);
}),el.querySelectorAll("link")));
});
portfolio.css.create_css_link = (function portfolio$css$create_css_link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12240 = arguments.length;
var i__5770__auto___12241 = (0);
while(true){
if((i__5770__auto___12241 < len__5769__auto___12240)){
args__5775__auto__.push((arguments[i__5770__auto___12241]));

var G__12242 = (i__5770__auto___12241 + (1));
i__5770__auto___12241 = G__12242;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__12235){
var vec__12236 = p__12235;
var map__12239 = cljs.core.nth.call(null,vec__12236,(0),null);
var map__12239__$1 = cljs.core.__destructure_map.call(null,map__12239);
var media = cljs.core.get.call(null,map__12239__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var link = document.createElement("link");
(link.href = path);

(link.rel = "stylesheet");

(link.type = "text/css");

(link.portfolio = "portfolio");

if(cljs.core.truth_(media)){
(link.media = "print");
} else {
}

return link;
}));

(portfolio.css.create_css_link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.css.create_css_link.cljs$lang$applyTo = (function (seq12233){
var G__12234 = cljs.core.first.call(null,seq12233);
var seq12233__$1 = cljs.core.next.call(null,seq12233);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12234,seq12233__$1);
}));

portfolio.css.reload_css_file = (function portfolio$css$reload_css_file(file){
var seq__12243 = cljs.core.seq.call(null,document.body.querySelectorAll("iframe"));
var chunk__12244 = null;
var count__12245 = (0);
var i__12246 = (0);
while(true){
if((i__12246 < count__12245)){
var iframe = cljs.core._nth.call(null,chunk__12244,i__12246);
var iframe_head_12255 = (function (){var G__12251 = iframe;
var G__12251__$1 = (((G__12251 == null))?null:G__12251.contentWindow);
var G__12251__$2 = (((G__12251__$1 == null))?null:G__12251__$1.document);
if((G__12251__$2 == null)){
return null;
} else {
return G__12251__$2.head;
}
})();
var original_12256 = portfolio.css.find_link_by_href.call(null,iframe_head_12255,file);
var reloaded_12257 = portfolio.css.create_css_link.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_12257.addEventListener("load",((function (seq__12243,chunk__12244,count__12245,i__12246,iframe_head_12255,original_12256,reloaded_12257,iframe){
return (function portfolio$css$reload_css_file_$_done(_){
var temp__5804__auto___12258 = (function (){var G__12252 = original_12256;
if((G__12252 == null)){
return null;
} else {
return G__12252.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___12258)){
var parent_12259 = temp__5804__auto___12258;
parent_12259.removeChild(original_12256);
} else {
}

return reloaded_12257.removeEventListener("load",portfolio$css$reload_css_file_$_done);
});})(seq__12243,chunk__12244,count__12245,i__12246,iframe_head_12255,original_12256,reloaded_12257,iframe))
);

iframe_head_12255.appendChild(reloaded_12257);


var G__12260 = seq__12243;
var G__12261 = chunk__12244;
var G__12262 = count__12245;
var G__12263 = (i__12246 + (1));
seq__12243 = G__12260;
chunk__12244 = G__12261;
count__12245 = G__12262;
i__12246 = G__12263;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12243);
if(temp__5804__auto__){
var seq__12243__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12243__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12243__$1);
var G__12264 = cljs.core.chunk_rest.call(null,seq__12243__$1);
var G__12265 = c__5568__auto__;
var G__12266 = cljs.core.count.call(null,c__5568__auto__);
var G__12267 = (0);
seq__12243 = G__12264;
chunk__12244 = G__12265;
count__12245 = G__12266;
i__12246 = G__12267;
continue;
} else {
var iframe = cljs.core.first.call(null,seq__12243__$1);
var iframe_head_12268 = (function (){var G__12253 = iframe;
var G__12253__$1 = (((G__12253 == null))?null:G__12253.contentWindow);
var G__12253__$2 = (((G__12253__$1 == null))?null:G__12253__$1.document);
if((G__12253__$2 == null)){
return null;
} else {
return G__12253__$2.head;
}
})();
var original_12269 = portfolio.css.find_link_by_href.call(null,iframe_head_12268,file);
var reloaded_12270 = portfolio.css.create_css_link.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_12270.addEventListener("load",((function (seq__12243,chunk__12244,count__12245,i__12246,iframe_head_12268,original_12269,reloaded_12270,iframe,seq__12243__$1,temp__5804__auto__){
return (function portfolio$css$reload_css_file_$_done(_){
var temp__5804__auto___12271__$1 = (function (){var G__12254 = original_12269;
if((G__12254 == null)){
return null;
} else {
return G__12254.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___12271__$1)){
var parent_12272 = temp__5804__auto___12271__$1;
parent_12272.removeChild(original_12269);
} else {
}

return reloaded_12270.removeEventListener("load",portfolio$css$reload_css_file_$_done);
});})(seq__12243,chunk__12244,count__12245,i__12246,iframe_head_12268,original_12269,reloaded_12270,iframe,seq__12243__$1,temp__5804__auto__))
);

iframe_head_12268.appendChild(reloaded_12270);


var G__12273 = cljs.core.next.call(null,seq__12243__$1);
var G__12274 = null;
var G__12275 = (0);
var G__12276 = (0);
seq__12243 = G__12273;
chunk__12244 = G__12274;
count__12245 = G__12275;
i__12246 = G__12276;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.css.load_css_files = (function portfolio$css$load_css_files(paths){
var seq__12277 = cljs.core.seq.call(null,paths);
var chunk__12278 = null;
var count__12279 = (0);
var i__12280 = (0);
while(true){
if((i__12280 < count__12279)){
var path = cljs.core._nth.call(null,chunk__12278,i__12280);
if(cljs.core.truth_(portfolio.css.find_link_by_href.call(null,document.head,path))){
} else {
document.head.appendChild(portfolio.css.create_css_link.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)));
}


var G__12281 = seq__12277;
var G__12282 = chunk__12278;
var G__12283 = count__12279;
var G__12284 = (i__12280 + (1));
seq__12277 = G__12281;
chunk__12278 = G__12282;
count__12279 = G__12283;
i__12280 = G__12284;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12277);
if(temp__5804__auto__){
var seq__12277__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12277__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12277__$1);
var G__12285 = cljs.core.chunk_rest.call(null,seq__12277__$1);
var G__12286 = c__5568__auto__;
var G__12287 = cljs.core.count.call(null,c__5568__auto__);
var G__12288 = (0);
seq__12277 = G__12285;
chunk__12278 = G__12286;
count__12279 = G__12287;
i__12280 = G__12288;
continue;
} else {
var path = cljs.core.first.call(null,seq__12277__$1);
if(cljs.core.truth_(portfolio.css.find_link_by_href.call(null,document.head,path))){
} else {
document.head.appendChild(portfolio.css.create_css_link.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)));
}


var G__12289 = cljs.core.next.call(null,seq__12277__$1);
var G__12290 = null;
var G__12291 = (0);
var G__12292 = (0);
seq__12277 = G__12289;
chunk__12278 = G__12290;
count__12279 = G__12291;
i__12280 = G__12292;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.css.replace_loaded_css_files = (function portfolio$css$replace_loaded_css_files(paths){
var seq__12294 = cljs.core.seq.call(null,document.body.querySelectorAll("iframe"));
var chunk__12295 = null;
var count__12296 = (0);
var i__12297 = (0);
while(true){
if((i__12297 < count__12296)){
var iframe = cljs.core._nth.call(null,chunk__12295,i__12297);
var head_12334 = (function (){var G__12316 = iframe;
var G__12316__$1 = (((G__12316 == null))?null:G__12316.contentWindow);
var G__12316__$2 = (((G__12316__$1 == null))?null:G__12316__$1.document);
if((G__12316__$2 == null)){
return null;
} else {
return G__12316__$2.head;
}
})();
var seq__12317_12335 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (seq__12294,chunk__12295,count__12296,i__12297,head_12334,iframe){
return (function (p1__12293_SHARP_){
return p1__12293_SHARP_.portfolio;
});})(seq__12294,chunk__12295,count__12296,i__12297,head_12334,iframe))
,head_12334.querySelectorAll("link")));
var chunk__12318_12336 = null;
var count__12319_12337 = (0);
var i__12320_12338 = (0);
while(true){
if((i__12320_12338 < count__12319_12337)){
var link_12339 = cljs.core._nth.call(null,chunk__12318_12336,i__12320_12338);
link_12339.parentNode.removeChild(link_12339);


var G__12340 = seq__12317_12335;
var G__12341 = chunk__12318_12336;
var G__12342 = count__12319_12337;
var G__12343 = (i__12320_12338 + (1));
seq__12317_12335 = G__12340;
chunk__12318_12336 = G__12341;
count__12319_12337 = G__12342;
i__12320_12338 = G__12343;
continue;
} else {
var temp__5804__auto___12344 = cljs.core.seq.call(null,seq__12317_12335);
if(temp__5804__auto___12344){
var seq__12317_12345__$1 = temp__5804__auto___12344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12317_12345__$1)){
var c__5568__auto___12346 = cljs.core.chunk_first.call(null,seq__12317_12345__$1);
var G__12347 = cljs.core.chunk_rest.call(null,seq__12317_12345__$1);
var G__12348 = c__5568__auto___12346;
var G__12349 = cljs.core.count.call(null,c__5568__auto___12346);
var G__12350 = (0);
seq__12317_12335 = G__12347;
chunk__12318_12336 = G__12348;
count__12319_12337 = G__12349;
i__12320_12338 = G__12350;
continue;
} else {
var link_12351 = cljs.core.first.call(null,seq__12317_12345__$1);
link_12351.parentNode.removeChild(link_12351);


var G__12352 = cljs.core.next.call(null,seq__12317_12345__$1);
var G__12353 = null;
var G__12354 = (0);
var G__12355 = (0);
seq__12317_12335 = G__12352;
chunk__12318_12336 = G__12353;
count__12319_12337 = G__12354;
i__12320_12338 = G__12355;
continue;
}
} else {
}
}
break;
}

var seq__12321_12356 = cljs.core.seq.call(null,paths);
var chunk__12322_12357 = null;
var count__12323_12358 = (0);
var i__12324_12359 = (0);
while(true){
if((i__12324_12359 < count__12323_12358)){
var path_12360 = cljs.core._nth.call(null,chunk__12322_12357,i__12324_12359);
head_12334.appendChild(portfolio.css.create_css_link.call(null,path_12360));


var G__12361 = seq__12321_12356;
var G__12362 = chunk__12322_12357;
var G__12363 = count__12323_12358;
var G__12364 = (i__12324_12359 + (1));
seq__12321_12356 = G__12361;
chunk__12322_12357 = G__12362;
count__12323_12358 = G__12363;
i__12324_12359 = G__12364;
continue;
} else {
var temp__5804__auto___12365 = cljs.core.seq.call(null,seq__12321_12356);
if(temp__5804__auto___12365){
var seq__12321_12366__$1 = temp__5804__auto___12365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12321_12366__$1)){
var c__5568__auto___12367 = cljs.core.chunk_first.call(null,seq__12321_12366__$1);
var G__12368 = cljs.core.chunk_rest.call(null,seq__12321_12366__$1);
var G__12369 = c__5568__auto___12367;
var G__12370 = cljs.core.count.call(null,c__5568__auto___12367);
var G__12371 = (0);
seq__12321_12356 = G__12368;
chunk__12322_12357 = G__12369;
count__12323_12358 = G__12370;
i__12324_12359 = G__12371;
continue;
} else {
var path_12372 = cljs.core.first.call(null,seq__12321_12366__$1);
head_12334.appendChild(portfolio.css.create_css_link.call(null,path_12372));


var G__12373 = cljs.core.next.call(null,seq__12321_12366__$1);
var G__12374 = null;
var G__12375 = (0);
var G__12376 = (0);
seq__12321_12356 = G__12373;
chunk__12322_12357 = G__12374;
count__12323_12358 = G__12375;
i__12324_12359 = G__12376;
continue;
}
} else {
}
}
break;
}


var G__12377 = seq__12294;
var G__12378 = chunk__12295;
var G__12379 = count__12296;
var G__12380 = (i__12297 + (1));
seq__12294 = G__12377;
chunk__12295 = G__12378;
count__12296 = G__12379;
i__12297 = G__12380;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12294);
if(temp__5804__auto__){
var seq__12294__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12294__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12294__$1);
var G__12381 = cljs.core.chunk_rest.call(null,seq__12294__$1);
var G__12382 = c__5568__auto__;
var G__12383 = cljs.core.count.call(null,c__5568__auto__);
var G__12384 = (0);
seq__12294 = G__12381;
chunk__12295 = G__12382;
count__12296 = G__12383;
i__12297 = G__12384;
continue;
} else {
var iframe = cljs.core.first.call(null,seq__12294__$1);
var head_12385 = (function (){var G__12325 = iframe;
var G__12325__$1 = (((G__12325 == null))?null:G__12325.contentWindow);
var G__12325__$2 = (((G__12325__$1 == null))?null:G__12325__$1.document);
if((G__12325__$2 == null)){
return null;
} else {
return G__12325__$2.head;
}
})();
var seq__12326_12386 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (seq__12294,chunk__12295,count__12296,i__12297,head_12385,iframe,seq__12294__$1,temp__5804__auto__){
return (function (p1__12293_SHARP_){
return p1__12293_SHARP_.portfolio;
});})(seq__12294,chunk__12295,count__12296,i__12297,head_12385,iframe,seq__12294__$1,temp__5804__auto__))
,head_12385.querySelectorAll("link")));
var chunk__12327_12387 = null;
var count__12328_12388 = (0);
var i__12329_12389 = (0);
while(true){
if((i__12329_12389 < count__12328_12388)){
var link_12390 = cljs.core._nth.call(null,chunk__12327_12387,i__12329_12389);
link_12390.parentNode.removeChild(link_12390);


var G__12391 = seq__12326_12386;
var G__12392 = chunk__12327_12387;
var G__12393 = count__12328_12388;
var G__12394 = (i__12329_12389 + (1));
seq__12326_12386 = G__12391;
chunk__12327_12387 = G__12392;
count__12328_12388 = G__12393;
i__12329_12389 = G__12394;
continue;
} else {
var temp__5804__auto___12395__$1 = cljs.core.seq.call(null,seq__12326_12386);
if(temp__5804__auto___12395__$1){
var seq__12326_12396__$1 = temp__5804__auto___12395__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12326_12396__$1)){
var c__5568__auto___12397 = cljs.core.chunk_first.call(null,seq__12326_12396__$1);
var G__12398 = cljs.core.chunk_rest.call(null,seq__12326_12396__$1);
var G__12399 = c__5568__auto___12397;
var G__12400 = cljs.core.count.call(null,c__5568__auto___12397);
var G__12401 = (0);
seq__12326_12386 = G__12398;
chunk__12327_12387 = G__12399;
count__12328_12388 = G__12400;
i__12329_12389 = G__12401;
continue;
} else {
var link_12402 = cljs.core.first.call(null,seq__12326_12396__$1);
link_12402.parentNode.removeChild(link_12402);


var G__12403 = cljs.core.next.call(null,seq__12326_12396__$1);
var G__12404 = null;
var G__12405 = (0);
var G__12406 = (0);
seq__12326_12386 = G__12403;
chunk__12327_12387 = G__12404;
count__12328_12388 = G__12405;
i__12329_12389 = G__12406;
continue;
}
} else {
}
}
break;
}

var seq__12330_12407 = cljs.core.seq.call(null,paths);
var chunk__12331_12408 = null;
var count__12332_12409 = (0);
var i__12333_12410 = (0);
while(true){
if((i__12333_12410 < count__12332_12409)){
var path_12411 = cljs.core._nth.call(null,chunk__12331_12408,i__12333_12410);
head_12385.appendChild(portfolio.css.create_css_link.call(null,path_12411));


var G__12412 = seq__12330_12407;
var G__12413 = chunk__12331_12408;
var G__12414 = count__12332_12409;
var G__12415 = (i__12333_12410 + (1));
seq__12330_12407 = G__12412;
chunk__12331_12408 = G__12413;
count__12332_12409 = G__12414;
i__12333_12410 = G__12415;
continue;
} else {
var temp__5804__auto___12416__$1 = cljs.core.seq.call(null,seq__12330_12407);
if(temp__5804__auto___12416__$1){
var seq__12330_12417__$1 = temp__5804__auto___12416__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12330_12417__$1)){
var c__5568__auto___12418 = cljs.core.chunk_first.call(null,seq__12330_12417__$1);
var G__12419 = cljs.core.chunk_rest.call(null,seq__12330_12417__$1);
var G__12420 = c__5568__auto___12418;
var G__12421 = cljs.core.count.call(null,c__5568__auto___12418);
var G__12422 = (0);
seq__12330_12407 = G__12419;
chunk__12331_12408 = G__12420;
count__12332_12409 = G__12421;
i__12333_12410 = G__12422;
continue;
} else {
var path_12423 = cljs.core.first.call(null,seq__12330_12417__$1);
head_12385.appendChild(portfolio.css.create_css_link.call(null,path_12423));


var G__12424 = cljs.core.next.call(null,seq__12330_12417__$1);
var G__12425 = null;
var G__12426 = (0);
var G__12427 = (0);
seq__12330_12407 = G__12424;
chunk__12331_12408 = G__12425;
count__12332_12409 = G__12426;
i__12333_12410 = G__12427;
continue;
}
} else {
}
}
break;
}


var G__12428 = cljs.core.next.call(null,seq__12294__$1);
var G__12429 = null;
var G__12430 = (0);
var G__12431 = (0);
seq__12294 = G__12428;
chunk__12295 = G__12429;
count__12296 = G__12430;
i__12297 = G__12431;
continue;
}
} else {
return null;
}
}
break;
}
});
