// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.canvas');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('dumdom.core');
goog.require('portfolio.adapter');
goog.require('portfolio.components.code');
goog.require('portfolio.components.tab_bar');
goog.require('portfolio.components.triangle');
goog.require('portfolio.view');
goog.require('portfolio.views.canvas.protocols');
portfolio.components.canvas.get_iframe = (function portfolio$components$canvas$get_iframe(canvas_el){
var G__15402 = canvas_el;
if((G__15402 == null)){
return null;
} else {
return G__15402.querySelector(".canvas");
}
});
portfolio.components.canvas.get_iframe_document = (function portfolio$components$canvas$get_iframe_document(canvas_el){
var G__15403 = canvas_el;
var G__15403__$1 = (((G__15403 == null))?null:portfolio.components.canvas.get_iframe.call(null,G__15403));
var G__15403__$2 = (((G__15403__$1 == null))?null:G__15403__$1.contentWindow);
if((G__15403__$2 == null)){
return null;
} else {
return G__15403__$2.document;
}
});
portfolio.components.canvas.get_iframe_body = (function portfolio$components$canvas$get_iframe_body(canvas_el){
var G__15404 = canvas_el;
var G__15404__$1 = (((G__15404 == null))?null:portfolio.components.canvas.get_iframe_document.call(null,G__15404));
if((G__15404__$1 == null)){
return null;
} else {
return G__15404__$1.body;
}
});
/**
 * 
 */
portfolio.components.canvas.ComponentError = dumdom.core.component.call(null,(function (p__15405){
var map__15406 = p__15405;
var map__15406__$1 = cljs.core.__destructure_map.call(null,map__15406);
var lol = map__15406__$1;
var component_param = cljs.core.get.call(null,map__15406__$1,new cljs.core.Keyword(null,"component-param","component-param",1099370170));
var error = cljs.core.get.call(null,map__15406__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1.error","h1.h1.error",-1200773667),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)], null),(cljs.core.truth_(component_param)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vs-s.mod","div.vs-s.mod",-2084413467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),"Component param"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),portfolio.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),component_param], null))], null)], null):null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ex-data","ex-data",-309040259).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vs-s.mod","div.vs-s.mod",-2084413467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),"ex-data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),portfolio.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),data], null))], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(error)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/ComponentError"], null));
portfolio.components.canvas.get_error_container = (function portfolio$components$canvas$get_error_container(el){
var or__5045__auto__ = (function (){var temp__5804__auto__ = el.querySelector("error-container");
if(cljs.core.truth_(temp__5804__auto__)){
var el__$1 = temp__5804__auto__;
(el__$1.innerHTML = "");

return el__$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var error = document.createElement("div");
(error.className = "error-container");

(error.style.overflow = "scroll");

el.appendChild(error);

return error;
}
});
portfolio.components.canvas.render_error = (function portfolio$components$canvas$render_error(el,iframe,scene,e){
var error = portfolio.components.canvas.get_error_container.call(null,el);
setTimeout((function (){
return (el.style.height = "auto");
}),(100));

(iframe.style.display = "none");

return dumdom.core.render.call(null,portfolio.components.canvas.ComponentError.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-param","component-param",1099370170),new cljs.core.Keyword(null,"component-param","component-param",1099370170).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Failed to mount component",new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,e);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15407_15411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15408_15412 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15409_15413 = true;
var _STAR_print_fn_STAR__temp_val__15410_15414 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15409_15413);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15410_15414);

try{cljs.pprint.pprint.call(null,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15408_15412);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15407_15411);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
} else {
return null;
}
})()], null)], null)),error);
});
portfolio.components.canvas.render_scene = (function portfolio$components$canvas$render_scene(el,p__15415){
var map__15416 = p__15415;
var map__15416__$1 = cljs.core.__destructure_map.call(null,map__15416);
var scene = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var tools = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var opt = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var iframe = portfolio.components.canvas.get_iframe.call(null,el);
var canvas = (function (){var G__15417 = iframe;
var G__15417__$1 = (((G__15417 == null))?null:G__15417.contentDocument);
if((G__15417__$1 == null)){
return null;
} else {
return G__15417__$1.getElementById("canvas");
}
})();
var error = el.querySelector(".error-container");
if(cljs.core.truth_(error)){
error.parentNode.removeChild(error);

(iframe.style.display = "block");
} else {
}

try{var seq__15419_15428 = cljs.core.seq.call(null,tools);
var chunk__15420_15429 = null;
var count__15421_15430 = (0);
var i__15422_15431 = (0);
while(true){
if((i__15422_15431 < count__15421_15430)){
var tool_15432 = cljs.core._nth.call(null,chunk__15420_15429,i__15422_15431);
portfolio.views.canvas.protocols.prepare_canvas.call(null,tool_15432,el,opt);


var G__15433 = seq__15419_15428;
var G__15434 = chunk__15420_15429;
var G__15435 = count__15421_15430;
var G__15436 = (i__15422_15431 + (1));
seq__15419_15428 = G__15433;
chunk__15420_15429 = G__15434;
count__15421_15430 = G__15435;
i__15422_15431 = G__15436;
continue;
} else {
var temp__5804__auto___15437 = cljs.core.seq.call(null,seq__15419_15428);
if(temp__5804__auto___15437){
var seq__15419_15438__$1 = temp__5804__auto___15437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15419_15438__$1)){
var c__5568__auto___15439 = cljs.core.chunk_first.call(null,seq__15419_15438__$1);
var G__15440 = cljs.core.chunk_rest.call(null,seq__15419_15438__$1);
var G__15441 = c__5568__auto___15439;
var G__15442 = cljs.core.count.call(null,c__5568__auto___15439);
var G__15443 = (0);
seq__15419_15428 = G__15440;
chunk__15420_15429 = G__15441;
count__15421_15430 = G__15442;
i__15422_15431 = G__15443;
continue;
} else {
var tool_15444 = cljs.core.first.call(null,seq__15419_15438__$1);
portfolio.views.canvas.protocols.prepare_canvas.call(null,tool_15444,el,opt);


var G__15445 = cljs.core.next.call(null,seq__15419_15438__$1);
var G__15446 = null;
var G__15447 = (0);
var G__15448 = (0);
seq__15419_15428 = G__15445;
chunk__15420_15429 = G__15446;
count__15421_15430 = G__15447;
i__15422_15431 = G__15448;
continue;
}
} else {
}
}
break;
}

portfolio.adapter.render_component.call(null,scene,canvas);

return setTimeout((function (){
try{var seq__15424 = cljs.core.seq.call(null,tools);
var chunk__15425 = null;
var count__15426 = (0);
var i__15427 = (0);
while(true){
if((i__15427 < count__15426)){
var tool = cljs.core._nth.call(null,chunk__15425,i__15427);
portfolio.views.canvas.protocols.finalize_canvas.call(null,tool,el,opt);


var G__15449 = seq__15424;
var G__15450 = chunk__15425;
var G__15451 = count__15426;
var G__15452 = (i__15427 + (1));
seq__15424 = G__15449;
chunk__15425 = G__15450;
count__15426 = G__15451;
i__15427 = G__15452;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15424);
if(temp__5804__auto__){
var seq__15424__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15424__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__15424__$1);
var G__15453 = cljs.core.chunk_rest.call(null,seq__15424__$1);
var G__15454 = c__5568__auto__;
var G__15455 = cljs.core.count.call(null,c__5568__auto__);
var G__15456 = (0);
seq__15424 = G__15453;
chunk__15425 = G__15454;
count__15426 = G__15455;
i__15427 = G__15456;
continue;
} else {
var tool = cljs.core.first.call(null,seq__15424__$1);
portfolio.views.canvas.protocols.finalize_canvas.call(null,tool,el,opt);


var G__15457 = cljs.core.next.call(null,seq__15424__$1);
var G__15458 = null;
var G__15459 = (0);
var G__15460 = (0);
seq__15424 = G__15457;
chunk__15425 = G__15458;
count__15426 = G__15459;
i__15427 = G__15460;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e15423){var e = e15423;
return portfolio.components.canvas.render_error.call(null,el,iframe,scene,e);
}}),(50));
}catch (e15418){var e = e15418;
return portfolio.components.canvas.render_error.call(null,el,iframe,scene,e);
}});
portfolio.components.canvas.on_mounted = (function portfolio$components$canvas$on_mounted(el,f){
if(cljs.core.truth_((function (){var G__15461 = el;
var G__15461__$1 = (((G__15461 == null))?null:G__15461.contentDocument);
if((G__15461__$1 == null)){
return null;
} else {
return G__15461__$1.getElementById("canvas");
}
})())){
return f.call(null);
} else {
return el.addEventListener("load",(function (_){
var doc = el.contentDocument;
(doc.documentElement.style.height = "auto");

if(cljs.core.truth_(doc.getElementById("canvas"))){
} else {
var el_15462__$1 = doc.createElement.call(null,"div");
(el_15462__$1.id = "canvas");

doc.body.appendChild(el_15462__$1);
}

return f.call(null);
}));
}
});
portfolio.components.canvas.init_canvas = (function portfolio$components$canvas$init_canvas(el,data,f){
var document__$1 = portfolio.components.canvas.get_iframe_document.call(null,el);
var head = document__$1.head;
var loaded = cljs.core.atom.call(null,(0));
var try_complete = (function (){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.deref.call(null,loaded))){
return f.call(null);
} else {
return null;
}
});
try_complete.call(null);

var seq__15463_15470 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data));
var chunk__15464_15471 = null;
var count__15465_15472 = (0);
var i__15466_15473 = (0);
while(true){
if((i__15466_15473 < count__15465_15472)){
var path_15474 = cljs.core._nth.call(null,chunk__15464_15471,i__15466_15473);
var link_15475 = document.createElement("link");
(link_15475.rel = "stylesheet");

(link_15475.type = "text/css");

(link_15475.href = path_15474);

link_15475.addEventListener("load",((function (seq__15463_15470,chunk__15464_15471,count__15465_15472,i__15466_15473,link_15475,path_15474,document__$1,head,loaded,try_complete){
return (function (_){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.inc);

return try_complete.call(null);
});})(seq__15463_15470,chunk__15464_15471,count__15465_15472,i__15466_15473,link_15475,path_15474,document__$1,head,loaded,try_complete))
);

head.appendChild(link_15475);


var G__15476 = seq__15463_15470;
var G__15477 = chunk__15464_15471;
var G__15478 = count__15465_15472;
var G__15479 = (i__15466_15473 + (1));
seq__15463_15470 = G__15476;
chunk__15464_15471 = G__15477;
count__15465_15472 = G__15478;
i__15466_15473 = G__15479;
continue;
} else {
var temp__5804__auto___15480 = cljs.core.seq.call(null,seq__15463_15470);
if(temp__5804__auto___15480){
var seq__15463_15481__$1 = temp__5804__auto___15480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15463_15481__$1)){
var c__5568__auto___15482 = cljs.core.chunk_first.call(null,seq__15463_15481__$1);
var G__15483 = cljs.core.chunk_rest.call(null,seq__15463_15481__$1);
var G__15484 = c__5568__auto___15482;
var G__15485 = cljs.core.count.call(null,c__5568__auto___15482);
var G__15486 = (0);
seq__15463_15470 = G__15483;
chunk__15464_15471 = G__15484;
count__15465_15472 = G__15485;
i__15466_15473 = G__15486;
continue;
} else {
var path_15487 = cljs.core.first.call(null,seq__15463_15481__$1);
var link_15488 = document.createElement("link");
(link_15488.rel = "stylesheet");

(link_15488.type = "text/css");

(link_15488.href = path_15487);

link_15488.addEventListener("load",((function (seq__15463_15470,chunk__15464_15471,count__15465_15472,i__15466_15473,link_15488,path_15487,seq__15463_15481__$1,temp__5804__auto___15480,document__$1,head,loaded,try_complete){
return (function (_){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.inc);

return try_complete.call(null);
});})(seq__15463_15470,chunk__15464_15471,count__15465_15472,i__15466_15473,link_15488,path_15487,seq__15463_15481__$1,temp__5804__auto___15480,document__$1,head,loaded,try_complete))
);

head.appendChild(link_15488);


var G__15489 = cljs.core.next.call(null,seq__15463_15481__$1);
var G__15490 = null;
var G__15491 = (0);
var G__15492 = (0);
seq__15463_15470 = G__15489;
chunk__15464_15471 = G__15490;
count__15465_15472 = G__15491;
i__15466_15473 = G__15492;
continue;
}
} else {
}
}
break;
}

var vec__15467 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
var t = cljs.core.nth.call(null,vec__15467,(0),null);
var r = cljs.core.nth.call(null,vec__15467,(1),null);
var b = cljs.core.nth.call(null,vec__15467,(2),null);
var l = cljs.core.nth.call(null,vec__15467,(3),null);
if(cljs.core.truth_(t)){
(document__$1.body.style.paddingTop = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"px"].join(''));
} else {
}

if(cljs.core.truth_(r)){
(document__$1.body.style.paddingBottom = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),"px"].join(''));
} else {
}

if(cljs.core.truth_(b)){
(document__$1.documentElement.style.paddingLeft = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"px"].join(''));
} else {
}

if(cljs.core.truth_(l)){
return (document__$1.documentElement.style.paddingRight = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),"px"].join(''));
} else {
return null;
}
});
/**
 * 
 */
portfolio.components.canvas.Canvas = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s, height 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.canvas","iframe.canvas",2014956060),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "/portfolio/canvas.html";
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5045__auto__ = ((typeof new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var or__5045__auto__ = ((typeof new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})()], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/Canvas",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,data){
return portfolio.components.canvas.on_mounted.call(null,portfolio.components.canvas.get_iframe.call(null,el),(function (){
return portfolio.components.canvas.init_canvas.call(null,el,data,(function (){
return portfolio.components.canvas.render_scene.call(null,el,data);
}));
}));
}),new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (el,data){
return portfolio.components.canvas.on_mounted.call(null,portfolio.components.canvas.get_iframe.call(null,el),(function (){
return portfolio.components.canvas.render_scene.call(null,el,data);
}));
})], null));
/**
 * 
 */
portfolio.components.canvas.Toolbar = dumdom.core.component.call(null,(function (p__15493){
var map__15494 = p__15493;
var map__15494__$1 = cljs.core.__destructure_map.call(null,map__15494);
var buttons = cljs.core.get.call(null,map__15494__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e5e5e5",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$components$canvas$iter__15495(s__15496){
return (new cljs.core.LazySeq(null,(function (){
var s__15496__$1 = s__15496;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15496__$1);
if(temp__5804__auto__){
var s__15496__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15496__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15496__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15498 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15497 = (0);
while(true){
if((i__15497 < size__5522__auto__)){
var tool = cljs.core._nth.call(null,c__5521__auto__,i__15497);
cljs.core.chunk_append.call(null,b__15498,portfolio.views.canvas.protocols.render_toolbar_button.call(null,tool));

var G__15499 = (i__15497 + (1));
i__15497 = G__15499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15498),portfolio$components$canvas$iter__15495.call(null,cljs.core.chunk_rest.call(null,s__15496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15498),null);
}
} else {
var tool = cljs.core.first.call(null,s__15496__$2);
return cljs.core.cons.call(null,portfolio.views.canvas.protocols.render_toolbar_button.call(null,tool),portfolio$components$canvas$iter__15495.call(null,cljs.core.rest.call(null,s__15496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,buttons);
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/Toolbar"], null));
/**
 * 
 */
portfolio.components.canvas.CanvasPanel = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(new cljs.core.Keyword(null,"minimized?","minimized?",1807883709).cljs$core$IFn$_invoke$arity$1(data))?"40px":"30%"),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.25s",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var button = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"top","top",-1856271961),(10)], null)], null),portfolio.components.triangle.TriangleButton.call(null,button)], null);
} else {
return null;
}
})(),portfolio.components.tab_bar.TabBar.call(null,data),(function (){var G__15500 = data;
var G__15500__$1 = (((G__15500 == null))?null:new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__15500));
if((G__15500__$1 == null)){
return null;
} else {
return portfolio.view.render_view.call(null,G__15500__$1);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/CanvasPanel"], null));
/**
 * 
 */
portfolio.components.canvas.CanvasHeader = dumdom.core.component.call(null,(function (p__15501){
var map__15502 = p__15501;
var map__15502__$1 = cljs.core.__destructure_map.call(null,map__15502);
var title = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"url","url",276297046));
var description = cljs.core.get.call(null,map__15502__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3","h2.h3",132008135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)], null),((cljs.core.empty_QMARK_.call(null,description))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),description], null))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/CanvasHeader",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null));
portfolio.components.canvas.render_canvas = (function portfolio$components$canvas$render_canvas(data){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data))?portfolio.components.canvas.CanvasHeader.call(null,data):null),(cljs.core.truth_(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))?(cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data)))?portfolio.components.canvas.Canvas.call(null,data):portfolio.components.canvas.ComponentError.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"separator",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(20)], null)], null)], null):null)], null));
});
/**
 * 
 */
portfolio.components.canvas.Problem = dumdom.core.component.call(null,(function (p__15503){
var map__15504 = p__15503;
var map__15504__$1 = cljs.core.__destructure_map.call(null,map__15504);
var title = cljs.core.get.call(null,map__15504__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.call(null,map__15504__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var code = cljs.core.get.call(null,map__15504__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h2","h2.h2",-608300904),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),text], null),portfolio.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/Problem"], null));
portfolio.components.canvas.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),"column",new cljs.core.Keyword(null,"cols","cols",-1914801295),"row"], null);
portfolio.components.canvas.render_layout = (function portfolio$components$canvas$render_layout(data){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null).call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),portfolio.components.canvas.direction.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-evenly",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)))?new cljs.core.Keyword(null,"border-top","border-top",-158897573):new cljs.core.Keyword(null,"border-left","border-left",-1150760178)),"5px solid #ddd"])], null)], null),cljs.core.map.call(null,portfolio.components.canvas.render_layout,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(data)))], null);
} else {
var map__15505 = data;
var map__15505__$1 = cljs.core.__destructure_map.call(null,map__15505);
var toolbar = cljs.core.get.call(null,map__15505__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var canvases = cljs.core.get.call(null,map__15505__$1,new cljs.core.Keyword(null,"canvases","canvases",-441653731));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),(function (){var G__15506 = toolbar;
if((G__15506 == null)){
return null;
} else {
return portfolio.components.canvas.Toolbar.call(null,G__15506);
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1"], null)], null),cljs.core.mapcat.call(null,portfolio.components.canvas.render_canvas,cljs.core.interpose.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),canvases))], null)], null);
}
});
/**
 * 
 */
portfolio.components.canvas.CanvasView = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var problems = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null)], null),cljs.core.map.call(null,portfolio.components.canvas.Problem,problems)], null);
} else {
return null;
}
})(),portfolio.components.canvas.render_layout.call(null,data),(function (){var G__15507 = data;
var G__15507__$1 = (((G__15507 == null))?null:new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(G__15507));
if((G__15507__$1 == null)){
return null;
} else {
return portfolio.components.canvas.CanvasPanel.call(null,G__15507__$1);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.canvas/CanvasView",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
