// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.form');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('sasha.components.button');
goog.require('sasha.components.labeled_input');
goog.require('sasha.icons');
/**
 * 
 */
sasha.components.form.Form = dumdom.core.component.call(null,(function (p__17675){
var map__17676 = p__17675;
var map__17676__$1 = cljs.core.__destructure_map.call(null,map__17676);
var fields = cljs.core.get.call(null,map__17676__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var button = cljs.core.get.call(null,map__17676__$1,new cljs.core.Keyword(null,"button","button",1456579943));
var actions = cljs.core.get.call(null,map__17676__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form","form.form",1777183647),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),actions], null),(function (){var iter__5523__auto__ = (function sasha$components$form$iter__17677(s__17678){
return (new cljs.core.LazySeq(null,(function (){
var s__17678__$1 = s__17678;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17678__$1);
if(temp__5804__auto__){
var s__17678__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17678__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17678__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17680 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17679 = (0);
while(true){
if((i__17679 < size__5522__auto__)){
var field = cljs.core._nth.call(null,c__5521__auto__,i__17679);
cljs.core.chunk_append.call(null,b__17680,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),sasha.components.labeled_input.LabeledInput.call(null,field)], null));

var G__17681 = (i__17679 + (1));
i__17679 = G__17681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17680),sasha$components$form$iter__17677.call(null,cljs.core.chunk_rest.call(null,s__17678__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17680),null);
}
} else {
var field = cljs.core.first.call(null,s__17678__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),sasha.components.labeled_input.LabeledInput.call(null,field)], null),sasha$components$form$iter__17677.call(null,cljs.core.rest.call(null,s__17678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,fields);
})(),(cljs.core.truth_(button)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.line","div.line",-1849347203),sasha.components.button.Button.call(null,button)], null):null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.form/Form"], null));
/**
 * 
 */
sasha.components.form.Receipt = dumdom.core.component.call(null,(function (p__17682){
var map__17683 = p__17682;
var map__17683__$1 = cljs.core.__destructure_map.call(null,map__17683);
var title = cljs.core.get.call(null,map__17683__$1,new cljs.core.Keyword(null,"title","title",636505583));
var icon = cljs.core.get.call(null,map__17683__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var text = cljs.core.get.call(null,map__17683__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var fields = cljs.core.get.call(null,map__17683__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.article","div.article",-2093022880),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h3.mod","h2.h3.mod",-1804883470),title,(cljs.core.truth_(icon)?sasha.icons.render.call(null,icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(24),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(8)], null)], null)):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mod","p.mod",441848325),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.mod","ul.mod",-1455582640),(function (){var iter__5523__auto__ = (function sasha$components$form$iter__17684(s__17685){
return (new cljs.core.LazySeq(null,(function (){
var s__17685__$1 = s__17685;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17685__$1);
if(temp__5804__auto__){
var s__17685__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17685__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17685__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17687 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17686 = (0);
while(true){
if((i__17686 < size__5522__auto__)){
var map__17688 = cljs.core._nth.call(null,c__5521__auto__,i__17686);
var map__17688__$1 = cljs.core.__destructure_map.call(null,map__17688);
var label = cljs.core.get.call(null,map__17688__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.call(null,map__17688__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append.call(null,b__17687,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),label,":"], null)," ",value], null));

var G__17690 = (i__17686 + (1));
i__17686 = G__17690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17687),sasha$components$form$iter__17684.call(null,cljs.core.chunk_rest.call(null,s__17685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17687),null);
}
} else {
var map__17689 = cljs.core.first.call(null,s__17685__$2);
var map__17689__$1 = cljs.core.__destructure_map.call(null,map__17689);
var label = cljs.core.get.call(null,map__17689__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.call(null,map__17689__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),label,":"], null)," ",value], null),sasha$components$form$iter__17684.call(null,cljs.core.rest.call(null,s__17685__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,fields);
})()], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.form/Receipt"], null));
