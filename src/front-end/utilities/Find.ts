import { Load } from 'utilities/Load';

export namespace Find {
  export function block(blockName: String) {
    //--|🠋| Every page loads its blocks the same way |🠋|--//
    Load.page(blockName);
  }
}
