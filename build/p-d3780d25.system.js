System.register([],(function(r){"use strict";return{execute:function(){var e=function(r){return!Array.isArray(r)&&r!==null&&typeof r==="object"};var t=function(r){var e=r.vchildren;return Array.isArray(e)};var n=function(r,t){var n=r.vattrs;if(t===void 0){t=[]}return e(n)&&t.every(n.hasOwnProperty.bind(n))};var a=function(r){var e=r.vtext;return typeof e==="string"};var i=function(r){return typeof r==="object"&&r.nodeType===1&&typeof r.ownerDocument==="object"};var u=function(r){return Array.isArray(r)&&r.every(i)};var o=function(r){return{vattrs:r.$attrs$,vchildren:r.$children$,vkey:r.$key$,vname:r.$name$,vtag:r.$tag$,vtext:r.$text$}};var v=function(r){var e=r.vtag,t=r.vattrs,n=r.vchildren,a=r.vtext;if(a!=null){return document.createTextNode(a)}var i=document.createElement(e);if(t!=null){for(var u in t){i.setAttribute(u,t[u])}}if(n!=null){for(var c=0,l=n;c<l.length;c++){var f=l[c];i.appendChild(v(o(f)))}}return i};var c=function(r){return i(r)||u(r)&&r.length===2};var l=function(r){if(Array.isArray(r)){return document.head.replaceChild(r[0],r[1])}return document.head.appendChild(r)};function f(r,e){var n=(r.vchildren||[])[0];if(t(r)&&a(o(n))){return[v(r),e.querySelector("title")]}}function d(r,e){var t,n,a;var i=((t=r.vattrs)===null||t===void 0?void 0:t.property)?"property":"name";var u=((n=r.vattrs)===null||n===void 0?void 0:n.property)||((a=r.vattrs)===null||a===void 0?void 0:a.name);var o=e.querySelector("meta["+i+'="'+u+'"]');if(o!==null){return[v(r),o]}else{return v(r)}}function s(r){if(!t(r)){return v(r)}}function p(r){var e=(r.vchildren||[])[0];if(t(r)&&a(o(e))){return v(r)}}function y(r){if(t(r)||n(r)){return v(r)}}function m(r){if(!t(r)&&n(r)){return v(r)}}var h=v;var g=v;var $={title:f,meta:d,link:s,style:p,script:y,base:m,template:h,noscript:g};var A=document&&document.head;var b=Object.keys($);var x=function(r){return b.indexOf(r.$tag$)>-1};var C=function(r){return $[r.vtag](r,document.head)};var j=r("H",(function(r,e,t){if(!A){return null}var n=e.filter(x);var a=[];t.forEach(n,(function(r){a.push(C(r))}));a.filter(c).forEach(l);return null}));var D={mainPageTitle:"David López Castellote 💻 👨‍🏫",mainPageDescription:"Página web personal de David López Castellote: programador y proyecto de futuro profesor 💻 👨‍🏫",mainPageImage:"/assets/profile.jpeg",pageTitleSuffix:"- David López Castellote 💻 👨‍🏫",twitterUser:"@_dlopezcast"};r("s",D)}}}));