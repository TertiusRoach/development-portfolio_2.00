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
    Tools.carousel('producer');
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

    $(`#${titleName}-carousel #${titleName}-skills ul li`).on('mouseover', function (event) {
      Tools.bar(event);
    });
  }
  export function bar(event: HTMLElement | any) {
    let bar = document.querySelector('#proficiency-skills span');
    let rating: String;
    bar.className = '';
    bar.classList.add('O');
    switch ($(event.target).parent().children(':last').attr('alt')) {
      case '1/10':
        rating = 'I';
        break;
      case '2/10':
        rating = 'II';
        break;
      case '3/10':
        rating = 'III';
        break;
      case '4/10':
        rating = 'IV';
        break;
      case '5/10':
        rating = 'V';
        break;
      case '6/10':
        rating = 'VI';
        break;
      case '7/10':
        rating = 'VII';
        break;
      case '8/10':
        rating = 'VIII';
        break;
      case '9/10':
        rating = 'IX';
        break;
      case '10/10':
        rating = 'X';
        break;
    }
    bar.classList.add(`${rating}`);
  }
}
