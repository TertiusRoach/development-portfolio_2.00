export namespace DefaultMain {
  export function events() {
    mainHome();
    mainSkills();
    // console.log('default-main.js Detected!');
  }
  //--|🠋| Grouped Functions |🠋|--//
  function mainHome() {
    $('.default-main section').on('mouseover', function (event) {
      let headerElement: HTMLElement = document.querySelector(`#header-navigation #header-${event.currentTarget.id.split('-')[1]}`);
      let rightbarElement: HTMLElement = document.querySelector(`#rightbar-navigation #rightbar-${event.currentTarget.id.split('-')[1]}`);

      if (headerElement.classList[0] === undefined && rightbarElement.classList[0] === undefined) {
        //--|🠋| Mark Header as Active |🠋|--//
        $('#header-navigation a').removeClass('active');
        $(headerElement).addClass('active');

        //--|🠋| Mark Rightbar as Active |🠋|--//
        $('#rightbar-navigation div').removeClass('active');
        $(rightbarElement).addClass('active');
      }
    });
  }

  function mainSkills() {
    const track: any = document.querySelector('.track-container');
    const slides: any = Array.from(track.children);
    const nextButton = document.querySelector('.right-carousel');
    const prevButton = document.querySelector('.left-carousel');
    const dotsNav = document.querySelector('.navigation-carousel');
    const dots = Array.from(dotsNav.children);

    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = `translateX(-${targetSlide.style.left})`;
      currentSlide.classList.remove('visible');
      targetSlide.classList.add('visible');
    };

    // When I click left move slides to the left
    prevButton.addEventListener('click', (event) => {
      // Move the Slide
      const currentSlide = track.querySelector('.visible');
      const prevSlide: any = currentSlide.previousElementSibling;

      moveToSlide(track, currentSlide, prevSlide);
    });

    // When I click right move slides to the right
    nextButton.addEventListener('click', (event) => {
      // Move the Slide
      const currentSlide = track.querySelector('.visible');
      const nextSlide: any = currentSlide.nextElementSibling;

      moveToSlide(track, currentSlide, nextSlide);
    });

    // when I click the nav indicators, move to that slide
  }
}
