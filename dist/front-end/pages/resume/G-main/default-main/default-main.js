define(["require","exports","utilities/Info"],function(e,n,I){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.DefaultMain=void 0;{(a||(n.DefaultMain={})).events=function(){t.navigation();var e=e=>{r.build(e),r.update(e),r.navigation(e)};e("producer"),e("developer")};let t;(t||(t={})).navigation=function(){};let r;(a=r=r||{}).navigation=function(e){{var d=e;let i=document.querySelector(`#${d}-carousel #${d}-skills`),o=document.querySelector(`#${d}-carousel .navigation-`+d),s=document.querySelector(`#${d}-carousel .right-`+d),u=document.querySelector(`#${d}-carousel .left-`+d);u.addEventListener("click",e=>{var t=i.querySelector(`#${d}-carousel .visible`),r=t.previousElementSibling,n=o.querySelector(`#${d}-carousel #active`),a=Array.from(i.children),l=a.findIndex(e=>e===r),c=n.previousElementSibling;h(n,c),p(i,t,r),$(a,u,s,l)})}{var m=e;let i=document.querySelector(`#${m}-carousel #${m}-skills`),o=document.querySelector(`#${m}-carousel .navigation-`+m),s=document.querySelector(`#${m}-carousel .right-`+m),u=document.querySelector(`#${m}-carousel .left-`+m);s.addEventListener("click",e=>{var t=i.querySelector(`#${m}-carousel .visible`),r=t.nextElementSibling,n=o.querySelector(`#${m}-carousel #active`),a=Array.from(i.children),l=a.findIndex(e=>e===r),c=n.nextElementSibling;h(n,c),p(i,t,r),$(a,u,s,l)})}{var v=e;let c=document.querySelector(`#${v}-carousel #${v}-skills`),i=document.querySelector(`#${v}-carousel .navigation-`+v),o=Array.from(i.children),s=document.querySelector(`#${v}-carousel .right-`+v),u=document.querySelector(`#${v}-carousel .left-`+v);i.addEventListener("click",e=>{var t,r,n,a,l=e.target.closest("li");l&&(e=c.querySelector(`#${v}-carousel .visible`),t=i.querySelector(`#${v}-carousel #active`),r=o.findIndex(e=>e===l),a=(n=Array.from(c.children))[r],h(t,l),p(c,e,a),$(n,u,s,r))})}{e=document.querySelector(`#${e}-carousel #${e}-skills`);let r=(e=Array.from(e.children))[0].getBoundingClientRect().width;e.forEach((e,t)=>{e.style.left=r*t+"px"})}const h=(e,t)=>{e.removeAttribute("id"),t.setAttribute("id","active")},p=(e,t,r)=>{e.style.transform=`translateX(-${r.style.left})`,t.classList.add("hidden"),t.classList.remove("visible"),r.classList.add("visible"),r.classList.remove("hidden")},$=(e,t,r,n)=>{0===n?(t.classList.add("hidden"),r.classList.remove("hidden")):n===e.length-1?(t.classList.remove("hidden"),r.classList.add("hidden")):(t.classList.remove("hidden"),r.classList.remove("hidden"))}},a.update=function(r){var e=`#${r}-carousel .navigation-${r} li`,t=`#${r}-carousel button[class*='${r}']`,n=`#${r}-carousel #${r}-skills ul li`;const a=document.querySelector("#proficiency-skills h3"),l=document.querySelector("#proficiency-skills span"),c=document.querySelector(`header[class*='${r}-title'] span`);$(e).on("mouseover",function(e){e=e.target.querySelector("span").textContent;c.innerHTML=`<h1>${e}</h1>
                                  <h6>${e}</h6>`}).on("mouseleave",function(){var e=document.querySelector(`#${r}-carousel .navigation-${r} #active span`);c.innerHTML=`<h1>${e.textContent}</h1>
                                  <h6>${e.textContent}</h6>`}),$(n).on("mouseover",function(e){e=e.target.parentElement.firstChild,e=I.Info.Icon.skills(e.alt);void 0!==e&&(a.innerText=e.rating+"/10",a.setAttribute("data-val",""+e.rating),l.className="",l.className=(e=>{switch(e){case 0:return"O";case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV";case 5:return"V";case 6:return"VI";case 7:return"VII";case 8:return"VIII";case 9:return"IX";case 10:return"X"}})(e.rating),c.innerHTML=`<h1>${e.application}</h1>
                                  <h6>${e.application}</h6>`)}).on("mouseleave",function(e){var t=document.querySelector(`#${r}-carousel .navigation-${r} #active span`);c.innerHTML=`<h1>${t.textContent}</h1>
                                <h6>${t.textContent}</h6>`}),$(t).on("click",function(){var e=document.querySelector(`#${r}-carousel .navigation-${r} #active span`);c.innerHTML=`<h1>${e.textContent}</h1>
                                <h6>${e.textContent}</h6>`})},a.build=function(e){let t;var r,n,a=document.querySelector(`#${e}-carousel #${e}-skills`),l=document.querySelector(`#${e}-carousel .navigation-`+e),c=["first-container","second-container","third-container","fourth-container","fifth-container"];switch(e){case"producer":t=["Design","Editing","Admin"];break;case"developer":t=["Languages","Utilities","Databases"];break;default:t=["Container #1","Container #2","Container #3"]}switch(null!==a&&null!==l){case!0:a.innerHTML="",l.innerHTML="";for(let e=0;e<t.length;e++){r=t,n=e,i=l,s=o=void 0,o=document.createElement("li"),s=document.createElement("span"),o.className="cleared",i.appendChild(o),0===n&&(o.id="active"),o.appendChild(s),s.textContent=r[n],h=v=m=d=u=void 0;var i=c,o=e,s=a,u=document.createElement("ul"),d=(s.appendChild(u),u.className=i[o],0===o?u.classList.add("visible"):u.classList.add("hidden"),I.Info.Resume.carousel(t[o].toLowerCase()));for(let e=0;e<d.length;e++){var m=document.createElement("li"),v=document.createElement("img"),h=document.createElement("img");u.appendChild(m),m.appendChild(v),m.appendChild(h),v.className=d[e].className,d[e].overlay&&(h.className="overlay",h.parentElement.style.cursor="pointer"),v.src=d[e].firstIcon,h.src=d[e].lastIcon,v.alt=d[e].application,h.alt=d[e].rating+"/10"}}break;case!1:var p=document.querySelectorAll('#producer-carousel #producer-skills ul[class*="container"] li'),$=document.querySelectorAll('#developer-carousel #developer-skills ul[class*="container"] li');for(let e=0;e<I.Info.Resume.carousel().length;e++){var f=I.Info.Resume.carousel()[e],y=p[e].firstElementChild,g=p[e].lastElementChild,S=$[e].firstElementChild,q=$[e].lastElementChild;y.className=f.className,S.className=f.className,f.overlay&&(g.className="overlay",g.parentElement.style.cursor="pointer",q.className="overlay",q.parentElement.style.cursor="pointer"),y.src=f.firstIcon,g.src=f.lastIcon,S.src=f.firstIcon,q.src=f.lastIcon,y.alt=f.application,g.alt=f.rating+"/10",S.alt=f.application,q.alt=f.rating+"/10"}}},a.bin=function(e){}}});