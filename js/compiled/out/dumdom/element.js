// Compiled by ClojureScript 1.11.60 {:optimizations :simple}
goog.provide('dumdom.element');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
dumdom.element._STAR_handle_event_STAR_ = null;
dumdom.element.event_handler = (function dumdom$element$event_handler(h){
if(cljs.core.fn_QMARK_.call(null,h)){
return h;
} else {
var temp__5802__auto__ = dumdom.element._STAR_handle_event_STAR_;
if(cljs.core.truth_(temp__5802__auto__)){
var f = temp__5802__auto__;
return (function (e){
return f.call(null,e,h);
});
} else {
if(typeof h === 'string'){
return h;
} else {
return null;
}
}
}
});
dumdom.element.event_entry = (function dumdom$element$event_entry(attrs,k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,cljs.core.name.call(null,k),/^on/,"").toLowerCase(),dumdom.element.event_handler.call(null,attrs.call(null,k))], null);
});
dumdom.element.camelCase = (function dumdom$element$camelCase(s){
var vec__12871 = clojure.string.split.call(null,s,/-/);
var seq__12872 = cljs.core.seq.call(null,vec__12871);
var first__12873 = cljs.core.first.call(null,seq__12872);
var seq__12872__$1 = cljs.core.next.call(null,seq__12872);
var f = first__12873;
var rest = seq__12872__$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),clojure.string.join.call(null,"",cljs.core.map.call(null,clojure.string.capitalize,rest))].join('');
});
dumdom.element.camel_key = (function dumdom$element$camel_key(k){
return cljs.core.keyword.call(null,dumdom.element.camelCase.call(null,cljs.core.name.call(null,k)));
});
dumdom.element.skip_pixelize_attrs = cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,dumdom.element.camel_key.call(null,k)], null);
}),new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animation-iteration-count","animation-iteration-count",-1410888227),new cljs.core.Keyword(null,"box-flex","box-flex",-831196194),new cljs.core.Keyword(null,"box-flex-group","box-flex-group",-1468550335),new cljs.core.Keyword(null,"box-ordinal-group","box-ordinal-group",201694774),new cljs.core.Keyword(null,"column-count","column-count",1235131236),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),new cljs.core.Keyword(null,"flex-positive","flex-positive",-239614242),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"flex-negative","flex-negative",-1543996476),new cljs.core.Keyword(null,"flex-order","flex-order",-621251126),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"line-clamp","line-clamp",-1079334403),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"orphans","orphans",1913357231),new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"tab-size","tab-size",-1265790523),new cljs.core.Keyword(null,"widows","widows",1989591025),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null)));
dumdom.element.normalize_styles = (function dumdom$element$normalize_styles(styles){
return cljs.core.reduce.call(null,(function (m,p__12874){
var vec__12875 = p__12874;
var attr = cljs.core.nth.call(null,vec__12875,(0),null);
var v = cljs.core.nth.call(null,vec__12875,(1),null);
if(typeof v === 'number'){
if(cljs.core.truth_(dumdom.element.skip_pixelize_attrs.call(null,attr))){
return cljs.core.update.call(null,m,attr,cljs.core.str);
} else {
return cljs.core.update.call(null,m,attr,cljs.core.str,"px");
}
} else {
return m;
}
}),styles,styles);
});
dumdom.element.attr_mappings = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pointerEvents","pointerEvents",-1429289472),new cljs.core.Keyword(null,"fontVariant","fontVariant",-726343072),new cljs.core.Keyword(null,"dirName","dirName",1496612544),new cljs.core.Keyword(null,"overlineThickness","overlineThickness",1054951168),new cljs.core.Keyword(null,"stopOpacity","stopOpacity",-480120864),new cljs.core.Keyword(null,"alignmentBaseline","alignmentBaseline",391161089),new cljs.core.Keyword(null,"strokeOpacity","strokeOpacity",-565583263),new cljs.core.Keyword(null,"httpEquiv","httpEquiv",789868321),new cljs.core.Keyword(null,"vectorEffect","vectorEffect",-2006517919),new cljs.core.Keyword(null,"xmlSpace","xmlSpace",-52614622),new cljs.core.Keyword(null,"rowSpan","rowSpan",826884002),new cljs.core.Keyword(null,"xlinkActuate","xlinkActuate",1909485123),new cljs.core.Keyword(null,"vertOriginX","vertOriginX",-721682845),new cljs.core.Keyword(null,"noValidate","noValidate",1502261891),new cljs.core.Keyword(null,"unitsPerEm","unitsPerEm",1686693571),new cljs.core.Keyword(null,"wordSpacing","wordSpacing",1190332323),new cljs.core.Keyword(null,"lightingColor","lightingColor",232670308),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"dropZone","dropZone",-660515868),new cljs.core.Keyword(null,"baselineShift","baselineShift",-1675988987),new cljs.core.Keyword(null,"xlinkShow","xlinkShow",1817099301),new cljs.core.Keyword(null,"underlineThickness","underlineThickness",-566140827),new cljs.core.Keyword(null,"mountedStyle","mountedStyle",-1211069883),new cljs.core.Keyword(null,"fillRule","fillRule",-1827524923),new cljs.core.Keyword(null,"vMathematical","vMathematical",-770251931),new cljs.core.Keyword(null,"glyphName","glyphName",602150918),new cljs.core.Keyword(null,"itemProp","itemProp",-772543418),new cljs.core.Keyword(null,"capHeight","capHeight",-1748931994),new cljs.core.Keyword(null,"accentHeight","accentHeight",-2141415802),new cljs.core.Keyword(null,"xlinkRole","xlinkRole",-1641848122),new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),new cljs.core.Keyword(null,"preLoad","preLoad",-892114041),new cljs.core.Keyword(null,"strikethroughPosition","strikethroughPosition",759001768),new cljs.core.Keyword(null,"vHanging","vHanging",2028697384),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"panose1","panose1",1116592233),new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),new cljs.core.Keyword(null,"fontSizeAdjust","fontSizeAdjust",897836777),new cljs.core.Keyword(null,"radioGroup","radioGroup",759101257),new cljs.core.Keyword(null,"overlinePosition","overlinePosition",1360684937),new cljs.core.Keyword(null,"markerStart","markerStart",2012500042),new cljs.core.Keyword(null,"srcLang","srcLang",-1345696502),new cljs.core.Keyword(null,"renderingIntent","renderingIntent",1988940074),new cljs.core.Keyword(null,"paintOrder","paintOrder",541756202),new cljs.core.Keyword(null,"vIdeographic","vIdeographic",969873771),new cljs.core.Keyword(null,"clipPath","clipPath",-934619797),new cljs.core.Keyword(null,"xHeight","xHeight",1051932171),new cljs.core.Keyword(null,"imageRendering","imageRendering",-1692730837),new cljs.core.Keyword(null,"keyType","keyType",592582283),new cljs.core.Keyword(null,"strokeDashoffset","strokeDashoffset",-421034101),new cljs.core.Keyword(null,"fontStretch","fontStretch",-1740143701),new cljs.core.Keyword(null,"textAnchor","textAnchor",-917689429),new cljs.core.Keyword(null,"unicodeRange","unicodeRange",1101836236),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981),new cljs.core.Keyword(null,"markerMid","markerMid",1196449357),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"underlinePosition","underlinePosition",669958894),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"xlinkTitle","xlinkTitle",924841391),new cljs.core.Keyword(null,"colorProfile","colorProfile",-998990033),new cljs.core.Keyword(null,"xlinkType","xlinkType",619754512),new cljs.core.Keyword(null,"xmlBase","xmlBase",790885328),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),new cljs.core.Keyword(null,"glyphOrientationHorizontal","glyphOrientationHorizontal",-874420079),new cljs.core.Keyword(null,"xlinkArcrole","xlinkArcrole",1335294641),new cljs.core.Keyword(null,"writingMode","writingMode",1680665553),new cljs.core.Keyword(null,"markerEnd","markerEnd",-1727198190),new cljs.core.Keyword(null,"crossOrigin","crossOrigin",558883890),new cljs.core.Keyword(null,"floodColor","floodColor",836634770),new cljs.core.Keyword(null,"colSpan","colSpan",872137394),new cljs.core.Keyword(null,"hrefLang","hrefLang",1040962546),new cljs.core.Keyword(null,"letterSpacing","letterSpacing",-1331934989),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"acceptCharset","acceptCharset",560792243),new cljs.core.Keyword(null,"colorRendering","colorRendering",-1824731469),new cljs.core.Keyword(null,"strikethroughThickness","strikethroughThickness",1068914579),new cljs.core.Keyword(null,"formAction","formAction",774624276),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),new cljs.core.Keyword(null,"strokeLinejoin","strokeLinejoin",-721488076),new cljs.core.Keyword(null,"fontStyle","fontStyle",1246842165),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),new cljs.core.Keyword(null,"placeHolder","placeHolder",1359734165),new cljs.core.Keyword(null,"strokeDasharray","strokeDasharray",1664678421),new cljs.core.Keyword(null,"accessKey","accessKey",-2031675627),new cljs.core.Keyword(null,"srcSet","srcSet",-1378415466),new cljs.core.Keyword(null,"strokeMiterlimit","strokeMiterlimit",2119685398),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),new cljs.core.Keyword(null,"horizAdvX","horizAdvX",-2121877033),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),new cljs.core.Keyword(null,"contentEditable","contentEditable",-823191689),new cljs.core.Keyword(null,"vertOriginY","vertOriginY",-1836567561),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),new cljs.core.Keyword(null,"unicodeBidi","unicodeBidi",-1804080584),new cljs.core.Keyword(null,"shapeRendering","shapeRendering",-1384014248),new cljs.core.Keyword(null,"arabicForm","arabicForm",275023832),new cljs.core.Keyword(null,"useMap","useMap",-852270120),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"encType","encType",1733182873),new cljs.core.Keyword(null,"textRendering","textRendering",1698597337),new cljs.core.Keyword(null,"stopColor","stopColor",265518586),new cljs.core.Keyword(null,"contextMenu","contextMenu",-566126918),new cljs.core.Keyword(null,"vAlphabetic","vAlphabetic",-373115078),new cljs.core.Keyword(null,"dominantBaseline","dominantBaseline",2071607258),new cljs.core.Keyword(null,"floodOpacity","floodOpacity",-1332086757),new cljs.core.Keyword(null,"bgColor","bgColor",-125329317),new cljs.core.Keyword(null,"disappearingStyle","disappearingStyle",-1447140965),new cljs.core.Keyword(null,"strokeLinecap","strokeLinecap",-1974748357),new cljs.core.Keyword(null,"glyphOrientationVertical","glyphOrientationVertical",812176604),new cljs.core.Keyword(null,"enableBackground","enableBackground",-1352387332),new cljs.core.Keyword(null,"srcDoc","srcDoc",1635765309),new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),new cljs.core.Keyword(null,"isMap","isMap",-249743779),new cljs.core.Keyword(null,"xmlLang","xmlLang",675834142),new cljs.core.Keyword(null,"horizOriginX","horizOriginX",727960958),new cljs.core.Keyword(null,"colorInterpolation","colorInterpolation",-540228866),new cljs.core.Keyword(null,"vertAdvY","vertAdvY",-1347098882),new cljs.core.Keyword(null,"clipRule","clipRule",-1943443682),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742),new cljs.core.Keyword(null,"leavingStyle","leavingStyle",1768293791),new cljs.core.Keyword(null,"codeBase","codeBase",537481055),new cljs.core.Keyword(null,"colorInterpolationFilters","colorInterpolationFilters",1748426751)],[new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"font-variant","font-variant",1251503591),new cljs.core.Keyword(null,"dirname","dirname",1314834844),new cljs.core.Keyword(null,"overline-thickness","overline-thickness",-1687103105),new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729),new cljs.core.Keyword(null,"alignment-baseline","alignment-baseline",-311060879),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"http-equiv","http-equiv",-433976463),new cljs.core.Keyword(null,"vector-effect","vector-effect",-616736349),new cljs.core.Keyword(null,"xml:space","xml:space",-1976466326),new cljs.core.Keyword(null,"rowspan","rowspan",1059521478),new cljs.core.Keyword(null,"xlink:actuate","xlink:actuate",1846130965),new cljs.core.Keyword(null,"vert-origin-x","vert-origin-x",1437952844),new cljs.core.Keyword(null,"novalidate","novalidate",-572717086),new cljs.core.Keyword(null,"units-per-em","units-per-em",1845580082),new cljs.core.Keyword(null,"word-spacing","word-spacing",-1211711602),new cljs.core.Keyword(null,"lighting-color","lighting-color",-1324714767),new cljs.core.Keyword(null,"tabindex","tabindex",338877510),new cljs.core.Keyword(null,"dropzone","dropzone",-36573991),new cljs.core.Keyword(null,"baseline-shift","baseline-shift",-2068063947),new cljs.core.Keyword(null,"xlink:show","xlink:show",1334818180),new cljs.core.Keyword(null,"underline-thickness","underline-thickness",1528492621),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),new cljs.core.Keyword(null,"v-mathematical","v-mathematical",-639453547),new cljs.core.Keyword(null,"glyph-name","glyph-name",-1290126189),new cljs.core.Keyword(null,"itemprop","itemprop",1166204046),new cljs.core.Keyword(null,"cap-height","cap-height",1034322643),new cljs.core.Keyword(null,"accent-height","accent-height",-1189857342),new cljs.core.Keyword(null,"xlink:role","xlink:role",-556206369),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"preload","preload",1646824722),new cljs.core.Keyword(null,"strikethrough-position","strikethrough-position",402256746),new cljs.core.Keyword(null,"v-hanging","v-hanging",-956218086),new cljs.core.Keyword(null,"autocomplete","autocomplete",1041133913),new cljs.core.Keyword(null,"panose-1","panose-1",-1528382164),new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205),new cljs.core.Keyword(null,"font-size-adjust","font-size-adjust",-104156772),new cljs.core.Keyword(null,"radiogroup","radiogroup",1109767410),new cljs.core.Keyword(null,"overline-position","overline-position",1793937810),new cljs.core.Keyword(null,"marker-start","marker-start",-56273582),new cljs.core.Keyword(null,"srclang","srclang",-1282812164),new cljs.core.Keyword(null,"rendering-intent","rendering-intent",-45468422),new cljs.core.Keyword(null,"paint-order","paint-order",1313558207),new cljs.core.Keyword(null,"v-ideographic","v-ideographic",-1846578533),new cljs.core.Keyword(null,"clip-path","clip-path",-439959120),new cljs.core.Keyword(null,"x-height","x-height",1735436609),new cljs.core.Keyword(null,"image-rendering","image-rendering",770251905),new cljs.core.Keyword(null,"keytype","keytype",-1800018904),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),new cljs.core.Keyword(null,"font-stretch","font-stretch",-1432788830),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"unicode-range","unicode-range",-2014392944),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"marker-mid","marker-mid",-505338277),new cljs.core.Keyword(null,"minlength","minlength",259053545),new cljs.core.Keyword(null,"underline-position","underline-position",2105325589),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"xlink:title","xlink:title",244078426),new cljs.core.Keyword(null,"color-profile","color-profile",1755323818),new cljs.core.Keyword(null,"xlink:type","xlink:type",-1668107217),new cljs.core.Keyword(null,"xml:base","xml:base",1209393887),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"datetime","datetime",494675702),new cljs.core.Keyword(null,"glyph-orientation-horizontal","glyph-orientation-horizontal",436217892),new cljs.core.Keyword(null,"xlink:arcrole","xlink:arcrole",-376517951),new cljs.core.Keyword(null,"writing-mode","writing-mode",-1707110905),new cljs.core.Keyword(null,"marker-end","marker-end",341488703),new cljs.core.Keyword(null,"crossorigin","crossorigin",-418026140),new cljs.core.Keyword(null,"flood-color","flood-color",1622703322),new cljs.core.Keyword(null,"colspan","colspan",-1512420934),new cljs.core.Keyword(null,"hreflang","hreflang",1405893356),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"readonly","readonly",-1101398934),new cljs.core.Keyword(null,"accept-charset","accept-charset",-1667839372),new cljs.core.Keyword(null,"color-rendering","color-rendering",-891830687),new cljs.core.Keyword(null,"strikethrough-thickness","strikethrough-thickness",2087500993),new cljs.core.Keyword(null,"formaction","formaction",405331853),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),new cljs.core.Keyword(null,"accesskey","accesskey",1009130381),new cljs.core.Keyword(null,"srcset","srcset",710050500),new cljs.core.Keyword(null,"stroke-miterlimit","stroke-miterlimit",1151270808),new cljs.core.Keyword(null,"spellcheck","spellcheck",-508643726),new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),new cljs.core.Keyword(null,"horiz-adv-x","horiz-adv-x",1555956653),new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985),new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530),new cljs.core.Keyword(null,"vert-origin-y","vert-origin-y",-1770906134),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"unicode-bidi","unicode-bidi",310629754),new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),new cljs.core.Keyword(null,"arabic-form","arabic-form",-246736017),new cljs.core.Keyword(null,"usemap","usemap",898470438),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"enctype","enctype",-2053093795),new cljs.core.Keyword(null,"text-rendering","text-rendering",872518208),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),new cljs.core.Keyword(null,"contextmenu","contextmenu",-15887481),new cljs.core.Keyword(null,"v-alphabetic","v-alphabetic",-552236578),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"flood-opacity","flood-opacity",-479030608),new cljs.core.Keyword(null,"bgcolor","bgcolor",1996633770),new cljs.core.Keyword(null,"disappearing-style","disappearing-style",1006098271),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"glyph-orientation-vertical","glyph-orientation-vertical",1701745981),new cljs.core.Keyword(null,"enable-background","enable-background",-858721379),new cljs.core.Keyword(null,"srcdoc","srcdoc",1490493414),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"ismap","ismap",-338082918),new cljs.core.Keyword(null,"xml:lang","xml:lang",-1485113568),new cljs.core.Keyword(null,"horiz-origin-x","horiz-origin-x",1522984617),new cljs.core.Keyword(null,"color-interpolation","color-interpolation",-1276247587),new cljs.core.Keyword(null,"vert-adv-y","vert-adv-y",-641097319),new cljs.core.Keyword(null,"clip-rule","clip-rule",335492201),new cljs.core.Keyword(null,"autocapitalize","autocapitalize",1015077767),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.Keyword(null,"codebase","codebase",1837164787),new cljs.core.Keyword(null,"color-interpolation-filters","color-interpolation-filters",-519168139)]);
dumdom.element.data_attr_QMARK_ = (function dumdom$element$data_attr_QMARK_(p__12878){
var vec__12879 = p__12878;
var k = cljs.core.nth.call(null,vec__12879,(0),null);
var v = cljs.core.nth.call(null,vec__12879,(1),null);
return cljs.core.re_find.call(null,/^data-/,cljs.core.name.call(null,k));
});
dumdom.element.event_handler_QMARK_ = (function dumdom$element$event_handler_QMARK_(attr_name){
return cljs.core.re_find.call(null,/on[A-Z]/,cljs.core.name.call(null,attr_name));
});
dumdom.element.prep_attrs = (function dumdom$element$prep_attrs(attrs){
var dataset = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__12884){
var vec__12885 = p__12884;
var k = cljs.core.nth.call(null,vec__12885,(0),null);
var v = cljs.core.nth.call(null,vec__12885,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,cljs.core.name.call(null,k),/^data-/,""),v], null);
}),cljs.core.filter.call(null,dumdom.element.data_attr_QMARK_,attrs)));
var attrs__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,(function (p__12888){
var vec__12889 = p__12888;
var k = cljs.core.nth.call(null,vec__12889,(0),null);
var v = cljs.core.nth.call(null,vec__12889,(1),null);
return (v == null);
}),cljs.core.map.call(null,(function (p__12892){
var vec__12893 = p__12892;
var k = cljs.core.nth.call(null,vec__12893,(0),null);
var v = cljs.core.nth.call(null,vec__12893,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dumdom.element.camel_key.call(null,k),v], null);
}),cljs.core.remove.call(null,dumdom.element.data_attr_QMARK_,attrs))));
var attrs__$2 = clojure.set.rename_keys.call(null,attrs__$1,dumdom.element.attr_mappings);
var event_keys = cljs.core.filter.call(null,dumdom.element.event_handler_QMARK_,cljs.core.keys.call(null,attrs__$2));
var el_key = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,attrs__$2,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))){
return cljs.core.hash.call(null,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138).cljs$core$IFn$_invoke$arity$1(attrs__$2));
} else {
return null;
}
}
})();
var G__12896 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.apply.call(null,cljs.core.dissoc,attrs__$2,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842),new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625),new cljs.core.Keyword(null,"disappearing-style","disappearing-style",1006098271),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),event_keys),new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__12897 = cljs.core.PersistentArrayMap.EMPTY;
var G__12897__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs__$2))?cljs.core.assoc.call(null,G__12897,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs__$2)):G__12897);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138).cljs$core$IFn$_invoke$arity$1(attrs__$2),new cljs.core.Keyword(null,"__html","__html",674048345))){
return cljs.core.assoc.call(null,G__12897__$1,new cljs.core.Keyword(null,"innerHTML","innerHTML",-1856751343),new cljs.core.Keyword(null,"__html","__html",674048345).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138).cljs$core$IFn$_invoke$arity$1(attrs__$2)));
} else {
return G__12897__$1;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,dumdom.element.normalize_styles.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs__$2)),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"mounted-style","mounted-style",783212842).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var enter = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delayed","delayed",251992229),dumdom.element.normalize_styles.call(null,enter)], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"leaving-style","leaving-style",599773625).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var remove = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remove","remove",-131428414),dumdom.element.normalize_styles.call(null,remove)], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"disappearing-style","disappearing-style",1006098271).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var destroy = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",-843660405),dumdom.element.normalize_styles.call(null,destroy)], null);
} else {
return null;
}
})()),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,(function (p1__12882_SHARP_){
return dumdom.element.event_entry.call(null,attrs__$2,p1__12882_SHARP_);
}),event_keys)),new cljs.core.Keyword(null,"hook","hook",750265408),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(attrs__$2);
if(cljs.core.truth_(temp__5804__auto__)){
var callback = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),(function (p1__12883_SHARP_){
return callback.call(null,p1__12883_SHARP_.elm);
}),new cljs.core.Keyword(null,"destroy","destroy",-843660405),(function (){
return callback.call(null,null);
})], null);
} else {
return null;
}
})()),new cljs.core.Keyword(null,"dataset","dataset",1159262238),dataset], null);
if(cljs.core.truth_(el_key)){
return cljs.core.assoc.call(null,G__12896,new cljs.core.Keyword(null,"key","key",-1516042587),el_key);
} else {
return G__12896;
}
});
dumdom.element.hiccup_QMARK_ = (function dumdom$element$hiccup_QMARK_(sexp){
return ((cljs.core.vector_QMARK_.call(null,sexp)) && ((((!(cljs.core.map_entry_QMARK_.call(null,sexp)))) && ((((cljs.core.first.call(null,sexp) instanceof cljs.core.Keyword)) || (cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,sexp))))))));
});
dumdom.element.class_list = (function dumdom$element$class_list(classes){
if((classes instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,classes)], null);
} else {
if(typeof classes === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classes], null);
} else {
if(cljs.core.empty_QMARK_.call(null,classes)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,classes)){
return cljs.core.map.call(null,(function (p1__12898_SHARP_){
if((p1__12898_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,p1__12898_SHARP_);
} else {
return p1__12898_SHARP_;
}
}),classes);
} else {
if((classes == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.ex_info.call(null,"Received class name that is neither string, keyword, or a collection of those",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),classes], null));

}
}
}
}
}
});
dumdom.element.parse_hiccup_symbol = (function dumdom$element$parse_hiccup_symbol(sym,attrs){
var vec__12900 = cljs.core.re_find.call(null,/#([^\.#]+)/,sym);
var _ = cljs.core.nth.call(null,vec__12900,(0),null);
var id = cljs.core.nth.call(null,vec__12900,(1),null);
var vec__12903 = clojure.string.split.call(null,clojure.string.replace.call(null,sym,/#([^#\.]+)/,""),/\./);
var seq__12904 = cljs.core.seq.call(null,vec__12903);
var first__12905 = cljs.core.first.call(null,seq__12904);
var seq__12904__$1 = cljs.core.next.call(null,seq__12904);
var el = first__12905;
var classes = seq__12904__$1;
var classes__$1 = cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.concat.call(null,dumdom.element.class_list.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attrs)),dumdom.element.class_list.call(null,new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(attrs)),classes));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,(function (){var G__12906 = cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057));
var G__12906__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,G__12906,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__12906);
if(cljs.core.seq.call(null,classes__$1)){
return cljs.core.update.call(null,G__12906__$1,new cljs.core.Keyword(null,"className","className",-1983287057),(function (p1__12899_SHARP_){
return clojure.string.join.call(null," ",(cljs.core.truth_(p1__12899_SHARP_)?cljs.core.conj.call(null,classes__$1,p1__12899_SHARP_):classes__$1));
}));
} else {
return G__12906__$1;
}
})()], null);
});
dumdom.element.explode_styles = (function dumdom$element$explode_styles(s){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__12907_SHARP_){
var vec__12908 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,p1__12907_SHARP_,/:/));
var k = cljs.core.nth.call(null,vec__12908,(0),null);
var v = cljs.core.nth.call(null,vec__12908,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),clojure.string.split.call(null,s,/;/)));
});
dumdom.element.prep_hiccup_attrs = (function dumdom$element$prep_hiccup_attrs(attrs){
var G__12911 = attrs;
if(typeof new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(attrs) === 'string'){
return cljs.core.update.call(null,G__12911,new cljs.core.Keyword(null,"style","style",-496642736),dumdom.element.explode_styles);
} else {
return G__12911;
}
});
dumdom.element.flatten_seqs = (function dumdom$element$flatten_seqs(xs){
var res = cljs.core.PersistentVector.EMPTY;
var G__12915 = xs;
var vec__12916 = G__12915;
var seq__12917 = cljs.core.seq.call(null,vec__12916);
var first__12918 = cljs.core.first.call(null,seq__12917);
var seq__12917__$1 = cljs.core.next.call(null,seq__12917);
var x = first__12918;
var xs__$1 = seq__12917__$1;
var res__$1 = res;
var G__12915__$1 = G__12915;
while(true){
var res__$2 = res__$1;
var vec__12922 = G__12915__$1;
var seq__12923 = cljs.core.seq.call(null,vec__12922);
var first__12924 = cljs.core.first.call(null,seq__12923);
var seq__12923__$1 = cljs.core.next.call(null,seq__12923);
var x__$1 = first__12924;
var xs__$2 = seq__12923__$1;
if((((xs__$2 == null)) && ((x__$1 == null)))){
return cljs.core.seq.call(null,res__$2);
} else {
if(cljs.core.seq_QMARK_.call(null,x__$1)){
var G__12925 = cljs.core.into.call(null,res__$2,dumdom.element.flatten_seqs.call(null,x__$1));
var G__12926 = xs__$2;
res__$1 = G__12925;
G__12915__$1 = G__12926;
continue;
} else {
var G__12927 = cljs.core.conj.call(null,res__$2,x__$1);
var G__12928 = xs__$2;
res__$1 = G__12927;
G__12915__$1 = G__12928;
continue;

}
}
break;
}
});
dumdom.element.add_namespace = (function dumdom$element$add_namespace(vnode){
var G__12930 = vnode;
var G__12930__$1 = ((cljs.core.not_EQ_.call(null,"foreignObject",new cljs.core.Keyword(null,"sel","sel",-1686154807).cljs$core$IFn$_invoke$arity$1(vnode)))?cljs.core.assoc_in.call(null,G__12930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"ns","ns",441598760)], null),"http://www.w3.org/2000/svg"):G__12930);
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(vnode))){
return cljs.core.update.call(null,G__12930__$1,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__12929_SHARP_){
return cljs.core.map.call(null,dumdom.element.add_namespace,p1__12929_SHARP_);
}));
} else {
return G__12930__$1;
}
});
dumdom.element.svg_QMARK_ = (function dumdom$element$svg_QMARK_(sel){
return ((cljs.core._EQ_.call(null,"s",cljs.core.nth.call(null,sel,(0)))) && (((cljs.core._EQ_.call(null,"v",cljs.core.nth.call(null,sel,(1)))) && (((cljs.core._EQ_.call(null,"g",cljs.core.nth.call(null,sel,(2)))) && (((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,sel))) || (((cljs.core._EQ_.call(null,".",cljs.core.nth.call(null,sel,(3)))) || (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,sel,(3)))))))))))));
});
dumdom.element.primitive_QMARK_ = (function dumdom$element$primitive_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
dumdom.element.convert_primitive_children = (function dumdom$element$convert_primitive_children(children){
var iter__5523__auto__ = (function dumdom$element$convert_primitive_children_$_iter__12931(s__12932){
return (new cljs.core.LazySeq(null,(function (){
var s__12932__$1 = s__12932;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12932__$1);
if(temp__5804__auto__){
var s__12932__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12932__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__12932__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__12934 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__12933 = (0);
while(true){
if((i__12933 < size__5522__auto__)){
var c = cljs.core._nth.call(null,c__5521__auto__,i__12933);
cljs.core.chunk_append.call(null,b__12934,((dumdom.element.primitive_QMARK_.call(null,c))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),c], null):c));

var G__12935 = (i__12933 + (1));
i__12933 = G__12935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12934),dumdom$element$convert_primitive_children_$_iter__12931.call(null,cljs.core.chunk_rest.call(null,s__12932__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12934),null);
}
} else {
var c = cljs.core.first.call(null,s__12932__$2);
return cljs.core.cons.call(null,((dumdom.element.primitive_QMARK_.call(null,c))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),c], null):c),dumdom$element$convert_primitive_children_$_iter__12931.call(null,cljs.core.rest.call(null,s__12932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,children);
});
dumdom.element.create_vdom_node = (function dumdom$element$create_vdom_node(sel,attrs,children){
var cmap_QMARK_ = cljs.core.map_QMARK_.call(null,children);
var G__12936 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sel","sel",-1686154807),sel,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376)),new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376),new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376).cljs$core$IFn$_invoke$arity$1(attrs)], null);
var G__12936__$1 = ((dumdom.element.primitive_QMARK_.call(null,children))?cljs.core.assoc.call(null,G__12936,new cljs.core.Keyword(null,"text","text",-1790561697),children):G__12936);
var G__12936__$2 = ((cmap_QMARK_)?cljs.core.assoc.call(null,G__12936__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null)):G__12936__$1);
var G__12936__$3 = ((((cljs.core.seq_QMARK_.call(null,children)) && ((!(cmap_QMARK_)))))?cljs.core.assoc.call(null,G__12936__$2,new cljs.core.Keyword(null,"children","children",-940561982),children):G__12936__$2);
var G__12936__$4 = cljs.core.update.call(null,G__12936__$3,new cljs.core.Keyword(null,"children","children",-940561982),dumdom.element.convert_primitive_children)
;
var G__12936__$5 = ((dumdom.element.svg_QMARK_.call(null,sel))?dumdom.element.add_namespace.call(null,G__12936__$4):G__12936__$4);
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.assoc.call(null,G__12936__$5,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs));
} else {
return G__12936__$5;
}
});
dumdom.element.inflate_hiccup = (function dumdom$element$inflate_hiccup(sexp){
if((sexp == null)){
return dumdom.element.create_vdom_node.call(null,"!",cljs.core.PersistentArrayMap.EMPTY,"nil");
} else {
if((!(dumdom.element.hiccup_QMARK_.call(null,sexp)))){
return sexp;
} else {
var tag_name = cljs.core.first.call(null,sexp);
var args = cljs.core.rest.call(null,sexp);
var args__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))?args:cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),args));
if(cljs.core.fn_QMARK_.call(null,tag_name)){
return cljs.core.apply.call(null,tag_name,cljs.core.rest.call(null,sexp));
} else {
var vec__12937 = dumdom.element.parse_hiccup_symbol.call(null,cljs.core.name.call(null,tag_name),cljs.core.first.call(null,args__$1));
var element = cljs.core.nth.call(null,vec__12937,(0),null);
var attrs = cljs.core.nth.call(null,vec__12937,(1),null);
return cljs.core.apply.call(null,dumdom.element.create,element,dumdom.element.prep_hiccup_attrs.call(null,attrs),dumdom.element.flatten_seqs.call(null,cljs.core.rest.call(null,args__$1)));
}

}
}
});
dumdom.element.enumerate_key = (function dumdom$element$enumerate_key(kmap,k){
var k__$1 = ((typeof k === 'string')?k:cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,cljs.core.get.call(null,kmap,k__$1,(0))], null);
});
dumdom.element.realize_children = (function dumdom$element$realize_children(path,xs){
var xs__$1 = cljs.core.seq.call(null,xs);
var res = cljs.core.PersistentVector.EMPTY;
var ks = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((xs__$1 == null)){
return cljs.core.seq.call(null,res);
} else {
var x = cljs.core.first.call(null,xs__$1);
var child = ((cljs.core.fn_QMARK_.call(null,x))?x.call(null,path,ks):x);
var G__12958 = cljs.core.next.call(null,xs__$1);
var G__12959 = cljs.core.conj.call(null,res,child);
var G__12960 = (function (){var vec__12949 = new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376).cljs$core$IFn$_invoke$arity$1(child);
var k = cljs.core.nth.call(null,vec__12949,(0),null);
var n = cljs.core.nth.call(null,vec__12949,(1),null);
var vec__12952 = new cljs.core.Keyword("dumdom","lookup-key","dumdom/lookup-key",234912017).cljs$core$IFn$_invoke$arity$1(child);
var lk = cljs.core.nth.call(null,vec__12952,(0),null);
var lk_n = cljs.core.nth.call(null,vec__12952,(1),null);
var G__12955 = cljs.core.assoc.call(null,ks,k,(function (){var G__12956 = (function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
if((G__12956 == null)){
return null;
} else {
return (G__12956 + (1));
}
})());
if(cljs.core.truth_(lk)){
return cljs.core.assoc.call(null,G__12955,lk,(function (){var G__12957 = (function (){var or__5045__auto__ = lk_n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
if((G__12957 == null)){
return null;
} else {
return (G__12957 + (1));
}
})());
} else {
return G__12955;
}
})();
xs__$1 = G__12958;
res = G__12959;
ks = G__12960;
continue;
}
break;
}
});
dumdom.element.add_comment_node = (function dumdom$element$add_comment_node(p__12961){
var map__12962 = p__12961;
var map__12962__$1 = cljs.core.__destructure_map.call(null,map__12962);
var component = map__12962__$1;
var component_name = cljs.core.get.call(null,map__12962__$1,new cljs.core.Keyword("dumdom","component-name","dumdom/component-name",19850734));
var render_comments_QMARK_ = cljs.core.get.call(null,map__12962__$1,new cljs.core.Keyword("dumdom","render-comments?","dumdom/render-comments?",877432722));
var G__12963 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null);
if(cljs.core.truth_((function (){var and__5043__auto__ = render_comments_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return component_name;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.cons.call(null,dumdom.element.create_vdom_node.call(null,"!",cljs.core.PersistentArrayMap.EMPTY,component_name),G__12963);
} else {
return G__12963;
}
});
dumdom.element.create = (function dumdom$element$create(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12983 = arguments.length;
var i__5770__auto___12984 = (0);
while(true){
if((i__5770__auto___12984 < len__5769__auto___12983)){
args__5775__auto__.push((arguments[i__5770__auto___12984]));

var G__12985 = (i__5770__auto___12984 + (1));
i__5770__auto___12984 = G__12985;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return dumdom.element.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(dumdom.element.create.cljs$core$IFn$_invoke$arity$variadic = (function (tag_name,attrs,children){
return (function (path,kmap){
var attrs__$1 = dumdom.element.prep_attrs.call(null,attrs);
var k = dumdom.element.enumerate_key.call(null,kmap,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs__$1));
var fullpath = cljs.core.conj.call(null,path,k);
return dumdom.element.create_vdom_node.call(null,tag_name,(function (){var G__12970 = attrs__$1;
var G__12970__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(attrs__$1))?cljs.core.assoc.call(null,G__12970,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.join.call(null,".",k)):G__12970);
var G__12970__$2 = (cljs.core.truth_(k)?cljs.core.assoc.call(null,G__12970__$1,new cljs.core.Keyword("dumdom","component-key","dumdom/component-key",-1206270376),k):G__12970__$1);
return cljs.core.assoc_in.call(null,G__12970__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hook","hook",750265408),new cljs.core.Keyword(null,"update","update",1045576396)], null),(function (old_vnode,new_vnode){
var seq__12971_12986 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (G__12970,G__12970__$1,G__12970__$2,attrs__$1,k,fullpath){
return (function (p1__12964_SHARP_){
var G__12976 = p1__12964_SHARP_;
if((G__12976 == null)){
return null;
} else {
return G__12976.willEnter;
}
});})(G__12970,G__12970__$1,G__12970__$2,attrs__$1,k,fullpath))
,new_vnode.children));
var chunk__12972_12987 = null;
var count__12973_12988 = (0);
var i__12974_12989 = (0);
while(true){
if((i__12974_12989 < count__12973_12988)){
var node_12990 = cljs.core._nth.call(null,chunk__12972_12987,i__12974_12989);
node_12990.willEnter.call(null);


var G__12991 = seq__12971_12986;
var G__12992 = chunk__12972_12987;
var G__12993 = count__12973_12988;
var G__12994 = (i__12974_12989 + (1));
seq__12971_12986 = G__12991;
chunk__12972_12987 = G__12992;
count__12973_12988 = G__12993;
i__12974_12989 = G__12994;
continue;
} else {
var temp__5804__auto___12995 = cljs.core.seq.call(null,seq__12971_12986);
if(temp__5804__auto___12995){
var seq__12971_12996__$1 = temp__5804__auto___12995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12971_12996__$1)){
var c__5568__auto___12997 = cljs.core.chunk_first.call(null,seq__12971_12996__$1);
var G__12998 = cljs.core.chunk_rest.call(null,seq__12971_12996__$1);
var G__12999 = c__5568__auto___12997;
var G__13000 = cljs.core.count.call(null,c__5568__auto___12997);
var G__13001 = (0);
seq__12971_12986 = G__12998;
chunk__12972_12987 = G__12999;
count__12973_12988 = G__13000;
i__12974_12989 = G__13001;
continue;
} else {
var node_13002 = cljs.core.first.call(null,seq__12971_12996__$1);
node_13002.willEnter.call(null);


var G__13003 = cljs.core.next.call(null,seq__12971_12996__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__12971_12986 = G__13003;
chunk__12972_12987 = G__13004;
count__12973_12988 = G__13005;
i__12974_12989 = G__13006;
continue;
}
} else {
}
}
break;
}

var seq__12977 = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (G__12970,G__12970__$1,G__12970__$2,attrs__$1,k,fullpath){
return (function (p1__12965_SHARP_){
var G__12982 = p1__12965_SHARP_;
if((G__12982 == null)){
return null;
} else {
return G__12982.willAppear;
}
});})(G__12970,G__12970__$1,G__12970__$2,attrs__$1,k,fullpath))
,new_vnode.children));
var chunk__12978 = null;
var count__12979 = (0);
var i__12980 = (0);
while(true){
if((i__12980 < count__12979)){
var node = cljs.core._nth.call(null,chunk__12978,i__12980);
node.willAppear.call(null);


var G__13007 = seq__12977;
var G__13008 = chunk__12978;
var G__13009 = count__12979;
var G__13010 = (i__12980 + (1));
seq__12977 = G__13007;
chunk__12978 = G__13008;
count__12979 = G__13009;
i__12980 = G__13010;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__12977);
if(temp__5804__auto__){
var seq__12977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12977__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__12977__$1);
var G__13011 = cljs.core.chunk_rest.call(null,seq__12977__$1);
var G__13012 = c__5568__auto__;
var G__13013 = cljs.core.count.call(null,c__5568__auto__);
var G__13014 = (0);
seq__12977 = G__13011;
chunk__12978 = G__13012;
count__12979 = G__13013;
i__12980 = G__13014;
continue;
} else {
var node = cljs.core.first.call(null,seq__12977__$1);
node.willAppear.call(null);


var G__13015 = cljs.core.next.call(null,seq__12977__$1);
var G__13016 = null;
var G__13017 = (0);
var G__13018 = (0);
seq__12977 = G__13015;
chunk__12978 = G__13016;
count__12979 = G__13017;
i__12980 = G__13018;
continue;
}
} else {
return null;
}
}
break;
}
}));

})(),cljs.core.mapcat.call(null,dumdom.element.add_comment_node,dumdom.element.realize_children.call(null,fullpath,cljs.core.map.call(null,dumdom.element.inflate_hiccup,cljs.core.mapcat.call(null,(function (p1__12966_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__12966_SHARP_)){
return p1__12966_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12966_SHARP_], null);
}
}),children)))));
});
}));

(dumdom.element.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dumdom.element.create.cljs$lang$applyTo = (function (seq12967){
var G__12968 = cljs.core.first.call(null,seq12967);
var seq12967__$1 = cljs.core.next.call(null,seq12967);
var G__12969 = cljs.core.first.call(null,seq12967__$1);
var seq12967__$2 = cljs.core.next.call(null,seq12967__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12968,G__12969,seq12967__$2);
}));

