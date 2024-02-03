export namespace DefaultRightbar {
  export function events() {
    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-navigation div').on('click', function (event) {
      //--|🠋| Highlight Button |🠋|--//
      $('#rightbar-navigation div').removeClass('active');
      $(event.currentTarget).addClass('active');
    });

    $('#rightbar-portrait').on('click', function () {
      //--|🠋| Hide Rightbar |🠋|--//
      $('#rightbar-portrait').removeClass('visible');
      $('#rightbar-portrait').addClass('hidden');

      $('#header-portrait').removeClass('active');
      $('#rightbar-hitbox').removeClass('active');

      setTimeout(() => {
        $('#resume-rightbar').css('display', 'none');
      }, 125);
    });
    console.log('default-rightbar.js Detected!');
  }
}
