// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.browser');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.ui.components.elastic_container');
goog.require('portfolio.ui.icons');
portfolio.ui.components.browser.render_items = (function portfolio$ui$components$browser$render_items(var_args){
var G__16655 = arguments.length;
switch (G__16655) {
case 1:
return portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$1 = (function (items){
return portfolio.ui.components.browser.render_items.call(null,null,items);
}));

(portfolio.ui.components.browser.render_items.cljs$core$IFn$_invoke$arity$2 = (function (attrs,items){
if(cljs.core.seq.call(null,items)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),attrs,(function (){var iter__5523__auto__ = (function portfolio$ui$components$browser$iter__16656(s__16657){
return (new cljs.core.LazySeq(null,(function (){
var s__16657__$1 = s__16657;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16657__$1);
if(temp__5804__auto__){
var s__16657__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16657__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16657__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16659 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16658 = (0);
while(true){
if((i__16658 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__16658);
cljs.core.chunk_append.call(null,b__16659,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),portfolio.ui.components.browser.render_menu.call(null,item)], null));

var G__16661 = (i__16658 + (1));
i__16658 = G__16661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16659),portfolio$ui$components$browser$iter__16656.call(null,cljs.core.chunk_rest.call(null,s__16657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16659),null);
}
} else {
var item = cljs.core.first.call(null,s__16657__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),portfolio.ui.components.browser.render_menu.call(null,item)], null),portfolio$ui$components$browser$iter__16656.call(null,cljs.core.rest.call(null,s__16657__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,items);
})()], null);
} else {
return null;
}
}));

(portfolio.ui.components.browser.render_items.cljs$lang$maxFixedArity = 2);

portfolio.ui.components.browser.get_context_offset = (function portfolio$ui$components$browser$get_context_offset(context,kind){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (pair){
var G__16662 = pair;
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"folder","folder",1515881736)], null),G__16662)){
return (24);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"package","package",1189062786)], null),G__16662)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"folder","folder",1515881736)], null),G__16662)){
return (24);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"package","package",1189062786)], null),G__16662)){
return (24);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"unit","unit",375175175)], null),G__16662)){
return (32);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"unit","unit",375175175)], null),G__16662)){
return (48);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16662)].join('')));

}
}
}
}
}
}
}),cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null)))));
});
/**
 * 
 */
portfolio.ui.components.browser.Folder = dumdom.core.component.call(null,(function (p__16663){
var map__16664 = p__16663;
var map__16664__$1 = cljs.core.__destructure_map.call(null,map__16664);
var title = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"title","title",636505583));
var illustration = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var actions = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var items = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var context = cljs.core.get.call(null,map__16664__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var left_padding = ((8) + portfolio.ui.components.browser.get_context_offset.call(null,context,new cljs.core.Keyword(null,"folder","folder",1515881736)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.h4","h2.h4",1151335370),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--folder-bg)",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid var(--folder-border)",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--folder-border)",new cljs.core.Keyword(null,"padding","padding",1660304693),["16px 8px 16px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_padding),"px"].join(''),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"gap","gap",80255254),(8)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)):null),title], null),portfolio.ui.components.browser.render_items.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"8px 0 24px"], null)], null),items)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Folder"], null));
/**
 * 
 */
portfolio.ui.components.browser.Package = dumdom.core.component.call(null,(function (p__16665){
var map__16666 = p__16665;
var map__16666__$1 = cljs.core.__destructure_map.call(null,map__16666);
var title = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"title","title",636505583));
var illustration = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var actions = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var toggle = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"toggle","toggle",1291842030));
var items = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var context = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var selected_QMARK_ = cljs.core.get.call(null,map__16666__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--highlight-bg)":null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?"bold":null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),((cljs.core.truth_(selected_QMARK_)?(4):(8)) + portfolio.ui.components.browser.get_context_offset.call(null,context,new cljs.core.Keyword(null,"package","package",1189062786))),new cljs.core.Keyword(null,"margin","margin",-995903681),(cljs.core.truth_(selected_QMARK_)?"0 4px":null)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(toggle))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(toggle),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(toggle);
if(cljs.core.truth_(temp__5804__auto__)){
var rotation = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.15s",new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rotation),"deg)"].join('')], null);
} else {
return null;
}
})()),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(toggle)], null)):null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"var(--package-selected-fg)":new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null)):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0"], null)], null),title], null)], null),portfolio.ui.components.browser.render_items.call(null,items)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Package"], null));
/**
 * 
 */
portfolio.ui.components.browser.Unit = dumdom.core.component.call(null,(function (p__16667){
var map__16668 = p__16667;
var map__16668__$1 = cljs.core.__destructure_map.call(null,map__16668);
var title = cljs.core.get.call(null,map__16668__$1,new cljs.core.Keyword(null,"title","title",636505583));
var url = cljs.core.get.call(null,map__16668__$1,new cljs.core.Keyword(null,"url","url",276297046));
var actions = cljs.core.get.call(null,map__16668__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var selected_QMARK_ = cljs.core.get.call(null,map__16668__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var illustration = cljs.core.get.call(null,map__16668__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var context = cljs.core.get.call(null,map__16668__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var left_padding = portfolio.ui.components.browser.get_context_offset.call(null,context,new cljs.core.Keyword(null,"unit","unit",375175175));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.text-s","li.text-s",1011029760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(selected_QMARK_)?"var(--highlight-bg)":null),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?(600):null),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px 4px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"padding","padding",1660304693),["8px 0 8px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_padding),"px"].join('')], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(8)], null)], null)):null),(cljs.core.truth_(selected_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),title], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"var(--browser-unit-fg)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"href","href",-793805698),url], null),title], null))], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Unit"], null));
portfolio.ui.components.browser.render_menu = (function portfolio$ui$components$browser$render_menu(props){
var G__16669 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(props);
var G__16669__$1 = (((G__16669 instanceof cljs.core.Keyword))?G__16669.fqn:null);
switch (G__16669__$1) {
case "folder":
return portfolio.ui.components.browser.Folder.call(null,props);

break;
case "package":
return portfolio.ui.components.browser.Package.call(null,props);

break;
default:
return portfolio.ui.components.browser.Unit.call(null,props);

}
});
/**
 * 
 */
portfolio.ui.components.browser.Browser = dumdom.core.component.call(null,(function (p__16671){
var map__16672 = p__16671;
var map__16672__$1 = cljs.core.__destructure_map.call(null,map__16672);
var items = cljs.core.get.call(null,map__16672__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return portfolio.ui.components.browser.render_items.call(null,items);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.browser/Browser",new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),portfolio.ui.components.elastic_container.enter.call(null),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),portfolio.ui.components.elastic_container.leave.call(null)], null));
