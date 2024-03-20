define(["require","exports","utilities/Info"],function(e,l,b){"use strict";var a;Object.defineProperty(l,"__esModule",{value:!0}),l.DefaultMain=void 0;{(a||(l.DefaultMain={})).events=function(){t.navigation();var e=e=>{r.navigation(e),r.carousel(e),r.rating(e),r.build()};e("producer"),e("developer")};let t;(t||(t={})).navigation=function(){};let r;(a=r=r||{}).build=function(e){let t;var r,l,a=document.querySelector(`#${e}-carousel #${e}-skills`),i=document.querySelector(`#${e}-carousel .navigation-`+e),n=["first-container","second-container","third-container","fourth-container","fifth-container"];switch(e){case"producer":t=["Design","Editing","Admin"];break;case"developer":t=["Languages","Utilities","Databases"];break;default:t=["Container #1","Container #2","Container #3"]}switch(null!==a&&null!==i){case!0:a.innerHTML="",i.innerHTML="";for(let e=0;e<t.length;e++){r=t,l=e,s=i,o=c=void 0,c=document.createElement("li"),o=document.createElement("span"),c.className="cleared",s.appendChild(c),0===l&&(c.id="active"),c.appendChild(o),o.textContent=r[l],h=v=m=u=d=void 0;var s=n,c=e,o=a,d=document.createElement("ul"),u=(o.appendChild(d),d.className=s[c],0===c?d.classList.add("visible"):d.classList.add("hidden"),b.Info.Resume.carousel(t[c].toLowerCase()));for(let e=0;e<u.length;e++){var m=document.createElement("li"),v=document.createElement("img"),h=document.createElement("img");d.appendChild(m),m.appendChild(v),m.appendChild(h),v.className=u[e].className,u[e].overlay&&(h.className="overlay",h.parentElement.style.cursor="pointer"),v.src=u[e].firstIcon,h.src=u[e].lastIcon,v.alt=u[e].application,h.alt=u[e].rating+"/10"}}break;case!1:var f=document.querySelectorAll('#producer-carousel #producer-skills ul[class*="container"] li'),g=document.querySelectorAll('#developer-carousel #developer-skills ul[class*="container"] li');for(let e=0;e<b.Info.Resume.carousel().length;e++){var p=b.Info.Resume.carousel()[e],y=f[e].firstElementChild,$=f[e].lastElementChild,S=g[e].firstElementChild,L=g[e].lastElementChild;y.className=p.className,S.className=p.className,p.overlay&&($.className="overlay",$.parentElement.style.cursor="pointer",L.className="overlay",L.parentElement.style.cursor="pointer"),y.src=p.firstIcon,$.src=p.lastIcon,S.src=p.firstIcon,L.src=p.lastIcon,y.alt=p.application,$.alt=p.rating+"/10",S.alt=p.application,L.alt=p.rating+"/10"}}},a.rating=function(e){},a.carousel=function(e){{var u=e;let s=document.querySelector(`#${u}-carousel #${u}-skills`),c=document.querySelector(`#${u}-carousel .navigation-`+u),o=document.querySelector(`#${u}-carousel .right-`+u),d=document.querySelector(`#${u}-carousel .left-`+u);d.addEventListener("click",e=>{var t=s.querySelector(`#${u}-carousel .visible`),r=t.previousElementSibling,l=c.querySelector(`#${u}-carousel #active`),a=Array.from(s.children),i=a.findIndex(e=>e===r),n=l.previousElementSibling;h(l,n),f(s,t,r),g(a,d,o,i)})}{var m=e;let s=document.querySelector(`#${m}-carousel #${m}-skills`),c=document.querySelector(`#${m}-carousel .navigation-`+m),o=document.querySelector(`#${m}-carousel .right-`+m),d=document.querySelector(`#${m}-carousel .left-`+m);o.addEventListener("click",e=>{var t=s.querySelector(`#${m}-carousel .visible`),r=t.nextElementSibling,l=c.querySelector(`#${m}-carousel #active`),a=Array.from(s.children),i=a.findIndex(e=>e===r),n=l.nextElementSibling;h(l,n),f(s,t,r),g(a,d,o,i)})}{var v=e;let n=document.querySelector(`#${v}-carousel #${v}-skills`),s=document.querySelector(`#${v}-carousel .navigation-`+v),c=Array.from(s.children),o=document.querySelector(`#${v}-carousel .right-`+v),d=document.querySelector(`#${v}-carousel .left-`+v);s.addEventListener("click",e=>{var t,r,l,a,i=e.target.closest("li");i&&(e=n.querySelector(`#${v}-carousel .visible`),t=s.querySelector(`#${v}-carousel #active`),r=c.findIndex(e=>e===i),a=(l=Array.from(n.children))[r],h(t,i),f(n,e,a),g(l,d,o,r))})}{e=document.querySelector(`#${e}-carousel #${e}-skills`);let r=(e=Array.from(e.children))[0].getBoundingClientRect().width;e.forEach((e,t)=>{e.style.left=r*t+"px"})}const h=(e,t)=>{e.removeAttribute("id"),t.setAttribute("id","active")},f=(e,t,r)=>{e.style.transform=`translateX(-${r.style.left})`,t.classList.add("hidden"),t.classList.remove("visible"),r.classList.add("visible"),r.classList.remove("hidden")},g=(e,t,r,l)=>{0===l?(t.classList.add("hidden"),r.classList.remove("hidden")):l===e.length-1?(t.classList.remove("hidden"),r.classList.add("hidden")):(t.classList.remove("hidden"),r.classList.remove("hidden"))}},a.navigation=function(n){const e=(e,r,t)=>{let l=r.target.firstChild.innerText;switch(e){case"block":setTimeout(()=>{for(let e=0;e<r.target.parentNode.children.length;e++){var t=r.target.parentNode.childNodes[e].firstChild.innerText;t!==l?(r.target.parentNode.children[e].classList.remove("cleared"),r.target.parentNode.children[e].classList.add("blocked")):t===l&&(r.target.parentNode.children[e].classList.remove("blocked"),r.target.parentNode.children[e].classList.add("cleared"))}},t);break;case"clear":setTimeout(()=>{for(let e=0;e<r.target.parentNode.children.length;e++)r.target.parentNode.children[e].classList.remove("blocked"),r.target.parentNode.children[e].classList.add("cleared")},t)}};$(`#${n}-carousel .navigation-${n} li`).on("click",function(l){if(!0===l.target.classList.contains("cleared")){{var a=l,i=375;let e=document.querySelector(`header[class*='${n}-title'] .visible`),t=document.querySelector(`header[class*='${n}-title'] .hidden`),r=$(a.target).find(">:first-child").text();t.innerHTML=`<h1>${r}</h1>
                            <h6>${r}</h6>`,setTimeout(()=>{e.className="",e.className="hidden",setTimeout(()=>{e.innerHTML=`<h1>${r}</h1>
                                 <h6>${r}</h6>`},i),t.className="",t.className="visible"},i)}e("block",l,0),e("clear",l,375)}})}}});