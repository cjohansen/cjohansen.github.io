// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.tab_bar');
goog.require('cljs.core');
goog.require('dumdom.core');
/**
 * 
 */
portfolio.ui.components.tab_bar.TabBar = dumdom.core.component.call(null,(function (p__15797){
var map__15798 = p__15797;
var map__15798__$1 = cljs.core.__destructure_map.call(null,map__15798);
var tabs = cljs.core.get.call(null,map__15798__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function portfolio$ui$components$tab_bar$iter__15799(s__15800){
return (new cljs.core.LazySeq(null,(function (){
var s__15800__$1 = s__15800;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15800__$1);
if(temp__5804__auto__){
var s__15800__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15800__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15800__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15802 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15801 = (0);
while(true){
if((i__15801 < size__5522__auto__)){
var map__15803 = cljs.core._nth.call(null,c__5521__auto__,i__15801);
var map__15803__$1 = cljs.core.__destructure_map.call(null,map__15803);
var title = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"url","url",276297046));
var selected_QMARK_ = cljs.core.get.call(null,map__15803__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
cljs.core.chunk_append.call(null,b__15802,(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid var(--highlight-color)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--highlight-color)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)));

var G__15805 = (i__15801 + (1));
i__15801 = G__15805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15802),portfolio$ui$components$tab_bar$iter__15799.call(null,cljs.core.chunk_rest.call(null,s__15800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15802),null);
}
} else {
var map__15804 = cljs.core.first.call(null,s__15800__$2);
var map__15804__$1 = cljs.core.__destructure_map.call(null,map__15804);
var title = cljs.core.get.call(null,map__15804__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__15804__$1,new cljs.core.Keyword(null,"url","url",276297046));
var selected_QMARK_ = cljs.core.get.call(null,map__15804__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return cljs.core.cons.call(null,(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid var(--highlight-color)",new cljs.core.Keyword(null,"color","color",1011675173),"var(--highlight-color)"], null)], null),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null)),portfolio$ui$components$tab_bar$iter__15799.call(null,cljs.core.rest.call(null,s__15800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,tabs);
})()], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.tab-bar/TabBar"], null));
