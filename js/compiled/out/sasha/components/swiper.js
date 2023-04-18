// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.swiper');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('dumdom.element');
goog.require('clojure.string');
sasha.components.swiper.touch_x = (function sasha$components$swiper$touch_x(e){
var or__5045__auto__ = (function (){var G__16536 = e;
var G__16536__$1 = (((G__16536 == null))?null:G__16536.changedTouches);
var G__16536__$2 = (((G__16536__$1 == null))?null:(G__16536__$1[(0)]));
if((G__16536__$2 == null)){
return null;
} else {
return G__16536__$2.screenX;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.screenX;
}
});
sasha.components.swiper.parse_num = (function sasha$components$swiper$parse_num(v){
var num = parseInt(v,(10));
if(cljs.core.truth_(isNaN(num))){
return (0);
} else {
return num;
}
});
sasha.components.swiper.set_left = (function sasha$components$swiper$set_left(el,pos){
return (el.style.left = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),"px"].join(''));
});
sasha.components.swiper.animate_left_pos = (function sasha$components$swiper$animate_left_pos(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16544 = arguments.length;
var i__5770__auto___16545 = (0);
while(true){
if((i__5770__auto___16545 < len__5769__auto___16544)){
args__5775__auto__.push((arguments[i__5770__auto___16545]));

var G__16546 = (i__5770__auto___16545 + (1));
i__5770__auto___16545 = G__16546;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sasha.components.swiper.animate_left_pos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sasha.components.swiper.animate_left_pos.cljs$core$IFn$_invoke$arity$variadic = (function (el,pos,p__16540){
var vec__16541 = p__16540;
var duration = cljs.core.nth.call(null,vec__16541,(0),null);
var duration__$1 = (function (){var or__5045__auto__ = duration;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (150);
}
})();
(el.style.transition = ["left ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration__$1),"ms"].join(''));

setTimeout((function (){
return sasha.components.swiper.set_left.call(null,el,pos);
}));

return setTimeout((function (){
return (el.style.transition = "");
}),duration__$1);
}));

(sasha.components.swiper.animate_left_pos.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sasha.components.swiper.animate_left_pos.cljs$lang$applyTo = (function (seq16537){
var G__16538 = cljs.core.first.call(null,seq16537);
var seq16537__$1 = cljs.core.next.call(null,seq16537);
var G__16539 = cljs.core.first.call(null,seq16537__$1);
var seq16537__$2 = cljs.core.next.call(null,seq16537__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16538,G__16539,seq16537__$2);
}));

sasha.components.swiper.get_threshold = (function sasha$components$swiper$get_threshold(w,t){
var t__$1 = ((typeof t === 'number')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null):t);
if(cljs.core.coll_QMARK_.call(null,t__$1)){
return cljs.core.map.call(null,(function (p1__16547_SHARP_){
var G__16548 = p1__16547_SHARP_;
if((cljs.core.abs.call(null,p1__16547_SHARP_) <= (1))){
return (G__16548 * w);
} else {
return G__16548;
}
}),cljs.core.take.call(null,(2),cljs.core.cycle.call(null,t__$1)));
} else {
return null;
}
});
sasha.components.swiper.fire_threshold_events = (function sasha$components$swiper$fire_threshold_events(pos,props,target_x,left_el,right_el){
var map__16549 = cljs.core.deref.call(null,pos);
var map__16549__$1 = cljs.core.__destructure_map.call(null,map__16549);
var past_left_in_threshold_QMARK_ = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"past-left-in-threshold?","past-left-in-threshold?",843083831));
var past_left_out_threshold_QMARK_ = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"past-left-out-threshold?","past-left-out-threshold?",183044553));
var past_right_in_threshold_QMARK_ = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"past-right-in-threshold?","past-right-in-threshold?",-1447189991));
var past_right_out_threshold_QMARK_ = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"past-right-out-threshold?","past-right-out-threshold?",1239961622));
var map__16550 = props;
var map__16550__$1 = cljs.core.__destructure_map.call(null,map__16550);
var left_threshold = cljs.core.get.call(null,map__16550__$1,new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564));
var right_threshold = cljs.core.get.call(null,map__16550__$1,new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361));
if(((0) <= target_x)){
var temp__5804__auto___16561 = left_threshold;
if(cljs.core.truth_(temp__5804__auto___16561)){
var vec__16551_16562 = temp__5804__auto___16561;
var in_t_16563 = cljs.core.nth.call(null,vec__16551_16562,(0),null);
var out_t_16564 = cljs.core.nth.call(null,vec__16551_16562,(1),null);
if(((((cljs.core.not.call(null,past_left_in_threshold_QMARK_)) && ((in_t_16563 <= target_x)))) || (((cljs.core.not.call(null,past_left_out_threshold_QMARK_)) && ((out_t_16564 <= target_x)))))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-in-threshold?","past-left-in-threshold?",843083831),true);

var G__16554_16565 = left_el;
var G__16554_16566__$1 = (((G__16554_16565 == null))?null:G__16554_16565.classList);
if((G__16554_16566__$1 == null)){
} else {
G__16554_16566__$1.add("swiper-above-threshold");
}

var temp__5804__auto___16567__$1 = new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___16567__$1)){
var f_16568 = temp__5804__auto___16567__$1;
f_16568.call(null);
} else {
}
} else {
}

if(((cljs.core.not.call(null,past_left_out_threshold_QMARK_)) && ((out_t_16564 <= target_x)))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-out-threshold?","past-left-out-threshold?",183044553),true);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = past_left_in_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x < in_t_16563);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = past_left_out_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x < out_t_16564);
} else {
return and__5043__auto__;
}
}
})())){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-out-threshold?","past-left-out-threshold?",183044553),false);

var G__16555_16569 = left_el;
var G__16555_16570__$1 = (((G__16555_16569 == null))?null:G__16555_16569.classList);
if((G__16555_16570__$1 == null)){
} else {
G__16555_16570__$1.remove("swiper-above-threshold");
}

var temp__5804__auto___16571__$1 = new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___16571__$1)){
var f_16572 = temp__5804__auto___16571__$1;
f_16572.call(null);
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = past_left_in_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x <= in_t_16563);
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-in-threshold?","past-left-in-threshold?",843083831),false);
} else {
}
} else {
}
} else {
}

if((target_x <= (0))){
var temp__5804__auto__ = right_threshold;
if(cljs.core.truth_(temp__5804__auto__)){
var vec__16556 = temp__5804__auto__;
var in_t = cljs.core.nth.call(null,vec__16556,(0),null);
var out_t = cljs.core.nth.call(null,vec__16556,(1),null);
var target_x__$1 = (- target_x);
if(((((cljs.core.not.call(null,past_right_in_threshold_QMARK_)) && ((in_t <= target_x__$1)))) || (((cljs.core.not.call(null,past_right_out_threshold_QMARK_)) && ((out_t <= target_x__$1)))))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-right-in-threshold?","past-right-in-threshold?",-1447189991),true);

var G__16559_16573 = right_el;
var G__16559_16574__$1 = (((G__16559_16573 == null))?null:G__16559_16573.classList);
if((G__16559_16574__$1 == null)){
} else {
G__16559_16574__$1.add("swiper-above-threshold");
}

var temp__5804__auto___16575__$1 = new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___16575__$1)){
var f_16576 = temp__5804__auto___16575__$1;
f_16576.call(null);
} else {
}
} else {
}

if(((cljs.core.not.call(null,past_right_out_threshold_QMARK_)) && ((out_t <= target_x__$1)))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-right-out-threshold?","past-right-out-threshold?",1239961622),true);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = past_right_in_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x__$1 < in_t);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = past_right_out_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x__$1 < out_t);
} else {
return and__5043__auto__;
}
}
})())){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-right-out-threshold?","past-right-out-threshold?",1239961622),false);

var G__16560_16577 = right_el;
var G__16560_16578__$1 = (((G__16560_16577 == null))?null:G__16560_16577.classList);
if((G__16560_16578__$1 == null)){
} else {
G__16560_16578__$1.remove("swiper-above-threshold");
}

var temp__5804__auto___16579__$1 = new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___16579__$1)){
var f_16580 = temp__5804__auto___16579__$1;
f_16580.call(null);
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = past_right_in_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x__$1 <= in_t);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-right-in-threshold?","past-right-in-threshold?",-1447189991),false);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
sasha.components.swiper.with_defaults = (function sasha$components$swiper$with_defaults(props,swipee,left_el,right_el){
var swipee_width = (function (){var G__16581 = swipee;
if((G__16581 == null)){
return null;
} else {
return G__16581.clientWidth;
}
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352),new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267),new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396),new cljs.core.Keyword(null,"snap-left","snap-left",-535184056),new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294),new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878),new cljs.core.Keyword(null,"on-snap-left","on-snap-left",-900655144),new cljs.core.Keyword(null,"on-snap-right","on-snap-right",-1422270406),new cljs.core.Keyword(null,"swipe-threshold","swipe-threshold",-1639251265)],[dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352).cljs$core$IFn$_invoke$arity$1(props)),dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267).cljs$core$IFn$_invoke$arity$1(props)),dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396).cljs$core$IFn$_invoke$arity$1(props)),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"snap-left","snap-left",-535184056).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.25;
}
})(),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return 0.25;
}
})(),sasha.components.swiper.get_threshold.call(null,swipee_width,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__16582 = left_el;
if((G__16582 == null)){
return null;
} else {
return G__16582.clientWidth;
}
}
})()),sasha.components.swiper.get_threshold.call(null,swipee_width,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__16583 = right_el;
if((G__16583 == null)){
return null;
} else {
return G__16583.clientWidth;
}
}
})()),dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878).cljs$core$IFn$_invoke$arity$1(props)),dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"on-snap-left","on-snap-left",-900655144).cljs$core$IFn$_invoke$arity$1(props)),dumdom.element.event_handler.call(null,new cljs.core.Keyword(null,"on-snap-right","on-snap-right",-1422270406).cljs$core$IFn$_invoke$arity$1(props)),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"swipe-threshold","swipe-threshold",-1639251265).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (5);
}
})()]);
});
sasha.components.swiper.get_target_direction = (function sasha$components$swiper$get_target_direction(left_offset,direction,left_el,right_el){
if((left_offset < (0))){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
if(((0) < left_offset)){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),direction);
if(and__5043__auto__){
return right_el;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),direction);
if(and__5043__auto__){
return left_el;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return null;
}
}
}
}
});
sasha.components.swiper.get_direction_update = (function sasha$components$swiper$get_direction_update(p__16584,event_x){
var map__16585 = p__16584;
var map__16585__$1 = cljs.core.__destructure_map.call(null,map__16585);
var direction = cljs.core.get.call(null,map__16585__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var x = cljs.core.get.call(null,map__16585__$1,new cljs.core.Keyword(null,"x","x",2099068185));
if(cljs.core.truth_(direction)){
return null;
} else {
if((event_x < x)){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
}
});
sasha.components.swiper.mount_swiper = (function sasha$components$swiper$mount_swiper(node,props){
var left_el = (function (){var G__16587 = node;
if((G__16587 == null)){
return null;
} else {
return G__16587.querySelector(".swipe-left");
}
})();
var right_el = (function (){var G__16588 = node;
if((G__16588 == null)){
return null;
} else {
return G__16588.querySelector(".swipe-right");
}
})();
var swipee = (function (){var G__16589 = node;
if((G__16589 == null)){
return null;
} else {
return G__16589.querySelector(".swipee");
}
})();
var props__$1 = sasha.components.swiper.with_defaults.call(null,props,swipee,left_el,right_el);
var pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var touchstart = (function (e){
return cljs.core.reset_BANG_.call(null,pos,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),sasha.components.swiper.touch_x.call(null,e),new cljs.core.Keyword(null,"engaged?","engaged?",718797512),true,new cljs.core.Keyword(null,"left","left",-399115937),sasha.components.swiper.parse_num.call(null,swipee.style.left),new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),cljs.core.first.call(null,new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564).cljs$core$IFn$_invoke$arity$1(props__$1)),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),cljs.core.first.call(null,new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361).cljs$core$IFn$_invoke$arity$1(props__$1)),new cljs.core.Keyword(null,"past-left-threshold?","past-left-threshold?",259418662),new cljs.core.Keyword(null,"past-left-threshold?","past-left-threshold?",259418662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pos)),new cljs.core.Keyword(null,"past-right-threshold?","past-right-threshold?",900382663),new cljs.core.Keyword(null,"past-right-threshold?","past-right-threshold?",900382663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pos))], null));
});
var touchmove = (function (e){
var temp__5804__auto__ = sasha.components.swiper.touch_x.call(null,e);
if(cljs.core.truth_(temp__5804__auto__)){
var event_x = temp__5804__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"engaged?","engaged?",718797512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pos)))){
var direction_update = sasha.components.swiper.get_direction_update.call(null,cljs.core.deref.call(null,pos),event_x);
var map__16590 = cljs.core.deref.call(null,pos);
var map__16590__$1 = cljs.core.__destructure_map.call(null,map__16590);
var x = cljs.core.get.call(null,map__16590__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var left = cljs.core.get.call(null,map__16590__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var direction = cljs.core.get.call(null,map__16590__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var direction__$1 = (function (){var or__5045__auto__ = direction_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return direction;
}
})();
var left_pos = (left + (event_x - x));
var target_direction = sasha.components.swiper.get_target_direction.call(null,left,direction__$1,left_el,right_el);
if(cljs.core.truth_(direction_update)){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"direction","direction",-633359395),direction_update);

var vec__16591_16598 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),target_direction))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_el,left_el], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_el,right_el], null));
var hide_16599 = cljs.core.nth.call(null,vec__16591_16598,(0),null);
var show_16600 = cljs.core.nth.call(null,vec__16591_16598,(1),null);
if(cljs.core.truth_(hide_16599)){
if(cljs.core.truth_(hide_16599.originalDisplay)){
} else {
(hide_16599.originalDisplay = getComputedStyle(hide_16599).getPropertyValue("display"));
}

(hide_16599.style.display = "none");
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = show_16600;
if(cljs.core.truth_(and__5043__auto__)){
return show_16600.originalDisplay;
} else {
return and__5043__auto__;
}
})())){
(show_16600.style.display = show_16600.originalDisplay);
} else {
}
} else {
}

if(((cljs.core.not_EQ_.call(null,(0),left)) || ((new cljs.core.Keyword(null,"swipe-threshold","swipe-threshold",-1639251265).cljs$core$IFn$_invoke$arity$1(props__$1) < cljs.core.abs.call(null,(left - left_pos)))))){
e.preventDefault();

var new_left = (function (){var G__16594 = target_direction;
var G__16594__$1 = (((G__16594 instanceof cljs.core.Keyword))?G__16594.fqn:null);
switch (G__16594__$1) {
case "left":
return Math.max(left_pos,(0));

break;
case "right":
return Math.min(left_pos,(0));

break;
default:
return (0);

}
})();
sasha.components.swiper.fire_threshold_events.call(null,pos,props__$1,new_left,left_el,right_el);

return sasha.components.swiper.set_left.call(null,swipee,new_left);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var touchend = (function (_e){
cljs.core.swap_BANG_.call(null,pos,cljs.core.dissoc,new cljs.core.Keyword(null,"engaged?","engaged?",718797512));

var map__16595 = cljs.core.deref.call(null,pos);
var map__16595__$1 = cljs.core.__destructure_map.call(null,map__16595);
var left = cljs.core.get.call(null,map__16595__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var direction = cljs.core.get.call(null,map__16595__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var start_x = left;
var right_width = (function (){var G__16596 = right_el;
if((G__16596 == null)){
return null;
} else {
return G__16596.clientWidth;
}
})();
var left_width = (function (){var G__16597 = left_el;
if((G__16597 == null)){
return null;
} else {
return G__16597.clientWidth;
}
})();
var diff = (sasha.components.swiper.parse_num.call(null,swipee.style.left) - start_x);
var new_left = (cljs.core.truth_((function (){var and__5043__auto__ = right_width;
if(cljs.core.truth_(and__5043__auto__)){
return (((start_x <= (0))) && ((((diff < (0))) && (((right_width * new cljs.core.Keyword(null,"snap-right","snap-right",-1064610294).cljs$core$IFn$_invoke$arity$1(props__$1)) < cljs.core.abs.call(null,diff))))));
} else {
return and__5043__auto__;
}
})())?(- right_width):(cljs.core.truth_((function (){var and__5043__auto__ = left_width;
if(cljs.core.truth_(and__5043__auto__)){
return ((((0) <= start_x)) && (((((0) < diff)) && (((left_width * new cljs.core.Keyword(null,"snap-left","snap-left",-535184056).cljs$core$IFn$_invoke$arity$1(props__$1)) < diff)))));
} else {
return and__5043__auto__;
}
})())?left_width:(0)
));
sasha.components.swiper.fire_threshold_events.call(null,pos,props__$1,new_left,left_el,right_el);

sasha.components.swiper.animate_left_pos.call(null,swipee,new_left);

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,new_left,(- right_width));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937));
if(and__5043__auto____$1){
return new cljs.core.Keyword(null,"on-snap-right","on-snap-right",-1422270406).cljs$core$IFn$_invoke$arity$1(props__$1);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
new cljs.core.Keyword(null,"on-snap-right","on-snap-right",-1422270406).cljs$core$IFn$_invoke$arity$1(props__$1).call(null);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.call(null,new_left,left_width);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"right","right",-452581833));
if(and__5043__auto____$1){
return new cljs.core.Keyword(null,"on-snap-left","on-snap-left",-900655144).cljs$core$IFn$_invoke$arity$1(props__$1);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.Keyword(null,"on-snap-left","on-snap-left",-900655144).cljs$core$IFn$_invoke$arity$1(props__$1).call(null);
} else {
return null;
}
});
if(cljs.core.truth_(swipee)){
(swipee.style.position = "relative");

(swipee.style.left = (0));

node.addEventListener("contextmenu",(function (p1__16586_SHARP_){
return p1__16586_SHARP_.preventDefault();
}),false);

node.addEventListener("touchstart",touchstart,false);

node.addEventListener("mousedown",touchstart,false);

node.addEventListener("touchmove",touchmove,false);

node.addEventListener("mousemove",touchmove,false);

node.addEventListener("touchend",touchend,false);

return node.addEventListener("mouseup",touchend,false);
} else {
return null;
}
});
sasha.components.swiper.swipable_container = (function sasha$components$swiper$swipable_container(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16603 = arguments.length;
var i__5770__auto___16604 = (0);
while(true){
if((i__5770__auto___16604 < len__5769__auto___16603)){
args__5775__auto__.push((arguments[i__5770__auto___16604]));

var G__16605 = (i__5770__auto___16604 + (1));
i__5770__auto___16604 = G__16605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sasha.components.swiper.swipable_container.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sasha.components.swiper.swipable_container.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.apply.call(null,cljs.core.vector,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),children);
}));

(sasha.components.swiper.swipable_container.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sasha.components.swiper.swipable_container.cljs$lang$applyTo = (function (seq16602){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16602));
}));

/**
 * 
 */
sasha.components.swiper.SwipeReveal = dumdom.core.component.call(null,(function (p__16606){
var map__16607 = p__16606;
var map__16607__$1 = cljs.core.__destructure_map.call(null,map__16607);
var swipee = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"swipee","swipee",-620984612));
var right = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"left","left",-399115937));
return sasha.components.swiper.swipable_container.call(null,(cljs.core.truth_(right)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-right","div.swipe-right",2110781987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),right], null):null),(cljs.core.truth_(left)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-left","div.swipe-left",-1783015736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),left], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),swipee], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper/SwipeReveal",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
/**
 * 
 */
sasha.components.swiper.SwipeControl = dumdom.core.component.call(null,(function (p__16608){
var map__16609 = p__16608;
var map__16609__$1 = cljs.core.__destructure_map.call(null,map__16609);
var color = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var content = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"content","content",15833224));
var align = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var class_name = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-control","div.swipe-control",-2017421777),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),align))?"swipe-right":"swipe-left")], null))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),(0),color,"0 20px",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),align))?"flex-end":null),(0),"flex","absolute",(0)])], null),content], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper/SwipeControl"], null));
/**
 * 
 */
sasha.components.swiper.SwipeDelete = dumdom.core.component.call(null,(function (p__16610){
var map__16611 = p__16610;
var map__16611__$1 = cljs.core.__destructure_map.call(null,map__16611);
var text = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var button_text = cljs.core.get.call(null,map__16611__$1,new cljs.core.Keyword(null,"button-text","button-text",-1800441720));
var styles = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 20px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null);
return sasha.components.swiper.SwipeReveal.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"swipee","swipee",-620984612),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--contrast-bg)")], null),text], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.call(null,styles,new cljs.core.Keyword(null,"background","background",-863952629),"var(--mexican-rojo)",new cljs.core.Keyword(null,"color","color",1011675173),"#fff")], null),button_text], null)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper/SwipeDelete"], null));
