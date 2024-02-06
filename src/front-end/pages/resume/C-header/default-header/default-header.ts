export namespace DefaultHeader {
  export function events() {
    //--🠋 Desktop (Landscape) 🠋--//
    $('#header-navigation a').on('click', (event) => {
      //--|🠋| Mark Header as Active |🠋|--//
      $('#header-navigation a').removeClass('active');
      $(event.currentTarget).addClass('active');
    });

    //--🠋 Mobile (Portrait) 🠋--//
    $('#rightbar-hitbox')
      .on('click', (event) => {
        if (event.currentTarget.className === '') {
          $('#resume-rightbar').css('display', 'flex');

          setTimeout(() => {
            $('#rightbar-hitbox').addClass('active');
            $('#header-portrait').addClass('active');

            //--|🠋| Show Rightbar |🠋|--//
            $('#rightbar-portrait').removeClass('hidden');
            $('#rightbar-portrait').addClass('visible');
          }, 125);
        }
      })
      .on('mouseover', (event) => {
        if (event.currentTarget.className === '') {
          $('#resume-rightbar').css('display', 'flex');

          setTimeout(() => {
            $('#rightbar-hitbox').addClass('active');
            $('#header-portrait').addClass('active');

            //--|🠋| Show Rightbar |🠋|--//
            $('#rightbar-portrait').removeClass('hidden');
            $('#rightbar-portrait').addClass('visible');
          }, 125);
        }
      })
      .on('mouseleave', (event) => {
        // if (event.currentTarget.className === '') {
        //   $('#rightbar-portrait').removeClass('visible');
        //   $('#rightbar-portrait').addClass('hidden');
        //   setTimeout(() => {
        //     $('#resume-rightbar').css('display', 'none');
        //   }, 375);
        // }
      });

    console.log('default-header.js Detected!');
  }
}
