// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.components.swiper');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('dumdom.element');
goog.require('clojure.string');
sasha.components.swiper.touch_x = (function sasha$components$swiper$touch_x(e){
var G__15631 = e;
var G__15631__$1 = (((G__15631 == null))?null:G__15631.changedTouches);
var G__15631__$2 = (((G__15631__$1 == null))?null:(G__15631__$1[(0)]));
if((G__15631__$2 == null)){
return null;
} else {
return G__15631__$2.screenX;
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
var len__5769__auto___15639 = arguments.length;
var i__5770__auto___15640 = (0);
while(true){
if((i__5770__auto___15640 < len__5769__auto___15639)){
args__5775__auto__.push((arguments[i__5770__auto___15640]));

var G__15641 = (i__5770__auto___15640 + (1));
i__5770__auto___15640 = G__15641;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sasha.components.swiper.animate_left_pos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sasha.components.swiper.animate_left_pos.cljs$core$IFn$_invoke$arity$variadic = (function (el,pos,p__15635){
var vec__15636 = p__15635;
var duration = cljs.core.nth.call(null,vec__15636,(0),null);
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
(sasha.components.swiper.animate_left_pos.cljs$lang$applyTo = (function (seq15632){
var G__15633 = cljs.core.first.call(null,seq15632);
var seq15632__$1 = cljs.core.next.call(null,seq15632);
var G__15634 = cljs.core.first.call(null,seq15632__$1);
var seq15632__$2 = cljs.core.next.call(null,seq15632__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15633,G__15634,seq15632__$2);
}));

sasha.components.swiper.get_threshold = (function sasha$components$swiper$get_threshold(w,t){
var t__$1 = ((typeof t === 'number')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null):t);
if(cljs.core.coll_QMARK_.call(null,t__$1)){
return cljs.core.map.call(null,(function (p1__15642_SHARP_){
var G__15643 = p1__15642_SHARP_;
if((cljs.core.abs.call(null,p1__15642_SHARP_) <= (1))){
return (G__15643 * w);
} else {
return G__15643;
}
}),cljs.core.take.call(null,(2),cljs.core.cycle.call(null,t__$1)));
} else {
return null;
}
});
sasha.components.swiper.fire_threshold_events = (function sasha$components$swiper$fire_threshold_events(pos,props,target_x,left_el,right_el){
var map__15644 = cljs.core.deref.call(null,pos);
var map__15644__$1 = cljs.core.__destructure_map.call(null,map__15644);
var past_left_in_threshold_QMARK_ = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"past-left-in-threshold?","past-left-in-threshold?",843083831));
var past_left_out_threshold_QMARK_ = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"past-left-out-threshold?","past-left-out-threshold?",183044553));
var past_right_in_threshold_QMARK_ = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"past-right-in-threshold?","past-right-in-threshold?",-1447189991));
var past_right_out_threshold_QMARK_ = cljs.core.get.call(null,map__15644__$1,new cljs.core.Keyword(null,"past-right-out-threshold?","past-right-out-threshold?",1239961622));
var map__15645 = props;
var map__15645__$1 = cljs.core.__destructure_map.call(null,map__15645);
var left_threshold = cljs.core.get.call(null,map__15645__$1,new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564));
var right_threshold = cljs.core.get.call(null,map__15645__$1,new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361));
if(((0) <= target_x)){
var temp__5804__auto___15656 = left_threshold;
if(cljs.core.truth_(temp__5804__auto___15656)){
var vec__15646_15657 = temp__5804__auto___15656;
var in_t_15658 = cljs.core.nth.call(null,vec__15646_15657,(0),null);
var out_t_15659 = cljs.core.nth.call(null,vec__15646_15657,(1),null);
if(((((cljs.core.not.call(null,past_left_in_threshold_QMARK_)) && ((in_t_15658 <= target_x)))) || (((cljs.core.not.call(null,past_left_out_threshold_QMARK_)) && ((out_t_15659 <= target_x)))))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-in-threshold?","past-left-in-threshold?",843083831),true);

var G__15649_15660 = left_el;
var G__15649_15661__$1 = (((G__15649_15660 == null))?null:G__15649_15660.classList);
if((G__15649_15661__$1 == null)){
} else {
G__15649_15661__$1.add("swiper-above-threshold");
}

var temp__5804__auto___15662__$1 = new cljs.core.Keyword(null,"on-above-left-threshold","on-above-left-threshold",-1807622396).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___15662__$1)){
var f_15663 = temp__5804__auto___15662__$1;
f_15663.call(null);
} else {
}
} else {
}

if(((cljs.core.not.call(null,past_left_out_threshold_QMARK_)) && ((out_t_15659 <= target_x)))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-out-threshold?","past-left-out-threshold?",183044553),true);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = (function (){var and__5043__auto__ = past_left_in_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x < in_t_15658);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = past_left_out_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x < out_t_15659);
} else {
return and__5043__auto__;
}
}
})())){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-left-out-threshold?","past-left-out-threshold?",183044553),false);

var G__15650_15664 = left_el;
var G__15650_15665__$1 = (((G__15650_15664 == null))?null:G__15650_15664.classList);
if((G__15650_15665__$1 == null)){
} else {
G__15650_15665__$1.remove("swiper-above-threshold");
}

var temp__5804__auto___15666__$1 = new cljs.core.Keyword(null,"on-below-left-threshold","on-below-left-threshold",1220301878).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___15666__$1)){
var f_15667 = temp__5804__auto___15666__$1;
f_15667.call(null);
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = past_left_in_threshold_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return (target_x <= in_t_15658);
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
var vec__15651 = temp__5804__auto__;
var in_t = cljs.core.nth.call(null,vec__15651,(0),null);
var out_t = cljs.core.nth.call(null,vec__15651,(1),null);
var target_x__$1 = (- target_x);
if(((((cljs.core.not.call(null,past_right_in_threshold_QMARK_)) && ((in_t <= target_x__$1)))) || (((cljs.core.not.call(null,past_right_out_threshold_QMARK_)) && ((out_t <= target_x__$1)))))){
cljs.core.swap_BANG_.call(null,pos,cljs.core.assoc,new cljs.core.Keyword(null,"past-right-in-threshold?","past-right-in-threshold?",-1447189991),true);

var G__15654_15668 = right_el;
var G__15654_15669__$1 = (((G__15654_15668 == null))?null:G__15654_15668.classList);
if((G__15654_15669__$1 == null)){
} else {
G__15654_15669__$1.add("swiper-above-threshold");
}

var temp__5804__auto___15670__$1 = new cljs.core.Keyword(null,"on-above-right-threshold","on-above-right-threshold",-1104096352).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___15670__$1)){
var f_15671 = temp__5804__auto___15670__$1;
f_15671.call(null);
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

var G__15655_15672 = right_el;
var G__15655_15673__$1 = (((G__15655_15672 == null))?null:G__15655_15672.classList);
if((G__15655_15673__$1 == null)){
} else {
G__15655_15673__$1.remove("swiper-above-threshold");
}

var temp__5804__auto___15674__$1 = new cljs.core.Keyword(null,"on-below-right-threshold","on-below-right-threshold",288887267).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5804__auto___15674__$1)){
var f_15675 = temp__5804__auto___15674__$1;
f_15675.call(null);
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
var swipee_width = (function (){var G__15676 = swipee;
if((G__15676 == null)){
return null;
} else {
return G__15676.clientWidth;
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
var G__15677 = left_el;
if((G__15677 == null)){
return null;
} else {
return G__15677.clientWidth;
}
}
})()),sasha.components.swiper.get_threshold.call(null,swipee_width,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__15678 = right_el;
if((G__15678 == null)){
return null;
} else {
return G__15678.clientWidth;
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
sasha.components.swiper.get_direction_update = (function sasha$components$swiper$get_direction_update(p__15679,event_x){
var map__15680 = p__15679;
var map__15680__$1 = cljs.core.__destructure_map.call(null,map__15680);
var direction = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var x = cljs.core.get.call(null,map__15680__$1,new cljs.core.Keyword(null,"x","x",2099068185));
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
var left_el = (function (){var G__15682 = node;
if((G__15682 == null)){
return null;
} else {
return G__15682.querySelector(".swipe-left");
}
})();
var right_el = (function (){var G__15683 = node;
if((G__15683 == null)){
return null;
} else {
return G__15683.querySelector(".swipe-right");
}
})();
var swipee = (function (){var G__15684 = node;
if((G__15684 == null)){
return null;
} else {
return G__15684.querySelector(".swipee");
}
})();
var props__$1 = sasha.components.swiper.with_defaults.call(null,props,swipee,left_el,right_el);
var pos = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var touchstart = (function (e){
return cljs.core.reset_BANG_.call(null,pos,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),sasha.components.swiper.touch_x.call(null,e),new cljs.core.Keyword(null,"left","left",-399115937),sasha.components.swiper.parse_num.call(null,swipee.style.left),new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564),cljs.core.first.call(null,new cljs.core.Keyword(null,"left-threshold","left-threshold",-475912564).cljs$core$IFn$_invoke$arity$1(props__$1)),new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361),cljs.core.first.call(null,new cljs.core.Keyword(null,"right-threshold","right-threshold",-1747117361).cljs$core$IFn$_invoke$arity$1(props__$1)),new cljs.core.Keyword(null,"past-left-threshold?","past-left-threshold?",259418662),new cljs.core.Keyword(null,"past-left-threshold?","past-left-threshold?",259418662).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pos)),new cljs.core.Keyword(null,"past-right-threshold?","past-right-threshold?",900382663),new cljs.core.Keyword(null,"past-right-threshold?","past-right-threshold?",900382663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pos))], null));
});
var touchmove = (function (e){
var temp__5804__auto__ = sasha.components.swiper.touch_x.call(null,e);
if(cljs.core.truth_(temp__5804__auto__)){
var event_x = temp__5804__auto__;
var direction_update = sasha.components.swiper.get_direction_update.call(null,cljs.core.deref.call(null,pos),event_x);
var map__15685 = cljs.core.deref.call(null,pos);
var map__15685__$1 = cljs.core.__destructure_map.call(null,map__15685);
var x = cljs.core.get.call(null,map__15685__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var left = cljs.core.get.call(null,map__15685__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var direction = cljs.core.get.call(null,map__15685__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
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

var vec__15686_15693 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",-399115937),target_direction))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_el,left_el], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_el,right_el], null));
var hide_15694 = cljs.core.nth.call(null,vec__15686_15693,(0),null);
var show_15695 = cljs.core.nth.call(null,vec__15686_15693,(1),null);
if(cljs.core.truth_(hide_15694)){
if(cljs.core.truth_(hide_15694.originalDisplay)){
} else {
(hide_15694.originalDisplay = getComputedStyle(hide_15694).getPropertyValue("display"));
}

(hide_15694.style.display = "none");
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = show_15695;
if(cljs.core.truth_(and__5043__auto__)){
return show_15695.originalDisplay;
} else {
return and__5043__auto__;
}
})())){
(show_15695.style.display = show_15695.originalDisplay);
} else {
}
} else {
}

if(((cljs.core.not_EQ_.call(null,(0),left)) || ((new cljs.core.Keyword(null,"swipe-threshold","swipe-threshold",-1639251265).cljs$core$IFn$_invoke$arity$1(props__$1) < cljs.core.abs.call(null,(left - left_pos)))))){
e.preventDefault();

var new_left = (function (){var G__15689 = target_direction;
var G__15689__$1 = (((G__15689 instanceof cljs.core.Keyword))?G__15689.fqn:null);
switch (G__15689__$1) {
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
});
var touchend = (function (e){
var map__15690 = cljs.core.deref.call(null,pos);
var map__15690__$1 = cljs.core.__destructure_map.call(null,map__15690);
var left = cljs.core.get.call(null,map__15690__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var direction = cljs.core.get.call(null,map__15690__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var start_x = left;
var right_width = (function (){var G__15691 = right_el;
if((G__15691 == null)){
return null;
} else {
return G__15691.clientWidth;
}
})();
var left_width = (function (){var G__15692 = left_el;
if((G__15692 == null)){
return null;
} else {
return G__15692.clientWidth;
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

node.addEventListener("contextmenu",(function (p1__15681_SHARP_){
return p1__15681_SHARP_.preventDefault();
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
var len__5769__auto___15698 = arguments.length;
var i__5770__auto___15699 = (0);
while(true){
if((i__5770__auto___15699 < len__5769__auto___15698)){
args__5775__auto__.push((arguments[i__5770__auto___15699]));

var G__15700 = (i__5770__auto___15699 + (1));
i__5770__auto___15699 = G__15700;
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
(sasha.components.swiper.swipable_container.cljs$lang$applyTo = (function (seq15697){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15697));
}));

/**
 * 
 */
sasha.components.swiper.SwipeReveal = dumdom.core.component.call(null,(function (p__15701){
var map__15702 = p__15701;
var map__15702__$1 = cljs.core.__destructure_map.call(null,map__15702);
var swipee = cljs.core.get.call(null,map__15702__$1,new cljs.core.Keyword(null,"swipee","swipee",-620984612));
var right = cljs.core.get.call(null,map__15702__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var left = cljs.core.get.call(null,map__15702__$1,new cljs.core.Keyword(null,"left","left",-399115937));
return sasha.components.swiper.swipable_container.call(null,(cljs.core.truth_(right)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-right","div.swipe-right",2110781987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),right], null):null),(cljs.core.truth_(left)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-left","div.swipe-left",-1783015736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0)], null)], null),left], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipee","div.swipee",-972995774),swipee], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper/SwipeReveal",new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),sasha.components.swiper.mount_swiper], null));
/**
 * 
 */
sasha.components.swiper.SwipeControl = dumdom.core.component.call(null,(function (p__15703){
var map__15704 = p__15703;
var map__15704__$1 = cljs.core.__destructure_map.call(null,map__15704);
var color = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var content = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"content","content",15833224));
var align = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"align","align",1964212802));
var class_name = cljs.core.get.call(null,map__15704__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swipe-control","div.swipe-control",-2017421777),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_name,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),align))?"swipe-right":"swipe-left")], null))),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),(0),color,"0 20px",((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833),align))?"flex-end":null),(0),"flex","absolute",(0)])], null),content], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"sasha.components.swiper/SwipeControl"], null));
