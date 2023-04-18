// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.search.pliable_index');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
portfolio.ui.search.pliable_index.sep_re = /[\/\.,_\-\?!\s\n\r\(\)\[\]:]+/;
/**
 * Converts a string to a single lower case token
 */
portfolio.ui.search.pliable_index.tokenize_lower_case = (function portfolio$ui$search$pliable_index$tokenize_lower_case(s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,clojure.string.trim.call(null,s))], null);
});
/**
 * Converts a string to a single token with all combining diacritis removed: é
 *   becomes e, å becomes a, etc.
 */
portfolio.ui.search.pliable_index.remove_diacritics = (function portfolio$ui$search$pliable_index$remove_diacritics(s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,clojure.string.replace.call(null,clojure.string.trim.call(null,s).normalize("NFD"),/[\u0300-\u036f]/,""))], null);
});
/**
 * Turns strings with combining diacritics into two separate tokens: one with
 *   diacritics removed, and the original string. Strings without combining
 *   diacritics are returned as a single normalized token.
 */
portfolio.ui.search.pliable_index.duplicate_diacritics = (function portfolio$ui$search$pliable_index$duplicate_diacritics(s){
var normalized = s.normalize("NFD");
var stripped = clojure.string.replace.call(null,normalized,/[\u0300-\u036f]/,"");
if(cljs.core.not_EQ_.call(null,stripped,normalized)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stripped,normalized], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [normalized], null);
}
});
/**
 * Converts a string to a sequence of word tokens, removing punctuation.
 */
portfolio.ui.search.pliable_index.tokenize_words = (function portfolio$ui$search$pliable_index$tokenize_words(s){
return cljs.core.filter.call(null,cljs.core.not_empty,clojure.string.split.call(null,s,portfolio.ui.search.pliable_index.sep_re));
});
/**
 * Converts a keyword to tokens with and without keyword punctuation. Passes
 *   strings through as a single token.
 */
portfolio.ui.search.pliable_index.tokenize_keyword = (function portfolio$ui$search$pliable_index$tokenize_keyword(x){
if((x instanceof cljs.core.Keyword)){
var temp__5802__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__5802__auto__)){
var ns = temp__5802__auto__;
var s = [ns,"/",cljs.core.name.call(null,x)].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.name.call(null,x),s,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.name.call(null,x)], null);
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
/**
 * Converts keywords to a string token, punctuation intact. Passes strings through
 *   as a single token.
 */
portfolio.ui.search.pliable_index.stringify_keyword = (function portfolio$ui$search$pliable_index$stringify_keyword(x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17771 = x;
if((x instanceof cljs.core.Keyword)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17771);
} else {
return G__17771;
}
})()], null);
});
/**
 * Converts a string to ngram tokens. When only one number is passed, only that
 *   sized ngrams are produced, otherwise, every length ngram from `min-n` to
 *   `max-n` is produced.
 * 
 *   ```clj
 *   (tokenize-ngrams 1 2 "Hello") ;;=> ("H" "e" "l" "l" "o"
 *                                ;;    "He" "el" "ll" "lo")
 *   ```
 */
portfolio.ui.search.pliable_index.tokenize_ngrams = (function portfolio$ui$search$pliable_index$tokenize_ngrams(var_args){
var G__17773 = arguments.length;
switch (G__17773) {
case 2:
return portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$2 = (function (n,word){
return portfolio.ui.search.pliable_index.tokenize_ngrams.call(null,n,n,word);
}));

(portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$core$IFn$_invoke$arity$3 = (function (min_n,max_n,word){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$iter__17774(s__17775){
return (new cljs.core.LazySeq(null,(function (){
var s__17775__$1 = s__17775;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17775__$1);
if(temp__5804__auto__){
var s__17775__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17775__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17775__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17777 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17776 = (0);
while(true){
if((i__17776 < size__5522__auto__)){
var n = cljs.core._nth.call(null,c__5521__auto__,i__17776);
cljs.core.chunk_append.call(null,b__17777,cljs.core.map.call(null,clojure.string.join,cljs.core.partition.call(null,n,(1),word)));

var G__17779 = (i__17776 + (1));
i__17776 = G__17779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17777),portfolio$ui$search$pliable_index$iter__17774.call(null,cljs.core.chunk_rest.call(null,s__17775__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17777),null);
}
} else {
var n = cljs.core.first.call(null,s__17775__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,clojure.string.join,cljs.core.partition.call(null,n,(1),word)),portfolio$ui$search$pliable_index$iter__17774.call(null,cljs.core.rest.call(null,s__17775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,min_n,(max_n + (1))));
})());
}));

(portfolio.ui.search.pliable_index.tokenize_ngrams.cljs$lang$maxFixedArity = 3);

/**
 * Converts a string to ngram tokens from the beginning of the string.
 *   When only one number is passed, only that sized ngrams are produced,
 *   otherwise, every length ngram from `min-n` to `max-n` is produced.
 * 
 *   ```clj
 *   (tokenize-edge-ngrams 1 5 "Hello") ;;=> ("H" "He" "Hel" "Hell" "Hello")
 *   ```
 */
portfolio.ui.search.pliable_index.tokenize_edge_ngrams = (function portfolio$ui$search$pliable_index$tokenize_edge_ngrams(var_args){
var G__17781 = arguments.length;
switch (G__17781) {
case 2:
return portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$2 = (function (n,word){
return portfolio.ui.search.pliable_index.tokenize_edge_ngrams.call(null,n,n,word);
}));

(portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$core$IFn$_invoke$arity$3 = (function (min_n,max_n,word){
var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$iter__17782(s__17783){
return (new cljs.core.LazySeq(null,(function (){
var s__17783__$1 = s__17783;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17783__$1);
if(temp__5804__auto__){
var s__17783__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17783__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17783__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17785 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17784 = (0);
while(true){
if((i__17784 < size__5522__auto__)){
var n = cljs.core._nth.call(null,c__5521__auto__,i__17784);
cljs.core.chunk_append.call(null,b__17785,clojure.string.join.call(null,cljs.core.take.call(null,n,word)));

var G__17787 = (i__17784 + (1));
i__17784 = G__17787;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17785),portfolio$ui$search$pliable_index$iter__17782.call(null,cljs.core.chunk_rest.call(null,s__17783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17785),null);
}
} else {
var n = cljs.core.first.call(null,s__17783__$2);
return cljs.core.cons.call(null,clojure.string.join.call(null,cljs.core.take.call(null,n,word)),portfolio$ui$search$pliable_index$iter__17782.call(null,cljs.core.rest.call(null,s__17783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null,min_n,((function (){var x__5133__auto__ = max_n;
var y__5134__auto__ = cljs.core.count.call(null,word);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})() + (1))));
}));

(portfolio.ui.search.pliable_index.tokenize_edge_ngrams.cljs$lang$maxFixedArity = 3);

/**
 * Converts value `x` to tokens with the provided `tokenizers`. `tokenizers` is a
 *   seq of functions that take a single value and return a seq of tokens. The type
 *   of value `x` and the produced tokens are arbitrary and up to the user, but
 *   tokenizers must compose. Built-in tokenizers mostly only work with strings for
 *   `x` (some accept keywords) and all produce a sequence of strings.
 */
portfolio.ui.search.pliable_index.tokenize = (function portfolio$ui$search$pliable_index$tokenize(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17794 = arguments.length;
var i__5770__auto___17795 = (0);
while(true){
if((i__5770__auto___17795 < len__5769__auto___17794)){
args__5775__auto__.push((arguments[i__5770__auto___17795]));

var G__17796 = (i__5770__auto___17795 + (1));
i__5770__auto___17795 = G__17796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.search.pliable_index.tokenize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.search.pliable_index.tokenize.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__17790){
var vec__17791 = p__17790;
var tokenizers = cljs.core.nth.call(null,vec__17791,(0),null);
return cljs.core.reduce.call(null,(function (tokens,f){
return cljs.core.mapcat.call(null,f,tokens);
}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.coll_QMARK_.call(null,x))?x:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null))),(function (){var or__5045__auto__ = tokenizers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector], null);
}
})());
}));

(portfolio.ui.search.pliable_index.tokenize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.search.pliable_index.tokenize.cljs$lang$applyTo = (function (seq17788){
var G__17789 = cljs.core.first.call(null,seq17788);
var seq17788__$1 = cljs.core.next.call(null,seq17788);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17789,seq17788__$1);
}));

portfolio.ui.search.pliable_index.default_tokenizers = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.ui.search.pliable_index.stringify_keyword,portfolio.ui.search.pliable_index.remove_diacritics,portfolio.ui.search.pliable_index.tokenize_words], null);
portfolio.ui.search.pliable_index.get_field_syms = (function portfolio$ui$search$pliable_index$get_field_syms(field,xs){
var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$get_field_syms_$_iter__17797(s__17798){
return (new cljs.core.LazySeq(null,(function (){
var s__17798__$1 = s__17798;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17798__$1);
if(temp__5804__auto__){
var s__17798__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17798__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17798__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17800 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17799 = (0);
while(true){
if((i__17799 < size__5522__auto__)){
var vec__17801 = cljs.core._nth.call(null,c__5521__auto__,i__17799);
var word = cljs.core.nth.call(null,vec__17801,(0),null);
var weight = cljs.core.nth.call(null,vec__17801,(1),null);
cljs.core.chunk_append.call(null,b__17800,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"sym","sym",-1444860305),word,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));

var G__17807 = (i__17799 + (1));
i__17799 = G__17807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17800),portfolio$ui$search$pliable_index$get_field_syms_$_iter__17797.call(null,cljs.core.chunk_rest.call(null,s__17798__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17800),null);
}
} else {
var vec__17804 = cljs.core.first.call(null,s__17798__$2);
var word = cljs.core.nth.call(null,vec__17804,(0),null);
var weight = cljs.core.nth.call(null,vec__17804,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"sym","sym",-1444860305),word,new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null),portfolio$ui$search$pliable_index$get_field_syms_$_iter__17797.call(null,cljs.core.rest.call(null,s__17798__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.frequencies.call(null,xs)));
});
/**
 * Index data in `doc` according to `schema` under `id` in `index`. Returns the
 *   updated index. At its simplest, the schema only specifies which keys in `doc`
 *   to include in the index:
 * 
 *   ```clj
 *   {:title {}
 * :description {}}
 *   ```
 * 
 *   This schema will use the `default-tokenizers` to index `:title` and
 *   `:description` in `:doc`. The following schema is the explicit equivalent. It
 *   names what function `:f` to apply to `doc` to extract the data to index, and
 *   what `:tokenizers` to use. The keys of the schema name the resulting field
 *   indexes - when querying you can choose to query across all fields, or name
 *   individual fields to query:
 * 
 *   ```clj
 *   {:title
 * {:f :title
 *  :tokenizers [stringify-keyword
 *               remove-diacritics
 *               tokenize-words]}
 * 
 * :description
 * {:f :description
 *  :tokenizers [stringify-keyword
 *               remove-diacritics
 *               tokenize-words]}}
 *   ```
 * 
 *   You can use schemas to index the same fields multiple times with different
 *   tokenizers:
 * 
 *   ```clj
 *   {:title
 * {:f :title
 *  :tokenizers [remove-diacritics
 *               tokenize-words]}
 * 
 * :title.ngrams
 * {:f :title
 *  :tokenizers [remove-diacritics
 *               tokenize-words
 *               (partial tokenize-ngrams 3)]}}
 *   ```
 */
portfolio.ui.search.pliable_index.index_document = (function portfolio$ui$search$pliable_index$index_document(index,schema,id,doc){
return cljs.core.reduce.call(null,(function (index__$1,p__17808){
var map__17809 = p__17808;
var map__17809__$1 = cljs.core.__destructure_map.call(null,map__17809);
var field = cljs.core.get.call(null,map__17809__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var sym = cljs.core.get.call(null,map__17809__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var weight = cljs.core.get.call(null,map__17809__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.assoc_in.call(null,index__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,sym,id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weight","weight",-1262796205),weight], null));
}),index,cljs.core.mapcat.call(null,(function (p__17810){
var vec__17811 = p__17810;
var field = cljs.core.nth.call(null,vec__17811,(0),null);
var config = cljs.core.nth.call(null,vec__17811,(1),null);
var f = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$2(config,field);
return portfolio.ui.search.pliable_index.get_field_syms.call(null,field,portfolio.ui.search.pliable_index.tokenize.call(null,f.call(null,doc),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.search.pliable_index.default_tokenizers;
}
})()));
}),schema));
});
portfolio.ui.search.pliable_index.score_term = (function portfolio$ui$search$pliable_index$score_term(index,fields,term){
return cljs.core.map.call(null,(function (p__17814){
var vec__17815 = p__17814;
var id = cljs.core.nth.call(null,vec__17815,(0),null);
var xs = cljs.core.nth.call(null,vec__17815,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),xs)),new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"score","score",-1963588780)),xs)),new cljs.core.Keyword(null,"term","term",-1817390416),term], null);
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.call(null,(function (field){
var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$score_term_$_iter__17818(s__17819){
return (new cljs.core.LazySeq(null,(function (){
var s__17819__$1 = s__17819;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17819__$1);
if(temp__5804__auto__){
var s__17819__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17819__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17819__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17821 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17820 = (0);
while(true){
if((i__17820 < size__5522__auto__)){
var vec__17822 = cljs.core._nth.call(null,c__5521__auto__,i__17820);
var id = cljs.core.nth.call(null,vec__17822,(0),null);
var map__17825 = cljs.core.nth.call(null,vec__17822,(1),null);
var map__17825__$1 = cljs.core.__destructure_map.call(null,map__17825);
var weight = cljs.core.get.call(null,map__17825__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
cljs.core.chunk_append.call(null,b__17821,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),weight,new cljs.core.Keyword(null,"field","field",-1302436500),field], null));

var G__17830 = (i__17820 + (1));
i__17820 = G__17830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17821),portfolio$ui$search$pliable_index$score_term_$_iter__17818.call(null,cljs.core.chunk_rest.call(null,s__17819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17821),null);
}
} else {
var vec__17826 = cljs.core.first.call(null,s__17819__$2);
var id = cljs.core.nth.call(null,vec__17826,(0),null);
var map__17829 = cljs.core.nth.call(null,vec__17826,(1),null);
var map__17829__$1 = cljs.core.__destructure_map.call(null,map__17829);
var weight = cljs.core.get.call(null,map__17829__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),weight,new cljs.core.Keyword(null,"field","field",-1302436500),field], null),portfolio$ui$search$pliable_index$score_term_$_iter__17818.call(null,cljs.core.rest.call(null,s__17819__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.get_in.call(null,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,term], null)));
}),fields)));
});
portfolio.ui.search.pliable_index.qualified_match_QMARK_ = (function portfolio$ui$search$pliable_index$qualified_match_QMARK_(terms,res,p__17831){
var map__17832 = p__17831;
var map__17832__$1 = cljs.core.__destructure_map.call(null,map__17832);
var operator = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var min_accuracy = cljs.core.get.call(null,map__17832__$1,new cljs.core.Keyword(null,"min-accuracy","min-accuracy",-324212083));
return ((cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"or","or",235744169),operator);
if(and__5043__auto__){
return min_accuracy;
} else {
return and__5043__auto__;
}
})())?(min_accuracy * cljs.core.count.call(null,terms)):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"or","or",235744169),operator))?(1):cljs.core.count.call(null,terms)
)) <= cljs.core.count.call(null,res));
});
portfolio.ui.search.pliable_index.match_query = (function portfolio$ui$search$pliable_index$match_query(index,p__17835){
var map__17836 = p__17835;
var map__17836__$1 = cljs.core.__destructure_map.call(null,map__17836);
var query = map__17836__$1;
var q = cljs.core.get.call(null,map__17836__$1,new cljs.core.Keyword(null,"q","q",689001697));
var boost = cljs.core.get.call(null,map__17836__$1,new cljs.core.Keyword(null,"boost","boost",-673419773));
var tokenizers = cljs.core.get.call(null,map__17836__$1,new cljs.core.Keyword(null,"tokenizers","tokenizers",-37526526));
var fields = cljs.core.get.call(null,map__17836__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var fields__$1 = (function (){var or__5045__auto__ = fields;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keys.call(null,index);
}
})();
var boost__$1 = (function (){var or__5045__auto__ = boost;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})();
var terms = portfolio.ui.search.pliable_index.tokenize.call(null,q,(function (){var or__5045__auto__ = tokenizers;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return portfolio.ui.search.pliable_index.default_tokenizers;
}
})());
return cljs.core.map.call(null,(function (p__17837){
var vec__17838 = p__17837;
var id = cljs.core.nth.call(null,vec__17838,(0),null);
var xs = cljs.core.nth.call(null,vec__17838,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),(boost__$1 * cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),xs))),new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function portfolio$ui$search$pliable_index$match_query_$_iter__17841(s__17842){
return (new cljs.core.LazySeq(null,(function (){
var s__17842__$1 = s__17842;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17842__$1);
if(temp__5804__auto__){
var s__17842__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17842__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17842__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17844 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17843 = (0);
while(true){
if((i__17843 < size__5522__auto__)){
var vec__17845 = cljs.core._nth.call(null,c__5521__auto__,i__17843);
var k = cljs.core.nth.call(null,vec__17845,(0),null);
var score = cljs.core.nth.call(null,vec__17845,(1),null);
cljs.core.chunk_append.call(null,b__17844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(boost__$1 * score)], null));

var G__17855 = (i__17843 + (1));
i__17843 = G__17855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17844),portfolio$ui$search$pliable_index$match_query_$_iter__17841.call(null,cljs.core.chunk_rest.call(null,s__17842__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17844),null);
}
} else {
var vec__17848 = cljs.core.first.call(null,s__17842__$2);
var k = cljs.core.nth.call(null,vec__17848,(0),null);
var score = cljs.core.nth.call(null,vec__17848,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(boost__$1 * score)], null),portfolio$ui$search$pliable_index$match_query_$_iter__17841.call(null,cljs.core.rest.call(null,s__17842__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),xs)));
})()),new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"term","term",-1817390416),cljs.core.comp.call(null,(function (p1__17834_SHARP_){
return (boost__$1 * p1__17834_SHARP_);
}),new cljs.core.Keyword(null,"score","score",-1963588780))),xs))], null);
}),cljs.core.filter.call(null,(function (p__17851){
var vec__17852 = p__17851;
var _ = cljs.core.nth.call(null,vec__17852,(0),null);
var xs = cljs.core.nth.call(null,vec__17852,(1),null);
return portfolio.ui.search.pliable_index.qualified_match_QMARK_.call(null,terms,xs,query);
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.call(null,(function (p1__17833_SHARP_){
return portfolio.ui.search.pliable_index.score_term.call(null,index,fields__$1,p1__17833_SHARP_);
}),terms))));
});
/**
 * Query the index created by `index-document` with `q`. `q` is a map with two
 *   keys:
 * 
 *   - `:queries` A seq of maps defining a query (see below)
 *   - `:operator` Either `:or` or `:and` (default)
 * 
 *   Each query in `:queries` is a map of the following keys:
 * 
 *   - `:q` The query string
 *   - `:tokenizers` How to tokenize the query string before matching against
 *                indexes. Defaults to `default-tokenizers`.
 *   - `:fields` What field indexes to match against. Defaults to all fields.
 *   - `:boost` A score boost for this query.
 *   - `:operator` Either `:or` or `:and` (default). Determines whether a
 *              single token match is good enough (`:or`), or if all tokens must
 *              match (`:and`).
 *   - `:min-accuracy` When `:operator` is `:or`, this can be a number between `0`
 *                  and `1` determining the lowest acceptable success rate. `0.5`
 *                  means that at least half the tokens from `q` must match tokens
 *                  in the queried indexes
 * 
 *   Each query will possibly find some results. Results scored based on the number
 *   of matching tokens. These scores are then boosted for each individual query.
 *   The final result will be either the intersection of all sub-results (`:and`),
 *   or the union (`:or`). The final score for each document id will be calculated
 *   by summarizing individual query scores, and `query` returns a sorted seq of
 *   results, with the best scoring result first.
 * 
 *   Results are maps of:
 * 
 *   - `:id` The id of the document
 *   - `:score` The calculated total score
 *   - `:fields` A map of `{field score}` - e.g. what fields contributed to the
 *            result, and their individual scores.
 *   - `:terms` A map of `{term score}` - e.g. what terms contributed to the result,
 *           and their individual scores.
 */
portfolio.ui.search.pliable_index.query = (function portfolio$ui$search$pliable_index$query(index,q){
var res = cljs.core.map.call(null,(function (p1__17856_SHARP_){
return portfolio.ui.search.pliable_index.match_query.call(null,index,p1__17856_SHARP_);
}),new cljs.core.Keyword(null,"queries","queries",1446291995).cljs$core$IFn$_invoke$arity$1(q));
var ids = cljs.core.map.call(null,(function (p1__17857_SHARP_){
return cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),p1__17857_SHARP_));
}),res);
var res_ids = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(q)))?cljs.core.apply.call(null,clojure.set.union,ids):cljs.core.apply.call(null,clojure.set.intersection,ids));
return cljs.core.map.call(null,(function (p__17858){
var vec__17859 = p__17858;
var id = cljs.core.nth.call(null,vec__17859,(0),null);
var xs = cljs.core.nth.call(null,vec__17859,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"score","score",-1963588780),xs)),new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"fields","fields",-1932066230),xs)),new cljs.core.Keyword(null,"terms","terms",-1556977978),cljs.core.apply.call(null,cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"terms","terms",-1556977978),xs))], null);
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,cljs.core.comp.call(null,res_ids,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.apply.call(null,cljs.core.concat,res))));
});
