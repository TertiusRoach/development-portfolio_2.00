import { Load } from 'utilities/Load';

export namespace Find {
  export function block(blockName: String) {
    //--|🠋| Get pageName |🠋|--//
    let pageName: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';

    switch (pageName) {
      case 'index':
        Load.index(pageName, blockName);
        break;
      case 'ticket':
        // Load.page('default-body');
        break;
      case 'university':
        // Load.page('default-body');
        break;
    }
  }
}
