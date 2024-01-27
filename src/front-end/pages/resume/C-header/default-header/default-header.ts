export namespace DefaultHeader {
  export function events() {
    $('#header-navigation a').on('click', function (event) {
      //--|🠋| Mark Header as Active |🠋|--//
      $('#header-navigation a').removeClass('active');
      $(event.currentTarget).addClass('active');
    });

    console.log('default-header.js Detected!');
  }
}
