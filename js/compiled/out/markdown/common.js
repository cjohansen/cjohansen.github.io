// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.common._STAR_inhibit_separator_STAR_ = null;
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [markdown.common.escape_delimiter,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),markdown.common.escape_delimiter].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15809 = arguments.length;
var i__5770__auto___15810 = (0);
while(true){
if((i__5770__auto___15810 < len__5769__auto___15809)){
args__5775__auto__.push((arguments[i__5770__auto___15810]));

var G__15811 = (i__5770__auto___15810 + (1));
i__5770__auto___15810 = G__15811;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last.call(null,args);
var token = markdown.common.gen_token.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.drop_last.call(null,args))))], null);
}));

(markdown.common.freeze_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.common.freeze_string.cljs$lang$applyTo = (function (seq15808){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15808));
}));

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__5802__auto__ = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[markdown.common.escape_delimiter,"\\d+",markdown.common.escape_delimiter].join('')),text);
if(cljs.core.truth_(temp__5802__auto__)){
var matches = temp__5802__auto__;
var G__15814 = cljs.core.reduce.call(null,((function (text,state,matches,temp__5802__auto__){
return (function (s,r){
return clojure.string.replace.call(null,s,cljs.core.re_pattern.call(null,r),((function (text,state,matches,temp__5802__auto__){
return (function (p1__15812_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__15812_SHARP_,p1__15812_SHARP_);
});})(text,state,matches,temp__5802__auto__))
);
});})(text,state,matches,temp__5802__auto__))
,text,matches);
var G__15815 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__5802__auto__){
return (function (p1__15813_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__15813_SHARP_,matches);
});})(text,state,matches,temp__5802__auto__))
);
text = G__15814;
state = G__15815;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if((!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state))))){
return markdown.common.thaw_string.call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;"),/\\\^/,"&#94;")),state], null);
});
markdown.common.open_html_tags = (function markdown$common$open_html_tags(open_QMARK_,token_seq){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.reduce.call(null,(function (state,token){
var G__15816 = token;
switch (G__15816) {
case "<":
return new cljs.core.Keyword(null,"open","open",-1763596448);

break;
case ">":
return new cljs.core.Keyword(null,"closed","closed",-919675359);

break;
default:
return state;

}
}),(cljs.core.truth_(open_QMARK_)?new cljs.core.Keyword(null,"open","open",-1763596448):new cljs.core.Keyword(null,"closed","closed",-919675359)),token_seq));
});
/**
 * Return a transformer to
 * - find all the chunks of the string delimited by the `separator',
 * - wrap the output with the `open' and `close' markers, and
 * - apply the `transformer' to the text inside the chunk.
 */
markdown.common.make_separator = (function markdown$common$make_separator(var_args){
var G__15819 = arguments.length;
switch (G__15819) {
case 3:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$3 = (function (separator,open,close){
return markdown.common.make_separator.call(null,separator,open,close,cljs.core.identity);
}));

(markdown.common.make_separator.cljs$core$IFn$_invoke$arity$4 = (function (separator,open,close,transformer){
var separator__$1 = cljs.core.seq.call(null,separator);
return (function (text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false,new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var vec__15826 = (((transformer === cljs.core.identity))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [buf,cur_state], null):(function (){var vec__15829 = transformer.call(null,clojure.string.join.call(null,buf),cur_state);
var s = cljs.core.nth.call(null,vec__15829,(0),null);
var new_state = cljs.core.nth.call(null,vec__15829,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,s),new_state], null);
})());
var new_buf = cljs.core.nth.call(null,vec__15826,(0),null);
var new_state = cljs.core.nth.call(null,vec__15826,(1),null);
var G__15833 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),new_buf,cljs.core.seq.call(null,close)));
var G__15834 = cljs.core.PersistentVector.EMPTY;
var G__15835 = cljs.core.rest.call(null,tokens);
var G__15836 = cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__15833;
buf = G__15834;
tokens = G__15835;
cur_state = G__15836;
continue;
} else {
var G__15837 = out;
var G__15838 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__15839 = cljs.core.rest.call(null,tokens);
var G__15840 = cur_state;
out = G__15837;
buf = G__15838;
tokens = G__15839;
cur_state = G__15840;
continue;
}
} else {
if(((cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911).cljs$core$IFn$_invoke$arity$1(cur_state))))){
var G__15841 = out;
var G__15842 = buf;
var G__15843 = cljs.core.rest.call(null,tokens);
var G__15844 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__15841;
buf = G__15842;
tokens = G__15843;
cur_state = G__15844;
continue;
} else {
var G__15845 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__15846 = buf;
var G__15847 = cljs.core.rest.call(null,tokens);
var G__15848 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911),markdown.common.open_html_tags.call(null,new cljs.core.Keyword(null,"in-tag?","in-tag?",1693672911).cljs$core$IFn$_invoke$arity$1(cur_state),cljs.core.first.call(null,tokens)));
out = G__15845;
buf = G__15846;
tokens = G__15847;
cur_state = G__15848;
continue;

}
}
}
break;
}
}
});
}));

(markdown.common.make_separator.cljs$lang$maxFixedArity = 4);

markdown.common.escape_code_transformer = (function markdown$common$escape_code_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.escape_code.call(null,text),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
return markdown.common.make_separator.call(null,separator,open,close,(cljs.core.truth_(escape_QMARK_)?markdown.common.escape_code_transformer:cljs.core.identity)).call(null,text,state);
});
markdown.common.strong = markdown.common.make_separator.call(null,"**","<strong>","</strong>");
markdown.common.bold_italic = markdown.common.make_separator.call(null,"***","<b><i>","</i></b>");
markdown.common.bold = markdown.common.make_separator.call(null,"__","<b>","</b>");
markdown.common.em = markdown.common.make_separator.call(null,"*","<em>","</em>");
markdown.common.italics = markdown.common.make_separator.call(null,"_","<i>","</i>");
markdown.common.strikethrough = markdown.common.make_separator.call(null,"~~","<del>","</del>");
markdown.common.inline_code = markdown.common.make_separator.call(null,"`","<code>","</code>",markdown.common.escape_code_transformer);
markdown.common.inhibit = (function markdown$common$inhibit(text,state){
if(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)){
return markdown.common.make_separator.call(null,markdown.common._STAR_inhibit_separator_STAR_,"","",markdown.common.freeze_string).call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_inhibit_separator = (function markdown$common$escape_inhibit_separator(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(markdown.common._STAR_inhibit_separator_STAR_)?clojure.string.replace.call(null,text,clojure.string.join.call(null,cljs.core.concat.call(null,markdown.common._STAR_inhibit_separator_STAR_,markdown.common._STAR_inhibit_separator_STAR_)),clojure.string.join.call(null,markdown.common._STAR_inhibit_separator_STAR_)):text),state], null);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/^([ ]+)?[#]+/,""),/[#]+$/,""),/\{(#|id=)?.*\}$/,""));
});
/**
 * Extract Hugo markdown anchor links from the `text`.
 * 
 *   See: https://gohugo.io/content-management/cross-references/#heading-ids
 */
markdown.common.hugo_anchor = (function markdown$common$hugo_anchor(text){
var temp__5804__auto__ = cljs.core.seq.call(null,cljs.core.re_find.call(null,/\{(#|id=)?(.*)\}$/,text));
if(temp__5804__auto__){
var groups = temp__5804__auto__;
return cljs.core.last.call(null,groups);
} else {
return null;
}
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__15849_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__15849_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__15850_SHARP_){
return ((cljs.core._EQ_.call(null,"#",p1__15850_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__15850_SHARP_)));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__5804__auto__ = markdown.common.heading_level.call(null,text);
if(cljs.core.truth_(temp__5804__auto__)){
var heading = temp__5804__auto__;
var htext = markdown.common.heading_text.call(null,text);
var anchor = (cljs.core.truth_(heading_anchors)?(function (){var or__5045__auto__ = markdown.common.hugo_anchor.call(null,text);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return clojure.string.replace.call(null,clojure.string.lower_case.call(null,htext)," ","&#95;");
}
})():null);
return ["<h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),(cljs.core.truth_(anchor)?[" id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anchor),"\""].join(''):null),">",htext,"</h",cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),">"].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;"),/<code>.*<\/code>/,(function (s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&mdash;/,"---"),/&ndash;/,"--");
}))),state], null);
});
