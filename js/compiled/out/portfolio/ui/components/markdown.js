// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.markdown');
goog.require('cljs.core');
goog.require('dumdom.core');
portfolio.ui.components.markdown.langs = new cljs.core.PersistentArrayMap(null, 2, ["clj","clojure","cljs","clojure"], null);
/**
 * 
 */
portfolio.ui.components.markdown.Markdown = dumdom.core.component.call(null,(function (p__17048){
var map__17049 = p__17048;
var map__17049__$1 = cljs.core.__destructure_map.call(null,map__17049);
var markdown__$1 = cljs.core.get.call(null,map__17049__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.md","div.md",1540365753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown__$1], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.markdown/Markdown",new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el,props){
var seq__17050 = cljs.core.seq.call(null,el.querySelectorAll("pre"));
var chunk__17051 = null;
var count__17052 = (0);
var i__17053 = (0);
while(true){
if((i__17053 < count__17052)){
var pre = cljs.core._nth.call(null,chunk__17051,i__17053);
var code_17054 = pre.firstElementChild;
if(cljs.core._EQ_.call(null,"CODE",code_17054.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = portfolio.ui.components.markdown.langs.call(null,code_17054.className);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code_17054.className;
}
})())].join(''));

Prism.highlightElement(pre);
} else {
}


var G__17055 = seq__17050;
var G__17056 = chunk__17051;
var G__17057 = count__17052;
var G__17058 = (i__17053 + (1));
seq__17050 = G__17055;
chunk__17051 = G__17056;
count__17052 = G__17057;
i__17053 = G__17058;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17050);
if(temp__5804__auto__){
var seq__17050__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17050__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__17050__$1);
var G__17059 = cljs.core.chunk_rest.call(null,seq__17050__$1);
var G__17060 = c__5568__auto__;
var G__17061 = cljs.core.count.call(null,c__5568__auto__);
var G__17062 = (0);
seq__17050 = G__17059;
chunk__17051 = G__17060;
count__17052 = G__17061;
i__17053 = G__17062;
continue;
} else {
var pre = cljs.core.first.call(null,seq__17050__$1);
var code_17063 = pre.firstElementChild;
if(cljs.core._EQ_.call(null,"CODE",code_17063.tagName)){
(pre.className = ["language-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = portfolio.ui.components.markdown.langs.call(null,code_17063.className);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return code_17063.className;
}
})())].join(''));

Prism.highlightElement(pre);
} else {
}


var G__17064 = cljs.core.next.call(null,seq__17050__$1);
var G__17065 = null;
var G__17066 = (0);
var G__17067 = (0);
seq__17050 = G__17064;
chunk__17051 = G__17065;
count__17052 = G__17066;
i__17053 = G__17067;
continue;
}
} else {
return null;
}
}
break;
}
})], null));
