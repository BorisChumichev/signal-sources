'use strict';

var gulp = require('gulp')
  , browserify = require('browserify')
  , babelify = require('babelify')
  , source = require('vinyl-source-stream')

gulp.task('build', function() {
  browserify({
    entries: './src/main.js',
    debug: true,
    standalone: 'signalSources'
  })
  .transform(babelify)
  .bundle()
  .pipe(source('signal-sources.js'))
  .pipe(gulp.dest('./build'))
})