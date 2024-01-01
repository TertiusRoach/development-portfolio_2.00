//--|🠊| Front-end Development |🠈|--//
require(['front-end'], () => {
  //--|🠋| Find pageName |🠋|--//
  const pageName = window.location.pathname.split('/').pop().split('.')[0] || 'index';
  let jQuery = 'dist/front-end/vendors/jQuery.js';
  let fontAwesome = 'dist/front-end/vendors/Font Awesome.js';
  let main = `dist/front-end/pages/${pageName}/${pageName}.js`;

  require([jQuery, fontAwesome, main]);
  //--|🠊| console.log('🠊 Main front-end.js Loaded 🠈'); |🠈|--//
});
