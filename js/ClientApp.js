var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render () {
		return (
      div(null,
      	h1({style: {color: this.props.color}}, this.props.title)
      )
		)
	}
})

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