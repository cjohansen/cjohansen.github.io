// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.canvas');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('dumdom.core');
goog.require('portfolio.adapter');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.components.browser');
goog.require('portfolio.ui.components.code');
goog.require('portfolio.ui.components.markdown');
goog.require('portfolio.ui.components.menu_bar');
goog.require('portfolio.ui.components.tab_bar');
goog.require('portfolio.ui.components.triangle');
goog.require('portfolio.ui.view');
portfolio.ui.components.canvas.get_iframe = (function portfolio$ui$components$canvas$get_iframe(canvas_el){
var G__17077 = canvas_el;
if((G__17077 == null)){
return null;
} else {
return G__17077.querySelector(".canvas");
}
});
portfolio.ui.components.canvas.get_iframe_document = (function portfolio$ui$components$canvas$get_iframe_document(canvas_el){
var G__17078 = canvas_el;
var G__17078__$1 = (((G__17078 == null))?null:portfolio.ui.components.canvas.get_iframe.call(null,G__17078));
var G__17078__$2 = (((G__17078__$1 == null))?null:G__17078__$1.contentWindow);
if((G__17078__$2 == null)){
return null;
} else {
return G__17078__$2.document;
}
});
portfolio.ui.components.canvas.get_iframe_body = (function portfolio$ui$components$canvas$get_iframe_body(canvas_el){
var G__17079 = canvas_el;
var G__17079__$1 = (((G__17079 == null))?null:portfolio.ui.components.canvas.get_iframe_document.call(null,G__17079));
if((G__17079__$1 == null)){
return null;
} else {
return G__17079__$1.body;
}
});
/**
 * 
 */
portfolio.ui.components.canvas.ComponentError = dumdom.core.component.call(null,(function (p__17080){
var map__17081 = p__17080;
var map__17081__$1 = cljs.core.__destructure_map.call(null,map__17081);
var lol = map__17081__$1;
var component_params = cljs.core.get.call(null,map__17081__$1,new cljs.core.Keyword(null,"component-params","component-params",-1900426525));
var error = cljs.core.get.call(null,map__17081__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1.error","h1.h1.error",-1200773667),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)], null),(cljs.core.truth_(component_params)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vs-s.mod","div.vs-s.mod",-2084413467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),"Component params"], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__17082(s__17083){
return (new cljs.core.LazySeq(null,(function (){
var s__17083__$1 = s__17083;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17083__$1);
if(temp__5804__auto__){
var s__17083__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17083__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17083__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17085 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17084 = (0);
while(true){
if((i__17084 < size__5522__auto__)){
var param = cljs.core._nth.call(null,c__5521__auto__,i__17084);
cljs.core.chunk_append.call(null,b__17085,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),portfolio.ui.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),param], null))], null));

var G__17086 = (i__17084 + (1));
i__17084 = G__17086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17085),portfolio$ui$components$canvas$iter__17082.call(null,cljs.core.chunk_rest.call(null,s__17083__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17085),null);
}
} else {
var param = cljs.core.first.call(null,s__17083__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),portfolio.ui.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),param], null))], null),portfolio$ui$components$canvas$iter__17082.call(null,cljs.core.rest.call(null,s__17083__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,component_params);
})()], null):null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ex-data","ex-data",-309040259).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vs-s.mod","div.vs-s.mod",-2084413467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),"ex-data"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),portfolio.ui.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),data], null))], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(error)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/ComponentError"], null));
portfolio.ui.components.canvas.get_error_container = (function portfolio$ui$components$canvas$get_error_container(el){
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
portfolio.ui.components.canvas.render_error = (function portfolio$ui$components$canvas$render_error(el,iframe,scene,e){
var error = portfolio.ui.components.canvas.get_error_container.call(null,el);
setTimeout((function (){
return (el.style.height = "auto");
}),(100));

(iframe.style.display = "none");

return dumdom.core.render.call(null,portfolio.ui.components.canvas.ComponentError.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-params","component-params",-1900426525),new cljs.core.Keyword(null,"component-params","component-params",-1900426525).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Failed to mount component",new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack,new cljs.core.Keyword(null,"ex-data","ex-data",-309040259),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,e);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17087_17091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17088_17092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17089_17093 = true;
var _STAR_print_fn_STAR__temp_val__17090_17094 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17089_17093);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17090_17094);

try{cljs.pprint.pprint.call(null,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17088_17092);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17087_17091);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
} else {
return null;
}
})()], null)], null)),error);
});
portfolio.ui.components.canvas.render_scene = (function portfolio$ui$components$canvas$render_scene(el,p__17095){
var map__17096 = p__17095;
var map__17096__$1 = cljs.core.__destructure_map.call(null,map__17096);
var scene = cljs.core.get.call(null,map__17096__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var tools = cljs.core.get.call(null,map__17096__$1,new cljs.core.Keyword(null,"tools","tools",-1241731990));
var opt = cljs.core.get.call(null,map__17096__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var iframe = portfolio.ui.components.canvas.get_iframe.call(null,el);
var canvas = (function (){var G__17097 = iframe;
var G__17097__$1 = (((G__17097 == null))?null:G__17097.contentDocument);
if((G__17097__$1 == null)){
return null;
} else {
return G__17097__$1.getElementById("canvas");
}
})();
var error = el.querySelector(".error-container");
if(cljs.core.truth_(error)){
error.parentNode.removeChild(error);

(iframe.style.display = "block");
} else {
}

try{var seq__17099_17108 = cljs.core.seq.call(null,tools);
var chunk__17100_17109 = null;
var count__17101_17110 = (0);
var i__17102_17111 = (0);
while(true){
if((i__17102_17111 < count__17101_17110)){
var tool_17112 = cljs.core._nth.call(null,chunk__17100_17109,i__17102_17111);
portfolio.ui.canvas.protocols.prepare_canvas.call(null,tool_17112,el,opt);


var G__17113 = seq__17099_17108;
var G__17114 = chunk__17100_17109;
var G__17115 = count__17101_17110;
var G__17116 = (i__17102_17111 + (1));
seq__17099_17108 = G__17113;
chunk__17100_17109 = G__17114;
count__17101_17110 = G__17115;
i__17102_17111 = G__17116;
continue;
} else {
var temp__5804__auto___17117 = cljs.core.seq.call(null,seq__17099_17108);
if(temp__5804__auto___17117){
var seq__17099_17118__$1 = temp__5804__auto___17117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17099_17118__$1)){
var c__5568__auto___17119 = cljs.core.chunk_first.call(null,seq__17099_17118__$1);
var G__17120 = cljs.core.chunk_rest.call(null,seq__17099_17118__$1);
var G__17121 = c__5568__auto___17119;
var G__17122 = cljs.core.count.call(null,c__5568__auto___17119);
var G__17123 = (0);
seq__17099_17108 = G__17120;
chunk__17100_17109 = G__17121;
count__17101_17110 = G__17122;
i__17102_17111 = G__17123;
continue;
} else {
var tool_17124 = cljs.core.first.call(null,seq__17099_17118__$1);
portfolio.ui.canvas.protocols.prepare_canvas.call(null,tool_17124,el,opt);


var G__17125 = cljs.core.next.call(null,seq__17099_17118__$1);
var G__17126 = null;
var G__17127 = (0);
var G__17128 = (0);
seq__17099_17108 = G__17125;
chunk__17100_17109 = G__17126;
count__17101_17110 = G__17127;
i__17102_17111 = G__17128;
continue;
}
} else {
}
}
break;
}

portfolio.adapter.render_component.call(null,scene,canvas);
}catch (e17098){var e_17129 = e17098;
portfolio.ui.components.canvas.render_error.call(null,el,iframe,scene,e_17129);
}
return setTimeout((function (){
try{var seq__17104 = cljs.core.seq.call(null,tools);
var chunk__17105 = null;
var count__17106 = (0);
var i__17107 = (0);
while(true){
if((i__17107 < count__17106)){
var tool = cljs.core._nth.call(null,chunk__17105,i__17107);
portfolio.ui.canvas.protocols.finalize_canvas.call(null,tool,el,opt);


var G__17130 = seq__17104;
var G__17131 = chunk__17105;
var G__17132 = count__17106;
var G__17133 = (i__17107 + (1));
seq__17104 = G__17130;
chunk__17105 = G__17131;
count__17106 = G__17132;
i__17107 = G__17133;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17104);
if(temp__5804__auto__){
var seq__17104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17104__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__17104__$1);
var G__17134 = cljs.core.chunk_rest.call(null,seq__17104__$1);
var G__17135 = c__5568__auto__;
var G__17136 = cljs.core.count.call(null,c__5568__auto__);
var G__17137 = (0);
seq__17104 = G__17134;
chunk__17105 = G__17135;
count__17106 = G__17136;
i__17107 = G__17137;
continue;
} else {
var tool = cljs.core.first.call(null,seq__17104__$1);
portfolio.ui.canvas.protocols.finalize_canvas.call(null,tool,el,opt);


var G__17138 = cljs.core.next.call(null,seq__17104__$1);
var G__17139 = null;
var G__17140 = (0);
var G__17141 = (0);
seq__17104 = G__17138;
chunk__17105 = G__17139;
count__17106 = G__17140;
i__17107 = G__17141;
continue;
}
} else {
return null;
}
}
break;
}
}catch (e17103){var e = e17103;
return portfolio.ui.components.canvas.render_error.call(null,el,iframe,scene,e);
}}),(50));
});
portfolio.ui.components.canvas.on_mounted = (function portfolio$ui$components$canvas$on_mounted(el,f){
if(cljs.core.truth_((function (){var G__17142 = el;
var G__17142__$1 = (((G__17142 == null))?null:G__17142.contentDocument);
if((G__17142__$1 == null)){
return null;
} else {
return G__17142__$1.getElementById("canvas");
}
})())){
return f.call(null);
} else {
return el.addEventListener("load",(function (_){
var doc = el.contentDocument;
(doc.documentElement.style.height = "auto");

if(cljs.core.truth_(doc.getElementById("canvas"))){
} else {
var el_17143__$1 = doc.createElement.call(null,"div");
(el_17143__$1.id = "canvas");

doc.body.appendChild(el_17143__$1);
}

return f.call(null);
}));
}
});
portfolio.ui.components.canvas.init_canvas = (function portfolio$ui$components$canvas$init_canvas(el,data,f){
var document__$1 = portfolio.ui.components.canvas.get_iframe_document.call(null,el);
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

var seq__17144_17151 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(data));
var chunk__17145_17152 = null;
var count__17146_17153 = (0);
var i__17147_17154 = (0);
while(true){
if((i__17147_17154 < count__17146_17153)){
var path_17155 = cljs.core._nth.call(null,chunk__17145_17152,i__17147_17154);
var link_17156 = document.createElement("link");
(link_17156.rel = "stylesheet");

(link_17156.type = "text/css");

(link_17156.href = path_17155);

link_17156.addEventListener("load",((function (seq__17144_17151,chunk__17145_17152,count__17146_17153,i__17147_17154,link_17156,path_17155,document__$1,head,loaded,try_complete){
return (function (_){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.inc);

return try_complete.call(null);
});})(seq__17144_17151,chunk__17145_17152,count__17146_17153,i__17147_17154,link_17156,path_17155,document__$1,head,loaded,try_complete))
);

head.appendChild(link_17156);


var G__17157 = seq__17144_17151;
var G__17158 = chunk__17145_17152;
var G__17159 = count__17146_17153;
var G__17160 = (i__17147_17154 + (1));
seq__17144_17151 = G__17157;
chunk__17145_17152 = G__17158;
count__17146_17153 = G__17159;
i__17147_17154 = G__17160;
continue;
} else {
var temp__5804__auto___17161 = cljs.core.seq.call(null,seq__17144_17151);
if(temp__5804__auto___17161){
var seq__17144_17162__$1 = temp__5804__auto___17161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17144_17162__$1)){
var c__5568__auto___17163 = cljs.core.chunk_first.call(null,seq__17144_17162__$1);
var G__17164 = cljs.core.chunk_rest.call(null,seq__17144_17162__$1);
var G__17165 = c__5568__auto___17163;
var G__17166 = cljs.core.count.call(null,c__5568__auto___17163);
var G__17167 = (0);
seq__17144_17151 = G__17164;
chunk__17145_17152 = G__17165;
count__17146_17153 = G__17166;
i__17147_17154 = G__17167;
continue;
} else {
var path_17168 = cljs.core.first.call(null,seq__17144_17162__$1);
var link_17169 = document.createElement("link");
(link_17169.rel = "stylesheet");

(link_17169.type = "text/css");

(link_17169.href = path_17168);

link_17169.addEventListener("load",((function (seq__17144_17151,chunk__17145_17152,count__17146_17153,i__17147_17154,link_17169,path_17168,seq__17144_17162__$1,temp__5804__auto___17161,document__$1,head,loaded,try_complete){
return (function (_){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.inc);

return try_complete.call(null);
});})(seq__17144_17151,chunk__17145_17152,count__17146_17153,i__17147_17154,link_17169,path_17168,seq__17144_17162__$1,temp__5804__auto___17161,document__$1,head,loaded,try_complete))
);

head.appendChild(link_17169);


var G__17170 = cljs.core.next.call(null,seq__17144_17162__$1);
var G__17171 = null;
var G__17172 = (0);
var G__17173 = (0);
seq__17144_17151 = G__17170;
chunk__17145_17152 = G__17171;
count__17146_17153 = G__17172;
i__17147_17154 = G__17173;
continue;
}
} else {
}
}
break;
}

var vec__17148 = new cljs.core.Keyword("viewport","padding","viewport/padding",-1583726021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
var t = cljs.core.nth.call(null,vec__17148,(0),null);
var r = cljs.core.nth.call(null,vec__17148,(1),null);
var b = cljs.core.nth.call(null,vec__17148,(2),null);
var l = cljs.core.nth.call(null,vec__17148,(3),null);
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
portfolio.ui.components.canvas.Canvas = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__5045__auto__ = new cljs.core.Keyword("background","background-color","background/background-color",1902638780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "var(--canvas-bg)";
}
})(),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s, height 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe.canvas","iframe.canvas",2014956060),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"canvas-path","canvas-path",658132618).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "/portfolio/canvas.html";
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"width","width",-384071477),(function (){var or__5045__auto__ = ((typeof new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","width","viewport/width",809992237).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "100%";
}
})(),new cljs.core.Keyword(null,"height","height",1025178622),((typeof new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)) === 'number')?new cljs.core.Keyword("viewport","height","viewport/height",1951335772).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opt","opt",-794706369).cljs$core$IFn$_invoke$arity$1(data)):null)], null)], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Canvas",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,data){
return portfolio.ui.components.canvas.on_mounted.call(null,portfolio.ui.components.canvas.get_iframe.call(null,el),(function (){
return portfolio.ui.components.canvas.init_canvas.call(null,el,data,(function (){
return portfolio.ui.components.canvas.render_scene.call(null,el,data);
}));
}));
}),new cljs.core.Keyword(null,"on-update","on-update",1680216496),(function (el,data){
return portfolio.ui.components.canvas.on_mounted.call(null,portfolio.ui.components.canvas.get_iframe.call(null,el),(function (){
return portfolio.ui.components.canvas.render_scene.call(null,el,data);
}));
})], null));
/**
 * 
 */
portfolio.ui.components.canvas.Toolbar = dumdom.core.component.call(null,(function (p__17174){
var map__17175 = p__17174;
var map__17175__$1 = cljs.core.__destructure_map.call(null,map__17175);
var buttons = cljs.core.get.call(null,map__17175__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["var(--fg)",(48),"var(--bg)",(20),(20),"space-between",(10),"flex","1px solid var(--separator)"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__17176(s__17177){
return (new cljs.core.LazySeq(null,(function (){
var s__17177__$1 = s__17177;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17177__$1);
if(temp__5804__auto__){
var s__17177__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17177__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17177__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17179 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17178 = (0);
while(true){
if((i__17178 < size__5522__auto__)){
var tool = cljs.core._nth.call(null,c__5521__auto__,i__17178);
cljs.core.chunk_append.call(null,b__17179,portfolio.ui.canvas.protocols.render_toolbar_button.call(null,tool));

var G__17184 = (i__17178 + (1));
i__17178 = G__17184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17179),portfolio$ui$components$canvas$iter__17176.call(null,cljs.core.chunk_rest.call(null,s__17177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17179),null);
}
} else {
var tool = cljs.core.first.call(null,s__17177__$2);
return cljs.core.cons.call(null,portfolio.ui.canvas.protocols.render_toolbar_button.call(null,tool),portfolio$ui$components$canvas$iter__17176.call(null,cljs.core.rest.call(null,s__17177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$canvas$iter__17180(s__17181){
return (new cljs.core.LazySeq(null,(function (){
var s__17181__$1 = s__17181;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17181__$1);
if(temp__5804__auto__){
var s__17181__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17181__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17181__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17183 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17182 = (0);
while(true){
if((i__17182 < size__5522__auto__)){
var tool = cljs.core._nth.call(null,c__5521__auto__,i__17182);
cljs.core.chunk_append.call(null,b__17183,portfolio.ui.canvas.protocols.render_toolbar_button.call(null,tool));

var G__17185 = (i__17182 + (1));
i__17182 = G__17185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17183),portfolio$ui$components$canvas$iter__17180.call(null,cljs.core.chunk_rest.call(null,s__17181__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17183),null);
}
} else {
var tool = cljs.core.first.call(null,s__17181__$2);
return cljs.core.cons.call(null,portfolio.ui.canvas.protocols.render_toolbar_button.call(null,tool),portfolio$ui$components$canvas$iter__17180.call(null,cljs.core.rest.call(null,s__17181__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"right","right",-452581833),null], null), null),new cljs.core.Keyword(null,"align","align",1964212802)),buttons));
})()], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Toolbar"], null));
/**
 * 
 */
portfolio.ui.components.canvas.CanvasPanel = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid #ccc",new cljs.core.Keyword(null,"background","background",-863952629),"#ffffff",new cljs.core.Keyword(null,"height","height",1025178622),(cljs.core.truth_(new cljs.core.Keyword(null,"minimized?","minimized?",1807883709).cljs$core$IFn$_invoke$arity$1(data))?"40px":"30%"),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.25s",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"button","button",1456579943).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var button = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"top","top",-1856271961),(10)], null)], null),portfolio.ui.components.triangle.TriangleButton.call(null,button)], null);
} else {
return null;
}
})(),portfolio.ui.components.tab_bar.TabBar.call(null,data),(function (){var G__17186 = data;
var G__17186__$1 = (((G__17186 == null))?null:new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__17186));
if((G__17186__$1 == null)){
return null;
} else {
return portfolio.ui.view.render_view.call(null,G__17186__$1);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasPanel"], null));
/**
 * 
 */
portfolio.ui.components.canvas.CanvasHeader = dumdom.core.component.call(null,(function (p__17187){
var map__17188 = p__17187;
var map__17188__$1 = cljs.core.__destructure_map.call(null,map__17188);
var title = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"url","url",276297046));
var description = cljs.core.get.call(null,map__17188__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 20px 0"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3","h2.h3",132008135),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core.empty_QMARK_.call(null,description))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px"], null))], null),(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null):title)], null),((cljs.core.empty_QMARK_.call(null,description))?null:portfolio.ui.components.markdown.Markdown.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"p","p",151049309)], null)))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasHeader",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"title","title",636505583)], null));
portfolio.ui.components.canvas.render_canvas = (function portfolio$ui$components$canvas$render_canvas(data){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544)], null))))?portfolio.ui.components.canvas.CanvasHeader.call(null,data):null),(cljs.core.truth_(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))?(cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data)))?portfolio.ui.components.canvas.Canvas.call(null,data):portfolio.ui.components.canvas.ComponentError.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(data))):null)], null));
});
/**
 * 
 */
portfolio.ui.components.canvas.Problem = dumdom.core.component.call(null,(function (p__17189){
var map__17190 = p__17189;
var map__17190__$1 = cljs.core.__destructure_map.call(null,map__17190);
var title = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var code = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg)",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h2","h2.h2",-608300904),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),text], null),portfolio.ui.components.code.Code.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Problem"], null));
portfolio.ui.components.canvas.direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),"column",new cljs.core.Keyword(null,"cols","cols",-1914801295),"row"], null);
/**
 * 
 */
portfolio.ui.components.canvas.WrappedMenuBar = dumdom.core.component.call(null,(function (menu_bar){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--bg)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--fg)",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null)], null),portfolio.ui.components.menu_bar.MenuBar.call(null,cljs.core.assoc.call(null,menu_bar,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704)))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/WrappedMenuBar"], null));
portfolio.ui.components.canvas.get_grid_styles = (function portfolio$ui$components$canvas$get_grid_styles(data){
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data)], null)));
});
portfolio.ui.components.canvas.touch_x = (function portfolio$ui$components$canvas$touch_x(e){
var or__5045__auto__ = (function (){var G__17191 = e;
var G__17191__$1 = (((G__17191 == null))?null:G__17191.changedTouches);
var G__17191__$2 = (((G__17191__$1 == null))?null:(G__17191__$1[(0)]));
if((G__17191__$2 == null)){
return null;
} else {
return G__17191__$2.screenX;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenX;
}
});
portfolio.ui.components.canvas.touch_y = (function portfolio$ui$components$canvas$touch_y(e){
var or__5045__auto__ = (function (){var G__17192 = e;
var G__17192__$1 = (((G__17192 == null))?null:G__17192.changedTouches);
var G__17192__$2 = (((G__17192__$1 == null))?null:(G__17192__$1[(0)]));
if((G__17192__$2 == null)){
return null;
} else {
return G__17192__$2.screenY;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenY;
}
});
portfolio.ui.components.canvas.get_style_n = (function portfolio$ui$components$canvas$get_style_n(style,prop){
return parseInt(style.getPropertyValue(prop),(10));
});
portfolio.ui.components.canvas.get_dim = (function portfolio$ui$components$canvas$get_dim(props,el){
var style = window.getComputedStyle(el);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n.call(null,style,"height"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n.call(null,style,"top")], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),portfolio.ui.components.canvas.get_style_n.call(null,style,"width"),new cljs.core.Keyword(null,"offset","offset",296498311),portfolio.ui.components.canvas.get_style_n.call(null,style,"left")], null);
}
});
portfolio.ui.components.canvas.set_size = (function portfolio$ui$components$canvas$set_size(props,el,size){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
} else {
return (el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join(''));
}
});
portfolio.ui.components.canvas.set_offset = (function portfolio$ui$components$canvas$set_offset(props,el,offset){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props))){
return (el.style.top = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
} else {
return (el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join(''));
}
});
portfolio.ui.components.canvas.get_neighbour = (function portfolio$ui$components$canvas$get_neighbour(el){
return el.nextSibling;
});
/**
 * 
 */
portfolio.ui.components.canvas.Handle = dumdom.core.component.call(null,(function (p__17193){
var map__17194 = p__17193;
var map__17194__$1 = cljs.core.__destructure_map.call(null,map__17194);
var kind = cljs.core.get.call(null,map__17194__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.draggable","div.draggable",-249226727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),kind))?new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null):new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"3px solid var(--hard-separator)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null))], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Handle",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (el,props){
var state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var f = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props)))?portfolio.ui.components.canvas.touch_y:portfolio.ui.components.canvas.touch_x);
var container = el.parentNode;
el.addEventListener("mousedown",(function (e){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true,new cljs.core.Keyword(null,"start","start",-355208981),f.call(null,e),new cljs.core.Keyword(null,"dim","dim",-497244536),portfolio.ui.components.canvas.get_dim.call(null,props,container),new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256),portfolio.ui.components.canvas.get_dim.call(null,props,portfolio.ui.components.canvas.get_neighbour.call(null,container)));

e.preventDefault();

return el.classList.add("dragging");
}));

document.body.addEventListener("mousemove",(function (e){
var map__17195 = cljs.core.deref.call(null,state);
var map__17195__$1 = cljs.core.__destructure_map.call(null,map__17195);
var dragging_QMARK_ = cljs.core.get.call(null,map__17195__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var start = cljs.core.get.call(null,map__17195__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var dim = cljs.core.get.call(null,map__17195__$1,new cljs.core.Keyword(null,"dim","dim",-497244536));
var neighbour_dim = cljs.core.get.call(null,map__17195__$1,new cljs.core.Keyword(null,"neighbour-dim","neighbour-dim",33598256));
if(cljs.core.truth_(dragging_QMARK_)){
var offset = (f.call(null,e) - start);
var neighbour = portfolio.ui.components.canvas.get_neighbour.call(null,container);
portfolio.ui.components.canvas.set_size.call(null,props,container,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(dim) + offset));

portfolio.ui.components.canvas.set_offset.call(null,props,neighbour,(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(neighbour_dim) + offset));

return portfolio.ui.components.canvas.set_size.call(null,props,neighbour,(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(neighbour_dim) - offset));
} else {
return null;
}
}));

return document.body.addEventListener("mouseup",(function (_e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))){
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));

return el.classList.remove("dragging");
} else {
return null;
}
}));
})], null));
/**
 * 
 */
portfolio.ui.components.canvas.Pane = dumdom.core.component.call(null,(function (p__17196){
var map__17197 = p__17196;
var map__17197__$1 = cljs.core.__destructure_map.call(null,map__17197);
var data = map__17197__$1;
var canvases = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"canvases","canvases",-441653731));
var description = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var browser = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"browser","browser",828191719));
var background = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"background","background",-863952629));
var menu_bar = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683));
var title = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"title","title",636505583));
var handle = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"handle","handle",1538948854));
var toolbar = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065));
var class_name = cljs.core.get.call(null,map__17197__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pane","div.pane",24297878),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.into.call(null,portfolio.ui.components.canvas.get_grid_styles.call(null,data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),(function (){var G__17198 = toolbar;
if((G__17198 == null)){
return null;
} else {
return portfolio.ui.components.canvas.Toolbar.call(null,G__17198);
}
})(),(function (){var G__17199 = menu_bar;
if((G__17199 == null)){
return null;
} else {
return portfolio.ui.components.canvas.WrappedMenuBar.call(null,G__17199);
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),"1",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"background","background",-863952629),background], null)),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?new cljs.core.Keyword(null,"dark","dark",1818973999):class_name)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(browser))?portfolio.ui.components.browser.Browser.call(null,browser):null),(cljs.core.truth_((function (){var or__5045__auto__ = title;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return description;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 20px 0"], null)], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null):null),(cljs.core.truth_(description)?portfolio.ui.components.markdown.Markdown.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),description], null)):null)], null):null),((cljs.core.seq.call(null,canvases))?cljs.core.mapcat.call(null,portfolio.ui.components.canvas.render_canvas,cljs.core.interpose.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),canvases)):null)], null),(function (){var G__17200 = handle;
if((G__17200 == null)){
return null;
} else {
return portfolio.ui.components.canvas.Handle.call(null,G__17200);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/Pane",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
portfolio.ui.components.canvas.render_layout = (function portfolio$ui$components$canvas$render_layout(data){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),null,new cljs.core.Keyword(null,"cols","cols",-1914801295),null], null), null).call(null,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),portfolio.ui.components.canvas.get_grid_styles.call(null,data),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(data)], null),cljs.core.map.call(null,portfolio.ui.components.canvas.render_layout,new cljs.core.Keyword(null,"xs","xs",649443341).cljs$core$IFn$_invoke$arity$1(data)),(function (){var G__17201 = new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(data);
if((G__17201 == null)){
return null;
} else {
return portfolio.ui.components.canvas.Handle.call(null,G__17201);
}
})()], null);
} else {
return portfolio.ui.components.canvas.Pane.call(null,data);
}
});
/**
 * 
 */
portfolio.ui.components.canvas.CanvasView = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5804__auto__)){
var problems = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null)], null),cljs.core.map.call(null,portfolio.ui.components.canvas.Problem,problems)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),portfolio.ui.components.canvas.render_layout.call(null,data)], null),(function (){var G__17202 = data;
var G__17202__$1 = (((G__17202 == null))?null:new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(G__17202));
if((G__17202__$1 == null)){
return null;
} else {
return portfolio.ui.components.canvas.CanvasPanel.call(null,G__17202__$1);
}
})()], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.canvas/CanvasView",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
