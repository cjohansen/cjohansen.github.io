// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('dumdom.core');
goog.require('cljs.core');
goog.require('dumdom.component');
goog.require('dumdom.dom');
goog.require('dumdom.element');
goog.require('dumdom.string');
/**
 * A mapping from root DOM nodes to currently rendered virtual DOM trees. Used to
 *   reconcile (render component dom-node) to (patch old-vdom new-vdom)
 */
dumdom.core.current_nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * A counter used to assign unique ids to root elements
 */
dumdom.core.element_id = cljs.core.atom.call(null,(-1));
/**
 * The snabbdom patch function used by render
 */
dumdom.core.patch = snabbdom.init([snabbdom.eventListenersModule,snabbdom.attributesModule,snabbdom.propsModule,snabbdom.styleModule,snabbdom.datasetModule]);
dumdom.core.set_root_id = (function dumdom$core$set_root_id(element){
return (element.dataset.dumdomId = cljs.core.swap_BANG_.call(null,dumdom.core.element_id,cljs.core.inc));
});
dumdom.core.root_node = (function dumdom$core$root_node(element){
return cljs.core.deref.call(null,dumdom.core.current_nodes).call(null,element.dataset.dumdomId);
});
dumdom.core.register_vnode = (function dumdom$core$register_vnode(element_id,vnode){
return cljs.core.swap_BANG_.call(null,dumdom.core.current_nodes,cljs.core.assoc,element_id,vnode);
});
dumdom.core.unregister_vnode = (function dumdom$core$unregister_vnode(element_id){
return cljs.core.swap_BANG_.call(null,dumdom.core.current_nodes,cljs.core.dissoc,element_id);
});
/**
 * Snabbdom will replace the element provided as the original target for patch.
 *   When rendering into a new DOM node, we therefore create an intermediate in it
 *   and use that as Snabbdom's root, to avoid destroying the provided root node.
 */
dumdom.core.init_node_BANG_ = (function dumdom$core$init_node_BANG_(element){
(element.innerHTML = "<div></div>");

dumdom.core.set_root_id.call(null,element);

return element.firstElementChild;
});
dumdom.core.purge_BANG_ = (function dumdom$core$purge_BANG_(){
return cljs.core.reset_BANG_.call(null,dumdom.core.current_nodes,cljs.core.PersistentArrayMap.EMPTY);
});
dumdom.core.create_vdom = (function dumdom$core$create_vdom(component,element_id,p__14025){
var map__14026 = p__14025;
var map__14026__$1 = cljs.core.__destructure_map.call(null,map__14026);
var handle_event = cljs.core.get.call(null,map__14026__$1,new cljs.core.Keyword(null,"handle-event","handle-event",2098778308));
var temp__5804__auto__ = dumdom.element.inflate_hiccup.call(null,component);
if(cljs.core.truth_(temp__5804__auto__)){
var component__$1 = temp__5804__auto__;
var _STAR_handle_event_STAR__orig_val__14027 = dumdom.element._STAR_handle_event_STAR_;
var _STAR_handle_event_STAR__temp_val__14028 = (function (){var or__5045__auto__ = handle_event;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dumdom.element._STAR_handle_event_STAR_;
}
})();
(dumdom.element._STAR_handle_event_STAR_ = _STAR_handle_event_STAR__temp_val__14028);

try{var G__14029 = component__$1.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [element_id], null),cljs.core.PersistentArrayMap.EMPTY);
if((G__14029 == null)){
return null;
} else {
return cljs.core.clj__GT_js.call(null,G__14029);
}
}finally {(dumdom.element._STAR_handle_event_STAR_ = _STAR_handle_event_STAR__orig_val__14027);
}} else {
return null;
}
});
dumdom.core.set_event_handler_BANG_ = (function dumdom$core$set_event_handler_BANG_(f){
if(cljs.core.truth_((function (){var and__5043__auto__ = f;
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.ifn_QMARK_.call(null,f)));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Event handler must be a function",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
} else {
}

return (dumdom.element._STAR_handle_event_STAR_ = f);
});
/**
 * Dispatch
 */
dumdom.core.dispatch_event_data = (function dumdom$core$dispatch_event_data(e,data){
if(cljs.core.truth_(dumdom.element._STAR_handle_event_STAR_)){
return dumdom.element._STAR_handle_event_STAR_.call(null,e,data);
} else {
throw (new Error("Cannot dispatch custom event data without a global event handler. Call dumdom.core/set-event-handler!"));
}
});
/**
 * Render the virtual DOM node created by the component into the specified DOM
 *   element, and mount it for fast future re-renders.
 */
dumdom.core.render = (function dumdom$core$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14037 = arguments.length;
var i__5770__auto___14038 = (0);
while(true){
if((i__5770__auto___14038 < len__5769__auto___14037)){
args__5775__auto__.push((arguments[i__5770__auto___14038]));

var G__14039 = (i__5770__auto___14038 + (1));
i__5770__auto___14038 = G__14039;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.core.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.core.render.cljs$core$IFn$_invoke$arity$variadic = (function (component,element,p__14033){
var vec__14034 = p__14033;
var opt = cljs.core.nth.call(null,vec__14034,(0),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt))));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Called dumdom.core/render with a handle-event that is not a function",opt);
} else {
}

var current_node = (function (){var or__5045__auto__ = dumdom.core.root_node.call(null,element);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return dumdom.core.init_node_BANG_.call(null,element);
}
})();
var element_id = element.dataset.dumdomId;
var temp__5802__auto___14040 = dumdom.core.create_vdom.call(null,component,element_id,opt);
if(cljs.core.truth_(temp__5802__auto___14040)){
var vnode_14041 = temp__5802__auto___14040;
if(cljs.core.truth_(vnode_14041.key)){
} else {
(vnode_14041.key = "root-node");
}

dumdom.core.patch.call(null,current_node,vnode_14041);

dumdom.core.register_vnode.call(null,element_id,vnode_14041);
} else {
(element.innerHTML = "");

dumdom.core.unregister_vnode.call(null,element_id);
}

if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
return cljs.core.reset_BANG_.call(null,dumdom.component.eager_render_required_QMARK_,false);
} else {
return null;
}
}));

(dumdom.core.render.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.core.render.cljs$lang$applyTo = (function (seq14030){
var G__14031 = cljs.core.first.call(null,seq14030);
var seq14030__$1 = cljs.core.next.call(null,seq14030);
var G__14032 = cljs.core.first.call(null,seq14030__$1);
var seq14030__$2 = cljs.core.next.call(null,seq14030__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14031,G__14032,seq14030__$2);
}));

/**
 * Like render, but without mounting the element for future updates. This should
 *   only be used when you don't expect to re-render the component into the same
 *   element. Subsequent calls to render into the same element will always cause a
 *   full rebuild of the DOM. This function does not acumulate state.
 */
dumdom.core.render_once = (function dumdom$core$render_once(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14049 = arguments.length;
var i__5770__auto___14050 = (0);
while(true){
if((i__5770__auto___14050 < len__5769__auto___14049)){
args__5775__auto__.push((arguments[i__5770__auto___14050]));

var G__14051 = (i__5770__auto___14050 + (1));
i__5770__auto___14050 = G__14051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.core.render_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.core.render_once.cljs$core$IFn$_invoke$arity$variadic = (function (component,element,p__14045){
var vec__14046 = p__14045;
var opt = cljs.core.nth.call(null,vec__14046,(0),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"handle-event","handle-event",2098778308).cljs$core$IFn$_invoke$arity$1(opt))));
} else {
return and__5043__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Called dumdom.core/render-once with a handle-event that is not a function",opt);
} else {
}

var current_node = dumdom.core.init_node_BANG_.call(null,element);
var element_id = element.dataset.dumdomId;
var temp__5804__auto___14052 = dumdom.core.create_vdom.call(null,component,element_id,opt);
if(cljs.core.truth_(temp__5804__auto___14052)){
var vnode_14053 = temp__5804__auto___14052;
dumdom.core.patch.call(null,current_node,vnode_14053);
} else {
}

if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
return cljs.core.reset_BANG_.call(null,dumdom.component.eager_render_required_QMARK_,false);
} else {
return null;
}
}));

(dumdom.core.render_once.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.core.render_once.cljs$lang$applyTo = (function (seq14042){
var G__14043 = cljs.core.first.call(null,seq14042);
var seq14042__$1 = cljs.core.next.call(null,seq14042);
var G__14044 = cljs.core.first.call(null,seq14042__$1);
var seq14042__$2 = cljs.core.next.call(null,seq14042__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14043,G__14044,seq14042__$2);
}));

/**
 * Unmount an element previously mounted by dumdom.core/render
 */
dumdom.core.unmount = (function dumdom$core$unmount(element){
return dumdom.core.unregister_vnode.call(null,element.dataset.dumdomId);
});
dumdom.core.component = dumdom.component.component;
dumdom.core.component_QMARK_ = dumdom.component.component_QMARK_;
dumdom.core.render_string = dumdom.string.render;
dumdom.core.TransitionGroup = (function dumdom$core$TransitionGroup(opt,children){
return dumdom.component.TransitionGroup.call(null,dumdom.dom.el,opt,children);
});
dumdom.core.CSSTransitionGroup = (function dumdom$core$CSSTransitionGroup(opt,children){
return dumdom.component.CSSTransitionGroup.call(null,dumdom.dom.el,opt,children);
});
