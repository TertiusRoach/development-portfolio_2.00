import { Tool } from 'utilities/Tool';

import { Index } from 'pages/index/index';
import { Resume } from 'pages/resume/resume';
export namespace Load {
  export function index(blockName: String) {
    let information: any = new Tool.info(blockName);
    let path: any = information.directory;
    let element: any = information.element;

    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        //--|🠋| Replace Element with HTML file |🠋|--//
        element.innerHTML = data;

        //--|🠋| Run Page |🠋|--//
        Index.run(blockName);
      })
      .catch((error) => {
        //--|🠋| Error Handling |🠋|--//
        console.error('|🠊 Error:', error);
      });
  }

  export function resume(blockName: String) {
    let information: any = new Tool.info(blockName);
    let path: any = information.directory;
    let element: any = information.element;

    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        //--|🠋| Replace Element with HTML file |🠋|--//
        element.innerHTML = data;
        Resume.run(blockName);
      })
      .catch((error) => {
        //--|🠋| Error Handling |🠋|--//
        console.error('|🠊 Error:', error);
      });
  }

  /* console.log('🠊 Load.js Detected! 🠈'); */
}
