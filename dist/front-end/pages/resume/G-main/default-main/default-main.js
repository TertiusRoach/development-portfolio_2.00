define(["require","exports"],function(e,a){"use strict";var r;Object.defineProperty(a,"__esModule",{value:!0}),a.DefaultMain=void 0;{(r||(a.DefaultMain={})).events=function(){e.navigation(),t.navigation("producer"),t.carousel("producer"),t.rating("producer"),t.build("producer"),t.navigation("developer"),t.carousel("developer"),t.rating("developer"),t.build("developer")};let e;(e||(e={})).navigation=function(){};let t;(r=t=t||{}).navigation=function(i){const e=(e,a,t)=>{let r=a.target.firstChild.innerText;switch(e){case"block":setTimeout(()=>{for(let e=0;e<a.target.parentNode.children.length;e++){var t=a.target.parentNode.childNodes[e].firstChild.innerText;t!==r?(a.target.parentNode.children[e].classList.remove("cleared"),a.target.parentNode.children[e].classList.add("blocked")):t===r&&(a.target.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.children[e].classList.add("cleared"))}},t);break;case"clear":setTimeout(()=>{for(let e=0;e<a.target.parentNode.children.length;e++)a.target.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.children[e].classList.add("cleared")},t)}};$(`#${i}-carousel .navigation-${i} li`).on("click",function(r){if(!0===r.target.classList.contains("cleared")){{var l=r,s=375;let e=document.querySelector(`header[class*='${i}-title'] .visible`),t=document.querySelector(`header[class*='${i}-title'] .hidden`),a=$(l.target).find(">:first-child").text();t.innerHTML=`<h1>${a}</h1>
                            <h6>${a}</h6>`,setTimeout(()=>{e.className="",e.className="hidden",setTimeout(()=>{e.innerHTML=`<h1>${a}</h1>
                                 <h6>${a}</h6>`},s),t.className="",t.className="visible"},s)}e("block",r,0),e("clear",r,375)}})},r.carousel=function(e){{var u=e;let c=document.querySelector(`#${u}-carousel #${u}-skills`),n=document.querySelector(`#${u}-carousel .navigation-`+u),d=document.querySelector(`#${u}-carousel .right-`+u),o=document.querySelector(`#${u}-carousel .left-`+u);o.addEventListener("click",e=>{var t=c.querySelector(`#${u}-carousel .visible`),a=t.previousElementSibling,r=n.querySelector(`#${u}-carousel #active`),l=Array.from(c.children),s=l.findIndex(e=>e===a),i=r.previousElementSibling;m(r,i),g(c,t,a),b(l,o,d,s)})}{var v=e;let c=document.querySelector(`#${v}-carousel #${v}-skills`),n=document.querySelector(`#${v}-carousel .navigation-`+v),d=document.querySelector(`#${v}-carousel .right-`+v),o=document.querySelector(`#${v}-carousel .left-`+v);d.addEventListener("click",e=>{var t=c.querySelector(`#${v}-carousel .visible`),a=t.nextElementSibling,r=n.querySelector(`#${v}-carousel #active`),l=Array.from(c.children),s=l.findIndex(e=>e===a),i=r.nextElementSibling;m(r,i),g(c,t,a),b(l,o,d,s)})}{var h=e;let i=document.querySelector(`#${h}-carousel #${h}-skills`),c=document.querySelector(`#${h}-carousel .navigation-`+h),n=Array.from(c.children),d=document.querySelector(`#${h}-carousel .right-`+h),o=document.querySelector(`#${h}-carousel .left-`+h);c.addEventListener("click",e=>{var t,a,r,l,s=e.target.closest("li");s&&(e=i.querySelector(`#${h}-carousel .visible`),t=c.querySelector(`#${h}-carousel #active`),a=n.findIndex(e=>e===s),l=(r=Array.from(i.children))[a],m(t,s),g(i,e,l),b(r,o,d,a))})}{e=document.querySelector(`#${e}-carousel #${e}-skills`);let a=(e=Array.from(e.children))[0].getBoundingClientRect().width;e.forEach((e,t)=>{e.style.left=a*t+"px"})}const m=(e,t)=>{e.removeAttribute("id"),t.setAttribute("id","active")},g=(e,t,a)=>{e.style.transform=`translateX(-${a.style.left})`,t.classList.add("hidden"),t.classList.remove("visible"),a.classList.add("visible"),a.classList.remove("hidden")},b=(e,t,a,r)=>{0===r?(t.classList.add("hidden"),a.classList.remove("hidden")):r===e.length-1?(t.classList.remove("hidden"),a.classList.add("hidden")):(t.classList.remove("hidden"),a.classList.remove("hidden"))}},r.rating=function(l){const h=(e,t)=>{let a=document.querySelector(`header[class*='${l}-title'] .visible`),r=document.querySelector(`header[class*='${l}-title'] .hidden`);setTimeout(()=>{r.innerHTML=`<h1>${$(e.target.parentElement).find(">:first-child").attr("alt")}</h1>
                              <h6>${$(e.target.parentElement).find(">:first-child").attr("alt")}</h6>`,a.className="",a.className="hidden",setTimeout(()=>{a.innerHTML=`<h1>${$(e.target.parentElement).find(">:first-child").attr("alt")}</h1>
                                 <h6>${$(e.target.parentElement).find(">:first-child").attr("alt")}</h6>`},t),r.className="",r.className="visible"},t)},m=(e,a,t)=>{let r=a.target.getAttribute("alt");switch(e){case"block":setTimeout(()=>{for(let e=0;e<a.target.parentNode.parentNode.children.length;e++){var t=a.target.parentNode.parentNode.childNodes[e].firstChild.getAttribute("alt");t!==r?(a.target.parentNode.parentNode.children[e].classList.remove("cleared"),a.target.parentNode.parentNode.children[e].classList.add("blocked")):t===r&&(a.target.parentNode.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.parentNode.children[e].classList.add("cleared"))}},t);break;case"clear":setTimeout(()=>{for(let e=0;e<a.target.parentNode.parentNode.children.length;e++)a.target.parentNode.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.parentNode.children[e].classList.add("cleared")},t)}},t=a=>{if(!0===a.target.parentElement.classList.contains("cleared")){m("block",a,0);var e=document.querySelector("#proficiency-skills span"),r=document.querySelector("#proficiency-skills h3"),l=Number(document.querySelector("#proficiency-skills h3").getAttribute("data-val"));switch(e.className="",$(a.target).parent().children(":last").attr("alt")){case"1/10":e.classList.add("I"),r.setAttribute("data-val","1");break;case"2/10":e.classList.add("II"),r.setAttribute("data-val","2");break;case"3/10":e.classList.add("III"),r.setAttribute("data-val","3");break;case"4/10":e.classList.add("IV"),r.setAttribute("data-val","4");break;case"5/10":e.classList.add("V"),r.setAttribute("data-val","5");break;case"6/10":e.classList.add("VI"),r.setAttribute("data-val","6");break;case"7/10":e.classList.add("VII"),r.setAttribute("data-val","7");break;case"8/10":e.classList.add("VIII"),r.setAttribute("data-val","8");break;case"9/10":e.classList.add("IX"),r.setAttribute("data-val","9");break;case"10/10":e.classList.add("X"),r.setAttribute("data-val","10")}var s=Number(document.querySelector("#proficiency-skills h3").getAttribute("data-val"));if(!0==(o=s,""+(t=l)!="NaN"&&""+t!="undefined"&&""+o!="NaN"&&""+o!="undefined")&&l!==s){var i=r;var c=l;var n=s;var d=a;let e,t;switch(c<n){case!0:e=c,t=125*(n-c);const u=setInterval(()=>{e++,i.textContent=e+"/10",e===n&&(clearInterval(u),h(d,375),m("clear",d,0))},125);break;case!1:e=c,t=125*(c-n);const v=setInterval(()=>{e--,i.textContent=e+"/10",e===n&&(clearInterval(v),h(d,375),m("clear",d,0))},125)}}}var t,o};var e=`#${l}-carousel #${l}-skills ul li > :last-child`;$(`#${l}-carousel #${l}-skills ul li > :first-child`).on("mouseover mouseleave",function(e){t(e)}),$(e).on("click",function(e){console.log("Yay, overlay!")}).on("mouseleave",function(e){m("clear",e,0)})},r.build=function(e){}}});