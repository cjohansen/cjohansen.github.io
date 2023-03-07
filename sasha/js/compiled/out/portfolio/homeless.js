// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.homeless');
goog.require('cljs.core');
portfolio.homeless.debounce = (function portfolio$homeless$debounce(f,ms){
var timer = cljs.core.atom.call(null,null);
return (function() { 
var G__15708__delegate = function (args){
var G__15707_15709 = cljs.core.deref.call(null,timer);
if((G__15707_15709 == null)){
} else {
clearTimeout(G__15707_15709);
}

return cljs.core.reset_BANG_.call(null,timer,setTimeout((function (){
return cljs.core.apply.call(null,f,args);
}),ms));
};
var G__15708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15710__i = 0, G__15710__a = new Array(arguments.length -  0);
while (G__15710__i < G__15710__a.length) {G__15710__a[G__15710__i] = arguments[G__15710__i + 0]; ++G__15710__i;}
  args = new cljs.core.IndexedSeq(G__15710__a,0,null);
} 
return G__15708__delegate.call(this,args);};
G__15708.cljs$lang$maxFixedArity = 0;
G__15708.cljs$lang$applyTo = (function (arglist__15711){
var args = cljs.core.seq(arglist__15711);
return G__15708__delegate(args);
});
G__15708.cljs$core$IFn$_invoke$arity$variadic = G__15708__delegate;
return G__15708;
})()
;
});
