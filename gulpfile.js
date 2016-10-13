// Can put this in main JS file...

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

var sassSources = './scss/**/*.scss';
var sassOutput = './app/css';  
var htmlSource = 'app/**/*.html';
var jsSource = 'app/js/*.js';  

gulp.task('sass', function(){
	return gulp.src(sassSources)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(sassOutput))
	.pipe(browserSync.stream())
});

gulp.task('serve', ['sass'], function(){

	browserSync.init({
		server: './app'
	})

	gulp.watch(sassSources, ['sass']);
	gulp.watch(htmlSource, browserSync.reload);
	gulp.watch(jsSource, browserSync.reload);
});

var sftp = require('gulp-sftp');

gulp.task('deploy', function() {
	return gulp.src('./app/**/*')
	.pipe(sftp({
		host: 'oit2.scps.nyu.edu',
		user: 'waldies',
		pass: 'sw123890',
		remotePath: '/home/w/waldies/web'
	}))
});

gulp.task('default', ['serve']);




