import { Find } from 'utilities/Find';

export namespace DefaultBody {
  export function events() {
    //--🠋 The timeline only uses these three blocks 🠋--//
    Find.block('default-header');
    Find.block('default-footer');
    Find.block('default-main');

    //--🠋 Unused on the index page 🠋--//
    // Find.block('default-overlay');
    // Find.block('default-leftbar');
    // Find.block('default-rightbar');
    // Find.block('default-data');

    //--🠊 console.log('|🠊 default-body.js Detected! 🠈|'); 🠈--//
  }
}
