import{r as t,c as s}from"./p-fd429f32.js";import{A as r}from"./p-ca97c748.js";const i=class{constructor(s){t(this,s)}componentWillLoad(){if(this.history&&this.root&&this.url)return this.history.replace((s=this.root,"/"==(t=this.url).charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+t:s+t));var t,s}get el(){return s(this)}};r.injectProps(i,["history","root"]);export{i as stencil_router_redirect}