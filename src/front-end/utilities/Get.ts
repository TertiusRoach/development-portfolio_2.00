export namespace Get {
  export class page {
    constructor(blockName: String) {
      let page: String = window.location.pathname.split('/').pop().split('.')[0] || 'index';
      let block: String = blockName.split('-')[1];
      let element: HTMLElement = document.querySelector(`#${page}-${block}`);

      fetch(`dist/front-end/pages/${page}/A-${block}/${blockName}/${blockName}.html`)
        .then((response) => response.text())
        .then((data) => {
          //--|🠋| Replace Element with HTML file |🠋|--//
          element.innerHTML = data;
        })
        .catch((error) => {
          //--|🠋| Error Handling |🠋|--//
          console.error('|🠊 Error:', error);
        });

      //--|🠊| console.log(`🠊 new Get.page(${blockName}); 🠈`); 🠈'); |🠈|--//
    }
  }
}

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
