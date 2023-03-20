// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.homeless');
goog.require('cljs.core');
portfolio.homeless.debounce = (function portfolio$homeless$debounce(f,ms){
var timer = cljs.core.atom.call(null,null);
return (function() { 
var G__12051__delegate = function (args){
var G__12050_12052 = cljs.core.deref.call(null,timer);
if((G__12050_12052 == null)){
} else {
clearTimeout(G__12050_12052);
}

return cljs.core.reset_BANG_.call(null,timer,setTimeout((function (){
return cljs.core.apply.call(null,f,args);
}),ms));
};
var G__12051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12053__i = 0, G__12053__a = new Array(arguments.length -  0);
while (G__12053__i < G__12053__a.length) {G__12053__a[G__12053__i] = arguments[G__12053__i + 0]; ++G__12053__i;}
  args = new cljs.core.IndexedSeq(G__12053__a,0,null);
} 
return G__12051__delegate.call(this,args);};
G__12051.cljs$lang$maxFixedArity = 0;
G__12051.cljs$lang$applyTo = (function (arglist__12054){
var args = cljs.core.seq(arglist__12054);
return G__12051__delegate(args);
});
G__12051.cljs$core$IFn$_invoke$arity$variadic = G__12051__delegate;
return G__12051;
})()
;
});
