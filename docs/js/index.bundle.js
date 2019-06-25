!function(A){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!C[e]||!f[e])return;for(var n in f[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(S[n]=t[n]);0==--c&&0===u&&m()}(e,t),n&&n(e,t)};var o,i=!0,D="0f1486f4f7abed1c68a7",t=1e4,H={},I=[],r=[];function s(t){var n=L[t];if(!n)return z;function i(e){return n.hot.active?(L[e]?-1===L[e].parents.indexOf(t)&&L[e].parents.push(t):(I=[t],o=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),I=[]),z(e)}function e(t){return{configurable:!0,enumerable:!0,get:function(){return z[t]},set:function(e){z[t]=e}}}for(var r in z)Object.prototype.hasOwnProperty.call(z,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(i,r,e(r));return i.e=function(e){return"ready"===V&&M("prepare"),u++,z.e(e).then(t,function(e){throw t(),e});function t(){u--,"prepare"===V&&(d[e]||h(e),0===u&&0===c&&m())}},i.t=function(e,t){return 1&t&&(e=i(e)),z.t(e,-2&t)},i}var a=[],V="idle";function M(e){V=e;for(var t=0;t<a.length;t++)a[t].call(null,e)}var l,S,R,c=0,u=0,d={},f={},C={};function q(e){return+e+""===e?+e:e}function p(e){if("idle"!==V)throw new Error("check() is only allowed in idle status");return i=e,M("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,r=z.p+""+D+".hot-update.json";i.open("GET",r,!0),i.timeout=e,i.send(null)}catch(e){return n(e)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===i.status)t();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+r+" failed."));else{try{var e=JSON.parse(i.responseText)}catch(e){return void n(e)}t(e)}}})}(t).then(function(e){if(!e)return M("idle"),null;f={},d={},C=e.c,R=e.h,M("prepare");var t=new Promise(function(e,t){l={resolve:e,reject:t}});S={};return h(0),"prepare"===V&&0===u&&0===c&&m(),t})}function h(e){C[e]?(f[e]=!0,c++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=z.p+""+e+"."+D+".hot-update.js",document.head.appendChild(t)}(e)):d[e]=!0}function m(){M("ready");var t=l;if(l=null,t)if(i)Promise.resolve().then(function(){return y(i)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in S)Object.prototype.hasOwnProperty.call(S,n)&&e.push(q(n));t.resolve(e)}}function y(n){if("ready"!==V)throw new Error("apply() is only allowed in ready status");var e,t,i,u,r;function o(e){for(var t=[e],n={},i=t.map(function(e){return{chain:[e],id:e}});0<i.length;){var r=i.pop(),o=r.id,s=r.chain;if((u=L[o])&&!u.hot._selfAccepted){if(u.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(u.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var a=0;a<u.parents.length;a++){var l=u.parents[a],c=L[l];if(c){if(c.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(c.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),d(n[l],[o])):(delete n[l],t.push(l),i.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];-1===e.indexOf(i)&&e.push(i)}}n=n||{};function s(){console.warn("[HMR] unexpected require("+p.moduleId+") to disposed module")}var a={},l=[],c={};for(var f in S)if(Object.prototype.hasOwnProperty.call(S,f)){var p;r=q(f);var h=!1,m=!1,y=!1,v="";switch((p=S[f]?o(r):{type:"disposed",moduleId:f}).chain&&(v="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+p.moduleId+v));break;case"declined":n.onDeclined&&n.onDeclined(p),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+v));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(p),n.ignoreUnaccepted||(h=new Error("Aborted because "+r+" is not accepted"+v));break;case"accepted":n.onAccepted&&n.onAccepted(p),m=!0;break;case"disposed":n.onDisposed&&n.onDisposed(p),y=!0;break;default:throw new Error("Unexception type "+p.type)}if(h)return M("abort"),Promise.reject(h);if(m)for(r in c[r]=S[r],d(l,p.outdatedModules),p.outdatedDependencies)Object.prototype.hasOwnProperty.call(p.outdatedDependencies,r)&&(a[r]||(a[r]=[]),d(a[r],p.outdatedDependencies[r]));y&&(d(l,[p.moduleId]),c[r]=s)}var g,b=[];for(t=0;t<l.length;t++)r=l[t],L[r]&&L[r].hot._selfAccepted&&c[r]!==s&&b.push({module:r,errorHandler:L[r].hot._selfAccepted});M("dispose"),Object.keys(C).forEach(function(e){!1===C[e]&&function(e){delete installedChunks[e]}(e)});for(var w,O,k=l.slice();0<k.length;)if(r=k.pop(),u=L[r]){var E={},_=u.hot._disposeHandlers;for(i=0;i<_.length;i++)(e=_[i])(E);for(H[r]=E,u.hot.active=!1,delete L[r],delete a[r],i=0;i<u.children.length;i++){var x=L[u.children[i]];x&&0<=(g=x.parents.indexOf(r))&&x.parents.splice(g,1)}}for(r in a)if(Object.prototype.hasOwnProperty.call(a,r)&&(u=L[r]))for(O=a[r],i=0;i<O.length;i++)w=O[i],0<=(g=u.children.indexOf(w))&&u.children.splice(g,1);for(r in M("apply"),D=R,c)Object.prototype.hasOwnProperty.call(c,r)&&(A[r]=c[r]);var j=null;for(r in a)if(Object.prototype.hasOwnProperty.call(a,r)&&(u=L[r])){O=a[r];var P=[];for(t=0;t<O.length;t++)if(w=O[t],e=u.hot._acceptedDependencies[w]){if(-1!==P.indexOf(e))continue;P.push(e)}for(t=0;t<P.length;t++){e=P[t];try{e(O)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:r,dependencyId:O[t],error:e}),n.ignoreErrored||(j=j||e)}}}for(t=0;t<b.length;t++){var T=b[t];r=T.module,I=[r];try{z(r)}catch(t){if("function"==typeof T.errorHandler)try{T.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:r,error:e,originalError:t}),n.ignoreErrored||(j=j||e),j=j||t}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:r,error:t}),n.ignoreErrored||(j=j||t)}}return j?(M("fail"),Promise.reject(j)):(M("idle"),new Promise(function(e){e(l)}))}var L={};function z(e){if(L[e])return L[e].exports;var t=L[e]={i:e,l:!1,exports:{},hot:function(e){var i={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)i._selfAccepted=!0;else if("function"==typeof e)i._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)i._acceptedDependencies[e[n]]=t||function(){};else i._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)i._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)i._declinedDependencies[e[t]]=!0;else i._declinedDependencies[e]=!0},dispose:function(e){i._disposeHandlers.push(e)},addDisposeHandler:function(e){i._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=i._disposeHandlers.indexOf(e);0<=t&&i._disposeHandlers.splice(t,1)},check:p,apply:y,status:function(e){if(!e)return V;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);0<=t&&a.splice(t,1)},data:H[e]};return o=void 0,i}(e),parents:(r=I,I=[],r),children:[]};return A[e].call(t.exports,t,t.exports,s(e)),t.l=!0,t.exports}z.m=A,z.c=L,z.d=function(e,t,n){z.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},z.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},z.t=function(t,e){if(1&e&&(t=z(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(z.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)z.d(n,i,function(e){return t[e]}.bind(null,i));return n},z.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return z.d(t,"a",t),t},z.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},z.p="",z.h=function(){return D},s(250)(z.s=250)}({107:function(e,t,n){function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var i,o;window,e.exports=(o={},r.m=i=[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.positions={top:0,bottom:0,height:0}}return function(e,t){i(e.prototype,t)}(e,[{key:"setViewportTop",value:function(){return this.positions.top=window.pageYOffset,this.positions}},{key:"setViewportBottom",value:function(){return this.positions.bottom=this.positions.top+this.positions.height,this.positions}},{key:"setViewportHeight",value:function(){return this.positions.height=document.documentElement.clientHeight,this.positions}},{key:"setViewportAll",value:function(){return this.positions.top=window.pageYOffset,this.positions.bottom=this.positions.top+this.positions.height,this.positions.height=document.documentElement.clientHeight,this.positions}}]),e}(),o=function(){for(var e,t="transform webkitTransform mozTransform oTransform msTransform".split(" "),n=0;void 0===e;)e=void 0!==document.createElement("div").style[t[n]]?t[n]:void 0,n+=1;return e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.elementContainer=e,this.settings=t,this.isVisible=!0,this.isInit=!1,this.oldTranslateValue=-1,this.init=this.init.bind(this),function(e){return!(!e||!e.complete||void 0!==e.naturalWidth&&0===e.naturalWidth)}(e)?this.init():this.element.addEventListener("load",this.init)}return function(e,t){s(e.prototype,t)}(n,[{key:"init",value:function(){this.isInit||this.element.closest(".simpleParallax")||(!1===this.settings.overflow&&this.wrapElement(this.element),this.setStyle(),this.getElementOffset(),this.intersectionObserver(),this.getTranslateValue(),this.animate(),this.isInit=!0)}},{key:"wrapElement",value:function(){var e=this.element.closest("picture")||this.element,t=document.createElement("div");t.classList.add("simpleParallax"),t.style.overflow="hidden",e.parentNode.insertBefore(t,e),t.appendChild(e),this.elementContainer=t}},{key:"unWrapElement",value:function(){var e=this.elementContainer;e.replaceWith.apply(e,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e.childNodes))}},{key:"setStyle",value:function(){!1===this.settings.overflow&&(this.element.style[o]="scale(".concat(this.settings.scale,")")),0<this.settings.delay&&(this.element.style.transition="transform ".concat(this.settings.delay,"s ").concat(this.settings.transition)),this.element.style.willChange="transform"}},{key:"unSetStyle",value:function(){this.element.style.willChange="",this.element.style[o]="",this.element.style.transition=""}},{key:"getElementOffset",value:function(){var e=this.elementContainer.getBoundingClientRect();this.elementHeight=e.height,this.elementTop=e.top+f.positions.top,this.elementBottom=this.elementHeight+this.elementTop}},{key:"buildThresholdList",value:function(){for(var e=[],t=1;t<=this.elementHeight;t++){var n=t/this.elementHeight;e.push(n)}return e}},{key:"intersectionObserver",value:function(){var e={root:null,threshold:this.buildThresholdList()};this.observer=new IntersectionObserver(this.intersectionObserverCallback.bind(this),e),this.observer.observe(this.element)}},{key:"intersectionObserverCallback",value:function(e){for(var t=e.length-1;0<=t;t--)e[t].isIntersecting?this.isVisible=!0:this.isVisible=!1}},{key:"checkIfVisible",value:function(){return this.elementBottom>f.positions.top&&this.elementTop<f.positions.bottom}},{key:"getRangeMax",value:function(){var e=this.element.clientHeight;this.rangeMax=e*this.settings.scale-e}},{key:"getTranslateValue",value:function(){var e=((f.positions.bottom-this.elementTop)/((f.positions.height+this.elementHeight)/100)).toFixed(1);return e=Math.min(100,Math.max(0,e)),this.oldPercentage!==e&&(this.rangeMax||this.getRangeMax(),this.translateValue=(e/100*this.rangeMax-this.rangeMax/2).toFixed(0),this.oldTranslateValue!==this.translateValue&&(this.oldPercentage=e,this.oldTranslateValue=this.translateValue,!0))}},{key:"animate",value:function(){var e,t=0,n=0;(this.settings.orientation.includes("left")||this.settings.orientation.includes("right"))&&(n="".concat(this.settings.orientation.includes("left")?-1*this.translateValue:this.translateValue,"px")),(this.settings.orientation.includes("up")||this.settings.orientation.includes("down"))&&(t="".concat(this.settings.orientation.includes("up")?-1*this.translateValue:this.translateValue,"px")),e=!1===this.settings.overflow?"translate3d(".concat(n,", ").concat(t,", 0) scale(").concat(this.settings.scale,")"):"translate3d(".concat(n,", ").concat(t,", 0)"),this.element.style[o]=e}}]),n}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,"viewport",function(){return f}),n.d(t,"default",function(){return y});var c,u,d,f=new r,p=!0,h=!1,m=[],y=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),e&&(this.elements=function(e){return NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)?Array.from(e):"string"==typeof e||e instanceof String?document.querySelectorAll(e):[e]}(e),this.defaults={delay:.4,orientation:"up",scale:1.3,overflow:!1,transition:"cubic-bezier(0,0,0,1)",breakpoint:!1},this.settings=Object.assign(this.defaults,t),this.settings.breakpoint&&document.documentElement.clientWidth<=this.settings.breakpoint||("IntersectionObserver"in window||(p=!1),this.lastPosition=-1,this.resizeIsDone=this.resizeIsDone.bind(this),this.handleResize=this.handleResize.bind(this),this.proceedRequestAnimationFrame=this.proceedRequestAnimationFrame.bind(this),this.init()))}return function(e,t){l(e.prototype,t)}(n,[{key:"init",value:function(){f.setViewportAll();for(var e=this.elements.length-1;0<=e;e--){var t=new a(this.elements[e],this.settings);m.push(t)}c=m.length,h||(this.proceedRequestAnimationFrame(),window.addEventListener("resize",this.resizeIsDone),h=!0)}},{key:"resizeIsDone",value:function(){clearTimeout(d),d=setTimeout(this.handleResize,500)}},{key:"handleResize",value:function(){f.setViewportAll(),this.settings.breakpoint&&document.documentElement.clientWidth<=this.settings.breakpoint&&this.destroy();for(var e=c-1;0<=e;e--)m[e].getElementOffset(),m[e].getRangeMax();this.lastPosition=-1}},{key:"proceedRequestAnimationFrame",value:function(){if(f.setViewportTop(),this.lastPosition!==f.positions.top){f.setViewportBottom();for(var e=c-1;0<=e;e--)this.proceedElement(m[e]);u=window.requestAnimationFrame(this.proceedRequestAnimationFrame),this.lastPosition=f.positions.top}else u=window.requestAnimationFrame(this.proceedRequestAnimationFrame)}},{key:"proceedElement",value:function(e){(p?e.isVisible:e.checkIfVisible())&&e.getTranslateValue()&&e.animate()}},{key:"destroy",value:function(){var t=this,n=[];m=m.filter(function(e){if(!t.elements.includes(e.element))return e;n.push(e)});for(var e=n.length-1;0<=e;e--)n[e].unSetStyle(),!1===this.settings.overflow&&n[e].unWrapElement();(c=m.length)||(window.cancelAnimationFrame(u),window.removeEventListener("resize",this.handleResize))}}]),n}()}],r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)).default},250:function(e,t,n){"use strict";n.r(t);n(251),n(252),n(253);var i=n(107),r=n.n(i),o=document.querySelectorAll(".parallax");new r.a(o,{scale:1.4});function s(e){return document.querySelector(e)}var a=s(".preloader-logo__circle"),l=s(".logo__circle.located"),c=s(".counter-circle"),u=s(".overlay"),d=1;function f(){100<=d?(a.classList.add("loaded"),c.classList.add("loaded"),u.classList.add("loaded"),setTimeout(function(){c.style.display="none",u.style.display="none",l.style.opacity=1},1e3)):setTimeout(f,10)}!function e(){c.textContent="".concat(d,"%"),console.log("".concat(d,"%")),(d+=1)<100?setTimeout(function(){e()},20):c.textContent="100%"}(),window.addEventListener("load",function(){f()})},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){}});