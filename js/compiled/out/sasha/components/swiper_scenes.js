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
var G__15768__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),"Click it to toggle state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),cljs.core.not);
})], null),sasha.components.swiper.SwipeControl.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),sasha.icons.trash.trash.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"var(--mexican-rojo)",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"swiper-above-threshold":null)], null))], null)], null);
};
var G__15768 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15769__i = 0, G__15769__a = new Array(arguments.length -  1);
while (G__15769__i < G__15769__a.length) {G__15769__a[G__15769__i] = arguments[G__15769__i + 1]; ++G__15769__i;}
  args = new cljs.core.IndexedSeq(G__15769__a,0,null);
} 
return G__15768__delegate.call(this,store,args);};
G__15768.cljs$lang$maxFixedArity = 1;
G__15768.cljs$lang$applyTo = (function (arglist__15770){
var store = cljs.core.first(arglist__15770);
var args = cljs.core.rest(arglist__15770);
return G__15768__delegate(store,args);
});
G__15768.cljs$core$IFn$_invoke$arity$variadic = G__15768__delegate;
return G__15768;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swip-control-left","sasha.components.swiper-scenes/swip-control-left",-1059059713),new cljs.core.Keyword(null,"line","line",212345235),33,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15771__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(10)], null)], null),"Click it to toggle state"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
return cljs.core.swap_BANG_.call(null,store,cljs.core.update,new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623),cljs.core.not);
})], null),sasha.components.swiper.SwipeControl.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),sasha.icons.check.check.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#ffffff",new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)),new cljs.core.Keyword(null,"color","color",1011675173),"var(--lima)",new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"clicked?","clicked?",-1150668623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"swiper-above-threshold":null)], null))], null)], null);
};
var G__15771 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15772__i = 0, G__15772__a = new Array(arguments.length -  1);
while (G__15772__i < G__15772__a.length) {G__15772__a[G__15772__i] = arguments[G__15772__i + 1]; ++G__15772__i;}
  args = new cljs.core.IndexedSeq(G__15772__a,0,null);
} 
return G__15771__delegate.call(this,store,args);};
G__15771.cljs$lang$maxFixedArity = 1;
G__15771.cljs$lang$applyTo = (function (arglist__15773){
var store = cljs.core.first(arglist__15773);
var args = cljs.core.rest(arglist__15773);
return G__15771__delegate(store,args);
});
G__15771.cljs$core$IFn$_invoke$arity$variadic = G__15771__delegate;
return G__15771;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-left","sasha.components.swiper-scenes/swipe-left",1027912791),new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15774__delegate = function (___15743__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me right"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)")], null),"OK!"], null)], null));
};
var G__15774 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__15775__i = 0, G__15775__a = new Array(arguments.length -  0);
while (G__15775__i < G__15775__a.length) {G__15775__a[G__15775__i] = arguments[G__15775__i + 0]; ++G__15775__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__15775__a,0,null);
} 
return G__15774__delegate.call(this,___15743__auto__);};
G__15774.cljs$lang$maxFixedArity = 0;
G__15774.cljs$lang$applyTo = (function (arglist__15776){
var ___15743__auto__ = cljs.core.seq(arglist__15776);
return G__15774__delegate(___15743__auto__);
});
G__15774.cljs$core$IFn$_invoke$arity$variadic = G__15774__delegate;
return G__15774;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-right","sasha.components.swiper-scenes/swipe-right",1801936263),new cljs.core.Keyword(null,"line","line",212345235),54,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15777__delegate = function (___15743__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me left"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)")], null),"NO!"], null)], null));
};
var G__15777 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__15778__i = 0, G__15778__a = new Array(arguments.length -  0);
while (G__15778__i < G__15778__a.length) {G__15778__a[G__15778__i] = arguments[G__15778__i + 0]; ++G__15778__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__15778__a,0,null);
} 
return G__15777__delegate.call(this,___15743__auto__);};
G__15777.cljs$lang$maxFixedArity = 0;
G__15777.cljs$lang$applyTo = (function (arglist__15779){
var ___15743__auto__ = cljs.core.seq(arglist__15779);
return G__15777__delegate(___15743__auto__);
});
G__15777.cljs$core$IFn$_invoke$arity$variadic = G__15777__delegate;
return G__15777;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-both-ways","sasha.components.swiper-scenes/swipe-both-ways",1800560647),new cljs.core.Keyword(null,"line","line",212345235),60,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15780__delegate = function (___15743__auto__){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me both ways"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)")], null),"OK!"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)")], null),"NO!"], null)], null));
};
var G__15780 = function (var_args){
var ___15743__auto__ = null;
if (arguments.length > 0) {
var G__15781__i = 0, G__15781__a = new Array(arguments.length -  0);
while (G__15781__i < G__15781__a.length) {G__15781__a[G__15781__i] = arguments[G__15781__i + 0]; ++G__15781__i;}
  ___15743__auto__ = new cljs.core.IndexedSeq(G__15781__a,0,null);
} 
return G__15780__delegate.call(this,___15743__auto__);};
G__15780.cljs$lang$maxFixedArity = 0;
G__15780.cljs$lang$applyTo = (function (arglist__15782){
var ___15743__auto__ = cljs.core.seq(arglist__15782);
return G__15780__delegate(___15743__auto__);
});
G__15780.cljs$core$IFn$_invoke$arity$variadic = G__15780__delegate;
return G__15780;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-with-left-threshold-transition","sasha.components.swiper-scenes/swipe-with-left-threshold-transition",211355873),new cljs.core.Keyword(null,"line","line",212345235),67,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15783__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Dragging right yields a transition"], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.5s",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword(null,"ok?","ok?",447310304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"var(--lima)":"var(--mine-shaft)"))], null),"OK!"], null),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),true);
}),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),false);
})], null));
};
var G__15783 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15784__i = 0, G__15784__a = new Array(arguments.length -  1);
while (G__15784__i < G__15784__a.length) {G__15784__a[G__15784__i] = arguments[G__15784__i + 1]; ++G__15784__i;}
  args = new cljs.core.IndexedSeq(G__15784__a,0,null);
} 
return G__15783__delegate.call(this,store,args);};
G__15783.cljs$lang$maxFixedArity = 1;
G__15783.cljs$lang$applyTo = (function (arglist__15785){
var store = cljs.core.first(arglist__15785);
var args = cljs.core.rest(arglist__15785);
return G__15783__delegate(store,args);
});
G__15783.cljs$core$IFn$_invoke$arity$variadic = G__15783__delegate;
return G__15783;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-with-right-threshold-transition","sasha.components.swiper-scenes/swipe-with-right-threshold-transition",-339561642),new cljs.core.Keyword(null,"line","line",212345235),83,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15786__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Dragging left yields a transition"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.5s",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(new cljs.core.Keyword(null,"ok?","ok?",447310304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?"var(--mexican-rojo)":"var(--mine-shaft)"))], null),"NO!"], null),new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),true);
}),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"ok?","ok?",447310304),false);
})], null));
};
var G__15786 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15787__i = 0, G__15787__a = new Array(arguments.length -  1);
while (G__15787__i < G__15787__a.length) {G__15787__a[G__15787__i] = arguments[G__15787__i + 1]; ++G__15787__i;}
  args = new cljs.core.IndexedSeq(G__15787__a,0,null);
} 
return G__15786__delegate.call(this,store,args);};
G__15786.cljs$lang$maxFixedArity = 1;
G__15786.cljs$lang$applyTo = (function (arglist__15788){
var store = cljs.core.first(arglist__15788);
var args = cljs.core.rest(arglist__15788);
return G__15786__delegate(store,args);
});
G__15786.cljs$core$IFn$_invoke$arity$variadic = G__15786__delegate;
return G__15786;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","swipe-both-ways-with-transitions","sasha.components.swiper-scenes/swipe-both-ways-with-transitions",1192713060),new cljs.core.Keyword(null,"line","line",212345235),99,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15789__delegate = function (store,args){
return sasha.components.swiper.SwipeReveal.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.Keyword(null,"left","left",-399115937)],[(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"right?","right?",380310444),true);
}),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"right?","right?",380310444),false);
}),(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"left?","left?",1009526930),true);
}),0.25,0.25,(function (){
return cljs.core.swap_BANG_.call(null,store,cljs.core.assoc,new cljs.core.Keyword(null,"left?","left?",1009526930),false);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(100),new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.5s",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"right?","right?",380310444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?(1):0.1))], null),"NO!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me both ways"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--lima)",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(100),new cljs.core.Keyword(null,"transition","transition",765692007),"opacity 0.5s",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"left?","left?",1009526930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?(1):0.1))], null),"OK!"], null)]));
};
var G__15789 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15790__i = 0, G__15790__a = new Array(arguments.length -  1);
while (G__15790__i < G__15790__a.length) {G__15790__a[G__15790__i] = arguments[G__15790__i + 1]; ++G__15790__i;}
  args = new cljs.core.IndexedSeq(G__15790__a,0,null);
} 
return G__15789__delegate.call(this,store,args);};
G__15789.cljs$lang$maxFixedArity = 1;
G__15789.cljs$lang$applyTo = (function (arglist__15791){
var store = cljs.core.first(arglist__15791);
var args = cljs.core.rest(arglist__15791);
return G__15789__delegate(store,args);
});
G__15789.cljs$core$IFn$_invoke$arity$variadic = G__15789__delegate;
return G__15789;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","snap-left-disappear","sasha.components.swiper-scenes/snap-left-disappear",2126468128),new cljs.core.Keyword(null,"line","line",212345235),126,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15792__delegate = function (store,args){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"retry?","retry?",-1054643849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
e.preventDefault();

return cljs.core.swap_BANG_.call(null,store,cljs.core.dissoc,new cljs.core.Keyword(null,"gone?","gone?",1030484758),new cljs.core.Keyword(null,"retry?","retry?",-1054643849));
})], null),"Try again"], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"gone?","gone?",1030484758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"transition","transition",765692007),"height 0.5s",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(0)], null)], null),sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me left"], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?(1):0.1),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(100))], null),"NO!"], null),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),0.25,new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294),0.4,new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),(function (){
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
var G__15792 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15793__i = 0, G__15793__a = new Array(arguments.length -  1);
while (G__15793__i < G__15793__a.length) {G__15793__a[G__15793__i] = arguments[G__15793__i + 1]; ++G__15793__i;}
  args = new cljs.core.IndexedSeq(G__15793__a,0,null);
} 
return G__15792__delegate.call(this,store,args);};
G__15792.cljs$lang$maxFixedArity = 1;
G__15792.cljs$lang$applyTo = (function (arglist__15794){
var store = cljs.core.first(arglist__15794);
var args = cljs.core.rest(arglist__15794);
return G__15792__delegate(store,args);
});
G__15792.cljs$core$IFn$_invoke$arity$variadic = G__15792__delegate;
return G__15792;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
/**
 * 
 */
sasha.components.swiper_scenes.CustomSwipable = dumdom.core.component.call(null,(function (data){
return sasha.components.swiper.swipable_container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-left","div.swipe-left",-1783015736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?(1):0.1),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?"opacity 0.5s ease-in":"opacity 0.75s ease-out"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),sasha.components.swiper_scenes.styles], null),"NO!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me right"], null)], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper-scenes/CustomSwipable",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","custom-swipable","sasha.components.swiper-scenes/custom-swipable",260828760),new cljs.core.Keyword(null,"line","line",212345235),176,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15795__delegate = function (store,args){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"retry?","retry?",-1054643849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.2], null),new cljs.core.Keyword(null,"snap-left","snap-left",-535184056),0.3], null);
};
var G__15795 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15796__i = 0, G__15796__a = new Array(arguments.length -  1);
while (G__15796__i < G__15796__a.length) {G__15796__a[G__15796__i] = arguments[G__15796__i + 1]; ++G__15796__i;}
  args = new cljs.core.IndexedSeq(G__15796__a,0,null);
} 
return G__15795__delegate.call(this,store,args);};
G__15795.cljs$lang$maxFixedArity = 1;
G__15795.cljs$lang$applyTo = (function (arglist__15797){
var store = cljs.core.first(arglist__15797);
var args = cljs.core.rest(arglist__15797);
return G__15795__delegate(store,args);
});
G__15795.cljs$core$IFn$_invoke$arity$variadic = G__15795__delegate;
return G__15795;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
/**
 * 
 */
sasha.components.swiper_scenes.CustomSwipeRight = dumdom.core.component.call(null,(function (data){
return sasha.components.swiper.swipable_container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-right","div.swipe-right",2110781987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?(1):0.1),new cljs.core.Keyword(null,"transition","transition",765692007),(cljs.core.truth_(new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(data))?"opacity 0.5s ease-in":"opacity 0.75s ease-out"),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end")], null),"NO!"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,sasha.components.swiper_scenes.styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--woodsmoke)")], null),"Drag me left"], null)], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper-scenes/CustomSwipeRight",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.components.swiper-scenes","custom-swipable-other-side","sasha.components.swiper-scenes/custom-swipable-other-side",739530405),new cljs.core.Keyword(null,"line","line",212345235),221,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__15798__delegate = function (store,args){
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"retry?","retry?",-1054643849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
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

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.5], null),new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294),0.3], null);
};
var G__15798 = function (store,var_args){
var args = null;
if (arguments.length > 1) {
var G__15799__i = 0, G__15799__a = new Array(arguments.length -  1);
while (G__15799__i < G__15799__a.length) {G__15799__a[G__15799__i] = arguments[G__15799__i + 1]; ++G__15799__i;}
  args = new cljs.core.IndexedSeq(G__15799__a,0,null);
} 
return G__15798__delegate.call(this,store,args);};
G__15798.cljs$lang$maxFixedArity = 1;
G__15798.cljs$lang$applyTo = (function (arglist__15800){
var store = cljs.core.first(arglist__15800);
var args = cljs.core.rest(arglist__15800);
return G__15798__delegate(store,args);
});
G__15798.cljs$core$IFn$_invoke$arity$variadic = G__15798__delegate;
return G__15798;
})()
,new cljs.core.Keyword(null,"param","param",2013631823),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)));
