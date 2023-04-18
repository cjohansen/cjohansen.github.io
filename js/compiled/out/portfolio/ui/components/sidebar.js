// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.sidebar');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.ui.components.auto_complete');
goog.require('portfolio.ui.components.browser');
goog.require('portfolio.ui.icons');
/**
 * 
 */
portfolio.ui.components.sidebar.Sidebar = dumdom.core.component.call(null,(function (p__16675){
var map__16676 = p__16675;
var map__16676__$1 = cljs.core.__destructure_map.call(null,map__16676);
var width = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"title","title",636505583));
var items = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var lists = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var actions = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var slide_QMARK_ = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"slide?","slide?",1648217264));
var search = cljs.core.get.call(null,map__16676__$1,new cljs.core.Keyword(null,"search","search",1564939822));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(slide_QMARK_)?(0):width),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s ease"], null),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null)], null),portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword("portfolio.ui.icons","caret-double-left","portfolio.ui.icons/caret-double-left",-2054329057),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 8px"], null)], null)),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 10px"], null)], null),title], null):null),(cljs.core.truth_(search)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 20px"], null)], null),portfolio.ui.components.auto_complete.AutoCompleter.call(null,search)], null):null),portfolio.ui.components.browser.render_items.call(null,items)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.sidebar/Sidebar"], null));
