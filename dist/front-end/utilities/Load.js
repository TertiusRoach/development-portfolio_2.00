define(["require","exports","pages/index/index"],function(e,r,n){"use strict";var o;Object.defineProperty(r,"__esModule",{value:!0}),r.Load=void 0,o=r.Load={index:function(r,t){var e=o.info(t).directory;let a=o.info(t).element;fetch(e).then(e=>e.text()).then(e=>{a.innerHTML=e,"index"===r&&n.Index.run(t)}).catch(e=>{console.error("|🠊 Error:",e)})},info:function(e){var r=window.location.pathname.split("/").pop().split(".")[0]||"index",t=e.split("-")[1];let a;switch(t){case"body":a="A";break;case"overlay":a="B";break;case"header":a="C";break;case"footer":a="D";break;case"leftbar":a="E";break;case"rightbar":a="F";break;case"main":a="G";break;case"data":a="H"}return{directory:`dist/front-end/pages/${r}/${a}-${t}/${e}/${e}.html`,element:document.querySelector(`#${r}-`+t)}}}});