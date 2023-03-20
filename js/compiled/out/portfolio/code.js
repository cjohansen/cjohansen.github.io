// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.code');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');

/**
 * @interface
 */
portfolio.code.ICodeString = function(){};

var portfolio$code$ICodeString$format_code$dyn_10851 = (function (x){
var x__5393__auto__ = (((x == null))?null:x);
var m__5394__auto__ = (portfolio.code.format_code[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,x);
} else {
var m__5392__auto__ = (portfolio.code.format_code["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ICodeString.format-code",x);
}
}
});
portfolio.code.format_code = (function portfolio$code$format_code(x){
var temp__5802__auto__ = cljs.core.get.call(null,cljs.core.meta.call(null,x),cljs.core.with_meta(new cljs.core.Symbol("portfolio.code","format-code","portfolio.code/format-code",133517642,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5802__auto__){
var meta_impl__5395__auto__ = temp__5802__auto__;
return meta_impl__5395__auto__.call(null,x);
} else {
if((((!((x == null)))) && ((!((x.portfolio$code$ICodeString$format_code$arity$1 == null)))))){
return x.portfolio$code$ICodeString$format_code$arity$1(x);
} else {
return portfolio$code$ICodeString$format_code$dyn_10851.call(null,x);
}
}
});

(portfolio.code.ICodeString["_"] = true);

(portfolio.code.format_code["_"] = (function (x){
return x;
}));
portfolio.code.blank_QMARK_ = (function portfolio$code$blank_QMARK_(x){
return (((x == null)) || (((((cljs.core.coll_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x)))) || (((typeof x === 'string') && (cljs.core.empty_QMARK_.call(null,x)))))));
});
portfolio.code.code_str = (function portfolio$code$code_str(data){
if((!(portfolio.code.blank_QMARK_.call(null,data)))){
var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10852_10856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10853_10857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10854_10858 = true;
var _STAR_print_fn_STAR__temp_val__10855_10859 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10854_10858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10855_10859);

try{cljs.pprint.pprint.call(null,clojure.walk.postwalk.call(null,portfolio.code.format_code,data));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10853_10857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10852_10856);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
} else {
return null;
}
});
