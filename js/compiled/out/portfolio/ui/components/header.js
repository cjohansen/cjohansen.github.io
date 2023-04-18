// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.header');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.ui.components.browser');
goog.require('portfolio.ui.components.menu_bar');
goog.require('portfolio.ui.icons');
/**
 * 
 */
portfolio.ui.components.header.Header = dumdom.core.component.call(null,(function (p__16694){
var map__16695 = p__16694;
var map__16695__$1 = cljs.core.__destructure_map.call(null,map__16695);
var menu_bar = cljs.core.get.call(null,map__16695__$1,new cljs.core.Keyword(null,"menu-bar","menu-bar",-1688157683));
var left_action = cljs.core.get.call(null,map__16695__$1,new cljs.core.Keyword(null,"left-action","left-action",-981562810));
var menu = cljs.core.get.call(null,map__16695__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],["center","height 0.25s ease","hidden","0",(20),(20),"flex",(0),"1px solid var(--header-border)"]),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(56)], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(left_action))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(left_action),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(left_action)], null)):null),portfolio.ui.components.menu_bar.MenuBar.call(null,menu_bar)], null),(cljs.core.truth_(menu)?portfolio.ui.components.browser.Browser.call(null,menu):null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.header/Header"], null));
