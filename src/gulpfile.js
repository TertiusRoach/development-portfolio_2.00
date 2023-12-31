const gulp = require('gulp');

const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');

gulp.task('copyIndex', async () => {
  let pageName = 'index';

  compileTypeScript();
});

const compileTypeScript = () => {
  //--|▼| Build reference map for compiler |▼|--//
  const reference = () => {
    //--|▼| Reference 'tsconfig.json' |▼|--//
    const typeScriptProject = typescript.createProject('tsconfig.json');
    //--|▼| Get TypeScript source code |▼|--//
    const sourceCode = typeScriptProject.src();
    //--|▼| Initialize TypeScript map for export |▼|--//
    const initializeSourcemaps = sourcemaps.init();
    //--|▼| Give source files its JavaScript identity |▼|--//
    const IdentityMap = sourcemaps.identityMap();
    //--|▼| Return code for compiling |▼|--//
    return sourceCode.pipe(initializeSourcemaps).pipe(IdentityMap).pipe(typeScriptProject());
  };

  //--|▼| Map out TypeScript to dist folder |▼|--//
  let srcUrlMapper = (file) => {
    let distFolder = gulp.dest('dist/');
    return distFolder + file.relative.toString().split('\\').join('/') + '.map';
  };

  //--|▼| Compile TypeScript |▼|--//
  let compileTypes = () => {
    let typesFolder = gulp.dest('types/');
    let typeScriptCompiled = reference();

    typeScriptCompiled.dts.pipe(typesFolder).on('error', function (err) {
      console.log('Gulp says: ' + err.message);
    });

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

  compileTypes();
};

//-------------------------------------------------//
