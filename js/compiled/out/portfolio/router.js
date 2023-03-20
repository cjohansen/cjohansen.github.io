// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.router');
goog.require('cljs.core');
goog.require('clojure.string');
portfolio.router.parse_qs_val = (function portfolio$router$parse_qs_val(v){
var v__$1 = decodeURIComponent(v);
if(cljs.core.truth_(cljs.core.re_find.call(null,/^\d+$/,v__$1))){
return parseInt(v__$1,(10));
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^\d+\.\d+$/,v__$1))){
return parseFloat(v__$1);
} else {
if(cljs.core._EQ_.call(null,"true",v__$1)){
return true;
} else {
if(cljs.core._EQ_.call(null,"false",v__$1)){
return false;
} else {
return v__$1;

}
}
}
}
});
portfolio.router.parse_key = (function portfolio$router$parse_key(k){
if(cljs.core.truth_(cljs.core.re_find.call(null,/__/,k))){
return cljs.core.mapv.call(null,portfolio.router.parse_key,clojure.string.split.call(null,k,/__/));
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^\d+$/,k))){
return parseInt(k,(10));
} else {
return cljs.core.keyword.call(null,k);

}
}
});
/**
 * Parse a query string into a map with keyword keys. Query params that have no
 *   value (e.g. `...&key&other-key`) will be parsed with `true` as the value.
 */
portfolio.router.parse_query_params = (function portfolio$router$parse_query_params(query_string){
var G__12168 = clojure.string.split.call(null,query_string,/&/);
var G__12168__$1 = (((G__12168 == null))?null:cljs.core.remove.call(null,cljs.core.empty_QMARK_,G__12168));
var G__12168__$2 = (((G__12168__$1 == null))?null:cljs.core.seq.call(null,G__12168__$1));
var G__12168__$3 = (((G__12168__$2 == null))?null:cljs.core.map.call(null,(function (s){
if(cljs.core.truth_(cljs.core.re_find.call(null,/=/,s))){
var vec__12169 = clojure.string.split.call(null,s,/=/);
var seq__12170 = cljs.core.seq.call(null,vec__12169);
var first__12171 = cljs.core.first.call(null,seq__12170);
var seq__12170__$1 = cljs.core.next.call(null,seq__12170);
var k = first__12171;
var v = seq__12170__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.router.parse_key.call(null,k),portfolio.router.parse_qs_val.call(null,clojure.string.join.call(null,"=",v))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.router.parse_key.call(null,s),true], null);
}
}),G__12168__$2));
if((G__12168__$3 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12168__$3);
}
});
portfolio.router.get_location = (function portfolio$router$get_location(url){
var vec__12172 = clojure.string.split.call(null,url,/\?/);
var path = cljs.core.nth.call(null,vec__12172,(0),null);
var query = cljs.core.nth.call(null,vec__12172,(1),null);
var G__12175 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null);
if(typeof query === 'string'){
return cljs.core.assoc.call(null,G__12175,new cljs.core.Keyword(null,"query-params","query-params",900640534),portfolio.router.parse_query_params.call(null,query));
} else {
return G__12175;
}
});
portfolio.router.get_current_url = (function portfolio$router$get_current_url(){
return window.location.href.replace(window.location.origin,"");
});
portfolio.router.get_current_location = (function portfolio$router$get_current_location(){
return portfolio.router.get_location.call(null,portfolio.router.get_current_url.call(null));
});
portfolio.router.blank_QMARK_ = (function portfolio$router$blank_QMARK_(v){
return (((v == null)) || (((v === false) || (((((cljs.core.coll_QMARK_.call(null,v)) && (cljs.core.empty_QMARK_.call(null,v)))) || (cljs.core._EQ_.call(null,v,"")))))));
});
portfolio.router.stringify_key = (function portfolio$router$stringify_key(k){
if((k instanceof cljs.core.Keyword)){
return [(function (){var temp__5804__auto__ = cljs.core.namespace.call(null,k);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name.call(null,k)].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,k)){
return clojure.string.join.call(null,"__",cljs.core.map.call(null,portfolio.router.stringify_key,k));
} else {
return k;

}
}
});
/**
 * Encode a map as a query string. Empty values (nil, empty strings, empty
 *   collections, false values) are omitted from the resulting string.
 */
portfolio.router.encode_query_params = (function portfolio$router$encode_query_params(params){
if(cljs.core.empty_QMARK_.call(null,params)){
return "";
} else {
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__12176){
var vec__12177 = p__12176;
var k = cljs.core.nth.call(null,vec__12177,(0),null);
var v = cljs.core.nth.call(null,vec__12177,(1),null);
var k__$1 = portfolio.router.stringify_key.call(null,k);
if(v === true){
return k__$1;
} else {
if((v instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([(function (){var temp__5804__auto__ = cljs.core.namespace.call(null,v);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [ns,"/"].join('');
} else {
return null;
}
})(),cljs.core.name.call(null,v)].join('')))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__$1),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(v))].join('');

}
}
}),cljs.core.remove.call(null,cljs.core.comp.call(null,portfolio.router.blank_QMARK_,cljs.core.second),params)));
}
});
portfolio.router.get_url = (function portfolio$router$get_url(location){
var qs = portfolio.router.encode_query_params.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(location));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(location)),((cljs.core.empty_QMARK_.call(null,qs))?null:["?",qs].join(''))].join('');
});
