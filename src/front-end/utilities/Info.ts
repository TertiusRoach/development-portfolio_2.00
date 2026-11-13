export namespace Info {
  //--|🠋| Skills: one row per application |🠋|--//
  //--🠊 [name shown, class name, logo file name, overlay, rating out of 10] 🠈--//
  const skillFolders = {
    first: 'dist/front-end/pages/resume/content/png-files/main-skills/green-logos',
    last: 'dist/front-end/pages/resume/content/png-files/main-skills/original-logos',
  };
  const skillTable: Array<[string, string, string, boolean, number]> = [
    ['Adobe After Effects',           'adobe-after-effects',           'Adobe After Effects',           false, 8],
    ['Adobe Audition',                'adobe-audition',                'Adobe Audition',                false, 7],
    ['Adobe Illustrator',             'adobe-illustrator',             'Adobe Illustrator',             false, 6],
    ['Adobe InDesign',                'adobe-indesign',                'Adobe InDesign',                false, 7],
    ['Adobe Photoshop',               'adobe-photoshop',               'Adobe Photoshop',               false, 9],
    ['Adobe Premiere Pro',            'adobe-premiere-pro',            'Adobe Premiere Pro',            false, 7],
    ['Adobe Xd',                      'adobe-xd',                      'Adobe Xd',                      false, 5],
    ['Angular',                       'angular',                       'Angular',                       false, 1],
    ['C++',                           'cPlusPlus',                     'C++',                           false, 1],
    ['CSS',                           'css',                           'CSS',                           true,  8],
    ['DaVinci Resolve',               'davinci-resolve',               'DaVinci Resolve',               true,  10],
    ['Figma',                         'figma',                         'Figma',                         true,  7],
    ['Final Cut Pro',                 'final-cut-pro',                 'Final Cut Pro',                 false, 6],
    ['GIMP',                          'gimp',                          'GIMP',                          false, 7],
    ['GitHub',                        'github',                        'GitHub',                        true,  6],
    ['Google Apps Script',            'google-apps-script',            'Google Apps Script',            false, 7],
    ['Google Drive',                  'google-drive',                  'Google Drive',                  false, 10],
    ['Google Sheets',                 'google-sheets',                 'Google Sheets',                 true,  8],
    ['Gulp',                          'gulp',                          'Gulp',                          false, 8],
    ['HTML',                          'html',                          'HTML',                          false, 10],
    ['Inkscape',                      'inkscape',                      'Inkscape',                      false, 5],
    ['JavaScript',                    'javascript',                    'JavaScript',                    true,  8],
    ['jQuery',                        'jquery',                        'jQuery',                        false, 8],
    ['Microsoft Excel',               'microsoft-excel',               'Microsoft Excel',               false, 9],
    ['Microsoft OneDrive',            'microsoft-onedrive',            'Microsoft OneDrive',            false, 10],
    ['SharePoint',                    'sharepoint',                    'SharePoint',                    false, 7],
    ['Microsoft Word',                'microsoft-word',                'Microsoft Word',                false, 10],
    ['MongoDB',                       'mongodb',                       'MongoDB',                       false, 5],
    ['MySQL',                         'mysql',                         'MySQL',                         false, 6],
    ['Natron',                        'natron',                        'Natron',                        false, 1],
    ['Node.js',                       'node-js',                       'NodeJS',                        false, 5],
    ['Python',                        'python',                        'Python',                        false, 3],
    ['Sass',                          'sass',                          'Sass',                          false, 9],
    ['Scribus',                       'scribus',                       'Scribus',                       false, 8],
    ['Steinberg Cubase',              'steinberg-cubase',              'Steinberg Cubase',              false, 6],
    ['TypeScript',                    'typescript',                    'TypeScript',                    false, 7],
    ['Visual Basic for Applications', 'visual-basic-for-applications', 'Visual Basic for Applications', true,  9],
    ['Visual Studio Code',            'visual-studio-code',            'Visual Studio Code',            false, 5],
  ];

  //--|🠋| Tests: numbered placeholders, 01.svg to 50.svg |🠋|--//
  //--🠊 Odd numbers get the overlay, and the rating counts 1 to 10, then starts again 🠈--//
  const testFolders = {
    first: 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/black-numbers',
    last: 'dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/white-numbers',
  };
  const testNames: Array<string> = [
    'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty',
    'Twenty-one', 'Twenty-two', 'Twenty-three', 'Twenty-four', 'Twenty-five', 'Twenty-six', 'Twenty-seven', 'Twenty-eight', 'Twenty-nine', 'Thirty',
    'Thirty-one', 'Thirty-two', 'Thirty-three', 'Thirty-four', 'Thirty-five', 'Thirty-six', 'Thirty-seven', 'Thirty-eight', 'Thirty-nine', 'Forty',
    'Forty-one', 'Forty-two', 'Forty-three', 'Forty-four', 'Forty-five', 'Forty-six', 'Forty-seven', 'Forty-eight', 'Forty-nine', 'Fifty',
  ];

  export class Icon {
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

    static skills(software: string) {
      let row = skillTable.find((skill) => skill[0] === software);
      if (!row) {
        return { application: '', className: '', firstIcon: ``, lastIcon: ``, overlay: false, rating: 0 };
      }
      let [application, className, fileName, overlay, rating] = row;
      return new Icon(application, className, `${skillFolders.first}/${fileName}.png`, `${skillFolders.last}/${fileName}.png`, overlay, rating);
    }
    static tests(number: string) {
      let position: number = testNames.indexOf(number) + 1; //--🠈 'One' is 1, 'Fifty' is 50 🠈--//
      if (position === 0) {
        return undefined;
      }
      let fileName: string = position < 10 ? `0${position}` : `${position}`;
      let overlay: boolean = position % 2 === 1;
      let rating: number = ((position - 1) % 10) + 1;
      return new Icon(number, number.toLowerCase(), `${testFolders.first}/${fileName}.svg`, `${testFolders.last}/${fileName}.svg`, overlay, rating);
    }
  }

  export class Resume {
    // private static firstIcon: string;
    // private static lastIcon: string;

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
            //--🠋 First Container 🠋--//
            Icon.tests('One'),
            Icon.tests('Two'),
            Icon.tests('Three'),
            Icon.tests('Four'),
            Icon.tests('Five'),
            Icon.tests('Six'),
            Icon.tests('Seven'),
            Icon.tests('Eight'),
            Icon.tests('Nine'),
            //--🠋 Second Container 🠋--//
            Icon.tests('Ten'),
            Icon.tests('Eleven'),
            Icon.tests('Twelve'),
            Icon.tests('Thirteen'),
            Icon.tests('Fourteen'),
            Icon.tests('Fifteen'),
            Icon.tests('Sixteen'),
            Icon.tests('Seventeen'),
            Icon.tests('Eighteen'),
            //--🠋 Third Container 🠋--//
            Icon.tests('Nineteen'),
            Icon.tests('Twenty'),
            Icon.tests('Twenty-one'),
            Icon.tests('Twenty-two'),
            Icon.tests('Twenty-three'),
            Icon.tests('Twenty-four'),
            Icon.tests('Twenty-five'),
            Icon.tests('Twenty-six'),
            Icon.tests('Twenty-seven'),
            //--🠋 Fourth Container 🠋--//
            Icon.tests('Twenty-eight'),
            Icon.tests('Twenty-nine'),
            Icon.tests('Thirty'),
            Icon.tests('Thirty-one'),
            Icon.tests('Thirty-two'),
            Icon.tests('Thirty-three'),
            Icon.tests('Thirty-four'),
            Icon.tests('Thirty-five'),
            Icon.tests('Thirty-six'),
            //--🠋 Fifth Container 🠋--//
            Icon.tests('Thirty-seven'),
            Icon.tests('Thirty-eight'),
            Icon.tests('Thirty-nine'),
            Icon.tests('Forty'),
            Icon.tests('Forty-one'),
            Icon.tests('Forty-two'),
            Icon.tests('Forty-three'),
            Icon.tests('Forty-four'),
            Icon.tests('Forty-five'),
          ];
      }
    }
  }
  //--🠊 console.log('|🠊 Info.js Detected! 🠈|'); 🠈--//
}
