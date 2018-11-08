var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var config = require('./config/gulp.config.json');

gulp.task('sass', function(){
	return gulp.src(config.src_sass)
		.pipe(sass({outputStyle: config.sass_options}))
		.pipe(prefix({browsers: ['last 2 versions']}))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(config.src_dist));
});

gulp.task('scripts', function(){
	return gulp.src(config.src_scripts)
		.pipe(concat('bundle.js'))
		.pipe(babel({presets: ['@babel/env']}))
		.pipe(uglify())
		.pipe(gulp.dest(config.src_dist));
});

gulp.task('watch', function(){
	gulp.watch(config.src_sass, ['sass']);
	gulp.watch(config.src_scripts, ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);