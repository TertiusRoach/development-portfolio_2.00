export namespace DefaultMain {
  export function events() {
    $('.default-main section').on('mouseover', function (event) {
      //--|🠋| Mark Header as Active |🠋|--//
      let headerElement = document.querySelector(`#header-navigation #header-${event.currentTarget.id.split('-')[1]}`);

      if (headerElement.classList[0] === undefined) {
        $('#header-navigation a').removeClass('active');
        $(headerElement).addClass('active');
      }

      //--|🠋| Mark Rightbar as Active |🠋|--//
      // let headerElement = document.querySelector(`#header-landscape #header-${event.currentTarget.id.split('-')[1]}`);
      // console.log(event.currentTarget);

      // console.log($('.rightbar-portrait div'));
    });
    console.log('default-main.js Detected!');
  }
}
