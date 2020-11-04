//const React = require('react');
//const ReactDOMServer = require('react-dom/server');


/*const App = require('../App').default;
const store = require('../store/store').default;
const StaticRouter = require('react-router');
const Page = require('../Page');*/
import App from '../App';
import store from '../store/store';
import {StaticRouter} from 'react-router';
import Page from '../Page';
import React from 'react';
import { renderToString } from 'react-dom/server';

const appComponent = React.createElement(App, {
  router: StaticRouter, store: store
}, React.createElement(StaticRouter, null, React.createElement(Page, null, null)));

module.exports = function render(initialState) {
  // Model the initial state  
  let content = renderToString(appComponent);
  return {
    content,
    store
  };
};

// const html = (html) =>  `
//   <head>
//     <base href="/" />
//     <meta charset="utf-8">
//     <title>netflixroulette</title>
//     <style>
//     a {
//       text-decoration: none;
//       color: black;
//     }
//     </style>
//   </head>

//   <body style='margin: 0; padding: 0;'>
//     <noscript>You need to enable JavaScript to run this app.</noscript>
//     <div id="root">${html}</div>
//   </body>
// `;



// const serverRenderer = () => {
//   return (req, res) => {
//     const htmlString = ReactDOMServer.renderToString(
//     appComponent);
//     res.send(html(htmlString));
//   }
// }

// const app = express();

// if(process.env.NODE_ENV === 'development'){
//   const webpack = require('webpack');
//   const webpackDM = require('webpack-dev-moddleware');
//   const webpackHM = require('webpack-hot-middleware');
//   const webpackHSM = require('webpack-hot-server-middleware');
//   const webpackConfig = require('../../webpack.server');
//   const compiler = webpack(webpackConfig);

//   app.use(webpackDM(compiler));
//   app.use(webpackHM(compiler.compilers.find(c => c.name === 'client')));
//   app.use(webpackHSM(compiler));
// }
// else{
//   app.use(express.static('dist'));
//   app.use(serverRenderer());
// }

// module.exports = app;