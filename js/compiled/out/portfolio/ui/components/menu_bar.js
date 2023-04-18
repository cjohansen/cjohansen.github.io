// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.menu_bar');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.ui.icons');
/**
 * 
 */
portfolio.ui.components.menu_bar.MenuBar = dumdom.core.component.call(null,(function (p__16683){
var map__16684 = p__16683;
var map__16684__$1 = cljs.core.__destructure_map.call(null,map__16684);
var title = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var illustration = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var size = cljs.core.get.call(null,map__16684__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),(10),new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),(cljs.core.truth_(illustration)?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"small","small",2133478704),size))?(16):(24)),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)], null)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"small","small",2133478704),size))?new cljs.core.Keyword(null,"h4","h4",2004862993):new cljs.core.Keyword(null,"h3","h3",2067611163)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(8)], null)], null),cljs.core.interpose.call(null,portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword("portfolio.ui.icons","caret-right","portfolio.ui.icons/caret-right",-995190735),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(16)], null)),(function (){var iter__5523__auto__ = (function portfolio$ui$components$menu_bar$iter__16685(s__16686){
return (new cljs.core.LazySeq(null,(function (){
var s__16686__$1 = s__16686;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16686__$1);
if(temp__5804__auto__){
var s__16686__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16686__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16686__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16688 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16687 = (0);
while(true){
if((i__16687 < size__5522__auto__)){
var map__16689 = cljs.core._nth.call(null,c__5521__auto__,i__16687);
var map__16689__$1 = cljs.core.__destructure_map.call(null,map__16689);
var text = cljs.core.get.call(null,map__16689__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.call(null,map__16689__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__16688,(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--subdued-link)"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null):text));

var G__16691 = (i__16687 + (1));
i__16687 = G__16691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16688),portfolio$ui$components$menu_bar$iter__16685.call(null,cljs.core.chunk_rest.call(null,s__16686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16688),null);
}
} else {
var map__16690 = cljs.core.first.call(null,s__16686__$2);
var map__16690__$1 = cljs.core.__destructure_map.call(null,map__16690);
var text = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var url = cljs.core.get.call(null,map__16690__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,(cljs.core.truth_(url)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--subdued-link)"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),text], null):text),portfolio$ui$components$menu_bar$iter__16685.call(null,cljs.core.rest.call(null,s__16686__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,title);
})())], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(action)], null)):null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.menu-bar/MenuBar"], null));
