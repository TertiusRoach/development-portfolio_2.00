define(["require","exports","./Find"],function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.Get=void 0,a=t.Get={page:function(e){var t=a.info(e).directory;let r=a.info(e).element;fetch(t).then(e=>e.text()).then(e=>{r.innerHTML=e,new a.items(r)}).catch(e=>{console.error("|🠊 Error:",e)})},info:function(e){var t=window.location.pathname.split("/").pop().split(".")[0]||"index",r=e.split("-")[1];let n;switch(r){case"body":n="A";break;case"overlay":n="B";break;case"header":n="C";break;case"footer":n="D";break;case"leftbar":n="E";break;case"rightbar":n="F";break;case"main":n="G";break;case"data":n="H"}return{directory:`dist/front-end/pages/${t}/${n}-${r}/${e}/${e}.html`,element:document.querySelector(`#${t}-`+r)}},items:function(t){var r=[];r.push(t);for(let e=0;e<t.childElementCount;e++)r.push(t.children[e]);n.Find.page(r)}}});