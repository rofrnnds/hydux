!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.picodom=n():(e.hydux=e.hydux||{},e.hydux.picodom=n())}("undefined"!=typeof self?self:this,function(){return function(e){function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=13)}({13:function(e,n,r){"use strict";function t(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];if(n)for(var o in n)o.match(/^on[A-Z]\w+$/)&&(n[o.toLowerCase()]=n[o]);return u.h.apply(void 0,[e,n].concat(r))}function o(e){void 0===e&&(e=document.body);var n,r;return function(t){return function(o){return t(i({},o,{init:function(){return e.innerHTML="",o.init()},onRender:function(t){o.onRender&&o.onRender(t),r&&window.cancelAnimationFrame(r),r=window.requestAnimationFrame(function(){return u.patch(n,n=t,e)})}}))}}}var i=this&&this.__assign||Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};Object.defineProperty(n,"__esModule",{value:!0});var u=r(14),f={createElement:t};n.React=f,n.h=t,n.default=o},14:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=r(5);r.d(n,"h",function(){return t.a});var o=r(15);r.d(n,"patch",function(){return o.a})},15:function(e,n,r){"use strict";function t(e,n,r,t){for(var o=a(r||(r=document.body),r.children[0],e,n);t=l.pop();)t();return o}function o(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r}function i(e,n){if("string"==typeof e)var r=document.createTextNode(e);else{var r=(n=n||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type);e.props&&e.props.oncreate&&l.push(function(){e.props.oncreate(r)});for(var t=0;t<e.children.length;t++)r.appendChild(i(e.children[t],n));for(var t in e.props)u(r,t,e.props[t])}return r}function u(e,n,r,t){if("key"===n);else if("style"===n)for(var n in o(t,r=r||{}))e.style[n]=r[n]||"";else{try{e[n]=r}catch(e){}"function"!=typeof r&&(r?e.setAttribute(n,r):e.removeAttribute(n))}}function f(e,n,r){for(var t in o(n,r)){var i=r[t],f="value"===t||"checked"===t?e[t]:n[t];i!==f&&u(e,t,i,f)}r&&r.onupdate&&l.push(function(){r.onupdate(e,n)})}function c(e,n,r){function t(){e.removeChild(n)}r&&r.onremove&&"function"==typeof(r=r.onremove(n))?r(t):t()}function p(e){if(e&&e.props)return e.props.key}function a(e,n,r,t,o,u){if(null==r)n=e.insertBefore(i(t,o),n);else if(null!=t.type&&t.type===r.type){f(n,r.props,t.props),o=o||"svg"===t.type;for(var l=t.children.length,s=r.children.length,d={},v=[],h={},y=0;y<s;y++){var m=v[y]=n.childNodes[y],g=r.children[y],b=p(g);null!=b&&(d[b]=[m,g])}for(var y=0,x=0;x<l;){var m=v[y],g=r.children[y],w=t.children[x],b=p(g);if(h[b])y++;else{var j=p(w),O=d[j]||[];null==j?(null==b&&(a(n,m,g,w,o),x++),y++):(b===j?(a(n,O[0],O[1],w,o),y++):O[0]?(n.insertBefore(O[0],m),a(n,O[0],O[1],w,o)):a(n,m,null,w,o),x++,h[j]=w)}}for(;y<s;){var g=r.children[y],b=p(g);null==b&&c(n,v[y],g.props),y++}for(var y in d){var O=d[y],_=O[1];h[_.props.key]||c(n,O[0],_.props)}}else n&&t!==n.nodeValue&&("string"==typeof t&&"string"==typeof r?n.nodeValue=t:(n=e.insertBefore(i(t,o),u=n),c(e,u,r.props)));return n}n.a=t;var l=(r(5),[])},5:function(e,n,r){"use strict";function t(e,n){var r,t=[];for(o=arguments.length;o-- >2;)i.push(arguments[o]);for(;i.length;)if(Array.isArray(r=i.pop()))for(o=r.length;o--;)i.push(r[o]);else null!=r&&!0!==r&&!1!==r&&t.push("number"==typeof r?r+="":r);return"string"==typeof e?{type:e,props:n||{},children:t}:e(n||{},t)}n.a=t;var o,i=[]}})});
//# sourceMappingURL=hydux.picodom.js.map