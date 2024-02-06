export namespace DefaultHeader {
  export function events() {
    //--🠋 Desktop (Landscape) 🠋--//
    $('#header-navigation a').on('click', (event) => {
      //--|🠋| Remove all 'active' classes |🠋|--//
      $('#header-navigation a').removeClass('active');
      //--|🠋| Highlight Clicked Header |🠋|--//
      $(event.currentTarget).addClass('active');
    });

    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-hitbox').on('click', (event) => {
      if (event.currentTarget.className === '') {
        $('#resume-rightbar').css('display', 'flex');

        setTimeout(() => {
          //--|🠋| Highlight Header |🠋|--//
          $('#rightbar-hitbox').addClass('active');
          $('#header-portrait').addClass('active');

          //--|🠋| Show Rightbar |🠋|--//
          $('#rightbar-portrait').removeClass('hidden');
          $('#rightbar-portrait').addClass('visible');
        }, 125);
      }
    });
    console.log('default-header.js Detected!');
  }
}
