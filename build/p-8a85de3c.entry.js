import{r as t,c as s}from"./p-b091af4d.js";const c=class{constructor(s){t(this,s),this.context={},this.renderer=()=>null}connectedCallback(){null!=this.subscribe&&(this.unsubscribe=this.subscribe(this.el,"context"))}disconnectedCallback(){null!=this.unsubscribe&&this.unsubscribe()}render(){return this.renderer(Object.assign({},this.context))}get el(){return s(this)}};export{c as context_consumer}