// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.swiper_scenes');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.dumdom');
goog.require('sasha.components.swiper');
goog.require('sasha.icons');
sasha.components.swiper_scenes.styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null);
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swip-control-right","sasha.components.swiper-scenes/swip-control-right",1981449996),new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16614__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),"Click it to toggle state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (_e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),cljs.core.not);
})], null),sasha.components.swiper.SwipeControl.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),sasha.icons.render.call(null,new cljs.core.Keyword("sasha.icons","trash","sasha.icons/trash",-1665323124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"var(--mexican-rojo)",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"swiper-above-threshold":null)], null))], null)], null);
};
var G__16614 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16615__i = 0, G__16615__a = new Array(arguments.length -  1);
while (G__16615__i < G__16615__a.length) {G__16615__a[G__16615__i] = arguments[G__16615__i + 1]; ++G__16615__i;}
  args = new cljs.core.IndexedSeq(G__16615__a,0,null);
} 
return G__16614__delegate.call(this,store,args);};
G__16614.cljs$lang$maxFixedArity = 1;
G__16614.cljs$lang$applyTo = (function (arglist__16616){
var store = cljs.core.first(arglist__16616);
var args = cljs.core.rest(arglist__16616);
return G__16614__delegate(store,args);
});
G__16614.cljs$core$IFn$_invoke$arity$variadic = G__16614__delegate;
return G__16614;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swip-control-left","sasha.components.swiper-scenes/swip-control-left",-1059059713),new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16617__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),"Click it to toggle state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (_e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),cljs.core.not);
})], null),sasha.components.swiper.SwipeControl.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sasha.icons.render.call(null,new cljs.core.Keyword("sasha.icons","check","sasha.icons/check",-373944726),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"var(--lima)",new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"swiper-above-threshold":null)], null))], null)], null);
};
var G__16617 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16618__i = 0, G__16618__a = new Array(arguments.length -  1);
while (G__16618__i < G__16618__a.length) {G__16618__a[G__16618__i] = arguments[G__16618__i + 1]; ++G__16618__i;}
  args = new cljs.core.IndexedSeq(G__16618__a,0,null);
} 
return G__16617__delegate.call(this,store,args);};
G__16617.cljs$lang$maxFixedArity = 1;
G__16617.cljs$lang$applyTo = (function (arglist__16619){
var store = cljs.core.first(arglist__16619);
var args = cljs.core.rest(arglist__16619);
return G__16617__delegate(store,args);
});
G__16617.cljs$core$IFn$_invoke$arity$variadic = G__16617__delegate;
return G__16617;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-left","sasha.components.swiper-scenes/swipe-left",1027912791),new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16620__delegate = function (___15419__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me right"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)")], null),"OK!"], null)], null));
};
var G__16620 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__16621__i = 0, G__16621__a = new Array(arguments.length -  0);
while (G__16621__i < G__16621__a.length) {G__16621__a[G__16621__i] = arguments[G__16621__i + 0]; ++G__16621__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__16621__a,0,null);
} 
return G__16620__delegate.call(this,___15419__auto__);};
G__16620.cljs$lang$maxFixedArity = 0;
G__16620.cljs$lang$applyTo = (function (arglist__16622){
var ___15419__auto__ = cljs.core.seq(arglist__16622);
return G__16620__delegate(___15419__auto__);
});
G__16620.cljs$core$IFn$_invoke$arity$variadic = G__16620__delegate;
return G__16620;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-right","sasha.components.swiper-scenes/swipe-right",1801936263),new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16623__delegate = function (___15419__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me left"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)")], null),"NO!"], null)], null));
};
var G__16623 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__16624__i = 0, G__16624__a = new Array(arguments.length -  0);
while (G__16624__i < G__16624__a.length) {G__16624__a[G__16624__i] = arguments[G__16624__i + 0]; ++G__16624__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__16624__a,0,null);
} 
return G__16623__delegate.call(this,___15419__auto__);};
G__16623.cljs$lang$maxFixedArity = 0;
G__16623.cljs$lang$applyTo = (function (arglist__16625){
var ___15419__auto__ = cljs.core.seq(arglist__16625);
return G__16623__delegate(___15419__auto__);
});
G__16623.cljs$core$IFn$_invoke$arity$variadic = G__16623__delegate;
return G__16623;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-both-ways","sasha.components.swiper-scenes/swipe-both-ways",1800560647),new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16626__delegate = function (___15419__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me both ways"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)")], null),"OK!"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)")], null),"NO!"], null)], null));
};
var G__16626 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__16627__i = 0, G__16627__a = new Array(arguments.length -  0);
while (G__16627__i < G__16627__a.length) {G__16627__a[G__16627__i] = arguments[G__16627__i + 0]; ++G__16627__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__16627__a,0,null);
} 
return G__16626__delegate.call(this,___15419__auto__);};
G__16626.cljs$lang$maxFixedArity = 0;
G__16626.cljs$lang$applyTo = (function (arglist__16628){
var ___15419__auto__ = cljs.core.seq(arglist__16628);
return G__16626__delegate(___15419__auto__);
});
G__16626.cljs$core$IFn$_invoke$arity$variadic = G__16626__delegate;
return G__16626;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-with-left-threshold-transition","sasha.components.swiper-scenes/swipe-with-left-threshold-transition",211355873),new cljs.core.Keyword(null,"line","line",212345235),61,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16629__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Dragging right yields a transition"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.5s",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword(null,"ok?","ok?",447310304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"var(--lima)":"var(--mine-shaft)"))], null),"OK!"], null),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),true);
}),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),false);
})], null));
};
var G__16629 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16630__i = 0, G__16630__a = new Array(arguments.length -  1);
while (G__16630__i < G__16630__a.length) {G__16630__a[G__16630__i] = arguments[G__16630__i + 1]; ++G__16630__i;}
  args = new cljs.core.IndexedSeq(G__16630__a,0,null);
} 
return G__16629__delegate.call(this,store,args);};
G__16629.cljs$lang$maxFixedArity = 1;
G__16629.cljs$lang$applyTo = (function (arglist__16631){
var store = cljs.core.first(arglist__16631);
var args = cljs.core.rest(arglist__16631);
return G__16629__delegate(store,args);
});
G__16629.cljs$core$IFn$_invoke$arity$variadic = G__16629__delegate;
return G__16629;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-with-right-threshold-transition","sasha.components.swiper-scenes/swipe-with-right-threshold-transition",-339561642),new cljs.core.Keyword(null,"line","line",212345235),77,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16632__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Dragging left yields a transition"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.5s",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword(null,"ok?","ok?",447310304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"var(--mexican-rojo)":"var(--mine-shaft)"))], null),"NO!"], null),new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),true);
}),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),false);
})], null));
};
var G__16632 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16633__i = 0, G__16633__a = new Array(arguments.length -  1);
while (G__16633__i < G__16633__a.length) {G__16633__a[G__16633__i] = arguments[G__16633__i + 1]; ++G__16633__i;}
  args = new cljs.core.IndexedSeq(G__16633__a,0,null);
} 
return G__16632__delegate.call(this,store,args);};
G__16632.cljs$lang$maxFixedArity = 1;
G__16632.cljs$lang$applyTo = (function (arglist__16634){
var store = cljs.core.first(arglist__16634);
var args = cljs.core.rest(arglist__16634);
return G__16632__delegate(store,args);
});
G__16632.cljs$core$IFn$_invoke$arity$variadic = G__16632__delegate;
return G__16632;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-both-ways-with-transitions","sasha.components.swiper-scenes/swipe-both-ways-with-transitions",1192713060),new cljs.core.Keyword(null,"line","line",212345235),93,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16635__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.Keyword(null,"left","left",-399115937)],[(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"right?","right?",380310444),true);
}),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"right?","right?",380310444),false);
}),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"left?","left?",1009526930),true);
}),0.25,0.25,(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"left?","left?",1009526930),false);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(100),new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.5s",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"right?","right?",380310444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?(1):0.1))], null),"NO!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me both ways"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(100),new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.5s",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"left?","left?",1009526930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?(1):0.1))], null),"OK!"], null)]));
};
var G__16635 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16636__i = 0, G__16636__a = new Array(arguments.length -  1);
while (G__16636__i < G__16636__a.length) {G__16636__a[G__16636__i] = arguments[G__16636__i + 1]; ++G__16636__i;}
  args = new cljs.core.IndexedSeq(G__16636__a,0,null);
} 
return G__16635__delegate.call(this,store,args);};
G__16635.cljs$lang$maxFixedArity = 1;
G__16635.cljs$lang$applyTo = (function (arglist__16637){
var store = cljs.core.first(arglist__16637);
var args = cljs.core.rest(arglist__16637);
return G__16635__delegate(store,args);
});
G__16635.cljs$core$IFn$_invoke$arity$variadic = G__16635__delegate;
return G__16635;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","snap-left-disappear","sasha.components.swiper-scenes/snap-left-disappear",2126468128),new cljs.core.Keyword(null,"line","line",212345235),120,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16638__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"retry?","retry?",-1054643849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,store,cljs.core.dissoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),new cljs.core.Keyword(null,"retry?","retry?",-1054643849));
})], null),"Try again"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"gone?","gone?",1030484758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.5s",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null),sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me left"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?(1):0.1),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(100))], null),"NO!"], null),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),0.25,new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294),0.4,new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),true);
}),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),false);
}),new cljs.core.Keyword(null,"on-snap-right","on-snap-right",-1422270406),(function (){
cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),true);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"retry?","retry?",-1054643849),true,new cljs.core.Keyword(null,"active?","active?",459499776),false);
}),(1000));
})], null))], null))], null);
};
var G__16638 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16639__i = 0, G__16639__a = new Array(arguments.length -  1);
while (G__16639__i < G__16639__a.length) {G__16639__a[G__16639__i] = arguments[G__16639__i + 1]; ++G__16639__i;}
  args = new cljs.core.IndexedSeq(G__16639__a,0,null);
} 
return G__16638__delegate.call(this,store,args);};
G__16638.cljs$lang$maxFixedArity = 1;
G__16638.cljs$lang$applyTo = (function (arglist__16640){
var store = cljs.core.first(arglist__16640);
var args = cljs.core.rest(arglist__16640);
return G__16638__delegate(store,args);
});
G__16638.cljs$core$IFn$_invoke$arity$variadic = G__16638__delegate;
return G__16638;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
/**
 * 
 */
sasha.components.swiper_scenes.CustomSwipable = dumdom.core.component.call(null,(function (data){
return sasha.components.swiper.swipable_container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-left","div.swipe-left",-1783015736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?(1):0.1),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?"opacity 0.5s ease-in":"opacity 0.75s ease-out"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),sasha.components.swiper_scenes.styles], null),"NO!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me right"], null)], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper-scenes/CustomSwipable",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","custom-swipable","sasha.components.swiper-scenes/custom-swipable",260828760),new cljs.core.Keyword(null,"line","line",212345235),170,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16641__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"retry?","retry?",-1054643849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,store,cljs.core.dissoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),new cljs.core.Keyword(null,"retry?","retry?",-1054643849));
})], null),"Try again"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"gone?","gone?",1030484758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.5s",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null),sasha.components.swiper_scenes.CustomSwipable.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,store),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),true);
}),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),false);
}),new cljs.core.Keyword(null,"on-snap-left","on-snap-left",-900655144),(function (){
cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),true);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"retry?","retry?",-1054643849),true,new cljs.core.Keyword(null,"active?","active?",459499776),false);
}),(1000));
})))], null))], null);
};
var G__16641 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16642__i = 0, G__16642__a = new Array(arguments.length -  1);
while (G__16642__i < G__16642__a.length) {G__16642__a[G__16642__i] = arguments[G__16642__i + 1]; ++G__16642__i;}
  args = new cljs.core.IndexedSeq(G__16642__a,0,null);
} 
return G__16641__delegate.call(this,store,args);};
G__16641.cljs$lang$maxFixedArity = 1;
G__16641.cljs$lang$applyTo = (function (arglist__16643){
var store = cljs.core.first(arglist__16643);
var args = cljs.core.rest(arglist__16643);
return G__16641__delegate(store,args);
});
G__16641.cljs$core$IFn$_invoke$arity$variadic = G__16641__delegate;
return G__16641;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.2], null),new cljs.core.Keyword(null,"snap-left","snap-left",-535184056),0.3], null))], null)));
/**
 * 
 */
sasha.components.swiper_scenes.CustomSwipeRight = dumdom.core.component.call(null,(function (data){
return sasha.components.swiper.swipable_container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-right","div.swipe-right",2110781987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?(1):0.1),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?"opacity 0.5s ease-in":"opacity 0.75s ease-out"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end")], null),"NO!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me left"], null)], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper-scenes/CustomSwipeRight",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","custom-swipable-other-side","sasha.components.swiper-scenes/custom-swipable-other-side",739530405),new cljs.core.Keyword(null,"line","line",212345235),215,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__16644__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"retry?","retry?",-1054643849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,store,cljs.core.dissoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),new cljs.core.Keyword(null,"retry?","retry?",-1054643849));
})], null),"Try again"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"gone?","gone?",1030484758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.5s",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null),sasha.components.swiper_scenes.CustomSwipeRight.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,store),new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),true);
}),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"active?","active?",459499776),false);
}),new cljs.core.Keyword(null,"on-snap-right","on-snap-right",-1422270406),(function (){
cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),true);

return setTimeout((function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"retry?","retry?",-1054643849),true,new cljs.core.Keyword(null,"active?","active?",459499776),false);
}),(1000));
})))], null))], null);
};
var G__16644 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__16645__i = 0, G__16645__a = new Array(arguments.length -  1);
while (G__16645__i < G__16645__a.length) {G__16645__a[G__16645__i] = arguments[G__16645__i + 1]; ++G__16645__i;}
  args = new cljs.core.IndexedSeq(G__16645__a,0,null);
} 
return G__16644__delegate.call(this,store,args);};
G__16644.cljs$lang$maxFixedArity = 1;
G__16644.cljs$lang$applyTo = (function (arglist__16646){
var store = cljs.core.first(arglist__16646);
var args = cljs.core.rest(arglist__16646);
return G__16644__delegate(store,args);
});
G__16644.cljs$core$IFn$_invoke$arity$variadic = G__16644__delegate;
return G__16644;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5], null),new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294),0.3], null))], null)));
