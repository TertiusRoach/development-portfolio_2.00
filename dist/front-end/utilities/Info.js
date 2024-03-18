define(["require","exports"],function(s,t){"use strict";var e;Object.defineProperty(t,"__esModule",{value:!0}),t.Info=void 0;{class i{constructor(s,t,e,i,n,o){this.application=s,this.className=t,this.firstIcon=e,this.lastIcon=i,this.overlay=n,this.rating=o}static skills(s){switch(this.firstIcon="dist/front-end/pages/resume/content/png-files/logo-skills/green-logos",this.lastIcon="dist/front-end/pages/resume/content/png-files/logo-skills/original-logos",s){case"Adobe After Effects":return new i("Adobe After Effects","adobe-after-effects",this.firstIcon+"/Adobe After Effects.png",this.lastIcon+"/Adobe After Effects.png",!1,8);case"Adobe Audition":return new i("Adobe Audition","adobe-audition",this.firstIcon+"/Adobe Audition.png",this.lastIcon+"/Adobe Audition.png",!1,7);case"Adobe Illustrator":return new i("Adobe Illustrator","adobe-illustrator",this.firstIcon+"/Adobe Illustrator.png",this.lastIcon+"/Adobe Illustrator.png",!1,6);case"Adobe InDesign":return new i("Adobe InDesign","adobe-indesign",this.firstIcon+"/Adobe InDesign.png",this.lastIcon+"/Adobe InDesign.png",!1,7);case"Adobe Photoshop":return new i("Adobe Photoshop","adobe-photoshop",this.firstIcon+"/Adobe Photoshop.png",this.lastIcon+"/Adobe Photoshop.png",!1,9);case"Adobe Premiere Pro":return new i("Adobe Premiere Pro","adobe-premiere-pro",this.firstIcon+"/Adobe Premiere Pro.png",this.lastIcon+"/Adobe Premiere Pro.png",!1,7);case"Adobe Xd":return new i("Adobe Xd","adobe-xd",this.firstIcon+"/Adobe Xd.png",this.lastIcon+"/Adobe Xd.png",!1,5);case"Angular":return new i("Angular","angular",this.firstIcon+"/Angular.png",this.lastIcon+"/Angular.png",!1,1);case"C++":return new i("C++","cPlusPlus",this.firstIcon+"/C++.png",this.lastIcon+"/C++.png",!1,1);case"CSS":return new i("CSS","css",this.firstIcon+"/CSS.png",this.lastIcon+"/CSS.png",!0,8);case"DaVinci Resolve":return new i("DaVinci Resolve","davinci-resolve",this.firstIcon+"/DaVinci Resolve.png",this.lastIcon+"/DaVinci Resolve.png",!0,10);case"Figma":return new i("Figma","figma",this.firstIcon+"/Figma.png",this.lastIcon+"/Figma.png",!0,7);case"Final Cut Pro":return new i("Final Cut Pro","final-cut-pro",this.firstIcon+"/Final Cut Pro.png",this.lastIcon+"/Final Cut Pro.png",!1,6);case"GIMP":return new i("GIMP","gimp",this.firstIcon+"/GIMP.png",this.lastIcon+"/GIMP.png",!1,7);case"GitHub":return new i("GitHub","github",this.firstIcon+"/GitHub.png",this.lastIcon+"/GitHub.png",!0,6);case"Google Apps Script":return new i("Google Apps Script","google-apps-script",this.firstIcon+"/Google Apps Script.png",this.lastIcon+"/Google Apps Script.png",!1,7);case"Google Drive":return new i("Google Drive","google-drive",this.firstIcon+"/Google Drive.png",this.lastIcon+"/Google Drive.png",!1,10);case"Google Sheets":return new i("Google Sheets","google-sheets",this.firstIcon+"/Google Sheets.png",this.lastIcon+"/Google Sheets.png",!0,8);case"Gulp":return new i("Gulp","gulp",this.firstIcon+"/Gulp.png",this.lastIcon+"/Gulp.png",!1,8);case"HTML":return new i("HTML","html",this.firstIcon+"/HTML.png",this.lastIcon+"/HTML.png",!1,10);case"Inkscape":return new i("Inkscape","inkscape",this.firstIcon+"/Inkscape.png",this.lastIcon+"/Inkscape.png",!1,5);case"JavaScript":return new i("JavaScript","javascript",this.firstIcon+"/JavaScript.png",this.lastIcon+"/JavaScript.png",!0,8);case"jQuery":return new i("jQuery","jquery",this.firstIcon+"/jQuery.png",this.lastIcon+"/jQuery.png",!1,8);case"Microsoft Excel":return new i("Microsoft Excel","microsoft-excel",this.firstIcon+"/Microsoft Excel.png",this.lastIcon+"/Microsoft Excel.png",!1,9);case"Microsoft OneDrive":return new i("Microsoft OneDrive","microsoft-onedrive",this.firstIcon+"/Microsoft OneDrive.png",this.lastIcon+"/Microsoft OneDrive.png",!1,10);case"SharePoint":return new i("SharePoint","sharepoint",this.firstIcon+"/SharePoint.png",this.lastIcon+"/SharePoint.png",!1,7);case"Microsoft Word":return new i("Microsoft Word","microsoft-word",this.firstIcon+"/Microsoft Word.png",this.lastIcon+"/Microsoft Word.png",!1,10);case"MongoDB":return new i("MongoDB","mongodb",this.firstIcon+"/MongoDB.png",this.lastIcon+"/MongoDB.png",!1,5);case"MySQL":return new i("MySQL","mysql",this.firstIcon+"/MySQL.png",this.lastIcon+"/MySQL.png",!1,6);case"Natron":return new i("Natron","natron",this.firstIcon+"/Natron.png",this.lastIcon+"/Natron.png",!1,1);case"Node.js":return new i("Node.js","node-js",this.firstIcon+"/NodeJS.png",this.lastIcon+"/NodeJS.png",!1,5);case"Python":return new i("Python","python",this.firstIcon+"/Python.png",this.lastIcon+"/Python.png",!1,3);case"Sass":return new i("Sass","sass",this.firstIcon+"/Sass.png",this.lastIcon+"/Sass.png",!1,9);case"Scribus":return new i("Scribus","scribus",this.firstIcon+"/Scribus.png",this.lastIcon+"/Scribus.png",!1,8);case"Steinberg Cubase":return new i("Steinberg Cubase","steinberg-cubase",this.firstIcon+"/Steinberg Cubase.png",this.lastIcon+"/Steinberg Cubase.png",!1,6);case"TypeScript":return new i("TypeScript","typescript",this.firstIcon+"/TypeScript.png",this.lastIcon+"/TypeScript.png",!1,7);case"Visual Basic for Applications":return new i("Visual Basic for Applications","visual-basic-for-applications",this.firstIcon+"/Visual Basic for Applications.png",this.lastIcon+"/Visual Basic for Applications.png",!0,9);case"Visual Studio Code":return new i("Visual Studio Code","visual-studio-code",this.firstIcon+"/Visual Studio Code.png",this.lastIcon+"/Visual Studio Code.png",!1,5);default:return{application:"",className:"",firstIcon:"",lastIcon:"",overlay:!1,rating:0}}}}(e||(t.Info={})).Resume=class{static carousel(s){switch(s){case"design":return[i.skills("Adobe Photoshop"),i.skills("Figma"),i.skills("Scribus"),i.skills("Inkscape"),i.skills("Adobe Illustrator")];case"editing":return[i.skills("DaVinci Resolve"),i.skills("Adobe Premiere Pro"),i.skills("Final Cut Pro")];case"admin":return[i.skills("Google Sheets"),i.skills("Microsoft Word")];case"languages":return[i.skills("JavaScript"),i.skills("CSS"),i.skills("HTML"),i.skills("Visual Basic for Applications"),i.skills("Python"),i.skills("C++")];case"utilities":return[i.skills("GitHub"),i.skills("Google Apps Script"),i.skills("Google Drive"),i.skills("Gulp"),i.skills("Microsoft OneDrive"),i.skills("SharePoint"),i.skills("Node.js"),i.skills("Visual Studio Code")];case"databases":return[i.skills("MongoDB"),i.skills("MySQL")];case"everything":return[i.skills("Adobe After Effects"),i.skills("Adobe Audition"),i.skills("Adobe Illustrator"),i.skills("Adobe InDesign"),i.skills("Adobe Photoshop"),i.skills("Adobe Premiere Pro"),i.skills("Adobe Xd"),i.skills("Angular"),i.skills("C++"),i.skills("CSS"),i.skills("DaVinci Resolve"),i.skills("Figma"),i.skills("Final Cut Pro"),i.skills("GIMP"),i.skills("GitHub"),i.skills("Google Apps Script"),i.skills("Google Drive"),i.skills("Google Sheets"),i.skills("Gulp"),i.skills("HTML"),i.skills("Inkscape"),i.skills("JavaScript"),i.skills("jQuery"),i.skills("Microsoft Excel"),i.skills("Microsoft OneDrive"),i.skills("SharePoint"),i.skills("Microsoft Word"),i.skills("MongoDB"),i.skills("MySQL"),i.skills("Natron"),i.skills("Node.js"),i.skills("Python"),i.skills("Sass"),i.skills("Scribus"),i.skills("Steinberg Cubase"),i.skills("TypeScript"),i.skills("Visual Basic for Applications"),i.skills("Visual Studio Code")];default:return this.firstIcon="dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/black-numbers",this.lastIcon="dist/front-end/pages/resume/content/svg-files/test-images/arabic-numerals/white-numbers",[new i("One","one",this.firstIcon+"/01.svg",this.lastIcon+"/01.svg",!0,1),new i("Two","two",this.firstIcon+"/02.svg",this.lastIcon+"/02.svg",!1,2),new i("Three","three",this.firstIcon+"/03.svg",this.lastIcon+"/03.svg",!0,3),new i("Four","four",this.firstIcon+"/04.svg",this.lastIcon+"/04.svg",!1,4),new i("Five","five",this.firstIcon+"/05.svg",this.lastIcon+"/05.svg",!0,5),new i("Six","six",this.firstIcon+"/06.svg",this.lastIcon+"/06.svg",!1,6),new i("Seven","seven",this.firstIcon+"/07.svg",this.lastIcon+"/07.svg",!0,7),new i("Eight","eight",this.firstIcon+"/08.svg",this.lastIcon+"/08.svg",!1,8),new i("Nine","nine",this.firstIcon+"/09.svg",this.lastIcon+"/09.svg",!0,9),new i("Ten","ten",this.firstIcon+"/10.svg",this.lastIcon+"/10.svg",!1,10),new i("Eleven","eleven",this.firstIcon+"/11.svg",this.lastIcon+"/11.svg",!0,11),new i("Twelve","twelve",this.firstIcon+"/12.svg",this.lastIcon+"/12.svg",!1,12),new i("Thirteen","thirteen",this.firstIcon+"/13.svg",this.lastIcon+"/13.svg",!0,13),new i("Fourteen","fourteen",this.firstIcon+"/14.svg",this.lastIcon+"/14.svg",!1,14),new i("Fifteen","fifteen",this.firstIcon+"/15.svg",this.lastIcon+"/15.svg",!0,15),new i("Sixteen","sixteen",this.firstIcon+"/16.svg",this.lastIcon+"/16.svg",!1,16),new i("Seventeen","seventeen",this.firstIcon+"/17.svg",this.lastIcon+"/17.svg",!0,17),new i("Eighteen","eighteen",this.firstIcon+"/18.svg",this.lastIcon+"/18.svg",!1,18),new i("Nineteen","nineteen",this.firstIcon+"/19.svg",this.lastIcon+"/19.svg",!0,19),new i("Twenty","twenty",this.firstIcon+"/20.svg",this.lastIcon+"/20.svg",!1,20),new i("Twenty-one","twenty-one",this.firstIcon+"/21.svg",this.lastIcon+"/21.svg",!0,21),new i("Twenty-two","twenty-two",this.firstIcon+"/22.svg",this.lastIcon+"/22.svg",!1,22),new i("Twenty-three","twenty-three",this.firstIcon+"/23.svg",this.lastIcon+"/23.svg",!0,23),new i("Twenty-four","twenty-four",this.firstIcon+"/24.svg",this.lastIcon+"/24.svg",!1,24),new i("Twenty-five","twenty-five",this.firstIcon+"/25.svg",this.lastIcon+"/25.svg",!0,25),new i("Twenty-six","twenty-six",this.firstIcon+"/26.svg",this.lastIcon+"/26.svg",!1,26),new i("Twenty-seven","twenty-seven",this.firstIcon+"/27.svg",this.lastIcon+"/27.svg",!0,27)]}}}}});