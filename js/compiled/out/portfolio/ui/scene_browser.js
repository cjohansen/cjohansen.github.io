// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('portfolio.ui.scene_browser');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('portfolio.ui.collection');
goog.require('portfolio.ui.routes');
goog.require('portfolio.ui.scene');
portfolio.ui.scene_browser.get_expanded_path = (function portfolio$ui$scene_browser$get_expanded_path(var_args){
var G__17371 = arguments.length;
switch (G__17371) {
case 1:
return portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$1 = (function (collection){
return portfolio.ui.scene_browser.get_expanded_path.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645)], null)], null),collection);
}));

(portfolio.ui.scene_browser.get_expanded_path.cljs$core$IFn$_invoke$arity$2 = (function (p__17372,collection){
var map__17373 = p__17372;
var map__17373__$1 = cljs.core.__destructure_map.call(null,map__17373);
var path_ctx = cljs.core.get.call(null,map__17373__$1,new cljs.core.Keyword(null,"path-ctx","path-ctx",326904938));
return cljs.core.into.call(null,path_ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"expanded?","expanded?",2055832296)], null));
}));

(portfolio.ui.scene_browser.get_expanded_path.cljs$lang$maxFixedArity = 2);

portfolio.ui.scene_browser.get_context = (function portfolio$ui$scene_browser$get_context(p__17375,path){
var map__17376 = p__17375;
var map__17376__$1 = cljs.core.__destructure_map.call(null,map__17376);
var collections = cljs.core.get.call(null,map__17376__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
return cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"kind","kind",-717265803),collections),path);
});
portfolio.ui.scene_browser.get_actions = (function portfolio$ui$scene_browser$get_actions(opt,target){
return clojure.walk.postwalk.call(null,(function (p1__17377_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("portfolio.ui.scene-browser","target-id","portfolio.ui.scene-browser/target-id",-1487055392),p1__17377_SHARP_)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target);
} else {
return p1__17377_SHARP_;
}
}),new cljs.core.Keyword(null,"select-actions","select-actions",-859150860).cljs$core$IFn$_invoke$arity$1(opt));
});
portfolio.ui.scene_browser.prepare_package = (function portfolio$ui$scene_browser$prepare_package(state,opt,collection,path){
var exp_path = portfolio.ui.scene_browser.get_expanded_path.call(null,opt,collection);
var expanded_QMARK_ = cljs.core.get_in.call(null,state,exp_path);
var G__17378 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"package","package",1189062786),new cljs.core.Keyword(null,"context","context",-830191113),portfolio.ui.scene_browser.get_context.call(null,state,path),new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.scene_browser.get_actions.call(null,opt,collection),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_package_illustration.call(null,state,collection,expanded_QMARK_),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword("portfolio.ui.icons","caret-right","portfolio.ui.icons/caret-right",-995190735),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),exp_path,cljs.core.not.call(null,expanded_QMARK_)], null)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(cljs.core.truth_(expanded_QMARK_)?(90):(0))], null)], null);
var G__17378__$1 = (cljs.core.truth_(expanded_QMARK_)?cljs.core.assoc.call(null,G__17378,new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.scene_browser.prepare_browser_collections.call(null,state,opt,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection)))):G__17378);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"current-id","current-id",210783650).cljs$core$IFn$_invoke$arity$1(opt))){
return cljs.core.assoc.call(null,G__17378__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__17378__$1;
}
});
portfolio.ui.scene_browser.prepare_folder = (function portfolio$ui$scene_browser$prepare_folder(state,opt,collection,path){
var exp_path = portfolio.ui.scene_browser.get_expanded_path.call(null,opt,collection);
var expanded_QMARK_ = cljs.core.not_EQ_.call(null,false,cljs.core.get_in.call(null,state,exp_path));
var G__17379 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(collection),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"folder","folder",1515881736),new cljs.core.Keyword(null,"context","context",-830191113),portfolio.ui.scene_browser.get_context.call(null,state,path),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),exp_path,(!(expanded_QMARK_))], null)], null),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_folder_illustration.call(null,state,collection,expanded_QMARK_)], null);
if(expanded_QMARK_){
return cljs.core.assoc.call(null,G__17379,new cljs.core.Keyword(null,"items","items",1031954938),portfolio.ui.scene_browser.prepare_browser_collections.call(null,state,opt,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection))));
} else {
return G__17379;
}
});
portfolio.ui.scene_browser.prepare_scene = (function portfolio$ui$scene_browser$prepare_scene(state,opt,scene,path){
var selected_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"current-id","current-id",210783650).cljs$core$IFn$_invoke$arity$1(opt));
var G__17380 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.Keyword(null,"illustration","illustration",-48860973),portfolio.ui.collection.get_scene_illustration.call(null,state,scene,selected_QMARK_),new cljs.core.Keyword(null,"context","context",-830191113),portfolio.ui.scene_browser.get_context.call(null,state,path),new cljs.core.Keyword(null,"actions","actions",-812656882),portfolio.ui.scene_browser.get_actions.call(null,opt,scene)], null);
var G__17380__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(opt))?cljs.core.assoc.call(null,G__17380,new cljs.core.Keyword(null,"url","url",276297046),portfolio.ui.routes.get_scene_url.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(opt),scene)):G__17380);
if(selected_QMARK_){
return cljs.core.assoc.call(null,G__17380__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
} else {
return G__17380__$1;
}
});
portfolio.ui.scene_browser.prepare_browser_collections = (function portfolio$ui$scene_browser$prepare_browser_collections(state,opt,parent_ids){
var iter__5523__auto__ = (function portfolio$ui$scene_browser$prepare_browser_collections_$_iter__17381(s__17382){
return (new cljs.core.LazySeq(null,(function (){
var s__17382__$1 = s__17382;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17382__$1);
if(temp__5804__auto__){
var s__17382__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17382__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__17382__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__17384 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__17383 = (0);
while(true){
if((i__17383 < size__5522__auto__)){
var item = cljs.core._nth.call(null,c__5521__auto__,i__17383);
cljs.core.chunk_append.call(null,b__17384,(function (){var G__17385 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
var G__17385__$1 = (((G__17385 instanceof cljs.core.Keyword))?G__17385.fqn:null);
switch (G__17385__$1) {
case "package":
return portfolio.ui.scene_browser.prepare_package.call(null,state,opt,item,parent_ids);

break;
case "folder":
return portfolio.ui.scene_browser.prepare_folder.call(null,state,opt,item,parent_ids);

break;
default:
return portfolio.ui.scene_browser.prepare_scene.call(null,state,opt,item,parent_ids);

}
})());

var G__17388 = (i__17383 + (1));
i__17383 = G__17388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17384),portfolio$ui$scene_browser$prepare_browser_collections_$_iter__17381.call(null,cljs.core.chunk_rest.call(null,s__17382__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17384),null);
}
} else {
var item = cljs.core.first.call(null,s__17382__$2);
return cljs.core.cons.call(null,(function (){var G__17386 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(item);
var G__17386__$1 = (((G__17386 instanceof cljs.core.Keyword))?G__17386.fqn:null);
switch (G__17386__$1) {
case "package":
return portfolio.ui.scene_browser.prepare_package.call(null,state,opt,item,parent_ids);

break;
case "folder":
return portfolio.ui.scene_browser.prepare_folder.call(null,state,opt,item,parent_ids);

break;
default:
return portfolio.ui.scene_browser.prepare_scene.call(null,state,opt,item,parent_ids);

}
})(),portfolio$ui$scene_browser$prepare_browser_collections_$_iter__17381.call(null,cljs.core.rest.call(null,s__17382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.concat.call(null,cljs.core.sort_by.call(null,portfolio.ui.collection.get_sort_key,cljs.core.filter.call(null,portfolio.ui.collection.by_parent_id.call(null,cljs.core.last.call(null,parent_ids)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(state)))),cljs.core.sort_by.call(null,portfolio.ui.scene.sort_key,cljs.core.filter.call(null,portfolio.ui.collection.by_parent_id.call(null,cljs.core.last.call(null,parent_ids)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"scenes","scenes",-425219404).cljs$core$IFn$_invoke$arity$1(state))))));
});
/**
 * `opt` is a map of:
 * 
 *   - `:select-actions` - Vector of actions to perform to select collection or scene.
 *                      Use :portfolio.ui.scene-browser/target-id as a placeholder
 *                      for the selected id.
 *   - `:path-ctx` - The state path context. Allows for multiple individual menus with
 *                their own state for expand/collapse etc.
 *   - `:location` - Optional. When provided, `:url` will be included for scene options.
 */
portfolio.ui.scene_browser.prepare_browser = (function portfolio$ui$scene_browser$prepare_browser(state,opt){
return portfolio.ui.scene_browser.prepare_browser_collections.call(null,state,opt,cljs.core.PersistentVector.EMPTY);
});
