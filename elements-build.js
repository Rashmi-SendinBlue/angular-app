const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const es5Files = [
        './dist/angular-app/runtime-es5.js',
        './dist/angular-app/polyfills-es5.js',
        './dist/angular-app/main-es5.js',
    ]

    const es2015Files = [
        './dist/angular-app/runtime-es2015.js',
        './dist/angular-app/polyfills-es2015.js',
        './dist/angular-app/main-es2015.js',
    ]

    await fs.ensureDir('elements')
    await concat(es5Files, 'elements/angularApp-es5.js');
    await concat(es2015Files, 'elements/angularApp-es2015.js');
    await fs.copyFile('./dist/angular-app/styles.css', 'elements/styles.css')
    // await fs.copy('./dist/angular-app/assets/', 'elements/assets/' )
    
})()