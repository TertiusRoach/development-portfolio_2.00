import { IndexDefaultBody } from '../pages/index/A-body/default-body/default-body';
import { IndexDefaultOverlay } from '../pages/index/B-overlay/default-overlay/default-overlay';
import { IndexDefaultHeader } from '../pages/index/C-header/default-header/default-header';
import { IndexDefaultFooter } from '../pages/index/D-footer/default-footer/default-footer';
import { IndexDefaultLeftbar } from '../pages/index/E-leftbar/default-leftbar/default-leftbar';
import { IndexDefaultRightbar } from '../pages/index/F-rightbar/default-rightbar/default-rightbar';
import { IndexDefaultMain } from '../pages/index/G-main/default-main/default-main';
import { IndexDefaultData } from '../pages/index/H-data/default-data/default-data';

import { IndexBackupBody } from '../pages/index/A-body/backup-body/backup-body';
import { IndexBackupOverlay } from '../pages/index/B-overlay/backup-overlay/backup-overlay';
import { IndexBackupHeader } from '../pages/index/C-header/backup-header/backup-header';
import { IndexBackupFooter } from '../pages/index/D-footer/backup-footer/backup-footer';
import { IndexBackupLeftbar } from '../pages/index/E-leftbar/backup-leftbar/backup-leftbar';
import { IndexBackupRightbar } from '../pages/index/F-rightbar/backup-rightbar/backup-rightbar';
import { IndexBackupMain } from '../pages/index/G-main/backup-main/backup-main';
import { IndexBackupData } from '../pages/index/H-data/backup-data/backup-data';

export namespace Find {
  export function page(itemList: Array<HTMLElement>) {
    let block: any = {
      type: itemList[0].id.split('-')[1],
      name: itemList[0].className,
      page: itemList[0].id.split('-')[0],
    };

    switch (block.page) {
      case 'index':
        Find.index(block, itemList);
        break;
      case 'ticket':
        Find.ticket(block, itemList);
        break;
      case 'university':
        Find.university(block, itemList);
        break;
    }
  }
  export function index(blockInfo: any, itemList: Array<HTMLElement>) {
    switch (blockInfo.name) {
      //--|🠋| Body |🠋|--//
      case 'default-body':
        IndexDefaultBody.events(itemList);
        break;
      case 'backup-body':
        IndexBackupBody.events(itemList);
        break;

      //--|🠋| Overlay |🠋|--//
      case 'default-overlay':
        IndexDefaultOverlay.events(itemList);
        break;
      case 'backup-overlay':
        IndexBackupOverlay.events(itemList);
        break;

      //--|🠋| Header |🠋|--//
      case 'default-header':
        IndexDefaultHeader.events(itemList);
        break;
      case 'backup-header':
        IndexBackupHeader.events(itemList);
        break;

      //--|🠋| Footer |🠋|--//
      case 'default-footer':
        IndexDefaultFooter.events(itemList);
        break;
      case 'backup-footer':
        IndexBackupFooter.events(itemList);
        break;

      //--|🠋| Leftbar |🠋|--//
      case 'default-leftbar':
        IndexDefaultLeftbar.events(itemList);
        break;
      case 'backup-leftbar':
        IndexBackupLeftbar.events(itemList);
        break;

      //--|🠋| Rightbar |🠋|--//
      case 'default-rightbar':
        IndexDefaultRightbar.events(itemList);
        break;
      case 'backup-rightbar':
        IndexBackupRightbar.events(itemList);
        break;

      //--|🠋| Main |🠋|--//
      case 'default-main':
        IndexDefaultMain.events(itemList);
        break;
      case 'backup-main':
        IndexBackupMain.events(itemList);
        break;

      //--|🠋| Data |🠋|--//
      case 'default-data':
        IndexDefaultData.events(itemList);
        break;
      case 'backup-data':
        IndexBackupData.events(itemList);
        break;
    }
  }
  export function ticket(blockInfo: any, itemList: Array<HTMLElement>) {
    switch (blockInfo.name) {
      //--|🠋| Body |🠋|--//
      case 'default-body':
        // TicketDefaultBody.events(itemList);
        break;
      case 'backup-body':
        // TicketBackupBody.events(itemList);
        break;

      //--|🠋| Overlay |🠋|--//
      case 'default-overlay':
        // TicketDefaultOverlay.events(itemList);
        break;
      case 'backup-overlay':
        // TicketBackupOverlay.events(itemList);
        break;

      //--|🠋| Header |🠋|--//
      case 'default-header':
        // TicketDefaultHeader.events(itemList);
        break;
      case 'backup-header':
        // TicketBackupHeader.events(itemList);
        break;

      //--|🠋| Footer |🠋|--//
      case 'default-footer':
        // TicketDefaultFooter.events(itemList);
        break;
      case 'backup-footer':
        // TicketBackupFooter.events(itemList);
        break;

      //--|🠋| Leftbar |🠋|--//
      case 'default-leftbar':
        // TicketDefaultLeftbar.events(itemList);
        break;
      case 'backup-leftbar':
        // TicketBackupLeftbar.events(itemList);
        break;

      //--|🠋| Rightbar |🠋|--//
      case 'default-rightbar':
        // TicketDefaultRightbar.events(itemList);
        break;
      case 'backup-rightbar':
        // TicketBackupRightbar.events(itemList);
        break;

      //--|🠋| Main |🠋|--//
      case 'default-main':
        // TicketDefaultMain.events(itemList);
        break;
      case 'backup-main':
        // TicketBackupMain.events(itemList);
        break;

      //--|🠋| Data |🠋|--//
      case 'default-data':
        // TicketDefaultData.events(itemList);
        break;
      case 'backup-data':
        // TicketBackupData.events(itemList);
        break;
    }
  }
  export function university(blockInfo: any, itemList: Array<HTMLElement>) {
    switch (blockInfo.name) {
      //--|🠋| Body |🠋|--//
      case 'default-body':
        // UniversityDefaultBody.events(itemList);
        break;
      case 'backup-body':
        // UniversityBackupBody.events(itemList);
        break;

      //--|🠋| Overlay |🠋|--//
      case 'default-overlay':
        // UniversityDefaultOverlay.events(itemList);
        break;
      case 'backup-overlay':
        // UniversityBackupOverlay.events(itemList);
        break;

      //--|🠋| Header |🠋|--//
      case 'default-header':
        // UniversityDefaultHeader.events(itemList);
        break;
      case 'backup-header':
        // UniversityBackupHeader.events(itemList);
        break;

      //--|🠋| Footer |🠋|--//
      case 'default-footer':
        // UniversityDefaultFooter.events(itemList);
        break;
      case 'backup-footer':
        // UniversityBackupFooter.events(itemList);
        break;

      //--|🠋| Leftbar |🠋|--//
      case 'default-leftbar':
        // UniversityDefaultLeftbar.events(itemList);
        break;
      case 'backup-leftbar':
        // UniversityBackupLeftbar.events(itemList);
        break;

      //--|🠋| Rightbar |🠋|--//
      case 'default-rightbar':
        // UniversityDefaultRightbar.events(itemList);
        break;
      case 'backup-rightbar':
        // UniversityBackupRightbar.events(itemList);
        break;

      //--|🠋| Main |🠋|--//
      case 'default-main':
        // UniversityDefaultMain.events(itemList);
        break;
      case 'backup-main':
        // UniversityBackupMain.events(itemList);
        break;

      //--|🠋| Data |🠋|--//
      case 'default-data':
        // UniversityDefaultData.events(itemList);
        break;
      case 'backup-data':
        // UniversityBackupData.events(itemList);
        break;
    }
  }
  export function arrays() {}
}
