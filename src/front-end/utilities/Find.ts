import { DefaultBody } from '../pages/index/A-body/default-body/default-body';
import { DefaultOverlay } from '../pages/index/B-overlay/default-overlay/default-overlay';
import { DefaultHeader } from '../pages/index/C-header/default-header/default-header';
import { DefaultFooter } from '../pages/index/D-footer/default-footer/default-footer';
import { DefaultLeftbar } from '../pages/index/E-leftbar/default-leftbar/default-leftbar';
import { DefaultRightbar } from '../pages/index/F-rightbar/default-rightbar/default-rightbar';
import { DefaultMain } from '../pages/index/G-main/default-main/default-main';
import { DefaultData } from '../pages/index/H-data/default-data/default-data';

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
      case 'default-body':
        DefaultBody.events(itemList);
        break;
      case 'default-overlay':
        DefaultOverlay.events(itemList);
        break;
      case 'default-header':
        DefaultHeader.events(itemList);
        break;
      case 'default-footer':
        DefaultFooter.events(itemList);
        break;
      case 'default-leftbar':
        DefaultLeftbar.events(itemList);
        break;
      case 'default-rightbar':
        DefaultRightbar.events(itemList);
        break;
      case 'default-main':
        DefaultMain.events(itemList);
        break;
      case 'default-data':
        DefaultData.events(itemList);
        break;
    }
  }
  export function ticket(blockInfo: any, itemList: Array<HTMLElement>) {}
  export function university(blockInfo: any, itemList: Array<HTMLElement>) {}
  export function arrays() {}
}

/*
    if (blockItem.page === 'index') {
      switch (blockItem.name) {
        //--|🠋| Body |🠋|--//
        case 'default-body':
          DefaultBody.events(itemList);
          break;
        //--|🠋| Overlay 🠈'); |🠋|--//
        case 'default-body':
          break;
        //--|🠋| Header |🠋|--//
        case 'default-body':
          break;
        //--|🠋| Footer |🠋|--//
        case 'default-body':
          break;
        //--|🠋| Leftbar |🠋|--//
        case 'default-body':
          break;
        //--|🠋| Rightbar |🠋|--//
        case 'rightbar':
          break;
        //--|🠋| Data |🠋|--//
        case 'main':
          break;
      }
    }
    */

/*
export namespace GetDesign {
  const distURI: String = fetchURI(window.location.href);
  const pageName: String = window.location.href.split('/').pop().split('.')[0];

  export class forPage {
    constructor(blockName: String) {
      let block: String = blockName.split('-')[1];
      let blockElement: HTMLElement = document.querySelector(`#${pageName}-${block}`);
      $.get(`${distURI}/front-end/${pageName}/${findFolder(block)}/${blockName}/${blockName}.html`, function (callback) {
        applyStyle(blockElement, blockName);
        $(blockElement).html(callback);
        new GetEvents.forPage(pageName, blockName);
      });
    }
  }

  function applyStyle(block: HTMLElement, pageName: String) {
    block.className = '';
    block.className = `${pageName}`;
  }
  function fetchURI(url: String) {
    //--|►| Online URI = Uniform Resource Identifier |◄|--//
    switch (url.slice(0, 5)) {
      case 'https':
        let href = url.split('/');
        //--► console.log('This page is Online'); ◄--//
        return `${href[0]}//${href[2]}/${href[3]}/dist`;
      case 'http:':
        //--► console.log('This page is Local'); ◄--//
        return '../../../dist';
    }
  }
  function findFolder(block: String) {
    switch (block) {
      case 'body':
        return `A-${block}`;
      case 'overlay':
        return `B-${block}`;
      case 'header':
        return `C-${block}`;
      case 'footer':
        return `D-${block}`;
      case 'leftbar':
        return `E-${block}`;
      case 'rightbar':
        return `F-${block}`;
      case 'main':
        return `G-${block}`;
      case 'data':
        return `H-${block}`;
    }
  }
}
*/
