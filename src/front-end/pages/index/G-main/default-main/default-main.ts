export namespace DefaultMain {
  export function events() {
    //--🠋 Cards fade in as they scroll into view 🠋--//
    revealCards();

    //--🠊 console.log('|🠊 default-main.js Detected! 🠈|'); 🠈--//
  }

  //--|🠋| default-main |🠋|--//
  function revealCards() {
    let cards: NodeListOf<HTMLElement> = document.querySelectorAll('.timeline-card');

    //--|🠋| Older browsers: show everything straight away |🠋|--//
    if (!('IntersectionObserver' in window)) {
      $(cards).removeClass('hidden').addClass('visible');
      return;
    }

    //--|🠋| Swap .hidden for .visible once a card is on screen |🠋|--//
    let watcher = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $(entry.target).removeClass('hidden').addClass('visible');
            watcher.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => watcher.observe(card));
  }
}
