/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // app is within the compiled/app folder
      app: 'compiled/app',
      // module is within the compiled/module folder
      module: 'compiled/module',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'tslib': 'npm:tslib',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      module: {
        main: './module.js',
        defaultExtension: 'js'
      },
      rxjs: { main: 'index.js', defaultExtension: 'js' },
      "rxjs/operators": { "main": "index.js", "defaultExtension": "js" },
      "rxjs/internal-compatibility": { "main": "index.js", "defaultExtension": "js" },
      "rxjs/testing": { "main": "index.js", "defaultExtension": "js" },
      'rxjs/ajax': { main: 'index.js', defaultExtension: 'js' },
      'rxjs-compat': { main: 'index.js', defaultExtension: 'js' },
      tslib: {
        main: 'tslib.js',
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
