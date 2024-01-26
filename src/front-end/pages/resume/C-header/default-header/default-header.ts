export namespace DefaultHeader {
  export function events() {
    $('#header-landscape a').on('click', function (event) {
      //--|🠋| Mark Header as Active |🠋|--//
      $('#header-landscape a').removeClass('active');
      $(event.currentTarget).addClass('active');
    });

    console.log('default-header.js Detected!');
  }
}
