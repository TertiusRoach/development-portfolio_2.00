export namespace DefaultMain {
  export function events() {
    //--🠋 Measure once, then again whenever the screen changes 🠋--//
    measureScale();
    $(window).on('resize', () => {
      measureScale();
    });

    //--🠊 console.log('|🠊 default-main.js Detected! 🠈|'); 🠈--//
  }

  //--|🠋| default-main |🠋|--//
  function measureScale() {
    let width: number = window.innerWidth;
    let height: number = window.innerHeight;
    let portrait: boolean = window.matchMedia('(orientation: portrait)').matches;

    //--|🠋| Screen readout |🠋|--//
    if (portrait) {
      $('#scale-readout').text(`${width} × ${height} · Portrait: sizes follow the height`);
    } else {
      $('#scale-readout').text(`${width} × ${height} · Landscape: sizes follow the width`);
    }

    //--|🠋| Each row shows its live size and the sum behind it |🠋|--//
    $('.specimen-row').each((_index, row) => {
      let tag: string = $(row).data('tag');
      let element: HTMLElement = row.querySelector(tag);
      let size: number = parseFloat(window.getComputedStyle(element).fontSize);

      $(row).find('.label-size').text(`${size.toFixed(2)}px`);
      if (portrait) {
        $(row).find('.label-formula').text(`height × ${$(row).data('port')} ÷ 3840`);
      } else {
        $(row).find('.label-formula').text(`width × ${$(row).data('land')} ÷ 3840`);
      }
    });
  }
}
