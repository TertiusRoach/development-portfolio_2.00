import { DefaultBody } from '../scale/A-body/default-body/default-body';
import { DefaultOverlay } from '../scale/B-overlay/default-overlay/default-overlay';
import { DefaultHeader } from '../scale/C-header/default-header/default-header';
import { DefaultFooter } from '../scale/D-footer/default-footer/default-footer';
import { DefaultLeftbar } from '../scale/E-leftbar/default-leftbar/default-leftbar';
import { DefaultRightbar } from '../scale/F-rightbar/default-rightbar/default-rightbar';
import { DefaultMain } from '../scale/G-main/default-main/default-main';
import { DefaultData } from '../scale/H-data/default-data/default-data';

import { BackupBody } from '../scale/A-body/backup-body/backup-body';
import { BackupOverlay } from '../scale/B-overlay/backup-overlay/backup-overlay';
import { BackupHeader } from '../scale/C-header/backup-header/backup-header';
import { BackupFooter } from '../scale/D-footer/backup-footer/backup-footer';
import { BackupLeftbar } from '../scale/E-leftbar/backup-leftbar/backup-leftbar';
import { BackupRightbar } from '../scale/F-rightbar/backup-rightbar/backup-rightbar';
import { BackupMain } from '../scale/G-main/backup-main/backup-main';
import { BackupData } from '../scale/H-data/backup-data/backup-data';

export namespace Scale {
  export function run(blockName: String) {
    switch (blockName) {
      //--|🠋| Body |🠋|--//
      case 'default-body':
        DefaultBody.events();
        break;
      case 'backup-body':
        BackupBody.events();
        break;

      //--|🠋| Overlay |🠋|--//
      case 'default-overlay':
        DefaultOverlay.events();
        break;
      case 'backup-overlay':
        BackupOverlay.events();
        break;

      //--|🠋| Header |🠋|--//
      case 'default-header':
        DefaultHeader.events();
        break;
      case 'backup-header':
        BackupHeader.events();
        break;

      //--|🠋| Footer |🠋|--//
      case 'default-footer':
        DefaultFooter.events();
        break;
      case 'backup-footer':
        BackupFooter.events();
        break;

      //--|🠋| Leftbar |🠋|--//
      case 'default-leftbar':
        DefaultLeftbar.events();
        break;
      case 'backup-leftbar':
        BackupLeftbar.events();
        break;

      //--|🠋| Rightbar |🠋|--//
      case 'default-rightbar':
        DefaultRightbar.events();
        break;
      case 'backup-rightbar':
        BackupRightbar.events();
        break;

      //--|🠋| Main |🠋|--//
      case 'default-main':
        DefaultMain.events();
        break;
      case 'backup-main':
        BackupMain.events();
        break;

      //--|🠋| Data |🠋|--//
      case 'default-data':
        DefaultData.events();
        break;
      case 'backup-data':
        BackupData.events();
        break;
    }
    /* console.log('🠊 index.js Detected! 🠈'); */
  }
}
