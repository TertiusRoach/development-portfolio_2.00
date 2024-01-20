import { Load } from 'utilities/Load';
export namespace Main {
  //--|🠋| Get pageName |🠋|--//
  let pageName: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';

  switch (pageName) {
    case 'index':
      Load.index('default-body');
      break;
    case 'resume':
      // Load.resume('default-body');
      /* Load.resume('scalable-body'); */
      break;
    case 'scale':
      Load.resume('backup-body');
      break;
    case 'ticket':
      // Load.ticket('default-body');
      break;
    case 'university':
      // Load.university('default-body');
      break;
  }
  /* console.log('🠊 Main.js Detected! 🠈'); */
}
