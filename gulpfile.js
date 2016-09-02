// Various helper modules
const gulp = require("gulp");
const plug = require("gulp-load-plugins")();
const babel = require('gulp-babel');
const less = require('gulp-less');
const path = require('path');
var notify = require('gulp-notify');

var source = [
		'app/**/*.js', 
		"!app/vendor/**/*.*",
		"!app/**/*.spec.js"
	];

gulp.task('webserver', function() {
	return gulp
		.src('build')									// root
		.pipe(plug.webserver({
			livereload: true,							// livereload
			directoryListing: true,
			open: "http://localhost:8000/index.html#/search"	// index.html
	}));
});

gulp.task("hint", function() {
	return gulp
		.src(source)
		.pipe(plug.jshint("./.jshintrc"))
		.pipe(plug.jshint.reporter("jshint-stylish"));
});


gulp.task("watch", function() {
	gulp
		.watch(source, ["hint"])
		.on("change", function(event) {
			console.log("*** File " + event.path + " was " + event.type + ", running tasks...");
		});
	gulp.watch('app/**/*.js', ['babel']);
	gulp.watch('app/**/*.{html,json,img}', ['not-compiled']);
	gulp.watch('app/style/**/*.less', ['less']);
});

gulp.task("babel", function() {
	return gulp
		.src('app/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('build'));
});

gulp.task("not-compiled", function() {
	return gulp
		.src(['app/**/*.{html,json,png,gif,jpg}'])
		.pipe(gulp.dest('build'));
});

gulp.task('less', function () {
	return gulp.src('app/style/*.less')
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
		}).on("error", notify.onError(function (error) {
			return "Error: " + error.message;
		})))
		.pipe(gulp.dest('build/style'));
});

gulp.task("build", ["babel", "not-compiled", 'less']);
gulp.task("start", ['build', 'watch', "webserver"]);