//--|🠊| Front-end Development |🠈|--//
require(['front-end'], () => {
  //--|🠋| Find pageName |🠋|--//
  const pageName = window.location.pathname.split('/').pop().split('.')[0] || 'index';

  console.log(pageName);

  let main = 'dist/front-end/pages/index/index.js';

  require([main]);

  console.log(`🠊 front-end.js Loaded 🠈`);
});
