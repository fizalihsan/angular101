
A simple 'Hello World' web application using Webpack.

* Initialize yarn for the app `yarn init -y` which creates `package.json`
* install webpack locally: `yarn add webpack@3.5.5 --dev` which installs webpack under `./node_modules`
* Create app files: `index.html`, `app.js`, `content.js`
* Create webpack configuration file: `webpack.config.js`
* execute the webpack: `./node_modules/.bin/webpack` or `yarn webpack` which takes the input files and generates output files as configured in the config file. 
> [webpack.config.js, app.js, content.js, *.scss] -> [dist/main.js]

* Add HTMLWebPackPlugin to inject the generates sources into the HTML file: `yarn add html-webpack-plugin --dev` and modify webpack.config.js.
* To hot reload changes made during development instead of running `yarn webpack` for every change, run `yarn webpack -- --watch`

* Add CSS support: `yarn add css-loader style-loader --dev`

> Source: https://www.edc4it.com/blog/web/webpack-tutorial.html