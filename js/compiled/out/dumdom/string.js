// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('dumdom.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dumdom.element');
dumdom.string.tag_name = (function dumdom$string$tag_name(node){
return new cljs.core.Keyword(null,"sel","sel",-1686154807).cljs$core$IFn$_invoke$arity$1(node);
});
dumdom.string.children = (function dumdom$string$children(node){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
});
dumdom.string.attributes = (function dumdom$string$attributes(node){
return cljs.core.merge.call(null,(function (){var G__14339 = node;
var G__14339__$1 = (((G__14339 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__14339));
if((G__14339__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__14339__$1);
}
})(),(function (){var G__14340 = node;
var G__14340__$1 = (((G__14340 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__14340));
if((G__14340__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(G__14340__$1);
}
})(),(function (){var G__14341 = node;
var G__14341__$1 = (((G__14341 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__14341));
var G__14341__$2 = (((G__14341__$1 == null))?null:new cljs.core.Keyword(null,"dataset","dataset",1159262238).cljs$core$IFn$_invoke$arity$1(G__14341__$1));
var G__14341__$3 = (((G__14341__$2 == null))?null:cljs.core.map.call(null,(function (p__14342){
var vec__14343 = p__14342;
var k = cljs.core.nth.call(null,vec__14343,(0),null);
var v = cljs.core.nth.call(null,vec__14343,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["data-",cljs.core.name.call(null,k)].join(''),v], null);
}),G__14341__$2));
if((G__14341__$3 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14341__$3);
}
})(),(function (){var G__14346 = node;
var G__14346__$1 = (((G__14346 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__14346));
var G__14346__$2 = (((G__14346__$1 == null))?null:new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(G__14346__$1));
var G__14346__$3 = (((G__14346__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.string_QMARK_,cljs.core.second),G__14346__$2));
var G__14346__$4 = (((G__14346__$3 == null))?null:cljs.core.map.call(null,(function (p__14347){
var vec__14348 = p__14347;
var k = cljs.core.nth.call(null,vec__14348,(0),null);
var v = cljs.core.nth.call(null,vec__14348,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["on",clojure.string.capitalize.call(null,k)].join(''),v], null);
}),G__14346__$3));
if((G__14346__$4 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__14346__$4);
}
})());
});
dumdom.string.el_key = (function dumdom$string$el_key(node){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(node);
});
dumdom.string.style = (function dumdom$string$style(node){
return new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(node));
});
dumdom.string.text_node_QMARK_ = (function dumdom$string$text_node_QMARK_(vnode){
return (new cljs.core.Keyword(null,"sel","sel",-1686154807).cljs$core$IFn$_invoke$arity$1(vnode) == null);
});
dumdom.string.comment_node_QMARK_ = (function dumdom$string$comment_node_QMARK_(vnode){
return cljs.core._EQ_.call(null,"!",dumdom.string.tag_name.call(null,vnode));
});
dumdom.string.text = (function dumdom$string$text(vnode){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(vnode);
});
dumdom.string.kebab_case = (function dumdom$string$kebab_case(s){
return clojure.string.lower_case.call(null,clojure.string.replace.call(null,s,/([a-z])([A-Z])/,"$1-$2"));
});
dumdom.string.render_styles = (function dumdom$string$render_styles(styles){
if(typeof styles === 'string'){
return styles;
} else {
return clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__14351){
var vec__14352 = p__14351;
var k = cljs.core.nth.call(null,vec__14352,(0),null);
var v = cljs.core.nth.call(null,vec__14352,(1),null);
return [dumdom.string.kebab_case.call(null,cljs.core.name.call(null,k)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),styles)));
}
});
dumdom.string.escape = (function dumdom$string$escape(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&(?!([a-z]+|#\d+);)/,"&amp;"),/\"/,"&quot;");
});
dumdom.string.attrs = (function dumdom$string$attrs(vnode){
var k = dumdom.string.el_key.call(null,vnode);
var attributes = (function (){var G__14355 = cljs.core.dissoc.call(null,dumdom.string.attributes.call(null,vnode),new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343));
if(cljs.core.truth_(k)){
return cljs.core.assoc.call(null,G__14355,new cljs.core.Keyword(null,"data-dumdom-key","data-dumdom-key",-1601599388),dumdom.string.escape.call(null,cljs.core.pr_str.call(null,k)));
} else {
return G__14355;
}
})();
var style = dumdom.string.style.call(null,vnode);
return clojure.string.join.call(null,"",cljs.core.map.call(null,(function (p__14356){
var vec__14357 = p__14356;
var k__$1 = cljs.core.nth.call(null,vec__14357,(0),null);
var v = cljs.core.nth.call(null,vec__14357,(1),null);
return [" ",cljs.core.name.call(null,k__$1),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
}),cljs.core.merge.call(null,attributes,(cljs.core.truth_(style)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),dumdom.string.render_styles.call(null,style)], null):null))));
});
dumdom.string.self_closing = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, ["track",null,"br",null,"img",null,"area",null,"base",null,"hr",null,"col",null,"param",null,"input",null,"link",null,"source",null,"meta",null,"wbr",null,"embed",null], null), null);
dumdom.string.closing_tag = (function dumdom$string$closing_tag(tag_name){
if(cljs.core.truth_(dumdom.string.self_closing.call(null,tag_name))){
return null;
} else {
return ["</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_name),">"].join('');
}
});
dumdom.string.dom_str = (function dumdom$string$dom_str(vnode){
if((((vnode == null)) || (dumdom.string.comment_node_QMARK_.call(null,vnode)))){
return "";
} else {
if(dumdom.string.text_node_QMARK_.call(null,vnode)){
return dumdom.string.text.call(null,vnode);
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dumdom.string.tag_name.call(null,vnode)),dumdom.string.attrs.call(null,vnode),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var attrs = dumdom.string.attributes.call(null,vnode);
if(cljs.core.contains_QMARK_.call(null,attrs,new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343))){
return new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343).cljs$core$IFn$_invoke$arity$1(attrs);
} else {
return clojure.string.join.call(null,"",cljs.core.map.call(null,dumdom.string.dom_str,dumdom.string.children.call(null,vnode)));
}
})()),dumdom.string.closing_tag.call(null,dumdom.string.tag_name.call(null,vnode))].join('');

}
}
});
dumdom.string.render = (function dumdom$string$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14366 = arguments.length;
var i__5770__auto___14367 = (0);
while(true){
if((i__5770__auto___14367 < len__5769__auto___14366)){
args__5775__auto__.push((arguments[i__5770__auto___14367]));

var G__14368 = (i__5770__auto___14367 + (1));
i__5770__auto___14367 = G__14368;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return dumdom.string.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(dumdom.string.render.cljs$core$IFn$_invoke$arity$variadic = (function (component,p__14362){
var vec__14363 = p__14362;
var path = cljs.core.nth.call(null,vec__14363,(0),null);
var kmap = cljs.core.nth.call(null,vec__14363,(1),null);
var component__$1 = dumdom.element.inflate_hiccup.call(null,component);
return dumdom.string.dom_str.call(null,component__$1.call(null,(function (){var or__5045__auto__ = path;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),(function (){var or__5045__auto__ = kmap;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
}));

(dumdom.string.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dumdom.string.render.cljs$lang$applyTo = (function (seq14360){
var G__14361 = cljs.core.first.call(null,seq14360);
var seq14360__$1 = cljs.core.next.call(null,seq14360);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14361,seq14360__$1);
}));

