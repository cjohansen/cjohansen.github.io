// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.canvas.addons');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('portfolio.ui.canvas.protocols');
goog.require('portfolio.ui.components.canvas_toolbar_buttons');
goog.require('portfolio.ui.layout');
portfolio.ui.canvas.addons.get_tool_id = (function portfolio$ui$canvas$addons$get_tool_id(tool){
var or__5045__auto__ = new cljs.core.Keyword(null,"group-id","group-id",-1316082778).cljs$core$IFn$_invoke$arity$1(tool);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool);
}
});
portfolio.ui.canvas.addons.get_persisted_value = (function portfolio$ui$canvas$addons$get_persisted_value(tool){
try{var G__16936 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(portfolio.ui.canvas.addons.get_tool_id.call(null,tool));
var G__16936__$1 = (((G__16936 == null))?null:localStorage.getItem(G__16936));
var G__16936__$2 = (((G__16936__$1 == null))?null:cljs.core.not_empty.call(null,G__16936__$1));
if((G__16936__$2 == null)){
return null;
} else {
return cljs.reader.read_string.call(null,G__16936__$2);
}
}catch (e16935){var _e = e16935;
return null;
}});
portfolio.ui.canvas.addons.get_default_value = (function portfolio$ui$canvas$addons$get_default_value(tool){
var or__5045__auto__ = (cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool))?portfolio.ui.canvas.addons.get_persisted_value.call(null,tool):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default-value","default-value",232220170).cljs$core$IFn$_invoke$arity$1(tool);
}
});
portfolio.ui.canvas.addons.get_global_value = (function portfolio$ui$canvas$addons$get_global_value(state,tool){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),portfolio.ui.canvas.addons.get_tool_id.call(null,tool),new cljs.core.Keyword(null,"value","value",305978217)], null));
});
portfolio.ui.canvas.addons.get_pane_value = (function portfolio$ui$canvas$addons$get_pane_value(state,tool,pane_id){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,portfolio.ui.canvas.addons.get_tool_id.call(null,tool),new cljs.core.Keyword(null,"value","value",305978217)], null));
});
portfolio.ui.canvas.addons.get_tool_value = (function portfolio$ui$canvas$addons$get_tool_value(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16944 = arguments.length;
var i__5770__auto___16945 = (0);
while(true){
if((i__5770__auto___16945 < len__5769__auto___16944)){
args__5775__auto__.push((arguments[i__5770__auto___16945]));

var G__16946 = (i__5770__auto___16945 + (1));
i__5770__auto___16945 = G__16946;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.canvas.addons.get_tool_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.canvas.addons.get_tool_value.cljs$core$IFn$_invoke$arity$variadic = (function (state,tool,p__16940){
var vec__16941 = p__16940;
var pane_id = cljs.core.nth.call(null,vec__16941,(0),null);
return cljs.core.merge.call(null,portfolio.ui.canvas.addons.get_global_value.call(null,state,tool),(cljs.core.truth_(pane_id)?portfolio.ui.canvas.addons.get_pane_value.call(null,state,tool,pane_id):null));
}));

(portfolio.ui.canvas.addons.get_tool_value.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.canvas.addons.get_tool_value.cljs$lang$applyTo = (function (seq16937){
var G__16938 = cljs.core.first.call(null,seq16937);
var seq16937__$1 = cljs.core.next.call(null,seq16937);
var G__16939 = cljs.core.first.call(null,seq16937__$1);
var seq16937__$2 = cljs.core.next.call(null,seq16937__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16938,G__16939,seq16937__$2);
}));

portfolio.ui.canvas.addons.get_current_value = (function portfolio$ui$canvas$addons$get_current_value(state,tool,p__16947){
var map__16948 = p__16947;
var map__16948__$1 = cljs.core.__destructure_map.call(null,map__16948);
var pane_id = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword(null,"pane-id","pane-id",28980857));
var pane_options = cljs.core.get.call(null,map__16948__$1,new cljs.core.Keyword(null,"pane-options","pane-options",-1713668629));
var or__5045__auto__ = (function (){var temp__5804__auto__ = cljs.core.seq.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool)))));
if(temp__5804__auto__){
var ks = temp__5804__auto__;
return cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,pane_options,ks));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = portfolio.ui.canvas.addons.get_tool_value.call(null,state,tool,pane_id);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return portfolio.ui.canvas.addons.get_default_value.call(null,tool);
}
}
});
portfolio.ui.canvas.addons.get_set_actions = (function portfolio$ui$canvas$addons$get_set_actions(state,tool,pane_id,v){
var id = portfolio.ui.canvas.addons.get_tool_id.call(null,tool);
var global_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"global?","global?",-2022837689).cljs$core$IFn$_invoke$arity$1(tool);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(portfolio.ui.layout.split_screen_QMARK_.call(null,state)));
}
})();
var G__16949 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null),v], null)], null);
var G__16949__$1 = (cljs.core.truth_(global_QMARK_)?cljs.core.conj.call(null,G__16949,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"value","value",305978217)], null),v], null)):G__16949);
if(cljs.core.truth_((function (){var and__5043__auto__ = global_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.call(null,G__16949__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),id,v], null));
} else {
return G__16949__$1;
}
});
portfolio.ui.canvas.addons.get_override_actions = (function portfolio$ui$canvas$addons$get_override_actions(state,tool,v){
var id = portfolio.ui.canvas.addons.get_tool_id.call(null,tool);
return cljs.core.concat.call(null,(function (){var iter__5523__auto__ = (function portfolio$ui$canvas$addons$get_override_actions_$_iter__16950(s__16951){
return (new cljs.core.LazySeq(null,(function (){
var s__16951__$1 = s__16951;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16951__$1);
if(temp__5804__auto__){
var s__16951__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16951__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16951__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16953 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16952 = (0);
while(true){
if((i__16952 < size__5522__auto__)){
var vec__16954 = cljs.core._nth.call(null,c__5521__auto__,i__16952);
var pane_id = cljs.core.nth.call(null,vec__16954,(0),null);
cljs.core.chunk_append.call(null,b__16953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null));

var G__16964 = (i__16952 + (1));
i__16952 = G__16964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16953),portfolio$ui$canvas$addons$get_override_actions_$_iter__16950.call(null,cljs.core.chunk_rest.call(null,s__16951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16953),null);
}
} else {
var vec__16957 = cljs.core.first.call(null,s__16951__$2);
var pane_id = cljs.core.nth.call(null,vec__16957,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null),portfolio$ui$canvas$addons$get_override_actions_$_iter__16950.call(null,cljs.core.rest.call(null,s__16951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.filter.call(null,(function (p__16960){
var vec__16961 = p__16960;
var _ = cljs.core.nth.call(null,vec__16961,(0),null);
var m = cljs.core.nth.call(null,vec__16961,(1),null);
return cljs.core.contains_QMARK_.call(null,m,id);
}),new cljs.core.Keyword(null,"panes","panes",-721909923).cljs$core$IFn$_invoke$arity$1(state)));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"value","value",305978217)], null),v], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),id,v], null)], null):null));
});
portfolio.ui.canvas.addons.get_clear_actions = (function portfolio$ui$canvas$addons$get_clear_actions(state,tool,pane_id){
var id = portfolio.ui.canvas.addons.get_tool_id.call(null,tool);
var global_QMARK_ = (!(portfolio.ui.layout.split_screen_QMARK_.call(null,state)));
var G__16965 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panes","panes",-721909923),pane_id,id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null)], null);
var G__16965__$1 = ((global_QMARK_)?cljs.core.conj.call(null,G__16965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tools","tools",-1241731990),id,new cljs.core.Keyword(null,"value","value",305978217)], null)], null)):G__16965);
if(cljs.core.truth_((function (){var and__5043__auto__ = global_QMARK_;
if(and__5043__auto__){
return new cljs.core.Keyword(null,"persist?","persist?",-1772568760).cljs$core$IFn$_invoke$arity$1(tool);
} else {
return and__5043__auto__;
}
})())){
return cljs.core.conj.call(null,G__16965__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-in-local-storage","save-in-local-storage",1733717684),id,null], null));
} else {
return G__16965__$1;
}
});
portfolio.ui.canvas.addons.get_expand_path = (function portfolio$ui$canvas$addons$get_expand_path(vid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("canvas","tools","canvas/tools",-491389486),vid,new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null);
});
portfolio.ui.canvas.addons.get_custom_tool_source_title = (function portfolio$ui$canvas$addons$get_custom_tool_source_title(p__16966){
var vec__16967 = p__16966;
var source = cljs.core.nth.call(null,vec__16967,(0),null);
var G__16970 = source;
var G__16970__$1 = (((G__16970 instanceof cljs.core.Keyword))?G__16970.fqn:null);
switch (G__16970__$1) {
case "scene":
return "Scene config";

break;
case "collection":
return "Collection config";

break;
case "state-layout":
return "Global config";

break;
case "view":
return "Canvas config";

break;
case "portfolio.ui.layout/gallery-default":
return "Default config (gallery)";

break;
case "portfolio.ui.layout/default":
return "Default config";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16970__$1)].join('')));

}
});
portfolio.ui.canvas.addons.prepare_tool_menu = (function portfolio$ui$canvas$addons$prepare_tool_menu(tool,state,pane){
var current_value = portfolio.ui.canvas.addons.get_current_value.call(null,state,tool,pane);
var custom_options = (cljs.core.truth_((function (){var and__5043__auto__ = current_value;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool))),current_value)));
} else {
return and__5043__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.canvas.addons.get_custom_tool_source_title.call(null,new cljs.core.Keyword(null,"config-source","config-source",-1282385545).cljs$core$IFn$_invoke$arity$1(pane)),new cljs.core.Keyword(null,"value","value",305978217),current_value,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null):null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),(function (){var iter__5523__auto__ = (function portfolio$ui$canvas$addons$prepare_tool_menu_$_iter__16972(s__16973){
return (new cljs.core.LazySeq(null,(function (){
var s__16973__$1 = s__16973;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16973__$1);
if(temp__5804__auto__){
var s__16973__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16973__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__16973__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__16975 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__16974 = (0);
while(true){
if((i__16974 < size__5522__auto__)){
var map__16976 = cljs.core._nth.call(null,c__5521__auto__,i__16974);
var map__16976__$1 = cljs.core.__destructure_map.call(null,map__16976);
var title = cljs.core.get.call(null,map__16976__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__16976__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.get.call(null,map__16976__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
cljs.core.chunk_append.call(null,b__16975,(function (){var selected_QMARK_ = cljs.core._EQ_.call(null,value,current_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_(disabled_QMARK_)?null:cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fn","call","fn/call",-519998786),new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool),value], null):null)], null),cljs.core.concat.call(null,((selected_QMARK_)?portfolio.ui.canvas.addons.get_clear_actions.call(null,state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane)):portfolio.ui.canvas.addons.get_set_actions.call(null,state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),value)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),portfolio.ui.canvas.addons.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane))], null)], null)))))], null);
})());

var G__16978 = (i__16974 + (1));
i__16974 = G__16978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16975),portfolio$ui$canvas$addons$prepare_tool_menu_$_iter__16972.call(null,cljs.core.chunk_rest.call(null,s__16973__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16975),null);
}
} else {
var map__16977 = cljs.core.first.call(null,s__16973__$2);
var map__16977__$1 = cljs.core.__destructure_map.call(null,map__16977);
var title = cljs.core.get.call(null,map__16977__$1,new cljs.core.Keyword(null,"title","title",636505583));
var value = cljs.core.get.call(null,map__16977__$1,new cljs.core.Keyword(null,"value","value",305978217));
var disabled_QMARK_ = cljs.core.get.call(null,map__16977__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return cljs.core.cons.call(null,(function (){var selected_QMARK_ = cljs.core._EQ_.call(null,value,current_value);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"actions","actions",-812656882),(cljs.core.truth_(disabled_QMARK_)?null:cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fn","call","fn/call",-519998786),new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(tool),value], null):null)], null),cljs.core.concat.call(null,((selected_QMARK_)?portfolio.ui.canvas.addons.get_clear_actions.call(null,state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane)):portfolio.ui.canvas.addons.get_set_actions.call(null,state,tool,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane),value)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),portfolio.ui.canvas.addons.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane))], null)], null)))))], null);
})(),portfolio$ui$canvas$addons$prepare_tool_menu_$_iter__16972.call(null,cljs.core.rest.call(null,s__16973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(tool),custom_options));
})()], null);
});
portfolio.ui.canvas.addons.get_tool_title = (function portfolio$ui$canvas$addons$get_tool_title(state,tool,pane){
var or__5045__auto__ = ((cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"prepare-title","prepare-title",-384904958).cljs$core$IFn$_invoke$arity$1(tool)))?(function (){var f = new cljs.core.Keyword(null,"prepare-title","prepare-title",-384904958).cljs$core$IFn$_invoke$arity$1(tool);
return f.call(null,portfolio.ui.canvas.addons.get_current_value.call(null,state,tool,pane));
})():null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(tool);
}
});
portfolio.ui.canvas.addons.prepare_toolbar_menu_button = (function portfolio$ui$canvas$addons$prepare_toolbar_menu_button(tool,state,pane){
var expand_path = portfolio.ui.canvas.addons.get_expand_path.call(null,new cljs.core.Keyword(null,"pane-id","pane-id",28980857).cljs$core$IFn$_invoke$arity$1(pane));
var expanded_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool),cljs.core.get_in.call(null,state,expand_path));
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool))?null:portfolio.ui.canvas.addons.get_tool_title.call(null,state,tool,pane)),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(tool))?portfolio.ui.canvas.addons.get_tool_title.call(null,state,tool,pane):null),new cljs.core.Keyword(null,"actions","actions",-812656882),((expanded_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dissoc-in","dissoc-in",-1889884806),expand_path], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),expand_path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tool)], null)], null)),new cljs.core.Keyword(null,"menu","menu",352255198),((expanded_QMARK_)?portfolio.ui.canvas.addons.prepare_tool_menu.call(null,tool,state,pane):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
});
portfolio.ui.canvas.addons.create_toolbar_menu_button = (function portfolio$ui$canvas$addons$create_toolbar_menu_button(data){
var seq__16979_16983 = cljs.core.seq.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),null], null), null));
var chunk__16980_16984 = null;
var count__16981_16985 = (0);
var i__16982_16986 = (0);
while(true){
if((i__16982_16986 < count__16981_16985)){
var k_16987 = cljs.core._nth.call(null,chunk__16980_16984,i__16982_16986);
if(cljs.core.truth_(k_16987.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar menu button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_16987,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__16988 = seq__16979_16983;
var G__16989 = chunk__16980_16984;
var G__16990 = count__16981_16985;
var G__16991 = (i__16982_16986 + (1));
seq__16979_16983 = G__16988;
chunk__16980_16984 = G__16989;
count__16981_16985 = G__16990;
i__16982_16986 = G__16991;
continue;
} else {
var temp__5804__auto___16992 = cljs.core.seq.call(null,seq__16979_16983);
if(temp__5804__auto___16992){
var seq__16979_16993__$1 = temp__5804__auto___16992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16979_16993__$1)){
var c__5568__auto___16994 = cljs.core.chunk_first.call(null,seq__16979_16993__$1);
var G__16995 = cljs.core.chunk_rest.call(null,seq__16979_16993__$1);
var G__16996 = c__5568__auto___16994;
var G__16997 = cljs.core.count.call(null,c__5568__auto___16994);
var G__16998 = (0);
seq__16979_16983 = G__16995;
chunk__16980_16984 = G__16996;
count__16981_16985 = G__16997;
i__16982_16986 = G__16998;
continue;
} else {
var k_16999 = cljs.core.first.call(null,seq__16979_16993__$1);
if(cljs.core.truth_(k_16999.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar menu button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_16999,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__17000 = cljs.core.next.call(null,seq__16979_16993__$1);
var G__17001 = null;
var G__17002 = (0);
var G__17003 = (0);
seq__16979_16983 = G__17000;
chunk__16980_16984 = G__17001;
count__16981_16985 = G__17002;
i__16982_16986 = G__17003;
continue;
}
} else {
}
}
break;
}

return cljs.core.with_meta.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),new cljs.core.Var(function(){return portfolio.ui.canvas.addons.prepare_toolbar_menu_button;},new cljs.core.Symbol("portfolio.ui.canvas.addons","prepare-toolbar-menu-button","portfolio.ui.canvas.addons/prepare-toolbar-menu-button",1580553987,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.canvas.addons","portfolio.ui.canvas.addons",-683238776,null),new cljs.core.Symbol(null,"prepare-toolbar-menu-button","prepare-toolbar-menu-button",2050463894,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/canvas/addons.cljs",34,1,109,109,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tool","tool",341835057,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"pane","pane",-1060985046,null)], null)),null,(cljs.core.truth_(portfolio.ui.canvas.addons.prepare_toolbar_menu_button)?portfolio.ui.canvas.addons.prepare_toolbar_menu_button.cljs$lang$test:null)])),new cljs.core.Symbol("portfolio.ui.canvas.protocols","get-tool-value","portfolio.ui.canvas.protocols/get-tool-value",732248337,null),(function (tool,state,pane_id){
return portfolio.ui.canvas.addons.get_tool_value.call(null,state,tool,pane_id);
}),new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})(),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})()], null));
});
portfolio.ui.canvas.addons.create_canvas_extension = (function portfolio$ui$canvas$addons$create_canvas_extension(data){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data))){
} else {
throw (new Error(["Assert failed: ","Can't create viewport extension without :id","\n","(:id data)"].join('')));
}

if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
}
})())){
} else {
throw (new Error(["Assert failed: ","Can't create viewport extension without neither :prepare-canvas nor :finalize-canvas","\n","(or (:prepare-canvas data) (:finalize-canvas data))"].join('')));
}

return cljs.core.with_meta.call(null,data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-canvas","portfolio.ui.canvas.protocols/prepare-canvas",-294584957,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})(),new cljs.core.Symbol("portfolio.ui.canvas.protocols","finalize-canvas","portfolio.ui.canvas.protocols/finalize-canvas",468082050,null),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"finalize-canvas","finalize-canvas",1918696852).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (_,___$1,___$2){
return null;
});
}
})()], null));
});
portfolio.ui.canvas.addons.create_action_button = (function portfolio$ui$canvas$addons$create_action_button(data){
var seq__17004_17008 = cljs.core.seq.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-actions","get-actions",396936459),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613),null], null), null));
var chunk__17005_17009 = null;
var count__17006_17010 = (0);
var i__17007_17011 = (0);
while(true){
if((i__17007_17011 < count__17006_17010)){
var k_17012 = cljs.core._nth.call(null,chunk__17005_17009,i__17007_17011);
if(cljs.core.truth_(k_17012.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar action button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_17012,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__17013 = seq__17004_17008;
var G__17014 = chunk__17005_17009;
var G__17015 = count__17006_17010;
var G__17016 = (i__17007_17011 + (1));
seq__17004_17008 = G__17013;
chunk__17005_17009 = G__17014;
count__17006_17010 = G__17015;
i__17007_17011 = G__17016;
continue;
} else {
var temp__5804__auto___17017 = cljs.core.seq.call(null,seq__17004_17008);
if(temp__5804__auto___17017){
var seq__17004_17018__$1 = temp__5804__auto___17017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17004_17018__$1)){
var c__5568__auto___17019 = cljs.core.chunk_first.call(null,seq__17004_17018__$1);
var G__17020 = cljs.core.chunk_rest.call(null,seq__17004_17018__$1);
var G__17021 = c__5568__auto___17019;
var G__17022 = cljs.core.count.call(null,c__5568__auto___17019);
var G__17023 = (0);
seq__17004_17008 = G__17020;
chunk__17005_17009 = G__17021;
count__17006_17010 = G__17022;
i__17007_17011 = G__17023;
continue;
} else {
var k_17024 = cljs.core.first.call(null,seq__17004_17018__$1);
if(cljs.core.truth_(k_17024.call(null,data))){
} else {
throw cljs.core.ex_info.call(null,"Can't create toolbar action button without key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k_17024,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}


var G__17025 = cljs.core.next.call(null,seq__17004_17018__$1);
var G__17026 = null;
var G__17027 = (0);
var G__17028 = (0);
seq__17004_17008 = G__17025;
chunk__17005_17009 = G__17026;
count__17006_17010 = G__17027;
i__17007_17011 = G__17028;
continue;
}
} else {
}
}
break;
}

var show_QMARK_ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
return cljs.core.with_meta.call(null,cljs.core.dissoc.call(null,data,new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"get-actions","get-actions",396936459),new cljs.core.Keyword(null,"prepare-canvas","prepare-canvas",1340591613)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","prepare-toolbar-button","portfolio.ui.canvas.protocols/prepare-toolbar-button",-1774370808,null),(function (tool,state,options){
if(cljs.core.truth_(show_QMARK_.call(null,tool,state,options))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(data))?null:new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"get-actions","get-actions",396936459).cljs$core$IFn$_invoke$arity$1(data).call(null,tool,state,options)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("portfolio.ui.canvas.protocols","render-toolbar-button","portfolio.ui.canvas.protocols/render-toolbar-button",214419771,null),new cljs.core.Var(function(){return portfolio.ui.components.canvas_toolbar_buttons.MenuButton;},new cljs.core.Symbol("portfolio.ui.components.canvas-toolbar-buttons","MenuButton","portfolio.ui.components.canvas-toolbar-buttons/MenuButton",1353896197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"portfolio.ui.components.canvas-toolbar-buttons","portfolio.ui.components.canvas-toolbar-buttons",840330419,null),new cljs.core.Symbol(null,"MenuButton","MenuButton",249681575,null),"/Users/christian/.gitlibs/libs/no.cjohansen/portfolio/7b0b6809bb5ac17a359a1ee06628713657a108f6/src/portfolio/ui/components/canvas_toolbar_buttons.cljs",27,1,7,7,cljs.core.List.EMPTY,"",(cljs.core.truth_(portfolio.ui.components.canvas_toolbar_buttons.MenuButton)?portfolio.ui.components.canvas_toolbar_buttons.MenuButton.cljs$lang$test:null)]))], null));
} else {
return null;
}
})], null));
});
