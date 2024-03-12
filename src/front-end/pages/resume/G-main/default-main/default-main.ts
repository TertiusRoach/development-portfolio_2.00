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
    Tools.proficiency('producer');

    Tools.carousel('developer');
    Tools.proficiency('developer');
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
  export function proficiency(titleName: String) {
    const observeScores = (prevScore: Number, nextScore: Number) => {
      if (`${prevScore}` !== 'NaN' && `${prevScore}` !== 'undefined' && `${nextScore}` !== 'NaN' && `${nextScore}` !== 'undefined') {
        return true;
      } else {
        return false;
      }
    };
    const activateCounter = (counter: HTMLHeadingElement | any, prevScore: Number, nextScore: Number) => {
      let count: any | Number;

      switch (prevScore < nextScore) {
        case true:
          //--🠋 `Count up from ${prevScore} to ${nextScore}` 🠋--//
          count = prevScore;
          const countUp = setInterval(() => {
            count++;
            counter.textContent = `${count}/10`;

            if (count === nextScore) {
              clearInterval(countUp);
              counter.setAttribute('data-val', nextScore);
            }
          }, 250);

          break;
        case false:
          //--🠋 `Count down from ${prevScore} to ${nextScore}` 🠋--//
          count = prevScore;
          const countDown = setInterval(() => {
            count--;
            counter.textContent = `${count}/10`;

            if (count === nextScore) {
              clearInterval(countDown);
              counter.setAttribute('data-val', nextScore);
            }
          }, 250);
          break;
      }
    };

    let carouselSkill: String = `#${titleName}-carousel #${titleName}-skills ul li > :first-child`;
    $(carouselSkill).on('mouseover', function (event) {
      let bar: HTMLSpanElement = document.querySelector('#proficiency-skills span');
      let counter: HTMLHeadingElement = document.querySelector('#proficiency-skills h3');
      let prevScore: Number = Number(counter.getAttribute('data-val').split('/')[0]);

      let rating: String;
      let nextScore: Number | typeof NaN;
      switch ($(event.target).parent().children(':last').attr('alt')) {
        case '1/10':
          rating = 'I';
          nextScore = 1;
          break;
        case '2/10':
          rating = 'II';
          nextScore = 2;
          break;
        case '3/10':
          rating = 'III';
          nextScore = 3;
          break;
        case '4/10':
          rating = 'IV';
          nextScore = 4;
          break;
        case '5/10':
          rating = 'V';
          nextScore = 5;
          break;
        case '6/10':
          rating = 'VI';
          nextScore = 6;
          break;
        case '7/10':
          rating = 'VII';
          nextScore = 7;
          break;
        case '8/10':
          rating = 'VIII';
          nextScore = 8;
          break;
        case '9/10':
          rating = 'IX';
          nextScore = 9;
          break;
        case '10/10':
          rating = 'X';
          nextScore = 10;
          break;
      }
      bar.className = '';
      bar.classList.add(`${rating}`);

      //---------------------Counter Here
      if (observeScores(prevScore, nextScore) === true && prevScore !== nextScore) {
        activateCounter(counter, prevScore, nextScore);
      }
    });
  }
}
