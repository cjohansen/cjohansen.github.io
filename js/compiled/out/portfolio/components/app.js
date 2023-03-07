// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.app');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.components.header');
goog.require('portfolio.components.sidebar');
goog.require('portfolio.components.tab_bar');
goog.require('portfolio.view');
/**
 * 
 */
portfolio.components.app.App = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),(function (){var G__15903 = data;
var G__15903__$1 = (((G__15903 == null))?null:new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(G__15903));
if((G__15903__$1 == null)){
return null;
} else {
return portfolio.components.sidebar.Sidebar.call(null,G__15903__$1);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#e1e4ec",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1)], null)], null),(function (){var G__15904 = data;
var G__15904__$1 = (((G__15904 == null))?null:new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(G__15904));
if((G__15904__$1 == null)){
return null;
} else {
return portfolio.components.header.Header.call(null,G__15904__$1);
}
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"rgba(0, 0, 0, 0.1) 0px 1px 5px 0px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"margin","margin",-995903681),(cljs.core.truth_(new cljs.core.Keyword(null,"sidebar","sidebar",35784458).cljs$core$IFn$_invoke$arity$1(data))?"10px 10px 10px 0":(cljs.core.truth_(new cljs.core.Keyword(null,"small?","small?",95242445).cljs$core$IFn$_invoke$arity$1(data))?"10px 0 0":(10)))], null)], null),((((1) < (function (){var or__5045__auto__ = (function (){var G__15905 = data;
var G__15905__$1 = (((G__15905 == null))?null:new cljs.core.Keyword(null,"tab-bar","tab-bar",-787971209).cljs$core$IFn$_invoke$arity$1(G__15905));
var G__15905__$2 = (((G__15905__$1 == null))?null:new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(G__15905__$1));
if((G__15905__$2 == null)){
return null;
} else {
return cljs.core.count.call(null,G__15905__$2);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})()))?portfolio.components.tab_bar.TabBar.call(null,new cljs.core.Keyword(null,"tab-bar","tab-bar",-787971209).cljs$core$IFn$_invoke$arity$1(data)):null),portfolio.view.render_view.call(null,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(data))], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.app/App"], null));
