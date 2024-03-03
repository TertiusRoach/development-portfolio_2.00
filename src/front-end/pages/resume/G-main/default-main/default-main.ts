export namespace DefaultMain {
  export function events() {
    mainHome();
    mainSkills();
    // console.log('default-main.js Detected!');
  }
  //--|🠋| Grouped Functions |🠋|--//
  function mainSkills() {
    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('active');
      targetDot.classList.add('active');
    };
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = `translateX(-${targetSlide.style.left})`;

      currentSlide.classList.add('hidden');
      currentSlide.classList.remove('visible');

      targetSlide.classList.add('visible');
      targetSlide.classList.remove('hidden');
    };
    const toggleArrows = (slides: HTMLElement[], prevButton: HTMLButtonElement, nextButton: HTMLButtonElement, targetIndex: Number) => {
      if (targetIndex === 0) {
        prevButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
      } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
      } else {
        prevButton.classList.remove('hidden');
        nextButton.classList.remove('hidden');
      }
    };

    const shiftLeft = (title: String) => {
      // When I click left move slides to the left
      let track: any = document.querySelector(`#${title}-skills #${title}-carousel`);
      let dotsNav: any = document.querySelector(`#${title}-skills .navigation-${title}`);
      let nextButton: HTMLButtonElement = document.querySelector(`#${title}-skills .right-${title}`);
      let prevButton: HTMLButtonElement = document.querySelector(`#${title}-skills .left-${title}`);

      prevButton.addEventListener('click', (event) => {
        var currentSlide: any = track.querySelector(`#${title}-skills .visible`);
        var prevSlide: any = currentSlide.previousElementSibling;
        var currentDot = dotsNav.querySelector(`#${title}-skills .active`);
        var slides: any = Array.from(track.children);
        var prevIndex: number = slides.findIndex((slide) => slide === prevSlide);
        var prevDot = currentDot.previousElementSibling;

        // toggleCursors(title);
        updateDots(currentDot, prevDot);
        moveToSlide(track, currentSlide, prevSlide);
        toggleArrows(slides, prevButton, nextButton, prevIndex);
      });
    };
    shiftLeft('producer');
    shiftLeft('developer');

    const shiftRight = (title: String) => {
      // When I click right move slides to the right
      let track: any = document.querySelector(`#${title}-skills #${title}-carousel`);
      let dotsNav: any = document.querySelector(`#${title}-skills .navigation-${title}`);
      let nextButton: HTMLButtonElement = document.querySelector(`#${title}-skills .right-${title}`);
      let prevButton: HTMLButtonElement = document.querySelector(`#${title}-skills .left-${title}`);
      nextButton.addEventListener('click', (event) => {
        var currentSlide: any = track.querySelector(`#${title}-skills .visible`);
        var nextSlide: any = currentSlide.nextElementSibling;
        var currentDot = dotsNav.querySelector(`#${title}-skills .active`);
        var slides: any = Array.from(track.children);
        var nextIndex: number = slides.findIndex((slide) => slide === nextSlide);
        var nextDot = currentDot.nextElementSibling;

        updateDots(currentDot, nextDot);
        moveToSlide(track, currentSlide, nextSlide);
        toggleArrows(slides, prevButton, nextButton, nextIndex);
      });
    };
    shiftRight('producer');
    shiftRight('developer');

    const modifyDots = (title: String) => {
      // when I click the nav indicators, move to that slide
      let track: any = document.querySelector(`#${title}-skills #${title}-carousel`);
      let dotsNav: any = document.querySelector(`#${title}-skills .navigation-${title}`);
      let dots: any = Array.from(dotsNav.children);
      let nextButton: HTMLButtonElement = document.querySelector(`#${title}-skills .right-${title}`);
      let prevButton: HTMLButtonElement = document.querySelector(`#${title}-skills .left-${title}`);
      dotsNav.addEventListener('click', (event) => {
        // targetDot defines the event target by locating the closest <li> HTMLElement
        var targetDot: any = (event.target as HTMLElement).closest('li');

        // If targetDot doesn't have a value (is null or undefined), the code stops executing and doesn't proceed to the next steps.
        if (!targetDot) return;

        var currentSlide: any = track.querySelector(`#${title}-skills .visible`);
        var currentDot: any = dotsNav.querySelector(`#${title}-skills .active`);
        var targetIndex: number = dots.findIndex((dot) => dot === targetDot);
        var slides: any = Array.from(track.children);
        var targetSlide: any = slides[targetIndex];

        updateDots(currentDot, targetDot);
        moveToSlide(track, currentSlide, targetSlide);
        toggleArrows(slides, prevButton, nextButton, targetIndex);
      });
    };
    modifyDots('producer');
    modifyDots('developer');

    const horizontalSlides = (title: String) => {
      // Arrange the slides next to one another
      let track: any = document.querySelector(`#${title}-skills #${title}-carousel`);
      let slides: any = Array.from(track.children);
      let slideWidth = slides[0].getBoundingClientRect().width;

      let setSlidePosition = (slide: Object | any, index: number) => {
        slide.style.left = `${slideWidth * index}px`;
      };
      slides.forEach(setSlidePosition);
    };
    horizontalSlides('producer');
    horizontalSlides('developer');
  }
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
}
