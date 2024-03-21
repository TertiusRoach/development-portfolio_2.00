export namespace DefaultRightbar {
  export function events() {
    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-navigation div a').on('click', (event) => {
      hideRightbar();
      downplayHeader();
      selectRightbar(event);
    });

    $('#rightbar-navigation div').on('mouseover', (event) => {
      selectMain(event);
    });

    //--🠊 console.log('|🠊 default-rightbar.js Detected! 🠈|'); 🠈--//
  }

  function selectMain(event: any) {
    //--|🠋| Scroll default-main |🠋|--//
    window.location.href = event.currentTarget.children[0].getAttribute('href');

    /*
    let pixelAmount: number;
    switch (targetElement.id.split('-')[1]) {
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
    */
  }
  function hideRightbar() {
    //--|🠋| Hide Rightbar |🠋|--//
    $('#rightbar-portrait').removeClass('visible');
    $('#rightbar-portrait').addClass('hidden');
    setTimeout(() => {
      $('#resume-rightbar').css('display', 'none');
    }, 375);
  }
  function downplayHeader() {
    //--|🠋| Downplay Header |🠋|--//
    $('#rightbar-hitbox').removeClass('active');
    $('#header-portrait').removeClass('active');
  }
  function selectRightbar(event: any) {
    //--|🠋| Remove all 'active' classes |🠋|--//
    $('#rightbar-navigation div').removeClass('active');
    //--|🠋| Highlight Clicked Rightbar |🠋|--//
    $(event.currentTarget).addClass('active');
  }
}
