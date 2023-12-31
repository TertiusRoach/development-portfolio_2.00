//--|►| RequireJS (Workflow Setup) |◄|--//
require(['front-end'], () => {
  //--|▼| Find pageName |▼|--//
  const pageName = window.location.href.split('/').pop().split('.')[0];

  let main = 'dist/front-end/pages/index/index.js';

  require([main]);

  console.log(`🠊 front-end.js Loaded 🠈`);
});
