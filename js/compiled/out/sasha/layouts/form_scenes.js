// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('sasha.layouts.form_scenes');
goog.require('cljs.core');
goog.require('portfolio.dumdom');
goog.require('sasha.components.form');
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.layouts.form-scenes","form","sasha.layouts.form-scenes/form",-1420133914),new cljs.core.Keyword(null,"line","line",212345235),5,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__17693__delegate = function (___15419__auto__){
return sasha.components.form.Form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"label","label",1718410804),"Name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"label","label",1718410804),"Email"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"phone",new cljs.core.Keyword(null,"label","label",1718410804),"Phone number"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"country",new cljs.core.Keyword(null,"label","label",1718410804),"Country"], null)], null),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Submit",new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY], null)], null));
};
var G__17693 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__17694__i = 0, G__17694__a = new Array(arguments.length -  0);
while (G__17694__i < G__17694__a.length) {G__17694__a[G__17694__i] = arguments[G__17694__i + 0]; ++G__17694__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__17694__a,0,null);
} 
return G__17693__delegate.call(this,___15419__auto__);};
G__17693.cljs$lang$maxFixedArity = 0;
G__17693.cljs$lang$applyTo = (function (arglist__17695){
var ___15419__auto__ = cljs.core.seq(arglist__17695);
return G__17693__delegate(___15419__auto__);
});
G__17693.cljs$core$IFn$_invoke$arity$variadic = G__17693__delegate;
return G__17693;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.layouts.form-scenes","form-with-errors","sasha.layouts.form-scenes/form-with-errors",840585169),new cljs.core.Keyword(null,"line","line",212345235),18,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__17696__delegate = function (___15419__auto__){
return sasha.components.form.Form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"error?","error?",-460689159),true,new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","warning","sasha.icons/warning",-76743093),new cljs.core.Keyword(null,"text","text",-1790561697),"Please enter your name"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"label","label",1718410804),"Email",new cljs.core.Keyword(null,"value","value",305978217),"christian@kodemaker.no"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"phone",new cljs.core.Keyword(null,"label","label",1718410804),"Phone number",new cljs.core.Keyword(null,"value","value",305978217),"+4793417480"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"country",new cljs.core.Keyword(null,"label","label",1718410804),"Country",new cljs.core.Keyword(null,"value","value",305978217),"Norway"], null)], null),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Submit",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY], null)], null));
};
var G__17696 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__17697__i = 0, G__17697__a = new Array(arguments.length -  0);
while (G__17697__i < G__17697__a.length) {G__17697__a[G__17697__i] = arguments[G__17697__i + 0]; ++G__17697__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__17697__a,0,null);
} 
return G__17696__delegate.call(this,___15419__auto__);};
G__17696.cljs$lang$maxFixedArity = 0;
G__17696.cljs$lang$applyTo = (function (arglist__17698){
var ___15419__auto__ = cljs.core.seq(arglist__17698);
return G__17696__delegate(___15419__auto__);
});
G__17696.cljs$core$IFn$_invoke$arity$variadic = G__17696__delegate;
return G__17696;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.layouts.form-scenes","form-processing","sasha.layouts.form-scenes/form-processing",900580465),new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__17699__delegate = function (___15419__auto__){
return sasha.components.form.Form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"name",new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"value","value",305978217),"Christian Johansen",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"email",new cljs.core.Keyword(null,"label","label",1718410804),"Email",new cljs.core.Keyword(null,"value","value",305978217),"christian@kodemaker.no",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"phone",new cljs.core.Keyword(null,"label","label",1718410804),"Phone number",new cljs.core.Keyword(null,"value","value",305978217),"+4793417480",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"country",new cljs.core.Keyword(null,"label","label",1718410804),"Country",new cljs.core.Keyword(null,"value","value",305978217),"Norway",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true], null)], null),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"Submitting, please hold",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),true,new cljs.core.Keyword(null,"spinner?","spinner?",939139177),true,new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.PersistentVector.EMPTY], null)], null));
};
var G__17699 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__17700__i = 0, G__17700__a = new Array(arguments.length -  0);
while (G__17700__i < G__17700__a.length) {G__17700__a[G__17700__i] = arguments[G__17700__i + 0]; ++G__17700__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__17700__a,0,null);
} 
return G__17699__delegate.call(this,___15419__auto__);};
G__17699.cljs$lang$maxFixedArity = 0;
G__17699.cljs$lang$applyTo = (function (arglist__17701){
var ___15419__auto__ = cljs.core.seq(arglist__17701);
return G__17699__delegate(___15419__auto__);
});
G__17699.cljs$core$IFn$_invoke$arity$variadic = G__17699__delegate;
return G__17699;
})()
], null)));
portfolio.data.register_scene_BANG_.call(null,portfolio.dumdom.create_scene.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("sasha.layouts.form-scenes","receipt","sasha.layouts.form-scenes/receipt",-994881588),new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"docs","docs",-1974280502),null,new cljs.core.Keyword(null,"component-fn","component-fn",-266012750),(function() { 
var G__17702__delegate = function (___15419__auto__){
return sasha.components.form.Receipt.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Thanks!",new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("sasha.icons","thumbs-up","sasha.icons/thumbs-up",-490705565),new cljs.core.Keyword(null,"text","text",-1790561697),"Your application is on its way, you'll hear from us shortly.",new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Name",new cljs.core.Keyword(null,"value","value",305978217),"Christian Johansen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Email",new cljs.core.Keyword(null,"value","value",305978217),"christian@kodemaker.no"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Phone number",new cljs.core.Keyword(null,"value","value",305978217),"+4793417480"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Country",new cljs.core.Keyword(null,"value","value",305978217),"Norway"], null)], null)], null));
};
var G__17702 = function (var_args){
var ___15419__auto__ = null;
if (arguments.length > 0) {
var G__17703__i = 0, G__17703__a = new Array(arguments.length -  0);
while (G__17703__i < G__17703__a.length) {G__17703__a[G__17703__i] = arguments[G__17703__i + 0]; ++G__17703__i;}
  ___15419__auto__ = new cljs.core.IndexedSeq(G__17703__a,0,null);
} 
return G__17702__delegate.call(this,___15419__auto__);};
G__17702.cljs$lang$maxFixedArity = 0;
G__17702.cljs$lang$applyTo = (function (arglist__17704){
var ___15419__auto__ = cljs.core.seq(arglist__17704);
return G__17702__delegate(___15419__auto__);
});
G__17702.cljs$core$IFn$_invoke$arity$variadic = G__17702__delegate;
return G__17702;
})()
], null)));
