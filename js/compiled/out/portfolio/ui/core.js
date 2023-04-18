// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.intro_screen');
goog.require('portfolio.ui.routes');
goog.require('portfolio.ui.scene_browser');
goog.require('portfolio.ui.screen');
goog.require('portfolio.ui.search');
goog.require('portfolio.ui.view');
portfolio.ui.core.sidebar_QMARK_ = (function portfolio$ui$core$sidebar_QMARK_(p__17886){
var map__17887 = p__17886;
var map__17887__$1 = cljs.core.__destructure_map.call(null,map__17887);
var state = map__17887__$1;
var sidebar_status = cljs.core.get.call(null,map__17887__$1,new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311));
if(cljs.core._EQ_.call(null,sidebar_status,new cljs.core.Keyword(null,"hidden","hidden",-312506092))){
return false;
} else {
if(cljs.core._EQ_.call(null,sidebar_status,new cljs.core.Keyword(null,"visible","visible",-1024216805))){
return true;
} else {
return (!(portfolio.ui.screen.small_screen_QMARK_.call(null,state)));

}
}
});
portfolio.ui.core.prepare_scene_browser = (function portfolio$ui$core$prepare_scene_browser(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17896 = arguments.length;
var i__5770__auto___17897 = (0);
while(true){
if((i__5770__auto___17897 < len__5769__auto___17896)){
args__5775__auto__.push((arguments[i__5770__auto___17897]));

var G__17898 = (i__5770__auto___17897 + (1));
i__5770__auto___17897 = G__17898;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.core.prepare_scene_browser.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.core.prepare_scene_browser.cljs$core$IFn$_invoke$arity$variadic = (function (state,location,p__17891){
var vec__17892 = p__17891;
var map__17895 = cljs.core.nth.call(null,vec__17892,(0),null);
var map__17895__$1 = cljs.core.__destructure_map.call(null,map__17895);
var select_actions = cljs.core.get.call(null,map__17895__$1,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860));
return clojure.walk.postwalk.call(null,(function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("portfolio.ui.core","navigate-to","portfolio.ui.core/navigate-to",266108851),cljs.core.first.call(null,x))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),portfolio.ui.routes.get_location.call(null,location,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.second.call(null,x)], null))], null);
} else {
return x;
}
}),portfolio.ui.scene_browser.prepare_browser.call(null,state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"select-actions","select-actions",-859150860),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("event","prevent-default","event/prevent-default",767971177)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portfolio.ui.core","navigate-to","portfolio.ui.core/navigate-to",266108851),new cljs.core.Keyword("portfolio.ui.scene-browser","target-id","portfolio.ui.scene-browser/target-id",-1487055392)], null)], null),select_actions),new cljs.core.Keyword(null,"current-id","current-id",210783650),portfolio.ui.routes.get_id.call(null,location)], null)));
}));

(portfolio.ui.core.prepare_scene_browser.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.core.prepare_scene_browser.cljs$lang$applyTo = (function (seq17888){
var G__17889 = cljs.core.first.call(null,seq17888);
var seq17888__$1 = cljs.core.next.call(null,seq17888);
var G__17890 = cljs.core.first.call(null,seq17888__$1);
var seq17888__$2 = cljs.core.next.call(null,seq17888__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17889,G__17890,seq17888__$2);
}));

portfolio.ui.core.prepare_sidebar = (function portfolio$ui$core$prepare_sidebar(state,location){
if(portfolio.ui.core.sidebar_QMARK_.call(null,state)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(360),new cljs.core.Keyword(null,"slide?","slide?",1648217264),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311)], null),((portfolio.ui.screen.small_screen_QMARK_.call(null,state))?new cljs.core.Keyword(null,"auto","auto",-566279492):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.core.prepare_scene_browser.call(null,state,location),new cljs.core.Keyword(null,"search","search",1564939822),(cljs.core.truth_(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(state))?portfolio.ui.search.prepare_search.call(null,state,location):null)], null);
} else {
return null;
}
});
portfolio.ui.core.prepare_header = (function portfolio$ui$core$prepare_header(state,location){
if(portfolio.ui.core.sidebar_QMARK_.call(null,state)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left-action","left-action",-981562810),((portfolio.ui.screen.small_screen_QMARK_.call(null,state))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","caret-double-right","portfolio.ui.icons/caret-double-right",136552373),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sidebar-status","sidebar-status",922425311)], null),((portfolio.ui.screen.small_screen_QMARK_.call(null,state))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"auto","auto",-566279492))], null)], null)], null)),new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683),portfolio.ui.collection.prepare_selection_menu_bar.call(null,state,new cljs.core.Keyword(null,"current-selection","current-selection",-812715814).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expand-path","expand-path",-436455836),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-menu-expanded?","header-menu-expanded?",1750347566)], null),new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"tight?","tight?",1625746895),portfolio.ui.screen.small_screen_QMARK_.call(null,state)], null)),new cljs.core.Keyword(null,"menu","menu",352255198),(cljs.core.truth_(new cljs.core.Keyword(null,"header-menu-expanded?","header-menu-expanded?",1750347566).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.core.prepare_scene_browser.call(null,state,location,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select-actions","select-actions",-859150860),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-menu-expanded?","header-menu-expanded?",1750347566)], null),false], null)], null)], null))], null):null)], null);
}
});
portfolio.ui.core.get_current_view = (function portfolio$ui$core$get_current_view(state,_location){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state));
});
portfolio.ui.core.prepare_view_option = (function portfolio$ui$core$prepare_view_option(current_view,view){
var G__17899 = view;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_view),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(view))){
return cljs.core.assoc.call(null,G__17899,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__17899;
}
});
portfolio.ui.core.prepare_data = (function portfolio$ui$core$prepare_data(state,location){
if(cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state)))){
var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-selection","current-selection",-812715814),portfolio.ui.collection.get_selection.call(null,state,portfolio.ui.routes.get_id.call(null,location)));
var current_view = portfolio.ui.core.get_current_view.call(null,state__$1,location);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header","header",119441134),portfolio.ui.core.prepare_header.call(null,state__$1,location),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),portfolio.ui.core.prepare_sidebar.call(null,state__$1,location),new cljs.core.Keyword(null,"small?","small?",95242445),portfolio.ui.screen.small_screen_QMARK_.call(null,state__$1),new cljs.core.Keyword(null,"tab-bar","tab-bar",-787971209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.map.call(null,(function (p1__17900_SHARP_){
return portfolio.ui.core.prepare_view_option.call(null,current_view,p1__17900_SHARP_);
}),new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(state__$1))], null),new cljs.core.Keyword(null,"view","view",1247994814),portfolio.ui.view.prepare_data.call(null,current_view,state__$1,location)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),portfolio.ui.intro_screen.prepare_view.call(null,state,location)], null);
}
});
