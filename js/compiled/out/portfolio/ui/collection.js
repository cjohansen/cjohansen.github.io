// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.collection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('portfolio.homeless');
goog.require('portfolio.ui.routes');
portfolio.ui.collection.by_parent_id = (function portfolio$ui$collection$by_parent_id(parent_id){
return (function (p1__17320_SHARP_){
return cljs.core._EQ_.call(null,parent_id,new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(p1__17320_SHARP_));
});
});
portfolio.ui.collection.ns__GT_path = (function portfolio$ui$collection$ns__GT_path(ns){
return clojure.string.split.call(null,ns,/\./);
});
portfolio.ui.collection.path__GT_id = (function portfolio$ui$collection$path__GT_id(path){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",path));
});
portfolio.ui.collection.get_collection_title = (function portfolio$ui$collection$get_collection_title(s){
var G__17321 = (((s instanceof cljs.core.Keyword))?cljs.core.name.call(null,s):s);
var G__17321__$1 = (((G__17321 == null))?null:clojure.string.split.call(null,G__17321,/\./));
var G__17321__$2 = (((G__17321__$1 == null))?null:cljs.core.last.call(null,G__17321__$1));
if((G__17321__$2 == null)){
return null;
} else {
return portfolio.homeless.title_case.call(null,G__17321__$2);
}
});
portfolio.ui.collection.suggest_packages = (function portfolio$ui$collection$suggest_packages(scenes){
return cljs.core.map.call(null,(function (path){
var id = portfolio.ui.collection.path__GT_id.call(null,path);
var G__17323 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.collection.get_collection_title.call(null,cljs.core.last.call(null,path)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"package","package",1189062786)], null);
if(((1) < cljs.core.count.call(null,path))){
return cljs.core.assoc.call(null,G__17323,new cljs.core.Keyword(null,"collection","collection",-683361892),portfolio.ui.collection.path__GT_id.call(null,cljs.core.drop_last.call(null,(1),path)));
} else {
return G__17323;
}
}),cljs.core.map.call(null,portfolio.ui.collection.ns__GT_path,cljs.core.map.call(null,(function (p1__17322_SHARP_){
var or__5045__auto__ = (function (){var G__17324 = p1__17322_SHARP_;
var G__17324__$1 = (((G__17324 == null))?null:new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(G__17324));
if((G__17324__$1 == null)){
return null;
} else {
return cljs.core.name.call(null,G__17324__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.namespace.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17322_SHARP_));
}
}),scenes)));
});
portfolio.ui.collection.ensure_defaults = (function portfolio$ui$collection$ensure_defaults(collection,scenes){
var G__17325 = collection;
var G__17325__$1 = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection)))?cljs.core.assoc.call(null,G__17325,new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.collection.get_collection_title.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection))):G__17325);
if((new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(collection) == null)){
return cljs.core.assoc.call(null,G__17325__$1,new cljs.core.Keyword(null,"kind","kind",-717265803),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection)]),new cljs.core.Keyword(null,"collection","collection",-683361892)),scenes))?new cljs.core.Keyword(null,"package","package",1189062786):new cljs.core.Keyword(null,"folder","folder",1515881736)));
} else {
return G__17325__$1;
}
});
portfolio.ui.collection.get_default_organization = (function portfolio$ui$collection$get_default_organization(scenes,collections){
var existing = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),collections));
var packages = (function (){var iter__5523__auto__ = (function portfolio$ui$collection$get_default_organization_$_iter__17329(s__17330){
return (new cljs.core.LazySeq(null,(function (){
var s__17330__$1 = s__17330;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17330__$1);
if(temp__5804__auto__){
var s__17330__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17330__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17330__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17332 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17331 = (0);
while(true){
if((i__17331 < size__5522__auto__)){
var pkg = cljs.core._nth.call(null,c__5521__auto__,i__17331);
cljs.core.chunk_append.call(null,b__17332,cljs.core.merge.call(null,pkg,cljs.core.get.call(null,existing,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pkg))));

var G__17333 = (i__17331 + (1));
i__17331 = G__17333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17332),portfolio$ui$collection$get_default_organization_$_iter__17329.call(null,cljs.core.chunk_rest.call(null,s__17330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17332),null);
}
} else {
var pkg = cljs.core.first.call(null,s__17330__$2);
return cljs.core.cons.call(null,cljs.core.merge.call(null,pkg,cljs.core.get.call(null,existing,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pkg))),portfolio$ui$collection$get_default_organization_$_iter__17329.call(null,cljs.core.rest.call(null,s__17330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,portfolio.ui.collection.suggest_packages.call(null,scenes));
})();
var folders = cljs.core.map.call(null,(function (id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),portfolio.ui.collection.get_collection_title.call(null,id),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"folder","folder",1515881736)], null);
}),cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),packages)));
var configured_folders = cljs.core.filter.call(null,existing,cljs.core.keep.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),packages));
var folder_n = cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),folders),configured_folders)));
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__17328_SHARP_){
return portfolio.ui.collection.ensure_defaults.call(null,p1__17328_SHARP_,scenes);
}),cljs.core.map.call(null,(function (p1__17327_SHARP_){
return cljs.core.merge.call(null,p1__17327_SHARP_,cljs.core.get.call(null,existing,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17327_SHARP_)));
}),((((((1) < folder_n)) || (cljs.core.seq.call(null,configured_folders))))?cljs.core.concat.call(null,packages,folders):cljs.core.map.call(null,(function (p1__17326_SHARP_){
return cljs.core.dissoc.call(null,p1__17326_SHARP_,new cljs.core.Keyword(null,"collection","collection",-683361892));
}),packages)))));
});
portfolio.ui.collection.get_collection_path = (function portfolio$ui$collection$get_collection_path(p__17334,id){
var map__17335 = p__17334;
var map__17335__$1 = cljs.core.__destructure_map.call(null,map__17335);
var scenes = cljs.core.get.call(null,map__17335__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var collections = cljs.core.get.call(null,map__17335__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var target = (function (){var or__5045__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,scenes)));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,collections)));
}
})();
var res = (cljs.core.truth_(target)?(new cljs.core.List(null,target,null,(1),null)):cljs.core.List.EMPTY);
while(true){
var parent_id = new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,res));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent_id;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([parent_id]),new cljs.core.Keyword(null,"id","id",-1388402092)),res));
} else {
return and__5043__auto__;
}
})())){
var G__17336 = cljs.core.conj.call(null,res,cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([parent_id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,collections))));
res = G__17336;
continue;
} else {
return res;
}
break;
}
});
portfolio.ui.collection.get_collection_scenes = (function portfolio$ui$collection$get_collection_scenes(p__17337,ids){
var map__17338 = p__17337;
var map__17338__$1 = cljs.core.__destructure_map.call(null,map__17338);
var collections = cljs.core.get.call(null,map__17338__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var scenes = cljs.core.get.call(null,map__17338__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var res = cljs.core.PersistentVector.EMPTY;
var ids__$1 = cljs.core.set.call(null,ids);
while(true){
if(cljs.core.seq.call(null,ids__$1)){
var G__17339 = cljs.core.concat.call(null,res,cljs.core.filter.call(null,cljs.core.comp.call(null,ids__$1,new cljs.core.Keyword(null,"collection","collection",-683361892)),cljs.core.vals.call(null,scenes)));
var G__17340 = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,cljs.core.comp.call(null,ids__$1,new cljs.core.Keyword(null,"collection","collection",-683361892)),cljs.core.vals.call(null,collections))));
res = G__17339;
ids__$1 = G__17340;
continue;
} else {
return res;
}
break;
}
});
portfolio.ui.collection.get_selected_scenes = (function portfolio$ui$collection$get_selected_scenes(p__17341,id){
var map__17342 = p__17341;
var map__17342__$1 = cljs.core.__destructure_map.call(null,map__17342);
var state = map__17342__$1;
var scenes = cljs.core.get.call(null,map__17342__$1,new cljs.core.Keyword(null,"scenes","scenes",-425219404));
var or__5045__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,scenes)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return portfolio.ui.collection.get_collection_scenes.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}
});
portfolio.ui.collection.get_selection = (function portfolio$ui$collection$get_selection(state,id){
var scene = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))));
var target = (function (){var or__5045__auto__ = scene;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state))));
}
})();
if(cljs.core.truth_(target)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scenes","scenes",-425219404),portfolio.ui.collection.get_selected_scenes.call(null,state,id),new cljs.core.Keyword(null,"kind","kind",-717265803),(cljs.core.truth_(scene)?new cljs.core.Keyword(null,"scene","scene",1523800415):new cljs.core.Keyword(null,"collection","collection",-683361892)),new cljs.core.Keyword(null,"path","path",-188191168),portfolio.ui.collection.get_collection_path.call(null,state,id),new cljs.core.Keyword(null,"target","target",253001721),target], null);
} else {
return null;
}
});
portfolio.ui.collection.by_id = (function portfolio$ui$collection$by_id(state,id){
var or__5045__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([id]),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state))));
}
});
portfolio.ui.collection.get_sort_key = (function portfolio$ui$collection$get_sort_key(collection){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$2(collection,(999999999)),(function (){var or__5045__auto__ = (function (){var G__17343 = collection;
var G__17343__$1 = (((G__17343 == null))?null:new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__17343));
if((G__17343__$1 == null)){
return null;
} else {
return clojure.string.lower_case.call(null,G__17343__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__17344 = collection;
var G__17344__$1 = (((G__17344 == null))?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__17344));
if((G__17344__$1 == null)){
return null;
} else {
return cljs.core.name.call(null,G__17344__$1);
}
}
})()], null);
});
/**
 * Look for key `k` in map `m`. If not present, traverse collection hierarchy via
 *   `:collection` and look in the parent collection. If the key is not found in
 *   any parent, finally try the `state`.
 */
portfolio.ui.collection.get_in_parents = (function portfolio$ui$collection$get_in_parents(state,m,k){
var m__$1 = m;
while(true){
var or__5045__auto__ = cljs.core.get.call(null,m__$1,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var id = temp__5802__auto__;
var G__17345 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),id], null));
m__$1 = G__17345;
continue;
} else {
return cljs.core.get.call(null,state,k);
}
}
break;
}
});
portfolio.ui.collection.get_folder_illustration = (function portfolio$ui$collection$get_folder_illustration(state,collection,expanded_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon","expanded-icon",-230268495).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon","collapsed-icon",-874318333).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(expanded_QMARK_)?portfolio.ui.collection.get_in_parents.call(null,state,collection,new cljs.core.Keyword(null,"default-folder-expanded-icon","default-folder-expanded-icon",1716940208)):portfolio.ui.collection.get_in_parents.call(null,state,collection,new cljs.core.Keyword(null,"default-folder-collapsed-icon","default-folder-collapsed-icon",1590027459)));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = portfolio.ui.collection.get_in_parents.call(null,state,collection,new cljs.core.Keyword(null,"default-folder-icon","default-folder-icon",-1368802029));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
if(cljs.core.truth_(expanded_QMARK_)){
return new cljs.core.Keyword("portfolio.ui.icons","folder-open","portfolio.ui.icons/folder-open",-1486407401);
} else {
return new cljs.core.Keyword("portfolio.ui.icons","folder","portfolio.ui.icons/folder",1847686690);
}
}
}
}
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon-color","expanded-icon-color",-1316573703).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon-color","collapsed-icon-color",1864171020).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "var(--folder-icon-color)";
}
}
})()], null);
});
portfolio.ui.collection.get_package_illustration = (function portfolio$ui$collection$get_package_illustration(state,collection,expanded_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon","expanded-icon",-230268495).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon","collapsed-icon",-874318333).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(expanded_QMARK_)?portfolio.ui.collection.get_in_parents.call(null,state,collection,new cljs.core.Keyword(null,"default-package-expanded-icon","default-package-expanded-icon",-46693748)):portfolio.ui.collection.get_in_parents.call(null,state,collection,new cljs.core.Keyword(null,"default-package-collapsed-icon","default-package-collapsed-icon",226330667)));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = portfolio.ui.collection.get_in_parents.call(null,state,collection,new cljs.core.Keyword(null,"default-package-icon","default-package-icon",-529773453));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword("portfolio.ui.icons","cube","portfolio.ui.icons/cube",-641478246);
}
}
}
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = (cljs.core.truth_(expanded_QMARK_)?new cljs.core.Keyword(null,"expanded-icon-color","expanded-icon-color",-1316573703).cljs$core$IFn$_invoke$arity$1(collection):new cljs.core.Keyword(null,"collapsed-icon-color","collapsed-icon-color",1864171020).cljs$core$IFn$_invoke$arity$1(collection));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(collection);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "var(--highlight-color)";
}
}
})()], null);
});
portfolio.ui.collection.get_scene_illustration = (function portfolio$ui$collection$get_scene_illustration(state,scene,selected_QMARK_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(function (){var or__5045__auto__ = (cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"selected-icon","selected-icon",-1343164076).cljs$core$IFn$_invoke$arity$1(scene):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (cljs.core.truth_(selected_QMARK_)?portfolio.ui.collection.get_in_parents.call(null,state,scene,new cljs.core.Keyword(null,"default-scene-selected-icon","default-scene-selected-icon",-1703655455)):null);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = portfolio.ui.collection.get_in_parents.call(null,state,scene,new cljs.core.Keyword(null,"default-scene-icon","default-scene-icon",-1142833501));
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return new cljs.core.Keyword("portfolio.ui.icons","bookmark","portfolio.ui.icons/bookmark",-996642850);
}
}
}
}
})(),new cljs.core.Keyword(null,"color","color",1011675173),(function (){var or__5045__auto__ = (cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"selected-icon-color","selected-icon-color",954239169).cljs$core$IFn$_invoke$arity$1(scene):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"icon-color","icon-color",620934726).cljs$core$IFn$_invoke$arity$1(scene);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
if(cljs.core.truth_(selected_QMARK_)){
return null;
} else {
return "var(--browser-unit-icon-color)";
}
}
}
})()], null);
});
portfolio.ui.collection.get_illustration = (function portfolio$ui$collection$get_illustration(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17354 = arguments.length;
var i__5770__auto___17355 = (0);
while(true){
if((i__5770__auto___17355 < len__5769__auto___17354)){
args__5775__auto__.push((arguments[i__5770__auto___17355]));

var G__17356 = (i__5770__auto___17355 + (1));
i__5770__auto___17355 = G__17356;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return portfolio.ui.collection.get_illustration.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(portfolio.ui.collection.get_illustration.cljs$core$IFn$_invoke$arity$variadic = (function (item,state,p__17349){
var vec__17350 = p__17349;
var current_QMARK_ = cljs.core.nth.call(null,vec__17350,(0),null);
var G__17353 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
var G__17353__$1 = (((G__17353 instanceof cljs.core.Keyword))?G__17353.fqn:null);
switch (G__17353__$1) {
case "folder":
return portfolio.ui.collection.get_folder_illustration.call(null,state,item,current_QMARK_);

break;
case "package":
return portfolio.ui.collection.get_package_illustration.call(null,state,item,current_QMARK_);

break;
default:
return portfolio.ui.collection.get_scene_illustration.call(null,state,item,current_QMARK_);

}
}));

(portfolio.ui.collection.get_illustration.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(portfolio.ui.collection.get_illustration.cljs$lang$applyTo = (function (seq17346){
var G__17347 = cljs.core.first.call(null,seq17346);
var seq17346__$1 = cljs.core.next.call(null,seq17346);
var G__17348 = cljs.core.first.call(null,seq17346__$1);
var seq17346__$2 = cljs.core.next.call(null,seq17346__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17347,G__17348,seq17346__$2);
}));

portfolio.ui.collection.prepare_selection_menu_bar = (function portfolio$ui$collection$prepare_selection_menu_bar(state,selection,p__17358){
var map__17359 = p__17358;
var map__17359__$1 = cljs.core.__destructure_map.call(null,map__17359);
var expand_path = cljs.core.get.call(null,map__17359__$1,new cljs.core.Keyword(null,"expand-path","expand-path",-436455836));
var location__$1 = cljs.core.get.call(null,map__17359__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var tight_QMARK_ = cljs.core.get.call(null,map__17359__$1,new cljs.core.Keyword(null,"tight?","tight?",1625746895));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(tight_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection))], null)], null):(function (){var iter__5523__auto__ = (function portfolio$ui$collection$prepare_selection_menu_bar_$_iter__17360(s__17361){
return (new cljs.core.LazySeq(null,(function (){
var s__17361__$1 = s__17361;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17361__$1);
if(temp__5804__auto__){
var s__17361__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17361__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17361__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17363 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17362 = (0);
while(true){
if((i__17362 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__17362);
cljs.core.chunk_append.call(null,b__17363,(function (){var G__17364 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection),item);
if(and__5043__auto__){
return location__$1;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__17364,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_url.call(null,location__$1,item));
} else {
return G__17364;
}
})());

var G__17367 = (i__17362 + (1));
i__17362 = G__17367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17363),portfolio$ui$collection$prepare_selection_menu_bar_$_iter__17360.call(null,cljs.core.chunk_rest.call(null,s__17361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17363),null);
}
} else {
var item = cljs.core.first.call(null,s__17361__$2);
return cljs.core.cons.call(null,(function (){var G__17365 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item)], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection),item);
if(and__5043__auto__){
return location__$1;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,G__17365,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_url.call(null,location__$1,item));
} else {
return G__17365;
}
})(),portfolio$ui$collection$prepare_selection_menu_bar_$_iter__17360.call(null,cljs.core.rest.call(null,s__17361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(selection));
})()),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(cljs.core.get_in.call(null,state,expand_path))?new cljs.core.Keyword("portfolio.ui.icons","caret-up","portfolio.ui.icons/caret-up",1245182802):new cljs.core.Keyword("portfolio.ui.icons","caret-down","portfolio.ui.icons/caret-down",-1312675809)),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),expand_path,cljs.core.not.call(null,cljs.core.get_in.call(null,state,expand_path))], null)], null)], null),new cljs.core.Keyword(null,"illustration","illustration",-48860973),(function (){var G__17366 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(selection);
if((G__17366 == null)){
return null;
} else {
return portfolio.ui.collection.get_illustration.call(null,G__17366,state);
}
})()], null);
});
