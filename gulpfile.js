/**
 * gulpfile.js
 *
 * Created by xiepan on 16/9/5 16:32.
 */

// 获取 gulp
var gulp = require('gulp');
// 获取 gulp-ruby-sass 模块
var sass = require('gulp-sass');

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('sass/gulp'));
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行任务
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto'])