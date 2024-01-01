//--|🠊| Front-end Development |🠈|--//
require(['front-end'], () => {
  //--|🠋| Find pageName |🠋|--//
  const pageName = window.location.pathname.split('/').pop().split('.')[0] || 'index';

  let main = `dist/front-end/pages/${pageName}/${pageName}.js`;

  require([main]);

  console.log(`🠊 front-end.js Loaded 🠈`);
});
