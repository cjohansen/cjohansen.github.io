// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.spinner');
goog.require('cljs.core');
sasha.components.spinner.Spinner = (function sasha$components$spinner$Spinner(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15466 = arguments.length;
var i__5770__auto___15467 = (0);
while(true){
if((i__5770__auto___15467 < len__5769__auto___15466)){
args__5775__auto__.push((arguments[i__5770__auto___15467]));

var G__15468 = (i__5770__auto___15467 + (1));
i__5770__auto___15467 = G__15468;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sasha.components.spinner.Spinner.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sasha.components.spinner.Spinner.cljs$core$IFn$_invoke$arity$variadic = (function (p__15462){
var vec__15463 = p__15462;
var attrs = cljs.core.nth.call(null,vec__15463,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.spinner","svg.spinner",-48573392),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.spinner-inner","g.spinner-inner",620849111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"10",new cljs.core.Keyword(null,"cx","cx",1272694324),"50",new cljs.core.Keyword(null,"cy","cy",755331060),"50",new cljs.core.Keyword(null,"r","r",-471384190),"31",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"var(--spinner-track)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.spinner-circle","circle.spinner-circle",886452578),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060)],["200","31","var(--spinner-line)","none","0","round","10","50","50"])], null)], null)], null);
}));

(sasha.components.spinner.Spinner.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sasha.components.spinner.Spinner.cljs$lang$applyTo = (function (seq15461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15461));
}));

