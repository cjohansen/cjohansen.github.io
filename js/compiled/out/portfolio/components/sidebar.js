// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.components.sidebar');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.icons.caret_double_left');
goog.require('portfolio.icons.caret_down');
goog.require('portfolio.icons.bookmark');
goog.require('portfolio.icons.caret_right');
goog.require('portfolio.icons.cube');
goog.require('portfolio.icons.folder');
/**
 * 
 */
portfolio.components.sidebar.Sidebar = dumdom.core.component.call(null,(function (p__11655){
var map__11656 = p__11655;
var map__11656__$1 = cljs.core.__destructure_map.call(null,map__11656);
var width = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var title = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"title","title",636505583));
var lists = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var actions = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var slide_QMARK_ = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"slide?","slide?",1648217264));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(slide_QMARK_)?(0):width),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),"0",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.25s ease"], null),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"16px 0 16px 8px",new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions], null),portfolio.icons.caret_double_left.icon], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h1","h1.h1",-1010377955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 10px"], null)], null),title], null):null),(function (){var iter__5523__auto__ = (function portfolio$components$sidebar$iter__11657(s__11658){
return (new cljs.core.LazySeq(null,(function (){
var s__11658__$1 = s__11658;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11658__$1);
if(temp__5804__auto__){
var s__11658__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11658__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11658__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11660 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11659 = (0);
while(true){
if((i__11659 < size__5522__auto__)){
var list = cljs.core._nth.call(null,c__5521__auto__,i__11659);
cljs.core.chunk_append.call(null,b__11660,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h4","h2.h4",1151335370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--tuna)",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid var(--shark-dark)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--shark-dark)",new cljs.core.Keyword(null,"padding","padding",1660304693),"16px 8px",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"color","color",1011675173),"var(--cadet-blue)"], null)], null),portfolio.icons.folder.icon], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__11659,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__11657_$_iter__11661(s__11662){
return (new cljs.core.LazySeq(null,((function (i__11659,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__11662__$1 = s__11662;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11662__$1);
if(temp__5804__auto____$1){
var s__11662__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11662__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__11662__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__11664 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__11663 = (0);
while(true){
if((i__11663 < size__5522__auto____$1)){
var map__11665 = cljs.core._nth.call(null,c__5521__auto____$1,i__11663);
var map__11665__$1 = cljs.core.__destructure_map.call(null,map__11665);
var title__$1 = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"title","title",636505583));
var expanded_QMARK_ = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__11665__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append.call(null,b__11664,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null),(cljs.core.truth_(expanded_QMARK_)?portfolio.icons.caret_down.icon:portfolio.icons.caret_right.icon)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),"var(--azure-radiance)"], null)], null),portfolio.icons.cube.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__11663,i__11659,map__11665,map__11665__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__11664,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__11657_$_iter__11661_$_iter__11666(s__11667){
return (new cljs.core.LazySeq(null,((function (i__11663,i__11659,map__11665,map__11665__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__11664,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__11667__$1 = s__11667;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__11667__$1);
if(temp__5804__auto____$2){
var s__11667__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11667__$2)){
var c__5521__auto____$2 = cljs.core.chunk_first.call(null,s__11667__$2);
var size__5522__auto____$2 = cljs.core.count.call(null,c__5521__auto____$2);
var b__11669 = cljs.core.chunk_buffer.call(null,size__5522__auto____$2);
if((function (){var i__11668 = (0);
while(true){
if((i__11668 < size__5522__auto____$2)){
var map__11670 = cljs.core._nth.call(null,c__5521__auto____$2,i__11668);
var map__11670__$1 = cljs.core.__destructure_map.call(null,map__11670);
var title__$2 = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__11669,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__11697 = (i__11668 + (1));
i__11668 = G__11697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11669),portfolio$components$sidebar$iter__11657_$_iter__11661_$_iter__11666.call(null,cljs.core.chunk_rest.call(null,s__11667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11669),null);
}
} else {
var map__11671 = cljs.core.first.call(null,s__11667__$2);
var map__11671__$1 = cljs.core.__destructure_map.call(null,map__11671);
var title__$2 = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11671__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__11657_$_iter__11661_$_iter__11666.call(null,cljs.core.rest.call(null,s__11667__$2)));
}
} else {
return null;
}
break;
}
});})(i__11663,i__11659,map__11665,map__11665__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__11664,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__11663,i__11659,map__11665,map__11665__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto____$1,size__5522__auto____$1,b__11664,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null));

var G__11698 = (i__11663 + (1));
i__11663 = G__11698;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11664),portfolio$components$sidebar$iter__11657_$_iter__11661.call(null,cljs.core.chunk_rest.call(null,s__11662__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11664),null);
}
} else {
var map__11672 = cljs.core.first.call(null,s__11662__$2);
var map__11672__$1 = cljs.core.__destructure_map.call(null,map__11672);
var title__$1 = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"title","title",636505583));
var expanded_QMARK_ = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__11672__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null),(cljs.core.truth_(expanded_QMARK_)?portfolio.icons.caret_down.icon:portfolio.icons.caret_right.icon)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),"var(--azure-radiance)"], null)], null),portfolio.icons.cube.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__11659,map__11672,map__11672__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__11657_$_iter__11661_$_iter__11673(s__11674){
return (new cljs.core.LazySeq(null,((function (i__11659,map__11672,map__11672__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__11674__$1 = s__11674;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__11674__$1);
if(temp__5804__auto____$2){
var s__11674__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11674__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__11674__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__11676 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__11675 = (0);
while(true){
if((i__11675 < size__5522__auto____$1)){
var map__11677 = cljs.core._nth.call(null,c__5521__auto____$1,i__11675);
var map__11677__$1 = cljs.core.__destructure_map.call(null,map__11677);
var title__$2 = cljs.core.get.call(null,map__11677__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11677__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11677__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__11676,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__11699 = (i__11675 + (1));
i__11675 = G__11699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11676),portfolio$components$sidebar$iter__11657_$_iter__11661_$_iter__11673.call(null,cljs.core.chunk_rest.call(null,s__11674__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11676),null);
}
} else {
var map__11678 = cljs.core.first.call(null,s__11674__$2);
var map__11678__$1 = cljs.core.__destructure_map.call(null,map__11678);
var title__$2 = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__11657_$_iter__11661_$_iter__11673.call(null,cljs.core.rest.call(null,s__11674__$2)));
}
} else {
return null;
}
break;
}
});})(i__11659,map__11672,map__11672__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__11659,map__11672,map__11672__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,s__11662__$2,temp__5804__auto____$1,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null),portfolio$components$sidebar$iter__11657_$_iter__11661.call(null,cljs.core.rest.call(null,s__11662__$2)));
}
} else {
return null;
}
break;
}
});})(i__11659,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__11659,list,c__5521__auto__,size__5522__auto__,b__11660,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(list));
})()], null)], null));

var G__11700 = (i__11659 + (1));
i__11659 = G__11700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11660),portfolio$components$sidebar$iter__11657.call(null,cljs.core.chunk_rest.call(null,s__11658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11660),null);
}
} else {
var list = cljs.core.first.call(null,s__11658__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h4","h2.h4",1151335370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--tuna)",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid var(--shark-dark)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--shark-dark)",new cljs.core.Keyword(null,"padding","padding",1660304693),"16px 8px",new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"height","height",1025178622),(24),new cljs.core.Keyword(null,"color","color",1011675173),"var(--cadet-blue)"], null)], null),portfolio.icons.folder.icon], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(list)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__11657_$_iter__11679(s__11680){
return (new cljs.core.LazySeq(null,(function (){
var s__11680__$1 = s__11680;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__11680__$1);
if(temp__5804__auto____$1){
var s__11680__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11680__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11680__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11682 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11681 = (0);
while(true){
if((i__11681 < size__5522__auto__)){
var map__11683 = cljs.core._nth.call(null,c__5521__auto__,i__11681);
var map__11683__$1 = cljs.core.__destructure_map.call(null,map__11683);
var title__$1 = cljs.core.get.call(null,map__11683__$1,new cljs.core.Keyword(null,"title","title",636505583));
var expanded_QMARK_ = cljs.core.get.call(null,map__11683__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__11683__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__11683__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__11683__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append.call(null,b__11682,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null),(cljs.core.truth_(expanded_QMARK_)?portfolio.icons.caret_down.icon:portfolio.icons.caret_right.icon)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),"var(--azure-radiance)"], null)], null),portfolio.icons.cube.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (i__11681,map__11683,map__11683__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__11682,s__11680__$2,temp__5804__auto____$1,list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__11657_$_iter__11679_$_iter__11684(s__11685){
return (new cljs.core.LazySeq(null,((function (i__11681,map__11683,map__11683__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__11682,s__11680__$2,temp__5804__auto____$1,list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function (){
var s__11685__$1 = s__11685;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__11685__$1);
if(temp__5804__auto____$2){
var s__11685__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11685__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first.call(null,s__11685__$2);
var size__5522__auto____$1 = cljs.core.count.call(null,c__5521__auto____$1);
var b__11687 = cljs.core.chunk_buffer.call(null,size__5522__auto____$1);
if((function (){var i__11686 = (0);
while(true){
if((i__11686 < size__5522__auto____$1)){
var map__11688 = cljs.core._nth.call(null,c__5521__auto____$1,i__11686);
var map__11688__$1 = cljs.core.__destructure_map.call(null,map__11688);
var title__$2 = cljs.core.get.call(null,map__11688__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11688__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11688__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__11687,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__11701 = (i__11686 + (1));
i__11686 = G__11701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11687),portfolio$components$sidebar$iter__11657_$_iter__11679_$_iter__11684.call(null,cljs.core.chunk_rest.call(null,s__11685__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11687),null);
}
} else {
var map__11689 = cljs.core.first.call(null,s__11685__$2);
var map__11689__$1 = cljs.core.__destructure_map.call(null,map__11689);
var title__$2 = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11689__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__11657_$_iter__11679_$_iter__11684.call(null,cljs.core.rest.call(null,s__11685__$2)));
}
} else {
return null;
}
break;
}
});})(i__11681,map__11683,map__11683__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__11682,s__11680__$2,temp__5804__auto____$1,list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
,null,null));
});})(i__11681,map__11683,map__11683__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,c__5521__auto__,size__5522__auto__,b__11682,s__11680__$2,temp__5804__auto____$1,list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null));

var G__11702 = (i__11681 + (1));
i__11681 = G__11702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11682),portfolio$components$sidebar$iter__11657_$_iter__11679.call(null,cljs.core.chunk_rest.call(null,s__11680__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11682),null);
}
} else {
var map__11690 = cljs.core.first.call(null,s__11680__$2);
var map__11690__$1 = cljs.core.__destructure_map.call(null,map__11690);
var title__$1 = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"title","title",636505583));
var expanded_QMARK_ = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var items = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var expand_actions = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"expand-actions","expand-actions",-1008648499));
var actions__$1 = cljs.core.get.call(null,map__11690__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(cljs.core.truth_(title__$1)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),expand_actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(8)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null),(cljs.core.truth_(expanded_QMARK_)?portfolio.icons.caret_down.icon:portfolio.icons.caret_right.icon)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),"var(--azure-radiance)"], null)], null),portfolio.icons.cube.icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions__$1)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0"], null)], null),title__$1], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = ((function (map__11690,map__11690__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,s__11680__$2,temp__5804__auto____$1,list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_){
return (function portfolio$components$sidebar$iter__11657_$_iter__11679_$_iter__11691(s__11692){
return (new cljs.core.LazySeq(null,(function (){
var s__11692__$1 = s__11692;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__11692__$1);
if(temp__5804__auto____$2){
var s__11692__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11692__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__11692__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__11694 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__11693 = (0);
while(true){
if((i__11693 < size__5522__auto__)){
var map__11695 = cljs.core._nth.call(null,c__5521__auto__,i__11693);
var map__11695__$1 = cljs.core.__destructure_map.call(null,map__11695);
var title__$2 = cljs.core.get.call(null,map__11695__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11695__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11695__$1,new cljs.core.Keyword(null,"url","url",276297046));
cljs.core.chunk_append.call(null,b__11694,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null));

var G__11703 = (i__11693 + (1));
i__11693 = G__11703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11694),portfolio$components$sidebar$iter__11657_$_iter__11679_$_iter__11691.call(null,cljs.core.chunk_rest.call(null,s__11692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11694),null);
}
} else {
var map__11696 = cljs.core.first.call(null,s__11692__$2);
var map__11696__$1 = cljs.core.__destructure_map.call(null,map__11696);
var title__$2 = cljs.core.get.call(null,map__11696__$1,new cljs.core.Keyword(null,"title","title",636505583));
var selected_QMARK_ = cljs.core.get.call(null,map__11696__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var url = cljs.core.get.call(null,map__11696__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--mariner)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0 8px 48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(16),new cljs.core.Keyword(null,"height","height",1025178622),(16),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?null:"var(--silver-tree)")], null)], null),portfolio.icons.bookmark.icon], null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title__$2], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null),new cljs.core.Keyword(null,"href","href",-793805698),url], null),title__$2], null))], null),portfolio$components$sidebar$iter__11657_$_iter__11679_$_iter__11691.call(null,cljs.core.rest.call(null,s__11692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(map__11690,map__11690__$1,title__$1,expanded_QMARK_,items,expand_actions,actions__$1,s__11680__$2,temp__5804__auto____$1,list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,items);
})()], null)], null),portfolio$components$sidebar$iter__11657_$_iter__11679.call(null,cljs.core.rest.call(null,s__11680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(list,s__11658__$2,temp__5804__auto__,map__11656,map__11656__$1,width,title,lists,actions,slide_QMARK_))
;
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(list));
})()], null)], null),portfolio$components$sidebar$iter__11657.call(null,cljs.core.rest.call(null,s__11658__$2)));
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
