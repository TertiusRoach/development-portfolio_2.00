import { Page } from 'utilities/Page';
import { Index } from 'pages/index/index';
import { Resume } from 'pages/resume/resume';

export namespace Load {
  //--|🠋| One loader for every page: fetch the block, place it, then run its events |🠋|--//
  export function page(blockName: String) {
    let info: any = new Page.info(blockName);
    let item: HTMLElement = info.element;
    let pageName: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';

    fetch(info.directory)
      .then((response) => response.text())
      .then((data) => {
        //--|🠋| Change Class |🠋|--//
        item.className = `${blockName}`;
        //--|🠋| Replace HTML |🠋|--//
        item.innerHTML = data;

        //--|🠋| Run Page |🠋|--//
        switch (pageName) {
          case 'index':
            Index.run(blockName);
            break;
          case 'resume':
            Resume.run(blockName);
            break;
        }
      })
      .catch((error) => {
        //--|🠋| Error Handling |🠋|--//
        console.error('|🠊 Error:', error);
      });
  }

  //--🠊 console.log('|🠊 Load.js Detected! 🠈|'); 🠈--//
}
