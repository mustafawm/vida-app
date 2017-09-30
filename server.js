/* eslint no-console: 0 */
require('dotenv').config();
require('babel-register');

const fs = require('fs');
const _ = require('lodash');
const React = require('react');
const express = require('express');
const compression = require('compression');
const ReactRouter = require('react-router-dom'); // eslint-disable-line
const ReactDOMServer = require('react-dom/server');

const App = require('./js/App').default;

const port = process.env.SERVER_PORT;
const StaticRouter = ReactRouter.StaticRouter; // replace BrowserRouter (works in NodeJS)
const baseTemplate = fs.readFileSync('./index.html'); // CAUTION: readfileSync!
const template = _.template(baseTemplate); // template is a func, will pass it <%= body %>

const server = express();

server.use(compression());
server.use('/public', express.static('./public'));

server.use((req, res) => {
  console.info(req.url);

  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement( // cannot use JSX here, so createElement
      StaticRouter, // the StaticRouter to wrap the app
      { location: req.url, context }, // pass location (url requested by user) to the router
      React.createElement(App) // render App inside the router
    )
  );

  // context is used in case of redirection
  if (context.url) { // if ReactRouter has modified the context.url (to redirect)
    res.redirect(context.url); // then, do it
  }
  // otherwise, continue
  res.write(template({body}));
  res.end();
});

console.log(`Listening on http://localhost:${port}`);
server.listen(port);

