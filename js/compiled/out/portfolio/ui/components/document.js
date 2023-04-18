// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.document');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('markdown.core');
goog.require('portfolio.ui.components.markdown');
/**
 * 
 */
portfolio.ui.components.document.Document = dumdom.core.component.call(null,(function (p__17756){
var map__17757 = p__17756;
var map__17757__$1 = cljs.core.__destructure_map.call(null,map__17757);
var title = cljs.core.get.call(null,map__17757__$1,new cljs.core.Keyword(null,"title","title",636505583));
var sections = cljs.core.get.call(null,map__17757__$1,new cljs.core.Keyword(null,"sections","sections",-886710106));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.document.dark","div.document.dark",55162069),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),title], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$document$iter__17758(s__17759){
return (new cljs.core.LazySeq(null,(function (){
var s__17759__$1 = s__17759;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17759__$1);
if(temp__5804__auto__){
var s__17759__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17759__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17759__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17761 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17760 = (0);
while(true){
if((i__17760 < size__5522__auto__)){
var section = cljs.core._nth.call(null,c__5521__auto__,i__17760);
cljs.core.chunk_append.call(null,b__17761,(function (){var G__17762 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__17762__$1 = (((G__17762 instanceof cljs.core.Keyword))?G__17762.fqn:null);
switch (G__17762__$1) {
case "markdown":
return portfolio.ui.components.markdown.Markdown.call(null,cljs.core.update.call(null,section,new cljs.core.Keyword(null,"markdown","markdown",1227225089),markdown.core.md__GT_html));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17762__$1)].join('')));

}
})());

var G__17765 = (i__17760 + (1));
i__17760 = G__17765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17761),portfolio$ui$components$document$iter__17758.call(null,cljs.core.chunk_rest.call(null,s__17759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17761),null);
}
} else {
var section = cljs.core.first.call(null,s__17759__$2);
return cljs.core.cons.call(null,(function (){var G__17763 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(section);
var G__17763__$1 = (((G__17763 instanceof cljs.core.Keyword))?G__17763.fqn:null);
switch (G__17763__$1) {
case "markdown":
return portfolio.ui.components.markdown.Markdown.call(null,cljs.core.update.call(null,section,new cljs.core.Keyword(null,"markdown","markdown",1227225089),markdown.core.md__GT_html));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17763__$1)].join('')));

}
})(),portfolio$ui$components$document$iter__17758.call(null,cljs.core.rest.call(null,s__17759__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,sections);
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.document/Document"], null));
