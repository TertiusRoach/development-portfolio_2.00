export namespace Info {
  class Icon {
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

  export class Resume {
    private static firstIcon: string;
    private static lastIcon: string;

    static skills(section?: 'design' | 'editing' | 'admin' | 'languages' | 'utilities' | 'databases' | 'everything'): Icon[] {
      this.firstIcon = 'dist/front-end/pages/resume/content/png-files/logo-skills/green-logos';
      this.lastIcon = 'dist/front-end/pages/resume/content/png-files/logo-skills/original-logos';

      const adobeAfterEffects: Icon = new Icon('Adobe After Effects', 'adobe-after-effects', `${this.firstIcon}/Adobe After Effects.png`, `${this.lastIcon}/Adobe After Effects.png`, false, 8);
      const adobeAudition: Icon = new Icon('Adobe Audition', 'adobe-audition', `${this.firstIcon}/Adobe Audition.png`, `${this.lastIcon}/Adobe Audition.png`, false, 7);
      const adobeIllustrator: Icon = new Icon('Adobe Illustrator', 'adobe-illustrator', `${this.firstIcon}/Adobe Illustrator.png`, `${this.lastIcon}/Adobe Illustrator.png`, false, 6);
      const adobeInDesign: Icon = new Icon('Adobe InDesign', 'adobe-indesign', `${this.firstIcon}/Adobe InDesign.png`, `${this.lastIcon}/Adobe InDesign.png`, false, 7);
      const adobePhotoshop: Icon = new Icon('Adobe Photoshop', 'adobe-photoshop', `${this.firstIcon}/Adobe Photoshop.png`, `${this.lastIcon}/Adobe Photoshop.png`, false, 9);
      const adobePremierePro: Icon = new Icon('Adobe Premiere Pro', 'adobe-premiere-pro', `${this.firstIcon}/Adobe Premiere Pro.png`, `${this.lastIcon}/Adobe Premiere Pro.png`, false, 7);
      const adobeXd: Icon = new Icon('Adobe Xd', 'adobe-xd', `${this.firstIcon}/Adobe Xd.png`, `${this.lastIcon}/Adobe Xd.png`, false, 5);
      const angular: Icon = new Icon('Angular', 'angular', `${this.firstIcon}/Angular.png`, `${this.lastIcon}/Angular.png`, false, 1);
      const cPlusPlus: Icon = new Icon('C++', 'cPlusPlus', `${this.firstIcon}/C++.png`, `${this.lastIcon}/C++.png`, false, 1);
      const css: Icon = new Icon('CSS', 'css', `${this.firstIcon}/CSS.png`, `${this.lastIcon}/CSS.png`, true, 8);
      const daVinciResolve: Icon = new Icon('DaVinci Resolve', 'davinci-resolve', `${this.firstIcon}/DaVinci Resolve.png`, `${this.lastIcon}/DaVinci Resolve.png`, true, 10);
      const figma: Icon = new Icon('Figma', 'figma', `${this.firstIcon}/Figma.png`, `${this.lastIcon}/Figma.png`, true, 7);
      const finalCutPro: Icon = new Icon('Final Cut Pro', 'final-cut-pro', `${this.firstIcon}/Final Cut Pro.png`, `${this.lastIcon}/Final Cut Pro.png`, false, 6);
      const gimp: Icon = new Icon('GIMP', 'gimp', `${this.firstIcon}/GIMP.png`, `${this.lastIcon}/GIMP.png`, false, 7);
      const gitHub: Icon = new Icon('GitHub', 'github', `${this.firstIcon}/GitHub.png`, `${this.lastIcon}/GitHub.png`, true, 6);
      const googleAppsScript: Icon = new Icon('Google Apps Script', 'google-apps-script', `${this.firstIcon}/Google Apps Script.png`, `${this.lastIcon}/Google Apps Script.png`, false, 7);
      const googleDrive: Icon = new Icon('Google Drive', 'google-drive', `${this.firstIcon}/Google Drive.png`, `${this.lastIcon}/Google Drive.png`, false, 10);
      const googleSheets: Icon = new Icon('Google Sheets', 'google-sheets', `${this.firstIcon}/Google Sheets.png`, `${this.lastIcon}/Google Sheets.png`, true, 8);
      const gulp: Icon = new Icon('Gulp', 'gulp', `${this.firstIcon}/Gulp.png`, `${this.lastIcon}/Gulp.png`, false, 8);
      const html: Icon = new Icon('HTML', 'html', `${this.firstIcon}/HTML.png`, `${this.lastIcon}/HTML.png`, false, 10);
      const inkscape: Icon = new Icon('Inkscape', 'inkscape', `${this.firstIcon}/Inkscape.png`, `${this.lastIcon}/Inkscape.png`, false, 5);
      const javaScript: Icon = new Icon('JavaScript', 'javascript', `${this.firstIcon}/JavaScript.png`, `${this.lastIcon}/JavaScript.png`, true, 8);
      const jQuery: Icon = new Icon('jQuery', 'jquery', `${this.firstIcon}/jQuery.png`, `${this.lastIcon}/jQuery.png`, false, 8);
      const microsoftExcel: Icon = new Icon('Microsoft Excel', 'microsoft-excel', `${this.firstIcon}/Microsoft Excel.png`, `${this.lastIcon}/Microsoft Excel.png`, false, 9);
      const microsoftOneDrive: Icon = new Icon('Microsoft OneDrive', 'microsoft-onedrive', `${this.firstIcon}/Microsoft OneDrive.png`, `${this.lastIcon}/Microsoft OneDrive.png`, false, 10);
      const microsoftSharePoint: Icon = new Icon('SharePoint', 'sharepoint', `${this.firstIcon}/SharePoint.png`, `${this.lastIcon}/SharePoint.png`, false, 7);
      const microsoftWord: Icon = new Icon('Microsoft Word', 'microsoft-word', `${this.firstIcon}/Microsoft Word.png`, `${this.lastIcon}/Microsoft Word.png`, false, 10);
      const mongoDb: Icon = new Icon('MongoDB', 'mongodb', `${this.firstIcon}/MongoDB.png`, `${this.lastIcon}/MongoDB.png`, false, 5);
      const mySQL: Icon = new Icon('MySQL', 'mysql', `${this.firstIcon}/MySQL.png`, `${this.lastIcon}/MySQL.png`, false, 6);
      const natron: Icon = new Icon('Natron', 'natron', `${this.firstIcon}/Natron.png`, `${this.lastIcon}/Natron.png`, false, 1);
      const nodeJS: Icon = new Icon('Node.js', 'node-js', `${this.firstIcon}/NodeJS.png`, `${this.lastIcon}/NodeJS.png`, false, 5);
      const python: Icon = new Icon('Python', 'python', `${this.firstIcon}/Python.png`, `${this.lastIcon}/Python.png`, false, 3);
      const sass: Icon = new Icon('Sass', 'sass', `${this.firstIcon}/Sass.png`, `${this.lastIcon}/Sass.png`, false, 9);
      const scribus: Icon = new Icon('Scribus', 'scribus', `${this.firstIcon}/Scribus.png`, `${this.lastIcon}/Scribus.png`, false, 8);
      const steinbergCubase: Icon = new Icon('Steinberg Cubase', 'steinberg-cubase', `${this.firstIcon}/Steinberg Cubase.png`, `${this.lastIcon}/Steinberg Cubase.png`, false, 6);
      const typeScript: Icon = new Icon('TypeScript', 'typescript', `${this.firstIcon}/TypeScript.png`, `${this.lastIcon}/TypeScript.png`, false, 7);
      const vba: Icon = new Icon('Visual Basic for Applications', 'visual-basic-for-applications', `${this.firstIcon}/Visual Basic for Applications.png`, `${this.lastIcon}/Visual Basic for Applications.png`, true, 9);
      const visualStudioCode: Icon = new Icon('Visual Studio Code', 'visual-studio-code', `${this.firstIcon}/Visual Studio Code.png`, `${this.lastIcon}/Visual Studio Code.png`, false, 5);

      switch (section) {
        case 'design':
          return [adobeIllustrator, adobeInDesign, adobePhotoshop, adobePremierePro, adobeXd, figma, gimp, inkscape, scribus];
        case 'editing':
          return [adobeAfterEffects, adobeAudition, daVinciResolve, finalCutPro, natron, steinbergCubase];
        case 'admin':
          return [googleSheets, microsoftExcel, microsoftWord];
        case 'languages':
          return [css, html, javaScript, jQuery, sass, python, typeScript, vba, cPlusPlus, angular];
        case 'utilities':
          return [gitHub, googleAppsScript, googleDrive, gulp, microsoftOneDrive, nodeJS, microsoftSharePoint, visualStudioCode];
        case 'databases':
          return [mySQL, mongoDb];
        case 'everything':
          return [
            adobeAfterEffects,
            adobeAudition,
            adobeIllustrator,
            adobeInDesign,
            adobePhotoshop,
            adobePremierePro,
            adobeXd,
            angular,
            cPlusPlus,
            css,
            daVinciResolve,
            figma,
            finalCutPro,
            gimp,
            gitHub,
            googleAppsScript,
            googleDrive,
            googleSheets,
            gulp,
            html,
            inkscape,
            javaScript,
            jQuery,
            microsoftExcel,
            microsoftOneDrive,
            microsoftSharePoint,
            microsoftWord,
            mongoDb,
            mySQL,
            natron,
            nodeJS,
            python,
            sass,
            scribus,
            steinbergCubase,
            typeScript,
            vba,
            visualStudioCode,
          ];
        default:
          this.firstIcon = 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/black-numbers';
          this.lastIcon = 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/white-numbers';
          return [
            new Icon('One', 'one', `${this.firstIcon}/01.svg`, `${this.lastIcon}/01.svg`, true, 1),
            new Icon('Two', 'two', `${this.firstIcon}/02.svg`, `${this.lastIcon}/02.svg`, false, 2),
            new Icon('Three', 'three', `${this.firstIcon}/03.svg`, `${this.lastIcon}/03.svg`, true, 3),
            new Icon('Four', 'four', `${this.firstIcon}/04.svg`, `${this.lastIcon}/04.svg`, false, 4),
            new Icon('Five', 'five', `${this.firstIcon}/05.svg`, `${this.lastIcon}/05.svg`, true, 5),
            new Icon('Six', 'six', `${this.firstIcon}/06.svg`, `${this.lastIcon}/06.svg`, false, 6),
            new Icon('Seven', 'seven', `${this.firstIcon}/07.svg`, `${this.lastIcon}/07.svg`, true, 7),
            new Icon('Eight', 'eight', `${this.firstIcon}/08.svg`, `${this.lastIcon}/08.svg`, false, 8),
            new Icon('Nine', 'nine', `${this.firstIcon}/09.svg`, `${this.lastIcon}/09.svg`, true, 9),
            new Icon('Ten', 'ten', `${this.firstIcon}/10.svg`, `${this.lastIcon}/10.svg`, false, 10),
            new Icon('Eleven', 'eleven', `${this.firstIcon}/11.svg`, `${this.lastIcon}/11.svg`, true, 11),
            new Icon('Twelve', 'twelve', `${this.firstIcon}/12.svg`, `${this.lastIcon}/12.svg`, false, 12),
            new Icon('Thirteen', 'thirteen', `${this.firstIcon}/13.svg`, `${this.lastIcon}/13.svg`, true, 13),
            new Icon('Fourteen', 'fourteen', `${this.firstIcon}/14.svg`, `${this.lastIcon}/14.svg`, false, 14),
            new Icon('Fifteen', 'fifteen', `${this.firstIcon}/15.svg`, `${this.lastIcon}/15.svg`, true, 15),
            new Icon('Sixteen', 'sixteen', `${this.firstIcon}/16.svg`, `${this.lastIcon}/16.svg`, false, 16),
            new Icon('Seventeen', 'seventeen', `${this.firstIcon}/17.svg`, `${this.lastIcon}/17.svg`, true, 17),
            new Icon('Eighteen', 'eighteen', `${this.firstIcon}/18.svg`, `${this.lastIcon}/18.svg`, false, 18),
            new Icon('Nineteen', 'nineteen', `${this.firstIcon}/19.svg`, `${this.lastIcon}/19.svg`, true, 19),
            new Icon('Twenty', 'twenty', `${this.firstIcon}/20.svg`, `${this.lastIcon}/20.svg`, false, 20),
            new Icon('Twenty-one', 'twenty-one', `${this.firstIcon}/21.svg`, `${this.lastIcon}/21.svg`, true, 21),
            new Icon('Twenty-two', 'twenty-two', `${this.firstIcon}/22.svg`, `${this.lastIcon}/22.svg`, false, 22),
            new Icon('Twenty-three', 'twenty-three', `${this.firstIcon}/23.svg`, `${this.lastIcon}/23.svg`, true, 23),
            new Icon('Twenty-four', 'twenty-four', `${this.firstIcon}/24.svg`, `${this.lastIcon}/24.svg`, false, 24),
            new Icon('Twenty-five', 'twenty-five', `${this.firstIcon}/25.svg`, `${this.lastIcon}/25.svg`, true, 25),
            new Icon('Twenty-six', 'twenty-six', `${this.firstIcon}/26.svg`, `${this.lastIcon}/26.svg`, false, 26),
            new Icon('Twenty-seven', 'twenty-seven', `${this.firstIcon}/27.svg`, `${this.lastIcon}/27.svg`, true, 27),
          ];
      }
    }
  }
  //--🠊 console.log('|🠊 Info.js Detected! 🠈|'); 🠈--//
}
