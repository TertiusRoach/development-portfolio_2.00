define(["require","exports"],function(e,a){"use strict";var t;Object.defineProperty(a,"__esModule",{value:!0}),a.DefaultHeader=void 0,(t||(a.DefaultHeader={})).events=function(){$("#header-navigation a").on("click",function(e){$("#header-navigation a").removeClass("active"),$(e.currentTarget).addClass("active")}),console.log("default-header.js Detected!")}});