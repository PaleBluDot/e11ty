const gulp = require("gulp");
const inlineCss = require("gulp-inline-css");
const browserSync = require("browser-sync").create();

// Configuration
const project = {
	src: "./src",
	build: "./dist",
};

// Watch for SCSS changes
gulp.task("watch", function () {
	gulp.watch(project.src, gulp.parallel("inline")).on("change", browserSync.reload);
});

// Watch for SCSS changes
gulp.task("inline", function () {
	return gulp
		.src(project.build + "/templates/tailwindcss.html")
		.pipe(
			inlineCss({
				applyStyleTags: true,
				applyTableAttributes: true,
				preserveMediaQueries: true,
				removeHtmlSelectors: true,
			})
		)
		.pipe(gulp.dest(project.build));
});

// Let's build this sucker, without getting data from online sources
gulp.task("dev", gulp.series("inline", "watch"));

// Let's get the data we need and then build this sucker.
gulp.task("default", gulp.series("inline"));
