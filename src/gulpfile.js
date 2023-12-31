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

  compileTypeScript();
});

const compileTypeScript = () => {
  //--|🠋| Task to build a reference map for the TypeScript compiler |🠋|--//
  const reference = () => {
    //--|🠋| Reference 'tsconfig.json' to configure TypeScript project |🠋|--//
    const typeScriptProject = typescript.createProject('tsconfig.json');

    //--|🠋| Get TypeScript source code |🠋|--//
    const sourceCode = typeScriptProject.src();

    //--|🠋| Initialize TypeScript source map for export |🠋|--//
    const initializeSourcemaps = sourcemaps.init();

    //--|🠋| Give source files their JavaScript identity |🠋|--//
    const identityMap = sourcemaps.identityMap();

    //--|🠋| Return the code for compiling |🠋|--//
    return sourceCode.pipe(initializeSourcemaps).pipe(identityMap).pipe(typeScriptProject());
  };

  //--|🠋| Map out TypeScript files to the 'dist' folder |🠋|--//
  let srcUrlMapper = (file) => {
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
            sourceMappingURL: srcUrlMapper,
            sourceRoot: '../src',
          })
          .pipe(uglify())
      )
      .pipe(dest('dist/'));
  };

  //--|🠋| Task to delete the 'types' folder |🠋|--//
  let remove = () => {
    return gulp.src('types', { read: false }).pipe(clean());
  };

  //--|🠋| Execute the TypeScript compilation task |🠋|--//
  compileTypes();

  //--|🠋| Set a timeout to remove the 'types' folder after 7.5 seconds |🠋|--//
  setTimeout(remove, 7500);
};
