const gulp = require('gulp');

const clean = require('gulp-clean');
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const gap = require('gulp-append-prepend');
const uglifycss = require('gulp-uglifycss');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-string-replace');
const deletefile = require('gulp-delete-file');
const sass = require('gulp-sass')(require('sass'));
const removeHtmlComments = require('gulp-remove-html-comments');

gulp.task('copyIndex', async () => {
  let pageName = 'index';

  copyHTML(pageName);
  compileSASS(pageName);
  compileCode('front-end');
});
gulp.task('cleanDist', function () {
  //--🠋 Delete Directories in 'dist' directory 🠋--//
  gulp.src(['dist/back-end', 'dist/front-end'], { read: false }).pipe(clean());
  //--🠊 This does give an Error but still works for some reason 🠈--//
});

const copyHTML = (pageName) => {
  //--🠋 Copy main HTML file into root folder 🠋--//
  gulp
    //--| Find *.html reference files in the 'src' folder |--//
    .src(`src/front-end/pages/${pageName}/${pageName}.html`)
    //--| Clear comments from HTML file |--//
    .pipe(removeHtmlComments())
    //--| Compress HTML file |--//
    .pipe(htmlmin({ collapseWhitespace: true }))
    //--| Copy the pageName.html into 'root' folder |--//
    .pipe(gulp.dest('src/../'));

  //--🠋 Copy all HTML files into distributable folder 🠋--//
  const sectionFolders = ['A-body', 'B-overlay', 'C-header', 'D-footer', 'E-leftbar', 'F-rightbar', 'G-main', 'H-data'];
  let copyHTML = (item, index, array) => {
    gulp
      //--| Find *.html files in the source folder |--//
      .src(`src/front-end/pages/${pageName}/${array[index]}/**/*.html`)
      .pipe(removeHtmlComments())
      .pipe(htmlmin({ collapseWhitespace: true }))
      //--| Copy the *.html files into distribution folder |--//
      .pipe(gulp.dest(`dist/front-end/pages/${pageName}/${array[index]}/`));

    console.log(`|🠊 Copied ${array[index]}`);
  };
  sectionFolders.forEach(copyHTML);
};
const compileSASS = (pageName) => {
  //--🠋 Combine all *.scss files 🠋--//
  let concatenate = (pageName) => {
    gulp
      //--| Find all the *.scss files |--//
      .src([
        'src/front-end/pages/corporate-identity.scss',
        `src/front-end/pages/${pageName}/A-body/**/*.scss`,
        `src/front-end/pages/${pageName}/B-overlay/**/*.scss`,
        `src/front-end/pages/${pageName}/C-header/**/*.scss`,
        `src/front-end/pages/${pageName}/D-footer/**/*.scss`,
        `src/front-end/pages/${pageName}/E-leftbar/**/*.scss`,
        `src/front-end/pages/${pageName}/F-rightbar/**/*.scss`,
        `src/front-end/pages/${pageName}/G-main/**/*.scss`,
        `src/front-end/pages/${pageName}/H-data/**/*.scss`,
        'src/front-end/pages/global-styling.scss',
      ])
      //--| Combine the selected *.scss files |--//
      .pipe(concat('style.scss'))
      //--| Export the combined files as style.scss |--//
      .pipe(dest('./'));

    console.log(`|🠊 Merged SASS stylesheets for ${pageName}.html`);
  };

  //--🠋 Create style.css file 🠋--//
  let compile = (pageName) => {
    gulp
      //--| Select style.scss |--//
      .src(['style.scss'])
      //--| Convert to file to CSS |--//
      .pipe(sass().on('error', sass.logError))
      //--| Compress style.css document |--//
      .pipe(
        uglifycss({
          maxLineLen: 1000,
          uglyComments: true,
        })
      )
      //--| Distribute the style.css file |--//
      .pipe(dest(`dist/front-end/pages/${pageName}/`));

    console.log(`|🠊 Converted SASS to CSS for ${pageName}.html`);
  };

  //--🠋 Delete style.scss 🠋--//
  let remove = () => {
    gulp
      //--| The style.scss file is stored in the root parent |--//
      .src(['style.scss'])
      //--| Delete style.scss file using Regex |--//
      .pipe(
        deletefile({
          reg: /\w*(\-\w{8}\.js){1}$|\w*(\-\w{8}\.css){1}$/, //--🠈 Regex: Why are you so confusing? 🠈--//
          deleteMatch: false,
        })
      );

    console.log(`|🠊 Deleted concatenated SASS document for ${pageName}.html`);
  };

  //--🠋 Add Bootstrap to style.css 🠋--//
  let prepend = (pageName) => {
    gulp
      .src([`dist/front-end/pages/${pageName}/style.css`])
      //--| Remove @charset "UTF-8"; |--//
      .pipe(replace('@charset "UTF-8";', ''))
      //--| Get Bootstrap file and add to style.css |--//
      .pipe(gap.prependFile('src/front-end/vendors/bootstrap/5.3.2/css/bootstrap.min.css'))
      //--| Save style.css with Bootstrap |--//
      .pipe(dest(`dist/front-end/pages/${pageName}/`));

    console.log(`|🠊 Bootstrap added to style.css for ${pageName}.html`);
  };

  //--🠋 Execute functions asynchronously 🠋--//
  concatenate(pageName);
  setTimeout(remove, 5000);
  setTimeout(compile, 2500, pageName);
  setTimeout(prepend, 7500, pageName);
};
const compileCode = (stackType) => {
  compileTypeScript();
  duplicateVendors(stackType);
};

function duplicateVendors(stackType) {
  let fullStack = ['back-end', 'front-end'];

  //--🠋 Combine all vendor files 🠋--//
  let copy = (dependency) => {
    switch (dependency) {
      //--🠋 Back-end 🠋--//
      case '':
        break;
      //--🠋 Front-end 🠋--//
      case 'RequireJS':
        //--🠋 Copy RequireJS 🠋--//
        gulp
          //--| Find RequireJS |--//
          .src('src/front-end/vendors/requirejs/require-2.3.6.js')
          //--| Rename File |--//
          .pipe(rename({ basename: 'RequireJS' }))
          //--| Copy RequireJS to 'dist' folder |--//
          .pipe(gulp.dest('dist/front-end/vendors/'));
        break;
      case 'Font Awesome':
        //--🠋 Copy fontAwesome 🠋--//
        gulp
          //--| Find fontAwesome |--//
          .src('src/front-end/vendors/font-awesome/5.13.0/js/all.min.js')
          //--| Rename File |--//
          .pipe(rename({ basename: 'Font Awesome' }))
          //--| Copy fontAwesome to 'dist' folder |--//
          .pipe(gulp.dest('dist/front-end/vendors/'));
        break;
    }
  };

  //--🠋 Copy full-stack.js Files 🠋--//
  for (let i = 0; i < fullStack.length; i++) {
    gulp
      //--| Points to file location |--//
      .src(`src/${fullStack[i]}/${fullStack[i]}.js`)
      //--| Minify JavaScript |--//
      .pipe(uglify())
      //--| Output to 'dist' directory |--//
      .pipe(gulp.dest(`dist/${fullStack[i]}/`));
  }

  switch (stackType) {
    case 'back-end':
      break;
    case 'front-end':
      copy('RequireJS');
      copy('Font Awesome');
      break;
  }
}
function compileTypeScript() {
  //--|🠋| Task to build a reference map for the TypeScript compiler |🠋|--//
  let reference = () => {
    const typeScriptProject = typescript.createProject('tsconfig.json'); //--|🠊| Reference 'tsconfig.json' to configure TypeScript project |🠈|--//
    const sourceCode = typeScriptProject.src(); //--|🠊| Get TypeScript source code |🠈|--//
    const initializeSourcemaps = sourcemaps.init(); //--|🠊| Initialize TypeScript source map for export |🠈|--//
    const identityMap = sourcemaps.identityMap(); //--|🠊| Give source files their JavaScript identity |🠈|--//

    //--|🠋| Return the code for compiling |🠋|--//
    return sourceCode.pipe(initializeSourcemaps).pipe(identityMap).pipe(typeScriptProject());
  };

  //--|🠋| Map out TypeScript files to the 'dist' folder |🠋|--//
  let typesMap = (file) => {
    let distFolder = gulp.dest('dist/');
    return distFolder + file.relative.toString().split('\\').join('/') + '.map';
  };

  //--|🠋| Task to compile TypeScript files |🠋|--//
  let compileTypes = () => {
    //--|🠋| Define the destination folder for TypeScript declaration files |🠋|--//
    let typesFolder = gulp.dest('types/');

    //--|🠋| Get the compiled TypeScript code using the reference task |🠋|--//
    let typeScriptCompiled = reference();

    //--|🠋| Handle TypeScript declaration files |🠋|--//
    typeScriptCompiled.dts.pipe(typesFolder).on('error', function (err) {
      console.log('Gulp says: ' + err.message);
    });

    //--|🠋| Write source maps and minify the compiled JavaScript files |🠋|--//
    typeScriptCompiled.js
      .pipe(
        sourcemaps
          .write('./', {
            includeContent: false,
            addComment: true,
            sourceMappingURL: typesMap,
            sourceRoot: '../src',
          })
          .pipe(uglify())
      )
      .pipe(dest('dist/'));
  };

  //--|🠋| Task to delete the 'types' folder |🠋|--//
  let deleteTypes = () => {
    return gulp.src('types', { read: false }).pipe(clean());
  };

  //--|🠋| Execute functions asynchronously |🠋|--//
  compileTypes();
  setTimeout(deleteTypes, 7500);
}
