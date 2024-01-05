import { Load } from 'utilities/Load';
export namespace Main {
  //--|🠋| Get pageName |🠋|--//
  let pageName: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';

  switch (pageName) {
    case 'resume':
      Load.resume('default-body');
      break;
    case 'index':
      Load.index('default-body');
      break;
    case 'ticket':
      // Load.page('default-body');
      break;
    case 'university':
      // Load.page('default-body');
      break;
  }
  /* console.log('🠊 Main.js Detected! 🠈'); */
}
