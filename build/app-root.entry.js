import { r as registerInstance, h } from './index-70ad26c6.js';
import { B as BlogService } from './blog-service-32da7209.js';

const appRootCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}stencil-route-link a:not(.no-decorar){display:inline}a.no-decorar:link{color:inherit;text-decoration:none}a.no-decorar:active{color:inherit}a.no-decorar:visited{color:inherit;text-decoration:none}a:not(.no-decorar){overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;color:white;font-weight:bold}a:not(.no-decorar):link{text-decoration:underline;color:inherit}a:not(.no-decorar):active{color:inherit}a:not(.no-decorar):visited{color:inherit}@media screen and (hover: hover){a:not(.no-decorar){display:inline-block}a:not(.no-decorar),.link:not(.no-decorar){position:relative}a:not(.no-decorar)::after,.link:not(.no-decorar)::after{content:\"\";position:absolute;z-index:-1;top:70%;left:-0.1px;right:-0.1px;bottom:0;transition:top 0.1s ease-in-out;background-color:rgba(255, 255, 255, 0.4)}a:not(.no-decorar):link,.link:not(.no-decorar):link{text-decoration:none}a:not(.no-decorar):hover,.link:not(.no-decorar):hover{color:var(--secondary-color)}a:not(.no-decorar):hover::after,.link:not(.no-decorar):hover::after{top:0}}.texto-gradiente-1{width:fit-content;color:transparent;background:#13f3b9;background:linear-gradient(90deg, #13f3b9 0%, #5878f3 100%);-webkit-background-clip:text;background-clip:text}.texto-gradiente-2{width:fit-content;color:transparent;background:#5878f3;background:linear-gradient(270deg, #5878f3 0%, #fdbb2d 70%);-webkit-background-clip:text;background-clip:text}body{background-image:linear-gradient(to left bottom, #61bdc5, #238792)}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245;--dlc-cssterminal-content-bgcolor:#27656d;--dlc-cssterminal-hem:1rem;--dlc-cssterminal-primary-font-color:#fff}.no-footer{min-height:100vh}.tag-list{list-style-type:none}.tag-list li[class*=tag-]{border-radius:5px;display:inline-block;padding:0.2rem 1rem;margin:0.5rem;color:#3c3c3c}.tag-list li[class*=c]{background:var(--c)}.tag-list li[class*=java]{background:var(--java)}.tag-list li[class*=javascript]{background:var(--javascript)}.tag-list li[class*=html]{background:var(--html)}.tag-list li[class*=css]{background:var(--css)}.tag-list li[class*=typescript]{background:var(--typescript)}.tag-list li[class*=cpp]{background:var(--cpp)}.tag-list li[class*=\"c++\"]{background:var(--cpp)}.tag-list li[class*=python]{background:var(--python)}.tag-list li[class*=shell]{background:var(--shell);color:white;border:0.5px solid white}";

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        await BlogService.readPosts();
    }
    render() {
        return (h("div", null, h("div", { class: "no-footer" }, h("rrss-navbar", { githubUser: "Dellos7", twitterUser: "_dlopezcast", codepenUser: "dellos7", linkedinUser: "david-lopez-castellote" }), h("navigation-bar", null), h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', exact: true, component: "app-home" }), h("stencil-route", { url: ['/blog', '/blog/'], component: 'blog-page', exact: true }), h("stencil-route", { url: ['/about', '/about/'], component: 'about-page', exact: true }), h("stencil-route", { url: ['/contact', '/contact/'], component: 'contact-page', exact: true }), h("stencil-route", { url: '/blog/:unique_link', routeRender: ({ match }) => (h("blog-post-wrapper", { uniqueLink: match.params.unique_link })) }), h("stencil-route", { component: "page-not-found" })))), h("footer", null, h("footer-component", null))));
    }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
