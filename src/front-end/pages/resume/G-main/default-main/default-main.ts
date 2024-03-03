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
    const moveToSlide = (track, currentSlide, targetSlide, title: String) => {
      track.style.transform = `translateX(-${targetSlide.style.left})`;

      currentSlide.classList.add('hidden');
      currentSlide.classList.remove('visible');

      targetSlide.classList.add('visible');
      targetSlide.classList.remove('hidden');

      let carousel: HTMLElement = document.querySelector(`.${title}-carousel`);
      if (carousel) {
        for (let i = 0; i < carousel.childElementCount; i++) {
          let container = carousel.children[i] as HTMLElement;
          switch (container.classList[1]) {
            case 'visible':
              for (let j = 0; j < container.childElementCount; j++) {
                var skill = container.children[j] as HTMLElement;
                skill.style.cursor = 'pointer';
              }
              break;
            case 'hidden':
              for (let j = 0; j < container.childElementCount; j++) {
                var skill = container.children[j] as HTMLElement;
                skill.style.cursor = 'default';
              }
              break;
          }
        }
      }
    };
    const toggleArrows = (slides, prevButton, nextButton, targetIndex) => {
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
      let dotsNav: any = document.querySelector(`.navigation-${title}`);
      let nextButton = document.querySelector(`.right-${title}`);
      let prevButton = document.querySelector(`.left-${title}`);

      prevButton.addEventListener('click', (event) => {
        var track: any = document.querySelector(`.${title}-carousel`);
        var currentSlide: any = track.querySelector('.visible');
        var prevSlide: any = currentSlide.previousElementSibling;
        var currentDot = dotsNav.querySelector('.active');
        var slides: any = Array.from(track.children);
        var prevIndex: number = slides.findIndex((slide) => slide === prevSlide);
        var prevDot = currentDot.previousElementSibling;

        // toggleCursors(title);
        updateDots(currentDot, prevDot);
        moveToSlide(track, currentSlide, prevSlide, title);
        toggleArrows(slides, prevButton, nextButton, prevIndex);
      });
    };
    shiftLeft('producer');
    shiftLeft('developer');

    const shiftRight = (title: String) => {
      // When I click right move slides to the right
      let dotsNav: any = document.querySelector(`.navigation-${title}`);
      let nextButton = document.querySelector(`.right-${title}`);
      let prevButton = document.querySelector(`.left-${title}`);
      nextButton.addEventListener('click', (event) => {
        var track: any = document.querySelector(`.${title}-carousel`);
        var currentSlide: any = track.querySelector('.visible');
        var nextSlide: any = currentSlide.nextElementSibling;
        var currentDot = dotsNav.querySelector('.active');
        var slides: any = Array.from(track.children);
        var nextIndex: number = slides.findIndex((slide) => slide === nextSlide);
        var nextDot = currentDot.nextElementSibling;

        updateDots(currentDot, nextDot);
        moveToSlide(track, currentSlide, nextSlide, title);
        toggleArrows(slides, prevButton, nextButton, nextIndex);
      });
    };
    shiftRight('producer');
    shiftRight('developer');

    // when I click the nav indicators, move to that slide
    const modifyDots = (title: String) => {
      let dotsNav: any = document.querySelector(`.navigation-${title}`);
      let dots: any = Array.from(dotsNav.children);
      let nextButton = document.querySelector(`.right-${title}`);
      let prevButton = document.querySelector(`.left-${title}`);
      dotsNav.addEventListener('click', (event) => {
        // What indicator was clicked on?

        var targetDot: any = (event.target as HTMLElement).closest('li');
        // If targetDot doesn't have a value (is null or undefined), the code stops executing and doesn't proceed to the next steps.
        if (!targetDot) return;

        var track: any = document.querySelector(`.${title}-carousel`);
        var currentSlide: any = track.querySelector('.visible');
        var currentDot: any = dotsNav.querySelector('.active');
        var targetIndex: number = dots.findIndex((dot) => dot === targetDot);
        var slides: any = Array.from(track.children);
        var targetSlide: any = slides[targetIndex];

        updateDots(currentDot, targetDot);
        moveToSlide(track, currentSlide, targetSlide, title);
        toggleArrows(slides, prevButton, nextButton, targetIndex);
      });
    };
    modifyDots('producer');
    modifyDots('developer');

    /*
    const toggleCursors = (title: String) => {
      let carousel: HTMLElement = document.querySelector(`.${title}-carousel`);
      if (carousel) {
        for (let i = 0; i < carousel.childElementCount; i++) {
          let container = carousel.children[i] as HTMLElement;
          switch (container.classList[1]) {
            case 'visible':
              for (let j = 0; j < container.childElementCount; j++) {
                var skill = container.children[j] as HTMLElement;
                skill.style.cursor = 'pointer';
              }
              break;
            case 'hidden':
              for (let j = 0; j < container.childElementCount; j++) {
                var skill = container.children[j] as HTMLElement;
                skill.style.cursor = 'default';
              }
              break;
          }
        }
      }
    };
    toggleCursors('producer');
    toggleCursors('developer');
    */

    const horizontalSlides = (title: String) => {
      // Arrange the slides next to one another
      let track: any = document.querySelector(`.${title}-carousel`);
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
