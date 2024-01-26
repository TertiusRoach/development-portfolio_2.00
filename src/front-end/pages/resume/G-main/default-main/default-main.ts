export namespace DefaultMain {
  export function events() {
    $('.default-main section').on('mouseover', function (event) {
      //--|🠋| Mark Header as Active |🠋|--//
      let headerElement = document.querySelector(`.header-navigation #header-${event.currentTarget.id.split('-')[1]}`);
      switch (headerElement.classList[0]) {
        case undefined:
          $('.header-navigation a').removeClass('active');
          $(headerElement).addClass('active');
          break;
      }
    });
    console.log('default-main.js Detected!');
  }
}
