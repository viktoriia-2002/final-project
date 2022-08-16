const { task, src, dest, watch  } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

function scss() {
    return src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest('dist/css'))
}

task('watch', () => {
    watch('src/scss/**/*.scss', scss)
});