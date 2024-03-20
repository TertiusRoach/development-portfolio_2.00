import { Info } from 'utilities/Info';

export namespace DefaultMain {
  export function events() {
    //--|🠋| Sections |🠋|--//
    const mainHome = () => {
      MainHome.navigation();
    };
    mainHome();

    const mainSkills = (titleName: 'producer' | 'developer') => {
      //--🠋 Execution Order 🠋--//
      MainSkills.navigation(titleName); //--🠈 01. Navigation 🠈--//
      MainSkills.carousel(titleName); //--🠈 02. Carousel 🠈--//
      MainSkills.rating(titleName); //--🠈 03. Rating 🠈--//
      // MainSkills.build(titleName); //--🠈 04. Build 🠈--//
      MainSkills.build();
    };
    mainSkills('producer');
    mainSkills('developer');

    //--🠊 console.log('|🠊 default-main.js Detected! 🠈|'); 🠈--//
  }

  namespace MainHome {
    export function navigation() {
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
  }
  namespace MainSkills {
    //--🠋 01. Navigation 🠋--//
    export function navigation(titleName: 'producer' | 'developer') {
      const navigation = `#${titleName}-carousel .navigation-${titleName} li`;

      const safetyToggle = (action: 'block' | 'clear', event: HTMLElement | any, milliseconds: number) => {
        let enable: string = event.target.firstChild.innerText;
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
      const navigationToggle = (event: HTMLHeadElement | any, milliseconds: number) => {
        let visible: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] .visible`);
        let hidden: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] .hidden`);

        let sectionName: string = $(event.target).find('>:first-child').text();
        hidden.innerHTML = `<h1>${sectionName}</h1>
                            <h6>${sectionName}</h6>`;

        setTimeout(() => {
          visible.className = '';
          visible.className = 'hidden';
          setTimeout(() => {
            visible.innerHTML = `<h1>${sectionName}</h1>
                                 <h6>${sectionName}</h6>`;
          }, milliseconds);

          hidden.className = '';
          hidden.className = 'visible';
        }, milliseconds);
      };

      $(navigation).on('click', function (event) {
        switch (true) {
          case event.target.classList.contains('cleared'):
            navigationToggle(event, 375);
            safetyToggle('block', event, 0);
            safetyToggle('clear', event, 375);
            break;
        }
      });
    }
    //--🠋 02. Carousel 🠋--//
    export function carousel(titleName: 'producer' | 'developer') {
      //--|🠋| There's a bug here (The aren't working) |🠋|--//
      const shiftLeft = (title: string) => {
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
      const shiftRight = (title: string) => {
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
      const modifyDots = (title: string) => {
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
      const horizontalSlides = (title: string) => {
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
    }
    //--🠋 03. Rating 🠋--//
    export function rating(titleName: 'producer' | 'developer') {
      let icon: HTMLLIElement | HTMLImageElement | any = `#${titleName}-carousel #${titleName}-skills ul li`;

      $(icon).on('mouseover', function (event) {
        console.log(event.target.getAttribute('alt'));
      });
      /*
      let firstIcon = `#${titleName}-carousel #${titleName}-skills ul li > :first-child`;
      let lastIcon = `#${titleName}-carousel #${titleName}-skills ul li > :last-child`;
      const triggerRating = (barHeader: HTMLHeadingElement, barCounter: HTMLSpanElement, prevScore: number | any, nextScore: number | any) => {
        let count: any;
        let delay: number;
        let milliseconds: number = 125;
        // let barHeader: HTMLHeadingElement = document.querySelector('#proficiency-skills h3');
        // let barCounter: HTMLSpanElement = document.querySelector('#proficiency-skills span');
        switch (prevScore < nextScore) {
          case true:
            //--🠋 `Count up from ${prevScore} to ${nextScore}` 🠋--//
            count = prevScore;
            delay = milliseconds * (nextScore - prevScore);
            const countUp = setInterval(() => {
              count++;
              barHeader.textContent = `${count}/10`;
              if (count === nextScore) {
                clearInterval(countUp);
                // navigationToggle(event, 375);
                // safetyToggle('clear', event, 0);
              }
            }, milliseconds);
            break;
          case false:
            //--🠋 `Count down from ${prevScore} to ${nextScore}` 🠋--//
            count = prevScore;
            delay = milliseconds * (prevScore - nextScore);
            const countDown = setInterval(() => {
              count--;
              barHeader.textContent = `${count}/10`;
              if (count === nextScore) {
                clearInterval(countDown);
                // navigationToggle(event, 375);
                // safetyToggle('clear', event, 0);
              }
            }, milliseconds);
            break;
        }
      };
      $(firstIcon).on('mouseover', function (event) {
        var prevScore: number = parseInt($('#proficiency-skills h3').attr('data-val'));
        var nextScore: number = Info.Icon.skills(event.target.getAttribute('alt')).rating;
        var barHeader: HTMLHeadingElement = document.querySelector('#proficiency-skills h3');
        var barCounter: HTMLSpanElement = document.querySelector('#proficiency-skills span');
        triggerRating(barHeader, barCounter, prevScore, nextScore);
        // console.log();
        // var barHeader: string = document.querySelector('#proficiency-skills h3').getAttribute('data-val');
        // console.log(barHeader);
        // console.log(Info.Icon.skills(software).application);
        // console.log();
        // console.log(Info.Icon.skills(software).className);
        // console.log(Info.Icon.skills(software).firstIcon);
        // console.log(Info.Icon.skills(software).lastIcon);
        // console.log(Info.Icon.skills(software).overlay);
      });
      if (firstIcon) {
        // If the first child exists, get its attribute
        let attributeValue = firstIcon.getAttribute('yourAttributeName');
        console.log(attributeValue);
      }
      const navigationToggle = (event: HTMLHeadElement | any, milliseconds: number) => {
        let visible: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] .visible`);
        let hidden: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] .hidden`);
        setTimeout(() => {
          hidden.innerHTML = `<h1>${$(event.target.parentElement).find('>:first-child').attr('alt')}</h1>
                              <h6>${$(event.target.parentElement).find('>:first-child').attr('alt')}</h6>`;
          visible.className = '';
          visible.className = 'hidden';
          setTimeout(() => {
            visible.innerHTML = `<h1>${$(event.target.parentElement).find('>:first-child').attr('alt')}</h1>
                                 <h6>${$(event.target.parentElement).find('>:first-child').attr('alt')}</h6>`;
          }, milliseconds);
          hidden.className = '';
          hidden.className = 'visible';
        }, milliseconds);
      };
      const activateCounter = (counter: HTMLHeadingElement | any, prevScore: Number | any, nextScore: Number | any, titleName: 'producer' | 'developer', event: HTMLElement) => {
        let count: any;
        let delay: number;
        let milliseconds: number = 125;
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
                navigationToggle(event, 375);
                safetyToggle('clear', event, 0);
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
                navigationToggle(event, 375);
                safetyToggle('clear', event, 0);
              }
            }, milliseconds);
            break;
        }
      };
      const observeScores = (prevScore: Number, nextScore: Number) => {
        if (`${prevScore}` !== 'NaN' && `${prevScore}` !== 'undefined' && `${nextScore}` !== 'NaN' && `${nextScore}` !== 'undefined') {
          return true;
        } else {
          return false;
        }
      };
      const safetyToggle = (action: 'block' | 'clear', event: HTMLElement | any, milliseconds: number) => {
        let enable: string = event.target.getAttribute('alt');
        switch (action) {
          case 'block':
            setTimeout(() => {
              for (let i = 0; i < event.target.parentNode.parentNode.children.length; i++) {
                let element = event.target.parentNode.parentNode.childNodes[i].firstChild.getAttribute('alt');
                if (element !== enable) {
                  event.target.parentNode.parentNode.children[i].classList.remove('cleared');
                  event.target.parentNode.parentNode.children[i].classList.add('blocked');
                } else if (element === enable) {
                  event.target.parentNode.parentNode.children[i].classList.remove('blocked');
                  event.target.parentNode.parentNode.children[i].classList.add('cleared');
                }
              }
            }, milliseconds);
            break;
          case 'clear':
            setTimeout(() => {
              for (let i = 0; i < event.target.parentNode.parentNode.children.length; i++) {
                event.target.parentNode.parentNode.children[i].classList.remove('blocked');
                event.target.parentNode.parentNode.children[i].classList.add('cleared');
              }
            }, milliseconds);
            break;
        }
      };
      const activateBar = (event: HTMLElement | any) => {
        switch (true) {
          case event.target.parentElement.classList.contains('cleared'):
            safetyToggle('block', event, 0);
            let bar: HTMLSpanElement = document.querySelector('#proficiency-skills span');
            let counter: HTMLHeadingElement = document.querySelector('#proficiency-skills h3');
            let prevScore: Number = Number(document.querySelector('#proficiency-skills h3').getAttribute('data-val'));
            bar.className = '';
            switch ($(event.target).parent().children(':last').attr('alt')) {
              case '0/10':
                bar.classList.add('O');
                counter.setAttribute('data-val', '0');
                break;
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
              activateCounter(counter, prevScore, nextScore, titleName, event);
            }
            break;
        }
      };
      let firstIcon = `#${titleName}-carousel #${titleName}-skills ul li > :first-child`;
      let lastIcon = `#${titleName}-carousel #${titleName}-skills ul li > :last-child`;
      $(firstIcon).on('mouseover mouseleave', function (event) {
        activateBar(event);
      });
      $(lastIcon)
        .on('click', function (event) {
          console.log('Yay, overlay!');
        })
        .on('mouseover', function (event) {
          activateBar(event);
        })
        .on('mouseleave', function (event) {
          safetyToggle('clear', event, 0);
        });
        */
    }
    //--🠋 04. Build 🠋--//
    export function build(titleName?: 'producer' | 'developer') {
      const createNavigation = (sections: Array<string>, index: number, navigation: HTMLElement) => {
        let listItem: HTMLLIElement = document.createElement('li');
        let spanItem: HTMLSpanElement = document.createElement('span');

        listItem.className = 'cleared';
        navigation.appendChild(listItem);

        switch (index) {
          case 0:
            listItem.id = 'active'; //--🠈 Set the id to 'active' for the first section 🠈--//
            break;
        }

        listItem.appendChild(spanItem);
        spanItem.textContent = sections[index];
      };
      const createCarousel = (containers: Array<string>, index: number, carousel: HTMLElement) => {
        let crate: HTMLUListElement = document.createElement('ul');
        carousel.appendChild(crate);
        crate.className = containers[index];
        //--🠋 Add the appropriate classes for navigation to work 🠋--//
        if (index === 0) {
          crate.classList.add('visible');
        } else {
          crate.classList.add('hidden');
        }

        let section: Array<object> | any = Info.Resume.carousel(sections[index].toLowerCase());

        for (let i = 0; i < section.length; i++) {
          var icons: HTMLLIElement = document.createElement('li');
          var firstIcon: HTMLImageElement = document.createElement('img');
          var lastIcon: HTMLImageElement = document.createElement('img');

          crate.appendChild(icons);
          icons.appendChild(firstIcon);
          icons.appendChild(lastIcon);

          //--🠋 Assign class to icons 🠋--//
          firstIcon.className = section[i].className;
          if (section[i].overlay) {
            lastIcon.className = 'overlay';
            lastIcon.parentElement.style.cursor = 'pointer';
          }

          //--🠋 Assign src to firstIcon 🠋--//
          firstIcon.src = section[i].firstIcon;
          lastIcon.src = section[i].lastIcon;

          //--🠋 Assign alt to icons 🠋--//
          firstIcon.alt = section[i].application;
          lastIcon.alt = `${section[i].rating}/10`;
        }
      };

      let sections: Array<string>;
      let carousel: HTMLElement = document.querySelector(`#${titleName}-carousel #${titleName}-skills`);
      let navigation: HTMLElement = document.querySelector(`#${titleName}-carousel .navigation-${titleName}`);
      let containers: Array<string> = ['first-container', 'second-container', 'third-container', 'fourth-container', 'fifth-container'];

      switch (titleName) {
        case 'producer':
          sections = ['Design', 'Editing', 'Admin'];
          break;
        case 'developer':
          sections = ['Languages', 'Utilities', 'Databases'];
          break;
        default:
          sections = ['Container #1', 'Container #2', 'Container #3'];
          break;
      }
      switch (carousel !== null && navigation !== null) {
        case true:
          carousel.innerHTML = '';
          navigation.innerHTML = '';
          for (let i = 0; i < sections.length; i++) {
            createNavigation(sections, i, navigation);
            createCarousel(containers, i, carousel);
          }
          break;
        case false:
          //--|🠋| This is for Testing |🠋|--//
          let producerIcons: NodeListOf<HTMLLIElement> = document.querySelectorAll('#producer-carousel #producer-skills ul[class*="container"] li');
          let developerIcons: NodeListOf<HTMLLIElement> = document.querySelectorAll('#developer-carousel #developer-skills ul[class*="container"] li');
          for (let i = 0; i < Info.Resume.carousel().length; i++) {
            var info = Info.Resume.carousel()[i];

            var firstProducer: any = producerIcons[i].firstElementChild;
            var lastProducer: any = producerIcons[i].lastElementChild;

            var firstDeveloper: any = developerIcons[i].firstElementChild;
            var lastDeveloper: any = developerIcons[i].lastElementChild;

            //--🠋 Assign class to icons 🠋--//
            firstProducer.className = info.className;
            firstDeveloper.className = info.className;
            if (info.overlay) {
              lastProducer.className = 'overlay';
              lastProducer.parentElement.style.cursor = 'pointer';

              lastDeveloper.className = 'overlay';
              lastDeveloper.parentElement.style.cursor = 'pointer';
            }

            //--🠋 Assign src to firstIcon 🠋--//
            firstProducer.src = info.firstIcon;
            lastProducer.src = info.lastIcon;

            firstDeveloper.src = info.firstIcon;
            lastDeveloper.src = info.lastIcon;

            //--🠋 Assign alt to icons 🠋--//
            firstProducer.alt = info.application;
            lastProducer.alt = `${info.rating}/10`;

            firstDeveloper.alt = info.application;
            lastDeveloper.alt = `${info.rating}/10`;
          }
          //--|🠉| This is for Testing |🠉|--//
          break;
      }
    }
  }
}
