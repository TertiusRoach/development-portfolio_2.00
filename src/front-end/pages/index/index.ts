import { Get } from 'utilities/Get';

import { DefaultBody } from './A-body/default-body/default-body';

export namespace Index {
  Get.page('default-body');

  export class include {
    constructor(blockName: String) {
      switch (blockName) {
        case 'default-body':
          let components = [];
          new DefaultBody.events(components);
          break;
      }
    }
  }
  // include;
  //--|🠊| console.log(`🠊 ${pageName}.js Loaded 🠈`); |🠈|--//
}
