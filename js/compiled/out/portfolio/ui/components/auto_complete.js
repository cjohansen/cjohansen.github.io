// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.components.auto_complete');
goog.require('cljs.core');
goog.require('dumdom.core');
goog.require('portfolio.ui.components.elastic_container');
goog.require('portfolio.ui.icons');
portfolio.ui.components.auto_complete.render_icon = (function portfolio$ui$components$auto_complete$render_icon(p__15627){
var map__15628 = p__15627;
var map__15628__$1 = cljs.core.__destructure_map.call(null,map__15628);
var icon = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var size = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var actions = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var align = cljs.core.get.call(null,map__15628__$1,new cljs.core.Keyword(null,"align","align",1964212802));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",(function (){var or__5045__auto__ = align;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"left","left",-399115937);
}
})(),(8),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(actions)?"pointer":null),new cljs.core.Keyword(null,"color","color",1011675173),"var(--folder-icon-color)"])], null),portfolio.ui.icons.render_icon.call(null,icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null))], null);
});
/**
 * 
 */
portfolio.ui.components.auto_complete.Suggestions = dumdom.core.component.call(null,(function (p__15629){
var map__15630 = p__15629;
var map__15630__$1 = cljs.core.__destructure_map.call(null,map__15630);
var suggestions = cljs.core.get.call(null,map__15630__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.suggestions","nav.suggestions",-1470072828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 0"], null)], null),(function (){var iter__5523__auto__ = (function portfolio$ui$components$auto_complete$iter__15631(s__15632){
return (new cljs.core.LazySeq(null,(function (){
var s__15632__$1 = s__15632;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__15632__$1);
if(temp__5804__auto__){
var s__15632__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15632__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__15632__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__15634 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__15633 = (0);
while(true){
if((i__15633 < size__5522__auto__)){
var map__15635 = cljs.core._nth.call(null,c__5521__auto__,i__15633);
var map__15635__$1 = cljs.core.__destructure_map.call(null,map__15635);
var illustration = cljs.core.get.call(null,map__15635__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var title = cljs.core.get.call(null,map__15635__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__15635__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var actions = cljs.core.get.call(null,map__15635__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
cljs.core.chunk_append.call(null,b__15634,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hoverable","li.hoverable",63355135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 18px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)], null)):null),title], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--secondary-text)",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 0 0 26px"], null)], null),description], null):null)], null));

var G__15637 = (i__15633 + (1));
i__15633 = G__15637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15634),portfolio$ui$components$auto_complete$iter__15631.call(null,cljs.core.chunk_rest.call(null,s__15632__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15634),null);
}
} else {
var map__15636 = cljs.core.first.call(null,s__15632__$2);
var map__15636__$1 = cljs.core.__destructure_map.call(null,map__15636);
var illustration = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"illustration","illustration",-48860973));
var title = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"title","title",636505583));
var description = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var actions = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hoverable","li.hoverable",63355135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),actions,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 18px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration))?portfolio.ui.icons.render_icon.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(illustration),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(illustration)], null)):null),title], null),(cljs.core.truth_(description)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--secondary-text)",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 0 0 26px"], null)], null),description], null):null)], null),portfolio$ui$components$auto_complete$iter__15631.call(null,cljs.core.rest.call(null,s__15632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,suggestions);
})()], null)], null);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.auto-complete/Suggestions",new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),portfolio.ui.components.elastic_container.enter.call(null),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),portfolio.ui.components.elastic_container.leave.call(null)], null));
/**
 * 
 */
portfolio.ui.components.auto_complete.AutoCompleter = dumdom.core.component.call(null,(function (p__15638){
var map__15639 = p__15638;
var map__15639__$1 = cljs.core.__destructure_map.call(null,map__15639);
var text = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var placeholder = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var icon = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var action = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var on_input = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"on-input","on-input",-267523366));
var suggestions = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.auto-completer","div.auto-completer",-506576802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"transition","transition",765692007),"background 0.15s ease-in",new cljs.core.Keyword(null,"--hover-bg","--hover-bg",-338506224),"var(--shark)",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core.seq.call(null,suggestions))?"var(--auto-complete-active-bg)":"var(--folder-bg)")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(cljs.core.truth_(icon)?portfolio.ui.components.auto_complete.render_icon.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),icon,new cljs.core.Keyword(null,"size","size",1098693007),(24)], null)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--input-inactive-bg)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(12),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(12),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(cljs.core.truth_(icon)?(40):(12)),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(cljs.core.truth_(action)?(40):(12)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4),new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-input","on-input",-267523366),on_input,new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)], null),(cljs.core.truth_(action)?portfolio.ui.components.auto_complete.render_icon.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"right","right",-452581833)], null)):null)], null),((cljs.core.seq.call(null,suggestions))?portfolio.ui.components.auto_complete.Suggestions.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions], null)):null)], null);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"portfolio.ui.components.auto-complete/AutoCompleter"], null));
