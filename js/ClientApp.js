var React = require('react')
var ReactDOM = require('react-dom')

var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great!', color: 'papayawhip'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'I love props!', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
