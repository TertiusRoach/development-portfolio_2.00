import { Info } from 'utilities/Info';

export namespace DefaultMain {
  export function events() {
    //--|🠋| Sections |🠋|--//
    const mainHome = () => {
      MainHome.navigation();
    };
    mainHome();

    const mainSkills = () => {
      let titleNames: Array<string> = ['producer', 'developer'];
      //--🠊 MainSkills.build('testing'); 🠈--//
      for (let i = 0; i < titleNames.length; i++) {
        //--🠋 Execution Order 🠋--//
        MainSkills.build(titleNames[i]); //--🠈 01. Build 🠈--//
        MainSkills.navigation(titleNames[i]); //--🠈 02. Navigation 🠈--//
        MainSkills.update(titleNames[i]); //--🠈 03. Update 🠈--//
      }
    };
    mainSkills();

    //--🠊 console.log('|🠊 default-main.js Detected! 🠈|'); 🠈--//
  }
  //--|🠋| 01. Home |🠋|--//
  namespace MainHome {
    export function navigation() {
      $('.default-main section')
        .on('mouseover', function (event) {
          //--🠋 Only execute if the hovered element's id contains "main". 🠋--//
          if (event.currentTarget.id.includes('main')) {
            let eventTarget: string = event.currentTarget.id.split('-')[1];

            document.querySelector('.default-header nav .active').className = ''; //--🠈 prevHeader 🠈--//
            document.querySelector(`.default-header #header-${eventTarget}`).className = 'active'; //--🠈 nextHeader 🠈--//

            document.querySelector('.default-rightbar section nav .active').className = ''; //--🠈 prevRightbar 🠈--//
            document.querySelector(`.default-rightbar #rightbar-${eventTarget}`).className = 'active'; //--🠈 nextRightbar 🠈--//
          }
        })
        .on('click', function (event) {
          //--🠋 Only execute if the clicked element's id contains "main". 🠋--//
          if (event.currentTarget.id.includes('main')) {
            window.location.href = `#main-${event.currentTarget.id.split('-')[1]}`;
          }
        });
    }
  }
  //--|🠋| 02. Skills |🠋|--//
  namespace MainSkills {
    //--🠋 01. Build 🠋--//
    export function build(titleName: 'producer' | 'developer' | string) {
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
    //--🠋 02. Navigation 🠋--//
    export function navigation(titleName: 'producer' | 'developer' | string) {
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
    //--🠋 03. Update 🠋--//
    export function update(titleName: 'producer' | 'developer' | string) {
      const header: string = `#${titleName}-carousel .navigation-${titleName} li`;
      const carousel: string = `#${titleName}-carousel #${titleName}-skills ul li`;
      const barRating: HTMLHeadingElement = document.querySelector('#proficiency-skills h3');
      const barLoader: HTMLSpanElement = document.querySelector('#proficiency-skills span');
      const navigation: HTMLSpanElement = document.querySelector(`header[class*='${titleName}-title'] span`);
      const producerArrows: string = '#producer-carousel button[class*="producer"]';
      const developerArrows: string = '#developer-carousel button[class*="developer"]';

      const romanNumerals = (arabic: number) => {
        switch (arabic) {
          case 0:
            return 'O';
          case 1:
            return 'I';
          case 2:
            return 'II';
          case 3:
            return 'III';
          case 4:
            return 'IV';
          case 5:
            return 'V';
          case 6:
            return 'VI';
          case 7:
            return 'VII';
          case 8:
            return 'VIII';
          case 9:
            return 'IX';
          case 10:
            return 'X';
        }
      };

      $(carousel)
        .on('mouseover', function (event) {
          let icon: any | HTMLImageElement = event.target.parentElement.firstChild;
          let select: any | object;
          let initialize: number = parseInt(icon.src.split('/').pop());

          //--🠋 Switch between testing or default 🠋--//
          if (isNaN(initialize)) {
            select = Info.Icon.skills(icon.alt); //--🠈 Default 🠈--//
          } else {
            select = Info.Icon.tests(icon.alt); //--🠈 Testing 🠈--//
          }

          barRating.innerText = `${select.rating}/10`;
          barRating.setAttribute('data-val', `${select.rating}`);

          barLoader.className = '';
          barLoader.className = romanNumerals(select.rating);

          navigation.innerHTML = `<h1>${select.application}</h1>
                                  <h6>${select.application}</h6>`;
        })
        .on('mouseleave', function () {
          let section = document.querySelector(`#${titleName}-carousel .navigation-${titleName} #active span`);
          navigation.innerHTML = `<h1>${section.textContent}</h1>
                                  <h6>${section.textContent}</h6>`;
        });

      $(header)
        .on('mouseover', function (event) {
          let section: string = event.target.querySelector('span').textContent;
          navigation.innerHTML = `<h1>${section}</h1>
                                  <h6>${section}</h6>`;
        })
        .on('mouseleave', function () {
          let section = document.querySelector(`#${titleName}-carousel .navigation-${titleName} #active span`);
          navigation.innerHTML = `<h1>${section.textContent}</h1>
                                  <h6>${section.textContent}</h6>`;
        });

      $(producerArrows).on('click', function () {
        let selector: HTMLSpanElement = document.querySelector('.producer-title span');
        let sections: HTMLSpanElement = document.querySelector('#producer-carousel .navigation-producer #active span');

        selector.innerHTML = `<h1>${sections.textContent}</h1>
                              <h6>${sections.textContent}</h6>`;
      });
      $(developerArrows).on('click', function () {
        let selector: HTMLSpanElement = document.querySelector('.developer-title span');
        let sections: HTMLSpanElement = document.querySelector('#developer-carousel .navigation-developer #active span');

        selector.innerHTML = `<h1>${sections.textContent}</h1>
                              <h6>${sections.textContent}</h6>`;
      });
    }

    export function bin(titleName: 'producer' | 'developer') {
      /*
      const arrows: string = `#${titleName}-carousel button[class*='${titleName}']`;
      $(arrows).on('click', function (event) {
        titleName = event.target.parentElement.className.split('-')[1];
        console.log(titleName);
        
        let selector = document.querySelector(`header[class*='${titleName}-title'] span`);
        let section: HTMLSpanElement | any = document.querySelector(`#${titleName}-carousel .navigation-${titleName} #active span`);

        selector.innerHTML = `<h1>${section.textContent}</h1>
                              <h6>${section.textContent}</h6>`;
                              
      });
      */
      /*
      $(`#${titleName}-carousel #${titleName}-skills ul`).on('mouseleave', function () {
        let section = document.querySelector(`#${titleName}-carousel .navigation-${titleName} #active span`);
        navigation.innerHTML = `<h1>${section.textContent}</h1>
                                <h6>${section.textContent}</h6>`;
      });
      */
      /*
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
      */
      /*
      $(navigation).on('click', function (event) {
        switch (true) {
          case event.target.classList.contains('cleared'):
            navigationToggle(event, 375);
            safetyToggle('block', event, 0);
            safetyToggle('clear', event, 375);
            break;
        }
      });
      */
      /*
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
      */
    }
  }

  //--|🠋| 03. Employment |🠋|--//

  //--|🠋| 04. Contact |🠋|--//
}
