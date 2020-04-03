//Gulp connection
const gulp = require('gulp');
//Combine files
const concat = require('gulp-concat');
//Adding prefixes
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
//Styles optimization
const cleanCSS = require('gulp-clean-css');
//Scripts optimization
const uglify = require('gulp-uglify');
//Deleting files
const del = require('del');
//Browser sync
const browserSync = require('browser-sync').create();
//Imagemin
const imagemin = require('gulp-imagemin');
//For the preprocessors
const sourcemaps = require('gulp-sourcemaps');
//Sass 
const sass = require('gulp-sass');
//Less 
const less = require('gulp-less');
//Stylus 
const stylus = require('gulp-stylus');


//Style files separate
const styleSeparate = [
   './src/css/bootstrap-reboot.min.css',
   './src/css/bootstrap.min.css',
]
//Style files connection order
const styleFiles = [
   // './src/css/bootstrap-reboot.min.css',
   // './src/css/bootstrap.min.css',
   './src/css/fonts.scss',
   './src/css/main.scss',
   './src/css/media.scss',
]

//JS files connection order
const scriptFiles = [
   './src/js/jquery-3.4.1.min.js',
   './src/js/jquery-ui.min.js',
   './src/js/bootstrap.min.js', 
   './src/js/main.js'
]

//Fonts files connection order
const fontsFiles = [
   './src/fonts/*.eot',
   './src/fonts/*.svg',
   './src/fonts/*.ttf',
   './src/fonts/*.woff',
   './src/fonts/*.woff2',
]

//Task for styles
gulp.task('styles', () => {
   //template for CSS files search
   //All files by pattern './src/css/**/*.css'
   return gulp.src(styleFiles)
      .pipe(sourcemaps.init())
      //Indicate stylus() , sass() or less()
      .pipe(sass())
      //Combination files in one***********************************************
      .pipe(concat('style.css'))
      //Adding prefixes
      .pipe(postcss(autoprefixer))
      //Minification CSS******************************************************
      // .pipe(cleanCSS({
      //    level: 2
      // }))
      .pipe(sourcemaps.write('./'))
      //Final folder for styles
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());
});

//Task for separate style
gulp.task('separate', () => {
   //template for CSS files search
   //All files by pattern './src/css/**/*.css'
   return gulp.src(styleSeparate)
      .pipe(sourcemaps.init())
      //Indicate stylus() , sass() or less()
      .pipe(sass())
      //Combination files in one***********************************************
      .pipe(concat('separate.css'))
      //Adding prefixes
      .pipe(postcss(autoprefixer))
      //Minification CSS******************************************************
      // .pipe(cleanCSS({
      //    level: 2
      // }))
      .pipe(sourcemaps.write('./'))
      //Final folder for styles
      .pipe(gulp.dest('./build/css'))
      .pipe(browserSync.stream());
});


//Task for scripts
gulp.task('scripts', () => {
   //template for JS files search
   //All files by pattern './src/js/**/*.js'
   return gulp.src(scriptFiles)
      //Combination files in one******************************************
      .pipe(concat('script.js'))



      //Minification JS****************************************************
      // .pipe(uglify({
      //    toplevel: true
      // }))



      //Final folder for scripts
      .pipe(gulp.dest('./build/js'))
      .pipe(browserSync.stream());
});

//Task for cleaning build folder
gulp.task('del', () => {
   return del(['build/*'])
});

//Imagemin
gulp.task('img-compress',()=> {
   return gulp.src('./src/images/**')
   .pipe(imagemin({
      progressive: true
   }))
   .pipe(gulp.dest('./build/images/'))
});

//Fonts
gulp.task('fonts', () => {
   return gulp.src(fontsFiles)
     
      .pipe(gulp.dest('./build/fonts'))
      .pipe(browserSync.stream());
 });

//Task for watching changes in files
gulp.task('watch', () => {
   browserSync.init({
      server: {
         baseDir: "./"
      }
   });
   gulp.watch('./src/images/**', gulp.series('img-compress'))
   //watch the style files with appropriate extension
   gulp.watch('./src/css/**/*.scss', gulp.series('styles'))
   //watch JS files
   gulp.watch('./src/js/**/*.js', gulp.series('scripts'))
   //if HTML changes start sync
   gulp.watch("./*.html").on('change', browserSync.reload);
});

//task by default launch del, styles, scripts и watch
gulp.task('default', gulp.series('del', gulp.parallel('styles', 'separate', 'scripts', 'img-compress', 'fonts'), 'watch'));