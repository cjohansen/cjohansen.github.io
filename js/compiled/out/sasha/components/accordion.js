// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.accordion');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('sasha.components.elastic_container');
goog.require('sasha.icons');
/**
 * 
 */
sasha.components.accordion.BellowBody = dumdom.core.component.call(null,(function (p__15367){
var map__15368 = p__15367;
var map__15368__$1 = cljs.core.__destructure_map.call(null,map__15368);
var text = cljs.core.get.call(null,map__15368__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 48px 24px 24px"], null)], null),text], null)], null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.accordion/BellowBody",new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),sasha.components.elastic_container.enter.call(null),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),sasha.components.elastic_container.leave.call(null)], null));
/**
 * 
 */
sasha.components.accordion.Bellow = dumdom.core.component.call(null,(function (p__15369){
var map__15370 = p__15369;
var map__15370__$1 = cljs.core.__destructure_map.call(null,map__15370);
var title = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"title","title",636505583));
var toggle = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var content = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"content","content",15833224));
var actions = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var on_click = cljs.core.get.call(null,map__15370__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bellow","div.bellow",-1167427640),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--bellow-border)"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.row-s","div.row.row-s",1751365352),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){var or__5045__auto__ = actions;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return on_click;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),title,(function (){var temp__5804__auto__ = toggle;
if(cljs.core.truth_(temp__5804__auto__)){
var map__15371 = temp__5804__auto__;
var map__15371__$1 = cljs.core.__destructure_map.call(null,map__15371);
var icon = cljs.core.get.call(null,map__15371__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var rotation = cljs.core.get.call(null,map__15371__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
return sasha.icons.render.call(null,icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.15s ease-in",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = rotation;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()),"deg)"].join('')], null)], null));
} else {
return null;
}
})()], null),(cljs.core.truth_(content)?sasha.components.accordion.BellowBody.call(null,content):null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.accordion/Bellow"], null));
/**
 * 
 */
sasha.components.accordion.Accordion = dumdom.core.component.call(null,(function (p__15372){
var map__15373 = p__15372;
var map__15373__$1 = cljs.core.__destructure_map.call(null,map__15373);
var items = cljs.core.get.call(null,map__15373__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,sasha.components.accordion.Bellow,items)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.accordion/Accordion"], null));
