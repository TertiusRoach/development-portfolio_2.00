export namespace DefaultRightbar {
  export function events() {
    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-navigation div a').on('click', (event) => {
      //--|🠋| Downplay Header |🠋|--//
      $('#rightbar-hitbox').removeClass('active');
      $('#header-portrait').removeClass('active');

      //--|🠋| Highlight Rightbar |🠋|--//
      $('#rightbar-navigation div').removeClass('active');
      $(event.currentTarget).addClass('active');

      //--|🠋| Hide Rightbar |🠋|--//
      $('#rightbar-portrait').removeClass('visible');
      $('#rightbar-portrait').addClass('hidden');
      setTimeout(() => {
        $('#resume-rightbar').css('display', 'none');
      }, 375);
    });

    $('#rightbar-portrait').on('mouseleave', () => {
      //--|🠋| Downplay Header |🠋|--//
      $('#rightbar-hitbox').removeClass('active');
      $('#header-portrait').removeClass('active');

      //--|🠋| Hide Rightbar |🠋|--//
      $('#rightbar-portrait').removeClass('visible');
      $('#rightbar-portrait').addClass('hidden');
      setTimeout(() => {
        $('#resume-rightbar').css('display', 'none');
      }, 375);
    });
    console.log('default-rightbar.js Detected!');
  }
}
