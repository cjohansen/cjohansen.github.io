// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('portfolio.code');
goog.require('portfolio.router');
goog.require('portfolio.view');
portfolio.core.get_current_scenes = (function portfolio$core$get_current_scenes(state,location){
var or__5045__auto__ = (function (){var temp__5804__auto__ = (function (){var G__12182 = location;
var G__12182__$1 = (((G__12182 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__12182));
var G__12182__$2 = (((G__12182__$1 == null))?null:new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__12182__$1));
if((G__12182__$2 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__12182__$2);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var scene = temp__5804__auto__;
return cljs.core.take.call(null,(1),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([scene]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5804__auto__ = (function (){var G__12183 = location;
var G__12183__$1 = (((G__12183 == null))?null:new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(G__12183));
if((G__12183__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(G__12183__$1);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([ns]),cljs.core.namespace,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))));
} else {
return null;
}
}
});
portfolio.core.get_scene_namespace = (function portfolio$core$get_scene_namespace(p__12184,p__12185){
var map__12186 = p__12184;
var map__12186__$1 = cljs.core.__destructure_map.call(null,map__12186);
var namespaces = cljs.core.get.call(null,map__12186__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var map__12187 = p__12185;
var map__12187__$1 = cljs.core.__destructure_map.call(null,map__12187);
var id = cljs.core.get.call(null,map__12187__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = (function (){var G__12188 = id;
if((G__12188 == null)){
return null;
} else {
return cljs.core.namespace.call(null,G__12188);
}
})();
var or__5045__auto__ = cljs.core.get.call(null,namespaces,ns);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),ns,new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns], null);
} else {
return null;
}
}
});
portfolio.core.get_scene_collection = (function portfolio$core$get_scene_collection(state,scene){
var ns = portfolio.core.get_scene_namespace.call(null,state,scene);
var or__5045__auto__ = new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("portfolio.core","default","portfolio.core/default",-1800770435);
}
});
portfolio.core.get_collection = (function portfolio$core$get_collection(state,collection){
var or__5045__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),collection], null);
}
});
portfolio.core.get_current_view = (function portfolio$core$get_current_view(state,location){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state));
});
portfolio.core.get_scene_url = (function portfolio$core$get_scene_url(location,scene){
return portfolio.router.get_url.call(null,cljs.core.assoc.call(null,location,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene)], null)));
});
portfolio.core.prepare_scene_link = (function portfolio$core$prepare_scene_link(location,p__12189){
var map__12190 = p__12189;
var map__12190__$1 = cljs.core.__destructure_map.call(null,map__12190);
var scene = map__12190__$1;
var id = cljs.core.get.call(null,map__12190__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__12190__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core._EQ_.call(null,id,(function (){var G__12191 = cljs.core.get_in.call(null,location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
if((G__12191 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__12191);
}
})());
var G__12192 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),title], null);
var G__12192__$1 = (((!(selected_QMARK_)))?cljs.core.assoc.call(null,G__12192,new cljs.core.Keyword(null,"url","url",276297046),portfolio.core.get_scene_url.call(null,location,scene)):G__12192);
if(selected_QMARK_){
return cljs.core.assoc.call(null,G__12192__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__12192__$1;
}
});
portfolio.core.namespace_selected_QMARK_ = (function portfolio$core$namespace_selected_QMARK_(state,ns,scenes){
return cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__12193_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),scenes)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__12193_SHARP_));
}),new cljs.core.Keyword(null,"current-scenes","current-scenes",1736940721).cljs$core$IFn$_invoke$arity$1(state)));
});
portfolio.core.namespace_expanded_QMARK_ = (function portfolio$core$namespace_expanded_QMARK_(state,ns,scenes){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),ns,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
});
portfolio.core.prepare_scenes = (function portfolio$core$prepare_scenes(state,location,scenes){
return cljs.core.map.call(null,(function (p__12195){
var vec__12196 = p__12195;
var ns = cljs.core.nth.call(null,vec__12196,(0),null);
var scenes__$1 = cljs.core.nth.call(null,vec__12196,(1),null);
var expanded_QMARK_ = portfolio.core.namespace_expanded_QMARK_.call(null,state,ns,scenes__$1);
var selected_QMARK_ = portfolio.core.namespace_selected_QMARK_.call(null,state,ns,scenes__$1);
var current_ns = cljs.core.get_in.call(null,location,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null));
var browsing_QMARK_ = cljs.core._EQ_.call(null,ns,current_ns);
var G__12199 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(portfolio.core.get_scene_namespace.call(null,state,cljs.core.first.call(null,scenes__$1))),new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),ns,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),cljs.core.not.call(null,expanded_QMARK_)], null)], null),new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_], null);
var G__12199__$1 = (((!(browsing_QMARK_)))?cljs.core.assoc.call(null,G__12199,new cljs.core.Keyword(null,"actions","actions",-812656882),(function (){var G__12200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),cljs.core.assoc.call(null,location,new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),ns,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),true], null)], null);
if(cljs.core.truth_(current_ns)){
return cljs.core.into.call(null,G__12200,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),current_ns,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null),false], null)], null));
} else {
return G__12200;
}
})()):G__12199);
if(cljs.core.truth_((function (){var or__5045__auto__ = expanded_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((selected_QMARK_) && ((!(browsing_QMARK_))));
}
})())){
return cljs.core.into.call(null,G__12199__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expanded?","expanded?",2055832296),true,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.map.call(null,(function (p1__12194_SHARP_){
return portfolio.core.prepare_scene_link.call(null,location,p1__12194_SHARP_);
}),cljs.core.sort_by.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"idx","idx",1053688473)),scenes__$1))], null));
} else {
return G__12199__$1;
}
}),cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.comp.call(null,cljs.core.namespace,new cljs.core.Keyword(null,"id","id",-1388402092)),scenes)));
});
portfolio.core.small_screen_QMARK_ = (function portfolio$core$small_screen_QMARK_(state){
return (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(state)) < (650));
});
portfolio.core.sidebar_QMARK_ = (function portfolio$core$sidebar_QMARK_(p__12201){
var map__12202 = p__12201;
var map__12202__$1 = cljs.core.__destructure_map.call(null,map__12202);
var state = map__12202__$1;
var sidebar_status = cljs.core.get.call(null,map__12202__$1,new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311));
if(cljs.core._EQ_.call(null,sidebar_status,new cljs.core.Keyword(null,"hidden","hidden",-312506092))){
return false;
} else {
if(cljs.core._EQ_.call(null,sidebar_status,new cljs.core.Keyword(null,"visible","visible",-1024216805))){
return true;
} else {
return (!(portfolio.core.small_screen_QMARK_.call(null,state)));

}
}
});
portfolio.core.prepare_header = (function portfolio$core$prepare_header(state,_){
if(portfolio.core.sidebar_QMARK_.call(null,state)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311)], null),((portfolio.core.small_screen_QMARK_.call(null,state))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"auto","auto",-566279492))], null)], null)], null);
}
});
portfolio.core.prepare_sidebar = (function portfolio$core$prepare_sidebar(state,location){
if(portfolio.core.sidebar_QMARK_.call(null,state)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"slide?","slide?",1648217264),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311)], null),((portfolio.core.small_screen_QMARK_.call(null,state))?new cljs.core.Keyword(null,"auto","auto",-566279492):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),new cljs.core.Keyword(null,"lists","lists",-884730684),cljs.core.map.call(null,(function (p__12204){
var vec__12205 = p__12204;
var collection = cljs.core.nth.call(null,vec__12205,(0),null);
var scenes = cljs.core.nth.call(null,vec__12205,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(portfolio.core.get_collection.call(null,state,collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("portfolio.core","default","portfolio.core/default",-1800770435),collection)){
return null;
} else {
var G__12208 = collection;
if((G__12208 == null)){
return null;
} else {
return cljs.core.name.call(null,G__12208);
}
}
}
})(),new cljs.core.Keyword(null,"items","items",1031954938),portfolio.core.prepare_scenes.call(null,state,location,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"title","title",636505583),scenes))], null);
}),cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,(function (p1__12203_SHARP_){
return portfolio.core.get_scene_collection.call(null,state,p1__12203_SHARP_);
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state)))))], null);
} else {
return null;
}
});
portfolio.core.prepare_view_option = (function portfolio$core$prepare_view_option(current_view,view){
var G__12209 = view;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_view),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view))){
return cljs.core.assoc.call(null,G__12209,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__12209;
}
});
portfolio.core.get_scene_param_overrides = (function portfolio$core$get_scene_param_overrides(state,scene){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"overrides","overrides",1738628867)], null));
});
portfolio.core.get_scene_param = (function portfolio$core$get_scene_param(state,scene){
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene),portfolio.core.get_scene_param_overrides.call(null,state,scene));
} else {
return new cljs.core.Keyword(null,"param","param",2013631823).cljs$core$IFn$_invoke$arity$1(scene);
}
});
portfolio.core.prep_scene_fns = (function portfolio$core$prep_scene_fns(state,scenes){
var iter__5523__auto__ = (function portfolio$core$prep_scene_fns_$_iter__12211(s__12212){
return (new cljs.core.LazySeq(null,(function (){
var s__12212__$1 = s__12212;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12212__$1);
if(temp__5804__auto__){
var s__12212__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12212__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12212__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12214 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12213 = (0);
while(true){
if((i__12213 < size__5522__auto__)){
var scene = cljs.core._nth.call(null,c__5521__auto__,i__12213);
cljs.core.chunk_append.call(null,b__12214,(function (){var param = portfolio.core.get_scene_param.call(null,state,scene);
var G__12215 = cljs.core.assoc.call(null,scene,new cljs.core.Keyword(null,"component-param","component-param",1099370170),portfolio.code.code_str.call(null,param));
var G__12215__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.call(null,G__12215,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (i__12213,G__12215,param,scene,c__5521__auto__,size__5522__auto__,b__12214,s__12212__$2,temp__5804__auto__){
return (function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene);
});})(i__12213,G__12215,param,scene,c__5521__auto__,size__5522__auto__,b__12214,s__12212__$2,temp__5804__auto__))
):G__12215);
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.call(null,G__12215__$1,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (i__12213,G__12215,G__12215__$1,param,scene,c__5521__auto__,size__5522__auto__,b__12214,s__12212__$2,temp__5804__auto__){
return (function (p1__12210_SHARP_){
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene).call(null,param,p1__12210_SHARP_);
});})(i__12213,G__12215,G__12215__$1,param,scene,c__5521__auto__,size__5522__auto__,b__12214,s__12212__$2,temp__5804__auto__))
);
} else {
return G__12215__$1;
}
})());

var G__12217 = (i__12213 + (1));
i__12213 = G__12217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12214),portfolio$core$prep_scene_fns_$_iter__12211.call(null,cljs.core.chunk_rest.call(null,s__12212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12214),null);
}
} else {
var scene = cljs.core.first.call(null,s__12212__$2);
return cljs.core.cons.call(null,(function (){var param = portfolio.core.get_scene_param.call(null,state,scene);
var G__12216 = cljs.core.assoc.call(null,scene,new cljs.core.Keyword(null,"component-param","component-param",1099370170),portfolio.code.code_str.call(null,param));
var G__12216__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene))?cljs.core.assoc.call(null,G__12216,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (G__12216,param,scene,s__12212__$2,temp__5804__auto__){
return (function (){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(scene);
});})(G__12216,param,scene,s__12212__$2,temp__5804__auto__))
):G__12216);
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene))){
return cljs.core.assoc.call(null,G__12216__$1,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),((function (G__12216,G__12216__$1,param,scene,s__12212__$2,temp__5804__auto__){
return (function (p1__12210_SHARP_){
return new cljs.core.Keyword(null,"component-fn","component-fn",-266012750).cljs$core$IFn$_invoke$arity$1(scene).call(null,param,p1__12210_SHARP_);
});})(G__12216,G__12216__$1,param,scene,s__12212__$2,temp__5804__auto__))
);
} else {
return G__12216__$1;
}
})(),portfolio$core$prep_scene_fns_$_iter__12211.call(null,cljs.core.rest.call(null,s__12212__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,scenes);
});
portfolio.core.prepare_data = (function portfolio$core$prepare_data(state,location){
var current_scenes = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),portfolio.core.prep_scene_fns.call(null,state,portfolio.core.get_current_scenes.call(null,state,location)));
var current_namespace = portfolio.core.get_scene_namespace.call(null,state,cljs.core.first.call(null,current_scenes));
var current_view = portfolio.core.get_current_view.call(null,state,location);
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-scenes","current-scenes",1736940721),current_scenes,new cljs.core.Keyword(null,"current-namespace","current-namespace",-1512089502),current_namespace,new cljs.core.Keyword(null,"current-collection","current-collection",-1148466995),portfolio.core.get_collection.call(null,state,new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(current_namespace)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header","header",119441134),portfolio.core.prepare_header.call(null,state__$1,location),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),portfolio.core.prepare_sidebar.call(null,state__$1,location),new cljs.core.Keyword(null,"small?","small?",95242445),portfolio.core.small_screen_QMARK_.call(null,state__$1),new cljs.core.Keyword(null,"tab-bar","tab-bar",-787971209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.map.call(null,(function (p1__12218_SHARP_){
return portfolio.core.prepare_view_option.call(null,current_view,p1__12218_SHARP_);
}),new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state__$1))], null),new cljs.core.Keyword(null,"view","view",1247994814),portfolio.view.prepare_data.call(null,current_view,state__$1,location)], null);
});
portfolio.core.ns__GT_path = (function portfolio$core$ns__GT_path(ns){
return clojure.string.split.call(null,ns,/\./);
});
/**
 * Returns a list of unique paths represented by the namespaces. Discards
 *   namespace prefixes shared by all namespaces, and turns the remaining part
 *   of the namespace into a list:
 * 
 *   ```clj
 *   (get-paths ["ui.components.button"
 *            "ui.components.matrix"
 *            "ui.components.pill"])
 *   ;;=> (("button") ("matrix") ("pill"))
 *   ```
 * 
 *   ```clj
 *   (get-paths ["ui.components.button"
 *            "ui.components.pill"
 *            "ui.icons"])
 *   ;;=> (("components" "button") ("components" "pill") ("icons"))
 *   
 */
portfolio.core.get_paths = (function portfolio$core$get_paths(namespaces){
var paths = cljs.core.map.call(null,portfolio.core.ns__GT_path,namespaces);
var candidates = cljs.core.drop_last.call(null,(1),cljs.core.first.call(null,paths));
var paths__$1 = paths;
while(true){
if((((!(cljs.core.empty_QMARK_.call(null,candidates)))) && (((cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,candidates)]),cljs.core.first),paths__$1)) && (cljs.core.every_QMARK_.call(null,((function (candidates,paths__$1,paths){
return (function (p1__12219_SHARP_){
return ((2) < cljs.core.count.call(null,p1__12219_SHARP_));
});})(candidates,paths__$1,paths))
,paths__$1)))))){
var G__12221 = cljs.core.next.call(null,candidates);
var G__12222 = cljs.core.map.call(null,((function (candidates,paths__$1,paths){
return (function (p1__12220_SHARP_){
return cljs.core.drop.call(null,(1),p1__12220_SHARP_);
});})(candidates,paths__$1,paths))
,paths__$1);
candidates = G__12221;
paths__$1 = G__12222;
continue;
} else {
return paths__$1;
}
break;
}
});
portfolio.core.get_collection_title = (function portfolio$core$get_collection_title(s){
var G__12223 = s;
var G__12223__$1 = (((G__12223 == null))?null:clojure.string.replace.call(null,G__12223,/-/," "));
if((G__12223__$1 == null)){
return null;
} else {
return clojure.string.capitalize.call(null,G__12223__$1);
}
});
portfolio.core.get_default_organization = (function portfolio$core$get_default_organization(namespaces,collections,scenes){
var nses = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.namespace,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,scenes)));
var paths = portfolio.core.get_paths.call(null,nses);
var colls = cljs.core.concat.call(null,cljs.core.map.call(null,(function (coll){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),coll,new cljs.core.Keyword(null,"title","title",636505583),portfolio.core.get_collection_title.call(null,cljs.core.name.call(null,coll))], null),collections.call(null,coll));
}),cljs.core.keep.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.vals.call(null,namespaces))),cljs.core.map.call(null,(function (path){
var id = cljs.core.keyword.call(null,cljs.core.first.call(null,path));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),portfolio.core.get_collection_title.call(null,cljs.core.first.call(null,path))], null),collections.call(null,id));
}),cljs.core.filter.call(null,(function (p1__12224_SHARP_){
return ((1) < cljs.core.count.call(null,p1__12224_SHARP_));
}),paths)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.into.call(null,namespaces,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (ns,path){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,cljs.core.merge.call(null,(cljs.core.truth_(colls)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.join.call(null," / ",cljs.core.drop.call(null,(1),path)),new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.keyword.call(null,cljs.core.first.call(null,path))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),ns,new cljs.core.Keyword(null,"title","title",636505583),clojure.string.join.call(null," / ",path)], null)),cljs.core.get.call(null,namespaces,ns))], null);
}),nses,paths))),new cljs.core.Keyword(null,"collections","collections",-2114643505),(function (){var G__12225 = colls;
var G__12225__$1 = (((G__12225 == null))?null:cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),G__12225));
if((G__12225__$1 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12225__$1);
}
})()], null);
});
portfolio.core.init_state = (function portfolio$core$init_state(config){
var app = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,config,new cljs.core.Keyword(null,"scenes","scenes",-425219404),(function (p1__12226_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),p1__12226_SHARP_));
})),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),(function (p1__12227_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),cljs.core.identity),p1__12227_SHARP_));
})),new cljs.core.Keyword(null,"collections","collections",-2114643505),(function (p1__12228_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),p1__12228_SHARP_));
}));
var defaults = portfolio.core.get_default_organization.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(app));
var G__12229 = app;
var G__12229__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(defaults))?cljs.core.assoc.call(null,G__12229,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(defaults)):G__12229);
if(cljs.core.truth_(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(defaults))){
return cljs.core.assoc.call(null,G__12229__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(defaults));
} else {
return G__12229__$1;
}
});
