define(["require","exports","utilities/Info"],function(e,t,I){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultMain=void 0;{(a||(t.DefaultMain={})).events=function(){e.navigation();var t=["producer","developer"];for(let e=0;e<t.length;e++)r.build(t[e]),r.navigation(t[e]),r.update(t[e]);n.description("employment")};let e;(e||(e={})).navigation=function(){$(".default-main section").on("mouseover",function(e){e.currentTarget.id.includes("main")&&(e=e.currentTarget.id.split("-")[1],document.querySelector(".default-header nav .active").className="",document.querySelector(".default-header #header-"+e).className="active",document.querySelector(".default-rightbar section nav .active").className="",document.querySelector(".default-rightbar #rightbar-"+e).className="active")}).on("click",function(t){if(t.currentTarget.id.includes("main")){var t=document.querySelector("#main-"+t.currentTarget.id.split("-")[1]),r=document.querySelector(".default-main").scrollTop;{var n=t,a=r,t=500;let e;switch(n.id.split("-")[1]){case"home":e=0*n.offsetHeight-a;break;case"skills":e=+n.offsetHeight-a;break;case"employment":e=2*n.offsetHeight-a;break;case"contact":e=3*n.offsetHeight-a}$("html, main").animate({scrollTop:`+=${e}px`},t)}}}),$(".default-main .home-buttons a:nth-child(1)").on("click",function(){var e=document.querySelector("#main-contact"),t=document.querySelector(".default-main").scrollTop;$("html, main").animate({scrollTop:`+=${3*e.offsetHeight-t}px`},750)})};let r;(a=r=r||{}).build=function(e){let t;var r,n,a=document.querySelector(`#${e}-carousel #${e}-skills`),l=document.querySelector(`#${e}-carousel .navigation-`+e),c=["first-container","second-container","third-container","fourth-container","fifth-container"];switch(e){case"producer":t=["Design","Editing","Admin"];break;case"developer":t=["Languages","Utilities","Databases"];break;default:t=["Container #1","Container #2","Container #3"]}switch(null!==a&&null!==l){case!0:a.innerHTML="",l.innerHTML="";for(let e=0;e<t.length;e++){r=t,n=e,o=l,s=i=void 0,i=document.createElement("li"),s=document.createElement("span"),i.className="cleared",o.appendChild(i),0===n&&(i.id="active"),i.appendChild(s),s.textContent=r[n],p=v=m=d=u=void 0;var o=c,i=e,s=a,u=document.createElement("ul"),d=(s.appendChild(u),u.className=o[i],0===i?u.classList.add("visible"):u.classList.add("hidden"),I.Info.Resume.carousel(t[i].toLowerCase()));for(let e=0;e<d.length;e++){var m=document.createElement("li"),v=document.createElement("img"),p=document.createElement("img");u.appendChild(m),m.appendChild(v),m.appendChild(p),v.className=d[e].className,d[e].overlay&&(p.className="overlay",p.parentElement.style.cursor="pointer"),v.src=d[e].firstIcon,p.src=d[e].lastIcon,v.alt=d[e].application,p.alt=d[e].rating+"/10"}}break;case!1:var h=document.querySelectorAll('#producer-carousel #producer-skills ul[class*="container"] li'),f=document.querySelectorAll('#developer-carousel #developer-skills ul[class*="container"] li');for(let e=0;e<I.Info.Resume.carousel().length;e++){var y=I.Info.Resume.carousel()[e],$=h[e].firstElementChild,g=h[e].lastElementChild,S=f[e].firstElementChild,q=f[e].lastElementChild;$.className=y.className,S.className=y.className,y.overlay&&(g.className="overlay",g.parentElement.style.cursor="pointer",q.className="overlay",q.parentElement.style.cursor="pointer"),$.src=y.firstIcon,g.src=y.lastIcon,S.src=y.firstIcon,q.src=y.lastIcon,$.alt=y.application,g.alt=y.rating+"/10",S.alt=y.application,q.alt=y.rating+"/10"}}},a.navigation=function(e){{var u=e;let c=document.querySelector(`#${u}-carousel #${u}-skills`),o=document.querySelector(`#${u}-carousel .navigation-`+u),i=document.querySelector(`#${u}-carousel .right-`+u),s=document.querySelector(`#${u}-carousel .left-`+u);s.addEventListener("click",()=>{var e=c.querySelector(`#${u}-carousel .visible`),t=e.previousElementSibling,r=o.querySelector(`#${u}-carousel #active`),n=Array.from(c.children),a=n.findIndex(e=>e===t),l=r.previousElementSibling;v(r,l),p(c,e,t),h(n,s,i,a)})}{var d=e;let o=document.querySelector(`#${d}-carousel #${d}-skills`),i=document.querySelector(`#${d}-carousel .navigation-`+d),s=document.querySelector(`#${d}-carousel .right-`+d),u=document.querySelector(`#${d}-carousel .left-`+d);s.addEventListener("click",e=>{var t=o.querySelector(`#${d}-carousel .visible`),r=t.nextElementSibling,n=i.querySelector(`#${d}-carousel #active`),a=Array.from(o.children),l=a.findIndex(e=>e===r),c=n.nextElementSibling;v(n,c),p(o,t,r),h(a,u,s,l)})}{var m=e;let c=document.querySelector(`#${m}-carousel #${m}-skills`),o=document.querySelector(`#${m}-carousel .navigation-`+m),i=Array.from(o.children),s=document.querySelector(`#${m}-carousel .right-`+m),u=document.querySelector(`#${m}-carousel .left-`+m);o.addEventListener("click",e=>{var t,r,n,a,l=e.target.closest("li");l&&(e=c.querySelector(`#${m}-carousel .visible`),t=o.querySelector(`#${m}-carousel #active`),r=i.findIndex(e=>e===l),a=(n=Array.from(c.children))[r],v(t,l),p(c,e,a),h(n,u,s,r))})}{e=document.querySelector(`#${e}-carousel #${e}-skills`);let r=(e=Array.from(e.children))[0].getBoundingClientRect().width;e.forEach((e,t)=>{e.style.left=r*t+"px"})}const v=(e,t)=>{e.removeAttribute("id"),t.setAttribute("id","active")},p=(e,t,r)=>{e.style.transform=`translateX(-${r.style.left})`,t.classList.add("hidden"),t.classList.remove("visible"),r.classList.add("visible"),r.classList.remove("hidden")},h=(e,t,r,n)=>{0===n?(t.classList.add("hidden"),r.classList.remove("hidden")):n===e.length-1?(t.classList.remove("hidden"),r.classList.add("hidden")):(t.classList.remove("hidden"),r.classList.remove("hidden"))}},a.update=function(t){var e=`#${t}-carousel .navigation-${t} li`,r=`#${t}-carousel #${t}-skills ul li`;const n=document.querySelector("#proficiency-skills h3"),a=document.querySelector("#proficiency-skills span"),l=document.querySelector(`header[class*='${t}-title'] span`);$(r).on("mouseover",function(e){e=e.target.parentElement.firstChild;let t;var r=parseInt(e.src.split("/").pop());t=isNaN(r)?I.Info.Icon.skills(e.alt):I.Info.Icon.tests(e.alt),n.innerText=t.rating+"/10",n.setAttribute("data-val",""+t.rating),a.className="",a.className=(e=>{switch(e){case 0:return"O";case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV";case 5:return"V";case 6:return"VI";case 7:return"VII";case 8:return"VIII";case 9:return"IX";case 10:return"X"}})(t.rating),l.innerHTML=`<h1>${t.application}</h1>
                                  <h6>${t.application}</h6>`}).on("mouseleave",function(){var e=document.querySelector(`#${t}-carousel .navigation-${t} #active span`);l.innerHTML=`<h1>${e.textContent}</h1>
                                  <h6>${e.textContent}</h6>`}),$(e).on("mouseover",function(e){e=e.target.querySelector("span").textContent;l.innerHTML=`<h1>${e}</h1>
                                  <h6>${e}</h6>`}).on("mouseleave",function(){var e=document.querySelector(`#${t}-carousel .navigation-${t} #active span`);l.innerHTML=`<h1>${e.textContent}</h1>
                                  <h6>${e.textContent}</h6>`}),$('#producer-carousel button[class*="producer"]').on("click",function(){var e=document.querySelector(".producer-title span"),t=document.querySelector("#producer-carousel .navigation-producer #active span");e.innerHTML=`<h1>${t.textContent}</h1>
                              <h6>${t.textContent}</h6>`}),$('#developer-carousel button[class*="developer"]').on("click",function(){var e=document.querySelector(".developer-title span"),t=document.querySelector("#developer-carousel .navigation-developer #active span");e.innerHTML=`<h1>${t.textContent}</h1>
                              <h6>${t.textContent}</h6>`})};let n;(n||(n={})).description=function(e){var t=(e=`#main-${e} .scalable-main`)+' article section footer[class*="description"]';const r=document.querySelector(e+' article section aside[class*="description-background"]');$(t).on("mouseover",function(){console.log(r),$(r).css("clip-path","inset(0 0% 0 0)"),$(r).animate({"clip-path":"inset(0 75% 0 0)"},7500)}).on("mouseleave",function(){$(r).css("clip-path","inset(0 100% 0 0)")})}}});