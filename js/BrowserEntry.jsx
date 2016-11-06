const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./ClientApp')
<<<<<<< HEAD
const ReactRouter = require('react-router')
const { match } = ReactRouter

match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry require.ensure error', error)
=======
const { match } = require('react-router')

match({ history: App.History, routes: App.Routes }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry error', error)
>>>>>>> 680d293c838d9054a99abf6850e58b6702070787
  }
  ReactDOM.render(<App {...renderProps} />, document.getElementById('app'))
})
