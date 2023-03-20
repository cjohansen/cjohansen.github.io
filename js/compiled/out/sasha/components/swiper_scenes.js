// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.swiper_scenes');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.dumdom');
goog.require('sasha.components.swiper');
goog.require('sasha.icons.check');
goog.require('sasha.icons.trash');
portfolio.data.register_namespace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),"sasha.components.swiper-scenes",new cljs.core.Keyword(null,"title","title",636505583),"Swiper",new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"components","components",-1073188942)], null));
sasha.components.swiper_scenes.styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null);
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swip-control-right","sasha.components.swiper-scenes/swip-control-right",1981449996),new cljs.core.Keyword(null,"line","line",212345235),17,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12121__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),"Click it to toggle state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),cljs.core.not);
})], null),sasha.components.swiper.SwipeControl.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),sasha.icons.trash.trash.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"var(--mexican-rojo)",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"swiper-above-threshold":null)], null))], null)], null);
};
var G__12121 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12122__i = 0, G__12122__a = new Array(arguments.length -  1);
while (G__12122__i < G__12122__a.length) {G__12122__a[G__12122__i] = arguments[G__12122__i + 1]; ++G__12122__i;}
  args = new cljs.core.IndexedSeq(G__12122__a,0,null);
} 
return G__12121__delegate.call(this,store,args);};
G__12121.cljs$lang$maxFixedArity = 1;
G__12121.cljs$lang$applyTo = (function (arglist__12123){
var store = cljs.core.first(arglist__12123);
var args = cljs.core.rest(arglist__12123);
return G__12121__delegate(store,args);
});
G__12121.cljs$core$IFn$_invoke$arity$variadic = G__12121__delegate;
return G__12121;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swip-control-left","sasha.components.swiper-scenes/swip-control-left",-1059059713),new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12124__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),"Click it to toggle state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),cljs.core.not);
})], null),sasha.components.swiper.SwipeControl.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sasha.icons.check.check.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"var(--lima)",new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"swiper-above-threshold":null)], null))], null)], null);
};
var G__12124 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12125__i = 0, G__12125__a = new Array(arguments.length -  1);
while (G__12125__i < G__12125__a.length) {G__12125__a[G__12125__i] = arguments[G__12125__i + 1]; ++G__12125__i;}
  args = new cljs.core.IndexedSeq(G__12125__a,0,null);
} 
return G__12124__delegate.call(this,store,args);};
G__12124.cljs$lang$maxFixedArity = 1;
G__12124.cljs$lang$applyTo = (function (arglist__12126){
var store = cljs.core.first(arglist__12126);
var args = cljs.core.rest(arglist__12126);
return G__12124__delegate(store,args);
});
G__12124.cljs$core$IFn$_invoke$arity$variadic = G__12124__delegate;
return G__12124;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-left","sasha.components.swiper-scenes/swipe-left",1027912791),new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12127__delegate = function (___12086__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me right"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)")], null),"OK!"], null)], null));
};
var G__12127 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12128__i = 0, G__12128__a = new Array(arguments.length -  0);
while (G__12128__i < G__12128__a.length) {G__12128__a[G__12128__i] = arguments[G__12128__i + 0]; ++G__12128__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12128__a,0,null);
} 
return G__12127__delegate.call(this,___12086__auto__);};
G__12127.cljs$lang$maxFixedArity = 0;
G__12127.cljs$lang$applyTo = (function (arglist__12129){
var ___12086__auto__ = cljs.core.seq(arglist__12129);
return G__12127__delegate(___12086__auto__);
});
G__12127.cljs$core$IFn$_invoke$arity$variadic = G__12127__delegate;
return G__12127;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-right","sasha.components.swiper-scenes/swipe-right",1801936263),new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12130__delegate = function (___12086__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me left"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)")], null),"NO!"], null)], null));
};
var G__12130 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12131__i = 0, G__12131__a = new Array(arguments.length -  0);
while (G__12131__i < G__12131__a.length) {G__12131__a[G__12131__i] = arguments[G__12131__i + 0]; ++G__12131__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12131__a,0,null);
} 
return G__12130__delegate.call(this,___12086__auto__);};
G__12130.cljs$lang$maxFixedArity = 0;
G__12130.cljs$lang$applyTo = (function (arglist__12132){
var ___12086__auto__ = cljs.core.seq(arglist__12132);
return G__12130__delegate(___12086__auto__);
});
G__12130.cljs$core$IFn$_invoke$arity$variadic = G__12130__delegate;
return G__12130;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-both-ways","sasha.components.swiper-scenes/swipe-both-ways",1800560647),new cljs.core.Keyword(null,"line","line",212345235),60,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12133__delegate = function (___12086__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me both ways"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)")], null),"OK!"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)")], null),"NO!"], null)], null));
};
var G__12133 = function (var_args){
var ___12086__auto__ = null;
if (arguments.length > 0) {
var G__12134__i = 0, G__12134__a = new Array(arguments.length -  0);
while (G__12134__i < G__12134__a.length) {G__12134__a[G__12134__i] = arguments[G__12134__i + 0]; ++G__12134__i;}
  ___12086__auto__ = new cljs.core.IndexedSeq(G__12134__a,0,null);
} 
return G__12133__delegate.call(this,___12086__auto__);};
G__12133.cljs$lang$maxFixedArity = 0;
G__12133.cljs$lang$applyTo = (function (arglist__12135){
var ___12086__auto__ = cljs.core.seq(arglist__12135);
return G__12133__delegate(___12086__auto__);
});
G__12133.cljs$core$IFn$_invoke$arity$variadic = G__12133__delegate;
return G__12133;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-with-left-threshold-transition","sasha.components.swiper-scenes/swipe-with-left-threshold-transition",211355873),new cljs.core.Keyword(null,"line","line",212345235),67,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12136__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Dragging right yields a transition"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.5s",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword(null,"ok?","ok?",447310304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"var(--lima)":"var(--mine-shaft)"))], null),"OK!"], null),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),true);
}),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),false);
})], null));
};
var G__12136 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12137__i = 0, G__12137__a = new Array(arguments.length -  1);
while (G__12137__i < G__12137__a.length) {G__12137__a[G__12137__i] = arguments[G__12137__i + 1]; ++G__12137__i;}
  args = new cljs.core.IndexedSeq(G__12137__a,0,null);
} 
return G__12136__delegate.call(this,store,args);};
G__12136.cljs$lang$maxFixedArity = 1;
G__12136.cljs$lang$applyTo = (function (arglist__12138){
var store = cljs.core.first(arglist__12138);
var args = cljs.core.rest(arglist__12138);
return G__12136__delegate(store,args);
});
G__12136.cljs$core$IFn$_invoke$arity$variadic = G__12136__delegate;
return G__12136;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-with-right-threshold-transition","sasha.components.swiper-scenes/swipe-with-right-threshold-transition",-339561642),new cljs.core.Keyword(null,"line","line",212345235),83,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12139__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Dragging left yields a transition"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.5s",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword(null,"ok?","ok?",447310304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"var(--mexican-rojo)":"var(--mine-shaft)"))], null),"NO!"], null),new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),true);
}),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),false);
})], null));
};
var G__12139 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12140__i = 0, G__12140__a = new Array(arguments.length -  1);
while (G__12140__i < G__12140__a.length) {G__12140__a[G__12140__i] = arguments[G__12140__i + 1]; ++G__12140__i;}
  args = new cljs.core.IndexedSeq(G__12140__a,0,null);
} 
return G__12139__delegate.call(this,store,args);};
G__12139.cljs$lang$maxFixedArity = 1;
G__12139.cljs$lang$applyTo = (function (arglist__12141){
var store = cljs.core.first(arglist__12141);
var args = cljs.core.rest(arglist__12141);
return G__12139__delegate(store,args);
});
G__12139.cljs$core$IFn$_invoke$arity$variadic = G__12139__delegate;
return G__12139;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-both-ways-with-transitions","sasha.components.swiper-scenes/swipe-both-ways-with-transitions",1192713060),new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12142__delegate = function (store,args){
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
var G__12142 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12143__i = 0, G__12143__a = new Array(arguments.length -  1);
while (G__12143__i < G__12143__a.length) {G__12143__a[G__12143__i] = arguments[G__12143__i + 1]; ++G__12143__i;}
  args = new cljs.core.IndexedSeq(G__12143__a,0,null);
} 
return G__12142__delegate.call(this,store,args);};
G__12142.cljs$lang$maxFixedArity = 1;
G__12142.cljs$lang$applyTo = (function (arglist__12144){
var store = cljs.core.first(arglist__12144);
var args = cljs.core.rest(arglist__12144);
return G__12142__delegate(store,args);
});
G__12142.cljs$core$IFn$_invoke$arity$variadic = G__12142__delegate;
return G__12142;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","snap-left-disappear","sasha.components.swiper-scenes/snap-left-disappear",2126468128),new cljs.core.Keyword(null,"line","line",212345235),126,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12145__delegate = function (store,args){
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
var G__12145 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12146__i = 0, G__12146__a = new Array(arguments.length -  1);
while (G__12146__i < G__12146__a.length) {G__12146__a[G__12146__i] = arguments[G__12146__i + 1]; ++G__12146__i;}
  args = new cljs.core.IndexedSeq(G__12146__a,0,null);
} 
return G__12145__delegate.call(this,store,args);};
G__12145.cljs$lang$maxFixedArity = 1;
G__12145.cljs$lang$applyTo = (function (arglist__12147){
var store = cljs.core.first(arglist__12147);
var args = cljs.core.rest(arglist__12147);
return G__12145__delegate(store,args);
});
G__12145.cljs$core$IFn$_invoke$arity$variadic = G__12145__delegate;
return G__12145;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
/**
 * 
 */
sasha.components.swiper_scenes.CustomSwipable = dumdom.core.component.call(null,(function (data){
return sasha.components.swiper.swipable_container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-left","div.swipe-left",-1783015736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?(1):0.1),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?"opacity 0.5s ease-in":"opacity 0.75s ease-out"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),sasha.components.swiper_scenes.styles], null),"NO!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me right"], null)], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper-scenes/CustomSwipable",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","custom-swipable","sasha.components.swiper-scenes/custom-swipable",260828760),new cljs.core.Keyword(null,"line","line",212345235),176,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12148__delegate = function (store,args){
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
var G__12148 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12149__i = 0, G__12149__a = new Array(arguments.length -  1);
while (G__12149__i < G__12149__a.length) {G__12149__a[G__12149__i] = arguments[G__12149__i + 1]; ++G__12149__i;}
  args = new cljs.core.IndexedSeq(G__12149__a,0,null);
} 
return G__12148__delegate.call(this,store,args);};
G__12148.cljs$lang$maxFixedArity = 1;
G__12148.cljs$lang$applyTo = (function (arglist__12150){
var store = cljs.core.first(arglist__12150);
var args = cljs.core.rest(arglist__12150);
return G__12148__delegate(store,args);
});
G__12148.cljs$core$IFn$_invoke$arity$variadic = G__12148__delegate;
return G__12148;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.2], null),new cljs.core.Keyword(null,"snap-left","snap-left",-535184056),0.3], null))], null)));
/**
 * 
 */
sasha.components.swiper_scenes.CustomSwipeRight = dumdom.core.component.call(null,(function (data){
return sasha.components.swiper.swipable_container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-right","div.swipe-right",2110781987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?(1):0.1),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?"opacity 0.5s ease-in":"opacity 0.75s ease-out"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end")], null),"NO!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),"Drag me left"], null)], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper-scenes/CustomSwipeRight",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","custom-swipable-other-side","sasha.components.swiper-scenes/custom-swipable-other-side",739530405),new cljs.core.Keyword(null,"line","line",212345235),221,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__12151__delegate = function (store,args){
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
var G__12151 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__12152__i = 0, G__12152__a = new Array(arguments.length -  1);
while (G__12152__i < G__12152__a.length) {G__12152__a[G__12152__i] = arguments[G__12152__i + 1]; ++G__12152__i;}
  args = new cljs.core.IndexedSeq(G__12152__a,0,null);
} 
return G__12151__delegate.call(this,store,args);};
G__12151.cljs$lang$maxFixedArity = 1;
G__12151.cljs$lang$applyTo = (function (arglist__12153){
var store = cljs.core.first(arglist__12153);
var args = cljs.core.rest(arglist__12153);
return G__12151__delegate(store,args);
});
G__12151.cljs$core$IFn$_invoke$arity$variadic = G__12151__delegate;
return G__12151;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5], null),new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294),0.3], null))], null)));
