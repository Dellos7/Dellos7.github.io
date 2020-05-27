import { r as registerInstance, h } from './index-70ad26c6.js';

const profileImageCss = "@import url(\"https://fonts.googleapis.com/css?family=Pacifico&display=swap\");*{padding:0;margin:0}html{box-sizing:border-box;font-size:62.5%;min-height:100%}:root{--primary-color:#24909c;--secondary-color:#206c75;--tertiary-color:#61bdc5;--amarillo:#fdbb2d;--quaternary-color:#86f3fc;--fifth-color:rgb(19,243,185);--javascript:#f7df1e;--c:#419a49;--java:#f73737;--css:#2caddd;--html:#ff4800;--typescript:#006fc5;--cpp:#5a92cd;--python:linear-gradient( to right, #2d6396, #ffce39 );--shell:#222245}body{font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";font-size:2.3rem}p,li{overflow-wrap:break-word;word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;}.profile-image{position:absolute;left:2rem;top:calc( (10vh + 5rem) / 2 - 5rem)}.profile-image__image{border-radius:50%;width:10rem;box-shadow:0rem 1rem 3rem rgba(0, 0, 0, 0.3);transition:all 0.5s ease-in-out}@media screen and (max-width: 600px){.profile-image{left:0;position:relative;width:100%;margin-top:2rem}.profile-image__image{display:block;margin:0 auto}}";

const ProfileImage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "profile-image" }, h("img", { class: "profile-image__image", src: "https://avatars0.githubusercontent.com/u/11089954?v=4" })));
    }
};
ProfileImage.style = profileImageCss;

export { ProfileImage as profile_image };
