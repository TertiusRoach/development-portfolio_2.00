import { Find } from 'utilities/Find';

export namespace ScalableBody {
  export function events() {
    Find.block('scalable-header');
    Find.block('scalable-footer');
    Find.block('scalable-main');

    //--|🠊| console.log('scalable-body.js Detected!'); |🠈|--//
  }
}
