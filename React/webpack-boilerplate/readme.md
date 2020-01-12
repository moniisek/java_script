1. `npm init -y` to create a package.json file
2. inside package.json:
 ```
 "mode": "development",
 "private": true,
 "scripts": {
   "start": "webpack-dev-server --open --webpack.config.js"
 }
 ```
 3. install:
 - webpack, webpack-cli, webpack-dev-server,
 html-webpack-plugin, @babel/core, @babel/preset-env, @babel/preset-react, babel-loader, react, react-dom

 4. create a `.babelrc` file on the same level as packaje.json etc
 ```
 {"presets": ["@babel/preset-env", "@babel/preset-react"]}
 ```
 This set up has development server only. Doesn't create build chunks in dist.

5. css
need to `import ./style.css` (or wherever you have the styles) into your entrypoint
install `style-loader` and `css-loader` and in webpack config add rule to modules
`{test: /\.css$/, use: ['style-loader', 'css-loader']}`
