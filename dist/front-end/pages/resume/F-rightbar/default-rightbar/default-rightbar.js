define(["require","exports"],function(e,r){"use strict";var t;Object.defineProperty(r,"__esModule",{value:!0}),r.DefaultRightbar=void 0,(t||(r.DefaultRightbar={})).events=function(){$("#rightbar-navigation div a").on("click",e=>{$("#rightbar-hitbox").removeClass("active"),$("#header-portrait").removeClass("active"),e=e,$("#rightbar-navigation div").removeClass("active"),$(e.currentTarget).addClass("active"),$("#rightbar-portrait").removeClass("visible"),$("#rightbar-portrait").addClass("hidden"),setTimeout(()=>{$("#resume-rightbar").css("display","none")},375)}),$("#rightbar-navigation div").on("mouseover",e=>{window.location.href=e.currentTarget.children[0].getAttribute("href")}),console.log("default-rightbar.js Detected!")}});