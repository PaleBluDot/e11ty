const gulp = require("gulp");
const inlineCss = require("gulp-inline-css");
const browserSync = require("browser-sync").create();
const purgecss = require("gulp-purgecss");

// Configuration
const project = {
	src: "./src/",
	build: "./dist/",
};

gulp.task("watch", function () {
	gulp.watch(project.src, gulp.parallel("inline", "purgecss")).on("change", browserSync.reload);
});

gulp.task("inline", function () {
	return gulp
		.src(project.build + "templates/inline.html")
		.pipe(
			inlineCss({
				applyTableAttributes: true,
				preserveMediaQueries: true,
				removeHtmlSelectors: true,
				removeStyleTags: true,
			})
		)
		.pipe(gulp.dest(project.build));
});

gulp.task("purgecss", () => {
	return gulp
		.src(project.src + "styles/*.css")
		.pipe(
			purgecss({
				content: [project.src + "templates/tailwind.njk"],
			})
		)
		.pipe(gulp.dest(project.build));
});

// Let's build this sucker, without getting data from online sources
gulp.task("dev", gulp.series("inline", "purgecss", "watch"));

// Let's get the data we need and then build this sucker.
gulp.task("default", gulp.series("inline"));
