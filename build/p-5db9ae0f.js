const t=({vchildren:t})=>Array.isArray(t),e=({vattrs:t},e=[])=>{return o=t,!Array.isArray(o)&&null!==o&&"object"==typeof o&&e.every(t.hasOwnProperty.bind(t));var o},o=({vtext:t})=>"string"==typeof t,n=t=>"object"==typeof t&&1===t.nodeType&&"object"==typeof t.ownerDocument,r=t=>({vattrs:t.t,vchildren:t.o,vkey:t.i,vname:t.l,vtag:t.u,vtext:t.s}),i=({vtag:t,vattrs:e,vchildren:o,vtext:n})=>{if(null!=n)return document.createTextNode(n);const l=document.createElement(t);if(null!=e)for(const r in e)l.setAttribute(r,e[r]);if(null!=o)for(const a of o)l.appendChild(i(r(a)));return l},l=t=>n(t)||(t=>Array.isArray(t)&&t.every(n))(t)&&2===t.length,a=t=>Array.isArray(t)?document.head.replaceChild(t[0],t[1]):document.head.appendChild(t),c={title:function(e,n){const l=(e.vchildren||[])[0];if(t(e)&&o(r(l)))return[i(e),n.querySelector("title")]},meta:function(t,e){var o,n,r;const l=(null===(o=t.vattrs)||void 0===o?void 0:o.property)?"property":"name",a=(null===(n=t.vattrs)||void 0===n?void 0:n.property)||(null===(r=t.vattrs)||void 0===r?void 0:r.name),c=e.querySelector(`meta[${l}="${a}"]`);return null!==c?[i(t),c]:i(t)},link:function(e){if(!t(e))return i(e)},style:function(e){const n=(e.vchildren||[])[0];if(t(e)&&o(r(n)))return i(e)},script:function(o){if(t(o)||e(o))return i(o)},base:function(o){if(!t(o)&&e(o))return i(o)},template:i,noscript:i},u=document&&document.head,s=Object.keys(c),d=t=>s.indexOf(t.u)>-1,f=(t,e,o)=>{if(!u)return null;const n=e.filter(d),r=[];return o.forEach(n,t=>{var e;r.push(c[(e=t).vtag](e,document.head))}),r.filter(l).forEach(a),null},p=" - David López Castellote 💻 👨‍🏫",v="/assets/profile.jpeg";let m={twitterUser:"@_dlopezcast",titleSuffix:p,root:{title:"David López Castellote 💻 👨‍🏫",description:"Página web personal de David López Castellote: programador y proyecto de futuro profesor 💻 👨‍🏫",image:v},blog:{title:"📖 Blog"+p,description:"Blog enfocado a la programación, el desarrollo web y móvil y la educación.",image:v},contact:{title:"📧 Contacto"+p,description:"¡Contacta conmigo!",image:v},about:{title:"🧐 Sobre mí"+p,description:"Descubre un poco acerca de mí.",image:v}};export{f as H,m as s}