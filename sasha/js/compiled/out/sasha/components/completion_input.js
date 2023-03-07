// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.completion_input');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('dumdom.element');
/**
 * 
 */
sasha.components.completion_input.CompletionInput = dumdom.core.component.call(null,(function (data){
var complete_handler = dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"onComplete","onComplete",-661010670).cljs$core$IFn$_invoke$arity$1(data));
var submit_handler = dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194).cljs$core$IFn$_invoke$arity$1(data));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.suggestion","input.input.suggestion",1842104538),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"completion","completion",-731716930).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"background","background",-863952629),"transparent"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"completion","completion",-731716930).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__5043__auto____$1)){
return complete_handler;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return complete_handler.call(null,e);
} else {
return null;
}
}),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),(function (e){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,"Enter",e.key);
if(and__5043__auto__){
return submit_handler;
} else {
return and__5043__auto__;
}
})())){
e.preventDefault();

submit_handler.call(null,e);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Tab",null,"ArrowRight",null], null), null).call(null,e.key);
if(cljs.core.truth_(and__5043__auto__)){
return complete_handler;
} else {
return and__5043__auto__;
}
})())){
e.preventDefault();

return complete_handler.call(null,e);
} else {
return null;
}
}))], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.completion-input/CompletionInput"], null));
