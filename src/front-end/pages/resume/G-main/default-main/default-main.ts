export namespace DefaultMain {
  export function events() {
    $('.default-main section').on('mouseover', function (event) {
      //--|🠋| Mark Header as Active |🠋|--//
      let headerElement = document.querySelector(`#header-landscape #header-${event.currentTarget.id.split('-')[1]}`);

      if (headerElement.classList[0] === undefined) {
        $('#header-landscape a').removeClass('active');
        $(headerElement).addClass('active');
      }
    });
    console.log('default-main.js Detected!');
  }
}
