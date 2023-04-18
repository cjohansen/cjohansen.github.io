// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.css');
goog.require('cljs.core');
goog.require('clojure.string');
portfolio.ui.css.find_link_by_href = (function portfolio$ui$css$find_link_by_href(el,path){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16703_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__16703_SHARP_.href,path);
}),el.querySelectorAll("link")));
});
portfolio.ui.css.create_css_link = (function portfolio$ui$css$create_css_link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16711 = arguments.length;
var i__5770__auto___16712 = (0);
while(true){
if((i__5770__auto___16712 < len__5769__auto___16711)){
args__5775__auto__.push((arguments[i__5770__auto___16712]));

var G__16713 = (i__5770__auto___16712 + (1));
i__5770__auto___16712 = G__16713;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.css.create_css_link.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__16706){
var vec__16707 = p__16706;
var map__16710 = cljs.core.nth.call(null,vec__16707,(0),null);
var map__16710__$1 = cljs.core.__destructure_map.call(null,map__16710);
var media = cljs.core.get.call(null,map__16710__$1,new cljs.core.Keyword(null,"media","media",-1066138403));
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

(portfolio.ui.css.create_css_link.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.css.create_css_link.cljs$lang$applyTo = (function (seq16704){
var G__16705 = cljs.core.first.call(null,seq16704);
var seq16704__$1 = cljs.core.next.call(null,seq16704);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16705,seq16704__$1);
}));

portfolio.ui.css.reload_css_file = (function portfolio$ui$css$reload_css_file(file){
var seq__16714 = cljs.core.seq.call(null,document.body.querySelectorAll("iframe"));
var chunk__16715 = null;
var count__16716 = (0);
var i__16717 = (0);
while(true){
if((i__16717 < count__16716)){
var iframe = cljs.core._nth.call(null,chunk__16715,i__16717);
var iframe_head_16726 = (function (){var G__16722 = iframe;
var G__16722__$1 = (((G__16722 == null))?null:G__16722.contentWindow);
var G__16722__$2 = (((G__16722__$1 == null))?null:G__16722__$1.document);
if((G__16722__$2 == null)){
return null;
} else {
return G__16722__$2.head;
}
})();
var original_16727 = portfolio.ui.css.find_link_by_href.call(null,iframe_head_16726,file);
var reloaded_16728 = portfolio.ui.css.create_css_link.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_16728.addEventListener("load",((function (seq__16714,chunk__16715,count__16716,i__16717,iframe_head_16726,original_16727,reloaded_16728,iframe){
return (function portfolio$ui$css$reload_css_file_$_done(_){
var temp__5804__auto___16729 = (function (){var G__16723 = original_16727;
if((G__16723 == null)){
return null;
} else {
return G__16723.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___16729)){
var parent_16730 = temp__5804__auto___16729;
parent_16730.removeChild(original_16727);
} else {
}

return reloaded_16728.removeEventListener("load",portfolio$ui$css$reload_css_file_$_done);
});})(seq__16714,chunk__16715,count__16716,i__16717,iframe_head_16726,original_16727,reloaded_16728,iframe))
);

iframe_head_16726.appendChild(reloaded_16728);


var G__16731 = seq__16714;
var G__16732 = chunk__16715;
var G__16733 = count__16716;
var G__16734 = (i__16717 + (1));
seq__16714 = G__16731;
chunk__16715 = G__16732;
count__16716 = G__16733;
i__16717 = G__16734;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16714);
if(temp__5804__auto__){
var seq__16714__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16714__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__16714__$1);
var G__16735 = cljs.core.chunk_rest.call(null,seq__16714__$1);
var G__16736 = c__5568__auto__;
var G__16737 = cljs.core.count.call(null,c__5568__auto__);
var G__16738 = (0);
seq__16714 = G__16735;
chunk__16715 = G__16736;
count__16716 = G__16737;
i__16717 = G__16738;
continue;
} else {
var iframe = cljs.core.first.call(null,seq__16714__$1);
var iframe_head_16739 = (function (){var G__16724 = iframe;
var G__16724__$1 = (((G__16724 == null))?null:G__16724.contentWindow);
var G__16724__$2 = (((G__16724__$1 == null))?null:G__16724__$1.document);
if((G__16724__$2 == null)){
return null;
} else {
return G__16724__$2.head;
}
})();
var original_16740 = portfolio.ui.css.find_link_by_href.call(null,iframe_head_16739,file);
var reloaded_16741 = portfolio.ui.css.create_css_link.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime())].join(''));
reloaded_16741.addEventListener("load",((function (seq__16714,chunk__16715,count__16716,i__16717,iframe_head_16739,original_16740,reloaded_16741,iframe,seq__16714__$1,temp__5804__auto__){
return (function portfolio$ui$css$reload_css_file_$_done(_){
var temp__5804__auto___16742__$1 = (function (){var G__16725 = original_16740;
if((G__16725 == null)){
return null;
} else {
return G__16725.parentNode;
}
})();
if(cljs.core.truth_(temp__5804__auto___16742__$1)){
var parent_16743 = temp__5804__auto___16742__$1;
parent_16743.removeChild(original_16740);
} else {
}

return reloaded_16741.removeEventListener("load",portfolio$ui$css$reload_css_file_$_done);
});})(seq__16714,chunk__16715,count__16716,i__16717,iframe_head_16739,original_16740,reloaded_16741,iframe,seq__16714__$1,temp__5804__auto__))
);

iframe_head_16739.appendChild(reloaded_16741);


var G__16744 = cljs.core.next.call(null,seq__16714__$1);
var G__16745 = null;
var G__16746 = (0);
var G__16747 = (0);
seq__16714 = G__16744;
chunk__16715 = G__16745;
count__16716 = G__16746;
i__16717 = G__16747;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.css.load_css_files = (function portfolio$ui$css$load_css_files(paths){
var seq__16748 = cljs.core.seq.call(null,paths);
var chunk__16749 = null;
var count__16750 = (0);
var i__16751 = (0);
while(true){
if((i__16751 < count__16750)){
var path = cljs.core._nth.call(null,chunk__16749,i__16751);
if(cljs.core.truth_(portfolio.ui.css.find_link_by_href.call(null,document.head,path))){
} else {
document.head.appendChild(portfolio.ui.css.create_css_link.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)));
}


var G__16752 = seq__16748;
var G__16753 = chunk__16749;
var G__16754 = count__16750;
var G__16755 = (i__16751 + (1));
seq__16748 = G__16752;
chunk__16749 = G__16753;
count__16750 = G__16754;
i__16751 = G__16755;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16748);
if(temp__5804__auto__){
var seq__16748__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16748__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__16748__$1);
var G__16756 = cljs.core.chunk_rest.call(null,seq__16748__$1);
var G__16757 = c__5568__auto__;
var G__16758 = cljs.core.count.call(null,c__5568__auto__);
var G__16759 = (0);
seq__16748 = G__16756;
chunk__16749 = G__16757;
count__16750 = G__16758;
i__16751 = G__16759;
continue;
} else {
var path = cljs.core.first.call(null,seq__16748__$1);
if(cljs.core.truth_(portfolio.ui.css.find_link_by_href.call(null,document.head,path))){
} else {
document.head.appendChild(portfolio.ui.css.create_css_link.call(null,path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"media","media",-1066138403),"portfolio"], null)));
}


var G__16760 = cljs.core.next.call(null,seq__16748__$1);
var G__16761 = null;
var G__16762 = (0);
var G__16763 = (0);
seq__16748 = G__16760;
chunk__16749 = G__16761;
count__16750 = G__16762;
i__16751 = G__16763;
continue;
}
} else {
return null;
}
}
break;
}
});
portfolio.ui.css.replace_loaded_css_files = (function portfolio$ui$css$replace_loaded_css_files(paths){
var seq__16765 = cljs.core.seq.call(null,document.body.querySelectorAll("iframe"));
var chunk__16766 = null;
var count__16767 = (0);
var i__16768 = (0);
while(true){
if((i__16768 < count__16767)){
var iframe = cljs.core._nth.call(null,chunk__16766,i__16768);
var head_16805 = (function (){var G__16787 = iframe;
var G__16787__$1 = (((G__16787 == null))?null:G__16787.contentWindow);
var G__16787__$2 = (((G__16787__$1 == null))?null:G__16787__$1.document);
if((G__16787__$2 == null)){
return null;
} else {
return G__16787__$2.head;
}
})();
var seq__16788_16806 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (seq__16765,chunk__16766,count__16767,i__16768,head_16805,iframe){
return (function (p1__16764_SHARP_){
return p1__16764_SHARP_.portfolio;
});})(seq__16765,chunk__16766,count__16767,i__16768,head_16805,iframe))
,head_16805.querySelectorAll("link")));
var chunk__16789_16807 = null;
var count__16790_16808 = (0);
var i__16791_16809 = (0);
while(true){
if((i__16791_16809 < count__16790_16808)){
var link_16810 = cljs.core._nth.call(null,chunk__16789_16807,i__16791_16809);
link_16810.parentNode.removeChild(link_16810);


var G__16811 = seq__16788_16806;
var G__16812 = chunk__16789_16807;
var G__16813 = count__16790_16808;
var G__16814 = (i__16791_16809 + (1));
seq__16788_16806 = G__16811;
chunk__16789_16807 = G__16812;
count__16790_16808 = G__16813;
i__16791_16809 = G__16814;
continue;
} else {
var temp__5804__auto___16815 = cljs.core.seq.call(null,seq__16788_16806);
if(temp__5804__auto___16815){
var seq__16788_16816__$1 = temp__5804__auto___16815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16788_16816__$1)){
var c__5568__auto___16817 = cljs.core.chunk_first.call(null,seq__16788_16816__$1);
var G__16818 = cljs.core.chunk_rest.call(null,seq__16788_16816__$1);
var G__16819 = c__5568__auto___16817;
var G__16820 = cljs.core.count.call(null,c__5568__auto___16817);
var G__16821 = (0);
seq__16788_16806 = G__16818;
chunk__16789_16807 = G__16819;
count__16790_16808 = G__16820;
i__16791_16809 = G__16821;
continue;
} else {
var link_16822 = cljs.core.first.call(null,seq__16788_16816__$1);
link_16822.parentNode.removeChild(link_16822);


var G__16823 = cljs.core.next.call(null,seq__16788_16816__$1);
var G__16824 = null;
var G__16825 = (0);
var G__16826 = (0);
seq__16788_16806 = G__16823;
chunk__16789_16807 = G__16824;
count__16790_16808 = G__16825;
i__16791_16809 = G__16826;
continue;
}
} else {
}
}
break;
}

var seq__16792_16827 = cljs.core.seq.call(null,paths);
var chunk__16793_16828 = null;
var count__16794_16829 = (0);
var i__16795_16830 = (0);
while(true){
if((i__16795_16830 < count__16794_16829)){
var path_16831 = cljs.core._nth.call(null,chunk__16793_16828,i__16795_16830);
head_16805.appendChild(portfolio.ui.css.create_css_link.call(null,path_16831));


var G__16832 = seq__16792_16827;
var G__16833 = chunk__16793_16828;
var G__16834 = count__16794_16829;
var G__16835 = (i__16795_16830 + (1));
seq__16792_16827 = G__16832;
chunk__16793_16828 = G__16833;
count__16794_16829 = G__16834;
i__16795_16830 = G__16835;
continue;
} else {
var temp__5804__auto___16836 = cljs.core.seq.call(null,seq__16792_16827);
if(temp__5804__auto___16836){
var seq__16792_16837__$1 = temp__5804__auto___16836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16792_16837__$1)){
var c__5568__auto___16838 = cljs.core.chunk_first.call(null,seq__16792_16837__$1);
var G__16839 = cljs.core.chunk_rest.call(null,seq__16792_16837__$1);
var G__16840 = c__5568__auto___16838;
var G__16841 = cljs.core.count.call(null,c__5568__auto___16838);
var G__16842 = (0);
seq__16792_16827 = G__16839;
chunk__16793_16828 = G__16840;
count__16794_16829 = G__16841;
i__16795_16830 = G__16842;
continue;
} else {
var path_16843 = cljs.core.first.call(null,seq__16792_16837__$1);
head_16805.appendChild(portfolio.ui.css.create_css_link.call(null,path_16843));


var G__16844 = cljs.core.next.call(null,seq__16792_16837__$1);
var G__16845 = null;
var G__16846 = (0);
var G__16847 = (0);
seq__16792_16827 = G__16844;
chunk__16793_16828 = G__16845;
count__16794_16829 = G__16846;
i__16795_16830 = G__16847;
continue;
}
} else {
}
}
break;
}


var G__16848 = seq__16765;
var G__16849 = chunk__16766;
var G__16850 = count__16767;
var G__16851 = (i__16768 + (1));
seq__16765 = G__16848;
chunk__16766 = G__16849;
count__16767 = G__16850;
i__16768 = G__16851;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__16765);
if(temp__5804__auto__){
var seq__16765__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16765__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__16765__$1);
var G__16852 = cljs.core.chunk_rest.call(null,seq__16765__$1);
var G__16853 = c__5568__auto__;
var G__16854 = cljs.core.count.call(null,c__5568__auto__);
var G__16855 = (0);
seq__16765 = G__16852;
chunk__16766 = G__16853;
count__16767 = G__16854;
i__16768 = G__16855;
continue;
} else {
var iframe = cljs.core.first.call(null,seq__16765__$1);
var head_16856 = (function (){var G__16796 = iframe;
var G__16796__$1 = (((G__16796 == null))?null:G__16796.contentWindow);
var G__16796__$2 = (((G__16796__$1 == null))?null:G__16796__$1.document);
if((G__16796__$2 == null)){
return null;
} else {
return G__16796__$2.head;
}
})();
var seq__16797_16857 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (seq__16765,chunk__16766,count__16767,i__16768,head_16856,iframe,seq__16765__$1,temp__5804__auto__){
return (function (p1__16764_SHARP_){
return p1__16764_SHARP_.portfolio;
});})(seq__16765,chunk__16766,count__16767,i__16768,head_16856,iframe,seq__16765__$1,temp__5804__auto__))
,head_16856.querySelectorAll("link")));
var chunk__16798_16858 = null;
var count__16799_16859 = (0);
var i__16800_16860 = (0);
while(true){
if((i__16800_16860 < count__16799_16859)){
var link_16861 = cljs.core._nth.call(null,chunk__16798_16858,i__16800_16860);
link_16861.parentNode.removeChild(link_16861);


var G__16862 = seq__16797_16857;
var G__16863 = chunk__16798_16858;
var G__16864 = count__16799_16859;
var G__16865 = (i__16800_16860 + (1));
seq__16797_16857 = G__16862;
chunk__16798_16858 = G__16863;
count__16799_16859 = G__16864;
i__16800_16860 = G__16865;
continue;
} else {
var temp__5804__auto___16866__$1 = cljs.core.seq.call(null,seq__16797_16857);
if(temp__5804__auto___16866__$1){
var seq__16797_16867__$1 = temp__5804__auto___16866__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16797_16867__$1)){
var c__5568__auto___16868 = cljs.core.chunk_first.call(null,seq__16797_16867__$1);
var G__16869 = cljs.core.chunk_rest.call(null,seq__16797_16867__$1);
var G__16870 = c__5568__auto___16868;
var G__16871 = cljs.core.count.call(null,c__5568__auto___16868);
var G__16872 = (0);
seq__16797_16857 = G__16869;
chunk__16798_16858 = G__16870;
count__16799_16859 = G__16871;
i__16800_16860 = G__16872;
continue;
} else {
var link_16873 = cljs.core.first.call(null,seq__16797_16867__$1);
link_16873.parentNode.removeChild(link_16873);


var G__16874 = cljs.core.next.call(null,seq__16797_16867__$1);
var G__16875 = null;
var G__16876 = (0);
var G__16877 = (0);
seq__16797_16857 = G__16874;
chunk__16798_16858 = G__16875;
count__16799_16859 = G__16876;
i__16800_16860 = G__16877;
continue;
}
} else {
}
}
break;
}

var seq__16801_16878 = cljs.core.seq.call(null,paths);
var chunk__16802_16879 = null;
var count__16803_16880 = (0);
var i__16804_16881 = (0);
while(true){
if((i__16804_16881 < count__16803_16880)){
var path_16882 = cljs.core._nth.call(null,chunk__16802_16879,i__16804_16881);
head_16856.appendChild(portfolio.ui.css.create_css_link.call(null,path_16882));


var G__16883 = seq__16801_16878;
var G__16884 = chunk__16802_16879;
var G__16885 = count__16803_16880;
var G__16886 = (i__16804_16881 + (1));
seq__16801_16878 = G__16883;
chunk__16802_16879 = G__16884;
count__16803_16880 = G__16885;
i__16804_16881 = G__16886;
continue;
} else {
var temp__5804__auto___16887__$1 = cljs.core.seq.call(null,seq__16801_16878);
if(temp__5804__auto___16887__$1){
var seq__16801_16888__$1 = temp__5804__auto___16887__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16801_16888__$1)){
var c__5568__auto___16889 = cljs.core.chunk_first.call(null,seq__16801_16888__$1);
var G__16890 = cljs.core.chunk_rest.call(null,seq__16801_16888__$1);
var G__16891 = c__5568__auto___16889;
var G__16892 = cljs.core.count.call(null,c__5568__auto___16889);
var G__16893 = (0);
seq__16801_16878 = G__16890;
chunk__16802_16879 = G__16891;
count__16803_16880 = G__16892;
i__16804_16881 = G__16893;
continue;
} else {
var path_16894 = cljs.core.first.call(null,seq__16801_16888__$1);
head_16856.appendChild(portfolio.ui.css.create_css_link.call(null,path_16894));


var G__16895 = cljs.core.next.call(null,seq__16801_16888__$1);
var G__16896 = null;
var G__16897 = (0);
var G__16898 = (0);
seq__16801_16878 = G__16895;
chunk__16802_16879 = G__16896;
count__16803_16880 = G__16897;
i__16804_16881 = G__16898;
continue;
}
} else {
}
}
break;
}


var G__16899 = cljs.core.next.call(null,seq__16765__$1);
var G__16900 = null;
var G__16901 = (0);
var G__16902 = (0);
seq__16765 = G__16899;
chunk__16766 = G__16900;
count__16767 = G__16901;
i__16768 = G__16902;
continue;
}
} else {
return null;
}
}
break;
}
});
