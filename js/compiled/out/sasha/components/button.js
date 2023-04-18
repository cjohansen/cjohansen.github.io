// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.button');
goog.require('cljs.core');
goog.require('sasha.components.spinner');
sasha.components.button.Button = (function sasha$components$button$Button(p__17645){
var map__17646 = p__17645;
var map__17646__$1 = cljs.core.__destructure_map.call(null,map__17646);
var props = map__17646__$1;
var id = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var text = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var type = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var href = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var disabled_QMARK_ = cljs.core.get.call(null,map__17646__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["submit",null,"button",null], null), null).call(null,type))?new cljs.core.Keyword(null,"button","button",1456579943):new cljs.core.Keyword(null,"a","a",-2123407586)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),["button text-m",(cljs.core.truth_(disabled_QMARK_)?" button-disabled":null)].join('')], null),(cljs.core.truth_(type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null):null),(cljs.core.truth_((function (){var and__5043__auto__ = type;
if(cljs.core.truth_(and__5043__auto__)){
return disabled_QMARK_;
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"true"], null):null),(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null),(cljs.core.truth_(href)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null):null)),(cljs.core.truth_(new cljs.core.Keyword(null,"spinner?","spinner?",939139177).cljs$core$IFn$_invoke$arity$1(props))?sasha.components.spinner.Spinner.call(null):null),text], null);
});
