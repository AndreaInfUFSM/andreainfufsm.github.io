(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+IY2":function(e,t,r){"use strict";var n=r("aJg2");e.exports=function(){return"function"==typeof Object.entries?Object.entries:n}},"1KsK":function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function(e){var t=n.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===n.call(e.callee)),r}},"1seS":function(e,t,r){"use strict";var n=Array.prototype.slice,o=r("1KsK"),i=Object.keys,a=i?function(e){return i(e)}:r("sYn3"),c=Object.keys;a.shim=function(){Object.keys?function(){var e=Object.keys(arguments);return e&&e.length===arguments.length}(1,2)||(Object.keys=function(e){return o(e)?c(n.call(e)):c(e)}):Object.keys=a;return Object.keys||a},e.exports=a},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=r("q1tI"),i=n(o),a=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var p,l=[];function f(){p=e(l.map((function(e){return e.props}))),s.canUseDOM?t(p):r&&(p=r(p))}var s=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return p},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=p;return p=void 0,l=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){l.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},c.render=function(){return i.createElement(n,this.props)},o}(o.Component);return c(s,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(s,"canUseDOM",u),s}}},"82c2":function(e,t,r){"use strict";var n=r("1seS"),o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,c=Object.defineProperty,u=c&&function(){var e={};try{for(var t in c(e,"x",{enumerable:!1,value:e}),e)return!1;return e.x===e}catch(r){return!1}}(),p=function(e,t,r,n){var o;(!(t in e)||"function"==typeof(o=n)&&"[object Function]"===i.call(o)&&n())&&(u?c(e,t,{configurable:!0,enumerable:!1,value:r,writable:!0}):e[t]=r)},l=function(e,t){var r=arguments.length>2?arguments[2]:{},i=n(t);o&&(i=a.call(i,Object.getOwnPropertySymbols(t)));for(var c=0;c<i.length;c+=1)p(e,i[c],t[i[c]],r[i[c]])};l.supportsDescriptors=!!u,e.exports=l},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("Wbzz"),a=r("nesH");r("a+XO");t.a=function(e){var t=e.children,r=Object(n.useState)(!1),c=r[0],u=r[1];return o.a.createElement(i.b,{query:"3919605258",render:function(e){return o.a.createElement("div",{className:"container "+(c?"is-open":"")},o.a.createElement(a.HelmetDatoCms,{favicon:e.datoCmsSite.faviconMetaTags,seo:e.datoCmsHome.seoMetaTags}),o.a.createElement("div",{className:"container__sidebar"},o.a.createElement("div",{className:"sidebar"},o.a.createElement("h6",{className:"sidebar__title"},o.a.createElement(i.a,{to:"/"},e.datoCmsSite.globalSeo.siteName)),o.a.createElement("div",{className:"sidebar__intro",dangerouslySetInnerHTML:{__html:e.datoCmsHome.introTextNode.childMarkdownRemark.html}}),o.a.createElement("ul",{className:"sidebar__menu"},o.a.createElement("li",null,o.a.createElement(i.a,{to:"/about"},"Sobre"))),o.a.createElement("div",{className:"sidebar__copyright"},e.datoCmsHome.copyright))),o.a.createElement("div",{className:"container__body"},o.a.createElement("div",{className:"container__mobile-header"},o.a.createElement("div",{className:"mobile-header"},o.a.createElement("div",{className:"mobile-header__menu"},o.a.createElement("button",{onClick:function(e){e.preventDefault(),u(!c)}})),o.a.createElement("div",{className:"mobile-header__logo"},o.a.createElement(i.a,{to:"/"},e.datoCmsSite.globalSeo.siteName)))),t))}})}},D3zA:function(e,t,r){"use strict";var n=r("aI7X");e.exports=Function.prototype.bind||n},FpZJ:function(e,t,r){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var n=Object.getOwnPropertySymbols(e);if(1!==n.length||n[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(e,t);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},Gytx:function(e,t){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var p=i[u];if(!c(p))return!1;var l=e[p],f=t[p];if(!1===(o=r?r.call(n,l,f,p):void 0)||void 0===o&&l!==f)return!1}return!0}},HdW7:function(e,t,r){"use strict";var n=r("+IY2"),o=r("82c2");e.exports=function(){var e=n();return o(Object,{entries:e},{entries:function(){return Object.entries!==e}}),e}},KKHU:function(e,t,r){"use strict";var n=TypeError,o=Object.getOwnPropertyDescriptor;if(o)try{o({},"")}catch(A){o=null}var i=function(){throw new n},a=o?function(){try{return i}catch(e){try{return o(arguments,"callee").get}catch(t){return i}}}():i,c=r("UVaH")(),u=Object.getPrototypeOf||function(e){return e.__proto__},p=void 0,l="undefined"==typeof Uint8Array?void 0:u(Uint8Array),f={"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":c?u([][Symbol.iterator]()):void 0,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":void 0,"%AsyncFunctionPrototype%":void 0,"%AsyncGenerator%":void 0,"%AsyncGeneratorFunction%":void 0,"%AsyncGeneratorPrototype%":void 0,"%AsyncIteratorPrototype%":p&&c&&Symbol.asyncIterator?p[Symbol.asyncIterator]():void 0,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%DataViewPrototype%":"undefined"==typeof DataView?void 0:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float32ArrayPrototype%":"undefined"==typeof Float32Array?void 0:Float32Array.prototype,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%Float64ArrayPrototype%":"undefined"==typeof Float64Array?void 0:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":void 0,"%GeneratorFunction%":void 0,"%GeneratorPrototype%":void 0,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int8ArrayPrototype%":"undefined"==typeof Int8Array?void 0:Int8Array.prototype,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int16ArrayPrototype%":"undefined"==typeof Int16Array?void 0:Int8Array.prototype,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%Int32ArrayPrototype%":"undefined"==typeof Int32Array?void 0:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":c?u(u([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%JSONParse%":"object"==typeof JSON?JSON.parse:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&c?u((new Map)[Symbol.iterator]()):void 0,"%MapPrototype%":"undefined"==typeof Map?void 0:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%PromisePrototype%":"undefined"==typeof Promise?void 0:Promise.prototype,"%PromiseProto_then%":"undefined"==typeof Promise?void 0:Promise.prototype.then,"%Promise_all%":"undefined"==typeof Promise?void 0:Promise.all,"%Promise_reject%":"undefined"==typeof Promise?void 0:Promise.reject,"%Promise_resolve%":"undefined"==typeof Promise?void 0:Promise.resolve,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&c?u((new Set)[Symbol.iterator]()):void 0,"%SetPrototype%":"undefined"==typeof Set?void 0:Set.prototype,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":c?u(""[Symbol.iterator]()):void 0,"%StringPrototype%":String.prototype,"%Symbol%":c?Symbol:void 0,"%SymbolPrototype%":c?Symbol.prototype:void 0,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":a,"%TypedArray%":l,"%TypedArrayPrototype%":l?l.prototype:void 0,"%TypeError%":n,"%TypeErrorPrototype%":n.prototype,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ArrayPrototype%":"undefined"==typeof Uint8Array?void 0:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint16ArrayPrototype%":"undefined"==typeof Uint16Array?void 0:Uint16Array.prototype,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%Uint32ArrayPrototype%":"undefined"==typeof Uint32Array?void 0:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakMapPrototype%":"undefined"==typeof WeakMap?void 0:WeakMap.prototype,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%WeakSetPrototype%":"undefined"==typeof WeakSet?void 0:WeakSet.prototype},s=r("D3zA").call(Function.call,String.prototype.replace),y=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,d=/\\(\\)?/g,T=function(e){var t=[];return s(e,y,(function(e,r,n,o){t[t.length]=n?s(o,d,"$1"):r||e})),t},E=function(e,t){if(!(e in f))throw new SyntaxError("intrinsic "+e+" does not exist!");if(void 0===f[e]&&!t)throw new n("intrinsic "+e+" exists, but is not available. Please file an issue!");return f[e]};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new TypeError("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new TypeError('"allowMissing" argument must be a boolean');for(var r=T(e),i=E("%"+(r.length>0?r[0]:"")+"%",t),a=1;a<r.length;a+=1)if(null!=i)if(o&&a+1>=r.length){var c=o(i,r[a]);if(!t&&!(r[a]in i))throw new n("base intrinsic for "+e+" exists, but the property is not available.");i=c&&"get"in c&&!("originalValue"in c.get)?c.get:i[r[a]]}else i=i[r[a]];return i}},LUHJ:function(e,t,r){"use strict";var n=r("D3zA"),o=r("KKHU"),i=o("%Function.prototype.apply%"),a=o("%Function.prototype.call%"),c=o("%Reflect.apply%",!0)||n.call(a,i),u=o("%Object.defineProperty%",!0);if(u)try{u({},"a",{value:1})}catch(l){u=null}e.exports=function(){return c(n,a,arguments)};var p=function(){return c(n,i,arguments)};u?u(e.exports,"apply",{value:p}):e.exports.apply=p},LVGZ:function(e,t,r){"use strict";e.exports=r("k6Ie")},TJpk:function(e,t,r){t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=f(r("q1tI")),a=f(r("17x9")),c=f(r("8+s/")),u=f(r("bmMU")),p=r("v1p5"),l=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,E,A,m=(0,c.default)(p.reducePropsToState,p.handleClientStateChange,p.mapStateOnServer)((function(){return null})),b=(T=m,A=E=function(e){function t(){return y(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return n({},o,((t={})[r.type]=[].concat(o[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return n({},i,((t={})[o.type]=c,t.titleAttributes=n({},a),t));case l.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},a)});case l.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},a)})}return n({},i,((r={})[o.type]=n({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var o;r=n({},r,((o={})[t]=e[t],o))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=s(o,["children"]),c=(0,p.convertReactPropstoHtmlAttributes)(a);switch(r.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=s(e,["children"]),o=n({},r);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),E.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},E.defaultProps={defer:!0,encodeSpecialCharacters:!0},E.peek=T.peek,E.rewind=function(){var e=T.rewind();return e||(e=(0,p.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},UVaH:function(e,t,r){"use strict";(function(t){var n=t.Symbol,o=r("FpZJ");e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}}).call(this,r("yLpj"))},"YRY+":function(e,t,r){"use strict";var n=r("82c2"),o=r("LUHJ"),i=r("aJg2"),a=r("+IY2"),c=r("HdW7"),u=o(a(),Object);n(u,{getPolyfill:a,implementation:i,shim:c}),e.exports=u},"a+XO":function(e,t,r){},aI7X:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError(n+t);for(var r,a=o.call(arguments,1),c=function(){if(this instanceof r){var n=t.apply(this,a.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(e,a.concat(o.call(arguments)))},u=Math.max(0,t.length-a.length),p=[],l=0;l<u;l++)p.push("$"+l);if(r=Function("binder","return function ("+p.join(",")+"){ return binder.apply(this,arguments); }")(c),t.prototype){var f=function(){};f.prototype=t.prototype,r.prototype=new f,f.prototype=null}return r}},aJg2:function(e,t,r){"use strict";var n=r("LVGZ"),o=r("oNNP"),i=r("yDRk")("Object.prototype.propertyIsEnumerable");e.exports=function(e){var t=n(e),r=[];for(var a in t)o(t,a)&&i(t,a)&&r.push([a,t[a]]);return r}},bmMU:function(e,t,r){"use strict";var n=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,u,p,l=n(t),f=n(r);if(l&&f){if((u=t.length)!=r.length)return!1;for(c=u;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(l!=f)return!1;var s=t instanceof Date,y=r instanceof Date;if(s!=y)return!1;if(s&&y)return t.getTime()==r.getTime();var d=t instanceof RegExp,T=r instanceof RegExp;if(d!=T)return!1;if(d&&T)return t.toString()==r.toString();var E=o(t);if((u=E.length)!==o(r).length)return!1;for(c=u;0!=c--;)if(!i.call(r,E[c]))return!1;if(a&&t instanceof Element&&r instanceof Element)return t===r;for(c=u;0!=c--;)if(!("_owner"===(p=E[c])&&t.$$typeof||e(t[p],r[p])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},n=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},k6Ie:function(e,t,r){"use strict";var n=r("KKHU")("%TypeError%");e.exports=function(e,t){if(null==e)throw new n(t||"Cannot call method on "+e);return e}},nesH:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=r("q1tI"),c=r("TJpk").Helmet,u=r("YRY+"),p=r("YVoz");e.exports={HelmetDatoCms:function(e){var t=e.seo,r=e.favicon,o=e.children,l=i(e,["seo","favicon","children"]);return a.createElement(c,l,(t?t.tags:[]).concat(r?r.tags:[]).map((function(e,t){return a.createElement(e.tagName,p({key:"helmet-datocms-".concat(t)},u(e.attributes||{}).reduce((function(e,t){var r=n(t,2),o=r[0],i=r[1];return i&&(e[o]=i),e}),{})),e.content)})).concat(o))}}},oNNP:function(e,t,r){"use strict";var n=r("D3zA");e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},sYn3:function(e,t,r){"use strict";var n;if(!Object.keys){var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=r("1KsK"),c=Object.prototype.propertyIsEnumerable,u=!c.call({toString:null},"toString"),p=c.call((function(){}),"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],f=function(e){var t=e.constructor;return t&&t.prototype===e},s={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!s["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{f(window[e])}catch(t){return!0}}catch(t){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===i.call(e),n=a(e),c=t&&"[object String]"===i.call(e),s=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var d=p&&r;if(c&&e.length>0&&!o.call(e,0))for(var T=0;T<e.length;++T)s.push(String(T));if(n&&e.length>0)for(var E=0;E<e.length;++E)s.push(String(E));else for(var A in e)d&&"prototype"===A||!o.call(e,A)||s.push(String(A));if(u)for(var m=function(e){if("undefined"==typeof window||!y)return f(e);try{return f(e)}catch(t){return!1}}(e),b=0;b<l.length;++b)m&&"constructor"===l[b]||!o.call(e,l[b])||s.push(l[b]);return s}}e.exports=n},v1p5:function(e,t,r){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=u(r("q1tI")),a=u(r("YVoz")),c=r("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var p,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=E(e,c.TAG_NAMES.TITLE),r=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},s=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},y=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},T=function(e,t,r){var o={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],p=u.toLowerCase();-1===t.indexOf(p)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||p===c.TAG_PROPERTIES.REL&&"stylesheet"===e[p].toLowerCase()||(r=p),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(r=u)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return o[r]||(o[r]={}),n[r]||(n[r]={}),!o[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),u=0;u<i.length;u++){var p=i[u],l=(0,a.default)({},o[p],n[p]);o[p]=l}return e}),[]).reverse()},E=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},A=(p=Date.now(),function(e){var t=Date.now();t-p>16?(p=t,e(t)):setTimeout((function(){A(e)}),0)}),m=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},h=null,P=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,p=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,s=e.title,y=e.titleAttributes;_(c.TAG_NAMES.BODY,n),_(c.TAG_NAMES.HTML,o),O(s,y);var d={baseTag:I(c.TAG_NAMES.BASE,r),linkTags:I(c.TAG_NAMES.LINK,i),metaTags:I(c.TAG_NAMES.META,a),noscriptTags:I(c.TAG_NAMES.NOSCRIPT,u),scriptTags:I(c.TAG_NAMES.SCRIPT,l),styleTags:I(c.TAG_NAMES.STYLE,f)},T={},E={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(E[e]=d[e].oldTags)})),t&&t(),p(e,T,E)},g=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),_(c.TAG_NAMES.TITLE,t)},_=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var p=a[u],l=t[p]||"";r.getAttribute(p)!==l&&r.setAttribute(p,l),-1===o.indexOf(p)&&o.push(p);var f=i.indexOf(p);-1!==f&&i.splice(f,1)}for(var s=i.length-1;s>=0;s--)r.removeAttribute(i[s]);o.length===i.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},I=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,o=w(r,n),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=R(r),i=g(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return w(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){h&&v(h),e.defer?h=b((function(){P(e,(function(){h=null}))})):(P(e),h=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,p=e.scriptTags,l=e.styleTags,f=e.title,s=void 0===f?"":f,y=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,n),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,o,n),link:M(c.TAG_NAMES.LINK,i,n),meta:M(c.TAG_NAMES.META,a,n),noscript:M(c.TAG_NAMES.NOSCRIPT,u,n),script:M(c.TAG_NAMES.SCRIPT,p,n),style:M(c.TAG_NAMES.STYLE,l,n),title:M(c.TAG_NAMES.TITLE,{title:s,titleAttributes:y},n)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:y(c.ATTRIBUTE_NAMES.BODY,e),defer:E(e,c.HELMET_PROPS.DEFER),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:y(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:s(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:y(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=S}).call(this,r("yLpj"))},yDRk:function(e,t,r){"use strict";var n=r("KKHU"),o=r("LUHJ"),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")?o(r):r}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=1405459e7ae8270a29c999e378aeab2daf7cd2ce-9852e86c497221196d9f.js.map