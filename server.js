const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const app = express();
const port =  process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));


app.use(express.urlencoded({extended:true}))

app.use(express.json())

//set up database and create middlewear

//db holds user input of indgredients and 


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


