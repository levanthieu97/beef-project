let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCss = require('gulp-clean-css');
let rename = require('gulp-rename');
let inject = require('gulp-inject');
let mergeJson = require('gulp-merge-json');
let jsonMinify = require('gulp-json-minify');
let language = ['vi', 'en'];

const { _beef_scss_path, paths} = require('./config/_build_css_file');

console.log('Files Beef CSS: ', _beef_scss_path);
console.log('src', paths.src_Beef_CSS_Dir);
console.log('src', paths.dest_Beef_CSS_Dir);

// Compile and minify our master stylesheet.
gulp.task('beef-sass', function(done) {
    gulp.src(_beef_scss_path)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.src_Beef_CSS_Dir))
    .pipe(cleanCss({keepSpecialComments: 0}))
    .pipe(rename(paths.extName))
    .pipe(gulp.dest(paths.dest_Beef_CSS_Dir))
    .on('end', done);
});

// Collect and create imports for all scss in out project.
gulp.task('loadSass', function(done) {
    let pathSass = gulp.src(paths.sass, {read: false});

    let sassOptions = {
        addRootSlash: false,
        addPrefix: '.',
        transform: function(filepath) {
            return '@import "' + filepath +'";';
        }
    }

    gulp.src('.')
    .pipe(inject(pathSass, sassOptions))
    .pipe(gulp.dest(paths.dest_Beef_CSS_Dir))
    .on('end', done);
});

// Watches for changes and compiles our scss files
// https://www.liquidlight.co.uk/blog/how-do-i-update-to-gulp-4/
gulp.task('watch', function() {
    gulp.watch(paths.sass, gulp.series('beef-sass'));
});

gulp.task('mergeJsonLocalize', function(done) {
    language.forEach(function(lang) {
        gulp.src('src/locales/' + lang + '/*.json')
        .pipe(mergeJson({fileName: lang+'.json'}))
        .pipe(jsonMinify())
        .pipe(gulp.dest('./public/beef/locales/' + lang))
        .on('end', done);
    })
});

gulp.task('watchJsonLocalize', gulp.series('mergeJsonLocalize', function() {
    gulp.watch(['src/locales/**/*.json'], gulp.series(['mergeJsonLocalize']));
}));

