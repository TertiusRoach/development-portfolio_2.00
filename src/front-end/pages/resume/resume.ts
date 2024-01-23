import { DefaultBody } from '../resume/A-body/default-body/default-body';
import { DefaultOverlay } from '../resume/B-overlay/default-overlay/default-overlay';
import { DefaultHeader } from '../resume/C-header/default-header/default-header';
import { DefaultFooter } from '../resume/D-footer/default-footer/default-footer';
import { DefaultLeftbar } from '../resume/E-leftbar/default-leftbar/default-leftbar';
import { DefaultRightbar } from '../resume/F-rightbar/default-rightbar/default-rightbar';
import { DefaultMain } from '../resume/G-main/default-main/default-main';
import { DefaultData } from '../resume/H-data/default-data/default-data';

import { BackupBody } from './A-body/~out/backup-body/backup-body';
import { BackupOverlay } from './B-overlay/~out/backup-overlay/backup-overlay';
import { BackupHeader } from './C-header/~out/backup-header/backup-header';
import { BackupFooter } from './D-footer/~out/backup-footer/backup-footer';
import { BackupLeftbar } from './E-leftbar/~out/backup-leftbar/backup-leftbar';
import { BackupRightbar } from './F-rightbar/~out/backup-rightbar/backup-rightbar';
import { BackupMain } from './G-main/~out/backup-main/backup-main';
import { BackupData } from './H-data/~out/backup-data/backup-data';

import { ScalableBody } from './A-body/~out/scalable-body/scalable-body';
import { ScalableHeader } from './C-header/~out/scalable-header/scalable-header';
import { ScalableMain } from './G-main/~out/scalable-main/scalable-main';
import { ScalableFooter } from './D-footer/~out/scalable-footer/scalable-footer';
export namespace Resume {
  export function run(blockName: String) {
    switch (blockName) {
      //--|🠋| Body |🠋|--//
      case 'default-body':
        DefaultBody.events();
        break;
      case 'scalable-body':
        ScalableBody.events();
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
      case 'scalable-header':
        ScalableHeader.events();
        break;
      case 'backup-header':
        BackupHeader.events();
        break;

      //--|🠋| Footer |🠋|--//
      case 'default-footer':
        DefaultFooter.events();
        break;
      case 'scalable-footer':
        ScalableFooter.events();
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
      case 'scalable-main':
        ScalableMain.events();
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
    /* console.log('🠊 résumé.js Detected! 🠈'); */
  }
}
