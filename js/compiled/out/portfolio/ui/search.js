// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.search');
goog.require('cljs.core');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.routes');
goog.require('portfolio.ui.search.pliable_index');
goog.require('portfolio.ui.search.protocols');
portfolio.ui.search.get_diff_keys = (function portfolio$ui$search$get_diff_keys(m1,m2){
return cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__17864){
var vec__17865 = p__17864;
var k = cljs.core.nth.call(null,vec__17865,(0),null);
var v = cljs.core.nth.call(null,vec__17865,(1),null);
return cljs.core.not_EQ_.call(null,m2.call(null,k),v);
}),m1));
});
portfolio.ui.search.get_diffables = (function portfolio$ui$search$get_diffables(f,xs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__17868){
var vec__17869 = p__17868;
var k = cljs.core.nth.call(null,vec__17869,(0),null);
var v = cljs.core.nth.call(null,vec__17869,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.ifn_QMARK_.call(null,f))?f.call(null,v):v)], null);
}),xs));
});
portfolio.ui.search.indexable_QMARK_ = (function portfolio$ui$search$indexable_QMARK_(x){
return (((!(cljs.core.fn_QMARK_.call(null,x)))) && ((!((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x))))));
});
portfolio.ui.search.__GT_indexable = (function portfolio$ui$search$__GT_indexable(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,portfolio.ui.search.indexable_QMARK_,cljs.core.second),x));
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.filter.call(null,portfolio.ui.search.indexable_QMARK_,x);
} else {
if(portfolio.ui.search.indexable_QMARK_.call(null,x)){
return x;
} else {
return null;
}

}
}
});
portfolio.ui.search.get_indexable_data = (function portfolio$ui$search$get_indexable_data(x){
var res = portfolio.ui.search.__GT_indexable.call(null,cljs.core.dissoc.call(null,x,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"idx","idx",1053688473),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"component-fn","component-fn",-266012750)));
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.core.update.call(null,res,new cljs.core.Keyword(null,"params","params",710516235),portfolio.ui.search.__GT_indexable);
} else {
if(cljs.core.coll_QMARK_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.core.update.call(null,res,new cljs.core.Keyword(null,"params","params",710516235),portfolio.ui.search.__GT_indexable);
} else {
return res;

}
}
});
portfolio.ui.search.get_params_data = (function portfolio$ui$search$get_params_data(scene){
return cljs.core.filter.call(null,(function (p1__17873_SHARP_){
return ((typeof p1__17873_SHARP_ === 'string') || ((p1__17873_SHARP_ instanceof cljs.core.Keyword)));
}),cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.identity,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(scene)));
});
portfolio.ui.search.ngram_tokenizers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.search.pliable_index.stringify_keyword,portfolio.ui.search.pliable_index.remove_diacritics,portfolio.ui.search.pliable_index.tokenize_words,cljs.core.partial.call(null,portfolio.ui.search.pliable_index.tokenize_ngrams,(2),(3))], null);
portfolio.ui.search.prefix_tokenizers = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.search.pliable_index.stringify_keyword,portfolio.ui.search.pliable_index.remove_diacritics,portfolio.ui.search.pliable_index.tokenize_words,cljs.core.partial.call(null,portfolio.ui.search.pliable_index.tokenize_edge_ngrams,(2),(10))], null);
portfolio.ui.search.index_scene = (function portfolio$ui$search$index_scene(index,scene){
return portfolio.ui.search.pliable_index.index_document.call(null,index,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"title.ngram","title.ngram",2111064370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.ngram_tokenizers], null),new cljs.core.Keyword(null,"title.prefix","title.prefix",-78490959),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.prefix_tokenizers], null),new cljs.core.Keyword(null,"docs","docs",-1974280502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"docs.ngram","docs.ngram",-1250889003),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"docs","docs",-1974280502),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.ngram_tokenizers], null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params-data","params-data",350240670),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),portfolio.ui.search.get_params_data], null)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),scene);
});
portfolio.ui.search.search = (function portfolio$ui$search$search(index,q){
return portfolio.ui.search.pliable_index.query.call(null,index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"queries","queries",1446291995),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"boost","boost",-673419773),(3)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.prefix_tokenizers,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title.prefix","title.prefix",-78490959),null], null), null),new cljs.core.Keyword(null,"boost","boost",-673419773),(2)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"q","q",689001697),q,new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526),portfolio.ui.search.ngram_tokenizers,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title.ngram","title.ngram",2111064370),null,new cljs.core.Keyword(null,"docs.ngram","docs.ngram",-1250889003),null], null), null),new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"min-accuracy","min-accuracy",-324212083),0.5], null)], null)], null));
});
portfolio.ui.search.create_index = (function portfolio$ui$search$create_index(){
var index = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof portfolio !== 'undefined') && (typeof portfolio.ui !== 'undefined') && (typeof portfolio.ui.search !== 'undefined') && (typeof portfolio.ui.search.t_portfolio$ui$search17874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {portfolio.ui.search.protocols.Index}
 * @implements {cljs.core.IWithMeta}
*/
portfolio.ui.search.t_portfolio$ui$search17874 = (function (index,meta17875){
this.index = index;
this.meta17875 = meta17875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(portfolio.ui.search.t_portfolio$ui$search17874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17876,meta17875__$1){
var self__ = this;
var _17876__$1 = this;
return (new portfolio.ui.search.t_portfolio$ui$search17874(self__.index,meta17875__$1));
}));

(portfolio.ui.search.t_portfolio$ui$search17874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17876){
var self__ = this;
var _17876__$1 = this;
return self__.meta17875;
}));

(portfolio.ui.search.t_portfolio$ui$search17874.prototype.portfolio$ui$search$protocols$Index$ = cljs.core.PROTOCOL_SENTINEL);

(portfolio.ui.search.t_portfolio$ui$search17874.prototype.portfolio$ui$search$protocols$Index$index$arity$2 = (function (_,doc){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.index,portfolio.ui.search.index_scene,doc);
}));

(portfolio.ui.search.t_portfolio$ui$search17874.prototype.portfolio$ui$search$protocols$Index$query$arity$2 = (function (_,q){
var self__ = this;
var ___$1 = this;
return portfolio.ui.search.search.call(null,cljs.core.deref.call(null,self__.index),q);
}));

(portfolio.ui.search.t_portfolio$ui$search17874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta17875","meta17875",-349211629,null)], null);
}));

(portfolio.ui.search.t_portfolio$ui$search17874.cljs$lang$type = true);

(portfolio.ui.search.t_portfolio$ui$search17874.cljs$lang$ctorStr = "portfolio.ui.search/t_portfolio$ui$search17874");

(portfolio.ui.search.t_portfolio$ui$search17874.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"portfolio.ui.search/t_portfolio$ui$search17874");
}));

/**
 * Positional factory function for portfolio.ui.search/t_portfolio$ui$search17874.
 */
portfolio.ui.search.__GT_t_portfolio$ui$search17874 = (function portfolio$ui$search$create_index_$___GT_t_portfolio$ui$search17874(index__$1,meta17875){
return (new portfolio.ui.search.t_portfolio$ui$search17874(index__$1,meta17875));
});

}

return (new portfolio.ui.search.t_portfolio$ui$search17874(index,cljs.core.PersistentArrayMap.EMPTY));
});
portfolio.ui.search.prepare_result = (function portfolio$ui$search$prepare_result(state,location,result){
var doc = portfolio.ui.collection.by_id.call(null,state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(doc),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_illustration.call(null,doc,state),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),portfolio.ui.routes.get_location.call(null,location,doc)], null)], null)], null);
});
portfolio.ui.search.prepare_search = (function portfolio$ui$search$prepare_search(state,location){
var q = cljs.core.not_empty.call(null,new cljs.core.Keyword("search","query","search/query",1830322034).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","magnifying-glass","portfolio.ui.icons/magnifying-glass",897548354),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search",new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword("search","query","search/query",1830322034).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-input","on-input",-267523366),cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","query","search/query",1830322034)], null),new cljs.core.Keyword("event.target","value","event.target/value",857030372)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword("event.target","value","event.target/value",857030372)], null)], null)),new cljs.core.Keyword(null,"action","action",-811238024),(cljs.core.truth_(q)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","x","portfolio.ui.icons/x",1608175575),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","query","search/query",1830322034)], null),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258)], null),null], null)], null)], null):null),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),(function (){var iter__5523__auto__ = (function portfolio$ui$search$prepare_search_$_iter__17877(s__17878){
return (new cljs.core.LazySeq(null,(function (){
var s__17878__$1 = s__17878;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17878__$1);
if(temp__5804__auto__){
var s__17878__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17878__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17878__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17880 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17879 = (0);
while(true){
if((i__17879 < size__5522__auto__)){
var result = cljs.core._nth.call(null,c__5521__auto__,i__17879);
cljs.core.chunk_append.call(null,b__17880,(((function (){var G__17881 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state);
if((!((G__17881 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__17881.portfolio$ui$search$protocols$SearchResult$)))){
return true;
} else {
if((!G__17881.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.search.protocols.SearchResult,G__17881);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.search.protocols.SearchResult,G__17881);
}
})())?portfolio.ui.search.protocols.prepare_result.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),state,location,result):portfolio.ui.search.prepare_result.call(null,state,location,result)));

var G__17883 = (i__17879 + (1));
i__17879 = G__17883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17880),portfolio$ui$search$prepare_search_$_iter__17877.call(null,cljs.core.chunk_rest.call(null,s__17878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17880),null);
}
} else {
var result = cljs.core.first.call(null,s__17878__$2);
return cljs.core.cons.call(null,(((function (){var G__17882 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state);
if((!((G__17882 == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === G__17882.portfolio$ui$search$protocols$SearchResult$)))){
return true;
} else {
if((!G__17882.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.search.protocols.SearchResult,G__17882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,portfolio.ui.search.protocols.SearchResult,G__17882);
}
})())?portfolio.ui.search.protocols.prepare_result.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state),state,location,result):portfolio.ui.search.prepare_result.call(null,state,location,result)),portfolio$ui$search$prepare_search_$_iter__17877.call(null,cljs.core.rest.call(null,s__17878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.take.call(null,(6),new cljs.core.Keyword("search","suggestions","search/suggestions",-1296554258).cljs$core$IFn$_invoke$arity$1(state)));
})()], null);
});
