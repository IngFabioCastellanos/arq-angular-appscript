const gulp = require("gulp");
const inline = require("gulp-inline");

function watchFiles() {
  gulp.watch("./dist/*/*.html", compilar);
}

function compilar() {
  return gulp
    .src("./dist/*/*.html")
    .pipe(inline())
    .pipe(gulp.dest("./apps-script"));
}

exports.defaut = compilar;
exports.watch = watchFiles;
