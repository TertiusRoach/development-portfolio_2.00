export namespace DefaultHeader {
  export function events() {
    //--🠋 Desktop (Landscape) 🠋--//
    $('#header-navigation a').on('click', (event) => {
      selectHeader(event);
      scrollAnimate(event, 500);
    });

    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-hitbox').on('click', (event) => {
      switch (event.currentTarget.className) {
        case 'active':
          downplayHeader();
          hideRightbar();
          break;
        case '':
          showRightbar();
          highlightHeader();
          break;
      }
    });

    // console.log('default-header.js Detected!');
  }

  //--|🠋| default-header |🠋|--//
  function scrollAnimate(event: object | any, milliseconds: number) {
    let pixelAmount: number;
    let targetEvent: string = event.currentTarget.id.split('-')[1];
    let targetOffset: number = document.querySelector('.default-main').scrollTop;
    let targetElement: HTMLElement = document.querySelector(`#main-${targetEvent}`);

    switch (targetEvent) {
      case 'home':
        pixelAmount = targetElement.offsetHeight * 0 - targetOffset;
        break;
      case 'skills':
        pixelAmount = targetElement.offsetHeight * 1 - targetOffset;
        break;
      case 'employment':
        pixelAmount = targetElement.offsetHeight * 2 - targetOffset;
        break;
      case 'contact':
        pixelAmount = targetElement.offsetHeight * 3 - targetOffset;
        break;
    }
    $('html, main').animate({ scrollTop: `+=${pixelAmount}px` }, milliseconds);
  }
  function selectHeader(event: any) {
    //--|🠋| Remove all 'active' classes |🠋|--//
    $('#header-navigation a').removeClass('active');
    //--|🠋| Highlight Clicked Header |🠋|--//
    $(event.currentTarget).addClass('active');
  }
  function highlightHeader() {
    //--|🠋| Highlight Header |🠋|--//
    setTimeout(() => {
      $('#rightbar-hitbox').addClass('active');
      $('#header-portrait').addClass('active');
    }, 125);
  }
  function downplayHeader() {
    //--|🠋| Downplay Header |🠋|--//
    $('#rightbar-hitbox').removeClass('active');
    $('#header-portrait').removeClass('active');
  }
  function showRightbar() {
    //--|🠋| Show Rightbar |🠋|--//
    $('#resume-rightbar').css('display', 'flex');
    setTimeout(() => {
      $('#rightbar-portrait').removeClass('hidden');
      $('#rightbar-portrait').addClass('visible');
    }, 125);
  }
  function hideRightbar() {
    //--|🠋| Hide Rightbar |🠋|--//
    $('#rightbar-portrait').removeClass('visible');
    $('#rightbar-portrait').addClass('hidden');
    setTimeout(() => {
      $('#resume-rightbar').css('display', 'none');
    }, 375);
  }
}
