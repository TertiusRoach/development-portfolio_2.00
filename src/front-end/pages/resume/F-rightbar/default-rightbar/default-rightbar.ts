export namespace DefaultRightbar {
  export function events() {
    const rightbarContainer: HTMLElement = document.querySelector('#resume-rightbar');

    $('#rightbar-navigation div').on('click', function (event) {
      //--|🠋| Mark Rightbar as Active |🠋|--//
      $('#rightbar-navigation div').removeClass('active');
      $(event.currentTarget).addClass('active');
    });

    $('#rightbar-hitbox').on('click mouseover', function () {
      rightbarContainer.style.display = 'flex';

      setTimeout(() => {
        $('#rightbar-portrait').removeClass('hidden');
        $('#rightbar-portrait').addClass('visible');

        $('#header-portrait').addClass('active');
        $('#rightbar-hitbox').addClass('active');
      }, 125);
    });

    $('#rightbar-portrait').on('click mouseleave', function () {
      $('#rightbar-portrait').removeClass('visible');
      $('#rightbar-portrait').addClass('hidden');

      $('#header-portrait').removeClass('active');
      $('#rightbar-hitbox').removeClass('active');

      setTimeout(() => {
        rightbarContainer.style.display = 'none';
      }, 250);
    });

    console.log('default-rightbar.js Detected!');
  }
}
