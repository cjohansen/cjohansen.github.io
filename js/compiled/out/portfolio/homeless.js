// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.homeless');
goog.require('cljs.core');
goog.require('clojure.string');
portfolio.homeless.debounce = (function portfolio$homeless$debounce(f,ms){
var timer = cljs.core.atom.call(null,null);
return (function() { 
var G__15380__delegate = function (args){
var G__15379_15381 = cljs.core.deref.call(null,timer);
if((G__15379_15381 == null)){
} else {
clearTimeout(G__15379_15381);
}

return cljs.core.reset_BANG_.call(null,timer,setTimeout((function (){
return cljs.core.apply.call(null,f,args);
}),ms));
};
var G__15380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15382__i = 0, G__15382__a = new Array(arguments.length -  0);
while (G__15382__i < G__15382__a.length) {G__15382__a[G__15382__i] = arguments[G__15382__i + 0]; ++G__15382__i;}
  args = new cljs.core.IndexedSeq(G__15382__a,0,null);
} 
return G__15380__delegate.call(this,args);};
G__15380.cljs$lang$maxFixedArity = 0;
G__15380.cljs$lang$applyTo = (function (arglist__15383){
var args = cljs.core.seq(arglist__15383);
return G__15380__delegate(args);
});
G__15380.cljs$core$IFn$_invoke$arity$variadic = G__15380__delegate;
return G__15380;
})()
;
});
portfolio.homeless.get_words = (function portfolio$homeless$get_words(s){
if(cljs.core.truth_(cljs.core.not_empty.call(null,s))){
return clojure.string.split.call(null,s,/[\- ]+/);
} else {
return null;
}
});
portfolio.homeless.__GT_title = (function portfolio$homeless$__GT_title(s){
return clojure.string.capitalize.call(null,clojure.string.join.call(null," ",portfolio.homeless.get_words.call(null,s)));
});
portfolio.homeless.title_case = (function portfolio$homeless$title_case(s){
return clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,portfolio.homeless.get_words.call(null,s)));
});
