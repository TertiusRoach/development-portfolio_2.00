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
    Tools.navigation('producer');
    Tools.carousel('producer');
    Tools.rating('producer');

    Tools.navigation('developer');
    Tools.carousel('developer');
    Tools.rating('developer');
  }
}

namespace Tools {
  export function navigation(titleName: String) {
    const title: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] span:nth-child(1)`);
    const section: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] span:nth-child(2)`);
    const navigation = `#${titleName}-carousel .navigation-${titleName} li`;

    let safetyToggle = (action: 'block' | 'clear', event: HTMLElement | any, milliseconds: number) => {
      let enable: String = event.target.firstChild.innerText;
      switch (action) {
        case 'block':
          setTimeout(() => {
            for (let i = 0; i < event.target.parentNode.children.length; i++) {
              let element = event.target.parentNode.childNodes[i].firstChild.innerText;

              if (element !== enable) {
                event.target.parentNode.children[i].classList.remove('cleared');
                event.target.parentNode.children[i].classList.add('blocked');
              } else if (element === enable) {
                event.target.parentNode.children[i].classList.remove('blocked');
                event.target.parentNode.children[i].classList.add('cleared');
              }
            }
          }, milliseconds);
          break;
        case 'clear':
          setTimeout(() => {
            for (let i = 0; i < event.target.parentNode.children.length; i++) {
              event.target.parentNode.children[i].classList.remove('blocked');
              event.target.parentNode.children[i].classList.add('cleared');
            }
          }, milliseconds);
          break;
      }
    };

    $(navigation)
      .on('mouseover', function (event) {
        switch (true) {
          case event.target.classList.contains('cleared'):
            safetyToggle('block', event, 0);
            let sectionName: String = $(event.target).find('>:first-child').text();

            section.innerHTML = `<h1>${sectionName}</h1>
                                 <h6>${sectionName}</h6>`;

            title.className = '';
            title.className = 'hidden';

            section.className = '';
            section.className = 'visible';

            safetyToggle('clear', event, 375);
            break;
        }
      })
      .on('mouseleave', function (event) {
        switch (true) {
          case event.target.classList.contains('cleared'):
            safetyToggle('block', event, 0);

            title.className = '';
            title.className = 'visible';

            section.className = '';
            section.className = 'hidden';

            safetyToggle('clear', event, 375);
            break;
        }
      });
  }
  export function carousel(titleName: String) {
    const updateDots = (currentDot: HTMLElement, targetDot: HTMLElement) => {
      currentDot.removeAttribute('id');
      targetDot.setAttribute('id', 'active');
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
        var currentDot = dotsNav.querySelector(`#${title}-carousel #active`);
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
        var currentDot = dotsNav.querySelector(`#${title}-carousel #active`);
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
        var currentDot: any = dotsNav.querySelector(`#${title}-carousel #active`);
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
  export function rating(titleName: String) {
    const observeScores = (prevScore: Number, nextScore: Number) => {
      if (`${prevScore}` !== 'NaN' && `${prevScore}` !== 'undefined' && `${nextScore}` !== 'NaN' && `${nextScore}` !== 'undefined') {
        return true;
      } else {
        return false;
      }
    };
    const activateCounter = (counter: HTMLHeadingElement | any, prevScore: Number | any, nextScore: Number | any) => {
      let count: any;
      let milliseconds: number = 125;
      let delay: number;
      switch (prevScore < nextScore) {
        case true:
          //--🠋 `Count up from ${prevScore} to ${nextScore}` 🠋--//
          count = prevScore;
          delay = milliseconds * (nextScore - prevScore);
          const countUp = setInterval(() => {
            count++;
            counter.textContent = `${count}/10`;

            if (count === nextScore) {
              clearInterval(countUp);
            }
          }, milliseconds);
          break;
        case false:
          //--🠋 `Count down from ${prevScore} to ${nextScore}` 🠋--//
          count = prevScore;
          delay = milliseconds * (prevScore - nextScore);
          const countDown = setInterval(() => {
            count--;
            counter.textContent = `${count}/10`;

            if (count === nextScore) {
              clearInterval(countDown);
            }
          }, milliseconds);
          break;
      }
      return delay;
    };

    let ready: boolean = true;
    const skillIcon = `#${titleName}-carousel #${titleName}-skills ul li > :first-child`;
    $(skillIcon).on('mouseover', function (event) {
      //--|🠋| It's buggy, maybe add an invisible wall to block off other icons while executing? |🠋|--//
      if (ready === true) {
        ready = false;
        let bar: HTMLSpanElement = document.querySelector('#proficiency-skills span');
        let counter: HTMLHeadingElement = document.querySelector('#proficiency-skills h3');
        let prevScore: Number = Number(document.querySelector('#proficiency-skills h3').getAttribute('data-val'));

        bar.className = '';
        switch ($(event.target).parent().children(':last').attr('alt')) {
          case '1/10':
            bar.classList.add('I');
            counter.setAttribute('data-val', '1');
            break;
          case '2/10':
            bar.classList.add('II');
            counter.setAttribute('data-val', '2');
            break;
          case '3/10':
            bar.classList.add('III');
            counter.setAttribute('data-val', '3');
            break;
          case '4/10':
            bar.classList.add('IV');
            counter.setAttribute('data-val', '4');
            break;
          case '5/10':
            bar.classList.add('V');
            counter.setAttribute('data-val', '5');
            break;
          case '6/10':
            bar.classList.add('VI');
            counter.setAttribute('data-val', '6');
            break;
          case '7/10':
            bar.classList.add('VII');
            counter.setAttribute('data-val', '7');
            break;
          case '8/10':
            bar.classList.add('VIII');
            counter.setAttribute('data-val', '8');
            break;
          case '9/10':
            bar.classList.add('IX');
            counter.setAttribute('data-val', '9');
            break;
          case '10/10':
            bar.classList.add('X');
            counter.setAttribute('data-val', '10');
            break;
        }

        let nextScore: Number = Number(document.querySelector('#proficiency-skills h3').getAttribute('data-val'));
        if (observeScores(prevScore, nextScore) === true && prevScore !== nextScore) {
          activateCounter(counter, prevScore, nextScore);
        }

        ready = true;
      }
    });
  }
}
