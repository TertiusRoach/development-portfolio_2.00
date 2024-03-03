export namespace DefaultMain {
  export function events() {
    mainHome();
    mainSkills();
    // console.log('default-main.js Detected!');
  }
  //--|🠋| Grouped Functions |🠋|--//
  function mainSkills() {
    // const moveToSlide = (track, currentSlide, targetSlide) => {
    //   track.style.transform = `translateX(-${targetSlide.style.left})`;
    //   currentSlide.classList.remove('visible');
    //   targetSlide.classList.add('visible');
    // };

    // Arrange the slides next to one another
    // Apply to both carousels
    const horizontalSlides = (title: String) => {
      /*
      let dotsNav = document.querySelector(`.navigation-${title}`);
      let dots = Array.from(dotsNav.children);
      */

      let track: any = document.querySelector(`.${title}-carousel`);
      let slides: any = Array.from(track.children);
      let slideWidth = slides[0].getBoundingClientRect().width;

      let setSlidePosition = (slide: Object | any, index: number) => {
        console.log(typeof index);
        slide.style.left = `${slideWidth * index}px`;
      };
      slides.forEach(setSlidePosition);
    };
    horizontalSlides('producer');
    horizontalSlides('developer');

    // When I click left move slides to the left
    // Apply to both carousels
    let shiftLeft = (title: String) => {};
    shiftLeft('producer');
    shiftLeft('developer');

    // When I click right move slides to the right
    // Apply to both carousels
    let shiftRight = (title: String) => {};
    shiftRight('producer');
    shiftRight('developer');

    // when I click the nav indicators, move to that slide
    // Apply to both carousels
    let modifyDots = (title: String) => {};
    modifyDots('producer');
    modifyDots('developer');

    //-----------------------------------------------//
    /*
    const setSlidePosition = (slide, index) => {
      slide.style.left = `${slideWidth * index}px`;
    };
    slides.forEach(setSlidePosition);
    */

    /*
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

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('active');
      targetDot.classList.add('active');
    };

    const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
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

    // When I click left move slides to the left
    prevButton.addEventListener('click', (event) => {
      // Move the Slide
      const currentSlide = track.querySelector('.visible');
      const prevSlide: any = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector('.active');
      const prevDot = currentDot.previousElementSibling;
      const prevIndex = slides.findIndex((slide) => slide === prevSlide);

      updateDots(currentDot, prevDot);
      moveToSlide(track, currentSlide, prevSlide);
      hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    // When I click right move slides to the right
    nextButton.addEventListener('click', (event) => {
      // Move the Slide
      const currentSlide = track.querySelector('.visible');
      const nextSlide: any = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector('.active');
      const nextDot = currentDot.nextElementSibling;
      const nextIndex = slides.findIndex((slide) => slide === nextSlide);

      updateDots(currentDot, nextDot);
      moveToSlide(track, currentSlide, nextSlide);
      hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    // when I click the nav indicators, move to that slide
    dotsNav.addEventListener('click', (event) => {
      // What indicator was clicked on?
      const targetDot = (event.target as HTMLElement).closest('button');

      // If targetDot doesn't have a value (is null or undefined), the code stops executing and doesn't proceed to the next steps.
      if (!targetDot) return;

      const currentSlide = track.querySelector('.visible');
      const currentDot = dotsNav.querySelector('.active');
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      const targetSlide = slides[targetIndex];

      updateDots(currentDot, targetDot);
      moveToSlide(track, currentSlide, targetSlide);
      hideShowArrows(slides, prevButton, nextButton, targetIndex);
    });
    */
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
