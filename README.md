# My Boilerplate

## I like to use
+ [Gulp.js](http://gulpjs.com/) 
+ [Modernizr](http://modernizr.com/) 

## Other polyfills
+ [Box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill)
+ [Respond.js](https://github.com/scottjehl/Respond)

## CSS
All Sass formulas and mixins are to placed in modules/. To add your own, be sure to add as new partial and link it up in all.scss. Add CSS as modules in partials/ in a separate file and link in global.scss. Link to CSS in /dist/prod/css. There is an empty directory for vender CSS. 

## JS
Uses jQuery. Add plugins to plugins/ directory. Polyfills are add to polyfills/ and are NOT included in gulp build process, but are copied over to /dist/prod/js. Add your own scritps as separate files in the scripts/ directory. Build order is:
1. libs/
2. plugins/
3. scripts/ 