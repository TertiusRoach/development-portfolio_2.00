export namespace Info {
  class Skills {
    application: string;
    className: string;
    firstIcon: string;
    lastIcon: string;
    overlay: boolean;
    rating: number;

    constructor(application: string, className: string, firstIcon: string, lastIcon: string, overlay: boolean, rating: number) {
      this.application = application;
      this.className = className;
      this.firstIcon = firstIcon;
      this.lastIcon = lastIcon;
      this.overlay = overlay;
      this.rating = rating;
    }
  }

  export class Main {
    private static firstIcon: string;
    private static lastIcon: string;

    static skills(section: 'design' | 'editing' | 'admin' | 'languages' | 'utilities' | 'databases' | 'all'): Skills[] {
      switch (section) {
        case 'all':
          this.firstIcon = 'dist/front-end/pages/resume/content/png-files/logo-skills/green-logos';
          this.lastIcon = 'dist/front-end/pages/resume/content/png-files/logo-skills/original-logos';
          return [
            new Skills('Adobe After Effects', 'adobe-after-effects', `${this.firstIcon}/Adobe After Effects.png`, `${this.lastIcon}/Adobe After Effects.png`, false, 0),
            new Skills('Adobe Audition', 'adobe-audition', `${this.firstIcon}/Adobe Audition.png`, `${this.lastIcon}/Adobe Audition.png`, false, 0),
            new Skills('Adobe Illustrator', 'adobe-illustrator', `${this.firstIcon}/Adobe Illustrator.png`, `${this.lastIcon}/Adobe Illustrator.png`, false, 0),
            new Skills('Adobe InDesign', 'adobe-indesign', `${this.firstIcon}/Adobe InDesign.png`, `${this.lastIcon}/Adobe InDesign.png`, false, 0),
            new Skills('Adobe Photoshop', 'adobe-photoshop', `${this.firstIcon}/Adobe Photoshop.png`, `${this.lastIcon}/Adobe Photoshop.png`, false, 0),
            new Skills('Adobe Premiere Pro', 'adobe-premiere-pro', `${this.firstIcon}/Adobe Premiere Pro.png`, `${this.lastIcon}/Adobe Premiere Pro.png`, false, 0),
            new Skills('Adobe Xd', 'adobe-xd', `${this.firstIcon}/Adobe Xd.png`, `${this.lastIcon}/Adobe Xd.png`, false, 0),
            new Skills('CSS', 'css', `${this.firstIcon}/CSS.png`, `${this.lastIcon}/CSS.png`, false, 0),
            new Skills('DaVinci Resolve', 'davinci-resolve', `${this.firstIcon}/DaVinci Resolve.png`, `${this.lastIcon}/DaVinci Resolve.png`, false, 0),
            new Skills('Figma', 'figma', `${this.firstIcon}/Figma.png`, `${this.lastIcon}/Figma.png`, false, 0),
            new Skills('Final Cut Pro', 'final-cut-pro', `${this.firstIcon}/Final Cut Pro.png`, `${this.lastIcon}/Final Cut Pro.png`, false, 0),
            new Skills('GNU Image Manipulation Program', 'gimp', `${this.firstIcon}/GIMP.png`, `${this.lastIcon}/GIMP.png`, false, 0),
            new Skills('GitHub', 'github', `${this.firstIcon}/GitHub.png`, `${this.lastIcon}/GitHub.png`, false, 0),
            new Skills('Google Apps Script', 'google-apps-script', `${this.firstIcon}/Google Apps Script.png`, `${this.lastIcon}/Google Apps Script.png`, false, 0),
            new Skills('Google Drive', 'google-drive', `${this.firstIcon}/Google Drive.png`, `${this.lastIcon}/Google Drive.png`, false, 0),
            new Skills('Google Sheets', 'google-sheets', `${this.firstIcon}/Google Sheets.png`, `${this.lastIcon}/Google Sheets.png`, false, 0),
            new Skills('Gulp', 'gulp', `${this.firstIcon}/Gulp.png`, `${this.lastIcon}/Gulp.png`, false, 0),
            new Skills('HTML', 'html', `${this.firstIcon}/HTML.svg`, `${this.lastIcon}/HTML.png`, false, 0),
            new Skills('Inkscape', 'inkscape', `${this.firstIcon}/Inkscape.png`, `${this.lastIcon}/Inkscape.png`, false, 0),
            new Skills('JavaScript', 'javascript', `${this.firstIcon}/JavaScript.png`, `${this.lastIcon}/JavaScript.png`, false, 0),
            new Skills('jQuery', 'jquery', `${this.firstIcon}/jQuery.png`, `${this.lastIcon}/jQuery.png`, false, 0),
            new Skills('Microsoft Excel', 'microsoft-excel', `${this.firstIcon}/Microsoft Excel.png`, `${this.lastIcon}/Microsoft Excel.png`, false, 0),
            new Skills('Microsoft OneDrive', 'microsoft-onedrive', `${this.firstIcon}/Microsoft OneDrive.png`, `${this.lastIcon}/Microsoft OneDrive.png`, false, 0),
            new Skills('Microsoft Word', 'microsoft-word', `${this.firstIcon}/Microsoft Word.png`, `${this.lastIcon}/Microsoft Word.png`, false, 0),
            new Skills('MySQL', 'mysql', `${this.firstIcon}/MySQL.png`, `${this.lastIcon}/MySQL.png`, false, 0),
            new Skills('Natron', 'natron', `${this.firstIcon}/Natron.png`, `${this.lastIcon}/Natron.png`, false, 0),
            new Skills('Node.js', 'node-js', `${this.firstIcon}/NodeJS.png`, `${this.lastIcon}/NodeJS.png`, false, 0),
            new Skills('Python', 'python', `${this.firstIcon}/Python.png`, `${this.lastIcon}/Python.png`, false, 0),
            new Skills('Sass', 'sass', `${this.firstIcon}/Sass.png`, `${this.lastIcon}/Sass.png`, false, 0),
            new Skills('Scribus', 'scribus', `${this.firstIcon}/Scribus.png`, `${this.lastIcon}/Scribus.png`, false, 0),
            new Skills('SharePoint', 'sharepoint', `${this.firstIcon}/SharePoint.png`, `${this.lastIcon}/SharePoint.png`, false, 0),
            new Skills('Steinberg Cubase', 'steinberg-cubase', `${this.firstIcon}/Steinberg Cubase.png`, `${this.lastIcon}/Steinberg Cubase.png`, false, 0),
            new Skills('TypeScript', 'typescript', `${this.firstIcon}/TypeScript.png`, `${this.lastIcon}/TypeScript.png`, false, 0),
            new Skills('Visual Basics for Applications', 'visual-basics-for-applications', `${this.firstIcon}/Visual Basics for Applications.png`, `${this.lastIcon}/Visual Basics for Applications.png`, false, 0),
            new Skills('Visual Studio Code', 'visual-studio-code', `${this.firstIcon}/Visual Studio Code.png`, `${this.lastIcon}/Visual Studio Code.png`, false, 0),
          ];

        case 'design':
          return [new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1)];
        case 'editing':
          return [new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1)];
        case 'admin':
          return [new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1)];
        case 'languages':
          return [new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1)];
        case 'utilities':
          return [new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1)];
        case 'databases':
          return [new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1)];
        default:
          this.firstIcon = 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/black-numbers';
          this.lastIcon = 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/white-numbers';
          return [
            new Skills('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1),
            new Skills('Two', 'two', `${this.firstIcon}/02.svg`, `${this.lastIcon}/02.svg`, false, 2),
            new Skills('Three', 'three', `${this.firstIcon}/03.svg`, `${this.lastIcon}/03.svg`, true, 3),
            new Skills('Four', 'four', `${this.firstIcon}/04.svg`, `${this.lastIcon}/04.svg`, false, 4),
            new Skills('Five', 'five', `${this.firstIcon}/05.svg`, `${this.lastIcon}/05.svg`, true, 5),
            new Skills('Six', 'six', `${this.firstIcon}/06.svg`, `${this.lastIcon}/06.svg`, false, 6),
            new Skills('Seven', 'seven', `${this.firstIcon}/07.svg`, `${this.lastIcon}/07.svg`, true, 7),
            new Skills('Eight', 'eight', `${this.firstIcon}/08.svg`, `${this.lastIcon}/08.svg`, false, 8),
            new Skills('Nine', 'nine', `${this.firstIcon}/09.svg`, `${this.lastIcon}/09.svg`, true, 9),
            new Skills('Ten', 'ten', `${this.firstIcon}/10.svg`, `${this.lastIcon}/10.svg`, false, 10),
            new Skills('Eleven', 'eleven', `${this.firstIcon}/11.svg`, `${this.lastIcon}/11.svg`, true, 11),
            new Skills('Twelve', 'twelve', `${this.firstIcon}/12.svg`, `${this.lastIcon}/12.svg`, false, 12),
            new Skills('Thirteen', 'thirteen', `${this.firstIcon}/13.svg`, `${this.lastIcon}/13.svg`, true, 13),
            new Skills('Fourteen', 'fourteen', `${this.firstIcon}/14.svg`, `${this.lastIcon}/14.svg`, false, 14),
            new Skills('Fifteen', 'fifteen', `${this.firstIcon}/15.svg`, `${this.lastIcon}/15.svg`, true, 15),
            new Skills('Sixteen', 'sixteen', `${this.firstIcon}/16.svg`, `${this.lastIcon}/16.svg`, false, 16),
            new Skills('Seventeen', 'seventeen', `${this.firstIcon}/17.svg`, `${this.lastIcon}/17.svg`, true, 17),
            new Skills('Eighteen', 'eighteen', `${this.firstIcon}/18.svg`, `${this.lastIcon}/18.svg`, false, 18),
            new Skills('Nineteen', 'nineteen', `${this.firstIcon}/19.svg`, `${this.lastIcon}/19.svg`, true, 19),
            new Skills('Twenty', 'twenty', `${this.firstIcon}/20.svg`, `${this.lastIcon}/20.svg`, false, 20),
            new Skills('Twenty-one', 'twenty-one', `${this.firstIcon}/21.svg`, `${this.lastIcon}/21.svg`, true, 21),
            new Skills('Twenty-two', 'twenty-two', `${this.firstIcon}/22.svg`, `${this.lastIcon}/22.svg`, false, 22),
            new Skills('Twenty-three', 'twenty-three', `${this.firstIcon}/23.svg`, `${this.lastIcon}/23.svg`, true, 23),
            new Skills('Twenty-four', 'twenty-four', `${this.firstIcon}/24.svg`, `${this.lastIcon}/24.svg`, false, 24),
            new Skills('Twenty-five', 'twenty-five', `${this.firstIcon}/25.svg`, `${this.lastIcon}/25.svg`, true, 25),
            new Skills('Twenty-six', 'twenty-six', `${this.firstIcon}/26.svg`, `${this.lastIcon}/26.svg`, false, 26),
            new Skills('Twenty-seven', 'twenty-seven', `${this.firstIcon}/27.svg`, `${this.lastIcon}/27.svg`, true, 27),
          ];
      }
    }
  }
  //--🠊 console.log('|🠊 Info.js Detected! 🠈|'); 🠈--//
}
