// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.triangle');
goog.require('cljs.core');
goog.require('dumdom.core');
/**
 * 
 */
portfolio.components.triangle.Triangle = dumdom.core.component.call(null,(function (p__11725){
var map__11726 = p__11725;
var map__11726__$1 = cljs.core.__destructure_map.call(null,map__11726);
var color = cljs.core.get.call(null,map__11726__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var direction = cljs.core.get.call(null,map__11726__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var actions = cljs.core.get.call(null,map__11726__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var text = cljs.core.get.call(null,map__11726__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 6px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415)],[(function (){var G__11727 = direction;
var G__11727__$1 = (((G__11727 instanceof cljs.core.Keyword))?G__11727.fqn:null);
switch (G__11727__$1) {
case "down":
return "rotateZ(90deg)";

break;
case "left":
return "rotateZ(180deg)";

break;
case "up":
return "rotateZ(270deg)";

break;
default:
return "none";

}
})(),(function (){var or__5045__auto__ = color;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "rgba(153, 153, 153, 0.6)";
}
})(),"transform 0.1s ease-out 0s",(0),"4px solid","inline-block","4px solid transparent",(0),"4px solid transparent"])], null)], null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.triangle/Triangle"], null));
/**
 * 
 */
portfolio.components.triangle.TriangleButton = dumdom.core.component.call(null,(function (data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"bg-color","bg-color",455102491).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "#f0f0f0";
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null),portfolio.components.triangle.Triangle.call(null,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"color","color",1011675173),(function (p1__11729_SHARP_){
var or__5045__auto__ = p1__11729_SHARP_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "#999";
}
})))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.triangle/TriangleButton"], null));
