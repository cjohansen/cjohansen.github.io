// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.color');
goog.require('cljs.core');
portfolio.ui.color.hex__GT_rgba = (function portfolio$ui$color$hex__GT_rgba(hex){
var vec__17207 = cljs.core.take.call(null,(4),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__17205_SHARP_){
return parseInt(p1__17205_SHARP_,(16));
}),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(4),null,(5),null], null), null).call(null,cljs.core.count.call(null,hex)))?cljs.core.map.call(null,(function (p1__17206_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17206_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17206_SHARP_)].join('');
}),cljs.core.re_seq.call(null,/[^#]/,hex)):cljs.core.re_seq.call(null,/[^#]{2}/,hex))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255)], null)));
var r = cljs.core.nth.call(null,vec__17207,(0),null);
var g = cljs.core.nth.call(null,vec__17207,(1),null);
var b = cljs.core.nth.call(null,vec__17207,(2),null);
var a = cljs.core.nth.call(null,vec__17207,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,(a / (255))], null);
});
portfolio.ui.color.rgb_re = /rgb\((\d+), (\d+), (\d+)\)/;
portfolio.ui.color.rgba_re = /rgba\((\d+), (\d+), (\d+), (.*)\)/;
portfolio.ui.color.perceived_rgb = (function portfolio$ui$color$perceived_rgb(bg,rgb_or_rgba){
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,rgb_or_rgba))){
return rgb_or_rgba;
} else {
var vec__17210 = bg;
var bg_r = cljs.core.nth.call(null,vec__17210,(0),null);
var bg_g = cljs.core.nth.call(null,vec__17210,(1),null);
var bg_b = cljs.core.nth.call(null,vec__17210,(2),null);
var vec__17213 = rgb_or_rgba;
var fg_r = cljs.core.nth.call(null,vec__17213,(0),null);
var fg_g = cljs.core.nth.call(null,vec__17213,(1),null);
var fg_b = cljs.core.nth.call(null,vec__17213,(2),null);
var a = cljs.core.nth.call(null,vec__17213,(3),null);
var bg_a = ((1) - a);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((bg_r * bg_a) + (fg_r * a)) | (0)),(((bg_g * bg_a) + (fg_g * a)) | (0)),(((bg_b * bg_a) + (fg_b * a)) | (0))], null);
}
});
portfolio.ui.color.rgba_str__GT_rgb = (function portfolio$ui$color$rgba_str__GT_rgb(color){
if(cljs.core.truth_(cljs.core.re_find.call(null,portfolio.ui.color.rgba_re,color))){
return portfolio.ui.color.perceived_rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),cljs.core.map.call(null,(function (p1__17216_SHARP_){
return parseFloat(p1__17216_SHARP_);
}),cljs.core.drop.call(null,(1),cljs.core.re_find.call(null,portfolio.ui.color.rgba_re,color))));
} else {
return cljs.core.map.call(null,(function (p1__17217_SHARP_){
return parseInt(p1__17217_SHARP_,(10));
}),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(1),cljs.core.re_find.call(null,portfolio.ui.color.rgb_re,color))));
}
});
portfolio.ui.color.__GT_rgb = (function portfolio$ui$color$__GT_rgb(color){
if(cljs.core.truth_(cljs.core.re_find.call(null,/#.+/,color))){
return portfolio.ui.color.perceived_rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),portfolio.ui.color.hex__GT_rgba.call(null,color));
} else {
return portfolio.ui.color.rgba_str__GT_rgb.call(null,color);
}
});
portfolio.ui.color.pct = (function portfolio$ui$color$pct(decimal){
return Math.floor((decimal * (100)));
});
portfolio.ui.color.round = (function portfolio$ui$color$round(n){
return (portfolio.ui.color.pct.call(null,n) / (100));
});
portfolio.ui.color.rgb__GT_hsl = (function portfolio$ui$color$rgb__GT_hsl(rgb){
var vec__17219 = cljs.core.map.call(null,(function (p1__17218_SHARP_){
return portfolio.ui.color.round.call(null,(p1__17218_SHARP_ / 255.0));
}),rgb);
var r = cljs.core.nth.call(null,vec__17219,(0),null);
var g = cljs.core.nth.call(null,vec__17219,(1),null);
var b = cljs.core.nth.call(null,vec__17219,(2),null);
var minv = (function (){var x__5133__auto__ = (function (){var x__5133__auto__ = r;
var y__5134__auto__ = g;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var y__5134__auto__ = b;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var maxv = (function (){var x__5130__auto__ = (function (){var x__5130__auto__ = r;
var y__5131__auto__ = g;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var y__5131__auto__ = b;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var diff = (maxv - minv);
var luminace = Math.ceil(((100) * ((maxv + minv) / (2))));
var saturation = portfolio.ui.color.pct.call(null,((cljs.core._EQ_.call(null,minv,maxv))?(0):(((luminace < (50)))?(diff / (maxv + minv)):(diff / (((2) - maxv) - minv))
)));
var hue = ((cljs.core._EQ_.call(null,saturation,(0)))?(0):Math.ceil(((60) * ((cljs.core._EQ_.call(null,maxv,r))?((g - b) / diff):((cljs.core._EQ_.call(null,maxv,g))?((2) + ((b - r) / diff)):((cljs.core._EQ_.call(null,maxv,b))?((4) + ((r - g) / diff)):null))))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"h","h",1109658740),hue,new cljs.core.Keyword(null,"s","s",1705939918),saturation,new cljs.core.Keyword(null,"l","l",1395893423),luminace], null);
});
