import { Info } from 'utilities/Info';

export namespace DefaultMain {
  export function events() {
    //--|🠋| Sections |🠋|--//
    const mainHome = () => {
      MainHome.navigation();
    };
    mainHome();
    const mainSkills = (titleName: 'producer' | 'developer') => {
      MainSkills.navigation(titleName);
      MainSkills.carousel(titleName);
      MainSkills.rating(titleName);
      MainSkills.build(titleName);
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
    export function carousel(titleName: 'producer' | 'developer') {
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
    export function rating(titleName: 'producer' | 'developer') {
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
    }
    export function build(titleName: 'producer' | 'developer') {
      switch (titleName) {
        case 'producer':
          //--🠋 Reset Images to Default Value 🠋--//
          let skillIcons: Array<HTMLLIElement> = [];
          let alternative: Array<string> = ['...', '0/10'];
          let containers: Array<string> = ['first-container', 'second-container', 'third-container', 'fourth-container', 'fifth-container'];

          for (let i = 0; i < containers.length; i++) {
            for (let j = 1; j <= 9; j++) {
              var skill: HTMLLIElement = document.querySelector(`#${titleName}-carousel #${titleName}-skills .${containers[i]} li:nth-child(${j})`);

              var topImage: HTMLImageElement = skill.querySelector(':first-child');
              var botImage: HTMLImageElement = skill.querySelector(':last-child');
              [topImage, botImage].forEach((icon, index) => {
                //--🠋 Clears Classes within the <li> tags 🠋--//
                while (icon.classList.length > 0) {
                  icon.classList.remove(icon.classList.item(0));
                }
                //--🠋 Assign Source Location 🠋--//
                icon.src = 'dist/front-end/pages/resume/content/svg-files/transparent-placeholder.svg';
                //--🠋 Assign Alternative Text 🠋--//
                icon.alt = alternative[index];
              });

              skillIcons.push(skill);
            }
          }
          //--🠋 Import Array from utilities/Info.ts 🠋--//
          for (let i = 0; i < Info.Resume.skills().length; i++) {
            var firstIcon: HTMLImageElement = skillIcons[i].querySelector(':first-child');
            var lastIcon: HTMLImageElement = skillIcons[i].querySelector(':last-child');

            //--🠋 Assign class to firstIcon 🠋--//
            firstIcon.className = Info.Resume.skills()[i].className;
            //--🠋 Assign src to firstIcon 🠋--//
            firstIcon.src = Info.Resume.skills()[i].firstIcon;
            //--🠋 Assign alt to firstIcon 🠋--//
            firstIcon.alt = Info.Resume.skills()[i].application;
            //--🠋 Assign class to lastIcon 🠋--//
            if (Info.Resume.skills()[i].overlay) {
              lastIcon.className = 'overlay';
              lastIcon.parentElement.style.cursor = 'pointer';
            }
            //--🠋 Assign src to lastIcon 🠋--//
            lastIcon.src = Info.Resume.skills()[i].lastIcon;
            //--🠋 Assign alt to lastIcon 🠋--//
            lastIcon.alt = `${Info.Resume.skills()[i].rating}/10`;
          }
          /*
          //--🠋 Import Array from utilities/Info.ts 🠋--//
          for (let i = 0; i < Info.Resume.skills('languages').length; i++) {
            var firstIcon: HTMLImageElement = skillIcons[i].querySelector(':first-child');
            var lastIcon: HTMLImageElement = skillIcons[i].querySelector(':last-child');

            //--🠋 Assign class to firstIcon 🠋--//
            firstIcon.className = Info.Resume.skills('languages')[i].className;
            //--🠋 Assign src to firstIcon 🠋--//
            firstIcon.src = Info.Resume.skills('languages')[i].firstIcon;
            //--🠋 Assign alt to firstIcon 🠋--//
            firstIcon.alt = Info.Resume.skills('languages')[i].application;
            //--🠋 Assign class to lastIcon 🠋--//
            if (Info.Resume.skills('languages')[i].overlay) {
              lastIcon.className = 'overlay';
              lastIcon.parentElement.style.cursor = 'pointer';
            }
            //--🠋 Assign src to lastIcon 🠋--//
            lastIcon.src = Info.Resume.skills('languages')[i].lastIcon;
            //--🠋 Assign alt to lastIcon 🠋--//
            lastIcon.alt = `${Info.Resume.skills('languages')[i].rating}/10`;
          }
          */
          /*
          //--🠋 Import Array from utilities/Info.ts 🠋--//
          for (let i = 0; i < Info.Resume.skills('everything').length; i++) {
            var firstIcon: HTMLImageElement = skillIcons[i].querySelector(':first-child');
            var lastIcon: HTMLImageElement = skillIcons[i].querySelector(':last-child');

            //--🠋 Assign class to firstIcon 🠋--//
            firstIcon.className = Info.Resume.skills('everything')[i].className;
            //--🠋 Assign src to firstIcon 🠋--//
            firstIcon.src = Info.Resume.skills('everything')[i].firstIcon;
            //--🠋 Assign alt to firstIcon 🠋--//
            firstIcon.alt = Info.Resume.skills('everything')[i].application;
            //--🠋 Assign class to lastIcon 🠋--//
            if (Info.Resume.skills('everything')[i].overlay) {
              lastIcon.className = 'overlay';
              lastIcon.parentElement.style.cursor = 'pointer';
            }
            //--🠋 Assign src to lastIcon 🠋--//
            lastIcon.src = Info.Resume.skills('everything')[i].lastIcon;
            //--🠋 Assign alt to lastIcon 🠋--//
            lastIcon.alt = `${Info.Resume.skills('everything')[i].rating}/10`;
          }
          */
          break;
        case 'developer':
          break;
      }
    }
  }
}
