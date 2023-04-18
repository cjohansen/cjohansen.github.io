// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('dumdom.component');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dumdom.element');
/**
 * When this var is set to `true`, every existing component will re-render on the
 *   next call after a new component has been created, even if the input data has
 *   not changed. This can be useful in development - if you have any level of
 *   indirection in your rendering code (e.g. passing a component function as the
 *   "static arg" to another component, multi-methods, etc), you are not
 *   guaranteed to have all changed components re-render after a compile and hot
 *   swap. With this var set to `true`, changing any code that defines a dumdom
 *   component will cause all components to re-render.
 */
dumdom.component._STAR_render_eagerly_QMARK__STAR_ = false;
/**
 * When this var is set to `true`, an HTML comment block containing the
 *   component's name will be emitted for every named component. Useful
 *   during development to get an overview of which component is responsible
 *   for rendering a given fragment of the DOM.
 */
dumdom.component._STAR_render_comments_QMARK__STAR_ = false;
dumdom.component.eager_render_required_QMARK_ = cljs.core.atom.call(null,false);
dumdom.component.should_component_update_QMARK_ = (function dumdom$component$should_component_update_QMARK_(component_state,data){
var or__5045__auto__ = (!(cljs.core.contains_QMARK_.call(null,component_state,new cljs.core.Keyword(null,"data","data",-232669377))));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_state),data);
if(or__5045__auto____$1){
return or__5045__auto____$1;
} else {
var and__5043__auto__ = dumdom.component._STAR_render_eagerly_QMARK__STAR_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref.call(null,dumdom.component.eager_render_required_QMARK_);
} else {
return and__5043__auto__;
}
}
}
});
dumdom.component.setup_animation_hooks = (function dumdom$component$setup_animation_hooks(rendered,animation,p__14301){
var map__14302 = p__14301;
var map__14302__$1 = cljs.core.__destructure_map.call(null,map__14302);
var will_enter = cljs.core.get.call(null,map__14302__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var will_appear = cljs.core.get.call(null,map__14302__$1,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
if(cljs.core.truth_(will_appear)){
cljs.core.swap_BANG_.call(null,animation,cljs.core.assoc,new cljs.core.Keyword(null,"will-appear","will-appear",579342096),will_appear);
} else {
}

var G__14303 = rendered;
var G__14303__$1 = (cljs.core.truth_(will_enter)?cljs.core.assoc.call(null,G__14303,new cljs.core.Keyword(null,"willEnter","willEnter",-70990441),(function (){
return cljs.core.swap_BANG_.call(null,animation,cljs.core.assoc,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),will_enter);
})):G__14303);
if(cljs.core.truth_(will_appear)){
return cljs.core.assoc.call(null,G__14303__$1,new cljs.core.Keyword(null,"willAppear","willAppear",-1052339861),(function (){
return cljs.core.swap_BANG_.call(null,animation,cljs.core.dissoc,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
}));
} else {
return G__14303__$1;
}
});
dumdom.component.setup_mount_hook = (function dumdom$component$setup_mount_hook(rendered,p__14304,data,args,animation){
var map__14305 = p__14304;
var map__14305__$1 = cljs.core.__destructure_map.call(null,map__14305);
var on_mount = cljs.core.get.call(null,map__14305__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_render = cljs.core.get.call(null,map__14305__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var will_appear = cljs.core.get.call(null,map__14305__$1,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
var did_appear = cljs.core.get.call(null,map__14305__$1,new cljs.core.Keyword(null,"did-appear","did-appear",2048737572));
var will_enter = cljs.core.get.call(null,map__14305__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var did_enter = cljs.core.get.call(null,map__14305__$1,new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189));
var G__14306 = rendered;
if(cljs.core.truth_((function (){var or__5045__auto__ = on_mount;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = on_render;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = will_enter;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return will_appear;
}
}
}
})())){
return cljs.core.update_in.call(null,G__14306,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"insert","insert",1286475395)], null),(function (insert_hook){
return (function (vnode){
if(cljs.core.truth_(insert_hook)){
insert_hook.call(null,vnode);
} else {
}

if(cljs.core.truth_(on_mount)){
cljs.core.apply.call(null,on_mount,vnode.elm,data,args);
} else {
}

if(cljs.core.truth_(on_render)){
cljs.core.apply.call(null,on_render,vnode.elm,data,null,args);
} else {
}

var map__14307 = cljs.core.deref.call(null,animation);
var map__14307__$1 = cljs.core.__destructure_map.call(null,map__14307);
var will_enter__$1 = cljs.core.get.call(null,map__14307__$1,new cljs.core.Keyword(null,"will-enter","will-enter",-692415624));
var will_appear__$1 = cljs.core.get.call(null,map__14307__$1,new cljs.core.Keyword(null,"will-appear","will-appear",579342096));
var temp__5804__auto__ = (function (){var or__5045__auto__ = will_enter__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return will_appear__$1;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var callback = temp__5804__auto__;
cljs.core.swap_BANG_.call(null,animation,cljs.core.assoc,new cljs.core.Keyword(null,"ready?","ready?",-105765697),false);

return cljs.core.apply.call(null,callback,vnode.elm,(function (){
cljs.core.swap_BANG_.call(null,animation,cljs.core.assoc,new cljs.core.Keyword(null,"ready?","ready?",-105765697),true);

var temp__5804__auto____$1 = ((cljs.core._EQ_.call(null,callback,will_enter__$1))?did_enter:did_appear);
if(cljs.core.truth_(temp__5804__auto____$1)){
var completion = temp__5804__auto____$1;
return cljs.core.apply.call(null,completion,vnode.elm,data,args);
} else {
return null;
}
}),data,args);
} else {
return null;
}
});
}));
} else {
return G__14306;
}
});
dumdom.component.setup_update_hook = (function dumdom$component$setup_update_hook(rendered,p__14308,data,old_data,args){
var map__14309 = p__14308;
var map__14309__$1 = cljs.core.__destructure_map.call(null,map__14309);
var on_update = cljs.core.get.call(null,map__14309__$1,new cljs.core.Keyword(null,"on-update","on-update",1680216496));
var on_render = cljs.core.get.call(null,map__14309__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var G__14310 = rendered;
if(cljs.core.truth_((function (){var or__5045__auto__ = on_update;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return on_render;
}
})())){
return cljs.core.assoc_in.call(null,G__14310,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function dumdom$component$setup_update_hook_$_hook(old_vnode,vnode){
if(cljs.core.truth_(dumdom$component$setup_update_hook_$_hook.called)){
return null;
} else {
(dumdom$component$setup_update_hook_$_hook.called = true);

if(cljs.core.truth_(on_update)){
cljs.core.apply.call(null,on_update,vnode.elm,data,old_data,args);
} else {
}

if(cljs.core.truth_(on_render)){
return cljs.core.apply.call(null,on_render,vnode.elm,data,old_data,args);
} else {
return null;
}
}
}));
} else {
return G__14310;
}
});
dumdom.component.setup_unmount_hook = (function dumdom$component$setup_unmount_hook(rendered,component,data,args,animation,on_destroy){
var G__14311 = rendered;
var G__14311__$1 = cljs.core.update_in.call(null,G__14311,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"destroy","destroy",-843660405)], null),(function (destroy_hook){
return (function (vnode){
var temp__5804__auto___14312 = new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__5804__auto___14312)){
var on_unmount_14313 = temp__5804__auto___14312;
cljs.core.apply.call(null,on_unmount_14313,vnode.elm,data,args);
} else {
}

if(cljs.core.truth_(destroy_hook)){
destroy_hook.call(null,vnode);
} else {
}

return on_destroy.call(null);
});
}))
;
if(cljs.core.truth_(new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517).cljs$core$IFn$_invoke$arity$1(component))){
return cljs.core.assoc_in.call(null,G__14311__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"remove","remove",-131428414)], null),(function (vnode,snabbdom_callback){
var callback = (function (){
var temp__5804__auto___14314 = new cljs.core.Keyword(null,"did-leave","did-leave",1577156642).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(temp__5804__auto___14314)){
var did_leave_14315 = temp__5804__auto___14314;
cljs.core.apply.call(null,did_leave_14315,vnode.elm,data,args);
} else {
}

return snabbdom_callback.call(null);
});
if(cljs.core.truth_(new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,animation)))){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517).cljs$core$IFn$_invoke$arity$1(component),vnode.elm,callback,data,args);
} else {
return cljs.core.add_watch.call(null,animation,new cljs.core.Keyword(null,"leave","leave",1022579443),(function (k,r,o,n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"ready?","ready?",-105765697).cljs$core$IFn$_invoke$arity$1(n))){
cljs.core.remove_watch.call(null,animation,new cljs.core.Keyword(null,"leave","leave",1022579443));

return cljs.core.apply.call(null,new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517).cljs$core$IFn$_invoke$arity$1(component),vnode.elm,callback,data,args);
} else {
return null;
}
}));
}
}));
} else {
return G__14311__$1;
}
});
dumdom.component.resolve_key = (function dumdom$component$resolve_key(rendered,component_name,keyfn_key,kmap){
var k = dumdom.element.enumerate_key.call(null,kmap,clojure.string.join.call(null,".",cljs.core.remove.call(null,cljs.core.empty_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_name,cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyfn_key),(function (){var G__14316 = new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376).cljs$core$IFn$_invoke$arity$1(rendered);
if((G__14316 == null)){
return null;
} else {
return cljs.core.first.call(null,G__14316);
}
})()], null))));
return cljs.core.assoc.call(null,rendered,new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376),k,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.join.call(null,".",k));
});
/**
 * Returns a component function that uses the provided function for rendering. The
 *   resulting component will only call through to its rendering function when
 *   called with data that is different from the data that produced the currently
 *   rendered version of the component.
 * 
 *   The rendering function can be called with any number of arguments, but only
 *   the first one will influence rendering decisions. You should call the
 *   component with a single immutable value, followed by any number of other
 *   arguments, as desired. These additional constant arguments are suitable for
 *   passing messaging channels, configuration maps, and other utilities that are
 *   constant for the lifetime of the rendered element.
 * 
 *   The optional opts argument is a map with additional properties:
 * 
 *   :on-mount - A function invoked once, immediately after initial rendering. It
 *   is passed the rendered DOM node, and all arguments passed to the render
 *   function.
 * 
 *   :on-update - A function invoked immediately after an updated is flushed to the
 *   DOM, but not on the initial render. It is passed the underlying DOM node, the
 *   value, and any constant arguments passed to the render function.
 * 
 *   :on-render - A function invoked immediately after the DOM is updated, both on
 *   the initial render and subsequent updates. It is passed the underlying DOM
 *   node, the value, the old value, and any constant arguments passed to the
 *   render function.
 * 
 *   :on-unmount - A function invoked immediately before the component is unmounted
 *   from the DOM. It is passed the underlying DOM node, the most recent value and
 *   the most recent constant args passed to the render fn.
 * 
 *   :will-appear - A function invoked when this component is added to a mounting
 *   container component. Invoked at the same time as :on-mount. It is passed the
 *   underlying DOM node, a callback function, the most recent value and the most
 *   recent constant args passed to the render fn. The callback should be called to
 *   indicate that the element is done "appearing".
 * 
 *   :did-appear - A function invoked immediately after the callback passed
 *   to :will-appear is called. It is passed the underlying DOM node, the most
 *   recent value, and the most recent constant args passed to the render fn.
 * 
 *   :will-enter - A function invoked when this component is added to an already
 *   mounted container component. Invoked at the same time as :on.mount. It is
 *   passed the underlying DOM node, a callback function, the value and any
 *   constant args passed to the render fn. The callback function should be called
 *   to indicate that the element is done entering.
 * 
 *   :did-enter - A function invoked after the callback passed to :will-enter is
 *   called. It is passed the underlying DOM node, the value and any constant args
 *   passed to the render fn.
 * 
 *   :will-leave - A function invoked when this component is removed from its
 *   containing component. Is passed the underlying DOM node, a callback function,
 *   the most recent value and the most recent constant args passed to the render
 *   fn. The DOM node will not be removed until the callback is called.
 * 
 *   :did-leave - A function invoked after the callback passed to :will-leave is
 *   called (at the same time as :on-unmount). Is passed the underlying DOM node,
 *   the most recent value and the most recent constant args passed to the render
 *   fn.
 */
dumdom.component.component = (function dumdom$component$component(var_args){
var G__14318 = arguments.length;
switch (G__14318) {
case 1:
return dumdom.component.component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dumdom.component.component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dumdom.component.component.cljs$core$IFn$_invoke$arity$1 = (function (render){
return dumdom.component.component.call(null,render,cljs.core.PersistentArrayMap.EMPTY);
}));

(dumdom.component.component.cljs$core$IFn$_invoke$arity$2 = (function (render,opt){
if(cljs.core.truth_(dumdom.component._STAR_render_eagerly_QMARK__STAR_)){
cljs.core.reset_BANG_.call(null,dumdom.component.eager_render_required_QMARK_,true);
} else {
}

var instances = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var component_name = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = cljs.core.not_empty.call(null,render.name);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null));
}
}
})();
return (function() { 
var G__14322__delegate = function (data,args){
var comp_fn = (function (path,kmap){
var key = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(temp__5804__auto__)){
var keyfn = temp__5804__auto__;
return keyfn.call(null,data);
} else {
return null;
}
})();
var lookup_key = dumdom.element.enumerate_key.call(null,kmap,key);
var fullpath = cljs.core.conj.call(null,path,lookup_key);
var instance = cljs.core.deref.call(null,instances).call(null,fullpath);
var animation = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ready?","ready?",-105765697),true], null));
if(cljs.core.truth_(dumdom.component.should_component_update_QMARK_.call(null,instance,data))){
var rendered = (function (){var G__14319 = (function (){var temp__5804__auto__ = cljs.core.apply.call(null,render,data,args);
if(cljs.core.truth_(temp__5804__auto__)){
var vdom = temp__5804__auto__;
return dumdom.element.inflate_hiccup.call(null,vdom).call(null,fullpath,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
})();
var G__14319__$1 = (((G__14319 == null))?null:dumdom.component.resolve_key.call(null,G__14319,component_name,key,kmap));
var G__14319__$2 = (((G__14319__$1 == null))?null:cljs.core.assoc.call(null,G__14319__$1,new cljs.core.Keyword("dumdom","render-comments?","dumdom/render-comments?",877432722),dumdom.component._STAR_render_comments_QMARK__STAR_,new cljs.core.Keyword("dumdom","lookup-key","dumdom/lookup-key",234912017),lookup_key));
var G__14319__$3 = (((G__14319__$2 == null))?null:cljs.core.update.call(null,G__14319__$2,new cljs.core.Keyword("dumdom","component-name","dumdom/component-name",19850734),(function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name),(cljs.core.truth_(s)?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):null)].join('');
})));
var G__14319__$4 = (((G__14319__$3 == null))?null:dumdom.component.setup_animation_hooks.call(null,G__14319__$3,animation,opt));
if((G__14319__$4 == null)){
return null;
} else {
return dumdom.component.setup_unmount_hook.call(null,G__14319__$4,opt,data,args,animation,(function (){
return cljs.core.swap_BANG_.call(null,instances,cljs.core.dissoc,fullpath);
}));
}
})();
cljs.core.swap_BANG_.call(null,instances,cljs.core.assoc,fullpath,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vdom","vdom",953162958),rendered,new cljs.core.Keyword(null,"data","data",-232669377),data], null));

var G__14320 = rendered;
var G__14320__$1 = (cljs.core.truth_(rendered)?dumdom.component.setup_mount_hook.call(null,G__14320,opt,data,args,animation):G__14320);
if(cljs.core.truth_((function (){var and__5043__auto__ = rendered;
if(cljs.core.truth_(and__5043__auto__)){
return instance;
} else {
return and__5043__auto__;
}
})())){
return dumdom.component.setup_update_hook.call(null,G__14320__$1,opt,data,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(instance),args);
} else {
return G__14320__$1;
}
} else {
return new cljs.core.Keyword(null,"vdom","vdom",953162958).cljs$core$IFn$_invoke$arity$1(instance);
}
});
(comp_fn.dumdom = true);

return comp_fn;
};
var G__14322 = function (data,var_args){
var args = null;
if (arguments.length > 1) {
var G__14323__i = 0, G__14323__a = new Array(arguments.length -  1);
while (G__14323__i < G__14323__a.length) {G__14323__a[G__14323__i] = arguments[G__14323__i + 1]; ++G__14323__i;}
  args = new cljs.core.IndexedSeq(G__14323__a,0,null);
} 
return G__14322__delegate.call(this,data,args);};
G__14322.cljs$lang$maxFixedArity = 1;
G__14322.cljs$lang$applyTo = (function (arglist__14324){
var data = cljs.core.first(arglist__14324);
var args = cljs.core.rest(arglist__14324);
return G__14322__delegate(data,args);
});
G__14322.cljs$core$IFn$_invoke$arity$variadic = G__14322__delegate;
return G__14322;
})()
;
}));

(dumdom.component.component.cljs$lang$maxFixedArity = 2);

dumdom.component.single_child_QMARK_ = (function dumdom$component$single_child_QMARK_(x){
return ((cljs.core.fn_QMARK_.call(null,x)) || (((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)))));
});
dumdom.component.TransitionGroup = (function dumdom$component$TransitionGroup(el_fn,opt,children){
var children__$1 = ((dumdom.component.single_child_QMARK_.call(null,children))?(new cljs.core.List(null,children,null,(1),null)):cljs.core.seq.call(null,children));
if(cljs.core.ifn_QMARK_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opt))){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opt).call(null,children__$1);
} else {
return cljs.core.apply.call(null,el_fn,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(opt);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "span";
}
})(),opt,children__$1);
}
});
dumdom.component.complete_transition = (function dumdom$component$complete_transition(node,timeout,callback){
if(cljs.core.truth_(timeout)){
return setTimeout(callback,timeout);
} else {
var callback_fn = cljs.core.atom.call(null,null);
var f = (function (){
callback.call(null);

return node.removeEventListener("transitionend",cljs.core.deref.call(null,callback_fn));
});
cljs.core.reset_BANG_.call(null,callback_fn,f);

return node.addEventListener("transitionend",f);
}
});
dumdom.component.transition_classes = (function dumdom$component$transition_classes(transitionName,transition){
if(typeof transitionName === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[transitionName,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition)].join(''),[transitionName,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"-active"].join('')], null);
} else {
var k = cljs.core.keyword.call(null,transition);
var k_active = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"Active"].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k.call(null,transitionName),cljs.core.get.call(null,transitionName,k_active,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k.call(null,transitionName)),"-active"].join(''))], null);
}
});
dumdom.component.animate = (function dumdom$component$animate(transition,p__14325){
var map__14326 = p__14325;
var map__14326__$1 = cljs.core.__destructure_map.call(null,map__14326);
var enabled_by_default_QMARK_ = cljs.core.get.call(null,map__14326__$1,new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851));
var timeout = cljs.core.keyword.call(null,["transition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"Timeout"].join(''));
return (function (node,callback,p__14327){
var map__14328 = p__14327;
var map__14328__$1 = cljs.core.__destructure_map.call(null,map__14328);
var props = map__14328__$1;
var transitionName = cljs.core.get.call(null,map__14328__$1,new cljs.core.Keyword(null,"transitionName","transitionName",-654288740));
if(cljs.core.truth_(cljs.core.get.call(null,props,cljs.core.keyword.call(null,["transition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition)].join('')),enabled_by_default_QMARK_))){
var vec__14329 = dumdom.component.transition_classes.call(null,transitionName,transition.toLowerCase());
var init_class = cljs.core.nth.call(null,vec__14329,(0),null);
var active_class = cljs.core.nth.call(null,vec__14329,(1),null);
node.classList.add(init_class);

dumdom.component.complete_transition.call(null,node,cljs.core.get.call(null,props,timeout),callback);

return setTimeout((function (){
return node.classList.add(active_class);
}),(0));
} else {
return callback.call(null);
}
});
});
dumdom.component.cleanup_animation = (function dumdom$component$cleanup_animation(transition){
return (function (node,p__14332){
var map__14333 = p__14332;
var map__14333__$1 = cljs.core.__destructure_map.call(null,map__14333);
var transitionName = cljs.core.get.call(null,map__14333__$1,new cljs.core.Keyword(null,"transitionName","transitionName",-654288740));
node.classList.remove([cljs.core.str.cljs$core$IFn$_invoke$arity$1(transitionName),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition)].join(''));

return node.classList.remove([cljs.core.str.cljs$core$IFn$_invoke$arity$1(transitionName),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transition),"-active"].join(''));
});
});
dumdom.component.TransitioningElement = dumdom.component.component.call(null,(function (p__14334){
var map__14335 = p__14334;
var map__14335__$1 = cljs.core.__destructure_map.call(null,map__14335);
var child = cljs.core.get.call(null,map__14335__$1,new cljs.core.Keyword(null,"child","child",623967545));
return child;
}),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"will-appear","will-appear",579342096),dumdom.component.animate.call(null,"Appear",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851),false], null)),new cljs.core.Keyword(null,"did-appear","did-appear",2048737572),dumdom.component.cleanup_animation.call(null,"appear"),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),dumdom.component.animate.call(null,"Enter",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851),true], null)),new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189),dumdom.component.cleanup_animation.call(null,"enter"),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),dumdom.component.animate.call(null,"Leave",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled-by-default?","enabled-by-default?",-973479851),true], null))], null));
dumdom.component.CSSTransitionGroup = (function dumdom$component$CSSTransitionGroup(el_fn,opt,children){
var children__$1 = ((dumdom.component.single_child_QMARK_.call(null,children))?(new cljs.core.List(null,children,null,(1),null)):cljs.core.seq.call(null,children));
return dumdom.component.TransitionGroup.call(null,el_fn,opt,cljs.core.map.call(null,(function (p1__14336_SHARP_){
return dumdom.component.TransitioningElement.call(null,cljs.core.assoc.call(null,opt,new cljs.core.Keyword(null,"child","child",623967545),p1__14336_SHARP_));
}),children__$1));
});
dumdom.component.component_QMARK_ = (function dumdom$component$component_QMARK_(x){
var and__5043__auto__ = x;
if(cljs.core.truth_(and__5043__auto__)){
return x.dumdom;
} else {
return and__5043__auto__;
}
});
