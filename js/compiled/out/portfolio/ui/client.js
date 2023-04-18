// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dumdom.core');
goog.require('portfolio.homeless');
goog.require('portfolio.ui.actions');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.components.app');
goog.require('portfolio.ui.core');
goog.require('portfolio.ui.css');
goog.require('portfolio.ui.router');
goog.require('portfolio.ui.routes');
portfolio.ui.client.render = (function portfolio$ui$client$render(app,p__17903){
var map__17904 = p__17903;
var map__17904__$1 = cljs.core.__destructure_map.call(null,map__17904);
var on_render = cljs.core.get.call(null,map__17904__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
var state = cljs.core.deref.call(null,app);
var page_data = portfolio.ui.core.prepare_data.call(null,state,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(state));
var app_data = portfolio.ui.actions.actionize_data.call(null,app,page_data);
if(cljs.core.ifn_QMARK_.call(null,on_render)){
on_render.call(null,page_data);
} else {
}

var temp__5802__auto__ = document.getElementById("portfolio");
if(cljs.core.truth_(temp__5802__auto__)){
var el = temp__5802__auto__;
return dumdom.core.render.call(null,portfolio.ui.components.app.App.call(null,app_data),el);
} else {
return console.error("Unable to render portfolio: no element with id \"portfolio\"");
}
});
portfolio.ui.client.a_element = (function portfolio$ui$client$a_element(el){
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
var G__17905 = el__$1.parentNode;
el__$1 = G__17905;
continue;

}
}
break;
}
});
portfolio.ui.client.get_path = (function portfolio$ui$client$get_path(href){
if(cljs.core.truth_(cljs.core.not_empty.call(null,href))){
return href.replace(location.origin,"");
} else {
return null;
}
});
portfolio.ui.client.relay_body_clicks = (function portfolio$ui$client$relay_body_clicks(app,e){
var path = (function (){var G__17906 = e.target;
var G__17906__$1 = (((G__17906 == null))?null:portfolio.ui.client.a_element.call(null,G__17906));
var G__17906__$2 = (((G__17906__$1 == null))?null:G__17906__$1.href);
if((G__17906__$2 == null)){
return null;
} else {
return portfolio.ui.client.get_path.call(null,G__17906__$2);
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

return portfolio.ui.actions.execute_action_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}
} else {
return null;
}
});
portfolio.ui.client.ensure_portfolio_css_BANG_ = (function portfolio$ui$client$ensure_portfolio_css_BANG_(f){
if(cljs.core.not.call(null,document.getElementById("portfolio-css"))){
var el = portfolio.ui.css.create_css_link.call(null,"/portfolio/styles/portfolio.css");
el.addEventListener("load",(function portfolio$ui$client$ensure_portfolio_css_BANG__$_listener(e){
el.removeEventListener("load",portfolio$ui$client$ensure_portfolio_css_BANG__$_listener);

return f.call(null);
}));

return document.head.appendChild(el);
} else {
return f.call(null);
}
});
portfolio.ui.client.ensure_element_BANG_ = (function portfolio$ui$client$ensure_element_BANG_(){
if(cljs.core.truth_(document.getElementById("portfolio"))){
return null;
} else {
var el_17907 = document.createElement("div");
(el_17907.id = "portfolio");

document.body.appendChild(el_17907);

var script = document.createElement("script");
(script.type = "text/javascript");

(script.src = "/portfolio/prism.js");

return document.body.appendChild(script);
}
});
portfolio.ui.client.set_window_size = (function portfolio$ui$client$set_window_size(app){
var dim = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),window.innerWidth,new cljs.core.Keyword(null,"h","h",1109658740),window.innerHeight], null);
return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"win","win",-1624642689),dim);
});
portfolio.ui.client.set_window_size_debounced = portfolio.homeless.debounce.call(null,portfolio.ui.client.set_window_size,(100));
portfolio.ui.client.keep_size_up_to_date = (function portfolio$ui$client$keep_size_up_to_date(app){
portfolio.ui.client.set_window_size.call(null,app);

return (window.onresize = (function (){
return portfolio.ui.client.set_window_size_debounced.call(null,app);
}));
});
portfolio.ui.client.keep_css_files_up_to_date = (function portfolio$ui$client$keep_css_files_up_to_date(app){
if(cljs.core.truth_(new cljs.core.Keyword("portfolio.ui.client","css-listener","portfolio.ui.client/css-listener",1401299013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))){
return null;
} else {
return document.body.addEventListener("figwheel.after-css-load",(function portfolio$ui$client$keep_css_files_up_to_date_$_css_listener(e){
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword("portfolio.ui.client","css-listener","portfolio.ui.client/css-listener",1401299013),portfolio$ui$client$keep_css_files_up_to_date_$_css_listener);

var seq__17909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"css-files","css-files",-502009265).cljs$core$IFn$_invoke$arity$1(e.data));
var chunk__17910 = null;
var count__17911 = (0);
var i__17912 = (0);
while(true){
if((i__17912 < count__17911)){
var file = cljs.core._nth.call(null,chunk__17910,i__17912);
portfolio.ui.css.reload_css_file.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__17909,chunk__17910,count__17911,i__17912,file){
return (function (p1__17908_SHARP_){
return clojure.string.includes_QMARK_.call(null,file,p1__17908_SHARP_);
});})(seq__17909,chunk__17910,count__17911,i__17912,file))
,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))));


var G__17913 = seq__17909;
var G__17914 = chunk__17910;
var G__17915 = count__17911;
var G__17916 = (i__17912 + (1));
seq__17909 = G__17913;
chunk__17910 = G__17914;
count__17911 = G__17915;
i__17912 = G__17916;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__17909);
if(temp__5804__auto__){
var seq__17909__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17909__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__17909__$1);
var G__17917 = cljs.core.chunk_rest.call(null,seq__17909__$1);
var G__17918 = c__5568__auto__;
var G__17919 = cljs.core.count.call(null,c__5568__auto__);
var G__17920 = (0);
seq__17909 = G__17917;
chunk__17910 = G__17918;
count__17911 = G__17919;
i__17912 = G__17920;
continue;
} else {
var file = cljs.core.first.call(null,seq__17909__$1);
portfolio.ui.css.reload_css_file.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__17909,chunk__17910,count__17911,i__17912,file,seq__17909__$1,temp__5804__auto__){
return (function (p1__17908_SHARP_){
return clojure.string.includes_QMARK_.call(null,file,p1__17908_SHARP_);
});})(seq__17909,chunk__17910,count__17911,i__17912,file,seq__17909__$1,temp__5804__auto__))
,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))));


var G__17921 = cljs.core.next.call(null,seq__17909__$1);
var G__17922 = null;
var G__17923 = (0);
var G__17924 = (0);
seq__17909 = G__17921;
chunk__17910 = G__17922;
count__17911 = G__17923;
i__17912 = G__17924;
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
portfolio.ui.client.started_QMARK_ = (function portfolio$ui$client$started_QMARK_(app){
return new cljs.core.Keyword("portfolio.ui.client","started?","portfolio.ui.client/started?",-643918860).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app));
});
portfolio.ui.client.start_app = (function portfolio$ui$client$start_app(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17934 = arguments.length;
var i__5770__auto___17935 = (0);
while(true){
if((i__5770__auto___17935 < len__5769__auto___17934)){
args__5775__auto__.push((arguments[i__5770__auto___17935]));

var G__17936 = (i__5770__auto___17935 + (1));
i__5770__auto___17935 = G__17936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(portfolio.ui.client.start_app.cljs$core$IFn$_invoke$arity$variadic = (function (app,p__17929){
var vec__17930 = p__17929;
var map__17933 = cljs.core.nth.call(null,vec__17930,(0),null);
var map__17933__$1 = cljs.core.__destructure_map.call(null,map__17933);
var on_render = cljs.core.get.call(null,map__17933__$1,new cljs.core.Keyword(null,"on-render","on-render",2096729391));
portfolio.ui.css.load_css_files.call(null,new cljs.core.Keyword(null,"css-paths","css-paths",582305563).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)));

if(cljs.core.truth_(portfolio.ui.client.started_QMARK_.call(null,app))){
portfolio.ui.client.render.call(null,app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
} else {
document.body.addEventListener("click",(function (p1__17925_SHARP_){
return portfolio.ui.client.relay_body_clicks.call(null,app,p1__17925_SHARP_);
}));

portfolio.ui.client.keep_size_up_to_date.call(null,app);

portfolio.ui.client.keep_css_files_up_to_date.call(null,app);

portfolio.ui.client.ensure_element_BANG_.call(null);

portfolio.ui.client.ensure_portfolio_css_BANG_.call(null,(function (){
(window.onpopstate = (function (){
return portfolio.ui.actions.execute_action_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null));
}));

cljs.core.add_tap.call(null,(function (p1__17926_SHARP_){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update,new cljs.core.Keyword(null,"taps","taps",480110748),cljs.core.conj,p1__17926_SHARP_);
}));

cljs.core.add_watch.call(null,app,new cljs.core.Keyword("portfolio.ui.client","render","portfolio.ui.client/render",-1068629999),(function (_,___$1,___$2,___$3){
return portfolio.ui.client.render.call(null,app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),on_render], null));
}));

portfolio.ui.actions.execute_action_BANG_.call(null,app,(((portfolio.ui.collection.get_selection.call(null,cljs.core.deref.call(null,app),portfolio.ui.routes.get_id.call(null,portfolio.ui.router.get_current_location.call(null))) == null))?(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))))));
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-location","go-to-location",-1047138405),cljs.core.dissoc.call(null,portfolio.ui.router.get_current_location.call(null),new cljs.core.Keyword(null,"query-params","query-params",900640534))], null);
}
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-current-location","go-to-current-location",1620881583)], null)));

return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword("portfolio.ui.client","started?","portfolio.ui.client/started?",-643918860),true);
}));
}

return app;
}));

(portfolio.ui.client.start_app.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(portfolio.ui.client.start_app.cljs$lang$applyTo = (function (seq17927){
var G__17928 = cljs.core.first.call(null,seq17927);
var seq17927__$1 = cljs.core.next.call(null,seq17927);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17928,seq17927__$1);
}));

