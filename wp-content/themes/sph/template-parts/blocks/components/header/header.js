!function(){"use strict";const e="mouseenter",o="mouseleave",t="click",s="blur",r={MD:600,LG:992,XL:1366};function c(){return window.matchMedia((e="min-width",o=r.LG,`(${e}: ${o}px)`)).matches;var e,o}const n=[...document.querySelectorAll("header")],d="nav-active",a="search-active";let l,i=!1,u=0,m=!1;const v=(r,n,v,y,w)=>{const S=()=>{let e=document.createElement("div");e.setAttribute("id","overlay"),e.style.cssText="position:fixed;width:100%;height:100%;z-index:4;background:rgba(0,0,0,0.2);top:0;left:0;right:0;bottom:0",document.querySelector("body").appendChild(e)},q=()=>{let e=document.querySelector("#overlay");e&&(e.outerHTML="")};r.forEach((s=>{const r=s.closest(".dropdown");r.addEventListener(e,(e=>{if(c()){const e=()=>{s.classList.add("show"),r.classList.contains("language-dropdown")||(r.querySelector(".dropdown-menu").classList.add("show"),S()),document.querySelector("body").classList.add(d),document.querySelector("body").classList.remove(a),w.forEach((e=>{i=!1,e.querySelector(".btn").classList.remove("show"),e.querySelector(".dropdown-menu").classList.remove("show")}))};r.classList.contains("language-dropdown")?e():l=setTimeout(e,200)}})),r.addEventListener(o,(e=>{c()&&(null!=l&&(clearTimeout(l),l=null,q()),r.classList.contains("language-dropdown")&&r.classList.remove("active"),s.classList.remove("show"),r.querySelector(".dropdown-menu").classList.remove("show"),document.querySelector("body").classList.remove(d),document.querySelector("body").classList.remove(a),w.forEach((e=>{i=!1,q(),e.querySelector(".btn").classList.remove("show"),e.querySelector(".dropdown-menu").classList.remove("show")})))})),r.addEventListener(t,(e=>{r.classList.contains("language-dropdown")&&(r.classList.add("active"),s.classList.add("show"),r.querySelector(".dropdown-menu").classList.add("show"))}))})),n.forEach((t=>{t.addEventListener(e,(e=>{c()&&(q(),t.classList.add("show"),document.querySelector("body").classList.add(d),document.querySelector("body").classList.remove(a),w.forEach((e=>{i=!1,e.querySelector(".btn").classList.remove("show"),e.querySelector(".dropdown-menu").classList.remove("show")})))})),t.addEventListener(o,(e=>{c()&&(t.classList.remove("show"),document.querySelector("body").classList.remove(d),document.querySelector("body").classList.remove(a),w.forEach((e=>{i=!1,e.querySelector(".btn").classList.remove("show"),e.querySelector(".dropdown-menu").classList.remove("show")})))}))})),document.addEventListener(t,(e=>{e.target.closest("header")||(document.querySelector("body").classList.remove(d),document.querySelector("body").classList.remove(a),i=!1,q())})),v.addEventListener(t,(e=>{document.querySelector("body").classList.toggle("mobile-nav-active"),document.querySelector("body").classList.remove(a)})),y.forEach((e=>{e.addEventListener(t,(o=>{const t=e.closest(".nav-item.dropdown"),s=t.querySelector(".nav-link"),r=t.querySelector(".dropdown-menu");s.classList.remove("show"),s.setAttribute("aria-expanded",!1),r.classList.remove("show"),r.removeAttribute("data-bs-popper"),document.querySelector("body").classList.remove(d)}))})),w.forEach((e=>{const o=e.querySelector(".btn"),r=e.querySelector("input");e.addEventListener(t,(e=>{e.stopPropagation()})),o.addEventListener(t,(t=>{t.stopPropagation(),i?(i=!1,q(),o.classList.remove("active"),document.querySelector("body").classList.remove(d),document.querySelector("body").classList.remove(a),e.querySelector(".dropdown-menu").classList.remove("show")):(i=!0,q(),o.classList.add("active"),document.querySelector("body").classList.remove(d),document.querySelector("body").classList.add(a),e.querySelector(".dropdown-menu").classList.add("show"),S())})),r.addEventListener(t,(e=>{e.stopPropagation(),r.nextElementSibling.classList.add("active"),r.classList.remove("on-blur"),r.classList.add("on-click")})),r.addEventListener(s,(e=>{r.nextElementSibling.classList.remove("active"),r.classList.remove("on-click"),r.classList.add("on-blur")}))})),window.addEventListener("scroll",(function(){u=window.scrollY,m||(window.requestAnimationFrame((function(){L(u),m=!1})),m=!0)}))},L=e=>{e>20?document.body.classList.add("scrolling-state"):document.body.classList.remove("scrolling-state")};n.forEach((e=>{(e=>{const o=e.querySelector(".main-nav"),t=o.querySelectorAll(".nav-item.dropdown .nav-link"),s=o.querySelectorAll(".nav-item:not(.dropdown) .nav-link"),r=e.querySelector(".hamburger"),c=e.querySelectorAll(".mobile-header"),n=e.querySelectorAll(".search-item");v(t,s,r,c,n)})(e)}))}();
