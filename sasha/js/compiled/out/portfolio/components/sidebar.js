// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.sidebar');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.components.triangle');
goog.require('portfolio.icons.caret_double_left');
/**
 * 
 */
portfolio.components.sidebar.Sidebar = dumdom.core.component.call(null,(function (p__15852){
var map__15853 = p__15852;
var map__15853__$1 = cljs.core.__destructure_map.call(null,map__15853);
var width = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"title","title",636505583));
var lists = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var actions = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var slide_QMARK_ = cljs.core.get.call(null,map__15853__$1,new cljs.core.Keyword(null,"slide?","slide?",1648217264));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"#e1e4ec",new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(slide_QMARK_)?(0):width),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s ease"], null),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0 0 10px",new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),portfolio.icons.caret_double_left.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 10px"], null)], null),title], null),(function (){var iter__5523__auto__ = (function portfolio$components$sidebar$iter__15854(s__15855){
return (new cljs.core.LazySeq(null,(function (){
var s__15855__$1 = s__15855;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15855__$1);
if(temp__5804__auto__){
var s__15855__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15855__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15855__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15857 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15856 = (0);
while(true){
if((i__15856 < size__5522__auto__)){
var list = cljs.core._nth.call(null,c__5521__auto__,i__15856);
cljs.core.chunk_append.call(null,b__15857,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h4","h2.h4",1151335370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 10px 10px"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__15856,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__15854_$_iter__15858(s__15859){
return (new cljs.core.LazySeq(null,((function (i__15856,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__15859__$1 = s__15859;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__15859__$1);
if(temp__5804__auto____$1){
var s__15859__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15859__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__15859__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__15861 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__15860 = (0);
while(true){
if((i__15860 < size__5522__auto____$1)){
var map__15862 = cljs.core._nth.call(null,c__5521__auto____$1,i__15860);
var map__15862__$1 = cljs.core.__destructure_map.call(null,map__15862);
var title__$1 = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var expanded_QMARK_ = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__15862__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append.call(null,b__15861,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"#1ea7fd26":null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4)], null)], null),portfolio.components.triangle.Triangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(153, 153, 153, 0.6)",new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"actions","actions",-812656882),expand_actions], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__15860,i__15856,map__15862,map__15862__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__15861,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__15854_$_iter__15858_$_iter__15863(s__15864){
return (new cljs.core.LazySeq(null,((function (i__15860,i__15856,map__15862,map__15862__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__15861,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__15864__$1 = s__15864;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__15864__$1);
if(temp__5804__auto____$2){
var s__15864__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15864__$2)){
var c__5521__auto____$2 = cljs.core.chunk_first.call(null,s__15864__$2);
var size__5522__auto____$2 = cljs.core.count.call(null,c__5521__auto____$2);
var b__15866 = cljs.core.chunk_buffer.call(null,size__5522__auto____$2);
if((function (){var i__15865 = (0);
while(true){
if((i__15865 < size__5522__auto____$2)){
var map__15867 = cljs.core._nth.call(null,c__5521__auto____$2,i__15865);
var map__15867__$1 = cljs.core.__destructure_map.call(null,map__15867);
var title__$2 = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15867__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__15866,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__15894 = (i__15865 + (1));
i__15865 = G__15894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15866),portfolio$components$sidebar$iter__15854_$_iter__15858_$_iter__15863.call(null,cljs.core.chunk_rest.call(null,s__15864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15866),null);
}
} else {
var map__15868 = cljs.core.first.call(null,s__15864__$2);
var map__15868__$1 = cljs.core.__destructure_map.call(null,map__15868);
var title__$2 = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15868__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__15854_$_iter__15858_$_iter__15863.call(null,cljs.core.rest.call(null,s__15864__$2)));
}
} else {
return null;
}
break;
}
});})(i__15860,i__15856,map__15862,map__15862__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__15861,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__15860,i__15856,map__15862,map__15862__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__15861,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null));

var G__15895 = (i__15860 + (1));
i__15860 = G__15895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15861),portfolio$components$sidebar$iter__15854_$_iter__15858.call(null,cljs.core.chunk_rest.call(null,s__15859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15861),null);
}
} else {
var map__15869 = cljs.core.first.call(null,s__15859__$2);
var map__15869__$1 = cljs.core.__destructure_map.call(null,map__15869);
var title__$1 = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var expanded_QMARK_ = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__15869__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"#1ea7fd26":null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4)], null)], null),portfolio.components.triangle.Triangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(153, 153, 153, 0.6)",new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"actions","actions",-812656882),expand_actions], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__15856,map__15869,map__15869__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__15854_$_iter__15858_$_iter__15870(s__15871){
return (new cljs.core.LazySeq(null,((function (i__15856,map__15869,map__15869__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__15871__$1 = s__15871;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__15871__$1);
if(temp__5804__auto____$2){
var s__15871__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15871__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__15871__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__15873 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__15872 = (0);
while(true){
if((i__15872 < size__5522__auto____$1)){
var map__15874 = cljs.core._nth.call(null,c__5521__auto____$1,i__15872);
var map__15874__$1 = cljs.core.__destructure_map.call(null,map__15874);
var title__$2 = cljs.core.get.call(null,map__15874__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15874__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15874__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__15873,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__15896 = (i__15872 + (1));
i__15872 = G__15896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15873),portfolio$components$sidebar$iter__15854_$_iter__15858_$_iter__15870.call(null,cljs.core.chunk_rest.call(null,s__15871__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15873),null);
}
} else {
var map__15875 = cljs.core.first.call(null,s__15871__$2);
var map__15875__$1 = cljs.core.__destructure_map.call(null,map__15875);
var title__$2 = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15875__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__15854_$_iter__15858_$_iter__15870.call(null,cljs.core.rest.call(null,s__15871__$2)));
}
} else {
return null;
}
break;
}
});})(i__15856,map__15869,map__15869__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__15856,map__15869,map__15869__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,s__15859__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null),portfolio$components$sidebar$iter__15854_$_iter__15858.call(null,cljs.core.rest.call(null,s__15859__$2)));
}
} else {
return null;
}
break;
}
});})(i__15856,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__15856,list,c__5521__auto__,size__5522__auto__,b__15857,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(list));
})()], null)], null));

var G__15897 = (i__15856 + (1));
i__15856 = G__15897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15857),portfolio$components$sidebar$iter__15854.call(null,cljs.core.chunk_rest.call(null,s__15855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15857),null);
}
} else {
var list = cljs.core.first.call(null,s__15855__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h4","h2.h4",1151335370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 10px 10px"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__15854_$_iter__15876(s__15877){
return (new cljs.core.LazySeq(null,(function (){
var s__15877__$1 = s__15877;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__15877__$1);
if(temp__5804__auto____$1){
var s__15877__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15877__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15877__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15879 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15878 = (0);
while(true){
if((i__15878 < size__5522__auto__)){
var map__15880 = cljs.core._nth.call(null,c__5521__auto__,i__15878);
var map__15880__$1 = cljs.core.__destructure_map.call(null,map__15880);
var title__$1 = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var expanded_QMARK_ = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__15880__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append.call(null,b__15879,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"#1ea7fd26":null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4)], null)], null),portfolio.components.triangle.Triangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(153, 153, 153, 0.6)",new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"actions","actions",-812656882),expand_actions], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__15878,map__15880,map__15880__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__15879,s__15877__$2,temp__5804__auto____$1,list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__15854_$_iter__15876_$_iter__15881(s__15882){
return (new cljs.core.LazySeq(null,((function (i__15878,map__15880,map__15880__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__15879,s__15877__$2,temp__5804__auto____$1,list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__15882__$1 = s__15882;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__15882__$1);
if(temp__5804__auto____$2){
var s__15882__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15882__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__15882__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__15884 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__15883 = (0);
while(true){
if((i__15883 < size__5522__auto____$1)){
var map__15885 = cljs.core._nth.call(null,c__5521__auto____$1,i__15883);
var map__15885__$1 = cljs.core.__destructure_map.call(null,map__15885);
var title__$2 = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15885__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__15884,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__15898 = (i__15883 + (1));
i__15883 = G__15898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15884),portfolio$components$sidebar$iter__15854_$_iter__15876_$_iter__15881.call(null,cljs.core.chunk_rest.call(null,s__15882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15884),null);
}
} else {
var map__15886 = cljs.core.first.call(null,s__15882__$2);
var map__15886__$1 = cljs.core.__destructure_map.call(null,map__15886);
var title__$2 = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15886__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__15854_$_iter__15876_$_iter__15881.call(null,cljs.core.rest.call(null,s__15882__$2)));
}
} else {
return null;
}
break;
}
});})(i__15878,map__15880,map__15880__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__15879,s__15877__$2,temp__5804__auto____$1,list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__15878,map__15880,map__15880__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__15879,s__15877__$2,temp__5804__auto____$1,list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null));

var G__15899 = (i__15878 + (1));
i__15878 = G__15899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15879),portfolio$components$sidebar$iter__15854_$_iter__15876.call(null,cljs.core.chunk_rest.call(null,s__15877__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15879),null);
}
} else {
var map__15887 = cljs.core.first.call(null,s__15877__$2);
var map__15887__$1 = cljs.core.__destructure_map.call(null,map__15887);
var title__$1 = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var expanded_QMARK_ = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__15887__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"#1ea7fd26":null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(4)], null)], null),portfolio.components.triangle.Triangle.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"rgba(153, 153, 153, 0.6)",new cljs.core.Keyword(null,"direction","direction",-633359395),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"down","down",1565245570):new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.Keyword(null,"actions","actions",-812656882),expand_actions], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (map__15887,map__15887__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,s__15877__$2,temp__5804__auto____$1,list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__15854_$_iter__15876_$_iter__15888(s__15889){
return (new cljs.core.LazySeq(null,(function (){
var s__15889__$1 = s__15889;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__15889__$1);
if(temp__5804__auto____$2){
var s__15889__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15889__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15889__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15891 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15890 = (0);
while(true){
if((i__15890 < size__5522__auto__)){
var map__15892 = cljs.core._nth.call(null,c__5521__auto__,i__15890);
var map__15892__$1 = cljs.core.__destructure_map.call(null,map__15892);
var title__$2 = cljs.core.get.call(null,map__15892__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15892__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15892__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__15891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__15900 = (i__15890 + (1));
i__15890 = G__15900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15891),portfolio$components$sidebar$iter__15854_$_iter__15876_$_iter__15888.call(null,cljs.core.chunk_rest.call(null,s__15889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15891),null);
}
} else {
var map__15893 = cljs.core.first.call(null,s__15889__$2);
var map__15893__$1 = cljs.core.__destructure_map.call(null,map__15893);
var title__$2 = cljs.core.get.call(null,map__15893__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK___$1 = cljs.core.get.call(null,map__15893__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__15893__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK___$1)?"#1ea7fd":null),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 20px"], null)], null),(cljs.core.truth_(selected_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__15854_$_iter__15876_$_iter__15888.call(null,cljs.core.rest.call(null,s__15889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__15887,map__15887__$1,title__$1,selected_QMARK_,expanded_QMARK_,items,expand_actions,actions__$1,s__15877__$2,temp__5804__auto____$1,list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null),portfolio$components$sidebar$iter__15854_$_iter__15876.call(null,cljs.core.rest.call(null,s__15877__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(list,s__15855__$2,temp__5804__auto__,map__15853,map__15853__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(list));
})()], null)], null),portfolio$components$sidebar$iter__15854.call(null,cljs.core.rest.call(null,s__15855__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,lists);
})()], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.components.sidebar/Sidebar"], null));
