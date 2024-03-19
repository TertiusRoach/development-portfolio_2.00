export namespace Info {
  export class Icon {
    application: string;
    className: string;
    firstIcon: string;
    lastIcon: string;
    overlay: boolean;
    rating: number;

    private static firstIcon: string;
    private static lastIcon: string;

    constructor(application: string, className: string, firstIcon: string, lastIcon: string, overlay: boolean, rating: number) {
      this.application = application;
      this.className = className;
      this.firstIcon = firstIcon;
      this.lastIcon = lastIcon;
      this.overlay = overlay;
      this.rating = rating;
    }

    static skills(software: string) {
      this.firstIcon = 'dist/front-end/pages/resume/content/png-files/logo-skills/green-logos';
      this.lastIcon = 'dist/front-end/pages/resume/content/png-files/logo-skills/original-logos';

      switch (software) {
        case 'Adobe After Effects':
          return new Icon('Adobe After Effects', 'adobe-after-effects', `${this.firstIcon}/Adobe After Effects.png`, `${this.lastIcon}/Adobe After Effects.png`, false, 8);
        case 'Adobe Audition':
          return new Icon('Adobe Audition', 'adobe-audition', `${this.firstIcon}/Adobe Audition.png`, `${this.lastIcon}/Adobe Audition.png`, false, 7);
        case 'Adobe Illustrator':
          return new Icon('Adobe Illustrator', 'adobe-illustrator', `${this.firstIcon}/Adobe Illustrator.png`, `${this.lastIcon}/Adobe Illustrator.png`, false, 6);
        case 'Adobe InDesign':
          return new Icon('Adobe InDesign', 'adobe-indesign', `${this.firstIcon}/Adobe InDesign.png`, `${this.lastIcon}/Adobe InDesign.png`, false, 7);
        case 'Adobe Photoshop':
          return new Icon('Adobe Photoshop', 'adobe-photoshop', `${this.firstIcon}/Adobe Photoshop.png`, `${this.lastIcon}/Adobe Photoshop.png`, false, 9);
        case 'Adobe Premiere Pro':
          return new Icon('Adobe Premiere Pro', 'adobe-premiere-pro', `${this.firstIcon}/Adobe Premiere Pro.png`, `${this.lastIcon}/Adobe Premiere Pro.png`, false, 7);
        case 'Adobe Xd':
          return new Icon('Adobe Xd', 'adobe-xd', `${this.firstIcon}/Adobe Xd.png`, `${this.lastIcon}/Adobe Xd.png`, false, 5);
        case 'Angular':
          return new Icon('Angular', 'angular', `${this.firstIcon}/Angular.png`, `${this.lastIcon}/Angular.png`, false, 1);
        case 'C++':
          return new Icon('C++', 'cPlusPlus', `${this.firstIcon}/C++.png`, `${this.lastIcon}/C++.png`, false, 1);
        case 'CSS':
          return new Icon('CSS', 'css', `${this.firstIcon}/CSS.png`, `${this.lastIcon}/CSS.png`, true, 8);
        case 'DaVinci Resolve':
          return new Icon('DaVinci Resolve', 'davinci-resolve', `${this.firstIcon}/DaVinci Resolve.png`, `${this.lastIcon}/DaVinci Resolve.png`, true, 10);
        case 'Figma':
          return new Icon('Figma', 'figma', `${this.firstIcon}/Figma.png`, `${this.lastIcon}/Figma.png`, true, 7);
        case 'Final Cut Pro':
          return new Icon('Final Cut Pro', 'final-cut-pro', `${this.firstIcon}/Final Cut Pro.png`, `${this.lastIcon}/Final Cut Pro.png`, false, 6);
        case 'GIMP':
          return new Icon('GIMP', 'gimp', `${this.firstIcon}/GIMP.png`, `${this.lastIcon}/GIMP.png`, false, 7);
        case 'GitHub':
          return new Icon('GitHub', 'github', `${this.firstIcon}/GitHub.png`, `${this.lastIcon}/GitHub.png`, true, 6);
        case 'Google Apps Script':
          return new Icon('Google Apps Script', 'google-apps-script', `${this.firstIcon}/Google Apps Script.png`, `${this.lastIcon}/Google Apps Script.png`, false, 7);
        case 'Google Drive':
          return new Icon('Google Drive', 'google-drive', `${this.firstIcon}/Google Drive.png`, `${this.lastIcon}/Google Drive.png`, false, 10);
        case 'Google Sheets':
          return new Icon('Google Sheets', 'google-sheets', `${this.firstIcon}/Google Sheets.png`, `${this.lastIcon}/Google Sheets.png`, true, 8);
        case 'Gulp':
          return new Icon('Gulp', 'gulp', `${this.firstIcon}/Gulp.png`, `${this.lastIcon}/Gulp.png`, false, 8);
        case 'HTML':
          return new Icon('HTML', 'html', `${this.firstIcon}/HTML.png`, `${this.lastIcon}/HTML.png`, false, 10);
        case 'Inkscape':
          return new Icon('Inkscape', 'inkscape', `${this.firstIcon}/Inkscape.png`, `${this.lastIcon}/Inkscape.png`, false, 5);
        case 'JavaScript':
          return new Icon('JavaScript', 'javascript', `${this.firstIcon}/JavaScript.png`, `${this.lastIcon}/JavaScript.png`, true, 8);
        case 'jQuery':
          return new Icon('jQuery', 'jquery', `${this.firstIcon}/jQuery.png`, `${this.lastIcon}/jQuery.png`, false, 8);
        case 'Microsoft Excel':
          return new Icon('Microsoft Excel', 'microsoft-excel', `${this.firstIcon}/Microsoft Excel.png`, `${this.lastIcon}/Microsoft Excel.png`, false, 9);
        case 'Microsoft OneDrive':
          return new Icon('Microsoft OneDrive', 'microsoft-onedrive', `${this.firstIcon}/Microsoft OneDrive.png`, `${this.lastIcon}/Microsoft OneDrive.png`, false, 10);
        case 'SharePoint':
          return new Icon('SharePoint', 'sharepoint', `${this.firstIcon}/SharePoint.png`, `${this.lastIcon}/SharePoint.png`, false, 7);
        case 'Microsoft Word':
          return new Icon('Microsoft Word', 'microsoft-word', `${this.firstIcon}/Microsoft Word.png`, `${this.lastIcon}/Microsoft Word.png`, false, 10);
        case 'MongoDB':
          return new Icon('MongoDB', 'mongodb', `${this.firstIcon}/MongoDB.png`, `${this.lastIcon}/MongoDB.png`, false, 5);
        case 'MySQL':
          return new Icon('MySQL', 'mysql', `${this.firstIcon}/MySQL.png`, `${this.lastIcon}/MySQL.png`, false, 6);
        case 'Natron':
          return new Icon('Natron', 'natron', `${this.firstIcon}/Natron.png`, `${this.lastIcon}/Natron.png`, false, 1);
        case 'Node.js':
          return new Icon('Node.js', 'node-js', `${this.firstIcon}/NodeJS.png`, `${this.lastIcon}/NodeJS.png`, false, 5);
        case 'Python':
          return new Icon('Python', 'python', `${this.firstIcon}/Python.png`, `${this.lastIcon}/Python.png`, false, 3);
        case 'Sass':
          return new Icon('Sass', 'sass', `${this.firstIcon}/Sass.png`, `${this.lastIcon}/Sass.png`, false, 9);
        case 'Scribus':
          return new Icon('Scribus', 'scribus', `${this.firstIcon}/Scribus.png`, `${this.lastIcon}/Scribus.png`, false, 8);
        case 'Steinberg Cubase':
          return new Icon('Steinberg Cubase', 'steinberg-cubase', `${this.firstIcon}/Steinberg Cubase.png`, `${this.lastIcon}/Steinberg Cubase.png`, false, 6);
        case 'TypeScript':
          return new Icon('TypeScript', 'typescript', `${this.firstIcon}/TypeScript.png`, `${this.lastIcon}/TypeScript.png`, false, 7);
        case 'Visual Basic for Applications':
          return new Icon('Visual Basic for Applications', 'visual-basic-for-applications', `${this.firstIcon}/Visual Basic for Applications.png`, `${this.lastIcon}/Visual Basic for Applications.png`, true, 9);
        case 'Visual Studio Code':
          return new Icon('Visual Studio Code', 'visual-studio-code', `${this.firstIcon}/Visual Studio Code.png`, `${this.lastIcon}/Visual Studio Code.png`, false, 5);
        default:
          return { application: '', className: '', firstIcon: ``, lastIcon: ``, overlay: false, rating: 0 };
      }
    }
    static tests(number: string) {
      this.firstIcon = 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/black-numbers';
      this.lastIcon = 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/white-numbers';

      switch (number) {
        case 'One':
          return new Icon('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1);
        case 'Two':
          return new Icon('Two', 'two', `${this.firstIcon}/02.svg`, `${this.lastIcon}/02.svg`, false, 2);
        case 'Three':
          return new Icon('Three', 'three', `${this.firstIcon}/03.svg`, `${this.lastIcon}/03.svg`, true, 3);
        case 'Four':
          return new Icon('Four', 'four', `${this.firstIcon}/04.svg`, `${this.lastIcon}/04.svg`, false, 4);
        case 'Five':
          return new Icon('Five', 'five', `${this.firstIcon}/05.svg`, `${this.lastIcon}/05.svg`, true, 5);
        case 'Six':
          return new Icon('Six', 'six', `${this.firstIcon}/06.svg`, `${this.lastIcon}/06.svg`, false, 6);
        case 'Seven':
          return new Icon('Seven', 'seven', `${this.firstIcon}/07.svg`, `${this.lastIcon}/07.svg`, true, 7);
        case 'Eight':
          return new Icon('Eight', 'eight', `${this.firstIcon}/08.svg`, `${this.lastIcon}/08.svg`, false, 8);
        case 'Nine':
          return new Icon('Nine', 'nine', `${this.firstIcon}/09.svg`, `${this.lastIcon}/09.svg`, true, 9);
        case 'Ten':
          return new Icon('Ten', 'ten', `${this.firstIcon}/10.svg`, `${this.lastIcon}/10.svg`, false, 10);
        case 'Eleven':
          return new Icon('Eleven', 'eleven', `${this.firstIcon}/11.svg`, `${this.lastIcon}/11.svg`, true, 11);
        case 'Twelve':
          return new Icon('Twelve', 'twelve', `${this.firstIcon}/12.svg`, `${this.lastIcon}/12.svg`, false, 12);
        case 'Thirteen':
          return new Icon('Thirteen', 'thirteen', `${this.firstIcon}/13.svg`, `${this.lastIcon}/13.svg`, true, 13);
        case 'Fourteen':
          return new Icon('Fourteen', 'fourteen', `${this.firstIcon}/14.svg`, `${this.lastIcon}/14.svg`, false, 14);
        case 'Fifteen':
          return new Icon('Fifteen', 'fifteen', `${this.firstIcon}/15.svg`, `${this.lastIcon}/15.svg`, true, 15);
        case 'Sixteen':
          return new Icon('Sixteen', 'sixteen', `${this.firstIcon}/16.svg`, `${this.lastIcon}/16.svg`, false, 16);
        case 'Seventeen':
          return new Icon('Seventeen', 'seventeen', `${this.firstIcon}/17.svg`, `${this.lastIcon}/17.svg`, true, 17);
        case 'Eighteen':
          return new Icon('Eighteen', 'eighteen', `${this.firstIcon}/18.svg`, `${this.lastIcon}/18.svg`, false, 18);
        case 'Nineteen':
          return new Icon('Nineteen', 'nineteen', `${this.firstIcon}/19.svg`, `${this.lastIcon}/19.svg`, true, 19);
        case 'Twenty':
          return new Icon('Twenty', 'twenty', `${this.firstIcon}/20.svg`, `${this.lastIcon}/20.svg`, false, 20);
        case 'Twenty-one':
          return new Icon('Twenty-one', 'twenty-one', `${this.firstIcon}/21.svg`, `${this.lastIcon}/21.svg`, true, 21);
        case 'Twenty-two':
          return new Icon('Twenty-two', 'twenty-two', `${this.firstIcon}/22.svg`, `${this.lastIcon}/22.svg`, false, 22);
        case 'Twenty-three':
          return new Icon('Twenty-three', 'twenty-three', `${this.firstIcon}/23.svg`, `${this.lastIcon}/23.svg`, true, 23);
        case 'Twenty-four':
          return new Icon('Twenty-four', 'twenty-four', `${this.firstIcon}/24.svg`, `${this.lastIcon}/24.svg`, false, 24);
        case 'Twenty-five':
          return new Icon('Twenty-five', 'twenty-five', `${this.firstIcon}/25.svg`, `${this.lastIcon}/25.svg`, true, 25);
        case 'Twenty-six':
          return new Icon('Twenty-six', 'twenty-six', `${this.firstIcon}/26.svg`, `${this.lastIcon}/26.svg`, false, 26);
        case 'Twenty-seven':
          return new Icon('Twenty-seven', 'twenty-seven', `${this.firstIcon}/27.svg`, `${this.lastIcon}/27.svg`, true, 27);
      }
    }
  }

  export class Resume {
    private static firstIcon: string;
    private static lastIcon: string;

    static carousel(section?: 'design' | 'editing' | 'admin' | 'languages' | 'utilities' | 'databases' | 'everything' | string): Icon[] {
      switch (section) {
        case 'design':
          return [Icon.skills('Adobe Photoshop'), Icon.skills('Figma'), Icon.skills('Scribus'), Icon.skills('Inkscape'), Icon.skills('Adobe Illustrator')];
        case 'editing':
          return [Icon.skills('DaVinci Resolve'), Icon.skills('Adobe Premiere Pro'), Icon.skills('Final Cut Pro')];
        case 'admin':
          return [Icon.skills('Google Sheets'), Icon.skills('Microsoft Word')];
        case 'languages':
          return [Icon.skills('JavaScript'), Icon.skills('CSS'), Icon.skills('HTML'), Icon.skills('Visual Basic for Applications'), Icon.skills('Python'), Icon.skills('C++')];
        case 'utilities':
          return [Icon.skills('GitHub'), Icon.skills('Google Apps Script'), Icon.skills('Google Drive'), Icon.skills('Gulp'), Icon.skills('Microsoft OneDrive'), Icon.skills('SharePoint'), Icon.skills('Node.js'), Icon.skills('Visual Studio Code')];
        case 'databases':
          return [Icon.skills('MongoDB'), Icon.skills('MySQL')];
        case 'everything':
          return [
            Icon.skills('Adobe After Effects'),
            Icon.skills('Adobe Audition'),
            Icon.skills('Adobe Illustrator'),
            Icon.skills('Adobe InDesign'),
            Icon.skills('Adobe Photoshop'),
            Icon.skills('Adobe Premiere Pro'),
            Icon.skills('Adobe Xd'),
            Icon.skills('Angular'),
            Icon.skills('C++'),
            Icon.skills('CSS'),
            Icon.skills('DaVinci Resolve'),
            Icon.skills('Figma'),
            Icon.skills('Final Cut Pro'),
            Icon.skills('GIMP'),
            Icon.skills('GitHub'),
            Icon.skills('Google Apps Script'),
            Icon.skills('Google Drive'),
            Icon.skills('Google Sheets'),
            Icon.skills('Gulp'),
            Icon.skills('HTML'),
            Icon.skills('Inkscape'),
            Icon.skills('JavaScript'),
            Icon.skills('jQuery'),
            Icon.skills('Microsoft Excel'),
            Icon.skills('Microsoft OneDrive'),
            Icon.skills('SharePoint'),
            Icon.skills('Microsoft Word'),
            Icon.skills('MongoDB'),
            Icon.skills('MySQL'),
            Icon.skills('Natron'),
            Icon.skills('Node.js'),
            Icon.skills('Python'),
            Icon.skills('Sass'),
            Icon.skills('Scribus'),
            Icon.skills('Steinberg Cubase'),
            Icon.skills('TypeScript'),
            Icon.skills('Visual Basic for Applications'),
            Icon.skills('Visual Studio Code'),
          ];
        default:
          return [
            Icon.tests('One'),
            Icon.tests('Two'),
            Icon.tests('Three'),
            Icon.tests('Four'),
            Icon.tests('Five'),
            Icon.tests('Six'),
            Icon.tests('Seven'),
            Icon.tests('Eight'),
            Icon.tests('Nine'),
            Icon.tests('Ten'),
            Icon.tests('Eleven'),
            Icon.tests('Twelve'),
            Icon.tests('Thirteen'),
            Icon.tests('Fourteen'),
            Icon.tests('Fifteen'),
            Icon.tests('Sixteen'),
            Icon.tests('Seventeen'),
            Icon.tests('Eighteen'),
            Icon.tests('Nineteen'),
            Icon.tests('Twenty'),
            Icon.tests('Twenty-one'),
            Icon.tests('Twenty-two'),
            Icon.tests('Twenty-three'),
            Icon.tests('Twenty-four'),
            Icon.tests('Twenty-five'),
            Icon.tests('Twenty-six'),
            Icon.tests('Twenty-seven'),
          ];
      }
    }
  }
  //--🠊 console.log('|🠊 Info.js Detected! 🠈|'); 🠈--//
}
