const React = require('react')
const { Router, browserHistory } = require('react-router')
const Layout = require('./Layout')
const { store } = require('./Store')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
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

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
