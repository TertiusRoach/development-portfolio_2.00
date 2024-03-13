define(["require","exports"],function(e,t){"use strict";var a,r;Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultMain=void 0,(r||(t.DefaultMain={})).events=function(){a.navigation("producer"),a.carousel("producer"),a.rating("producer"),a.navigation("developer"),a.carousel("developer"),a.rating("developer")},(r=a=a||{}).navigation=function(e){const a=document.querySelector(`header[class*='${e}-title'] span:nth-child(1)`),r=document.querySelector(`header[class*='${e}-title'] span:nth-child(2)`),l=(e,a,t)=>{let r=a.target.firstChild.innerText;switch(e){case"block":setTimeout(()=>{for(let e=0;e<a.target.parentNode.children.length;e++){var t=a.target.parentNode.childNodes[e].firstChild.innerText;t!==r?(a.target.parentNode.children[e].classList.remove("cleared"),a.target.parentNode.children[e].classList.add("blocked")):t===r&&(a.target.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.children[e].classList.add("cleared"))}},t);break;case"clear":setTimeout(()=>{for(let e=0;e<a.target.parentNode.children.length;e++)a.target.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.children[e].classList.add("cleared")},t)}};$(`#${e}-carousel .navigation-${e} li`).on("mouseover",function(e){var t;!0===e.target.classList.contains("cleared")&&(l("block",e,0),t=$(e.target).find(">:first-child").text(),r.innerHTML=`<h1>${t}</h1>
                                 <h6>${t}</h6>`,a.className="",a.className="hidden",r.className="",r.className="visible",l("clear",e,375))}).on("mouseleave",function(e){!0===e.target.classList.contains("cleared")&&(l("block",e,0),a.className="",a.className="visible",r.className="",r.className="hidden",l("clear",e,375))})},r.carousel=function(e){const u=(e,t)=>{e.removeAttribute("id"),t.setAttribute("id","active")},v=(e,t,a)=>{e.style.transform=`translateX(-${a.style.left})`,t.classList.add("hidden"),t.classList.remove("visible"),a.classList.add("visible"),a.classList.remove("hidden")},h=(e,t,a,r)=>{0===r?(t.classList.add("hidden"),a.classList.remove("hidden")):r===e.length-1?(t.classList.remove("hidden"),a.classList.add("hidden")):(t.classList.remove("hidden"),a.classList.remove("hidden"))};{var m=e;let i=document.querySelector(`#${m}-carousel #${m}-skills`),n=document.querySelector(`#${m}-carousel .navigation-`+m),o=document.querySelector(`#${m}-carousel .right-`+m),d=document.querySelector(`#${m}-carousel .left-`+m);d.addEventListener("click",e=>{var t=i.querySelector(`#${m}-carousel .visible`),a=t.previousElementSibling,r=n.querySelector(`#${m}-carousel #active`),l=Array.from(i.children),s=l.findIndex(e=>e===a),c=r.previousElementSibling;u(r,c),v(i,t,a),h(l,d,o,s)})}{var g=e;let i=document.querySelector(`#${g}-carousel #${g}-skills`),n=document.querySelector(`#${g}-carousel .navigation-`+g),o=document.querySelector(`#${g}-carousel .right-`+g),d=document.querySelector(`#${g}-carousel .left-`+g);o.addEventListener("click",e=>{var t=i.querySelector(`#${g}-carousel .visible`),a=t.nextElementSibling,r=n.querySelector(`#${g}-carousel #active`),l=Array.from(i.children),s=l.findIndex(e=>e===a),c=r.nextElementSibling;u(r,c),v(i,t,a),h(l,d,o,s)})}{var b=e;let c=document.querySelector(`#${b}-carousel #${b}-skills`),i=document.querySelector(`#${b}-carousel .navigation-`+b),n=Array.from(i.children),o=document.querySelector(`#${b}-carousel .right-`+b),d=document.querySelector(`#${b}-carousel .left-`+b);i.addEventListener("click",e=>{var t,a,r,l,s=e.target.closest("li");s&&(e=c.querySelector(`#${b}-carousel .visible`),t=i.querySelector(`#${b}-carousel #active`),a=n.findIndex(e=>e===s),l=(r=Array.from(c.children))[a],u(t,s),v(c,e,l),h(r,d,o,a))})}{e=document.querySelector(`#${e}-carousel #${e}-skills`);let a=(e=Array.from(e.children))[0].getBoundingClientRect().width;e.forEach((e,t)=>{e.style.left=a*t+"px"})}},r.rating=function(e){const t=a=>{var e=document.querySelector("#proficiency-skills span"),r=document.querySelector("#proficiency-skills h3"),l=Number(document.querySelector("#proficiency-skills h3").getAttribute("data-val"));switch(e.className="",$(a.target).parent().children(":last").attr("alt")){case"1/10":e.classList.add("I"),r.setAttribute("data-val","1");break;case"2/10":e.classList.add("II"),r.setAttribute("data-val","2");break;case"3/10":e.classList.add("III"),r.setAttribute("data-val","3");break;case"4/10":e.classList.add("IV"),r.setAttribute("data-val","4");break;case"5/10":e.classList.add("V"),r.setAttribute("data-val","5");break;case"6/10":e.classList.add("VI"),r.setAttribute("data-val","6");break;case"7/10":e.classList.add("VII"),r.setAttribute("data-val","7");break;case"8/10":e.classList.add("VIII"),r.setAttribute("data-val","8");break;case"9/10":e.classList.add("IX"),r.setAttribute("data-val","9");break;case"10/10":e.classList.add("X"),r.setAttribute("data-val","10")}var t,s,a=Number(document.querySelector("#proficiency-skills h3").getAttribute("data-val"));if(!0==(s=a,""+(t=l)!="NaN"&&""+t!="undefined"&&""+s!="NaN"&&""+s!="undefined")&&l!==a){var c=r;var i=l;var n=a;let e,t;switch(i<n){case!0:e=i;const o=setInterval(()=>{e++,c.textContent=e+"/10",e===n&&(clearInterval(o),t=125*(n-i))},125);break;case!1:e=i;const d=setInterval(()=>{e--,c.textContent=e+"/10",e===n&&(clearInterval(d),t=125*(i-n))},125)}}else;},a=(e,a,t)=>{let r=a.target.getAttribute("alt");switch(e){case"block":setTimeout(()=>{for(let e=0;e<a.target.parentNode.parentNode.children.length;e++){var t=a.target.parentNode.parentNode.childNodes[e].firstChild.getAttribute("alt");t!==r?(a.target.parentNode.parentNode.children[e].classList.remove("cleared"),a.target.parentNode.parentNode.children[e].classList.add("blocked")):t===r&&(a.target.parentNode.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.parentNode.children[e].classList.add("cleared"))}},t);break;case"clear":setTimeout(()=>{for(let e=0;e<a.target.parentNode.parentNode.children.length;e++)a.target.parentNode.parentNode.children[e].classList.remove("blocked"),a.target.parentNode.parentNode.children[e].classList.add("cleared")},t)}};$(`#${e}-carousel #${e}-skills ul li > :first-child`).on("mouseover",function(e){!0===e.target.parentElement.classList.contains("cleared")&&(t(e),a("block",e,0))}).on("mouseleave",function(e){a("clear",e,125)}),e=`#${e}-carousel #${e}-skills ul li > :last-child`,$(e).on("mouseover",function(e){!0===e.target.parentElement.classList.contains("cleared")&&(t(e),a("block",e,0))}).on("mouseleave",function(e){a("clear",e,125)}).on("click",function(e){console.log("Yay, overlay!")})}});