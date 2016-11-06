const React = require('react')
<<<<<<< HEAD
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, browserHistory } = ReactRouter
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')// shim for node.js
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}
=======
const { Router, browserHistory } = require('react-router')
const Layout = require('./Layout')
const { store } = require('./Store')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}
>>>>>>> 680d293c838d9054a99abf6850e58b6702070787

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
<<<<<<< HEAD
        <Router routes={rootRoute} history={browserHistory} />
=======
        <Router history={browserHistory} routes={rootRoute} />
>>>>>>> 680d293c838d9054a99abf6850e58b6702070787
      </Provider>
    )
  }
})

<<<<<<< HEAD
// App.Routes = myRoutes
=======
>>>>>>> 680d293c838d9054a99abf6850e58b6702070787
App.Routes = rootRoute
App.History = browserHistory

module.exports = App
