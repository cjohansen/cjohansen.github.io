// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.code');
goog.require('cljs.core');
goog.require('dumdom.core');
/**
 * 
 */
portfolio.components.code.Code = dumdom.core.component.call(null,(function (p__11735){
var map__11736 = p__11735;
var map__11736__$1 = cljs.core.__destructure_map.call(null,map__11736);
var code = cljs.core.get.call(null,map__11736__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.language-clojure","pre.language-clojure",296125079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),code], null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.code/Code",new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"on-render","on-render",2096729391),(function (el){
return Prism.highlightElement(el);
})], null));
