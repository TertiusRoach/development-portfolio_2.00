export namespace DefaultHeader {
  export function events() {
    //--🠋 Desktop (Landscape) 🠋--//
    $('#header-navigation a').on('click', function (event) {
      //--|🠋| Mark Header as Active |🠋|--//
      $('#header-navigation a').removeClass('active');
      $(event.currentTarget).addClass('active');
    });

    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-hitbox').on('click', function () {
      $('#resume-rightbar').css('display', 'flex');

      setTimeout(() => {
        $('#rightbar-portrait').removeClass('hidden');
        $('#rightbar-portrait').addClass('visible');

        $('#header-portrait').addClass('active');
        $('#rightbar-hitbox').addClass('active');
      }, 125);
    });
    console.log('default-header.js Detected!');
  }
}
