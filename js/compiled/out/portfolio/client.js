// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dumdom.core');
goog.require('portfolio.actions');
goog.require('portfolio.components.app');
goog.require('portfolio.core');
goog.require('portfolio.css');
goog.require('portfolio.homeless');
goog.require('portfolio.router');
portfolio.client.render = (function portfolio$client$render(app,p__12691){
var map__12692 = p__12691;
var map__12692__$1 = cljs.core.__destructure_map.call(null,map__12692);
var on_render = cljs.core.get.call(null,map__12692__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var state = cljs.core.deref.call(null,app);
var page_data = portfolio.core.prepare_data.call(null,state,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var app_data = portfolio.actions.actionize_data.call(null,app,page_data);
if(cljs.core.ifn_QMARK_.call(null,on_render)){
on_render.call(null,page_data);
} else {
}

var temp__5802__auto__ = document.getElementById("portfolio");
if(cljs.core.truth_(temp__5802__auto__)){
var el = temp__5802__auto__;
return dumdom.core.render.call(null,portfolio.components.app.App.call(null,app_data),el);
} else {
return console.error("Unable to render portfolio: no element with id \"portfolio\"");
}
});
portfolio.client.a_element = (function portfolio$client$a_element(el){
var el__$1 = el;
while(true){
if((el__$1 == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = el__$1.href;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,"A",el__$1.tagName);
} else {
return and__5043__auto__;
}
})())){
return el__$1;
} else {
var G__12693 = el__$1.parentNode;
el__$1 = G__12693;
continue;

}
}
break;
}
});
portfolio.client.get_path = (function portfolio$client$get_path(href){
if(cljs.core.truth_(cljs.core.not_empty.call(null,href))){
return href.replace(location.origin,"");
} else {
return null;
}
});
portfolio.client.relay_body_clicks = (function portfolio$client$relay_body_clicks(app,e){
var path = (function (){var G__12694 = e.target;
var G__12694__$1 = (((G__12694 == null))?null:portfolio.client.a_element.call(null,G__12694));
var G__12694__$2 = (((G__12694__$1 == null))?null:G__12694__$1.href);
if((G__12694__$2 == null)){
return null;
} else {
return portfolio.client.get_path.call(null,G__12694__$2);
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = path;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.re_find.call(null,/^\//,path);
} else {
return and__5043__auto__;
}
})())){
e.preventDefault();

if(cljs.core.truth_((function (){var or__5045__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.metaKey;
}
})())){
return window.open(path,"_blank");
} else {
history.pushState(false,false,path);

return portfolio.actions.execute_action_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}
} else {
return null;
}
});
portfolio.client.ensure_portfolio_css_BANG_ = (function portfolio$client$ensure_portfolio_css_BANG_(f){
if(cljs.core.not.call(null,document.getElementById("portfolio-css"))){
var el = portfolio.css.create_css_link.call(null,"/portfolio/styles/portfolio.css");
el.addEventListener("load",(function portfolio$client$ensure_portfolio_css_BANG__$_listener(e){
el.removeEventListener("load",portfolio$client$ensure_portfolio_css_BANG__$_listener);

return f.call(null);
}));

return document.head.appendChild(el);
} else {
return f.call(null);
}
});
portfolio.client.ensure_element_BANG_ = (function portfolio$client$ensure_element_BANG_(){
if(cljs.core.truth_(document.getElementById("portfolio"))){
return null;
} else {
var el_12695 = document.createElement("div");
(el_12695.id = "portfolio");

document.body.appendChild(el_12695);

var script = document.createElement("script");
(script.type = "text/javascript");

(script.src = "/portfolio/prism.js");

return document.body.appendChild(script);
}
});
portfolio.client.set_window_size = (function portfolio$client$set_window_size(app){
var dim = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight], null);
return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"win","win",-1624642689),dim);
});
portfolio.client.set_window_size_debounced = portfolio.homeless.debounce.call(null,portfolio.client.set_window_size,(100));
portfolio.client.keep_size_up_to_date = (function portfolio$client$keep_size_up_to_date(app){
portfolio.client.set_window_size.call(null,app);

return (window.onresize = (function (){
return portfolio.client.set_window_size_debounced.call(null,app);
}));
});
portfolio.client.keep_css_files_up_to_date = (function portfolio$client$keep_css_files_up_to_date(app){
if(cljs.core.truth_(new cljs.core.Keyword("portfolio.client","css-listener","portfolio.client/css-listener",570337463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))){
return null;
} else {
return document.body.addEventListener("figwheel.after-css-load",(function portfolio$client$keep_css_files_up_to_date_$_css_listener(e){
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword("portfolio.client","css-listener","portfolio.client/css-listener",570337463),portfolio$client$keep_css_files_up_to_date_$_css_listener);

var seq__12697 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-files","css-files",-502009265).cljs$core$IFn$_invoke$arity$1(e.data));
var chunk__12698 = null;
var count__12699 = (0);
var i__12700 = (0);
while(true){
if((i__12700 < count__12699)){
var file = cljs.core._nth.call(null,chunk__12698,i__12700);
portfolio.css.reload_css_file.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__12697,chunk__12698,count__12699,i__12700,file){
return (function (p1__12696_SHARP_){
return clojure.string.includes_QMARK_.call(null,file,p1__12696_SHARP_);
});})(seq__12697,chunk__12698,count__12699,i__12700,file))
,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))));


var G__12701 = seq__12697;
var G__12702 = chunk__12698;
var G__12703 = count__12699;
var G__12704 = (i__12700 + (1));
seq__12697 = G__12701;
chunk__12698 = G__12702;
count__12699 = G__12703;
i__12700 = G__12704;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12697);
if(temp__5804__auto__){
var seq__12697__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12697__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12697__$1);
var G__12705 = cljs.core.chunk_rest.call(null,seq__12697__$1);
var G__12706 = c__5568__auto__;
var G__12707 = cljs.core.count.call(null,c__5568__auto__);
var G__12708 = (0);
seq__12697 = G__12705;
chunk__12698 = G__12706;
count__12699 = G__12707;
i__12700 = G__12708;
continue;
} else {
var file = cljs.core.first.call(null,seq__12697__$1);
portfolio.css.reload_css_file.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__12697,chunk__12698,count__12699,i__12700,file,seq__12697__$1,temp__5804__auto__){
return (function (p1__12696_SHARP_){
return clojure.string.includes_QMARK_.call(null,file,p1__12696_SHARP_);
});})(seq__12697,chunk__12698,count__12699,i__12700,file,seq__12697__$1,temp__5804__auto__))
,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))));


var G__12709 = cljs.core.next.call(null,seq__12697__$1);
var G__12710 = null;
var G__12711 = (0);
var G__12712 = (0);
seq__12697 = G__12709;
chunk__12698 = G__12710;
count__12699 = G__12711;
i__12700 = G__12712;
continue;
}
} else {
return null;
}
}
break;
}
}));
}
});
portfolio.client.start_app = (function portfolio$client$start_app(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12722 = arguments.length;
var i__5770__auto___12723 = (0);
while(true){
if((i__5770__auto___12723 < len__5769__auto___12722)){
args__5775__auto__.push((arguments[i__5770__auto___12723]));

var G__12724 = (i__5770__auto___12723 + (1));
i__5770__auto___12723 = G__12724;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.client.start_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.client.start_app.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__12717){
var vec__12718 = p__12717;
var map__12721 = cljs.core.nth.call(null,vec__12718,(0),null);
var map__12721__$1 = cljs.core.__destructure_map.call(null,map__12721);
var on_render = cljs.core.get.call(null,map__12721__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
portfolio.css.load_css_files.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)));

if(cljs.core.truth_(new cljs.core.Keyword("portfolio.client","started?","portfolio.client/started?",-1423635518).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))){
portfolio.client.render.call(null,app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
} else {
document.body.addEventListener("click",(function (p1__12713_SHARP_){
return portfolio.client.relay_body_clicks.call(null,app,p1__12713_SHARP_);
}));

portfolio.client.keep_size_up_to_date.call(null,app);

portfolio.client.keep_css_files_up_to_date.call(null,app);

portfolio.client.ensure_element_BANG_.call(null);

portfolio.client.ensure_portfolio_css_BANG_.call(null,(function (){
(window.onpopstate = (function (){
return portfolio.actions.execute_action_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_tap.call(null,(function (p1__12714_SHARP_){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"taps","taps",480110748),cljs.core.conj,p1__12714_SHARP_);
}));

cljs.core.add_watch.call(null,app,new cljs.core.Keyword("portfolio.client","render","portfolio.client/render",-1813739513),(function (_,___$1,___$2,___$3){
return portfolio.client.render.call(null,app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
}));

portfolio.actions.execute_action_BANG_.call(null,app,((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(portfolio.router.get_current_location.call(null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))))))], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null)));

return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword("portfolio.client","started?","portfolio.client/started?",-1423635518),true);
}));
}

return app;
}));

(portfolio.client.start_app.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.client.start_app.cljs$lang$applyTo = (function (seq12715){
var G__12716 = cljs.core.first.call(null,seq12715);
var seq12715__$1 = cljs.core.next.call(null,seq12715);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12716,seq12715__$1);
}));

