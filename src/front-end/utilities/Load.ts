import { Index } from 'pages/index/index';
export namespace Load {
  export function index(pageName: String, blockName: String) {
    let path: any = Load.info(blockName).directory;
    let element: any = Load.info(blockName).element;

    fetch(path)
      .then((response) => response.text())
      .then((data) => {
        //--|🠋| Replace Element with HTML file |🠋|--//
        element.innerHTML = data;

        //--|🠋| Run Page |🠋|--//
        switch (pageName) {
          case 'index':
            Index.run(blockName);
            break;
          case 'ticket':
            // Ticket.run(blockName);
            break;
          case 'university':
            // University.run(blockName);
            break;
        }
      })
      .catch((error) => {
        //--|🠋| Error Handling |🠋|--//
        console.error('|🠊 Error:', error);
      });
  }
  export function info(blockName: String) {
    let page: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';
    let block: String = blockName.split('-')[1];
    let order: String;

    switch (block) {
      case 'body':
        order = 'A';
        break;
      case 'overlay':
        order = 'B';
        break;
      case 'header':
        order = 'C';
        break;
      case 'footer':
        order = 'D';
        break;
      case 'leftbar':
        order = 'E';
        break;
      case 'rightbar':
        order = 'F';
        break;
      case 'main':
        order = 'G';
        break;
      case 'data':
        order = 'H';
        break;
    }

    return {
      directory: `dist/front-end/pages/${page}/${order}-${block}/${blockName}/${blockName}.html`,
      element: document.querySelector(`#${page}-${block}`),
    };
  }
  /* console.log('🠊 Load.js Detected! 🠈'); */
}
