// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.css');
goog.require('cljs.core');
goog.require('clojure.string');
portfolio.css.find_link_by_href = (function portfolio$css$find_link_by_href(el,path){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15972_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__15972_SHARP_.href,path);
}),el.querySelectorAll("link")));
});
portfolio.css.create_css_link = (function portfolio$css$create_css_link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15980 = arguments.length;
var i__5770__auto___15981 = (0);
while(true){
if((i__5770__auto___15981 < len__5769__auto___15980)){
args__5775__auto__.push((arguments[i__5770__auto___15981]));

var G__15982 = (i__5770__auto___15981 + (1));
i__5770__auto___15981 = G__15982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__15975){
var vec__15976 = p__15975;
var map__15979 = cljs.core.nth.call(null,vec__15976,(0),null);
var map__15979__$1 = cljs.core.__destructure_map.call(null,map__15979);
var media = cljs.core.get.call(null,map__15979__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
var link = document.createElement("link");
(link.href = path);

(link.rel = "stylesheet");

(link.type = "text/css");

(link.portfolio = "portfolio");

if(cljs.core.truth_(media)){
(link.media = "print");
} else {
}

return link;
}));

(portfolio.css.create_css_link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.css.create_css_link.cljs$lang$applyTo = (function (seq15973){
var G__15974 = cljs.core.first.call(null,seq15973);
var seq15973__$1 = cljs.core.next.call(null,seq15973);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15974,seq15973__$1);
}));

portfolio.css.reload_css_file = (function portfolio$css$reload_css_file(file){
var seq__15983 = cljs.core.seq.call(null,document.body.querySelectorAll("iframe"));
var chunk__15984 = null;
var count__15985 = (0);
var i__15986 = (0);
while(true){
if((i__15986 < count__15985)){
var iframe = cljs.core._nth.call(null,chunk__15984,i__15986);
var iframe_head_15995 = (function (){var G__15991 = iframe;
var G__15991__$1 = (((G__15991 == null))?null:G__15991.contentWindow);
var G__15991__$2 = (((G__15991__$1 == null))?null:G__15991__$1.document);
if((G__15991__$2 == null)){
return null;
} else {
return G__15991__$2.head;
}
})();
var original_15996 = portfolio.css.find_link_by_href.call(null,iframe_head_15995,file);
var reloaded_15997 = portfolio.css.create_css_link.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_15997.addEventListener("load",((function (seq__15983,chunk__15984,count__15985,i__15986,iframe_head_15995,original_15996,reloaded_15997,iframe){
return (function portfolio$css$reload_css_file_$_done(_){
var temp__5804__auto___15998 = (function (){var G__15992 = original_15996;
if((G__15992 == null)){
return null;
} else {
return G__15992.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___15998)){
var parent_15999 = temp__5804__auto___15998;
parent_15999.removeChild(original_15996);
} else {
}

return reloaded_15997.removeEventListener("load",portfolio$css$reload_css_file_$_done);
});})(seq__15983,chunk__15984,count__15985,i__15986,iframe_head_15995,original_15996,reloaded_15997,iframe))
);

iframe_head_15995.appendChild(reloaded_15997);


var G__16000 = seq__15983;
var G__16001 = chunk__15984;
var G__16002 = count__15985;
var G__16003 = (i__15986 + (1));
seq__15983 = G__16000;
chunk__15984 = G__16001;
count__15985 = G__16002;
i__15986 = G__16003;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__15983);
if(temp__5804__auto__){
var seq__15983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15983__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__15983__$1);
var G__16004 = cljs.core.chunk_rest.call(null,seq__15983__$1);
var G__16005 = c__5568__auto__;
var G__16006 = cljs.core.count.call(null,c__5568__auto__);
var G__16007 = (0);
seq__15983 = G__16004;
chunk__15984 = G__16005;
count__15985 = G__16006;
i__15986 = G__16007;
continue;
} else {
var iframe = cljs.core.first.call(null,seq__15983__$1);
var iframe_head_16008 = (function (){var G__15993 = iframe;
var G__15993__$1 = (((G__15993 == null))?null:G__15993.contentWindow);
var G__15993__$2 = (((G__15993__$1 == null))?null:G__15993__$1.document);
if((G__15993__$2 == null)){
return null;
} else {
return G__15993__$2.head;
}
})();
var original_16009 = portfolio.css.find_link_by_href.call(null,iframe_head_16008,file);
var reloaded_16010 = portfolio.css.create_css_link.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_16010.addEventListener("load",((function (seq__15983,chunk__15984,count__15985,i__15986,iframe_head_16008,original_16009,reloaded_16010,iframe,seq__15983__$1,temp__5804__auto__){
return (function portfolio$css$reload_css_file_$_done(_){
var temp__5804__auto___16011__$1 = (function (){var G__15994 = original_16009;
if((G__15994 == null)){
return null;
} else {
return G__15994.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___16011__$1)){
var parent_16012 = temp__5804__auto___16011__$1;
parent_16012.removeChild(original_16009);
} else {
}

return reloaded_16010.removeEventListener("load",portfolio$css$reload_css_file_$_done);
});})(seq__15983,chunk__15984,count__15985,i__15986,iframe_head_16008,original_16009,reloaded_16010,iframe,seq__15983__$1,temp__5804__auto__))
);

iframe_head_16008.appendChild(reloaded_16010);


var G__16013 = cljs.core.next.call(null,seq__15983__$1);
var G__16014 = null;
var G__16015 = (0);
var G__16016 = (0);
seq__15983 = G__16013;
chunk__15984 = G__16014;
count__15985 = G__16015;
i__15986 = G__16016;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.css.load_css_files = (function portfolio$css$load_css_files(paths){
var seq__16017 = cljs.core.seq.call(null,paths);
var chunk__16018 = null;
var count__16019 = (0);
var i__16020 = (0);
while(true){
if((i__16020 < count__16019)){
var path = cljs.core._nth.call(null,chunk__16018,i__16020);
if(cljs.core.truth_(portfolio.css.find_link_by_href.call(null,document.head,path))){
} else {
document.head.appendChild(portfolio.css.create_css_link.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)));
}


var G__16021 = seq__16017;
var G__16022 = chunk__16018;
var G__16023 = count__16019;
var G__16024 = (i__16020 + (1));
seq__16017 = G__16021;
chunk__16018 = G__16022;
count__16019 = G__16023;
i__16020 = G__16024;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16017);
if(temp__5804__auto__){
var seq__16017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16017__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__16017__$1);
var G__16025 = cljs.core.chunk_rest.call(null,seq__16017__$1);
var G__16026 = c__5568__auto__;
var G__16027 = cljs.core.count.call(null,c__5568__auto__);
var G__16028 = (0);
seq__16017 = G__16025;
chunk__16018 = G__16026;
count__16019 = G__16027;
i__16020 = G__16028;
continue;
} else {
var path = cljs.core.first.call(null,seq__16017__$1);
if(cljs.core.truth_(portfolio.css.find_link_by_href.call(null,document.head,path))){
} else {
document.head.appendChild(portfolio.css.create_css_link.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)));
}


var G__16029 = cljs.core.next.call(null,seq__16017__$1);
var G__16030 = null;
var G__16031 = (0);
var G__16032 = (0);
seq__16017 = G__16029;
chunk__16018 = G__16030;
count__16019 = G__16031;
i__16020 = G__16032;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.css.replace_loaded_css_files = (function portfolio$css$replace_loaded_css_files(paths){
var seq__16034 = cljs.core.seq.call(null,document.body.querySelectorAll("iframe"));
var chunk__16035 = null;
var count__16036 = (0);
var i__16037 = (0);
while(true){
if((i__16037 < count__16036)){
var iframe = cljs.core._nth.call(null,chunk__16035,i__16037);
var head_16074 = (function (){var G__16056 = iframe;
var G__16056__$1 = (((G__16056 == null))?null:G__16056.contentWindow);
var G__16056__$2 = (((G__16056__$1 == null))?null:G__16056__$1.document);
if((G__16056__$2 == null)){
return null;
} else {
return G__16056__$2.head;
}
})();
var seq__16057_16075 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (seq__16034,chunk__16035,count__16036,i__16037,head_16074,iframe){
return (function (p1__16033_SHARP_){
return p1__16033_SHARP_.portfolio;
});})(seq__16034,chunk__16035,count__16036,i__16037,head_16074,iframe))
,head_16074.querySelectorAll("link")));
var chunk__16058_16076 = null;
var count__16059_16077 = (0);
var i__16060_16078 = (0);
while(true){
if((i__16060_16078 < count__16059_16077)){
var link_16079 = cljs.core._nth.call(null,chunk__16058_16076,i__16060_16078);
link_16079.parentNode.removeChild(link_16079);


var G__16080 = seq__16057_16075;
var G__16081 = chunk__16058_16076;
var G__16082 = count__16059_16077;
var G__16083 = (i__16060_16078 + (1));
seq__16057_16075 = G__16080;
chunk__16058_16076 = G__16081;
count__16059_16077 = G__16082;
i__16060_16078 = G__16083;
continue;
} else {
var temp__5804__auto___16084 = cljs.core.seq.call(null,seq__16057_16075);
if(temp__5804__auto___16084){
var seq__16057_16085__$1 = temp__5804__auto___16084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16057_16085__$1)){
var c__5568__auto___16086 = cljs.core.chunk_first.call(null,seq__16057_16085__$1);
var G__16087 = cljs.core.chunk_rest.call(null,seq__16057_16085__$1);
var G__16088 = c__5568__auto___16086;
var G__16089 = cljs.core.count.call(null,c__5568__auto___16086);
var G__16090 = (0);
seq__16057_16075 = G__16087;
chunk__16058_16076 = G__16088;
count__16059_16077 = G__16089;
i__16060_16078 = G__16090;
continue;
} else {
var link_16091 = cljs.core.first.call(null,seq__16057_16085__$1);
link_16091.parentNode.removeChild(link_16091);


var G__16092 = cljs.core.next.call(null,seq__16057_16085__$1);
var G__16093 = null;
var G__16094 = (0);
var G__16095 = (0);
seq__16057_16075 = G__16092;
chunk__16058_16076 = G__16093;
count__16059_16077 = G__16094;
i__16060_16078 = G__16095;
continue;
}
} else {
}
}
break;
}

var seq__16061_16096 = cljs.core.seq.call(null,paths);
var chunk__16062_16097 = null;
var count__16063_16098 = (0);
var i__16064_16099 = (0);
while(true){
if((i__16064_16099 < count__16063_16098)){
var path_16100 = cljs.core._nth.call(null,chunk__16062_16097,i__16064_16099);
head_16074.appendChild(portfolio.css.create_css_link.call(null,path_16100));


var G__16101 = seq__16061_16096;
var G__16102 = chunk__16062_16097;
var G__16103 = count__16063_16098;
var G__16104 = (i__16064_16099 + (1));
seq__16061_16096 = G__16101;
chunk__16062_16097 = G__16102;
count__16063_16098 = G__16103;
i__16064_16099 = G__16104;
continue;
} else {
var temp__5804__auto___16105 = cljs.core.seq.call(null,seq__16061_16096);
if(temp__5804__auto___16105){
var seq__16061_16106__$1 = temp__5804__auto___16105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16061_16106__$1)){
var c__5568__auto___16107 = cljs.core.chunk_first.call(null,seq__16061_16106__$1);
var G__16108 = cljs.core.chunk_rest.call(null,seq__16061_16106__$1);
var G__16109 = c__5568__auto___16107;
var G__16110 = cljs.core.count.call(null,c__5568__auto___16107);
var G__16111 = (0);
seq__16061_16096 = G__16108;
chunk__16062_16097 = G__16109;
count__16063_16098 = G__16110;
i__16064_16099 = G__16111;
continue;
} else {
var path_16112 = cljs.core.first.call(null,seq__16061_16106__$1);
head_16074.appendChild(portfolio.css.create_css_link.call(null,path_16112));


var G__16113 = cljs.core.next.call(null,seq__16061_16106__$1);
var G__16114 = null;
var G__16115 = (0);
var G__16116 = (0);
seq__16061_16096 = G__16113;
chunk__16062_16097 = G__16114;
count__16063_16098 = G__16115;
i__16064_16099 = G__16116;
continue;
}
} else {
}
}
break;
}


var G__16117 = seq__16034;
var G__16118 = chunk__16035;
var G__16119 = count__16036;
var G__16120 = (i__16037 + (1));
seq__16034 = G__16117;
chunk__16035 = G__16118;
count__16036 = G__16119;
i__16037 = G__16120;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16034);
if(temp__5804__auto__){
var seq__16034__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16034__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__16034__$1);
var G__16121 = cljs.core.chunk_rest.call(null,seq__16034__$1);
var G__16122 = c__5568__auto__;
var G__16123 = cljs.core.count.call(null,c__5568__auto__);
var G__16124 = (0);
seq__16034 = G__16121;
chunk__16035 = G__16122;
count__16036 = G__16123;
i__16037 = G__16124;
continue;
} else {
var iframe = cljs.core.first.call(null,seq__16034__$1);
var head_16125 = (function (){var G__16065 = iframe;
var G__16065__$1 = (((G__16065 == null))?null:G__16065.contentWindow);
var G__16065__$2 = (((G__16065__$1 == null))?null:G__16065__$1.document);
if((G__16065__$2 == null)){
return null;
} else {
return G__16065__$2.head;
}
})();
var seq__16066_16126 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (seq__16034,chunk__16035,count__16036,i__16037,head_16125,iframe,seq__16034__$1,temp__5804__auto__){
return (function (p1__16033_SHARP_){
return p1__16033_SHARP_.portfolio;
});})(seq__16034,chunk__16035,count__16036,i__16037,head_16125,iframe,seq__16034__$1,temp__5804__auto__))
,head_16125.querySelectorAll("link")));
var chunk__16067_16127 = null;
var count__16068_16128 = (0);
var i__16069_16129 = (0);
while(true){
if((i__16069_16129 < count__16068_16128)){
var link_16130 = cljs.core._nth.call(null,chunk__16067_16127,i__16069_16129);
link_16130.parentNode.removeChild(link_16130);


var G__16131 = seq__16066_16126;
var G__16132 = chunk__16067_16127;
var G__16133 = count__16068_16128;
var G__16134 = (i__16069_16129 + (1));
seq__16066_16126 = G__16131;
chunk__16067_16127 = G__16132;
count__16068_16128 = G__16133;
i__16069_16129 = G__16134;
continue;
} else {
var temp__5804__auto___16135__$1 = cljs.core.seq.call(null,seq__16066_16126);
if(temp__5804__auto___16135__$1){
var seq__16066_16136__$1 = temp__5804__auto___16135__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16066_16136__$1)){
var c__5568__auto___16137 = cljs.core.chunk_first.call(null,seq__16066_16136__$1);
var G__16138 = cljs.core.chunk_rest.call(null,seq__16066_16136__$1);
var G__16139 = c__5568__auto___16137;
var G__16140 = cljs.core.count.call(null,c__5568__auto___16137);
var G__16141 = (0);
seq__16066_16126 = G__16138;
chunk__16067_16127 = G__16139;
count__16068_16128 = G__16140;
i__16069_16129 = G__16141;
continue;
} else {
var link_16142 = cljs.core.first.call(null,seq__16066_16136__$1);
link_16142.parentNode.removeChild(link_16142);


var G__16143 = cljs.core.next.call(null,seq__16066_16136__$1);
var G__16144 = null;
var G__16145 = (0);
var G__16146 = (0);
seq__16066_16126 = G__16143;
chunk__16067_16127 = G__16144;
count__16068_16128 = G__16145;
i__16069_16129 = G__16146;
continue;
}
} else {
}
}
break;
}

var seq__16070_16147 = cljs.core.seq.call(null,paths);
var chunk__16071_16148 = null;
var count__16072_16149 = (0);
var i__16073_16150 = (0);
while(true){
if((i__16073_16150 < count__16072_16149)){
var path_16151 = cljs.core._nth.call(null,chunk__16071_16148,i__16073_16150);
head_16125.appendChild(portfolio.css.create_css_link.call(null,path_16151));


var G__16152 = seq__16070_16147;
var G__16153 = chunk__16071_16148;
var G__16154 = count__16072_16149;
var G__16155 = (i__16073_16150 + (1));
seq__16070_16147 = G__16152;
chunk__16071_16148 = G__16153;
count__16072_16149 = G__16154;
i__16073_16150 = G__16155;
continue;
} else {
var temp__5804__auto___16156__$1 = cljs.core.seq.call(null,seq__16070_16147);
if(temp__5804__auto___16156__$1){
var seq__16070_16157__$1 = temp__5804__auto___16156__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16070_16157__$1)){
var c__5568__auto___16158 = cljs.core.chunk_first.call(null,seq__16070_16157__$1);
var G__16159 = cljs.core.chunk_rest.call(null,seq__16070_16157__$1);
var G__16160 = c__5568__auto___16158;
var G__16161 = cljs.core.count.call(null,c__5568__auto___16158);
var G__16162 = (0);
seq__16070_16147 = G__16159;
chunk__16071_16148 = G__16160;
count__16072_16149 = G__16161;
i__16073_16150 = G__16162;
continue;
} else {
var path_16163 = cljs.core.first.call(null,seq__16070_16157__$1);
head_16125.appendChild(portfolio.css.create_css_link.call(null,path_16163));


var G__16164 = cljs.core.next.call(null,seq__16070_16157__$1);
var G__16165 = null;
var G__16166 = (0);
var G__16167 = (0);
seq__16070_16147 = G__16164;
chunk__16071_16148 = G__16165;
count__16072_16149 = G__16166;
i__16073_16150 = G__16167;
continue;
}
} else {
}
}
break;
}


var G__16168 = cljs.core.next.call(null,seq__16034__$1);
var G__16169 = null;
var G__16170 = (0);
var G__16171 = (0);
seq__16034 = G__16168;
chunk__16035 = G__16169;
count__16036 = G__16170;
i__16037 = G__16171;
continue;
}
} else {
return null;
}
}
break;
}
});
