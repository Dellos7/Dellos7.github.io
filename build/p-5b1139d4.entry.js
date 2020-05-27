import{r as t,h as e}from"./p-c9891ee7.js";import{B as o,t as i}from"./p-6c623112.js";import{H as s,s as a}from"./p-beb6e670.js";const r=class{constructor(e){t(this,e),this.idxCurrentFirstPost=0,this.postsPage=0,this.maxPosts=6}async componentWillLoad(){this.imgFilterFromColor=getComputedStyle(document.documentElement).getPropertyValue("--primary-color"),this.imgFilterToColor=getComputedStyle(document.documentElement).getPropertyValue("--secondary-color"),this.posts=await this.readPosts(),this.maxPages=Math.floor(o.posts.length/this.maxPosts),console.log("maxPages",this.maxPages)}async componentWillUpdate(){this.posts=await this.readPosts()}readPosts(){return o.readPosts(this.idxCurrentFirstPost,this.idxCurrentFirstPost+this.maxPosts)}prevPage(){this.postsPage>0&&(this.postsPage--,this.idxCurrentFirstPost=this.postsPage*this.maxPosts)}nextPage(){this.postsPage<this.maxPages&&(this.postsPage++,this.idxCurrentFirstPost=this.postsPage*this.maxPosts)}formatDate(t){return t.toLocaleDateString()}render(){return e("div",{class:"blog-page"},e(s,null,e("title",null,"📖 Blog ",a.pageTitleSuffix)),e("header",null,e("user-name",{content:"Blog",showDomain:!0})),e("main",null,e("div",{class:"pager"},this.postsPage>0?e("a",{class:"pager__prev",onClick:()=>this.prevPage()},"← Más nuevos"):"",this.postsPage<this.maxPages?e("a",{class:"pager__next",onClick:()=>this.nextPage()},"Anteriores →"):""),e("ul",{class:"posts-list"},this.posts.length>0?this.posts.map(t=>e("li",{class:"posts-list__item"},e("stencil-route-link",{url:"/"+o.config.posts_route+"/"+t.unique_link},e("image-filter",{fromColor:this.imgFilterFromColor,toColor:this.imgFilterToColor,src:t.metadata.image}),e("h2",{class:"posts-list__item-title"},t.metadata.title)),e("div",{class:"posts-list__item-tags",innerHTML:i(t.metadata.tags)}),e("div",{class:"posts-list__item-date texto-gradiente-1"},this.formatDate(t.metadata.date)),e("div",{class:"posts-list__item-summary"},t.metadata.summary))):e("p",{class:"no-posts"},"- No hay posts -"))))}};r.style='@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");*{padding:0;margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.blog-page{width:95%;margin:2rem auto}.blog-page ul.posts-list{list-style:none;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:distribute;justify-content:space-around}.blog-page stencil-route-link a:link{text-decoration:none}.posts-list__item{background-color:var(--secondary-color);border-radius:8px;margin-bottom:2rem;overflow:hidden;-webkit-box-shadow:0px 7px 36px -15px #61bdc5;-moz-box-shadow:0px 7px 36px -15px #61bdc5;box-shadow:0px 7px 36px -15px #61bdc5;font-size:1.8rem;-webkit-animation:fadeIn 1s linear;animation:fadeIn 1s linear}.posts-list__item image-filter::part(img){padding-top:56.25%}.posts-list__item-title{padding:1rem 1.5rem 0.3rem 1.5rem;color:var(--quaternary-color)}.posts-list__item-date{font-weight:bold;margin-top:0.5rem;padding:0.3rem 1.5rem}.posts-list__item-summary{text-align:justify;color:white;font-size:1.6rem;margin-top:0.5rem;padding:0.3rem 1.5rem;padding-bottom:2rem}.pager{position:relative;min-height:4rem}.pager a[class*=pager__]{text-decoration:underline}.pager__next{cursor:pointer;position:absolute !important;right:0}.pager__prev{cursor:pointer;position:absolute !important;left:0}.no-posts{color:white;text-align:center}@media all and (min-width: 1124px){.blog-page{width:90%}}@media all and (min-width: 768px){.blog-page ul.posts-list{-ms-flex-flow:row;flex-flow:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.posts-list__item{width:45%}}@media all and (max-width: 768px) and (min-width: 500px){.blog-page{width:70%}}@media screen and (hover: hover){.pager a[class*=pager__]{text-decoration:none}}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}';export{r as blog_page}