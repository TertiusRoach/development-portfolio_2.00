export namespace DefaultMain {
  export function events() {
    mainHome();
    mainSkills();
    // console.log('default-main.js Detected!');
  }
  //--|🠋| Sections |🠋|--//
  function mainHome() {
    //--|🠋| There's a bug here |🠋|--//
    /*
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
    */
  }
  function mainSkills() {
    Tools.bar('producer');
    Tools.icons('producer');
    Tools.carousel('producer');

    Tools.bar('developer');
    Tools.icons('developer');
    Tools.carousel('developer');
  }
}

namespace Tools {
  export function carousel(titleName: String) {
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

    let shiftLeft = (title: String) => {
      // When I click left move slides to the left
      let track: any = document.querySelector(`#${title}-carousel #${title}-skills`);
      let dotsNav: any = document.querySelector(`#${title}-carousel .navigation-${title}`);
      let nextButton: HTMLButtonElement = document.querySelector(`#${title}-carousel .right-${title}`);
      let prevButton: HTMLButtonElement = document.querySelector(`#${title}-carousel .left-${title}`);

      prevButton.addEventListener('click', (event) => {
        var currentSlide: any = track.querySelector(`#${title}-carousel .visible`);
        var prevSlide: any = currentSlide.previousElementSibling;
        var currentDot = dotsNav.querySelector(`#${title}-carousel .active`);
        var slides: any = Array.from(track.children);
        var prevIndex: number = slides.findIndex((slide) => slide === prevSlide);
        var prevDot = currentDot.previousElementSibling;

        // toggleCursors(title);
        updateDots(currentDot, prevDot);
        moveToSlide(track, currentSlide, prevSlide);
        toggleArrows(slides, prevButton, nextButton, prevIndex);
      });
    };
    let shiftRight = (title: String) => {
      // When I click right move slides to the right
      let track: any = document.querySelector(`#${title}-carousel #${title}-skills`);
      let dotsNav: any = document.querySelector(`#${title}-carousel .navigation-${title}`);
      let nextButton: HTMLButtonElement = document.querySelector(`#${title}-carousel .right-${title}`);
      let prevButton: HTMLButtonElement = document.querySelector(`#${title}-carousel .left-${title}`);
      nextButton.addEventListener('click', (event) => {
        var currentSlide: any = track.querySelector(`#${title}-carousel .visible`);
        var nextSlide: any = currentSlide.nextElementSibling;
        var currentDot = dotsNav.querySelector(`#${title}-carousel .active`);
        var slides: any = Array.from(track.children);
        var nextIndex: number = slides.findIndex((slide) => slide === nextSlide);
        var nextDot = currentDot.nextElementSibling;

        updateDots(currentDot, nextDot);
        moveToSlide(track, currentSlide, nextSlide);
        toggleArrows(slides, prevButton, nextButton, nextIndex);
      });
    };
    let modifyDots = (title: String) => {
      // when I click the nav indicators, move to that slide
      let track: any = document.querySelector(`#${title}-carousel #${title}-skills`);
      let dotsNav: any = document.querySelector(`#${title}-carousel .navigation-${title}`);
      let dots: any = Array.from(dotsNav.children);
      let nextButton: HTMLButtonElement = document.querySelector(`#${title}-carousel .right-${title}`);
      let prevButton: HTMLButtonElement = document.querySelector(`#${title}-carousel .left-${title}`);
      dotsNav.addEventListener('click', (event) => {
        // targetDot defines the event target by locating the closest <li> HTMLElement
        var targetDot: any = (event.target as HTMLElement).closest('li');

        // If targetDot doesn't have a value (is null or undefined), the code stops executing and doesn't proceed to the next steps.
        if (!targetDot) return;

        var currentSlide: any = track.querySelector(`#${title}-carousel .visible`);
        var currentDot: any = dotsNav.querySelector(`#${title}-carousel .active`);
        var targetIndex: number = dots.findIndex((dot) => dot === targetDot);
        var slides: any = Array.from(track.children);
        var targetSlide: any = slides[targetIndex];

        updateDots(currentDot, targetDot);
        moveToSlide(track, currentSlide, targetSlide);
        toggleArrows(slides, prevButton, nextButton, targetIndex);
      });
    };
    let horizontalSlides = (title: String) => {
      // Arrange the slides next to one another
      let track: any = document.querySelector(`#${title}-carousel #${title}-skills`);
      let slides: any = Array.from(track.children);
      let slideWidth = slides[0].getBoundingClientRect().width;

      let setSlidePosition = (slide: Object | any, index: number) => {
        slide.style.left = `${slideWidth * index}px`;
      };
      slides.forEach(setSlidePosition);
    };

    shiftLeft(titleName);
    shiftRight(titleName);
    modifyDots(titleName);
    horizontalSlides(titleName);
  }
  export function bar(titleName: String) {
    const rating: Array<Object> = [
      { rating: 0 },
      { rating: 1 },
      { rating: 2 },
      { rating: 3 },
      { rating: 4 },
      { rating: 5 },
      { rating: 6 },
      { rating: 7 },
      { rating: 8 },
      { rating: 9 },
      { rating: 10 },
    ];
    $(`#${titleName}-carousel #${titleName}-skills .visible li`).on('mouseover', function (event) {
      let bar: any = document.querySelector('#proficiency-skills span');
      // console.log(event.target);
    });
    /*
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(1)`).on('mouseover', function (event) {
      console.log(document.querySelector('#proficiency-skills span'));
      const element: any = document.querySelector('#proficiency-skills span');
      element.classList = [];
      element.classList = 'I';
      // currentSlide.classList.remove('visible');
      // console.log('Change class to .I');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(2)`).on('mouseover', function (event) {
      console.log(document.querySelector('#proficiency-skills span'));
      const element: any = document.querySelector('#proficiency-skills span');
      element.classList = [];
      element.classList = 'II';
      // console.log('Change class to .II');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(3)`).on('mouseover', function (event) {
      // console.log('Change class to .III');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(4)`).on('mouseover', function (event) {
      // console.log('Change class to .IV');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(5)`).on('mouseover', function (event) {
      // console.log('Change class to .V');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(6)`).on('mouseover', function (event) {
      // console.log('Change class to .VI');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(7)`).on('mouseover', function (event) {
      // console.log('Change class to .VII');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(8)`).on('mouseover', function (event) {
      // console.log('Change class to .VIII');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(9)`).on('mouseover', function (event) {
      // console.log('Change class to .IX');
    });
    $(`#${titleName}-carousel #${titleName}-skills .visible li:nth-child(10)`).on('mouseover', function (event) {
      // console.log('Change class to .X');
    });
    */
  }
  export function icons(titleName: String) {}

  // export function array() {}
}
