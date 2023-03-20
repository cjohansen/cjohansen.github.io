// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.popup_menu');
goog.require('cljs.core');
goog.require('dumdom.core');
/**
 * 
 */
portfolio.components.popup_menu.PopupMenu = dumdom.core.component.call(null,(function (p__11851){
var map__11852 = p__11851;
var map__11852__$1 = cljs.core.__destructure_map.call(null,map__11852);
var options = cljs.core.get.call(null,map__11852__$1,new cljs.core.Keyword(null,"options","options",99638489));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"50%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)],["rgba(0, 0, 0, 0.1) 0px 1px 5px 0px","translateX(-50%)",(40),(200),"#fff",(1),"10px 0","fixed",(4)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate3d(-50%, 0px, 0px)",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"top","top",-1856271961),(-8),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0px 8px 8px",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"transparent transparent rgba(255, 255, 255, 0.95)"], null)], null)], null),(function (){var iter__5523__auto__ = (function portfolio$components$popup_menu$iter__11853(s__11854){
return (new cljs.core.LazySeq(null,(function (){
var s__11854__$1 = s__11854;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11854__$1);
if(temp__5804__auto__){
var s__11854__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11854__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11854__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11856 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11855 = (0);
while(true){
if((i__11855 < size__5522__auto__)){
var map__11857 = cljs.core._nth.call(null,c__5521__auto__,i__11855);
var map__11857__$1 = cljs.core.__destructure_map.call(null,map__11857);
var title = cljs.core.get.call(null,map__11857__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11857__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var actions = cljs.core.get.call(null,map__11857__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append.call(null,b__11856,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.hoverable","button.button.hoverable",1635518314),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"#f8f8f8":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?"bold":null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":"default"),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),title], null));

var G__11859 = (i__11855 + (1));
i__11855 = G__11859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11856),portfolio$components$popup_menu$iter__11853.call(null,cljs.core.chunk_rest.call(null,s__11854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11856),null);
}
} else {
var map__11858 = cljs.core.first.call(null,s__11854__$2);
var map__11858__$1 = cljs.core.__destructure_map.call(null,map__11858);
var title = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var actions = cljs.core.get.call(null,map__11858__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.hoverable","button.button.hoverable",1635518314),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"#f8f8f8":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?"bold":null),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":"default"),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),title], null),portfolio$components$popup_menu$iter__11853.call(null,cljs.core.rest.call(null,s__11854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,options);
})()], null)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.popup-menu/PopupMenu",new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el,_){
var left = el.getBoundingClientRect().left;
var width = el.firstChild.getBoundingClientRect().width;
var button_width = el.parentNode.getBoundingClientRect().width;
if(((left - (width / (2))) < (0))){
(el.style.left = "0");

(el.firstChild.style.transform = null);

return (el.firstChild.firstChild.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((button_width / (2))),"px"].join(''));
} else {
return null;
}
})], null));
